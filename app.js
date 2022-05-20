import { checkAuth, redirectIfLoggedIn, signInUser, signupUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');


const signUpForm = document.getElementById('sign-up');


redirectIfLoggedIn();

signUpForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signupUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('./');
    }   
    
});


signInForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        location.replace('./');
        
    } 
    checkAuth();
    
});
