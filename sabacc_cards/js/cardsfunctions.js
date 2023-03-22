// Define a function named getHandName that takes a single parameter, cards
function getHandName(cards) {
    //console.log(JSON.stringify(cards))
    let checkpuresabacc = ""
    let checkfullsabacc = ""
    let checkfleet = ""
    let checkyeehaa = ""
    let checkrhylet = ""
    let checksquadron = ""
    let checkgeewhiz = ""
    let checkstraightkhyron = ""
    let checkbanthaswild = ""
    let checkruleoftwo = ""
    let checkpairedsabacc = ""
    // Calculate the total value of the cards by using reduce to sum the integer values of each card
    const totalValue = cards.reduce((sum, card) => sum + parseInt(card.value), 0);
    // Get the number of cards in the hand
    const cardCount = cards.length;
    // Filter out the zero-valued cards and non-zero valued cards into separate arrays
    const zeroCards = cards.filter(card => card.value === "0");
    const nonZeroCards = cards.filter(card => card.value !== "0");

    // tiebreaker variables
    let cardnumber = cards.length

    //check for pure sabacc
    // Check if there are exactly two cards and their total value is zero and the number of zero cards is 2
    if (cardCount === 2 && totalValue === 0 && zeroCards.length == 2) {
        // If true, return a Pure Sabacc hand with a description and a ranking value
        checkpuresabacc = "true"
        return ["Pure Sabacc", "two zero cards", 1];
    }

    // Check if there is exactly one zero card and four non-zero cards
    if (zeroCards.length === 1 && nonZeroCards.length === 4) {
        // Find positive tens (10 and 10) and negative tens (-10 and -10) among the non-zero cards
        const positiveTens = nonZeroCards.filter(card => card.value === "10");
        const negativeTens = nonZeroCards.filter(card => card.value === "-10");
        // - example filter for two things - const negativeTens = nonZeroCards.filter(card => card.value === "-10" || card.value === "0");
        // Check if there are exactly two positive tens and two negative tens
        if (positiveTens.length === 2 && negativeTens.length === 2) {
            // If true, return a Full Sabacc hand with a description and a ranking value
            checkfullsabacc = "true"
            return ["Full Sabacc", "a zero card and four tens (2 positive and 2 negative) to sum all cards to zero", 2];
        }
    }

    const nonZeroValues = nonZeroCards.map(card => card.value);

    function areAllNumbersSame(arr) {
        if (arr.length === 0) {
            return true;
        }
        const firstNumber = Math.abs(parseInt(arr[0]));
        return arr.every((num) => Math.abs(parseInt(num)) === firstNumber);
    }
    const nonZeroCardsSame = areAllNumbersSame(nonZeroValues)

    // Check if there is exactly one zero card and four matching 
    if (nonZeroCardsSame == true && zeroCards.length === 1 && nonZeroCards.length === 4) {
        // Get the rank of each non-zero card
        const fleetpositiveTens = nonZeroCards.filter(card => card.value === "10");
        const fleetnegativeTens = nonZeroCards.filter(card => card.value === "-10");
        if (totalValue == 0 && fleetnegativeTens.length == 0 && fleetpositiveTens.length == 0) {
            // If true, return a Fleet hand with a description and a ranking value
            checkfleet = "true"
            return ["Fleet", "a zero card and four of a kind not tens (2 positive and 2 negative) all cards total equals zero", 3];
        }
    }

    // Check if there is exactly one zero card and two non-zero cards
    if (zeroCards.length === 1 && nonZeroCards.length === 2) {
        if (nonZeroCardsSame == true && totalValue == 0) {
            // If true, return a Yee-Haa hand with a description and a ranking value
            checkyeehaa = "true"
            return ["Yee-Haa", "a zero card and a pair (one positive and one negative) all cards totalling zero", 4];
        }
    }

    // check for threesame and two same


    function areAllNumbersSameTwoThree(arr) {
        if (arr.length === 0) {
            return true;
        }
    
        const counts = countOccurrences(arr);
        const isThreeSame = Object.values(counts).some(count => count >= 3);
    
        // Filter out numbers with a count of 3 or more
        const filteredCounts = Object.fromEntries(Object.entries(counts).filter(([key, value]) => value < 3));
    
        // Check for pairs after filtering out 3 or more occurrences
        const isTwoSame = Object.values(filteredCounts).some(count => count >= 2);
    
        return {
            isThreeSame,
            isTwoSame
        };
    }
    
    function countOccurrences(arr) {
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
    
    const nonZeroCardsSameThreeTwo = areAllNumbersSameTwoThree(nonZeroValues);
    //console.log(nonZeroCardsSameThreeTwo);

    // Check if there is exactly one zero card and two non-zero cards

    if (totalValue == 0 && nonZeroCardsSameThreeTwo.isThreeSame == true && nonZeroCardsSameThreeTwo.isTwoSame == true && zeroCards.length === 0 && nonZeroCards.length === 5) {
            // If true, return a Yee-Haa hand with a description and a ranking value
            checkrhylet = "true"
            return ["Rhylet", "positive of three of a kind and a negative pair or vice versa totalling zero", 5];
    }
    

    // Check if there is 4 of a kind equaling zero
    if (totalValue == 0 && nonZeroCardsSame == true && zeroCards.length === 0 && nonZeroCards.length === 4) {
            // If true, return a Squadron hand with a description and a ranking value
            checksquadron = "true"
            return ["Squadron", "Four of a kind, (two positive, two negative) totaling zero", 6];
    }

    // Check if there is 4 of a kind equaling zero
    if (totalValue == 0 && zeroCards.length === 0 && nonZeroCards.length === 5) {
        // If true, return a Gee Whiz hand with a description and a ranking value
            positiveCardone = nonZeroCards.some(card => card.value == "1");
            positiveCardtwo = nonZeroCards.some(card => card.value == "2");
            positiveCardthree = nonZeroCards.some(card => card.value == "3");
            positiveCardfour = nonZeroCards.some(card => card.value == "4");
            positiveCardten = nonZeroCards.some(card => card.value == "10");
            negativeCardone = nonZeroCards.some(card => card.value === "-1");
            negativeCardtwo = nonZeroCards.some(card => card.value === "-2");
            negativeCardthree = nonZeroCards.some(card => card.value === "-3");
            negativeCardfour = nonZeroCards.some(card => card.value === "-4");
            negativeCardten = nonZeroCards.some(card => card.value === "-10");
        if ((positiveCardone == true && positiveCardtwo == true && positiveCardthree == true && positiveCardfour == true && negativeCardten == true) || (negativeCardone == true && negativeCardtwo == true && negativeCardthree == true && negativeCardfour == true && positiveCardten == true)) {
            checkgeewhiz = "true"
            return ["Gee Whiz", " 1 2 3 and 4 and -10 or -1 -2 -3 -4 and 10 totalling zero", 7];
        }
    }
    
    const ZeroNonZeroValues = cards.map(card => card.value);

    // check for sequential
    function isSequential(arr) {
        // Convert string values to numbers and change negative numbers to positive
        const positiveArr = arr.map(Number).map(Math.abs);
      
        // Sort the array in ascending order
        const sortedArr = positiveArr.sort((a, b) => a - b);
      
        // Iterate through the sorted array and check if the difference between each consecutive pair of numbers is 1
        for (let i = 0; i < sortedArr.length - 1; i++) {
          if (sortedArr[i + 1] - sortedArr[i] !== 1) {
            return false;
          }
        }
      
        return true;
      }

      const areCardsSequential = isSequential(ZeroNonZeroValues)
      //console.log(areCardsSequential)
      //console.log(cards.length)
      //console.log(ZeroNonZeroValues)

    // Check if there is 4 sequential equals zero
    if (totalValue == 0 && areCardsSequential == true && cards.length == 4) {
        // If true, return a Squadron hand with a description and a ranking value
        checkstraightkhyron = "true"
        return ["Straight Khyron", "a sequential run of four cards totaling zero, may include a sylop", 8];
    }


    //console.log(nonZeroCardsSameThreeTwo.isThreeSame)
    //console.log(nonZeroCardsSameThreeTwo.isTwoSame)
    //console.log(cards.length)
    //console.log(ZeroNonZeroValues)

    if (totalValue == 0 && nonZeroCardsSameThreeTwo.isThreeSame == true && nonZeroCardsSameThreeTwo.isTwoSame == false && (cards.length === 4 || cards.length === 5)) {
        // If true, return a Yee-Haa hand with a description and a ranking value
        checkbanthaswild = "true"
        return ["Banthas Wild", "Three of a kind plus one or two other cards totalling zero", 9];
    }

    // check for two distinct pairs
    function checkTwoDistinctPairs(arr) {
        if (arr.length === 0) {
            return false;
        }
    
        const counts = countAbsoluteOccurrences(arr);
        const filteredCounts = filterCounts(counts, 2);
    
        // Check for two distinct pairs
        const pairCount = Object.values(filteredCounts).filter(count => count >= 2).length;
        const hasTwoDistinctPairs = pairCount >= 2;
    
        return hasTwoDistinctPairs;
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

    const paironeandpairtwo = checkTwoDistinctPairs(ZeroNonZeroValues)

    //console.log(paironeandpairtwo)
    if (totalValue == 0 && paironeandpairtwo == true && (cards.length === 4 || cards.length === 5)) {
        // If true, return a Yee-Haa hand with a description and a ranking value
        checkruleoftwo = "true"
        return ["Rule of Two", "two pairs with a total hand value of zero (may contain a fifth card)", 10];
    }

    const atleastonepair = areAllNumbersSameTwoThree(ZeroNonZeroValues)
    // Check if the total value of the cards is zero and there is a pair and none of the other hands apply
    if (totalValue === 0 && atleastonepair.isTwoSame == true && atleastonepair.isThreeSame == false && checkpuresabacc == "" && checkfullsabacc == "" && checkfleet == "" && checkyeehaa == "" && checkrhylet == "" && checksquadron == "" && checkgeewhiz == "" && checkstraightkhyron == "" && checkbanthaswild == "" && checkruleoftwo == "") {
        // If true, return a Regular Sabacc hand with a description and a ranking value
        checkpairedsabacc = "true"
        return ["Paired Sabacc", "a pair with a total hand value of zero (may or may not contain more cards)", 11];
    }


    // Check if the total value of the cards is zero
    if (totalValue === 0 && checkpuresabacc == "" && checkfullsabacc == "" && checkfleet == "" && checkyeehaa == "" && checkrhylet == "" && checksquadron == "" && checkgeewhiz == "" && checkstraightkhyron == "" && checkbanthaswild == "" && checkruleoftwo == "" && checkpairedsabacc == "") {
        // If true, return a Regular Sabacc hand with a description and a ranking value
        return ["Regular Sabacc", "any combination of cards that sum to equal a total of zero", 12];
    }
    // If none of the above conditions are met, return a Nulrhek hand with a description and a ranking value
    return ["Nulrhek", "any combination of cards that are not equal to zero", 14];

    // extra snippets
    //        // Find a positive and a negative card among the non-zero cards
    //const positiveCard = nonZeroCards.find(card => card.value !== "1" && card.value !== "0"); // finds and returns card object
    //const negativeCard = nonZeroCards.find(card => card.value === "1" || card.value === "0");

}