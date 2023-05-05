//entry logic
const fail=document.querySelector('.error');
const enter = document.querySelector("button");
const page1=document.querySelector('.main-container1');
const page2=document.querySelector('.main-container2-copy');
var greeting=document.querySelector('.greet');
var names;
enter.addEventListener('click',()=>{
    const input=document.querySelector('input').value;
    if(input.length==0){
        fail.innerHTML="!Please Enter Your Name";
    }
    else{
        page1.classList.replace("main-container1","main-container1-copy");
        page2.classList.replace("main-container2-copy","main-container2");
        names=document.querySelector('input').value;
        greeting.innerHTML=`Welcome ${names}`;
        document.querySelector('.greet').classList.add("greet2");
        setTimeout(() => {
            greeting.classList.add("greeting");
            document.querySelector('.container2-copy').classList.replace("container2-copy","container2");
        },5000);
    }
})
//pages logics

//for btn single player
let single1=document.querySelector('.single');
single1.addEventListener('click',()=>{
    document.getElementById('page2').style.display="none";
    document.getElementById('instruct1').classList.replace("instruction1-copy","instruction1");
})

//for btn doubble player
let doubble1=document.querySelector('.doubble');
doubble1.addEventListener('click',()=>{
    document.getElementById('page2').style.display="none";
    document.getElementById('instruct2').classList.replace("instruction2-copy","instruction2")
})

//for btn lets play of single(instruction)
let instruction_btn1=document.getElementById('play1');
instruction_btn1.addEventListener("click",()=>{
    document.getElementById('instruct1').style.display="none";
    document.getElementById('page3').classList.replace("main-container3-copy","main-container3");
})

//for btn lets play of doubble mode(instruction);
let instruction_btn2=document.getElementById('play2');
instruction_btn2.addEventListener("click",()=>{
    document.getElementById('instruct2').style.display="none";
    document.getElementById('page4').classList.replace("main-container4-copy","main-container4");
    //var player1=prompt("enter name of 1st player");
    //var player2=prompt("enter name of 2nd player")
})


// game logic
var num1=(Math.random())*100;
var num=Math.round(num1);

var count = 10;

// logic for single player
let button1 = document.getElementById('btn1');
button1.addEventListener("click",()=>{
    let check1=document.getElementById('sinput1').value;
    let check=parseInt(check1);
    if(num>check)
    {
        count--;
        if(count>=0 && flag==0){
            document.getElementById('schance').innerHTML="Chances : " + count;
            document.getElementById('error1').innerHTML="Your answer is lesser than number";
        }
        else if(count<=0 && flag==0)
        {
            document.getElementById('error1').innerHTML="Chance over<br> <h2>Please try next time</h2>";
        }
    }
    else if(num<check)
    {
        count--;
        if(count>0 && flag==0)
        {
            document.getElementById('schance').innerHTML="Chances : " + count;
            document.getElementById('error1').innerHTML="Your answer is larger than number";
        }
        else if(count<=0 && flag==0)
        {
            document.getElementById('error1').innerHTML="Chance over<br> <h2>Please try next time</h2>";
        }
    }
    else if(num==check){
         document.getElementById('schance').innerHTML="Chances : " + count;
        document.getElementById('error1').classList.add("color");
        document.getElementById('error1').innerHTML="Your answer is correct <br> <h1> game over </h1>"
        flag=1;
    } 
    else if(flag==0)
    {
        document.getElementById('error1').innerHTML="Do not enter wrong input";
    }
})

//back btn of single player mode
let try1= document.getElementById('retry1');
try1.addEventListener("click",()=>{
    document.getElementById('instruct1').style.display="flex";
    document.getElementById('page3').classList.replace("main-container3","main-container3-copy");
    document.getElementById('error1').innerHTML="";
    document.getElementById('sinput1').value="";
    document.getElementById('error1').classList.remove("color");
     document.getElementById('schance').innerHTML="";
    count=10;
    flag=0;
})

//back btn of double player mode
let try2=document.getElementById('retry2');
try2.addEventListener("click",()=>{
    document.getElementById('instruct2').style.display="flex";
    document.getElementById('page4').classList.replace("main-container4","main-container4-copy");
    document.getElementById('error2').innerHTML=" ";
    document.getElementById('error3').innerHTML=" ";
    document.getElementById("p1chance1").innerHTML=" ";
    document.getElementById('p2chance2').innerHTML=" ";
    document.getElementById('dinput1').value="";
    document.getElementById('dinput2').value="";
    document.getElementById('error2').classList.remove("color");
    document.getElementById('error2').classList.remove("color");
    count2=5;
    count3=5;
    flag=0;
})

var flag=0;
// logic for doubble player game
//num
//count2
var count2=5;
let button2=document.getElementById('btn2');
button2.addEventListener('click',()=>{
    let ans=document.getElementById('dinput1').value;
    let ans1=parseInt(ans);
    if(num>ans1)
    {
        count2--;
        if(count2>=0  && flag==0)
        {
            document.getElementById("p1chance1").innerHTML="1st player chances :" + count2;
            document.getElementById('error2').innerHTML="Player1 answer is smaller than number";
        }
        else if(count2<=0 && flag==0)
        {
            document.getElementById('error3').innerHTML=" ";
            document.getElementById('error2').innerHTML="Player 1 Chance over Please try next time";
        }
    }
    else if(num<ans1)
    {
        count2--;
        if(count2>=0 && flag==0)
        {
        document.getElementById("p1chance1").innerHTML="1st player chances :" + count2;  
        document.getElementById('error2').innerHTML="Player1 answer is larger than number";
        }
        else if(count2<=0 && flag==0)
        {
            document.getElementById('error3').innerHTML=" ";
            document.getElementById('error2').innerHTML="Player 1 Chance over Please try next time";
        }
    }
    else if(num==ans1){
        if(count2>=0 && flag==0)
        {
            document.getElementById("p1chance1").innerHTML="1st player chances :" + count2;
            document.getElementById('error3').innerHTML=" ";
            document.getElementById('error2').classList.add("color");
            document.getElementById('error2').innerHTML="Player1 answer is correct <br> <h2>Game over</h2>";
            flag=1
        }
        else if(flag==0)
        {
            document.getElementById('error3').innerHTML=" ";
            document.getElementById('error2').classList.add("color");
            document.getElementById('error2').innerHTML="Sorry chance is over but answer is correct";
        }
       
    }
    else{
        document.getElementById('error2').innerHTML="Player 1 Do not enter wrong input"
    }
})

// button second
var count3=5;
let button3=document.getElementById('btn3');
button3.addEventListener('click',()=>{
    let ans2=document.getElementById('dinput2').value;
    let ans3=parseInt(ans2);
    if(num>ans3)
    {
        count3--;
        if(count3>=0 && flag==0)
        {
            document.getElementById('p2chance2').innerHTML=count3 + " : 2nd player chances";
            document.getElementById('error3').innerHTML="Player2 answer is smaller than number";
        }
        else if (count3<=0 && flag==0)
        {
            document.getElementById('error2').innerHTML=" ";
            document.getElementById('error3').innerHTML="Player 2 Chance over  Please try next time";
        }
    }
    else if(num<ans3)
    {
        count3--;
        if(count3>=0 && flag==0)
        {
        document.getElementById('p2chance2').innerHTML=count3 + " : 2nd player chances";
        document.getElementById('error3').innerHTML="Player2 answer is larger than number";
        }
        else if(count3<=0 && flag==0)
        {
            document.getElementById('error2').innerHTML=" ";
            document.getElementById('error3').innerHTML="Player 2 Chance over Please try next time";
        }
    }
    else if(num==ans3)
    {
        if(count3>=0 && flag==0)
        {
        document.getElementById('p2chance2').innerHTML=count3 + " : 2nd player chances";
        document.getElementById('error2').innerHTML=" ";
        document.getElementById('error3').classList.add("color");
        document.getElementById('error3').innerHTML="Player2 answer is correct <br> <h2>Game over</h2>";
        flag=1;
        }
        else if(flag==0)
        {
            document.getElementById('error2').innerHTML=" ";
            document.getElementById('error3').classList.add("color");
            document.getElementById('error3').innerHTML="sorry chance is over but answer is correct";
        }
    }
    else if(flag==0)
    {
        document.getElementById('error3').innerHTML="Player 2 Do not enter wrong input"
    }
})


















