const btn = document.getElementById("sMessage");


const nameValue = () =>{
    const name = document.getElementById('name').value;
    return name
}
const emailValue = () =>{
    const email = document.getElementById('email').value;
    return email
}
const messageValue = () =>{
    const message = document.getElementById('message').value;
    return message
}


const sendData = () => {
    axios.post('https://poerfolio-api.herokuapp.com/api/contacts', {
        name: nameValue(),
        email: emailValue(),
        message: messageValue() 
    }).then(res => {
        console.log(res)
    })
}

btn.addEventListener('click', sendData);
