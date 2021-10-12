var audio = document.getElementById('audio');
        var playpause = document.getElementById("img_1");

        function togglePlayPause() {
            if(audio.paused || audio.ended) {
                playpause.title = "Pause";
                audio.play();
            } else {
                playpause.title = "Play";
                audio.pause();
            };
            
        };
        
        