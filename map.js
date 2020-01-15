var markers = new Array();

//最初から情報ウィンドウを表示させる
function map_canvas() {

  //初期位置に、上記配列の最初の緯度経度を格納
  var latlng = new google.maps.LatLng(data[0].lat, data[0].lng);
  var opts = {
    // center: new google.maps.LatLng(36.5310338, 136.6284361),
    // zoom : 14,
    zoom: 14,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  //地図を表示させるエリアのidを指定
  var map = new google.maps.Map(document.getElementById("map"), opts);

  //マーカーを配置するループ
  for (i = 0; i < data.length; i++) {
    markers[i] = new google.maps.Marker({
      position: new google.maps.LatLng(data[i].lat, data[i].lng),
      map: map
    });
    markerInfo(markers[i], data[i].content);
  }
}

function markerInfo(marker, name) {
  new google.maps.InfoWindow({
    content: name
  }).open(marker.getMap(), marker);
}

