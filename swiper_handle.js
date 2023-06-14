
var swiper = new Swiper('.swiper-container', {
    slidesPerView: getSlidesPerView(),
    slidesPerGroup: getSlidesPerView(), // Move 2 slides at a time
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$('.swiper-container').on('mousewheel touchmove', function (event) {
    event.preventDefault();
});
let slides = 0

loaduntill()
// loadpage(".page.page_"+index, index)

swiper.on('slideChange', function () {
    loaduntill()
});
function loaduntill() {
    var currentSlide = swiper.realIndex;
    while (slides < currentSlide + 4 && slides < 20)
        addNextSlide(slides++)
}

function addNextSlide(slidenum) {
    let NSI = slidenum + 1
    var slideContent =
        `
            <div class="swiper-slide">
                <div class="page">
                <div class="page_header">
                    <span class="sora">سوره البقرة</span>   
                    <span class="num"> ${NSI} </span>   
                    <span class="goz2"> جزء : 1</span>   
                    </div>
                    <div class="page_${NSI}">
                    
                    </div>
                    <div class="page_footer">
                       
                    </div>
                </div>
            </div>
         `;

    swiper.addSlide(NSI, slideContent);

    loadpage(".page .page_" + NSI, NSI)
    slides = ++slidenum


}

function getSlidesPerView() {
    if (window.innerWidth >= 992) {
        return 2; // Show 2 slides on medium screens
    }
    else {
        return 1; // Show 1 slide on small screens
    }
}
// Update slidesPerView on window resize
window.addEventListener('resize', function () {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.params.slidesPerGroup = getSlidesPerView();
    swiper.update();
});
