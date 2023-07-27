gsap.to(".second", {
  opacity:0,
  delay:0,
})

var t1 = gsap.timeline();
t1
.from("#first .left .upper3", {
      opacity:0,
      duration : 1,
      
      onStart:function(){
        $('.upper3').textillate({
          in: { effect: 'fadeInUp' ,
          callback: function(){
            $('.upper3').textillate('out');
          }
        },
         out : { effect :'fadeOutUp' } 
    });
      }
    })

    .from("#first .left .upper2", {
      opacity:0,
      delay : 1,
      duration : 1,
      onStart:function(){
        $('.upper2').textillate({
          in: { effect: 'fadeInUp' ,
          callback: function(){
            $('.upper2').textillate('out');
          }
        },
         out : { effect :'fadeOutUp' } 
    });
      }
    })
    
    .from("#first .left .upper1", {
      opacity:0,
      delay : 1,
      duration : 1,
      onStart:function(){
        $('.upper1').textillate({
          in: { effect: 'fadeInUp' ,
          callback: function(){
            $('.upper1').textillate('out');
          }
        },
         out : { effect :'fadeOutUp' } 
    });
      }
    })

    .from("#first .left .upper0", {
      opacity:0,
      delay : 1,
      duration : 1,
      onStart:function(){
        $('.upper0').textillate({
          in: { effect: 'fadeInUp' ,
          callback: function(){
            $('.upper0').textillate('out');
          }
        },
         out : { effect :'fadeOutUp' } 
    });
      }
    })
    .to("#first" , {
      y: "-100%",
      duration:1,
      ease: "Power4.easeOut"
    })
    
    .to(".second" , {
      opacity:1,
      y: "-700%",
      duration:1,
      ease: "Power4.easeOut"
    })
    