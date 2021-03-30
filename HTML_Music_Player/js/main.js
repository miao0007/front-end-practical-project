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


    }
)