function capitalize(str:string, restToLower=false){
    let cap=''
    let alph='azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN'
    for(var i=0; i<1; i++){
        if (alph.includes(str[i])){
            cap=cap.concat(str[i].toUpperCase())
        }
    }
    if (restToLower === true){
        for (var x=1; x<str.length; x++){
            if (alph.includes(str[x])){
                cap=cap.concat(str[x].toLowerCase())
            }
        }
    }
    else{
        for (var y=1; y<str.length; y++){
            cap=cap.concat(str[y])
        }
    }
    return cap
}

console.log(capitalize('aNOYONO', true))