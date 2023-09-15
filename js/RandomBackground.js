const backgrounds = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg","img/7.jpg","img/8.jpg","img/9.jpg","img/10.jpg"]

const random_number = Math.floor(Math.random()*backgrounds.length)
console.log(random_number);
const random_Select = backgrounds[random_number];



const rnd = document.createElement("img");
rnd.src = `${random_Select}`;
rnd.className="container_background"

document.body.appendChild(rnd);
