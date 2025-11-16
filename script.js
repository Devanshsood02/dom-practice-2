let s1 = document.querySelector('#s1');
let s2 = document.querySelector('#s2');
let h3 = document.querySelector('h3');

let left = document.querySelector('.left');
let right = document.querySelector('.right');
let btn = document.querySelector('.btn');

let image1 = document.querySelector('#image1');
let image2 = document.querySelector('#image2');






// making the arrays for inputs and images to show respectively


let arr = ["Rock", "Paper", "Scissor"];
let images = ["./assets/rock.png", "./assets/paper.png", "./assets/scissor.png"];


//creating a function which does all the calculation


function playgame() {


    // random1 and random2 stores the values for both the right and left divs -- values like index nos of---  arr array.


    let random1 = Math.floor(Math.random() * arr.length);
    let random2 = Math.floor(Math.random() * arr.length);


    // now accessing the index of arr array through the values stored in random1 and random2 and storing them in player1 and player2
    let player1 = arr[random1];
    let player2 = arr[random2];
  



    // condition when both plays same input



    if (player1 === player2) {

        h3.textContent = "Draw game";

        right.style.backgroundColor = '#7610bfff';
        left.style.backgroundColor = '#7610bfff';


    }


    // conditions for player2 winning

    else if (player1 === arr[0] && player2 === arr[1]) {

        h3.textContent = 'player 2 wins';
        right.style.backgroundColor = 'green';
        left.style.backgroundColor = 'red';

    }



    else if (player1 === arr[1] && player2 === arr[2]) {

        h3.textContent = 'player 2 wins';
        right.style.backgroundColor = 'green';
        left.style.backgroundColor = 'red';

 }



    else if (player1 === arr[2] && player2 === arr[0]) {

        h3.textContent = 'player 2 wins';
        right.style.backgroundColor = 'green';
        left.style.backgroundColor = 'red';


    }



    // condition for player 1 winnings


    else {

        h3.textContent = 'player 1 wins';
        right.style.backgroundColor = 'red';
        left.style.backgroundColor = 'green';

    }



    // using.src method to print the respective images to the respective inputs 

    
    image1.src = `${images[random1]}`;
    image2.src = `${images[random2]}`;



    // now putting the inputs in the span tags


    s1.textContent = `${player1}`;
    s2.textContent = `${player2}`;

   
};  // function  playgame ends here....



// button movement 

btn.addEventListener('click', function () {

    playgame();

});


