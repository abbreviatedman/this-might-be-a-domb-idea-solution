const paragraph = document.querySelector('p');
paragraph.style.color = 'lightblue';

const heading = document.querySelector('h1');
heading.style.fontSize = '5em';

paragraph.innerText = 'Lorem ipsum dolor amet viral meh selfies drinking vinegar, intelligentsia poke flannel twee paleo enamel pin cray. Banjo celiac crucifix, kickstarter la croix air plant jianbing hashtag vinyl hell of man bun selvage schlitz banh mi. Tacos hella raclette quinoa blog, williamsburg adaptogen tbh. Hexagon af stumptown lumbersexual synth gentrify quinoa enamel pin celiac master cleanse. Truffaut typewriter shoreditch, semiotics iceland mixtape taxidermy umami distillery austin hashtag. Food truck synth wayfarers, street art banh mi actually authentic. Bitters tousled tattooed vegan neutra pug hell of fixie chia unicorn letterpress.'

const item13 = document.querySelector('#item-13');
item13.style.opacity = 0.5;

const item3 = document.querySelector('#item-3');
item3.innerText = `I say "Hi!"`;

const image = document.querySelector('img');
image.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';
image.style.height = '300px';


const newImage = document.createElement('img');
newImage.src = 'http://www.tioxic.com/wp-content/uploads/trex_3.jpg';
newImage.style.height = '300px';

const div = document.querySelector('div');
div.appendChild(newImage);

const newLi = document.createElement('li');
newLi.className = 'item';
newLi.id = 'item-16';
newLi.innerText = `Won't get fooled again.`;

const list = document.querySelector('ul');
list.appendChild(newLi);
