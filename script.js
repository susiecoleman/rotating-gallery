window.onload = function () {
    var paper = new Raphael(0, 0, 800, 420);

    var image2 = paper.image("red.jpeg", -100, 10, 400, 400);
    image2.attr({ cursor: 'pointer', href: 'http://www.bbc.co.uk', transform: 's0.4' });

    var image1 = paper.image("blue.jpeg", 200, 10, 400, 400);
    image1.attr({ cursor: 'pointer', href: 'http://www.bbc.co.uk' });

    var image3 = paper.image("green.jpeg", 500, 10, 400, 400);
    image3.attr({ cursor: 'pointer', href: 'http://www.bbc.co.uk', transform: 's0.4' });

    function slide1() {
        image3.remove();
        image3 = paper.image("green.jpeg", 500, 10, 400, 400);
        image3.attr({ cursor: 'pointer', href: 'http://www.bbc.co.uk', transform: 's0.4' });
        var animleft = Raphael.animation({ x: -100, transform: 's0.4' }, 4000);
        var animright = Raphael.animation({ x: 1400 }, 4000);
        var animcentre = Raphael.animation({ x: 200, transform: 's1' }, 4000, slide2);
        image1.animate(animleft.delay(2000));
        image2.animate(animright.delay(2000));;
        image3.animate(animcentre.delay(2000));
    }

    slide1();

    function slide2() {
        image2.remove();
        image2 = paper.image("red.jpeg", 500, 10, 400, 400);
        image2.attr({ cursor: 'pointer', href: 'http://www.bbc.co.uk', transform: 's0.4' });
        var animleft2 = Raphael.animation({ x: -100, transform: 's0.4' }, 4000, slide3);
        var animright2 = Raphael.animation({ x: 1400 }, 4000);
        var animcentre2 = Raphael.animation({ x: 200, transform: 's1' }, 4000);
        image1.animate(animright2.delay(2000));
        image2.animate(animcentre2.delay(2000));
        image3.animate(animleft2.delay(2000));
    }

    function slide3() {
        image1.remove();
        image1 = paper.image("blue.jpeg", 500, 10, 400, 400);
        image1.attr({ cursor: 'pointer', href: 'http://www.bbc.co.uk', transform: 's0.4' });
        var animleft3 = Raphael.animation({ x: -100, transform: 's0.4' }, 4000);
        var animright3 = Raphael.animation({ x: 1400 }, 4000, slide1);
        var animcentre3 = Raphael.animation({ x: 200, transform: 's1' }, 4000);
        image1.animate(animcentre3.delay(2000));
        image2.animate(animleft3.delay(2000));
        image3.animate(animright3.delay(2000));
    }

}