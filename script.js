const toggleBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "Light";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    toggleBtn.textContent = isDark ? "Light" : "Dark";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

document.getElementById("contactForm").addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("formMsg").textContent =
        "Message sent successfully (demo only).";
});
