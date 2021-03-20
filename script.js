function showText() {
  const inputText = document.querySelector('#text-input');
  inputText.addEventListener('keyup', (e) => {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = e.target.value;
  });
}

function showImagem() {
  const inputImage = document.querySelector('#meme-insert');
  inputImage.addEventListener('change', (e) => {
    const memeContainer = document.querySelector('#meme-image-container');
    const newImage = document.createElement('img');
    newImage.id = 'memeImage';
    memeContainer.appendChild(newImage);
    newImage.src = URL.createObjectURL(e.target.files[0]);
    newImage.onload = () => {
      URL.revokeObjectURL(newImage.src);
    };
  });
}

window.onload = () => {
  showText();
  showImagem();
};
