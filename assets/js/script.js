/*jshint esversion: 6 */

const foods = [
    {
        name: 'apple',
        img: 'assets/images/foods/card-apple.png',
        translation: {
            en: 'apple',
            de: 'Apfel'
        }
    },
    {
        name: 'avocado',
        img: 'assets/images/foods/card-avocado.png',
        translation: {
            en: 'avocado',
            de: 'Avocado'
        }
    },
    {
        name: 'banana',
        img: 'assets/images/foods/card-banana.png',
        translation: {
            en: 'banana',
            de: 'Banane'
        }
    },
    {
        name: 'broccoli',
        img: 'assets/images/foods/card-broccoli.png',
        translation: {
            en: 'broccoli',
            de: 'Brokkoli'
        }
    },
    {
        name: 'cauliflower',
        img: 'assets/images/foods/card-cauliflower.png',
        translation: {
            en: 'cauliflower',
            de: 'Blumenkohl'
        }
    },
    {
        name: 'cherry',
        img: 'assets/images/foods/card-cherry.png',
        translation: {
            en: 'cherry',
            de: 'Kirsche'
        }
    },
    {
        name: 'chilli',
        img: 'assets/images/foods/card-chilli.png',
        translation: {
            en: 'chilli',
            de: 'Chilli'
        }
    },
    {
        name: 'coconut',
        img: 'assets/images/foods/card-coconut.png',
        translation: {
            en: 'coconut',
            de: 'Kokosnuss'
        }
    },
    {
        name: 'pepper',
        img: 'assets/images/foods/card-pepper.png',
        translation: {
            en: 'pepper',
            de: 'Paprika'
        }
    },
    {
        name: 'strawberry',
        img: 'assets/images/foods/card-strawberry.png',
        translation: {
            en: 'strawberry',
            de: 'Erdbeere'
        }
    },
    {
        name: 'tangerine',
        img: 'assets/images/foods/card-tangerine.png',
        translation: {
            en: 'tangerine',
            de: 'Mandarine'
        }
    },
    {
        name: 'tomato',
        img: 'assets/images/foods/card-tomato.png',
        translation: {
            en: 'tomato',
            de: 'Tomate'
        }
    },
    {
        name: 'brussels sprouts',
        img: 'assets/images/foods/card-brussels-sprout.png',
        translation: {
            en: 'brussels sprouts',
            de: 'Rosenkohl'
        }
    },
    {
        name: 'corn',
        img: 'assets/images/foods/card-corn.png',
        translation: {
            en: 'corn',
            de: 'Mais'
        }
    },
    {
        name: 'eggplant',
        img: 'assets/images/foods/card-eggplant.png',
        translation: {
            en: 'eggplant',
            de: 'Aubergine'
        }
    },
    {
        name: 'lemon',
        img: 'assets/images/foods/card-lemon.png',
        translation: {
            en: 'lemon',
            de: 'Zitrone'
        }
    },
    {
        name: 'lime',
        img: 'assets/images/foods/card-lime.png',
        translation: {
            en: 'lime',
            de: 'Limette'
        }
    },
    {
        name: 'papaya',
        img: 'assets/images/foods/card-papaya.png',
        translation: {
            en: 'papaya',
            de: 'Papaya'
        }
    },
    {
        name: 'peach',
        img: 'assets/images/foods/card-peach.png',
        translation: {
            en: 'peach',
            de: 'Pfirsich'
        }
    },
    {
        name: 'pineapple',
        img: 'assets/images/foods/card-pineapple.png',
        translation: {
            en: 'pineapple',
            de: 'Ananas'
        }
    },
    {
        name: 'potato',
        img: 'assets/images/foods/card-potato.png',
        translation: {
            en: 'potato',
            de: 'Kartoffel'
        }
    },
];

const animals = [
    {
        name: 'bear',
        img: 'assets/images/animals/card-bear.png',
        translation: {
            en: 'bear',
            de: 'Bär'
        }
    },
    {
        name: 'butterfly',
        img: 'assets/images/animals/card-butterfly.png',
        translation: {
            en: 'butterfly',
            de: 'Schmetterling'
        }
    },
    {
        name: 'cat',
        img: 'assets/images/animals/card-cat.png',
        translation: {
            en: 'cat',
            de: 'Katze'
        }
    },
    {
        name: 'cow',
        img: 'assets/images/animals/card-cow.png',
        translation: {
            en: 'cow',
            de: 'Kuh'
        }
    },
    {
        name: 'deer',
        img: 'assets/images/animals/card-deer.png',
        translation: {
            en: 'deer',
            de: 'Hirsch'
        }
    },
    {
        name: 'eagle',
        img: 'assets/images/animals/card-eagle.png',
        translation: {
            en: 'eagle',
            de: 'Adler'
        }
    },
    {
        name: 'elephant',
        img: 'assets/images/animals/card-elephant.png',
        translation: {
            en: 'elephant',
            de: 'Elefant'
        }
    },
    {
        name: 'fish',
        img: 'assets/images/animals/card-fish.png',
        translation: {
            en: 'fish',
            de: 'Fisch'
        }
    },
    {
        name: 'fox',
        img: 'assets/images/animals/card-fox.png',
        translation: {
            en: 'fox',
            de: 'Fuchs'
        }
    },
    {
        name: 'frog',
        img: 'assets/images/animals/card-frog.png',
        translation: {
            en: 'frog',
            de: 'Frosch'
        }
    },
    {
        name: 'lamb',
        img: 'assets/images/animals/card-lamb.png',
        translation: {
            en: 'lamb',
            de: 'Lamm'
        }
    },
    {
        name: 'parrot',
        img: 'assets/images/animals/card-parrot.png',
        translation: {
            en: 'parrot',
            de: 'Papagei'
        }
    },
    {
        name: 'penguin',
        img: 'assets/images/animals/card-penguin.png',
        translation: {
            en: 'penguin',
            de: 'Pinguin'
        }
    },
    {
        name: 'rabbit',
        img: 'assets/images/animals/card-rabbit.png',
        translation: {
            en: 'rabbit',
            de: 'Kaninchen'
        }
    },
    {
        name: 'rhinoceros',
        img: 'assets/images/animals/card-rhinoceros.png',
        translation: {
            en: 'rhinoceros',
            de: 'Nashorn'
        }
    },
    {
        name: 'shark',
        img: 'assets/images/animals/card-shark.png',
        translation: {
            en: 'shark',
            de: 'Hai'
        }
    },
    {
        name: 'squirell',
        img: 'assets/images/animals/card-squirell.png',
        translation: {
            en: 'squirell',
            de: 'Eichhörnchen'
        }
    },
    {
        name: 'swan',
        img: 'assets/images/animals/card-swan.png',
        translation: {
            en: 'swan',
            de: 'Schwan'
        }
    },
    {
        name: 'tiger',
        img: 'assets/images/animals/card-tiger.png',
        translation: {
            en: 'tiger',
            de: 'Tiger'
        }
    },
    {
        name: 'turtle',
        img: 'assets/images/animals/card-turtle.png',
        translation: {
            en: 'turtle',
            de: 'Schildkröte'
        }
    },
    {
        name: 'wolf',
        img: 'assets/images/animals/card-wolf.png',
        translation: {
            en: 'wolf',
            de: 'Wolf'
        }
    },
];

const all = foods.concat(animals);

const body = document.querySelector('body')
const cards = document.querySelectorAll('.card');
const questionWord = document.querySelector('.word');
const correctAnswers = document.querySelector('.correct-answers');
const timer = document.querySelector('.timer');
const modal = document.querySelector('.modal-container');
const hideModal = document.querySelector('.hide-modal');
const displayAnswerScore = document.querySelector('.display-answers span');
const categories = document.querySelectorAll('.start-game');

let correctAnswerCount = 0;
let currentTime = 45;
let usersChoice;

let highscore = localStorage.getItem('highscore') || 0;
let highscoreCount = {value: highscore};

function getRandomIndex(itemList) {
    return Math.floor(Math.random() * itemList.length);
}

// shuffle the array with help from https://www.youtube.com/watch?v=5sNGqsMpW1E
// only access the first 8 items of the array
function randomizeAndReduceList(itemList) {
    return itemList.sort(() => 0.5 - Math.random()).slice(0, 8);
}

// take each name of randomized array and push it into a new array
let translationListOfItems;
function getTranslationListOfItems(itemList) {
    for (let item of itemList) {
        translationListOfItems.push(item.translation.de);
    } return translationListOfItems;
}

// select word based on foods array and randomIndex
function randomizeQuestion(itemList, index) {
    questionWord.textContent = itemList[index].translation.de;
}

// check if questionWord is in the randomizedFoodName
// if not randomize the array until it is
function checkRandomizedItems(itemList, correctedItemList, index) {
    if (!itemList.includes(questionWord.textContent)) {
        correctedItemList.pop();
        correctedItemList.push(usersChoice[index]);
        correctedItemList.sort(() => 0.5 - Math.random());
    }
}

// display cards on the board
function displayCards(itemList) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].innerHTML = `<img src="${itemList[i].img}" alt="${itemList[i].translation.de}">`;
    }
}

// evaluate if clicked image matches the correct answer
function selectCardAndValidateAnswer() {
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
                    }
                }
            }
            card.firstChild.removeEventListener('click', checkAnswer);
            setTimeout(() => {
                startNextRound();
                card.classList.remove('answer-right');
                card.classList.remove('answer-wrong');
            }, 1000);
        });
    }
}

function startNextRound() {
    const randomIndex = getRandomIndex(usersChoice);
    const randomizedAndReducedList = randomizeAndReduceList(usersChoice);

    translationListOfItems = [];
    const randomizedTranslatedListOfItems = getTranslationListOfItems(randomizedAndReducedList);

    randomizeQuestion(usersChoice, randomIndex);
    checkRandomizedItems(randomizedTranslatedListOfItems, randomizedAndReducedList, randomIndex);

    displayCards(randomizedAndReducedList);

    selectCardAndValidateAnswer();
}


for (let category of categories) {
    category.addEventListener('click', () => {
        usersChoice = eval(category.id);
        startNextRound();
        console.log(usersChoice);
    });
}

function setGameSettings() {
    body.classList.add('stop-scrolling');
    for (let category of categories) {
        category.addEventListener('click', () => {
            // remove modal and start game
            modal.classList.add('hide-modal');
            body.classList.remove('stop-scrolling');

            // set up timer with help from https://www.youtube.com/watch?v=GhePFBkdNYk
            let runTimer = setInterval(countDown, 1000);
            function countDown() {
                currentTime--;
                timer.innerText = currentTime;

                if (currentTime === 0) {
                    clearInterval(runTimer);
                    hideModal.classList.remove('hide-modal');
                    body.classList.add('stop-scrolling');
                    displayAnswerScore.innerHTML = `${correctAnswerCount}`;

                    // use local storage to save highscore with help from https://www.youtube.com/watch?v=DFhmNLKwwGw
                    if (correctAnswerCount > highscore) {
                        highscoreCount.value = correctAnswerCount;
                        localStorage.setItem('highscore', highscoreCount.value);
                    }
                }
            }
        });
    }
}

setGameSettings();