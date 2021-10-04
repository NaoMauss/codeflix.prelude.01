function substr(str='', start=0, len=str.length){
    let sub=''
    if ((len-start) > str.length){
        return str
    }
    else{
        for (var i=start; i<len ; i++){
            sub+=str[i]
        }
    }
    return sub
}

console.log(substr('chopppper', 2))