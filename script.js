function login() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    
    if (login != '' && password != ''){
        alert(`Seu login: ${login}\nSua senha: ${password}`);
    }
    
}
