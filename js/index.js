/* 사진 변환(천천히), 글씨 변환 */ 
const aboutImage = document.querySelector('.about img');

function handleImageChange(imagePath) {
    // 이미지를 서서히 투명하게 만들어 사라지는 효과를 줍니다.
    aboutImage.style.transition = "opacity 0.5s ease";
    aboutImage.style.opacity = '0';

    // 이미지가 투명해진 후에 새 이미지로 바뀝니다.
    setTimeout(() => {
        aboutImage.src = imagePath; // 이미지 경로 변경 (원하는 이미지의 주소로 수정해주세요)

        // 이미지가 투명해진 후에 서서히 나타나게 만드는 효과를 줍니다.
        setTimeout(() => {
            aboutImage.style.transition = "opacity 0.5s ease";
            aboutImage.style.opacity = '1';

        }, 100); // 이미지가 바뀌고 0.1초(100밀리초) 후에 투명도가 서서히 세지는 효과가 시작됩니다.
    }, 500); // 이미지가 투명해지는 시간(0.5초)만큼 대기한 후에 실행됩니다.
}

document.querySelector('.x-generation').addEventListener('mouseover', () => {
    handleImageChange('images/aboutX.png');
});

document.querySelector('.y-generation').addEventListener('mouseover', () => {
    handleImageChange('images/aboutY.jpg');
});

document.querySelector('.z-generation').addEventListener('mouseover', () => {
    handleImageChange('images/aboutZ.jpg');
});

document.querySelector('.mz-generation').addEventListener('mouseover', () => {
    handleImageChange('images/aboutMZ.jpg');
});

document.querySelector('.future-generation').addEventListener('mouseover', () => {
    handleImageChange('images/aboutFUTURE.jpg');
});

document.querySelector('.x-ge').addEventListener('mouseover', () => {
    handleImageChange('images/aboutX.png');
});
document.querySelector('.y-ge').addEventListener('mouseover', () => {
    handleImageChange('images/aboutY.jpg');
});
document.querySelector('.z-ge').addEventListener('mouseover', () => {
    handleImageChange('images/aboutZ.jpg');
});
document.querySelector('.mz-ge').addEventListener('mouseover', () => {
    handleImageChange('images/aboutMZ.jpg');
});
document.querySelector('.future-ge').addEventListener('mouseover', () => {
    handleImageChange('images/aboutFUTURE.jpg');
});


/* 텍스트 변환 */ 
const aboutText = document.querySelector('.about-text p');

aboutText.textContent = '당신의 10대 패션은 어떠셨나요?'; // 기본 텍스트 설정

const xGeneration = document.querySelector('.x-generation');
const YGeneration = document.querySelector('.y-generation');
const ZGeneration = document.querySelector('.z-generation');
const MZGeneration = document.querySelector('.mz-generation');
const futureGeneration = document.querySelector('.future-generation');

const xGe = document.querySelector('.x-ge');
const yGe = document.querySelector('.y-ge');
const zGe = document.querySelector('.z-ge');
const mzGe = document.querySelector('.mz-ge');
const futureGe = document.querySelector('.future-ge');

xGeneration.addEventListener('mouseover', () => {
    aboutText.textContent = '패션의 다양성과 자유의 시작, x 세대';
});
xGe.addEventListener('mouseover', () => {
    aboutText.textContent = '패션의 다양성과 자유의 시작, x 세대';
});

YGeneration.addEventListener('mouseover', () => {
    aboutText.textContent = '스포츠/캐주얼 웨어의 대중화 및 패션의 자율화, y 세대';
});
yGe.addEventListener('mouseover', () => {
    aboutText.textContent = '스포츠/캐주얼 웨어의 대중화 및 패션의 자율화, y 세대';
});

ZGeneration.addEventListener('mouseover', () => {
    aboutText.textContent = '패션의 정보화와 K-패션의 성장, z 세대';
});
zGe.addEventListener('mouseover', () => {
    aboutText.textContent = '패션의 정보화와 K-패션의 성장, z 세대';
});

MZGeneration.addEventListener('mouseover', () => {
    aboutText.textContent = '현대적이며 창의적인 스타일을 정의, mz 세대';
});
mzGe.addEventListener('mouseover', () => {
    aboutText.textContent = '현대적이며 창의적인 스타일을 정의, mz 세대';
});


futureGeneration.addEventListener('mouseover', () => {
    aboutText.textContent = '???';
});

futureGe.addEventListener('mouseover', () => {
    aboutText.textContent = '???';
});


