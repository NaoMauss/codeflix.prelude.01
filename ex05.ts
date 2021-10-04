function decapitalize(str=''){
    let cap=''
    let alph='azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN'
    for(var i=0; i<1; i++){
        if (alph.includes(str[i])){
            cap=cap.concat(str[i].toLowerCase())
        }
    }
    for(var x=1; x<str.length; x++){
        cap=cap.concat(str[i])
    }
    return cap
}


console.log(decapitalize('AAAAAAAAA'))