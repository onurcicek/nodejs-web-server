
    var middleware = {
        requireAuthentication: function (req, res, next) {
            console.log("özel route girildi");
            next();
        },
        logger: function (req, res, next) {
            console.log(req.method);
            next();
        }
    }


    module.exports=middleware; // normalde module.exports=funciton(){} yapardık burada sadece middleware değişkenini gönderdik


    
