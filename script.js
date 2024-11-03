// Dil değiştirme fonksiyonu
function changeLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('page-title').innerText = "Atakan Ayaz | Cyber Security Blog";
        document.getElementById('main-title').innerText = "Atakan Ayaz | Cyber Security Blog";
        document.getElementById('risk-status-title').innerText = "Risk Status";
        document.getElementById('risk-status-content').innerText = "This type of vulnerability can lead attackers to gain remote access to your system, making it very dangerous. Especially unpatched or weak security measures systems are more vulnerable to such attacks. If an attacker manages to exploit this vulnerability, they can gain full control over the system, access sensitive data, and carry out larger attacks.";
        document.getElementById('cve-title').innerText = "CVE-2024-24029 Vulnerability";
        document.getElementById('cve-summary').innerHTML = "<strong>Summary:</strong> CVE-2024-24029 is a critical SQL injection vulnerability found in JFinalCMS version 5.0.0. This vulnerability stems from insufficient validation of user input at the /admin/content/data endpoint of the application, allowing attackers to execute arbitrary SQL commands on the database. With a CVSS score of 9.8, this vulnerability can have a high negative impact on confidentiality, integrity, and availability.";
        document.getElementById('usage-scenarios-title').innerText = "Usage Scenarios";
        document.getElementById('usage-scenarios-content').innerText = "The CVE-2024-24029 vulnerability is typically exploited through the following methods:";
        document.getElementById('usage-scenarios-list').innerHTML = `
            <li id="social-engineering">Social Engineering: Redirecting users to fake websites or exploiting the vulnerability via malicious emails.</li>
            <li id="automated-attacks">Automated Attacks: Attackers identifying known vulnerabilities using scanners on the internet and injecting malicious code into target systems.</li>
            <li id="unauthorized-data-access">Unauthorized Data Access: Attackers can access sensitive data stored in the database (user information, customer data, financial information, etc.) through injection, jeopardizing data privacy.</li>
            <li id="data-manipulation-deletion">Data Manipulation and Deletion: Attackers can manipulate SQL queries to change or delete records in the database, disrupting the application's functionality.</li>
            <li id="backdoor-creation">Backdoor Creation: Through SQL injection, attackers can add backdoors to the database for persistent access to the system.</li>
            <li id="system-overload">System Resource Overload: Malicious SQL commands can make excessive queries to the database, degrading system performance and hindering service availability.</li>
            <li id="privilege-escalation">Privilege Escalation: By gaining access to a low-privilege user account through SQL injection, more control over the system can be achieved.</li>
        `;
        document.getElementById('solution-steps-title').innerText = "Solution Steps";
        document.getElementById('solution-steps-list').innerHTML = `
            <li>To mitigate the effects of this vulnerability, it is important to follow these steps:</li>
            <li id="software-updates">Install Security Updates: Immediately apply patches or updates provided by the manufacturer or software provider. Updates are usually necessary to address such security vulnerabilities.</li>
            <li id="input-validation">Input Validation and Filtering: It is very important to filter user inputs to protect against SQL injection. Secure all input fields in your application (forms, URL parameters, etc.) with validation and filtering methods.</li>
            <li id="prepared-statements">Use Parameterized Queries and Prepared Statements: To prevent SQL injection, use parameterized statements or prepared statements in SQL queries. This enhances security by preventing dynamic creation of SQL commands.</li>
            <li id="least-privilege">Principle of Least Privilege: Provide user accounts with only the minimum access level required. Applying the principle of least privilege to database user accounts limits unauthorized access.</li>
            <li id="waf-usage">Use Web Application Firewall (WAF): A WAF adds a layer of protection against attacks like SQL injection. It can detect and block malicious SQL queries.</li>
            <li id="logging-monitoring">Logging and Monitoring: Regularly review and analyze event logs. Set alerts for suspicious activities or errors to detect security vulnerabilities.</li>
            <li id="security-audits">Security Audits: Conduct regular security audits to ensure the security of your application. These audits help identify vulnerabilities and review security configurations.</li>
        `;
        document.getElementById('references-title').innerText = "References";
        document.getElementById('references-content').innerText = "For more information about CVE-2024-24029, please check the following sources:";
        document.querySelector('ul').innerHTML = `
            <li><a href="https://www.cvedetails.com/cve/CVE-2024-24029" target="_blank">CVE Details</a></li>
            <li><a href="https://www.securityfocus.com/bid/123456" target="_blank">SecurityFocus</a></li>
            <li><a href="https://www.nvd.nist.gov/vuln/detail/CVE-2024-24029" target="_blank">NVD - National Vulnerability Database</a></li>
        `;
    } else if (lang === 'tr') {
        document.getElementById('page-title').innerText = "Atakan Ayaz | Siber Güvenlik Blogu";
        document.getElementById('main-title').innerText = "Atakan Ayaz | Siber Güvenlik Blogu";
        document.getElementById('risk-status-title').innerText = "Risk Durumu";
        document.getElementById('risk-status-content').innerText = "Bu tür bir açık, saldırganların sisteminize uzaktan erişim sağlamasına yol açabileceği için oldukça tehlikelidir. Özellikle güncellenmemiş veya zayıf güvenlik önlemlerine sahip sistemler, bu tür saldırılara daha açık hale gelir. Eğer bir saldırgan bu açığı kullanmayı başarırsa, sistem üzerinde tam kontrol sağlayabilir, hassas verilere erişebilir ve daha büyük saldırılar gerçekleştirebilir.";
        document.getElementById('cve-title').innerText = "CVE-2024-24029 Güvenlik Açığı";
        document.getElementById('cve-summary').innerHTML = "<strong>Özet:</strong> CVE-2024-24029, JFinalCMS sürüm 5.0.0'da tespit edilen ve kritik olarak değerlendirilen bir SQL enjeksiyonu zafiyetidir. Bu güvenlik açığı, uygulamanın /admin/content/data endpointindeki kullanıcı girdisinin yetersiz şekilde doğrulanmasından kaynaklanmaktadır ve saldırganların veritabanında rastgele SQL komutları çalıştırmasına olanak tanır. CVSS puanı 9.8 olan bu açık, gizlilik, bütünlük ve erişilebilirlik üzerinde yüksek derecede olumsuz etkilere yol açabilir.";
        document.getElementById('usage-scenarios-title').innerText = "Kullanım Senaryoları";
        document.getElementById('usage-scenarios-content').innerText = "CVE-2024-24029 açığı, genellikle aşağıdaki yollarla kullanılmaktadır:";
        document.getElementById('usage-scenarios-list').innerHTML = `
            <li id="social-engineering">Sosyal Mühendislik: Kullanıcıların sahte web sitelerine yönlendirilmesi veya kötü niyetli e-postalar aracılığıyla açığın istismar edilmesi.</li>
            <li id="automated-attacks">Otomatik Saldırılar: Saldırganların, internet üzerindeki bilinen açıkları tarayıcılar kullanarak belirleyip, hedef sistemlere kötü niyetli kod enjekte etmesi.</li>
            <li id="unauthorized-data-access">Yetkisiz Veri Erişimi: Saldırgan, enjeksiyon yoluyla veritabanında saklanan hassas verilere (kullanıcı bilgileri, müşteri verileri, finansal bilgiler vb.) erişebilir ve veri gizliliğini tehlikeye atabilir.</li>
            <li id="data-manipulation-deletion">Veri Manipülasyonu ve Silme: Saldırgan, SQL sorgularını manipüle ederek veritabanındaki kayıtları değiştirebilir veya silebilir ve uygulamanın işlevselliğini bozabilir.</li>
            <li id="backdoor-creation">Arka Kapı Oluşturma: SQL enjeksiyonu yoluyla saldırgan, sistemde kalıcı erişim için veritabanına arka kapılar ekleyebilir.</li>
            <li id="system-overload">Sistem Kaynaklarını Aşırı Yükleme: Kötü niyetli SQL komutları, veritabanına aşırı sorgular yaparak sistem performansını düşürebilir ve hizmetin erişilebilirliğini engelleyebilir.</li>
            <li id="privilege-escalation">Aşırı Yetki Kazanma: SQL enjeksiyonu yoluyla düşük yetkili bir kullanıcı hesabına erişim sağlanması, sistem üzerinde daha fazla kontrol elde edilmesini sağlayabilir.</li>
        `;
        document.getElementById('solution-steps-title').innerText = "Çözüm Adımları";
        document.getElementById('solution-steps-list').innerHTML = `
            <li>Bu açığın etkilerini azaltmak için şu adımları izlemek önemlidir:</li>
            <li id="software-updates">Güvenlik Güncellemeleri Yükleyin: Üretici veya yazılım sağlayıcısı tarafından sağlanan yamaları veya güncellemeleri hemen uygulayın. Güncellemeler, genellikle bu tür güvenlik açıklarını kapatmak için gereklidir.</li>
            <li id="input-validation">Girdi Doğrulama ve Filtreleme: SQL enjeksiyonunu önlemek için kullanıcı girdilerini filtrelemek çok önemlidir. Uygulamanızdaki tüm girdi alanlarını (formlar, URL parametreleri vb.) doğrulama ve filtreleme yöntemleriyle güvence altına alın.</li>
            <li id="prepared-statements">Parametreli Sorgular ve Hazırlanmış İfadeler Kullanın: SQL enjeksiyonunu önlemek için SQL sorgularında parametreli ifadeler veya hazırlanmış ifadeler kullanın. Bu, dinamik olarak SQL komutları oluşturulmasını önleyerek güvenliği artırır.</li>
            <li id="least-privilege">En Az Yetki İlkesi: Kullanıcı hesaplarına yalnızca gereken en düşük erişim düzeyini sağlayın. Veritabanı kullanıcı hesapları için en az yetki ilkesinin uygulanması, yetkisiz erişimi sınırlamakta etkilidir.</li>
            <li id="waf-usage">Web Uygulama Güvenlik Duvarı (WAF) Kullanın: WAF, SQL enjeksiyonu gibi saldırılara karşı bir koruma katmanı ekler. Kötü niyetli SQL sorgularını tespit edip engelleyebilir.</li>
            <li id="logging-monitoring">Günlükleme ve İzleme: Olay günlüklerini düzenli olarak gözden geçirin ve analiz edin. Şüpheli etkinlikler veya hatalar için uyarılar ayarlayarak güvenlik açıklarını tespit edin.</li>
            <li id="security-audits">Güvenlik Denetimleri: Uygulamanızın güvenliğini sağlamak için düzenli güvenlik denetimleri gerçekleştirin. Bu denetimler, açıkların belirlenmesine ve güvenlik yapılandırmalarının gözden geçirilmesine yardımcı olur.</li>
        `;
        document.getElementById('references-title').innerText = "Referanslar";
        document.getElementById('references-content').innerText = "CVE-2024-24029 ile ilgili daha fazla bilgi için lütfen şu kaynakları kontrol edin:";
        document.querySelector('ul').innerHTML = `
            <li><a href="https://www.cvedetails.com/cve/CVE-2024-24029" target="_blank">CVE Details</a></li>
            <li><a href="https://www.securityfocus.com/bid/123456" target="_blank">SecurityFocus</a></li>
            <li><a href="https://www.nvd.nist.gov/vuln/detail/CVE-2024-24029" target="_blank">NVD - National Vulnerability Database</a></li>
        `;
    }
}

window.onload = function () {
    console.log("Sayfa yüklendi.");
    changeLanguage('tr');
};

