$(".note").on("click",function(){
    $(".close").on("click",function(){
        $(".modal").hide();
    });
    
        var id = $(this).data("id");
        // console.log(id);
        $(".modal").show();
        $("#noteId").text(`Add A Note to: ${id}`)
        $(".submit").on("click", function(){
            console.log(id)
            
            var title = $(".titles").val();
            var note = $(".notes").val();
            console.log("Clicked!");
            console.log(title);
            console.log(note); 
            var newNote ={
                title:title,
                note:note,
                id:id
            } 
           
            // $.ajax({
            //     url:`/scrape`,
            //     method:"PUT",
            //     data:newNote
            // }).then(function(res){
            //     console.log(res)
            //     location.reload();
            // });
        
        });
   
});



$.ajax({
    method: `GET`,
    url: `/articles`
  }).then(function(articles){
    // console.log(articles)
    articles.forEach(oneArticles => {
        // console.log(oneArticles)
        $(".save").on("click",function(){
            console.log("Save Articles")
            $.ajax({
                url:`/scrape`,
                method:"POST",
                data:oneArticles
            }).then(function(res){
              
            });
            
        });
        
    });
  })

