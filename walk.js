const generateWalk = () => {
    const thirdSegmentDirection = () => {
        thirdSegmentChoices = ['A', 'B'];
        const direction = thirdSegmentChoices[Math.floor(Math.random() * 2 )];
        return `3${direction}`;
    }
    let walkSegments = ['1', '2', thirdSegmentDirection()];
    return walkSegments;
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
     return array;
}
 module.exports = { shuffleArray, generateWalk };