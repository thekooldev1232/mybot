

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
    'will get to you soon :)',
    'arey howlee ruk naa ;)',
    'kya re khali peeli disturb karra ;)',
    'wasup mama all good? how come you have pinged me??',
    'asshole - finally pinged me huh'
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