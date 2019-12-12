<template>
  <div class="chat-dialog">
    <div class="chat-dialog__title">
      {{ titleText }}
    </div>
    <div class="chat-dialog__messages">
      <div
        class="chat-dialog__message"
        v-for="message in messages"
        :key="message.date"
        :class="{ ['chat-dialog__message_my']: message.myMessage }"
      >
        <div class="chat-dialog__message__container">
          <span
            class="chat-dialog__message__text"
            v-html="sanitize(message.text)"
          />
        </div>
      </div>
    </div>
    <form
      class="chat-dialog__text"
      @submit.prevent="onSubmit"
    >
      <BFormInput
        placeholder="Текст сообщения [:happy:]"
        v-model="text"
        :disabled="disabled"
      />
      <BButton
        variant="danger"
        type="submit"
        :disabled="disabled"
      >
        Send
      </BButton>
    </form>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.scss" lang="scss" scoped></style>
