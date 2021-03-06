$(
    function() {
        var playerTrack = $('.player-track'),
        albumArt = $('.album-art'),
        albumName = $('#album-name'),
        trackName = $('#track-name'),
        bgArtwork = $('.bg-artwork'),
        bgArtworkUrl,

        tProgress = $('#current-time'),
        tTime = $('#track-length'),

        albumArt = $('.album-art'),
        sArea = $('#s-area'),
        seekBar = $('#seek-bar'),
        sHover = $('#s-hover'),
        insTime = $('#ins-time'),
        seekT,
        seekLoc,
        seekBarPos,
        ctMinutes,
        ctSeconds,
        curMinutes,
curSeconds,
durMinutes,
durSeconds,
playProgress,
nTime = 0,

albums = ['天也不懂情', 'Collapsing World', '潇湘子', '让泪化作相思雨', '冲动的惩罚'],
trackNames = ['天也不懂情 - FORMOSA ', 'Collapsing World - Lightscape', '潇湘子 - 川井憲次', '让泪化作相思雨 - 南合文斗', '冲动的惩罚 - 刀郎'],
albumArtworks = ['_1', '_2', '_3', '_4', '_5'],
trackUrl = ['../images/1.mp3','../images/2.mp3', '../images/3.mp3', '../images/4.mp3', '../images/5.mp3'],

playPauseButton = $('#pause'),
i = playPauseButton.find('i'),
playPreviousButton = $('#pre'),
playNextButton = $('#next'),
currentIndex = -1;
function playPause() {
    setTimeout(function() {
        if(audio.paused){
            console.log('Start Playing...');
            playerTrack.addClass('active');
            albumArt.addClass('active');
            i.attr('class', 'fas fa-pause');
            audio.play();
        } else {
            console.log('Paused');
            playerTrack.removeClass('active');
            albumArt.removeClass('active');
            i.attr('class', 'fas fa-play');
            audio.pause();
        }
    }, 300);
}

function showHover(event) {
    seekBarPos = sArea.offset();

    seekT = event.clientX - seekBarPos.left;
    seekLoc = audio.duration * (seekT / sArea.outerWidth());

    sHover.width(seekT);

    ctMinutes = Math.floor(seekLoc / 60);
    ctSeconds = Math.floor(seekLoc%60);
    console.log(ctMinutes, ctSeconds);

    if(ctMinutes < 10) {
        ctMinutes = '0' + ctMinutes;
    }
    if(ctSeconds < 10) {
        ctSeconds = '0' + ctSeconds;
    }

    if(isNaN(ctMinutes) || isNaN(ctSeconds)) {
        insTime.text('--:--');
    } else {
        insTime.text(ctMinutes + ':' + ctSeconds);
    }

    insTime.css({
        'left': seekT,
        'margin-left': '-21px'
    }).fadeIn(10);
}

function hideHover() {
    sHover.width(0);

    insTime.css({
        'left': '0px'
    }).fadeOut(0);
}

function playFromClickedPos(){
    audio.currentTime = seekLoc;
    seekBar.width(seekT);
    hideHover();
}

function updateCurrentTime() {

    nTime = new Date();
    nTime = nTime.getTime();

    curMinutes = Math.floor(audio.currentTime / 60); //current minutes
    curSeconds = Math.floor(audio.currentTime % 60); //current seconds

    durMinutes = Math.floor(audio.duration /60); //total minutes
    durSeconds = Math.floor(audio.duration % 60); //total seconds

    playProgress = (audio.currentTime / audio.duration) * 100; //progress percentage

    //0 if it is necessary

    if(curMinutes < 10) curMinutes = '0' + curMinutes;
    if (curSeconds < 10) curSeconds = '0' + curSeconds;
    if(durMinutes < 10) durMinutes = '0' + durMinutes;
    if(durSeconds < 10) durSeconds = '0' + durSeconds;

    // audio.currentTime and audio.duration is NaN if music is not started yet

    if (isNaN(curMinutes) || isNaN(curSeconds)) {
        tProgress.text('00:00');
    } else {
        tProgress.text(curMinutes + ':' + curSeconds);
    }

    if(isNaN(durMinutes) || isNaN(durSeconds)) {
        tTime.text('00:00');
    } else {
        tTime.text(durMinutes + ':' + durSeconds);
    }

    seekBar.width(playProgress + '%');

    if(playProgress == 100) {
        i.attr('class', 'fa fa-play');

        tProgress.text('00:00');
        albumArt.removeClass('buffering').removeClass('active');
    }
}

function selectTrack(flag) {
    if(flag == 0 || flag == 1) {
        if(currentIndex < albumArtworks.length-1) {
            ++ currentIndex;
        } else {
            currentIndex = 0;
        }
    } else {
        if (currentIndex > 0) {
            --currentIndex;
        } else {
            currentIndex = albumArtworks.length - 1;
        }
    }
    if((currentIndex > -1)&&(currentIndex < albumArtworks.length)) {
        if(flag == 0) {
            i.attr('class', 'fa fa-play');
        } else {
            albumArt.removeClass('buffering');
            i.attr('class', 'fa fa-pause');
        }

        seekBar.width(0);
        tProgress.text('00:00');
        tTime.text('00:00');

        currAlbum = albums[currentIndex];
        currTrackName = trackNames[currentIndex];
        currArtwork = albumArtworks[currentIndex];

        audio.src = trackUrl[currentIndex];

        if(flag != 0) {
            audio.play();
            playerTrack.addClass('active');
            albumArt.addClass('active');
        }

        albumName.text(currAlbum);

        trackName.text(currTrackName);
        albumArt.find('img.active').removeClass('active');

        $('#' + currArtwork).addClass('active');

        bgArtworkUrl = $('#' + currArtwork).attr('src');
        bgArtwork.css({
            'background': 'url(' + bgArtworkUrl + ')'
        });
    }
}

function initPlayer(){
    audio = new Audio();

    selectTrack(0);

    audio.loop = false;

    playPauseButton.on('click', playPause);

    $(audio).on('timeupdate',updateCurrentTime);

    sArea.mousemove(function(event){
        showHover(event);
    })

    sArea.mouseout(hideHover);

    sArea.on('click', playFromClickedPos);

    playPreviousButton.on('click', function(){
        selectTrack(-1);
    });

    playNextButton.on('click', function(){
        selectTrack(1);
    })
    console.log('initiate player successfully')
}
initPlayer();
    }
)