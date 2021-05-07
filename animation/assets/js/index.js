$(document).ready(function () {
    
    $(".menu-toggler").click( function () {
        $(".stagger-item").toggleClass('translate-start');
    })

    $('.height-transition').click(function () {
        if (this.style.height) {
            this.style.height = null;
        }
        else {
                this.style.height = this.scrollHeight + 'px';
            }
        }
    )

    $(".hover-rotate").mouseenter(function () {
        $(this).find('img').css('transform',' rotate(8deg) scale(1.5)')
    })
    $(".hover-rotate").mouseout(function () {
        $(this).find('img').css('transform',' rotate(0deg) scale(1)')
    })
    $("figcaption").mouseover(function () {
        $(this).css('opacity','1')
    })
    $("figcaption").mouseout(function () {
        $(this).css('opacity','0')
    })
    $(".hover-menu").mouseenter(function () {
        $(this).find("img").css({'left':'200px','opacity':'0.4'})
        $(this).find('div').css('left','0')
    })
    $(".hover-menu").mouseout(function () {
        $(this).find("img").css({'left':'0','opacity':'1'})
        $(this).find('div').css('left','-200px')
    })
    $(".card").mouseover(function () {
        $(this).find('.front').css('transform','rotateY(180deg)');
        $(this).find('.back').css('transform','rotateY(0)');
    })
    $(".card").mouseout(function () {
        $(this).find('.front').css('transform','rotateY(0)');
        $(this).find('.back').css('transform','rotateY(-180deg)');
    })
    $(".border-button").mouseover(function () {
        $(this).find('animated-border-button::before').css('left','0');
        $(this).find('animated-border-button::after').css('left','0');
    })
    $(".border-button").mouseout(function () {
        $(this).find('before').css('left','80%');
        $(this).find('after').css('left','-80%');
    })
    $(".animated-fill-button").mouseover(function () {
        $(this).css({"color": "#fff","background":"#333"})
    })
    $(".animated-fill-button").mouseout(function () {
        $(this).css({"color": "#333","background":"#fff"})
    })

})