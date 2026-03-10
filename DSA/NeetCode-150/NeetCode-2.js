const s = "carrace"
const t = "racecar"

function isAnagram(s, t) {
    const S = s.split("").sort().join("")
    const T = t.split("").sort().join("")
    if(S == T){
        return true
    }else{
        return false
    }
}

console.log(isAnagram(s, t))