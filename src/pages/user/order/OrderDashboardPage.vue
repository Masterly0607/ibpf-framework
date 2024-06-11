<template>
  <div class="ibf-container-900">
    <div class="column q-gutter-md">
      <q-card
        class="ibf-card-2"
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

                <div class="ibf-h10 text-black text-weight-medium">
                  {{ orderItem.id }}
                </div>
              </div>
            </q-item-section>
            <q-item-section>
              <q-item-label class="row justify-between items-center">
                <div class="ibf-h12 text-grey-7">
                  {{ orderItem.total_item }} Item(s)
                </div>

                <div class="ibf-h12">
                  {{ orderItem.payment_status }}
                </div>
              </q-item-label>

              <q-separator spaced />

              <div
                v-for="(item, itemIndex) in orderItem.order_items"
                :key="itemIndex"
              >
                <div class="ibf-h12 text-grey-9">
                  {{ item.course.title }}
                </div>
              </div>

              <q-separator spaced />

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

      <preview-json :list="orderedPaginate"></preview-json>
    </div>

    <q-btn color="primary" icon="check" label="OK" @click="fetchOrderedItems" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { productAPI } from "src/boot/axios";
import { formatDate } from "src/helpers/utils";
const orderedPaginate = ref([]);

const fetchOrderedItems = async () => {
  try {
    const res = await productAPI.get("/api/v1/user/order/list");
    if (!res.data.status) return;
    orderedPaginate.value = res.data.data;
    console.log(res);
  } catch (error) {}
};
</script>
