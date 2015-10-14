import AppDispatcher from './../dispatcher/AppDispatcher'
import RecordConstants from './../constants/RecordConstants'

let RecordActions = {

  /**
   * @param  {string} text
   */
  create: function(text) {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_CREATE,
      text: text
    })
  },

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_UPDATE_TEXT,
      id: id,
      text: text
    })
  },

  /**
   * Toggle whether a single ToDo is complete
   * @param  {object} todo
   */
  toggleComplete: function(todo) {
    let id = todo.id
    let actionType = todo.complete ?
        RecordConstants.RECORD_UNDO_COMPLETE :
        RecordConstants.RECORD_COMPLETE

    AppDispatcher.dispatch({
      actionType: actionType,
      id: id
    })
  },

  /**
   * Mark all ToDos as complete
   */
  toggleCompleteAll: function() {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_TOGGLE_COMPLETE_ALL
    })
  },

  /**
   * @param  {string} id
   */
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_DESTROY,
      id: id
    })
  },

  /**
   */
  destroyAll: function() {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_DESTROY_ALL
    })
  },

  /**
   * Delete all the completed ToDos
   */
  destroyCompleted: function() {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_DESTROY_COMPLETED
    })
  }

};

module.exports = RecordActions
