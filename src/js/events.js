document.querySelector('#button').addEventListener('click', redirectSendWhat);
document.querySelector('#phone').addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        event.preventDefault();
        redirectSendWhat();
    };
});

