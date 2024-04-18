(function () {
  var bv = new Bideo();
  bv.init({
    // Video element
    videoEl: document.querySelector("#background_video"),

    // Container element
    container: document.querySelector("body"),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia("(max-width: 768px)").matches,

    playButton: document.querySelector("#play"),
    pauseButton: document.querySelector("#pause"),

    // Array of objects containing the src and type
    // of different video formats to add
    src: [
      {
        src: "video/video.mp4",
        type: "video/mp4",
      },
      {
        src: "night.webm",
        type: 'video/webm;codecs="vp8, vorbis"',
      },
    ],

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector("#video_cover").style.display = "none";
    },
  });
})();

// var objeto = document.getElementById('objeto');
// var imagenObjeto = document.getElementById('imagenObjeto');

// document.addEventListener('mousemove', function(event) {
//   var x = event.clientX;
//   var y = event.clientY;

//   objeto.style.left = (x - objeto.clientWidth / 2) + 'px';
//   objeto.style.top = (y - objeto.clientHeight / 2) + 'px';

// });

// objeto.addEventListener('click', function(){
//   imagenObjeto.src = 'img/cursor2.gif';

//   setTimeout(function(){
//     imagenObjeto.src = 'img/cursor1.gif';
//   }, 1000);

// });

document.getElementById("buttonSlogan").addEventListener("click", function () {
  console.log("funcoiona al dar click");
});

// document.getElementById('khalilButton').addEventListener('click', function(){
//   const destino = document.getElementById('21thStreet');
//   destino.scrollIntoView({
//     behavior: 'smooth',
//   });
// });

document.getElementById("hiroshiButton").addEventListener("click", function () {
  const destino = document.getElementById("yamiNoTora");
  destino.scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("enzoButton").addEventListener("click", function () {
  const destino = document.getElementById("ilFiglioDiEnzo");
  destino.scrollIntoView({
    behavior: "smooth",
  });
});

document.getElementById("javierButton").addEventListener("click", function () {
  const destino = document.getElementById("cartelDeSanJuan");
  destino.scrollIntoView({
    behavior: "smooth",
  });
});
