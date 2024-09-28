document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Usuario y contraseña de prueba
    const testUser = 'usuarioPrueba';
    const testPassword = 'contraseñaPrueba';

    if (username === testUser && password === testPassword) {
     
        window.location.href = 'menu.html'; 
    } else {
       alert('Usuario o contraseña incorrectos');
    }
});
