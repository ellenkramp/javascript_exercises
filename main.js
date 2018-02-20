//Print numbers in a range, each on new line using "for" loop
function printNumbers(start, end) {
    for (i = start; i<end+1; i++) {
       document.write(i + '</br>');
    }
}

printNumbers(1, 10);

//Print numbers in a range, each on new line using "while" loop
function printNumbersWhile(start, end) {
    var count = start;
    while (count<end+1) {
        document.write(count + '</br>');
        count++;
    }
}

printNumbersWhile(1, 10);

//Print square of asterisks
function printSquare(num) {
    for (i = 0; i<num; i++) {
        document.write("*".repeat(num));
        document.write('</br>');
    }
}

printSquare(5);

//Print hollow square of asterisks
function printBox(w, h) {
    var i = h;
    var middleString = "*"+ "_".repeat(w-2)+ "*";
    var topBottomString = "*".repeat(w);
    for (i = 0; i<h+1; i++) {
        if (i === 0 || i === h) {
            document.write(topBottomString);
            document.write('</br>');
        } else {
            document.write(middleString);
            document.write('</br>');
        } 
    }
}

printBox(8, 3);

//Print Digital Crafts Banner
function printBanner(string) {
    var bannerLength = string.length;
    var stars = "*".repeat(bannerLength) + '</br>';
    var bannerText = "*"+" "+string+" "+"*" + '</br>';
    document.write(stars);
    document.write(bannerText);
    document.write(stars);
}

printBanner("Welcome to DigitalCrafts");

//Factor a number
function factors(num) {
    var factorArray = [];
    for (i = 0; i<num+1; i++) {
        if (num%i === 0) {
            factorArray.push(i, num/i);
        }
    }
    factorArray = factorArray.sort();
    newArray = [];
    for (i=0; i<factorArray.length; i++) {
        if (newArray.indexOf(factorArray[i]) === -1) {
            newArray.push(factorArray[i]);
        }
    }
    document.write(newArray);
}
factors(20);