//Напишите функцию именную, которая при нажатии кнопки выводит в блок див на странице значения из переменной A.
let a = "Фигурное катание"

let x = function clickOnClick (){
  let myInput = document.querySelector(".coming")
  myInput.innerHTML = a
}



//Напишите простой калькулятор из 4 выражений + - * / для этого сделайте 4 кнопки и поле ввода, 
//затем при вводе каждого числа и после при нажатии на кнопку должна выполнится одна из функций, 
//в зависимости от того какую кнопку мы нажали


function calculation(xy,yx, op){

  let result

switch (op) {
  case 'plus':
    result = xy + yz;
    break;
  case 'minus':
    result = xy - yx;
    break;
  case 'multiplication':
    result = xy * yx;
    break;
  case 'division':
    result = xy / yx;
    break;
}

return result
}



function res (op){
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;

   n1=+n1
   n2=+n2

  let result = document.querySelector(".result")
  result.innerHTML = calculation(n1,n2,op)
}

