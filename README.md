# Frontend Mentor - Multi-step form solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

## Mobile
![Screen Shot 2023-02-28 at 22 49 04](https://user-images.githubusercontent.com/25332391/222041372-e8c95f75-6aac-48a3-adfc-9a94bbc4c769.png)

## Desktop
![Screen Shot 2023-02-28 at 22 48 49](https://user-images.githubusercontent.com/25332391/222041397-a4c73e63-9de9-4e8f-8c16-b89bb96a569b.png)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- SASS(SCSS)
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS
- Jest
- MVC Architectural pattern

### What I learned

This is the first time I've applied some structure regarding SCSS files and I also learned about the MVC archetictural pattern with regards to JS code. I learned about some accessibility attributes such as role='listbox' which makes it so it lets user know that there is a list of items to select that are not <select> elements that contain images. In conjuction with the role ='option' attribute which tells users which elements are options. I also learned about some aria attributes like aria-label, aria-selected, etc. These help visually impaired users understand what is happening via screenreaders informing them. 

### Useful resources

- [webdesignerdepot.com](https://www.webdesignerdepot.com/2020/12/2-smartest-ways-to-structure-sass/) - This helped me learn how to better structure my SCSS files/folders.
- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes) - This helped me learn more specific accessibility attributes to make non-semantic elements more accessible for screenreaders/visually impaired users
