
function renderData(data) {
    data.forEach(element => {    
         const wrapper = document.createElement('div');
         $(wrapper).addClass(' col-md-3 col-lg-4 item-wrapper');
         $('.row').append($(wrapper))

         const item = document.createElement('div');
         $(item).addClass('item');
         $(wrapper).append($(item))
         
         const h4 = document.createElement('h4');
         $(h4).text(element.title)
         $(item).append($(h4))
         
         const img = document.createElement('img');
         $(img).attr('src',element.url);
         $(item).append($(img))

   })
};

function loadDataAndRenderItem (pageIndex,pageSize) {
   $.get(`https://jsonplaceholder.typicode.com/photos?_page=${pageIndex}&_limit=${pageSize}`,function (data) {
         renderData(data);
   });
};

$(document).ready(function(){
   let indexPage = 1;
   let indexSize= 15;
   loadDataAndRenderItem(indexPage,indexSize);
   // xu ly khi click nut xem
   $("#btn-more").click(function() {
      indexPage++;
      loadDataAndRenderItem(indexPage,indexSize);
   })
}) 