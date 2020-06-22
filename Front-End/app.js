const HOST = "192.168.1.15";
const PORT = 13327;

// Run a basic website design from html file

// require("../Client/Client");

var ws = new WebSocket("ws://" + HOST + ":" + PORT);

ws.onopen = function () {
  console.log(`Connected to Server ${HOST}:${PORT}`);
};

function clickButt() {
  ws.send("Scan");
  document.getElementById("image").src =
    "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif";

  console.log("Click butt.....buuuuttttt!!!!");
  console.log(HOST + ":" + PORT);
}

ws.onmessage = function (event) {
  console.log("Server:\t" + event.data);

  document.getElementById("image").src = "data:image/jpeg;base64," + event.data;
};

ws.onerror = function (error) {
  console.log("Error");
  ws = new WebSocket("ws://" + HOST + ":" + PORT);
};
