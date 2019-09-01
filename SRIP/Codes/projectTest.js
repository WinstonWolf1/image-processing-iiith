
/**
 * Test function to test if processing functions work
 * 
 */
function testSuite() {
    var inputImCanvas = document.getElementById("inputImCanvas"),
        inputImCanvasCtx = inputImCanvas.getContext("2d");
    
    inputImCanvasCtx.globalAlpha = 1.0;
    var selectedImage = inputImCanvasCtx.getImageData(0, 0, inputImCanvasCtx.canvas.width, inputImCanvasCtx.canvas.width);
    translatedImage = translate(selectedImage, 30, 60);
    inputImCanvasCtx.putImageData(translatedImage, 0,0);
    
}