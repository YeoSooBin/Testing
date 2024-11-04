function checkAge() {
    const ageInput = document.getElementById("ageInput");
    const age = ageInput.value;
    const resultElement = document.getElementById("result");

    resultElement.textContent = "Your age is " + age;
}