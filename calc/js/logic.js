var app = new Vue({
    el: '#vue-app',
    data: {
      area: 50,
      WindowCleaning: false,
      RefrigeratorWashing: false,
      SinkKitchenAppliances: false,
      WashingDishes: false,
      SinkBathroom: false,
      CarpetCleaning: false,
      WashingAndIroningThings: false,
      HangCurtains: false,
      Pets: false,
      Ironing: false,
      Detergents: 0,
    },
    computed:{
        total_price: function(){
            var price = 0;
            if (this.WindowCleaning) price += 150;
            if (this.RefrigeratorWashing) price += 100;
            if (this.SinkKitchenAppliances) price += 50;
            if (this.WashingDishes) price += 50;
            if (this.SinkBathroom) price += 100;
            if (this.CarpetCleaning) price += 150;
            if (this.WashingAndIroningThings) price += 150;
            if (this.HangCurtains) price += 100;
            if (this.Pets) price += 100;
            if (this.Ironing) price += 100;
            if (this.Detergents == 1) price += 100;
            if (this.area > 0) price += this.area *10;

            return price
        }
    },
    watch:{
        area: function(val){
            if (~val.toString().indexOf("-") || val.toString().indexOf("0") == 0) this.area = "";
        }
    }
  });