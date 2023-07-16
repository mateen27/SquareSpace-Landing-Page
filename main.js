//synchronous working
let tl = gsap.timeline();

tl.from("#nav img,#nav h3 , #nav h4 , #nav button" ,{
    y : -100 ,
    duration : 1,
    delay : 0.5 ,
    opacity : 0 ,
    stagger : 0.2 , //one by one
});

//targetting the h1
tl.from("#main h1" , {
    y : 120 ,
    opacity : 0 ,
    stagger : 0.3 ,
});

//targetting the images
tl.from('#main>img' , {
    scale : 0 ,
    opacity : 0 ,
    stagger : 0.3
})

//targetting h5 text
tl.from ('h5' , {
    scale : 0 ,
    opacity : 0 ,
});

tl.to('h5' , {
    y : 30,
    repeat : -1,    //infinite time
    duration : 0.7 ,
    yoyo : true
})