<template>
  <div>

    <div v-if="weatherData" class="row">
      <div class="col-md-6">
        <div class="card mb-4">
          <div class="card-header">기온 및 추천 옷차림</div>
          <div class="card-body">
            <p>기온: {{ weatherData.main.temp-1.0 }}℃</p>
            <p>추천 옷차림: {{ temperatureStatus }}</p>
          </div>
        </div>
        <div class="card">
          <div class="card-header">습도 및 바람 속도</div>
          <div class="card-body">
            <p>습도: {{ weatherData.main.humidity }}%</p>
            <p>바람 속도: {{ weatherData.wind.speed }} m/s</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">미세먼지 농도 및 마스크 유무</div>
          <div class="card-body">
            <p>미세먼지 농도: {{ airPollutionData.list[0].components.pm10 }} µg/m³</p>
            <p>{{ airQualityStatus }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import weatherService from '@/services/weatherService';

export default {
  name: 'Weather',
  data() {
    return {
      weatherData: null,
      airPollutionData: null,
    };
  },
  computed: {
    temperatureStatus() {
      if (!this.weatherData) return '';
      const temp = (this.weatherData.main.temp-1.0) ;

      if (temp >= 27) return '민소매, 반바지, 원피스';
      if (temp >= 23) return '반팔, 얇은 셔츠, 긴팔 반바지, 면바지';
      if (temp >= 20) return '긴팔 가디건, 후드티, 면바지,슬랙스, 스키니';
      if (temp >= 17) return '니트, 가디건, 후드티 ,맨투맨, 청바지';
      if (temp >= 12) return '두꺼운 가디건,살색 스타킹,트랜치 코트';
      if (temp >= 10) return '야상, 여러겹껴입기, 코트';
      if (temp >= 5) return ' 코트, 얇은패딩';
      return '두꺼운 코트에 여러겹껴입기, 두꺼운 패딩, 롱패딩';
    },
    airQualityStatus() {
      if (!this.airPollutionData) return '';
      const pm10 = this.airPollutionData.list[0].components.pm10;

      if (pm10 <= 30) return '좋아요 마스크를 안껴도 돼요 햄스터씨';
      if (pm10 <= 80) return '보통이에요 비염환자라면 마스크를 껴주세요 햄스터씨';
      if (pm10 <= 120) return '미세먼지가 나빠요 꼭 마스크를 껴주세요 햄스터씨';
      return '미세먼지가 매우 나빠요 꼭꼭곡 마스크를 껴주세요 햄스터씨';
    },
  },
  async created() {
    const lat = 37.3220;
    const lon = 126.8301;

    try {
      this.weatherData = await weatherService.getCurrentWeather(lat, lon);
      this.airPollutionData = await weatherService.getAirPollution(lat, lon);
    } catch (error) {
      console.error('Failed to fetch weather and air pollution data:', error);
    }
  },
};
</script>
``
