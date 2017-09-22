'use strict';

var container = document.querySelector("#task-container");

container.addEventListener('click', function (event) {
    if (!event.target.classList.contains('remove-button')) return;
    event.target.parentNode.hidden = !event.target.parentNode.hidden;
});