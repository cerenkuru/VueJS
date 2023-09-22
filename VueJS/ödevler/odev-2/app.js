new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods : {
            showAlert : function (){
                alert();
            },
            showAlert2: function(event){
                this.value = event.target.value;
                alert(event.target.value);
            }
        }
    });