<template>
  <div class="app-form">
    <p class="form-title">Login Form</p>
    <formulateForm @submit="submit">
      <FormulateInput
        name="userID"
        type="text"
        label="Email*"
        validation="required"
        validation-name="Username or Email"
        placeholder="John Doe"
      />
      <FormulateInput
        name="password"
        type="password"
        label="Password"
        validation="required"
        validation-name="Password is required"
        placeholder="Password"
      />
      <FormulateInput type="submit" label="Login" />
    </formulateForm>
  </div>
</template>

<script>
import StoreUtils from "../../../utils/BaseUtils/StoreUtils";

export default {
  name: "LoginForm",

  methods: {
    submit(data) {
      StoreUtils.commit("form/BUILD_FORM_BODY", data);
      StoreUtils.dispatch("auth/login");
    }
  }
};
</script>

<style scoped></style>
