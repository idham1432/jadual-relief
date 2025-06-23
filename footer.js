const penguinQuotes = [
  "Life’s not always black and white… but I am, so I’m doing just fine.",
  "Waddle through the chaos. Slide when you must.",
  "If life gives you ice… belly slide like you mean it.",
  "I may look like I'm wearing a tux, but I'm just trying to survive lunch without becoming it.",
  "They say the early bird gets the worm. Good for them. I prefer fish and a nap.",
  "Humans stress about everything. Me? I just flap, waddle, and scream into the snow.",
  "I don’t fly because I’m grounded… emotionally and literally.",
  "Chill is not just the weather—it’s a way of life.",
  "Huddle with your crew. Life’s warmer that way.",
  "Some days you're the penguin. Some days you're the slippery rock."
];

const quoteDiv = document.getElementById("quoteDisplay");
let currentQuote = "";
let charIndex = 0;

function getRandomQuote() {
  return penguinQuotes[Math.floor(Math.random() * penguinQuotes.length)];
}

function typeQuote() {
  if (charIndex < currentQuote.length) {
    quoteDiv.textContent += currentQuote.charAt(charIndex);
    charIndex++;
    setTimeout(typeQuote, 50);
  } else {
    setTimeout(() => {
      quoteDiv.textContent = "";
      charIndex = 0;
      currentQuote = getRandomQuote();
      typeQuote();
    }, 3000);
  }
}

// Start with a random quote
currentQuote = getRandomQuote();
typeQuote();

document.addEventListener("DOMContentLoaded", () => {
  const penguin = document.getElementById("penguin");
  if (penguin) {
    penguin.addEventListener("click", (event) => {
      // Confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x:0, y: 0.9 },
      });
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { x:1, y: 0.9 },
      });
    });
  }
});
