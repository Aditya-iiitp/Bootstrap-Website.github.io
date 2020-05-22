$('#mycarousel').carousel({interval: 500});
        $(document).ready(function() {
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
            $("#dismissbutton").click(function() {
                $("#loginModal").modal('hide');
            });

            $("#dismissbutton2").click(function() {
                $("#loginModal").modal('show');
            });

            $("#dismissbutton1").click(function() {
                $("#reservemodal").modal('hide');
            });

            $("#dismissbutton3").click(function() {
                $("#reservemodal").modal('show');
            });

            $('#togglebutton').click(function() {
                if($('#togglebutton').parent('label').hasClass('active')) {
                    $('#togglebutton').parent('label').removeClass('active');
                }
                else if(!$('#togglebutton').parent('label').hasClass('active')) {
                    $('#togglebutton').parent('label').addClass('active');
                }
            })
        });