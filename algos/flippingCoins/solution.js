function solution(A){
    // Thoughts:
    // There is only two different patterns of numbers,
    // They always depend on if the beginning number is a 0 or a 1
    // So depending on the first number we can judge the array in two ways
    // Once we find out the amount of reverse's it takes for both methods, we can just return the method that reverses coins less

    // Variables that hold amount of reverses
    let pattern0 = 0
    let pattern1 = 0

    // Pointers to keep track of what the current digit should be
    let p0Pointer = 0
    let p1Pointer = 1
  // Loop through
    for(let i=0; i<A.length; i++){
      // Match with first pattern
      if(A[i] === p0Pointer){
        // if current element is same as pointer says it should be than iterate
        // Since the oppostite pattern is wrong in this case, than we would have to add a reverse to it
        pattern1++
        if(p0Pointer === 0){
          p0Pointer = 1
        } else {
          p0Pointer = 0
        }
        if(p1Pointer === 0){
          p1Pointer = 1
        } else {
          p1Pointer = 0
        }
      } else {
        // otherwise if it's not the same add to amount of reverse's for current pattern and iterate pointer
        pattern0++
         if(p0Pointer === 0){
          p0Pointer = 1
        } else {
          p0Pointer = 0
        }
        // Iterate second pattern pointer
        if(p1Pointer === 0){
          p1Pointer = 1
        } else {
          p1Pointer = 0
        }
      }
    }
    console.log("Pattern1", pattern1)
      console.log("Pattern0", pattern0)
    // Now return fewest amounts of reverses
    if(pattern0 < pattern1){
      return pattern0
    } else {
      return pattern1
    }
  }

  let test1 = [1,0,1,0]
  let test2 = [1,1,0]
  let test3 = [0,0,0,0]

  solution(test2)