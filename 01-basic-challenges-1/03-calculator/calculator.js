function calculator(a,b,c) {
    
if(c=='+'){
    return a+b
} else if(c=='-'){
return a-b;
} else if(c=='*'){
    return a*b;
} else if(c=='%'){
    return a%b;

} else if(c=='/'){
    return a/b;
}
}


module.exports = calculator;
