document.querySelector('.pricing-table').addEventListener('mouseover', (event) => {
    if (event.target.matches('.pricing-plan')) {
        event.target.style.transform = 'scale(1.05)';
    }
});

document.querySelector('.pricing-table').addEventListener('mouseout', (event) => {
    if (event.target.matches('.pricing-plan')) {
        event.target.style.transform = 'scale(1)';
    }
});