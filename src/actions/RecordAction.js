var AppDispatcher = require('./../dispatcher/AppDispatcher')
var RecordConstants = require('./../constants/RecordConstants')

var RecordActions = {
  create: function(record, internal) {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_CREATE,
      record: record,
      internal: internal
    })
  },
  destroyAll: function() {
    AppDispatcher.dispatch({
      actionType: RecordConstants.RECORD_DESTROY_ALL
    })
  }
};

module.exports = RecordActions
