/**
 *
 * @param {ImageData} inputImage
 * @param {number} xCoord
 * @param {number} yCoord
 * @param {string} type
 */
function interpolate(inputImage, xCoord, yCoord, type) {
    let pixelValues = new Object();
    pixelValues.alpha = 255;
    switch (type) {
        case "nearest":
            let index = getIndex(inputImage, Math.round(xCoord), Math.round(yCoord));
            pixelvalues.red = inputImage.data[index + 0];
            pixelvalues.green = inputImage.data[index + 1];
            pixelvalues.blue = inputImage.data[index + 2];
            break;
        case "bilinear":
            break;
        case "bicubic":
            break;

        default:
            break;
    }

    return pixelValues;
}