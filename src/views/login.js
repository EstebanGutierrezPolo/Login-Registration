export default function Login(){
    return`<section class="entrance" >
            <div class="form-box" id="log-in">
                <h2>Login</h2>
                <form action="" id="form">
                    
                    <input type="email" name="name" class="names" placeholder="Email" class="inputs" id="email-logIN" >
                    
                    <input type="text" name="password" id="password" placeholder="Password"
                    class="inputs">
                    <button type="submit" id="submitButton-logIN" >Login</button>
                    <p id="fillFields"></p>
                    <p>Don't you have an account? <a href="/register" data-link>Register</a></p>
                </form>
            </div>
        </section>`
};

addEventListener("DOMContentLoaded", (event) => {

    let passwordId = document.getElementById('password');

    let emailId = document.getElementById('email-logIN');

    const form = document.getElementById('form');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        let fillFields = document.getElementById("fillFields");
        const inputs = document.querySelectorAll('.inputs');
        
    let fullInfo = false
    inputs.forEach(input => {
        if(!input.value){
            fullInfo = true
        }
    });
        if(fullInfo){
            fillFields.innerText = "Fill out the fields above...";
            return
        }    


        let password = passwordId.value
        let email = emailId.value
        console.log(password)
        console.log(email)
    // let name = nameId.value
        fetch("http://localhost:3000/products",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': 'Esteban',
                'email': email,
                'password': password
            })
        }
        )
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch data friend")
            } return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error(error))
        e.preventDefault();
    })
})







// async function fetchData(){
//     try{
//         const response = await fetch("http://localhost:3000/products");

//         if(!response.ok){
//             throw new Error("Could not fetch frienddd")
//         }
//         const data = await response.json();
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// fetchData();