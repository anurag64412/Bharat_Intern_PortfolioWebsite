var t1 = gsap.timeline();
t1
.from(".navbar .left .leftImg",{
    opacity:0,
})
.from(".navbar .right .img1",{
    opacity : 0,
})
.from(".navbar .right .img2",{
    opacity : 0,
})
.from(".navbar .right .img3",{
    opacity : 0,
})
.from(".navbar .right .img4",{
    opacity : 0,
})

var t2 = gsap.timeline()
t2
.to(".navbar .left .leftImg",{
    opacity:1
})

.to(".navbar .right .img1",{
    opacity : 1,
})
.to(".navbar .right .img2",{
    opacity : 1,
   
})
.to(".navbar .right .img3",{
    opacity : 1,
   
})
.to(".navbar .right .img4",{
    opacity : 1,
})
.from(".intro .textintro h1",{
    opacity: 0,
    x:-1000,
})
.from(".intro .textintro .introP",{
    opacity: 0,
    x:-1000,
})
.from(".intro .imgeintro",{
    opacity: 0,
    x:1000,
})
.from(".hr",{
    opacity: 0,
    y:1000,
});
gsap.from(".edu",{
    
    scrollTrigger:{
        trigger: ".edu",
        scroller : "body",
        start: "top 70%",
        scrub: true,
        // markers : "true",
    },
    x: -100,
    opacity: 0,
})

gsap.from("ul li:nth-child(1) ",{
    scrollTrigger:{
        trigger: ".edu",
        scroller : "body",
        scrub: true,
    },
    opacity: 0,
    rotate: 35,
   x: -250,
})

gsap.from("ul li:nth-child(2) ",{
    scrollTrigger:{
        trigger: ".edu",
        scroller : "body",
        // markers : true,
        scrub: true,
    },
    opacity: 0,
    rotate: 35,
    x: 250,
})
gsap.from("ul li:nth-child(3) ",{
    scrollTrigger:{
        trigger: ".edu",
        scroller : "body",
        scrub: true,
    },
    opacity: 0,
    rotate: -35,
   x: -250,
})


gsap.from(".sklltxt",{
    
    scrollTrigger:{
        trigger: ".sklltxt",
        scroller : "body",
        start: "top 80%",
        scrub: true,
    },
    x: -100,
    opacity: 0,
    rotation: 15,
})

gsap.from(".skillCont .skills .card",{
    
    scrollTrigger:{
        trigger: ".skillCont .skills .card",
        scroller : "body",
        start: "top 80%",
        scrub: true,
    },
    x:70,
    y: 100,
    opacity: 0,
})

gsap.from(".skillCont .skills2 .card",{
    
    scrollTrigger:{
        trigger: ".skillCont .skills2 .card",
        scroller : "body",
        start: "top 80%",
        scrub: true,
    },
    x:-70,
    y: 100,
    opacity: 0,
})


gsap.from(".skillCont .skills3 .card",{
    
    scrollTrigger:{
        trigger: ".skillCont .skills3 .card",
        scroller : "body",
        start: "top 80%",
        scrub: true,
    },
    y: 100,
    opacity: 0,
})

gsap.from(".Projs",{
    
    scrollTrigger:{
        trigger: ".Projs",
        scroller : "body",
        start: "top 80%",
        scrub: true,
    },
    y: 100,
    x:-150,
    opacity: 0,
})

gsap.from(".p1",{
    
    scrollTrigger:{
        trigger: ".p1",
        scroller : "body",
        start: "top 80%",
        scrub: true,
    },
    x:200,
    y: 100,
    opacity: 0,
})
gsap.from(".slider .slider-wrapper",{
      scrollTrigger:{
        trigger: ".p1",
        scroller : "body",
        start: "top 80%",
        scrub: true,
    },
    x:-200,
    y: -100,
    opacity: 0,
})


gsap.from(".con",{
      scrollTrigger:{
        trigger: ".con",
        scroller : "body",
        start: "top 97%",
        scrub: true,
    },
    x:-20,
    y: -10,
    opacity: 0,
})


gsap.from(".footer",{
      scrollTrigger:{
        trigger: ".footer",
        scroller : "body",
        start: "top 99%",
        end: "bottom 90%",
        scrub: true,
        //  markers:true,
    },
    x:-200,
    y: -100,
    opacity: 0,
})
