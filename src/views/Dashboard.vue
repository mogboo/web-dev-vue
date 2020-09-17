<template>
<div>
  <p>A beautiful Dashboard page</p>
  <FetchTodoListTable/>
</div>
</template>

<script>
import FetchTodoListTable from "../components/todo/FetchTodoListTable";
export default {
name: "Dashboard",
  components: {FetchTodoListTable}
};
</script>

<style scoped>

</style>