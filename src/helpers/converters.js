const count = {
  countQuestions(obj) {
    let count = 0;

    // Function to recursively traverse the object
    function traverse(current) {
      // Check if the current element itself is a question
      if (current.questionTitle) {
        count++;
      }

      // Iterate over each property in the object or each item in the array
      for (const key in current) {
        if (typeof current[key] === "object" && current[key] !== null) {
          traverse(current[key]); // Recursive call to go deeper
        }
      }
    }

    traverse(obj); // Start the recursion with the initial object
    return count;
  },

  countQuestionsDone(obj) {
    let count = 0;

    // Function to recursively traverse the object
    function traverse(current) {
      // Check if the current element itself is a question
      if (current.userRating > 0) {
        count++;
      }

      // Iterate over each property in the object or each item in the array
      for (const key in current) {
        if (typeof current[key] === "object" && current[key] !== null) {
          traverse(current[key]); // Recursive call to go deeper
        }
      }
    }

    traverse(obj); // Start the recursion with the initial object
    return count;
  },
};

export { count };
