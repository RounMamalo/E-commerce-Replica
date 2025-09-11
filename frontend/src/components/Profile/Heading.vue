<script setup>
import { defineProps, onMounted, reactive, watchEffect } from "vue";

const localUser = reactive({
    name: "",
    email: "",
    id: ""
})

const props = defineProps({
  currentUser: {
    type: Object,
  },
});
watchEffect(() => {
    props.currentUser
})
console.log(props.currentUser)
</script>

<template>
    {{ props.currentUser }}
</template>
