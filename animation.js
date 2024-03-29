class Animation {
    static up(obj, delayDuration){
        const motion  = [
            {transform: 'translateY(100px)', opacity: 0},
            {transform: 'translateY(0)', opacity:1}
        ];
        const options = {duration : 800, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
        obj.animate(motion,options);
    };
    static up2(obj, delayDuration){
        const motion  = [
            {transform: 'translateY(140px)', opacity: 0},
            {opacity: 0, offset:0.5},
            {transform: 'translateY(0)', opacity:1}
        ];
        const options = {duration : 800, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
        obj.animate(motion,options);
    };
    static up3(obj, delayDuration){
        const motion  = [
            {transform: 'translateY(300px)',opacity:0},
            {opacity: 1, offset:0.2},
            {transform: 'translateY(0)',opacity:1}
        ];
        const options = {duration : 750, fill: 'both', easing: 'ease-out', delay: delayDuration};
        obj.animate(motion,options);
    };
    static down(obj, delayDuration){
        const motion  = [
            {transform: 'translateY(-100px)', opacity: 0},
            {transform: 'translateY(0px)', offset:0.65},
            {transform: 'translateY(-2px)', offset:0.8},
            {transform: 'translateY(0px)', opacity:1}
        ];
        const options = {duration : 600, fill: 'both', easing: 'ease-out', delay: delayDuration};
        obj.animate(motion,options);
    };
    static left(obj, delayDuration){
        const motion  = [
            {transform: 'translateX(140px)',opacity: 0},
            {transform: 'translateX(0px)',opacity: 1}
        ];
        const options = {duration : 600, fill: 'both', easing: 'ease-out', delay: delayDuration};
        obj.animate(motion,options);
    };
    static right(obj, delayDuration){
        const motion  = [
            {transform: 'translateX(-140px)',opacity: 0},
            {transform: 'translateX(0px)',opacity: 1}
        ];
        const options = {duration : 600, fill: 'both', easing: 'ease-out', delay: delayDuration};
        obj.animate(motion,options);
    };
    static fadeIn(obj,delayDuration, aniDuration){
        if(aniDuration == 0 || aniDuration === undefined) aniDuration = 300;
        const motion  = [
            {opacity: 0},
            {opacity: 1}
        ];
        const options = {duration : +aniDuration, fill: 'both', easing: 'ease-in', delay: delayDuration};
        obj.animate(motion,options);
    };
    static scale(obj, delayDuration){
        const motion  = [
            {transform: 'scale(0.8)', opacity: 0},
            {transform: 'scale(1)',  opacity: 1}
        ];
        const options = {duration : 500, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
        obj.animate(motion,options);
    };
    static upAndDown(obj, delayDuration){
        const motion  = [
            {transform: 'translateY(0px)', opacity:1},
            {transform: 'translateY(-10px)', opacity:1, offset:0.5},
            {transform: 'translateY(0px)', opacity:1}
        ];
        const options = {duration : 2000, fill: 'both', easing: 'ease-in-out', iterations: Infinity, delay:delayDuration};
        obj.animate(motion,options);
    };
    static rotate(obj, delayDuration){
        const motion  = [
            {rotate : '0deg', opacity:1},
            {rotate : '360deg', opacity:1}
        ];
        const options = {duration : 14000, fill: 'both', easing: 'linear', iterations: Infinity, delay:delayDuration};
        obj.animate(motion,options);
    };
    static openL(obj, delayDuration, distance){
        const motion  = [
            {transform:`translateX(${distance}px) rotate(180deg)`},
            {transform:`translateX(${distance}px) rotate(180deg)`, offset:0.4},
            {transform:`translateX(0px) rotate(180deg)`}
        ];
        const options = {duration : 650, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
        obj.animate(motion,options);
    }
    static openR(obj, delayDuration, distance){
        const motion  = [
            {transform:`translateX(-${distance}px)`},
            {transform:`translateX(-${distance}px)`, offset:0.4},
            {transform:`translateX(0px)`}
        ];
        const options = {duration : 650, fill: 'both', easing: 'ease-in-out', delay: delayDuration};
        obj.animate(motion,options);
    }
}
  const staticMethods = Object.getOwnPropertyNames(Animation).filter(
          method => typeof Animation[method] === 'function'
  );
  function createIO(aniName){
      //IntersectionObserver 생성
      let io = new IntersectionObserver((entries)=>{
          entries.forEach((entry)=>{
              if(entry.isIntersecting){
                  let delay = 0;
                  let opt = 0;
                  entry.target.dataset.delay ? delay = entry.target.dataset.delay : 0;
                  entry.target.dataset.opt ? opt = entry.target.dataset.opt : 0;
                  Animation[aniName](entry.target, delay, opt);
              };
          });
      });
      let targetList = document.querySelectorAll(`*[data-ani="${aniName}"]`);
      targetList.forEach( el => io.observe(el) );
  };
  staticMethods.forEach(method => createIO(method))