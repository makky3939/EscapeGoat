import { EventEmitter} from 'events'
import assign from 'object-assign'

// Dispatcher
import AppDispatcher from './../dispatcher/AppDispatcher.js'

// Constants
import RecordConstants from './../constants/RecordConstants.js'

const CHANGE_EVENT = 'change'
let _records = {}


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
  credit: function(records) {
    let sum = 0.0
    const exams = ["A+", "A", "B", "C", "P", ""]
    records.forEach(function(element, index) {
      if (exams.indexOf(element.score) >= 0 ) {
        sum = sum + Number(element.unit)
      }
    })
    return sum
  },

  count: function() {
    return Object.keys(_records).length
  },

  getAll: function() {
    return _records
  },

  basic: function() {
    const records = []
    let required = []
    let optional = []
    let free     = []

    Object.keys(_records).map(function(index){if (_records[index].type === 'C') { records.push(_records[index]) }})

    // required
    records.forEach(function(element, index) {
      const subjectCodes = [
        '1120102', '1120202', '1120302', '1120402',
        '1320013', '1320023', '1320033', '1320043'
      ]
      if (subjectCodes.indexOf(element.subjectCode) >= 0 ) {
        element.major = 'required'
      }
      if (element.subjectCode.match(/^22|^21|^1A|^1B/)) {
        element.major = 'required'
      }

    })

    // optional
    records.forEach(function(element, index) {
      if (element.subjectCode.match(/^31|^34/)) {
        element.major = 'optional'
      }
    })

    records.forEach(function(element, index) {
      switch(element.major) {
        case 'required':
          required.push(element)
          break
        case 'optional':
          optional.push(element)
          break
        default:
          free.push(element)
          break
      }
    })

    return {
      required: { records: required, credit: this.credit(required) },
      optional: { records: optional, credit: this.credit(optional) },
      free: { records: free, credit: this.credit(free) }
    }
  },

  specialBasic: function() {
    const records = []
    let mySize = 0
    let required = []
    let optional = []
    let free     = []

    Object.keys(_records).map(function(index){if (_records[index].type === 'B') { records.push(_records[index]) }})

    // required
    records.forEach(function(element, index) {
      const subjectCodes = [
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
      if (subjectCodes.indexOf(element.subjectCode) >= 0 ) {
        if (element.major == undefined) {
          element.major = 'required'
        }
      }
    })

    // optional
    records.forEach(function(element, index) {
      if (element.major != 'required') {
        if (element.subjectCode.match(/GE2|GA/) && mySize < 32) {
          mySize += credit([element])
          element.major = 'optional'
        }
      }
    })

    records.forEach(function(element, index) {
      switch(element.major) {
        case 'required':
          required.push(element)
          break
        case 'optional':
          optional.push(element)
          break
        default:
          free.push(element)
          break
      }
    })

    return {
      required: { records: required, credit: this.credit(required) },
      optional: { records: optional, credit: this.credit(optional) },
      free: { records: free, credit: this.credit(free) }
    }
  },

  special: function() {
    const records = []
    let myMajorSize = 0
    let otherMajorSize = 0

    let required = []
    let optional = []
    let free     = []

    let myMajorPattern = /GE8/
    let otherMajorPattern = /GE[4,6,7]/

    Object.keys(_records).map(function(index){if (_records[index].type === 'A') { records.push(_records[index]) }})

    // required
    records.forEach(function(element, index) {
      const subjectCodes = [
        'GE70103', 'GE60103', 'GE80103',
        'GE50812', 'GE50822', 'GE50832',
        'GE50712', 'GE50722', 'GE50732',
        'GE51018', 'GE51028', 'GE51038', 'GE51048'
      ]
      if (subjectCodes.indexOf(element.subjectCode) >= 0 ) {
        if (element.major == undefined) {
          element.major = 'required'
        }
      }
    })

    // major
    records.forEach(function(element, index) {
      const subjectCodes = [
        'GE70103', 'GE60103', 'GE80103'
      ]
      if (subjectCodes.indexOf(element.subjectCode) >= 0 ) {
        switch (subjectCodes.indexOf(element.subjectCode)) {
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
    })

    // optional
    records.forEach(function(element, index) {
      if (element.major != 'required') {
        if (element.subjectCode.match(myMajorPattern) && myMajorSize < 20) {
          myMajorSize = myMajorSize + credit([element])
          element.major = 'optional'
        }
        if (element.subjectCode.match(otherMajorPattern) && otherMajorSize < 8) {
          otherMajorSize = otherMajorSize + credit([element])
          element.major = 'optional'
        }
      }
    })

    records.forEach(function(element, index) {
      switch(element.major) {
        case 'required':
          required.push(element)
          break
        case 'optional':
          optional.push(element)
          break
        default:
          free.push(element)
          break
      }
    })

    return {
      required: { records: required, credit: this.credit(required) },
      optional: { records: optional, credit: this.credit(optional) },
      free: { records: free, credit: this.credit(free) }
    }
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
