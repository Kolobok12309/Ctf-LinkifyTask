<template>
  <div class="chat-preview">
    <div class="chat-preview__id">
      {{receiver.id}}
    </div>

    <div class="chat-preview__text">
      {{lastMessage}}
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style
  src="./index.scss"
  lang="scss"
  scoped
></style>
