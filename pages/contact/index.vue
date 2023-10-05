<script setup>
import { toast } from "vue3-toastify";
import { JSON_SERVER_URL } from "@/consts.ts";
import "vue3-toastify/dist/index.css";

//Fetch data
const { data: contacts, refresh } = await useFetch(JSON_SERVER_URL);
//Remove data
const handleRemoveContact = async (id) => {
  try {
    await useFetch(`${JSON_SERVER_URL}/${id}`, {
      method: "DELETE",
    });
    toast.success("Contact deleted!", {
      autoClose: 6000,
      theme: "colored",
    });
    refresh();
  } catch (e) {
    toast.error("Error while deleting a contact!", {
      autoClose: 6000,
      theme: "colored",
    });
  }
};
</script>

<template>
  <section class="p-[100px]">
    <ul class="w-[800px] mx-auto">
      <li
        class="border-2 mb-1 bg-slate-300 p-8"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <div class="flex justify-between">
          <span class="block uppercase">{{ contact.name }}</span>
          <span class="block">{{ contact.email }}</span>
        </div>
        <p class="py-[20px]">{{ contact.message }}</p>
        <button
          class="border-2 block border-black rounded bg-none px-[20px] py-[5px] mt-[10px] ml-auto"
          @click="handleRemoveContact(contact.id)"
        >
          <nuxt-icon class="text-[30px]" name="bin" />
        </button>
      </li>
    </ul>
  </section>
</template>
