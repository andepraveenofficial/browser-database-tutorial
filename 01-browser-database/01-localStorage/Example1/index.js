const toggleThemeButton = document.getElementById("toggleThemeButton");
console.log(toggleThemeButton)

const root = document.getElementById("root");
console.log(root);

const toggleMode = localStorage.getItem("theme");
console.log(toggleMode);

if (!toggleMode){
    localStorage.setItem("theme", "light-theme");
    root.classList.add("light-theme");
}

toggleThemeButton.onclick = function(){
    const theme = localStorage.getItem("theme");
    if (theme === "light-theme"){
        localStorage.setItem("theme", "dark-theme");
        root.classList.remove("light-theme");
        root.classList.add("dark-theme");
    }
    else{
        localStorage.setItem("theme", "light-theme");
        root.classList.remove("dark-theme");
        root.classList.add("light-theme");
    }
}