import AppDispatcher from './../dispatcher/AppDispatcher'
import RecordConstants from './../constants/RecordConstants'

let RecordActions = {

  /**
   * @param  {object} record
   */
  create: function(record) {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_CREATE,
      record: record
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
