
var bluff = {
    values: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    suits: ["clubs", "diamonds", "hearts", "spades"],
    cards: [],
    hand: [],
    player1: [],
    computer: [],
    centerCard: [],
    playerWon: false,
    computerWon: false,
    bluffDiv: document.getElementById("bluff"),
    callBluffDiv: document.getElementById("callBluff"),
    commentDiv: document.getElementById("comments"),
    centerDiv: document.getElementById("centerCard"),
    playerScore: document.getElementById("player_score"),
    computerScore: document.getElementById("computer_score"),
    playerCard: [ document.getElementById("playerCard1"),
    document.getElementById("playerCard2"),
    document.getElementById("playerCard3"),
    document.getElementById("playerCard4"),
    document.getElementById("playerCard5"),
    document.getElementById("playerCard6"),
    document.getElementById("playerCard7"),
    document.getElementById("playerCard8"),
    document.getElementById("playerCard9"),
    document.getElementById("playerCard10"),
    document.getElementById("playerCard11"),
    document.getElementById("playerCard12"),
    document.getElementById("playerCard13"),
    document.getElementById("playerCard14"),
    document.getElementById("playerCard15"),
    document.getElementById("playerCard16"),
    document.getElementById("playerCard17"),
    document.getElementById("playerCard18"),
    document.getElementById("playerCard19"),
    document.getElementById("playerCard20")
    ],
    computerCard: [ document.getElementById("computerCard1"),
    document.getElementById("computerCard2"),
    document.getElementById("computerCard3"),
    document.getElementById("computerCard4"),
    document.getElementById("computerCard5"),
    document.getElementById("computerCard6"),
    document.getElementById("computerCard7"),
    document.getElementById("computerCard8"),
    document.getElementById("computerCard9"),
    document.getElementById("computerCard10"),
    document.getElementById("computerCard11"),
    document.getElementById("computerCard12"),
    document.getElementById("computerCard13"),
    document.getElementById("computerCard14"),
    document.getElementById("computerCard15"),
    document.getElementById("computerCard16"),
    document.getElementById("computerCard17"),
    document.getElementById("computerCard18"),
    document.getElementById("computerCard19"),
    document.getElementById("computerCard20")
    ],
    build: function() {
      for (i = 0; i < this.values.length; i++){
        for (j = 0; j < this.suits.length; j++) {
          this.cards.push([this.values[i], this.suits[j]]);
        }
      }
    },
  // Fisher-Yates shuffle algorithm
    shuffle: function(cards) {
      var m = this.cards.length, t, i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = this.cards[m];
        this.cards[m] = this.cards[i];
        this.cards[i] = t;
        }
      return cards;
    },

    splitDeck: function() {
      bluff.player1 = this.cards.splice(0, 10);
      bluff.computer = this.cards.splice(0, 10);
     // console.log(bluff.player1[0]);
      //console.log(bluff.computer[0]);
      //console.log(this.cards.length);
    },
    
    deal: function() {
      bluff.bluffDiv.style.height = "40px";
      bluff.callBluffDiv.style.display = "block";
      bluff.bluffDiv.style.display="none";
      for (var i=0; i<bluff.player1.length; i++) {
          bluff.playerCard[i].src="cards/" + bluff.player1[i][0] + "_of_" + bluff.player1[i][1] + ".png";
      }
      //bluff.playerCard.src="cards/" + bluff.hand[bluff.hand.length-1][0] + "_of_" + bluff.hand[bluff.hand.length-1][1] + ".png";
      //bluff.computerCard.src="cards/" + bluff.hand[bluff.hand.length-2][0] + "_of_" + bluff.hand[bluff.hand.length-2][1] + ".png";
      bluff.commentDiv.innerHTML = "Click on any card to start !"
      bluff.cardClick();
    },
    gameOver: function() {
        if (bluff.player1.length == 0 ) {
      //bluff.commentDiv.style.display = "block";
      bluff.commentDiv.innerHTML = "Game Over ! Player 1 wins"
      //this.bluffDiv.addEventListener("click", bluff.gameStart());
      //this.bluffDiv.addEventListener("click", bluff.deal());
    }
    else if (bluff.computer.length == 0){
      //bluff.commentDiv.style.display = "block";
      bluff.commentDiv.innerHTML = "Game Over ! Computer wins"
     // bluff.bluffDiv.addEventListener("click", bluff.gameStart());
    }
    },
    gameStart: function() {
      this.bluffDiv.innerHTML = "Start!";
      this.build();
      this.shuffle();
      this.splitDeck();
    },
    cardClick: function() {
       // var value = this.callClick();
        //var card1 = document.getElementById("playerCard1").addEventListener("click", )
    //     for (var i =0; i<10 ; i++) {
    //         var id ="playerCard" +i;
    //         document.getElementById(id).addEventListener("click", function(){
    //             bluff.centerDiv.src = "cards/" + bluff.player1[i][0] + "_of_" + bluff.player1[0][1] + ".png";
    //             bluff.centerCard.push(bluff.player1[i]);
    //             bluff.playerCard[i].style.display = "none";
    //             bluff.computerPlay();
    //     });
    // }
     
       
        document.getElementById("playerCard1").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[0][0] + "_of_" + bluff.player1[0][1] + ".png";
            bluff.centerCard.push(bluff.player1[0]);
            bluff.playerCard[0].style.display = "none";
            //bluff.playerCard.splice(0,1);
            bluff.player1.splice(0,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard2").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[1][0] + "_of_" + bluff.player1[1][1] + ".png";
            bluff.centerCard.push(bluff.player1[1]);
            bluff.playerCard[1].style.display = "none";
            bluff.player1.splice(1,1);
            bluff.computerPlay();
        });
        document.getElementById("playerCard3").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[2][0] + "_of_" + bluff.player1[2][1] + ".png";
            bluff.centerCard.push(bluff.player1[2]);
            bluff.playerCard[2].style.display = "none";
            bluff.player1.splice(2,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard4").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[3][0] + "_of_" + bluff.player1[3][1] + ".png";
            bluff.centerCard.push(bluff.player1[3]);
            bluff.playerCard[3].style.display = "none";
            bluff.player1.splice(3,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard5").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[4][0] + "_of_" + bluff.player1[4][1] + ".png";
            bluff.centerCard.push(bluff.player1[4]);
            bluff.playerCard[4].style.display = "none";
            bluff.player1.splice(4,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard6").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[5][0] + "_of_" + bluff.player1[5][1] + ".png";
            bluff.centerCard.push(bluff.player1[5]);
            bluff.playerCard[5].style.display = "none";
            bluff.player1.splice(5,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard7").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[6][0] + "_of_" + bluff.player1[6][1] + ".png";
            bluff.centerCard.push(bluff.player1[6]);
            bluff.playerCard[6].style.display = "none";
            bluff.player1.splice(6,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard8").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[7][0] + "_of_" + bluff.player1[7][1] + ".png";
            bluff.centerCard.push(bluff.player1[7]);
            bluff.playerCard[7].style.display = "none";
            bluff.player1.splice(7,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard9").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[8][0] + "_of_" + bluff.player1[8][1] + ".png";
            bluff.centerCard.push(bluff.player1[8]);
            bluff.playerCard[8].style.display = "none";
            bluff.player1.splice(8,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard10").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[9][0] + "_of_" + bluff.player1[9][1] + ".png";
            bluff.centerCard.push(bluff.player1[9]);
            bluff.playerCard[9].style.display = "none";
            bluff.player1.splice(9,1);
            bluff.computerPlay();
        }); 
        document.getElementById("playerCard11").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[10][0] + "_of_" + bluff.player1[10][1] + ".png";
            bluff.centerCard.push(bluff.player1[10]);
            bluff.playerCard[10].style.display = "none";
            bluff.player1.splice(10,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard12").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[11][0] + "_of_" + bluff.player1[11][1] + ".png";
            bluff.centerCard.push(bluff.player1[11]);
            bluff.playerCard[11].style.display = "none";
            bluff.player1.splice(11,1);
            bluff.computerPlay();
        });
        document.getElementById("playerCard13").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[12][0] + "_of_" + bluff.player1[12][1] + ".png";
            bluff.centerCard.push(bluff.player1[12]);
            bluff.playerCard[12].style.display = "none";
            bluff.player1.splice(12,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard14").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[13][0] + "_of_" + bluff.player1[13][1] + ".png";
            bluff.centerCard.push(bluff.player1[13]);
            bluff.playerCard[13].style.display = "none";
            bluff.player1.splice(13,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard15").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[14][0] + "_of_" + bluff.player1[14][1] + ".png";
            bluff.centerCard.push(bluff.player1[14]);
            bluff.playerCard[14].style.display = "none";
            bluff.player1.splice(14,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard16").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[15][0] + "_of_" + bluff.player1[15][1] + ".png";
            bluff.centerCard.push(bluff.player1[15]);
            bluff.playerCard[15].style.display = "none";
            bluff.player1.splice(15,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard17").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[16][0] + "_of_" + bluff.player1[16][1] + ".png";
            bluff.centerCard.push(bluff.player1[16]);
            bluff.playerCard[16].style.display = "none";
            bluff.player1.splice(16,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard18").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[17][0] + "_of_" + bluff.player1[17][1] + ".png";
            bluff.centerCard.push(bluff.player1[17]);
            bluff.playerCard[17].style.display = "none";
            bluff.player1.splice(17,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard19").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[18][0] + "_of_" + bluff.player1[18][1] + ".png";
            bluff.centerCard.push(bluff.player1[18]);
            bluff.playerCard[18].style.display = "none";
            bluff.player1.splice(18,1);
            bluff.computerPlay();
        });   
        document.getElementById("playerCard20").addEventListener("click", function(){
            bluff.centerDiv.src = "cards/" + bluff.player1[19][0] + "_of_" + bluff.player1[19][1] + ".png";
            bluff.centerCard.push(bluff.player1[19]);
            bluff.playerCard[19].style.display = "none";
            bluff.player1.splice(19,1);
            bluff.computerPlay();
        });       
    },
    computerPlay: function() {
        bluff.gameOver();
        bluff.commentDiv.innerHTML = "";
            console.log(bluff.centerCard);
                console.log(bluff.computer);
            for(var i=0; i<bluff.computer.length; i++) {
                
                if ( bluff.centerCard[bluff.centerCard.length - 1][1] == bluff.computer[i][1]) {
                    bluff.centerCard.push(bluff.computer[i]);
                   bluff.centerDiv.src = "cards/backside.png";
                     bluff.computer.splice(i,1);
                    bluff.computerCard[bluff.computer.length -1 ].style.display = "none";
                    return;
                }
            }
                        var rand = bluff.computer[Math.floor(Math.random() * bluff.computer.length)];
                        bluff.centerCard.push(rand);
                        var count = bluff.computer.indexOf(bluff.centerCard[bluff.centerCard.length-1]);
                        bluff.centerDiv.src = "cards/backside.png";
                        bluff.computer.splice(count, 1);
                        bluff.computerCard[bluff.computer.length - 1].style.display = "none";
                        return;
        //}
    },
    callBluff: function() {
        if(bluff.centerCard != 0) {
        var winner =  bluff.analyzeBluff(winner);
        if ( winner == true ) {
            bluff.commentDiv.innerHTML = "Bluff Call successfull..!";
           var len = bluff.computer.length;
            for ( var k = 0; k < bluff.centerCard.length; k++ ) {
                bluff.computer.push(bluff.centerCard[k]);    
            }
            for( var i =0; i < bluff.computer.length; i++) {
                bluff.computerCard[i].style.display = "inline-block";
            }
            bluff.centerCard = [];
        }
        else {
            bluff.commentDiv.innerHTML = "Bluff Call Failed..!";
            console.log(bluff.player1);
            console.log(bluff.centerCard);
            for ( var k = 0; k < bluff.centerCard.length; k++ ) {
                 bluff.player1.push(bluff.centerCard[k]);  
             }
            for( var i =0; i < bluff.player1.length; i++) {
                bluff.playerCard[i].style.display = "inline-block";
                bluff.playerCard[i].src="cards/" + bluff.player1[i][0] + "_of_" + bluff.player1[i][1] + ".png";
             }
            bluff.centerCard = [];
        }
    }

    },
    analyzeBluff: function(winner){
        if(bluff.centerCard[bluff.centerCard.length-1][1] == bluff.centerCard[bluff.centerCard.length - 2][1]) {
            winner = false;
            return winner;
        }
        else {
            winner = true;
            return winner;
        }  
    }
  };
  bluff.gameStart();
  //bluff.gameOver();
  bluff.bluffDiv.addEventListener("click", bluff.deal);
  bluff.callBluffDiv.addEventListener("click", bluff.callBluff);
  //console.log(roundWinner);
  
  
  