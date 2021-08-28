# wp-auto-message-sender
![Build Status](https://api.travis-ci.org/turtaseyhan/wp-auto-message-sender.svg)
#### _Hakkında_
- Belirtilen numaralara, belirtilen tarihte, belirtilen mesajı gönderir.
- Javascript(NodeJS) tabanlıdır.
## Kullanımı

 - Dosyaları bir klasöre atıp ```npm i ``` yazarsanız script için kullanılan tüm paketleri kurar.
 - ```numaralar.csv``` dosyasına yazdığınız numaralara, yazdığınız tarihlerde, yazdığınız mesajı gönderir.
 -  ``` node main.js ``` komutuyla çalıştırılabilir.
 - Tarayıcıda [Whatsapp Web](https://web.whatsapp.com) açık olmalıdır.
## Birden fazla numaraya mesaj göndermek için
```jsonObj[0]``` **0(sıfır)** yerine yazdığınız sayılar, ```numaralar.csv``` dosyasındaki yazdığınız satırı belirtir.
```js
if (jsonObj[0].tarih == moment().format('hh.mm mm.dd.yy')) {
                console.log('gönderildi')
                console.log(jsonObj);
                await wbm.send(jsonObj[0].numara, jsonObj[0].mesaj);
                await wbm.end();
            }
```
