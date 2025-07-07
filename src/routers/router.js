import Login from '../views/login.js';
import Register from '../views/register.js';
import App from '../views/app.js';
import NotFound from '../views/notFound.js'

const routes = {
    '/': Login,
    '/register': Register,
    '/app': App,
}

export function router() {
  let path = window.location.pathname;
  
  if (path.endsWith('index.html')) {
    path = "/" 
    console.log("entra")
    
    history.replaceState(null, 'login', '/')
  } 

  const view = routes[path] || NotFound;

  // Insertamos el HTML retornado por la vista dentro del contenedor principal (div con id="app").
  document.getElementById('container').innerHTML = view();
}