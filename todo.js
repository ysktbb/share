// 当日を保持するキー
const TODAY_KEY = "today";
// チェック状態を保持するキー
const CHECK_STATUS_KEY = "checkStatus";
// 完了済み
const COMPLETED = "済";
// 不要
const NOTHING = "無";
// TODO一覧
let todoList = ["1_0", "1_1", "1_2", "1_3", "1_4", "2_0", "3_0", "3_1", "3_2", "3_3"];

window.onload = function() {
  if (localStorage) {
    // 本日日付（yyyymmdd）
    let date = new Date();
    let ymd = date.getFullYear() + ("00" + (date.getMonth() + 1)).slice(-2) + ("00" + date.getDate()).slice(-2);
    
    // 本日 = 当日 の判定
    if (ymd == localStorage.getItem(TODAY_KEY)) {
      // 同じ、チェック状態を取得
      let checkStatus = JSON.parse(localStorage.getItem(CHECK_STATUS_KEY));
      for (let todo of todoList) {
        if (checkStatus[todo][0] != "") {
          let trObj = document.getElementById(todo);
          if (checkStatus[todo][0] == COMPLETED) {
            trObj.children[0].innerHTML = "<div class='done'>" + checkStatus[todo][0] + "</div>";
          } else {
            trObj.children[0].innerHTML = "<div>" + checkStatus[todo][0] + "</div>";
          }
          trObj.children[1].classList.add("completed");
          trObj.children[3].innerText = checkStatus[todo][1];
        }
      }
    } else {
      // 同じではない、チェック状態をクリア
      localStorage.removeItem(CHECK_STATUS_KEY);
      // 本日を設定
      localStorage.setItem(TODAY_KEY, ymd);
    }
  }
};

function changeStatus(obj) {
  let trObj = obj.parentNode;
  if (obj.classList.contains("task")) {
    // タスクをクリック
    if (trObj.children[0].innerText == COMPLETED) {
      // 完了済み ⇒ 未完了
      trObj.children[0].innerText = "";
      trObj.children[1].classList.remove("completed");
      trObj.children[3].innerText = "";
    } else if (trObj.children[0].innerText == NOTHING) {
      // 何もしない
    } else {
      // 未完了 ⇒ 完了済み
      trObj.children[0].innerHTML = "<div class='done'>" + COMPLETED + "</div>";
      trObj.children[1].classList.add("completed");
      trObj.children[3].innerText = ("00" + new Date().getHours()).slice(-2) + ":" + ("00" + new Date().getMinutes()).slice(-2);
    }
  } else if (obj.classList.contains("none")) {
    // 不要をクリック
    if (trObj.children[0].innerText == COMPLETED) {
      // 何もしない
    } else if (trObj.children[0].innerText == NOTHING) {
      // 不要 ⇒ 未完了
      trObj.children[0].innerText = "";
      trObj.children[1].classList.remove("completed");
      trObj.children[3].innerText = "";
    } else {
      // 未完了 ⇒ 不要
      trObj.children[0].innerHTML = "<div>" + NOTHING + "</div>";
      trObj.children[1].classList.add("completed");
      trObj.children[3].innerText = ("00" + new Date().getHours()).slice(-2) + ":" + ("00" + new Date().getMinutes()).slice(-2);
    }
  }
  setLocalStorage();
}

function setLocalStorage() {
  let data = {
    "1_0": [document.getElementById("1_0").children[0].innerText, document.getElementById("1_0").children[3].innerText],
    "1_1": [document.getElementById("1_1").children[0].innerText, document.getElementById("1_1").children[3].innerText],
    "1_2": [document.getElementById("1_2").children[0].innerText, document.getElementById("1_2").children[3].innerText],
    "1_3": [document.getElementById("1_3").children[0].innerText, document.getElementById("1_3").children[3].innerText],
    "1_4": [document.getElementById("1_4").children[0].innerText, document.getElementById("1_4").children[3].innerText],
    "2_0": [document.getElementById("2_0").children[0].innerText, document.getElementById("2_0").children[3].innerText],
    "3_0": [document.getElementById("3_0").children[0].innerText, document.getElementById("3_0").children[3].innerText],
    "3_1": [document.getElementById("3_1").children[0].innerText, document.getElementById("3_1").children[3].innerText],
    "3_2": [document.getElementById("3_2").children[0].innerText, document.getElementById("3_2").children[3].innerText],
    "3_3": [document.getElementById("3_3").children[0].innerText, document.getElementById("3_3").children[3].innerText],
  };
  localStorage.setItem(CHECK_STATUS_KEY, JSON.stringify(data));
}

function c(msg) {
	console.log(msg);
}
