const mergeHelper = {
  unwrapProxy(proxy) {
    if (proxy && typeof proxy === "object") {
      if (proxy instanceof Date) {
        return proxy;
      }
      return Object.keys(proxy).reduce(
        (obj, key) => {
          obj[key] = unwrapProxy(proxy[key]);
          return obj;
        },
        Array.isArray(proxy) ? [] : {}
      );
    }
    return proxy;
  },

  mergeSections(templateSections, userSections = []) {
    return templateSections.map((templateSection) => {
      const userSection =
        userSections.find((us) => us.id === templateSection.id) || {};

      const children = templateSection.children
        ? this.mergeSections(
            templateSection.children,
            userSection.children || []
          )
        : [];

      // Merge questions array
      const questions = templateSection.questions
        ? templateSection.questions.map((tQuestion) => {
            const userQuestion =
              userSection.questions?.find((uq) => uq.id === tQuestion.id) || {};
            return {
              ...tQuestion,
              userRating: userQuestion.userRating || 0, // Merge userRating from user data
            };
          })
        : [];

      return {
        ...templateSection,
        children: children,
        questions: questions,
        countDone: userSection.countDone || 0, // Take from userSection or default to 0
        averageScore: userSection.averageScore || 0, // Take from userSection or default to null
        totalScore: userSection.totalScore || 0,
      };
    });
  },
};

export { mergeHelper };
