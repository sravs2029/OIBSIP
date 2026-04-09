function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (temp === "") {
        result.innerText = "Please enter a value";
        return;
    }

    temp = Number(temp);

    if (unit === "c") {
        let fahrenheit = (temp * 9/5) + 32;
        result.innerText = "Result: " + fahrenheit.toFixed(2) + " °F";
    } else {
        let celsius = (temp - 32) * 5/9;
        result.innerText = "Result: " + celsius.toFixed(2) + " °C";
    }
}