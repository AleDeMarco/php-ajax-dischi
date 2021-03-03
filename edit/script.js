var app = new Vue({
  el: '#app',
  data: {
    cd: []
  },
  mounted(){
    console.log('ciao');
    // axios.get('../server.php').then(result => {
    //   this.cd = result.data;
    //   console.log('test');
    //   console.log(this.result.data);
    // }).catch(error => alert('Errore caricamento database!'));
  }
});
