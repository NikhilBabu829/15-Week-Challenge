const s = "carrace"
const t = "racecar"

function isAnagram(s, t) {
    const S = s.split("").sort().toString()
    const T = t.split("").sort().toString()
    if(S == T){
        return true
    }else{
        return false
    }
}

console.log(isAnagram(s, t))