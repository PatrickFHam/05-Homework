// Reference the elements in HTML.
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


// Moment.js ... pulling the current date and time, and making them usable.

var datetime = null,
        date = null,
 currentHour = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

// Updates the live-clock in the JumboTron.

$(document).ready(function(){
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);
});

// Parses-out only the hour, and makes it an integer for comparison later (conditional formatting).

var currentHour = moment().format("HH");
var numCurrentHour = parseFloat(currentHour);


// Time-Conditional Formatting

function timeConditionalFormatting () {
  if (numCurrentHour > 9) {
    activity9aEl.classList.add("past")
  } else if (numCurrentHour === 9) {
    activity9aEl.classList.add("present")
  } else if (numCurrentHour < 9) {
    activity9aEl.classList.add("future")
  };

  if (numCurrentHour > 10) {
    activity10aEl.classList.add("past")
  } else if (numCurrentHour === 10) {
    activity10aEl.classList.add("present")
  } else if (numCurrentHour < 10) {
    activity10aEl.classList.add("future")
  };

  if (numCurrentHour > 11) {
    activity11aEl.classList.add("past")
  } else if (numCurrentHour === 11) {
    activity11aEl.classList.add("present")
  } else if (numCurrentHour < 11) {
    activity11aEl.classList.add("future")
  };
  if (numCurrentHour > 12) {
    activity12nEl.classList.add("past")
  } else if (numCurrentHour === 12) {
    activity12nEl.classList.add("present")
  } else if (numCurrentHour < 12) {
    activity12nEl.classList.add("future")
  };

  if (numCurrentHour > 13) {
    activity1pEl.classList.add("past")
  } else if (numCurrentHour === 13) {
    activity1pEl.classList.add("present")
  } else if (numCurrentHour < 13) {
    activity1pEl.classList.add("future")
  };

  if (numCurrentHour > 14) {
    activity2pEl.classList.add("past")
  } else if (numCurrentHour === 14) {
    activity2pEl.classList.add("present")
  } else if (numCurrentHour < 14) {
    activity2pEl.classList.add("future")
  };

  if (numCurrentHour > 15) {
    activity3pEl.classList.add("past")
  } else if (numCurrentHour === 15) {
    activity3pEl.classList.add("present")
  } else if (numCurrentHour < 15) {
    activity3pEl.classList.add("future")
  };

  if (numCurrentHour > 16) {
    activity4pEl.classList.add("past")
  } else if (numCurrentHour === 16) {
    activity4pEl.classList.add("present")
  } else if (numCurrentHour < 16) {
    activity4pEl.classList.add("future")
  };

  if (numCurrentHour > 17) {
    activity5pEl.classList.add("past")
  } else if (numCurrentHour === 17) {
    activity5pEl.classList.add("present")
  } else if (numCurrentHour < 17) {
    activity5pEl.classList.add("future")
  };
};


// Stores the value of each time-block upon clicking "Save."

save9aEl.onclick = function()  {localStorage.setItem("9a", activity9aEl.value); reloadPage()};
save10aEl.onclick = function() {localStorage.setItem("10a", activity10aEl.value); reloadPage()};
save11aEl.onclick = function() {localStorage.setItem("11a", activity11aEl.value); reloadPage()};
save12nEl.onclick = function() {localStorage.setItem("12n", activity12nEl.value); reloadPage()};
save1pEl.onclick = function()  {localStorage.setItem("1p", activity1pEl.value); reloadPage()};
save2pEl.onclick = function()  {localStorage.setItem("2p", activity2pEl.value); reloadPage()};
save3pEl.onclick = function()  {localStorage.setItem("3p", activity3pEl.value); reloadPage()};
save4pEl.onclick = function()  {localStorage.setItem("4p", activity4pEl.value); reloadPage()};
save5pEl.onclick = function()  {localStorage.setItem("5p", activity5pEl.value); reloadPage()};


// Clears the value of each time-block upon clicking "Delete."

clearAllEl.onclick = function() {
  $("#confirmClrAll").modal();
  $("#confirmClrAll").find(".btn-primary").click(function(){
    clearAll();
    $("#confirmClrAll").modal("hide");
    reloadPage();
  })
};

setAllEl.onclick = function() {
  $("#confirmSetAll").modal();
  $("#confirmSetAll").find(".btn-primary").click(function(){
    setAll();
    $("#confirmSetAll").modal("hide");
    reloadPage();
  })
}

clear9aEl.onclick = function() {
  // modal ref to id ... data-target: #confirmClrHour ... data-toggle: modal 
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("9a", ' ');
    activity9aEl.textContent = localStorage.getItem("9a");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear10aEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("10a", ' ');
    activity9aEl.textContent = localStorage.getItem("10a");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear11aEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("11a", ' ');
    activity9aEl.textContent = localStorage.getItem("11a");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear12nEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("12n", ' ');
    activity9aEl.textContent = localStorage.getItem("12n");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear1pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("1p", ' ');
    activity9aEl.textContent = localStorage.getItem("1p");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear2pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("2p", ' ');
    activity9aEl.textContent = localStorage.getItem("2p");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear3pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("3p", ' ');
    activity9aEl.textContent = localStorage.getItem("3p");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear4pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("4p", ' ');
    activity9aEl.textContent = localStorage.getItem("4p");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};

clear5pEl.onclick = function() {
  $("#confirmClrHour").modal();
  $("#confirmClrHour").find(".btn-primary").click(function(){
    localStorage.setItem("5p", ' ');
    activity9aEl.textContent = localStorage.getItem("5p");
    $("#confirmClrHour").modal("hide");
    reloadPage();
  })
};


// Function to clear all activities.

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

// Function to store all activities to local storage.

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

// Function to show all stored activities to the page. (Should be run upon page-load.)

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

// Quick way to call a page reload.

function reloadPage () {
  window.location.reload();
  return;
}

// Running functions upon page-load.

timeConditionalFormatting();
recallAllSavedActivities();
