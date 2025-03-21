
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
let board1Tile21 = document.getElementById('board-1-tile-21');











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
}

}







