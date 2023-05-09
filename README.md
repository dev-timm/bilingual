# BiLINGUAL

This is BiLINGUAL, the website to help you learn basic German vocabulary wrapped inside of a fun game! 

Although learning a new language is a great thing, it can oftentimes end up being a boring chore instead. Throughout the journey of learning a language, people spend most of their time trying to understand the grammar which often results in not having enough practice with the basic vocabulary needed to communicate in daily life.

BiLINGUAL was built to help with this endeavor. The users can learn German vocabulary by playing a simple but fun game.

![An Image previewing all devices](assets/images/readme/device-preview.png)

## Product Decisions

### User Needs

As a person who...

- is learning a new language I want to master basic vocabulary quickly so that I can start interacting with native speakers.
- is encouraged by instant feedback on my actions I would like to quickly see what I’m doing wrong so that I stay motivated to practice.
- likes to track their own progress I’d like to compare my previous and current results so that I see how I improve over time.
- takes a language course where vocabulary is not covered extensively I want to expand my vocabulary so that I won’t be stressed in new situations.


### MVP
For the MVP it was important to have the basic concept of the game running. During the game round, users are offered a quiz-like question where they have to select the right image card according to the German word displayed at the top. The game is structured in such a way that in the future new languages and vocabulary categories can be added easily.

## Design Decisions

### Design Process
To make sure that the focus lies on the functionality, the design process of the game was first captured in low-fidelity mockups before adding visuals.

![An Image previewing low-fi wireframes](assets/images/readme/low-fi-example.png)

All wireframe can be found [here](https://github.com/dev-timm/bilingual/tree/main/assets/images/readme/wireframes)

### Visual Design
The goal of a good visual design should be to support the structure of the UI so that the user can achieve their goals easily. Therefore, the visual design for this project was kept simple and clean with the aim of having more focus on important features.

#### Fonts
The font family [Inter](https://fonts.google.com/specimen/Inter?query=inter) was chosen as the most suitable font for BiLINGUAL. With its simplicity, Inter is a great addition to the game’s UI as it doesn’t attract too much attention but is still able to be used to highlight key textual information.

#### Colors
As images are the key factor of the game, the color palette was kept simple to make sure the emphasis remains on images themselves. As a result, the rest of the UI doesn’t attract too much of the attention. Critical information, however, is highlighted with the vibrant primary color so that the user doesn’t miss any important feedback.

![An Image previewing low-fi wireframes](assets/images/readme/colors.png)

#### Accessibility
The color palette has sufficient contrast and the fonts are well readable which ensures the game is accessible even to visitors with impaired vision.

## Features

### Header
The header is kept simple and only shows the logo on the top left as part of the navigation. By clicking the logo the user returns to the homepage.

![An Image showing the header](assets/images/readme/header.png)

### Intro
The intro section is the first thing that awaits the visitor when landing on the homepage. The headline gives a clear indication on what the user can expect from this website. Below is a quick tutorial about how the game works and a button to start it.

![An Image shwoing the intro of the homepage](assets/images/readme/intro.png)

### High Score
The high score section displays the highest amount of correct answers the user has given throughout all of the rounds they played. The information is saved via local storage, so even when the user closes their browser, the high score will show up once again when they visit the page again.

![An Image shwoing the intro of the homepage](assets/images/readme/high-score.png)

### Game Settings Modal
After clicking on the “Play Game” button, users see the game settings modal which allows them to choose among three different categories. Selecting one of the categories will automatically start the game.

![An Image shwoing the intro of the homepage](assets/images/readme/modal-settings.png)

### Game Screen
The game screen shows 8 random cards which include images that are based on the category users have selected. Above the card grid there is a prompt displayed that asks the user to select the corresponding card, as well as there is a timer that runs down. If a user selects the right image the card will turn green and a new random set of cards will appear.  Clicking on the wrong card will turn it orange and highlight the correct card in green before loading the next prompt. There is a counter on the bottom that shows the number of correct answers the user has given in total during the current game round.

![An Image shwoing the intro of the homepage](assets/images/readme/game.png)

### Game Over Modal
The game over modal shows up as soon as the timer reaches 0. It notifies the user that the game has ended and displays the number of correctly given answers. It also gives the user the choice to start a new game or go back to the homepage.

![An Image shwoing the intro of the homepage](assets/images/readme/modal-score.png)