function firstLast6 (array){
    if (array[0]==6 || array[array.length-1]==6) {
        return true;
    }
    return false;
}


function has23 (array){
    if (array[0]==2 || array[0]==3 || array[1]==2 || array[1]==3 ){
        return true;
    }
    return false;
}


function fix23 (array){
   if (array[0]==2 && array[1]==3){
       array[1]=0;
   }else if (array[1]==2 && array[2]==3) {
       array[2]=0;
   }
   return array;
}


function countYZ (str) {
    var sum = 0;
    var LCStr = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        if (LCStr[i] == "y" && LCStr[i+1] == " " || LCStr[i] == "z" && LCStr[i+1] == " ") {
            sum += 1;
        }
    }
    if (LCStr[LCStr.length-1] == "y" || LCStr[LCStr.length-1] == "z") {
        sum += 1;
    }
    return sum;
}


function endOther (strA,strB){
    var lowerCaseStrA= strA.toLowerCase();
    var lowerCaseStrB= strB.toLowerCase();
    if (lowerCaseStrA.endsWith(lowerCaseStrB) || lowerCaseStrB.endsWith(lowerCaseStrA)){
        return true;
    }
    return false;
}


function starOut (str){
    var newStr="";
    for (var i=0;i<str.length;i++){
        if (str[i]!="*" && str[i+1]!="*" && str[i-1]!="*"){
            newStr+=str[i];
        }
    }
    return newStr;
}


function getSandwich (str){
    var numBread=str.match(/bread/g);
    if (numBread>="bread,bread"){
        var breadPosition= str.indexOf("bread");
        var lastBreadPosition= str.lastIndexOf("bread");
        return str.slice(breadPosition+5, lastBreadPosition);
    }else{
        return "";
    }
}


function canBalance(array){
    var sum1=0;
    var sum2=0;
    for (var i=0;i<array.length;i++){
        sum1+=array[i];
        for (var j=i+1;j<array.length;j++){
            sum2+=array[j];
        }
        if (sum1==sum2){
            return true;
        }
        sum2=0;
    }
    return false;
}


function countClumps(array){
    var clumps=0;
    for (var i=0;i<array.length;i++){
        if (array[i]==array[i+1] && array[i+1]!=array[i+2]){
            clumps+=1;
        }
    }
    return clumps;
}


function evenlySpaced(a,b,c){
    var max=Math.max(a,b,c);
    var min=Math.min(a,b,c);
    var med=(max+min)/2;
    if (a==med||b==med||c==med){
        return true;
    }
    return false;
}





