// JS LESSON 1ST TASKS


// 1. - Declare 2 number type variable and assign value, then show output on the console  

var firstNumber;
firstNumber = 2025;
let firstString;
firstString = 'Front End';
console.log(firstNumber);
console.log(firstString);


// 2. - Declare 3 string type variable and show result as alert message

let secondString1 = 'Front';
let secondString2 = 'End';
let secondString3 = 'Developer';
alert(secondString1);
alert(secondString2);
alert(secondString3);


// 3. - Declare 4 variable and assign different type of datas, show all types on the console

var thirdString = "I am Front End Developer";
let thirdNumber = 2025;
const thirdBoolean = true;
var thirdNull = null;
console.log(typeof thirdString);
console.log(typeof thirdNumber);
console.log(typeof thirdBoolean);
console.log(typeof thirdNull);


// 4. - Declare 2 variable and show the multiple result on the console

var forthNumber = 25;
let forthString = "Front end Developer '2025'";
console.log(forthNumber + ' ' + forthString);


// 5. - You have 2 variable, first is number type second is string type.Show the type which is sum of these variables

let fifthNumber = 12;
let fifthString = '4';
let summary = fifthNumber + fifthString;
console.log(typeof summary);


// 6. - Declare 2 variable, which is contain the same value but different type.Show the result and type of these variables summary.

let sixthNumber = 5;
let sixthString = "5";
let sixthSummary = sixthNumber + sixthString;
console.log(sixthNumber + ' = ' + typeof sixthNumber);
console.log(sixthString + ' = ' + typeof sixthString);
console.log(sixthSummary + ' = ' + typeof sixthSummaryummary);


// 7. - Create a variable, named y, assigning the value 50 to it

let y;
y = 50;
console.log(y);


// 8. - Create a variable, named fruitName, assigning the value Orange to it.

let fruitName;
fruitName = 'Orange';
console.log(fruitName);


// 9. - Show the sum of 3 + 10, applying the following two variables: x and y.

let x = 3;
let y = 10;
let sum = x + y;
console.log(x + '+' + y + '=' + sum) 


// 10. - Create a variable, named z, assigning x + y to it.Then, show the result in an alert box.

let x = 3;
let y = 10;
let z = x+y;
alert(z);


// 11. - On a single line, declare three variables with the given names and values: firstName = "David" lastName = "Johnson" age = 41

let firstName = 'Nilufar', lastName = 'Shikhalizada', age = 27;
console.log(firstName + ' ' + lastName + ' ' + age);


// 12. - Multiply 5 with 7, alerting the result.

let a = 5;
let b = 7;
let multiply = a * b;
alert(multiply);


// 13. - Alert the reminder, once 13 is divided by 7.

let d = 13;
let c = 7;
let reminder = d % c;
alert(reminder);


// 14. - Apply the right assignment operator, which will result in x being 20(the same as x = x + y).

let x = 10;
let y = 10;
x += y;
console.log(x)


// 15. - Apply the right assignment operator, which will result in x, being 30.

let x = 20;
let y = 10;
x += y;
console.log(x)


// 16. - create variables which contain values in all types, and output the result and types on the console

let sixteenNumber = 30;
let sixteenString = 'Hello';
let sixteenBoolean = false;
let sixteenNull = null;
let sixteenUndefined;
let sixteenArray = ['hello', 'front', 'end', 'developer'];
let sixteenObject = { 'name': 'Nilufar', 'surname': 'Shikhalizada', 'age': 27 };
let sixteenFunction = function () { }
console.log(sixteenNumber + ' = ' + typeof sixteenNumber);
console.log(sixteenString + ' = ' + typeof sixteenString);
console.log(sixteenBoolean + ' = ' + typeof sixteenBoolean);
console.log(sixteenNull + ' = ' + typeof sixteenNull);
console.log(sixteenUndefined + ' = ' + typeof sixteenUndefined);
console.log(sixteenArray + ' = ' + typeof sixteenArray);
console.log(sixteenObject + ' = ' + typeof sixteenObject);
console.log(sixteenFunction + ' = ' + typeof sixteenFunction);





// JS LESSON 2ND TASKS


// 1. 5 - dən 26 - ya qədər ədədlərin ədədi ortasını tapıb çap edin. 10 ilə 100 arasındakı ədədlərdən yalnız cüt olanları mətn formatında ekrana çıxarın

let sum = 0
let awerage = 0

for (i=5; i<26; i++){
    sum += i
    awerage = sum/21
}
console.log(awerage)

let result = ''

for (j = 10; j<100; j++) {
    if (j % 2 === 0) {
        result += j.toString() + ' '
    }
}

document.writeln(result);



// 3. 0 - dan 40 - a qədər ədədlər içərisindən 10 a bölünən ədədləri ekrana çıxarın

let divideTen = ' '

for(i=0; i<40; i++){
    if (i % 10 === 0 ){
        divideTen += i + ' '
    }
}
console.log(divideTen)


// 4. Hər hansı bir ədəd daxil edin və onun 3 - ə bölünən olub olmadığını yoxlayan bir alqorithm yazın

let num = 16

if(num % 3 === 0){
    console.log(true)
}
else{
    console.log(false)
}


// 5. 30 ilə 40 arasındakı ədədlərin cəmi ilə hasilinin ədədi ortasını tapın

let sum = 0
let result = 1
let average = 0

for(i=31; i<40; i++){
    sum += i
    result *= i
    average = (sum+result)/2
}
console.log(sum)
console.log(result)
console.log(average)


// 6. 0 - dan 100 - ə qədər ədədlərdən 10 və ya 70 istisna olmaqla digərlərini ekranda string formasında çap edin

let stringHundr = ' '

for(i=0; i<100; i++){
    if(i === 10 || i === 70){
        continue
    }
    stringHundr += i.toString() + ' '
}

console.log(stringHundr)


// 7. 0 - dan 100 - ə qədər ədədlərdən 20dən kiçik və 50 - dən böyük olanların ayrılıqda cəmini hesablayın

let maxTwenty = 0
let minFifty = 0

for(i=0; i<100; i++){
    if(i<20){
        maxTwenty += i
    }
    else if(i>50){
        minFifty += i
    }
}
console.log(maxTwenty)
console.log(minFifty)


// 8. 1 - den 9 - a qeder olan ededleri ekrana cixarin

let num = ' '

for(i=1; i<=9; i++){
    num += i.toString() + ' '
}
console.log(num)


// 9. 1 - den 50 - e qeder olan ededlerin cemini tapin

let sum = 1

for(i=1; i<50; i++){
    sum += i
}

console.log(sum)


// 10. 2 ve 36 arasinda olan ededlerden 4 ve 17 - den baska hamisini ekrana cixarin

let num = ' '

for (i = 2; i < 36; i++) {
    if(i === 4 || i === 17){
        continue
    }
    num += i.toString() + ' '
}
console.log(num)





// JS 3RD TASKS


// 1. 2 ədədin fərqini hesablayan function yazın,əgər 1 - ci rəqəm ikincidən böyükdürsə.

function functionNumber(a,b){
    if(a>b){
        return a-b
    }
    else{
        return 'false'
    }
}
functionNumber()

console.log(functionNumber(10,8))
console.log(functionNumber(4, 9))


// 2. Əgər ədəd cüt ədəddirsə, onun kök altı dəyərini hesablayan function yazın

function evenNumber(a){
    if(a % 2 == 0){
        return Math.sqrt(a)
    }
    else{
        return ("It's wrong")
    }
}
evenNumber()

console.log(evenNumber(25))
console.log(evenNumber(16))


// 3. Ekrandan daxil edilən(promp) data - nın cüt olub olmadığını yoxlayan metod yazın.

let evenNumber = prompt('Add number')

if(evenNumber % 2 == 0 ){
    console.log('This is correct')
}
else{
    console.log('This is wrong')
}


// 4. Ekrandan daxil edən rəqəmin tipinin Nan olub olmadığını yoxlayan method yazın

let numberNan = prompt('Add number')

if( isNaN(numberNan)){
    console.log('This is NaN')
}
else{
    console.log('This is number')
}


// 5. Bir mətndə olan boşluqların sayını hesablayan function yazın.

let numberSpace = 0

function textSpace(text){
    numberSpace = text.split(' ').length - 1
}

textSpace('Hello I am Front End Developer')
console.log(numberSpace)


// 6. Əgər mətn mövcuddursa onun icərisindəki, -lərin sayını hesablayan method yazın. ?????????????????

let text = "Hello I'm Front-End-Developer"

if(text.length>0){
    console.log(text.split('-').length - 1)
} else{
    console.log("Doesn't have")
}


// 7. Mətnin 2 və 6 - cı indexində olan hissəni kəsib ekrana çıxarın

let text = "Hello I'm Front-End-Developer"
let sliceText = text.slice(2,6)

document.write(sliceText)

8. Mətndəki boşluqların sayına görə bölüb array - ə çevirin.

let text = "Hello I'm Front End Developer"

    console.log(text.split(' '))


// 9. Mətnin bütün hərflərini böyük edən bir method yazın

let text = "Hello I'm Front End Developer"
text = text.toLocaleUpperCase()

    console.log(text)


10. Mətnin bütün hərflərini kiçik edən bir method yazın

let text = "Hello I'm Front End Developer"
text = text.toLocaleLowerCase()

console.log(text)


// 11. Bir mətn daxil edin və 4 - cü indexdə yerləşən char - ın 'n' hərfi olub olmadığını yoxlayın.

let text = "Hello I'm Front End Developer"

if(text[4] === 'n'){
    console.log("Nth index is N")
}else{
    console.log("Nth index isn't N")
}


// 12. Bir array teyin et və sonuncu index - dəki dəyər ilə 1 - ci indexdəki dəyərin cəmini başka bir stringdə ekrana çıxar.

let arrayText = ['Nilufar', 'Front End Developer', 27, 'Azerbaijan', true]
let sum

sum = arrayText[0] + ' ' + arrayText[arrayText.length - 1]

console.log(sum)


// 13. Bir array təyin et və sonuncu index - ə 'Salam' deyerini menimset

let arrayText = ['Nilufar', 'Front End Developer', 27, 'Azerbaijan', true]
arrayText[arrayText.length - 1] = 'Salam'

console.log(arrayText)


// 14. Array təyin et və uzunluğunu hesablayan bir alqorihtm yaz.

let arrayText = ['Nilufar', 'Front End Developer', 27, 'Azerbaijan', true]

console.log(arrayText.length)


// 15. Bir mətndəki sözlərin sayını hesablayan alqorithm yaz.

let text = "Hello I'm Front End Developer"

console.log(text.split(' ').length)


// 16. İki random eded teyin et ve onlarin cemini hesablayan alqorithm yaz

let number1 = Math.floor(Math.random() * 101)
let number2 = Math.floor(Math.random() * 101)

function sumRandom(a,b){
    console.log(number1+number2)
}
sumRandom(number1,number2)


// 17. 3 - dən 47 - ya qədər ədədlərin ədədi ortasını tapıb çap edin

let sum = 0
let awerage = 0

for (i=3; i<47; i++){
    sum += i
    awerage = sum/44
}
console.log(awerage)


// 18. 15 ilə 106 arasındakı ədədlərdən yalnız cüt olanları mətn formatında ekrana çıxarın

let result = ''
for (j = 15; j<106; j++) {
    if (j % 2 === 0) {
        result += j.toString() + ' '
    }
}

console.log(result);


// 19. 5 - dan 60 - a qədər ədədlər içərisindən 5 a bölünən ədədləri ekrana çıxarın

let divideTen = ' '
for(i=5; i<60; i++){
    if (i % 5 === 0 ){
        divideTen += i + ' '
    }
}

console.log(divideTen)


// 20. Hər hansı bir ədəd daxil edin və onun 6 - a bölünən olub olmadığını yoxlayan bir alqorithm yazın

let num = Math.floor(Math.random() * 101)

if(num % 6 === 0){
    console.log(num + ' 6 - a bölünür')
}
else{
    console.log(num + ' 6 - a bölünmür')
}


// 21. 34 ilə 46 arasındakı ədədlərin cəmi ilə hasilinin ədədi ortasını tapın

let sum = 0
let result = 1
let average = 0

for(i=34; i<46; i++){
    sum += i
    result *= i
    average = (sum+result)/2
}
console.log(sum)
console.log(result)
console.log(average)


// 22. 5 - dan 150 - ə qədər ədədlərdən 12 və ya 88 istisna olmaqla digərlərini ekranda string formasında çap edin, hemcinin stringin uzunlugunu gosterin.

let stringHundr = ' '

for(i=5; i<150; i++){
    if(i === 12 || i === 88){
        continue
    }
    stringHundr += i.toString() + ' '
}

console.log(stringHundr)


// 23. 0 - dan 100 - ə qədər ədədlərdən 20dən kiçik və 50 - dən böyük olanların ayrılıqda cəmini hesablayəın

let maxTwenty = 0
let minFifty = 0

for(i=0; i<100; i++){
    if(i<20){
        maxTwenty += i
    }
    else if(i>50){
        minFifty += i
    }
}
console.log(maxTwenty)
console.log(minFifty)


// 24. İcerisinde 5 string tipli data olan array teyin edin, ve uzunlugu 5 - den yuxari olan datalari baska bir arraya menimsedib ekrana cixarin

let stringArray = ['Nilufar', 'Zeyneb', 3, 'Samira', true, 'Nuriyya', 'Aygun', 32]
let newArr = [ ]

for(i=0; i<stringArray.length; i++){
    if( stringArray[i].length > 5 ){
        newArr.push(stringArray[i])
    }
}
console.log(newArr)


// 25. Bir metn teyin edin ve icerisinde reqem olub olmadigin i yoxlayin, eger reqem varsa hemin reqemleri baska bir stringe menimsedin, diger metnden ise silin.

let text = "I'll be Front End Developer in 2025";
let numbers = "";
let newText = "";

for (let i = 0; i < text.length; i++) {
    let symbol = text[i];
    if (symbol >= '0' && symbol <= '9') {
        numbers += symbol;        
    } else {
        newText += symbol;        // Qalanları yeni mətndə saxla
    }
}

console.log("New Text: " + newText);
console.log("Numbers: " + numbers);


// 26. Bir metn teyin edin ve içerisinde olan "i" hərflərinin hamısını silin

let text = "Hi I'm Front End Developer, I live in Turkey"
let result = ""

    result = text.replace(/i/gi, ' ')
console.log(result)


// 27. Ekrandan bir eded daxil edin ve bu ededin palindrom olub olmadigini yoxlayan alqorithm yazin.

let number = prompt('Add number')
let reverseNumber = number.split("").reverse().join("")

if(number === reverseNumber){
    console.log('This is palindrome')
} else{
    console.log('This is not palindrome')
}


// 28. Bir deyer gonderen method yazin ve 100 - defe ekranda cap edin

function mainFunction(text){
    for(i=0; i<100; i++){
        document.write(text + ' ')
    }
}

mainFunction("Hi, I'm Nil")


// 29. Iki array teyin edin ve ikisini bir arraya menimsedib console - da cixarin

let arr1 = ['Nilufar', 'Zeyneb', 3, 'Samira']
let arr2 = [true, 'Nuriyya', 'Aygun', 32]
let allArr = arr1.concat(arr2)

console.log(allArr)


// 30. Bir array teyin edin ve icerisinde olan cut ededlerin cemini tapin.

let stringArray = ['Nilufar', 'Zeyneb', 3, 'Samira', true, 'Nuriyya', 24, 'Aygun', 32]
let sum = 0

for(i=0; i<stringArray.length; i++){
    if(stringArray[i] % 2 == 0){
        sum += stringArray[i]
    }
}
console.log(sum)