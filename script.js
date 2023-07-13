var socket = io("ws://localhost:3000");

socket.on('playsong',song => {
  play(song)
})

document.getElementById("button").addEventListener('click',() => {
  var song = document.getElementById('song').value
  socket.emit('playsong',song);
})

const play = async (song) => {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = song;
  audioPlayer.load();
  audioPlayer.play();
}