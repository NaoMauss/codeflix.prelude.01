const LETTER: any = {
    'a': 'A',
    'b': 'B',
    'c': 'C',
    'd': 'D',
    'e': 'E',
    'f': 'F',
    'g': 'G',
    'h': 'H',
    'i': 'I',
    'j': 'J',
    'k': 'K',
    'l': 'L',
    'm': 'M',
    'n': 'N',
    'o': 'O',
    'p': 'P',
    'q': 'Q',
    'r': 'R',
    's': 'S',
    't': 'T',
    'u': 'U',
    'v': 'V',
    'w': 'W',
    'x': 'X',
    'y': 'Y',
    'z': 'Z',
  }


function upperCase(stri:string){
    let upper=''
    let ALPH='abcdefghijklmnopqrstuvwxyz'
    for (var x=0; x<stri.length; x++){
        if (ALPH.includes(stri[x])){
            upper=upper.concat(LETTER[stri[x]])
        }
        else{
            upper=upper.concat(stri[x])
        }
        
    }
    return upper

}

console.log(upperCase('cOu!ou'))
