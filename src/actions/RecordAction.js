import AppDispatcher from './../dispatcher/AppDispatcher'
import RecordConstants from './../constants/RecordConstants'

let RecordActions = {

  /**
   * @param  {object} record
   */
  create: function(record, internal) {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_CREATE,
      record: record,
      internal: internal
    })
  },
  /**
   */
  destroyAll: function() {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_DESTROY_ALL
    })
  }
};

module.exports = RecordActions
