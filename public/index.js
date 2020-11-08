

const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message");
const jokediv = document.getElementById("joke")
const createjokeBTN = document.getElementById("createJoke");
const dropdown = document.querySelector('#dropdownmenu');
dropdown.addEventListener('click', (event)=>{
    getotherjokes(event.target.id) 
});


let flet = document.querySelector('td');
let index = 0;
let liste = [];
let other = [];
let otherjokes = [];
//flet.innerHTML = jokes[0];

////////////////////////// APP/Data

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201)
        throw new Error(respons.status);
    return await respons.json();
};


const getJokes = async () => {
    const jokes = await fetch("/api/jokes");
    return await jokes.json();
};

const postJoke = async () => {
    let setup = document.getElementById("setup").value;
    let punchline = document.getElementById("punchline").value;
    let newJoke = await fetch("/api/jokes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            setup: setup,
            punchline: punchline,
        }),
    });
}



async function getText(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.text();
}



async function generateTable2(){
   
    try {
        
   let response = await fetch('/api/othersites');
     other = await response.json();
     
    let template = await getText('/service.hbs');
        if (response.status !== 200) {
            throw new Error(response.status);
        }
    let compiledTemplate = Handlebars.compile(template);
    return compiledTemplate({ other });

    }
    catch(e){
        console.log(e.name + ": "+e.message);

    }
}




////////////////////////// GUI
/**
 * updateRooms updates the dropdown with new rooms.
 *
 * Does not remove new removed rooms
 */





const initGui = async () => {
    
    liste = await getJokes();
    dropdown.innerHTML = await generateTable2();
    
    
    
    flet.innerHTML = liste[index].setup + " " + liste[index].punchline;
    console.log(other);
    

    let obj = {
          "name": "pandekagekongerne",
       "address": "https://pandekagekongerne.herokuapp.com/",
         "secret": "pandekage"
      }
   

    if (other.find(other => other.name !=="pandekagekongerne")){
        console.log("findes");
         //post('https://krdo-joke-registry.herokuapp.com/api/services',obj);
    }
    else{
        console.log("findes ikke");

    }
  
    
    
   

    
}
    function skiftJoke() {
        index = (index+1)%liste.length;
            flet.innerHTML = liste[index].setup + " " + liste[index].punchline;


        }

async function getotherjokes(id) {
    liste = await (await fetch('api/othersites/'+id)).json();
    if(liste.length===0){
        throw new error("empty array");
    }
    
}





initGui();