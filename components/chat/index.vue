<template>
  <div class="chat">
    <div
      class="chat-id"
      v-show="myId"
    >
      Ваш Id: {{myId}}
    </div>

    <div class="chat-row">
      <List
        v-model="nowReceiver"
        :receivers="receivers"
        @addChat="addChat"
      />

      <Dialog
        :receiver="nowReceiver"
        @sendMessage="sendMessage"
      />
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.scss"
  lang="scss"
  scoped
></style>
