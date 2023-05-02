const foods = [
    {
        id: 0,
        name: 'apple',
        img: 'assets/images/card-apple.png',
        translation: {
            en: 'apple',
            de: 'Apfel'
        }
    },
    {
        id: 1,
        name: 'avocado',
        img: 'assets/images/card-avocado.png',
        translation: {
            en: 'avocado',
            de: 'Avocado'
        }
    },
    {
        id: 2,
        name: 'banana',
        img: 'assets/images/card-banana.png',
        translation: {
            en: 'banana',
            de: 'Banane'
        }
    },
    {
        id: 3,
        name: 'broccoli',
        img: 'assets/images/card-brokoli.png',
        translation: {
            en: 'broccoli',
            de: 'Brokkoli'
        }
    },
    {
        id: 4,
        name: 'cauliflower',
        img: 'assets/images/card-cauliflower.png',
        translation: {
            en: 'cauliflower',
            de: 'Blumenkohl'
        }
    },
    {
        id: 5,
        name: 'cherry',
        img: 'assets/images/card-cherry.png',
        translation: {
            en: 'cherry',
            de: 'Kirsche'
        }
    },
    {
        id: 6,
        name: 'chilli',
        img: 'assets/images/card-chilli.png',
        translation: {
            en: 'chilli',
            de: 'Chilli'
        }
    },
    {
        id: 7,
        name: 'coconut',
        img: 'assets/images/card-coconut.png',
        translation: {
            en: 'coconut',
            de: 'Kokosnuss'
        }
    },
    {
        id: 8,
        name: 'pepper',
        img: 'assets/images/card-pepper.png',
        translation: {
            en: 'pepper',
            de: 'Paprika'
        }
    },
    {
        id: 9,
        name: 'strawberry',
        img: 'assets/images/card-strawberry.png',
        translation: {
            en: 'strawberry',
            de: 'Erdbeere'
        }
    },
    {
        id: 10,
        name: 'tangerine',
        img: 'assets/images/card-tangerine.png',
        translation: {
            en: 'tangerine',
            de: 'Orange'
        }
    },
    {
        id: 11,
        name: 'tomato',
        img: 'assets/images/card-tomato.png',
        translation: {
            en: 'tomato',
            de: 'Tomate'
        }
    }
];

const cards = document.querySelectorAll('.card');
const questionWord = document.querySelector('.word');
const correctAnswers = document.querySelector('.correct-answers')
const timer = document.querySelector('.timer');

let randomizedFoodNameList = [];
let correctAnswerCount = 0;
let currentTime = 45;

function startNextRound() {

    let randomIndex = Math.floor(Math.random() * foods.length);

    // shuffle the array with help from https://www.youtube.com/watch?v=5sNGqsMpW1E
    // only access the first 8 items of the foods array
    function randomizeFoodList() {
        let foodRandomizer = foods.sort(() => 0.5 - Math.random()).slice(0, 8);
        return foodRandomizer;
    }

    let randomizedFoods = randomizeFoodList();

    // take each name of randomized array and push it into a new array
    function randomizeFoodNames() {
        for (let randomizedFood of randomizedFoods) {
            randomizedFoodNameList.push(randomizedFood.name)
        } return randomizedFoodNameList
    };

    let randomizedFoodNames = randomizeFoodNames();

    // select word based on foods array and randomIndex
    function randomizeQuestion() {
        questionWord.textContent = foods[randomIndex].name;
    }

    randomizeQuestion();

    // check if questionWord is in the randomizedFoodName
    // if not randomize the array until it is
    function checkRandomizedFoods() {
        if (!randomizedFoodNames.includes(questionWord.textContent)) {
            randomizedFoods.pop();
            randomizedFoods.push(foods[randomIndex])
            randomizedFoods.sort(() => 0.5 - Math.random());
        }
    };

    checkRandomizedFoods();

    // display cards on the board
    function displayCards() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].innerHTML = `<img src="${randomizedFoods[i].img}" alt="${randomizedFoods[i].name}">`;
        }
    };

    displayCards();

    // evaluate if clicked image matches the correct answer
    function selectCard() {
        for (let card of cards) {
            card.firstChild.addEventListener('click', (e) => {
                if (e.target.alt === questionWord.innerText) {
                    card.classList.add('answer-right');
                    correctAnswerCount++;
                    correctAnswers.innerHTML = `${correctAnswerCount}`;
                } else {
                    card.classList.add('answer-wrong');
                }
                startNextRound();
            });
        };
    };

    selectCard();
};

startNextRound();

// set up timer with help from https://www.youtube.com/watch?v=GhePFBkdNYk
let runTimer = setInterval(countDown, 1000);

function countDown() {
    currentTime--
    timer.innerText = currentTime;

    if (currentTime === 0) {
        clearInterval(runTimer);
        alert('Game Over!');
    }
};