const findMatching = (arr, name) => {
    return arr.filter(function(ele){
        return ele.toLowerCase().indexOf(name.toLowerCase()) !== -1; //this line makes the filter case insensitive
    })
}

const fuzzyMatch = (arr, char) => {
    return arr.filter(ele => String(ele).startsWith(char));
}
 //startsWith() is a string method
/* https://stackoverflow.com/questions/50030338/combine-filter-and-startswith-to-filter-array */


function matchName(arr, name){
    return arr.filter(ele => Object.keys(ele).some(key => ele[key].toLowerCase().includes(name.toLowerCase())));
}

//Object.keys gets property names
//.some() method iterates keys and exits loop if found
//.includes checks strings for equality