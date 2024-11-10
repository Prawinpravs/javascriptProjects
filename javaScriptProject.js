/*
//var a = prompt(parseInt("Enter the Number"));   



//Check whether the give n number is Psoitive or Negative or Even or Odd

/*
document.write("<h3>"+"Check whether the give n number is Psoitive or Negative or Even or Odd "+"<h3>")
if(a>=0)
    {
        document.write(" Positive number"+"<br/>");
        if(a%2===0)
            {
                document.write("Even")
            }
        else
            {
                document.write("Odd");

            }
    }
else
    {

        document.write("Negative number")

    }

*/
//To check whether the given number is positive even num or negative number
/*if(a>=0 && a%2===0 )
    {
        document.write(" Positive  and Even number"+"<br/>");
    }
else
    {
        document.write("Negative number");
    }*/


/*
for(var a=1; a<=10;a++)
    {
        document.write(n*a+"<br/>");    
    }*/
 


/*var a=1;
while(a<10)
    {
        document.write(a+ " number is less than 10<br>");
        a++;
    }*/




/*var a=1;
do
    {
        document.write("PrawinPravs<br>");
        a++;

    }while(a<10);*/




/*
var a;
for(a=0;a<10;a++)
    {
        document.write("for loop"+a+"<br>");
    }

*/




//Array
/*
var a =["Prawin","Sagar"];
document.write(a+"<br>");



var b= new Array("loves");
document.write(b+"<br>");



var c
c = new Array("cutie, Pie");
document.write(c+"<br>");


var d =["Prawin","alias"];
d.push("Bantuuuu");
d.push(2);
document.write(d+"<br>");



var e= ["buntu","And","Cutie","are mate for each other"];
for(var i=0;i<e.length;i++)//change the value of i
{
    
document.write(e[i]+"<br>");
}
*/




//Create an input box check whether the given 2 inputs are correct or not

/*
function signInForm() 
{
    var rd1 = document.getElementById("radio1");
    var rd2 = document.getElementById("radio2");
    if(rd1.checked==true)
            alert("The selected channel is "+rd1.value);
    else if(rd2.checked==true)
             alert("The selected channel is "+rd2.value);
    else
        alert("No channel is selected");
}
*/




/*Create a dropdown  and select an option and display alert message*/

/*function clickMe() {
    var menuId = document.getElementById("menuId");
    alert("Selected item is:"+menuId.value);
}*/


/*getElementByClassName / Tag Name method*/
/*
function clickMe() {
    var menu = document.getElementsByClassName("para");
    for(var a=0; a<=menu.length;a++)
        {
            menu[a].style.color = 'red';
        }
}
*/





/*//HTML code for form validation
<form action="G:\HTML Code\Ullu.com\ulluMainProject.html" onsubmit=" return clickMe()">
         <input id="usr" type="text" placeholder="UserName">UserName<br/>
         <input id="pass" type="password" placeholder="Password">Password<br/>
           <button type="submit">Submit</button>
          </form>*/




/*Form validation with complete authenticaiton */
//HTML code
/*
<form action="G:\HTML code\ullu.com\ulluLogin.html" onsubmit=" return clickMe()">
           <input id="usr" type="text" placeholder="UserName">
           <label id="formLabel1"  visi style="color: red; visibility:hidden;">Invalid</label> 
           Email<br/>
           <input id="pass" type="password" placeholder="Password">
           <label id="formLabel2"  visi style="color: red; visibility:hidden;">Invalid</label> 
           Password<br/>
          
           <button type="submit">Submit</button>
           
          </form>
*/

/*Form validation with complete authenticaiton */
/*
function clickMe()
{
    var userName = document.getElementById("usr");
    var password = document.getElementById("pass"); 
    var regularExress = /@gmail.com/i;
    if(userName.value.trim() == "")
        {
            alert("please enter the valid Mail-ID");
            formLabel1.style.visibility = "visible";
            userName.style.border = "solid 3px red";
            return false;
        }
    else if(password.value.trim() == "")
        {
            alert("Please enter the Password");
            formLabel1.style.visibility = "hidden";
            formLabel2.style.visibility = "visible";
            password.style.border = "solid 3px red";
            return false;   
        }
    else if(password.value.trim().length < 8)
        {
            alert("Password is too short");
            formLabel2.style.visibility = "hidden";
            formLabel3.style.visibility = "visible";
            password.style.border = "solid 3px red";
            return false;
        }
    else
        {
            return true;
        }

}

*/





//Regular Expression
//Regular Expression for Phone Number
      /*function clickMe() {
    var mail = document.getElementById("mail1").value;
    var regX1 = /^[7-9]\d{9}$/;
    if(regX1.test(mail))
          {
              
        document.getElementById("lab").innerHTML ="valid";
        document.getElementById("lab").style.visibility = "visible";
        }
          else
              {
                  document.getElementById("lab").innerHTML ="Invalid";
        document.getElementById("lab").style.visibility = "visible";
              }
      }
*/


//Regular Expression for Mail Validation
/*function clickMe() {
    var mail = document.getElementById("mail1").value;
    var regX1 = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8}?)$/;
    if(regX1.test(mail))
          {
              
        document.getElementById("lab").innerHTML ="valid";
        document.getElementById("lab").style.visibility = "visible";
        }
          else
              {
                  document.getElementById("lab").innerHTML ="Invalid";
        document.getElementById("lab").style.visibility = "visible";
              }
      }*/










//Program to use timing function setTimeout and clearTimeout
/*var globalVar = 0;
function msg()
{
    document.getElementById("timer").innerHTML = "Wellcome to Pravsquad";
    
}
function start()
{
    globalVar = window.setTimeout(msg,5000);
}
function stop()
{
    window.clearTimeout(globalVar);
}*/

// Timing functions setInterval and clearInterval
/*
var globalVar = 0;
var sec = 0;
function msg()
{
    document.getElementById("timer").innerHTML = sec+ " seconds";
    sec++;
    
}
function start()
{
    globalVar = window.setInterval(msg,1000);
}
function stop()
{
    window.clearInterval(globalVar);
}
*/




//Animation FadeIn and FadeOut

/*<button type="button" onclick="fadeIn()" id="start">Fade In</button>
          <img id="img1" src="psrsize1%20(1).png"/>
          <button type="button" onclick="fadeOut()" id="stop">Fade Out</button>
          */


/*
var opacity = 0;
var intervalID = 0;  

function fadeOut()
{
    intervalID = setInterval(hideImg,50);
}
function fadeIn()
{
    intervalID = setInterval(showImg,50);
}
function hideImg()
{
   var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity > 0)
        {
            opacity = opacity - 0.1;
            img.style.opacity = opacity;
            
        }
    else
        {
            clearInterval(intervalID)
        }
}
function showImg()
{
   var img = document.getElementById("img1");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity < 1)
        {
            opacity = opacity + 0.1;
            img.style.opacity = opacity;
            
        }
    else
        {
            clearInterval(intervalID)
        }
}

*/


//Zoom in and Zoom Out 
/*
var width = 100;
var intervalID = 0;
var difference = 2;

function mouseOver()
{
    intervalID = setInterval(zoomIn,20);
}

function mouseOut()
{
    intervalID = setInterval(zoomOut,20);
}
function zoomIn()
{
    if(width<200)
        {
            width = width+difference;
            document.getElementById("img1").style.width=width;
            console.log(width);
        }
    else
        {
            clearInterval(intervalID);
        }
}

function zoomOut()
{
     if(width>100)
        {
            width = width-difference;
            document.getElementById("img1").style.width=width;
        }
    else
        {
            clearInterval(intervalID);
        }
}

*/



//Program to create an E-commarce payment method lets shop Gucci shoe with discount!!!!
/*

let currentAccountBalance = 1000;// Currency in $
let gucciShoe = prompt("Enter the Gucci amount"); // In $
let coupon = prompt("Enter the Coupon number"); // In $  
    
function eCommerse() {
    if(gucciShoe<currentAccountBalance)
        {
            currentAccountBalance-=gucciShoe;
            document.write("yeahhhh you have successfully brought Gucci Shoe!!<br>");
            document.write("Your current balance is :" +currentAccountBalance)
        }
    else if(gucciShoe-coupon< currentAccountBalance)
        {
            currentAccountBalance-=gucciShoe-coupon;
            document.write("yeah i have brought Gucci shoe by using coupon<br>");
            document.write("Your current balance is :" +currentAccountBalance)
        }
    else {
        document.write("ooops !!! You don't have enough money to buy this Gucci shoe<br>");
        document.write("your Account Balance is",+currentAccountBalance);
    }
}
eCommerse();
*/

// For loop by using Array
/*
let stuudents = ["jack", "Pravs", "Kee", "Rakshi", "nags", "papu"];
for(let i=0; i<stuudents.length;i++)
    {
        document.write(stuudents[i]+"<br>");
    }
*/


/*Funciton in Javascript*/

/*let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
document.write(sum);*/
/*
 This is very long way to execute the program 
 So e can use function to execute this and reduce the code length and readability will b better
*/
/*

function addition(num1,num2)
{
    return num1 + num2;
}
addition(10,30);
*/

/*We can assign a mutliple value to it by using same code*/
/*
function addition(num1,num2)
{
    return num1 + num2;
}

let add = addition(10,30);
let add1 = addition(10,10);
let add2 = addition(30,30);
document.write(add+"<br/>");
document.write(add1+"<br/>");
document.write(add2+"<br/>");*/



//This is also one type of funtion declaration
/*
let add = function addition(num1,num2)
{
    return num1 + num2;
}
*/











///Objects Creation

//First type of Object creation

/*
let student2 = new Object();
        student2.firstName = "Keerthi";
        student2.lastName = "Mydool";
        student2.age = "23";
    
console.log(student2);

*/


//IMP Object creation 

/*
function Student(first,last,age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
        return "Hello!!!! This is " +this.firstName + " and I'm "+this.age+ " years old";
    }
    
}
//Another way of Object creation
//let s1 = new Student("Prawin","Pravs",27);
//console.log(s1);
//console.log(s1.greeting());


//             OR



//Another way of Object creation
let std=[];
std.push(new Student("Prawin","Pravs",27));
std.push(new Student("Kee","Mydool",23));
std.push(new Student("Pra","kruti",1));

for(let index=0; index<std.length; index++)
    {
let allStudent =std[index];
console.log(allStudent.greeting());
    }   
*/




//3rd method of creating an Object
/*
let student3 = {};
        student3.firstName = "Prawin";
        student3.lastName = "Pravs";
        student3.age = "27";

//This also can use to print
console.log(student3.lastName);
*/








//Program to calculate a percentage using Javascript 
//HTML code
/*<div class="container">
      
          <h1>X is what % of Y?</h1>
          <form id="xIsWhatPercentOfY">
              <input type="text" id="xInput">is what % of
              <input type="text" id="yInput">?
              <br>
              <br>
              <input type="submit" value="calculate" style="margin-left: 10%;">
              <br>
              <br>
              <h3 id="result" style="margin-left: 10%;">Result : 100%</h3>
              </form> 
      </div>*/

//Javascript code for Percentage Calculation

/*
let xInput = document.getElementById("xInput");
let yInput = document.getElementById("yInput");
let result = document.getElementById("result");
let form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener('submit',function(event){
    if(!xInput.value || !yInput.value)
        {
            alert("please enter the number");
        }
    else
        {
            let x = parseFloat(xInput.value);
            let y = parseFloat(yInput.value);
            let z = x/y;
            
            let finalResult = z*100;
            
            result.innerText="Result : "+ finalResult+"% \n"+x+" is "+finalResult+"% of "+y;
            event.preventDefault();
            
            
        }
});

*/



//Challenge -1
//Write a program to check your age in Days!!

//Html code for Age Calculation
/* <div class="container">
          <h2>Your Age In Days</h2>
          <div class="flex-box-container">
              <button type="button" onclick="clickMe()" class="btn btn-outline-primary">Click Me</button>
              <button type="reset" onclick="resetMe()" class="btn btn-outline-danger">Clear</button>
          </div>
          <div class="flex-box-container">
            <h3 id="result">Result :</h3>
          </div>
      </div>*/

//Age calculation in days

function ageInDay() {
    var bornYear = prompt("What year were you born?"); //We cannot use let for prompt
    var ageInDays = (2021 - bornYear) * 365;
    var result = document.getElementById("result").innerHTML =" Your are " +ageInDays+ " days old";
}

////Optional if we clear it once! we cannot give an input again and it won't take work!!!!
//function resetMe() {
//    document.getElementById('result').remove();
//}











//Challenge -2
//Create a multiple image by clicking a img generator button


function imgGenerator() {
    var image = document.createElement('img');
    image.width = "130";
    image.height = "130";
    var generatedImg = document.getElementById('generatedImg');
    image.src = "fishbg.gif";
    generatedImg.appendChild(image);
}










//Challenge -3
//Create a Game Rock, Paper, Scissor !!!!!!! bhoooom
//HTML code
/*
<h4>Challenge --> 3</h4>
          <h2>Rock, Paper, Scissor</h2>
          <div class="flex-box-container">
              <img id="rock" src="rock.jpg" width=130; height=130; onclick="rpsGame(this)"/>
              <img id="paper" src="paper.jpg" width=130; height=130; onclick="rpsGame(this)"/>
              <img id="scissor" src="scissor.png" width=130; height=130; onclick="rpsGame(this)" />
          </div>
*/


//Jacascript rpsGame code
function rpsGame(yourChoice) {
    
    var humanChoice, computerChoice;
    humanChoice = yourChoice.id;
    
    computerChoice = numberToChoice(randNumGenerator());
    
    let results = decideWinner(humanChoice,computerChoice);// [0,1] Human lost | Cumputer win
    
    let message = finalMessage(results);//Message = 'You won' color = 'Green'
   
    rpsImgHideAndSeek(yourChoice.id, computerChoice, message)
    
}


function randNumGenerator() {
    return Math.floor(Math.random() * 3);
}


function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}


function decideWinner(yourChoice, botChoice) {
    var rpsDatabase = {
          'rock':{'scissor': 1,'rock': 0.5, 'paper':0},
          'paper':{'rock': 1, 'paper': 0.5, 'scissor': 0},
          'scissor':{'paper': 1, 'scissor': 0.5, 'rock': 0}
    };
    yourScore = rpsDatabase[yourChoice][botChoice];
    computerScore = rpsDatabase[botChoice][yourChoice];
    return [yourScore, computerScore]; 
}


function finalMessage([yourScore, computerScore]){
    if(yourScore === 0)
        {
            return{'message': 'You lost!!!','color': 'red'}
        }
    else if(yourScore === 0.5)
        {
            return{'message': 'You tied!!!','color': 'blue'}        }
    else 
        {
            return{'message': 'You won!!!','color': 'green'}   
        }
}



function rpsImgHideAndSeek(yourImageChoice, computerImageChoice, finalMessage) {
    var imageDatabase = {
      'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };
    
    //Let's remove the Image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();
    
    //Have to create a Div 
    var yourDiv = document.createElement('div');
    var computerDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    
    yourDiv.innerHTML="<img src='"+imageDatabase[yourImageChoice]+"'width=130; height=130; style='box-shadow: 10px 10px 16px rgba(37,50,233,1); '>";
    
    messageDiv.innerHTML= "<h2 style='color:" + finalMessage['color']+ "; font-size: 40px; padding:30px;'>" + finalMessage['message']+ "</h2>";
    
    
    computerDiv.innerHTML="<img src='"+imageDatabase[computerImageChoice]+"'width=130; height=130; style='box-shadow: 13px 13px 16px rgba(233,0,0,1);'>";
    
    //AppendingChild 
    document.getElementById('flex-box-rps-div').appendChild(yourDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(computerDiv);
    
}




//Challenge -4
//Change the color of all buttons!!!!!!!1

//HTML code

/*<div class="flex-box-container">
              <form>
                  <select name="selectionMenu" id="buttonColorChange()">
                      <option value="reset">Reset</option>
                      <option value="red">Red</option>
                      <option value="green">Green</option>
                      <option value="random">Random</option>
                      <option value="blue">Blue</option>
                  </select>
              </form>
              <button type="button" class="btn btn-primary">Facebook</button>
              <button type="button" class="btn btn-danger">Google</button>
              <button type="button" class="btn btn-warning">Twitter</button>
              <button type="button" class="btn btn-success">Instagram</button>
          </div>*/



//Javascript code


let allButtons = document.getElementsByTagName('button');


// To push the original buttons back by clicking reset selection bar (by calling originalColorReset());
 let copyAllButtons = [];
for( let i=0; i < allButtons.length; i++) {
copyAllButtons.push(allButtons[i].classList[1]);
}



//Main funtion of this program
function buttonColorChange(buttonChange) {
        if( buttonChange.value === 'red') {
            buttonColorRed();
        }
    
        else if( buttonChange.value === 'green') {
            buttonColorGreen();
        }
    
        else if( buttonChange.value === 'blue') {
            buttonColorBlue();
        } 
    
        else if( buttonChange.value === 'random') {
            buttonColorRandom();
        }
    
        else if(buttonChange.value === 'reset')  {
        originalColorReset();
        }
    }

//Red color
function buttonColorRed() {
    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
        console.log(allButtons);
    }
}



//Greeen color
function buttonColorGreen() {
    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
        console.log(allButtons);
    }
}


//Blue color
function buttonColorBlue() {
    for(let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-primary');
        console.log(allButtons);
    }
}


//Random color
function buttonColorRandom() {
    let colorChoice = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-link', 'btn-info'];
    for(let i=0; i < allButtons.length; i++) {
        let randNumber = Math.floor(Math.random()*6);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(colorChoice[randNumber]);
    }
}

function originalColorReset() {
    for ( let i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}












//Blackjack 

//Blackjack HTML code

/* <h4> Challenge -> 4</h4>
            <h4>Blackjack</h4>
                <div class="flex-blackjack-row-1">
                    <h3><span id="blackjack-result">Let's play</span></h3>
                </div>
                <div class="flex-blackjack-row-2">  
                    <div class="your-box">
                        <h2>You: <span id="blackjack-your-score">0</span></h2>      
                    </div>
                    <div class="dealer-box">
                        <h2>Dealer: <span id="blackjack-dealer-score">0</span></h2>  
                    </div>
                </div>
                <div class="flex-blackjack-row-3">
                    <button type="button" class="btn btn-primary" id="blackjack-hit">Hit</button>
                    <button type="button" class="btn btn-success" id="blackjack-stand">Stand</button>
                    <button type="button" class="btn btn-danger" id="blackjack-deal">Deal</button>
                </div>
                <div class="flex-blackjack-row-4">
                    <table>
                      <tr>
                          <th>Wins</th>
                          <th>Losses</th>
                          <th>Draws</th>
                      </tr>
                      <tr>
                          <td><span id="blackjack-wins">0</span></td>
                          <td><span id="blackjack-losses">0</span></td>
                          <td><span id="blackjack-draws">0</span></td>
                      </tr>
                  </table>
              
                </div>*/

// Blackjack Game Javascript


let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-score', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-score', 'div': '#dealer-box', 'score': 0},
    'cards': [ '2','3','4','5','6','7','8','9','10','K','Q','J','A' ],
    'cardValue': { '2': 2,'3': 3,'4': 4,'5': 5,'6': 6,'7': 7,'8': 8,'9': 9,'10':  10,'K': 10,'Q': 10,'J': 10,'A': [1, 11] },
    'wins': 0,
    'draws': 0,
    'losses': 0,
    'isStand': false,
    'turnsOver': false,
};

const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio('sounds/swish.m4a');
const WinSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector("#blackjack-hit").addEventListener('click',blackjackHit);

document.querySelector('#blackjack-stand').addEventListener('click',blackjackStand);

document.querySelector('#blackjack-deal').addEventListener('click',blackjackDeal);



function blackjackHit() {
    
    if(blackjackGame['isStand'] === false) {
        let card = randomCard();
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
    }
}


//Timeout function

function timmer(miliSec) {
    return new Promise(resolve => setTimeout(resolve, miliSec));
}


// We have to make it as Asynchronous for time delay
async function blackjackStand() {
        blackjackGame['isStand'] = true;

        while(DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
            let card = randomCard();
            showCard(card, DEALER);
            updateScore(card, DEALER);
            showScore(DEALER);
            await timmer(800);
    }
     
            blackjackGame['turnsOver'] = true;
            let winner = computeWinner()
            showResult(winner);
}


function randomCard() {
    let randomIndexCard = Math.floor(Math.random() * 13);
    return blackjackGame['cards'][randomIndexCard];
} 


function showCard(card, activePlayer) {
    if(activePlayer['score'] <= 21)
   {
        let cardImage = document.createElement('img');
        cardImage.src =`images/${card}.png`;
        cardImage.width = 60;
        cardImage.style.margin ='5px';
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
   }
}

function blackjackDeal() {
        // This is used to check whether the result is coming or not  
        //showResult(computeWinner());
        //we can use other too
        //let winner = computeWinner();
        //showResult(winner);
    if(blackjackGame['turnsOver'] === true) {
        
        blackjackGame['isStand'] = false;
        
        let yourImage = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImage = document.querySelector('#dealer-box').querySelectorAll('img');

        for(i=0; i < yourImage.length; i++) {
            yourImage[i].remove();
        }

         for(i=0; i < dealerImage.length; i++) {
            dealerImage[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-score').textContent = 0;
        document.querySelector('#dealer-blackjack-score').textContent = 0;

        document.querySelector('#your-blackjack-score').style.color = '#ffffff';
        document.querySelector('#dealer-blackjack-score').style.color = '#ffffff';


        document.querySelector('#blackjack-winner-result').textContent = "Let's play";
        document.querySelector('#blackjack-winner-result').style.color = 'black';
        
        blackjackGame['turnsOver'] = true;
   }
    
    
}

function updateScore(card, activePlayer) {
    if( card === 'A') {
        //Adding 11 if the active score is bellow 21 add 11 or add 1
        if(activePlayer['score'] + blackjackGame['cardValue'][card][1] <= 21) {
            activePlayer['score'] += blackjackGame['cardValue'][card][1];//'A' : [1, 11] index[1] = 11
        } else {
            activePlayer['score'] += blackjackGame['cardValue'][card][0]; //'A' : [1, 11] index[0] = 
        }
    } else {
        
        activePlayer['score'] += blackjackGame['cardValue'][card];  
    }
}


function showScore(activePlayer) {
    if(activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}
 

//compute winner and return who won the match
//Update the wins, draws, losses.

 function computeWinner() {
     let winner;
     
     if(YOU['score'] <= 21) {
         
         //Condition is if your score is more than dealer score or dealer busts then you won!!!
         if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
             blackjackGame['wins']++;
             winner = YOU;
             
         } else if(YOU['score'] < DEALER['score']) {
             blackjackGame['losses']++;    
             winner = DEALER;
             
         } else if(YOU['score'] === DEALER['score']) {
             blackjackGame['draws']++;
         }
             //drew  
             //When your busts and dealer doesnot then dealer!!!
         } else if(YOU['score'] > 21 && DEALER['score'] <= 21) {
             blackjackGame['losses']++;
             winner = DEALER;
             
         } else if(YOU['score'] > 21 && DEALER['score'] > 21) {
             blackjackGame['draws']++;
             //drew
             
         }
             return winner;
     
}

function showResult(winner) {
    let message, messageColor;
    
    if(blackjackGame['turnsOver'] === true) {
    
        if(winner === YOU) {
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!!';
            messageColor = 'green';
            WinSound.play();

        } else if(winner === DEALER) {
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!!';
            messageColor = 'red';
            lossSound.play();

         } else {
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'You drew!!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-winner-result').textContent = message;
        document.querySelector('#blackjack-winner-result').style.color = messageColor;
    }
}









