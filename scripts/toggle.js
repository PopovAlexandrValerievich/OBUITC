const dots = document.querySelectorAll('#switcher') 
const data = document.querySelectorAll('.toSwitch')
dots.forEach(n => {
    n.addEventListener('click', () => {
    data.forEach(d => {
    d.classList.toggle('dark');
});
});
}); 