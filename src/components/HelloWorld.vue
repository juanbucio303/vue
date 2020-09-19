<template>
  <div class="">
      <div class="container">
        <div class="row">
            <div class="col-6">
              <div class="card">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">

                  <div id="chartdiv" style="width: 100%; height: 400px;"></div>

                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <div class="col-6" style="margin: 0; padding-left:0px;padding-right:5px">
                  <div class="card text-white bg-primary mb-1">
                    <div class="card-header">20</div>
                      <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">content.</p>
                      </div>
                  </div>
                </div>

                <div class="col-6" style="margin: 0; padding-left:0px;padding-right:5px">
                  <div class="card text-white bg-primary mb-1">
                    <div class="card-header">Header</div>
                      <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">content.</p>
                      </div>
                  </div>
                </div>

                <div class="col-6" style="margin: 0; padding-left:0px;padding-right:5px">
                  <div class="card text-white bg-primary mb-1">
                    <div class="card-header">Header</div>
                      <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">content.</p>
                      </div>
                  </div>
                </div>

                <div class="col-6" style="margin: 0; padding-left:0px;padding-right:5px">
                  <div class="card text-white bg-primary mb-1">
                    <div class="card-header">Header</div>
                      <div class="card-body">
                        <h5 class="card-title">title</h5>
                        <p class="card-text">content.</p>
                      </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import AmCharts from 'amcharts3'
//import AmSerial from 'amcharts3/amcharts/serial'
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js + amCharts App'
    }
  },
  created () {
    AmCharts.makeChart("chartdiv",
      {
        "type": "serial",
        "categoryField": "type",
        "chartCursor": {},
        "graphs": [
          {
            "type": "column",
            "title": "Pizza types",
            "valueField": "sold",
            "fillAlphas": 0.8
          }
        ],

        "dataProvider": [
          { "type": "Margherita", "sold": 120 },
          { "type": "Funghi", "sold": 82 },
          { "type": "Capricciosa", "sold": 78 },
          { "type": "Quattro Stagioni", "sold": 71 }
        ]
      }
    );
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
} 
a {
  color: #42b983;
}
</style>
