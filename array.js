

var arr = [2, 4, 6, 8, 10]
var max=arr[arr.length-1];

for(var i=0;i<arr.length-1;i++){
    if(i%2==0){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]<arr[j]){
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    else{
        if(arr[i]<arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}


console.log(arr);