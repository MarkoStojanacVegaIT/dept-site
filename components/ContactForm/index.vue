<script setup>
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
  Object.keys(formData.value).forEach((key) => {
    if (!formData.value[key].length) {
      validationErrors.value[key].error = true;
      validationErrors.value[key].messages.push("This field is required!");
    } else {
      validationErrors.value[key].error = false;
      validationErrors.value[key].messages = [];
    }
  });
  //Format validation
  if (
    !formData.value.email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    validationErrors.value.email.error = true;
    validationErrors.value.email.messages.push("Incorrect email format!");
  } else {
    validationErrors.value.email.error = false;
    validationErrors.value.email.messages = [];
  }
};

const loading = ref(false);
const handleSubmitForm = () => {
  validateForm();
  loading.value = true;
  fetch("http://localhost:3004/data", {
    method: "POST",
    body: JSON.stringify(formData.value),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => (loading.value = false))
    .catch((e) => (loading.value = false));
};
</script>

<template>
  <div class="flex p-[80px]">
    <h2 class="uppercase text-[48px] w-[25%] mr-[80px]">
      QUESTION? WE ARE HERE TO HELP!
    </h2>
    <form>
      <div class="flex mb-[50px]">
        <div class="mr-[30px] relative">
          <label class="uppercase block" for="name">Name</label>
          <input
            class="border-b-2 w-[300px] focus:outline-0 py-[5px]"
            v-model="formData.name"
            type="text"
            id="name"
            name="email"
          />
          <span
            class="absolute text-[12px] text-[#FF2929] bottom-[-20px] left-px"
            v-if="validationErrors.name.error"
            >{{ validationErrors.name.messages[0] }}</span
          >
        </div>
        <div class="relative">
          <label class="uppercase block" for="email">Email</label>
          <input
            class="border-b-2 w-[300px] focus:outline-0 py-[5px]"
            v-model="formData.email"
            type="email"
            id="email"
            name="email"
          />
          <span
            class="absolute text-[12px] text-[#FF2929] bottom-[-20px] left-px"
            v-if="validationErrors.email.error"
            >{{ validationErrors.email.messages[0] }}</span
          >
        </div>
      </div>
      <div class="mb-[30px] relative">
        <label class="uppercase block" for="message">Message</label>
        <textarea
          class="border-b-2 w-[300px] focus:outline-0 py-[5px]"
          v-model="formData.message"
          rows="4"
          id="message"
        ></textarea>
        <span
          class="absolute text-[12px] text-[#FF2929] bottom-[-20px] left-px"
          v-if="validationErrors.message.error"
          >{{ validationErrors.message.messages[0] }}</span
        >
      </div>
      <button
        class="uppercase px-[50px] py-[10px] border-2 border-black rounded-full hover:bg-slate-100"
        @click.prevent="handleSubmitForm"
      >
        {{ loading ? 'Sending...' : 'Send'}}
      </button>
    </form>
  </div>
</template>
