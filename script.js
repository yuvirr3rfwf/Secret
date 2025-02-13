// Surprise Button
const surpriseBtn = document.getElementById('surprise-btn');
const hiddenMessage = document.getElementById('hidden-message');
const romanticSong = document.getElementById('romantic-song');

surpriseBtn.addEventListener('click', () => {
  hiddenMessage.classList.add('visible');
  romanticSong.play();
});