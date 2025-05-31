var otp;
const sendotp = () => {
    alert("OTP sent successfully");
    // GetGenerate a 6-digit random OTP
    otp = Math.floor(100000 + Math.random() * 900000);
    console.log("Generated OTP:", otp);

    const otpMessage = document.getElementById("he");
    otpMessage.textContent =  otp;
};
const verifyotp = () => {
    const email = document.getElementById("email").value.trim();
    const generatedOtp = document.getElementById("generated").value.trim();
    if (generatedOtp === otp.toString() && email ==="student54@email.com") {
        window.location.href = "student54.html";
    }

    else {
        alert("Invalid OTP");
    }
};
