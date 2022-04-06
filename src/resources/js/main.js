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


        // tl.staggerFrom(words, .45, {opacity: 0}, .1,)
        //    .staggerFrom(words, .45, {fontSize: 64})

        tl.from('.heading', .35, {
            y: -100,
            opacity: 0,
        })

        tl.duration(2)
})

