<template>
  <div class="app-form">
    <p class="form-title">Registration Form</p>
    <formulateForm @submit="submit">
      <FormulateInput
        name="username"
        type="text"
        label="Email*"
        validation="required"
        validation-name="Username or Email"
        placeholder="John Doe"
      />
      <FormulateInput
        name="token"
        type="number"
        label="token"
        validation="required"
        validation-name="token is required"
        placeholder="token"
      />
      <FormulateInput
        name="password"
        type="password"
        label="Password"
        validation="required"
        validation-name="Password is required"
        placeholder="Password"
      />
      <FormulateInput
        name="password_confirm"
        type="password"
        label="Confirm Password"
        validation="required|confirm"
        validation-name="Password is required"
        placeholder="John Doe"
      />
      <FormulateInput type="submit" label="Login" />
    </formulateForm>
  </div>
</template>

<script>
import StoreUtils from "@/utils/BaseUtils/StoreUtils";

export default {
  name: "RegistrationCompleteForm",
  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/registrationComplete");
    }
  }
};
</script>

<style scoped></style>
