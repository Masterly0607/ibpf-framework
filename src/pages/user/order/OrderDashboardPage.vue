<template>
  <div class="ibf-container-1400">
    <!-- Title box-->
    <!-- <q-card flat bordered class="q-mb-md">
      <q-card-section class="row items-center q-col-gutter-xl">
        <div class="col-2 text-weight-bold ibf-h12">#</div>
        <div class="col text-weight-bold ibf-h12">Product</div>
        <div class="col-auto text-weight-bold ibf-h12">Total Amount</div>
        <div class="col-3 text-weight-bold ibf-h12">Order Status</div>
      </q-card-section>
    </q-card> -->

    <!-- Order Details Box -->
    <q-card
      bordered
      class="q-mb-md ibf-card-3"
      v-for="(orderItem, orderItemIndex) in orderedPaginate.data"
      :key="orderItemIndex"
    >
      <q-card-section class="row items-center q-col-gutter-xl">
        <!-- Order ID -->
        <div class="col-2">
          <span class="text-weight-bold text-subtile1">
            #{{ orderItem.id }}</span
          >
        </div>

        <!-- Product -->
        <div class="col-3 ">
          <div class="ellipsis-3-lines">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla vero
            expedita exercitationem, inventore veritatis deserunt commodi
            eveniet mollitia ex eos atque impedit rem modi ipsum aperiam? Rerum
            ut vitae doloribus!
          </div>
        </div>

        <!-- Total Amount -->
        <div class="col-3  text-right  ">
          <span class="text-red-8 ">
            <price-original :price="orderItem.total_price" />
          </span>
        </div>

        <!-- Order Status -->
        <div class="col text-right">
          <q-chip color="orange">
            <div class="ellipsis">
              {{ orderItem.payment_status }}
            </div>
          </q-chip>
        </div>
      </q-card-section>

      <q-separator spaced size="3px" />
      <!-- Time of order -->
      <q-card-section class="row q-pt-none q-pb-sm justify-end text-grey">
        <div class="text-caption">
          {{ formatDate(orderItem.created_at) }}
        </div>
      </q-card-section>
    </q-card>

    <!-- <div class="column q-gutter-md">
      <q-card
        class="ibf-card-3"
        v-for="(orderItem, orderItemIndex) in orderedPaginate.data"
        :key="orderItemIndex"
      >
        <q-card-section class="q-pa-sm">
          <q-item>
            <q-item-section side top>
              <div class="column q-gutter-y-md text-center">
                <q-icon
                  size="30px"
                  color="primary"
                  name="mdi-invoice-list-outline"
                />

                <div class="ibf-h11 text-black text-weight-medium">
                  #{{ orderItem.id }}
                </div>
              </div>
            </q-item-section>
            <q-item-section>
              <q-item-label class="row justify-between items-center">
                <div class="ibf-h12 text-grey-6">
                  {{ orderItem.total_item }} Item(s)
                </div>

                <div>
                  <q-chip
                    size="12px"
                    :color="
                      checkPaymentStatusColor(orderItem.payment_status).color
                    "
                    text-color="white"
                    :icon="
                      checkPaymentStatusColor(orderItem.payment_status).icon
                    "
                  >
                    <div class="text-capitalize">
                      {{ orderItem.payment_status }}
                    </div>
                  </q-chip>
                </div>
              </q-item-label>

              <q-separator />

              <div class="q-my-sm">
                <div
                  v-for="(item, itemIndex) in orderItem.order_items"
                  :key="itemIndex"
                  class="q-my-sm"
                >
                  <div class="ibf-h12 text-grey-8 text-italic">
                    {{ item.course.title }}
                  </div>
                </div>
              </div>

              <q-separator />

              <div class="row justify-between">
                <span caption>Total: </span>
                <price-original :price="orderItem.total_price" />
              </div>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <div class="ibf-h12 text-grey-6">
            {{ formatDate(orderItem.created_at) }}
          </div>
        </q-card-actions>
      </q-card>

     

      <q-btn
        color="primary"
        icon="check"
        label="OK"
        @click="fetchOrderedItems"
      />
    </div> -->
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { checkPaymentStatusColor, formatDate } from "src/helpers/utils";
import { useUserStore } from "src/stores/user-store";
const userStore = useUserStore();
const orderedPaginate = computed(() => userStore.getOrderList);

const fetchOrderedItems = async () => {
  await userStore.serverFetchOrderedItems();
};

onMounted(() => {
  fetchOrderedItems();
});
</script>
