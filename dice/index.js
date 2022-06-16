
function refresh(){
    var randomNumber1=(Math.floor(Math.random()*6)+1);
    var randomNumber2=(Math.floor(Math.random()*6)+1);
    document.getElementById("player1").src="../images/dice"+randomNumber1.toString()+".png";
    document.getElementById("player2").src="../images/dice"+randomNumber2.toString()+".png";
    if(randomNumber1>randomNumber2){
        document.getElementsByClassName("heading")[0].innerText="Player 1 Wins";
    }
    else if(randomNumber2>randomNumber1){
        document.getElementsByClassName("heading")[0].innerText="Player 2 Wins";
    }
    else{
        document.getElementsByClassName("heading")[0].innerText="Draw";
    }
}