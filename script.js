function updateClock() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString();

    const p = document.querySelector("p");
p.textContent = currentTime;
}


setInterval(updateClock, 1000);



