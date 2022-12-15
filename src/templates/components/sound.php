<div id="sound" class="sound">
  <div class="sound-wrapper">
    <span class="sound-button"><img src="<?php echo esc_url(get_template_directory_uri());?>/img/soundbutton_play.svg" alt="音楽を再生する"></span>
  </div>
</div>

<script>
  (function () {
    /**
     * 音楽ファイルの取得
     */
    const music = new Audio('<?php echo esc_url(get_template_directory_uri());?>/assets/morino_soupuya_no_yoru.mp3')
    
    /**
     * ループ再生を行う
     */
    music.addEventListener('ended', function () {
      music.currentTime = 0;
      music.play()
    }, false);
    let musicPlayFlag = false
  
    /**
     * サウンドボタンの挙動
     */
    $('.sound-button').on('click', function (){
      if(musicPlayFlag === false){
        $(this).find('img').attr('src', '<?php echo esc_url(get_template_directory_uri());?>/img/soundbutton_pause.svg')
        music.play()
        musicPlayFlag = true
        
      } else {
        $(this).find('img').attr('src', '<?php echo esc_url(get_template_directory_uri());?>/img/soundbutton_play.svg')
        music.pause()
        musicPlayFlag = false
      }
    })
  }())
</script>