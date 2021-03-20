function showText() {
  const inputText = document.querySelector('#text-input');
  inputText.addEventListener('keyup', (e) => {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = e.target.value;
  });
  const newText = document.createElement('p');
  inputText.appendChild(newText);
}

function showImagem() {
  const inputImage = document.querySelector('#meme-insert');
  inputImage.addEventListener('change', (e) => {
    const memeContainer = document.querySelector('#meme-image');
    const newImage = document.createElement('img');
    newImage.id = 'memeImage';
    memeContainer.appendChild(newImage);
    newImage.src = URL.createObjectURL(e.target.files[0]);
    newImage.onload = () => {
      URL.revokeObjectURL(newImage.src);
    };
  });
}

const fireBtn = document.querySelector('#fire');
const waterBtn = document.querySelector('#water');
const earthBtn = document.querySelector('#earth');
const memeImageContainer = document.querySelector('#meme-image-container');

console.log(fireBtn, waterBtn, earthBtn);

fireBtn.addEventListener('click', () => {
  memeImageContainer.style.border = 'red dashed 1px';
});

waterBtn.addEventListener('click', () => {
  memeImageContainer.style.border = 'blue double 5px';
});

earthBtn.addEventListener('click', () => {
  memeImageContainer.style.border = 'green groove 6px';
});

window.onload = () => {
  showText();
  showImagem();
};
