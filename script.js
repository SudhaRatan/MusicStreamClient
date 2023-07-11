var socket = io("ws://localhost:3000");

socket.on('playsong',song => {
  console.log(song)
  play(song)
})

document.getElementById("button").addEventListener('click',() => {
  var song = document.getElementById('song').value
  socket.emit('playsong',song);
})

const play = (song) => {
  const audioPlayer = document.getElementById('audioPlayer');
  audioPlayer.src = `http://localhost:3000/music/${song}`;
  audioPlayer.load();
  audioPlayer.play();
}