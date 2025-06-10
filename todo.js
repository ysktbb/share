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
      c(checkStatus);
      if (checkStatus.todo1_0 != "") {
        document.getElementById("todo1_0").value = checkStatus.todo1_0;
        document.getElementById("task1_0").classList.add("completed");
        document.getElementById("time1_0").innerText = checkStatus.todo1_0;
      }
      if (checkStatus.todo1_1 != "") {
        document.getElementById("todo1_1").value = checkStatus.todo1_1;
        document.getElementById("task1_1").classList.add("completed");
        document.getElementById("time1_1").innerText = checkStatus.todo1_1;
      }
      if (checkStatus.todo1_2 != "") {
        document.getElementById("todo1_2").value = checkStatus.todo1_2;
        document.getElementById("task1_2").classList.add("completed");
        document.getElementById("time1_2").innerText = checkStatus.todo1_2;
      }
      if (checkStatus.todo1_3 != "") {
        document.getElementById("todo1_3").value = checkStatus.todo1_3;
        document.getElementById("task1_3").classList.add("completed");
        document.getElementById("time1_3").innerText = checkStatus.todo1_3;
      }
      if (checkStatus.todo1_4 != "") {
        document.getElementById("todo1_4").value = checkStatus.todo1_4;
        document.getElementById("task1_4").classList.add("completed");
        document.getElementById("time1_4").innerText = checkStatus.todo1_4;
      }                                 
      if (checkStatus.todo2_0 != "") {
        document.getElementById("todo2_0").value = checkStatus.todo2_0;
        document.getElementById("task2_0").classList.add("completed");
        document.getElementById("time2_0").innerText = checkStatus.todo2_0;
      }
      if (checkStatus.todo3_0 != "") {
        document.getElementById("todo3_0").value = checkStatus.todo3_0;
        document.getElementById("task3_0").classList.add("completed");
        document.getElementById("time3_0").innerText = checkStatus.todo3_0;
      }
      if (checkStatus.todo3_1 != "") {
        document.getElementById("todo3_1").value = checkStatus.todo3_1;
        document.getElementById("task3_1").classList.add("completed");
        document.getElementById("time3_1").innerText = checkStatus.todo3_1;
      }
      if (checkStatus.todo3_2 != "") {
        document.getElementById("todo3_2").value = checkStatus.todo3_2;
        document.getElementById("task3_2").classList.add("completed");
        document.getElementById("time3_2").innerText = checkStatus.todo3_2;
      }
      if (checkStatus.todo3_3 != "") {
        document.getElementById("todo3_3").value = checkStatus.todo3_3;
        document.getElementById("task3_3").classList.add("completed");
        document.getElementById("time3_3").innerText = checkStatus.todo3_3;
      }
    } else {
      // 同じではない、チェック状態をクリア
      localStorage.removeItem(checkStatusKey);
      // 本日を設定
      localStorage.setItem(todayKey, ymd);
    }
  }
};

function changeStatus(id) {
  if (document.getElementById("task" + id).classList.contains("completed")) {
    document.getElementById("task" + id).classList.remove("completed");
    document.getElementById("todo" + id).value = "";
    document.getElementById("time" + id).innerText = "";
  } else {
    document.getElementById("task" + id).classList.add("completed");
    document.getElementById("todo" + id).value = ("00" + new Date().getHours()).slice(-2) + ":" + ("00" + new Date().getMinutes()).slice(-2);
    document.getElementById("time" + id).innerText = ("00" + new Date().getHours()).slice(-2) + ":" + ("00" + new Date().getMinutes()).slice(-2);
  }
  setLocalStorage();
}

function setLocalStorage() {
c(document.getElementById("todo1_0").value);
  let data = {
    "todo1_0": document.getElementById("todo1_0").value,
    "todo1_1": document.getElementById("todo1_1").value,
    "todo1_2": document.getElementById("todo1_2").value,
    "todo1_3": document.getElementById("todo1_3").value,
    "todo1_4": document.getElementById("todo1_4").value,
    "todo2_0": document.getElementById("todo2_0").value,
    "todo3_0": document.getElementById("todo3_0").value,
    "todo3_1": document.getElementById("todo3_1").value,
    "todo3_2": document.getElementById("todo3_2").value,
    "todo3_3": document.getElementById("todo3_3").value
  };
  localStorage.setItem(checkStatusKey, JSON.stringify(data));
}

function c(msg) {
	console.log(msg);
}
