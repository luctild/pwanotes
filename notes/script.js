document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const topicView = document.getElementById('topic-view');
    const revealBtns = document.querySelectorAll('.reveal-btn');
            
    
    // Handle reveal answer buttons
    revealBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const answerContainer = this.nextElementSibling;
            const answerText = answerContainer.querySelector('.answer-text');
            const answer = this.getAttribute('data-answer');
            
            // Disable button during countdown
            this.disabled = true;
            this.textContent = 'Revealing in 5s...';
            
            let countdown = 5;
            const countdownInterval = setInterval(() => {
                countdown--;
                this.textContent = `Revealing in ${countdown}s...`;
                
                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    answerText.textContent = answer;
                    answerContainer.classList.remove('hidden');
                    this.textContent = 'Answer Revealed';
                }
            }, 1000);
        });
    });
    
});