<script setup>
import { RouterLink } from "vue-router";
import router from "@/route";
import { jwtDecode } from "jwt-decode";
import { onMounted, ref } from "vue";

// const token = localStorage.getItem("token");
const isLoggedIn = ref(false)
const currentUser = ref(null);

const loadUser = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwtDecode(token);
      isLoggedIn.value = true;
      currentUser.value = decoded.userName; // 👈 works if you added userName in JWT payload
    } catch (err) {
      console.error("Invalid token:", err);
      isLoggedIn.value = false;
      currentUser.value = null;
    }
  } else {
    isLoggedIn.value = false;
    currentUser.value = null;
  }
};

onMounted(() => {
  loadUser();
})

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userName");
  localStorage.clear();
  loadUser();
  router.push("/login");
};

</script>
<template>
  <div class="min-h-fit min-w-full py-5 justify-center flex bg-white">
    <div class="flex min-w-[70%] justify-between">
      <div class="top flex gap-5">
        <div class="home-button">
          {{ currentUser }}
          <RouterLink to="/">Home</RouterLink>
        </div>
        <div class="top-settings flex gap-5">
          <a>Mall</a>
          <!-- <RouterLink to="/messages"> Messages </RouterLink>
        <RouterLink to="/friends"> Friends </RouterLink> -->
        </div>
      </div>
      <div class="bottom-settings flex gap-5" v-if="isLoggedIn === true">
        <RouterLink to="/profile"> Profile </RouterLink>
        <RouterLink to="/dashboard"> Dashboard </RouterLink>
        <button @click="logout">Log Out</button>
      </div>
      <div class="bottom-settings flex gap-5" v-else-if="isLoggedIn === false">
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login">Log In</RouterLink>
      </div>
    </div>
  </div>
</template>
