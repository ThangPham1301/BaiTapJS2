//bật đèn
let on = document.getElementById("btn__turn-on");

function clickOn(){
    let function__hover = document.getElementById("function");
   let onClickLight = function__hover.style.display;
   let function__hover1 = document.getElementById("function");
   let changeBtn = function__hover1.getAttribute("data-color");
   let function__hover2 = document.getElementById("btn__turn-off");
    function__hover2.style.backgroundColor = "";
   let off_bgcolor = function__hover2;
   let btnTurnOff = document.getElementById("btn__turn-off");
    btnTurnOff.style.backgroundColor = off_bgcolor ;
   let img__off = document.getElementById("light__img-off");
    img__off.style.display = onClickLight;
    let btnTurnOn = document.getElementById("btn__turn-on");
    btnTurnOn.style.backgroundColor = changeBtn;
}
on.onclick=clickOn;





// tắt đèn
let off = document.getElementById("btn__turn-off");
function clickOff(){
    let function__hover = document.getElementById("light__img-off");
        function__hover.style.display = "";
    let function__hover1 = document.getElementById("function");
        let changeBtn = function__hover1.getAttribute("data-color");
   let offClickLight = function__hover;
   let img__off = document.getElementById("light__img-off");
    img__off.style.display = offClickLight;
    let btnTurnOff = document.getElementById("btn__turn-off");
    btnTurnOff.style.backgroundColor = changeBtn;
    let function__hover2 = document.getElementById("btn__turn-on");
    function__hover2.style.backgroundColor = "";
   let off_bgcolor = function__hover2;
   let btnTurnOn = document.getElementById("btn__turn-on");
    btnTurnOn.style.backgroundColor = off_bgcolor ;

}
off.onclick=clickOff;