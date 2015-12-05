var React = require('react');

// Action
var RecordAction = require('./../../../actions/RecordAction.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      data_uri: null,
    };
  },

  handleSubmit: function(e) {
    e.preventDefault();
  },

  handleFile: function(e) {
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
      RecordAction.destroyAll();

      var csv = upload.target.result.replace(/"/g, "").replace(/, /g, "").split("\n")[1].split("\r");

      csv.map(function(item) {
        var i = item.split(",");
        if (i[1] != "") {
          RecordAction.create({
            type: i[0].split(":")[0].replace(/[0-9]/g, ""),
            year: i[1],
            term: i[2],
            subjectCode: i[3],
            subjectName: i[4],
            teacher: i[5],
            score: i[6],
            unit: i[7]
          });
        }
      });

    };

    reader.readAsText(file);
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <input type="file" className="form-control" onChange={ this.handleFile } />
      </form>
    );
  }
});
