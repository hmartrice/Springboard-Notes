//Question 1
// newSet returns {1,2,3,4}

//Question 2
//returns "ref"

//Question 3
// {[123],false}

const hasDuplicate = ([...arr]) => {
    const newSet = new Set(arr)
    return (newSet.size !== arr.length)
}

const vowelCount = (string) => {
    const vowels = new Set("aeiou")
    const newMap = new Map()
    for (let x of string.toLowerCase()) {
        if (vowels.has(x)) {
            if (newMap.has(x)) {
                newMap.set(x, newMap.get(x) + 1)
            } else { newMap.set(x, 1) }
        }
    }
    return newMap
}