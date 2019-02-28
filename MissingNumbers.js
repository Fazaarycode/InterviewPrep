
var arr= [2,4,5,7];
var totalSize=  7;

//find missing elements in an array of size (7)


var output =  check (arr,totalSize)

function check(arr, totalSize){

    var i = 0 ;
    

    while(i < totalSize){
        var missing = true;
        arr.map(num=>{
            if(num == totalSize){
                missing=false;
            }
            
        })
        if(missing == true){
            console.log('MISSING!' + totalSize);

        }
        totalSize--;
    }

}