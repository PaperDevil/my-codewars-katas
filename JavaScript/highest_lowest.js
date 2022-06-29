function highAndLow(numbers){
    let inters = numbers.split(' ').map(Number)
    let hl = [inters[0], inters[0]]
    inters.forEach(el => {
        if (hl[0] > el) hl[0] = el;
        if (hl[1] < el) hl[1] = el;
    });
    return `${hl[1]} ${hl[0]}`
}

function highAndLow2(numbers) {
	let inters = numbers.split(' ').map(Number)
	return `${Math.max(...inters)} ${Math.min(...inters)}`
}

console.log( highAndLow2("1 2 9 -1 -9 8") );
