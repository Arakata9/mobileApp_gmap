var num=0;

new Vue({
  el: "#reso-list",
  data: {
    lists: 
    [
      {
        title:"あきびん",
        id:1
      },
      {
        title:"あきかん",
        id:2
      },
      { 
        title:"ペットボトル",
        id:3
      },
      {
        title:"段ボール",
        id:4
      },
      {
        title:"古紙",
        id:5
      },
      {
        title:"古着",
        id:6
      },
      {
        title:"食品トレイ",
        id:7
      },
      {
        title:"紙パック",
        id:8
      }
    ],
    hiddenScreen:"s2"
  }, 
  methods: {
    sortWorks(tag) {
      num=tag.id; 
    }
  }
});
