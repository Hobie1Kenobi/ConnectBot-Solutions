// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    toggleButton.style.position = 'fixed';
    toggleButton.style.bottom = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.padding = '10px 20px';
    toggleButton.style.backgroundColor = '#00ccff';
    toggleButton.style.color = '#fff';
    toggleButton.style.border = 'none';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.boxShadow = '0 4px 10px rgba(0, 153, 255, 0.7)';
    
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('light-mode');
    });

    // Adding light mode styles dynamically
    const lightModeStyles = document.createElement('style');
    lightModeStyles.textContent = `
        body.light-mode {
            background-color: #ffffff;
            color: #121212;
        }

        body.light-mode header {
            background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(0,153,255,1) 100%);
            color: #121212;
        }

        body.light-mode footer {
            background: linear-gradient(90deg, rgba(0,153,255,1) 0%, rgba(255,255,255,1) 100%);
            color: #121212;
        }

        body.light-mode .services ul li {
            background: #0056b3;
            color: white;
        }
    `;
    document.head.appendChild(lightModeStyles);

    // Scroll Animation
    const smoothScroll = function (targetEl, duration) {
        const target = document.querySelector(targetEl);
        const targetPosition = target.getBoundingClientRect().top;
        const startPosition = window.pageYOffset;
        const startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    const scrollToSection = function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000);
    };

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    // Welcome Message in Console
    console.log('%cWelcome to ConnectBot Solutions!', 'color: rgb(0, 153, 255); font-size: 24px; font-weight: bold;');
    console.log('%cWe specialize in automation and AI consultancy.', 'color: rgb(255, 0, 224); font-size: 16px;');
});
