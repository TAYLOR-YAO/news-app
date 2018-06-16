$(".note").on("click",function(){
   
        var id = $(this).data("id");
        console.log(id);
        $(".modal").show();
        $(".submit").on("click", function(){
            var title = $("input").val();
            var note = $("textarea").val();
            console.log("Clicked!");
            console.log(title);
            console.log(note);    
        
        });
   
});



// $.ajax({
//     method: `GET`,
//     url: `/api/articles`
//   }).then(function(articles){
//     console.log(articles)
//   })