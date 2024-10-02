/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map() ;
    for(let str of strs){
        let sortedstr = str.split('').sort().join('');
        if(!map.has(sortedstr)){
            map.set(sortedstr,[])
        }
        map.get(sortedstr).push(str);

    }
    return Array.from(map.values());
};