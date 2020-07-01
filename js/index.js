const sendBtn = document.getElementById("send_message");
const url = "https://poerfolio-api.herokuapp.com/api/contacts"


const sendHttpRequest = (method, url,data) =>{
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'content-Type': 'application/json' } :{}
    }).then(response =>{
        return response.json();
    });
};

const getData = () => {
    sendHttpRequest('GETz', url)
    .then(responseData =>{
        console.log(responseData)
    })
}


const sendData = () => {
    sendHttpRequest('POST', url, {
    "name": "dfeffff",
    "email": "rowValue21@gmail.com",
    "message": "blablabalkabaka"
    }).then(responseData =>{
        console.log(responseData);
    })
}

sendBtn.addEventListener('click', sendData)