/*
League of Legends Tournament Code.js for website
by edisonlee55
Website: https://www.edisonlee55.com
*/
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64;}else if(isNaN(i)){a=64;}
t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a);}
return t;},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r);}
if(a!=64){t=t+String.fromCharCode(i);}}
t=Base64._utf8_decode(t);return t;},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128);}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128);}}
return t;},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++;}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2;}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3;}}
return t;}};
$(document).ready(function(){
    $("#team-select").mouseover(function() {
        var mapselect = $("#map-select").val();
        var teamselecthtml = $("#team-select").html();
        if(teamselecthtml === '<option value="team1">1</option><option value="team2">2</option><option value="team3">3</option>'){
            if(mapselect !== "map10"){
                $("#team-select").empty();
            $("#team-select").append('<option value="team1">1</option><option value="team2">2</option><option value="team3">3</option><option value="team4">4</option><option value="team5">5</option>');
            }
        }else if(mapselect === "map10") {
            $("#team-select").empty();
            $("#team-select").append('<option value="team1">1</option><option value="team2">2</option><option value="team3">3</option>');
        }else if(teamselecthtml === '<option value="team1">1</option><option value="team2">2</option><option value="team3">3</option><option value="team4">4</option><option value="team5">5</option>'){
        
        }else{
            $("#team-select").empty();
            $("#team-select").append('<option value="team1">1</option><option value="team2">2</option><option value="team3">3</option><option value="team4">4</option><option value="team5">5</option>');
        }
    });
});
$("#submit").click(function() {
    $("#result").empty();
    var mapselect = $("#map-select").val();
    var pickselect = $("#pick-select").val();
    var teamselect = $("#team-select").val();
    var specselect = $("#spec-select").val();
    var gamename = $("#game-name").val();
    var gamepassword = $("#game-password").val();
    var gameid = $("#game-id").val();
    var gamereport = $("#game-report").val();
    if (gamename === "") {
        alert("錯誤:房間名稱不可為空白!");
    } else {
        var json = '{"name":"' + gamename + '","extra":"' + gameid + '","password":"' + gamepassword + '","report":"' + gamereport + '"}';
        var code = "pvpnet://lol/customgame/joinorcreate/" + mapselect + "/" + pickselect + "/" + teamselect + "/" + specselect + "/" + Base64.encode(json);
        $("#result").append('<h3>產生的電競專碼</h3><textarea class="form-control" rows="3">' + code + '</textarea>');
    }
});
