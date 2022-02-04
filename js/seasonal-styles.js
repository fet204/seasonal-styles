
            $("document").ready(function(){
                $("li.Default").click(function(e){
                    e.preventDefault();

                    let season = $(this).attr("href");

                    $("#logo").attr("src", "images/four-seasons.gif");
                    $("#wear").attr("src", "images/300x400.png");
                    $("html").css("background-color", "#ccc");
                    $("p#text").text("This is the default page")

                    //alert(season);
                });
            });

            $("document").ready(function(){
                $("li.Spring").click(function(e){
                    e.preventDefault();

                    let season = $(this).attr("href");

                    $("#logo").attr("src", "images/spring.gif");
                    $("#wear").attr("src", "images/spring-wear.jpg");
                    $("html").css("background-color", "#2B7129");
                    $("p#text").text("Get ready for the rain")

                    //alert(season);
                });
            });



            $("document").ready(function(){
                $("li.Summer").click(function(e){
                    e.preventDefault();

                    let season = $(this).attr("href");

                    $("#logo").attr("src", "images/summer.gif");
                    $("#wear").attr("src", "images/summer-wear.jpg");
                    $("html").css("background-color", "#EBA52B");
                    $("p#text").text("Get ready to sweat and heatwaves")

                    //alert(season);
                });
            });



            $("document").ready(function(){
                $("li.Fall").click(function(e){
                    e.preventDefault();

                    let season = $(this).attr("href");

                    $("#logo").attr("src", "images/Fall.gif");
                    $("#wear").attr("src", "images/Fall-wear.jpg");
                    $("html").css("background-color", "#A81124");
                    $("p#text").text("Some really pretty weather! Fall leaves and heavy jacket vibes")

                    //alert(season);
                });
            });


            $("document").ready(function(){
                $("li.Winter").click(function(e){
                    e.preventDefault();

                    let season = $(this).attr("href");

                    $("#logo").attr("src", "images/Winter.gif");
                    $("#wear").attr("src", "images/Winter-wear.jpg");
                    $("html").css("background-color", "#005393");
                    $("p#text").text("Winter is gonna be extra cold! Get ready for warm hat weather!")


                    //alert(season);
                });
            });