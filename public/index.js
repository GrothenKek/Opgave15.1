//const { get } = require("mongoose");

const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message");
const jokediv = document.getElementById("joke")
const createjokeBTN = document.getElementById("createJoke");


let flet = document.querySelector('td');
let index = 0;
let liste = [];
let other = [];
let otherjokes = [];
//flet.innerHTML = jokes[0];

////////////////////////// APP/Data




const getJokes = async () => {
    const jokes = await fetch("/jokes");
    return await jokes.json();
};

const postJoke = async () => {
    let setup = document.getElementById("setup").value;
    let punchline = document.getElementById("punchline").value;
    let newJoke = await fetch("/jokes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            setup: setup,
            punchline: punchline,
        }),
    });
}

const getothersites = async function (url) {
    const res = await fetch(url);
    if (res.status !== 200) {
        throw new Error(res.status);
    }
    return await res.json();
}

const getotherjokes = async function(url){
    otherjokes = await getothersites(url);
    console.log(res.json);
}







////////////////////////// GUI
/**
 * updateRooms updates the dropdown with new rooms.
 *
 * Does not remove new removed rooms
 */




const initGui = async () => {
    other = await getothersites("https://krdo-joke-registry.herokuapp.com/api/services");
    liste = await getJokes();
  //  getotherjokes("https://jokerullemaria.herokuapp.com/api/jokes");
   // console.log(other);
    
    // Initialize data'
    const jokes = await getJokes();
    flet.innerHTML = liste[index].setup + " " + liste[index].punchline;
    // Initialize handlers
    
};
    function skiftJoke() {
        index = (index+1)%liste.length;
        console.log(index);
            flet.innerHTML = liste[index].setup + " " + liste[index].punchline;


        }



initGui();