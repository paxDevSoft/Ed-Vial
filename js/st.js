function getRandomMP3URL(){return"http://freshly-ground.com/data/audio/mpc/20060826%20-%20Armstrong.mp3?rnd="+parseInt(Math.random()*1048576)}function doEval(sHTML){var html=sHTML.replace(/\<(span|code)\>/gi,"");html=html.replace(/\<[\/](span|code)\>/gi,"");html=html.replace(/>/gi,">");eval(html);return false}function checkRAM(){if(soundManager.supported()){var a=(soundManager.getMemoryUse()/1024/1024).toFixed(2);if(!isNaN(a)){document.getElementById("flash-ram-use").innerHTML=a+" MB"}else{document.getElementById("flash-ram-use").style.display="none"}}}function loopSound(a){a.play({onfinish:function(){loopSound(a)}})}var winLoc=window.location.toString();soundManager.preferFlash=winLoc.match(/usehtml5audio=1/i)?false:true;if(winLoc.match(/flash9/i)){soundManager.flashVersion=9;if(winLoc.match(/highperformance/i)){soundManager.useHighPerformance=true;soundManager.useFastPolling=true}}else if(winLoc.match(/flash8/i)){soundManager.flashVersion=8}soundManager.useFlashBlock=false;soundManager.url="js/sm2/swf/";soundManager.debugMode=false;soundManager.consoleOnly=false;soundManager.onready(function(a){if(!a.success){return false}if(soundManager.flashVersion>8){t=window.setInterval(checkRAM,500);document.getElementById("flash-ram-use").style.display="inline";checkRAM()}var b=soundManager.createSound({id:"bso",url:"mp3/tocalasenial-loop.mp3",autoLoad:true,volume:25,onload:function(){loopSound(b)}})});var t=null;$(document).ready(function(a){})
