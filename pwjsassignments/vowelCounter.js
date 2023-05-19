function vowelCounter(strName) {
    let vowelCount = 0;
        let vowels =["a", "e", "i", "o", "u"];
            for (const char of strName) {
                if (vowels.includes(char)) {
                    vowelCount++;
                }
            }
            return vowelCount;
        }
console.log(vowelCounter("jai sri krishna")); 
