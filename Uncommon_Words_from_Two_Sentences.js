var s1 = "this apple is sweet";
var s2 = "this apple is sour";
var arr1;
var arr2;
var new_arr;
var uncommonFromSentences = function(s1, s2) {
    
    arr1=s1.split(" ");
    arr2=s2.split(" ");

    for(var i=0; i<arr1.length; i++){
        // console.log(arr1[i].equals(arr2[i]));
        if(!(arr1[i]==arr2[i])){
            new_arr=[`${arr1[i]},${arr2[i]}`]
        }

    }
    console.log(new_arr);
};
uncommonFromSentences(s1,s2);
