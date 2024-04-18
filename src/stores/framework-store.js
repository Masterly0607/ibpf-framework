import { defineStore } from "pinia";
import { mergeHelper } from "src/helpers/mergers";
import { questionHelper } from "src/helpers/questions";

export const useFrameworkStore = defineStore("frameworkStore", {
  state: () => ({
    frameworkTemplate: {
      version: 1,
      data: [
        {
          id: "business",
          parent_id: null,
          title: "Business",
          type: "Assessment",
          countDone: 0,
          color: "teal-6",
          questions: [],
          countQuestions: 5,
          averageScore: null,
          children: [
            {
              id: "B1.1",
              parent_id: "B1",
              title: "Business Acumen",
              type: "Assessment",
              countQuestions: 3,
              countDone: 0,
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
              countDone: 0,
              countQuestions: 3,
              questions: [
                {
                  id: "q4",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 5,
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
                {
                  id: "q6",
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
          countDone: 0,
          color: "pink-12",
          countQuestions: 3,
          averageScore: null,
          questions: [],
          children: [
            {
              id: "I1.2",
              parent_id: "I1",
              title: "I1.2",
              type: "Assessment",
              countQuestions: 3,
              countDone: 1,
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
          countDone: 0,
          averageScore: null,
          color: "amber-9",
          countQuestions: 0,
          questions: [],
          children: [],
        },

        {
          id: "future",
          parent_id: null,
          title: "Future",
          type: "Assessment",
          countDone: 0,
          color: "light-blue-7",
          countQuestions: 0,
          averageScore: null,
          questions: [],
          children: [],
        },

        {
          id: "leadership",
          parent_id: null,
          title: "Leadership",
          type: "Assessment",
          countDone: 0,
          color: "green-5",
          countQuestions: 0,
          averageScore: null,
          questions: [],
          children: [],
        },

        {
          id: "critical",
          parent_id: null,
          title: "Critical Soft Skill",
          type: "Assessment",
          countDone: 0,
          averageScore: null,
          color: "brown-7",
          countQuestions: 0,
          questions: [],
          children: [],
        },
      ],
    },
    framework: {},
    questions: [],
    userData: {
      version: 0,
      data: [
        {
          id: "business",
          parent_id: null,
          title: "Business",
          type: "Assessment",
          countDone: 0,
          color: "teal-6",
          questions: [],
          countQuestions: 5,
          children: [
            {
              id: "B1.1",
              parent_id: "B1",
              title: "Business Acumen",
              type: "Assessment",
              countDone: 0,
              questions: [
                {
                  id: "q1",
                  questionTitle: "Cultivates Market Awareness",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 1,
                },
                {
                  id: "q2",
                  questionTitle: "Understands Business Application",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 2,
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
              id: "B1.2",
              parent_id: "B1",
              title: "B1.2",
              type: "Assessment",
              countDone: 1,
              questions: [
                {
                  id: "q4",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 5,
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
                {
                  id: "q6",
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
      ],
    },
  }),
  getters: {
    getFrameworks: (state) => state.userData.data,
    getOneFramework: (state) => state.framework,
    getQuestions: (state) => state.questions,
  },
  actions: {
    storeOneFramework(payload) {
      if (payload) {
        let result = this.userData.data.find(
          (fr) => fr.id.toLowerCase() === payload.toLowerCase()
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

    updateRating(questionId, newRating) {
      this.userData.data.forEach((section) => {
        if (
          questionHelper.findAndUpdateQuestion(section, questionId, newRating)
        ) {
          return;
        }
      });
      // this.saveProgress();
    },

    mergeData() {
      if (this.userData.version <= this.frameworkTemplate.version) {
        const mergedData = mergeHelper.mergeSections(
          this.frameworkTemplate.data,
          this.userData.data
        );
        this.userData = {
          version: this.frameworkTemplate.version,
          data: mergedData,
        };

        // console.log(
        //   "userData",
        //   this.userData,
        //   "Templates",
        //   this.frameworkTemplate
        // );
      }
    },

    loadProgress() {
      this.mergeData();
    },
  },
});
