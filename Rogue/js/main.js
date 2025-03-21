
let playerPosition = 0;

let board1Tile1 = document.getElementById('board-1-tile-1');
let board1Tile2 = document.getElementById('board-1-tile-2');
let board1Tile3 = document.getElementById('board-1-tile-3');
let board1Tile4 = document.getElementById('board-1-tile-4');
let board1Tile5 = document.getElementById('board-1-tile-5');
let board1Tile6 = document.getElementById('board-1-tile-6');
let board1Tile7 = document.getElementById('board-1-tile-7');
let board1Tile8 = document.getElementById('board-1-tile-8');
let board1Tile9 = document.getElementById('board-1-tile-9');
let board1Tile10 = document.getElementById('board-1-tile-10');
let board1Tile11 = document.getElementById('board-1-tile-11');
let board1Tile12 = document.getElementById('board-1-tile-12');
let board1Tile13 = document.getElementById('board-1-tile-13');
let board1Tile14 = document.getElementById('board-1-tile-14');
let board1Tile15 = document.getElementById('board-1-tile-15');
let board1Tile16 = document.getElementById('board-1-tile-16');
let board1Tile17 = document.getElementById('board-1-tile-17');
let board1Tile18 = document.getElementById('board-1-tile-18');
let board1Tile19 = document.getElementById('board-1-tile-19');
let board1Tile20 = document.getElementById('board-1-tile-20');
let board1Tile22 = document.getElementById('board-1-tile-22');
let board1Tile23 = document.getElementById('board-1-tile-23');
let board1Tile24 = document.getElementById('board-1-tile-24');
let board1Tile25 = document.getElementById('board-1-tile-25');
let board1Tile26 = document.getElementById('board-1-tile-26');
let board1Tile27 = document.getElementById('board-1-tile-27');
let board1Tile28 = document.getElementById('board-1-tile-28');
let board1Tile29 = document.getElementById('board-1-tile-29');
let board1Tile30 = document.getElementById('board-1-tile-30');












function rollDice(){
  let roll = Math.floor(Math.random() * 6) + 1;
 
    switch(roll) {

         case 1:
          alert('1');
          playerPosition = playerPosition + 1
          alert(`Player Position: ${playerPosition}`)
    
         break;


         case 2:
            alert('2');
            playerPosition = playerPosition + 2
            alert(`Player Position: ${playerPosition}`)
        
         break;


         case 3:
            alert('3');
            playerPosition = playerPosition + 3
            alert(`Player Position: ${playerPosition}`)
        
         break;


         case 4:
            alert('4');
            playerPosition = playerPosition + 4
            alert(`Player Position: ${playerPosition}`)
        
         break;


         case 5:
            alert('5');
            playerPosition = playerPosition + 5
            alert(`Player Position: ${playerPosition}`)
         break;


         case 6:
            alert('6');
            playerPosition = playerPosition + 6
            alert(`Player Position: ${playerPosition}`)
            
         break;

     
        default: 


}

 position();


}


function position(){
 switch(playerPosition) {
     case 1:
     board1Tile1.style.backgroundColor = 'blue';
    
     break;

     case 2:
     board1Tile2.style.backgroundColor = 'blue';
        
     break;

     case 3:
        board1Tile3.style.backgroundColor = 'green';
        
     break;

     case 4:
        board1Tile4.style.backgroundColor = 'green';
        
     break;

     case 5:
        board1Tile5.style.backgroundColor = 'green';
        
     break;

     case 6:
        board1Tile6.style.backgroundColor = 'green';
        
     break;

     case 7:
      board1Tile7.style.backgroundColor = 'green';
      
     break;

     case 8:
      board1Tile8.style.backgroundColor = 'green';
      
     break;

     case 9:
      board1Tile9.style.backgroundColor = 'green';
      
     break;

     case 10:
      board1Tile10.style.backgroundColor = 'green';
      
     break;

     case 11:
      board1Tile11.style.backgroundColor = 'green';
      
     break;

     case 12:
      board1Tile12.style.backgroundColor = 'green';
      
     break;

     case 13:
      board1Tile13.style.backgroundColor = 'green';
      
     break;

     case 14:
      board1Tile14.style.backgroundColor = 'green';
      
     break;

     case 15:
      board1Tile15.style.backgroundColor = 'green';
      
     break;

     case 16:
      board1Tile16.style.backgroundColor = 'green';
      
     break;

     case 17:
      board1Tile17.style.backgroundColor = 'green';
      
     break;

     case 18:
      board1Tile18.style.backgroundColor = 'green';
      
     break;

     case 19:
      board1Tile19.style.backgroundColor = 'green';
      
     break;

     case 20:
      board1Tile20.style.backgroundColor = 'green';
      
     break;

     case 21:
      board1Tile21.style.backgroundColor = 'green';
      
     break;

     case 22:
      board1Tile22.style.backgroundColor = 'green';
      
     break;

     case 23:
      board1Tile23.style.backgroundColor = 'green';
      
     break;

     case 24:
      board1Tile24.style.backgroundColor = 'green';
      
     break;

     case 25:
      board1Tile25.style.backgroundColor = 'green';
      
     break;

     case 26:
      board1Tile26.style.backgroundColor = 'green';
      
     break;

     case 27:
      board1Tile27.style.backgroundColor = 'green';
      
     break;

     case 28:
      board1Tile28.style.backgroundColor = 'green';
      
     break;

     case 29:
      board1Tile29.style.backgroundColor = 'green';
      
     break;

     case 30:
      board1Tile30.style.backgroundColor = 'green';
      
     break;
}

}







