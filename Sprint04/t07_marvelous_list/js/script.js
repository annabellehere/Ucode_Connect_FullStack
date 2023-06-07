const title = document.querySelector('.info .title');
const date = document.querySelector('.info .data')
const photo = document.querySelector('.poster');
const actor1 = document.querySelector('.info .actors .actor1');
const actor2 = document.querySelector('.info .actors .actor2');
const actor3 = document.querySelector('.info .actors .actor3');
const actor4 = document.querySelector('.info .actors .actor4');
const desc = document.querySelector('.info .desc');

const movis = [
  {
    title: "It",
    date: "September 7, 2017",
    actors: "Jaeden Martell, Jeremy Ray Taylor, Finn Wolfhard, Jake Johnson",
    actor1: "Jeremy Ray Taylor",
    actor2: "Jaeden Martell",
    actor3: "Finn Wolfhard",
    actor4: "Sophia Lillis",
    description: "It (titled onscreen as It Chapter One) is a 2017 American supernatural horror film directed by Andy Muschietti and written by Chase Palmer, Cary Fukunaga, and Gary Dauberman. ",
  },
  {
    title: "FAST X",
    date: "May 18, 2023",
    actor1: "Vin Diesel",
    actor2: "Michelle Rodriguez",
    actor3: "Jason Momoa",
    actor4: "John Cena",
    description: "Fast X (also known as Fast & Furious 10) is a 2023 American action film directed by Louis Leterrier from a screenplay written by Dan Mazeau and Justin Lin, who also co-wrote the story with Zach Dean."
  },
  {
    title: "Baywatch",
    date: "May 25, 2017",
    actor1: "Dwayne Johnson",
    actor2: "Zac Efron",
    actor3: "Priyanka Chopra Jona",
    actor4: "Alexandra Daddario",
    description: "Baywatch (Eng. Baywatch) is an American comedy film directed by Seth Gordon about a group of beach lifeguards working on the Atlantic coast who suddenly learn that a major oil company is destroying the coast for financial reasons."
  }
];

function showAll(num) {
  const movie = movis[num];
  title.textContent = movie.title;
  date.textContent = movie.date;
  actor1.textContent = `${movie.actor1}`;
  actor2.textContent = `${movie.actor2}`;
  actor3.textContent = `${movie.actor3}`;
  actor4.textContent = `${movie.actor4}`;
  desc.textContent = `${movie.description}`;
  photo.src = `assets/images/${num + 1}.jpg`;
}

showAll(0);