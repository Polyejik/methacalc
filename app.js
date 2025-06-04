// Калькулятор ROI метанола - Полная функциональная версия
class MethanolCalculator {
    constructor() {
        // Данные приложения из JSON
        this.data = {
            countries: [
                {"name": "Algeria", "name_en": "Algeria", "name_ru": "Алжир", "region": "Africa", "price": 450, "tax": 0},
                {"name": "Canada", "name_en": "Canada", "name_ru": "Канада", "region": "North America", "price": 625, "tax": 74},
                {"name": "China", "name_en": "China", "name_ru": "Китай", "region": "Asia", "price": 350, "tax": 15},
                {"name": "France", "name_en": "France", "name_ru": "Франция", "region": "Europe", "price": 625, "tax": 51},
                {"name": "Germany", "name_en": "Germany", "name_ru": "Германия", "region": "Europe", "price": 625, "tax": 57},
                {"name": "Iran", "name_en": "Iran", "name_ru": "Иран", "region": "Middle East", "price": 400, "tax": 0},
                {"name": "Kazakhstan", "name_en": "Kazakhstan", "name_ru": "Казахстан", "region": "Asia", "price": 375, "tax": 0},
                {"name": "Norway", "name_en": "Norway", "name_ru": "Норвегия", "region": "Europe", "price": 625, "tax": 90},
                {"name": "Qatar", "name_en": "Qatar", "name_ru": "Катар", "region": "Middle East", "price": 400, "tax": 0},
                {"name": "Romania", "name_en": "Romania", "name_ru": "Румыния", "region": "Europe", "price": 625, "tax": 70},
                {"name": "Russia", "name_en": "Russia", "name_ru": "Россия", "region": "Asia", "price": 375, "tax": 0},
                {"name": "Saudi Arabia", "name_en": "Saudi Arabia", "name_ru": "Саудовская Аравия", "region": "Middle East", "price": 400, "tax": 0},
                {"name": "UAE", "name_en": "UAE", "name_ru": "ОАЭ", "region": "Middle East", "price": 400, "tax": 0},
                {"name": "USA", "name_en": "USA", "name_ru": "США", "region": "North America", "price": 778, "tax": 15}
            ],
            transportCosts: {
                "on site": {"min": 0, "max": 0, "default": 0},
                "maritime": {"min": 15, "max": 30, "default": 25},
                "rail": {"min": 40, "max": 60, "default": 50},
                "road": {"min": 50, "max": 80, "default": 65}
            },
            constants: {
                gasToMethanolRatio: 1.1,
                co2Factor: 2.3,
                productionCost: 175,
                baseCapex: 60,
                baseGasVolume: 50,
                scaleExponent: 0.7,
                projectLifetime: 15
            }
        };

        // Переводы для интерфейса
        this.translations = {
            ru: {
                title: "Калькулятор ROI метанола",
                subtitle: "Оценка рентабельности проектов переработки факельного газа в метанол",
                projectParameters: "Параметры проекта",
                sourceCountry: "Страна-источник",
                destinationCountry: "Страна назначения",
                selectCountry: "Выберите страну",
                gasVolume: "Объем газа (млн м³/год)",
                discountRate: "Ставка дисконтирования (%)",
                manualCapex: "Задать CAPEX вручную",
                capexPlaceholder: "CAPEX (млн $)",
                methanolPrice: "Цена метанола ($/т)",
                opex: "OPEX ($/т)",
                carbonTax: "Углеродный налог ($/т CO₂)",
                transportType: "Тип транспорта",
                transportCost: "Транспортные расходы ($/т)",
                sensitivityAnalysis: "Анализ чувствительности",
                sensitivityRange: "Диапазон анализа",
                financialMetrics: "Финансовые метрики",
                npv: "NPV (млн $)",
                roi: "ROI (%)",
                payback: "Срок окупаемости (лет)",
                capex: "CAPEX (млн $)",
                opexValue: "OPEX (млн $/год)",
                co2Reduction: "Сокращение CO₂ (тыс т/год)",
                methanolProduction: "Производство метанола (тыс т/год)",
                carbonSaving: "Углеродный налог (экономия)",
                sensitivityChart: "Анализ чувствительности NPV",
                costStructure: "Структура затрат",
                cashFlow: "Денежный поток",
                disclaimer: "Важное примечание",
                disclaimerText: "Это предварительные расчеты для оценочных целей. Для точной оценки необходима консультация с экспертами.",
                methanolPriceLabel: "Цена метанола",
                opexCosts: "OPEX",
                production: "Производство",
                transport: "Транспорт",
                taxes: "Налоги",
                capexCosts: "CAPEX",
                cumulativeCashflow: "Накопленный денежный поток (млн $)",
                years: "Годы",
                millionUsd: "Млн $",
                dataSources: "Источники данных:",
                methanolPrices: "Цены на метанол:",
                carbonTaxes: "Углеродные налоги:",
                transportCosts: "Транспортные расходы:",
                governmentSources: "официальные источники правительств стран",
                industryEstimates: "отраслевые оценки"
            },
            en: {
                title: "Methanol ROI Calculator",
                subtitle: "Investment analysis for flare gas to methanol projects",
                projectParameters: "Project Parameters",
                sourceCountry: "Source Country",
                destinationCountry: "Destination Country",
                selectCountry: "Select Country",
                gasVolume: "Gas Volume (million m³/year)",
                discountRate: "Discount Rate (%)",
                manualCapex: "Set CAPEX manually",
                capexPlaceholder: "CAPEX (million $)",
                methanolPrice: "Methanol Price ($/t)",
                opex: "OPEX ($/t)",
                carbonTax: "Carbon Tax ($/t CO₂)",
                transportType: "Transport Type",
                transportCost: "Transport Cost ($/t)",
                sensitivityAnalysis: "Sensitivity Analysis",
                sensitivityRange: "Analysis Range",
                financialMetrics: "Financial Metrics",
                npv: "NPV (million $)",
                roi: "ROI (%)",
                payback: "Payback Period (years)",
                capex: "CAPEX (million $)",
                opexValue: "OPEX (million $/year)",
                co2Reduction: "CO₂ Reduction (thousand t/year)",
                methanolProduction: "Methanol production (thousand t/year)",
                carbonSaving: "Carbon tax (saving)",
                sensitivityChart: "NPV Sensitivity Analysis",
                costStructure: "Cost Structure",
                cashFlow: "Cash Flow",
                disclaimer: "Important Notice",
                disclaimerText: "These are preliminary calculations for assessment purposes. Expert consultation required for accurate evaluation.",
                methanolPriceLabel: "Methanol Price",
                opexCosts: "OPEX",
                production: "Production",
                transport: "Transport",
                taxes: "Taxes",
                capexCosts: "CAPEX",
                cumulativeCashflow: "Cumulative Cash Flow (million $)",
                years: "Years",
                millionUsd: "Million $",
                dataSources: "Data Sources:",
                methanolPrices: "Methanol Prices:",
                carbonTaxes: "Carbon Taxes:",
                transportCosts: "Transport Costs:",
                governmentSources: "official government sources",
                industryEstimates: "industry estimates"
            }
        };

        this.currentLanguage = 'ru';
        this.charts = {};
        this.init();
    }

    init() {
        this.setupLanguage();
        this.populateCountrySelects();
        this.setupEventListeners();
        this.updateTransportTypeOptions();
        this.updateCalculations();
    }

    setupLanguage() {
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.dataset.lang;
                this.switchLanguage(lang);
            });
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        
        document.querySelectorAll('.language-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
        
        document.getElementById('html-root').lang = lang;
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (this.translations[lang] && this.translations[lang][key]) {
                element.textContent = this.translations[lang][key];
            }
        });
        
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (this.translations[lang] && this.translations[lang][key]) {
                element.placeholder = this.translations[lang][key];
            }
        });
        
        this.populateCountrySelects();
        this.updateTransportTypeOptions();
        this.updateCalculations();
    }

    populateCountrySelects() {
        const sourceSelect = document.getElementById('sourceCountry');
        const destSelect = document.getElementById('destinationCountry');
        
        const currentSource = sourceSelect.value;
        const currentDest = destSelect.value;
        
        sourceSelect.innerHTML = `<option value="">${this.t('selectCountry')}</option>`;
        destSelect.innerHTML = `<option value="">${this.t('selectCountry')}</option>`;
        
        const sortedCountries = [...this.data.countries].sort((a, b) => {
            const nameA = this.currentLanguage === 'ru' ? a.name_ru : a.name_en;
            const nameB = this.currentLanguage === 'ru' ? b.name_ru : b.name_en;
            return nameA.localeCompare(nameB);
        });
        
        sortedCountries.forEach(country => {
            const displayName = this.currentLanguage === 'ru' ? country.name_ru : country.name_en;
            const option1 = new Option(displayName, country.name);
            const option2 = new Option(displayName, country.name);
            sourceSelect.add(option1);
            destSelect.add(option2);
        });
        
        sourceSelect.value = currentSource;
        destSelect.value = currentDest;
    }

    updateTransportTypeOptions() {
        const transportSelect = document.getElementById('transportType');
        const currentValue = transportSelect.value;
        
        transportSelect.innerHTML = '';
        
        const options = [
            { value: 'maritime', ru: 'Морской', en: 'Maritime' },
            { value: 'rail', ru: 'Железнодорожный', en: 'Rail' },
            { value: 'road', ru: 'Автомобильный', en: 'Road' }
        ];
        
        options.forEach(option => {
            const text = this.currentLanguage === 'ru' ? option.ru : option.en;
            const optionElement = new Option(text, option.value);
            transportSelect.add(optionElement);
        });
        
        transportSelect.value = currentValue || 'maritime';
    }

    t(key) {
        return this.translations[this.currentLanguage][key] || key;
    }

    setupEventListeners() {
        // Основные контролы
        document.getElementById('sourceCountry').addEventListener('change', () => {   
            this.updateDestinationPrice();                                            
            this.updateCarbonTax();                                                 
        });            
        document.getElementById('destinationCountry').addEventListener('change', () => this.updateDestinationPrice());
        document.getElementById('gasVolume').addEventListener('input', () => this.updateCalculations());
        document.getElementById('discountRate').addEventListener('input', () => this.updateCalculations());
        document.getElementById('methanolPrice').addEventListener('input', () => this.updateCalculations());
        document.getElementById('opex').addEventListener('input', () => this.updateCalculations());
        document.getElementById('carbonTax').addEventListener('input', () => this.updateCalculations());
        document.getElementById('transportType').addEventListener('change', () => this.updateTransportCost());
        document.getElementById('transportCost').addEventListener('input', () => this.updateCalculations());

        // Контролы объема газа
        document.getElementById('gasVolumeSlider').addEventListener('input', (e) => {
            document.getElementById('gasVolume').value = e.target.value;
            this.updateVolumeButtons();
            this.updateCalculations();
        });

        document.getElementById('gasVolume').addEventListener('input', (e) => {
            document.getElementById('gasVolumeSlider').value = e.target.value;
            this.updateVolumeButtons();
        });

        document.querySelectorAll('.volume-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const volume = e.target.dataset.volume;
                document.getElementById('gasVolume').value = volume;
                document.getElementById('gasVolumeSlider').value = volume;
                this.updateVolumeButtons();
                this.updateCalculations();
            });
        });

        // Ручной CAPEX
        document.getElementById('useManualCapex').addEventListener('change', (e) => {
            const manualCapexInput = document.getElementById('manualCapex');
            manualCapexInput.disabled = !e.target.checked;
            if (!e.target.checked) {
                manualCapexInput.value = '';
            }
            this.updateCalculations();
        });

        document.getElementById('manualCapex').addEventListener('input', () => this.updateCalculations());

        // Анализ чувствительности
        document.getElementById('sensitivityRange').addEventListener('change', () => this.updateSensitivityAnalysis());
    }

    updateVolumeButtons() {
        const currentVolume = document.getElementById('gasVolume').value;
        document.querySelectorAll('.volume-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.volume === currentVolume);
        });
    }

    updateDestinationPrice() {
        const destCountry = this.data.countries.find(c => c.name === document.getElementById('destinationCountry').value);
        if (destCountry) {
            document.getElementById('methanolPrice').value = destCountry.price;
        }
        this.updateCalculations();
    }

    updateCarbonTax() {
        const sourceCountry = this.data.countries.find(c => c.name === document.getElementById('sourceCountry').value);
        if (sourceCountry) {
            document.getElementById('carbonTax').value = sourceCountry.tax;
        }
        this.updateCalculations();
    }
    
    updateTransportCost() {
        const transportType = document.getElementById('transportType').value;
        const cost = this.data.transportCosts[transportType]?.default || 25;
        document.getElementById('transportCost').value = cost;
        this.updateCalculations();
    }

    calcCapex(gasVolume) {
        const baseCapex = this.data.constants.baseCapex;
        const baseVolume = this.data.constants.baseGasVolume;
        
        if (gasVolume <= 15) {
            return gasVolume * (baseCapex / baseVolume) * 2;
        } else if (gasVolume <= baseVolume) {
            const factor15 = 2;
            const factor50 = 1;
            const factor = factor15 + (factor50 - factor15) * (gasVolume - 15) / (baseVolume - 15);
            return gasVolume * (baseCapex / baseVolume) * factor;
        } else {
            const scaleRatio = gasVolume / baseVolume;
            return baseCapex * scaleRatio;
        }
    }

    calculateMetrics() {
        const gasVolume = parseFloat(document.getElementById('gasVolume').value) || 0;
        const discountRate = parseFloat(document.getElementById('discountRate').value) || 8;
        const methanolPrice = parseFloat(document.getElementById('methanolPrice').value) || 450;
        const opex = parseFloat(document.getElementById('opex').value) || 175;
        const carbonTax = parseFloat(document.getElementById('carbonTax').value) || 0;
        const transportCost = parseFloat(document.getElementById('transportCost').value) || 25;
        const useManualCapex = document.getElementById('useManualCapex').checked;
        const manualCapexValue = parseFloat(document.getElementById('manualCapex').value) || 0;

        if (gasVolume < 10) {
            return null;
        }

        // Расчет производства метанола (тонн/год)
        const methanolProduction = gasVolume * 1000 / this.data.constants.gasToMethanolRatio;

        // Расчет CAPEX (млн $)
        const capex = useManualCapex ? manualCapexValue : this.calcCapex(gasVolume);

        // Расчет OPEX (млн $/год)
        const productionOpex = methanolProduction * opex / 1000000;
        const transportOpex = methanolProduction * transportCost / 1000000;
        const taxSaving = methanolProduction * this.data.constants.co2Factor * carbonTax / 1000000; // ← новое имя и смысл
        const totalOpex = productionOpex + transportOpex - taxSaving; // ← вычитаем экономию

        // Расчет выручки (млн $/год)
        const grossRevenue = methanolProduction * methanolPrice / 1000000;
        const netRevenue = grossRevenue;

        // Годовой денежный поток (млн $/год)
        const annualCashFlow = netRevenue - totalOpex;

        // NPV с учетом ставки дисконтирования
        const discountRateDecimal = discountRate / 100;
        let npv = -capex;
        for (let year = 1; year <= this.data.constants.projectLifetime; year++) {
            npv += annualCashFlow / Math.pow(1 + discountRateDecimal, year);
        }

        // ROI
        const roi = (npv / capex) * 100;

        // Срок окупаемости
        let paybackPeriod = capex / annualCashFlow;
        if (paybackPeriod < 0) paybackPeriod = Infinity;

        // Сокращение CO2
        const co2Reduction = methanolProduction * this.data.constants.co2Factor;

        return {
            gasVolume,
            methanolProduction,
            capex,
            opex: totalOpex,
            revenue: netRevenue,
            annualCashFlow,
            npv,
            roi,
            paybackPeriod,
            co2Reduction,
            productionOpex,
            transportOpex,
            taxSaving, 
            discountRate: discountRateDecimal
        };
    }

    updateCalculations() {
        const metrics = this.calculateMetrics();
        
        if (!metrics) {
            this.clearResults();
            return;
        }

        this.displayResults(metrics);
        this.updateCharts(metrics);
        this.updateSensitivityAnalysis();
    }

    displayResults(metrics) {
        document.getElementById('npvValue').textContent = `$${metrics.npv.toFixed(1)}`;
        document.getElementById('roiValue').textContent = `${metrics.roi.toFixed(1)}%`;
        document.getElementById('paybackValue').textContent = metrics.paybackPeriod === Infinity ? '∞' : `${metrics.paybackPeriod.toFixed(1)}`;
        document.getElementById('capexValue').textContent = `$${metrics.capex.toFixed(1)}`;
        document.getElementById('opexValue').textContent = `$${metrics.opex.toFixed(1)}`;
        document.getElementById('co2Value').textContent = `${(metrics.co2Reduction / 1000).toFixed(1)}`;
        document.getElementById('productionValue').textContent = `${(metrics.methanolProduction/1000).toFixed(1)}`;

        // Цветовые индикаторы
        const roiElement = document.getElementById('roiValue');
        const npvElement = document.getElementById('npvValue');
        
        roiElement.className = 'metric-value';
        npvElement.className = 'metric-value';
        
        if (metrics.roi > 20) {
            roiElement.classList.add('positive');
        } else if (metrics.roi < 0) {
            roiElement.classList.add('negative');
        }

        if (metrics.npv > 0) {
            npvElement.classList.add('positive');
        } else {
            npvElement.classList.add('negative');
        }
    }

    clearResults() {
        ['npvValue', 'roiValue', 'paybackValue', 'capexValue', 'opexValue', 'co2Value','productionValue' ].forEach(id => {
            document.getElementById(id).textContent = '-';
        });
    }

    updateCharts(metrics) {
        this.createCostsChart(metrics);
        this.createCashflowChart(metrics);
    }

    createCostsChart(metrics) {
        const ctx = document.getElementById('costsChart').getContext('2d');
        
        if (this.charts.costs) {
            this.charts.costs.destroy();
        }

        this.charts.costs = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [this.t('capexCosts'), this.t('production'), this.t('transport'), this.t('taxes')],
                datasets: [{
                    data: [
                        metrics.capex,
                        metrics.productionOpex,
                        metrics.transportOpex,
                        Math.abs(metrics.taxSaving)
                    ],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }

    createCashflowChart(metrics) {
        const ctx = document.getElementById('cashflowChart').getContext('2d');
        
        if (this.charts.cashflow) {
            this.charts.cashflow.destroy();
        }

        const years = [];
        const cumulativeCashflow = [];
        let cumulative = -metrics.capex;
        
        for (let year = 0; year <= this.data.constants.projectLifetime; year++) {
            years.push(year);
            if (year === 0) {
                cumulativeCashflow.push(cumulative);
            } else {
                cumulative += metrics.annualCashFlow;
                cumulativeCashflow.push(cumulative);
            }
        }

        this.charts.cashflow = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: years,
                datasets: [{
                    label: this.t('cumulativeCashflow'),
                    data: cumulativeCashflow,
                    backgroundColor: cumulativeCashflow.map(val => val >= 0 ? '#5D878F' : '#DB4545'),
                    borderColor: '#1FB8CD',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: this.t('millionUsd')
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: this.t('years')
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }

    updateSensitivityAnalysis() {
        const baseMetrics = this.calculateMetrics();
        if (!baseMetrics) return;
        
        const sensitivityRange = parseInt(document.getElementById('sensitivityRange').value);
        this.createSensitivityChart(baseMetrics, sensitivityRange);
    }

    calculateSensitivityMetrics(baseMetrics, priceChange, opexChange) {
        const gasVolume = parseFloat(document.getElementById('gasVolume').value) || 0;
        const discountRate = parseFloat(document.getElementById('discountRate').value) || 8;
        const methanolPrice = parseFloat(document.getElementById('methanolPrice').value) || 450;
        const opex = parseFloat(document.getElementById('opex').value) || 175;
        const carbonTax = parseFloat(document.getElementById('carbonTax').value) || 0;
        const transportCost = parseFloat(document.getElementById('transportCost').value) || 25;

        // Скорректированные значения
        const adjustedPrice = methanolPrice * (1 + priceChange / 100);
        const adjustedOpex = opex * (1 + opexChange / 100);
        const adjustedTransportCost = transportCost * (1 + opexChange / 100);

        const methanolProduction = gasVolume * 1000 / this.data.constants.gasToMethanolRatio;
        
        const grossRevenue = methanolProduction * adjustedPrice / 1000000;
        const productionOpex = methanolProduction * adjustedOpex / 1000000;
        const transportOpex = methanolProduction * adjustedTransportCost / 1000000;
        const taxSaving = methanolProduction * this.data.constants.co2Factor * carbonTax / 1000000;
        const totalOpex = productionOpex + transportOpex - taxSaving;
        
        const annualCashFlow = grossRevenue - totalOpex;
        
        const discountRateDecimal = discountRate / 100;
        let npv = -baseMetrics.capex;
        for (let year = 1; year <= this.data.constants.projectLifetime; year++) {
            npv += annualCashFlow / Math.pow(1 + discountRateDecimal, year);
        }
        
        return { npv };
    }

    createSensitivityChart(baseMetrics, range) {
        const ctx = document.getElementById('sensitivityChart').getContext('2d');
        
        if (this.charts.sensitivity) {
            this.charts.sensitivity.destroy();
        }

        const changes = [];
        const priceNPVs = [];
        const opexNPVs = [];
        
        for (let i = -range; i <= range; i += range/5) {
            changes.push(i);
            
            const priceMetrics = this.calculateSensitivityMetrics(baseMetrics, i, 0);
            priceNPVs.push(priceMetrics.npv);
            
            const opexMetrics = this.calculateSensitivityMetrics(baseMetrics, 0, i);
            opexNPVs.push(opexMetrics.npv);
        }

        this.charts.sensitivity = new Chart(ctx, {
            type: 'line',
            data: {
                labels: changes.map(x => `${x > 0 ? '+' : ''}${x}%`),
                datasets: [
                    {
                        label: this.t('methanolPriceLabel'),
                        data: priceNPVs,
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        fill: false,
                        tension: 0.1,
                        pointBackgroundColor: '#1FB8CD',
                        pointBorderColor: '#1FB8CD',
                        pointRadius: 4
                    },
                    {
                        label: this.t('opexCosts'),
                        data: opexNPVs,
                        borderColor: '#FFC185',
                        backgroundColor: 'rgba(255, 193, 133, 0.1)',
                        fill: false,
                        tension: 0.1,
                        pointBackgroundColor: '#FFC185',
                        pointBorderColor: '#FFC185',
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: this.currentLanguage === 'ru' ? 'Изменение параметра' : 'Parameter Change'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: `NPV (${this.t('millionUsd')})`
                        },
                        grid: {
                            display: true
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
}

// Инициализация калькулятора при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    new MethanolCalculator();
});