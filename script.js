var app = new Vue({
    el: '#app',
        data: {
        title: "Kelikamera-app",
        nimi: '',
        id: '',
        img: ''
    },

 /*   methods: {
        addToList: function () {
            this.list.push({ name: this.newItem, completed: false})
        },
        getAnswer: function () {
            axios.get('https://tie.digitraffic.fi/api/v1/data/camera-data/').then(function (response) {
                app.dataUpdatedTime = response.data.dataUpdatedTime;
                console.log(dataUpdatedTime);
            })
            .catch(function (error) {
                app.dataUpdatedTime = 'Error! Could not reach the API.' + error
            })
        }
    }

}) */

methods: {
    alavus: function () {
      axios.get('https://tie.digitraffic.fi/api/v1/data/camera-data/C10528')
        .then(function (response) {
        app.nimi = response.data.cameraStations[0].cameraPresets[0].measuredTime;
        app.img = response.data.cameraStations[0].cameraPresets[0].imageUrl;
        })
    },
    seinajoki: function () {
        axios.get('https://tie.digitraffic.fi/api/v1/data/camera-data/C10528')
          .then(function (response) {
          app.nimi = response.data.cameraStations[0].cameraPresets[1].measuredTime;
          app.img = response.data.cameraStations[0].cameraPresets[1].imageUrl;
          })
      },
    kuortane: function () {
        axios.get('https://tie.digitraffic.fi/api/v1/data/camera-data/C10528')
        .then(function (response) {
        app.nimi = response.data.cameraStations[0].cameraPresets[2].measuredTime;
        app.img = response.data.cameraStations[0].cameraPresets[2].imageUrl;
        })
    },
    virrat: function () {
        axios.get('https://tie.digitraffic.fi/api/v1/data/camera-data/C10528')
        .then(function (response) {
        app.nimi = response.data.cameraStations[0].cameraPresets[3].measuredTime;
        app.img = response.data.cameraStations[0].cameraPresets[3].imageUrl;
        })
    },
    tienpinta: function () {
        axios.get('https://tie.digitraffic.fi/api/v1/data/camera-data/C10528')
        .then(function (response) {
        app.nimi = response.data.cameraStations[0].cameraPresets[4].measuredTime;
        app.img = response.data.cameraStations[0].cameraPresets[4].imageUrl;
        })
    }

  }
})