<template>
  <div id="user-card">
    <div class="card text-center" style="max-width: auto">
      <div class="card-header">Tenmo user</div>
      <div class="card-body">
        <h5 class="card-title">{{ user.username }}</h5>
        <p class="card-text">ID: {{ user.id }}</p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-target="#transferForm"
          data-bs-toggle="modal"
        >
          Transfer
        </button>

        <div
          class="modal fade"
          id="transferForm"
          tabindex="-1"
          aria-labelledby="transferFormLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="transferFormLabel">
                  Transfer Form
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <slot name="transferForm"></slot>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: ["user"],
};
</script>

<style scoped></style>
