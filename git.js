// git bir versiyon kontrol sistemidir
//hangi satırda ne silindi ne eklendi ne güncellende hepsi ni satır satır söyler.

// git config --global user.name "Gökhan Kandemir"
// git config --global user.email "onurcck@gmail.com"
// git config --global user.push.default matching
// git config --global alias.co checkout

// bunları girdikten sonra hesapla eşlemşme uyapar

//C: \Users\O & E\Desktop\node - js - giris\web - server > ls 
// ls çekerek buunduğumuz klasör içerisindeki dosyalaırmıızı görüntüleyeibliriz.


//git init diyerek git ile ilgili repository burda kurarız
//Initialized empty Git repository in C:/Users/O&E/Desktop/node-js-giris/web-server/.git/ böyle bir uyarı gelir

//--------------------------------------------------------------------------------------------
// git status diyerek kırmızı dosyalar görünür bunlar yeni eklenmiş dosyalar demektir
/*On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        git.js
        node_modules/
        package-lock.json
        package.json
        public/
        server.js

nothing added to commit but untracked files present (use "git add" to track)
*/
//------------------------------------------------------------------------------------------------------------

//diyelimki bişeyler silmek istioyuruz ozaman şunu yaparız

//git rm --cached -r node_modules  // node modules klasörünü sileceketir.

// tekrar git status diye yazarsak sildiği klasörüde kırmızı olarak aşağıda gösterecektir.

/*
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   git.js
        new file:   package-lock.json
        new file:   package.json
        new file:   public/index.html
        new file:   server.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        node_modules/ // burası kırmızı görünür

*/

// eğer bu kırmızı sildiklerimizi görmek istemiyorsak yoksayacağız bunuda şu şekilde yapabiliriz


//şimdi gitti bi tane dosya açtık .gitignore diye içinede node_modules/ yazdık içine yazdıklarımızı görmezden gel demek