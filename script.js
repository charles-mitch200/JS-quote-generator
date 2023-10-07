const quoteElem = document.querySelector(".js-quote");
const authorElem = document.querySelector(".js-author");
const btnElem = document.querySelector(".js-btn");

const getQuote = async () => {
  try {
    quoteElem.innerHTML = "Updating...";
    authorElem.innerText = "Updating...";
    btnElem.innerText = "Loading...";
    btnElem.disabled = true;
    const apiURL = "https://api.quotable.io/random";
    const response = await fetch(apiURL);
    const result = await response.json();
    quoteElem.innerText = result.content;
    authorElem.innerText = `~ ${result.author}`;
    btnElem.innerText = "Get Quote";
    btnElem.disabled = false;
  } catch (error) {
    quoteElem.innerText = `An error occured, try again later!`;
    authorElem.innerText = `Not found!`;
    btnElem.disabled = false;
  }
};

// Display a random quote when the user first loads the page
getQuote();

// When you click the button, trigger a function that fethces data from the API
btnElem.addEventListener("click", getQuote);
