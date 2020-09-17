<template>
  <div class="jumbotron">
    <RegistrationInitForm v-if="formStage === 0" />
  </div>
</template>

<script>
import RegistrationInitForm from "../../components/Forms/auth/RegistrationInitForm";
import StoreUtils from "../../utils/BaseUtils/StoreUtils";
export default {
  components:{ RegistrationInitForm },
  computed: {
    formStage() {
      return StoreUtils.rootGetters("form/getFormStage");
    }
  }
};
</script>
