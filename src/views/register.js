export default function Register(){
    
    return`<section class="entrance">
            <div class="form-box unActive" id="sign-in">
                <h2>Register</h2>
                <form action="">
                    
                    <input type="text" name="name" class="names" placeholder="Name" id="name" required>
                    
                    <input type="email" name="name" class="names" placeholder="Email" class="inputs" id="email" required>
                    
                    <input type="text" name="password" id="password" placeholder="Password"
                    class="inputs" required>
                    <button type="submit" id="submitButton-logIN" >Login</button>
                    <p id="fillFields"></p>
                </form>
            </div>
        </section>`
};

addEventListener("DOMContentLoaded", (event) => {

    let passwordId = document.getElementById('password');

    let emailId = document.getElementById('email');

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