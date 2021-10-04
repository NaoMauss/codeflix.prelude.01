import { lowerCase } from "./ex01"
import { upperCase } from "./ex02"


function swapcase(str=''){
 let swap = ''
 let abc = 'azertyuiopqsdfghjklmwxcvbn'
 let ABC = 'AZERTYUIOPQSDFGHJKLMWXCVBN'
 for (var i=0; i<str.length; i++){
     if (abc.includes(str[i])){
         swap+=upperCase(str[i])
     }
     else if (ABC.includes(str[i])){
         swap+=lowerCase(str[i])
     }
     else{
         swap+=str[i]
     }
 }
 return swap
}

console.log(swapcase('AbCdE'))