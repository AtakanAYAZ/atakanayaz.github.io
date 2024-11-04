document.addEventListener("DOMContentLoaded", function() {
    // Kullanım Senaryoları
    const usageScenarios = [
        "Sosyal Mühendislik: Kullanıcıların sahte web sitelerine yönlendirilmesi veya kötü niyetli e-postalar aracılığıyla açığın istismar edilmesi.",
        "Otomatik Saldırılar: Saldırganların, internet üzerindeki bilinen açıkları tarayıcılar kullanarak belirleyip, hedef sistemlere kötü niyetli kod enjekte etmesi.",
        "Yetkisiz Veri Erişimi: Saldırgan, enjeksiyon yoluyla veritabanında saklanan hassas verilere (kullanıcı bilgileri, müşteri verileri, finansal bilgiler vb.) erişebilir, veri gizliliğini tehlikeye atabilir.",
        "Veri Manipülasyonu ve Silinmesi: Saldırgan, SQL sorgularını manipüle ederek veritabanındaki kayıtları değiştirebilir veya silebilir, uygulamanın işleyişini bozabilir.",
        "Arka Kapı Oluşturma: SQL enjeksiyon yoluyla saldırganlar, sistemde kalıcı erişim sağlamak için veritabanına arka kapılar ekleyebilir.",
        "Sistem Kaynaklarına Aşırı Yüklenme: Zararlı SQL komutları veritabanına yoğun sorgular yaparak sistem performansını düşürebilir ve hizmetin kullanılabilirliğini engelleyebilir.",
        "Yetki Yükseltme: SQL enjeksiyonu yoluyla düşük yetkiye sahip bir kullanıcı hesabına erişim sağlanarak daha fazla sistem kontrolü elde edilebilir."
    ];

    // Çözüm Adımları
    const solutionSteps = [
        "Güvenlik Güncellemelerini Yükleyin: Üretici veya yazılım sağlayıcı tarafından sağlanan yamaları veya güncellemeleri derhal yükleyin.",
        "Girdi Doğrulama ve Filtreleme: SQL enjeksiyonlarına karşı korunmak için kullanıcı girdilerini filtrelemek çok önemlidir.",
        "Parametrik Sorgular ve Hazırlanmış İfadeler Kullanma: SQL enjeksiyonunu önlemek için SQL sorgularında parametrik ifadeler veya hazırlanan ifadeler (prepared statements) kullanın.",
        "En Az Ayrıcalık Prensibi: Kullanıcı hesaplarına yalnızca gereken en düşük erişim düzeyini sağlayın.",
        "Web Uygulama Güvenlik Duvarı (WAF) Kullanımı: WAF, SQL enjeksiyonu gibi saldırılara karşı bir koruma katmanı ekler.",
        "Günlük ve İzleme: Olay günlüklerini düzenli olarak izleyin ve analiz edin.",
        "Güvenlik Denetimleri: Uygulamanızın güvenliğini sağlamak için düzenli güvenlik denetimleri gerçekleştirin."
    ];

    // Liste elemanlarını HTML'e ekleme
    const usageList = document.getElementById("usage-scenarios-list");
    usageScenarios.forEach(function(scenario) {
        const li = document.createElement("li");
        li.textContent = scenario;
        usageList.appendChild(li);
    });

    const solutionList = document.getElementById("solution-steps-list");
    solutionSteps.forEach(function(step) {
        const li = document.createElement("li");
        li.textContent = step;
        solutionList.appendChild(li);
    });
});
