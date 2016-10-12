!function(){"use strict";angular.module("angularSeedApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap"])}(),function(){"use strict";function a(){function a(){}var s={restrict:"E",replace:!0,templateUrl:"app/components/topics/topics.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return s}angular.module("angularSeedApp").directive("comTopics",a)}(),function(){"use strict";function a(){function a(a,s,n){n.loadData("menu",null,!0,function(s){a.menus=s,console.log(s)}),a.init=function(){$("ul.product-list-content").on("click","li > a",function(){$(this).next("ul").toggle(400)})}}var s={restrict:"E",replace:!0,templateUrl:"app/components/sidebar/sidebar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!1};return a.$inject=["$scope","$location","commonService"],s}angular.module("angularSeedApp").directive("comSidebar",a)}(),function(){"use strict";function a(){function a(){}var s={restrict:"E",replace:!0,templateUrl:"app/components/search/search.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!1};return s}angular.module("angularSeedApp").directive("comSearch",a)}(),function(){"use strict";function a(){function a(a){function s(){var s,n=[];for(s=0;4>s;s++)n.push({news_image:"../../../assets/images/frontend/img_01.png",news_title:"SUPERNANO - Siêu khuyến mãi nhân dịp khai trương Website",news_description:"Nhân dịp khai trương website bán hàng trực tuyến http://sna no.vn/ Công ty Cổ Phần Công Nghệ Nano Ứng Dụng xin giới thiệu đến Quý khách hàng"});for(s=0;2>s;s++)a.slides.push({id:s,items:n})}a.myInterval="none",a.active=0,a.noWrapSlides=!1,a.slides=[],s()}var s={restrict:"E",replace:!0,templateUrl:"app/components/news-slide/news-slide.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return a.$inject=["$scope"],s}angular.module("angularSeedApp").directive("comNewsSlide",a)}(),function(){"use strict";function a(){function a(){}var s={restrict:"E",replace:!0,templateUrl:"app/components/new-products/new-products.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return s}angular.module("angularSeedApp").directive("comNewProducts",a)}(),function(){"use strict";function a(){function a(){}var s={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return s}angular.module("angularSeedApp").directive("acmeNavbar",a)}(),function(){"use strict";function a(){function a(a){function s(){var s,n=[];for(s=0;4>s;s++)n.push({discount_rate:"20%",product_image:"../../../assets/images/frontend/img_05.jpg",product_name:"Bộ chuyển đổi USB 2.0 to RS232",product_old_price:"200.000",product_new_price:"100.000"});for(s=0;2>s;s++)a.slides.push({id:s,items:n})}a.myInterval=5e3,a.active=0,a.noWrapSlides=!1,a.slides=[],s()}var s={restrict:"E",replace:!0,templateUrl:"app/components/hot-products/hot-products.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!1};return a.$inject=["$scope"],s}angular.module("angularSeedApp").directive("comHotProducts",a)}(),function(){"use strict";function a(){function a(a,s){}var s={restrict:"E",replace:!0,templateUrl:"app/components/header/header.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!1};return a.$inject=["$scope","$location"],s}angular.module("angularSeedApp").directive("comHeader",a)}(),function(){"use strict";function a(){function a(){}var s={restrict:"E",replace:!0,templateUrl:"app/components/footer/footer.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return s}angular.module("angularSeedApp").directive("comFooter",a)}(),function(){"use strict";function a(){function a(){}var s={restrict:"E",replace:!0,templateUrl:"app/components/email-registration/email-registration.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return s}angular.module("angularSeedApp").directive("comEmailRegistration",a)}(),function(){"use strict";angular.module("angularSeedApp").factory("notify",["$window",function(a){return console.log("Notify From Service"),function(a){console.log(a)}}])}(),function(){"use strict";angular.module("angularSeedApp").factory("menu",["$http","API_URL",function(a){return function(s,n,e){s||a.get(API_URL+"menu").success(function(a){return a.data})}}])}(),function(){"use strict";angular.module("angularSeedApp").factory("commonService",["$http","API_URL",function(a,s){var n=function(n,e,i,t){var l=s+n;return null==e&&(e={}),i?(angular.extend(e,{callback:"JSON_CALLBACK"}),a({method:"JSONP",url:l,params:e,paramSerializer:"$httpParamSerializerJQLike"}).then(function(a){"function"==typeof t&&t(a.data)},function(a){console.log(a)})):a({url:l,method:"GET",params:e,paramSerializer:"$httpParamSerializerJQLike"}).then(function(a){"function"==typeof t&&t(a.data)},function(a){console.log(a)})};return{loadData:n}}])}(),function(){"use strict";function a(){}angular.module("angularSeedApp").controller("MainController",a)}(),function(){"use strict";angular.module("angularSeedApp").filter("notify",["$window",function(a){return console.log("Notify From filter"),function(a){return 123}}])}(),function(){"use strict";function a(a){a.debug("runBlock end")}a.$inject=["$log"],angular.module("angularSeedApp").run(a)}(),function(){"use strict";function a(a,s){a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),s.otherwise("/")}a.$inject=["$stateProvider","$urlRouterProvider"],angular.module("angularSeedApp").config(a)}(),function(){"use strict";angular.module("angularSeedApp").constant("API_URL","http://localhost:8000/api/").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function a(a,s){a.debugEnabled(!0),s.options.timeOut=3e3,s.options.positionClass="toast-top-right",s.options.preventDuplicates=!0,s.options.progressBar=!0}a.$inject=["$logProvider","toastr"],angular.module("angularSeedApp").config(a)}(),angular.module("angularSeedApp").run(["$templateCache",function(a){a.put("app/main/main.html",'<div><com-header></com-header><div class="clearfix"></div><section class="banner"></section><div class="clearfix"></div><com-topics></com-topics><div class="clearfix"></div><com-search></com-search><div class="clearfix"></div><section class="main-content container mt20"><div class="row"><com-sidebar></com-sidebar><com-new-products></com-new-products></div></section><div class="clearfix"></div><com-hot-products></com-hot-products><div class="clearfix"></div><com-news-slide></com-news-slide><div class="clearfix"></div><com-email-registration></com-email-registration><div class="clearfix"></div><com-footer></com-footer></div>'),a.put("app/components/email-registration/email-registration.html",'<section class="e-mail mt40"><div class="container"><h3 class="f-avobold">Đăng ký nhận Email</h3><ul><li class="col-lg-5"><div class="form-group"><label class="col-sm-3 control-label">Họ và tên :</label><div class="col-sm-9 pl0"><input class="form-control" type="text"></div></div></li><li class="col-lg-5"><div class="form-group"><label class="col-sm-3 control-label">E-mail :</label><div class="col-sm-9 pl0"><input class="form-control" type="text"></div></div></li><li><button class="btn-register">Đăng ký</button></li></ul></div></section>'),a.put("app/components/footer/footer.html",'<footer><div class="container"><div class="row"><div class="col-lg-6 col-md-6 col-sm-12"><h1>BẢN QUYỀN THUỘC tudonghoacongnghiep.vn</h1><ul><li><b>Địa chỉ :</b> Số 11, TT Định Canh - Định Cư, Ngõ 100, Đường Hoàng Quốc Việt, Cầu Giấy, Hà Nội</li><li><b>Tell :</b> 0977 xxx xxx</li><li><b>Mail :</b> tudonghoacongnghiep@gmail.com</li></ul><div class="mt15 network"><a href="#"><img src="../../../assets/images/frontend/common/icon_face.jpg"></a> <a href="#"><img src="../../../assets/images/frontend/common/icon_g.jpg"></a> <a href="#"><img src="../../../assets/images/frontend/common/icon_t.jpg"></a></div></div><div class="col-lg-6 col-md-6 col-sm-12"><p class="visit-number">Tổng số lượt truy cập : <span>100000</span></p><div class="mt10"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8174048181427!2d105.76284945287922!3d21.039990877378983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c745f9a22d%3A0x82d72ef192592b7b!2zLVBow6JuIFZp4buHbiBWxakgS2jDrSDEkOG6t2MgQ2jhu6duZw!5e0!3m2!1sen!2s!4v1475570936236" width="100%" height="210" frameborder="0" style="border:0" allowfullscreen=""></iframe></div></div><div class="clearfix"></div></div></div></footer>'),a.put("app/components/header/header.html",'<header><div class="top-content"><div class="container"><div class="pull-left"><a href="#"><img src="../../../assets/images/frontend/common/icon_h01.png"></a></div><div class="pull-right"><ul><li><a href="#">Tài khoản của tôi</a></li><li><a href="#">Lịch sử đơn hàng</a></li><li><a href="#">Danh sách ưa thích</a></li><li><a href="#" data-toggle="modal" data-target="#login">Đăng nhập</a></li><li><a href="#" data-toggle="modal" data-target="#register">Đăng ký</a></li></ul><div class="clearfix"></div></div></div></div><div class="clearfix"></div><div style="background-color: #fff;" class="menu_m"><div class="head-nav container"><a href="#"><img src="../../../assets/images/frontend/common/logo.png" alt="tudonghoacongnghiep.vn"></a><div class="pull-right"><ul><li><a href="#">Trang chủ</a>|</li><li><a href="#">Giới thiệu</a>|</li><li><a href="#">Sản phẩm</a>|</li><li><a href="#">Khuyến mãi</a>|</li><li><a href="#">Nhà sản xuất</a>|</li><li><a href="#">Tin tức</a>|</li><li><a href="#">Liên hệ</a></li></ul><a href="#" class="head-btn-cart btn-blue">Giỏ hàng (<span class="text-red">01</span>)</a></div></div></div></header>'),a.put("app/components/hot-products/hot-products.html",'<section class="product-hot mt30"><div class="container"><h2 class="title-cm">Sản phầm bán chạy</h2><div class="col-lg-12"><div uib-carousel="" active="active" interval="myInterval" no-wrap="noWrapSlides"><div uib-slide="" ng-repeat="slide in slides track by slide.id" index="slide.id" class="item"><div ng-repeat="product in slide.items" class="col-lg-3 col-xs-3 col-md-3 col-sm-3 product-item"><div class="wrap-product"><span class="safe">{{product.discount_rate}}</span> <a href="#"><img ng-src="{{product.product_image}}"></a></div><p>{{product.product_name}}</p><div class="price-product"><span>{{product.product_old_price}}</span><p class="f-bebas">{{product.product_new_price}}</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></div></div></div></div></div></section>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#/"><span class="glyphicon glyphicon-home"></span> Angular Gulp Seed</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#/">Inicial</a></li><li><a href="#">Teste</a></li><li><a href="#">Teste 2</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"></ul></div></div></nav>'),a.put("app/components/new-products/new-products.html",'<div class="col-lg-9 new-product"><h2 class="title-cm">Sản phẩm mới</h2><ul><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li><li class="product-item col-lg-4"><div class="wrap-product"><span class="safe">20%</span> <a href="#"><img src="../../../assets/images/frontend/img_05.jpg"></a></div><p>Bộ chuyển đổi USB 2.0 to RS232</p><div class="price-product"><span>200.000</span><p class="f-bebas">100.000</p><a href="#" class="btn-blue btn-buy">Mua hàng</a></div></li></ul></div>'),a.put("app/components/news-slide/news-slide.html",'<section class="news"><h2 class="news-title f-avobold">Tin tức<span></span></h2><div class="container mt50"><div><div id="news_slider" uib-carousel="" active="active" interval="myInterval" no-wrap="noWrapSlides"><div uib-slide="" ng-repeat="slide in slides track by slide.id" index="slide.id" class="item"><div ng-repeat="news in slide.items" class="col-lg-6 news-item"><div class="wrap-img-news"><img ng-src="{{news.news_image}}"></div><div class="news-content"><a href="#">{{news.news_title}}</a><p>{{news.news_description}}</p></div></div></div></div><div class="clearfix"></div></div></div></section>'),a.put("app/components/search/search.html",'<section class="search container mt20"><div class="col-lg-4 pull-right pr0"><div class="input-group"><input type="text" class="form-control" placeholder="Tìm kiếm theo tên hoặc mã sản phẩm..."> <span class="input-group-btn"><button class="btn btn-default glyphicon" type="button"></button></span></div></div></section>'),a.put("app/components/sidebar/sidebar.html",'<div class="col-lg-3 col-md-3 col-sm-6 side-bar pr0" ng-init="init()"><div class="bar-product-list"><h2 class="side-bar-title">Danh mục sản phẩm</h2><ul class="product-list-content"><li ng-repeat="p in menus"><a href="#/danh-muc-san-pham/{{p.slug}}">{{p.name}}</a><ul ng-if="p.subMenus.length > 0"><li ng-repeat="c in p.subMenus"><a href="#/danh-muc-san-pham/{{p.slug}}/{{c.slug}}">{{c.name}}</a></li></ul></li></ul></div><div class="clearfix"></div><div class="support-online mt20"><h2 class="side-bar-title">Hỗ trợ trực tuyến</h2><ul><li><img src="../../../assets/images/frontend/icon_s01.png"><h4>Mr Giang</h4><p>ĐT: 0966.538.368<br>Email: sale@snano.vn</p></li><li><img src="../../../assets/images/frontend/icon_s02.png"><h4>Mr Giang</h4><p>ĐT: 0966.538.368<br>Email: sale@snano.vn</p></li></ul></div><div class="clearfix"></div><div class="qaa mt20"><h2 class="side-bar-title">Hỏi đáp</h2><marquee direction="up"><ul><li><a href="#">Ngành Kỹ thuật điều khiển và tự động hóa là gì?</a></li><li><a href="#">Ngành Kỹ thuật điều khiển và tự động hóa ra trường làm gì?</a></li><li><a href="#">Ngành Kỹ thuật điều khiển và tự động hóa xét tuyển những môn nào?</a></li><li><a href="#">Học ngành Kỹ thuật điều khiển và tự động hóa ở đâu?</a></li><li><a href="#">Cơ hội nghề nghiệp của ngành Kỹ thuật điều khiển và tự động hóa?</a></li></ul></marquee></div><div class="clearfix"></div></div>'),a.put("app/components/topics/topics.html",'<section class="topics"><div class="container"><ul class="row"><li class="col-lg-4 col-md-4 col-sm-1"><div class="wrap-img-topics"><img src="../../../assets/images/frontend/common/icon_big03.png"> <span class="link-border"></span></div><h3 class="f-avobold">Dự án</h3><p class="text-center"><a href="#">Giải pháp (phần cứng và phần mềm) đã triển khai</a> <a href="#">Các giải pháp đang nghiên cứu</a> <a href="#">Bản mô tả chi tiết dự án</a></p></li><li class="col-lg-4 col-md-4 col-sm-1"><div class="wrap-img-topics"><img src="../../../assets/images/frontend/common/icon_big01.png"> <span class="link-border"></span></div><h3 class="f-avobold">Đào tạo - Chuyển giao công nghệ</h3><p class="text-center"><a href="#">Đào tạo lập trình điều khiển tự động, lập trình phần cứng</a> <a href="#">Chuyển giao công nghệ</a></p></li><li class="col-lg-4 col-md-4 col-sm-1"><div class="wrap-img-topics"><img src="../../../assets/images/frontend/common/icon_big02.png"> <span class="link-border"></span></div><h3 class="f-avobold">Dịch vụ kỹ thuật</h3><p class="text-center"><a href="#">Dịch vụ hàn mạch điện tử</a> <a href="#">Dịch vụ lắp ráp tụ điện công nghiệp</a> <a href="#">Dịch vụ sửa chữa, bảo dưỡng các thiết bị công nghiệp</a> <a href="#">Dịch vụ thiết, bảo trì Website</a></p></li></ul><div class="clearfix"></div></div></section>')}]);