<script setup lang="ts">
import { reactive,ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const language = ref('zh-cn')
const noSpace = reactive({
   autoInsertSpace: false,
})
const messageConfig = reactive({
  max:3
})
</script>

<template>
  <el-config-provider :locale="language" :button="noSpace" :message="messageConfig">
    <RouterView />
  </el-config-provider>
</template>
