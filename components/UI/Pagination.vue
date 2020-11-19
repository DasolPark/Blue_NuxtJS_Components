<template>
  <section class="pagination-container">
    <button
      class="pagination-button"
      :disabled="pageNumber <= 1"
      @click="changePageNumber(pageNumber - 1)"
    >
      &lt;
    </button>
    <ul>
      <li v-for="(item, index) in new Array(pageNumbers)" :key="index">
        <button
          :class="[
            'pagination-button',
            pageNumber === +index + 1 ? 'active' : '',
          ]"
          @click="changePageNumber(index + 1)"
        >
          {{ index + 1 }}
        </button>
      </li>
    </ul>
    <button
      class="pagination-button"
      :disabled="pageNumber >= pageNumbers"
      @click="changePageNumber(pageNumber + 1)"
    >
      &gt;
    </button>
  </section>
</template>

<script>
export default {
  name: "Pagination",
  computed: {
    /** need to change only showing 10 pages & applied totalVisible*/
    pageNumbers() {
      return Math.ceil(this.pageCount / this.pageSize);
    },
  },
  methods: {
    changePageNumber(newPageNumber) {
      this.$emit("on-page-click", newPageNumber);
    },
  },
  props: {
    pageSize: {
      type: Number,
      defaultValue: 10,
    },
    pageCount: {
      type: Number,
      defaultValue: 100,
    },
    pageNumber: {
      type: Number,
      defaultValue: 1,
    },
    totalVisible: {
      type: Number,
      defaultValue: 7,
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;

  button {
    margin: 2px;
    padding: 5px 7px;
    border-radius: 3px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);

    &.active {
      background-color: rgb(138, 135, 135);
      cursor: auto;
    }

    &:active {
      border: none;
    }

    &:not(:disabled, .active):hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:disabled {
      cursor: auto;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }
}
</style>
