document.getElementById('text_feedback').addEventListener('keypress', function (enter) {
    if (enter.key === 'Enter') {
        enter.preventDefault();
        sendform();
    }
});
function sendform() {
    var length = document.getElementById('extra').value.trim();
    if (length === '') {
        alert('Enter text before submitting.');
        return;
    }
    document.getElementById('blur').style.display = 'flex';
    setTimeout(function displaytime() {
        document.getElementById('blur').style.display = 'none';
        location.reload();
    }, 4000);
    return false;
}