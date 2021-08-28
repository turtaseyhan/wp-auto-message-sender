const wbm = require('wbm');
const csvFilePath = './numaralar.csv'
const csv = require('csvtojson')
const moment = require('moment')
moment.locale('tr');

arraysayi = 0

wbm.start().then(async () => {
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            if (jsonObj[0].tarih == moment().format('HH:mm MM.DD.yy')) {
                console.log(`------------------------\nMesaj gönderildi \n Numara: ${jsonObj[0].numara}\n Gönderilen Mesaj: ${jsonObj[0].mesaj}\n Tarih: ${moment().format('HH:mm MM.DD.yy')}`)
                console.log(jsonObj);
                await wbm.send(jsonObj[0].numara, jsonObj[0].mesaj);
                await wbm.end();
            }
        })

    arraysayi + 1
}).catch(err => console.log(err));
