/**
 *
 * @param {ImageData} inputImage
 */
function histogram(inputImage) {
    let histogramArray = new Array(256);

    for (let i = 0; i < inputImage.data.length; i += 4) {
        histogramArray[inputImage.data[i]] += 1;
    }

    return histogramArray;
}


/**
 * Function for global histogram equalization
 *
 * @param {ImageData} inputImage
 */
function globalHistogramEqualization(inputImage) {
    let outputImage = new ImageData(inputImage.width, inputImage.height);
    let originalHist = new Array(256);

    for (let i = 0; i < inputImage.data.length; i += 4) {
        originalHist[inputImage.data[i]] += 1;
    }

    let cumulativeHist = new Array(256);
    cumulativeHist[0] = originalhist[0];
    let outputHist = new Array(256);
    outputHist[0] = Math.floor(255 * cumulativeHist[0] / (inputImage.data.length / 4));
    for(let i = 1; i < 256; i++) {
        cumulativeHist[i] = cumulativeHist[i - 1] + originalHist[i];
        outputHist[i] = Math.floor(255 * cumulativeHist[i] / (inputImage.data.length / 4));
    }

    for(let i = 0; i < inputImage.data.length; i += 4) {
        outputImage.data[i + 0] = outputHist[inputImage.data[i + 0]];
        outputImage.data[i + 1] = outputHist[inputImage.data[i + 1]];
        outputImage.data[i + 2] = outputHist[inputImage.data[i + 2]];
        outputImage.data[i + 3] = 255;
    }

    return outputImage;
}