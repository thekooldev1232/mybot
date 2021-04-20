

const venom = require('venom-bot');
//const random = require('random-words');
const inspirational = require('inspirational-quotes');
const date = new Date();
const hour = date.getHours();


venom.create().then((client) => {
    //start the client here to use
    start(client);
}).catch((err) => {
    console.log(err);
})

let messageArrray = [
    'will get to you soon :)','done','well','calm'
]

const start = (client) => {

    client.onMessage((message) => {
        if (message && !message.isGroupMsg && (hour > 5 && hour < 13)) {
            console.log(message);
            client.sendText(message.from, inspirational.getRandomQuote()).then((result) => {
                //    console.log(result);
            }).catch((err) => {
                console.log(err);
            })
        }
    })
}
