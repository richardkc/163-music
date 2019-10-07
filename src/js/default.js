let vm = new Vue({
    el: '#default',
    data(){
        return {
            active: false,
            playVisible: false,
            holderVisible: true,
            collectionVisible: true,
            commendVisible: false,
            searchVisible: false,
            collections: [
                {introdution:'两行文字两行文字两行文字两行文字'},
                {introdution:'两行文字两行文字两行文字两行文字'},
                {introdution:'两行文字两行文字两行文字两行文字'},
                {introdution:'两行文字两行文字两行文字两行文字'},
                {introdution:'两行文字两行文字两行文字两行文字'},
                {introdution:'两行文字两行文字两行文字两行文字'}
            ],
        }
    },
})