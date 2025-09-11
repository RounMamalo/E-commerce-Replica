<script setup>
import { RouterLink } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/useUserStore";

const errorMessage = ref("")
const store = useUserStore();
const currentAccount = reactive({
  email: "",
  password: "",
});

const handleLogin = async () => {
  const result = await store.userLogin(currentAccount)
  if (!result.success) {
    errorMessage.value = result.message
  }
}

</script>

<template>
  <div
    class="min-w-fit w-[25%] bg-white shadow-xl rounded-md flex flex-col px-10 py-8"
  >
    <RouterLink class="text-red-400 max-w-fit" to="/">Go Back</RouterLink>
    <div
        class="bg-red-400 p-2 text-white my-2" v-if="errorMessage"
    >
        {{ errorMessage }}
    </div>
    <form @submit.prevent="handleLogin">
      <h1 class="text-3xl mb-5">Log In</h1>
      <fieldset class="flex flex-col gap-y-5">
        <div class="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="currentAccount.email"
          />
        </div>
        <div class="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="currentAccount.password"
          />
        </div>
      </fieldset>
      <div class="flex justify-center mt-5">
        <button
          class="text-2xl bg-green-500 text-white border-2 border-solid min-w-[70%] px-2 py-2 font-bold"
        >
          Log In
        </button>
      </div>
    </form>
  </div>
</template>
