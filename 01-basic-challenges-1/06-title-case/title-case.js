function titleCase(input) {
    return input
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

module.exports = titleCase;
