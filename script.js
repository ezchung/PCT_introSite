const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');
        const progressIndicator = document.querySelector('.progress-indicator');

        navLinks.forEach((link, index) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all links and pages
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));

                // Add active class to clicked link and corresponding page
                link.classList.add('active');
                const pageId = link.getAttribute('data-page');
                document.getElementById(pageId).classList.add('active');

                // Update progress bar position
                const position = (index / (navLinks.length - 1)) * (100 - 15); // 15vh is roughly the indicator height
                progressIndicator.style.transform = `translateY(${position}vh)`;
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