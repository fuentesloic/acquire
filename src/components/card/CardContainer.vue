<template>
  <article>
    <slot />

    <!-- MOCKUP -->
    <BaseTitle>Product</BaseTitle>
    <BaseSubtitle>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel ea ipsa harum, aut debitis quasi
      nesciunt modi quidem dolor! Ad aliquam numquam expedita odit quas vitae ex illum facere.
    </BaseSubtitle>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseSubtitle from '@/components/base/BaseSubtitle.vue'

@Component({
  components: {
    BaseSubtitle,
    BaseTitle
  }
})
export default class CardContainer extends Vue {}
</script>

<style lang="scss" scoped>
article {
  background-color: $white;
  border-radius: 0.8rem;
  padding: 2rem;
  margin-bottom: 2rem;

  // MOCKUP
  height: 36rem;
  width: 100%;
}
</style>
