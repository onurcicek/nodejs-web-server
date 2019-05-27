var express=require("express");
var app=express();
var middleware=require("./middleware");  // ./ bulundğum klasör demek ./middleware bulunduğum klasörün altındaki middlaware
var PORT=3000;

// app.get("/",function(req,res){

//     // req: isteiğimizle gleen parametreleri verir
//     //res: istek karşılandıktan sonra geri cevapı belirtir.

//     res.send("express merhaba");


// })

// var middleware ={  // bunu önce burda yazdık sonra ayrı sayfadan çağırdık
//     requireAuthentication: function(req,res,next){
//         console.log("özel route girildi");
//         next();
//     },
//     logger: function (req, res, next){
//         console.log(req.method);
//         next();
//     }
// }

//app.use(middleware.requireAuthentication); // burada sayfanın tamamı için çalıştırıyoruz.





app.get("/hakkimda", middleware.logger,function(req,res){
//istek gelir hakkimda sayfası için middleware den geçer fonksiyonu çalıştırır.
    res.send("hakkımda sayfası");
//middleware sadece hakkimda sayfası için çalışır.
})
//bunu yaptıktan sonra localhost:3000/hakkimda yazarsak "hakkımda sayfası" ekranda yazacaktır.
app.use(express.static(__dirname+"/public/"));

//bunu yaptıktan sonra tarayıcıya localhost:3000/index.html yaz


//C:\Users\O&E\Desktop\node-js-giris\web-server bize u yolu verir



app.listen(PORT,function(){
    console.log("Expres server "+PORT+" nolu portta çlaışıyor...")
}); //Hangi portu dinleyeceğini buradan ayzıyoruz. 3000 dedik
// bu aşamadan sonra tarayıcıya localhost:3000 yazarsak
// cannot GET / diye bir şey yazdığını görürüz bu nodejs in bize gönderdiği bişey. yani bir istek göndermedin diyor

//---------------------TEMEL SEVİYE-------------------------


