/**
 *  Bootstrap Anonymous Function
 *  Detect relative path and load documents in a synchronous manner automatically.
 */


//load files which are depended on AetherPlayer
let aetherPlayerBoot = (function (path_bootstrap) {

    let path_to_docs = path_bootstrap.substring(0, path_bootstrap.indexOf('/js/'));
    let css_folder = '/css/AetherPlayer.css';
    let playlist = '/js/playlist.js';
    let player = '/js/AetherPlayer.js';
    let font_awesome_cdn = 'https://use.fontawesome.com/releases/v5.7.0/css/all.css';

    filesLoad([path_to_docs + css_folder, path_to_docs + playlist, path_to_docs + player, font_awesome_cdn]);

    //load files by order in a synchronous manner
    function filesLoad(arr) {
        let type_arr = arr[0].split('.');
        let type = type_arr[type_arr.length - 1];
        let dom;
        if (type === "css") {
            dom = cssDomCreate(arr[0]);
        } else if (type === "js") {
            dom = jsDomCreate(arr[0]);
        }
        if (arr.length === 1) return;
        if ((dom !== null) && (dom !== undefined)) {
            dom.onload = function () {
                arr.splice(0, 1);
                filesLoad(arr);
            }
        }
    }

    //create JS dom in the body tag
    function jsDomCreate(url) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.querySelector("body").appendChild(script);
        return script;
    }

    //create CSS dom in the head tag
    function cssDomCreate(url) {
        let link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.querySelector("head").appendChild(link);
        return link;
    }

});

let aetherplayer_path_bootstrap = document.scripts[document.scripts.length - 1].src; //get the absolute path of AetherPlayer_bootstrap.js

//make sure that the original page is completely loaded
document.onreadystatechange = function () {

    if (document.readyState === "complete") {

        aetherPlayerBoot(aetherplayer_path_bootstrap);

    }

};
