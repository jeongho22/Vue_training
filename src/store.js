
import { createStore } from "vuex";
import axios from "axios";

axios.get();

const store = createStore({
  state() {
    return {
      타이틀: [],
      링크: [],
      기사내용: [],
      likes: 25,
      user: null,
      isLoading: false,

    };
  },

  mutations: {
    시간체크(state) {
      state.count++;
    },
    좋아요50() {
      {
        const result = confirm("뉴스 기사를 보시겠습니까?");
        if (result == true) {
          alert("뉴스기사로 이동합니다.");
        } else {
          alert("취소 합니다.");
          return;
          // return 해주면 끝남 여기서
        }
      }
    },
    좋아요(state) {
      if (state.likes <= 25) {
        state.likes++;
        state.likes--;
        alert("daily 뉴스 , 오늘은 뭐입지?");
      }
    },
    끄기() {
      alert("뉴스 기사를 종료합니다.");
    },

    변경(state) {
      state.isLoading = true;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },

  },

  actions: {},
  modules: {},
});

export default store;
