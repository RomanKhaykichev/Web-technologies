// всплывающее окно - Hello, word!
alert("Hello, word!");

//result 158+2
alert(`result:${158+2}`);

// передать строковый параметр в диалоговое окно.
let n=prompt("")
alert("Hello, " + n);

/* вызвать диалоговое окно с заголовком “Как вас зовут?” 
и подсказкой в поле ввода “Имя”. 
А затем вывести имя, которое ввели в поле ввода.*/
let name =prompt("What is you name?", "Name");
alert(`Hello, ${name}!`);

// вывести на экран в диалоговом окне текст с сообщением: “Вы уверены?” и кнопками «ОК» , «Отмена»
// Ver_1
if (confirm("Are you confident?")) { alert("Good"); }
else { alert("bad.."); }
// Ver_2
let accessAllowed=(confirm("Are you confident?"))? alert("Good"):alert("bad..");

//  перепишите код, используя конструкцию switch-case
let age=parseInt(prompt("How old are you"))

switch (age) {
    case 18:
        alert("its okey, you can sit more")
        break;
        
    case 10:
        alert("its time to do homework")
        break;
        
    case 30:
        alert("its time to sleep, tomorrow you go to work")
        break;

    default:
        alert("We dont know what to advise you")
        break;
}
// function sum(a,b){
//     return a+b;
// }
// let a=parseInt(prompt("Enter number a"));
// let b=parseInt(prompt("Enter number b"));
// alert(sum(a,b));
