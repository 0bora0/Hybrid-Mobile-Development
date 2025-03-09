function personalInfo(...parameeters) {
    let obj = {};
    for (let i = 0; i < parameeters.length; i += 2) {
        let key = parameeters[i];
        let value = parameeters[i + 1];
        obj[key] = value;
    }
    return obj;
}
console.log(personalInfo("name", "Ivan", "age", 28, "gender", "male"));

