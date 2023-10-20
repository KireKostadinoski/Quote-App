const quote = document.getElementById('quote');
const author = document.getElementById('author');
const api_url = "https://api.quotable.io/random";

async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;

}

function X(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "-- "  + author.innerHTML +" --",  "Tweet Window", "width=600, height=300");
}

function facebook(){
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + quote.innerHTML + "-- " + author.innerHTML + " --",)
}


getQuote(api_url);