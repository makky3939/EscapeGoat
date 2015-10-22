import { EventEmitter} from 'events'
import assign from 'object-assign'

// Dispatcher
import AppDispatcher from './../dispatcher/AppDispatcher.js'

// Constants
import RecordConstants from './../constants/RecordConstants.js'

const CHANGE_EVENT = 'change'
const REQUIRED_FLAG = 'required'
const OPTIONAL_FLAG = 'optional'
let _records = {}


class RecordUtility {
  constructor(items, type) {
    this.items = {}

    for (var index of Object.keys(items)) {
      if (items[index].type === type) {
        this.items[index] = items[index]
      }
    }
  }

  division(index, division) {
    if (this.items[index].division === division) {
      return true
    } else if (this.items[index].division === undefined) {
      this.items[index].division = division
      return true
    } else {
      return false
    }
  }

  find(id) {
    console.log(this.items[id])
    return this.items[id]
  }

  get ids() {
    return Object.keys(this.items)
  }

  credit(records) {
    let sum = 0.0
    const exams = ["A+", "A", "B", "C", "P", ""]
    records.forEach(function(element, index) {
      if (exams.indexOf(element.score) >= 0 ) {
        sum = sum + Number(element.unit)
      }
    })
    return sum
  }

  finalyze() {
    let required = []
    let optional = []
    let free = []

    for (var index of this.ids) {
      let record = this.find(index)
      switch(record.division) {
        case 'required':
          required.push(record)
          break
        case 'optional':
          optional.push(record)
          break
        default:
          free.push(record)
          break
      }
    }

    return {
      required: {
        records: required,
        credit: this.credit(required)
      },
      optional: {
        records: optional,
        credit: this.credit(optional)
      },
      free: {
        records: free,
        credit: this.credit(free)
      }
    }
  }
}

/**
 * Create a Record item.
 * @param {string} text The content of the Record
 */
function create(record) {
  const id = Object.keys(_records).length
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
  }
}

/**
 * Delete Record items.
 */
function destroyAll() {
  _records = []
}

function credit(records) {
  let sum = 0.0
  const exams = ["A+", "A", "B", "C", "P", ""]
  records.forEach(function(element, index) {
    if (exams.indexOf(element.score) >= 0 ) {
      sum = sum + Number(element.unit)
    }
  })
  return sum
}

const RecordStore = assign({}, EventEmitter.prototype, {
  count: function() {
    return Object.keys(_records).length
  },

  getAll: function() {
    return _records
  },

  basic: function() {
    const requiredSubjectCodes = [
      '1120102', '1120202', '1120302', '1120402',
      '1320013', '1320023', '1320033', '1320043'
    ]

    const record = new RecordUtility(_records, 'C')

    // required
    for (var index of record.ids) {
      if (requiredSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        record.division(index, REQUIRED_FLAG)
      }
      if (record.find(index).subjectCode.match(/^22|^21|^1A|^1B|^1C/)) {
        record.division(index, REQUIRED_FLAG)
      }
    }

    // optional
    for (var index of record.ids) {
      if (record.find(index).subjectCode.match(/^3[1,2,3,4,5,6,7]/)) {
        record.division(index, OPTIONAL_FLAG)
      }
    }

    return record.finalyze()
  },

  specialBasic: function() {
    const record = new RecordUtility(_records, 'B')

    let mySize = 0
    const requiredSubjectCodes = [
      'GE10301',
      'GE10413', 'GE10423',
      'GE10612', 'GE10622', 'GE10712', 'GE10722',
      'GE10801',
      'GE10911',
      'GE10201',
      'GE10101',
      'GE11512', 'GE11522', 'GE11532', 'GE11542',
      'GE11012', 'GE11022', 'GE11112', 'GE11122', 'GE11212', 'GE11222'
    ]

    // required
    for (var index of record.ids) {
      if (requiredSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        record.division(index, REQUIRED_FLAG)
      }
    }

    // optional
    for (var index of record.ids) {
      if (record.find(index).subjectCode.match(/GE2|GA/) && mySize < 32 ) {
        record.division(index, OPTIONAL_FLAG)
        mySize += record.credit([record.find(index)])
      }
    }

    return record.finalyze()
  },

  special: function() {
    const record = new RecordUtility(_records, 'A')

    const requiredSubjectCodes = [
      'GE70103', 'GE60103', 'GE80103',
      'GE50812', 'GE50822', 'GE50832',
      'GE50712', 'GE50722', 'GE50732',
      'GE51018', 'GE51028', 'GE51038', 'GE51048'
    ]

    const majorSubjectCodes = [
      'GE70103', 'GE60103', 'GE80103'
    ]

    let myMajorPattern = /GE8/
    let otherMajorPattern = /GE[4,6,7]/
    let myMajorSize = 0
    let otherMajorSize = 0

    // major
    for (var index of record.ids) {
      if (majorSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        switch (majorSubjectCodes.indexOf(record.find(index).subjectCode)) {
          case 0:
            myMajorPattern = /GE7/
            otherMajorPattern = /GE[4,6,8]/
            break
          case 1:
            myMajorPattern = /GE6/
            otherMajorPattern = /GE[4,7,8]/
            break
        }
      }
    }

    // required
    for (var index of record.ids) {
      if (requiredSubjectCodes.indexOf(record.find(index).subjectCode) >= 0 ) {
        record.division(index, REQUIRED_FLAG)
      }
    }

    // optional
    for (var index of record.ids) {
      if (record.find(index).subjectCode.match(myMajorPattern) && myMajorSize < 20 ) {
        if (record.division(index, OPTIONAL_FLAG)) {
          myMajorSize += record.credit([record.find(index)])
        }
      }
      if (record.find(index).subjectCode.match(otherMajorPattern) && otherMajorSize < 8 ) {
        if (record.division(index, OPTIONAL_FLAG)) {
          otherMajorSize += record.credit([record.find(index)])
        }
      }
    }

    return record.finalyze()
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    let actionType = payload.actionType
    let record = payload.record

    switch(actionType) {
      case RecordConstants.RECORD_CREATE:
        // TODO::validation
        // const request = window.indexedDB.open('EscapeGoat_DB', 105)
        // request.onsuccess = function(ev) {
        //   const db = ev.target.result
        //   const tx = db.transaction(["record"],"readwrite");
        //   const store = tx.objectStore("record");
        //   const id = Math.floor(Math.random()* 1000000)
        //   const req = store.put({item: record, timeStamp: id});
        //   tx.oncomplete = function() { console.log('DB', 'OK') };
        //   tx.onerror = function(err) { console.log("xxx2", err); };
        // }
        create(record)
        RecordStore.emitChange()
        break

      case RecordConstants.RECORD_DESTROY_ALL:
        destroyAll()
        RecordStore.emitChange()
        break
    }

    return true
  })

})

module.exports = RecordStore
