// ======== SCRIPT ASLI KAMU (pesan, animasi, dll) ========

var bodyblur = document.querySelector("#bodyblur");
var Content = document.querySelector("#Content");
var Content2 = document.querySelector("#Content2");
var ket = document.querySelector("#ket");
var kadoIn = document.querySelector("#kadoIn");
var kadoIn2 = document.querySelector("#kadoIn2");
var ft1 = document.querySelector("#ft1");
var ft2 = document.querySelector("#ft2");
var ft3 = document.querySelector("#ft3");
var ft4 = document.querySelector("#ft4");
var ft5 = document.querySelector("#ft5");
var wall = document.querySelector("#wall");
var wallpaper = document.querySelector("#wallpaper");
var ketgambar = document.querySelector("#ketgambar");
var tombol = document.querySelector("#tombol");
var tombol2 = document.querySelector("#tombol2");
var musik = document.querySelector("#musik");
var fungsi = 0;

// Fungsi asli
function initengahan(){
    kadoIn.style="display:none";
    ket.style="display:none";
    Content.style = "opacity:1;margin-top:0";
    bodyblur.style="opacity:.7";
    wallpaper.style="transform: scale(1.5);";
}  

function mulainama() {
    bodyblur.style="opacity:.7";
}

// Fungsi tombol Lanjut
function lanjut(){
    fungsi = 1;
    console.log("Tombol lanjut ditekan");
}

// Fungsi tombol Balas
function balas(){
    fungsi = 2;
    menuju(); // Klik balas langsung menuju video
}

// ======== FUNGSI MENUJU BARU ========

function menuju() {
    // Ganti 'link_video.mp4' dengan URL video kamu
    var videoUrl = 'link_video.mp4';
    
    document.body.innerHTML = `
        <video id="videoPlayer" width="100%" height="100%" autoplay controls style="background:black; object-fit:cover;">
            <source src="${videoUrl}" type="video/mp4">
            Browser kamu tidak mendukung video.
        </video>
    `;

    var vid = document.getElementById('videoPlayer');
    vid.play().catch(() => {
        console.log("Autoplay diblokir, klik play untuk mulai");
    });
}
