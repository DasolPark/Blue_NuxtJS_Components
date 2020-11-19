<template>
  <ColumnContainer>
    <h1>Pagination Page</h1>
    <ul>
      <li v-for="(description, index) in descriptions" :key="index">
        {{ description.description }}
      </li>
    </ul>
    <Pagination
      :pageSize="pageSize"
      :pageCount="pageCount"
      :pageNumber="pageNumber"
      :totalVisible="totalVisible"
      @on-page-click="onPageClick"
    />
  </ColumnContainer>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ColumnContainer from "@/components/UI/ColumnContainer";
import Pagination from "@/components/UI/Pagination";

const fetchItems = async (component) => {
  const { orgName, pageNumber, pageSize } = component.$store.state.descriptions;

  const res = await fetch(
    `https://api.github.com/orgs/${orgName}/repos?page=${pageNumber}&per_page=${pageSize}`
  );
  const data = await res.json();

  component.$store.dispatch("descriptions/setDescriptions", data);
};

const fetchItemsCount = async (component) => {
  const { orgName } = component.$store.state.descriptions;

  const res = await fetch(`https://api.github.com/orgs/${orgName}`);
  const data = await res.json();

  component.$store.dispatch("descriptions/setPageCount", data.public_repos);
};

export default {
  components: {
    ColumnContainer,
    Pagination,
  },
  methods: {
    async onPageClick(newPageNumber) {
      this.setPageNumber(newPageNumber);
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          pageNumber: newPageNumber,
        },
      });
      await fetchItems(this);
    },
    ...mapActions({
      setDescriptions: "descriptions/setDescriptions",
      setPageSize: "descriptions/setPageSize",
      setPageCount: "descriptions/setPageCount",
      setPageNumber: "descriptions/setPageNumber",
      setTotalVisible: "descriptions/setTotalVisible",
    }),
  },
  computed: {
    ...mapState({
      descriptions: (state) => state.descriptions.descriptions,
      pageSize: (state) => state.descriptions.pageSize,
      pageCount: (state) => state.descriptions.pageCount,
      pageNumber: (state) => state.descriptions.pageNumber,
      totalVisible: (state) => state.descriptions.totalVisible,
    }),
  },
  async fetch() {
    await fetchItems(this);
    await fetchItemsCount(this);
  },
};
</script>

<style lang="scss" scoped>
ul {
  margin: 30px 0;
}
</style>
