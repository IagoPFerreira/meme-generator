const textInput = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const submitBtn = document.querySelector('#submit-button');

submitBtn.addEventListener('click', () => {
  memeText.innerText = textInput.value;

  console.log(memeText);
});
