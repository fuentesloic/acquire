<template>
  <article>
    <aside>
      <BaseImage
        alt="alt"
        class="product"
        src="https://cdn.shopify.com/s/files/1/2804/0750/products/Allbirds_TR_RN_SF_PDP_Kauri_Marine_BTY_991710d1-b6d1-487e-8a4f-49fcb79bf4a9.png?v=1618605577"
      />
    </aside>

    <header>
      <BaseTitle class="product">Product</BaseTitle>
      <BaseSubtitle class="product">$ 99</BaseSubtitle>
    </header>

    <BaseParagraph class="product">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius vel ea ipsa harum, aut debitis quasi
      nesciunt modi quidem dolor! Ad aliquam numquam expedita odit quas vitae ex illum facere.
    </BaseParagraph>

    <section>
      <ul>
        <li>
          <BaseParagraph class="label">Label 1</BaseParagraph>

          <div>
            <BaseButton class="selector active" :click="() => null">button 1</BaseButton>
            <BaseButton class="selector" :click="() => null">button 2</BaseButton>
          </div>
        </li>
        <li>
          <BaseParagraph class="label">Label 2</BaseParagraph>
          <div>
            <BaseButton class="selector active" :click="() => null">button 1</BaseButton>
            <BaseButton class="selector" :click="() => null">button 2</BaseButton>
          </div>
        </li>
      </ul>
    </section>

    <footer>
      <BaseButton :click="() => null">button submit</BaseButton>
    </footer>
  </article>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import BaseButton from '@/components/base/BaseButton.vue'
import BaseImage from '@/components/base/BaseImage.vue'
import BaseParagraph from '@/components/base/BaseParagraph.vue'
import BaseTitle from '@/components/base/BaseTitle.vue'
import BaseSubtitle from '@/components/base/BaseSubtitle.vue'

@Component({
  components: {
    BaseButton,
    BaseImage,
    BaseParagraph,
    BaseSubtitle,
    BaseTitle
  }
})
export default class CardProduct extends Vue {}
</script>

<style lang="scss" scoped>
article {
  display: grid;
  background-color: $white;
  border-radius: 0.8rem;
  gap: 2rem 1rem;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: 2rem auto auto 4rem;
  margin-bottom: 2rem;
  padding: 2rem;

  & > aside {
    background-color: $gray-light;
    grid-area: 1 / 2 / 5 / 1;

    img {
      height: 100%;
      width: 100%;
    }
  }

  & > header {
    display: flex;
    grid-area: 1 / 3 / 1 / 3;
    justify-content: space-between;
  }

  & > p {
    grid-area: 2 / 3 / 2 / 3;
  }

  & > section {
    grid-area: 3 / 4 / 3 / 3;

    ul {
      li {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;

        div {
          display: flex;
        }
      }
    }
  }

  & > footer {
    align-items: center;
    display: flex;
    grid-area: 4 / 4 / 4 / 3;
    justify-content: flex-end;
  }
}
</style>
