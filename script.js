function changeLanguage(lang) {
    console.log(`Changing language to: ${lang}`);
    // Mevcut içerikleri güncelle
    if (lang === 'en') {
        document.getElementById('title').innerText = 'Welcome to my website';
        document.getElementById('content').innerText = 'This is an example of multilingual support using JavaScript.';
    } else if (lang === 'tr') {
        document.getElementById('title').innerText = 'Web siteme hoş geldiniz';
        document.getElementById('content').innerText = 'JavaScript kullanarak çok dilli destek örneğidir.';
    }
}
