function countSubstrings(str='', substring=''){
    let x =0
    let c = str.split(" ", str.length)
    for (var i=0; i<c.length; i++){
        if (substring == c[i]){
            x+=1
        }
        }
        return x
    }
    



console.log(countSubstrings('Apples are Apples', 'Apples'))