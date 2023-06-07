let state = {
    target: null
}

document.getElementById("area").addEventListener("mousedown", event => {
    if (event.target && event.target.classList.contains("stone") && event.target.getAttribute("value") == "on") {
        event.target.style.cursor = "none";
        state.target = event.target;
        state.offsetX = event.offsetX;
        state.offsetY = event.offsetY;
    }
});

document.getElementById("area").addEventListener("mouseup", () => {
    event.target.style.cursor = "default";
    state.target = null;
});

document.getElementById("area").addEventListener("mousemove", e => {
    if (state.target) {
        state.target.style.left = (e.pageX - state.offsetX) + "px";
        state.target.style.top = (e.pageY - state.offsetY) + "px";
    }
});

document.getElementById("area").addEventListener("click", event => {
    if (event.target && event.target.classList.contains("stone")) {
        if (event.target.getAttribute("value") == "on")
            event.target.setAttribute("value", "off");
        else
            event.target.setAttribute("value", "on");
    }
});
