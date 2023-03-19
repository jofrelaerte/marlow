<script>
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  markers: false
});

// DESKTOP - Section2
$(".section-2").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".div-bg-sect2");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "140vh top",
      end: "180vh bottom",
      scrub: 2
    }
  });
  tl.fromTo(
    targetElement,
    {
     width: "100vw",
      height: "100vh",
      borderRadius: "0rem", 
      duration: 1
    },
    {
      width: "56vh",
      height: "56vh",
      borderRadius: "200rem",
      x: "-10%",
      duration: 1
    }
  );
});

// Section2 - textover 1
$(".section-2").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".section-2-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"0%",
       opacity:"100%",
      	duration: 1
      },
      {
      y:"-10%",
       opacity:"0%",
      duration: 1
      }
    );
  });
  
  // Section2 - textdown
$(".section-2").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-sect2-pt2-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });

// Section2 - leaves
$(".section-2").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-leaf3");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });
  
  // MOBILE
$(".section-2-mobile").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".div-bg-sect2-mobile");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "140vh top",
      end: "180vh bottom",
      scrub: 2
    }
  });
  tl.fromTo(
    targetElement,
    {
     width: "100vw",
      height: "100vh",
      borderRadius: "0rem", 
      duration: 1
    },
    {
      width: "70vw",
      height: "70vw",
      y:"20%",
      borderRadius: "200rem",
      duration: 1
    }
  );
});

// Section2 - textover 1
$(".section-2-mobile").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".section-2-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"0%",
       opacity:"100%",
      	duration: 1
      },
      {
      y:"-10%",
       opacity:"0%",
      duration: 1
      }
    );
  });
  
  // Section2 - textdown
$(".section-2-mobile").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-sect2-pt2-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });

// Section2 - leaves
$(".section-2-mobile").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-leaf3");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });


// DESKTOP - Section4
$(".section-4").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".div-bg-sect4");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "140vh top",
      end: "180vh bottom",
      scrub: 2
    }
  });
  tl.fromTo(
    targetElement,
    {
     width: "100vw",
      height: "100vh",
      borderRadius: "0rem", 
      duration: 1
    },
    {
      width: "56vh",
      height: "56vh",
      borderRadius: "200rem",
      x: "-10%",
      duration: 1
    }
  );
});

// Section4 - textover 1
$(".section-4").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".section-4-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"0%",
       opacity:"100%",
      	duration: 1
      },
      {
      y:"-10%",
       opacity:"0%",
      duration: 1
      }
    );
  });
  
  // Section4 - textdown
$(".section-4").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-sect4-pt2-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });

// Section4 - leaves
$(".section-4").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-coffee");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });
  
   // MOBILE sect4
$(".section-4-mobile").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".div-bg-sect4-mobile");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "140vh top",
      end: "180vh bottom",
      scrub: 2
    }
  });
  tl.fromTo(
    targetElement,
    {
     width: "100vw",
      height: "100vh",
      borderRadius: "0rem", 
      duration: 1
    },
    {
      width: "70vw",
      height: "70vw",
      y:"20%",
      borderRadius: "200rem",
      duration: 1
    }
  );
});

// Section2 - textover 1
$(".section-4-mobile").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".section-4-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"0%",
       opacity:"100%",
      	duration: 1
      },
      {
      y:"-10%",
       opacity:"0%",
      duration: 1
      }
    );
  });
  
  // Section2 - textdown
$(".section-4-mobile").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-sect4-pt2-content");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });

// Section2 - leaves
$(".section-4-mobile").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".div-coffee");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "140vh top",
        end: "180vh bottom",
        scrub: 2
      }
    });
    tl.fromTo(
      targetElement,
      {
       y:"-10%",
       opacity:"0%",
      duration: 1
      },
      {
      y:"0%",
       opacity:"100%",
      duration: 1
      }
    );
  });
  </script>