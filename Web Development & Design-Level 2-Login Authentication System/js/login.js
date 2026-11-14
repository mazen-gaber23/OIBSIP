let Lemail = document.getElementById('Lemail');
let Lpassword = document.getElementById('Lpassword');
let logIn = document.querySelector('.log-in');
let sub = document.querySelector('.sub2');

let dataContainer = JSON.parse(localStorage.getItem('Data')) || [];
let warning = '';

sub.addEventListener('submit', function (e) {
    e.preventDefault();
});

function isEmpty() {
    if (Lemail.value == '' || Lpassword.value == '') {
        warning = `<p class="text-danger" role="alert">All inputs are required</p>`;
        document.getElementById('demo2').innerHTML = warning;
        return false;
    }
    return true;
}

logIn.addEventListener('click', async function (e) {
    e.preventDefault();

    if (isEmpty()) {
        const encoder = new TextEncoder();
        const data = encoder.encode(Lpassword.value);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashedInputPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        let found = false;
        for (let i = 0; i < dataContainer.length; i++) {
            if (dataContainer[i].email == Lemail.value && dataContainer[i].pass == hashedInputPassword) {
                localStorage.setItem('userName', dataContainer[i].name);
                found = true;
                window.location.href = 'welcome.html';
                break;
            }
        }

        if (!found) {
            warning = `<p class="text-danger" role="alert">Incorrect email or password</p>`;
            document.getElementById('demo2').innerHTML = warning;
        }
    }
});