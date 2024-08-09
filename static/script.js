document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.banner');
    let delay = 0;

    banners.forEach(banner => {
        setTimeout(() => {
            banner.style.transform = 'translateX(0)';
        }, delay);
        delay += 300;
    });
});

document.getElementById('option1-btn').addEventListener('click', () => {
    document.getElementById('form1').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
});

document.getElementById('option2-btn').addEventListener('click', () => {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('form2').style.display = 'block';
});



document.querySelector('#passwordvisible').addEventListener('click', () => {
    var myfields = document.querySelectorAll(".pass");
    for (var i = 0; i < myfields.length; i++) {
        if (document.querySelector('#passwordvisible').checked) {
            myfields[i].type = "text";  
        } else {
            myfields[i].type = "password"; 
        }
    }
});


