export default function Login(){
    return`<section class="entrance" >
            <div class="form-box" id="log-in">
                <h2>Login</h2>
                <form action="">
                    
                    <input type="text" name="name" class="names" placeholder="Email" id="email-logIN" >
                    
                    <input type="text" name="password" class="password" placeholder="Password" id="password-logIN" >
                    <button type="submit" class="submitButton" >Login</button>
                    <p class="fillFields"></p>
                    <p>Don't you have an account? <a href="/register" data-link>Register</a></p>
                </form>
            </div>
        </section>`
};

