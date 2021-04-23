//Phoenix Norvell
// the annoyed chaos goblin
document.getElementById("home").addEventListener("click",function()// shows you new lunches
{
    NoCardOverload()
    document.getElementById("card").innerHTML+= `    <article>
    <h1>Welcome</h1>
    <p>explore space </p>
    
</article>`
        
}
)
httptRequest // global var
document.getElementById("newLunch").addEventListener("click",function()// shows you new lunches
{
    NoCardOverload() // delets unnessary cards
    httptRequest = new XMLHttpRequest;// makes  an instince  of the class
    httptRequest.open("get","https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?limit=5")//gets  the info  from the link and  limits it by 5 results
    httptRequest.send();// sends back
    httptRequest.onreadystatechange = aFunction;// when the ready state changes   it will go to  a function
})
var httptRequest // dosent work any other way  says it is undefined 
document.getElementById("newAstro").addEventListener("click",function()//shows you astronuts
{
    NoCardOverload()// makes sure  no infinite cards
    httptRequest = new XMLHttpRequest;// makes  an instince  of the class
    httptRequest.open("get","https://lldev.thespacedevs.com/2.0.0/astronaut/?limit=5")//gets the info  from space devs  astonut section and gets 5
    httptRequest.send();//sends info
    httptRequest.onreadystatechange = aFunction1;// when the ready state changes   it will go to  a function1
})
function aFunction(){// This is on is for the lunches
    laod();// gose to the load  function  witch is like a loading screen
    if(httptRequest.readyState == 4 && httptRequest.status == 200)//goes to the after laod  if  dosent do load
    {
        document.getElementById("loadding").innerHTML="" // clears the loading star
        start();// makes manObj
      for(var i=0;i<manObj.results.length;i++){// a loop through  to line every thing up
        var pic = "astronutPic"+i;// pic on first loop will be astronutPic0
        var name = "name"+i;//Name0
        var mission = "description"+i;//description0
        document.getElementById(pic).src= manObj.results[i].image// the var is used in place of  the concatination beacouse then it reads it as a string
        document.getElementById(name).innerHTML= manObj.results[i].name// this gets name of lunch
        document.getElementById(mission).innerHTML= manObj.results[i].mission.description// the bio of the mission
      }
           
        
    }
}
function aFunction1(){// This is on is for the astronuts
    laod();// gose to the load  function  witch is like a loading screen
    if(httptRequest.readyState == 4 && httptRequest.status == 200) //goes to the after laod  if  dosent do load
    { 
        document.getElementById("loadding").innerHTML=""// clears the loading star
       start();// makes manObj
      for(var i=0;i<manObj.results.length;i++){// loops throu
        var pic = "astronutPic"+i; // making a string
        var name = "name"+i;// it whouldnt work  inside getElementById ()
        var mission = "description"+i; // it was annoying 
        document.getElementById(pic).src= manObj.results[i].profile_image// I could of used the first  function if it was named the same thing
        document.getElementById(name).innerHTML= manObj.results[i].name // name is cuz they arnt that mean
        document.getElementById(mission).innerHTML= manObj.results[i].bio//i guess this one whould have to change  but still annoyed
      }
           
        
    }
}
function laod()// loading screen
{
    
    if(httptRequest.readyState == 1||httptRequest.readyState == 2||httptRequest.readyState == 3 )// when it is anything i dont want
    {
       document.getElementById("loadding").innerHTML= "<img src='honeystar.gif'  alt='loading' >";// yellow star  it could be any thing i just had this
       console.log(httptRequest.readyState)// So I can see where it is stuck
        
 }
}
function start()// realized moonMan was worthless out side this
{
    var moonMan = httptRequest.responseText;// it gets the response witch is a long JSON String
     manObj = JSON.parse(moonMan);// It makes man Obj an Obj
    console.log(manObj)// logs it just in case 
    LoadStart();// makes the cards
   
}
function LoadStart()// makes the cards 
//technecly 6 lines of code
{
    for(var i=0; i<5; i++){ // makes 5 cards
        if(i==3||i==4)// if  card 3 or 4  then it will
        {
            document.getElementById("card").innerHTML+= ` <br>
            <div class="row"><div class="col"> </div></div>
            <div class="row"><div class="col"> <div class="card" style="width: 18rem;">
            <img src="honeystar.png" class="card-img-top" alt="..." id="astronutPic${i}">
            <div class="card-body">
            <h5 class="card-title" id="name${i}">Card title</h5>
            <p class="card-text"id="description${i}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div></div></div></div><br>`
        }
      // mostly cuase I was annoyed at the formating
        else{ // cuase it works better this way
            document.getElementById("card").innerHTML+= ` <div class="card" style="width: 18rem;">
            <img src="honeystar.png" class="card-img-top" alt="..." id="astronutPic${i}">
            <div class="card-body">
            <h5 class="card-title" id="name${i}">Card title</h5>
            <p class="card-text"id="description${i}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div></div>`
        }
  // I hate Bill Nelson now becase he made formationg soooooooooo hard
        }
  
}
function NoCardOverload() // delets cards
{
    document.getElementById("card").innerHTML= ``   //poof
}
// ps if any one copyed my code  its cuz i shared my code on teams to particapate with my team
// but I didnt give them permission to 
//steal my code 
// I may be paranoid  but eh 
// also I  refined it sence then
