var app = new Vue({
  el: '#app',
  data: {
    cd: []
  },
  created(){
    axios.get('server.php').then(result => {
      this.cd = result.data;
    }).catch(error => alert('Errore caricamento database!'));
  }
});
