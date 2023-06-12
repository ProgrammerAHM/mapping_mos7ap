$(document).ready(function () {
    let index_l = 2
    let index_r = 1
    var items = [
        "&#64337;",
        "&#64338;",
        "&#64339;",
        "&#64340;",
        "&#64341;",
        "&#64342;",
        "&#64343;",
        "&#64344;",
        "&#64345;",
        "&#64346;",
        "&#64347;",
        "&#64348;",
        "&#64349;",
        "&#64350;",
        "&#64351;",
        "&#64352;",
        "&#64353;",
        "&#64354;",
        "&#64355;",
        "&#64356;",
        "&#64357;",
        "&#64358;",
        "&#64359;",
        "&#64360;",
        "&#64361;",
        "&#64362;",
        "&#64363;",
        "&#64364;",
        "&#64365;",
        "&#64366;",
        "&#64367;",
        "&#64368;",
        "&#64369;",
        "&#64370;",
        "&#64371;",
        "&#64372;",
        "&#64373;",
        "&#64374;",
        "&#64375;",
        "&#64376;",
        "&#64377;",
        "&#64378;",
        "&#64379;",
        "&#64380;",
        "&#64381;",
        "&#64382;",
        "&#64383;",
        "&#64384;",
        "&#64385;",
        "&#64386;",
        "&#64387;",
        "&#64388;",
        "&#64389;",
        "&#64390;",
        "&#64391;",
        "&#64392;",
        "&#64393;",
        "&#64394;",
        "&#64395;",
        "&#64396;",
        "&#64397;",
        "&#64398;",
        "&#64399;",
        "&#64400;",
        "&#64401;",
        "&#64402;",
        "&#64403;",
        "&#64404;",
        "&#64405;",
        "&#64406;",
        "&#64407;",
        "&#64408;",
        "&#64409;",
        "&#64410;",
        "&#64411;",
        "&#64412;",
        "&#64413;",
        "&#64414;",
        "&#64415;",
        "&#64416;",
        "&#64417;",
        "&#64418;",
        "&#64419;",
        "&#64420;",
        "&#64421;",
        "&#64422;",
        "&#64423;",
        "&#64424;",
        "&#64425;",
        "&#64426;",
        "&#64427;",
        "&#64428;",
        "&#64429;",
        "&#64430;",
        "&#64431;",
        "&#64432;",
        "&#64433;",
        "&#64467;",
        "&#64468;",
        "&#64469;",
        "&#64470;",
        "&#64471;",
        "&#64472;",
        "&#64473;",
        "&#64474;",
        "&#64475;",
        "&#64476;",
        "&#64477;",
        "&#64478;",
        "&#64479;",
        "&#64480;",
        "&#64481;",
        "&#64482;",
        "&#64483;",
        "&#64484;",
        "&#64485;",
        "&#64486;",
        "&#64487;",
        "&#64488;",
        "&#64489;",
        "&#64490;",
        "&#64491;",
        "&#64492;",
        "&#64493;",
        "&#64494;",
        "&#64495;",
        "&#64496;",
        "&#64497;",
        "&#64498;",
        "&#64499;",
        "&#64500;",
        "&#64501;",
        "&#64502;",
        "&#64503;",
        "&#64504;",
        "&#64505;",
        "&#64506;",
        "&#64507;",
        "&#64508;",
        "&#64509;",
        "&#64510;",
        "&#64511;",
        "&#64512;",
        "&#64513;",
        "&#64514;",
        "&#64515;",
        "&#64516;",
        "&#64517;",
        "&#64507;",

        "&#64518;",
        "&#64519;",
        "&#64520;",
        "&#64521;",
        "&#64522;",
        "&#64523;",
        "&#64524;",
        "&#64525;",
        "&#64526;",
        "&#64527;",
    ]
    let breaks = [
        "",
        "&#64372;",
        "&#64380;",
        "&#64511;",
        "&#64517;",
        "&#64511;",
        "&#64522;",
        "&#64515;",
        "&#64502;",
        "&#64508;",
        "&#64517;",
    ]
    let spec = [
        {},
        {
            'remove': [],
            'add':
            {
                "&#64341;": "<br>",
                "&#64346;": "<br>",
                "&#64353;": "<br>",
                "&#64359;": "<br>",
                "&#64365;": "<br>",
                "&#64369;": "<br>",
            }

        },
        {
            'remove': [],
            'add':
            {
                "&#64346;": "<br>",
                "&#64353;": "<br>",
                "&#64361;": "<br>",
                "&#64370;": "<br>",
                "&#64377;": "<br>",

            }

        },
        {},
        {},
        {},
        {
            'remove': [
                "&#64507;",
            ],
            'add': [],
        },
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    let select =
        [
            {},
            {},
            {},
            {
                "&#64385;": "1",
                "&#64419;": "1",

                "&#64360;": "2",
                "&#64361;": "2",
                "&#64394;": "2",
                "&#64395;": "2",
            },
            {},
            {},
        ]


    function loadpage(page, index) {
        $("." + page + " .page_number > span").html(index)
        for (let i = 0; i < items.length; i++) {
            let e = items[i];

            // set styles of select
            let clas = "";
            try {
                if (select[index][e]) clas = `class = "select_${select[index][e]}"`
            }
            catch (ex) {

            }

            let listItem = `<span ${clas}>${e}</span>`;
            try {
                if (spec[index]['add'][e]) {
                    listItem += `<span ${clas}>${spec[index]['add'][e]}</span>`;

                }
            }
            catch (error) { }
            try {
                if (!spec[index]['remove']?.includes(e))
                    $("." + page + ' .page_' + index).append(listItem);

            }
            catch (error) {
                $("." + page + ' .page_' + index).append(listItem);

            }

            if (breaks[index] === e) break;
        }
    }
    loadpage("left_P", index_l)
    loadpage("right_P", index_r)
    loadpage()
    $("#nextButton").on("click", function () {
       if ($('.page.left_P').css('display') === 'none') {
           move("right", 1)
        }
        else move("right", 2)
    });
    $("#previousButton").on("click", function () {
        if ($('.page.left_P').css('display') === 'none') {
            move("left", 1)
         }
         else move("left", 2)
    });
    // $('#myElement').is(':hidden')
    function move(direction, steps) {

        for (let i = 0; i < steps; i++) {
            if (index_r > 1 && direction == "left") {
                $('.right_P .page_' + index_r).html("")
                $(".right_P .page_" + index_r).removeClass("page_" + index_r).addClass("page_" + --index_r);
                $(".right_P .page_number > span").html(index_r)
                loadpage("right_P", index_r)

                $('.left_P .page_' + index_l).html("")
                $(".left_P .page_" + index_l).removeClass("page_" + index_l).addClass("page_" + --index_l);
                $(".left_P .page_number > span").html(index_l)
                loadpage("left_P", index_l)

            }
            else if (index_l < 10 && direction == "right") {
                $('.right_P .page_' + index_r).html("")
                $(".right_P .page_" + index_r).removeClass("page_" + index_r).addClass("page_" + ++index_r);
                $(".right_P .page_number > span").html(index_r)
                loadpage("right_P", index_r)

                $('.left_P .page_' + index_l).html("")
                $(".left_P .page_" + index_l).removeClass("page_" + index_l).addClass("page_" + ++index_l);
                $(".left_P .page_number > span").html(index_l)
                loadpage("left_P", index_l)

            }
        }
    }
});