const sections = {
    account: document.getElementById('account'),
    login: document.getElementById('login'),
    register: document.getElementById('register')
};

function showSection(visible) {
    Object.entries(sections).forEach(([id, el]) => {
        if (id === visible) {
            el.classList.remove('is-hidden');
            el.classList.add('is-visible');
        } else {
            el.classList.remove('is-visible');
            el.classList.add('is-hidden');
        }
    });
}

document.getElementById('button-login')?.addEventListener('click', () => showSection('login'));
document.getElementById('button-have-account')?.addEventListener('click', () => showSection('login'));

document.getElementById('button-register')?.addEventListener('click', () => showSection('register'));
document.getElementById('button-new-account')?.addEventListener('click', () => showSection('register'));