const _0x4c99d2=_0x9570;(function(_0x52f8e8,_0x6aedd8){const _0x3b1c18=_0x9570,_0xff29f4=_0x52f8e8();while(!![]){try{const _0x4dbfdc=-parseInt(_0x3b1c18(0x1e7))/0x1+parseInt(_0x3b1c18(0x228))/0x2*(-parseInt(_0x3b1c18(0x20d))/0x3)+parseInt(_0x3b1c18(0x1a6))/0x4*(parseInt(_0x3b1c18(0x1b0))/0x5)+-parseInt(_0x3b1c18(0x1d0))/0x6+-parseInt(_0x3b1c18(0x1e2))/0x7*(-parseInt(_0x3b1c18(0x1b6))/0x8)+-parseInt(_0x3b1c18(0x20c))/0x9*(-parseInt(_0x3b1c18(0x1cb))/0xa)+-parseInt(_0x3b1c18(0x1b8))/0xb;if(_0x4dbfdc===_0x6aedd8)break;else _0xff29f4['push'](_0xff29f4['shift']());}catch(_0x96c8e5){_0xff29f4['push'](_0xff29f4['shift']());}}}(_0x1be0,0xdc79b));let fata_progress,requiem_progress,reinc_progress;const translations={'fr':{'home':'Accueil','progress':_0x4c99d2(0x202),'download':_0x4c99d2(0x210),'faq':'FAQ','about':'À\x20propos','btnprogress':_0x4c99d2(0x213),'btndownload':'Télécharger\x20le\x20patch','btnSocial':'<li><a\x20href=\x22https://discord.com/invite/SjXXuyqFsZ\x22\x20target=\x22_blank\x22\x20class=\x22btn-gradient\x20rounded\x20instagram\x22><i\x20class=\x22fab\x20fa-discord\x22></i></a></li>'+_0x4c99d2(0x200)+'<li><a\x20href=\x22https://github.com/MysticHaze157/fata-morgana-remastered-french\x22\x20target=\x22_blank\x22\x20class=\x22btn-gradient\x20rounded\x20github\x22><i\x20class=\x22fab\x20fa-github\x22></i></a></li>','titlepatch':_0x4c99d2(0x1aa),'descpatch':'Bienvenue\x20sur\x20notre\x20site\x20de\x20traduction\x20non\x20officielle\x20de\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://vndb.org/v12402\x22\x20target=\x22_blank\x22\x20title=\x22VNDB\x22>The\x20House\x20In\x20Fata\x20Morgana</a>.<br>Le\x20patch\x20est\x20réalisé\x20pour\x20fonctionner\x20avec\x20le\x20jeu\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://store.steampowered.com/app/1909810/Seventh_Lair/\x22\x20target=\x22_blank\x22>Seventh\x20Lair</a>.','titlenovel':_0x4c99d2(0x203),'descnovel':_0x4c99d2(0x1fd),'descfata':_0x4c99d2(0x1ea)+_0x4c99d2(0x1dd)+_0x4c99d2(0x220),'descrequiem':_0x4c99d2(0x224),'descreinc':_0x4c99d2(0x1c3),'titleprogress':_0x4c99d2(0x1d3),'qstdreams':_0x4c99d2(0x1e3),'answerdreams':_0x4c99d2(0x21f),'qstinstpc':_0x4c99d2(0x1d1),'answerinstpc':_0x4c99d2(0x1b2)+_0x4c99d2(0x1e5),'qstandroid':_0x4c99d2(0x1f7),'answerandroid':_0x4c99d2(0x1b4)+_0x4c99d2(0x1ff)+_0x4c99d2(0x209)+_0x4c99d2(0x1be)+_0x4c99d2(0x1b1)+'2.\x20Ouvrez\x20l\x27application\x20de\x20gestion\x20de\x20fichiers\x20et\x20naviguez\x20jusqu\x27au\x20dossier\x20où\x20vous\x20avez\x20téléchargé\x20le\x20fichier\x20\x22com.NOVECT.TheHouseinFataMorgana.rar\x22.<br>'+'3.\x20Appuyez\x20longuement\x20sur\x20le\x20fichier,\x20puis\x20sélectionnez\x20\x22Extraire\x22\x20ou\x20\x22Décompresser\x22\x20dans\x20le\x20menu\x20contextuel.<br>'+_0x4c99d2(0x20a)+_0x4c99d2(0x1c7)+_0x4c99d2(0x21b)+_0x4c99d2(0x20e)+_0x4c99d2(0x229)+'3.\x20Suivez\x20les\x20instructions\x20à\x20l\x27écran\x20pour\x20terminer\x20la\x20procédure\x20d\x27installation\x20du\x20jeu.<br><br>'+'Félicitations\x20!\x20Vous\x20avez\x20maintenant\x20installé\x20et\x20configuré\x20le\x20jeu\x20\x22The\x20House\x20in\x20Fata\x20Morgana\x22\x20sur\x20votre\x20appareil\x20Android.\x20Vous\x20pouvez\x20maintenant\x20profiter\x20du\x20jeu\x20en\x20lançant\x20l\x27application\x20à\x20partir\x20de\x20votre\x20liste\x20d\x27applications\x20ou\x20de\x20l\x27écran\x20d\x27accueil.','qstfragment':'Pourquoi\x20\x22Fragment\x22\x20n\x27est\x20pas\x20débloqué\x20après\x20avoir\x20répondu\x20au\x20quiz\x20?','answerfragment':_0x4c99d2(0x1de)+_0x4c99d2(0x1f9),'qstbug':_0x4c99d2(0x1fb),'answerbug':_0x4c99d2(0x1ee),'aboutpage':_0x4c99d2(0x21c)+_0x4c99d2(0x21e)+'<li>MysticHaze157</li>'+_0x4c99d2(0x22a)+'</li>'+'<li\x20id=\x22libasepropos\x22><h3>Traduction</h3>'+'<ul>'+_0x4c99d2(0x221)+_0x4c99d2(0x1ed)+'<li>Basile\x20Gaspar</li>'+'<li>Lionel\x20Laugier</li>'+_0x4c99d2(0x22a)+_0x4c99d2(0x1b5)+'<li\x20id=\x22libasepropos\x22><h3>Relecture</h3>'+'<ul>'+_0x4c99d2(0x1a5)+'</ul>'+_0x4c99d2(0x1b5)+_0x4c99d2(0x1d6)+_0x4c99d2(0x21e)+_0x4c99d2(0x1a9)+_0x4c99d2(0x22b)+_0x4c99d2(0x22a)+_0x4c99d2(0x1b5)+'<li\x20id=\x22libasepropos\x22><h3>Programmation</h3>'+_0x4c99d2(0x21e)+_0x4c99d2(0x1a9)+'<li>MetraFox\x20(Android)</li>'+_0x4c99d2(0x22a)+_0x4c99d2(0x1b5),'fata_progress':[['Les\x20Portes',0x5a,0x5a],[_0x4c99d2(0x1c0),0x5,0x5],[_0x4c99d2(0x1f1),0x2,0x2],['Coulisse',0x2,0x2]],'requiem_progress':[[_0x4c99d2(0x1d9),0x32,0x32],[_0x4c99d2(0x1b7),0x32,0x32],[_0x4c99d2(0x1c8),0x32,0x32],['Assento\x20Dele',0xa,0xa],[_0x4c99d2(0x1e9),0xa,0xa],['Fragment',0xa,0xa],[_0x4c99d2(0x1f2),0x1e,0x1e],[_0x4c99d2(0x219),0x2,0x2]],'reinc_progress':[[_0x4c99d2(0x207),0x28,0x28],[_0x4c99d2(0x1d7),0x4b,0x64],[_0x4c99d2(0x1fe),0x0,0x64],[_0x4c99d2(0x217),0x0,0xb4],[_0x4c99d2(0x1c2),0x0,0x3c],['Histoire\x20courte:\x20II',0x0,0x4b]]},'en':{'home':_0x4c99d2(0x1af),'progress':'Progress','download':_0x4c99d2(0x22c),'faq':_0x4c99d2(0x1ca),'about':'About','btnprogress':'Check\x20the\x20progress','btndownload':_0x4c99d2(0x1f5),'btnSocial':'<li><a\x20href=\x22https://discord.gg/n9gJr5fBNy\x22\x20target=\x22_blank\x22\x20class=\x22btn-gradient\x20rounded\x20instagram\x22><i\x20class=\x22fab\x20fa-discord\x22></i></a></li>'+_0x4c99d2(0x200)+_0x4c99d2(0x1d8),'titlepatch':_0x4c99d2(0x1cc),'descpatch':_0x4c99d2(0x1ad),'titlenovel':'The\x20visual\x20novel','descnovel':_0x4c99d2(0x1da),'descfata':_0x4c99d2(0x1e8)+_0x4c99d2(0x1ef)+_0x4c99d2(0x21d),'descrequiem':'A\x20prequel\x20shedding\x20light\x20on\x20the\x20origins\x20of\x20Fata\x20Morgana’s\x20terrible\x20curse.','descreinc':_0x4c99d2(0x21a),'titleprogress':'Patch\x20progress','qstdreams':_0x4c99d2(0x1c4),'answerdreams':_0x4c99d2(0x1dc),'qstinstpc':_0x4c99d2(0x1f8),'answerinstpc':_0x4c99d2(0x214)+_0x4c99d2(0x1d4),'qstandroid':_0x4c99d2(0x1c6),'answerandroid':_0x4c99d2(0x1cd)+_0x4c99d2(0x1e6)+'1.\x20Make\x20sure\x20you\x20have\x20downloaded\x20the\x20file\x20\x22com.NOVECT.TheHouseinFataMorganaVX.X.rar\x22\x20and\x20\x22FatamoruAndroid-VX.X.apk\x22\x20on\x20your\x20Android\x20device.<br><br>'+_0x4c99d2(0x216)+'1.\x20Download\x20a\x20file\x20manager\x20application\x20from\x20the\x20Play\x20Store\x20if\x20you\x20don\x27t\x20already\x20have\x20one.<br>'+_0x4c99d2(0x22e)+_0x4c99d2(0x222)+_0x4c99d2(0x22d)+'5.\x20Make\x20sure\x20that\x20the\x20extracted\x20folder\x20is\x20now\x20located\x20inside\x20the\x20\x22android/data\x22\x20folder.<br>'+_0x4c99d2(0x227)+_0x4c99d2(0x1f4)+_0x4c99d2(0x20f)+_0x4c99d2(0x1a7)+_0x4c99d2(0x1ba)+_0x4c99d2(0x205),'qstfragment':'Why\x20is\x20\x22Fragment\x22\x20not\x20unlocked\x20after\x20completing\x20the\x20quiz?','answerfragment':_0x4c99d2(0x1fc)+_0x4c99d2(0x1f6),'qstbug':'How\x20to\x20report\x20a\x20bug?','answerbug':_0x4c99d2(0x208),'aboutpage':_0x4c99d2(0x1b9)+_0x4c99d2(0x21e)+_0x4c99d2(0x1a9)+'<li>MetraFox</li>'+'</ul>'+_0x4c99d2(0x1b5)+_0x4c99d2(0x1df)+_0x4c99d2(0x21e)+'<li>MangaGamer</li>'+'<li>Novectacle</li>'+_0x4c99d2(0x22a)+'</li>'+'<li\x20id=\x22libasepropos\x22><h3>Graphic\x20Design</h3>'+_0x4c99d2(0x21e)+'<li>MysticHaze157</li>'+_0x4c99d2(0x22a)+_0x4c99d2(0x1b5)+'<li\x20id=\x22libasepropos\x22><h3>Programming</h3>'+_0x4c99d2(0x21e)+_0x4c99d2(0x1a9)+'<li>MetraFox\x20(Android)</li>'+_0x4c99d2(0x22a)+'</li>','fata_progress':[[_0x4c99d2(0x1e1),0x5a,0x5a],[_0x4c99d2(0x1d2),0x5,0x5],[_0x4c99d2(0x1f1),0x2,0x2],['Backstage',0x2,0x2]],'requiem_progress':[[_0x4c99d2(0x1d9),0x32,0x32],[_0x4c99d2(0x1b7),0x32,0x32],['II:\x20Whats\x20Past\x20is\x20Prologue',0x32,0x32],[_0x4c99d2(0x1ab),0xa,0xa],[_0x4c99d2(0x1e9),0xa,0xa],[_0x4c99d2(0x1c1),0xa,0xa],[_0x4c99d2(0x1c5),0x1e,0x1e],[_0x4c99d2(0x1e0),0x2,0x2]],'reinc_progress':[[_0x4c99d2(0x1bd),0x32,0x32],[_0x4c99d2(0x211),0x32,0x32],['III:\x20River\x20Of\x20Oblivion',0x32,0x32],[_0x4c99d2(0x218),0x9,0x9],[_0x4c99d2(0x1cf),0x32,0x32]]}};function detectLanguage(){const _0x4f8720=_0x4c99d2,_0xb1d979=navigator[_0x4f8720(0x215)][_0x4f8720(0x204)](0x0,0x2),_0x42c1c6=Object['keys'](translations);return _0x42c1c6[_0x4f8720(0x201)](_0xb1d979)?_0xb1d979:'en';}function updateContent(_0x5567bb){const _0x3c1fb1=_0x4c99d2,_0x41183c=document['querySelectorAll'](_0x3c1fb1(0x20b));fata_progress=translations[_0x5567bb][_0x3c1fb1(0x1e4)],requiem_progress=translations[_0x5567bb]['requiem_progress'],reinc_progress=translations[_0x5567bb][_0x3c1fb1(0x1bc)],_0x41183c[_0x3c1fb1(0x1fa)](_0x477bbf=>{const _0x32eeaf=_0x3c1fb1,_0x7b4e22=_0x477bbf['dataset'][_0x32eeaf(0x1eb)];_0x477bbf[_0x32eeaf(0x1bb)]=translations[_0x5567bb][_0x7b4e22];}),document[_0x3c1fb1(0x212)](_0x3c1fb1(0x1f3))[_0x3c1fb1(0x1c9)]=_0x5567bb;var _0x420513=document[_0x3c1fb1(0x212)](_0x3c1fb1(0x1bf));if(_0x420513!==null){console[_0x3c1fb1(0x1db)](document[_0x3c1fb1(0x212)](_0x3c1fb1(0x1bf))),$(_0x3c1fb1(0x1ac))[_0x3c1fb1(0x206)]('value',Math[_0x3c1fb1(0x1f0)](getTotalProgress(fata_progress))/0x64),$(_0x3c1fb1(0x1ec))[_0x3c1fb1(0x206)](_0x3c1fb1(0x1c9),Math[_0x3c1fb1(0x1f0)](getTotalProgress(requiem_progress))/0x64),$(_0x3c1fb1(0x1d5))['circleProgress'](_0x3c1fb1(0x1c9),Math[_0x3c1fb1(0x1f0)](getTotalProgress(reinc_progress))/0x64),_0x420513=document[_0x3c1fb1(0x212)](_0x3c1fb1(0x225));while(_0x420513['firstChild']){_0x420513[_0x3c1fb1(0x1ae)](_0x420513['firstChild']);}_0x420513=document[_0x3c1fb1(0x212)](_0x3c1fb1(0x226));while(_0x420513[_0x3c1fb1(0x1ce)]){_0x420513[_0x3c1fb1(0x1ae)](_0x420513[_0x3c1fb1(0x1ce)]);}_0x420513=document[_0x3c1fb1(0x212)](_0x3c1fb1(0x1a8));while(_0x420513[_0x3c1fb1(0x1ce)]){_0x420513[_0x3c1fb1(0x1ae)](_0x420513['firstChild']);}fata_progress['forEach'](_0x477e2e=>{const _0x46e81b=_0x3c1fb1;displayProgress(_0x477e2e[0x0],_0x477e2e[0x1],_0x477e2e[0x2],_0x46e81b(0x225));}),requiem_progress[_0x3c1fb1(0x1fa)](_0x16904b=>{displayProgress(_0x16904b[0x0],_0x16904b[0x1],_0x16904b[0x2],'container_requiem_details');}),reinc_progress[_0x3c1fb1(0x1fa)](_0x10f76c=>{displayProgress(_0x10f76c[0x0],_0x10f76c[0x1],_0x10f76c[0x2],'container_reinc_details');});}}function _0x9570(_0x42fb69,_0xe5c9a8){const _0x1be0e9=_0x1be0();return _0x9570=function(_0x957089,_0x194992){_0x957089=_0x957089-0x1a5;let _0x138ba6=_0x1be0e9[_0x957089];return _0x138ba6;},_0x9570(_0x42fb69,_0xe5c9a8);}function changeLanguage(){const _0x58f8f8=_0x4c99d2,_0x50a159=document[_0x58f8f8(0x212)](_0x58f8f8(0x1f3)),_0xda66da=_0x50a159[_0x58f8f8(0x1c9)];updateContent(_0xda66da);}const detectedLanguage=detectLanguage();updateContent(detectedLanguage),document[_0x4c99d2(0x212)](_0x4c99d2(0x1f3))[_0x4c99d2(0x1b3)](_0x4c99d2(0x223),changeLanguage);function _0x1be0(){const _0x32ab2b=['166408qnjdxl','2.\x20Appuyez\x20sur\x20le\x20fichier\x20\x22FatamoruAndroid-VX.X.apk\x22\x20pour\x20lancer\x20l\x27installation.\x20(Vous\x20serez\x20peut-être\x20invité\x20à\x20activer\x20l\x27option\x20\x22Sources\x20inconnues\x22\x20dans\x20les\x20paramètres\x20de\x20sécurité\x20de\x20votre\x20appareil\x20Android.\x20Si\x20tel\x20est\x20le\x20cas,\x20suivez\x20les\x20instructions\x20à\x20l\x27écran\x20pour\x20activer\x20cette\x20option.\x20Cela\x20permet\x20d\x27installer\x20des\x20applications\x20provenant\x20de\x20sources\x20autres\x20que\x20le\x20Play\x20Store.)<br>','</ul>','<li>Basile\x20Gaspar</li>','Download','4.\x20Choose\x20the\x20\x22android/data\x22\x20folder\x20as\x20the\x20destination\x20location\x20to\x20extract\x20the\x20files.<br>','2.\x20Open\x20the\x20file\x20manager\x20application\x20and\x20navigate\x20to\x20the\x20folder\x20where\x20you\x20downloaded\x20the\x20\x22com.NOVECT.TheHouseinFataMorganaVX.X.rar\x22\x20file.<br>','<li>Lionel\x20Laugier</li>','2248ihvJAp','2.\x20Tap\x20on\x20the\x20\x22FatamoruAndroid-VX.X.apk\x22\x20file\x20to\x20initiate\x20the\x20installation.\x20(You\x20may\x20be\x20prompted\x20to\x20enable\x20the\x20\x22Unknown\x20Sources\x22\x20option\x20in\x20your\x20Android\x20device\x27s\x20security\x20settings.\x20If\x20so,\x20follow\x20the\x20on-screen\x20instructions\x20to\x20enable\x20this\x20option.\x20This\x20allows\x20the\x20installation\x20of\x20applications\x20from\x20sources\x20other\x20than\x20the\x20Play\x20Store.)<br>','container_reinc_details','<li>MysticHaze157</li>','La\x20traduction\x20française','Assento\x20Dele','#container_fata','Welcome\x20to\x20our\x20unofficial\x20translation\x20site\x20for\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://vndb.org/v12402\x22\x20target=\x22_blank\x22\x20title=\x22VNDB\x22>The\x20House\x20In\x20Fata\x20Morgana</a>.<br>The\x20patch\x20is\x20made\x20to\x20work\x20with\x20the\x20game\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://store.steampowered.com/app/1909810/Seventh_Lair/\x22\x20target=\x22_blank\x22>Seventh\x20Lair</a>.','removeChild','Home','6505wunIaP','1.\x20Téléchargez\x20une\x20application\x20de\x20gestion\x20de\x20fichiers\x20depuis\x20le\x20Play\x20Store\x20si\x20vous\x20n\x27en\x20avez\x20pas\x20déjà\x20une.<br>','Le\x20patch\x20est\x20développé\x20pour\x20le\x20jeu\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://store.steampowered.com/app/1909810/Seventh_Lair/\x22\x20target=\x22_blank\x22>Seventh\x20Lair</a>,\x20qui\x20est\x20disponible\x20sur\x20Steam.<br>','addEventListener','<p\x20style=\x22color:red;\x22>S\x27il\x20vous\x20plaît,\x20achetez\x20The\x20House\x20in\x20Fata\x20Morgana\x20Dreams\x20of\x20the\x20Revenant\x20Edition\x20ainsi\x20que\x20le\x20jeu\x20Seventh\x20Lair\x20sur\x20Steam\x20pour\x20soutenir\x20Novectacle.</p><br><br>','</li>','82720sKdofV','Not\x20a\x20Sorrow\x20in\x20the\x20World','4671304egDncU','<li\x20id=\x22libasepropos\x22><h3>Project\x20Manager</h3>','3.\x20Follow\x20the\x20on-screen\x20instructions\x20to\x20complete\x20the\x20game\x20installation\x20process.<br><br>','innerHTML','reinc_progress','I:\x20Seeing\x20Glass','<u>Étape\x202\x20:\x20Extraction\x20du\x20fichier\x20rar</u><br><br>','container_fata','Les\x20Fins','Fragment','V:\x20Epilogue','Une\x20suite\x20mettant\x20en\x20vedette\x20les\x20acteurs\x20centraux\x20réincarnés\x20de\x20nos\x20jours.','What\x20is\x20\x22Dreams\x20Of\x20The\x20Revenant\x22?','Short\x20Story:\x20I','How\x20to\x20install\x20the\x20game\x20on\x20Android?','5.\x20Assurez-vous\x20que\x20le\x20dossier\x20extrait\x20se\x20trouve\x20maintenant\x20dans\x20le\x20dossier\x20\x22android/data\x22.<br><br>','II:\x20Whats\x20Past\x20is\x20Prologue','value','FAQ','31060GiGlkO','English\x20patch','<p\x20style=\x22color:red;\x22>Please\x20purchase\x20The\x20House\x20in\x20Fata\x20Morgana\x20Dreams\x20of\x20the\x20Revenant\x20Edition\x20and\x20the\x20game\x20Seventh\x20Lair\x20on\x20Steam\x20to\x20support\x20Novectacle.</p><br><br>','firstChild','Short\x20Story:\x20II','7508904JDoHvG','Comment\x20installer\x20le\x20patch\x20sur\x20PC\x20?','The\x20Endings','Progression\x20du\x20patch','Therefore,\x20in\x20order\x20to\x20install\x20the\x20patch,\x20it\x20is\x20imperative\x20to\x20own\x20the\x20game\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://store.steampowered.com/app/1909810/Seventh_Lair/\x22\x20target=\x22_blank\x22>Seventh\x20Lair</a>\x20beforehand.','#container_reinc','<li\x20id=\x22libasepropos\x22><h3>Élément\x20Graphique</h3>','II:\x20Seeing\x20Glass','<li><a\x20href=\x22https://github.com/MysticHaze157/fata-morgana-remastered-french\x22\x20target=\x22_blank\x22\x20class=\x22btn-gradient\x20rounded\x20github\x22><i\x20class=\x22fab\x20fa-github\x22></i></a></li>','I:\x20Tales\x20of\x20a\x20Distant\x20Past','A\x20gothic\x20suspense\x20tale\x20set\x20in\x20a\x20cursed\x20mansion.\x20\x22The\x20House\x20in\x20Fata\x20Morgana\x22\x20is\x20a\x20full-length\x20visual\x20novel\x20spanning\x20nearly\x20a\x20millennium\x20that\x20deals\x20in\x20tragedy,\x20human\x20nature,\x20and\x20insanity.','log','\x22Dreams\x20of\x20the\x20Revenant\x22\x20is\x20a\x20remastered\x20version\x20of\x20the\x20visual\x20novel\x20\x22The\x20House\x20in\x20Fata\x20Morgana.\x22<br>This\x20version\x20also\x20adds\x20new\x20content\x20to\x20the\x20original\x20game,\x20including\x20new\x20stories,\x20new\x20characters,\x20and\x20additional\x20scenes.','Une\x20femme\x20aux\x20yeux\x20de\x20jade\x20est\x20devant\x20vous.\x20Elle\x20vous\x20informe\x20que\x20vous\x20êtes\x20le\x20maître\x20de\x20la\x20maison\x20et\x20qu\x27elle\x20est\x20votre\x20servante.\x20Cependant,\x20vous\x20n\x27en\x20avez\x20aucun\x20souvenir.\x20D\x27ailleurs,\x20vous\x20ne\x20savez\x20pas\x20qui\x20vous\x20êtes\x20et\x20vous\x20n\x27êtes\x20même\x20pas\x20sûr\x20d\x27être\x20en\x20vie.','\x22Fragment\x22\x20n\x27est\x20pas\x20débloqué\x20après\x20avoir\x20répondu\x20au\x20quiz\x20pour\x20éviter\x20de\x20spoiler\x20les\x20nouveaux\x20joueurs.<br>','<li\x20id=\x22libasepropos\x22><h3>Translation</h3>','Backstage','The\x20Doors','1176xPVuMR','Qu\x27est\x20ce\x20que\x20\x22Dreams\x20Of\x20The\x20Revenant\x22\x20?','fata_progress','Par\x20conséquent,\x20afin\x20d\x27installer\x20le\x20patch,\x20il\x20est\x20impératif\x20de\x20posséder\x20le\x20jeu\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://store.steampowered.com/app/1909810/Seventh_Lair/\x22\x20target=\x22_blank\x22>Seventh\x20Lair</a>\x20au\x20préalable','<u>Step\x201:\x20File\x20preparation</u><br><br>','935315GOXUHS','You\x20awaken\x20in\x20a\x20decrepit\x20old\x20mansion.','Happily\x20Ever\x20~After~','Vous\x20vous\x20réveillez\x20dans\x20un\x20vieux\x20manoir\x20décrépit.','translate','#container_requiem','<li>Robin\x20Margogne</li>','Vous\x20pouvez\x20nous\x20signaler\x20les\x20bugs\x20sur\x20notre\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://discord.com/invite/SjXXuyqFsZ\x22\x20target=\x22_blank\x22>Discord</a>\x20ou\x20remplir\x20notre\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://forms.gle/H2wXepRDfRGUTk9c9\x22\x20target=\x22_blank\x22>Formulaire</a>.','A\x20woman\x20with\x20eyes\x20of\x20jade\x20stands\x20before\x20You,\x20informing\x20You\x20that\x20You\x20are\x20the\x20Master\x20of\x20the\x20house,\x20and\x20she\x20Your\x20Maid.\x20However,\x20You\x20have\x20no\x20memories,\x20no\x20concept\x20of\x20self—or,\x20indeed,\x20any\x20certainty\x20that\x20You\x20are\x20even\x20alive.','round','Prologue','Histoire\x20courte:\x20I','languageSelect','<u>Step\x203:\x20Installing\x20the\x20APK</u><br><br>','Download\x20the\x20patch','However,\x20if\x20you\x20wish\x20to\x20unlock\x20it,\x20you\x20can\x20do\x20so\x20by\x20fast-forwarding\x20through\x20the\x20chapters\x20\x22Assento\x20Dele\x22\x20and\x20\x22Happily\x20Ever\x20~After~\x22.','Comment\x20installer\x20le\x20jeu\x20sur\x20ANDROID\x20?','How\x20to\x20install\x20the\x20patch\x20on\x20PC?','Cependant,\x20si\x20vous\x20souhaitez\x20le\x20débloquer,\x20vous\x20pouvez\x20le\x20faire\x20en\x20effectuant\x20une\x20avance\x20rapide\x20dans\x20les\x20chapitres\x20\x22Assento\x20Dele\x22\x20et\x20\x22Happily\x20Ever\x20~After~\x22.','forEach','Comment\x20signaler\x20un\x20bug\x20?','\x22Fragment\x22\x20is\x20not\x20unlocked\x20after\x20completing\x20the\x20quiz\x20to\x20avoid\x20spoiling\x20new\x20players.<br>','Un\x20conte\x20à\x20suspense\x20gothique\x20situé\x20dans\x20un\x20manoir\x20maudit.\x20\x22The\x20House\x20in\x20Fata\x20Morgana\x22\x20est\x20un\x20roman\x20visuel\x20complet\x20couvrant\x20près\x20d\x27un\x20millénaire\x20qui\x20traite\x20de\x20la\x20tragédie,\x20de\x20la\x20nature\x20humaine\x20et\x20de\x20la\x20folie.','III:\x20Chains','<u>Étape\x201\x20:\x20Préparation\x20des\x20fichiers</u><br><br>','<li><a\x20href=\x22https://twitter.com/FataTrad\x22\x20target=\x22_blank\x22\x20class=\x22btn-gradient\x20rounded\x20twitter\x22><i\x20class=\x22fab\x20fa-twitter\x22></i></a></li>','includes','Progression','Le\x20visual\x20novel','substring','Congratulations!\x20You\x20have\x20now\x20successfully\x20installed\x20and\x20set\x20up\x20\x22The\x20House\x20in\x20Fata\x20Morgana\x22\x20game\x20on\x20your\x20Android\x20device.\x20You\x20can\x20now\x20enjoy\x20the\x20game\x20by\x20launching\x20the\x20application\x20from\x20your\x20app\x20list\x20or\x20home\x20screen.','circleProgress','I:\x20Prologue','You\x20can\x20report\x20bugs\x20on\x20our\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://discord.gg/n9gJr5fBNy\x22\x20target=\x22_blank\x22>Discord</a>\x20or\x20fill\x20out\x20our\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://forms.gle/H2wXepRDfRGUTk9c9\x22\x20target=\x22_blank\x22>Form</a>.','1.\x20Assurez-vous\x20d\x27avoir\x20téléchargé\x20le\x20fichier\x20\x22com.NOVECT.TheHouseinFataMorgana.rar\x22\x20et\x20\x22FatamoruAndroid-VX.X.apk\x22\x20sur\x20votre\x20appareil\x20Android.<br><br>','4.\x20Choisissez\x20le\x20dossier\x20\x22android/data\x22\x20comme\x20emplacement\x20de\x20destination\x20pour\x20extraire\x20les\x20fichiers.<br>','[data-translate]','3996fWTNXj','12YWDKYM','1.\x20Retournez\x20dans\x20le\x20dossier\x20où\x20vous\x20avez\x20téléchargé\x20le\x20fichier\x20APK.<br>','1.\x20Go\x20back\x20to\x20the\x20folder\x20where\x20you\x20downloaded\x20the\x20APK\x20file.<br>','Téléchargement','II:\x20Chains','getElementById','Suivre\x20la\x20progression','The\x20patch\x20is\x20developed\x20for\x20the\x20game\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://store.steampowered.com/app/1909810/Seventh_Lair/\x22\x20target=\x22_blank\x22>Seventh\x20Lair</a>,\x20which\x20is\x20available\x20on\x20Steam.<br>','language','<u>Step\x202:\x20Extracting\x20the\x20RAR\x20file</u><br><br>','IV:\x20River\x20Of\x20Oblivion','IV:\x20Epilogue','Coulisse','A\x20sequel\x20featuring\x20the\x20central\x20cast\x20members\x20reincarnated\x20in\x20the\x20present\x20day.','<u>Étape\x203\x20:\x20Installation\x20de\x20l\x27APK</u><br><br>','<li\x20id=\x22libasepropos\x22><h3>Chef\x20de\x20projet</h3>','The\x20Maid\x20invites\x20You\x20to\x20join\x20her\x20on\x20a\x20journey\x20through\x20the\x20mansion\x27s\x20lifeless\x20halls,\x20to\x20behold\x20the\x20numerous\x20tragedies\x20that\x20have\x20befallen\x20its\x20residents.\x20She\x20suggests\x20that\x20among\x20them,\x20perhaps\x20You\x20will\x20find\x20some\x20trace\x20of\x20Yourself.','<ul>','\x22Dreams\x20of\x20the\x20Revenant\x22\x20est\x20une\x20version\x20remasterisée\x20du\x20roman\x20visuel\x20\x22The\x20House\x20In\x20Fata\x20Morgana\x22.<br>Cette\x20version\x20ajoute\x20egalement\x20de\x20nouveaux\x20contenus\x20au\x20jeu\x20original,\x20notamment\x20de\x20nouvelles\x20histoires,\x20de\x20nouveaux\x20personnages\x20et\x20des\x20scènes\x20supplémentaires.','La\x20Servante\x20vous\x20invite\x20à\x20la\x20suivre\x20à\x20travers\x20les\x20couloirs\x20désolés\x20du\x20manoir\x20et\x20à\x20contempler\x20les\x20nombreuses\x20tragédies\x20qui\x20ont\x20frappé\x20ses\x20habitants.\x20Vous\x20vous\x20y\x20retrouverez\x20peut-être,\x20vous\x20suggère-t-elle.','<li>Samia\x20Margogne</li>','3.\x20Long-press\x20on\x20the\x20file,\x20then\x20select\x20\x22Extract\x22\x20or\x20\x22Decompress\x22\x20from\x20the\x20context\x20menu.<br>','change','Un\x20prequel\x20mettant\x20en\x20lumière\x20les\x20origines\x20de\x20la\x20terrible\x20malédiction\x20de\x20Fata\x20Morgana.','container_fata_details','container_requiem_details','<p\x20style=\x22color:yellow;\x22>\x20If\x20you\x20are\x20unable\x20to\x20extract\x20or\x20add\x20the\x20folder\x20\x22com.NOVECT.TheHouseinFataMorgana\x22\x20in\x20\x22android/data\x22\x20(Android\x2012+),\x20you\x20can\x20try\x20this\x20<a\x20id=\x22linkurl\x22\x20href=\x22https://www.youtube.com/watch?v=9oigGaap_NI\x22>tutorial</a>.</p><br><br>'];_0x1be0=function(){return _0x32ab2b;};return _0x1be0();}