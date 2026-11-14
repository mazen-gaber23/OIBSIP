let Sname = document.getElementById('Sname');
let Semail = document.getElementById('Semail');
let Spassword = document.getElementById('Spassword');
let signUp = document.querySelector('.sign-up');
let sub = document.querySelector('.sub');

let dataContainer = JSON.parse(localStorage.getItem('Data')) || [];
let warning = '';

sub.addEventListener('submit', function (e) {
    e.preventDefault();
});

signUp.addEventListener('click', function (e) {
    e.preventDefault();
    if (isEmpty() && checkPasswordStrength() && !isExist()) {
        warning = ``;
        document.getElementById('demo1').innerHTML = warning;
        hashAndAddData();
    }
});

function isEmpty() {
    if (Semail.value == '' || Sname.value == '' || Spassword.value == '') {
        warning = `<p class="text-danger" role="alert">All inputs are required</p>`;
        document.getElementById('demo1').innerHTML = warning;
        return false;
    }
    return true;
}

function checkPasswordStrength() {
    let pass = Spassword.value;
    let passwordRegex = /^(?=.*\d).{8,}$/;

    if (!passwordRegex.test(pass)) {
        warning = `<p class="text-danger" role="alert">Password must be at least 8 characters and contain at least 1 number</p>`;
        document.getElementById('demo1').innerHTML = warning;
        return false;
    }
    return true;
}

function isExist() {
    for (let i = 0; i < dataContainer.length; i++) {
        if (dataContainer[i].email == Semail.value) {
            warning = `<p class="text-danger" role="alert">This email already exists</p>`;
            document.getElementById('demo1').innerHTML = warning;
            return true;
        }
    }
    return false;
}

async function hashAndAddData() {
    const encoder = new TextEncoder();
    const data = encoder.encode(Spassword.value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    let userObj = {
        name: Sname.value,
        email: Semail.value,
        pass: hashedPassword
    };

    dataContainer.push(userObj);
    localStorage.setItem('Data', JSON.stringify(dataContainer));
    clearInputs();
    window.location.href = 'index.html';
}

function clearInputs() {
    Semail.value = null;
    Sname.value = null;
    Spassword.value = null;
}