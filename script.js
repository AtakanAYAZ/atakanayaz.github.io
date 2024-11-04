// Dil metinlerini tanımlayan nesne
const texts = {
    en: {
        pageTitle: "Atakan Ayaz | Cyber Security Blog",
        mainTitle: "Atakan Ayaz | Cyber Security Blog",
        riskStatusTitle: "Risk Status",
        riskStatusContent: "This type of vulnerability can lead attackers to gain remote access to your system, making it very dangerous. Especially unpatched or weak security measures systems are more vulnerable to such attacks. If an attacker manages to exploit this vulnerability, they can gain full control over the system, access sensitive data, and carry out larger attacks.",
        cveTitle: "CVE-2024-24029 Vulnerability",
        cveSummary: "<strong>Summary:</strong> CVE-2024-24029 is a critical SQL injection vulnerability found in JFinalCMS version 5.0.0. This vulnerability stems from insufficient validation of user input at the /admin/content/data endpoint of the application, allowing attackers to execute arbitrary SQL commands on the database. With a CVSS score of 9.8, this vulnerability can have a high negative impact on confidentiality, integrity, and availability.",
        usageScenariosTitle: "Usage Scenarios",
        usageScenariosContent: "The CVE-2024-24029 vulnerability is typically exploited through the following methods:",
        solutionStepsTitle: "Solution Steps",
        solutionStepsList: [
            "To mitigate the effects of this vulnerability, it is important to follow these steps:",
            "Install Security Updates: Immediately apply patches or updates provided by the manufacturer or software provider. Updates are usually necessary to address such security vulnerabilities.",
            "Input Validation and Filtering: It is very important to filter user inputs to protect against SQL injection. Secure all input fields in your application (forms, URL parameters, etc.) with validation and filtering methods.",
            "Use Parameterized Queries and Prepared Statements: To prevent SQL injection, use parameterized statements or prepared statements in SQL queries. This enhances security by preventing dynamic creation of SQL commands.",
            "Principle of Least Privilege: Provide user accounts with only the minimum access level required. Applying the principle of least privilege to database user accounts limits unauthorized access.",
            "Use Web Application Firewall (WAF): A WAF adds a layer of protection against attacks like SQL injection. It can detect and block malicious SQL queries.",
            "Logging and Monitoring: Regularly review and analyze event logs. Set alerts for suspicious activities or errors to detect security vulnerabilities.",
            "Security Audits: Conduct regular security audits to ensure the security of your application. These audits help identify vulnerabilities and review security configurations."
        ],
        referencesTitle: "References",
        referencesContent: "For more information about CVE-2024-24029, please check the following sources:",
        referencesLinks: [
            { href: "https://www.cvedetails.com/cve/CVE-2024-24029", text: "CVE Details" },
            { href: "https://www.securityfocus.com/bid/123456", text: "SecurityFocus" },
            { href: "https://www.nvd.nist.gov/vuln/detail/CVE-2024-24029", text: "NVD - National Vulnerability Database" }
        ]
    },
    tr: {
        pageTitle: "Atakan Ayaz | Siber Güvenlik Blogu",
        mainTitle: "Atakan Ayaz | Siber Güvenlik Blogu",
        riskStatusTitle: "Risk Durumu",
        riskStatusContent: "Bu tür bir açık, saldırganların sisteminize uzaktan erişim sağlamasına yol açabileceği için oldukça tehlikelidir. Özellikle güncellenmemiş veya zayıf güvenlik önlemlerine sahip sistemler, bu tür saldırılara daha açık hale gelir. Eğer bir saldırgan bu açığı kullanmayı başarırsa, sistem üzerinde tam kontrol sağlayabilir, hassas verilere erişebilir ve daha büyük saldırılar gerçekleştirebilir.",
        cveTitle: "CVE-2024-24029 Güvenlik Açığı",
        cveSummary: "<strong>Özet:</strong> CVE-2024-24029, JFinalCMS sürüm 5.0.0'da tespit edilen ve kritik olarak değerlendirilen bir SQL enjeksiyonu zafiyetidir. Bu güvenlik açığı, uygulamanın /admin/content/data endpointindeki kullanıcı girdisinin yetersiz şekilde doğrulanmasından kaynaklanmaktadır ve saldırganların veritabanında rastgele SQL komutları çalıştırmasına olanak tanır. CVSS puanı 9.8 olan bu açık, gizlilik, bütünlük ve erişilebilirlik üzerinde yüksek derecede olumsuz etkilere yol açabilir.",
        usageScenariosTitle: "Kullanım Senaryoları",
        usageScenariosContent: "CVE-2024-24029 açığı, genellikle aşağıdaki yollarla kullanılmaktadır:",
        solutionStepsTitle: "Çözüm Adımları",
        solutionStepsList: [
            "Bu açığın etkilerini azaltmak için şu adımları izlemek önemlidir:",
            "Güvenlik Güncellemeleri Yükleyin: Üretici veya yazılım sağlayıcısı tarafından sağlanan yamaları veya güncellemeleri hemen uygulayın. Güncellemeler, genellikle bu tür güvenlik açıklarını kapatmak için gereklidir.",
            "Girdi Doğrulama ve Filtreleme: SQL enjeksiyonunu önlemek için kullanıcı girdilerini filtrelemek çok önemlidir. Uygulamanızdaki tüm girdi alanlarını (formlar, URL parametreleri vb.) doğrulama ve filtreleme yöntemleriyle güvence altına alın.",
            "Parametreli Sorgular ve Hazırlanmış İfadeler Kullanın: SQL enjeksiyonunu önlemek için SQL sorgularında parametreli ifadeler veya hazırlanmış ifadeler kullanın. Bu, dinamik olarak SQL komutları oluşturulmasını önleyerek güvenliği artırır.",
            "En Az Yetki İlkesi: Kullanıcı hesaplarına yalnızca gereken en düşük erişim düzeyini sağlayın. Veritabanı kullanıcı hesapları için en az yetki ilkesinin uygulanması, yetkisiz erişimi sınırlamakta etkilidir.",
            "Web Uygulama Güvenlik Duvarı (WAF) Kullanın: WAF, SQL enjeksiyonu gibi saldırılara karşı bir koruma katmanı ekler. Kötü niyetli SQL sorgularını tespit edip engelleyebilir.",
            "Günlükleme ve İzleme: Olay günlüklerini düzenli olarak gözden geçirin ve analiz edin. Şüpheli etkinlikler veya hatalar için uyarılar ayarlayarak güvenlik açıklarını tespit edin.",
            "Güvenlik Denetimleri: Uygulamanızın güvenliğini sağlamak için düzenli güvenlik denetimleri gerçekleştirin. Bu denetimler, açıkların belirlenmesine ve güvenlik yapılandırmalarının gözden geçirilmesine yardımcı olur."
        ],
        referencesTitle: "Referanslar",
        referencesContent: "CVE-2024-24029 ile ilgili daha fazla bilgi için lütfen şu kaynakları kontrol edin:",
        referencesLinks: [
            { href: "https://www.cvedetails.com/cve/CVE-2024-24029", text: "CVE Details" },
            { href: "https://www.securityfocus.com/bid/123456", text: "SecurityFocus" },
            { href: "https://www.nvd.nist.gov/vuln/detail/CVE-2024-24029", text: "NVD - National Vulnerability Database" }
        ]
    }
};

// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang); // Dil tercihlerini sakla
    const selectedTexts = texts[lang];

    document.getElementById('page-title').innerText = selectedTexts.pageTitle;
    document.getElementById('main-title').innerText = selectedTexts.mainTitle;
    document.getElementById('risk-status-title').innerText = selectedTexts.riskStatusTitle;
    document.getElementById('risk-status-content').innerText = selectedTexts.riskStatusContent;
    document.getElementById('cve-title').innerText = selectedTexts.cveTitle;
    document.getElementById('cve-summary').innerHTML = selectedTexts.cveSummary;
    document.getElementById('usage-scenarios-title').innerText = selectedTexts.usageScenariosTitle;
    document.getElementById('usage-scenarios-content').innerText = selectedTexts.usageScenariosContent;

    // Kullanım senaryoları listesini güncelle
    const usageScenariosList = document.getElementById('usage-scenarios-list');
    usageScenariosList.innerHTML = '';
    selectedTexts.usageScenariosList.forEach(scenario => {
        const li = document.createElement('li');
        li.innerText = scenario;
        usageScenariosList.appendChild(li);
    });

    document.getElementById('solution-steps-title').innerText = selectedTexts.solutionStepsTitle;

    // Çözüm adımları listesini güncelle
    const solutionStepsList = document.getElementById('solution-steps-list');
    solutionStepsList.innerHTML = '';
    selectedTexts.solutionStepsList.forEach(step => {
        const li = document.createElement('li');
        li.innerText = step;
        solutionStepsList.appendChild(li);
    });

    document.getElementById('references-title').innerText = selectedTexts.referencesTitle;
    document.getElementById('references-content').innerText = selectedTexts.referencesContent;

    // Referans bağlantılarını güncelle
    const referencesList = document.getElementById('references-list');
    referencesList.innerHTML = '';
    selectedTexts.referencesLinks.forEach(reference => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = reference.href;
        link.innerText = reference.text;
        link.target = "_blank"; // Bağlantı yeni sekmede açılsın
        li.appendChild(link);
        referencesList.appendChild(li);
    });
}

// Sayfa yüklendiğinde kullanıcının tercihine göre dili ayarlama
window.onload = function () {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'tr';
    changeLanguage(preferredLanguage); // Kullanıcının tercihine göre dili yükle
};
