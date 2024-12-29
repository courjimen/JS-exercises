function reverseString(str) {
    const revStr = []
    for(let i=0; i < str.length; i++){
      const character = str[i];
      //console.log(character)
      revStr.unshift(character);
      }
   //console.log(revStr.join(""));
    return revStr.join("");
  }
  console.log(reverseString("hello"))
console.log(reverseString("howdy"))
console.log(reverseString("yay"))

