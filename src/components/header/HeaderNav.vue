<template>
  <nav>
    <BaseLink href="https://www.allbirds.com/">
      <BaseImage class="logo" src="@/assets/image/logo.png" alt="Allbirds" />
      <img src="@/assets/image/logo.png" alt="Allbirds" />
    </BaseLink>

    <BaseLink href="https://www.allbirds.com/" target="_blank" rel="noopener noreferrer">
      Visit allbirds.com
    </BaseLink>
  </nav>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import BaseImage from '@/components/base/BaseImage.vue'
import BaseLink from '@/components/base/BaseLink.vue'

@Component({
  components: {
    BaseImage,
    BaseLink
  }
})
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

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5.5rem;

    img {
      height: 3.3rem;
      width: 10.2rem;
    }
  }
}
</style>
