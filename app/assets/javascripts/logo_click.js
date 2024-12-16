document.addEventListener('DOMContentLoaded', function () {
    const logo = document.getElementById('logo-image');
    if (logo) {
        logo.addEventListener('click', function () {
            window.location.href = '/';
        });
    }
});