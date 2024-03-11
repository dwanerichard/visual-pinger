let tg = {
    token: "YOUR_TOKEN", 
    chat_id: "YOUR_CHAT_ID" 
}

function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

    const obj = {
        chat_id: tg.chat_id, // Telegram chat id
        text: text // The text to send
    };
    const xht = new XMLHttpRequest();
    xht.open("POST", url, true);
    xht.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    xht.send(JSON.stringify(obj));
}

function inform(){
    var temp = document.getElementsByClassName("sc-lknQiW ewfiMM");
    //console.log(temp);
    if(temp.length==0){
        sendMessage("Hey Bharath You got a Question");
        console.log("Sent the message");
    }
}

setTimeout(inform,30000);