const scroll_top = {
    methods: {
        scrollToTop(){
            var otop = document.body.scrollTop || document.documentElement.scrollTop
            otop = document.body.scrollTop = document.documentElement.scrollTop -= 150
            if(otop > 0) {
                requestAnimationFrame(this.scrollToTop)
            }
        }
    },
    created() {
        this.scrollToTop()
    },
}

export default scroll_top