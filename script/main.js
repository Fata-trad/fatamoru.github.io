const button=document['querySelector']('#buttonmute');var myAudio=document['getElementById']('audioval');const icon=document['querySelector']('#buttonmute\x20>\x20ul\x20>\x20li\x20>\x20a\x20>\x20i');var verifcircle=0x0;let fata_progress=[['Les\x20Portes',0x5a,0x5a],['Les\x20Fins',0x5,0x5],['Prologue',0x2,0x2],['Coulisse',0x2,0x2]],requiem_progress=[['I:\x20Tales\x20of\x20a\x20Distant\x20Past',49.5,0x32],['Not\x20a\x20Sorrow\x20in\x20the\x20World',49.5,0x32],['II:\x20Whats\x20Past\x20is\x20Prologue',49.5,0x32],['Assento\x20Dele',0x4,0xa],['Happily\x20Ever\x20~After~',0x4,0xa],['Fragment',0x5,0xa],['Short\x20Story:\x20I',0x1e,0x1e],['Coulisse',0x2,0x2]],reinc_progress=[['I:\x20Seeing\x20Glass',0x0,0x32],['II:\x20Chains',0x0,0x32],['III:\x20River\x20Of\x20Oblivion',0x0,0x32],['IV:\x20Epilogue',0x0,0x9],['Short\x20Story:\x20II',0x0,0x32]];var VerifAutoPlay='NON',MyTimerSlider=window['setInterval'](TimerSlider,0x1388),verifscrollrelease;function TimerSlider(){var j=$('input[name=\x22controls\x22]:checked')['val'](),A=0x1;j==0x5?A=0x1:A=parseInt(j)+0x1,$('#button-'+A)['prop']('checked',!![]);}function Play(){myAudio['paused']?myAudio['play']():myAudio['pause']();}function PlaySound(j){var A=document['getElementById'](j);A['currentTime']=0x0,A['play']();}function loadDoc(){updateProgress('navigation',Math['round'](getTotalProgress(fata_progress))/0x64);}function loadDoctest(){var j=document['getElementById']('styles-accueil');j['disabled']==![]?j['disabled']=!![]:j['disabled']=![];}function loadPage(){var j=window['location']['pathname'];if(j=='/download')window['scroll'](0x0,0x0),$('main')['load']('Page/telechargement.html'),$('.absolute-bg')['css']('background-image','none');else{if(j=='/progress')$('main')['load']('Page/progression.html'),$('.absolute-bg')['css']('background-image','none');else{if(j=='/faq')$('main')['load']('Page/FAQ.html'),$('.absolute-bg')['css']('background-image','none');else j=='/credit'?($('main')['load']('Page/credits.html'),$('.absolute-bg')['css']('background-image','none')):($('main')['load']('Page/accueil.html'),$('.absolute-bg')['css']('background-image','url(\x22ressources/BG_mainmenu_gigapixel.jpg\x22)'));}}}function loadPageSwitch(j){switch(j){case 0x0:$('main')['load']('Page/accueil.html'),$('.absolute-bg')['css']('background-image','url(\x22ressources/BG_mainmenu_gigapixel.jpg\x22)'),window['history']['pushState']('window.location.hostname','The\x20House\x20In\x20Fata\x20Morgana','/');break;case 0x1:$('main')['load']('Page/progression.html'),$('.absolute-bg')['css']('background-image','none'),window['history']['pushState']('window.location.hostname','The\x20House\x20In\x20Fata\x20Morgana','/progress');break;case 0x2:window['scroll'](0x0,0x0),$('main')['load']('Page/telechargement.html'),$('.absolute-bg')['css']('background-image','none'),window['history']['pushState']('window.location.hostname','The\x20House\x20In\x20Fata\x20Morgana','/download');break;case 0x3:$('main')['load']('Page/FAQ.html'),$('.absolute-bg')['css']('background-image','none'),window['history']['pushState']('window.location.hostname','The\x20House\x20In\x20Fata\x20Morgana','/faq');break;case 0x4:$('main')['load']('Page/credits.html'),$('.absolute-bg')['css']('background-image','none'),window['history']['pushState']('window.location.hostname','The\x20House\x20In\x20Fata\x20Morgana','/credit');break;}}window['addEventListener']('click',function(j){VerifAutoPlay=='NON'&&(VerifAutoPlay='OUI',myAudio['paused']&&myAudio['play']());}),$('body')['on']('change','input[type=radio][name=controls]',function(){MyTimerSlider&&(clearInterval(MyTimerSlider),MyTimerSlider=setInterval(TimerSlider,0x1388));}),window['addEventListener']('popstate',function(j){loadPage(),PlaySound('ClickAllLink');}),window['addEventListener']('scroll',ScrollEvent);function ScrollEvent(){var j=window['scrollY'],A=j*0.7,R=verifscrollrelease;$('.absolute-bg')['css']('backgroundPosition','center'+'\x20calc(30%\x20-\x20'+A+'px)');var P=document['querySelectorAll']('.reveal');for(var V=0x0;V<P['length'];V++){var Z=window['innerHeight']*0.5,L=P[V]['getBoundingClientRect']()['top'];L<Z&&(verifscrollrelease!=V&&(verifscrollrelease=V));}if(R!=verifscrollrelease){P[verifscrollrelease]['classList']['remove']('disableup'),P[verifscrollrelease]['classList']['remove']('disabledown'),P[verifscrollrelease]['classList']['add']('active'),$('.Fenetredownloads')['css']('--valuescrollnum',verifscrollrelease+0x1);for(var V=0x0;V<P['length'];V++){if(V<verifscrollrelease)P[V]['classList']['remove']('active'),P[V]['classList']['add']('disableup'),P[V]['classList']['remove']('disabledown');else V>verifscrollrelease&&(P[V]['classList']['remove']('active'),P[V]['classList']['add']('disabledown'));}PlaySound('ClickAllLink');}R=verifscrollrelease;}myAudio['addEventListener']('play',function(){icon['classList']['remove']('fa-music-note-slash'),icon['classList']['add']('fa-music-note','fa-shake'),VerifAutoPlay='OUI';}),myAudio['addEventListener']('pause',function(){icon['classList']['remove']('fa-music-note','fa-shake'),icon['classList']['add']('fa-music-note-slash');}),$('body')['on']('click','a',function(){PlaySound('ClickAllLink');});