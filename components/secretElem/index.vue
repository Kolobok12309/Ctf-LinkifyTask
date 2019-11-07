<template>
  <div class="secret-elem">
    <form
      @submit.prevent="onSubmit"
      v-if="show"
    >
      <BFormInput
        placeholder="Enter your secrets"
        v-model="secretValue"
      />

      <BButton
        type="submit"
        variant="danger"
      >
        Submit
      </BButton>
    </form>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.scss" lang="scss" scoped></style>
