const chatroomsDropdown = document.getElementById("chatrooms");
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message");
const username = () => document.getElementById("username").value;
const currentRoom = () =>
    chatroomsDropdown.selectedOptions[0].id.split("room-")[1];
const updateRoom = () => changeRoom(currentRoom());
const createRoomBtn = document.getElementById("createroom");

////////////////////////// APP/Data

const getRooms = async () => {
    const rooms = await fetch("/rooms");
    return await rooms.json();
};

const getMessages = async (roomName) => {
    return (messages = await (await fetch(`/rooms/${roomName}/messages`)).json());
};
////////////////////////// GUI
/**
 * updateRooms updates the dropdown with new rooms.
 *
 * Does not remove new removed rooms
 */
const updateRooms = async () => {
    const rooms = await getRooms();
    rooms
        .filter((room) => !document.getElementById(`room-${room.name}`)) // Remove known rooms
        .forEach((room) => {
            chatroomsDropdown.innerHTML += `<option id=room-${room.name}>${room.name}</option>`;
        });
};

const changeRoom = async (roomName) => {
    const messageHTML = (id, name, text) => {
        return `<div class="chatmessage" id="${id}">
							<p class="name">${name}</p><p>:</p>
							<p class="message-text">${text}</p>
							<p class="delete" id="${id}">X</p>
						</div>`;
    };
    const messages = await getMessages(roomName);
    messagesDiv.innerHTML = messages.reduce(
        (html, { _id: id, name, text }) => (html += messageHTML(id, name, text)),
        ""
    );
};

const createRoom = () => {
    const roomName = window.prompt("Enter a new room:");
    if (roomName) {
        chatroomsDropdown.innerHTML =
            `<option id=room-${roomName}>${roomName}</option>` +
            chatroomsDropdown.innerHTML;
    }
};

const sendMessage = async (message) => {
    let newMessage = await fetch("/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: username(),
            text: message,
            room: currentRoom(),
        }),
    });

    updateRoom();
    messageInput.value = "";
};

const messageClicked = async (elementClicked) => {
    if (!elementClicked.classList.contains("delete")) return;
    let deletedMessage = await fetch("/messages/" + elementClicked.id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    });
    updateRoom();
};

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