<script setup>
import { ERROR_MESSAGES, EMAIL_REGEX } from "@/consts";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const validationErrors = ref({
  name: {
    error: false,
    messages: [],
  },
  email: {
    error: false,
    messages: [],
  },
  message: {
    error: false,
    messages: [],
  },
});

const validateForm = () => {
  //Required validation
  let requiredValid = true;
  let formatValid = true;
  Object.keys(formData.value).some((key) => {
    if (!formData.value[key].length) {
      validationErrors.value[key].error = true;
      validationErrors.value[key].messages.push(ERROR_MESSAGES.REQUIRED);
      requiredValid = false;
    } else {
      validationErrors.value[key].error = false;
      validationErrors.value[key].messages = [];
    }
  });
  //Format validation
  if (!formData.value.email.match(EMAIL_REGEX)) {
    validationErrors.value.email.error = true;
    validationErrors.value.email.messages.push(ERROR_MESSAGES.FORMAT);
    formatValid = false;
  } else {
    validationErrors.value.email.error = false;
    validationErrors.value.email.messages = [];
  }
  return requiredValid && formatValid;
};

//Form submit
const loading = ref(false);
const handleSubmitForm = async () => {
  const isValid = validateForm();
  if (isValid) {
    loading.value = true;
    try {
      await usePostContact(formData.value);
      toast.success("Contact added!", {
        autoClose: 6000,
        theme: "colored",
      });
      loading.value = false;
    } catch (e) {
      toast.error("Error while adding a contact!", {
        autoClose: 6000,
        theme: "colored",
      });
      loading.value = false;
    }
  }
};
</script>

<template>
  <section class="flex p-[80px]">
    <h2 class="uppercase text-[48px] w-[25%] mr-[80px]">
      QUESTION? WE ARE HERE TO HELP!
    </h2>
    <form>
      <div class="flex mb-[50px]">
        <div class="mr-[30px] relative">
          <label class="uppercase block" for="name">Name</label>
          <input class="border-b-2 w-[300px] focus:outline-0 py-[5px]" v-model="formData.name" type="text" id="name"
            name="email" />
          <span class="absolute text-[12px] text-[#FF2929] bottom-[-20px] left-px" v-if="validationErrors.name.error">{{
            validationErrors.name.messages[0] }}</span>
        </div>
        <div class="relative">
          <label class="uppercase block" for="email">Email</label>
          <input class="border-b-2 w-[300px] focus:outline-0 py-[5px]" v-model="formData.email" type="email" id="email"
            name="email" />
          <span class="absolute text-[12px] text-[#FF2929] bottom-[-20px] left-px" v-if="validationErrors.email.error">{{
            validationErrors.email.messages[0] }}</span>
        </div>
      </div>
      <div class="mb-[30px] relative">
        <label class="uppercase block" for="message">Message</label>
        <textarea class="border-b-2 w-[300px] focus:outline-0 py-[5px]" v-model="formData.message" rows="4"
          id="message"></textarea>
        <span class="absolute text-[12px] text-[#FF2929] bottom-[-20px] left-px" v-if="validationErrors.message.error">{{
          validationErrors.message.messages[0] }}</span>
      </div>
      <button class="uppercase px-[50px] py-[10px] border-2 border-black rounded-full hover:bg-slate-100"
        @click.prevent="handleSubmitForm">
        {{ loading ? "Sending..." : "Send" }}
      </button>
    </form>
  </section>
</template>
