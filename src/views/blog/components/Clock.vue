<template>
  <div class="clock_container">
    <h1 class="clock_text">光阴荏苒</h1>
    <flip-clock></flip-clock>
  </div>
</template>

<script>
import FlipClock from '@/components/clock/FlipClock'
export default {
  components: {
    FlipClock
  }
}
</script>

<style lang="scss">
.clock_container {
  text-align: center;
  .clock_text {
    margin-bottom: 10px;
  }
}
</style>
