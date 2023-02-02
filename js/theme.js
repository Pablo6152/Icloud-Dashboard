let darkmode = localStorage.getItem("darkmode")
const head = document.getElementById("head")
const themeBtn = document.getElementById("toggle-theme")

// When page loads
function loadTheme(){
    if (JSON.parse(darkmode)){
        getTheme(1)
    }
}

// Dark mode
function getTheme(theme) {
    let root = document.documentElement;
    if (theme === 0) {
        // Black
        root.style.setProperty('--primary-color', '#1c1c1e');
        root.style.setProperty('--secondary-color', '#000000');
        root.style.setProperty('--tertiary-color','rgba(28,28,30,255)')
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--primary-accent-color', '#0b84fe');
        root.style.setProperty('--secondary-accent-color', '#2ed158');
        root.style.setProperty('--gray-color', 'rgba(30,30,31,255)');
        head.content = "#000000"
        localStorage.setItem("darkmode", "0")
    } else if (theme === 1) {
        // White
        root.style.setProperty('--primary-color', '#ffffff');
        root.style.setProperty('--secondary-color', '#f0f0f0');
        root.style.setProperty('--tertiary-color','rgba(227,227,232,255)')
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--primary-accent-color', '#007aff'); 
        root.style.setProperty('--secondary-accent-color', '#35c759');
        root.style.setProperty('--gray-color', 'rgba(200, 200, 200, 1)');
        head.content = "#f0f0f0"
        localStorage.setItem("darkmode", "1")
    }
}
function toggleTheme(){
    darkmode = localStorage.getItem("darkmode")
    if (JSON.parse(darkmode) !== 1){
        getTheme(1)
    } else if (JSON.parse(darkmode) !== 0){
        getTheme(0)
    }
}

export { loadTheme, toggleTheme, themeBtn }