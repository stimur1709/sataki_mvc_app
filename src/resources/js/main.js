window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    //Анимация элементов

    const tl = new TimelineMax()

        tl.from('.information', 1, {
            x: '100%'
        })

        tl.from('.left-menu-fixed', .6, {
            x: -50,
            opacity: 0
        })

        tl.from('.right', .5, {
            x: 100,
            opacity: 0
        } )

        tl.from('.heading', .35, {
            y: -100,
            opacity: 0
        })

        tl.from('.services__dev', .5, {
            x: 100,
            opacity:0
        })

        tl.from('.services__design', .45, {
            x: -100,
            opacity:0
        })

        tl.from('.services__help', .40, {
            y: 100,
            opacity:0
        })

        tl.duration(3)
})

