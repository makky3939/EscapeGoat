var events = require('events');
var EventEmitter = events.EventEmitter;
var assign = require('object-assign');

// Dispatcher
var AppDispatcher = require('./../dispatcher/AppDispatcher.js');

// Constants
var RecordConstants = require('./../constants/RecordConstants.js');

// Utils
var RecordUtility = require('./../utils/RecordUtility.js');

var CHANGE_EVENT = 'change';
var REQUIRED_FLAG = 'required';
var OPTIONAL_FLAG = 'optional';
var _records = {};

function create(record, internal) {
  var id = Object.keys(_records).length;

  if (record.type != '') {
    _records[id] = {
      id: id,
      type: record.type,
      year: record.year,
      term: record.term,
      subjectCode: record.subjectCode,
      subjectName: record.subjectName,
      teacher: record.teacher,
      score: record.score,
      unit: record.unit
    };

    if (!internal) {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem(id, JSON.stringify(_records[id]));
      }
    }
  }
}

/**
 * Devare Record items.
 */
function destroyAll() {
  _records = [];
}

function credit(records) {
  var sum = 0.0;
  var exams = ["A+", "A", "B", "C", "P", ""];
  records.forEach(function(element, index) {
    if (exams.indexOf(element.score) >= 0 ) {
      sum = sum + Number(element.unit);
    }
  });
  return sum;
}

var RecordStore = assign({}, EventEmitter.prototype, {
  count: function() {
    return Object.keys(_records).length;
  },

  weightedAverage: function() {
    var exams = ["A+", "A", "B", "C", "D"];
    var score = {
      ap: 0.0,
      a: 0.0,
      b: 0.0,
      c: 0.0,
      d: 0.0
    };

    for (var i = 0; i < Object.keys(_records).length; i++) {
      var index = Object.keys(_records)[i];
      var record = _records[index];
      switch (exams.indexOf(record.score)) {
        case 0:
          score.ap += Number(record.unit);
          break;
        case 1:
          score.a += Number(record.unit);
          break;
        case 2:
          score.b += Number(record.unit);
          break;
        case 3:
          score.c += Number(record.unit);
          break;
        case 4:
          score.d += Number(record.unit);
          break;
      }
    }

    return (
      // (score.ap * 4 + score.a * 3 + score.b * 2 + score.c * 1)
      (score.ap * 4.3 + score.a * 4 + score.b * 3 + score.c * 2)
      // GP has been revised (https://www.tsukuba.ac.jp/education/gpa.html)
      /
      (score.ap + score.a + score.b + score.c + score.d)
    ).toFixed(2);
  },

  scores: function() {
    var exams = ["A+", "A", "B", "C", "D", "P", "F"];
    var score = {
      ap: 0.0,
      a: 0.0,
      b: 0.0,
      c: 0.0,
      d: 0.0,
      p: 0.0,
      f: 0.0
    };

    for (var i = 0; i < Object.keys(_records).length; i++) {
      var index = Object.keys(_records)[i];
      var record = _records[index];
      switch (exams.indexOf(record.score)) {
        case 0:
          score.ap += Number(record.unit);
          break;
        case 1:
          score.a += Number(record.unit);
          break;
        case 2:
          score.b += Number(record.unit);
          break;
        case 3:
          score.c += Number(record.unit);
          break;
        case 4:
          score.d += Number(record.unit);
          break;
        case 5:
          score.p += Number(record.unit);
          break;
        case 6:
          score.f += Number(record.unit);
          break;
      }
    }

    return [
      score.ap,
      score.a,
      score.b,
      score.c,
      score.d,
      score.p,
      score.f];
  },

  getAll: function() {
    return _records;
  },

  basic: function() {
    var requiredSubjectCodes = [
      '1120102', '1120202', '1120302', '1120402',
      '1320013', '1320023', '1320033', '1320043'
    ];

    var record = new RecordUtility(_records, 'C');

    var generalAll = 0;

    // required
    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (requiredSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        record.division(index, REQUIRED_FLAG);
      }
      if (record.find(index).subjectCode.match(/^22|^21/)) {
        record.division(index, REQUIRED_FLAG);
      }
      if (record.find(index).subjectCode.match(/^1A|^1B|^1C/) && generalAll < 6) {
        if (record.division(index, REQUIRED_FLAG)) {
          generalAll += record.credit([record.find(index)]);
        }
      }
    }

    // optional
    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (record.find(index).subjectCode.match(/^3[1,2,3,4,5,6,7]/)) {
        record.division(index, OPTIONAL_FLAG);
      }
    }

    return record.finalyze();
  },

  specialBasic: function() {
    var record = new RecordUtility(_records, 'B');

    var mySize = 0;
    var requiredSubjectCodes = [
      'GE10301',
      'GE10413', 'GE10423',
      'GE10612', 'GE10622', 'GE10712', 'GE10722',
      'GE10801',
      'GE10911',
      'GE10201',
      'GE10101',
      'GE11512', 'GE11522', 'GE11532', 'GE11542',
      'GE11012', 'GE11022', 'GE11112', 'GE11122', 'GE11212', 'GE11222'
    ];

    // required
    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (requiredSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        record.division(index, REQUIRED_FLAG);
      }
    }

    // optional
    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (record.find(index).subjectCode.match(/GE2|GA/) && mySize < 32 ) {
        record.division(index, OPTIONAL_FLAG);
        mySize += record.credit([record.find(index)]);
      }
    }

    return record.finalyze();
  },

  special: function() {
    var record = new RecordUtility(_records, 'A');

    var requiredSubjectCodes = [
      'GE70103', 'GE60103', 'GE80103',
      'GE50812', 'GE50822', 'GE50832',
      'GE50712', 'GE50722', 'GE50732',
      'GE51018', 'GE51028', 'GE51038', 'GE51048'
    ];

    var majorSubjectCodes = [
      'GE70103', 'GE60103', 'GE80103'
    ];

    var oldmanseminarCodes = ['GE50301', 'GE50401'];

    var myMajorPattern = /GE8/;
    var otherMajorPattern = /GE[4,6,7]/;
    var myMajorSize = 0;
    var otherMajorSize = 0;

    // major
    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (majorSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        switch (majorSubjectCodes.indexOf(record.find(index).subjectCode)) {
          case 0:
            myMajorPattern = /GE7/;
            otherMajorPattern = /GE[4,6,8]/;
            break;
          case 1:
            myMajorPattern = /GE6/;
            otherMajorPattern = /GE[4,7,8]/;
            break;
        }
      }
    }

    // required
    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (requiredSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        record.division(index, REQUIRED_FLAG);
      }
    }

    // optional
    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (oldmanseminarCodes.indexOf(record.find(index).subjectCode) >= 0) {
        if (record.division(index, OPTIONAL_FLAG)) {}
      }

      if (record.find(index).unit == "2.0") {
        if (record.find(index).subjectCode.match(myMajorPattern) && myMajorSize < 20 ) {
          if (record.division(index, OPTIONAL_FLAG)) {
            myMajorSize += record.credit([record.find(index)]);
          }
        }

        if (record.find(index).subjectCode.match(otherMajorPattern) && otherMajorSize < 8 ) {
          if (record.division(index, OPTIONAL_FLAG)) {
            otherMajorSize += record.credit([record.find(index)]);
          }
        }
      }
    }

    for (var i = 0; i < record.ids().length; i++) {
      var index = record.ids()[i];
      if (record.find(index).subjectCode.match(myMajorPattern) && myMajorSize < 20 ) {
        if (record.division(index, OPTIONAL_FLAG)) {
          myMajorSize += record.credit([record.find(index)]);
        }
      }

      if (record.find(index).subjectCode.match(otherMajorPattern) && otherMajorSize < 8 ) {
        if (record.division(index, OPTIONAL_FLAG)) {
          otherMajorSize += record.credit([record.find(index)]);
        }
      }
    }

    return record.finalyze();
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var actionType = payload.actionType;
    var record = payload.record;
    var internal = payload.internal;

    switch(actionType) {
      case RecordConstants.RECORD_CREATE:
        if(record.type === 'F') {
          record.type = 'C';
        }
        create(record, internal);
        RecordStore.emitChange();
        break;

      case RecordConstants.RECORD_DESTROY_ALL:
        destroyAll();
        RecordStore.emitChange();
        break;
    }

    return true;
  })

});

module.exports = RecordStore;
