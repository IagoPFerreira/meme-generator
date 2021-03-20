function showText() {
  const inputText = document.querySelector('#text-input');
  inputText.addEventListener('keyup', (e) => {
    const memeText = document.querySelector('#meme-text');
    memeText.innerText = e.target.value;
  });
  const newText = document.createElement('p');
  inputText.appendChild(newText);
}

// Refatoração com considerações de Wanderson Salles Turma 10 Tribo A
function showImagem() {
  const inputImage = document.querySelector('#meme-insert');

  inputImage.addEventListener('change', (e) => {
    const newImage = document.querySelector('#memeImage');
    newImage.src = URL.createObjectURL(e.target.files[0]);
    newImage.onload = () => {
      URL.revokeObjectURL(newImage.src);
    };
  });
}

const fireBtn = document.querySelector('#fire');
fireBtn.style.backgroundColor = 'rgb(255, 0, 0)';

const waterBtn = document.querySelector('#water');
waterBtn.style.backgroundColor = 'rgb(0, 0, 255)';

const earthBtn = document.querySelector('#earth');
earthBtn.style.backgroundColor = 'rgb(0, 128, 0)';

const memeContainer = document.querySelector('#meme-image-container');

console.log(fireBtn, waterBtn, earthBtn);

fireBtn.addEventListener('click', () => {
  memeContainer.style.border = 'red dashed 3px';
});

waterBtn.addEventListener('click', () => {
  memeContainer.style.border = 'blue double 5px';
});

earthBtn.addEventListener('click', () => {
  memeContainer.style.border = 'green groove 6px';
});

window.onload = () => {
  showText();
  showImagem();
};
