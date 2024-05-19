let currentTimezone = 'UTC';

function updateClock() {
    const now = new Date();
    const options = { timeZone: currentTimezone, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    const timeString = new Intl.DateTimeFormat('pt-BR', options).format(now);

    const clock = document.getElementById('clock');
    clock.textContent = timeString;
}

function setTimezone(timezone) {
    currentTimezone = timezone;
    updateClock();
}

setInterval(updateClock, 1000);
updateClock();
