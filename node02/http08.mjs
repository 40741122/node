import http from "http";

const server = http.createServer((request, response)=>{
  response.setHeader('content-type','text/html;charset=utf-8');
  response.end(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      .row{
        display: flex;
        width: 180px;
      }
      .col{
        width: 60px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        user-select: none;
        cursor: pointer;
      }
      .col:not(:first-child){
        border-left: 1px solid #000;
      }
      .row:nth-child(odd){
        background-color: #c7c1c1;
      }
      .row:nth-child(even){
        background-color: #ede9e9;
      }
      .active{
        background-color: #f16e03;
        color: #fff;
      }
      .active:nth-child(even){
        background-color: #f13303;
        color: #fff;
      }
      .row:nth-child(even) .active{
        background-color: #f13303;
        color: #fff;
      }
      .row:nth-child(even) .active:nth-child(even){
        background-color: #f16e03;
        color: #fff;
      }
    </style>
    <title>Document</title>
  </head>
  <body>
    <div class="row">
      <div class="col">1-1</div>
      <div class="col">1-2</div>
      <div class="col">1-3</div>
    </div>
    <div class="row">
      <div class="col">2-1</div>
      <div class="col">2-2</div>
      <div class="col">2-3</div>
    </div>
    <div class="row">
      <div class="col">3-1</div>
      <div class="col">3-2</div>
      <div class="col">3-3</div>
    </div>
    <div class="row">
      <div class="col">4-1</div>
      <div class="col">4-2</div>
      <div class="col">4-3</div>
    </div>
    <script>
      let cols = document.querySelectorAll(".col");
      cols.forEach(function(col){
        col.addEventListener("click", function(){
          this.classList.toggle("active");
        });
      });
    </script>
  </body>
  </html>`)
});

server.listen(9000, ()=>{
    console.log("伺服器已啟動 http://localhost:9000");
})