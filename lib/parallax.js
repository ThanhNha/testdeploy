"use strict";

function parallax(selector) {
    const layers = document.querySelectorAll(selector);
    const top = window.pageYOffset;

    for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        const speed = layer.getAttribute("data-speed");
        const yPos = -((top * speed) / 100);
        layer.setAttribute(
            "style",
            "transform: translate3d(0px, " + yPos + "px, 0px)"
        );
    }
}
module.exports = { parallax };
