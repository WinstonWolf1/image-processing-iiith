/**
 *  Returns the x and y coordinate of the pixel at the given index
 *  
 * @param {ImageData} imageData
 * @param {number} index
 * 
 * @returns {Object}
 */
function getCoordinates(imageData, index) {
    let x = i % (imageData.data.width * 4);
    let y = i / (imageData.data.width * 4);
    return {
        x : x,
        y : y
    }
}

/**
 * 
 * @param {ImageData} imageData 
 * @param {number} xCoord 
 * @param {number} yCoord 
 */
function getIndex(imageData, xCoord, yCoord){
    return (((yCoord * imageData.width) + xCoord) * 4);
}
