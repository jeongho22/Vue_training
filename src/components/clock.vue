<template>
    <div id="clock">
        <v-icon small></v-icon> {{ date }}
        <br />
        <v-icon small></v-icon> {{ time }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            week: ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'],
            time: '',
            date: '',
        }
    },
    mounted() {
        setInterval(this.updateTime, 1000)	// 1초마다 시간 갱신
    },
    methods: {
        updateTime() {
            var cd = new Date()
            // 날짜 출력
            this.date =
                this.zeroPadding(cd.getFullYear(), 4) + // 년
                '/' +
                this.zeroPadding(cd.getMonth() + 1, 2) + // 월
                '/' +
                this.zeroPadding(cd.getDate(), 2) + // 날짜
                ' ' +
                this.week[cd.getDay()]
            // 시간 출력
            this.time =
                this.zeroPadding(cd.getHours(), 2) + // 시간
                ':' +
                this.zeroPadding(cd.getMinutes(), 2) + //분
                ':' +
                this.zeroPadding(cd.getSeconds(), 2) // 초
        },
        zeroPadding(num, digit) {
            var zero = ''
            for (var i = 0; i < digit; i++) {
                zero += '0'
            }
            return (zero + num).slice(-digit)
        },
    },
}

</script>

<style scoped>
#clock {
    font-size: 0.875rem;
    font-weight: 500;
}
</style>