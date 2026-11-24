const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const msg2=document.querySelector(".msg-container");
const userscorep=document.querySelector("#user-score");
const compscorep=document.querySelector("#comp-score");
const resetBtn=document.querySelector(".resetbtn");
let userscore=0;
let compscore=0;

 const resetButton= () =>{
//  let userscore=0;
//  let compscore=0;
   userscorep.innerText="0";
   compscorep.innerText="0";
   msg.innerText="paly your turn";
     msg2.style.backgroundColor ="";
          msg2.style.Color = "";
  };

resetBtn.addEventListener("click", resetButton);

const gencompchoice = ()=>{
    const  option=["rock","paper","scissor"];
     const random=Math.floor(Math.random()*3);
     return option[random];
}

const drawgame= (userchoice,compchoice) => {
    console.log("game was draw");
    msg.innerText =`game was drw ! userchoice ${userchoice} and comp ${compchoice} ` ;
}
const showwiner =(userwin,userchoice,compchoice) => {
 console.log("showwiner function called");
    if(userwin){
        userscore++;
        userscorep.innerText=userscore;
         msg.innerText=`user win and user ${userchoice} beat comp ${compchoice}`;
         msg2.style.backgroundColor ="green";
          msg2.style.Color = "white";
    }else{
         compscore++; 
        compscorep.innerText=compscore;
        msg.innerText= `comp win and comp ${compchoice} beat  user ${userchoice}`;
        msg2.style.backgroundColor = "red";
         msg2.style.Color = "white";
    }
};

const playgame = (userchoice)=>{
  console.log("userchoice is",userchoice);
  const compchoice=gencompchoice();
  console.log("compchoice is ",compchoice);
  let userwin;
  if(userchoice === compchoice ){
     drawgame(userchoice,compchoice);
     return ;
  }else{
    if(userchoice === "paper"){
         userwin=compchoice === "scissor" ? false:true;
    }else if (userchoice === "rock"){
         userwin=compchoice === "paper" ? false:true;
    }else {
          userwin=compchoice == "rock" ? false:true;
    }
  }
  showwiner(userwin,userchoice,compchoice);
};

 choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
      console.log("choice was clicked",userchoice);
      playgame(userchoice)
    });
});