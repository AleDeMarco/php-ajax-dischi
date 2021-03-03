var app = new Vue({
  el: '#app',
  data: {
    cd: [],
    selectedDischi:[],
    generi:['All'],
    selected: 'All'
  },
  created(){
    axios.get('server.php').then(result => {
      this.cd = result.data;
      this.selectedDischi = this.cd;
      this.cd.forEach((element, i) => {
        if (!this.generi.includes(element.genre)) {
          this.generi.push(element.genre);
        }
      });
    }).catch(error => alert('Errore caricamento database!'));
  },
  methods:{
    filter(event){
        this.selected = event.target.value;
        this.selectedDischi = [];
        this.cd.forEach((element, i) => {
          if (this.selected == 'All') {
            this.selectedDischi = this.cd;
          }
          else {
            if (element.genre.includes(this.selected)) {
              this.selectedDischi.push(element);
            }
          }
        });
    }
  }
});
