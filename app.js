let useq=[];
let gseq=[];
let started=false;
let level=0;
let color=["red","green","yellow","purple"];
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }

});



function flash(btn){
    btn.classList.add("flsh");
    setTimeout(function(){
        btn.classList.remove("flsh");
    }, 350);
    }


function levelup(){
    useq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rind=(Math.floor(Math.random()*4));
    let rcolor=color[rind];
    let rbtn=document.querySelector(`.${rcolor}`)
    gseq.push(rcolor);
    console.log(gseq);
    flash(rbtn);
}

function check(ind){
    if(useq[ind]==gseq[ind]){
    if(gseq.length==useq.length){
        setTimeout(levelup, 1000);
        console.log(useq);

    }}else{
        h2.innerHTML=`its wrong! ur score is <b>${level}</b><br> press any key to restart game`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        
        reset();
    }
}

function btnpress(){
    let butn=this;
    flash(butn);
    let ucolor=butn.getAttribute("id");
    console.log(ucolor);
    useq.push(ucolor);
    check(useq.length-1);
}

let btn=document.querySelectorAll(".box");
for(btns of btn){
        btns.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    level=0;
    gseq=[];
    useq=[];
}