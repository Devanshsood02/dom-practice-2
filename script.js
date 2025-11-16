let s1=document.querySelector('#s1');
let s2=document.querySelector('#s2');
let h5=document.querySelector('h5');

let left=document.querySelector('.left');
let right=document.querySelector('.right');
let btn=document.querySelector('.btn');


let arr=["rock","paper","scissor"];

let image1=document.querySelector('#image1');
let image2=document.querySelector('#image2');


let images=["car.png","p.png","generated.png"];

console.log(images);


function playgame(){
    
    let img1=Math.floor(Math.random()*arr.length);
let img2=Math.floor(Math.random()*arr.length);

let player1=arr[img1];
// console.log(player1);

let player2=arr[img2];
// console.log(player2);



// condition when both plays same 
if(player1===player2) {
   
      h5.textContent="Draw game";
      right.style.backgroundColor='pink';
     left.style.backgroundColor='pink';
     
     image1.src=`${images[player1]}`;
      image2.src=`${images[player2]}`;

}


// conditions for player2 wins
else if(player1===arr[0] && player2===arr[1]){
  
    h5.textContent='player 2 wins';
    right.style.backgroundColor='green';
     left.style.backgroundColor='red';
      image1.src=`${images[player1]}`;
      image2.src=`${images[player2]}`;

}
else if(player1===arr[1] && player2===arr[2]){
 
    h5.textContent='player 2 wins';
right.style.backgroundColor='green';
     left.style.backgroundColor='red';
      image1.src=`${images[player1]}`;
      image2.src=`${images[player2]}`;
    
}

else if(player1===arr[2] && player2===arr[0]){

  h5.textContent='player 2 wins';
    right.style.backgroundColor='green';
     left.style.backgroundColor='red';
      image1.src=`${images[player1]}`;
      image2.src=`${images[player2]}`;
    
}

// condition where player 1 winsx
else{

    h5.textContent='player 1 wins';
    right.style.backgroundColor='red';
     left.style.backgroundColor='green';
      image1.src=`${images[player1]}`;
      image2.src=`${images[player2]}`;
}
 s1.textContent=`${player1}`;
     s2.textContent=`${player2}`;
};



// button movement 

btn.addEventListener('click',function(){

    playgame();


});