// 1. div tag icerisinde bir metn daxil edin ve metnde olan boşluqların sayını başka bir tag - de ekrana çıxarın

let mainText = document.getElementsByClassName("lorem-text")[0]
let spaceText = mainText.innerHTML
let spacePart = 0


for (i = 0; i<spaceText.length; i++) {
    if (spaceText[i] === " ") {
        spacePart ++
    }
}
document.getElementsByClassName("space-number")[0].innerHTML = "Spaces =" + spacePart


// 2. 10 li - den ibaret list yaradin, 5 - ci indexden sonra olan elementlerin her birinin kontentine 'Hello I am learning js' textini yazdirin

let liParts = document.getElementsByClassName("list_parts")[0]
let createUl = document.createElement("ul")

for (i = 1; i <= 10; i++) {
    let createLi = document.createElement("li")
    createUl.appendChild(createLi);
    if( i > 5  ){
        createLi.textContent = "Hello I am learning js";
    }

    liParts.appendChild(createUl)
}


// 3. P tag icerisinde bir metn daxil edin ve metnde olan sozlerin sayini hesablayan method yazin

let getP = document.getElementById("text_p").innerHTML
let countText = 0

function getText(text){
    for(i=0; i < getP.length; i++){
        countText++
    }
}

getText(getP)
console.log(countText)


// 4. Div tag icerisinde metn daxil edin ve metnde olan butun sozlerin ilk herfini boyuk eden method yazin (chatgpt)

let getText = document.getElementById("first_letter").innerHTML

function firstLetterText(text){
   return text.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

firstLetterText(getText)
getText = firstLetterText(getText)
console.log(getText)


// 5. Full ekrani tutan custom menu hazirlayin

document.getElementById('menu-open').onclick = function () {
    document.getElementsByClassName('main-menu')[0].classList.add('transform00')
}

document.getElementById('menu-close').onclick = function () {
    document.getElementsByClassName('main-menu')[0].classList.remove('transform00')
}


// 6. Bir list yaradin(html - de) ve listin her li elementine click edende icerisinde yeni a tag yaransin ve icerisine content ve attribut elave edilsin

let liParts = document.querySelectorAll("#new_list li")

for(i=0; i<liParts.length; i++){
    liParts[i].addEventListener("click", function (){
        let createA = document.createElement('a')
        createA.textContent = "Click me"
        createA.target = "_blank"
        createA.href = "https://youtube.com";
        this.appendChild(createA)
    })
}


// 7. Bir list yaradin(html - de) her elemente click edende textin rengini ve font sizini deyisin

// let liParts = document.querySelectorAll("#new_list_parts li")

for(i=0; i<liParts.length; i++){
    liParts[i].addEventListener("click", function (){
        this.style.color = "red"
        this.style.fontSize = "18px"
    })
}


// 8. Sehife acilanda 10 - dan 1 - e qeder discount olan bir alqorithm yazin.Meselen ekran acilsin 10 gorunsun sonra 10, 9, 8, 7 .. 1 bu sekilde azalsın (chatgpt)

let count = 10;
const display = document.getElementById("discount");

function setCount(){
        count--
        if (count > 0) {
            display.textContent = count;
        } else {
            display.textContent = "End of discount!";
            clearInterval(interval);
        }
    }
let intervalNum = setInterval(setCount, 1000)


// 9. js vasitesile htmlde table yaradin, icerisinde 5 setir 4 sutun olsun (chatgpt)

let createTable = document.createElement("table")

for(i=0; i<5; i++){
    let createTr = document.createElement("tr")
    if(i<=5){
    }
    for(j=0; j<4; j++){
        let createTd = document.createElement("td")
        createTd.innerHTML = "Hello world"
        createTr.appendChild(createTd)
    }
    createTable.appendChild(createTr)
}
document.body.appendChild(createTable);


// 10. bir element yaradin sehife yuklendikden 4 saniye sonra gorunsun 10saniye qalib sonra gizlensin (chatgpt)

function newElement(text){
    let newElem = document.createElement("span")
    newElem.innerHTML = "HELLO WORLD"
    newElem.style.display = "inline-block"
    document.body.appendChild(newElem)


    setTimeout(() => {
        newElem.style.display = "none"
    }, 10000)
}
setTimeout(() => {newElement()}, 4000)


// 11. sozlerden ibaret iki array teyin edin, bu arraylerin 4 - cu indexindeki deyerlerinin beraber olub olmadigini yoxlayan alqoritm yazin

let arr1 = ['home', 'book', 'developer', 'learn', 'improve', 'senior']
let arr2 = ['text', 'array', 'developer', 'object', 'improve']

if (arr1[4] === arr2[4]) {
    console.log(true)
} else {
    console.log(false)
}


// 12. sozlerden ibaret bir array teyin edin, ve icerisindeki sozlerin uzunluqlari beraber olanlari bir tag icersinde ekrana cixarin (chatgpt)

let arr = ['home', 'book', 'developer','hell', 'learn', 'improve', 'senior'];
let output = '';

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].length === arr[j].length) {
            output += `<p>${arr[i]} - ${arr[j]} (uzunluq: ${arr[i].length})</p>`
        }
    }
}

document.getElementById("result").textContent = output;


// 13. iki input(number) daxil edin, change oldugu zaman bu inputlardan gelen deyerlerin cemini hesablayan bir method yazin (chatgpt)

let inp1 = document.getElementById('first_number')
let inp2 = document.getElementById('second_number')
let sumInp = document.getElementById('summary_number')

function sumFunc(){
    sumInp.innerHTML = Number(inp1.value) + Number(inp2.value)
}

inp1.addEventListener("change", sumFunc)
inp2.addEventListener("change", sumFunc)


// 14. artan sira ile duzulmus bir metn teyin edin, meselen 1, 2, 3, 4, .. bu ededlerin her birine click edende 2 mislini hesablayib baska bir elementde ekrana cixarin

let numberList = document.getElementById('number_list')
let result = document.getElementById('result')

for(let i=1; i<=6; i++){
    let span = document.createElement('span')
    span.innerHTML = i

    span.addEventListener("click", function(){
        result.textContent = i*2
    })

    numberList.appendChild(span)
}


// 15. bir array teyin edin arrayin 1 - ci indexdeki deyeri ile sonuncu indexdeki deyerini bir variablea menimsedib dom - da cixarin.Her hansi bir tag icerisinde

let arr = ['home', 'book', 'developer', 'hell', 'learn', 'improve', 'senior'];
let cutArr0 = arr[0].concat(arr[arr.length - 1])

document.body.append(document.createElement('a').innerHTML = cutArr0)


16. sort() methodunu custom yazin (chatgpt)

function customSort(arr) {
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] > arr[j])
                [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
  }


// 17. reverse() methodunu custom yazin(dersde yazdigimiz versiyada yox baska variantda) (chatgpt)

function customReverse(arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
}

console.log(customReverse([1, 2, 3, 4, 5, 6, 7]))


18. pop() methodunu custom yazin

function customPop(arr) {
    if (arr.length === 0) return undefined
    let last = arr[arr.length - 1]
    arr.length = arr.length - 1
    return last
}

let arr = [1, 2, 3, 4]
console.log(customPop(arr))
console.log(arr)


// 19. bir soz daxil edin, herfleri her 1 saniden bir silinsin

let word = 'Hello'
let span = document.createElement('span')
document.body.appendChild(span)

function deleteLetter(){
    if (word.length > 0) {
        word = word.slice(0, -1)
        span.textContent = word
    } else {
        clearInterval(timer)
    }
}

span.textContent = word
let timer = setInterval(deleteLetter, 1000)


// 20. bir metn daxil edin sehife acilanda gorunmesin, herfleri her 1 saniyeden sonra ekrana cixsin

let text = document.getElementById('text');
let fullText = text.textContent;
text.textContent = '';
text.style.visibility = 'visible';

let i = 0;
function addChar() {
    if (i < fullText.length) {
        text.textContent += fullText[i];
        i++;
        setTimeout(addChar, 1000);
    }
}
addChar();



// 21. bir img tag daxil edin, button click olanda img alt deyerini ekrana cixaran bir alqorithm yazin

let btnClick = document.getElementById('btn-click')
let imgSect = document.getElementById('img-alt')
let imgalt = imgSect.getAttribute('alt')

btnClick.onclick = function btnClc(){
        let newElemt = document.createElement('span')
        newElemt.innerHTML = imgalt
    document.body.appendChild(newElemt)
}


// 22. 10 il sonraki yasinizi hesablayan bir method yazin

function tenYears(){
    let addAge = parseInt(prompt('Add your age'))
    let afterTen = addAge + 10
    alert('After 10 years your age' + afterTen)
}
tenYears()


// Task: 1 metnde tekrar olunan sozlerin sayini tapmaq ucun bir method yazin


function saySozler(text) {
    let sozler = text.split(" ");
    let say = {};

    for (let soz of sozler) {
        say[soz] = (say[soz] || 0) + 1;
    }

    console.log(say);
}

// İstifadə:
saySozler("salam dunya salam necesen dunya salam");
  
