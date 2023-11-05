
const Xitem = document.querySelector('.item'); // 메뉴의 아이템
const ex = document.querySelector('.ex'); // 메뉴의 설명
const Xitems = document.querySelector('.x-items'); // x세대의 아이템
const Xex = document.querySelector('.x-ex'); // x세대의 설명
const body = document.querySelector('body'); // body

document.querySelector(".item").onclick = () => { // 메뉴의 아이템을 클릭 시
    Xex.style.display = 'none';
    Xitems.style.display = 'block';
    Xitem.style.backgroundColor = 'var(--second-color)';
    ex.style.backgroundColor = 'var(--third-color)'
    body.style.backgroundColor = 'black';
}

document.querySelector(".ex").onclick = () => { // 메뉴의 설명을 클릭 시
    Xex.style.display = 'block';
    Xitems.style.display = 'none';
    Xitem.style.backgroundColor = 'var(--third-color)';
    ex.style.backgroundColor = 'var(--second-color)';
    body.style.backgroundColor = 'white';
}
// 현재 페이지의 URL 가져오기
var currentURL = window.location.href;

// '=' 문자가 나타날 때까지의 값을 추출
var value = null;

if (currentURL.indexOf('=') !== -1) {
    value = currentURL.split('=')[1];

}
const imageElement = document.getElementById('img-white');
const title1Element = document.querySelector('.x-img1-text');
const title2Element = document.querySelector('.x-title'); // X세대 제목 요소 선택
const title3Element = document.querySelector('.x-ex2-text');

// 이미지를 변경할 함수
function changeImageByType(value) {

    switch (value) {
        case "x":
            imageElement.src = "../images/XexImg.png";
            imageElement.alt = "이미지 1";
            title1Element.textContent = "X세대"; // X세대로 변경            
            title2Element.textContent = "X세대"; // X세대로 변경       
            title3Element.textContent = "X세대"; // X세대로 변경
            break;
        case "y":
            imageElement.src = "../images/aboutY.jpg";
            imageElement.alt = "이미지 2";
            title1Element.textContent = "Y세대"; // Y세대로 변경        
            title2Element.textContent = "Y세대"; // Y세대로 변경     
            title3Element.textContent = "Y세대"; // Y세대로 변경
            break;
        case "z":
            imageElement.src = "../images/aboutZ.jpg"
            imageElement.alt = "이미지 3";
            title1Element.textContent = "Z세대"; // Z세대로 변경        
            title2Element.textContent = "Z세대"; // Z세대로 변경    
            title3Element.textContent = "Z세대"; // Z세대로 변경
            break;
        case "mz":
            imageElement.src = "../images/aboutMZ.jpg"
            imageElement.alt = "이미지 2";
            title1Element.textContent = "MZ세대"; // MZ세대로 변경          
            title2Element.textContent = "MZ세대"; // MZ세대로 변경          
            title3Element.textContent = "MZ세대"; // MZ세대로 변경
            break;
        case "future":
            imageElement.src = "../images/aboutFUTURE.jpg"
            imageElement.alt = "이미지 3";
            title1Element.textContent = "미래세대"; // 미래세대로 변경          
            title2Element.textContent = "미래세대"; // 미래세대로 변경          
            title3Element.textContent = "미래세대"; // 미래세대로 변경
            break;
        default:
            imageElement.src = "../images/logo.png"
            imageElement.alt = "기본 이미지";
            title1Element.textContent = "기본 제목"; // 기본 제목으로 변경            
            title2Element.textContent = "기본 제목"; // 기본 제목으로 변경
            title3Element.textContent = "기본 제목"; // 기본 제목으로 변경
    }
}

// "type1" 파라미터를 기반으로 이미지와 제목 변경 함수 호출
changeImageByType(value);