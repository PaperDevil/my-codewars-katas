function highAndLow(numbers){
    let inters = numbers.split(' ').map(Number)
    let hl = [inters[0], inters[0]]
    inters.forEach(el => {
        if (hl[0] > el) hl[0] = el;
        if (hl[1] < el) hl[1] = el;
    });
    return `${hl[1]} ${hl[0]}`
}

console.log( highAndLow("-2 -6 -9") );