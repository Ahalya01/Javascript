let input = document.getElementById("input");

function colorChange(event) {
    if (event.key === "Enter") {
        let color = input.value.trim();
        if (isColor(color)) {
            document.body.style.backgroundColor = color;
        } else {
            alert("Please enter a valid color.");
        }
    }
}
function isColor(color) {
    const div = document.createElement("div");
    div.style.color = color;
    return div.style.color !== "";
}
