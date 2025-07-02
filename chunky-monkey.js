let array = [];
let remainingInArray = [];

function chunkArrayInGroups(array, num) {
    let timesToRun = Math.ceil(array.length / num)
    for (let i = 0; i < timesToRun; i++) {
        remainingInArray.push(array.splice(0, num))
    }
    return remainingInArray
}

