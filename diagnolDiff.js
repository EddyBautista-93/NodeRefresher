function diagonalDifference(arr) {
    // get the length of the array 
    const dim = arr[0].length;

    //create the two vars for the diagonal sums 
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    let sum = 0;
    // initialize two iterators in the for loop
    //i represents the row of the second integer 
    //j represents the column of the second diagonal 
    // we want the i to stop when it equals the length of the matrix
    // the j stops when it equals to zero 
    // i increments by 1
    // j decreases by one 
    for(let i = 0, j = (dim - 1); i < dim, j > -1; i++, j-- ){
        firstDiagonalSum += arr[i][i];
        secondDiagonalSum += arr[i][j];
    }
    sum = firstDiagonalSum - secondDiagonalSum;
    // since the sum needs to be absolute we need to convert any negative numbers into positive
    if(sum > 0){
        return sum;
    } else if (sum < 0){
        return (sum * (-1));
    }
    else return 0;

}
