document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.site-nav__link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#CCD6F6';
            link.style.color = '#0A1A39';
        });
        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = '';
            link.style.color = '#FDFDFD';
        });
    });

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const books = document.querySelectorAll('.book');
    let currentBook = 0;

    if (prevBtn && nextBtn && books.length > 0) {
        prevBtn.addEventListener('click', () => {
            books[currentBook].classList.add('hidden');
            currentBook = (currentBook - 1 + books.length) % books.length;
            books[currentBook].classList.remove('hidden');
        });

        nextBtn.addEventListener('click', () => {
            books[currentBook].classList.add('hidden');
            currentBook = (currentBook + 1) % books.length;
            books[currentBook].classList.remove('hidden');
        });
    }
});