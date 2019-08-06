

var mosaicImg = new Image();
mosaicImg.src = "res/Mosaic.png"; // Set source path

// mosaicImg.addEventListener('load', function() {
// }, false);

let inputImCanvas = document.getElementById("inputImCanvas");
// mosaicImg.onload = function () {
//     let inputImCanvasCtx = inputImCanvas.getContext("2d");
//     inputImCanvasCtx.drawImage(mosaicImg, 0, 0);
//     inputImCanvasCtx.drawImage(mosaicImg, 0, 0, inputImCanvas.width, inputImCanvas.height);
// };

function selectImage() {
    $("#MosaicImgModal").modal('show');
    // $("#MosaicImgModal").on('shown.bs.modal',function (e) {});
    $("#mosaicSelectImage").imgAreaSelect({
        handles: true,
        autoHide: true,
        // minHeight: 300,
        // maxHeight: 300,
        aspectRatio: "1:1",
        resizeable: false,
        onSelectEnd: function (img, selection) {}
    });
}