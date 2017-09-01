var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
var commaSeparated = all.join(",");
var hyphenSeparated = all.join("-");
all.push("Lone")
all.push("Gitte");
all.unshift("Hans")
all.unshift("Kurt");
all.shift()
all.pop();
all.splice(3, 1).splice(4, 1);
all.reverse();
console.log(all);
all.sort();
console.log(all)
all = mySort(all);
console.log(all);
all.map(capitalizeFirstLetter);
console.log(all);
var filtered = all.filter(filter);
console.log(filtered);

function mySort(items) {
    var len = items.length, min;
    for (i = 0; i < len; i++) {
        min = i;
        for (j = i + 1; j < len; j++) {
            if (items[j].localeCompare(items[min]) < 0) {
                min = j;
            }
        }
        if (i != min) {
            swap(items, i, min);
        }
    }
    return items;
}
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function filter(string) {
    var firstChar = string.charAt(0);
    return firstChar == "L" || firstChar == "l";
}