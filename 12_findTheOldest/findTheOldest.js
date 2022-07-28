const getAge = (yearOfDeath, yearOfBirth) => {
    if (yearOfDeath) return yearOfDeath - yearOfBirth;
    return (new Date()).getFullYear() - yearOfBirth;
}

const findTheOldest = function(arr) {
    return arr.reduce((oldest, p) => {
        if ("name" in oldest === false) {
            oldest["name"] = p.name;
            oldest["age"] = getAge(p.yearOfDeath, p.yearOfBirth);
        } else {
            let age = getAge(p.yearOfDeath, p.yearOfBirth);
            
            if (oldest.age < age) {
                oldest["name"] = p.name;
                oldest["age"] = age;
            }
        }
        
        return oldest;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
