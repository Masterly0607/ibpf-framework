const questionHelper = {
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

  findAndUpdateQuestion(section, questionId, newRating) {
    let found = false;

    // Update the question rating if found
    if (section.questions && section.questions.id === questionId) {
      section.questions.userRating = newRating;
      found = true;
    }

    // Recursively search in children if they exist
    if (section.children && section.children.length > 0) {
      section.children.forEach((child) => {
        if (this.findAndUpdateQuestion(child, questionId, newRating)) {
          found = true;
        }
      });
    }

    if (found) {
      this.updateMetrics(section);
    }
    return found;
  },

  updateMetrics(section) {
    const ratings = [];
    section.children.forEach((child) => {
      if (child.questions && child.questions.userRating !== null) {
        ratings.push(child.questions.userRating);
      }
      // Recursively update metrics for sub-sections
      if (child.children && child.children.length > 0) {
        this.updateMetrics(child);
      }
    });
    section.countDone = ratings.length;
    section.averageScore = ratings.length
      ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2)
      : null;
  },
};

export { questionHelper };
