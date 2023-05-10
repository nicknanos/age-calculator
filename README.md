# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./assets/images/screenshot.png)


### Links

- Solution URL: [Code](https://github.com/nicknanos/age-calculator)
- Live Site URL: [Demo](https://nicknanos.github.io/age-calculator)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
Learned how to use the filter css property.
ex.:

```css
.button-container button:hover {
    filter: brightness(80%);
}
```

### Useful resources

- [Date Calculator](https://www.timeanddate.com/date/duration.html) - Used this to test my app


## Author

- Twitter - [@NickNanos5](https://twitter.com/NickNanos5)
- LinkedIn - [Nick Nanos](https://www.linkedin.com/in/nicknanos7/)
- Frontend Mentor - [@nicknanos](https://www.frontendmentor.io/profile/nicknanos)
