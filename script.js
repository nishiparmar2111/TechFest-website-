// CURSOR
document.addEventListener("mousemove", function(e) {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
    }
});

// EVENT POPUP
function showEvent(name) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popupText").innerText =
        name + " details coming soon!";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// CONTACT FORM
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Message sent!");
    return true;
}

// REGISTER FORM
function openForm() {
    document.getElementById("registerForm").style.display = "block";
}

function closeForm() {
    document.getElementById("registerForm").style.display = "none";
}

function validateRegister() {
    let name = document.getElementById("rname").value;
    let email = document.getElementById("remail").value;
    let phone = document.getElementById("rphone").value;

    if (name == "" || email == "" || phone == "") {
        alert("Please fill all fields");
        return false;
    }

    if (phone.length != 10) {
        alert("Enter valid phone number");
        return false;
    }

    alert("Registration Successful!");
    return true;
}