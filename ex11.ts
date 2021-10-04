function last(str='', len=1){
        let last=''
        if (len > str.length){
            return str
        }
        else{
            for (var i=(str.length - len); i<str.length ; i++){
                last+=str[i]
            }
        }
        return last
}

console.log(last('tony', 5))