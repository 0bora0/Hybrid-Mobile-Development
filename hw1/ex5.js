function isLeapYear(year) {
    let year1 = parseFloat(year)
    if(year1%4==0){
        return true;
    }else if(year1%400==0){
        return true;
    } else if(year1%100==0 && year1%400!=0){
        return false;
    } else if(year1%4==0 && year1%100!=0){
        return true;
    } else{
        return false;
    }
}

console.log(isLeapYear(2016));