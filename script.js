const loadingScreen = document.querySelector('.loading-screen');
const loadingBar = document.querySelector('.loading-bar');
const loadingPercent = document.getElementById('loadingPercent');

let currentPercent = 0;
const loadingDuration = 3000; // 3 seconds total loading time
const incrementInterval = 50; // Update every 50ms
const incrementAmount = (100 / (loadingDuration / incrementInterval));

// Animate loading
const loadingInterval = setInterval(() => {
    currentPercent += incrementAmount;

    if (currentPercent >= 100) {
        currentPercent = 100;
        clearInterval(loadingInterval);

        // Hide loading screen after reaching 100%
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
        }, 500);
    }

    // Update percentage display
    loadingPercent.textContent = Math.floor(currentPercent);

    // Update loading bar height
    loadingBar.style.height = currentPercent + '%';
}, incrementInterval);

const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links and pages
        navLinks.forEach(l => l.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        // Add active class to clicked link and corresponding page
        link.classList.add('active');
        const pageId = link.getAttribute('data-page');
        document.getElementById(pageId).classList.add('active');
    });
});

// Video Controls (placeholder functionality)
const video = document.getElementById('mainVideo');
const playBtn = document.getElementById('playBtn');
const stopBtn = document.getElementById('stopBtn');
const muteBtn = document.getElementById('muteBtn');
const videoTime = document.getElementById('videoTime');

playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.textContent = 'pause';
    } else {
        video.pause();
        playBtn.textContent = 'play';
    }
});

stopBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0;
    playBtn.textContent = 'play';
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 'unmute' : 'mute';
});

// Update video time display
video.addEventListener('timeupdate', () => {
    const current = formatTime(video.currentTime);
    const duration = formatTime(video.duration);
    videoTime.textContent = `${current} / ${duration}`;
});

function formatTime(seconds) {
    if (isNaN(seconds)) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});