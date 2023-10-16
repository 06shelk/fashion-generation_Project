const Xitem = document.querySelector('.item'); // 메뉴의 아이템
const ex = document.querySelector('.ex'); // 메뉴의 설명
const Xitems = document.querySelector('.x-items'); // x세대의 아이템
const Xex = document.querySelector('.x-ex'); // x세대의 설명

document.querySelector(".item").onclick = () => { // 메뉴의 아이템을 클릭 시
    Xex.style.display = 'none';
    Xitems.style.display = 'block';
    Xitem.style.backgroundColor = 'var(--second-color)';
    ex.style.backgroundColor = 'var(--third-color)';
}

document.querySelector(".ex").onclick = () => { // 메뉴의 설명을 클릭 시
    Xex.style.display = 'block';
    Xitems.style.display = 'none';
    Xitem.style.backgroundColor = 'var(--third-color)';
    ex.style.backgroundColor = 'var(--second-color)';
}

