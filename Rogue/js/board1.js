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
let board1Tile22 = document.getElementById('board-1-tile-22');
let board1Tile23 = document.getElementById('board-1-tile-23');
let board1Tile24 = document.getElementById('board-1-tile-24');
let board1Tile25 = document.getElementById('board-1-tile-25');
let board1Tile26 = document.getElementById('board-1-tile-26');
let board1Tile27 = document.getElementById('board-1-tile-27');
let board1Tile28 = document.getElementById('board-1-tile-28');
let board1Tile29 = document.getElementById('board-1-tile-29');
let board1Tile30 = document.getElementById('board-1-tile-30');
let board1Tile31 = document.getElementById('board-1-tile-31');
let board1Tile32 = document.getElementById('board-1-tile-32');
let board1Tile33 = document.getElementById('board-1-tile-33');
let board1Tile34 = document.getElementById('board-1-tile-34');
let board1Tile35 = document.getElementById('board-1-tile-35');
let board1Tile36 = document.getElementById('board-1-tile-36');
let board1Tile37 = document.getElementById('board-1-tile-37');
let board1Tile38 = document.getElementById('board-1-tile-38');
let board1Tile39 = document.getElementById('board-1-tile-39');
let board1Tile40 = document.getElementById('board-1-tile-40');
let board1Tile41 = document.getElementById('board-1-tile-41');
let board1Tile42 = document.getElementById('board-1-tile-42');
let board1Tile43 = document.getElementById('board-1-tile-43');
let board1Tile44 = document.getElementById('board-1-tile-44');
let board1Tile45 = document.getElementById('board-1-tile-45');
let board1Tile46 = document.getElementById('board-1-tile-46');
let board1Tile47 = document.getElementById('board-1-tile-47');
let board1Tile48 = document.getElementById('board-1-tile-48');
let board1Tile49 = document.getElementById('board-1-tile-49');
let board1Tile50 = document.getElementById('board-1-tile-50');











function rollDice(){
  let roll = Math.floor(Math.random() * 6) + 1;
 
    switch(roll) {

         case 1:
          
          playerPosition = playerPosition + 1
         
         break;


         case 2:
           
            playerPosition = playerPosition + 2
           
        
         break;


         case 3:
           
            playerPosition = playerPosition + 3
           
        
         break;


         case 4:
           
            playerPosition = playerPosition + 4
           
        
         break;


         case 5:
            
            playerPosition = playerPosition + 5
           
         break;


         case 6:
           
            playerPosition = playerPosition + 6
            
            
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
     board1Tile1.style.backgroundColor = 'white'; 
     board1Tile2.style.backgroundColor = 'blue';
    
     break;

     case 3:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'green';
        
     break;

     case 4:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'green';
        
     break;

     case 5:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'green';
        
     break;

     case 6:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'green';
        
     break;

     case 7:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'green';
      
     break;

     case 8:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'green';
      
     break;

     case 9:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'green';
      
     break;

     case 10:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'green';
      
     break;

     case 11:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'green';
      
     break;

     case 12:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'green';
      
     break;

     case 13:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'green';
      
     break;

     case 14:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'green';
      
     break;

     case 15:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      
      board1Tile15.style.backgroundColor = 'green';
      
     break;

     case 16:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'green';
      
     break;

     case 17:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'green';

      
     break;

     case 18:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'green';
      
     break;

     case 19:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'green';
      
     break;

     case 20:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'green';
      
     break;

     case 21:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'green';
      
     break;

     case 22:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'green';
      
     break;

     case 23:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'green';
      
     break;

     case 24:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'green';
      
     break;

     case 25:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'green';
      
     break;

     case 26:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'green';
      
     break;

     case 27:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'green';
      
     break;

     case 28:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'green';
      
     break;

     case 29:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'green';
      
     break;

     case 30:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'green';
      
     break;

     case 31:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'green';
      
     break;

     case 32:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'green';
      
     break;

     case 33:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'green';
      
     break;

     case 34:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'green';
      
     break;

     case 35:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'green';
      
     break;

     case 36:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'green';
      
     break;

     case 37:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'green';
      
     break;

     case 38:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'green';
      
     break;

     case 39:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'green';
      
     break;

     case 40:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'green';
      
     break;

     case 41:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'green';

      
     break;

     case 42:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'green';
      
     break;

     case 43:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'green';
      
     break;

     case 44:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'white';
      
      board1Tile44.style.backgroundColor = 'green';
      
     break;

     case 45:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'white';
      
      board1Tile44.style.backgroundColor = 'white';
      board1Tile45.style.backgroundColor = 'green';
      
     break;

     case 46:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'white';
      
      board1Tile44.style.backgroundColor = 'white';
      board1Tile45.style.backgroundColor = 'white';
      board1Tile46.style.backgroundColor = 'green';
      
     break;

     case 47:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'white';
      
      board1Tile44.style.backgroundColor = 'white';
      board1Tile45.style.backgroundColor = 'white';
      board1Tile46.style.backgroundColor = 'white';
      
      board1Tile47.style.backgroundColor = 'green';
      
     break;

     case 48:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'white';
      
      board1Tile44.style.backgroundColor = 'white';
      board1Tile45.style.backgroundColor = 'white';
      board1Tile46.style.backgroundColor = 'white';
      
      board1Tile47.style.backgroundColor = 'white';
      board1Tile48.style.backgroundColor = 'green';
      
     break;

     case 49:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'white';
      
      board1Tile44.style.backgroundColor = 'white';
      board1Tile45.style.backgroundColor = 'white';
      board1Tile46.style.backgroundColor = 'white';
      
      board1Tile47.style.backgroundColor = 'white';
      board1Tile48.style.backgroundColor = 'white';
      board1Tile49.style.backgroundColor = 'green';
      
     break;
     case 50:
        board1Tile1.style.backgroundColor = 'white'; 
        board1Tile2.style.backgroundColor = 'white';
        board1Tile3.style.backgroundColor = 'white';
        board1Tile4.style.backgroundColor = 'white';
        board1Tile5.style.backgroundColor = 'white';
        board1Tile6.style.backgroundColor = 'white';
      board1Tile7.style.backgroundColor = 'white';
      board1Tile8.style.backgroundColor = 'white';
      board1Tile9.style.backgroundColor = 'white';
      board1Tile10.style.backgroundColor = 'white';
      board1Tile11.style.backgroundColor = 'white';
      board1Tile12.style.backgroundColor = 'white';
      board1Tile13.style.backgroundColor = 'white';
      board1Tile14.style.backgroundColor = 'white';
      board1Tile15.style.backgroundColor = 'white';
      board1Tile16.style.backgroundColor = 'white';
      board1Tile17.style.backgroundColor = 'white';
      board1Tile18.style.backgroundColor = 'white';
      board1Tile19.style.backgroundColor = 'white';
      board1Tile20.style.backgroundColor = 'white';
      board1Tile21.style.backgroundColor = 'white';
      board1Tile22.style.backgroundColor = 'white';
      
      board1Tile23.style.backgroundColor = 'white';
      board1Tile24.style.backgroundColor = 'white';
      board1Tile25.style.backgroundColor = 'white';
      board1Tile26.style.backgroundColor = 'white';
      board1Tile27.style.backgroundColor = 'white';
      board1Tile28.style.backgroundColor = 'white';
      board1Tile29.style.backgroundColor = 'white';
      board1Tile30.style.backgroundColor = 'white';
      
      board1Tile31.style.backgroundColor = 'white';
      board1Tile32.style.backgroundColor = 'white';
      
      board1Tile33.style.backgroundColor = 'white';
      board1Tile34.style.backgroundColor = 'white';
      
      board1Tile35.style.backgroundColor = 'white';
      board1Tile36.style.backgroundColor = 'white';
      board1Tile37.style.backgroundColor = 'white';
      
      board1Tile38.style.backgroundColor = 'white';
      board1Tile39.style.backgroundColor = 'white';
      
      board1Tile40.style.backgroundColor = 'white';
      board1Tile41.style.backgroundColor = 'white';

      board1Tile42.style.backgroundColor = 'white';
      board1Tile43.style.backgroundColor = 'white';
      
      board1Tile44.style.backgroundColor = 'white';
      board1Tile45.style.backgroundColor = 'white';
      board1Tile46.style.backgroundColor = 'white';
      
      board1Tile47.style.backgroundColor = 'white';
      board1Tile48.style.backgroundColor = 'white';
      board1Tile49.style.backgroundColor = 'white';
      
      board1Tile50.style.backgroundColor = 'green';
      
     break;

}

}
