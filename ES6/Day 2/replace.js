const stringCut = {
    [Symbol.replace]: function(str){
        if (str.length > 15) {
            return str.substring(0, 15) + '...';
        }
        return str;
    }
}

console.log('ahajajajajajajajsnjnsnsjnwsniwjsijwiqjwiqjwijwiqjwijiqjiqikqwqiqijqiqiqjoqiqw'.replace(stringCut));