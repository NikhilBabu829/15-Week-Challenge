// The "Encode and Decode Strings" problem asks you to design a way to "pack" a list of strings into a single string and
// then "unpack" that same single string back into the exact original list.


// The Core Challenge
// The main difficulty is ambiguity. Since each string in the list can contain any character (all 256 ASCII characters),
// you cannot simply pick a character like a comma , or a space to separate the strings.


// Why a simple separator fails:
// If your input list is ["Hello,World", "Next"] and you use a comma as a separator, your encoded string might look like
// "Hello,World,Next". When you try to decode it, you won't know if the original list was ["Hello", "World", "Next"] or
// ["Hello,World", "Next"].


// Your Task
// You must implement two functions:
// 1. encode(strs): Takes a list of strings and returns one single string that represents the entire list.
// 2. decode(s): Takes that single string and returns the original list of strings.


// The goal is to ensure that decode(encode(strs)) always equals strs, regardless of what characters (symbols, numbers,
// or whitespace) are inside the strings.

const strs = []

function encode(strs){

    if (strs.length == 0) return ""

    let encodedString = ""

    for(let i=0;i<strs.length;i++){
        let string = strs[i]
        encodedString+= string.concat("","???")
    }

    return encodedString

}

function decode(strs){
    if(strs.length == 0) return []
    const array = strs.split("???")
    array.pop()
    return array
}

const encodedBit = encode(strs)
decode(encodedBit)
