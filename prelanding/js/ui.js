document.addEventListener('DOMContentLoaded', () => {
    const comments = document.querySelectorAll('.fb-comments-wrapper');

    comments.forEach(comment => {
        comment.style.display = 'none';
    });

    let index = 0;

    const interval = setInterval(() => {
        if (index >= comments.length) {
            clearInterval(interval);
            return;
        }

        comments[index].style.display = '';
        index++;
    }, 10000);

    // Одразу показати перший
    if(comments.length){comments[index].style.display = '';index++;}
 
});


document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.js-current-date').forEach(function(e){e.textContent=new Date().toLocaleDateString('th-TH')});});