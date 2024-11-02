// Metin içeriklerini tanımla
const translations = {
    en: {
        title: "Welcome to my website",
        content: "This is an example of multilingual support using JavaScript."
    },
    tr: {
        title: "Web siteme hoş geldiniz",
        content: "Bu, JavaScript kullanarak çok dilli destek örneğidir."
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("content").textContent = translations[lang].content;
}
