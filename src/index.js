module.exports = function zeros(expression) {
    let count2 = 0,
        count5 = 0;

    function fact(n) {
        n = parseInt(n);
        while (n > 1) {
            countNum(n);
            n = n - 1;
        }
    }

    function doubleFact(n) {
        n = parseInt(n);
        while (n > 1) {
            countNum(n);
            n = n - 2;
        }
    }

    let arr = expression.split('*');
    arr = arr.map((x => {
        if (x.includes('!!')) {
            x = doubleFact(x);
        } else if (x.includes('!')) {
            x = fact(x);
        }
        return x;
    }))

    function countNum(n) {
        let copy = n;
        while (copy % 2 === 0 && copy > 1) {
            count2++;
            copy = copy / 2;
        }
        copy = n;
        while (copy % 5 === 0 && copy > 1) {
            count5++;
            copy = copy / 5;
        }
    }
    
    return Math.min(count2, count5);
}