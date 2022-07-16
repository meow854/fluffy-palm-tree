num1= "";
num2= "";
answer= "";
question= "";

function send() {
    num1= document.getElementById("num1").value;
    num2= document.getElementById("num2").value;
    answer= parseInt(num1) * parseInt(num2);
    question= document.getElementById("question").innerHTML= "Question: " + num1 + " x " + num2 + "=";
    document.getElementById("num1").value= "";
    document.getElementById("num2").value= "";
}