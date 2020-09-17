<template>
  <div>
    <RegistrationInitForm v-if="formStage === 0" />
    <RegistrationCompleteForm v-if="formStage === 1" />
  </div>
</template>

<script>
import RegistrationInitForm from "../../components/forms/auth/RegistrationInitForm";
import RegistrationCompleteForm from "../../components/forms/auth/RegistrationCompleteForm";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
export default {
  components: { RegistrationInitForm, RegistrationCompleteForm },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  }
};
</script>
