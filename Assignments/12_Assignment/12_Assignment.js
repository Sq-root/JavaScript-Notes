const btn = document.querySelector("#pribtn");
const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    authorName: "Steve Jobs",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    authorName: "Martin Luther King Jr.",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    authorName: "Ralph Waldo Emerson",
  },
  {
    quote: "It is never too late to be what you might have been.",
    authorName: "George Eliot",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    authorName: "Winston Churchill",
  },
  {
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    authorName: "Ralph Waldo Emerson",
  },
  {
    quote: "Believe you can and you're halfway there.",
    authorName: "Theodore Roosevelt",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    authorName: "Tony Robbins",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    authorName: "Confucius",
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    authorName: "Wayne Gretzky",
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    authorName: "Franklin D. Roosevelt",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    authorName: "Thomas Edison",
  },
  {
    quote:
      "Happiness is not something ready-made. It comes from your own actions.",
    authorName: "Dalai Lama",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    authorName: "Ralph Waldo Emerson",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    authorName: "Charles R. Swindoll",
  },
];

btn.addEventListener("click", function () {
  getRandonQuote();
});

function getRandonQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById("infoTxt").innerHTML = randomQuote.quote;
  document.getElementById("boldTxt").innerHTML = randomQuote.authorName;
}
