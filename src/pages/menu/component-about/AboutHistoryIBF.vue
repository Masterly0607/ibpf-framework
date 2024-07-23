<template>
  <div class="q-py-sm">
    <div class="row q-col-gutter-lg">
      <!-- Image -->
      <div class="col-12 col-md-5">
        <q-img src="https://www.ibfkh.org/images/illustration/about-us-2.png" :ratio="16 / 9" spinner-color="primary"
          spinner-size="82px" />
      </div>

      <div class="col-12 col-md-7">
        <!-- Subtittle -->
        <div class="ibf-h11 text-grey-7">
          Since its full establishment in 2016, the Institute of Banking and Finance has been providing trainings, local
          and international certifications to over 40,000 banking professionals in Cambodia. In localizing international
          best practices for Cambodia banking industry and with support and direction from the National Bank of Cambodia
          (NBC), IBF has worked with internationally renewed and local experts and NBC Officials to develop competency
          for key positions in the Banks and Financial Institutions (BFIs) to guide their capacity development journeys.
          These competencies are later turned into textbooks for their reference and to serve as study text for the
          certifications. Key local certifications include Retail Lending, SME Lending, Compliance Level 1, Regulatory
          Compliance, Internal Audit Foundation, Fundamental Risk Management, and Responsible Lending.
          <br /><br />
          In 2019, IBF has entered into partnership with one key international university in Cambodia, Paragon
          International University. The partnership explores integration of IBF’s certification into
        </div>
      </div>
    </div>

    <div class="q-py-xs">
      <p class="ibf-h11 text-grey-7">
        <span v-if="!isExpanded">
          existing university curriculum in order to provide hands-on knowledge and industry practices to students
          majoring in Finance and
          Banking, or other related fields, in...
          <span @click="toggleExpand" class="text-weight-medium ibf-h11 text-primary">
            See more
            <q-icon name="arrow_forward" />
          </span>
        </span>
        <span v-else>
          existing university curriculum in order to provide hands-on knowledge and industry practices to students
          majoring in Finance and
          Banking, or other related fields, in order to increase the readiness of the future workforces and their
          employability in the banking industry. It has been proven that these workforces are highly sought after by the
          banks and microfinances for their practical skills and knowledge relevant to the industry. At the start of
          2023, IBF inked the same collaboration with the National University of Management (NUM) and Panhasastra
          University of Cambodia (PUC) to ensure their students benefits and future employability in the market
          <br>
          <span @click="toggleExpand" class="text-weight-medium ibf-h11 text-primary">
            See less
            <q-icon name="arrow_back" />
          </span>
        </span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<style scoped>
.text-primary {
  cursor: pointer;
  text-decoration: underline;
}
</style>
