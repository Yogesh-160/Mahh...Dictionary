const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const output = document.getElementById('output');
const sound = document.getElementById('audio');
const btn = document.getElementById('Search');

btn.addEventListener('click', () => {
    let inputWord = document.getElementById('input-word').value;
    fetch(`${url}${inputWord}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        output.innerHTML = `<div class="word">
                <h3>${inputWord}</h3>
                <button onClick="playSound()"><i class="ri-volume-up-fill"></i></button>
            </div>

            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>

            <p id="word-meaning">
                ${data[0].meanings[0].definitions[0].definition}
            </p>
            <p class="word-example">
               ${data[0].meanings[0].definitions[0].example || ""}
            </p>`;
        sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
        console.log(sound);
    })
    .catch(() => {
        output.innerHTML = `<h3 class="error">Couldn't Find the Word</h3>`;
    });
});

function playSound() {
    sound.play();
}


document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = 'mailto:yogesh.jha0704@gmail.com';
});

document.addEventListener('keypress', (event)=>{
    let keyCode = event.keyCode ? event.keyCode : event.which;

    
    if(keyCode === 13) {
      
      btn.click();
    }
      
  });