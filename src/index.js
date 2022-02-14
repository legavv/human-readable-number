module.exports = function toReadable (number) {
    const res = '';
    const lengthNumber = number.toString().length;
    const arrNumberFrom1To19 = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
        'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
        'eighteen', 'nineteen' 
    ]
    const arrNumber = [
        '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    const hundred = 'hundred';

    if (lengthNumber === 3) {
        const rankThree = Math.floor(number / 100); 
        const numberWithoutHightRank = number - rankThree * 100;
        return `${arrNumberFrom1To19[rankThree]} ${hundred} ${writeRankTwoNumber(numberWithoutHightRank)}`.trim();
    } else if (lengthNumber === 2 && number > 19)  {
        return writeRankTwoNumber(number);
    } else if (number <= 19 && number > 0) {
        return arrNumberFrom1To19[number];
    } else if (number === 0) {
        return 'zero';
    } else {
        return 'number out range';
    }
    function writeRankTwoNumber (num) {
        let rankTwo = Math.floor(num / 10);
        if (rankTwo === 1) {
            return arrNumberFrom1To19[num]
        }
        if (rankTwo === 0) {
            rankTwo = 1;
        }
        const rankOne = num % 10 
            return `${arrNumber[rankTwo - 1]} ${arrNumberFrom1To19[rankOne]}`.trim();
    }
}

