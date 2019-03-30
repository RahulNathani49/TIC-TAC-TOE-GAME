var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var clk = 1;

var alclk1 = 1;
var alclk2 = 1;
var alclk3 = 1;
var alclk4 = 1;
var alclk5 = 1;
var alclk6 = 1;
var alclk7 = 1;
var alclk8 = 1;
var alclk9 = 1;

var tieclk = 0;

function boxone(){
    
        if(alclk1>1){
            alert("INVALID!");
        }
    else{
        tieclk++;
        console.log(tieclk);
   

        if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
            alclk1++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk1++;
            }
        
    if( d1.innerHTML == "PLAYER = 2"){
        box1.innerHTML="X";
    }
    else{
       box1.innerHTML="O";  
    }
    }
    
    if(box1.innerHTML=="X" && box2.innerHTML=="X" && box3.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
    if(box1.innerHTML=="X" && box5.innerHTML=="X" && box9.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";    
    }
    if(box1.innerHTML=="X" && box4.innerHTML=="X" && box7.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
        if(box1.innerHTML=="O" && box2.innerHTML=="O" && box3.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
    if(box1.innerHTML=="O" && box5.innerHTML=="O" && box9.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";    
    }
    if(box1.innerHTML=="O" && box4.innerHTML=="O" && box7.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
  
  tie();
}

function boxtwo(){
    
                if(alclk2>1){
            alert("INVALID!");
        }
    else{
        tieclk++;
        console.log(tieclk);

   
        if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
            alclk2++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk2++
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box2.innerHTML="X";
    
    }
    else{
       box2.innerHTML="O";  
    }
        
    }
     if(box1.innerHTML=="X" && box2.innerHTML=="X" && box3.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box2.innerHTML=="X" && box5.innerHTML=="X" && box8.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
         if(box1.innerHTML=="O" && box2.innerHTML=="O" && box3.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box2.innerHTML=="O" && box5.innerHTML=="O" && box8.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
    tie();
    
  
}

function boxthree(){
                    if(alclk3>1){
            alert("INVALID!");
        }
    else{
        tieclk++;
        console.log(tieclk);
         if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
             alclk3++;
             
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk3++;
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box3.innerHTML="X";
    
    }
    else{
       box3.innerHTML="O";
        
    }
    }
    
     if(box1.innerHTML=="X" && box2.innerHTML=="X" && box3.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box3.innerHTML=="X" && box5.innerHTML=="X" && box7.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box3.innerHTML=="X" && box6.innerHTML=="X" && box9.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
         if(box1.innerHTML=="O" && box2.innerHTML=="O" && box3.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box3.innerHTML=="O" && box5.innerHTML=="O" && box7.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box3.innerHTML=="O" && box6.innerHTML=="O" && box9.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
    tie();
  
}

function boxfour(){
    
        if(alclk4>1){
            alert("INVALID!");
        }
    else{
        tieclk++;
        console.log(tieclk);
  
    
        if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
            alclk4++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk4++;
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box4.innerHTML="X";
    
    }
    else{
       box4.innerHTML="O";  
    }
    
    }
     if(box4.innerHTML=="X" && box5.innerHTML=="X" && box6.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box1.innerHTML=="X" && box4.innerHTML=="X" && box7.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
       if(box4.innerHTML=="O" && box5.innerHTML=="O" && box6.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box1.innerHTML=="O" && box4.innerHTML=="O" && box7.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
    tie();
    
    
}

function boxfive(){
        if(alclk5>1){
            alert("INVALID!");
        }
    else{
        tieclk++;
        console.log(tieclk);
  
    
        if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
            alclk5++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk5++;
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box5.innerHTML="X";
    
    }
    else{
       box5.innerHTML="O";  
    }
      
    
    }
       if(box1.innerHTML=="X" && box5.innerHTML=="X" && box9.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box3.innerHTML=="X" && box5.innerHTML=="X" && box7.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
       if(box2.innerHTML=="X" && box5.innerHTML=="X" && box8.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box4.innerHTML=="X" && box5.innerHTML=="X" && box6.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
    
       if(box1.innerHTML=="O" && box5.innerHTML=="O" && box9.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box3.innerHTML=="O" && box5.innerHTML=="O" && box7.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
       if(box2.innerHTML=="O" && box5.innerHTML=="O" && box8.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box4.innerHTML=="O" && box5.innerHTML=="O" && box6.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
    tie();
}

function boxsix(){
        if(alclk6>1 ){
            alert("INVALID!");
        }
    else{
    tieclk++;
        console.log(tieclk);
        if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
            alclk6++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk6++;
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box6.innerHTML="X";
    
    }
    else{
       box6.innerHTML="O";  
    }
        
    }
      if(box3.innerHTML=="X" && box6.innerHTML=="X" && box9.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box4.innerHTML=="X" && box5.innerHTML=="X" && box6.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box4.innerHTML=="O" && box5.innerHTML=="O" && box6.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box4.innerHTML=="O" && box5.innerHTML=="O" && box6.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
   
    tie();
}

function boxseven(){
        if(alclk7>1){
            alert("INVALID!");
        }
    else{
        
    tieclk++;
        console.log(tieclk);
    
        if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
            alclk7++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk7++;
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box7.innerHTML="X";
    
    }
    else{
       box7.innerHTML="O";  
    }
    }
      if(box4.innerHTML=="X" && box1.innerHTML=="X" && box7.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box7.innerHTML=="X" && box5.innerHTML=="X" && box3.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box7.innerHTML=="X" && box8.innerHTML=="X" && box9.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
          
    }
          if(box4.innerHTML=="O" && box1.innerHTML=="O" && box7.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box7.innerHTML=="O" && box5.innerHTML=="O" && box3.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box7.innerHTML=="O" && box8.innerHTML=="O" && box9.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
          
    }
    tie();
      
    
}
function boxeight(){
        if(alclk8>1){
            alert("INVALID!");
        }
    else{
        tieclk++;
        console.log(tieclk);

        if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
            alclk8++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++;
            alclk8++;
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box8.innerHTML="X";
    }
    else{
       box8.innerHTML="O";  
    }
        
    
    }
          if(box2.innerHTML=="X" && box5.innerHTML=="X" && box8.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box7.innerHTML=="X" && box8.innerHTML=="X" && box9.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
          if(box2.innerHTML=="O" && box5.innerHTML=="O" && box8.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box7.innerHTML=="O" && box8.innerHTML=="O" && box9.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
    tie();
}
function boxnine(){
        if(alclk9>1){
            alert("INVALID!");
        }
    else{
        tieclk++;
        console.log(tieclk);
    
       if(clk%2 == 0){
            d1.innerHTML="PLAYER = 1";
            clk++;
           alclk9++;
            }
        else{
            d1.innerHTML="PLAYER = 2";
            clk++; 
            alclk9++;
            }
    if( d1.innerHTML == "PLAYER = 2"){
        box9.innerHTML="X";
        
    
    }
    else{
       box9.innerHTML="O";  
    }
   
    }
              if(box9.innerHTML=="X" && box7.innerHTML=="X" && box8.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
      if(box9.innerHTML=="X" && box5.innerHTML=="X" && box1.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
              if(box9.innerHTML=="X" && box6.innerHTML=="X" && box3.innerHTML=="X"){
        d2.innerHTML="PLAYER 1 WON";
    }
              if(box9.innerHTML=="O" && box7.innerHTML=="O" && box8.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
      if(box9.innerHTML=="O" && box5.innerHTML=="O" && box1.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    }
              if(box9.innerHTML=="O" && box6.innerHTML=="O" && box3.innerHTML=="O"){
        d2.innerHTML="PLAYER 2 WON";
    } 
    tie();
}





function tie(){
    if(d2.innerHTML=="" && tieclk==9){
        d2.innerHTML="MATCH TIE";
        console.log(d2);
    }
}