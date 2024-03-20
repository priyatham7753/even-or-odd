var p1_arr=[]
var p2_arr=[]
var p1_score=0
var p2_score=0
var count=0;
function playGame(){
    if(count!=5){
    var p1_n=Math.ceil(Math.random()*50);
    var p2_n=Math.ceil(Math.random()*50);
    console.log(p1_n);
    console.log(p2_n);
    if (p1_n%2==0){
        p1_score++;
        document.getElementById("p1s").textContent=p1_score;
        
    }
    if(p2_n%2==0){
        p2_score++;
        document.getElementById("p2s").textContent=p2_score;
    }
    p1_arr.push(p1_n);
    p2_arr.push(p2_n);
    updatecircle();
    count++;
}
else{
    if(p1_score>p2_score){
        document.getElementById("res").textContent="Playere 1 Wins !!!";}
    else if (p1_score<p2_score){
         document.getElementById("res").textContent="Player 2 Wins !!!"
} 
    else{
        document.getElementById("res").textContent="Draw !!!";
    }
}

}
function updatecircle(){
    var p1circle=document.getElementById("player1").children;
    for (let i=0; i<p1_arr.length;i++){
        if (p1_arr[i]%2==0){
            p1circle[i].style.backgroundColor="white";
        }
        else{
            p1circle[i].style.backgroundColor="red";
        }
    }
    var p2circle=document.getElementById("player2").children;
    for (let i=0;i<p2_arr.length;i++){
        if(p2_arr[i]%2==0){
            p2circle[i].style.backgroundColor="white";

        }
        else{
            p2circle[i].style.backgroundColor="red";
        }
    }
   
}

