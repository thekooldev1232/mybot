

const venom = require('venom-bot');

venom.create().then((client) => {
    //start the client here to use
    start(client);
}).catch((err) => {
    console.log(err);
})


const start = (client) => {

    client.onMessage((message) => {
        if (message && !message.isGroupMsg) {
            console.log(message);
            client.sendText(message.from, `$message.body} - will get to you soon :)` ).then((result) => {
            //    console.log(result);
            }).catch((err) => {
                console.log(err);
            })
        }
    })
}