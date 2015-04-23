/*

Tooltipster 3.0.5 | 2014-01-15
A rockin' custom tooltip jQuery plugin

Developed by Caleb Jacob under the MIT license http://opensource.org/licenses/MIT

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
!function(t,e,n){function o(e,n){this.bodyOverflowX,this.checkInterval=null,this.content,this.$el=t(e),this.elProxyPosition,this.$elProxy,this.enabled=!0,this.options=t.extend({},c,n),this.mouseIsOverProxy=!1,this.namespace="tooltipster-"+Math.round(1e5*Math.random()),this.status="hidden",this.timerHide=null,this.timerShow=null,this.$tooltip,this.options.iconTheme=this.options.iconTheme.replace(".",""),this.options.theme=this.options.theme.replace(".",""),this.init()}function r(e,n){var o=!0;return t.each(e,function(t){return"undefined"==typeof n[t]||e[t]!==n[t]?(o=!1,!1):void 0}),o}function s(){return!f&&u}function a(){var t=n.body||n.documentElement,e=t.style,o="transition";if("string"==typeof e[o])return!0;v=["Moz","Webkit","Khtml","O","ms"],o=o.charAt(0).toUpperCase()+o.substr(1);for(var i=0;i<v.length;i++)if("string"==typeof e[v[i]+o])return!0;return!1}var l="tooltipster",c={animation:"fade",arrow:!0,arrowColor:"",autoClose:!0,content:null,contentAsHTML:!1,contentCloning:!0,delay:200,fixedWidth:0,maxWidth:0,functionInit:function(){},functionBefore:function(t,e){e()},functionReady:function(){},functionAfter:function(){},icon:"(?)",iconCloning:!0,iconDesktop:!1,iconTouch:!1,iconTheme:"tooltipster-icon",interactive:!1,interactiveTolerance:350,offsetX:0,offsetY:0,onlyOne:!1,position:"top",positionTracker:!1,speed:350,timer:0,theme:"tooltipster-default",touchDevices:!0,trigger:"hover",updateAnimation:!0};o.prototype={init:function(){var e=this;if(n.querySelector){if(null!==e.options.content)e.setContent(e.options.content);else{var o=e.$el.attr("title");"undefined"==typeof o&&(o=null),e.setContent(o)}var i=e.options.functionInit(e.$el,e.content);"undefined"!=typeof i&&e.setContent(i),e.$el.removeAttr("title").addClass("tooltipstered"),!u&&e.options.iconDesktop||u&&e.options.iconTouch?("string"==typeof e.options.icon?(e.$elProxy=t('<span class="'+e.options.iconTheme+'"></span>'),e.$elProxy.text(e.options.icon)):e.$elProxy=e.options.iconCloning?e.options.icon.clone(!0):e.options.icon,e.$elProxy.insertAfter(e.$el)):e.$elProxy=e.$el,"hover"==e.options.trigger?(e.$elProxy.on("mouseenter."+e.namespace,function(){(!s()||e.options.touchDevices)&&(e.mouseIsOverProxy=!0,e.showTooltip())}).on("mouseleave."+e.namespace,function(){(!s()||e.options.touchDevices)&&(e.mouseIsOverProxy=!1)}),u&&e.options.touchDevices&&e.$elProxy.on("touchstart."+e.namespace,function(){e.showTooltipNow()})):"click"==e.options.trigger&&e.$elProxy.on("click."+e.namespace,function(){(!s()||e.options.touchDevices)&&e.showTooltip()})}},showTooltip:function(){var t=this;"shown"!=t.status&&"appearing"!=t.status&&(t.options.delay?t.timerShow=setTimeout(function(){("click"==t.options.trigger||"hover"==t.options.trigger&&t.mouseIsOverProxy)&&t.showTooltipNow()},t.options.delay):t.showTooltipNow())},showTooltipNow:function(){var n=this;clearTimeout(n.timerShow),n.timerShow=null,clearTimeout(n.timerHide),n.timerHide=null,n.enabled&&null!==n.content&&(n.options.onlyOne&&t(".tooltipstered").not(n.$el).each(function(e,n){var o=t(n),i=o[l]("status"),r=o[l]("option","autoClose");"hidden"!==i&&"disappearing"!==i&&r&&o[l]("hide")}),n.options.functionBefore(n.$elProxy,function(){if("hidden"!==n.status){var o=0;"disappearing"===n.status&&(n.status="appearing",a()?(n.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+n.options.animation+"-show"),n.options.speed>0&&n.$tooltip.delay(n.options.speed),n.$tooltip.queue(function(){n.status="shown"})):n.$tooltip.stop().fadeIn(function(){n.status="shown"}))}else{n.status="appearing";var o=n.options.speed;n.bodyOverflowX=t("body").css("overflow-x"),t("body").css("overflow-x","hidden");var i="tooltipster-"+n.options.animation,r="-webkit-transition-duration: "+n.options.speed+"ms; -webkit-animation-duration: "+n.options.speed+"ms; -moz-transition-duration: "+n.options.speed+"ms; -moz-animation-duration: "+n.options.speed+"ms; -o-transition-duration: "+n.options.speed+"ms; -o-animation-duration: "+n.options.speed+"ms; -ms-transition-duration: "+n.options.speed+"ms; -ms-animation-duration: "+n.options.speed+"ms; transition-duration: "+n.options.speed+"ms; animation-duration: "+n.options.speed+"ms;",s=n.options.fixedWidth>0?"width:"+Math.round(n.options.fixedWidth)+"px;":"",l=n.options.maxWidth>0?"max-width:"+Math.round(n.options.maxWidth)+"px;":"",c=n.options.interactive?"pointer-events: auto;":"";if(n.$tooltip=t('<div class="tooltipster-base '+n.options.theme+'" style="'+s+" "+l+" "+c+" "+r+'"><div class="tooltipster-content"></div></div>'),a()&&n.$tooltip.addClass(i),n.insertContent(),n.$tooltip.appendTo("body"),n.positionTooltip(),n.options.functionReady(n.$el,n.$tooltip),a()?(n.$tooltip.addClass(i+"-show"),n.options.speed>0&&n.$tooltip.delay(n.options.speed),n.$tooltip.queue(function(){n.status="shown"})):n.$tooltip.css("display","none").fadeIn(n.options.speed,function(){n.status="shown"}),n.setCheckInterval(),t(e).on("scroll."+n.namespace+" resize."+n.namespace,function(){n.positionTooltip()}),n.options.autoClose)if(t("body").off("."+n.namespace),"hover"==n.options.trigger)if(u&&setTimeout(function(){t("body").on("touchstart."+n.namespace,function(){n.hideTooltip()})},0),n.options.interactive){u&&n.$tooltip.on("touchstart."+n.namespace,function(t){t.stopPropagation()});var f=null;n.$elProxy.add(n.$tooltip).on("mouseleave."+n.namespace+"-autoClose",function(){clearTimeout(f),f=setTimeout(function(){n.hideTooltip()},n.options.interactiveTolerance)}).on("mouseenter."+n.namespace+"-autoClose",function(){clearTimeout(f)})}else n.$elProxy.on("mouseleave."+n.namespace+"-autoClose",function(){n.hideTooltip()});else"click"==n.options.trigger&&(setTimeout(function(){t("body").on("click."+n.namespace+" touchstart."+n.namespace,function(){n.hideTooltip()})},0),n.options.interactive&&n.$tooltip.on("click."+n.namespace+" touchstart."+n.namespace,function(t){t.stopPropagation()}))}n.options.timer>0&&(n.timerHide=setTimeout(function(){n.timerHide=null,n.hideTooltip()},n.options.timer+o))}))},setCheckInterval:function(){var e=this;e.checkInterval=setInterval(function(){if(0===t("body").find(e.$el).length||0===t("body").find(e.$elProxy).length||"hidden"==e.status||0===t("body").find(e.$tooltip).length)("shown"==e.status||"appearing"==e.status)&&e.hideTooltip(),e.cancelCheckInterval();else if(e.options.positionTracker){var n=e.positionInfo(e.$elProxy),o=!1;r(n.dimension,e.elProxyPosition.dimension)&&("fixed"===e.$elProxy.css("position")?r(n.position,e.elProxyPosition.position)&&(o=!0):r(n.offset,e.elProxyPosition.offset)&&(o=!0)),o||e.positionTooltip()}},200)},cancelCheckInterval:function(){clearInterval(this.checkInterval),this.checkInterval=null},hideTooltip:function(){var n=this;if(clearTimeout(n.timerShow),n.timerShow=null,clearTimeout(n.timerHide),n.timerHide=null,"shown"==n.status||"appearing"==n.status){n.status="disappearing";var o=function(){n.status="hidden",n.$tooltip.remove(),n.$tooltip=null,t(e).off("."+n.namespace),t("body").off("."+n.namespace).css("overflow-x",n.bodyOverflowX),n.$elProxy.off("."+n.namespace+"-autoClose"),n.options.functionAfter(n.$elProxy)};a()?(n.$tooltip.clearQueue().removeClass("tooltipster-"+n.options.animation+"-show").addClass("tooltipster-dying"),n.options.speed>0&&n.$tooltip.delay(n.options.speed),n.$tooltip.queue(o)):n.$tooltip.stop().fadeOut(n.options.speed,o)}},setContent:function(t){"object"==typeof t&&null!==t&&this.options.contentCloning&&(t=t.clone(!0)),this.content=t},insertContent:function(){var t=this,e=this.$tooltip.find(".tooltipster-content");"string"!=typeof t.content||t.options.contentAsHTML?e.empty().append(t.content):e.text(t.content)},updateTooltip:function(t){var e=this;e.setContent(t),null!==e.content?"hidden"!==e.status&&(e.insertContent(),e.positionTooltip(),e.options.updateAnimation&&(a()?(e.$tooltip.css({width:"","-webkit-transition":"all "+e.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+e.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+e.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+e.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+e.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!=e.status&&(e.$tooltip.removeClass("tooltipster-content-changing"),setTimeout(function(){"hidden"!==e.status&&e.$tooltip.css({"-webkit-transition":e.options.speed+"ms","-moz-transition":e.options.speed+"ms","-o-transition":e.options.speed+"ms","-ms-transition":e.options.speed+"ms",transition:e.options.speed+"ms"})},e.options.speed))},e.options.speed)):e.$tooltip.fadeTo(e.options.speed,.5,function(){"hidden"!=e.status&&e.$tooltip.fadeTo(e.options.speed,1)}))):e.hideTooltip()},positionInfo:function(t){return{dimension:{height:t.outerHeight(!1),width:t.outerWidth(!1)},offset:t.offset(),position:{left:parseInt(t.css("left")),top:parseInt(t.css("top"))}}},positionTooltip:function(){function n(){var n=t(e).scrollLeft();0>D-n&&(s=D-n,D=n),D+c-n>a&&(s=D-(a+n-c),D=a+n-c)}function o(n,o){l.offset.top-t(e).scrollTop()-f-A-12<0&&o.indexOf("top")>-1&&(L=n),l.offset.top+l.dimension.height+f+12+A>t(e).scrollTop()+t(e).height()&&o.indexOf("bottom")>-1&&(L=n,j=l.offset.top-f-A-12)}var r=this;if(0!==t("body").find(r.$tooltip).length){r.$tooltip.css("width",""),r.elProxyPosition=r.positionInfo(r.$elProxy);var s=null,a=t(e).width(),l=r.elProxyPosition,c=r.$tooltip.outerWidth(!1),u=r.$tooltip.innerWidth()+1,f=r.$tooltip.outerHeight(!1);if(r.$elProxy.is("area")){var p=r.$elProxy.attr("shape"),d=r.$elProxy.parent().attr("name"),h=t('img[usemap="#'+d+'"]'),m=h.offset().left,g=h.offset().top,v=void 0!==r.$elProxy.attr("coords")?r.$elProxy.attr("coords").split(","):void 0;if("circle"==p){var y=parseInt(v[0]),x=parseInt(v[1]),b=parseInt(v[2]);l.dimension.height=2*b,l.dimension.width=2*b,l.offset.top=g+x-b,l.offset.left=m+y-b}else if("rect"==p){var y=parseInt(v[0]),x=parseInt(v[1]),w=parseInt(v[2]),T=parseInt(v[3]);l.dimension.height=T-x,l.dimension.width=w-y,l.offset.top=g+x,l.offset.left=m+y}else if("poly"==p){var $=0,C=0,k=0,E=0,P="even";for(i=0;i<v.length;i++){var N=parseInt(v[i]);"even"==P?(N>k&&(k=N,0===i&&($=k)),$>N&&($=N),P="odd"):(N>E&&(E=N,1==i&&(C=E)),C>N&&(C=N),P="even")}l.dimension.height=E-C,l.dimension.width=k-$,l.offset.top=g+C,l.offset.left=m+$}else l.dimension.height=h.outerHeight(!1),l.dimension.width=h.outerWidth(!1),l.offset.top=g,l.offset.left=m}0===r.options.fixedWidth&&r.$tooltip.css({width:Math.round(u)+"px","padding-left":"0px","padding-right":"0px"});var D=0,S=0,j=0,A=parseInt(r.options.offsetY),H=parseInt(r.options.offsetX),L=r.options.position;if("top"==L){var O=l.offset.left+c-(l.offset.left+l.dimension.width);D=l.offset.left+H-O/2,j=l.offset.top-f-A-12,n(),o("bottom","top")}if("top-left"==L&&(D=l.offset.left+H,j=l.offset.top-f-A-12,n(),o("bottom-left","top-left")),"top-right"==L&&(D=l.offset.left+l.dimension.width+H-c,j=l.offset.top-f-A-12,n(),o("bottom-right","top-right")),"bottom"==L){var O=l.offset.left+c-(l.offset.left+l.dimension.width);D=l.offset.left-O/2+H,j=l.offset.top+l.dimension.height+A+12,n(),o("top","bottom")}if("bottom-left"==L&&(D=l.offset.left+H,j=l.offset.top+l.dimension.height+A+12,n(),o("top-left","bottom-left")),"bottom-right"==L&&(D=l.offset.left+l.dimension.width+H-c,j=l.offset.top+l.dimension.height+A+12,n(),o("top-right","bottom-right")),"left"==L){D=l.offset.left-H-c-12,S=l.offset.left+H+l.dimension.width+12;var I=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1));if(j=l.offset.top-I/2-A,0>D&&S+c>a){var q=2*parseFloat(r.$tooltip.css("border-width")),F=c+D-q;r.$tooltip.css("width",F+"px"),f=r.$tooltip.outerHeight(!1),D=l.offset.left-H-F-12-q,I=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1)),j=l.offset.top-I/2-A}else 0>D&&(D=l.offset.left+H+l.dimension.width+12,s="left")}if("right"==L){D=l.offset.left+H+l.dimension.width+12,S=l.offset.left-H-c-12;var I=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1));if(j=l.offset.top-I/2-A,D+c>a&&0>S){var q=2*parseFloat(r.$tooltip.css("border-width")),F=a-D-q;r.$tooltip.css("width",F+"px"),f=r.$tooltip.outerHeight(!1),I=l.offset.top+f-(l.offset.top+r.$elProxy.outerHeight(!1)),j=l.offset.top-I/2-A}else D+c>a&&(D=l.offset.left-H-c-12,s="right")}if(r.options.arrow){var M="tooltipster-arrow-"+L;if(r.options.arrowColor.length<1)var W=r.$tooltip.css("background-color");else var W=r.options.arrowColor;if(s?"left"==s?(M="tooltipster-arrow-right",s=""):"right"==s?(M="tooltipster-arrow-left",s=""):s="left:"+Math.round(s)+"px;":s="","top"==L||"top-left"==L||"top-right"==L)var R=parseFloat(r.$tooltip.css("border-bottom-width")),B=r.$tooltip.css("border-bottom-color");else if("bottom"==L||"bottom-left"==L||"bottom-right"==L)var R=parseFloat(r.$tooltip.css("border-top-width")),B=r.$tooltip.css("border-top-color");else if("left"==L)var R=parseFloat(r.$tooltip.css("border-right-width")),B=r.$tooltip.css("border-right-color");else if("right"==L)var R=parseFloat(r.$tooltip.css("border-left-width")),B=r.$tooltip.css("border-left-color");else var R=parseFloat(r.$tooltip.css("border-bottom-width")),B=r.$tooltip.css("border-bottom-color");R>1&&R++;var z="";if(0!==R){var X="",_="border-color: "+B+";";-1!==M.indexOf("bottom")?X="margin-top: -"+Math.round(R)+"px;":-1!==M.indexOf("top")?X="margin-bottom: -"+Math.round(R)+"px;":-1!==M.indexOf("left")?X="margin-right: -"+Math.round(R)+"px;":-1!==M.indexOf("right")&&(X="margin-left: -"+Math.round(R)+"px;"),z='<span class="tooltipster-arrow-border" style="'+X+" "+_+';"></span>'}r.$tooltip.find(".tooltipster-arrow").remove();var U='<div class="'+M+' tooltipster-arrow" style="'+s+'">'+z+'<span style="border-color:'+W+';"></span></div>';r.$tooltip.append(U)}r.$tooltip.css({top:Math.round(j)+"px",left:Math.round(D)+"px"})}}},t.fn[l]=function(){var e=arguments;if(0===this.length){if("string"==typeof e[0]){var n=!0;switch(e[0]){case"setDefaults":t.extend(c,e[1]);break;default:n=!1}return n?!0:this}return this}if("string"==typeof e[0]){var i="#*$~&";return this.each(function(){var n=t(this).data("tooltipster");if(!n)throw new Error("You called Tooltipster's \""+e[0]+'" method on an uninitialized element');switch(e[0]){case"content":case"update":if("undefined"==typeof e[1])return i=n.content,!1;n.updateTooltip(e[1]);break;case"destroy":n.hideTooltip(),n.$el[0]!==n.$elProxy[0]&&n.$elProxy.remove();var o="string"==typeof n.content?n.content:t("<div></div>").append(n.content).html();n.$el.removeClass("tooltipstered").attr("title",o).removeData("tooltipster").off("."+n.namespace);break;case"disable":n.hideTooltip(),n.enabled=!1;break;case"elementIcon":return i=n.$el[0]!==n.$elProxy[0]?n.$elProxy[0]:void 0,!1;case"elementTooltip":return i=n.$tooltip?n.$tooltip[0]:void 0,!1;case"enable":n.enabled=!0;break;case"hide":n.hideTooltip();break;case"option":i=n.options[e[1]];break;case"reposition":n.positionTooltip();break;case"show":n.showTooltipNow();break;case"status":return i=n.status,!1;default:throw new Error('Unknown method .tooltipster("'+e[0]+'")')}}),"#*$~&"!==i?i:this}return this.each(function(){t(this).data("tooltipster")||t(this).data("tooltipster",new o(this,e[0]))})};var u=!!("ontouchstart"in e),f=!1;t("body").one("mousemove",function(){f=!0})}(jQuery,window,document);