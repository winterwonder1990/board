
let playerPosition = 0;


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


}

