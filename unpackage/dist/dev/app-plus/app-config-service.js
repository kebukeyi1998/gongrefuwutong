
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/about/about","pages/service/service","pages/baoxiu/baoxiu","pages/center/center","pages/shop/shop","pages/index/map/map","pages/index/chat/chat","pages/index/message/message","pages/index/info/info","pages/download/download","pages/start/start","pages/productInfo/productInfo","pages/order/order","pages/address/address","pages/address/zengaddress","pages/pay/pay","pages/pay/paySuccess","pages/index/city/city","pages/search/search","pages/login/login"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"供热服务通","navigationBarBackgroundColor":"#FFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#dbdbdb","selectedColor":"#e11b01","borderStyle":"white","backgroundColor":"#F6F7F8","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeHL.png","text":"首页"},{"pagePath":"pages/service/service","iconPath":"static/tabbar/service.png","selectedIconPath":"static/tabbar/serviceHL.png","text":"维修服务"},{"pagePath":"pages/baoxiu/baoxiu","iconPath":"static/tabbar/repire.png","selectedIconPath":"static/tabbar/repireHL.png","text":"一键报修"},{"pagePath":"pages/shop/shop","iconPath":"static/tabbar/shop.png","selectedIconPath":"static/tabbar/shopHL.png","text":"定制商城"},{"pagePath":"pages/center/center","iconPath":"static/tabbar/center.png","selectedIconPath":"static/tabbar/centerHL.png","text":"个人中心"}]},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"GraceUIForUniApp","compilerVersion":"2.9.7","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}},{"path":"/pages/about/about","meta":{"isNVue":true},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}},{"path":"/pages/service/service","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}},{"path":"/pages/baoxiu/baoxiu","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"一键报修","enablePullDownRefresh":false}},{"path":"/pages/center/center","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}},{"path":"/pages/shop/shop","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}},{"path":"/pages/index/map/map","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/chat/chat","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/message/message","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/info/info","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/download/download","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/start/start","meta":{},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}},{"path":"/pages/productInfo/productInfo","meta":{},"window":{"navigationBarTitleText":"商品详情","enablePullDownRefresh":false}},{"path":"/pages/order/order","meta":{},"window":{"navigationBarTitleText":"订单详情","enablePullDownRefresh":false}},{"path":"/pages/address/address","meta":{},"window":{"navigationBarTitleText":"地址管理","enablePullDownRefresh":false}},{"path":"/pages/address/zengaddress","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/pay/pay","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/pay/paySuccess","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/index/city/city","meta":{},"window":{"navigationBarTitleText":"选择服务城市","enablePullDownRefresh":false}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"","titleNView":false,"navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});