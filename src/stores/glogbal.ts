import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
  id: 'globalState',
  state: () => {
    return {
      token: localStorage.getItem('token') || "",
      language: localStorage.getItem('language') || "en-US",
      mode: localStorage.getItem('mode') || "night",
    }
  },
  getters:{

  },
  actions:{
    setToken(token: string){
      this.token = token
    },
    setLanguage(language: string){
      this.language = language
    },
    logout(){
      this.token = ""
    }
  }
})
