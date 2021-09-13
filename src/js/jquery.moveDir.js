;
(function ($) {
  $.fn.extend({
    move() {
      //this在这里本来就表示jQuery实例对象，但是呢有的人喜欢$(this)这样来写,可以
      var $mask = this.find(".mask");
      console.log($mask);
      this.hover((e) => {
        var disT = this.offset().top - e.pageY;
        var disB = disT + this.outerHeight();
        var disL = this.offset().left - e.pageX;
        var disR = disL + this.outerWidth();
        var minVal = Math.min(Math.abs(disT), Math.abs(disB), Math.abs(disL), Math.abs(disR));
        switch (minVal) {
          case Math.abs(disT):
            $mask.css({
              top: "-400px",
              left: 0
            }).show().stop().animate({
              "top": 0
            }, 500);
            break;
          case Math.abs(disR):
            $mask.css({
              top: 0,
              left: "400px"
            }).show().stop().animate({
              "left": 0
            }, 500);
            break;
          case Math.abs(disB):
            $mask.css({
              top: "400px",
              left: 0
            }).show().stop().animate({
              "top": 0
            }, 500);
            break;
          case Math.abs(disL):
            $mask.css({
              left: "-400px",
              top: 0
            }).show().stop().animate({
              "left": 0
            }, 500);
            break;
        }

      }, (e) => {
        var disT = this.offset().top - e.pageY;
        var disB = disT + this.outerHeight();
        var disL = this.offset().left - e.pageX;
        var disR = disL + this.outerWidth();
        var minVal = Math.min(Math.abs(disT), Math.abs(disB), Math.abs(disL), Math.abs(disR));
        switch (minVal) {
          case Math.abs(disT):
            $mask.stop().animate({
              "top": "-400px"
            }, 500);
            break;
          case Math.abs(disR):
            $mask.stop().animate({
              "left": "400px"
            }, 500);
            break;
          case Math.abs(disB):
            $mask.stop().animate({
              "top": "400px"
            }, 500);
            break;
          case Math.abs(disL):
            $mask.stop().animate({
              "left": "-400px"
            }, 500);
            break;
        }
      })
    }
  })
})(jQuery);