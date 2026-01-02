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

  // updateMetrics(section) {
  //   const ratings = [];
  //   let questionCount = 0;

  //   // This function will aggregate ratings from questions if they exist
  //   const aggregateRatingsFromQuestions = (questions) => {
  //     questions.forEach((question) => {
  //       if (
  //         question.userRating !== null &&
  //         question.userRating !== undefined &&
  //         question.userRating !== 0
  //       ) {
  //         ratings.push(question.userRating);
  //         questionCount += 1;
  //       }
  //     });
  //   };

  //   // Process the questions of the current section if they exist
  //   if (section.questions && Array.isArray(section.questions)) {
  //     aggregateRatingsFromQuestions(section.questions);
  //   }

  //   // Recursively process children sections if they exist
  //   if (section.children && section.children.length > 0) {
  //     section.children.forEach((child) => {
  //       if (child.questions && Array.isArray(child.questions)) {
  //         aggregateRatingsFromQuestions(child.questions);
  //       }
  //       // Recursive call to handle further nested children
  //       const childMetrics = this.updateMetrics(child);
  //       questionCount += childMetrics.questionCount;
  //     });
  //   }

  //   // After processing this section and all nested sections, calculate metrics
  //   section.countDone = ratings.length; // Total number of rated questions
  //   section.totalScore = ratings.length
  //     ? ratings.reduce((a, b) => a + b, 0)
  //     : 0;
  //   section.averageScore = ratings.length
  //     ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2)
  //     : 0; // Average score based on ratings

  //   // Return metrics for aggregation in parent
  //   return {
  //     totalDone: section.countDone,
  //     totalScore: section.totalScore,
  //     questionCount,
  //   };
  // },

  // overallMetrics(section) {
  //   let totalDone = 0;
  //   let totalScore = 0;
  //   let questionCount = 0;

  //   // Process each question in the current section
  //   if (section.questions) {
  //     section.questions.forEach((question) => {
  //       if (
  //         question.userRating !== null &&
  //         question.userRating !== undefined &&
  //         question.userRating !== 0
  //       ) {
  //         totalScore += question.userRating;
  //         totalDone += 1;
  //         questionCount += 1;
  //       }
  //     });
  //   }

  //   // Recursively update child sections and aggregate their metrics
  //   if (section.children && section.children.length > 0) {
  //     section.children.forEach((child) => {
  //       const childMetrics = this.overallMetrics(child); // Recursive call
  //       totalDone += childMetrics.totalDone;
  //       totalScore += childMetrics.totalScore;
  //       questionCount += childMetrics.questionCount;
  //     });
  //   }

  //   // Calculate average score if there are completed questions
  //   const averageScore =
  //     totalDone > 0 ? (totalScore / totalDone).toFixed(2) : 0;

  //   // Update the current section metrics
  //   section.countDone = totalDone;
  //   section.totalScore = totalScore;
  //   section.averageScore = averageScore;
  //   section.countQuestions = questionCount;

  //   // Return metrics for aggregation in parent
  //   return { totalDone, totalScore, questionCount };
  // },

  updateMetrics(section) {
    // Initialize metrics
    let totalQuestions = 0;
    let totalDone = 0;
    const ratings = [];

    // Helper function to aggregate ratings and count completed questions
    const aggregateRatingsFromQuestions = (questions) => {
      questions.forEach((question) => {
        totalQuestions++; // Count every question
        if (
          question.userRating !== null &&
          question.userRating !== undefined &&
          question.userRating !== 0
        ) {
          ratings.push(question.userRating);
          totalDone++; // Count only completed questions
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
        // Recursive call and aggregate results from children
        const childMetrics = this.updateMetrics(child);
        totalQuestions += childMetrics.totalQuestions;
        totalDone += childMetrics.totalDone;
        ratings.push(...childMetrics.ratings);
      });
    }

    // Calculate metrics for this section
    const averageScore =
      ratings.length > 0
        ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2)
        : 0;
    const totalScore = ratings.length ? ratings.reduce((a, b) => a + b, 0) : 0;

    // Update this section with the calculated metrics
    section.countDone = totalDone;
    section.totalScore = totalScore;
    section.totalQuestions = totalQuestions;
    section.averageScore = averageScore;

    // Return metrics to be used by parent sections
    return { ratings, totalQuestions, totalDone, totalScore, averageScore };
  },

  updateOverallMetrics(data) {
    let overallTotalScore = 0;
    let overallCountDone = 0;
    let overallCountQuestions = 0;
    let averageScore = 0;

    data.forEach((section) => {
      const metrics = this.updateMetrics(section);
      overallTotalScore += metrics.totalScore;
      overallCountDone += metrics.totalDone;
      overallCountQuestions += metrics.totalQuestions;
      averageScore += parseFloat(metrics.averageScore);
    });

    // Return updated overalls to be used directly in userData
    return {
      overallTotalScore,
      overallCountDone,
      overallCountQuestions,
      averageScore,
    };
  },
};

export { questionHelper };
