document.addEventListener("DOMContentLoaded", function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    hiddenElements.forEach((el) => {
        el.classList.add('hidden-animation');
        observer.observe(el);
    });

    document.querySelectorAll('.hidden-animation').forEach((el) => {
        el.addEventListener('transitionend', function() {
            el.classList.remove('hidden');
        });
    });
});