//1.Sort an Array of Numbers
function Sort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
           if(arr[j] > arr[j + 1]){
            //swapping of arr[j] and arr[j+1]
            let temp =arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
           }
        }
    }
    return arr
}
let numbers=[2,8,9,5,-1,0,6,4,3,1,7];
let output=Sort(numbers);
console.log("sorted array:",output);
//2. Second Largest Number in an Array
function SecondLargestNumber(arr){
    let largest=0;
    let res=[];
    for(let i = 0 ; i < arr.length ; i++){
        if(largest<arr[i]){
            largest=arr[i];
        }
    } 
    for(let i = 0 ; i < largest ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            if(i == arr[j])
                res.push(arr[j])
        }
    }
    return res[res.length-1];
}
let array=[23,45,6,-2,-7,89,76,98]
let Output = SecondLargestNumber(array);
console.log("Second Largest Number in Array:",Output);
//3.Count Positive and Negative Numbers
function FindOccurrences(arr) {
    let counts = { positive: 0, negative: 0 };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            counts.positive++;
        } else if (arr[i] < 0) {
            counts.negative++;
        }
    }

    return counts;
}
const num = [1, 2, 3, -4, 1, 1, -3, -4, -2, 0, 2, 1, -2, 1];
const OutPut = FindOccurrences(num);
console.log("The Count of postive and Negative Numbers",OutPut);