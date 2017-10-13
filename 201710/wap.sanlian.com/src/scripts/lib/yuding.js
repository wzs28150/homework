define(['domReady'], function (domReady) {
    var initModule, headerh = $('header').height(), stepchange, step1, step2, step3, step4, step5;
    stepchange = function(i){
        $('.step span').removeClass('on');
        $('.step span').eq(i).addClass('on');
    }
    step1 = function(){
        stepchange (0);
        $('.step1 a').click(function (e) { 
            e.preventDefault();
            //此处写ajax
            var arrData = {
                //参数
            }, url=$(this).attr('href');
            $.post(url, arrData,
                function (data) {
                    if ('118' == data.err_code) {
                        alertinfo(data.err_info);
                    } else {
                        alertinfo(data.err_info);
                    }
                }, "json"
            );
        });
    }
    step2 = function () {
        stepchange(1);
        $('.step2 .step2-inner .list .item').click(function (e) { 
            e.preventDefault();
            $('.step2 .step2-inner .list .item').removeClass('on');
            $(this).addClass('on');
        });
        $('.step2 .step2-inner .list .item table a').click(function (e) { 
            e.preventDefault();
            //此处写ajax
            var arrData = {
                //参数
            }, url = $(this).attr('href');
            $.post(url, arrData,
                function (data) {
                    if ('118' == data.err_code) {
                        alertinfo(data.err_info);
                    } else {
                        alertinfo(data.err_info);
                    }
                }, "json"
            );
        });
    }
    step3 = function () {
        stepchange(2);
        $('.step3-inner a').click(function (e) {
            e.preventDefault();
            //此处写ajax
            var arrData = {
                //参数
            }, url = $(this).attr('href');
            $.post(url, arrData,
                function (data) {
                    if ('118' == data.err_code) {
                        alertinfo(data.err_info);
                    } else {
                        alertinfo(data.err_info);
                    }
                }, "json"
            );
        });
    }
    step4 = function () {
        stepchange(3);
        $('.step4 .step4-inner > .container_1200 > a').click(function (e) { 
            e.preventDefault();
            var arrData = {
                //参数
            }, url = $(this).attr('href');
            $.post(url, arrData,
                function (data) {
                    if ('118' == data.err_code) {
                        alertinfo(data.err_info);
                    } else {
                        alertinfo(data.err_info);
                    }
                }, "json"
            );
        });
    }
    step5 = function () {
        stepchange(4);
    }
    initModule = function (callbak) {
        domReady(function () {
            callbak(1);

            require(["laydate"], function (laydate) {
                laydate.path = './src/scripts/package/laydate/';
                laydate.render({
                    elem: '#starttime',
                    format: 'yyyy/MM/dd'
                });
                laydate.render({
                    elem: '#endtime',
                    format: 'yyyy/MM/dd'
                });
            });
        });
    };
    return {
        initModule: initModule,
        step1: step1,
        step2: step2,
        step3: step3,
        step4: step4,
        step5: step5
    };
})
