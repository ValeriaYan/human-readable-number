module.exports =  function toReadable (number) {
    let hundredsAndUnits = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    }

    let tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    let fromElevenToNineteen = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    if (number === 0) { return 'zero';}

    let res = '';
    let strNum = String(number);
    if(strNum.length === 1){
        res +=  hundredsAndUnits[+strNum[0]];
    }else{
        if(strNum.length === 3) {
            res += hundredsAndUnits[+strNum[0]] + ' '+ 'hundred' + ' ';
        }

        if(strNum[strNum.length - 2] === '1') {
            res += fromElevenToNineteen[+('1' + strNum[strNum.length - 1])];
        }else {
            if(strNum[strNum.length - 2] !== '0' || strNum[strNum.length - 1] !== '0'){
                if(strNum[strNum.length - 2] === '0'){
                    res += hundredsAndUnits[+strNum[strNum.length - 1]];
                }else if(strNum[strNum.length - 1] === '0'){
                    res += tens[+strNum[strNum.length - 2]];
                }else {
                    res += tens[+strNum[strNum.length - 2]] + ' ' + hundredsAndUnits[+strNum[strNum.length - 1]];
                }
            }
        }
    }

    return res.trim();
}
