window.addEventListener('DOMContentLoaded', () => {
    'use strict'

    const tl = new TimelineMax()
    const mySplitText = new SplitText('.heading',{type: 'chars'})
    const chars = mySplitText.chars

        tl.from('.information', 1, {
            x: '100%'
        })

        tl.from('.left-menu-fixed', .5, {
            x: -50,
            opacity: 0
        })

        tl.staggerFrom(chars, .45, {opacity: 0,}, .1)
        tl.staggerFrom(chars, .45, {fontSize: 64})


});


