<template>
    <div id="weather">
        <!-- 날씨 정보가 있을 경우 -->
        <div v-if="typeof weather.main != 'undefined'">
            <div :title="weather.weather[0].main">
                <!-- Clear -->
                <v-icon v-if="code == 800">{{ icons[5] }}</v-icon>
                <!-- Thunderstorm -->
                <v-icon v-else-if="code.substr(0, 1) == 2">
                    {{ icons[0] }}
                </v-icon>
                <!-- Drizzle -->
                <v-icon v-else-if="code.substr(0, 1) == 3">
                    {{ icons[1] }}
                </v-icon>
                <!-- Rain -->
                <v-icon v-else-if="code.substr(0, 1) == 5">
                    {{ icons[2] }}
                </v-icon>
                <!-- Snow -->
                <v-icon v-else-if="code.substr(0, 1) == 6">
                    {{ icons[3] }}
                </v-icon>
                <!-- Atmosphere -->
                <v-icon v-else-if="code.substr(0, 1) == 7">
                    {{ icons[4] }}
                </v-icon>
                <!-- Clouds -->
                <v-icon v-else>
                    {{ icons[6] }}
                </v-icon>
            </div>
            <div>{{ Math.round(temp) }}℃</div>
        </div>
        <!-- 날씨 정보가 없을 경우 -->
        <div v-else>
            <div>
                <v-icon>mdi-cancel</v-icon>
            </div>
            <div>
                {{ weather.cod }}
            </div>
        </div>
    </div>
</template>



<script>



export default {
    data: function () {
        return {
            api_key: '6c2a012baa652611128aa1d1b5f6c39d', // 외국 날시 사이트에서 개인 api 키 받아서 진행 ! 
            url_base: 'https://api.openweathermap.org/data/2.5/',
            weather: {},
            code: '',
            temp: 0,
            // 날씨 표현 시 사용될 icon 배열
            icons: [
                '소나기', // 2xx : Thunderstorm
                '비', // 3xx : Drizzle
                '폭우', // 5xx : Rain
                '눈', // 6xx : Snow
                '안개', // 7xx : Atmosphere
                '맑음', // 800 : Clear
                '흐림', // 8xx : Clouds
            ],
        }
    },
    mounted() {
        // API 요청 URL (지역 Seoul 고정)
        let fetchUrl = `${this.url_base}weather?q=Seoul&units=metric&APPID=${this.api_key}`
        fetch(fetchUrl)
            .then(response => {
                return response.json()
            })
            .then(result => {
                this.weather = result // 날씨 정보
                this.temp = result.main.temp // 기온
                this.code = result.weather[0].id.toString() // 날씨 코드
            })
    },
}
</script>
   
<style scoped>
#weather {
    font-size: 0.875rem;
    font-weight: 500;
}
</style>