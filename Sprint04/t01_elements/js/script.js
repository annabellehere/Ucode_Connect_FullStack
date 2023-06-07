const outputDataChars = document.getElementById("characters").children;

for (let i = 0; i < outputDataChars.length; i++) {
    let outputData = outputDataChars[i].getAttribute("data-element");
    let outputDataClass = outputDataChars[i].getAttribute("class");

    if (outputDataClass !== "good" && outputDataClass !== "evil" || !outputDataClass) {
        outputDataChars[i].className = "unknown";
    }
    if (!outputData) {
        outputDataChars[i].setAttribute("data-element", "none");
    }

    const elem = document.createElement("br");
    outputDataChars[i].appendChild(elem);

    if (outputDataChars[i].getAttribute("data-element") === "none") {
        const circle = createCircleElement(outputData);
        outputDataChars[i].appendChild(circle);
        const line = document.createElement("div");
        line.className = "line";
        circle.appendChild(line);
    } else {
        outputData = outputDataChars[i].getAttribute("data-element").split(' ');
        for (let j = 0; j < outputData.length; j++) {
            const circle = createCircleElement(outputData[j]);
            outputDataChars[i].appendChild(circle);
        }
    }
}

function createCircleElement(className) {
    const circle = document.createElement("div");
    circle.className = `elem ${className}`;
    return circle;
}
