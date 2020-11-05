
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message");
const jokediv = document.getElementById("joke")
const createjokeBTN = document.getElementById("createJoke");


let flet = document.querySelector('td');
let index = 0;
let liste = [];
//flet.innerHTML = jokes[0];






////////////////////////// APP/Data


const getJokes = async () => {
    const jokes = await fetch("/jokes");
    return await jokes.json();
};

const postJoke = async (Setup, Punchline) => {
    let newJoke = await fetch("/jokes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            Setup: Setup,
            Punchline: Punchline,
        }),
    });
}


////////////////////////// GUI
/**
 * updateRooms updates the dropdown with new rooms.
 *
 * Does not remove new removed rooms
 */
const updateJokes = async () =>{
const jokes = await getJokes();
return jokes

}




const initGui = async () => {
     liste = await getJokes();
    // Initialize data'
    await updateJokes();
    const jokes = await getJokes();
    flet.innerHTML = liste[index].setup + " " + liste[index].punchLine;

    

    // Initialize handlers
    
};
    


    function skiftJoke() {
        index = (index+1)%liste.length;
        console.log(index);
            flet.innerHTML = liste[index].setup + " " + liste[index].punchLine;


        }

  
    







initGui();