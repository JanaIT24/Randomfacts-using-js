let button = document.querySelector(".next")
let title = document.querySelector(".title")
let image = document.querySelector(".img1")
let fact_content = document.querySelector(".fact-content")


const quotes = [
    {
        title: "butterfly",
        image: "pictures/butterfly.jpg",
        fact_content: "Butterfly wings are transparent and there are almost 20,000 butterfly species"

    },
    {
        title: "deer",
        image: "pictures/deer1.jpg",
        fact_content: "White-tailed deer use their white tails to signal to other deer that danger is near"

    },
    {
        title: "flamingo",
        image: "pictures/flamingo.jpg",
        fact_content: "Flamingo nests are made of mud and they get their pink color from their food .A baby flamingo is called a flaminglet"

    },
    {
        title: "giraffe",
        image: "pictures/giraffee.jpg",
        fact_content: "Giraffes are the tallest mammal on earth,their neck can't reach the ground.They are found on the African Savannah"

    },
    {
        title: "humming bird",
        image: "pictures/hummingbird.jpg",
        fact_content: "They are the smallest migrating bird.Humming bird is the only bird that can fly backwards,They have no sense of smell"

    },
    {
        title: "buddha",
        image: "pictures/buddha.jpeg",
        fact_content: "Three major tenents Buddha taught his followers were not to be ignorant,hate others or get angry"

    },
    {
        title: "lion",
        image: "pictures/lion.webp",
        fact_content: "Lions are the only turly social cats,living in group called prides.A lion roar acn be heard from up to 5 miles"

    },
    {
        title: "tiger",
        image: "pictures/tiger.jpg",
        fact_content: "Tiger stripes are unique,They can use their ear to communicate and they eat only meal a week"

    },
    {
        title: "venus flytrap",
        image: "pictures/venustrap.webp",
        fact_content: "Venus Flytrap is a carnivorous plant.These plant leaves have specialized lobes with sensitive trigger hairs."

    },
    {
        title: "bali handara gate",
        image: "pictures/tour.jpeg",
        fact_content: "The Bali Handara Gate is an iconic landmark in Bali,Indonesia.Its traditional Balinese split gate design is adorned with intricate carvings and is often shrouded in mist,creating a mystical atmosphere"

    },
    {
        title: "Squirrel",
        image: "pictures/Squirrel.jpg",
        fact_content: "Squirrel use a variety of vocalization and tail movements to communicate with each otherThere are over 200 different species of squirrels"

    },
    {
        title: "panda",
        image: "pictures/panda.jpg",
        fact_content: "Pandas are primarily herbivores.They are generally solitary animals.Pandas use scent marking to communicate with each other"

    },
    {
        title: "raccoon",
        image: "pictures/racoon.jpg",
        fact_content: "Raccoons are primarily nocturnal,meaning they are most active during night.Raccoons produce various vocalization"

    },
    {
        title: "meerkat",
        image: "pictures/brownee.jpg",
        fact_content: "Meerkats are highly social animals and live in groups called 'mobs' or 'clans'.In wild ,meerkats generally live around 7 to 10 years"
    },
    {
        title: "pyramid",
        image: "pictures/pyramid.jpg",
        fact_content: "The Great Pyramid was originally covered in smooth,white Tura limestone casing stones"

    },
    {
        title: "porcupine",
        image: "pictures/porcupine.jpg",
        fact_content: "Porcupines are rodents known for their distinctive quills used for defense mechanism.The tips of a porcupine's quills have tiny barbs that make removal difficult"

    },

]

button.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    title.innerText = quotes[random].title;
    image.src = quotes[random].image;
    fact_content.innerText = quotes[random].fact_content;
    console.log(random)
})