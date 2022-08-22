<script>
import { Line } from 'vue-chartjs'


export default {
  extends: Line,
  props: ['datacollection'],
  data () {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: false
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  },
  watch: {
    datacollection: function() {
      this._chart.destroy();
      this.renderChart(this.datacollection, this.options);
    }
  }
}
</script>