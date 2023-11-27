const email = document.getElementById("mail");
const names = document.getElementById("name");
const comment = document.getElementById("comments");
let warningTime;
const warning = document.createElement("div");
warning.className = "warning";
let charCount = document.getElementById("charcount");

names.addEventListener("input", (event) => {
    if (names.validity.typeMismatch) {
        names.setCustomValidity("Enter a name!");
    } else {
        names.setCustomValidity("");
    }
});

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

comment.addEventListener("input", function () {
    const numChar = comment.value.length;
    const counter = 150 - numChar;
    charCount.textContent = counter + "/150";
});



function checkComment(evt) {
    const key = evt.key;
    const permitted = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#%\"[\b]() "
    if (!permitted.includes(key)) {
        evt.preventDefault();
        displayWarning("You have typed an illegal character!");
    }
}

function displayWarning(msg) {
    warning.innerHTML = msg;
    if (document.body.contains(warning)) {
        clearTimeout(warningTime);
    } else {
        comment.parentNode.insertBefore(warning, comment.nextSibling);
    }

    warningTime = setTimeout(() => {
        warning.parentNode.removeChild(warning);
        warningTimeout = -1;
    }, 2000);
}

function setTheme(theme) {
    const root = document.body;
    if (theme==="dark") {
        root.style.setProperty('background-color','var(--bg-color-dark)');
        root.style.setProperty('color', 'var(--text-color-dark)');
    } else {
        root.style.setProperty('background-color', 'var(--bg-color-light)');
        root.style.setProperty('color','var(--text-color-light)');

    }
}
function toggleTheme() {
    const currTheme =localStorage.getItem('theme') || 'light';
    let newTheme = '';
    if (currTheme ==='light') {
        newTheme = 'dark';
    } else {
        newTheme='light';
    }
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
        document.getElementById('themeToggle').checked = saved ==='dark';
    }
})