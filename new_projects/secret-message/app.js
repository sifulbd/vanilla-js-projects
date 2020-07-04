const {hash} = window.location;
const decodedMessage = atob(hash.replace('#', ''));

if(decodedMessage) {
    document.querySelector('#link-panel').classList.add('hide');
    document.querySelector('#message-panel').classList.add('hide');
    document.querySelector('#show-message').classList.remove('hide');
}
document.querySelector('.sec-text').innerHTML = decodedMessage;

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    const input = document.querySelector('#message-input');
    // encrypt text
    const encrypted = btoa(input.value);

    const messagePanel = document.querySelector('#message-panel');
    const linkPanel = document.querySelector('#link-panel');
    const linkInput = document.querySelector('#link-input');
    // add to url
    linkInput.value = `${window.location}#${encrypted}`;
    messagePanel.classList.add('hide');
    linkPanel.classList.remove('hide');

    linkInput.select();
})

document.querySelector('.btn-clear').addEventListener('click', event => {
    event.preventDefault();
    document.querySelector('#message-input').value = '';
    document.querySelector('#link-input').value = '';
})

