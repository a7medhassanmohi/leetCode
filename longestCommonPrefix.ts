//Write a function to find the longest common prefix string amongst an array of strings.

//If there is no common prefix, return an empty string "".

 

//Example 1:

//Input: strs = ["flower","flow","flight"]
//Output: "fl"
//Example 2:

//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.

//................................................................................
//soln 1:

function longestCommonPrefix(strs: string[]): string {
    let prefix:string=strs[0];
    for(let i=1;i<strs.length;i++){
        while(!strs[i].startsWith(prefix)){
            prefix=prefix.slice(0,-1)
        }
        if(!prefix) return prefix
    }
return prefix
};
                                    
                                    

//.....................................................................................
//soln2:


function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        const currLetter = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== currLetter) {
                return prefix
            } 
        }
        prefix += currLetter;

    }
    return prefix;

};
