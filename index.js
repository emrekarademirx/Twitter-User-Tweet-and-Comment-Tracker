const Twit = require('twit');
const fs = require('fs');

// Twitter API anahtarı ve erişim belirteci
const T = new Twit({
  consumer_key: 'your_consumer_key',
  consumer_secret: 'your_consumer_secret',
  access_token: 'your_access_token',
  access_token_secret: 'your_access_token_secret',
});

// Twitter kullanıcı adı
const kullanici_adi = 'your_username';

// Tweetleri almak için API isteği
T.get(`statuses/user_timeline`, { screen_name: kullanici_adi, count: 200 }, function(
  err,
  data,
  response
) {
  // Hata durumunda uyarı ver
  if (err) {
    console.log('Hata: ', err);
  } else {
    // Tweetleri dosyaya kaydet
    fs.writeFileSync('tweets.json', JSON.stringify(data, null, 2));

    // Tweetleri gez
    for (let i = 0; i < data.length; i++) {
      console.log('Tweet: ', data[i].text);
      console.log('Yorum Sayısı: ', data[i].reply_count);
      console.log('\n');
    }
  }
});
