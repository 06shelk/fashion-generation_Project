const Xitem = document.querySelector('.item'); // 메뉴의 아이템 버튼
const ex = document.querySelector('.ex'); // 메뉴의 설명 버튼
const story = document.querySelector('.story'); // 메뉴의 설명 버튼


const Xitems = document.querySelector('.x-items'); // x세대의 아이템 컨텐츠
const Xex = document.querySelector('.x-ex'); // x세대의 설명 컨텐츠 
const XstoryGround = document.querySelector('.story-ground'); // x세대의 설명 컨텐츠 
const body = document.querySelector('body'); // body

let story_count = 0;
let story_file = 0;

const char = document.querySelector('.char');
const story_name = document.querySelector('.story-name');
const story_talk = document.querySelector('.story-talk');
const choise_1 = document.querySelector('.choise-1');
const choise_2 = document.querySelector('.choise-2');
const story_behide3 = document.querySelector('.story-behide3');
const part_story = [    //X세대
    [['./images/x세대/x-student.png', './images/x세대/x-student.png', './images/x세대/x-student.png', './images/x세대/x-cot.png', './images/x세대/x-student.png'],
    ["안녕! 난 1970대의 너의 친구야!", "너가 나의 옷을 시대에 맞추어 선택해줘!", "너가 나의 옷을 시대에 맞추어 선택해줘!", "오 이쁘다", "극혐인데..?"],
    ["니친구", "니친구", "니친구", "니친구", "니친구"]],
    //MZ세대
    [['./images/mZ세대/mz세대-student1.png', './images/mZ세대/mz세대-student1.png', './images/mZ세대/mz세대-student1.png', './images/mZ세대/mz세대-student.png', './images/mz세대/mz세대-student1.png'],
    ["안녕! 난 2000대의 너의 친구야!", "너가 나의 옷을 시대에 맞추어 선택해줘!", "너가 나의 옷을 시대에 맞추어 선택해줘!", "오 이쁘다", "극혐인데..?"],
    ["니친구", "니친구", "니친구", "니친구", "니친구"]],
    //미래세대
    [['./images/x세대/x-student.png', './images/x세대/x-student.png', './images/x세대/x-student.png', './images/x세대/x-cot.png', './images/x세대/x-student.png'],
    ["안녕! 난 1970대의 너의 친구야!", "너가 나의 옷을 시대에 맞추어 선택해줘!", "너가 나의 옷을 시대에 맞추어 선택해줘!", "오 이쁘다", "극혐인데..?"],
    ["니친구", "니친구", "니친구", "니친구", "니친구"]]
];


document.querySelector(".item").onclick = () => { // 메뉴의 아이템을 클릭 시
    Xex.style.display = 'none';
    XstoryGround.style.display = 'none';
    Xitems.style.display = 'block';
    Xitem.style.backgroundColor = 'var(--second-color)';
    ex.style.backgroundColor = 'var(--third-color)'
    story.style.backgroundColor = 'var(--third-color)'
    body.style.backgroundColor = 'black';
}

document.querySelector(".ex").onclick = () => { // 메뉴의 설명을 클릭 시
    Xex.style.display = 'block';
    XstoryGround.style.display = 'none';
    Xitems.style.display = 'none';
    Xitem.style.backgroundColor = 'var(--third-color)';
    ex.style.backgroundColor = 'var(--second-color)';
    story.style.backgroundColor = 'var(--third-color)'
    body.style.backgroundColor = 'white';
}

document.querySelector(".story").onclick = () => { // 메뉴의 설명을 클릭 시
    XstoryGround.style.display = 'flex';
    Xex.style.display = 'none';
    Xitems.style.display = 'none';
    Xitem.style.backgroundColor = 'var(--third-color)';
    ex.style.backgroundColor = 'var(--third-color)';
    story.style.backgroundColor = 'var(--second-color)';
    body.style.backgroundColor = 'black';
    story_file = 0;
    show_story();
}
// 현재 페이지의 URL 가져오기
var currentURL = window.location.href;

// '=' 문자가 나타날 때까지의 값을 추출
var value = null;

if (currentURL.indexOf('=') !== -1) {
    value = currentURL.split('=')[1];

}
console.log(value);

var clothes_Array = [[["./images/x세대/땡땡이 원피스.jpg", "./images/x세대/땡땡이 원피스.jpg", "./images/x세대/땡땡이 원피스.jpg","./images/x세대/땡땡이 원피스.jpg"],
["땡땡이 원피스", "땡땡이 원피스", "땡땡이 원피스", "땡땡이 원피스"]],
[[], []],
[[], []]];

window.onload = function () {
    var clothesDiv = document.getElementsByClassName("clothes");

    for (var i = 0; i < clothes_Array[0][0].length; i++) {
        var items = document.createElement("div");
        var item_imgDiv = document.createElement("div");
        var item_img = document.createElement("img");
        var text = document.createElement("p");

        item_imgDiv.className = "item_imgDiv";
        item_img.className = "item_img";
        items.className = "items";
        text.className = "item_text";

        item_img.src = clothes_Array[story_count][0][i];
        text.textContent = clothes_Array[story_count][1][i];
        
        items.appendChild(item_img);
        items.appendChild(text);
        clothesDiv[0].appendChild(items);
    }
}

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
        setting_Generation('./images/XexImg.png', './images/X세대/X세대1.jpg', './images/X세대/X세대2.jpg', './images/X세대/X세대3.jpg', "X세대", "X세대의 패션은 스트리트 스타일과 레트로 감성을 결합하여 자유로움과 개성을 강조하며, 그 시대의 사회적 변화를 반영합니다.", "한국의 x세대(1965년대부터 1980년대에 태어난 세대)의 패션 특징은 다양하고 독창적입니다. 이 세대는 글로벌화와 디지털 시대의 영향을 많이 받았으며, 그로 인해 다양한 패션 스타일과 특징을 나타내고 있습니다. X세대의 패션은 과거와 현대를 융합한 스트리트 스타일과 레트로 감성으로 자신의 독특한 정체성을 표현하며, 개성과 자유로움을 강조합니다. 통 넓은 청바지와 크롭 티셔츠를 통해 그들의 패션은 그 시대의 사회적, 문화적 변화를 반영합니다.");
        story_count = 0;
        story_file = 0;
        show_story();
        break;
    case "mz":
        setting_Generation('./images/XexImg.png', './images/mZ세대/ZexImg1.png', './images/mZ세대/ZexImg2.png', './images/mZ세대/ZexImg3.png', "MZ세대", "MZ세대의 패션은 다양하고 창의적이며, 자유로운 스타일을 즐기며 자신의 개성을 패션을 이용해서 표현하고 있습니다.", "한국의 MZ세대 (1980년부터 2010년대에 태어난 세대)는 패션을 통해 자신의 정체성을 표현하고, 개인적인 스타일에 큰 중요성을 두며, 아이템을 선택하는 데 주로 개인 취향을 따른다. 또한, 개인화가 중요한데, 브랜드가 AI와 빅데이터를 활용하여 개인화된 쇼핑 경험을 제공하는 것이 핵심이다. AI는 개인의 쇼핑 습관을 학습하여 맞춤형 서비스를 제공하며, 이는 Z세대에게 매우 중요하다. 이러한 동향으로 리폼과 리세일 시장이 Z세대의 독특한 스타일 탐구로 성장하고 있다.");
        story_count = 1;
        story_file = 0;
        show_story();
        break;
    case "future":
        setting_Generation('./images/XexImg.png', './images/XexImg.png', './images/XexImg.png', './images/XexImg.png', "미래세대", "드러나는 옷을 입은 여성이 서울 압구정동 거리를 걷고 있다.과감한 노출, 화려한 옷차림의 여자들로 붐비는 압구정동 거리풍경", "dkssudgktpdydh");
        story_count = 2;
        story_file = 0;
        show_story();
        break;
    default:
        setting_Generation('./images/XexImg.png', './images/XexImg.png', './images/XexImg.png', './images/XexImg.png', "기본 제공", "기본 숏 텍스트", "기본 롱 텍스트");
}


const story_triangle = document.querySelector('.story-triangle');

//story_count = 0;story_file = 0;
document.querySelector('.story-triangle').onclick = () => {
    if (part_story[story_count][0][story_file] != null) {
        if ((story_count == 0 && (story_file == 3 || story_file == 4)) || (story_count == 1 && (story_file == 3 || story_file == 4))) {
            Xex.style.display = 'block';
            XstoryGround.style.display = 'none';
            Xitems.style.display = 'none';
            Xitem.style.backgroundColor = 'var(--third-color)';
            ex.style.backgroundColor = 'var(--second-color)';
            story.style.backgroundColor = 'var(--third-color)'
            body.style.backgroundColor = 'white';
        }
        story_file++;
        show_story();
        if (story_count == 0 && story_file == 2) {
            remove_class2('hidden', "댄디 검정 코트", "노란색 패딩");
            choise_1.onclick = () => {
                add_class2('hidden');
                story_file = 3;
                show_story();
            }
            choise_2.onclick = () => {
                add_class2('hidden');
                story_file = 4;
                show_story();
            }
        } else if (story_count == 1 && story_file == 2) {
            remove_class2('hidden', "검정색 가디건", "댄디 검정 코트");
            choise_1.onclick = () => {
                add_class2('hidden');
                story_file = 3;
                show_story();
            }
            choise_2.onclick = () => {
                add_class2('hidden');
                story_file = 4;
                show_story();
            }
        }
    }
}

function add_class2(name) {
    choise_1.classList.add(name);
    choise_2.classList.add(name);
    story_behide3.classList.add(name);
    return 0;
}

function remove_class2(name, text1, text2) {
    choise_1.classList.remove(name);
    choise_2.classList.remove(name);
    story_behide3.classList.remove(name);
    choise_1.textContent = text1;
    choise_2.textContent = text2;
    return 0;
}

function show_story() {
    char.src = part_story[story_count][0][story_file];
    story_name.textContent = part_story[story_count][2][story_file];
    story_talk.textContent = part_story[story_count][1][story_file];
}

function setting_Generation(pic_w, pic_b1, pic_b2, pic_b3, title, short_text, long_text) {
    imageElement.src = pic_w;
    image1Element.src = pic_b1;
    image2Element.src = pic_b2;
    image3Element.src = pic_b3;
    title1Element.textContent = title;
    title2Element.textContent = title;
    title3Element.textContent = title;
    title4Element.textContent = long_text;
    title5Element.textContent = short_text;
}