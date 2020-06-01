// if(year%4==0&&(year<1918||year%400==0||year%100!=0))
    
// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    if (year % 4 === 0 
        && (year<1918 
            || year % 400 === 0 
            || year % 100 !== 0)
        ) {
        return `12.09.${year}`;
    } else if (year === 1918) {
        return '26.09.1918';
    } else {
        return `13.09.${year}`;
    }

}
//13.09.2017
console.log(dayOfProgrammer(2017));
//12.09.2016
console.log(dayOfProgrammer(2016));
//12.09.1800
console.log(dayOfProgrammer(1800));