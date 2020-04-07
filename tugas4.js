function tinggiBadan(){
  var andi = 180;
  var budi = 170;
  var dimas = 185;

  if(andi > budi){
     if(andi > dimas){
       console.log('Andi adalah yang tertinggi');
       console.log('Andi = ', andi ," cm");
       console.log('Budi = ', budi ," cm");
       console.log('Dimas = ', dimas ," cm");
     }else{
       console.log('Dimas adalah yang tertinggi');
       console.log('Dimas = ', dimas ," cm");
       console.log('Budi = ', budi ," cm");
       console.log('Andi = ', andi ," cm");
     }
  }else if(andi < budi){
     if(budi > dimas){
       console.log('Budi adalah yang tertinggi');
       console.log('Budi = ', budi ," cm");
       console.log('Dimas = ', dimas ," cm");
       console.log('Andi = ', andi ," cm");
     }else{
       console.log('Dimas adalah yang tertinggi');
       console.log('Dimas = ', dimas ," cm");
       console.log('Budi = ', budi ," cm");
       console.log('Andi = ', andi ," cm");
     }
  }else{
    console.log("tinggi mereka semua adalah sama");
  }

}

tinggiBadan();
