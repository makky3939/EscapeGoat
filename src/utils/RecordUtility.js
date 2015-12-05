var RecordUtility = function(items, type) {
  this.items = {};
  for (var i=0; i < Object.keys(items).length; i++) {
    var index = Object.keys(items)[i];
    if (items[index].type === type) {
      this.items[index] = items[index];
    }
  }
};

RecordUtility.prototype.division = function(index, division) {
  if (this.items[index].division === division) {
    return true;
  } else if (this.items[index].division === undefined) {
    this.items[index].division = division;
    return true;
  } else {
    return false;
  }
};

RecordUtility.prototype.find = function(id) {
  return this.items[id];
};

RecordUtility.prototype.ids = function() {
  return Object.keys(this.items);
};

RecordUtility.prototype.credit = function(records) {
  var sum = 0.0;
  var exams = ["A+", "A", "B", "C", "P", ""];
  records.forEach(function(element, index) {
    if (exams.indexOf(element.score) >= 0 ) {
      sum = sum + Number(element.unit);
    }
  });
  return sum;
};

RecordUtility.prototype.finalyze = function() {
  var required = [];
  var optional = [];
  var free = [];

  for (var i = 0; i < this.ids.length; i++) {
    var index = this.ids[i];
    var record = this.find(index);

    switch(record.division) {
      case 'required':
        required.push(record);
        break;
      case 'optional':
        optional.push(record);
        break;
      default:
        free.push(record);
        break;
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
  };
};

module.exports = RecordUtility;
