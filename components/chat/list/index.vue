<template>
  <div class="chat-list">
    <div class="chat-list__search-block">
      <BFormInput
        placeholder="Фильтр"
        v-model="search"
      />

      <BFormInput
        placeholder="Новый чат"
        v-model="newId"
        @keyup.enter="addChat"
      />
    </div>

    <div class="chat-list__list">
      <ChatPreview
        v-for="receiver in sorted"
        :key="receiver.id"
        :receiver="receiver"
        :selected="value === receiver"
        @click.native="selectReceiver(receiver)"
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
