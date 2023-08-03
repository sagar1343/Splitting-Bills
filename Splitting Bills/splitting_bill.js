
document.getElementById("my_button").onclick =my_fun;
function my_fun(){
    const x= document.getElementById("amt").value;
    const y= document.getElementById("people").value;
    document.getElementById("result").innerHTML="Contribution per person is: "+x/y;
    }