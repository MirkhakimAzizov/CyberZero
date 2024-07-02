document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.getElementById('title');
    const messages = ['Cyber Zero', 'Tez kunda'];
    let index = 0;

    setInterval(() => {
        textElement.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 5000);
});
