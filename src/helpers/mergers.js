const mergeHelper = {
  // unwrapProxy(proxy) {
  //   if (proxy && typeof proxy === "object") {
  //     if (proxy instanceof Date) {
  //       return proxy;
  //     }
  //     return Object.keys(proxy).reduce(
  //       (obj, key) => {
  //         obj[key] = unwrapProxy(proxy[key]);
  //         return obj;
  //       },
  //       Array.isArray(proxy) ? [] : {}
  //     );
  //   }
  //   return proxy;
  // },

  // mergeSections(templateSections, userSections = []) {
  //   return templateSections.map((templateSection) => {
  //     const userSection =
  //       userSections.find((us) => us.id === templateSection.id) || {};

  //     const children = templateSection.children
  //       ? this.mergeSections(
  //           templateSection.children,
  //           userSection.children || []
  //         )
  //       : [];

  //     // Merge questions array
  //     const questions = templateSection.questions
  //       ? templateSection.questions.map((tQuestion) => {
  //           const userQuestion =
  //             userSection.questions?.find((uq) => uq.id === tQuestion.id) || {};
  //           return {
  //             ...tQuestion,
  //             userRating: userQuestion.userRating || 0, // Merge userRating from user data
  //           };
  //         })
  //       : [];

  //     return {
  //       ...templateSection,
  //       children: children,
  //       questions: questions,
  //       countDone: userSection.countDone || 0, // Take from userSection or default to 0
  //       averageScore: userSection.averageScore || 0, // Take from userSection or default to null
  //       totalScore: userSection.totalScore || 0,
  //     };
  //   });
  // },

  mergeSections(templateSections, userSections = []) {
    return templateSections.map((templateSection) => {
      const userSection =
        userSections.find((us) => us.id === templateSection.id) || {};

      // Recursively merge children and accumulate child data
      const children = templateSection.children
        ? this.mergeSections(
            templateSection.children,
            userSection.children || []
          )
        : [];

      // Merge questions array and calculate metrics
      let totalStandardScore = 0;
      let totalQuestions = 0;

      const questions = templateSection.questions
        ? templateSection.questions.map((tQuestion) => {
            const userQuestion =
              userSection.questions?.find((uq) => uq.id === tQuestion.id) || {};
            totalStandardScore += tQuestion.defaultRange; // Sum up the standard ratings
            totalQuestions += 1; // Count the total number of questions

            return {
              ...tQuestion,
              userRating: userQuestion.userRating || 0, // Merge userRating from user data
            };
          })
        : [];

      // Accumulate data from children
      children.forEach((child) => {
        totalStandardScore += child.totalStandardScore;
        totalQuestions += child.totalQuestions;
      });

      return {
        ...templateSection,
        children: children,
        questions: questions,
        countDone: userSection.countDone || 0, // Take from userSection or default to 0
        averageScore: userSection.averageScore || 0, // Take from userSection or default to null
        totalScore: userSection.totalScore || 0, // Sum of standard scores
        totalQuestions: totalQuestions, // Total number of questions
        totalStandardScore: totalStandardScore, // Total of standard scores for all questions
      };
    });
  },

  processMergedData(mergedData) {
    let totalScore = 0;
    let totalQuestions = 0;
    let totalStandardScore = 0;
    let totalCompletedScore = 0;
    let totalCountDone = 0;

    mergedData.forEach((section) => {
      totalScore += section.totalScore;
      totalQuestions += section.totalQuestions;
      totalStandardScore += section.totalStandardScore;
      totalCountDone += section.countDone;
      if (section.countDone && section.averageScore) {
        totalCompletedScore += section.averageScore * section.countDone; // Aggregate completed score to compute overall average
      }
    });

    // Calculate the overall average score based on the completed questions across all sections
    const averageScore =
      totalQuestions > 0
        ? (totalCompletedScore / totalQuestions).toFixed(2)
        : 0;

    return {
      totalScore,
      totalCompletedScore,
      totalQuestions,
      totalStandardScore,
      totalCountDone,
      averageScore,
    };
  },
};

export { mergeHelper };
