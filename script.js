const email = document.getElementById("mail");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

function setTheme(theme) {
    const root = document.documentElement;
    if (theme==="dark") {
        root.style.setProperty('background','var(--bg-color-dark)');
        root.style.setProperty('color', 'var(--text-color-dark)');
    } else {
        root.style.setProperty('background', 'var(--bg-color-light)');
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