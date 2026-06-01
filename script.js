let user=document.querySelector(".score-num1");
let computer=document.querySelector(".score-num2");
let msg=document.querySelector(".msg");

let userScore=0;
let compScore=0;

let computerTurn=(userChoice)=>{
  let options=["rock","paper","scissor"];
  let randomIdx=Math.floor(Math.random()*options.length);
  let computerChoice=(options[randomIdx]);
  checkWinner(computerChoice,userChoice);
}

let checkWinner=(computerChoice,userChoice)=>{
    
  if(userChoice===computerChoice){
    msg.innerText=`DRAW ! , You chose ${userChoice} , Computer Chose ${computerChoice}`;
  }
  else{
    if(userChoice==="paper" && computerChoice==="rock" ||
       userChoice==="scissor" && computerChoice==="paper" ||
       userChoice==="rock" && computerChoice==="scissor"
      ){
        userScore=userScore+1;
        user.innerText=userScore;
        msg.innerText=`YOU WON! , You chose ${userChoice} and Computer chose ${computerChoice}`
       
       }
    else{
        compScore=compScore+1;
        computer.innerText=compScore;
        msg.innerText=`COMPUTER WON! , You chose ${userChoice} and Computer chose ${computerChoice}`
        
    }
  }
}


const options=document.querySelectorAll(".option");
options.forEach((option)=>{
    let userChoice=option.getAttribute("id")
    option.addEventListener("click",()=>{
        computerTurn(userChoice)
       
    });
});




