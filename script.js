
function changeLanguage(lang) {
    const elementsToChange = [
        { id: 'main-title', key: 'title' },
        { id: 'risk-status-title', key: 'riskStatusTitle' },
        { id: 'risk-status-content', key: 'riskStatusContent' },
        { id: 'cve-title', key: 'cveTitle' },
        { id: 'cve-summary', key: 'cveSummary' },
        { id: 'usage-scenarios-title', key: 'usageScenariosTitle' },
        { id: 'usage-scenarios-content', key: 'usageScenariosContent' },
        // Diğer öğeleri de ekleyin...
    ];

    elementsToChange.forEach(({ id, key }) => {
        document.getElementById(id).textContent = translations[lang][key];
    });
}
