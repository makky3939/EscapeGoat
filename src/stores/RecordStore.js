import TodoConstants from './../constants/RecordConstants.js'
import AppDispatcher from './../dispatcher/AppDispatcher.js'

import { EventEmitter} from 'events'
import assign from 'object-assign'

const CHANGE_EVENT = 'change'

let _records = {}

/**
 * Create a Record item.
 * @param {string} text The content of the Record
 */
function create(text) {
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _records[id] = {
    id: id,
    complete: false,
    text: text
  }
}

/**
 * Delete a Record item.
 * @param {string} id
 */
function destroy(id) {
  delete _records[id]
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
    let action = payload.action
    let text

    switch(action.actionType) {
      case RecordConstants.RECORD_CREATE:
        text = action.text.trim()
        if (text !== '') {
          create(text)
          RecordStore.emitChange()
        }
        break

      case RecordConstants.RECORD_DESTROY:
        destroy(action.id)
        RecordStore.emitChange()
        break
    }

    return true
  })

})

module.exports = RecordStore
