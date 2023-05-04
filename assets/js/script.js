const foods = [
    {
        name: 'apple',
        img: 'assets/images/card-apple.png',
        translation: {
            en: 'apple',
            de: 'Apfel'
        }
    },
    {
        name: 'avocado',
        img: 'assets/images/card-avocado.png',
        translation: {
            en: 'avocado',
            de: 'Avocado'
        }
    },
    {
        name: 'banana',
        img: 'assets/images/card-banana.png',
        translation: {
            en: 'banana',
            de: 'Banane'
        }
    },
    {
        name: 'broccoli',
        img: 'assets/images/card-broccoli.png',
        translation: {
            en: 'broccoli',
            de: 'Brokkoli'
        }
    },
    {
        name: 'cauliflower',
        img: 'assets/images/card-cauliflower.png',
        translation: {
            en: 'cauliflower',
            de: 'Blumenkohl'
        }
    },
    {
        name: 'cherry',
        img: 'assets/images/card-cherry.png',
        translation: {
            en: 'cherry',
            de: 'Kirsche'
        }
    },
    {
        name: 'chilli',
        img: 'assets/images/card-chilli.png',
        translation: {
            en: 'chilli',
            de: 'Chilli'
        }
    },
    {
        name: 'coconut',
        img: 'assets/images/card-coconut.png',
        translation: {
            en: 'coconut',
            de: 'Kokosnuss'
        }
    },
    {
        name: 'pepper',
        img: 'assets/images/card-pepper.png',
        translation: {
            en: 'pepper',
            de: 'Paprika'
        }
    },
    {
        name: 'strawberry',
        img: 'assets/images/card-strawberry.png',
        translation: {
            en: 'strawberry',
            de: 'Erdbeere'
        }
    },
    {
        name: 'tangerine',
        img: 'assets/images/card-tangerine.png',
        translation: {
            en: 'tangerine',
            de: 'Orange'
        }
    },
    {
        name: 'tomato',
        img: 'assets/images/card-tomato.png',
        translation: {
            en: 'tomato',
            de: 'Tomate'
        }
    },
    {
        name: 'brussels sprouts',
        img: 'assets/images/card-brussels-sprout.png',
        translation: {
            en: 'brussels sprouts',
            de: 'Rosenkohl'
        }
    },
    {
        name: 'corn',
        img: 'assets/images/card-corn.png',
        translation: {
            en: 'corn',
            de: 'Mais'
        }
    },
    {
        name: 'eggplant',
        img: 'assets/images/card-eggplant.png',
        translation: {
            en: 'eggplant',
            de: 'Aubergine'
        }
    },
    {
        name: 'lemon',
        img: 'assets/images/card-lemon.png',
        translation: {
            en: 'lemon',
            de: 'Zitrone'
        }
    },
    {
        name: 'lime',
        img: 'assets/images/card-lime.png',
        translation: {
            en: 'lime',
            de: 'Limette'
        }
    },
    {
        name: 'papaya',
        img: 'assets/images/card-papaya.png',
        translation: {
            en: 'papaya',
            de: 'Papaya'
        }
    },
    {
        name: 'peach',
        img: 'assets/images/card-peach.png',
        translation: {
            en: 'peach',
            de: 'Pfirsich'
        }
    },
    {
        name: 'pineapple',
        img: 'assets/images/card-pineapple.png',
        translation: {
            en: 'pineapple',
            de: 'Ananas'
        }
    },
    {
        name: 'potato',
        img: 'assets/images/card-potato.png',
        translation: {
            en: 'potato',
            de: 'Kartoffel'
        }
    },
];

const cards = document.querySelectorAll('.card');
const questionWord = document.querySelector('.word');
const correctAnswers = document.querySelector('.correct-answers')
const timer = document.querySelector('.timer');
const hideModal = document.querySelector('.hide-modal')
const displayAnswerScore = document.querySelector('.display-answers span');

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
    let randomizedFoodNameList = [];
    function randomizeFoodNames() {
        for (let randomizedFood of randomizedFoods) {
            randomizedFoodNameList.push(randomizedFood.translation.de)
        } return randomizedFoodNameList
    };

    let randomizedFoodNames = randomizeFoodNames();

    // select word based on foods array and randomIndex
    function randomizeQuestion() {
        questionWord.textContent = foods[randomIndex].translation.de;
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
            cards[i].innerHTML = `<img src="${randomizedFoods[i].img}" alt="${randomizedFoods[i].translation.de}">`;
        }
    };

    displayCards();

    // evaluate if clicked image matches the correct answer
    function selectCard() {
        for (let card of cards) {
            card.firstChild.addEventListener('click', function checkAnswer(e) {
                if (e.target.alt === questionWord.innerText) {
                    card.classList.add('answer-right');
                    correctAnswerCount++;
                    correctAnswers.innerHTML = `${correctAnswerCount}`;
                } else {
                    card.classList.add('answer-wrong');
                    for (let card of cards) {
                        if (card.firstChild.alt === questionWord.innerText) {
                            card.classList.add('answer-right');
                            setTimeout(() => {
                                card.classList.remove('answer-right');
                            }, 1000);
                        };
                    };
                };
                card.firstChild.removeEventListener('click', checkAnswer);
                setTimeout(() => {
                    startNextRound();
                    card.classList.remove('answer-right');
                    card.classList.remove('answer-wrong');
                }, 1000);
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
        document.body.innerHTML;
        hideModal.classList.remove('hide-modal');
        displayAnswerScore.innerHTML = `${correctAnswerCount}`;
    }
};