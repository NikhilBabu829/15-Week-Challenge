
const strs = ["stop","pots","reed","","tops","deer","opts",""]
const result = [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// result.map((ele, index)=>{
//     ele.map((element, ind)=>{
//         if(element.includes("cat")){
//             console.log("yes", ind, index)
//             result[index].push("found cat")
//         }else{
//             console.log("no")
//         }
//     })
// })

// console.log(result.find((ele) => ele.find((element)=>element == "stop")))
 
function groupAnagrams(strs){
    const baseArray = []
    baseArray.push([strs[0]])
    for(let i=1 ; i < strs.length ; i++){
        console.log(i)
        const F = strs[i].split("").sort().toString()
        console.log(F)
        baseArray.map((ele, index)=>{
            ele.map((element, index2)=>{
                const S = element.split("").sort().toString()
                if(S == F){
                    console.log("true")
                    if(!ele.includes(strs[i])){
                        baseArray[index].push(strs[i])
                    }
                }else{
                    console.log("false")
                    if(!ele.includes(strs[i]) && index == ele.length-1){
                        console.log("added a new element")
                        baseArray.push([strs[i]])
                    }
                }
            })
        })
    }
    console.log(baseArray)
}

// groupAnagrams(strs)

function groupAnagramsThree(strs){
    const baseArray = strs.sort()
    const strsAlphabetically = []
    for(let i = 0; i < strs.length; i++){
        const word = baseArray[i].split("").sort().toString()
        strsAlphabetically.push(word)
    }
    let currentGroup = []
    const result = []
    for(let i = 0; i < strsAlphabetically.length; i++){
        if(i > 0 && strsAlphabetically[i] !== strsAlphabetically[i-1]){
            result.push(currentGroup)
            currentGroup = []
        }
        currentGroup.push(baseArray[i])
    }
    if(currentGroup.length > 0){
        result.push(currentGroup)
    }
    console.log(strsAlphabetically)
    console.log(result)
}

function groupAnagramsFour(strs){
    const sortedStrs = strs.map(str => str.split("").sort().join(""))
    const anagramMap = {}
    for(let i = 0; i < strs.length; i++){
        const sortedStr = sortedStrs[i]
        if(anagramMap[sortedStr]){
            anagramMap[sortedStr].push(strs[i])
        }else{
            anagramMap[sortedStr] = [strs[i]]
        }
    }
    const result = Object.values(anagramMap)
}

// groupAnagramsThree(strs)
groupAnagramsFour(strs)