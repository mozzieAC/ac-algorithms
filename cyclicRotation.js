///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);  (A is the array, K is the number of rotations)
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\


//Input: array and number of rotations
//Output: one new array
//Purpose:  shift the elements in the array to the right by "K" times and create a new array
// write a function called cyclicRoation that takes in two parameters, A, K
//  

function cyclicRotation(arr, rotation){
    //create a for loop that will run K number of times
    //in the loop pop off last array element, store that element in a variable
    //then add that variable to the front of the modified array using unshift
    for (var i = 0; i < rotation; i++) {
        var popped = arr.pop();
        arr.unshift(popped);
    }
    //return the modified Array as a new variable.
    return arr; 
}
  
    