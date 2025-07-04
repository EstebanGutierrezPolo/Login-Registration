import { router } from './routers/router.js';

document.addEventListener('click', (e) => {
    if(e.target.matches('[data-link]')){
        e.preventDefault();
        history.pushState(null, null, e.target.href);
        router();
    }
});

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    router();
});

const submitLogin = document.getElementById('submitButton-logIN');
        const inputs = document.getElementsByTagName('input');
        let fillFields = document.querySelectorAll(".fillFields");
        submitLogin.addEventListener('click', () =>{
               if(!inputs.value){
                
                fillFields.forEach(element => {
                    element.innerText = "Fill out the fields above..."
                })
            } else{
                console.log("bye")
            }

    })