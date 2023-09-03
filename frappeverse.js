// URL - Open in new tab
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');

    links.forEach(function (link) {
        if (!link.classList.contains("internal")) {
            link.setAttribute("target", "_blank");
        }
    });
});

// YT - Video
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '720',
        width: '1280',
        videoId: 'g12bKzfuUsw',
        playerVars: {
            'playsinline': 1,
            // 'autoplay': 1,
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    event.target.setSize(window.innerWidth*9/10, window.innerHeight*9/10);
    event.target.mute();
    event.target.setPlaybackRate(1.5);
    event.target.setPlaybackQuality("hd720");
    event.target.seekTo(20, true);
    event.target.pauseVideo();
    // event.target.playVideo();
}
