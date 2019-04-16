// Vanilla JS dom ready
function ready(fn) {
    if (document.readyState === "complete"  || document.readyState !== "loading"){
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


ready(function(){

    $.getJSON('config.json', function(config){

        let backgroundEl = document.getElementById("background");
        let serverTitleEl = document.getElementById("serverTitle");
        let textColourEl = document.getElementsByClassName("useTextColour");

        // if both are true, background image takes priority
        if (config.useBackgroundColour === "true" && config.useBackgroundImage === "true") {
            backgroundEl.style.cssText += "background-image: url('" + config.backgroundImagePath + "');";
        }

        if (config.useBackgroundColour === "true") {
            backgroundEl.style.cssText += "background-color: rgb(" + config.backgroundColour + ") !important;";
        }

        if (config.useBackgroundImage === "true") {
            backgroundEl.style.cssText += "background-image: url('" + config.backgroundImagePath + "');";
        }

        if (config.useTextColour === "true") {
            [].forEach.call(textColourEl, function(element){
                element.style.color = "rgb(" + config.textColour + ")";
            });

            serverTitleEl.style.color = "rgb(" + config.textColour + ")";
        } else {
            [].forEach.call(textColourEl, function(element){
                element.style.color = "rgb(255,255,255)";
            });
            serverTitleEl.style.color = "rgb(255,255,255)";
        }

        if (config.useBoldText === "true") {
            [].forEach.call(textColourEl, function(element){
                element.style.fontWeight = 400;
            });

            serverTitleEl.style.fontWeight = 400;
        }

        // set server title
        serverTitleEl.innerText = config.serverTitle;

        // animate server title
        if (serverTitleEl.classList){
            serverTitleEl.classList.add("pulse");
            serverTitleEl.classList.add("animated");
            serverTitleEl.classList.add("infinite");
        } else {
            serverTitleEl.className  += "pulse animated infinite";
        }

        for (let i = 1; i < 8; i++) {
            document.getElementById("rule"+i).textContent = config.rules[i-1];
        }

        for (let i = 1; i < 8; i++) {
            document.getElementById("servers"+i).textContent = config.servers[i-1];
        }

        for (let i = 1; i < 8; i++) {
            document.getElementById("content" + i).textContent = config.contents[i-1];
        }
    })
});