var data = new Array();
var pin = new Array();

function dataPush(){
  if(data != null){
    data=null;
    data = new Array();
  }
  
  for(var j=0;j<pin.length;j++){
    data.push({
      lat: pin[j].lat, //緯度
      lng: pin[j].lon, //経度
      content: pin[j].name //情報ウィンドウの内容
    });
  }
}

$(".chip").click(function(){

//   // レスポンスが返ってきた時の処理
  if(num ==1){
    pin=data1;
    
  }else if(num==2){
    pin=data2;

  }else if(num==3){
    pin=data3;

  }else if(num==4){
    pin=data4;

  }else if(num==5){
    pin=data5;
  
  }else if(num==6){
    pin=data6;
  
  }else if(num==7){
    pin=data7;
  
  }else{
    pin=data8;
  
  }
  dataPush();
  map_canvas();
}
)
