/*

Tooltipster 3.0.5 | 2014-01-15
A rockin' custom tooltip jQuery plugin

Developed by Caleb Jacob under the MIT license http://opensource.org/licenses/MIT

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
!function(e,t,n){function o(t,n){this.bodyOverflowX,this.checkInterval=null,this.content,this.$el=e(t),this.elProxyPosition,this.$elProxy,this.enabled=!0,this.options=e.extend({},u,n),this.mouseIsOverProxy=!1,this.namespace="tooltipster-"+Math.round(1e5*Math.random()),this.status="hidden",this.timerHide=null,this.timerShow=null,this.$tooltip,this.options.iconTheme=this.options.iconTheme.replace(".",""),this.options.theme=this.options.theme.replace(".",""),this.init()}function r(t,n){var o=!0;return e.each(t,function(e){return"undefined"==typeof n[e]||t[e]!==n[e]?(o=!1,!1):void 0}),o}function s(){return!f&&c}function a(){var e=n.body||n.documentElement,t=e.style,o="transition";if("string"==typeof t[o])return!0;v=["Moz","Webkit","Khtml","O","ms"],o=o.charAt(0).toUpperCase()+o.substr(1);for(var i=0;i<v.length;i++)if("string"==typeof t[v[i]+o])return!0;return!1}var l="tooltipster",u={animation:"fade",arrow:!0,arrowColor:"",autoClose:!0,content:null,contentAsHTML:!1,contentCloning:!0,delay:200,fixedWidth:0,maxWidth:0,functionInit:function(){},functionBefore:function(e,t){t()},functionReady:function(){},functionAfter:function(){},icon:"(?)",iconCloning:!0,iconDesktop:!1,iconTouch:!1,iconTheme:"tooltipster-icon",interactive:!1,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:!1,position:"top",positionTracker:!1,speed:350,timer:0,theme:"tooltipster-default",touchDevices:!0,trigger:"hover",updateAnimation:!0};o.prototype={init:function(){var t=this;if(n.querySelector){if(null!==t.options.content)t.setContent(t.options.content);else{var o=t.$el.attr("title");"undefined"==typeof o&&(o=null),t.setContent(o)}var i=t.options.functionInit(t.$el,t.content);"undefined"!=typeof i&&t.setContent(i),t.$el.removeAttr("title").addClass("tooltipstered"),!c&&t.options.iconDesktop||c&&t.options.iconTouch?("string"==typeof t.options.icon?(t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>'),t.$elProxy.text(t.options.icon)):t.$elProxy=t.options.iconCloning?t.options.icon.clone(!0):t.options.icon,t.$elProxy.insertAfter(t.$el)):t.$elProxy=t.$el,"hover"==t.options.trigger?(t.$elProxy.on("mouseenter."+t.namespace,function(){(!s()||t.options.touchDevices)&&(t.mouseIsOverProxy=!0,t.showTooltip())}).on("mouseleave."+t.namespace,function(){(!s()||t.options.touchDevices)&&(t.mouseIsOverProxy=!1)}),c&&t.options.touchDevices&&t.$elProxy.on("touchstart."+t.namespace,function(){t.showTooltipNow()})):"click"==t.options.trigger&&t.$elProxy.on("click."+t.namespace,function(){(!s()||t.options.touchDevices)&&t.showTooltip()})}},showTooltip:function(){var e=this;"shown"!=e.status&&"appearing"!=e.status&&(e.options.delay?e.timerShow=setTimeout(function(){("click"==e.options.trigger||"hover"==e.options.trigger&&e.mouseIsOverProxy)&&e.showTooltipNow()},e.options.delay):e.showTooltipNow())},showTooltipNow:function(){var n=this;clearTimeout(n.timerShow),n.timerShow=null,clearTimeout(n.timerHide),n.timerHide=null,n.enabled&&null!==n.content&&(n.options.onlyOne&&e(".tooltipstered").not(n.$el).each(function(t,n){var o=e(n),i=o[l]("status"),r=o[l]("option","autoClose");"hidden"!==i&&"disappearing"!==i&&r&&o[l]("hide")}),n.options.functionBefore(n.$elProxy,function(){if("hidden"!==n.status){var o=0;"disappearing"===n.status&&(n.status="appearing",a()?(n.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+n.options.animation+"-show"),n.options.speed>0&&n.$tooltip.delay(n.options.speed),n.$tooltip.queue(function(){n.status="shown"})):n.$tooltip.stop().fadeIn(function(){n.status="shown"}))}else{n.status="appearing";var o=n.options.speed;n.bodyOverflowX=e("body").css("overflow-x"),e("body").css("overflow-x","hidden");var i="tooltipster-"+n.options.animation,r="-webkit-transition-duration: "+n.options.speed+"ms; -webkit-animation-duration: "+n.options.speed+"ms; -moz-transition-duration: "+n.options.speed+"ms; -moz-animation-duration: "+n.options.speed+"ms; -o-transition-duration: "+n.options.speed+"ms; -o-animation-duration: "+n.options.speed+"ms; -ms-transition-duration: "+n.options.speed+"ms; -ms-animation-duration: "+n.options.speed+"ms; transition-duration: "+n.options.speed+"ms; animation-duration: "+n.options.speed+"ms;",s=n.options.fixedWidth>0?"width:"+Math.round(n.options.fixedWidth)+"px;":"",l=n.options.maxWidth>0?"max-width:"+Math.round(n.options.maxWidth)+"px;":"",u=n.options.interactive?"pointer-events: auto;":"";if(n.$tooltip=e('<div class="tooltipster-base '+n.options.theme+'" style="'+s+" "+l+" "+u+" "+r+'"><div class="tooltipster-content"></div></div>'),a()&&n.$tooltip.addClass(i),n.insertContent(),n.$tooltip.appendTo("body"),n.positionTooltip(),n.options.functionReady(n.$el,n.$tooltip),a()?(n.$tooltip.addClass(i+"-show"),n.options.speed>0&&n.$tooltip.delay(n.options.speed),n.$tooltip.queue(function(){n.status="shown"})):n.$tooltip.css("display","none").fadeIn(n.options.speed,function(){n.status="shown"}),n.setCheckInterval(),e(t).on("scroll."+n.namespace+" resize."+n.namespace,function(){n.positionTooltip()}),n.options.autoClose)if(e("body").off("."+n.namespace),"hover"==n.options.trigger)if(c&&setTimeout(function(){e("body").on("touchstart."+n.namespace,function(){n.hideTooltip()})},0),n.options.interactive){c&&n.$tooltip.on("touchstart."+n.namespace,function(e){e.stopPropagation()});var f=null;n.$elProxy.add(n.$tooltip).on("mouseleave."+n.namespace+"-autoClose",function(){clearTimeout(f),f=setTimeout(function(){n.hideTooltip()},n.options.interactiveTolerance)}).on("mouseenter."+n.namespace+"-autoClose",function(){clearTimeout(f)})}else n.$elProxy.on("mouseleave."+n.namespace+"-autoClose",function(){n.hideTooltip()});else"click"==n.options.trigger&&(setTimeout(function(){e("body").on("click."+n.namespace+" touchstart."+n.namespace,function(){n.hideTooltip()})},0),n.options.interactive&&n.$tooltip.on("click."+n.namespace+" touchstart."+n.namespace,function(e){e.stopPropagation()}))}n.options.timer>0&&(n.timerHide=setTimeout(function(){n.timerHide=null,n.hideTooltip()},n.options.timer+o))}))},setCheckInterval:function(){var t=this;t.checkInterval=setInterval(function(){if(0===e("body").find(t.$el).length||0===e("body").find(t.$elProxy).length||"hidden"==t.status||0===e("body").find(t.$tooltip).length)("shown"==t.status||"appearing"==t.status)&&t.hideTooltip(),t.cancelCheckInterval();else if(t.options.positionTracker){var n=t.positionInfo(t.$elProxy),o=!1;r(n.dimension,t.elProxyPosition.dimension)&&("fixed"===t.$elProxy.css("position")?r(n.position,t.elProxyPosition.position)&&(o=!0):r(n.offset,t.elProxyPosition.offset)&&(o=!0)),o||t.positionTooltip()}},200)},cancelCheckInterval:function(){clearInterval(this.checkInterval),this.checkInterval=null},hideTooltip:function(){var n=this;if(clearTimeout(n.timerShow),n.timerShow=null,clearTimeout(n.timerHide),n.timerHide=null,"shown"==n.status||"appearing"==n.status){n.status="disappearing";var o=function(){n.status="hidden",n.$tooltip.remove(),n.$tooltip=null,e(t).off("."+n.namespace),e("body").off("."+n.namespace).css("overflow-x",n.bodyOverflowX),n.$elProxy.off("."+n.namespace+"-autoClose"),n.options.functionAfter(n.$elProxy)};a()?(n.$tooltip.clearQueue().removeClass("tooltipster-"+n.options.animation+"-show").addClass("tooltipster-dying"),n.options.speed>0&&n.$tooltip.delay(n.options.speed),n.$tooltip.queue(o)):n.$tooltip.stop().fadeOut(n.options.speed,o)}},setContent:function(e){"object"==typeof e&&null!==e&&this.options.contentCloning&&(e=e.clone(!0)),this.content=e},insertContent:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");"string"!=typeof e.content||e.options.contentAsHTML?t.empty().append(e.content):t.text(e.content)},updateTooltip:function(e){var t=this;t.setContent(e),null!==t.content?"hidden"!==t.status&&(t.insertContent(),t.positionTooltip(),t.options.updateAnimation&&(a()?(t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!=t.status&&(t.$tooltip.removeClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!==t.status&&t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})},t.options.speed))},t.options.speed)):t.$tooltip.fadeTo(t.options.speed,.5,function(){"hidden"!=t.status&&t.$tooltip.fadeTo(t.options.speed,1)}))):t.hideTooltip()},positionInfo:function(e){return{dimension:{height:e.outerHeight(!1),width:e.outerWidth(!1)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},positionTooltip:function(){function n(){var n=e(t).scrollLeft();0>S-n&&(s=S-n,S=n),S+u-n>a&&(s=S-(a+n-u),S=a+n-u)}function o(n,o){l.offset.top-e(t).scrollTop()-f-P-12<0&&o.indexOf("top")>-1&&(H=n),l.offset.top+l.dimension.height+f+12+P>e(t).scrollTop()+e(t).height()&&o.indexOf("bottom")>-1&&(H=n,A=l.offset.top-f-P-12)}var r=this;if(0!==e("body").find(r.$tooltip).length){r.$tooltip.css("width",""),r.elProxyPosition=r.positionInfo(r.$elProxy);var s=null,a=e(t).width(),l=r.elProxyPosition,u=r.$tooltip.outerWidth(!1),c=r.$tooltip.innerWidth()+1,f=r.$tooltip.outerHeight(!1);if(r.$elProxy.is("area")){var p=r.$elProxy.attr("shape"),d=r.$elProxy.parent().attr("name"),h=e('img[usemap="#'+d+'"]'),m=h.offset().left,g=h.offset().top,v=void 0!==r.$elProxy.attr("coords")?r.$elProxy.attr("coords").split(","):void 0;if("circle"==p){var y=parseInt(v[0]),x=parseInt(v[1]),b=parseInt(v[2]);l.dimension.height=2*b,l.dimension.width=2*b,l.offset.top=g+x-b,l.offset.left=m+y-b}else if("rect"==p){var y=parseInt(v[0]),x=parseInt(v[1]),w=parseInt(v[2]),T=parseInt(v[3]);l.dimension.height=T-x,l.dimension.width=w-y,l.offset.top=g+x,l.offset.left=m+y}else if("poly"==p){var C=0,k=0,$=0,E=0,N="even";for(i=0;i<v.length;i++){var D=parseInt(v[i]);"even"==N?(D>$&&($=D,0===i&&(C=$)),C>D&&(C=D),N="odd"):(D>E&&(E=D,1==i&&(k=E)),k>D&&(k=D),N="even")}l.dimension.height=E-k,l.dimension.width=$-C,l.offset.top=g+k,l.offset.left=m+C}else l.dimension.height=h.outerHeight(!1),l.dimension.width=h.outerWidth(!1),l.offset.top=g,l.offset.left=m}0===r.options.fixedWidth&&r.$tooltip.css({width:Math.round(c)+"px","padding-left":"0px","padding-right":"0px"});var S=0,j=0,A=0,P=parseInt(r.options.offsetY),L=parseInt(r.options.offsetX),H=r.options.position;if("top"==H){var O=l.offset.left+u-(l.offset.left+l.dimension.width);S=l.offset.left+L-O/2,A=l.offset.top-f-P-12,n(),o("bottom","top")}if("top-left"==H&&(S=l.offset.left+L,A=l.offset.top-f-P-12,n(),o("bottom-left","top-left")),"top-right"==H&&(S=l.offset.left+l.dimension.width+L-u,A=l.offset.top-f-P-12,n(),o("bottom-right","top-right")),"bottom"==H){var O=l.offset.left+u-(l.offset.left+l.dimension.width);S=l.offset.left-O/2+L,A=l.offset.top+l.dimension.height+P+12,n(),o("top","bottom")}if("bottom-left"==H&&(S=l.offset.left+L,A=l.offset.top+l.dimension.height+P+12,n(),o("top-left","bottom-left")),"bottom-right"==H&&(S=l.offset.left+l.dimension.width+L-u,A=l.offset.top+l.dimension.height+P+12,n(),o("top-right","bottom-right")),"left"==H){S=l.offset.left-L-u-12,j=l.offset.left+L+l.dimension.width+12;var q=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1));if(A=l.offset.top-q/2-P,0>S&&j+u>a){var F=2*parseFloat(r.$tooltip.css("border-width")),M=u+S-F;r.$tooltip.css("width",M+"px"),f=r.$tooltip.outerHeight(!1),S=l.offset.left-L-M-12-F,q=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1)),A=l.offset.top-q/2-P}else 0>S&&(S=l.offset.left+L+l.dimension.width+12,s="left")}if("right"==H){S=l.offset.left+L+l.dimension.width+12,j=l.offset.left-L-u-12;var q=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1));if(A=l.offset.top-q/2-P,S+u>a&&0>j){var F=2*parseFloat(r.$tooltip.css("border-width")),M=a-S-F;r.$tooltip.css("width",M+"px"),f=r.$tooltip.outerHeight(!1),q=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1)),A=l.offset.top-q/2-P}else S+u>a&&(S=l.offset.left-L-u-12,s="right")}if(r.options.arrow){var I="tooltipster-arrow-"+H;if(r.options.arrowColor.length<1)var W=r.$tooltip.css("background-color");else var W=r.options.arrowColor;if(s?"left"==s?(I="tooltipster-arrow-right",s=""):"right"==s?(I="tooltipster-arrow-left",s=""):s="left:"+Math.round(s)+"px;":s="","top"==H||"top-left"==H||"top-right"==H)var R=parseFloat(r.$tooltip.css("border-bottom-width")),B=r.$tooltip.css("border-bottom-color");else if("bottom"==H||"bottom-left"==H||"bottom-right"==H)var R=parseFloat(r.$tooltip.css("border-top-width")),B=r.$tooltip.css("border-top-color");else if("left"==H)var R=parseFloat(r.$tooltip.css("border-right-width")),B=r.$tooltip.css("border-right-color");else if("right"==H)var R=parseFloat(r.$tooltip.css("border-left-width")),B=r.$tooltip.css("border-left-color");else var R=parseFloat(r.$tooltip.css("border-bottom-width")),B=r.$tooltip.css("border-bottom-color");R>1&&R++;var z="";if(0!==R){var _="",X="border-color: "+B+";";-1!==I.indexOf("bottom")?_="margin-top: -"+Math.round(R)+"px;":-1!==I.indexOf("top")?_="margin-bottom: -"+Math.round(R)+"px;":-1!==I.indexOf("left")?_="margin-right: -"+Math.round(R)+"px;":-1!==I.indexOf("right")&&(_="margin-left: -"+Math.round(R)+"px;"),z='<span class="tooltipster-arrow-border" style="'+_+" "+X+';"></span>'}r.$tooltip.find(".tooltipster-arrow").remove();var U='<div class="'+I+' tooltipster-arrow" style="'+s+'">'+z+'<span style="border-color:'+W+';"></span></div>';r.$tooltip.append(U)}r.$tooltip.css({top:Math.round(A)+"px",left:Math.round(S)+"px"})}}},e.fn[l]=function(){var t=arguments;if(0===this.length){if("string"==typeof t[0]){var n=!0;switch(t[0]){case"setDefaults":e.extend(u,t[1]);break;default:n=!1}return n?!0:this}return this}if("string"==typeof t[0]){var i="#*$~&";return this.each(function(){var n=e(this).data("tooltipster");if(!n)throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element');switch(t[0]){case"content":case"update":if("undefined"==typeof t[1])return i=n.content,!1;n.updateTooltip(t[1]);break;case"destroy":n.hideTooltip(),n.$el[0]!==n.$elProxy[0]&&n.$elProxy.remove();var o="string"==typeof n.content?n.content:e("<div></div>").append(n.content).html();n.$el.removeClass("tooltipstered").attr("title",o).removeData("tooltipster").off("."+n.namespace);break;case"disable":n.hideTooltip(),n.enabled=!1;break;case"elementIcon":return i=n.$el[0]!==n.$elProxy[0]?n.$elProxy[0]:void 0,!1;case"elementTooltip":return i=n.$tooltip?n.$tooltip[0]:void 0,!1;case"enable":n.enabled=!0;break;case"hide":n.hideTooltip();break;case"option":i=n.options[t[1]];break;case"reposition":n.positionTooltip();break;case"show":n.showTooltipNow();break;case"status":return i=n.status,!1;default:throw new Error('Unknown method .tooltipster("'+t[0]+'")')}}),"#*$~&"!==i?i:this}return this.each(function(){e(this).data("tooltipster")||e(this).data("tooltipster",new o(this,t[0]))})};var c=!!("ontouchstart"in t),f=!1;e("body").one("mousemove",function(){f=!0})}(jQuery,window,document);