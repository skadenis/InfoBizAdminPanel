(function(smart) {

    var id = smart.id.split('x')[0],
        title = smart.title,
        placement = smart.placement || 'left',
        text = smart.text || 'Получай промо-коды, скидки,<br> специальные акции первым!',
        link = document.createElement('link'),
        // hidden = document.cookie.indexOf('fpsmart_hidden') !== -1,
        hidden = false,
        div,
        html = ['<a href="https://backend.gastrosoft.by/qr/link/'+id+'" class="fpsmart" target="_blank">',
            '<img class="fpsmart__logo" src="https://backend.gastrosoft.by/qr/image/'+id+'">',
            '<i class="fpsmart__close"></i>',
            '<div class="fpsmart__title">'+title+'</div>',
            '<div class="fpsmart__text">'+text+'</div>',
            '</a>',

            // '<div class="fpsmart__buttons">',
            // '<span class="fpsmart__button fpsmart__button--googleplay"></span>',
            // '<span class="fpsmart__button fpsmart__button--appstore"></span>',
            // '</div>',

            '<div class="fpsmart__qr">',
            '<i class="fpsmart__qr-close"></i>',
            '<div class="fpsmart__caption">Скачай наше<br> мобильное приложение!</div>',
            '<div class="fpsmart__caption-sub">Участвуй в акциях,<br> получай скидки,<br> накапливай кэшбэк!</div>',

            '<img src="https://backend.gastrosoft.by/qr/'+id+'" class="fpsmart__image"></i>',
            '<div class="fpsmart__hint">Отсканируй qr-код камерой<br> мобильного телефона,<br> чтобы скачать приложение.</div>',
            '<button class="fpsmart__qr-thanks">Спасибо!</button>',
            '</div>'

        ];

    div = document.createElement('div');
    div.className = 'fpsmart__bg fpsmart__bg--'+placement+'-buttons ' + (hidden ? 'fpsmart__bg--cookies' : 'fpsmart__bg--show');

    // Над кнопкой «Оставить отзыв»
    if (document.querySelector('.btn_comment')) {
        div.className += ' fpsmart__bg--with-left-clutter';
    }

    div.innerHTML = html.join('');



    var setCookie = function (name, value, days) {
        var d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    };



    var onCssLoad = function() {

        document.body.appendChild(div);

        // document.querySelector('.fpsmart__buttons').addEventListener('click', function() {
        //     document.querySelector('.fpsmart').click();
        // });

        document.querySelector('.fpsmart__close').addEventListener('click', function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            document.querySelector('.fpsmart__bg').classList.remove('fpsmart__bg--show');

            setTimeout(function() {
                document.querySelector('.fpsmart__bg').classList.add('fpsmart__bg--cookies');
            }, 500);

            setCookie('fpsmart_hidden', 1, 365);
        });


        document.querySelector('.fpsmart').addEventListener('click', function(event) {
            if (!navigator.userAgent.match(/Mobile/i)) {
                event.preventDefault();
                event.stopImmediatePropagation();
                document.querySelector('.fpsmart__bg').classList.add('fpsmart__bg--qr');
            }
        });

        var qrClose = function(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            document.querySelector('.fpsmart__bg').classList.remove('fpsmart__bg--qr');
        };

        document.querySelector('.fpsmart__qr-close').addEventListener('click', qrClose);
        document.querySelector('.fpsmart__qr-thanks').addEventListener('click', qrClose);

    };

    link.rel = 'stylesheet';

    link.onload = function() {
        onCssLoad();
    };

    link.href = 'https://app.gastrosoft.by/widget/main.css?v11';

    document.querySelector('head').appendChild(link);


})(window.fpsmart);