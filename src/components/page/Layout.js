import React from 'react'

// Component
import Navbar from '../project/Navbar.js'
import Footer from '../project/Footer.js'

// Action
import RecordAction from './../../actions/RecordAction.js'

module.exports = React.createClass({
  componentDidMount: function() {

    // const request = window.indexedDB.open('EscapeGoat_DB', 105)
    //
    // request.onupgradeneeded = function(ev) {
    //    const db = ev.target.result
    //      ev.target.transaction.onerror = function(err) { console.log("XXX0", err) }
    //
    //      if (db.objectStoreNames.contains('record')) {
    //          db.deleteObjectStore('record')
    //      }
    //
    //      var store = db.createObjectStore('record', {keyPath:'timeStamp'})
    //      console.log("XXX1", store);
    //  };
    //
    //  request.onsuccess = function(ev) {
    //    const db = ev.target.result
    //    const tx = db.transaction(["record"],"readwrite")
    //      const store = tx.objectStore("record")
    //      // keyPathに対して検索をかける範囲を取得
    //      const range = IDBKeyRange.lowerBound(0)
    //      // その範囲を走査するカーソルリクエストを生成
    //      const cursorRequest = store.openCursor(range)
    //      // カーソルリクエストが成功したら...
    //      cursorRequest.onsuccess = function(e) {
    //          const result = e.target.result
    //          // 注）走査すべきObjectがこれ以上無い場合
    //          //     result == null となります！
    //          if (!!result == false) return
    //          // ここにvalueがくる！
    //         //  console.log(result.value)
    //
    //          RecordAction.create(result.value.item)
    //          // カーソルを一個ずらす
    //          result.continue()
    //      }
    //      // カーソルリクエストが失敗したら...
    //      cursorRequest.onerror = function(err) {
    //          console.log("XXX3", err)
    //      }
    //  };
  },

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="col-sm-12">
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})
