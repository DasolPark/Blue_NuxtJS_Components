import { GetterTree, ActionTree, MutationTree } from 'vuex';

interface State$description {
  descriptions: Array<Object>,
  pageCount: Number,
  pageSize: Number,
  pageNumber: Number,
  totalVisible: Number,
  orgName: String,
}

export const state = () => ({
  descriptions: [],
  pageCount: 100,
  pageSize: 10,
  pageNumber: 1,
  totalVisible: 7,
  orgName: 'vuejs',
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setDescriptions(state: State$description, descriptions: Array<Object>) {
    state.descriptions = descriptions;
  },
  setPageCount(state: State$description, pageCount: Number) {
    state.pageCount = pageCount;
  },
  setPageSize(state: State$description, pageSize: Number) {
    state.pageSize = pageSize;
  },
  setPageNumber(state: State$description, pageNumber: Number) {
    state.pageNumber = pageNumber;
  },
  setTotalVisible(state: State$description, totalVisible: Number) {
    state.totalVisible = totalVisible;
  },
  setOrgName(state: State$description, orgName: String) {
    state.orgName = orgName;
  }
}

export const actions: ActionTree<RootState, RootState> = {
  setDescriptions({ commit }, descriptions: Array<Object>) {
    commit('setDescriptions', descriptions);
  },
  setPageCount({ commit }, pageCount: Number) {
    commit('setPageCount', pageCount);
  },
  setPageSize({ commit }, pageSize: Number) {
    commit('setPageSize', pageSize);
  },
  setPageNumber({ commit }, pageNumber: Number) {
    commit('setPageNumber', pageNumber);
  },
  setTotalVisible({ commit }, totalVisible: Number) {
    commit('setTotalVisible', totalVisible)
  },
  setOrgName({ commit }, orgName: String) {
    commit('setOrgName', orgName);
  },
}
