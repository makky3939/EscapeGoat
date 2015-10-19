import { EventEmitter} from 'events'
import assign from 'object-assign'

import TodoConstants from './../constants/RecordConstants.js'
import AppDispatcher from './../dispatcher/AppDispatcher.js'
import RecordConstants from './../constants/RecordConstants.js'

const CHANGE_EVENT = 'change'

let _records = {}

/**
 * Create a Record item.
 * @param {string} text The content of the Record
 */
function create(record) {
  const id = Math.floor(Math.random()* 1000000)
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

const RecordStore = assign({}, EventEmitter.prototype, {
  getAll: function() {
    return _records
  },

  foundation: function() {
    // console.log(_records)
    let records = []

    return records
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
          mySize += Number(element.unit)
          console.log(mySize)
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
      required: required,
      optional: optional,
      free: free
    }
  },

  special: function() {
    const records = []
    let myMajorSize = 0
    let otherMajorSize = 0

    let required = []
    let optional = []
    let free     = []

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

    // optional
    records.forEach(function(element, index) {
      if (element.major != 'required') {
        if (element.subjectCode.match(/GE7/) && myMajorSize < 20) {
          myMajorSize += Number(element.unit)
          element.major = 'optional'
        }
        if (element.subjectCode.match(/GE[4,6,8]/) && otherMajorSize < 8) {
          otherMajorSize += Number(element.unit)
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
      required: required,
      optional: optional,
      free: free
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
        //   // このトランザクション内でアクティブなObjectを生成する
        //   const store = tx.objectStore("record");
        //   // putするリクエストを生成
        //   const id = Math.floor(Math.random()* 1000000)
        //   const req = store.put({item: record, timeStamp: id});
        //   // 「putするリクエスト」が成功したら...
        //   tx.oncomplete = function() { console.log('DB', 'OK') };
        //   // 「putするリクエスト」が失敗したら...
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
