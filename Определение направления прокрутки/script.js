const contentContainer = document.querySelector(".content");
const indicator = document.getElementById("scroll-indicator");

for (let i = 0; i < 100; i++) {
    const p = document.createElement("p");
    p.textContent = "Это пример демонстрационного текста, предназначенного для заполнения пространства на странице. Он не несёт смысловой нагрузки и используется исключительно в целях визуализации.";
    contentContainer.appendChild(p);
}

let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 1) {
    indicator.style.display = "none";
    return;
    }

    if (scrollTop > lastScrollTop) {
        indicator.textContent = "↓ Вниз";
    } else {
        indicator.textContent = "↑ Вверх";
    }

    indicator.style.display = "block";
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
