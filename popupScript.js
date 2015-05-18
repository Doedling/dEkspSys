$(document).ready(function () {
        var imageIndex = 0;
        var images = [
            "bookView/pippiBook1.png",
            "bookView/pippiBook2.png",
            "bookView/pippiBook3.png",
            "bookView/pippiBook4.png"
        ];  

        $("#openVoice").click(function () {
            $(".cover").fadeTo(500, 0.8).css('display', 'block');
            $(".close").fadeIn(500);
            $("#popupVoice").fadeIn(500);
            $("#popupVoiceBubble").fadeIn(500);
            var audio = document.getElementById("audio");
            audio.play();
        });

        $("#openBook").click(function () {
            $(".cover").fadeTo(500, 0.6).css('display', 'block');
            $(".close").fadeIn(500);
            $(".popupBook").fadeIn(500);
        	imageIndex = 0;
        	$("#openedBook").attr('src', images[imageIndex]);
        	$("#previous").hide();
            $("#next").show();
        });        

        $("#previous").on("click", function(){
        	if(imageIndex == 1) {
        		$(this).hide();
        	}
            imageIndex = (imageIndex + images.length -1) % (images.length);    
            $("#openedBook").attr('src', images[imageIndex]);
            if(imageIndex != 3) {
            	$("#next").show();
            }
        });

        $("#next").on("click", function(){
        	if(imageIndex == 2) {
        		$(this).hide();
        	}
            imageIndex = (imageIndex+1) % (images.length);    
            $("#openedBook").attr('src', images[imageIndex]);
            if(imageIndex != 0) {
            	$("#previous").show();
            }
        });

        $(".close").click(function () {
            $("#popupVoice").fadeOut(500);
            $("#popupVoiceBubble").fadeOut(500);
            $(".popupBook").fadeOut(500);
            $(".cover").fadeOut(500);
            $(".close").fadeOut(500);
            if(audio != "") {
                audio.pause();
                audio.currentTime = 0;
            }
        });
    });