<template>
  <div class="app-form">
    <p class="form-title">Expense Form</p>
    <formulateForm @submit="submit">
      <FormulateInput
        name="cost"
        type="number"
        label="Cost*"
        validation="required"
        validation-name="Cost"
        placeholder="1000"
      />
      <FormulateInput
        name="email"
        type="text"
        label="Email*"
        validation="required"
        validation-name="Email"
        placeholder="boluokunaiya@gmail.com"
      />
      <FormulateInput
        v-model="value"
        :options="{
          first: 'Food',
          second: 'Internet',
          third: 'Fuel',
          fourth: 'Transportation'
        }"
        name="Category"
        type="select"
        placeholder="Select an option"
        label="Category*"
        validation="required"
        validation-name="Category"
      />
      <FormulateInput
        name="Description"
        type="textarea"
        label="Description*"
        validation="required"
        validation-name="Description"
        placeholder="Description"
      />
      <FormulateInput type="submit" label="Submit" />
    </formulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";
export default {
  name: "CreateExpenseForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("expense/createExpense");
    }
  }
};
</script>

<style scoped></style>
