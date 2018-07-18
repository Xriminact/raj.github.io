
function change(){
  document.getElementById('topbot').innerHTML = "+_+";
  setTimeout(change2,400);
}

function change2(){
  document.getElementById('topbot').innerHTML = "~_~";
  setTimeout(change3,400);
}

function change3(){
  document.getElementById('topbot').innerHTML = "@_@";
  setTimeout(change,400);
}

function champ1(){
  typeWriter();
  typeWriter2();
  typeWriter3();
  typeWriter4();

}

var i = 0;
var j = 0;
var k = 0;
var l = 0;
var txt = 'Hello !'; /* The text */
var txt2 = "I'm Virtumer |";
var txt3 = "A bot which lets you connect to high-end PCs"
var txt4 = "through cloud computing to play games.";
var speed1 = 180;
var speed2 = 140;
var speed3 = 80;
var speed4 = 80;


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing_effect_1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed1);
  }
}

function typeWriter2() {
  if (j < txt2.length) {
    document.getElementById("typing_effect_2").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed2);
  }
}

function typeWriter3() {
  if (k < txt3.length) {
    document.getElementById("typing_effect_3").innerHTML += txt3.charAt(k);
    k++;
    setTimeout(typeWriter3, speed3);
  }
}

function typeWriter4() {
  if (l < txt4.length) {
    document.getElementById("typing_effect_4").innerHTML += txt4.charAt(l);
    l++;
    setTimeout(typeWriter4, speed4);
  }
}
