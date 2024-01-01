/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim();
    const lastSpaceIndex = s.lastIndexOf(' ');
    return s.length - lastSpaceIndex -1 ;
};
