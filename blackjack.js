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








