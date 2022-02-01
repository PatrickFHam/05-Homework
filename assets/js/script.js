const clear9aEl = document.getElementById("9a-clear");
const clear10aEl = document.getElementById("10a-clear");
const clear11aEl = document.getElementById("11a-clear");
const clear12nEl = document.getElementById("12n-clear");
const clear1pEl = document.getElementById("1p-clear");
const clear2pEl = document.getElementById("2p-clear");
const clear3pEl = document.getElementById("3p-clear");
const clear4pEl = document.getElementById("4p-clear");
const clear5pEl = document.getElementById("5p-clear");

const save9aEl = document.getElementById("9a-save");
const save10aEl = document.getElementById("10a-save");
const save11aEl = document.getElementById("11a-save");
const save12nEl = document.getElementById("12n-save");
const save1pEl = document.getElementById("1p-save");
const save2pEl = document.getElementById("2p-save");
const save3pEl = document.getElementById("3p-save");
const save4pEl = document.getElementById("4p-save");
const save5pEl = document.getElementById("5p-save");

const activity9aEl = document.getElementById("9a-desc");
const activity10aEl = document.getElementById("10a-desc");
const activity11aEl = document.getElementById("11a-desc");
const activity12nEl = document.getElementById("12n-desc");
const activity1pEl = document.getElementById("1p-desc");
const activity2pEl = document.getElementById("2p-desc");
const activity3pEl = document.getElementById("3p-desc");
const activity4pEl = document.getElementById("4p-desc");
const activity5pEl = document.getElementById("5p-desc");

const clearAllEl = document.getElementById("clrAll");
const setAllEl = document.getElementById("setAll");

const ModalClrHourEl = document.getElementById("confirmClrHour");
const ModalClrAllEl = document.getElementById("confirmClrAll");


save9aEl.onclick = function()  {localStorage.setItem("9a", activity9aEl.value);};
save10aEl.onclick = function() {localStorage.setItem("10a", activity10aEl.value);};
save11aEl.onclick = function() {localStorage.setItem("11a", activity11aEl.value);};
save12nEl.onclick = function() {localStorage.setItem("12n", activity12nEl.value);};
save1pEl.onclick = function()  {localStorage.setItem("1p", activity1pEl.value);};
save2pEl.onclick = function()  {localStorage.setItem("2p", activity2pEl.value);};
save3pEl.onclick = function()  {localStorage.setItem("3p", activity3pEl.value);};
save4pEl.onclick = function()  {localStorage.setItem("4p", activity4pEl.value);};
save5pEl.onclick = function()  {localStorage.setItem("5p", activity5pEl.value);};

clearAllEl.onclick = function() {
  $("#confirmClrAll").modal();
  $("#confirmClrAll").find(".btn-primary").click(function(){
    clearAll();
    $("#confirmClrAll").modal("hide");
    recallAllSavedActivities();
  })
};

setAllEl.onclick = function() {
  $("#confirmSetAll").modal();
  $("#confirmSetAll").find(".btn-primary").click(function(){
    setAll();
    $("#confirmSetAll").modal("hide");
    recallAllSavedActivities();
  })
}

clear9aEl.onclick = function() {
  // modal ref to id ... data-target: #confirmClrHour ... data-toggle: modal 
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("9a", ' ');
    activity9aEl.textContent = localStorage.getItem("9a");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear10aEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("10a", ' ');
    activity9aEl.textContent = localStorage.getItem("10a");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear11aEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("11a", ' ');
    activity9aEl.textContent = localStorage.getItem("11a");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear12nEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("12n", ' ');
    activity9aEl.textContent = localStorage.getItem("12n");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear1pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("1p", ' ');
    activity9aEl.textContent = localStorage.getItem("1p");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear2pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("2p", ' ');
    activity9aEl.textContent = localStorage.getItem("2p");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear3pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("3p", ' ');
    activity9aEl.textContent = localStorage.getItem("3p");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear4pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("4p", ' ');
    activity9aEl.textContent = localStorage.getItem("4p");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};

clear5pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("5p", ' ');
    activity9aEl.textContent = localStorage.getItem("5p");
    $("#confirmClrHour").modal("hide");
    recallAllSavedActivities();
  })
};


function clearAll () {
  localStorage.setItem("9a", ' ');
  localStorage.setItem("10a", ' ');
  localStorage.setItem("11a", ' ');
  localStorage.setItem("12n", ' ');
  localStorage.setItem("1p", ' ');
  localStorage.setItem("2p", ' ');
  localStorage.setItem("3p", ' ');
  localStorage.setItem("4p", ' ');
  localStorage.setItem("5p", ' ');
}

function setAll () {
  localStorage.setItem("9a", activity9aEl.value);
  localStorage.setItem("10a", activity10aEl.value);
  localStorage.setItem("11a", activity11aEl.value);
  localStorage.setItem("12n", activity12nEl.value);
  localStorage.setItem("1p", activity1pEl.value);
  localStorage.setItem("2p", activity2pEl.value);
  localStorage.setItem("3p", activity3pEl.value);
  localStorage.setItem("4p", activity4pEl.value);
  localStorage.setItem("5p", activity5pEl.value);
}

function recallAllSavedActivities () {
  activity9aEl.textContent = localStorage.getItem("9a");
  activity10aEl.textContent = localStorage.getItem("10a");
  activity11aEl.textContent = localStorage.getItem("11a");
  activity12nEl.textContent = localStorage.getItem("12n");
  activity1pEl.textContent = localStorage.getItem("1p");
  activity2pEl.textContent = localStorage.getItem("2p");
  activity3pEl.textContent = localStorage.getItem("3p");
  activity4pEl.textContent = localStorage.getItem("4p");
  activity5pEl.textContent = localStorage.getItem("5p");
}

recallAllSavedActivities();
