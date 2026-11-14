let userName = localStorage.getItem('userName');

if (userName != null) {
    let welcome = `<h2 class="text-info">Welcome ${userName}</h2>`;
    document.getElementById('demo3').innerHTML = welcome;
} else {
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('userName');
}
let logOut = document.querySelector('.logout');
logOut.addEventListener('click', function () {
    logout();
});