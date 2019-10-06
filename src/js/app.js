let app = new Vue({
    el: '#app',
    data: {
        loading: 0,
        transferProgress: false,
        songs: [],
        songData: {
            name: '',
            singer: '',
            link: '',
            size: '',
            format:''
        }
    },
    watch:{
        'loading': function(newValue,oldValue){
            this.loading = newValue
            $('.twig').css("width",`${this.loading}px`)
        },
        'songData.link': function(newValue,oldValue){
            if(app.songData.link){
                this.saveToLeancloud()                
            }
        }
    },
    methods: {
        inputAudioClick() {
            document.querySelector('.uploadArea .inputAudio').click()
        },
        changeImg() {
            let filedom = document.querySelector('.page .inputAudio')
            app.songData.name = filedom.files[0].name
            app.songData.size = (filedom.files[0].size/(1024*1000)).toFixed(2)+'M'
            app.songData.format = filedom.files[0].type.replace(/.+(?<=\/)/,"")
        },
        saveData(){
            let filedom = document.querySelector('.page .inputAudio')
            $.ajax({
                type: 'get',
                url: "http://127.0.0.1:8888/uptoken",
                dataType: "json",
                success: function(response) {
                    var observer = {
                        next(res) {
                            app.transferProgress = true
                            app.loading = 2*res.total.percent
                        },
                        error(err) {
                        },
                        complete(res) {
                            console.log(10)
                            app.songData.link = 'http://pyopsk4qc.bkt.clouddn.com/' + encodeURIComponent(res.key)
                            app.transferProgress = false
                            app.songs.push({ name: app.songData.name, singer: app.songData.singer, link: app.songData.link, size: app.songData.size, format: app.songData.format })
                        }
                    }
                    var observable = qiniu.upload(filedom.files[0], app.songData.name, response.uptoken)
                    var subscription = observable.subscribe(observer) // 上传开始
                }
            })
        },
        saveToLeancloud(){
            console.log(8)
            var Song = AV.Object.extend('Song');
            var song = new Song();
            song.set('songs', app.songs);
            song.save().then(function (song) {
                alert('保存成功');
            }, function (error) {
            });
        }
    }
})