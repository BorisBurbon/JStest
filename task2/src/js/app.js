let container = document.getElementById('task-container');

container.onclick = function(event) {
    if (!event.target.classList.contains('remove-button')) return;
    event.target.parentNode.hidden = !event.target.parentNode.hidden;
}