import { strictEqual } from "assert";
import { LeftHandSideExpression } from "typescript";

function first(str='', len=1){
    let firt=''
    if (len > str.length){
        return 'error'
    }
    else{
        for (var i=0; i<len ; i++){
            firt+=str[i]
                }
    }
    return firt
}
console.log(first('COUCOU', 3))

