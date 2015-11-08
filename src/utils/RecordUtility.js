module.exports = class RecordUtility {
  constructor(items, type) {
    this.items = {}

    for (let i=0; i < Object.keys(items).length; i++) {
      let index = Object.keys(items)[i]
      if (items[index].type === type) {
        this.items[index] = items[index]
      }
    }

    return
  }

  division(index, division) {
    if (this.items[index].division === division) {
      return true
    } else if (this.items[index].division === undefined) {
      this.items[index].division = division
      return true
    } else {
      return false
    }
  }

  find(id) {
    return this.items[id]
  }

  get ids() {
    return Object.keys(this.items)
  }

  credit(records) {
    let sum = 0.0
    const exams = ["A+", "A", "B", "C", "P", ""]
    records.forEach(function(element, index) {
      if (exams.indexOf(element.score) >= 0 ) {
        sum = sum + Number(element.unit)
      }
    })
    return sum
  }

  finalyze() {
    let required = []
    let optional = []
    let free = []

    for (var i = 0; i < this.ids.length; i++) {
      let index = this.ids[i]
      let record = this.find(index)

      switch(record.division) {
        case 'required':
          required.push(record)
          break
        case 'optional':
          optional.push(record)
          break
        default:
          free.push(record)
          break
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
    }
  }
}
