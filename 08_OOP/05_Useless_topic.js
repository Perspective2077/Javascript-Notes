// Array Optimisation : Not even Important , just leave it unless u are nerd

// Holey Array:
// A holey array contains missing or empty elements, often referred to as "sparse arrays."
// Sparse arrays can result in less efficient memory usage and access patterns because the engine needs to account for the missing elements.
// For example, in [1, 2, , 4], the missing element is at index 2, creating a hole in the array.

// Dense Array:
// A dense array is an array where all elements are present and not missing, providing more efficient access patterns.
// So Remeber one thing in your life : "Holes" are expensive

// Types of array Elements :
// Packed Elements:
// Most modern JavaScript engines use a contiguous memory block to store array elements.
// The elements are "packed" in memory, meaning each element is stored next to the previous one.

// Double-Packed Elements:
// In some cases, JavaScript engines might use a more efficient representation for arrays with elements of the same type.
// When all elements are of a consistent type (like numbers), some engines might use a more memory-efficient representation, often referred to as "double-packing" or "typed arrays."

// SMI (Small Integer) Elements:
// Some JavaScript engines use a concept called Small Integer (SMI) for optimizing arrays that primarily store integers.
// SMIs are a way to represent small integers more compactly in memory, providing better memory usage for the arrays of integers.


// When the content of an array changes dynamically (e.g., mixing types), the engine might have to transition the array representation.
// Transitioning arrays can result in performance overhead, so having consistent element data types within an array can lead to better performance.

// Remember these optimisation may vary from engines to engines so every engine do there own kind of optimisation. But in standerd "continuous" arrays are more efficient and optimized for various operations compared to "holey" arrays.
// Remember more simple u write a code , more optimise a code will be 