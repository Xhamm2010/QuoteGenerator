let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:`"The best way to find yourself is to lose yourself."`,
        person:`Mahatma Gandhi`
    },
    {
        quote:`"To live a happy life, tie it to a goal and not people."`,
        person:`Albert Einstein`
    },
    {
        quote:`"At his best, man is the noblest of all animals: separatd from law and justice, he is the worse."`,
        person:`Aristotle`
    },
    {
        quote:`"Your lif is limited, so don't wast it living someone else life."`,
        person:`Steve Job`
    },
    {
        quote:`"Tell me and I forget. Teach me and I remember. Involv me and I learn."`,
        person:`Benjamin Franklin`
    },
    {
        quote:`"The best way to find yourself is to lose yourself."`,
        person:`Mahatma Gandhi`
    },
    {
        quote:`"If you look at what you have in life, you will alway have more but if you look
        look at what you don't have in life, you'll never have enough,."`,
        person:`Oprah Winfey`
    },
    {
        quote:`"It dosn't matter how slow you go, as long as you don't stop."`,
        person:`Confucius`
    },
    {
        quote:`"Our life begins to end the day we become silent on the things that matters."`,
        person:`Martin Luther Kings, Jr`
    },
    {
        quote:`"The journey of a thousand miles begins with a step ."`,
        person:`Lao Tzu`
    }
];


btn.addEventListener('click', function(){
    //Selects all the element in my array
    let random = Math.floor(Math.random() * quotes.length);

    // Updating my span where the quote reside
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
   
});