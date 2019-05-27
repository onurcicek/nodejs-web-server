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

/*

PS C:\Users\O&E\Desktop\node-js-giris\web-server> git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   git.js
        new file:   package-lock.json
        new file:   package.json
        new file:   public/index.html
        new file:   server.js

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   git.js

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        .gitignore

*/


//DİYELİMKİ BAZI DOSYALARDA DEĞİŞİKLİK YAPTIK VE BUNLARI GÖNDERECEĞİZ GIT ADD . DİYEREK HEPSİNİ HERSEFERİNDE GÖNDERMEYİZ BUNUN İÇİN
//COMMIT KULLANURUZ

// git commit -a -m "repository init edildi"  -a eklemeyi yapar -m mesaj verdirir mesajıda yanına yazdık

/*
PS C:\Users\O&E\Desktop\node-js-giris\web-server> git commit -m "tazelendi"
[master (root-commit) 94f1c2d] tazelendi
 5 files changed, 410 insertions(+)
 create mode 100644 git.js
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/index.html
 create mode 100644 server.js
*/


//TÜM BU GİTHUB HESABIMIZA EŞLEŞTİRDİĞİMİZ DOSYALAR LOCALHOSTUMUZA AİT YANİ İNTERNET HESABUMUCDAKİNE DEĞİL

// BU İŞLEMİ YAPABİLMEK İÇİN SSH KEY İHTİYACIMIZ VAR


//ssh-keygen -t rsa -b 4096 -C "onurcck@gmail.com" bunu yazarak key oluşrutr

/*

PS C:\Users\O&E\Desktop\node-js-giris\web-server> more ~/.ssh/id_rsa.pub    // sonra bunu yazarak alttaki key anahtarın
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC7xH32G/amQEq8Q+N5f3vVTFBSRB5dMgl5+M7pOQM8p4nhqjc6S1M6DCsx9CI4zD//sdbCVFcZziz5au28rUi+/zLcMuPvfv2XxoM0woEa+tvbmXpbiIbSL+XTtT34231GP4np8567zS0H6D9avNkpgWh15Os380vxin4g48VFLiYO6TFC0Bj8Epd+GUc48Nefl8cyWzXFfzFUaDOO4q3IQxoyd/V+sTdQ/woKHVQLTDvWhfyq16HqUw+s8idqeQro6uq/5D/iXQ3is1xmW9WtaaoQdxFPBKnYPzOyKcpI5ocU6YxVQbuHv4eIruEsYaQstM5LjsIK7tXYGBaWtvsIvr4k7kQ8IK4LHJD4+iTVWf08/ZJAtAk2UqGQprVK1Vzce2VujToXZ4vKbxmeTMdPdBZHrZwTEgj8sFmO+NgrwvUCkx+j2lCW8LYxBj8yYlD5bxkjnWPo4kV+tzXdrS816LJhCNoljO5ux7AiYRXVCU1Dba6yc2vUL9LJdSV2wAjHvs7rhc5WfCh0WVOvlaxmIqkfk3DSkXLK2cdl/GJcmPcpfF27Ehw7XT1Zb4FKoHKryK5unvr4KNHRuzrkhLyVRMASXaQsteH+p961sC2XQLMaigakk4VMBl/NRC5SeVPswhehFFLrD8cesLPSOA+tO3AIcvSCRL18dKP1xkZYFQ== onurcck@gmail.com

*/
