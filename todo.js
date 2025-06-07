// 当日を保持するキー
let todayKey = "today";
// チェック状態を保持するキー
let checkStatusKey = "checkStatus";

window.onload = function() {
  if (localStorage) {
    // 本日日付（yyyymmdd）
    let date = new Date();
    let ymd = date.getFullYear() + ("00" + (date.getMonth() + 1)).slice(-2) + ("00" + date.getDate()).slice(-2);
    
    // 本日 = 当日 の判定
    if (ymd == localStorage.getItem(todayKey)) {
      // 同じ、チェック状態を取得
      let checkStatus = JSON.parse(localStorage.getItem(checkStatusKey));
      document.getElementById("todo1_0").checked = checkStatus.todo1_0;
      document.getElementById("todo1_1").checked = checkStatus.todo1_1;
      document.getElementById("todo1_2").checked = checkStatus.todo1_2;
      document.getElementById("todo1_3").checked = checkStatus.todo1_3;
      document.getElementById("todo1_4").checked = checkStatus.todo1_4;
      document.getElementById("todo2_0").checked = checkStatus.todo2_0;
      document.getElementById("todo3_0").checked = checkStatus.todo3_0;
      document.getElementById("todo3_1").checked = checkStatus.todo3_1;
      document.getElementById("todo3_2").checked = checkStatus.todo3_2;
      document.getElementById("todo3_3").checked = checkStatus.todo3_3;
    } else {
      // 同じではない、チェック状態をクリア
      localStorage.removeItem(checkStatusKey);
      // 本日を設定
      localStorage.setItem(todayKey, ymd);
    }
  }
};

function setLocalStorage() {
  let data = {
    "todo1_0": document.getElementById("todo1_0").checked,
    "todo1_1": document.getElementById("todo1_1").checked,
    "todo1_2": document.getElementById("todo1_2").checked,
    "todo1_3": document.getElementById("todo1_3").checked,
    "todo1_4": document.getElementById("todo1_4").checked,
    "todo2_0": document.getElementById("todo2_0").checked,
    "todo3_0": document.getElementById("todo3_0").checked,
    "todo3_1": document.getElementById("todo3_1").checked,
    "todo3_2": document.getElementById("todo3_2").checked,
    "todo3_3": document.getElementById("todo3_3").checked
  };
  localStorage.setItem(checkStatusKey, JSON.stringify(data));
}
