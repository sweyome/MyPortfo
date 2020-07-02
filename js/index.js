const sendBtn = document.getElementById("send_message");
const emailValue = document.getElementById('email');

var messageValue = document.getElementById('message').value;
var NameValue = document.getElementById('name').value;
var emailValue = document.getElementById('email').value;
   
    




const url = "https://poerfolio-api.herokuapp.com/api/contacts"


const sendHttpRequest = (method, url,data) =>{
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'content-Type': 'application/json' } :{}
    }).then(response =>{
        if (response.status >= 400){ // ! response err
            return response.json().then(errResponseData =>{
            const error = new Error('something went wrong');
            error.data = errResponseData
            throw error
        })
            
        }
        return response.json();
    });
};

// const getData = () => {
//     sendHttpRequest('GET', url)
//     .then(responseData =>{
//         console.log(responseData)
//     })
// }


const sendData = () => {
    sendHttpRequest('POST', url, {
    "name": NameValue,
    "email": emailValue,
    "message": messageValue
    }).then(responseData =>{
        console.log(responseData);
    })
    .catch(err =>{
        console.log(err)
    })
}


sendBtn.addEventListener('click', sendData)


// get inputs
