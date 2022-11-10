const quote = document.querySelector('.quote');
const quoteBody = document.querySelector('.card-body');
const url = 'https://api.kanye.rest/';

async function getData(){
    try {
        const quoteResult = await fetch(url, {
            method: 'GET',
        });

        const quoteData = await quoteResult.json();
        quote.innerText = `"${quoteData.quote}"`;
    } catch (error) {
        quoteBody.innerHTML = `<p>${error.message}</p>`
    }
};

getData();