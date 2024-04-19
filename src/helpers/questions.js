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

    // Check if the section has questions and iterate through them
    if (section.questions && Array.isArray(section.questions)) {
      for (let i = 0; i < section.questions.length; i++) {
        if (section.questions[i].id === questionId) {
          section.questions[i].userRating = newRating; // Update the userRating
          found = true;
          break; // Stop the loop once the question is found and updated
        }
      }
    }

    // Recursively search in children if they exist
    if (section.children && section.children.length > 0) {
      section.children.forEach((child) => {
        if (this.findAndUpdateQuestion(child, questionId, newRating)) {
          found = true; // Mark as found if any child contains the question
        }
      });
    }

    // If the question was found and updated, possibly update metrics
    if (found) {
      this.updateMetrics(section);
    }

    return found;
  },

  updateMetrics(section) {
    const ratings = [];

    // This function will aggregate ratings from questions if they exist
    const aggregateRatingsFromQuestions = (questions) => {
      questions.forEach((question) => {
        if (
          question.userRating !== null &&
          question.userRating !== undefined &&
          question.userRating !== 0
        ) {
          ratings.push(question.userRating);
        }
      });
    };

    // Process the questions of the current section if they exist
    if (section.questions && Array.isArray(section.questions)) {
      aggregateRatingsFromQuestions(section.questions);
    }

    // Recursively process children sections if they exist
    if (section.children && section.children.length > 0) {
      section.children.forEach((child) => {
        if (child.questions && Array.isArray(child.questions)) {
          aggregateRatingsFromQuestions(child.questions);
        }
        // Recursive call to handle further nested children
        this.updateMetrics(child);
      });
    }

    // After processing this section and all nested sections, calculate metrics
    section.countDone = ratings.length; // Total number of rated questions
    section.averageScore = ratings.length
      ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2)
      : null; // Average score based on ratings
  },
};

export { questionHelper };
