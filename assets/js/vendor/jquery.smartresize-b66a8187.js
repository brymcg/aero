!function(e,t){var n=function(e,t,n){var o;return function(){function i(){n||e.apply(r,s),o=null}var r=this,s=arguments;o?clearTimeout(o):n&&e.apply(r,s),o=setTimeout(i,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}}(jQuery,"smartresize");