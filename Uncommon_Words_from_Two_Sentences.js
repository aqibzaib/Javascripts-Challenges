var s1 = "apple apple";;
var s2 = "banana";
var output=[];
//converting string to array
s1=s1.split(" ");
s2=s2.split(" ");



var uncommonFromSentences = function(s1, s2) {
    
    let hashMapS1 = {};
    let hashMapS2={};
 
    for(let i=0; i<s1.length; i++){
        // we check weather we have value in our hashmap already or not 
        if(!hashMapS1[s1[i]]){
            ///now inserting the value
            hashMapS1[s1[i]]  =1;
        }else{
            //if it's already increase the key number
            hashMapS1[s1[i]] +=1;
        }
    }
    for(let i=0; i<s2.length; i++){
        if(!hashMapS2[s2[i]]){
            hashMapS2[s2[i]]= 1;
        }else{
            hashMapS2[s2[i]] += 1;
        }
    }
    
     for(key in hashMapS1){
        if((hashMapS1[key]===1 && !hashMapS2[key])){
            output.push(key);
        }
     }
     for(key in hashMapS2){
        if((hashMapS2[key] === 1 && ! hashMapS1[key])){
            output.push(key);
        }
     }

console.log(output)    
};
uncommonFromSentences(s1,s2);

