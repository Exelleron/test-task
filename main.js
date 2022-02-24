'use strict';

const anyString = document.getElementById('any-string');
const text = document.querySelector('label');
const btn = document.querySelector('.btn');

function letterClick (e) {
    const element = e.target;
    element.style.position = 'absolute';
    move(e);
    document.body.appendChild(element);
    element.style.zIndex = '10';

    function move(e) {
        element.style.left = e.pageX - element.offsetWidth / 2 + 'px';
        element.style.top = e.pageY - element.offsetHeight / 2 + 'px';
    }
    document.onmousemove = function (e) {
        move(e);
    };

    element.onclick = function () {
        document.onmousemove = null;
    };
}

btn.addEventListener('click', function () {
    if (anyString.value) {
        let html = '';
         anyString.value.split('').forEach(letter => {
            html += `<span onclick="letterClick(event)">${letter}</span>`;
        });
        text.insertAdjacentHTML('beforeend', html)
    }
});
