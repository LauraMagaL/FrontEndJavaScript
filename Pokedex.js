function fetchPokemon() {
    const pokeName = document.getElementById("pokeName"); //las ID en HTML nos permiten jalarlas fácilmente
    
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; //comillas invertidas con Alt+96
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            console.log("Ha ocurrido un erro")
            pokeImage("./img/pokemon-sad.gif");

            numbername.innerText = `No pudimos encontrar ese Pokemón :,c`
        }
        else {
            return res.json();
        }

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
    });
}

function pokeImage (url) {
    const pokeImg= document.getElementById("pokeImg");
    pokeImg.src = url;
}


var video = document.getElementById("bike");
var btn = document.getElementById("bike");
function myFunction() {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause";
    } else {
      video.pause();
      btn.innerHTML = "Play";
    }
  }


