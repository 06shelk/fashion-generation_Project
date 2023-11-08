
const Xitem = document.querySelector('.item'); // 메뉴의 아이템 버튼
const ex = document.querySelector('.ex'); // 메뉴의 설명 버튼
const story = document.querySelector('story'); // 메뉴의 설명 버튼


const Xitems = document.querySelector('.x-items'); // x세대의 아이템 컨텐츠
const Xex = document.querySelector('.x-ex'); // x세대의 설명 컨텐츠 
const Xstory = document.querySelector('.story-ground'); // x세대의 설명 컨텐츠 
const body = document.querySelector('body'); // body

document.querySelector(".item").onclick = () => { // 메뉴의 아이템을 클릭 시
    Xex.style.display = 'none';
    Xstory.style.display = 'none';
    Xitems.style.display = 'block';
    Xitem.style.backgroundColor = 'var(--second-color)';
    ex.style.backgroundColor = 'var(--third-color)'
    body.style.backgroundColor = 'black';
}

document.querySelector(".ex").onclick = () => { // 메뉴의 설명을 클릭 시
    Xex.style.display = 'block';
    Xstory.style.display = 'none';
    Xitems.style.display = 'none';
    Xitem.style.backgroundColor = 'var(--third-color)';
    ex.style.backgroundColor = 'var(--second-color)';
    body.style.backgroundColor = 'white';
}

document.querySelector(".story").onclick = () => { // 메뉴의 설명을 클릭 시
    Xstory.style.display = 'flex';
    Xex.style.display = 'none';
    Xitems.style.display = 'none';
    Xstory.style.backgroundColor = 'var(--second-color)';
    ex.style.backgroundColor = 'var(--third-color)';
    Xstory.style.backgroundColor='black';
    body.style.backgroundColor = 'black';
}
// 현재 페이지의 URL 가져오기
var currentURL = window.location.href;

// '=' 문자가 나타날 때까지의 값을 추출
var value = null;

if (currentURL.indexOf('=') !== -1) {
    value = currentURL.split('=')[1];

}
console.log(value);
const imageElement = document.getElementById('img-white');
const image1Element = document.getElementById('img-1');
const image2Element = document.getElementById('img-2');
const image3Element = document.getElementById('img-3');
const title1Element = document.querySelector('.x-img1-text');
const title2Element = document.querySelector('.x-title'); // X세대 제목 요소 선택
const title3Element = document.querySelector('.x-ex2-title');
const title4Element = document.querySelector('.x-ex2-sub');
const title5Element = document.querySelector('.x-ex-short-text');

switch (value) {
    case "x":
        imageElement.src = './images/XexImg.png';
        imageElement.alt = "이미지 1";
        image1Element.src = './images/X세대/X세대1.jpg'
        image2Element.src = './images/X세대/X세대2.jpg'
        image3Element.src = './images/X세대/X세대3.jpg'
        title1Element.textContent = "X세대"; // X세대로 변경            
        title2Element.textContent = "X세대"; // X세대로 변경       
        title3Element.textContent = "X세대"; // X세대로 변경
        title4Element.textContent = "한국의 x세대(1965년대부터 1980년대에 태어난 세대)의 패션 특징은 다양하고 독창적입니다. 이 세대는 글로벌화와 디지털 시대의 영향을 많이 받았으며, 그로 인해 다양한 패션 스타일과 특징을 나타내고 있습니다. X세대의 패션은 과거와 현대를 융합한 스트리트 스타일과 레트로 감성으로 자신의 독특한 정체성을 표현하며, 개성과 자유로움을 강조합니다. 통 넓은 청바지와 크롭 티셔츠를 통해 그들의 패션은 그 시대의 사회적, 문화적 변화를 반영합니다.";
        title5Element.textContent = "X세대의 패션은 스트리트 스타일과 레트로 감성을 결합하여 자유로움과 개성을 강조하며, 그 시대의 사회적 변화를 반영합니다.";
        break;
    case "mz":
        imageElement.src = './images/XexImg.png';
        imageElement.alt = "이미지 3";
        image1Element.src = './images/Z세대/ZexImg1.png'
        image2Element.src = './images/Z세대/ZexImg2.png'
        image3Element.src = './images/Z세대/ZexImg3.png'
        title1Element.textContent = "MZ세대"; // Z세대로 변경        
        title2Element.textContent = "MZ세대"; // Z세대로 변경    
        title3Element.textContent = "MZ세대"; // Z세대로 변경
        title4Element.textContent = "한국의 MZ세대 (1980년부터 2010년대에 태어난 세대)는 패션을 통해 자신의 정체성을 표현하고, 개인적인 스타일에 큰 중요성을 두며, 아이템을 선택하는 데 주로 개인 취향을 따른다. 또한, 개인화가 중요한데, 브랜드가 AI와 빅데이터를 활용하여 개인화된 쇼핑 경험을 제공하는 것이 핵심이다. AI는 개인의 쇼핑 습관을 학습하여 맞춤형 서비스를 제공하며, 이는 Z세대에게 매우 중요하다. 이러한 동향으로 리폼과 리세일 시장이 Z세대의 독특한 스타일 탐구로 성장하고 있다.";
        title5Element.textContent = "MZ세대의 패션은 다양하고 창의적이며, 자유로운 스타일을 즐기며 자신의 개성을 패션을 이용해서 표현하고 있습니다.";
        break;
    case "future":
        imageElement.src = './images/XexImg.png';
        imageElement.alt = "이미지 3";
        image1Element.src = './images/XexImg.png'
        image2Element.src = './images/XexImg.png'
        image3Element.src = './images/XexImg.png'
        title1Element.textContent = "미래세대"; // 미래세대로 변경          
        title2Element.textContent = "미래세대"; // 미래세대로 변경          
        title3Element.textContent = "미래세대"; // 미래세대로 변경
        title4Element.textContent = "dkssudgktpdydh";
        title5Element.textContent = "드러나는 옷을 입은 여성이 서울 압구정동 거리를 걷고 있다.과감한 노출, 화려한 옷차림의 여자들로 붐비는 압구정동 거리풍경";
        break;
    default:
        imageElement.src = './images/XexImg.png';
        imageElement.alt = "기본 이미지";
        image1Element.src = './images/XexImg.png'
        image2Element.src = './images/XexImg.png'
        image3Element.src = './images/XexImg.png'
        title1Element.textContent = "기본 제목"; // 기본 제목으로 변경            
        title2Element.textContent = "기본 제목"; // 기본 제목으로 변경
        title3Element.textContent = "기본 제목"; // 기본 제목으로 변경
        title4Element.textContent = "dkssudgktpdydh";
}