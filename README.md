# GWENT MEMORY GAME 

[Link to a live site](https://patrycjablaszkowska.github.io/gwent-memory-game/)

![Responsive view of Wizzards Tower website](./docs/images/introduction-view.PNG)

## **Contents**

- [Intrdocution](#introduction)
- [UXD - User Experience Design](#uxd-–-user-experience-design)
- [The Strategy Plane](#the-strategy-plane)
    - [Creator Goals](#creator-goals)
    - [User Stories](#user-stories) 
- [The Scope Plane](#the-scope-plane)
- [The Structure Plane](#the-structure-plane)
    - [Colors](#colors)
    - [Fonts](#fonts)
    - [Images](#images)
[The Skeleton Plane](#the-skeleton-plane)
    -[Additonal page](#additional-page)

## INTRODUCTION 

Welcome to my second project,part of the Code Institute Full Stack Development Course. The main purpose of this project is to build a fully functioning web application with JavaScript. 

The Gwent Memory Game is a online card game inspired by Witcher's universe.

The user is able to navigate through the website using a fully responsive navigation bar and buttons.
The user can see the leadboard, including the best scores, as well as save their own after the game is over.
The game is over when the player matches all 8 pairs of cards, or after 60 seconds.

### Thank you for visiting Gwent Memory Game!

## UXD – User Experience Design

A user experience designer, Jesse James Garrett, introduced five UX design elements in his book The Elements of User Experience.
In the book, he explains the steps of user experience projects and what UX designers should consider at each stage.
This is where most of my planning process steps came from.

The 5 planes of UX are as below:

- The Strategy Plane
- The Scope Plane
- The Structure Plane
- The Skeleton Plane
- The Surface Plane

## The Strategy Plane

### Creator Goals

- As a creator, I want webpage to be user-friendly.
- As a creator, I want webpage to be fully responsive.
- As a creator, I want webpage to be functional.
- As a creator, I want webpage to be easy to navigate.
- As a creator, I want the purpose of my webpage to be clear.
- As a creator, I want users to like the game and be willing to play it again or / and share it with friends.

### User stories

- As a user, I want the webpage to be easy to navigate.
- As a user, I want the purpose of the website to be explained straight away.
- As a user, I want the webpage to work on my mobile too.
- As a user, I want the game to work properly with no issues.

**User stories are based on online research and my relatives experiance.**

## The Scope Plane

The planning process helped me decide which features could be implemented within a given deadline and which ones needed to be postponed. I decided to implement the ones covering my user stories first and add the remaining features later.


#### Features implemented upon webpage release:

- Home page with an introduction, game features, and game rules.
- Functional navigation bar, allowing users to navigate to different pages.
- Game page, including the actual game.
- Leaderboard page to save and store best scores.
- "Home" button on every page to ensure users can navigate easily.
- Footer with social media links.

#### Fatures planned to implement later:

- Option for a user to create an account so he can keep his best scores and access it on a different browser or device.
- Option for a user to share his score on social media.
- Multiplayer mode, so players can compete with each other online. 


*Above decisions have been made based on below table.*

| Feature       | Feasibility   | Importance    |
| ------------- |:-------------:|:-------------:|
|Navigation     | 5             | 5             |
|Introduction   | 5             | 5             |
|Game Features  | 5             | 5             |
|Instructions   | 5             | 5             |
|Game page      | 5             | 5             |
|Social media   | 5             | 4             |
|Multiplayer mod| 3             | 3             |
|Score share    | 3             | 3             |
|Leadearboard   | 5             | 4             |
|Create account | 3             | 3             |

## The Structure Plane

### Colors

#FAFAFA :

- Text
- Navigation bar
- Icons (social links)
- Horizontal break lines (hr HTML tags)

![#FAFAFA Hex Color](https://github.com/PatrycjaBlaszkowska/gwent-memory-game/blob/main/docs/images/%23FAFAFA.PNG)

#000 :

- Background color

![#000 Hex Color](https://github.com/PatrycjaBlaszkowska/gwent-memory-game/blob/main/docs/images/%23000.PNG)

#E2E6EA : 

- Buttons background color

![#E2E6EA HEX COLOR](https://github.com/PatrycjaBlaszkowska/gwent-memory-game/blob/main/docs/images/%23E2E6EA.PNG)

#DAE0E5 :

- Buttons border color

![#DAE0E5 HEX COLOR](https://github.com/PatrycjaBlaszkowska/gwent-memory-game/blob/main/docs/images/%23DAE0E5.PNG)

### Fonts

#### As my main font, I used custom "The Witcher Font" to improve the user experience and make him feel more like in the "The Witcher 3" video game. 


*More about this font in credits section*

#### Roboto :

I used "Roboto" Google Font as a callback font in case my custom one wouldn't load. I decided to use it because it's one of the most popular and user-friendly fonts. 

### Images

Images for this project has been downloaded from:

- [Gwent One](https://gwent.one/)
- [Creative Uncut](https://www.creativeuncut.com/)
- [Wallpaper Cave](https://wallpapercave.com/)

##### *More information in credits section.*


## The Skeleton Plane

I made some significant changes to my project. I realised that I missed some important features. In my opinion, it was causing a poor user experience, so I decided to implement some changes.

[Home page wireframes](./docs/wireframes/home.pdf)

- I decided to change a original layout for a features section on desktop. Instead of placing all of them in one column I decided to split them and floated them to right and left. It helped me to create a visual impression of "two columns" and improve user experiance.

- I decided to add a button linked to a leaderboard so user can access it before playing a actuall game.

[Game page wireframes](./docs/wireframes/game.pdf)

- I decided to add a button linked to a home page so user can navigate easily.
- I decided to add a button linked to a leaderboard so user can access it while playing a game without a need of finishing it.

[Leaderboard page wireframes](./docs/wireframes/leadearboard.pdf)

- I decided to change a heading from "Leaderboard" to "Best Scores".
- I decided to add a button linked to a home page so user can navigate easily.

#### ADDITIONAL PAGE 

After I finished my planning process, I did some additional research and decided to change "Game Over Modal" to the full HTML Gave Over page. This has been added later in the development process. Therefore, I didn't originally create a wireframe for this page.

![Game Over screen](./docs/wireframes/game-over-screen.PNG)