const greetingText = document.getElementById('greeting-text');
const timestamp = document.getElementById('timestamp');

function updateTime() {
    const currentTime = new Date(Date.now());
    timestamp.innerHTML = currentTime.toLocaleTimeString();

    if (currentTime.getHours() > 17) {        
        greetingText.innerHTML = 'Good evening';
    }
    if (currentTime.getHours() < 17 && currentTime.getHours() > 12) {        
        greetingText.innerHTML = 'Good Afternoon';
    }
    if (currentTime.getHours() < 12) {        
        greetingText.innerHTML = 'Good Morning';
    }
}
updateTime();

setInterval(updateTime, 1000);

