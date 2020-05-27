import logging
from websocket_server import WebsocketServer

HOST = '192.168.0.103'
PORT = 13327

def new_client(client, server):
	print("Client {0} Connected".format(client.get('address')))
	server.send_message_to_all("Client Connected")

def message_received( client, server, message):
	print("Client:")
	print(message)

server = WebsocketServer(PORT, host=HOST)
server.set_fn_new_client(new_client)

server.set_fn_message_received(message_received)

server.run_forever()
