import React from 'react'

// Component
import Navbar from '../project/Navbar.js'

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

          <footer className="col-xs-12">
            <hr />
            <div className="text-xs-center">
              <a href="#top">
                <i className="fa fa-angle-double-up fa-fw fa-lg" />
              </a>
              <p>
                <ol className="list-inline">
                  <li>
                    <a href="/">Top</a>
                  </li>
                  <li>
                    <a href="https://github.com/makky3939/EscapeGoat" target="_blank">Github Project</a>
                  </li>
                  <li>
                    <a href="https://github.com/makky3939/EscapeGoat/issues" target="_blank">Issues</a>
                  </li>
                  <li>
                    <a href="http://www.makky.io" target="_blank">www.makky.io</a>
                  </li>
                </ol>
                <span>&copy; makky.io All Rights Reserved.<br /></span>
                <span>EscapeGoat v0.9.0</span>
              </p>
            </div>
          </footer>
        </div>
      </div>
    )
  }
})
