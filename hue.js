var xmlhttp

var bridge="YOURIPHERE"

var hash="YOURHASHHERE"

var colorbedmorning="{\"on\":true,\"hue\":13122,\"sat\":211,\"xy\":[0.5119,0.4147],\"ct\":467,\"transitiontime\":100"
var colorearlymorning="{\"on\":true,\"hue\":13122,\"sat\":211,\"xy\":[0.5119,0.4147],\"ct\":467,\"transitiontime\":100"
var colorlatemorning="{\"on\":true,\"hue\":33863,\"sat\":49,\"xy\":[0.3680,0.3686],\"ct\":231,\"transitiontime\":100"
var colorquittintime="{\"on\":true,\"hue\":15331,\"sat\":121,\"xy\":[0.4448,0.4066],\"ct\":343,\"transitiontime\":100"
var colornight="{\"on\":true,\"hue\":15331,\"sat\":121,\"xy\":[0.1721,0.0500],\"ct\":343,\"transitiontime\":100"

var colorred="{\"on\":true,\"bri\":255,\"hue\":836,\"sat\":237,\"xy\":[0.6472,0.3316],\"ct\":500}"
var colororange="{\"on\":true,\"bri\":254,\"hue\":13390,\"sat\":251,\"xy\":[0.5663,0.3978],\"ct\":500}"
var colorgreen="{\"on\":true,\"bri\":255,\"hue\":27117,\"sat\":253,\"xy\":[0.4020,0.5041],\"ct\":264}"
var colorblue="{\"on\":true,\"bri\":255,\"hue\":15331,\"sat\":121,\"xy\":[0.1721,0.0500],\"ct\":343}"
var colorpink="{\"on\":true,\"bri\":255,\"hue\":54077,\"sat\":216,\"xy\":[0.3385,0.1680],\"ct\":223}"
var colorpastel="{\"on\":true,\"bri\":255,\"hue\":38375,\"sat\":253,\"xy\":[0.2657,0.2346],\"ct\":153}"

function lightswitch(light,state){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', '{"on":'+state+'}');
}
function bright(light,brightness){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', '{"on": true, "bri":'+brightness+'}');
}
function bedmorning(light,brightness){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', colorearlymorning+',"bri":'+brightness+'}');
}
function earlymorning(light,brightness){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', colorbedmorning+',"bri":'+brightness+'}');
}
function latemorning(light,brightness){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', colorlatemorning+',"bri":'+brightness+'}');
}
function quittintime(light,brightness){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', colorquittintime+',"bri":'+brightness+'}');
}
function night(light,brightness){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', colornight+',"bri":'+brightness+'}');
}
function lightcolor(light,color){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', color);
}
function lightbright(light,brightness){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', '{"bri":'+brightness+'}');
}
function flashit(light,flashstate){
	execute('PUT', 'http://'+bridge+'/api/'+hash+'/lights/'+light+'/state', '{"alert":"'+flashstate+'"}');
}

function execute($method,$url,$message){
xmlhttp=new XMLHttpRequest();
xmlhttp.open($method,$url,true)
xmlhttp.send($message);
}