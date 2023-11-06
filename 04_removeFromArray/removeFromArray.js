const removeFromArray = function(dasArray, ...args) {
    args.forEach((arg) => {
        const index = dasArray.indexOf(arg);
        if (index > -1) {
            dasArray.splice(index, 1);
        }
    });

    return dasArray;
};

// Do not edit below this line
module.exports = removeFromArray;
