jokes = ["Banana", "Orange", "Apple", "Mango"];
joketal = 0;
let flet = document.querySelector('td');

flet.innerHTML = jokes[0];

function skiftJoke(){
    
    flet.innerHTML = jokes[joketal];
    joketal++;
 
    if(joketal > jokes.length - 1){
        joketal = 0;
    }
  
}


