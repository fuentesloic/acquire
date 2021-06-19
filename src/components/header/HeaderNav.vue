<template>
  <nav>
    <a href="https://www.allbirds.ca/" target="_blank" rel="noopener noreferrer">
      <img src="@/assets/image/logo.png" alt="Allbirds logo" />
    </a>

    <a href="https://www.allbirds.com/" target="_blank" rel="noopener noreferrer">Visit allbirds.com →</a>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({})
export default class HeaderNav extends Vue {}
</script>

<style lang="scss" scoped>
header {
  background-attachment: fixed;
  background-position: 0 10%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 44rem;
  padding: 2.75rem 13rem;

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5.5rem;

    img {
      width: 10rem;
      height: 3rem;
      margin: 1.6rem 1.4rem;
    }
  }
}
</style>
