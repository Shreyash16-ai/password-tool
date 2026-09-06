// Grab all the elements we'll need to read from or update
const passwordInput = document.getElementById("passwordInput");
const strengthResult = document.getElementById("strengthResult");

const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");

const includeUppercase = document.getElementById("includeUppercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const generateBtn = document.getElementById("generateBtn");
const generatedPassword = document.getElementById("generatedPassword");
const copyBtn = document.getElementById("copyBtn");

// Runs every time the user types in the password box
passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    const result = checkStrength(value);
    strengthResult.textContent = result.label;
    strengthResult.style.color = result.color;
});

function checkStrength(password) {
    if (password.length === 0) {
        return { label: "", color: "transparent" };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (password.length >= 12) score++;

    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
        return { label: "Weak ❌", color: "#f87171" };
    } else if (score <= 4) {
        return { label: "Medium ⚠️", color: "#facc15" };
    } else {
        return { label: "Strong ✅", color: "#4ade80" };
    }
}

// Update the visible number next to the slider as it moves
lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

// Runs when the "Generate Password" button is clicked
generateBtn.addEventListener("click", () => {
    const length = parseInt(lengthSlider.value);

    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}";

    let characterPool = lower;
    if (includeUppercase.checked) characterPool += upper;
    if (includeNumbers.checked) characterPool += numbers;
    if (includeSymbols.checked) characterPool += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    generatedPassword.textContent = password;

    // Also show its strength immediately
    const result = checkStrength(password);
    strengthResult.textContent = result.label;
    strengthResult.style.color = result.color;
});

// Runs when the "Copy" button is clicked
copyBtn.addEventListener("click", () => {
    const text = generatedPassword.textContent;
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 1500);
    });
});