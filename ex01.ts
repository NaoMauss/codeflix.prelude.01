const letter: any = {
    'A': 'a',
    'B': 'b',
    'C': 'c',
    'D': 'd',
    'E': 'e',
    'F': 'f',
    'G': 'g',
    'H': 'h',
    'I': 'i',
    'J': 'j',
    'K': 'k',
    'L': 'L',
    'M': 'm',
    'N': 'n',
    'O': 'o',
    'P': 'p',
    'Q': 'q',
    'R': 'r',
    'S': 's',
    'T': 't',
    'U': 'u',
    'V': 'v',
    'W': 'w',
    'X': 'x',
    'Y': 'y',
    'Z': 'z',
  }


function lowerCase(str:string){
    let low=''
    let alph='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (var i=0; i<str.length; i++){
        if (alph.includes(str[i])){
            low=low.concat(letter[str[i]])
        }
        else{
            low=low.concat(str[i])
        }
        
    }
    return low

}


console.log(lowerCase('COU!OU'))
