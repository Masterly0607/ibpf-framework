import { defineStore } from "pinia";

export const useFrameworkStore = defineStore("frameworkStore", {
  state: () => ({
    frameworks: [
      {
        id: "business",
        parent_id: null,
        title: "Business",
        type: "Assessment",
        countQDone: 1,
        color: "pink",
        questions: [],
        children: [
          {
            id: "B1.1",
            parent_id: "B1",
            title: "B1.1",
            type: "Assessment",
            countQDone: 1,
            questions: [
              {
                id: "q1",
                title: "what is your name?",
                defaultRange: 5,
                userRating: 0,
              },
              {
                id: "q2",
                title: "what is your name?",
                defaultRange: 3,
                userRating: 0,
              },
            ],
            children: [
              {
                id: "B1.1.1",
                parent_id: "B1.1",
                title: "B1.1.1",
                type: "Assessment",
                countQDone: 1,
                questions: [
                  {
                    id: "q1",
                    title: "what is your name?",
                    defaultRange: 5,
                    userRating: 0,
                  },
                  {
                    id: "q2",
                    title: "what is your name?",
                    defaultRange: 3,
                    userRating: 0,
                  },
                ],
                children: [
                  {
                    id: "B1.1.1.1",
                    parent_id: "B1.1.1",
                    title: "B1.1.1.1",
                    type: "Assessment",
                    countQDone: 1,
                    children: [],
                    countQDone: 2,
                    questions: [
                      {
                        id: "q1",
                        title: "what is your name?",
                        defaultRange: 5,
                        userRating: 0,
                      },
                      {
                        id: "q2",
                        title: "what is your name?",
                        defaultRange: 3,
                        userRating: 0,
                      },
                    ],
                  },
                ],
              },
              {
                id: "B1.1.2",
                parent_id: "B1.1",
                title: "B1.1.2",
                type: "Assessment",
                countQDone: 1,
                children: [],
                questions: [],
              },
            ],
          },

          {
            d: "B1.2",
            parent_id: "B1",
            title: "B1.2",
            type: "Assessment",
            countQDone: 1,
            questions: [],
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
        color: "teal",
        questions: [],
        children: [],
      },

      {
        id: "people",
        parent_id: null,
        title: "People",
        type: "Assessment",
        countQDone: 22,
        color: "orange",
        questions: [],
        children: [],
      },

      {
        id: "future",
        parent_id: null,
        title: "Future",
        type: "Assessment",
        countQDone: 30,
        color: "blue",
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
        questions: [],
        children: [],
      },

      {
        id: "critical",
        parent_id: null,
        title: "Critical Soft Skill",
        type: "Assessment",
        countQDone: 20,
        color: "brown",
        questions: [],
        children: [],
      },
    ],
    framework: {},
  }),
  getters: {
    getFrameworks: (state) => state.frameworks,
    getOneFramework: (state) => state.framework,
  },
  actions: {
    storeOneFramework(payload) {
      if (payload) {
        this.framework = this.frameworks.find(
          (fr) => fr.title.toLowerCase() === payload.toLowerCase()
        );
      }
    },
  },
});
