const sendBtn = document.getElementById("send_message");
const url = "https://poerfolio-api.herokuapp.com/api/contacts"


const sendHttpRequest = (method, url,data) =>{
    return fetch(url).then(response =>{
        return response.json();
    })
    .then(responseData =>{
        console.log(responseData)
    })
}

const getData = () => {
    fetch(url).then(response =>{
        return response.json();
    })
    .then(responseData =>{
        console.log(responseData)
    })
}


const sendData = () => {
    fetch(url).then(response =>{
        return response.json();
    })
    .then(responseData =>{
        console.log(responseData)
    })
}

sendBtn.addEventListener('click', getData)