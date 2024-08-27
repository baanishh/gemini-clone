window.addEventListener('resize', () => {
    if (window.innerHeight < 500) {  // Example threshold for keyboard detection
        document.body.style.height = '100vh';
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.height = 'auto';
        document.body.style.overflow = 'auto';
    }
});