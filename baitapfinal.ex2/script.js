
function changeColor() {
    const table = document.getElementById("priceTable");
    table.style.color = "red";
}

const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const regForm = document.getElementById('regForm');

passwordInput.addEventListener('input', () => {
    let val = passwordInput.value;
    let score = 0;

    if (val.length >= 6) score++;
    if (/[0-9]/.test(val) && /[a-zA-Z]/.test(val)) score++; 
    if (/[^A-Za-z0-9]/.test(val)) score++; 

    if (val.length === 0) {
        updateMeter(0, "Chưa nhập", "#eee");
    } else if (score <= 1) {
        updateMeter(33, "Yếu", "red");
    } else if (score === 2) {
        updateMeter(66, "Trung bình", "orange");
    } else {
        updateMeter(100, "Mạnh", "green");
    }
});

function updateMeter(width, text, color) {
    strengthBar.style.width = width + "%";
    strengthBar.style.backgroundColor = color;
    strengthText.innerText = "Độ mạnh: " + text;
    strengthText.style.color = color;
}

regForm.addEventListener('submit', (e) => {
    let isValid = true;
    const passVal = passwordInput.value;
    const hasLetter = /[a-zA-Z]/.test(passVal);
    const hasNumber = /[0-9]/.test(passVal);
    
    if (!hasLetter || !hasNumber) {
        document.getElementById('passError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('passError').style.display = 'none';
    }
    const fileInput = document.getElementById('profilePic');
    const fileName = fileInput.value;
    if (!fileName.match(/\.(jpg|jpeg|png)$/i)) {
        document.getElementById('fileError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('fileError').style.display = 'none';
    }

    if (!isValid) {
        e.preventDefault(); 
    } else {
        alert("Đăng ký thành công!");
    }
});