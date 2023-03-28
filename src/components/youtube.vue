<template>
  <div>
    <loading-spinner></loading-spinner>
    <div v-if="!$store.state.isLoading">

      <div>
        <div
            v-for="(item, i) in playlistItems"
            :key="item.id"
            class="card mb-4 shadow-sm"
            style="max-width: 1600px; margin: 0 auto;"
        >
          <div class="card-body">
            <div class="row">
              <div class="col-md-4">
                <a
                    :href="`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`"
                    target="_blank"
                >
                  <img
                      :src="item.snippet.thumbnails.high.url"
                      alt="Video thumbnail"
                      class="img-thumbnail"
                      :style="{
                  width: item.snippet.thumbnails.high.width * 1.5 + 'px',
                  height: item.snippet.thumbnails.high.height * 1.5 + 'px'
                }"
                  />
                </a>
              </div>
              <div class="col-md-8">
                <h5 class="card-title">{{ item.snippet.title }}</h5>
                <p>{{ getTimeDifference(item.snippet.publishedAt) }}분 전에 게시됨</p>
                <a
                    :href="`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`"
                    class="btn btn-primary"
                    target="_blank"
                >
                  바로가기
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isLoading" class="loading-container">
          <div class="loading">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>


</template>

<script>
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  components: {
    LoadingSpinner,
  },
  data() {
    return {
      playlistItems: [],
    };
  },
  async created() {
    await this.getPlaylistItems();
  },
  methods: {
    async getPlaylistItems() {
      this.$store.commit('setLoading', true);
      try {
        const apiKey = 'AIzaSyBZxrB4TTyP8JWs7Nh_I66e6nWq99869bI';
        const channelId = 'UCsU-I-vHLiaMfV_ceaYz5rQ';
        const playlistId = channelId.replace('UC', 'UU');
        const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=${playlistId}&key=${apiKey}`
        );

        this.playlistItems = response.data.items;
      } catch (error) {
        console.error('Error fetching playlist items:', error);
      } finally {
        this.$store.commit('setLoading', false);
      }
    },
    getTimeDifference(publishedAt) {
      const now = new Date();
      const publishedDate = new Date(publishedAt);
      const difference = Math.abs(now - publishedDate);
      const minutesDifference = Math.floor(difference / 1000 / 60);

      return minutesDifference;
    },
  },
};
</script>