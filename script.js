//your code here
let button=document.getElementById('swap');
let body=document.getElementsByTagName('body')
let main=document.getElementById("app")

function swap(){
    //body.style.backgroundcolor="dark";
    // var element = document.body;
    // element.classList.toggle("dark-mode");
    if(button.getAttribute("class")==="button_day"){
    document.body.style.backgroundColor = "dark";
    button.setAttribute("class", "button_night")
    main.setAttribute("class","night")
    }
    else{
        document.body.style.backgroundColor = "light";
        button.setAttribute("class", "button_day")
        main.setAttribute("class","day") 
    }

    //console.log("hi")
}