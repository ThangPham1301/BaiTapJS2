let hideButton = document.getElementById('Hide__Password');
function togglePassword1() {
    let passwordInput = document.getElementById('password');
    if (passwordInput.type === 'text') {
        passwordInput.type = 'password';
}}
hideButton.onclick = togglePassword1; 

let showButton = document.getElementById('Show__Password');
function togglePassword2() {
    let passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
}}
showButton.onclick = togglePassword2; 