const passwordInput = document.getElementById('password');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const form = document.getElementById('regForm');
passwordInput.addEventListener('input', () => {
    let val = passwordInput.value;
    let score = 0;

    if (val.length >= 6) score++;
    if (/[0-9]/.test(val) && /[a-zA-Z]/.test(val)) score++; 
    if (/[^A-Za-z0-9]/.test(val)) score++; 
    if (val.length === 0) {
        updateUI(0, "Chưa nhập", "pink");
    } else if (score <= 1) {
        updateUI(33, "Yếu", "red");
    } else if (score === 2) {
        updateUI(66, "Trung bình", "orange");
    } else {
        updateUI(100, "Mạnh", "green");
    }
});

function updateUI(width, text, color) {
    strengthBar.style.width = width + "%";
    strengthBar.style.backgroundColor = color;
    strengthText.innerText = "Độ mạnh: " + text;
    strengthText.style.color = color;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const passVal = passwordInput.value;
    if (!(/[a-zA-Z]/.test(passVal) && /[0-9]/.test(passVal))) {
        document.getElementById('passError').style.display = 'block';
        valid = false;
    }
    const fileInput = document.getElementById('profilePic');
    const fileName = fileInput.value;
    if (!fileName.match(/\.(jpg|jpeg|png)$/i)) {
        document.getElementById('fileError').style.display = 'block';
        valid = false;
    }

    if (valid) alert("Đăng ký thành công!");
});