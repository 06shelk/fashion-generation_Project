const xitem = document.querySelector('.item');
const ex = document.querySelector('.ex');
const xitems = document.querySelector('.x-items');
const ex1 = document.querySelector('.ex1');
const ex2 = document.querySelector('.ex2');

document.querySelector(".item").onclick = () => {
    ex1.style.display = 'none';
    ex2.style.display = 'none';
    xitems.style.display = 'block';
    xitem.style.backgroundColor = 'var(--second-color)';
    ex.style.backgroundColor = 'var(--third-color)';
}

document.querySelector(".ex").onclick = () => {
    ex1.style.display = 'block';
    ex2.style.display = 'block';
    xitems.style.display = 'none';
    xitem.style.backgroundColor = 'var(--third-color)';
    ex.style.backgroundColor = 'var(--second-color)';
}

