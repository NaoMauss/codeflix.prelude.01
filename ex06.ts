function kebabCase(str=''){
    let err=" -"
    let MAJ="AZERTYUIOPMLKJHGFDSQWXCVBN"
    let kebab= ''
    let kebab_trans=''
    for (var y=0; y<str.length; y++){
        if (!err.includes(str[y])){
            kebab_trans=kebab_trans.concat(str[y])
        }
    }



    for (var i=0; i<kebab_trans.length; i++){
            if (MAJ.includes(kebab_trans[i])){
                if (i!=0 && i!=(kebab_trans.length)){
                    kebab=kebab.concat('-')
                    kebab=kebab.concat(kebab_trans[i].toLowerCase())
                }
                else{
                    kebab=kebab.concat(kebab_trans[i].toLowerCase())
                }
            }
            else{
                kebab=kebab.concat(kebab_trans[i])
            }
    }
    return kebab
}

console.log(kebabCase('-Love-One-'))
