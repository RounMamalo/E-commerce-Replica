import { defineStore } from 'pinia'
import axios from 'axios';
import { ref } from 'vue';
import router from '@/route';
import { jwtDecode } from 'jwt-decode';
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useUserStore = defineStore('user',() => {
  // other options..

  //data
    const account = ref(null);
    const isLoggedIn = ref(false);

  //functions
  const userLogin = async (currentAccount) => {
    const result = {
        success: false, 
        message: ""
    }
    try {
        const userAccount = {
            email: currentAccount.email,
            password: currentAccount.password,
        };
        const response = await axios.post(
        "http://localhost:3000/auth/login",
        userAccount
        );
        if (response.status == 200) {
            localStorage.setItem("token", response.data.token);
            router.push("/");
            result.success = true
            loadUser()
        } else {
            console.log(response.data.message)
        }

    } catch (error) {
        result.message = error.response?.data?.message || "Login failed"
    }
    return result
  };

  const loadUser = () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          isLoggedIn.value = true;
          account.value = decoded;
        } catch (err) {
          console.error("Invalid token:", err);
          isLoggedIn.value = false;
          account.value = null;
        }
      } else {
        isLoggedIn.value = false;
        account.value = null;
      }
    };

    const logOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.clear();
        loadUser();
        router.push("/login");
    }
  return { account, isLoggedIn, userLogin, loadUser, logOut }
})