/* nav_toggle 클릭 시 list -> x로 변환, side 생기기, coco 검은색 부분 이미지 위치 바뀌기 */
const navToggleI = document.querySelector("i");
const navListUl = document.querySelector(".side");
const side = document.querySelector('.side');
const COCO = document.querySelector('.COCO');
const sec1 = document.querySelector('.section1');

document.querySelector(".nav_toggle").onclick = () => {
    navToggleI.classList.toggle("bi-x-lg");
    navToggleI.classList.toggle("bi-list");
    navListUl.classList.toggle("show-menu");

    if (navListUl.classList.contains("show-menu")) {
        side.style.display = 'block';
        sec1.style.zIndex = '2';
        COCO.style.zIndex = '2';
        COCO.style.position = 'relative';
        
        
    } else {
        side.style.display = 'none';
        sec1.style.zIndex = '';
        COCO.style.zIndex = '';
        COCO.style.position = 'relative';
    }
};
