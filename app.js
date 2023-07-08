

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        if (entry.isIntersecting) {
            entry.target.classList.add('cdshow');
        } else {
            entry.target.classList.remove('cdshow');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const cdhiddenElements = document.querySelectorAll('.cdhidden');
cdhiddenElements.forEach((el) => observer.observe(el));

