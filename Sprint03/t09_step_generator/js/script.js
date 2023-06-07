function* funcGenerator() {
    let value = 1;

    while (true) {
        const number = prompt(`Previous result: ${value}. Enter a new number:`);
        
        if (number === "stop") {
            yield 0;
        } else if (isNaN(number) || number === null) {
            console.error('Invalid number!');
        } else {
            value += Number(number);
            value = value > 10000 ? 1 : value;
        }

        yield 1;
    }
}

let g = funcGenerator();

let run = true;
while(run){
    run = g.next().value;
}


  