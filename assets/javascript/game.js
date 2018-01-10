
//Generating a random number
var targetNumber = Math.floor(Math.random() * 120) + 1;
var valueHolder = 0;
var winner = 0;
var loser = 0;
var numberOptions = [Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*12) + 1,Math.floor(Math.random()*12) + 1 ];

var pointItems = {
    chest: document.getElementById("chest"),
    key: document.getElementById("key"),
    bottles: document.getElementById("bottles"),
    gold: document.getElementById("gold"),
};

// pointItems.chest.val(numberOptions[0]);
// pointItems.key.attr(numberOption[1]);
// pointItems.bottles.attr(numberOptions[2]);
// pointItems.gold.attr(numberOptions[3]);
$("#randNumGenorator").text(targetNumber);


function setThePoints (_value) {
    valueHolder = valueHolder + _value
    keepTrack = document.getElementById("keepTrack");
    wins = document.getElementById("wins");
    losses=document.getElementById('losses');


    alert("your score: " + valueHolder);
    $("#keepTrack").text(valueHolder);


if (valueHolder == targetNumber) {
    alert("you win!");
    winner++;
    reset();
} else if (valueHolder > targetNumber) {
    alert("you lose!");
    loser++;
    reset();
} 

    $("#wins").text(winner);
    $("#losses").text(loser);

    function reset () {
        targetNumber = Math.floor(Math.random() * 120) + 1;
        valueHolder = 0;
        numberOptions = [Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*12) + 1, Math.floor(Math.random()*12) + 1,Math.floor(Math.random()*12) + 1 ];

        $("#randNumGenorator").text(targetNumber);
        $("#keepTrack").text(valueHolder);

    }
}


pointItems.chest.addEventListener('click', function(e) {
    setThePoints(numberOptions[0])
});
pointItems.gold.addEventListener('click', function(e){
    setThePoints(numberOptions[1])
});

pointItems.key.addEventListener('click', function(e) {
    setThePoints(numberOptions[2]);
});

pointItems.bottles.addEventListener('click', function(e) {
    setThePoints(numberOptions[3]);
});



// #randNumbGenorator, #keepTrack, #wins, , #lose, if kt is > rng, alert'you win', wins ++





