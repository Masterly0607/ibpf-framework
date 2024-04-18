const mergeHelper = {
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

      return {
        ...templateSection,
        children: children,
        questions: templateSection.questions
          ? {
              ...templateSection.questions,
              userRating: userSection.questions?.userRating || null,
            }
          : undefined,
      };
    });
  },
};

export { mergeHelper };
