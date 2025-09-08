<script setup>
import { RouterLink } from "vue-router";
import { reactive, onMounted } from "vue";
import axios from "axios";

const account = reactive({
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  password: "",
  role: "User",
});

const createAccount = async () => {
  try {
    console.log(newAccount);
    const response = await axios.post("http://localhost:3000/auth/register", {
      ...newAccount,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div
    class="min-w-fit w-80 bg-white shadow-xl rounded-md flex flex-col gap-y-2 px-10 py-8"
  >
    <RouterLink class="text-red-400 max-w-fit" to="/">Go Back</RouterLink>
    <form @submit.prevent="createAccount">
      <h1 class="text-3xl mb-5">Register Account</h1>
      <fieldset class="flex flex-col gap-y-5">
        <div class="flex gap-2">
          <div class="flex flex-col">
            <label>First Name</label>
            <input
              type="text"
              class="border-[1px] border-solid border-gray-400 p-2"
              required
              v-model="account.firstName"
            />
          </div>
          <div class="flex flex-col">
            <label>Last Name</label>
            <input
              type="text"
              class="border-[1px] border-solid border-gray-400 p-2"
              required
              v-model="account.lastName"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label>Username</label>
          <input
            type="text"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="account.userName"
          />
        </div>
        <div class="flex flex-col">
          <label>Email</label>
          <input
            type="email"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="account.email"
          />
        </div>
        <div class="flex flex-col">
          <label>Password</label>
          <input
            type="password"
            class="border-[1px] border-solid border-gray-400 p-2"
            required
            v-model="account.password"
          />
        </div>
      </fieldset>
      <div class="flex justify-center mt-5">
        <button
          class="text-2xl bg-green-500 text-white border-2 border-solid min-w-[70%] px-2 py-2 font-bold"
        >
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>
