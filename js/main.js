const subtitles = document.querySelectorAll('.subtitle');

    subtitles.forEach(subtitle => {

        subtitle.addEventListener('click',() => {

            subtitle.closest('.griditem').classList.add('rotate');

    })
    
    });