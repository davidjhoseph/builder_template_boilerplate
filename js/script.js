let answerIcons = document.getElementsByClassName('answers-icon');

for (let i = 0; i < answerIcons.length; i++) {
    answerIcons[i].addEventListener('click', function() {
        let att = answerIcons[i].getAttribute('data-triggerelement');
        let aa = document.querySelectorAll(`[data-triggerpoint="${att}"]`);
        aa[0].classList.toggle('show');
    });
}