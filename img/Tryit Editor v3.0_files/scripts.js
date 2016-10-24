
TweenLite.to(".card", 1, { left:289, ease:Power2.easeOut, delay:0.25});
TweenLite.to(".card", 0.10, { rotation:-7, top: -23, left: 254, scale:0.7, delay:1.25});
TweenLite.to(".card", 0.05, { scale:0.8, left:289, top: -25, delay:1.40});
TweenLite.from(".wifiA", 0.10, { opacity:0, ease:Power2.easeOut, delay:1.4});
TweenLite.from(".wifiB", 0.10, { opacity:0, ease:Power2.easeOut, delay:1.5});
TweenLite.from(".wifiC", 0.10, { opacity:0, ease:Power2.easeOut, delay:1.6});
TweenLite.from(".wifiD", 0.10, { opacity:0, ease:Power2.easeOut, delay:1.7});

TweenLite.from(".text01", 1, { opacity:0, ease:Power2.easeOut, delay:1});

TweenLite.to(".card", 0.85, { left:728, ease:Power2.easeIn, delay:3});
TweenLite.to(".cup", 1, { left:728, ease:Power2.easeIn, delay:3});
TweenLite.to(".wifiA", 1, { left:728, ease:Power2.easeIn, delay:3});
TweenLite.to(".wifiB", 1, { left:728, ease:Power2.easeIn, delay:3});
TweenLite.to(".wifiC", 1, { left:728, ease:Power2.easeIn, delay:3});
TweenLite.to(".wifiD", 1, { left:728, ease:Power2.easeIn, delay:3});
TweenLite.to(".card", 0.1, { opacity:0, ease:Power2.easeIn, delay:4});
TweenLite.to(".card", 0.1, { left: -300, top:-3, scale:0.9, rotation: 0, ease:Power2.easeIn, delay:4.1});
TweenLite.to(".card", 0.1, { opacity:1, ease:Power2.easeIn, delay:4.2});

TweenLite.to(".text01", 1, { opacity:0, ease:Power2.easeOut, delay:3});

TweenLite.from(".computer", 0.5, { opacity:0, ease:Power2.easeOut, delay:4.5});
TweenLite.to(".card", 1, { left:222, ease:Power2.easeOut, delay:5.25});
TweenLite.to(".card", 1, { left:600, ease:Power2.easeIn, delay:6.25});
TweenLite.from(".computer2", 0.1, { opacity:0, ease:Power2.easeOut, delay:6.24});

TweenLite.from(".text02", 1, { opacity:0, ease:Power2.easeOut, delay:5});

TweenLite.to(".computer2", 1.25, { left:500, ease:Power2.easeOut, delay:8});
TweenLite.to(".computer", 1.25, { left:500, ease:Power2.easeOut, delay:8});
TweenLite.from("#banner", 1.25, { left:-728, ease:Power2.easeOut, delay:9});

TweenLite.to(".text02", 1, { opacity:0, ease:Power2.easeOut, delay:8});
TweenLite.from(".text03", 1, { opacity:0, ease:Power2.easeOut, delay:10});


TweenLite.to("#banner", 1.25, { left:600, ease:Power2.easeOut, delay:15});
TweenLite.from(".card2", 1, { left:-728, ease:Power2.easeOut, delay:16});
TweenLite.from(".text04", 1, { opacity:0, ease:Power2.easeOut, delay:17});
TweenLite.from(".text05", 1, { opacity:0, ease:Power2.easeOut, delay:18});
TweenLite.from(".cta", 1, { opacity:0, ease:Power2.easeOut, delay:19});

TweenLite.to(".text03", 1, { opacity:0, ease:Power2.easeOut, delay:15});


var t=1.5;
var cta=document.getElementById('cta');
window.onload = function () {
  TweenLite.set("#graphics", {transformOrigin:"251px 45px"});
  TweenLite.set("#content", {autoAlpha:1});
  TweenLite.to("#transferline", 10, {backgroundPosition:"500px 0px", ease:Power0.easeIn});
  TweenLite.delayedCall(10, scene1);
};

function scene1(e){
  
  TweenLite.to("#dollar", 0.5, {scale:0, ease:Power3.easeIn});
  TweenLite.set("#dollar", {x:26, delay:0.5});
  TweenLite.to("#dollar", 2, {x:114, delay:0.5, ease:Linear.easeOut});
  TweenLite.to("#dollar", 0.2, {scale:1, ease:Power2.easeOut, delay:0.5});
  TweenLite.to("#dollar", 0.4, {scale:0.8, ease:Power1.easeInOut, delay:0.7});
  TweenLite.to("#dollar", 0.4, {scale:1, ease:Power1.easeInOut, delay:1.1});
  TweenLite.to("#dollar", 0.4, {scale:0.8, ease:Power1.easeInOut, delay:1.5});
  TweenLite.to("#dollar", 0.4, {scale:1, ease:Power1.easeInOut, delay:1.9});
  TweenLite.to("#dollar", 0.2, {scale:0, ease:Power2.easeIn, delay:2.3});
  TweenLite.set("#dollar", {x:140, delay:2.51});
  TweenLite.to("#dollar", 0.5, {scale:1, ease:Power3.easeOut, delay:2.51});
  

  
}



