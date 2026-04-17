document.addEventListener('DOMContentLoaded', () => {
    const joinBtn = document.getElementById('joinBtn');

    
    joinBtn.addEventListener('click', () => {
        alert('Welcome to the Pulse! Redirecting to registration...');
    });

    
    const cards = document.querySelectorAll('.card');
    
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            
            if(cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transition = 'opacity 0.5s ease-in';
            }
        });
    });
});