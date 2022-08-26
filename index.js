// Code your solution here

function findMatching(arrDrivers, name) {
    const result = arrDrivers.filter(arrDrivers => arrDrivers.toLowerCase() == name.toLowerCase())
    return result;

}


function fuzzyMatch(arrDrivers, letter) {
    const returnDrivers = arrDrivers.filter(drivers => drivers.charAt(0) === letter.charAt(0))
    return returnDrivers;
}

function matchName(ar, b) {
    const w = ar.filter(ar => ar.name === b)
    return w;
}