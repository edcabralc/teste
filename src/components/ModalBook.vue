<template>
  <div class="modal-wrapper" v-for="lista in lista" v-show="true">
    Resumo da reserva
    <div class="modal">
      <span class="close-button">X</span>
      <div class="modal-content">
        <h3>Resumo da reserva</h3>
        <div>
          <div class="modal-reserva">
            <div>
              <img src="https://picsum.photos/id/598/600/400" alt="" />
              {{ lista }}
            </div>
            <div class="modal-carrinho"></div>
            <div class="btn">Reservar</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalBook",
  props: {
    lista: {
      type: Array,
      required: true,
    },
  },

  methods: {
    openModal() {
      this.modalOpen = !this.modalOpen;
      console.log(this);
      console.log(this.modalOpen);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  display: none;
  //   display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.modal {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  width: 100%;
  height: auto;
  padding: 1rem;
  background-color: #eae6d9;
}

.modal .btn {
  width: 100%;
}
</style>
