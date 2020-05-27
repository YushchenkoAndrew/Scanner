const HOST = "192.168.0.103";
const PORT = 13327;

// Run a basic website design from html file

// require("../Client/Client");

var socket = new WebSocket("ws://" + HOST + ":" + PORT);

function clickButt() {
  socket.send("cpp");

  console.log("Click butt.....buuuuttttt!!!!");
  console.log(HOST + ":" + PORT);
}

socket.onmessage = function (event) {
  console.log(event);
  console.log(event.data);
};
