const clickClearCookie = document.querySelector('#clear');
const clickAddCookie = document.querySelector('#add');

clickAddCookie.addEventListener('click', addCookie);
clickClearCookie.addEventListener('click', clearCookies);


function initializeNotes() {
  let cookies = getNotes();
  renderNotes(cookies);
}

function renderNotes(notes) {
  const cookies = splitNotes(notes);
  
  if (cookies.length === 0) {
    renderEmpty();
  } else {
    renderCookieNotes(cookies);
  }
}

function splitNotes(notes) {
  return notes.split("|><|").filter(cookie => cookie !== "");
}

function renderEmpty() {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";
  
  const span = document.createElement("span");
  span.textContent = "[Empty]";
  outputElement.appendChild(span);
}

function renderCookieNotes(cookies) {
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "";
  
  cookies.forEach((cookie, index) => {
    const span = document.createElement("span");
    span.textContent = "--> " + cookie;
    outputElement.appendChild(span);
    
    if (index < cookies.length - 1) {
      outputElement.appendChild(document.createElement("br"));
    }
  });
}


function getNotes() {
  const cookies = document.cookie;
  const notesMatch = cookies.match(/(?:^|;)\s*notes=([^;]+)/);
  const notes = notesMatch ? notesMatch[1] : "";
  return notes;
}


function addCookie() {
  const textarea = document.getElementById("area");
  const inputValue = textarea.value.trim();

  if (inputValue !== "") {
    const existingNotes = getNotes().split("|><|");
    const newNotes = inputValue.split("\n").filter(note => note !== "");

    const combinedNotes = combineNotes(existingNotes, newNotes);
    saveNotesToCookie(combinedNotes);

    clearOutputIfEmpty();

    renderNotesToOutput(newNotes);

    textarea.value = "";
  } else {
    alert("It's empty. Try to input something in \"Text input\".");
  }
}

function combineNotes(existingNotes, newNotes) {
  let combined = existingNotes.join("|><|");

  if (existingNotes.length > 0 && newNotes.length > 0) {
    combined += "|><|";
  }

  combined += newNotes.join("|><|");

  return combined;
}

function saveNotesToCookie(notes) {
  document.cookie = "notes=" + notes;
  const date = new Date();
  date.setDate(date.getDate() + 30);
  document.cookie = "expires=" + date;
}

function clearOutputIfEmpty() {
  const outputElement = document.getElementById("output");
  if (outputElement.innerHTML.trim() === "<span>[Empty]</span>") {
    outputElement.innerHTML = "";
  }
}

function renderNotesToOutput(notes) {
  const outputElement = document.getElementById("output");
  const isFirstNote = outputElement.getElementsByTagName("span").length === 1 && outputElement.getElementsByTagName("span")[0].textContent === "[Empty]";

  notes.forEach((note, index) => {
    if (isFirstNote) {
      outputElement.innerHTML = "";
    } else if (outputElement.innerHTML !== "") {
      outputElement.appendChild(document.createElement("br"));
    }

    const span = document.createElement("span");
    span.textContent = "--> " + note;
    outputElement.appendChild(span);
  });
}

function clearCookies() {
  if (confirm("Are you sure?")) {
    deleteCookie("notes");
    setCookieExpiration(30);
    clearOutput();
    renderEmptyMessage();
  }
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function setCookieExpiration(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = "expires=" + date;
}

function clearOutput() {
  document.getElementById("output").textContent = "";
}

function renderEmptyMessage() {
  const outputElement = document.getElementById("output");
  const span = document.createElement("span");
  span.textContent = "[Empty]";
  outputElement.appendChild(span);
}

initializeNotes();