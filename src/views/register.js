export default function Register(){
    
    return`<section class="entrance">
            <div class="form-box unActive" id="sign-in">
                <h2>Register</h2>
                <form action="">
                    
                    <input type="text" name="name" class="names" placeholder="Name" id="name-singIN">
                    
                    <input type="email" name="email" class="email" placeholder="Email" id="email-singIN">
                    
                    <input type="text" name="password" class="password" placeholder="Password" id="password-singIN">
                    <button type="submit" class="submitButton">Register</button>
                    <p class="fillFields"></p>
                    <p>Already have an account? <a class="changer" href="/" data-link>Login</a></p>
                </form>
            </div>
        </section>`
};