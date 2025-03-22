let storyText = document.getElementById('story-text');
let ChoiceButton1 = document.getElementById('choice-1-button');
let ChoiceButton2 = document.getElementById('choice-2-button');
let ChoiceButton3 = document.getElementById('choice-3-button');
let ChoiceButton4 = document.getElementById('choice-4-button');
let rollButton = document.getElementById('roll-button');



function onStart(){
    storyText.innerHTML = "You find yourself in a forest";
    ChoiceButton1.innerHTML = "Yell";
    ChoiceButton2.innerHTML = "Search";
    ChoiceButton1.style.display = "none";
    ChoiceButton2.style.display = "none"
    ChoiceButton3.style.display = "none";
    ChoiceButton4.style.display = "none";
   
}

