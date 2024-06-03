<template>
  <q-page padding>
    <div class="ibf-container-1200">
      <div class="q-gutter-md">
        <q-form @submit="onSubmit">
          <!-- Search product -->
          <div :class="$q.dark.isActive ? '' : ''">
            <span class="ibf-h7 text-weight-medium">Search Course</span>
            <div class="row q-gutter-sm">
              <q-input
                dense
                outlined
                v-model="keyword"
                placeholder="Search"
                style="width: 92%"
              >
                <template v-slot:append>
                  <q-btn flat round @click="searchProduct">
                    <q-icon name="search" />
                  </q-btn>
                </template>
              </q-input>

              <q-btn
                flat
                dense
                color="primary"
                icon="grid_view"
                aria-label="Submit"
                :to="{ name: 'product-list-page' }"
              />
              <q-btn
                flat
                dense
                color="black-6"
                icon="view_list"
                aria-label="Submit"
                @click="onClick"
              />
            </div>
          </div>

          <!-- Fillter product -->
          <div class="rounded-borders" :class="$q.dark.isActive ? '' : ''">
            <div class="q-py-lg"><q-separator /></div>
            <div class="row">
              <span class="col-6 text-bold ibf-h9">Fillter</span>

              <div class="col-6" align="right">
                <q-btn
                  no-caps
                  dense
                  flat
                  color="grey"
                  label="Clear Fillter"
                  @click="onClick"
                />
              </div>
            </div>

            <div class="col-6 q-gutter-md">
              <q-card flat bordered class="q-pa-md row" style="max-width: 100%">
                <span class="q-py-sm ibf-h11 text-bold">Course Type : </span>
                <q-option-group
                  name="course_type"
                  v-model="preferred"
                  :options="options"
                  color="primary"
                  inline
                />
              </q-card>
              <q-card flat bordered class="row q-py-sm">
                <q-item class="q-py-none q-px-sm full-width">
                  <q-item-section top avatar>
                    <span class="ibf-h11 text-bold q-pa-md">Core area : </span>
                  </q-item-section>
                  <q-item-section>
                    <q-select
                      borderless
                      square
                      class="q-ml-md"
                      name="core_area"
                      v-model="model"
                      multiple
                      use-chips
                      option-label="title"
                      option-value="id"
                      :options="options1"
                      label="Select options"
                      color="teal-6"
                      dense
                    >
                      <template v-slot:selected-item="scope">
                        <q-chip
                          removable
                          dense
                          size="12px"
                          @remove="scope.removeAtIndex(scope.index)"
                          :tabindex="scope.tabindex"
                          color="grey-4"
                          text-color="black"
                          class="q-ma-xs"
                        >
                          {{ scope.opt }}
                        </q-chip>
                      </template>
                    </q-select>
                  </q-item-section>
                </q-item>
              </q-card>
            </div>
          </div>
        </q-form>

        <div class="ibf-h8 text-bold">New & Feature courses</div>
        <q-separator />
      </div>

      <!-- View product list -->
      <div class="row q-col-gutter-md q-py-md">
        <div
          v-for="(data, image, index) in searchProductData"
          :key="index"
          class="col-12 col-sm-6 col-md-3"
        >
          <q-card square flat bordered>
            <img :src="data.thumbnail" height="200px" />

            <q-card-section class="q-pa-sm">
              <div class="ibf-h10 ellipsis-2-lines text-weight-medium">
                {{ data.title }}
              </div>
              <div
                class="q-py-xs text-grey-7 text-weight-light multi-line-ellipsis"
              >
                {{ data.description }}
              </div>
            </q-card-section>

            <q-card-actions class="q-pb-none" align="between">
              <div class="ibf-h11 q-py-md text-grey-6">
                Price:
                <span class="ibf-h11 text-negative text-bold"
                  >{{ data.price }} $
                </span>
              </div>

              <div>
                <q-btn
                  v-if="checkInCart(data.id)"
                  flat
                  round
                  icon="mdi-cart"
                  @click="removeFromCarts(data.id)"
                  color="primary"
                />
                <q-btn
                  v-else
                  flat
                  round
                  icon="mdi-cart-outline"
                  @click="addToCarts(data.id)"
                  color="grey"
                />

                <q-btn flat round icon="mdi-heart-outline" color="grey" />
              </div>
            </q-card-actions>

            <!-- <div class="col-4 text-grey-6 ibf-h11">10 tasks</div>
              <span class="col-8 text-grey-6 ibf-h11" align="right">
                Start on 25-May-24
              </span> -->
          </q-card>
        </div>
      </div>
      <q-card flat square>
        <q-btn
          outline
          no-caps
          unelevated
          color="primary"
          style="width: 100%; height: 100%"
          label="See more course"
          :to="{ name: '' }"
        />
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const preferred = ref("IC");
const model = ref(null);
const submitResult = ref([]);
const keyword = ref("");
// const product_type_id = ref("");
// const core_area_id = ref("");

// const buttonFavoColors = ref(Array(10).fill("grey"));
// const isFavoriteColored = ref(Array(10).fill("grey"));

// const buttonShopping = ref(Array(10).fill("grey"));
// const isShoppingColored = ref(Array(10).fill("grey"));

// const dataProduct = ref(null);
const searchProductData = ref(null);

// const clickFavorite = (index) => {
//   isFavoriteColored.value[index] = !isFavoriteColored.value[index]
//     ? "primary"
//     : "grey";
//   buttonFavoColors.value[index] = isFavoriteColored.value[index]
//     ? "primary"
//     : "grey";
// };

// const clickShoppingCart = (index) => {
//   isShoppingColored.value[index] = !isShoppingColored.value[index]
//     ? "primary"
//     : "grey";
//   buttonShopping.value[index] = isShoppingColored.value[index]
//     ? "primary"
//     : "grey";
// };

const options = [
  {
    label: "International Certification",
    value: "IC",
  },
  {
    label: "Local Certification",
    value: "LC",
  },
  {
    label: "Training Courses",
    value: "TC",
  },
];

const options1 = [
  "Analytical and Critical Thinking Skills",
  "Audit",
  "Branch Management",
  "Budgeting and Forecasting",
  "Communication Excellence",
  "Corporate Finance",
  "Corporate Governance",
  "Credit",
  "Critical Thinking and Problem-Solving Skills",
  "Digital Banking",
  // "Effective Customer Service and Relationship Management",
  "Effective Customer Service",
  "Effective and Practical Fraud Management",
  "Ethics",
  "HR",
  "IBF Game",
  "IT",
  "Legal Remedies for Loan Recovery Management",
  "Managing Customer Experiences",
  "Project Management",
  "Risk",
  "Sustainable Finance",
  "Trade Finance",
];

//

const onSubmit = (evt) => {
  const formData = new FormData(evt.target);
  const data = [];

  for (const [name, value] of formData.entries()) {
    data.push({
      name,
      value,
    });
  }

  submitResult.value = data;
};

const searchProduct = async () => {
  try {
    const response = await axios.get(
      "https://product.ibfnxt.com/api/v1/user/product/search",
      {
        params: {
          keyword: keyword.value,
        },
      }
    );
    console.log(response);
    searchProductData.value = response.data.data;
  } catch (error) {
    console.log("Error fetching items:", error.message);
  }
};

const carts = ref([7, 21]);

const addToCarts = (id) => {
  carts.value.push(id);
};

const removeFromCarts = (id) => {
  carts.value = carts.value.filter((item) => item !== id);
};
const checkInCart = (id) => {
  return carts.value.includes(id);
};

// const fetchItems = async () => {
//   try {
//     const response = await axios.get(
//       "https://product.ibfnxt.com/api/v1/user/product/list"
//     );
//     dataProduct.value = response.data.data.data;
//     console.log(response.data.data.data);
//   } catch (error) {
//     console.error("Error fetching items:", error);
//   }
// };

onMounted(() => {
  searchProduct();
});

// const datas = [
//   {
//     id: 1,
//     title: "Cybersecurity for Internal Auditors",
//     subtitle: "Introduced by IBF",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/c5119071-db62-4126-aeba-8f7c908e9c07/materials/1698916105167-CybersecurityforInternalAuditors.jpg",
//   },
//   {
//     id: 2,
//     title:
//       "ICA International Advanced Certificate in Governance, Risk and Compliance",
//     subtitle: "Introduced by IBF ",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/e8f9666c-ee0c-4eb5-b1b1-157ee2fba797/materials/1698995770523-ICAInternationalAdvancedCertificateinGovernance,RiskandCompliance.jpg",
//   },
//   {
//     id: 3,
//     title: "Certification in Climate Change and Sustainable Finance",
//     subtitle: "Starts 12th June 2024",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/f9022786-5d52-4648-ae33-315102881fe1/materials/1710843012093-Climate.png",
//   },
//   {
//     id: 4,
//     title: "Banking Risk Management",
//     subtitle: "by John Doe",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/413c1ae0-51ab-4799-a64b-66ed33f57055/materials/1698994518567-BankingRiskManagement.jpg",
//   },
//   {
//     id: 5,
//     title: "Project Finance Masterclass",
//     subtitle: "by John Doe",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/75098761-c97d-4c60-9109-1c555076b79d/materials/1698998232808-ProjectFinanceMasterclass.jpg",
//   },
//   {
//     id: 6,
//     title: "Managing Customer Experiences with Millennials Customers",
//     subtitle: "by John Doe",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/01c03749-ecd7-49ae-b13f-5bca9528062f/materials/1693927419763-Mr.LEE.jpeg",
//   },
//   {
//     id: 7,
//     title: "Communication Excellence",
//     subtitle: "Introduced by Admin IBF",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/0e91f6f1-abb9-4634-be59-32f4de360e7e/materials/1698915612788-CommunicationExcellence.jpg ",
//   },
//   {
//     id: 8,
//     title: "Managing Regulatory Compliance Risk",
//     subtitle: "Introduced by Admin IBF",
//     src: "https://s3.ap-southeast-1.amazonaws.com/svc-lms-bucket.ibfkh.org/61f17951-d509-4b60-967b-a84442f949b6/courses/dbffaa5c-fdc9-4038-9fdf-00c52df831ec/materials/1698913935040-ManagingRegulatoryComplianceRisk.jpg",
//   },
// ];
</script>

<style scoped>
.d-flex {
  display: flex;
}
.w-100 {
  width: 100%;
}

.single-line-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.multi-line-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Change this number to the desired number of lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
