<template>
  <BContainer>
    <BAlert
      show
      variant="success"
      class="mt-4"
    >
      Вы покидаете сайт, осторожнее

      <a
        target="_blank"
        rel="nofollow"
        :href="href"
      >
        Ссылка
      </a>
    </BAlert>
  </BContainer>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped src="./index.scss"></style>
