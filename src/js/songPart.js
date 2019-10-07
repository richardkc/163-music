Vue.component('song',{
    template:`
    <div class="songPart" @click="$emit('playvisible')">
        <span class="songName">刚好</span>
        <span class="singer">于朦胧</span>
        <div class="play"></div>
    </div>
    `
})