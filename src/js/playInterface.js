Vue.component('play-interface',{
    template:` 
    <div class="playInterface" id="playInterface">
        <audio src="#"></audio>
        <div class="disc-container">
          <img class="pointer" src="//s3.music.126.net/m/s/img/needle-ip6.png?be4ebbeb6befadfcae75ce174e7db862 " alt="">
          <div class="disc">
            <div class="icon-wrapper">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-play"></use>
              </svg>
            </div>
            <img class="ring" src="//s3.music.126.net/m/s/img/disc-ip6.png?69796123ad7cfe95781ea38aac8f2d48" alt="">
            <img class="light" src="//s3.music.126.net/m/s/img/disc_light-ip6.png?996fc8a2bc62e1ab3f51f135fc459577" alt="">
            <img src="//p1.music.126.net/_ZIyHUML8sXBvJXqLdQDOg==/105553116278617.jpg?imageView&thumbnail=360x0&quality=75&tostatic=0" alt="" class="cover">
          </div>
        </div>
        <div class="song-description">
          <h1></h1>
          <div class="lyric">
            <div class="lines">
      
            </div>
          </div>
        </div>
        <div class="links">
          <a href="#">打开</a>
          <a class="main" href="#">下载</a>
        </div>
    </div>
    `
})