Vue.component('search',{
    props: ['holdervisible'],
    template:`
    <form class="search" action="#">
        <div class="inputCover">
        <svg class="searchSvg" aria-hidden="true">
            <use xlink:href="#icon-search"></use>
        </svg>
        <label class="holder" v-show="holdervisible">输入歌曲名搜索歌曲</label>
        <input type="text" @focus="holdervisible = false" @blur="holdervisible = true">
        </div>
    </form>
    `
})