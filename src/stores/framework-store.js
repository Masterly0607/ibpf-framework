import { defineStore } from "pinia";

export const useFrameworkStore = defineStore("frameworkStore", {
  state: () => ({
    frameworks: [
      {
        id: "business",
        parent_id: null,
        title: "Business",
        type: "Assessment",
        countQDone: 0,
        color: "teal-6",
        questions: [],
        totalQuestions: 5,
        children: [
          {
            id: "B1.1",
            parent_id: "B1",
            title: "Business Acumen",
            type: "Assessment",
            countQDone: 0,
            questions: [
              {
                id: "q1",
                questionTitle: "Cultivates Market Awareness",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 3,
                userRating: 0,
              },
              {
                id: "q2",
                questionTitle: "Understands Business Application",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 3,
                userRating: 0,
              },

              {
                id: "q3",
                questionTitle: "Understands Business and Value Chain",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 3,
                userRating: 0,
              },
            ],
            children: [],
          },

          {
            d: "B1.2",
            parent_id: "B1",
            title: "B1.2",
            type: "Assessment",
            countQDone: 1,
            questions: [
              {
                id: "q3",
                questionTitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 5,
                userRating: 0,
              },
              {
                id: "q4",
                questionTitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 3,
                userRating: 0,
              },
              {
                id: "q5",
                questionTitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 3,
                userRating: 0,
              },
            ],
            children: [],
          },
        ],
      },

      {
        id: "individual",
        parent_id: null,
        title: "Individual",
        type: "Assessment",
        countQDone: 50,
        color: "pink-12",
        totalQuestions: 3,
        questions: [],
        children: [
          {
            id: "I1.2",
            parent_id: "I1",
            title: "I1.2",
            type: "Assessment",
            countQDone: 1,
            questions: [
              {
                id: "q3",
                questionTitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 5,
                userRating: 0,
              },
              {
                id: "q4",
                questionTitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 3,
                userRating: 0,
              },
              {
                id: "q5",
                questionTitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                subtitle:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                defaultRange: 3,
                userRating: 0,
              },
            ],
            children: [],
          },
        ],
      },

      {
        id: "people",
        parent_id: null,
        title: "People",
        type: "Assessment",
        countQDone: 22,
        color: "amber-9",
        totalQuestions: 0,
        questions: [],
        children: [],
      },

      {
        id: "future",
        parent_id: null,
        title: "Future",
        type: "Assessment",
        countQDone: 30,
        color: "light-blue-7",
        totalQuestions: 0,
        questions: [],
        children: [],
      },

      {
        id: "leadership",
        parent_id: null,
        title: "Leadership",
        type: "Assessment",
        countQDone: 25,
        color: "green-5",
        totalQuestions: 0,
        questions: [],
        children: [],
      },

      {
        id: "critical",
        parent_id: null,
        title: "Critical Soft Skill",
        type: "Assessment",
        countQDone: 20,
        color: "brown-7",
        totalQuestions: 0,
        questions: [],
        children: [],
      },
    ],
    framework: {},
    questions: [],
  }),
  getters: {
    getFrameworks: (state) => state.frameworks,
    getOneFramework: (state) => state.framework,
    getQuestions: (state) => state.questions,
  },
  actions: {
    updateOneFramework(payload) {
      this.framework.countQDone += payload;
    },

    storeOneFramework(payload) {
      if (payload) {
        let result = this.frameworks.find(
          (fr) => fr.title.toLowerCase() === payload.toLowerCase()
        );

        if (result) {
          this.framework = result;
        } else {
          this.framework = {};
        }
      }
    },

    resetQuestions() {
      this.questions = [];
    },
    storeQuestions(payload) {
      if (payload) {
        this.questions = payload;
      }
    },
  },
});
