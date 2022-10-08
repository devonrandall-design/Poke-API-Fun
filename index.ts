// Import stylesheets
import './style.css';

const randomPokemon: number = Math.floor(Math.random() * 905)
const pokeAPI : string = 'https://pokeapi.co/api/v2/pokemon/' + randomPokemon

const input: HTMLElement = document.getElementById('input')
const btn: HTMLElement = document.getElementById('btn')
const form: HTMLInputElement = document.getElementById('form')





const getPokes = async (url: string) => {

  let response = await fetch(url);
  let data = await response.json();

  return data

}






// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

for (let i: number = 0; i < 8; i++) {
  const newRow: HTMLElement = document.createElement('div')
  newRow.classList.add('row')
  appDiv.prepend(newRow) 

  for (let j: number = 0; j < 5; j++) {
    const newBox: HTMLElement = document.createElement('div')
    newBox.classList.add('box')
    newRow.append(newBox)
  }

}

form.addEventListener('submit', handleSubmit) 

function handleSubmit(e) {
  e.preventDefault()

 async function handleGame(url) {

let selectedPoke;

fetch(pokeAPI).then((response) => response.json())
.then((poke) => {

selectedPoke = poke.name
console.log(selectedPoke)

input.value === selectedPoke ? alert('You Win') : alert('You Lose')

})





 }

 handleGame(pokeAPI)
  

  //e.target.value === selectedPoke ? alert('You Win') : alert('You Lose')
}




