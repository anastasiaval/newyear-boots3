'use strict';

function showInfo(btn) {
    document.querySelectorAll(btn).forEach(function (el) {
        el.addEventListener('click', function (e) {
            var infoBlock = e.target.closest('.offer-item').querySelector('.offer-info');
            (infoBlock.style.display !== "block") ? infoBlock.style.display = "block" : infoBlock.style.display = "none";
        })
    });
}

showInfo('.info-btn');
showInfo('.offer-info_close');

