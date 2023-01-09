<template>
  <div id="transfer-form-modal">
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
            <form>
              <label>From: {{ currentUser.id }}</label>
              <label>To: {{ user.id }}</label>
              <div class="input-group mb-3">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" aria-label="Amount" />
                <span class="input-group-text">.00</span>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Do something</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transact-form",
  props: ["user", "currentUser"],
};
</script>

<style scoped></style>
