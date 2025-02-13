function showLove() {
            document.getElementById('response').classList.remove('hidden');
            document.getElementById('response').classList.add('show-message');
            document.getElementById('dancingGif').classList.remove('hidden');
            document.querySelector('.buttons').style.display = 'none';
            document.body.style.backgroundColor = '#ff99b4';
            confettiEffect();
        }

        function moveButton() {
            let button = document.querySelector('.no');
            let maxX = window.innerWidth - button.clientWidth - 50;
            let maxY = window.innerHeight - button.clientHeight - 50;
            let x = Math.random() * maxX;
            let y = Math.random() * maxY;
            button.style.position = 'absolute';
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        }

        function confettiEffect() {
            for (let i = 0; i < 30; i++) {
                let confetti = document.createElement('div');
                confetti.innerHTML = "❤️";
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.fontSize = '2rem';
                confetti.style.animation = `fall 2s linear ${Math.random()}s forwards`;
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 2500);
            }
        }