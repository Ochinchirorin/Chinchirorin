<template>
  <section class="section">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-half">
          <div class="nes-field">
            <label class="is-family-2P is-size-3" for="name_field">Room Name:</label>
            <input
              v-model="roomName"
              type="text"
              id="name_field"
              class="nes-input is-family-2P mt-5"
            />
            <a class="nes-btn mt-6 is-family-2P" @click="submitRoomName">Enter!</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InputRoom",
  data: () => {
    return {
      roomName: ""
    };
  },
  methods: {
    submitRoomName() {
      const payload = this.roomName;
      this.$emit("submit-roomName", payload);
    }
  }
};
</script>