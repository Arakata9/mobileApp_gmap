var data1,data2,data3,data4,data5,data6,data7,data8;

var request1 = new XMLHttpRequest();
var request2 = new XMLHttpRequest();
var request3 = new XMLHttpRequest();
var request4 = new XMLHttpRequest();
var request5 = new XMLHttpRequest();
var request6 = new XMLHttpRequest();
var request7 = new XMLHttpRequest();
var request8 = new XMLHttpRequest();


request1.open('GET', "https://www.risachankawaii.xyz/api/risachan/1", true);
request1.responseType = 'json';
request1.onload = function () {
  data1 = this.response;
};

request2.open('GET', "https://www.risachankawaii.xyz/api/risachan/2", true);
request2.responseType = 'json';
request2.onload = function () {
  data2 = this.response;
};

request3.open('GET', "https://www.risachankawaii.xyz/api/risachan/3", true);
request3.responseType = 'json';
request3.onload = function () {
  data3 = this.response;
};

request4.open('GET', "https://www.risachankawaii.xyz/api/risachan/4", true);
request4.responseType = 'json';
request4.onload = function () {
  data4 = this.response;
};

request5.open('GET', "https://www.risachankawaii.xyz/api/risachan/5", true);
request5.responseType = 'json';
request5.onload = function () {
  data5 = this.response;
};

request6.open('GET', "https://www.risachankawaii.xyz/api/risachan/6", true);
request6.responseType = 'json';
request6.onload = function () {
  data6 = this.response;
};

request7.open('GET', "https://www.risachankawaii.xyz/api/risachan/7", true);
request7.responseType = 'json';
request7.onload = function () {
  data7 = this.response;
};

request8.open('GET', "https://www.risachankawaii.xyz/api/risachan/8", true);
request8.responseType = 'json';
request8.onload = function () {
  data8 = this.response;
};


request1.send();
request2.send();
request3.send();
request4.send();
request5.send();
request6.send();
request7.send();
request8.send();