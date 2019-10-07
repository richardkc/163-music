Vue.component('collection',{
    template:`
    <div class="collection">
        <section class="background">
            <span class="part-1">默认收藏</span>
            <span class="part-2">歌曲数目：</span>
        </section>
        <ol>
            <li>
                <song @playvisible="$emit('playvisible')"></song>
                <song @playvisible="$emit('playvisible')"></song>
                <song @playvisible="$emit('playvisible')"></song>
                <song @playvisible="$emit('playvisible')"></song>
                <song @playvisible="$emit('playvisible')"></song>
                <song @playvisible="$emit('playvisible')"></song>
            </li>
        </ol>
    </div>
    `
})