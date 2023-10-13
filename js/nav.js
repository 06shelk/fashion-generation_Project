const navToggleI = document.querySelector("i");
const navListUl = document.querySelector(".menu-list");

// .nav_toggle 클릭하면
document.querySelector(".nav_toggle").onclick = () => {
    // .nav_toggle i 햄버거 메뉴 <-> X
    // class에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-x-lg");

    // .menu-list에 .show-menu 클래스를 토글
    navListUl.classList.toggle("show-menu");
};
