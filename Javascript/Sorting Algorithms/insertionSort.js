function insertionSort(arr){
    let n = arr.length;
    let i,key,j;
    for(i = 1;i < n;i++){
        key = arr[i];
        j=i-1;

        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j - 1;
        }

        arr[j+1] = key;
    }
    return arr;
}


var arr = [12,45,32,20,98,84];
console.log(insertionSort(arr));
