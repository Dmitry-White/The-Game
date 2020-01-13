(function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=7)})([function(e,t){'use strict';var a=Math.floor;t.a=class{static getRandomInt(e,t){return e=Math.ceil(e),t=a(t),a(Math.random()*(t-e))+e}static getRandomFloat(e,t){return e+Math.random()*(t+1-e)}}},function(e,t){'use strict';t.a=class{constructor(e,t,a){this.image=new Image,this.image.src=e,this.width=t,this.height=a}}},function(e,t,a){'use strict';var o=a(0),n=a(4),i=a(1);class s{constructor(e,t,a,o,n,s){this.CIRCLE=s,this.player=e,this.map=t,this.x=a,this.y=o,this.pic_num=n,this.color='#cf3c8c',this.texture=new i.a('img/npc/npc-'+n+'.png',114,300),this.height=.6,this.width=.225,this.floorOffset=0,this.count=0,this.direction=1,this.speed=.7,this.alive=!0,this.found_paper=!1,this.taking_paper=!1,this.paper_near_person=0}logic(){this.alive&&(270<this.count&&(this.direction+=o.a.getRandomFloat(-(this.CIRCLE/6),this.CIRCLE/6),this.count=0),this.searchForPaper(),this.found_paper||this.taking_paper||this.wonderAround())}wonderAround(){this.count+=1,this.run(),this.walk(0.05*this.speed,this.direction)}run(){let e=this.distTo(this.player);2>e?(this.speed=3,this.direction=-this.player.direction):this.speed=.7}walk(e,t){const a=Math.cos(t)*e,o=Math.sin(t)*e,n=this.map.get(this.x+a,this.y),i=this.map.get(this.x,this.y+o);(2==n||2==i||1==n||1==i)&&(this.direction=t+this.CIRCLE/6);0>=n&&(this.x+=a),0>=i&&(this.y+=o),this.move('img/npc/npc')}move(e){0==this.count%10&&(0==this.count%20?this.texture=new i.a(e+'2-'+this.pic_num+'.png',114,300):this.texture=new i.a(e+'-'+this.pic_num+'.png',114,300))}searchForPaper(){let e,t,a,o;this.map.objects.some((i)=>{i instanceof n.a&&(o=i,e=this.x-o.x,t=this.y-o.y,a=this.distTo(o),this.isNearPaper(a,o,e,t))})}isNearPaper(e,t,a,o){5>e&&3<this.distTo(this.player)?(this.paper=t,this.found_paper=!0,0.3>e?this.takingPaper():this.approachPaper(a,o)):this.found_paper=!1}takingPaper(){this.speed=0,this.taking_paper=!0,this.takePaper()}takePaper(){if(this.paper_near_person++,70===this.paper_near_person){let e=this.map.objects.indexOf(this.paper);-1!==e&&this.map.objects.splice(e,1),this.map.objects.forEach((e)=>{e instanceof s&&(e.found_paper=!1,e.taking_paper=!1,e.paper_near_person=0)}),this.showTakenMessage()}}approachPaper(e,t){let a;a=7e-3*this.speed,0<=e?this.x-=a:this.x+=a,0<=t?this.y-=a:this.y+=a,this.count+=0.5,this.move('img/npc/npc')}die(){this.texture=new i.a('img/npc/npc_die.gif',114,300),setTimeout(()=>{this.texture=new i.a('img/npc/npc3-'+this.pic_num+'.png',300,56),this.height=.2,this.width=0.7},7e3)}distTo(e){const t=e.x-this.x,a=e.y-this.y;return Math.sqrt(t*t+a*a)}showTakenMessage(){this.map.show_taken=1,setTimeout(()=>{this.map.show_taken=0},3e3)}}t.a=s},function(e,t,a){'use strict';var o=a(1);t.a=class{constructor(e){this.texture=e.texture||new o.a('img/trees/tree_1.png',639,1500),this.height=e.height||1,this.width=0.5,this.x=e.x,this.y=e.y}}},function(e,t){'use strict';t.a=class{constructor(e,t,a){this.color='#fff',this.x=e,this.y=t,this.height=0.2,this.width=0.2,this.texture=a}}},function(e,t){'use strict';t.a=class{constructor(e){this.game=e,this.sound_end=!0,this.ending={0:'come_out',1:'lululala'},soundManager.setup({url:'./soundmanager2/',onready:()=>{const e=soundManager.createSound({id:'piano_menu_ambient',url:'sounds/ambient/piano_menu_ambient.mp3'}),t=soundManager.createSound({id:'static_menu_ambient',url:'sounds/ambient/static_menu_ambient.mp3',volume:50}),a=soundManager.createSound({id:'slender_logo_hover',url:'sounds/menu/slender_logo_hover.mp3'}),o=soundManager.createSound({id:'play_button_hover',url:'sounds/menu/play_button_hover.mp3'}),n=soundManager.createSound({id:'ho_ho_ho',url:'sounds/menu/ho_ho_ho.mp3'}),i=soundManager.createSound({id:'about_us',url:'sounds/menu/about_us.mp3'}),s=soundManager.createSound({id:'about_game',url:'sounds/menu/about_game.mp3'}),d=soundManager.createSound({id:'wind_ambient',url:'sounds/ambient/wind_ambient.mp3'}),r=soundManager.createSound({id:'forward_step',url:'sounds/walking/forward_step.mp3'}),l=soundManager.createSound({id:'backward_step',url:'sounds/walking/backward_step.mp3'}),p=soundManager.createSound({id:'dodge_step_0',url:'sounds/walking/dodge_step_0.mp3'}),u=soundManager.createSound({id:'dodge_step_1',url:'sounds/walking/dodge_step_1.mp3'}),h=soundManager.createSound({id:'running',url:'sounds/walking/running.mp3'}),m=soundManager.createSound({id:'rain_ambient',url:'sounds/ambient/rain_ambient.mp3',volume:80}),_=soundManager.createSound({id:'rain_forward_step',url:'sounds/walking/rain_forward_step.mp3'}),g=soundManager.createSound({id:'rain_backward_step',url:'sounds/walking/rain_backward_step.mp3'}),c=soundManager.createSound({id:'rain_step',url:'sounds/walking/rain_step.mp3'}),w=soundManager.createSound({id:'rain_dodge_step_0',url:'sounds/walking/rain_dodge_step_0.mp3'}),b=soundManager.createSound({id:'rain_dodge_step_1',url:'sounds/walking/rain_dodge_step_1.mp3'}),x=soundManager.createSound({id:'rain_running',url:'sounds/walking/rain_running.mp3'}),f=soundManager.createSound({id:'ghost_scream',url:'sounds/ending/ghost_scream.mp3'}),y=soundManager.createSound({id:'come_out',url:'sounds/ending/come_out.mp3'}),S=soundManager.createSound({id:'lululala',url:'sounds/ending/lululala.mp3'})}})}loopSound(e){soundManager.play(e,{multiShotEvents:!0,onfinish:()=>{this.loopSound(e)}})}makeSound(e){this.sound_end=!1,soundManager.play(e,{multiShotEvents:!0,onfinish:()=>{this.obj_sound_end=!0,this.sound_end=!0}})}playEnding(e){soundManager.play(this.ending[e],{onfinish:()=>{location.reload()}})}}},function(e,t,a){'use strict';var o=Math.pow,n=Math.cos,d=Math.floor,i=Math.ceil,s=a(3),r=a(0);t.a=class{constructor(e,t,a,o,n,i,s){this.CIRCLE=n,this.PAPER_NUM=s,this.mode=o,this.ctx=e.getContext('2d'),this.width=e.width=window.innerWidth,this.height=e.height=window.innerHeight,this.resolution=t,this.map=i,this.spacing=this.width/t,this.fov=a,this.range=14,this.scale=(this.width+this.height)/1200}render(e,t){this.drawSky(e.direction,t.skybox,t.light),this.drawColumns(e,t),this.drawWeapon(e.left_hand,e.right_hand,e.paces,e.grab_dist,e.put_dist),this.drawMiniMap(e,t),this.drawNumber(),this.drawPaper(),this.drawNoPaper(),this.drawLoo(),this.drawBomb(),this.drawTip(),this.drawWarning(),this.drawDie(),this.drawTaken(),this.drawAllDead()}drawSky(e,t,a){const o=2*(t.width*(this.height/t.height)),n=-o*e/this.CIRCLE;this.ctx.save(),this.ctx.drawImage(t.image,n,0,o,this.height),n<o-this.width&&this.ctx.drawImage(t.image,n+o,0,o,this.height),0<a&&(this.ctx.fillStyle=this.mode.ground,this.ctx.globalAlpha=a*this.mode.param,this.ctx.fillRect(0,0.5*this.height,this.width,0.5*this.height)),this.ctx.restore()}drawColumn(e,t,a,n){this.lightRange=this.mode.lightRange;const r=this.ctx,l=d(e*this.spacing),p=i(this.spacing);let u,h,m=n.wallTexture,_=-1,g=[];for(;++_<t.length&&0>=t[_].height;);for(let i=t.length-1;0<=i;i--){h=t[i],3===h.height?(m=n.fenceDoorTexture,h.height=1):2===h.height?(m=n.fenceTexture,h.height=1):m=n.wallTexture;let e=0;e=this.mode.winter?3:i;let s=o(Math.random(),this.mode.drops_amount)*e;const c=0<s&&this.project(0.1,a,h.distance);let w,b;for(i===_?(w=d(m.width*h.offset),b=this.project(h.height,a,h.distance),r.globalAlpha=1,r.drawImage(m.image,w,0,1,m.height,l,b.top,p,b.height),r.fillStyle=this.mode.shadows,this.shading=h.shading,r.globalAlpha=Math.max((h.distance+h.shading)/this.lightRange-n.light,0),r.fillRect(l,b.top,p,b.height),u=h.distance):h.object&&g.push({object:h.object,distance:h.distance,offset:h.offset,angle:a}),r.fillStyle=this.mode.drops,r.globalAlpha=this.mode.drops_opacity;0<--s;)r.fillRect(l,Math.random()*c.top,this.mode.particlesWidth,this.mode.particlesHeight)}return{objects:g,hit:u}}drawColumns(e,t){this.ctx.save();let a=[];for(let o=0;o<this.resolution;o++){let n=this.fov*(o/this.resolution-0.5),i=t.cast(e,e.direction+n,this.range),s=this.drawColumn(o,i,n,t);a.push(s)}this.drawSprites(e,t,a),this.ctx.restore()}drawSprites(e,t,a){const n=this.width,i=this.height,s=n/this.fov,r=this.resolution;this.setSpriteDistances(t.objects,e);let l=Array.prototype.slice.call(t.objects).map((t)=>{const a=t.x-e.x,l=t.y-e.y,p=t.width*n/t.distanceFromPlayer,u=t.height*i/t.distanceFromPlayer,h=t.floorOffset/t.distanceFromPlayer,m=Math.atan2(l,a),_=i/2*(1+1/t.distanceFromPlayer)-u;let g=e.direction-m;g>=this.CIRCLE/2&&(g-=this.CIRCLE);const c=this.width/2-s*g,w=d((c-p/2)/n*r);return t.distanceFromPlayer=Math.sqrt(o(a,2)+o(l,2)),t.render={width:p,height:u,angleToPlayer:g,cameraXOffset:c,distanceFromPlayer:t.distanceFromPlayer,numColumns:p/n*r,firstColumn:w,top:_},t}).sort((e,t)=>{return e.distanceFromPlayer<t.distanceFromPlayer?1:e.distanceFromPlayer>t.distanceFromPlayer?-1:0});this.ctx.save();for(let o=0;o<this.resolution;o++)this.drawSpriteColumn(e,t,o,a[o],l);this.ctx.restore()}drawSpriteColumn(e,t,a,o,n){const s=this.ctx,r=d(a*this.spacing),l=i(this.spacing),p=this.width/this.resolution;let u,h,m,_=this.fov*(a/this.resolution-0.5);n=n.filter((e)=>{return!o.hit||e.distanceFromPlayer<o.hit});for(let p=0;p<n.length;p++)u=n[p],m=r>u.render.cameraXOffset-u.render.width/2&&r<u.render.cameraXOffset+u.render.width/2,m&&(h=d(u.texture.width/u.render.numColumns*(a-u.render.firstColumn)),s.drawImage(u.texture.image,h,0,1,u.texture.height,r,u.render.top,l,u.render.height),this.ctx.fillStyle='#000',this.ctx.globalAlpha=1)}setSpriteDistances(e){for(let t=0;t<e.length;t++)e[t]}drawWeapon(e,t,a,o,i){const s=6*(n(2*a)*this.scale),d=6*(Math.sin(4*a)*this.scale),r=0.6*this.width+s,l=0.15*this.width+s,p=0.6*this.height+d;this.ctx.drawImage(e.image,l+o,p+i,e.width*this.scale,e.height*this.scale),this.ctx.drawImage(t.image,r-o,p+i,t.width*this.scale,t.height*this.scale)}drawMiniMap(e,t){const a=this.ctx,o=.2*this.width,n=this.width-o-10,s=10,r=o/t.size,i=n+e.x/t.size*o,l=s+e.y/t.size*o;a.save(),a.globalAlpha=.5,a.fillRect(n,s,o,o),a.globalAlpha=.5,a.fillStyle='#4c8847';for(let o=0;o<t.size*t.size;o++)if(t.wallGrid[o]){a.fillStyle=2===t.wallGrid[o]?'#35384b':'#4c8847';let e=d(o/t.size),i=o-t.size*e;a.fillRect(n+r*i,s+r*e,r,r)}a.save();for(let o=0;o<t.objects.length;o++)t.objects[o]&&(1===t.objects[o]&&(a.fillStyle=t.objects[o].color),a.globalAlpha=t.objects[o].logic?.8:.3,void 0===t.objects[o].color&&(a.globalAlpha=0),a.fillStyle=t.objects[o].color||'red',a.fillRect(n+r*(t.objects[o].x-0.5)+.25*r,s+r*(t.objects[o].y-0.5)+.25*r,.5*r,.5*r));a.restore(),a.globalAlpha=1,a.fillStyle='#fff',a.moveTo(i,l),a.translate(i,l),a.rotate(e.direction-.5*Math.PI),a.beginPath(),a.lineTo(-2,-3),a.lineTo(0,2),a.lineTo(2,-3),a.fill(),a.restore()}drawNumber(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=1,this.ctx.fillStyle=this.mode.winter?'#000':'#fff';let e='Humans: '+this.map.people;this.ctx.fillText(e,60,80),this.ctx.restore()}drawPaper(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=1,this.ctx.fillStyle=this.mode.winter?'#000':'#fff';let e='Papers: '+(this.PAPER_NUM-this.map.papers);this.ctx.fillText(e,60,160),this.ctx.restore()}drawNoPaper(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=this.map.show_no_paper,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText('No papers left. Use your hands!',this.width/4,80),this.ctx.restore()}drawLoo(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=this.map.show_loo,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText('Ooops, not this one :)',this.width/3,80),this.ctx.restore()}drawBomb(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=this.map.show_bomb,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText('Rush B! Terrorists always win!',this.width/4,80),this.ctx.restore()}drawTip(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=this.map.show_tip,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText('Step back, let them approach.',this.width/4,80),this.ctx.restore()}drawWarning(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=this.map.show_warning,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText('Stand still to place paper.',this.width/3,80),this.ctx.restore()}drawDie(){this.ctx.save(),this.ctx.font='80px DieDieDie',this.ctx.globalAlpha=this.map.show_die,this.ctx.fillStyle=this.mode.winter?'#000':'#fff';let e,t;for(let a=1;30>a;a++)e=r.a.getRandomInt(0,11),t=r.a.getRandomInt(0,9),this.ctx.fillText('Die!',this.width/10*e,this.height/8*t);this.ctx.restore()}drawTaken(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=this.map.show_taken,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText('They took your paper!',this.width/3,80),this.ctx.restore()}drawAllDead(){this.ctx.save(),this.ctx.font='50px DieDieDie',this.ctx.globalAlpha=this.map.show_all_dead,this.ctx.fillStyle=this.mode.winter?'#000':'#fff',this.ctx.fillText('They\'re all dead! Live another day...',this.width/4,80),this.ctx.restore()}project(e,t,a){const o=a*n(t),i=this.height*e/o,s=this.height/2*(1+1/o);return{top:s-i,bottom:s,height:i}}}},function(e,t,a){'use strict';Object.defineProperty(t,'__esModule',{value:!0});var o=a(8);const n=document.querySelector('.snow'),i=document.querySelector('#checkbox'),s=document.querySelector('#play'),d=document.querySelector('.menu'),r=()=>{d.classList.add('fadeOut'),setTimeout(()=>d.classList.add('none'),700)};document.addEventListener('DOMContentLoaded',()=>{const e=new o.a;e.loadSounds(),e.enableMenuSounds(),e.setToVanilla();const t=()=>{soundManager.stopAll(),e.sounds.sound_end=!0};i.addEventListener('change',()=>{i.checked?(n.classList.add('block'),e.sounds.makeSound('ho_ho_ho'),e.setToWinter()):(n.classList.remove('block'),e.setToVanilla())}),s.addEventListener('click',()=>{t(),r(),e.loadGame()})})},function(e,t,a){'use strict';var o=a(9),n=a(0),i=a(5),s=a(10),d=a(2),r=a(11),l=a(6),p=a(12),u=a(13),h=a(14),m=a(15),_=a.n(m);const g=document.querySelector('.intro'),c=document.querySelector('.text'),w=document.querySelector('#display'),b=document.querySelector('.text h1'),x=document.querySelector('#play'),f=document.querySelector('#logo'),y=document.querySelector('#about_us'),S=document.querySelector('#about_game');t.a=class{constructor(){this.CIRCLE=2*Math.PI,this.PAPER_NUM=8,this.PPL_NUM=8,this.PPL_XY=30,this.MAP_SIZE=32,this.RESOLUTION=640,this.mode={},this.game_ending=!1,this.papers=m.assets.papers,this.trees=m.assets.rain_trees,this.bushes=m.assets.rain_bushes,this.sounds=new i.a(this)}loadGame(){this.map=new o.a(this.MAP_SIZE,this.mode),this.camera=new l.a(w,this.RESOLUTION,0.8,this.mode,this.CIRCLE,this.map,this.PAPER_NUM),this.loop=new u.a(this,this.endGame),this.noises=new s.a,this.obj_sounds=new h.a(this,this.map,this.mode),this.player=new r.a({x:1.5,y:1.5,direction:1.57,game:this}),this.controls=new p.a(this.player),this.setMode(),this.addPeople(),this.map.buildMap(this.trees,this.bushes),g.classList.add('block'),this.enterFS(g),g.play(),setTimeout(()=>{this.exitFS(g),g.pause(),g.classList.remove('block'),c.classList.add('flex'),this.mouseLock(),soundManager.play('entering_area',{multiShotEvents:!0,onfinish:()=>{this.startGame()}})},28000)}startGame(){c.classList.remove('flex'),w.classList.add('block'),this.loop.start((e)=>{this.mode.lightning&&this.map.lightning(e),this.map.update(),this.changeAmbient(),this.player.update(this.controls.states,this.map,e),this.camera.render(this.player,this.map),this.checkEnding()})}endGame(){const e=n.a.getRandomInt(0,2);soundManager.stopAll(),this.game.sounds.playEnding(e),this.game.showEndingScreen()}makeEndmode(){this.map.light=2,this.mode.param=20,this.mode.drops='#f00',this.mode.ground='#f00',this.mode.lightning=!1,this.mode.drops_opacity=1,this.mode.particlesWidth=10,this.mode.particlesHeight=10}checkEnding(){0==this.map.people&&this.obj_sounds.obj_sound_end&&(this.map.show_all_dead=1,this.map.show_loo=0,this.map.show_bomb=0,this.map.show_tip=0,this.map.show_warning=0,setTimeout(()=>{this.map.show_all_dead=0},3e3),this.makeEndmode(),this.obj_sounds.playScream())}showEndingScreen(){c.classList.add('flex'),b.innerHTML='Do you want to play more?',b.setAttribute('data-text','Do you want to kiLL more?'),w.classList.remove('block')}setMode(){this.mode.winter?(this.sounds.loopSound('wind_ambient'),this.trees=m.assets.trees,this.bushes=m.assets.bushes):this.sounds.loopSound('rain_ambient')}addPeople(){for(let e=0;e<this.PPL_NUM;e++){let e=n.a.getRandomInt(2,this.PPL_XY),t=n.a.getRandomInt(2,this.PPL_XY),a=n.a.getRandomInt(1,5);this.map.addObject(new d.a(this.player,this.map,e,t,a,this.CIRCLE)),this.map.people++}}changeAmbient(){if(this.noises.noises_end){const e=n.a.getRandomInt(0,4);this.noises.playNoises(e)}}enterFS(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()}exitFS(e){e.exitFullscreen?e.exitFullscreen():e.mozExitFullScreen?e.mozExitFullScreen():e.webkitExitFullscreen&&e.webkitExitFullscreen()}mouseLock(){document.body.requestPointerLock?document.body.requestPointerLock():document.body.mozRequestPointerLock?document.body.mozRequestPointerLock():document.body.webkitRequestPointerLock&&document.body.webkitRequestPointerLock()}setToWinter(){this.mode.winter=!0,this.mode.light=1,this.mode.lightning=!1,this.mode.lightRange=5,this.mode.shadows='#fff',this.mode.drops='#fff',this.mode.drops_opacity=1,this.mode.drops_amount=100,this.mode.ground='#fff',this.mode.param=0.5,this.mode.particlesWidth=6,this.mode.particlesHeight=6,this.mode.fence_texture='img/snow/fence_snow.png',this.mode.sky_texture='img/snow/sky_panorama_snow.jpg',this.mode.wall_texture='img/snow/wall_texture_snow.jpg'}setToVanilla(){this.mode.winter=!1,this.mode.light=2,this.mode.lightning=!0,this.mode.lightRange=5,this.mode.shadows='#000',this.mode.drops='#fff',this.mode.drops_opacity=0.15,this.mode.drops_amount=30,this.mode.ground='#56361f',this.mode.param=0.1,this.mode.particlesWidth=2,this.mode.particlesHeight=20,this.mode.sky_texture='img/rain/rain_sky_panorama.jpg',this.mode.fence_texture='img/rain/rain_fence.jpg',this.mode.wall_texture='img/rain/rain_wall_texture.jpg'}loadSounds(){soundManager.load('piano_menu_ambient'),soundManager.load('static_menu_ambient'),soundManager.load('slender_logo_hover'),soundManager.load('play_button_hover'),soundManager.load('ho_ho_ho'),soundManager.load('about_us'),soundManager.load('about_game'),soundManager.load('wind_ambient'),soundManager.load('forward_step'),soundManager.load('backward_step'),soundManager.load('dodge_step_0'),soundManager.load('dodge_step_1'),soundManager.load('running'),soundManager.load('rain_ambient'),soundManager.load('rain_forward_step'),soundManager.load('rain_backward_step'),soundManager.load('rain_step'),soundManager.load('rain_dodge_step_0'),soundManager.load('rain_dodge_step_1'),soundManager.load('rain_running'),soundManager.load('entering_area'),soundManager.load('hitting_the_fence'),soundManager.load('hitting_the_rain_fence'),soundManager.load('hitting_the_wall'),soundManager.load('placing_paper'),soundManager.load('placing_loo_paper'),soundManager.load('placing_bomb'),soundManager.load('slashing'),soundManager.load('killing'),soundManager.load('ghost_in_the_house'),soundManager.load('just_horror_ambient'),soundManager.load('weird_noises'),soundManager.load('scary_piano'),soundManager.load('ghost_scream'),soundManager.load('come_out'),soundManager.load('lululala')}enableMenuSounds(){this.sounds.loopSound('piano_menu_ambient'),this.sounds.loopSound('static_menu_ambient');const e=(e,t)=>{this.sounds.loopSound(e),t&&soundManager.mute(t)},t=(e,t)=>{soundManager.stop(e),t&&soundManager.unmute(t)};x.addEventListener('mouseover',()=>e('play_button_hover')),x.addEventListener('mouseout',()=>t('play_button_hover')),f.addEventListener('mouseover',()=>e('slender_logo_hover')),f.addEventListener('mouseout',()=>t('slender_logo_hover')),y.addEventListener('mouseover',()=>e('about_us','piano_menu_ambient')),y.addEventListener('mouseout',()=>t('about_us','piano_menu_ambient')),S.addEventListener('mouseover',()=>e('about_game','piano_menu_ambient')),S.addEventListener('mouseout',()=>t('about_game','piano_menu_ambient'))}}},function(e,t,a){'use strict';var o=Math.floor,n=a(1),i=a(3),s=a(2),d=a(0);t.a=class{constructor(e,t){this.mode=t,this.size=e,this.wallGrid=new Uint8Array(e*e),this.skybox=new n.a(t.sky_texture,2e3,750),this.fenceTexture=new n.a(t.fence_texture,512,512),this.fenceDoorTexture=new n.a('img/fence_door_0.jpg',512,256),this.wallTexture=new n.a(t.wall_texture,512,512),this.light=this.mode.light,this.objects=[],this.people=0,this.papers=0,this.show_no_paper=0,this.show_loo=0,this.show_bomb=0,this.show_tip=0,this.show_warning=0,this.show_die=0,this.show_taken=0,this.show_all_dead=0}get(e,t){return e=o(e),t=o(t),0>e||e>this.size-1||0>t||t>this.size-1?-1:this.wallGrid[t*this.size+e]}addTrees(e,t,a){if(0==this.get(t,a)){const o=d.a.getRandomInt(0,4);this.addObject(new i.a({texture:new n.a(e[o].texture,e[o].width,e[o].height),x:t,y:a}))}}addBushes(e,t,a){if(0==this.get(t,a)){const o=d.a.getRandomInt(0,5);this.addObject(new i.a({texture:new n.a(e[o].texture,e[o].width,e[o].height),height:0.5,x:t,y:a}))}}buildMap(e,t){let a,n;this.wallGrid.fill(0);for(let s=0;s<this.size*this.size;s++)a=o(s/this.size),n=s-this.size*a,1!==a&&a!==this.size-2&&1!==n&&n!==this.size-2&&(0.2<Math.random()&&(0.5<Math.random()?this.addBushes(t,n+1.5,a+1.5):this.addTrees(e,n+1.5,a+1.5)),0.7<Math.random()&&(this.wallGrid[s]=1)),(0===a||a===this.size-1||0===n||n===this.size-1)&&(this.wallGrid[s]=2);this.wallGrid[1]=3}cast(e,t,a){function n(e){const t=i(r,l,e.x,e.y),o=i(l,r,e.y,e.x,!0),d=t.length2<o.length2?s(t,1,0,e.distance,t.y):s(o,0,1,e.distance,o.x);return d.distance>a?[e]:[e].concat(n(d))}function i(e,t,a,n,i){if(0===t)return p;const s=0<t?o(a+1)-a:Math.ceil(a-1)-a,d=s*(e/t);return{x:i?n+d:a+s,y:i?a+s:n+d,length2:s*s+d*d}}function s(e,t,a,n,i){const s=0>l?t:0,p=0>r?a:0;return e.height=d.get(e.x-s,e.y-p),e.distance=n+Math.sqrt(e.length2),e.object=d.getObject(e.x-s,e.y-p),e.shading=t?0>l?2:0:0>r?2:1,e.offset=i-o(i),e}const d=this,r=Math.sin(t),l=Math.cos(t),p={length2:Infinity};return n({x:e.x,y:e.y,height:0,distance:0})}lightning(e){0<this.light?this.light=Math.max(this.light-10*e,0):5*Math.random()<e&&(this.light=2)}update(){this.objects.forEach((e)=>{e instanceof s.a&&e.logic()})}addObject(e){this.objects.push(e)}getObject(e,t){return e=o(e),t=o(t),this.objects[t*this.size+e]}}},function(e,t){'use strict';t.a=class{constructor(){this.noises_end=!0,this.noises={0:'ghost_in_the_house',1:'just_horror_ambient',2:'weird_noises',3:'scary_piano'},soundManager.setup({url:'./soundmanager2/',onready:()=>{const e=soundManager.createSound({id:'ghost_in_the_house',url:'sounds/ambient/ghost_in_the_house.mp3'}),t=soundManager.createSound({id:'just_horror_ambient',url:'sounds/ambient/just_horror_ambient.mp3'}),a=soundManager.createSound({id:'weird_noises',url:'sounds/ambient/weird_noises.mp3'}),o=soundManager.createSound({id:'scary_piano',url:'sounds/ambient/scary_piano.mp3'})}})}playNoises(e){this.noises_end=!1,soundManager.play(this.noises[e],{multiShotEvents:!0,onfinish:()=>{this.noises_end=!0}})}}},function(e,t,a){'use strict';var o=Math.PI,n=a(4),i=a(1),s=a(0),d=a(2),r=a(6);t.a=class{constructor(e){this.x=e.x,this.y=e.y,this.direction=e.direction,this.CIRCLE=e.game.CIRCLE,this.PAPER_NUM=e.game.PAPER_NUM,this.papers=e.game.papers,this.map=e.game.map,this.sounds=e.game.sounds,this.obj_sounds=e.game.obj_sounds,this.mode=e.game.mode,this.game=e.game,this.right_hand=new i.a('img/slender/right_hand.png',200,200),this.left_hand=new i.a('img/slender/left_hand.png',200,200),this.paces=0,this.prev_paper_place=[0,0],this.speed=1,this.hitting_the_fence=!1,this.hitting_the_wall=!1,this.grab_dist=0,this.grab_state=!1,this.put_dist=0,this.put_state=!1}rotate(e){this.direction=(this.direction+e+this.CIRCLE)%this.CIRCLE}walk(e,t,a){const o=Math.cos(a)*e,n=Math.sin(a)*e,i=t.get(this.x+o,this.y),s=t.get(this.x,this.y+n);2==i||2==s?(this.hitting_the_fence=!0,this.hitObject(),this.hitting_the_fence=!1):(1==i||1==s)&&(this.hitting_the_wall=!0,this.hitObject(),this.hitting_the_wall=!1),0>=i&&(this.x+=o),0>=s&&(this.y+=n),this.paces+=e}update(e,t,a){this.running=e.shift,this.walking=e.forward||e.backward||e.sideLeft||e.sideRight,e.left&&this.rotate(-o*a),e.right&&this.rotate(o*a),e.forward&&(this.walkSound(),this.walk(this.speed*a,t,this.direction)),e.backward&&(this.walkSound(),this.walk(-this.speed*a,t,this.direction)),e.sideLeft&&(this.dodgeSound(),this.walk(this.speed/2*a,t,this.direction-o/2)),e.sideRight&&(this.dodgeSound(),this.walk(-(this.speed/2)*a,t,this.direction-o/2)),this.grab(),this.put(),this.speed=e.shift?3:1}grab(){!0===this.grab_state&&300>this.grab_dist?this.grab_dist+=50:(this.grab_state=!1,0!=this.grab_dist&&(this.grab_dist-=25))}put(){!0===this.put_state&&400>this.put_dist?this.put_dist+=30:(this.put_state=!1,0!=this.put_dist&&(this.put_dist-=15))}snowWalkSound(){this.sounds.sound_end&&(this.running?this.sounds.makeSound('running'):0.5<Math.random()?this.sounds.makeSound('forward_step'):this.sounds.makeSound('backward_step'))}snowDodgeSound(){this.sounds.sound_end&&(0.5<Math.random()?this.sounds.makeSound('dodge_step_0'):this.sounds.makeSound('dodge_step_1'))}rainWalkSound(){this.sounds.sound_end&&(this.running?this.sounds.makeSound('rain_running'):0.2<Math.random()?0.5<Math.random()?this.sounds.makeSound('rain_forward_step'):this.sounds.makeSound('rain_backward_step'):this.sounds.makeSound('rain_step'))}rainDodgeSound(){this.sounds.sound_end&&(0.5<Math.random()?this.sounds.makeSound('rain_dodge_step_0'):this.sounds.makeSound('rain_dodge_step_1'))}hitObject(){this.mode.winter?this.snowHit():this.rainHit()}snowHit(){this.obj_sounds.obj_sound_end&&(this.hitting_the_fence?this.obj_sounds.makeSound('hitting_the_fence'):this.hitting_the_wall&&this.obj_sounds.makeSound('hitting_the_wall'))}rainHit(){this.obj_sounds.obj_sound_end&&(this.hitting_the_fence?(this.obj_sounds.makeSound('hitting_the_rain_fence'),this.hitting_the_fence=!1):this.hitting_the_wall&&(this.obj_sounds.makeSound('hitting_the_wall'),this.hitting_the_wall=!1))}walkSound(){this.mode.winter?this.snowWalkSound():this.rainWalkSound()}dodgeSound(){this.mode.winter?this.snowDodgeSound():this.rainDodgeSound()}dosmth(e){'attack'===e&&(this.grab_state=!0,this.attack()),'space'===e&&(this.put_state=!0,this.placePaper()),'escape'===e&&location.reload()}attack(){let e,t,a,o=!1;this.map.objects.some((n)=>{if(n instanceof d.a&&n.alive&&(a=n,e=this.x-a.x,t=this.y-a.y,0.5>Math.sqrt(e*e+t*t)))return o=!0}),o?this.eat(a):this.obj_sounds.obj_sound_end&&this.obj_sounds.makeSound('slashing')}eat(e){this.obj_sounds.makeSound('killing'),e.alive=!1,e.color=void 0,e.die(),this.map.people--,this.showDieMessage()}placePaper(){if(this.map.papers>=this.PAPER_NUM)this.showNoPaperMessage();else{let e=this.prev_paper_place[0]===this.x&&this.prev_paper_place[1]===this.y;if(!this.running&&!this.walking&&this.sounds.sound_end&&!e){const e=s.a.getRandomInt(0,8);this.map.addObject(new n.a(this.x,this.y,new i.a(this.papers[e].texture,this.papers[e].width,this.papers[e].height))),0===e?(this.obj_sounds.makeSound('placing_loo_paper'),this.showLooMessage()):7===e?(this.obj_sounds.makeSound('placing_bomb'),this.showBombMessage()):(this.obj_sounds.makeSound('placing_paper'),this.showPaperMessage()),this.prev_paper_place=[this.x,this.y],this.map.papers++}else this.showWarningMessage()}}showNoPaperMessage(){this.map.show_no_paper=1,this.map.show_loo=0,this.map.show_bomb=0,this.map.show_tip=0,this.map.show_warning=0,setTimeout(()=>{this.map.show_no_paper=0},3e3)}showLooMessage(){this.map.show_loo=1,this.map.show_bomb=0,this.map.show_tip=0,this.map.show_warning=0,setTimeout(()=>{this.map.show_loo=0},3e3)}showBombMessage(){this.map.show_loo=0,this.map.show_bomb=1,this.map.show_tip=0,this.map.show_warning=0,setTimeout(()=>{this.map.show_bomb=0},3e3)}showPaperMessage(){this.map.show_loo=0,this.map.show_bomb=0,this.map.show_tip=1,this.map.show_warning=0,setTimeout(()=>{this.map.show_tip=0},3e3)}showWarningMessage(){this.map.show_loo=0,this.map.show_bomb=0,this.map.show_tip=0,this.map.show_warning=1,setTimeout(()=>{this.map.show_warning=0},3e3)}showDieMessage(){this.map.show_die=1,setTimeout(()=>{this.map.show_die=0},3e3)}}},function(e,t){'use strict';var a=Math.PI;t.a=class{constructor(e){this.player=e,this.codes={13:'enter',16:'shift',27:'escape',32:'space',37:'left',38:'forward',39:'right',40:'backward',65:'sideLeft',68:'sideRight',69:'attack',83:'backward',87:'forward'},this.states={left:!1,right:!1,forward:!1,backward:!1,shift:!1,sideLeft:!1,sideRight:!1},document.addEventListener('keydown',this.onKey.bind(this,!0),!1),document.addEventListener('keyup',this.onKey.bind(this,!1),!1),document.addEventListener('touchstart',this.onTouch.bind(this),!1),document.addEventListener('touchmove',this.onTouch.bind(this),!1),document.addEventListener('touchend',this.onTouchEnd.bind(this),!1),document.addEventListener('mousemove',this.onMouseMovement.bind(this),!1),document.querySelector('canvas').onclick=document.body.requestPointerLock||document.body.mozRequestPointerLock||document.body.webkitRequestPointerLock}onTouch(a){const e=a.touches[0];this.onTouchEnd(a),e.pageY<0.5*window.innerHeight?this.onKey(!0,{keyCode:38}):e.pageX<0.5*window.innerWidth?this.onKey(!0,{keyCode:37}):e.pageY>0.5*window.innerWidth&&this.onKey(!0,{keyCode:39})}onTouchEnd(t){this.states={left:!1,right:!1,forward:!1,backward:!1,sideLeft:!1,sideRight:!1,shift:!1},t.preventDefault(),t.stopPropagation()}onKey(t,a){const e=this.codes[a.keyCode];'undefined'==typeof e||('undefined'==typeof this.states[e]?!0===t&&this.player.dosmth(e):this.states[e]=t,a.preventDefault&&a.preventDefault(),a.stopPropagation&&a.stopPropagation())}onMouseMovement(t){const e=t.movementX||t.mozMovementX||t.webkitMovementX||0;0<e&&this.player.rotate(a/50),0>e&&this.player.rotate(-a/50)}}},function(e,t){'use strict';t.a=class{constructor(e,t){this.game=e,this.endGame=t,this.frame=this.frame.bind(this),this.lastTime=0,this.callback=()=>{}}start(e){return this.callback=e,void requestAnimationFrame(this.frame)}frame(e){const t=(e-this.lastTime)/1e3;return this.lastTime=e,0.2>t&&this.callback(t),this.game.game_ending?void this.endGame():void requestAnimationFrame(this.frame)}}},function(e,t,a){'use strict';var o=a(5);class n extends o.a{constructor(e,t,a){super(),this.game=e,this.map=t,this.mode=a,this.obj_sound_end=!0,soundManager.setup({url:'./soundmanager2/',onready:()=>{const e=soundManager.createSound({id:'entering_area',url:'sounds/objects/entering_area.mp3'}),t=soundManager.createSound({id:'hitting_the_fence',url:'sounds/objects/hitting_the_fence.mp3'}),a=soundManager.createSound({id:'hitting_the_rain_fence',url:'sounds/objects/hitting_the_rain_fence.mp3',volume:50}),o=soundManager.createSound({id:'hitting_the_wall',url:'sounds/objects/hitting_the_wall.mp3'}),n=soundManager.createSound({id:'placing_paper',url:'sounds/objects/placing_paper.mp3'}),i=soundManager.createSound({id:'placing_loo_paper',url:'sounds/objects/placing_loo_paper.mp3',volume:40}),s=soundManager.createSound({id:'placing_bomb',url:'sounds/objects/placing_bomb.mp3'}),d=soundManager.createSound({id:'slashing',url:'sounds/objects/slashing.mp3'}),r=soundManager.createSound({id:'killing',url:'sounds/objects/killing.mp3'})}})}makeSound(e){this.obj_sound_end=!1,super.makeSound(e)}playScream(){this.obj_sound_end=!1,soundManager.play('ghost_scream',{onfinish:()=>{this.game.game_ending=!0}})}}t.a=n},function(e){e.exports={assets:{trees:{0:{texture:'img/trees/tree_0.png',width:200,height:200},1:{texture:'img/trees/tree_1.png',width:200,height:200},2:{texture:'img/trees/tree_2.png',width:200,height:200},3:{texture:'img/trees/tree_3.png',width:200,height:200}},rain_trees:{0:{texture:'img/trees/rain_tree_0.png',width:200,height:200},1:{texture:'img/trees/rain_tree_1.png',width:200,height:200},2:{texture:'img/trees/rain_tree_2.png',width:200,height:200},3:{texture:'img/trees/rain_tree_3.png',width:200,height:200}},bushes:{0:{texture:'img/bushes/bush_0.png',width:200,height:109},1:{texture:'img/bushes/bush_1.png',width:200,height:105},2:{texture:'img/bushes/bush_2.png',width:200,height:311},3:{texture:'img/bushes/bush_3.png',width:200,height:168},4:{texture:'img/bushes/bush_4.png',width:200,height:278}},rain_bushes:{0:{texture:'img/bushes/rain_bush_0.png',width:200,height:152},1:{texture:'img/bushes/rain_bush_1.png',width:200,height:138},2:{texture:'img/bushes/rain_bush_2.png',width:217,height:200},3:{texture:'img/bushes/rain_bush_3.png',width:201,height:200},4:{texture:'img/bushes/rain_bush_4.png',width:200,height:200}},papers:{0:{texture:'img/papers/paper_0.png',width:118,height:100},1:{texture:'img/papers/paper_1.png',width:145,height:100},2:{texture:'img/papers/paper_2.png',width:100,height:100},3:{texture:'img/papers/paper_3.png',width:207,height:100},4:{texture:'img/papers/paper_4.png',width:133,height:100},5:{texture:'img/papers/paper_5.png',width:195,height:100},6:{texture:'img/papers/paper_6.png',width:310,height:100},7:{texture:'img/papers/paper_7.png',width:164,height:100}}}}}]);