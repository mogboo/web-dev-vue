<template>
  <div class="app-form">
    <p class="form-title">Registration Form</p>
    <formulateForm @submit="submit">
      <FormulateInput
        name="email"
        type="email"
        label="Email*"
        validation="required"
        validation-name="Email"
        placeholder="John Doe"
      />
      <FormulateInput
        name="firstName"
        type="text"
        label="Firstname*"
        validation="required"
        validation-name="firstname"
        placeholder="John Doe"
      />
      <FormulateInput
        name="lastName"
        type="text"
        label="Lastname*"
        validation="required"
        validation-name="lastName"
        placeholder="John Doe"
      />
      <FormulateInput type="submit" label="Register" />
    </formulateForm>
  </div>
</template>

<script>
import StoreUtils from "@/utils/BaseUtils/StoreUtils";

export default {
  name: "RegistrationInitForm",

  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/registrationInit");
    }
  }
};
</script>

<style scoped></style>
