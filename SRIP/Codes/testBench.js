

var mosaicImg = new Image();
mosaicImg.src = 'res/Mosaic.png'; // Set source path

// mosaicImg.addEventListener('load', function() {
// }, false);

let inputImCanvas = document.getElementById("inputImCanvas");
mosaicImg.onload = function () {
    let inputImCanvasCtx = inputImCanvas.getContext("2d");
    inputImCanvasCtx.drawImage(mosaicImg, 0, 0);
    inputImCanvasCtx.drawImage(mosaicImg, 0, 0, inputImCanvas.width, inputImCanvas.height);
}

