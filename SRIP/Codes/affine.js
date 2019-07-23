/**
 *  Returns a image translated by xOffset in x direction and yOffset in y direction
 * 
 * @param {ImageData} inputImage
 * @param {number} xOffset
 * @param {number} yOffset
 */

function translate(inputImage, xOffset, yOffset){
    outputImage = new ImageData(inputImage.width + Math.abs(xOffset), inputImage.height + Math.abs(yOffset));

    for(let i = 0; i < outputImage.data.length; i += 4){
        // Coordinates from top left corner
        let coord = getCoordinates(outputImage, i);
        if(((coord.x - xOffset) >= 0) && ((coord.y - yOffset) >= 0)) {
            let index = getIndex(inputImage, x, y);
            outputImage.data[i + 0] = inputImage.data[index + 0];
            outputImage.data[i + 1] = inputImage.data[index + 1];
            outputImage.data[i + 2] = inputImage.data[index + 2];
            outputImage.data[i + 3] = 255;
        }
    }

    return outputImage;

}


/**
 * Returns an image rotated by angle degrees in anticlockwise direction
 *
 * @param {ImageData} inputImage
 * @param {number} angle
 */
function rotate(inputImage, angle, interpolType){
    outputImage = new ImageData(inputImage.width, inputImage.height);

    for(let i = 0; i < outputImage.data.length; i += 4){
        // Coordinates from top left corners
        let coord = getCoordinates(outputImage, i);
        let x = coord.x;
        let y = coord.y;

        originalCoord = new Object();

        originalCoord.x = Math.cos(angle) * x + Math.sin(angle) * y;
        originalCoord.y = Math.sin(angle) * x + Math.cos(angle) * y;

        let pixelvalues = new Object();
        pixelvalues.alpha = 255;

        if((originalCoord.x % 1)===0 && (originalCoord.y % 1)===0){
            let index = getIndex(inputImage, x, y);
            pixelvalues.red = inputImage.data[index + 0];
            pixelvalues.green = inputImage.data[index + 1];
            pixelvalues.blue = inputImage.data[index + 2];
        } else{
            pixelvalues = interpolate(inputImage, originalCoord.x, originalCoord.y, interpolType);
        }

        outputImage.data[i + 0] = pixelvalues.red;
        outputImage.data[i + 1] = pixelvalues.green;
        outputImage.data[i + 2] = pixelvalues.blue;
        outputImage.data[i + 3] = pixelvalues.alpha;

    }

    return outputImage;
}