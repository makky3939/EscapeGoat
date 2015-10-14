import TodoConstants from './../constants/RecordConstants.js'
import AppDispatcher from './../dispatcher/AppDispatcher.js'

import RecordConstants from './../constants/RecordConstants.js'

import { EventEmitter} from 'events'
import assign from 'object-assign'

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

  /**
   * Get the entire collection of Records.
   * @return {object}
   */
  getAll: function() {
    return _records
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
    let record = payload.text

    switch(actionType) {
      case RecordConstants.RECORD_CREATE:
        // TODO::validation
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
