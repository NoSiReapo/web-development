function isPrimeNumber(n) {
    if (Array.isArray(n) || (Number.isInteger(n))) {
        if (Array.isArray(n)) {
            for ( let k = 0; k <= (n.length - 1); k++) {
                if (Number.isInteger(n[k])) {
                    isNumber = true
                } else {
                    isNumber = false
                    console.log('значение должно быть числом в массиве')
                    break
                }
            }
            if (isNumber) {
                for (let i = 0; i <= (n.length - 1); i++) {
                    isPrime = true
                    for (let j = 2; j < n[i]; j++) {
                        if (n[i] % j == 0) {
                            isPrime = false
                            break
                        }
                    }
                    if (isPrime && (n[i] != 1)) {
                        console.log(n[i], 'число - простое')
                    } else {
                        console.log(n[i],'число - не простое')
                    }
                }
            }
        } else {
            isPrime = true
            for (let j = 2; j < n; j++) {
                if (n % j == 0) {
                    isPrime = false
                    break
                }
            }
            if (isPrime && (n != 1)) {
                console.log(n, 'число - простое')
            } else {
                console.log(n, 'число - не простое')
            }
        }
    }
    else {
        console.log('значение должно быть числом в массиве')
    }
}
