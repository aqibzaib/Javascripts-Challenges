let nums= [1,2,3,1];
var containsDuplicate = function(nums) {
    //Creating empty hashMap
    let hashMap ={};
    // /storing values in hashmap
    for(let i=0; i<nums.length; i++){
        if(!hashMap[nums[i]]){
            hashMap[nums[i]] = 1;
        }else{
            hashMap[nums[i]] +=1;
        }
    }
    
    // Checking contains dublicates or not 
    for(key in hashMap){
        if((hashMap[key] == 2) && hashMap[key] > 2){
            // return true;

            var a=true
            console.log("true: "+true)
        }else{
            // return false;
            var b=false
            console.log("false: "+false)
        }
    }
};
containsDuplicate(nums)