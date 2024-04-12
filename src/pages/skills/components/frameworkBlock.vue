<template>
  <div>
    <TreeNode :node="treeData" />
  </div>
</template>

<script setup>
import { ref } from "vue";

const treeData = ref({
  id: 1,
  name: "Parent",
  children: [
    {
      id: 2,
      name: "Child 1",
      children: [
        { id: 5, name: "Grandchild 1", children: [] },
        { id: 6, name: "Grandchild 2", children: [] },
      ],
    },
    { id: 3, name: "Child 2", children: [] },
    {
      id: 4,
      name: "Child 3",
      children: [{ id: 7, name: "Grandchild 3", children: [] }],
    },
  ],
});
</script>
