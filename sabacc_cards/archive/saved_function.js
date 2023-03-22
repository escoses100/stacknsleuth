function checkArrayPairs(arr, checkType) {
    if (arr.length === 0) {
        return false;
    }

    const counts = countAbsoluteOccurrences(arr);

    switch (checkType) {
        case 'two_three':
            return checkTwoThree(counts);
        case 'distinct_pairs':
            const filteredCounts = filterCounts(counts, 2);
            return checkTwoDistinctPairs(filteredCounts);
        default:
            throw new Error(`Invalid checkType: ${checkType}`);
    }
}

function checkTwoThree(counts) {
    const isThreeSame = Object.values(counts).some(count => count >= 3);
    const filteredCounts = filterCounts(counts, 2);
    const isTwoSame = Object.values(filteredCounts).some(count => count >= 2);

    return {
        isThreeSame,
        isTwoSame,
    };
}

function checkTwoDistinctPairs(filteredCounts) {
    const pairCount = Object.values(filteredCounts).filter(count => count >= 2).length;
    return pairCount >= 2;
}

function countAbsoluteOccurrences(arr) {
    const counts = {};

    arr.forEach((num) => {
        const absNum = Math.abs(parseInt(num));
        if (counts[absNum]) {
            counts[absNum]++;
        } else {
            counts[absNum] = 1;
        }
    });

    return counts;
}

function filterCounts(counts, maxCount) {
    return Object.fromEntries(
        Object.entries(counts).filter(([key, value]) => value <= maxCount)
    );
}





{
    "stave": "circle",
    "value": "-1",
    "id": "circle-1",
    "image": "./images/circle-1.png"
  },{
    "stave": "circle",
    "value": "-2",
    "id": "circle-2",
    "image": "./images/circle-2.png"
  },{
    "stave": "circle",
    "value": "-3",
    "id": "circle-3",
    "image": "./images/circle-3.png"
  },{
    "stave": "circle",
    "value": "-4",
    "id": "circle-4",
    "image": "./images/circle-4.png"
  },{
    "stave": "circle",
    "value": "-5",
    "id": "circle-5",
    "image": "./images/circle-5.png"
  },{
    "stave": "circle",
    "value": "-6",
    "id": "circle-6",
    "image": "./images/circle-6.png"
  },{
    "stave": "circle",
    "value": "-7",
    "id": "circle-7",
    "image": "./images/circle-7.png"
  },{
    "stave": "circle",
    "value": "-8",
    "id": "circle-8",
    "image": "./images/circle-8.png"
  },{
    "stave": "circle",
    "value": "-9",
    "id": "circle-9",
    "image": "./images/circle-9.png"
  },{
    "stave": "circle",
    "value": "-10",
    "id": "circle-10",
    "image": "./images/circle-10.png"
  },{
    "stave": "circle",
    "value": "1",
    "id": "circle1",
    "image": "./images/circle1.png"
  },{
    "stave": "circle",
    "value": "2",
    "id": "circle2",
    "image": "./images/circle2.png"
  },{
    "stave": "circle",
    "value": "3",
    "id": "circle3",
    "image": "./images/circle3.png"
  },{
    "stave": "circle",
    "value": "4",
    "id": "circle4",
    "image": "./images/circle4.png"
  },{
    "stave": "circle",
    "value": "5",
    "id": "circle5",
    "image": "./images/circle5.png"
  },{
    "stave": "circle",
    "value": "6",
    "id": "circle6",
    "image": "./images/circle6.png"
  },{
    "stave": "circle",
    "value": "7",
    "id": "circle7",
    "image": "./images/circle7.png"
  },{
    "stave": "circle",
    "value": "8",
    "id": "circle8",
    "image": "./images/circle8.png"
  },{
    "stave": "circle",
    "value": "9",
    "id": "circle9",
    "image": "./images/circle9.png"
  },{
    "stave": "circle",
    "value": "10",
    "id": "circle10",
    "image": "./images/circle10.png"
  }