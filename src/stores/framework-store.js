import { defineStore } from "pinia";
import { mergeHelper } from "src/helpers/mergers";
import { questionHelper } from "src/helpers/questions";

export const useFrameworkStore = defineStore("frameworkStore", {
  state: () => ({
    frameworkTemplate: {
      version: 1,
      standardScore: 0,
      totalScore: 0, // Initialize as zero
      countDone: 0, // Initialize as zero
      countQuestions: 0,
      data: [
        {
          id: "business",
          parent_id: null,
          title: "Business",
          type: "Assessment",
          color: "teal-6",
          questions: [],
          standardTotalScore: 20,
          countQuestions: 6,
          countDone: 0,
          totalScore: 0,
          averageScore: 0,
          children: [
            {
              id: "B1.1",
              parent_id: "B1",
              title: "Business Acumen",
              type: "Assessment",
              standardTotalScore: 9,
              countDone: 0,
              countQuestions: 3,
              averageScore: 0,
              totalScore: 0,
              questions: [
                {
                  id: "bq1",
                  questionTitle: "Cultivates Market Awareness",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 0,
                },
                {
                  id: "bq2",
                  questionTitle: "Understands Business Application",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 0,
                },

                {
                  id: "bq3",
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
              standardTotalScore: 11,
              countDone: 0,
              countQuestions: 3,
              averageScore: 0,
              totalScore: 0,
              questions: [
                {
                  id: "bq4",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 5,
                  userRating: 0,
                },
                {
                  id: "bq5",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 0,
                },
                {
                  id: "bq6",
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
          color: "pink-12",
          standardTotalScore: 11,
          countDone: 0,
          countQuestions: 3,
          averageScore: 0,
          totalScore: 0,
          questions: [],
          children: [
            {
              id: "I1.2",
              parent_id: "I1",
              title: "I1.2",
              type: "Assessment",
              standardTotalScore: 11,
              countDone: 0,
              countQuestions: 3,
              averageScore: 0,
              totalScore: 0,
              questions: [
                {
                  id: "iq3",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 5,
                  userRating: 0,
                },
                {
                  id: "iq4",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 0,
                },
                {
                  id: "iq5",
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
          countQuestions: 0,
          averageScore: 0,
          totalScore: 0,
          color: "amber-9",
          questions: [],
          children: [],
        },

        {
          id: "future",
          parent_id: null,
          title: "Future",
          type: "Assessment",
          color: "light-blue-7",
          countDone: 0,
          countQuestions: 0,
          averageScore: 0,
          totalScore: 0,
          questions: [],
          children: [],
        },

        {
          id: "leadership",
          parent_id: null,
          title: "Leadership",
          type: "Assessment",
          color: "green-5",
          countDone: 0,
          countQuestions: 0,
          averageScore: 0,
          totalScore: 0,
          questions: [],
          children: [],
        },

        {
          id: "critical",
          parent_id: null,
          title: "Critical Soft Skill",
          type: "Assessment",
          color: "brown-7",
          countDone: 0,
          countQuestions: 0,
          averageScore: 0,
          totalScore: 0,
          questions: [],
          children: [],
        },
      ],
    },
    framework: {},
    questions: [],
    userData: {
      version: 0,
      totalScore: 3,
      totalQuestions: 9,
      totalStandardScore: 31,
      totalCountDone: 2,
      averageScore: 1.5,
      data: [
        {
          id: "business",
          parent_id: null,
          title: "Business",
          type: "Assessment",
          countDone: 2,
          standardTotalScore: 20,
          countQuestions: 6,
          averageScore: 1.5,
          totalScore: 3,
          color: "teal-6",
          questions: [],
          children: [
            {
              id: "B1.1",
              parent_id: "B1",
              title: "Business Acumen",
              type: "Assessment",
              standardTotalScore: 9,
              countDone: 2,
              countQuestions: 3,
              averageScore: 1.5,
              standardTotalScore: 9,
              totalScore: 3,
              questions: [
                {
                  id: "bq1",
                  questionTitle: "Cultivates Market Awareness",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 1,
                },
                {
                  id: "bq2",
                  questionTitle: "Understands Business Application",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 2,
                },

                {
                  id: "bq3",
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
              standardTotalScore: 11,
              countDone: 0,
              countQuestions: 3,
              averageScore: 0,
              totalScore: 0,
              questions: [
                {
                  id: "bq4",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 5,
                  userRating: 0,
                },
                {
                  id: "bq5",
                  questionTitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fuga quos blanditiis ea sint dolore. Accusantium fuga quos blanditiis ea sint dolore.",
                  subtitle:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In pariatur architecto animi eius expedita non sunt omnis culpa a labore fugiat voluptatem, commodi quos hic doloribus quisquam ullam repudiandae quidem.",
                  defaultRange: 3,
                  userRating: 0,
                },
                {
                  id: "bq6",
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

      this.updateOverall();
    },

    updateOverall() {
      const overallMetrics = questionHelper.updateOverallMetrics(
        this.userData.data
      );
      this.userData.totalScore = overallMetrics.overallTotalScore;
      this.userData.totalCountDone = overallMetrics.overallCountDone;
      this.userData.totalQuestions = overallMetrics.overallCountQuestions;
      this.userData.averageScore = overallMetrics.averageScore;
    },

    mergeData() {
      if (this.userData.version <= this.frameworkTemplate.version) {
        const mergedData = mergeHelper.mergeSections(
          this.frameworkTemplate.data,
          this.userData.data
        );

        const metrics = mergeHelper.processMergedData(mergedData);

        this.userData = {
          version: this.frameworkTemplate.version,
          totalScore: metrics.totalCompletedScore,
          totalQuestions: metrics.totalQuestions,
          totalStandardScore: metrics.totalStandardScore,
          totalCountDone: metrics.totalCountDone,
          averageScore: metrics.averageScore,
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
