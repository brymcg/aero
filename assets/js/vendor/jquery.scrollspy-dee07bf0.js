/*!
 * jQuery Scrollspy Plugin
 * Author: @sxalexander
 * Licensed under the MIT license
 */
!function(t,e){t.fn.extend({scrollspy:function(n){var o={min:0,max:0,mode:"vertical",buffer:0,container:e,onEnter:n.onEnter?n.onEnter:[],onLeave:n.onLeave?n.onLeave:[],onTick:n.onTick?n.onTick:[]},n=t.extend({},o,n);return this.each(function(){var e=this,o=n,i=t(o.container),r=o.mode,s=o.buffer,a=leaves=0,l=!1;i.bind("scroll",function(){var n={top:t(this).scrollTop(),left:t(this).scrollLeft()},c="vertical"==r?n.top+s:n.left+s,u=o.max,f=o.min;t.isFunction(o.max)&&(u=o.max()),t.isFunction(o.min)&&(f=o.min()),0==u&&(u="vertical"==r?i.height():i.outerWidth()+t(e).outerWidth()),c>=f&&u>=c?(l||(l=!0,a++,t(e).trigger("scrollEnter",{position:n}),t.isFunction(o.onEnter)&&o.onEnter(e,n)),t(e).trigger("scrollTick",{position:n,inside:l,enters:a,leaves:leaves}),t.isFunction(o.onTick)&&o.onTick(e,n,l,a,leaves)):l&&(l=!1,leaves++,t(e).trigger("scrollLeave",{position:n,leaves:leaves}),t.isFunction(o.onLeave)&&o.onLeave(e,n))})})}})}(jQuery,window);