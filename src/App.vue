<template>
  <v-app>
    <v-app-bar>
      <v-container class="d-flex align-center">
        <img class="me-2" height="40" src="@/assets/favicon.ico" />
        <v-app-bar-title>番茄鐘</v-app-bar-title>
        <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
        <v-btn prepend-icon="mdi-format-list-bulleted" to="/list">事項</v-btn>
        <v-btn prepend-icon="mdi-cog" to="/setting">設定</v-btn>
        <v-btn class="text-h5" prepend-icon="mdi-theme-light-dark" @click="toggleTheme"
          ><span class="d-none d-sm-inline text-h6">深/淺主題</span></v-btn
        >
      </v-container>
    </v-app-bar>
    <v-main>
      <!--
        slot = 插槽 = 自訂元件內的某部分 HTML
        v-slot="元件插槽提供的可用變數"
        Component = 目前路由應該顯示的元件
      -->
      <router-view v-slot="{ Component }">
        <!--
          keep-alive 包住的元件不會被銷毀
          include 指定保留的元件
        -->
        <!--
          component = 動態元件
          is = 要使用的元件
        -->
        <keep-alive include="index">
          <component :is="Component"></component>
        </keep-alive>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
