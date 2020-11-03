const chatroomsDropdown = document.getElementById("chatrooms");
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message");
const username = () => document.getElementById("username").value;
const currentRoom = () =>
    chatroomsDropdown.selectedOptions[0].id.split("room-")[1];
const updateRoom = () => changeRoom(currentRoom());
const createRoomBtn = document.getElementById("createroom");

////////////////////////// APP/Data


const getJokes = async () => {
    const jokes = await fetch("/jokes");
    return await jokes.json();
};

const sendJoke = async (Setup, Punchline) => {
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

}




const initGui = async () => {
    // Initialize data
    await updateRooms();
    await updateRoom();

    // Initialize handlers
    chatroomsDropdown.onclick = () => updateRooms();
    chatroomsDropdown.onchange = (event) => updateRoom();
    messageInput.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            sendMessage(document.getElementById("message").value);
        }
    });
    messagesDiv.onclick = (event) => messageClicked(event.target);
    createRoomBtn.onclick = () => createRoom();

    // Auto refresh
    setInterval(() => {
        updateRoom();
    }, 2000);
};

initGui();