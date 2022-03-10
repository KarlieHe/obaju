
/*
 *  fliter each category product
 *  commented by Ziling He 11/08/2017
 * */



function loading(e){

    document.getElementById('gend').innerHTML="";
    document.getElementById('gender').innerHTML="";
    document.getElementById('gender-content').innerHTML="";
    $("#gend").append("Men ");
    $("#gender").append("Men");
    $("#gender-content").append("In our men department we offer wide selection of the best products we have found and carefully selected worldwide.");

    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "men.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            document.getElementById('list').innerHTML=" ";
            var cate="MEN";

            switch (e){
                case 1:
                    cate="MEN";
                    break;
                case 2:
                    cate="TSHIRTS";
                    break;
                case 3:
                    cate="SHIRTS";
                    break;
                case 4:
                    cate="PANTS";
                    break;
                case 5:
                    cate="ACCESSORIES";
                    break;
                case 6:
                    cate="BAG";
                    break;
                case 7:
                    cate="BELT";
                    break;
                default:

            }
            /*
             * get value of different tags
             * commented by Ziling He 11/08/2017
             * */
            $(ResponseText).find(cate).each(function () {
                var name = $(this).find('NAME').text();
                var price = $(this).find('PRICE').text();
                var photo1= $(this).find('PHOTO1').text();
                var photo2= $(this).find('PHOTO2').text();
                var brandId=$(this).find('BRAND').text();



                product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='male' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"

            })


            $("#list").append(product);
        }
    });
}

/*
 * select products in terms of catalog and brand
 * commented by Ziling He 11/08/2017
 * */

function brandFilter(cate,nBrand){


    document.getElementById('gend').innerHTML="";
    document.getElementById('gender').innerHTML="";
    document.getElementById('gender-content').innerHTML="";
    $("#gend").append("Men ");
    $("#gender").append("Men");
    $("#gender-content").append("In our men department we offer wide selection of the best products we have found and carefully selected worldwide.");

    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "men.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";

            $(ResponseText).find(cate).each(function () {
                var brandId=$(this).find('BRAND').text();

                if(brandId==nBrand) {

                    var name = $(this).find('NAME').text();
                    var price = $(this).find('PRICE').text();
                    var photo1 = $(this).find('PHOTO1').text();
                    var photo2 = $(this).find('PHOTO2').text();


                    product += "<div id='"+cate+"' class='col-md-4 col-sm-6 items'> <div id='male' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"
                }



            })
            document.getElementById('list').innerHTML+=product;

        }
    });
}


/*
 * select products
 * commented by Ziling He 11/08/2017
 * */

function js_method_men(e){
    $(document).ready(function () {
        loading(e);
    });
    $('#mLi').addClass('active');
    $('#fLi').removeClass('active');

}

/*
 * select by brands
 * commented by Ziling He 11/08/2017
 * */

function get_brand() {
    var brand = document.getElementsByName("brand");
    var newBrand=new Array();

    var cBrand=new Array();
    for (var i = 0; i < brand.length; i++) {
        if (brand[i].checked) {
            cBrand.push(brand[i].value);


        }

    }

    for (var j=0;j<cBrand.length;j++){

    }

    var ID=document.getElementsByClassName("col-md-4 col-sm-6")[0].id;
    console.log($('.items').length);
    if ($('.items').length > 0) {
        // exists.
        console.log("exist");
    }


    for (var j = 0; j < cBrand.length; j++) {

        var bra=cBrand[j];

        if (bra == "Armani") {
            brandFilter(ID,bra);
        }
        else if (bra == "Versace") {
            brandFilter(ID,bra);
        }
        else if (bra == "Carlo Bruni") {
            brandFilter(ID,bra);
        }
        else if (bra == "Jack Honey") {
            brandFilter(ID,bra);
        }

    }
}

/*
 * reset checkbox
 * commented by Ziling He 11/08/2017
 * */

function reset_check() {

    $('input:checkbox').attr('checked', false);
    $(document).ready(function () {

        var ID=document.getElementsByClassName("col-md-4 col-sm-6")[0].id;

        if(ID=="MEN"){
            loading(1);
        }
        else if(ID=="TSHIRTS"){
            loading(2);
        }
        else if(ID=="SHIRTS"){
            loading(3);
        }
        else if(ID=="PANTS"){
            loading(4);
        }
        else if(ID=="ACCESSORIES"){
            loading(5);
        }
        else if(ID=="BAG"){
            loading(6);
        }
        else if(ID=="BELT"){
            loading(7);
        }
    });
}

/*
 * click the sort-by
 * commented by Ziling He 12/08/2017
 * */

function priceSort(){

    document.getElementById('gend').innerHTML="";
    document.getElementById('gender').innerHTML="";
    document.getElementById('gender-content').innerHTML="";
    $("#gend").append("Men ");
    $("#gender").append("Men");
    $("#gender-content").append("In our men department we offer wide selection of the best products we have found and carefully selected worldwide.");

    var brand = document.getElementsByName("brand");

    var cBrand=new Array();
    for (var i = 0; i < brand.length; i++) {
        if (brand[i].checked) {
            cBrand.push(brand[i].value);
            alert(1);
        }

    }

    var ID=document.getElementsByClassName("col-md-4 col-sm-6")[0].id;
    var priceSelect=$("#priceSelect option:selected").val();

    if(priceSelect==1) {
        if(cBrand.length!==0){
            AscSorting(ID,cBrand);
        }
        else {
            $(document).ready(function () {
                AscLoading(ID);
            });
        }
    }



    else if(priceSelect==2){
        if(cBrand.length!==0){
            DescSorting(ID,cBrand);
            /*for (var j = 0; j < cBrand.length; j++) {

             var bra = cBrand[j];

             if (bra == "Armani") {
             DescSorting(ID, bra);
             }
             else if (bra == "Versace") {
             DescSorting(ID, bra);
             }
             else if (bra == "Carlo Bruni") {
             DescSorting(ID, bra);
             }
             else if (bra == "Jack Honey") {
             DescSorting(ID, bra);
             }


             }*/
        }
        else {
            $(document).ready(function () {
                DescLoading(ID);
            });
        }

    }

}

/*
 * when select both category and brands, taking ascending sort
 * commented by Ziling He 12/08/2017
 * */

function AscSorting(cate,nBrand){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "men.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            var newArr=new Array();
            newArr=nBrand;

            for(var i=0;i<newArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();

                    if (brandId == newArr[i]) {

                        var price = $(this).find('PRICE').text();

                        priceArr.push(price);

                    }


                })
            }
            priceArr.sort(NumAscSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {
                        if (brandId == nBrand) {

                            var name = $(this).find('NAME').text();
                            var price = $(this).find('PRICE').text();
                            var photo1 = $(this).find('PHOTO1').text();
                            var photo2 = $(this).find('PHOTO2').text();

                            product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='male' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                        }
                    }


                })
            }



            document.getElementById('list').innerHTML+=product;


        }
    });
}

/*
 * when select both category and brands, taking descending sort
 * commented by Ziling He 12/08/2017
 * */

function DescSorting(cate,nBrand){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "men.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            var newArr=new Array();
            newArr=nBrand;
            for(var i=0;i<newArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();

                    if (brandId == newArr[i]) {

                        var price = $(this).find('PRICE').text();

                        priceArr.push(price);

                    }


                })
            }
            priceArr.sort(NumDescSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {
                        if (brandId == nBrand) {

                            var name = $(this).find('NAME').text();
                            var price = $(this).find('PRICE').text();
                            var photo1 = $(this).find('PHOTO1').text();
                            var photo2 = $(this).find('PHOTO2').text();

                            product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='male' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                        }
                    }


                })
            }



            document.getElementById('list').innerHTML+=product;


        }
    });
}

/*
 * only choose category, taking ascending sort
 * commented by Ziling He 12/08/2017
 * */

function AscLoading(cate){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "men.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            document.getElementById('list').innerHTML=" ";

            /*
             * get value of different tags
             * commented by Ziling He 11/08/2017
             * */
            $(ResponseText).find(cate).each(function () {

                var price = $(this).find('PRICE').text();
                priceArr.push(price);

            })
            priceArr.sort(NumAscSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {

                        var name = $(this).find('NAME').text();
                        var price = $(this).find('PRICE').text();
                        var photo1 = $(this).find('PHOTO1').text();
                        var photo2 = $(this).find('PHOTO2').text();

                        product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='male' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                    }

                })
            }


            $("#list").append(product);
        }
    });
}

/*
 * only choose category, taking descending sort
 * commented by Ziling He 12/08/2017
 * */

function DescLoading(cate){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "men.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            document.getElementById('list').innerHTML=" ";

            /*
             * get value of different tags
             * commented by Ziling He 11/08/2017
             * */
            $(ResponseText).find(cate).each(function () {

                var price = $(this).find('PRICE').text();
                priceArr.push(price);

            })
            priceArr.sort(NumDescSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {

                        var name = $(this).find('NAME').text();
                        var price = $(this).find('PRICE').text();
                        var photo1 = $(this).find('PHOTO1').text();
                        var photo2 = $(this).find('PHOTO2').text();

                        product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='male' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                    }

                })
            }


            $("#list").append(product);
        }
    });
}

function NumAscSort(a,b){
    return a-b;
}

function NumDescSort(a,b){
    return b-a;
}










/*
 *  fliter each category product
 *  commented by Ziling He 11/08/2017
 * */

function loadingL(e){


    document.getElementById('gend').innerHTML="";
    document.getElementById('gender').innerHTML="";
    document.getElementById('gender-content').innerHTML="";
    $("#gend").append("Ladies ");
    $("#gender").append("Ladies");
    $("#gender-content").append("In our ladies department we offer wide selection of the best products we have found and carefully selected worldwide.");

    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "ladies.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            document.getElementById('list').innerHTML=" ";
            var cate="LADIES";

            switch (e){
                case 1:
                    cate="LADIES";
                    break;
                case 2:
                    cate="TSHIRTS";
                    break;
                case 3:
                    cate="SHIRTS";
                    break;
                case 4:
                    cate="PANTS";
                    break;
                case 5:
                    cate="ACCESSORIES";
                    break;
                case 6:
                    cate="BAG";
                    break;
                case 7:
                    cate="BELT";
                    break;
                default:

            }
            /*
             * get value of different tags
             * commented by Ziling He 11/08/2017
             * */
            $(ResponseText).find(cate).each(function () {
                var name = $(this).find('NAME').text();
                var price = $(this).find('PRICE').text();
                var photo1= $(this).find('PHOTO1').text();
                var photo2= $(this).find('PHOTO2').text();
                var brandId=$(this).find('BRAND').text();



                product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='female' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"

            })


            $("#list").append(product);
        }
    });
}

/*
 * select products in terms of catalog and brand
 * commented by Ziling He 11/08/2017
 * */

function brandFilterL(cate,nBrand){

    document.getElementById('gend').innerHTML="";
    document.getElementById('gender').innerHTML="";
    document.getElementById('gender-content').innerHTML="";
    $("#gend").append("Ladies ");
    $("#gender").append("Ladies");
    $("#gender-content").append("In our ladies department we offer wide selection of the best products we have found and carefully selected worldwide.");

    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "ladies.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";

            $(ResponseText).find(cate).each(function () {
                var brandId=$(this).find('BRAND').text();

                if(brandId==nBrand) {

                    var name = $(this).find('NAME').text();
                    var price = $(this).find('PRICE').text();
                    var photo1 = $(this).find('PHOTO1').text();
                    var photo2 = $(this).find('PHOTO2').text();


                    product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='female' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"

                }



            })
            document.getElementById('list').innerHTML+=product;

        }
    });
}


/*
 * select products
 * commented by Ziling He 11/08/2017
 * */

function js_method_lady(e){
    $(document).ready(function () {
        loadingL(e);
    });
    $('#fLi').addClass('active');
    $('#mLi').removeClass('active');
}

/*
 * select by brands
 * commented by Ziling He 11/08/2017
 * */

function get_brandL() {
    var brand = document.getElementsByName("brand");

    var cBrand=new Array();
    for (var i = 0; i < brand.length; i++) {
        if (brand[i].checked) {
            cBrand.push(brand[i].value);

        }

    }
    var ID=document.getElementsByClassName("col-md-4 col-sm-6")[0].id;

    for (var j = 0; j < cBrand.length; j++) {

        var bra=cBrand[j];

        if (bra == "Armani") {
            brandFilterL(ID,bra);
        }
        else if (bra == "Versace") {
            brandFilterL(ID,bra);
        }
        else if (bra == "Carlo Bruni") {
            brandFilterL(ID,bra);
        }
        else if (bra == "Jack Honey") {
            brandFilterL(ID,bra);
        }

    }
}

/*
 * reset checkbox
 * commented by Ziling He 11/08/2017
 * */

function reset_checkL() {


    $('input:checkbox').attr('checked', false);
    $(document).ready(function () {
        var ID=document.getElementsByClassName("col-md-4 col-sm-6")[0].id;

        if(ID=="LADIES"){
            loadingL(1);
        }
        else if(ID=="TSHIRTS"){
            loadingL(2);
        }
        else if(ID=="SHIRTS"){
            loadingL(3);
        }
        else if(ID=="PANTS"){
            loadingL(4);
        }
        else if(ID=="ACCESSORIES"){
            loadingL(5);
        }
        else if(ID=="BAG"){
            loadingL(6);
        }
        else if(ID=="BELT"){
            loadingL(7);
        }
    });
}

/*
 * click the sort-by
 * commented by Ziling He 12/08/2017
 * */

function priceSortL(){

    document.getElementById('gend').innerHTML="";
    document.getElementById('gender').innerHTML="";
    document.getElementById('gender-content').innerHTML="";
    $("#gend").append("Ladies ");
    $("#gender").append("Ladies");
    $("#gender-content").append("In our ladies department we offer wide selection of the best products we have found and carefully selected worldwide.");

    var brand = document.getElementsByName("brand");
    console.log(brand);
    console.log("!!!!!!!!!!!!!!!!");

    var cBrand=new Array();
    for (var i = 0; i < brand.length; i++) {
        if (brand[i].checked) {
            cBrand.push(brand[i].value);

        }

    }
    var ID=document.getElementsByClassName("col-md-4 col-sm-6")[0].id;
    var priceSelect=$("#priceSelect option:selected").val();

    if(priceSelect==1) {
        if(cBrand.length!==0){
            AscSortingL(ID,cBrand);
        }
        else {
            $(document).ready(function () {
                AscLoadingL(ID);
            });
        }
    }



    else if(priceSelect==2){
        if(cBrand.length!==0){
            DescSortingL(ID,cBrand);
        }
        else {
            $(document).ready(function () {
                DescLoadingL(ID);
            });
        }

    }

}

/*
 * when select both category and brands, taking ascending sort
 * commented by Ziling He 12/08/2017
 * */

function AscSortingL(cate,nBrand){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "ladies.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            var newArr=new Array();
            newArr=nBrand;

            for(var i=0;i<newArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();

                    if (brandId == newArr[i]) {

                        var price = $(this).find('PRICE').text();

                        priceArr.push(price);

                    }


                })
            }
            priceArr.sort(NumAscSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {
                        if (brandId == nBrand) {

                            var name = $(this).find('NAME').text();
                            var price = $(this).find('PRICE').text();
                            var photo1 = $(this).find('PHOTO1').text();
                            var photo2 = $(this).find('PHOTO2').text();

                            product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='female' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                        }
                    }


                })
            }



            document.getElementById('list').innerHTML+=product;


        }
    });
}

/*
 * when select both category and brands, taking descending sort
 * commented by Ziling He 12/08/2017
 * */

function DescSortingL(cate,nBrand){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "ladies.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            var newArr=new Array();
            newArr=nBrand;
            for(var i=0;i<newArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();

                    if (brandId == newArr[i]) {

                        var price = $(this).find('PRICE').text();

                        priceArr.push(price);

                    }


                })
            }
            priceArr.sort(NumDescSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var brandId = $(this).find('BRAND').text();
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {
                        if (brandId == nBrand) {

                            var name = $(this).find('NAME').text();
                            var price = $(this).find('PRICE').text();
                            var photo1 = $(this).find('PHOTO1').text();
                            var photo2 = $(this).find('PHOTO2').text();

                            product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='female' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                        }
                    }


                })
            }



            document.getElementById('list').innerHTML+=product;


        }
    });
}

/*
 * only choose category, taking ascending sort
 * commented by Ziling He 12/08/2017
 * */

function AscLoadingL(cate){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "ladies.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            document.getElementById('list').innerHTML=" ";

            /*
             * get value of different tags
             * commented by Ziling He 11/08/2017
             * */
            $(ResponseText).find(cate).each(function () {

                var price = $(this).find('PRICE').text();
                priceArr.push(price);

            })
            priceArr.sort(NumAscSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {

                        var name = $(this).find('NAME').text();
                        var price = $(this).find('PRICE').text();
                        var photo1 = $(this).find('PHOTO1').text();
                        var photo2 = $(this).find('PHOTO2').text();

                        product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='female' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                    }

                })
            }


            $("#list").append(product);
        }
    });
}

/*
 * only choose category, taking descending sort
 * commented by Ziling He 12/08/2017
 * */

function DescLoadingL(cate){
    $("#list").html('');
    $.ajax({
        type: "GET",
        url: "ladies.xml",
        dataType: "xml",
        success: function (ResponseText) {
            var product = "";
            var priceArr=new Array();
            document.getElementById('list').innerHTML=" ";

            /*
             * get value of different tags
             * commented by Ziling He 11/08/2017
             * */
            $(ResponseText).find(cate).each(function () {

                var price = $(this).find('PRICE').text();
                priceArr.push(price);

            })
            priceArr.sort(NumDescSort);
            for(var i=0;i<priceArr.length;i++) {
                $(ResponseText).find(cate).each(function () {
                    var ePrice = $(this).find('PRICE').text();


                    if (ePrice ==priceArr[i]) {

                        var name = $(this).find('NAME').text();
                        var price = $(this).find('PRICE').text();
                        var photo1 = $(this).find('PHOTO1').text();
                        var photo2 = $(this).find('PHOTO2').text();

                        product += "<div id='"+cate+"' class='col-md-4 col-sm-6'> <div id='female' class='product'> <div id='"+brandId+"' class='flip-container'> <div class='flipper'> <div class='front'> <a href='detail.html'> <img src="+photo1+" alt=''  class='img-responsive'> </a> </div> <div class='back'> <a href='detail.html'> <img src="+photo2+" alt='' class='img-responsive'> </a> </div> </div> </div> <a href='detail.html' class='invisible'> <img src="+photo1+" alt='' class='img-responsive'> </a> <div class='text'> <h3><a href='detail.html'>"+name+"</a></h3> <p class='price'>"+'AU$'+price+"</p> <p class='buttons'> <a href='detail.html' class='btn btn-default'>View detail</a> <a href='basket.html' class='btn btn-primary'><i class='fa fa-shopping-cart'></i>Add to cart</a> </p> </div> <!-- /.text --> </div> </div>"


                    }

                })
            }


            $("#list").append(product);
        }
    });
}

/*
 * judge gender to choose checkbox function
 * commented by Ziling He 13/08/2017
 * */


function checkB() {

    var val = document.getElementById('gender').innerHTML;

    if (val == "Men") {
        get_brand();
    }
    else if (val == "Ladies") {
        get_brandL();
    }

    else {
        $('input:checkbox').attr('checked', false);
    }
}


/*
 * judge gender to choose sort-by function
 * commented by Ziling He 13/08/2017
 * */

function option() {

    var val=document.getElementsByClassName("product")[0].id;

    if(val=="male")
    {
        priceSort();
    }
    else if(val=="female")
    {
        priceSortL();
    }

}

/*
 * judge gender to choose cler function
 * commented by Ziling He 13/08/2017
 * */

function checkClear(){


    var val = document.getElementById('gender').innerHTML;

    if (val == "Men") {
        reset_check();
    }
    else if (val == "Ladies") {
        reset_checkL();

    }




}