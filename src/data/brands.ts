import { Brand } from '@/types';

export const brands: Brand[] = [
    {
        id: 'alfa-romeo',
        name: 'Alfa Romeo',
        logo: 'https://logo.clearbit.com/alfaromeo.com',
        models: [
            { id: 'giulia', name: 'Giulia', variants: [{ id: 'alfa-romeo-giulia-2-0-turbo', name: '2.0 Turbo', years: '2016-2024', slug: 'alfa-romeo-giulia-2-0-turbo' }] },
            { id: 'giulietta', name: 'Giulietta', variants: [{ id: 'alfa-romeo-giulietta-1-4', name: '1.4 MultiAir', years: '2010-2020', slug: 'alfa-romeo-giulietta-1-4' }] },
            { id: 'stelvio', name: 'Stelvio', variants: [{ id: 'alfa-romeo-stelvio-2-0-turbo', name: '2.0 Turbo', years: '2017-2024', slug: 'alfa-romeo-stelvio-2-0-turbo' }] },
        ]
    },
    {
        id: 'audi',
        name: 'Audi',
        logo: 'https://logo.clearbit.com/audi.com',
        models: [
            { id: 'a1', name: 'A1', variants: [{ id: 'audi-a1-1-4-tfsi', name: '1.4 TFSI', years: '2011-2018', slug: 'audi-a1-1-4-tfsi' }] },
            { id: 'a3', name: 'A3', variants: [{ id: 'audi-a3-8v-1-6-tdi', name: '1.6 TDI Ambition', years: '2012-2017', slug: 'audi-a3-8v-1-6-tdi' }, { id: 'audi-a3-8y-35-tfsi', name: '35 TFSI', years: '2020-2024', slug: 'audi-a3-8y-35-tfsi' }, { id: 'audi-a3-8v-1-4-tfsi', name: '8V 1.4 TFSI', years: '2012-2020', slug: 'audi-a3-8v-1-4-tfsi' }, { id: 'audi-a3-sedan-8v-tfsi', name: 'Sedan 35 TFSI', years: '2013-2020', slug: 'audi-a3-sedan-8v-tfsi' }] },
            { id: 'a4', name: 'A4', variants: [{ id: 'audi-a4-b9-2-0-tfsi', name: '2.0 TFSI Advanced', years: '2016-2024', slug: 'audi-a4-b9-2-0-tfsi' }, { id: 'audi-a4-b8-2-0-tdi', name: 'B8 2.0 TDI', years: '2008-2015', slug: 'audi-a4-b8-2-0-tdi' }, { id: 'audi-a4-b9-tdi', name: 'B9 40 TDI Quattro', years: '2016-2024', slug: 'audi-a4-b9-tdi' }] },
            { id: 'a6', name: 'A6', variants: [{ id: 'audi-a6-c7-2-0-tdi', name: '2.0 TDI', years: '2011-2018', slug: 'audi-a6-c7-2-0-tdi' }, { id: 'audi-a6-c8-40-tdi', name: '40 TDI Quattro S-Line', years: '2018-2024', slug: 'audi-a6-c8-40-tdi' }] },
            { id: 'q2', name: 'Q2', variants: [{ id: 'audi-q2-1-6-tdi', name: '1.6 TDI Design', years: '2017-2023', slug: 'audi-q2-1-6-tdi' }] },
            { id: 'q3', name: 'Q3', variants: [{ id: 'audi-q3-35-tfsi', name: '35 TFSI', years: '2018-2024', slug: 'audi-q3-35-tfsi' }] },
            { id: 'q5', name: 'Q5', variants: [{ id: 'audi-q5-40-tdi', name: '40 TDI Quattro S-Line', years: '2017-2024', slug: 'audi-q5-40-tdi' }] },
            { id: 'q7', name: 'Q7', variants: [{ id: 'audi-q7-3-0-tdi', name: '3.0 TDI', years: '2015-2023', slug: 'audi-q7-3-0-tdi' }] },
        ]
    },
    {
        id: 'bmw',
        name: 'BMW',
        logo: 'https://logo.clearbit.com/bmw.com',
        models: [
            { id: '1-serisi', name: '1 Serisi', variants: [{ id: 'bmw-116i-f20', name: '116i 1.6 Turbo F20', years: '2011-2019', slug: 'bmw-116i-f20' }, { id: 'bmw-118i-f40', name: '118i 1.5 Turbo F40', years: '2019-2024', slug: 'bmw-118i-f40' }] },
            { id: '2-serisi', name: '2 Serisi', variants: [{ id: 'bmw-218i-gran-coupe', name: '218i Gran Coupe 1.5 Turbo M Sport', years: '2020-2024', slug: 'bmw-218i-gran-coupe' }, { id: 'bmw-218i-gran-coupe-msport', name: '218i Gran Coupé M Sport', years: '2020-2025', slug: 'bmw-218i-gran-coupe-msport' }] },
            { id: '3-series', name: '3 Series', variants: [{ id: 'bmw-320i-f30-n20', name: '320i ED 40. Yıl / Sport Line', years: '2012-2019', slug: 'bmw-320i-f30-n20' }] },
            { id: '3-serisi', name: '3 Serisi', variants: [{ id: 'bmw-f30-320d', name: '320d', years: '2012-2018', slug: 'bmw-f30-320d' }, { id: 'bmw-320d-f30', name: '320d 2.0 Dizel', years: '2012-2018', slug: 'bmw-320d-f30' }, { id: 'bmw-320d-g20', name: '320d 2.0 Dizel xDrive M Sport', years: '2019-2025', slug: 'bmw-320d-g20' }, { id: 'bmw-g20-320i', name: '320i 2.0 Turbo M Sport', years: '2019-2025', slug: 'bmw-g20-320i' }, { id: 'bmw-320i-f30-ed', name: '320i ED 1.6 Turbo (40. Yıl / Sport Line)', years: '2012-2019', slug: 'bmw-320i-f30-ed' }, { id: 'bmw-f30-320i', name: 'F30 320i', years: '2012-2018', slug: 'bmw-f30-320i' }, { id: 'bmw-3-serisi-f30-320i', name: 'F30 320i', years: '2012-2018', slug: 'bmw-3-serisi-f30-320i' }] },
            { id: '4-serisi', name: '4 Serisi', variants: [{ id: 'bmw-420i-gran-coupe-g26', name: '420i Gran Coupe 2.0 Turbo M Sport', years: '2021-2025', slug: 'bmw-420i-gran-coupe-g26' }] },
            { id: '5-series', name: '5 Series', variants: [{ id: 'bmw-520i-f10-n20', name: '520i Executive / M Sport', years: '2013-2017', slug: 'bmw-520i-f10-n20' }] },
            { id: '5-serisi', name: '5 Serisi', variants: [{ id: 'bmw-520d-f10', name: '520d 2.0 Dizel', years: '2010-2017', slug: 'bmw-520d-f10' }, { id: 'bmw-520d-g30', name: '520d 2.0 Dizel xDrive M Sport', years: '2017-2023', slug: 'bmw-520d-g30' }, { id: 'bmw-520i-f10', name: '520i 1.6 Turbo Executive / M Sport', years: '2010-2017', slug: 'bmw-520i-f10' }, { id: 'bmw-520i-g30', name: '520i 2.0 Turbo M Sport / Special Edition', years: '2017-2023', slug: 'bmw-520i-g30' }, { id: 'bmw-520i-g30-m-sport', name: '520i G30 M Sport', years: '2017-2023', slug: 'bmw-520i-g30-m-sport' }, { id: 'bmw-g30-520i', name: '520i Special Edition M Sport', years: '2017-2023', slug: 'bmw-g30-520i' }, { id: 'bmw-f10-520d', name: 'F10 520d', years: '2010-2016', slug: 'bmw-f10-520d' }, { id: 'bmw-5-serisi-f10-520d', name: 'F10 520d', years: '2010-2016', slug: 'bmw-5-serisi-f10-520d' }, { id: 'bmw-f10-520i', name: 'F10 520i', years: '2010-2016', slug: 'bmw-f10-520i' }, { id: 'bmw-5-serisi-f10-520i', name: 'F10 520i', years: '2010-2016', slug: 'bmw-5-serisi-f10-520i' }] },
            { id: 'x1', name: 'X1', variants: [{ id: 'bmw-x1-sdrive18i', name: 'sDrive18i 1.5 Turbo', years: '2015-2022', slug: 'bmw-x1-sdrive18i' }, { id: 'bmw-x1-sdrive18i-u11', name: 'sDrive18i 1.5 Turbo U11', years: '2022-2025', slug: 'bmw-x1-sdrive18i-u11' }] },
            { id: 'x2', name: 'X2', variants: [{ id: 'bmw-x2-sdrive18i', name: 'sDrive18i', years: '2018-2024', slug: 'bmw-x2-sdrive18i' }] },
            { id: 'x3', name: 'X3', variants: [{ id: 'bmw-x3-xdrive20d-g01', name: 'xDrive20d 2.0 Dizel M Sport', years: '2017-2024', slug: 'bmw-x3-xdrive20d-g01' }, { id: 'bmw-x3-xdrive20i', name: 'xDrive20i 2.0 Turbo M Sport', years: '2017-2024', slug: 'bmw-x3-xdrive20i' }] },
            { id: 'x5', name: 'X5', variants: [{ id: 'bmw-x5-xdrive30d-g05', name: 'xDrive30d 3.0 Dizel M Sport', years: '2018-2024', slug: 'bmw-x5-xdrive30d-g05' }, { id: 'bmw-x5-xdrive30d', name: 'xDrive30d M Sport', years: '2018-2024', slug: 'bmw-x5-xdrive30d' }] },
        ]
    },
    {
        id: 'chery',
        name: 'Chery',
        logo: 'https://logo.clearbit.com/cheryinternational.com',
        models: [
            { id: 'omoda-5', name: 'Omoda 5', variants: [{ id: 'chery-omoda-5-2025-facelift', name: '1.5 TGDI Facelift (CVT)', years: '2025', slug: 'chery-omoda-5-2025-facelift' }, { id: 'chery-omoda-5', name: '1.6 TGDI', years: '2023-2024', slug: 'chery-omoda-5' }, { id: 'chery-omoda-5-new', name: '1.6 TGDI Excellent', years: '2023-2024', slug: 'chery-omoda-5-new' }, { id: 'chery-omoda-5-1-6-tgdi', name: '1.6 TGDI Luxury (7DCT)', years: '2023-2024', slug: 'chery-omoda-5-1-6-tgdi' }] },
            { id: 'omoda-7', name: 'Omoda 7', variants: [{ id: 'chery-omoda-7-2025', name: '1.5 TGDI (CVT)', years: '2025', slug: 'chery-omoda-7-2025' }] },
            { id: 'tiggo-4-pro', name: 'Tiggo 4 Pro', variants: [{ id: 'chery-tiggo-4-pro', name: '1.5 CVT Distinctive', years: '2023-2025', slug: 'chery-tiggo-4-pro' }] },
            { id: 'tiggo-7-pro', name: 'Tiggo 7 Pro', variants: [{ id: 'chery-tiggo-7-pro-1-6-tgdi', name: '1.6 TGDI Distinctive (7DCT)', years: '2023-2024', slug: 'chery-tiggo-7-pro-1-6-tgdi' }] },
            { id: 'tiggo-7-pro-max', name: 'Tiggo 7 Pro Max', variants: [{ id: 'chery-tiggo-7-pro-max-2025', name: '1.5 TGDI (CVT)', years: '2025', slug: 'chery-tiggo-7-pro-max-2025' }] },
            { id: 'tiggo-8-pro', name: 'Tiggo 8 Pro', variants: [{ id: 'chery-tiggo-8-pro', name: '1.6 TGDI Excellent', years: '2023-2024', slug: 'chery-tiggo-8-pro' }, { id: 'chery-tiggo-8-pro-1-6-tgdi', name: '1.6 TGDI Excellent (7DCT)', years: '2023-2024', slug: 'chery-tiggo-8-pro-1-6-tgdi' }] },
            { id: 'tiggo-8-pro-max', name: 'Tiggo 8 Pro Max', variants: [{ id: 'chery-tiggo-8-pro-max-2025', name: '1.5 TGDI (CVT)', years: '2025', slug: 'chery-tiggo-8-pro-max-2025' }] },
            { id: 'tiggo-8-pro-e-', name: 'Tiggo 8 Pro e+', variants: [{ id: 'chery-tiggo-8-pro-e-plus-phev', name: '1.5 TGDI PHEV', years: '2024-2025', slug: 'chery-tiggo-8-pro-e-plus-phev' }] },
        ]
    },
    {
        id: 'citroen',
        name: 'Citroen',
        logo: 'https://logo.clearbit.com/citroen.com',
        models: [
            { id: 'berlingo', name: 'Berlingo', variants: [{ id: 'citroen-berlingo-1-5-bluehdi', name: '1.5 BlueHDi 130 HP Shine Bold (EAT8)', years: '2019-2024', slug: 'citroen-berlingo-1-5-bluehdi' }] },
            { id: 'c-elys-e', name: 'C-Elysée', variants: [{ id: 'citroen-celysee-1-5-bluehdi', name: '1.5 BlueHDi 100 HP Shine', years: '2018-2024', slug: 'citroen-celysee-1-5-bluehdi' }] },
            { id: 'c3', name: 'C3', variants: [{ id: 'citroen-c3-1-2-puretech', name: '1.2 PureTech 82 HP (Manuel)', years: '2016-2024', slug: 'citroen-c3-1-2-puretech' }] },
            { id: 'c3-aircross', name: 'C3 Aircross', variants: [{ id: 'citroen-c3-aircross-new-2024', name: '1.2 PureTech 100 HP Yeni Nesil', years: '2024-2025', slug: 'citroen-c3-aircross-new-2024' }, { id: 'citroen-c3-aircross-1-2-puretech', name: '1.2 PureTech 130 HP Turbo (EAT6)', years: '2017-2024', slug: 'citroen-c3-aircross-1-2-puretech' }, { id: 'citroen-c3-aircross-new-1-2', name: '1.2 PureTech Shine', years: '2022-2025', slug: 'citroen-c3-aircross-new-1-2' }] },
            { id: 'c4', name: 'C4', variants: [{ id: 'citroen-c4-1-2-puretech', name: '1.2 PureTech 130 HP (EAT8)', years: '2021-2024', slug: 'citroen-c4-1-2-puretech' }] },
            { id: 'c4-cactus', name: 'C4 Cactus', variants: [{ id: 'citroen-c4-cactus-1-2-puretech', name: '1.2 PureTech 110 HP (EAT6)', years: '2014-2020', slug: 'citroen-c4-cactus-1-2-puretech' }] },
            { id: 'c4-picasso', name: 'C4 Picasso', variants: [{ id: 'citroen-c4-picasso-1-6-ehdi', name: '1.6 e-HDi 115 HP', years: '2013-2018', slug: 'citroen-c4-picasso-1-6-ehdi' }] },
            { id: 'c4-x', name: 'C4 X', variants: [{ id: 'citroen-c4-x-1-2-puretech', name: '1.2 PureTech 130 HP (EAT8)', years: '2023-2025', slug: 'citroen-c4-x-1-2-puretech' }] },
            { id: 'c5-aircross', name: 'C5 Aircross', variants: [{ id: 'citroen-c5-aircross-1-5-bluehdi', name: '1.5 BlueHDi 130 HP Shine (EAT8)', years: '2019-2024', slug: 'citroen-c5-aircross-1-5-bluehdi' }] },
            { id: '-c4', name: 'ë-C4', variants: [{ id: 'citroen-ec4-elektrikli', name: 'Elektrikli 136 HP (50 kWh)', years: '2021-2024', slug: 'citroen-ec4-elektrikli' }] },
        ]
    },
    {
        id: 'cupra',
        name: 'Cupra',
        logo: 'https://logo.clearbit.com/cupraofficial.com',
        models: [
            { id: 'born', name: 'Born', variants: [{ id: 'cupra-born-58', name: '58 kWh', years: '2022-2024', slug: 'cupra-born-58' }] },
            { id: 'formentor', name: 'Formentor', variants: [{ id: 'cupra-formentor-1-5-tsi', name: '1.5 TSI', years: '2020-2024', slug: 'cupra-formentor-1-5-tsi' }] },
            { id: 'leon', name: 'Leon', variants: [{ id: 'cupra-leon-2-0-vz', name: '2.0 TSI VZ 300hp', years: '2020-2024', slug: 'cupra-leon-2-0-vz' }] },
        ]
    },
    {
        id: 'ds',
        name: 'DS',
        logo: 'https://logo.clearbit.com/dsautomobiles.com',
        models: [
            { id: 'ds3-crossback', name: 'DS3 Crossback', variants: [{ id: 'ds-3-crossback-puretech', name: '1.2 PureTech 130 HP (EAT8)', years: '2019-2024', slug: 'ds-3-crossback-puretech' }] },
            { id: 'ds4', name: 'DS4', variants: [{ id: 'ds-4-puretech', name: '1.6 PureTech 180 HP Opera (EAT8)', years: '2021-2024', slug: 'ds-4-puretech' }] },
            { id: 'ds5', name: 'DS5', variants: [{ id: 'ds-5-1-6-thp', name: '1.6 THP 165 HP (EAT6)', years: '2015-2018', slug: 'ds-5-1-6-thp' }] },
            { id: 'ds7', name: 'DS7', variants: [{ id: 'ds-7-crossback-e-tense-phev', name: 'E-Tense 4x4 300 HP PHEV', years: '2019-2024', slug: 'ds-7-crossback-e-tense-phev' }] },
            { id: 'ds7-crossback', name: 'DS7 Crossback', variants: [{ id: 'ds-7-crossback-puretech', name: '1.6 PureTech 180 HP Rivoli (EAT8)', years: '2018-2024', slug: 'ds-7-crossback-puretech' }] },
        ]
    },
    {
        id: 'dacia',
        name: 'Dacia',
        logo: 'https://logo.clearbit.com/dacia.com.tr',
        models: [
            { id: 'dokker', name: 'Dokker', variants: [{ id: 'dacia-dokker-1-5-dci', name: '1.5 dCi', years: '2012-2021', slug: 'dacia-dokker-1-5-dci' }] },
            { id: 'duster', name: 'Duster', variants: [{ id: 'dacia-duster-1-3-tce', name: '1.3 TCe', years: '2018-2024', slug: 'dacia-duster-1-3-tce' }] },
            { id: 'jogger', name: 'Jogger', variants: [{ id: 'dacia-jogger-1-0-tce', name: '1.0 TCe', years: '2022-2024', slug: 'dacia-jogger-1-0-tce' }, { id: 'dacia-jogger-hybrid-140', name: 'Hybrid 140 Extreme', years: '2023-2025', slug: 'dacia-jogger-hybrid-140' }] },
            { id: 'lodgy', name: 'Lodgy', variants: [{ id: 'dacia-lodgy-1-5-dci', name: '1.5 dCi', years: '2012-2022', slug: 'dacia-lodgy-1-5-dci' }] },
            { id: 'sandero', name: 'Sandero', variants: [{ id: 'dacia-sandero-stepway-0-9-tce', name: 'Stepway 0.9 TCe', years: '2012-2020', slug: 'dacia-sandero-stepway-0-9-tce' }, { id: 'dacia-sandero-stepway-1-0-tce', name: 'Stepway 1.0 TCe', years: '2021-2024', slug: 'dacia-sandero-stepway-1-0-tce' }] },
            { id: 'spring', name: 'Spring', variants: [{ id: 'dacia-spring-electric', name: 'Electric', years: '2022-2024', slug: 'dacia-spring-electric' }] },
        ]
    },
    {
        id: 'fiat',
        name: 'Fiat',
        logo: 'https://logo.clearbit.com/fiat.com',
        models: [
            { id: '500', name: '500', variants: [{ id: 'fiat-500-1-2-pop', name: '1.2 Pop/Lounge 69 HP', years: '2007-2023', slug: 'fiat-500-1-2-pop' }] },
            { id: '500l', name: '500L', variants: [{ id: 'fiat-500l-1-3-multijet', name: '1.3 MultiJet 85 HP Pop Star', years: '2012-2022', slug: 'fiat-500l-1-3-multijet' }] },
            { id: '500x', name: '500X', variants: [{ id: 'fiat-500x-1-6-multijet', name: '1.6 MultiJet 120 HP Cross (DCT)', years: '2015-2023', slug: 'fiat-500x-1-6-multijet' }] },
            { id: 'doblo', name: 'Doblo', variants: [{ id: 'fiat-doblo-1-3-multijet', name: '1.3 MultiJet 90 HP Combi Premio', years: '2010-2022', slug: 'fiat-doblo-1-3-multijet' }, { id: 'fiat-doblo-1-6-multijet', name: '1.6 MultiJet 120 HP Combi Premio', years: '2010-2022', slug: 'fiat-doblo-1-6-multijet' }] },
            { id: 'egea', name: 'Egea', variants: [{ id: 'fiat-egea-1-0-turbo-hybrid', name: '1.0 FireFly Turbo Hybrid 100 HP (DCT)', years: '2024-2025', slug: 'fiat-egea-1-0-turbo-hybrid' }, { id: 'fiat-egea-1-3-multijet', name: '1.3 MultiJet 95 HP Sedan (Manuel)', years: '2015-2024', slug: 'fiat-egea-1-3-multijet' }, { id: 'fiat-egea-1-4-fire', name: '1.4 Fire 95 HP Sedan (Manuel)', years: '2015-2024', slug: 'fiat-egea-1-4-fire' }] },
            { id: 'egea-cross', name: 'Egea Cross', variants: [{ id: 'fiat-egea-cross-1-4', name: '1.4 Fire 95 HP (Manuel)', years: '2020-2024', slug: 'fiat-egea-cross-1-4' }, { id: 'fiat-egea-cross-1-6-multijet', name: '1.6 MultiJet 130 HP DCT (Otomatik)', years: '2021-2024', slug: 'fiat-egea-cross-1-6-multijet' }] },
            { id: 'egea-station-wagon', name: 'Egea Station Wagon', variants: [{ id: 'fiat-egea-sw-1-6-multijet', name: '1.6 MultiJet 120 HP Lounge (DCT)', years: '2017-2024', slug: 'fiat-egea-sw-1-6-multijet' }] },
            { id: 'fiorino', name: 'Fiorino', variants: [{ id: 'fiat-fiorino-1-3-multijet', name: '1.3 MultiJet 75 HP Combi', years: '2008-2024', slug: 'fiat-fiorino-1-3-multijet' }] },
            { id: 'linea', name: 'Linea', variants: [{ id: 'fiat-linea-1-3-multijet', name: '1.3 MultiJet 95 HP', years: '2007-2017', slug: 'fiat-linea-1-3-multijet' }] },
            { id: 'panda', name: 'Panda', variants: [{ id: 'fiat-panda-1-2-fire', name: '1.2 Fire 69 HP', years: '2012-2024', slug: 'fiat-panda-1-2-fire' }] },
            { id: 'punto', name: 'Punto', variants: [{ id: 'fiat-punto-evo-1-3-multijet', name: '1.3 MultiJet 75 HP Evo', years: '2010-2018', slug: 'fiat-punto-evo-1-3-multijet' }] },
            { id: '-ahin', name: 'Şahin', variants: [{ id: 'tofas-sahin-1-6-ie', name: '1.6 ie S', years: '1998-2002', slug: 'tofas-sahin-1-6-ie' }] },
        ]
    },
    {
        id: 'ford',
        name: 'Ford',
        logo: 'https://logo.clearbit.com/ford.com',
        models: [
            { id: 'ecosport', name: 'EcoSport', variants: [{ id: 'ford-ecosport-1-0-ecoboost', name: '1.0 EcoBoost 125 HP', years: '2014-2022', slug: 'ford-ecosport-1-0-ecoboost' }] },
            { id: 'fiesta', name: 'Fiesta', variants: [{ id: 'ford-fiesta-1-0-ecoboost', name: '1.0 EcoBoost 100/125 HP', years: '2017-2023', slug: 'ford-fiesta-1-0-ecoboost' }] },
            { id: 'focus', name: 'Focus', variants: [{ id: 'ford-focus-3-5-1-5-tdci-powershift', name: '1.5 TDCi Titanium (Makyajlı)', years: '2015-2018', slug: 'ford-focus-3-5-1-5-tdci-powershift' }, { id: 'ford-focus-1-5-ti-vct', name: '1.5 Ti-VCT 123 HP (6AT)', years: '2018-2024', slug: 'ford-focus-1-5-ti-vct' }, { id: 'ford-focus-3-1-6-tdci', name: 'Mk3 1.6 TDCi 115 HP (Powershift)', years: '2011-2014', slug: 'ford-focus-3-1-6-tdci' }, { id: 'ford-focus-3-5-1-5-tdci', name: 'Mk3.5 1.5 TDCi 120 HP Titanium (Powershift)', years: '2015-2018', slug: 'ford-focus-3-5-1-5-tdci' }] },
            { id: 'kuga', name: 'Kuga', variants: [{ id: 'ford-kuga-1-5-ecoblue', name: '1.5 EcoBlue 120 HP Titanium (8AT)', years: '2020-2024', slug: 'ford-kuga-1-5-ecoblue' }, { id: 'ford-kuga-fhev-2-5', name: '2.5 FHEV 190 HP Titanium (CVT)', years: '2020-2024', slug: 'ford-kuga-fhev-2-5' }] },
            { id: 'mondeo', name: 'Mondeo', variants: [{ id: 'ford-mondeo-1-5-ecoboost', name: '1.5 EcoBoost 160 HP Titanium (6AT)', years: '2014-2022', slug: 'ford-mondeo-1-5-ecoboost' }] },
            { id: 'puma', name: 'Puma', variants: [{ id: 'ford-puma-1-0-ecoboost', name: '1.0 EcoBoost 125 HP ST-Line (6AT)', years: '2020-2024', slug: 'ford-puma-1-0-ecoboost' }, { id: 'ford-puma-stline-1-0-hybrid', name: '1.0 EcoBoost MHEV 155 HP ST-Line X', years: '2020-2024', slug: 'ford-puma-stline-1-0-hybrid' }] },
            { id: 'ranger', name: 'Ranger', variants: [{ id: 'ford-ranger-2-0-ecoblue', name: '2.0 EcoBlue / 3.2 TDCi Wildtrak', years: '2015-2024', slug: 'ford-ranger-2-0-ecoblue' }, { id: 'ford-ranger-wildtrak', name: '3.2 / 2.0 Wildtrak', years: '2015-2022', slug: 'ford-ranger-wildtrak' }] },
            { id: 's-max', name: 'S-Max', variants: [{ id: 'ford-smax-2-0-tdci', name: '2.0 TDCi', years: '2015-2022', slug: 'ford-smax-2-0-tdci' }] },
            { id: 'tourneo-connect', name: 'Tourneo Connect', variants: [{ id: 'ford-tourneo-connect-1-5-tdci', name: '1.5 EcoBlue 120 HP Titanium (8AT)', years: '2018-2024', slug: 'ford-tourneo-connect-1-5-tdci' }] },
            { id: 'tourneo-courier', name: 'Tourneo Courier', variants: [{ id: 'ford-tourneo-courier-1-5-tdci', name: '1.5 TDCi 100 HP Titanium Plus', years: '2014-2024', slug: 'ford-tourneo-courier-1-5-tdci' }] },
            { id: 'transit-custom', name: 'Transit Custom', variants: [{ id: 'ford-transit-custom-2-0-ecoblue', name: '2.0 EcoBlue 130 HP Titanium (6MT)', years: '2018-2024', slug: 'ford-transit-custom-2-0-ecoblue' }] },
        ]
    },
    {
        id: 'honda',
        name: 'Honda',
        logo: 'https://logo.clearbit.com/honda.com',
        models: [
            { id: 'accord', name: 'Accord', variants: [{ id: 'honda-accord-2-0', name: '2.0 i-VTEC 155 HP Executive (5AT)', years: '2008-2015', slug: 'honda-accord-2-0' }] },
            { id: 'cr-v', name: 'CR-V', variants: [{ id: 'honda-crv-hybrid', name: '2.0 i-MMD e:HEV 184 HP (eCVT)', years: '2019-2023', slug: 'honda-crv-hybrid' }] },
            { id: 'city', name: 'City', variants: [{ id: 'honda-city-1-5-i-vtec', name: '1.5 i-VTEC 121 HP Executive (CVT)', years: '2021-2025', slug: 'honda-city-1-5-i-vtec' }, { id: 'honda-city-1-5-ivtec', name: '1.5 i-VTEC Executive', years: '2021-2024', slug: 'honda-city-1-5-ivtec' }] },
            { id: 'civic', name: 'Civic', variants: [{ id: 'honda-civic-fc5-1-6-ivtec', name: '1.6 i-VTEC Eco', years: '2016-2021', slug: 'honda-civic-fc5-1-6-ivtec' }, { id: 'honda-civic-fb7-eco', name: 'FB7 1.6 i-VTEC 125 HP Eco Elegance (CVT)', years: '2012-2016', slug: 'honda-civic-fb7-eco' }, { id: 'honda-civic-fc5-1-6-vtec', name: 'FC5 1.6 i-VTEC 125 HP Eco Executive (CVT)', years: '2016-2021', slug: 'honda-civic-fc5-1-6-vtec' }, { id: 'honda-civic-fe1-1-5-turbo', name: 'FE1 1.5 VTEC Turbo 182 HP (CVT)', years: '2022-2025', slug: 'honda-civic-fe1-1-5-turbo' }, { id: 'honda-civic-fk7-1-0-turbo', name: 'FK7 1.0 Turbo', years: '2017-2021', slug: 'honda-civic-fk7-1-0-turbo' }] },
            { id: 'civic-fb7', name: 'Civic FB7', variants: [{ id: 'honda-civic-fb7-1-6-eco', name: '1.6 i-VTEC Eco Elegance', years: '2012-2016', slug: 'honda-civic-fb7-1-6-eco' }] },
            { id: 'hr-v', name: 'HR-V', variants: [{ id: 'honda-hrv-ehev-hybrid', name: '1.5 e:HEV 131 HP (eCVT)', years: '2022-2025', slug: 'honda-hrv-ehev-hybrid' }, { id: 'honda-hrv-1-5-ivtec', name: '1.5 i-VTEC 130 HP Executive (CVT)', years: '2015-2021', slug: 'honda-hrv-1-5-ivtec' }] },
            { id: 'jazz', name: 'Jazz', variants: [{ id: 'honda-jazz-1-3-ivtec', name: '1.5 e:HEV Hybrid', years: '2020-2024', slug: 'honda-jazz-1-3-ivtec' }, { id: 'honda-jazz-1-5-ehev', name: '1.5 e:HEV Hybrid 109 HP (eCVT)', years: '2020-2024', slug: 'honda-jazz-1-5-ehev' }] },
            { id: 'zr-v', name: 'ZR-V', variants: [{ id: 'honda-zrv-2-0-ehev', name: '2.0 e:HEV 184 HP Sport (eCVT)', years: '2023-2025', slug: 'honda-zrv-2-0-ehev' }] },
        ]
    },
    {
        id: 'hyundai',
        name: 'Hyundai',
        logo: 'https://logo.clearbit.com/hyundai.com',
        models: [
            { id: 'accent-blue', name: 'Accent Blue', variants: [{ id: 'hyundai-accent-blue-1-6-crdi', name: '1.6 CRDi DCT', years: '2011-2018', slug: 'hyundai-accent-blue-1-6-crdi' }] },
            { id: 'bayon', name: 'Bayon', variants: [{ id: 'hyundai-bayon-1-4-mpi', name: '1.4 MPI', years: '2021-2024', slug: 'hyundai-bayon-1-4-mpi' }] },
            { id: 'elantra', name: 'Elantra', variants: [{ id: 'hyundai-elantra-1-6-mpi', name: '1.6 MPI', years: '2021-2024', slug: 'hyundai-elantra-1-6-mpi' }] },
            { id: 'kona', name: 'Kona', variants: [{ id: 'hyundai-kona-1-0-tgdi', name: '1.0 T-GDI', years: '2017-2023', slug: 'hyundai-kona-1-0-tgdi' }, { id: 'hyundai-kona-1-6-tgdi', name: '1.6 T-GDI Elite', years: '2018-2023', slug: 'hyundai-kona-1-6-tgdi' }, { id: 'hyundai-kona-ev-39kwh', name: 'EV 39.2 kWh Style', years: '2019-2023', slug: 'hyundai-kona-ev-39kwh' }] },
            { id: 'santa-fe', name: 'Santa Fe', variants: [{ id: 'hyundai-santafe-2-2-crdi', name: '2.2 CRDi', years: '2019-2024', slug: 'hyundai-santafe-2-2-crdi' }] },
            { id: 'tucson', name: 'Tucson', variants: [{ id: 'hyundai-tucson-1-6-t-gdi', name: '1.6 T-GDI', years: '2021-2024', slug: 'hyundai-tucson-1-6-t-gdi' }, { id: 'hyundai-tucson-1-6-tgdi', name: '1.6 T-GDI Elite', years: '2020-2024', slug: 'hyundai-tucson-1-6-tgdi' }] },
            { id: 'i10', name: 'i10', variants: [{ id: 'hyundai-i10-1-2-mpi', name: '1.2 MPI', years: '2020-2024', slug: 'hyundai-i10-1-2-mpi' }] },
            { id: 'i20', name: 'i20', variants: [{ id: 'hyundai-i20-1-4-jump', name: '1.4 Jump', years: '2020-2024', slug: 'hyundai-i20-1-4-jump' }, { id: 'hyundai-i20-1-4-mpi', name: '1.4 MPI Style', years: '2014-2020', slug: 'hyundai-i20-1-4-mpi' }, { id: 'hyundai-i20-troy-1-4', name: '1.4 Troy', years: '2009-2014', slug: 'hyundai-i20-troy-1-4' }] },
            { id: 'ix35', name: 'ix35', variants: [{ id: 'hyundai-ix35-1-6-gdi', name: '1.6 GDI Style', years: '2010-2015', slug: 'hyundai-ix35-1-6-gdi' }] },
        ]
    },
    {
        id: 'jaguar',
        name: 'Jaguar',
        logo: 'https://logo.clearbit.com/jaguar.com',
        models: [
            { id: 'f-pace', name: 'F-Pace', variants: [{ id: 'jaguar-f-pace-2-0-d', name: '2.0d Ingenium 180 HP R-Sport (8AT)', years: '2016-2023', slug: 'jaguar-f-pace-2-0-d' }] },
        ]
    },
    {
        id: 'jeep',
        name: 'Jeep',
        logo: 'https://logo.clearbit.com/jeep.com',
        models: [
            { id: 'compass', name: 'Compass', variants: [{ id: 'jeep-compass-1-3-turbo', name: '1.3 T4 150 HP Limited (DDCT)', years: '2017-2024', slug: 'jeep-compass-1-3-turbo' }] },
            { id: 'renegade', name: 'Renegade', variants: [{ id: 'jeep-renegade-1-3-turbo', name: '1.3 T4 150 HP Limited (DDCT)', years: '2019-2023', slug: 'jeep-renegade-1-3-turbo' }, { id: 'jeep-renegade-1-6-multijet', name: '1.6 MultiJet 120 HP Longitude (DDCT)', years: '2015-2023', slug: 'jeep-renegade-1-6-multijet' }] },
        ]
    },
    {
        id: 'kia',
        name: 'Kia',
        logo: 'https://logo.clearbit.com/kia.com',
        models: [
            { id: 'ceed', name: 'Ceed', variants: [{ id: 'kia-ceed-1-5-tgdi', name: '1.5 T-GDI', years: '2021-2024', slug: 'kia-ceed-1-5-tgdi' }, { id: 'kia-ceed-1-6-crdi', name: '1.6 CRDi', years: '2018-2024', slug: 'kia-ceed-1-6-crdi' }, { id: 'kia-ceed-sw-1-5-tgdi', name: 'SW 1.5 T-GDi DCT Prestige', years: '2021-2025', slug: 'kia-ceed-sw-1-5-tgdi' }] },
            { id: 'cerato', name: 'Cerato', variants: [{ id: 'kia-cerato-1-6-mpi', name: '1.6 MPI', years: '2017-2021', slug: 'kia-cerato-1-6-mpi' }] },
            { id: 'niro', name: 'Niro', variants: [{ id: 'kia-niro-hybrid', name: '1.6 GDI Hybrid', years: '2016-2022', slug: 'kia-niro-hybrid' }, { id: 'kia-niro-ev', name: 'EV', years: '2022-2024', slug: 'kia-niro-ev' }] },
            { id: 'picanto', name: 'Picanto', variants: [{ id: 'kia-picanto-1-0-amt', name: '1.0 AMT', years: '2017-2024', slug: 'kia-picanto-1-0-amt' }] },
            { id: 'rio', name: 'Rio', variants: [{ id: 'kia-rio-1-4-mpi', name: '1.4 MPI', years: '2017-2023', slug: 'kia-rio-1-4-mpi' }] },
            { id: 'sportage', name: 'Sportage', variants: [{ id: 'kia-sportage-1-6-crdi', name: '1.6 CRDi Mild Hybrid', years: '2021-2024', slug: 'kia-sportage-1-6-crdi' }, { id: 'kia-sportage-1-6-gdi', name: '1.6 GDI Concept Plus', years: '2012-2016', slug: 'kia-sportage-1-6-gdi' }, { id: 'kia-sportage-1-6-tgdi', name: '1.6 T-GDI', years: '2022-2024', slug: 'kia-sportage-1-6-tgdi' }] },
            { id: 'stonic', name: 'Stonic', variants: [{ id: 'kia-stonic-1-4-mpi', name: '1.4 MPI', years: '2017-2024', slug: 'kia-stonic-1-4-mpi' }] },
        ]
    },
    {
        id: 'land-rover',
        name: 'Land Rover',
        logo: 'https://logo.clearbit.com/landrover.com',
        models: [
            { id: 'range-rover-evoque', name: 'Range Rover Evoque', variants: [{ id: 'land-rover-evoque-2-0-td4', name: '2.0 TD4 (Ingenium)', years: '2015-2019', slug: 'land-rover-evoque-2-0-td4' }] },
            { id: 'range-rover-sport', name: 'Range Rover Sport', variants: [{ id: 'land-rover-range-rover-sport', name: '3.0 SDV6', years: '2014-2020', slug: 'land-rover-range-rover-sport' }] },
        ]
    },
    {
        id: 'mg',
        name: 'MG',
        logo: 'https://logo.clearbit.com/mgmotor.eu',
        models: [
            { id: 'hs', name: 'HS', variants: [{ id: 'mg-hs-1-5-turbo', name: '1.5 Turbo', years: '2021-2024', slug: 'mg-hs-1-5-turbo' }, { id: 'mg-hs-phev', name: '1.5 Turbo PHEV Luxury', years: '2021-2025', slug: 'mg-hs-phev' }] },
            { id: 'mg4', name: 'MG4', variants: [{ id: 'mg-4-electric', name: 'Luxury 64kWh', years: '2023-2024', slug: 'mg-4-electric' }] },
            { id: 'zs', name: 'ZS', variants: [{ id: 'mg-zs-ev', name: 'EV', years: '2021-2024', slug: 'mg-zs-ev' }] },
        ]
    },
    {
        id: 'mazda',
        name: 'Mazda',
        logo: 'https://logo.clearbit.com/mazda.com',
        models: [
            { id: 'cx-3', name: 'CX-3', variants: [{ id: 'mazda-cx3-1-5-diesel', name: '1.5 Skyactiv-D', years: '2015-2022', slug: 'mazda-cx3-1-5-diesel' }] },
            { id: 'cx-30', name: 'CX-30', variants: [{ id: 'mazda-cx30-2-0-skyactiv', name: '2.0 Skyactiv-G Power Sense', years: '2020-2024', slug: 'mazda-cx30-2-0-skyactiv' }] },
            { id: 'cx-5', name: 'CX-5', variants: [{ id: 'mazda-cx5-2-0-skyactiv', name: '2.0 Skyactiv-G', years: '2017-2024', slug: 'mazda-cx5-2-0-skyactiv' }] },
            { id: 'mazda3', name: 'Mazda3', variants: [{ id: 'mazda-3-2-0-skyactiv', name: '2.0 Skyactiv-G', years: '2019-2024', slug: 'mazda-3-2-0-skyactiv' }] },
        ]
    },
    {
        id: 'mercedes-benz',
        name: 'Mercedes-Benz',
        logo: 'https://logo.clearbit.com/mercedes-benz.com',
        models: [
            { id: 'a-serisi', name: 'A Serisi', variants: [{ id: 'mercedes-a180d-amg-v177', name: 'A180d Sedan AMG', years: '2019-2025', slug: 'mercedes-a180d-amg-v177' }, { id: 'mercedes-a180-w177', name: 'A180 1.3 Turbo', years: '2018-2024', slug: 'mercedes-a180-w177' }, { id: 'mercedes-a180d-sedan-v177', name: 'A180d Sedan 1.5 Dizel AMG', years: '2019-2024', slug: 'mercedes-a180d-sedan-v177' }] },
            { id: 'b-serisi', name: 'B Serisi', variants: [{ id: 'mercedes-b180d-w247', name: 'B180d', years: '2019-2024', slug: 'mercedes-b180d-w247' }] },
            { id: 'c-serisi', name: 'C Serisi', variants: [{ id: 'mercedes-c180-w205', name: 'C180 1.6 Turbo', years: '2014-2021', slug: 'mercedes-c180-w205' }, { id: 'mercedes-c200-w205', name: 'C200 2.0 Turbo', years: '2014-2021', slug: 'mercedes-c200-w205' }, { id: 'mercedes-c200-w206', name: 'C200 4Matic 1.5 Turbo +EQ', years: '2021-2025', slug: 'mercedes-c200-w206' }, { id: 'mercedes-c200d-w205', name: 'C200d 1.6 Dizel AMG', years: '2014-2021', slug: 'mercedes-c200d-w205' }] },
            { id: 'cla', name: 'CLA', variants: [{ id: 'mercedes-cla-180d-c117', name: 'CLA 180d 1.5 Dizel AMG', years: '2014-2019', slug: 'mercedes-cla-180d-c117' }, { id: 'mercedes-cla-180d', name: 'CLA 180d AMG', years: '2014-2019', slug: 'mercedes-cla-180d' }, { id: 'mercedes-cla-200', name: 'CLA 200 1.3 Turbo', years: '2019-2024', slug: 'mercedes-cla-200' }] },
            { id: 'e-serisi', name: 'E Serisi', variants: [{ id: 'mercedes-e200-w213', name: 'E200 2.0 Turbo', years: '2016-2023', slug: 'mercedes-e200-w213' }, { id: 'mercedes-e220d-w213', name: 'E220d 2.0 Dizel 4Matic', years: '2016-2023', slug: 'mercedes-e220d-w213' }, { id: 'mercedes-e250-w212', name: 'E250 1.8 Turbo', years: '2009-2016', slug: 'mercedes-e250-w212' }] },
            { id: 'gla', name: 'GLA', variants: [{ id: 'mercedes-gla-200', name: 'GLA 200 1.3 Turbo', years: '2020-2024', slug: 'mercedes-gla-200' }] },
            { id: 'glb', name: 'GLB', variants: [{ id: 'mercedes-glb-200', name: 'GLB 200 1.3 Turbo', years: '2020-2024', slug: 'mercedes-glb-200' }] },
            { id: 'glc', name: 'GLC', variants: [{ id: 'mercedes-glc-200-x254', name: 'GLC 200 2.0 Turbo 4Matic', years: '2022-2025', slug: 'mercedes-glc-200-x254' }, { id: 'mercedes-glc-250d', name: 'GLC 250d 2.1 Dizel 4Matic', years: '2015-2022', slug: 'mercedes-glc-250d' }] },
            { id: 'glc-coupe', name: 'GLC Coupe', variants: [{ id: 'mercedes-glc-220d-coupe-c253', name: 'GLC 220d 2.0 Dizel 4Matic Coupe', years: '2016-2022', slug: 'mercedes-glc-220d-coupe-c253' }] },
            { id: 'gle', name: 'GLE', variants: [{ id: 'mercedes-gle-350d-v167', name: 'GLE 350d 3.0 Dizel 4Matic', years: '2019-2024', slug: 'mercedes-gle-350d-v167' }] },
            { id: 's-serisi', name: 'S Serisi', variants: [{ id: 'mercedes-s350d-w223', name: 'S350d 3.0 Dizel 4Matic', years: '2021-2025', slug: 'mercedes-s350d-w223' }] },
            { id: 'vito', name: 'Vito', variants: [{ id: 'mercedes-vito-tourer-114-cdi', name: 'Vito Tourer 114 CDI 2.1 Dizel', years: '2014-2024', slug: 'mercedes-vito-tourer-114-cdi' }] },
        ]
    },
    {
        id: 'mini',
        name: 'Mini',
        logo: 'https://logo.clearbit.com/mini.com',
        models: [
            { id: 'cooper', name: 'Cooper', variants: [{ id: 'mini-cooper-f56', name: 'F56', years: '2014-2024', slug: 'mini-cooper-f56' }] },
            { id: 'countryman', name: 'Countryman', variants: [{ id: 'mini-countryman-f60', name: 'Cooper ALL4', years: '2017-2024', slug: 'mini-countryman-f60' }] },
        ]
    },
    {
        id: 'mitsubishi',
        name: 'Mitsubishi',
        logo: 'https://logo.clearbit.com/mitsubishi-motors.com',
        models: [
            { id: 'asx', name: 'ASX', variants: [{ id: 'mitsubishi-asx-1-3-turbo', name: '1.3 Turbo Instyle', years: '2023-2024', slug: 'mitsubishi-asx-1-3-turbo' }] },
            { id: 'eclipse-cross', name: 'Eclipse Cross', variants: [{ id: 'mitsubishi-eclipse-cross-phev', name: 'PHEV', years: '2021-2024', slug: 'mitsubishi-eclipse-cross-phev' }] },
            { id: 'l200', name: 'L200', variants: [{ id: 'mitsubishi-l200-tornado', name: '2.4 DI-D Tornado', years: '2015-2023', slug: 'mitsubishi-l200-tornado' }] },
        ]
    },
    {
        id: 'nissan',
        name: 'Nissan',
        logo: 'https://logo.clearbit.com/nissan.com.tr',
        models: [
            { id: 'juke', name: 'Juke', variants: [{ id: 'nissan-juke-1-0-dig-t', name: '1.0 DIG-T', years: '2019-2024', slug: 'nissan-juke-1-0-dig-t' }, { id: 'nissan-juke-1-6-cvt', name: '1.6 Visia/Tekna', years: '2011-2019', slug: 'nissan-juke-1-6-cvt' }] },
            { id: 'navara', name: 'Navara', variants: [{ id: 'nissan-navara-2-3-dci', name: '2.3 dCi', years: '2016-2023', slug: 'nissan-navara-2-3-dci' }] },
            { id: 'qashqai', name: 'Qashqai', variants: [{ id: 'nissan-qashqai-1-3-dig-t', name: '1.3 DIG-T', years: '2021-2024', slug: 'nissan-qashqai-1-3-dig-t' }, { id: 'nissan-qashqai-j11-1-5-dci', name: 'J11 1.5 dCi Sky Pack', years: '2014-2021', slug: 'nissan-qashqai-j11-1-5-dci' }, { id: 'nissan-qashqai-e-power', name: 'e-POWER N-Connecta', years: '2022-2025', slug: 'nissan-qashqai-e-power' }] },
            { id: 'x-trail', name: 'X-Trail', variants: [{ id: 'nissan-xtrail-1-6-dci', name: '1.6 dCi Platinum', years: '2014-2021', slug: 'nissan-xtrail-1-6-dci' }] },
        ]
    },
    {
        id: 'opel',
        name: 'Opel',
        logo: 'https://logo.clearbit.com/opel.com',
        models: [
            { id: 'astra', name: 'Astra', variants: [{ id: 'opel-astra-1-2-turbo', name: '1.2 Turbo', years: '2022-2024', slug: 'opel-astra-1-2-turbo' }, { id: 'opel-astra-j-1-4-turbo', name: '1.4 Turbo Sport', years: '2009-2020', slug: 'opel-astra-j-1-4-turbo' }, { id: 'opel-astra-k-1-4-turbo', name: 'K 1.4 Turbo Excellence', years: '2015-2021', slug: 'opel-astra-k-1-4-turbo' }] },
            { id: 'combo', name: 'Combo', variants: [{ id: 'opel-combo-1-5-cdti', name: '1.5 CDTI', years: '2018-2024', slug: 'opel-combo-1-5-cdti' }] },
            { id: 'corsa', name: 'Corsa', variants: [{ id: 'opel-corsa-1-2-turbo', name: '1.2 Turbo', years: '2019-2024', slug: 'opel-corsa-1-2-turbo' }] },
            { id: 'crossland', name: 'Crossland', variants: [{ id: 'opel-crossland-1-2-turbo', name: '1.2 Turbo', years: '2020-2024', slug: 'opel-crossland-1-2-turbo' }] },
            { id: 'grandland', name: 'Grandland', variants: [{ id: 'opel-grandland-1-2-turbo', name: '1.2 Turbo GS Line', years: '2022-2025', slug: 'opel-grandland-1-2-turbo' }, { id: 'opel-grandland-1-5-diesel', name: '1.5 Diesel', years: '2018-2024', slug: 'opel-grandland-1-5-diesel' }] },
            { id: 'grandland-x', name: 'Grandland X', variants: [{ id: 'opel-grandland-x-1-2-turbo', name: '1.2 Turbo', years: '2017-2024', slug: 'opel-grandland-x-1-2-turbo' }] },
            { id: 'insignia', name: 'Insignia', variants: [{ id: 'opel-insignia-a-1-6-turbo', name: '1.6 Turbo Cosmo', years: '2009-2017', slug: 'opel-insignia-a-1-6-turbo' }] },
            { id: 'mokka', name: 'Mokka', variants: [{ id: 'opel-mokka-1-2-turbo', name: '1.2 Turbo', years: '2021-2024', slug: 'opel-mokka-1-2-turbo' }] },
        ]
    },
    {
        id: 'peugeot',
        name: 'Peugeot',
        logo: 'https://logo.clearbit.com/peugeot.com',
        models: [
            { id: '2008', name: '2008', variants: [{ id: 'peugeot-2008-1-2-puretech', name: '1.2 PureTech', years: '2020-2024', slug: 'peugeot-2008-1-2-puretech' }] },
            { id: '208', name: '208', variants: [{ id: 'peugeot-208-1-2-puretech', name: '1.2 PureTech Allure', years: '2019-2024', slug: 'peugeot-208-1-2-puretech' }] },
            { id: '3008', name: '3008', variants: [{ id: 'peugeot-3008-1-5-bluehdi', name: '1.5 BlueHDi', years: '2016-2023', slug: 'peugeot-3008-1-5-bluehdi' }, { id: 'peugeot-3008-1-6-puretech', name: '1.6 PureTech Allure', years: '2017-2024', slug: 'peugeot-3008-1-6-puretech' }] },
            { id: '301', name: '301', variants: [{ id: 'peugeot-301-1-6-hdi', name: '1.6 HDi Allure', years: '2012-2022', slug: 'peugeot-301-1-6-hdi' }] },
            { id: '308', name: '308', variants: [{ id: 'peugeot-308-new-1-2', name: '1.2 PureTech', years: '2022-2024', slug: 'peugeot-308-new-1-2' }] },
            { id: '408', name: '408', variants: [{ id: 'peugeot-408-1-2-puretech', name: '1.2 PureTech', years: '2023-2024', slug: 'peugeot-408-1-2-puretech' }] },
            { id: '5008', name: '5008', variants: [{ id: 'peugeot-5008-1-6-bluehdi', name: '1.6 BlueHDi Allure', years: '2017-2020', slug: 'peugeot-5008-1-6-bluehdi' }] },
            { id: '508', name: '508', variants: [{ id: 'peugeot-508-1-5-bluehdi', name: '1.5 BlueHDi', years: '2018-2024', slug: 'peugeot-508-1-5-bluehdi' }] },
            { id: 'rifter', name: 'Rifter', variants: [{ id: 'peugeot-rifter-1-5-bluehdi', name: '1.5 BlueHDi GT', years: '2019-2024', slug: 'peugeot-rifter-1-5-bluehdi' }] },
        ]
    },
    {
        id: 'porsche',
        name: 'Porsche',
        logo: 'https://logo.clearbit.com/porsche.com',
        models: [
            { id: 'macan', name: 'Macan', variants: [{ id: 'porsche-macan-2-0', name: '2.0', years: '2014-2023', slug: 'porsche-macan-2-0' }] },
        ]
    },
    {
        id: 'renault',
        name: 'Renault',
        logo: 'https://logo.clearbit.com/renault.com',
        models: [
            { id: 'austral', name: 'Austral', variants: [{ id: 'renault-austral-1-3-tce', name: '1.3 TCe Mild Hybrid', years: '2022-2024', slug: 'renault-austral-1-3-tce' }] },
            { id: 'captur', name: 'Captur', variants: [{ id: 'renault-captur-1-3-tce', name: '1.3 TCe', years: '2020-2024', slug: 'renault-captur-1-3-tce' }] },
            { id: 'clio', name: 'Clio', variants: [{ id: 'renault-clio-5-1-0-tce', name: '1.0 TCe', years: '2019-2024', slug: 'renault-clio-5-1-0-tce' }, { id: 'renault-clio-4-1-5-dci', name: 'Clio 4 1.5 dCi', years: '2012-2019', slug: 'renault-clio-4-1-5-dci' }] },
            { id: 'fluence', name: 'Fluence', variants: [{ id: 'renault-fluence-1-5-dci', name: '1.5 dCi EDC', years: '2010-2016', slug: 'renault-fluence-1-5-dci' }] },
            { id: 'kadjar', name: 'Kadjar', variants: [{ id: 'renault-kadjar-1-5-dci', name: '1.5 dCi Icon', years: '2015-2022', slug: 'renault-kadjar-1-5-dci' }] },
            { id: 'kangoo', name: 'Kangoo', variants: [{ id: 'renault-kangoo-1-5-dci', name: '1.5 dCi Touch', years: '2013-2020', slug: 'renault-kangoo-1-5-dci' }] },
            { id: 'koleos', name: 'Koleos', variants: [{ id: 'renault-koleos-1-6-dci', name: '1.6 dCi Icon', years: '2016-2020', slug: 'renault-koleos-1-6-dci' }] },
            { id: 'latitude', name: 'Latitude', variants: [{ id: 'renault-latitude-1-5-dci', name: '1.5 dCi Privilege', years: '2011-2015', slug: 'renault-latitude-1-5-dci' }] },
            { id: 'megane', name: 'Megane', variants: [{ id: 'renault-megane-4-1-3-tce', name: '1.3 TCe', years: '2016-2023', slug: 'renault-megane-4-1-3-tce' }, { id: 'renault-megane-3-1-5-dci', name: '1.5 dCi', years: '2009-2016', slug: 'renault-megane-3-1-5-dci' }, { id: 'renault-megane-sedan-1-5-dci', name: 'Sedan 1.5 dCi EDC Touch', years: '2016-2022', slug: 'renault-megane-sedan-1-5-dci' }] },
            { id: 'scenic', name: 'Scenic', variants: [{ id: 'renault-scenic-1-5-dci', name: '1.5 dCi', years: '2016-2022', slug: 'renault-scenic-1-5-dci' }] },
            { id: 'symbol', name: 'Symbol', variants: [{ id: 'renault-symbol-1-5-dci', name: '1.5 dCi', years: '2013-2021', slug: 'renault-symbol-1-5-dci' }] },
            { id: 'taliant', name: 'Taliant', variants: [{ id: 'renault-taliant-1-0-turbo', name: '1.0 Turbo', years: '2021-2024', slug: 'renault-taliant-1-0-turbo' }] },
            { id: 'talisman', name: 'Talisman', variants: [{ id: 'renault-talisman-1-6-dci', name: '1.6 dCi Icon', years: '2016-2020', slug: 'renault-talisman-1-6-dci' }] },
        ]
    },
    {
        id: 'seat',
        name: 'Seat',
        logo: 'https://logo.clearbit.com/seat.com',
        models: [
            { id: 'arona', name: 'Arona', variants: [{ id: 'seat-arona-1-0-eco-tsi', name: '1.0 EcoTSI Xperience', years: '2018-2024', slug: 'seat-arona-1-0-eco-tsi' }] },
            { id: 'ateca', name: 'Ateca', variants: [{ id: 'seat-ateca-1-5-tsi', name: '1.5 TSI', years: '2019-2024', slug: 'seat-ateca-1-5-tsi' }] },
            { id: 'ibiza', name: 'Ibiza', variants: [{ id: 'seat-ibiza-1-0-tsi', name: '1.0 TSI', years: '2017-2024', slug: 'seat-ibiza-1-0-tsi' }] },
            { id: 'leon', name: 'Leon', variants: [{ id: 'seat-leon-1-5-tsi', name: '1.5 TSI FR', years: '2020-2024', slug: 'seat-leon-1-5-tsi' }, { id: 'seat-leon-1-5-etsi', name: '1.5 eTSI', years: '2020-2024', slug: 'seat-leon-1-5-etsi' }, { id: 'seat-leon-mk3-1-6-tdi', name: '1.6 TDI FR', years: '2013-2020', slug: 'seat-leon-mk3-1-6-tdi' }] },
            { id: 'tarraco', name: 'Tarraco', variants: [{ id: 'seat-tarraco-2-0-tdi', name: '2.0 TDI', years: '2019-2024', slug: 'seat-tarraco-2-0-tdi' }] },
        ]
    },
    {
        id: 'skoda',
        name: 'Skoda',
        logo: 'https://logo.clearbit.com/skoda-auto.com',
        models: [
            { id: 'fabia', name: 'Fabia', variants: [{ id: 'skoda-fabia-1-0-tsi', name: '1.0 TSI', years: '2018-2024', slug: 'skoda-fabia-1-0-tsi' }] },
            { id: 'kamiq', name: 'Kamiq', variants: [{ id: 'skoda-kamiq-1-0-tsi', name: '1.0 TSI', years: '2019-2024', slug: 'skoda-kamiq-1-0-tsi' }] },
            { id: 'karoq', name: 'Karoq', variants: [{ id: 'skoda-karoq-1-5-tsi', name: '1.5 TSI', years: '2018-2024', slug: 'skoda-karoq-1-5-tsi' }] },
            { id: 'kodiaq', name: 'Kodiaq', variants: [{ id: 'skoda-kodiaq-2-0-tdi', name: '2.0 TDI', years: '2017-2024', slug: 'skoda-kodiaq-2-0-tdi' }] },
            { id: 'octavia', name: 'Octavia', variants: [{ id: 'skoda-octavia-1-5-tsi-e-tec', name: '1.5 TSI e-Tec', years: '2020-2024', slug: 'skoda-octavia-1-5-tsi-e-tec' }, { id: 'skoda-octavia-a7-1-6-tdi', name: 'A7 1.6 TDI', years: '2013-2020', slug: 'skoda-octavia-a7-1-6-tdi' }] },
            { id: 'scala', name: 'Scala', variants: [{ id: 'skoda-scala-1-0-tsi', name: '1.0 TSI', years: '2019-2024', slug: 'skoda-scala-1-0-tsi' }] },
            { id: 'superb', name: 'Superb', variants: [{ id: 'skoda-superb-1-5-tsi', name: '1.5 TSI', years: '2019-2023', slug: 'skoda-superb-1-5-tsi' }, { id: 'skoda-superb-1-6-tdi', name: '1.6 TDI Elegance', years: '2015-2023', slug: 'skoda-superb-1-6-tdi' }] },
        ]
    },
    {
        id: 'subaru',
        name: 'Subaru',
        logo: 'https://logo.clearbit.com/subaru.com',
        models: [
            { id: 'xv', name: 'XV', variants: [{ id: 'subaru-xv-1-6', name: '1.6 Boxer', years: '2012-2023', slug: 'subaru-xv-1-6' }] },
        ]
    },
    {
        id: 'suzuki',
        name: 'Suzuki',
        logo: 'https://logo.clearbit.com/suzuki.com',
        models: [
            { id: 'across', name: 'Across', variants: [{ id: 'suzuki-across-2-5-hybrid', name: '2.5 Hybrid', years: '2021-2024', slug: 'suzuki-across-2-5-hybrid' }] },
            { id: 'jimny', name: 'Jimny', variants: [{ id: 'suzuki-jimny-1-5', name: '1.5 GLX 4x4', years: '2018-2024', slug: 'suzuki-jimny-1-5' }] },
            { id: 's-cross', name: 'S-Cross', variants: [{ id: 'suzuki-scross-1-4-hybrid', name: '1.4 BoosterJet Hybrid GLX', years: '2021-2024', slug: 'suzuki-scross-1-4-hybrid' }, { id: 'suzuki-scross-1-4-hybrid-new', name: '1.4 Boosterjet Hybrid GLX', years: '2022-2025', slug: 'suzuki-scross-1-4-hybrid-new' }] },
            { id: 'swift', name: 'Swift', variants: [{ id: 'suzuki-swift-1-2-dualjet', name: '1.2 Dualjet', years: '2017-2024', slug: 'suzuki-swift-1-2-dualjet' }] },
            { id: 'vitara', name: 'Vitara', variants: [{ id: 'suzuki-vitara-1-4-boosterjet', name: '1.4 BoosterJet AllGrip', years: '2016-2024', slug: 'suzuki-vitara-1-4-boosterjet' }] },
        ]
    },
    {
        id: 'togg',
        name: 'Togg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/TOGG_logo.svg/2560px-TOGG_logo.svg.png',
        models: [
            { id: 't10f', name: 'T10F', variants: [{ id: 'togg-t10f', name: 'Uzun Menzil', years: '2025-2026', slug: 'togg-t10f' }] },
            { id: 't10x', name: 'T10X', variants: [{ id: 'togg-t10x-v2-long-range', name: 'V2 Long Range', years: '2023-2024', slug: 'togg-t10x-v2-long-range' }, { id: 'togg-t10x-v2', name: 'V2 RWD', years: '2023-2024', slug: 'togg-t10x-v2' }] },
        ]
    },
    {
        id: 'tesla',
        name: 'Tesla',
        logo: 'https://logo.clearbit.com/tesla.com',
        models: [
            { id: 'model-y', name: 'Model Y', variants: [{ id: 'tesla-model-y-lr', name: 'Long Range', years: '2022-2024', slug: 'tesla-model-y-lr' }, { id: 'tesla-model-y-long-range', name: 'Long Range', years: '2022-2024', slug: 'tesla-model-y-long-range' }] },
        ]
    },
    {
        id: 'tofa-',
        name: 'Tofaş',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Tofas_logo.jpg',
        models: [
            { id: 'do-an', name: 'Doğan', variants: [{ id: 'tofas-dogan-slx-1-6-ie', name: 'SLX 1.6 ie', years: '1993-2002', slug: 'tofas-dogan-slx-1-6-ie' }] },
            { id: '-ahin', name: 'Şahin', variants: [{ id: 'tofas-sahin-s-1-6', name: 'S 1.6', years: '1993-2002', slug: 'tofas-sahin-s-1-6' }] },
        ]
    },
    {
        id: 'toyota',
        name: 'Toyota',
        logo: 'https://logo.clearbit.com/toyota.com',
        models: [
            { id: 'auris', name: 'Auris', variants: [{ id: 'toyota-auris-1-6-valvematic', name: '1.6 Valvematic Advance', years: '2013-2018', slug: 'toyota-auris-1-6-valvematic' }] },
            { id: 'avensis', name: 'Avensis', variants: [{ id: 'toyota-avensis-1-6-d4d', name: '1.6 D-4D Premium', years: '2015-2018', slug: 'toyota-avensis-1-6-d4d' }] },
            { id: 'c-hr', name: 'C-HR', variants: [{ id: 'toyota-chr-1-8-hybrid', name: '1.8 Hybrid', years: '2016-2023', slug: 'toyota-chr-1-8-hybrid' }] },
            { id: 'camry', name: 'Camry', variants: [{ id: 'toyota-camry-hybrid', name: '2.5 Hybrid Passion', years: '2019-2024', slug: 'toyota-camry-hybrid' }] },
            { id: 'corolla', name: 'Corolla', variants: [{ id: 'toyota-corolla-1-5-vision', name: '1.5 Vision', years: '2020-2024', slug: 'toyota-corolla-1-5-vision' }, { id: 'toyota-corolla-hybrid', name: '1.8 Hybrid', years: '2019-2024', slug: 'toyota-corolla-hybrid' }] },
            { id: 'corolla-cross', name: 'Corolla Cross', variants: [{ id: 'toyota-corolla-cross-hybrid', name: '1.8 Hybrid', years: '2022-2024', slug: 'toyota-corolla-cross-hybrid' }] },
            { id: 'hilux', name: 'Hilux', variants: [{ id: 'toyota-hilux-2-4-d4d', name: '2.4 D-4D Invincible', years: '2016-2024', slug: 'toyota-hilux-2-4-d4d' }] },
            { id: 'proace-city', name: 'Proace City', variants: [{ id: 'toyota-proace-city-1-5-d', name: '1.5 D Dream', years: '2020-2024', slug: 'toyota-proace-city-1-5-d' }] },
            { id: 'rav4', name: 'RAV4', variants: [{ id: 'toyota-rav4-hybrid', name: '2.5 Hybrid', years: '2019-2024', slug: 'toyota-rav4-hybrid' }, { id: 'toyota-rav4-2-5-hybrid', name: '2.5 Hybrid', years: '2019-2024', slug: 'toyota-rav4-2-5-hybrid' }, { id: 'toyota-rav4-25-hybrid-mk5', name: '2.5 Hybrid AWD Passion X-Pack', years: '2019-2025', slug: 'toyota-rav4-25-hybrid-mk5' }] },
            { id: 'yaris', name: 'Yaris', variants: [{ id: 'toyota-yaris-hybrid', name: '1.5 Hybrid', years: '2020-2024', slug: 'toyota-yaris-hybrid' }, { id: 'toyota-yaris-1-5-hybrid', name: '1.5 Hybrid Dream', years: '2020-2024', slug: 'toyota-yaris-1-5-hybrid' }] },
            { id: 'yaris-cross', name: 'Yaris Cross', variants: [{ id: 'toyota-yaris-cross-hybrid', name: '1.5 Hybrid', years: '2021-2024', slug: 'toyota-yaris-cross-hybrid' }] },
        ]
    },
    {
        id: 'volkswagen',
        name: 'Volkswagen',
        logo: 'https://logo.clearbit.com/volkswagen.com',
        models: [
            { id: 'amarok', name: 'Amarok', variants: [{ id: 'volkswagen-amarok-2-0-bitdi', name: '2.0 BiTDI Highline', years: '2011-2016', slug: 'volkswagen-amarok-2-0-bitdi' }, { id: 'volkswagen-amarok-v6-tdi', name: '3.0 V6 TDI Aventura', years: '2016-2022', slug: 'volkswagen-amarok-v6-tdi' }] },
            { id: 'arteon', name: 'Arteon', variants: [{ id: 'volkswagen-arteon-1-5-tsi', name: '1.5 TSI R-Line', years: '2017-2024', slug: 'volkswagen-arteon-1-5-tsi' }] },
            { id: 'beetle', name: 'Beetle', variants: [{ id: 'volkswagen-beetle-1-2-tsi', name: '1.2 TSI Design', years: '2012-2019', slug: 'volkswagen-beetle-1-2-tsi' }] },
            { id: 'cc', name: 'CC', variants: [{ id: 'volkswagen-cc-1-4-tsi', name: '1.4 TSI', years: '2012-2017', slug: 'volkswagen-cc-1-4-tsi' }] },
            { id: 'caddy', name: 'Caddy', variants: [{ id: 'volkswagen-caddy-mk4-2-0-tdi', name: '2.0 TDI Comfortline (Mk4)', years: '2015-2020', slug: 'volkswagen-caddy-mk4-2-0-tdi' }, { id: 'volkswagen-caddy-2-0-tdi', name: '2.0 TDI Style (Mk5)', years: '2020-2024', slug: 'volkswagen-caddy-2-0-tdi' }] },
            { id: 'golf', name: 'Golf', variants: [{ id: 'volkswagen-golf-7-1-4-tsi', name: 'Golf 7 1.4 TSI Highline', years: '2012-2020', slug: 'volkswagen-golf-7-1-4-tsi' }, { id: 'volkswagen-golf-8-1-0-etsi', name: 'Golf 8 1.0 eTSI', years: '2020-2024', slug: 'volkswagen-golf-8-1-0-etsi' }] },
            { id: 'jetta', name: 'Jetta', variants: [{ id: 'volkswagen-jetta-1-6-tdi', name: '1.6 TDI Highline', years: '2011-2018', slug: 'volkswagen-jetta-1-6-tdi' }] },
            { id: 'passat', name: 'Passat', variants: [{ id: 'volkswagen-passat-b8-1-6-tdi', name: 'B8 1.6 TDI Highline', years: '2015-2023', slug: 'volkswagen-passat-b8-1-6-tdi' }] },
            { id: 'polo', name: 'Polo', variants: [{ id: 'volkswagen-polo-1-0-tsi', name: '1.0 TSI', years: '2017-2024', slug: 'volkswagen-polo-1-0-tsi' }, { id: 'volkswagen-polo-1-2-tsi', name: '1.2 TSI / 1.4 TDI', years: '2009-2017', slug: 'volkswagen-polo-1-2-tsi' }] },
            { id: 'scirocco', name: 'Scirocco', variants: [{ id: 'volkswagen-scirocco-1-4-tsi', name: '1.4 TSI (160hp)', years: '2009-2017', slug: 'volkswagen-scirocco-1-4-tsi' }] },
            { id: 't-cross', name: 'T-Cross', variants: [{ id: 'volkswagen-tcross-1-0-tsi', name: '1.0 TSI Life', years: '2019-2024', slug: 'volkswagen-tcross-1-0-tsi' }] },
            { id: 't-roc', name: 'T-Roc', variants: [{ id: 'volkswagen-troc-1-5-tsi', name: '1.5 TSI Highline', years: '2018-2024', slug: 'volkswagen-troc-1-5-tsi' }] },
            { id: 'taigo', name: 'Taigo', variants: [{ id: 'volkswagen-taigo-1-0-tsi', name: '1.0 TSI Style', years: '2021-2024', slug: 'volkswagen-taigo-1-0-tsi' }] },
            { id: 'tiguan', name: 'Tiguan', variants: [{ id: 'volkswagen-tiguan-1-5-tsi', name: '1.5 TSI Highline', years: '2016-2023', slug: 'volkswagen-tiguan-1-5-tsi' }] },
            { id: 'touran', name: 'Touran', variants: [{ id: 'vw-touran-1-6-tdi', name: '1.6 TDI', years: '2015-2022', slug: 'vw-touran-1-6-tdi' }] },
            { id: 'transporter', name: 'Transporter', variants: [{ id: 'volkswagen-transporter-t6', name: '2.0 TDI City Van', years: '2015-2024', slug: 'volkswagen-transporter-t6' }] },
        ]
    },
    {
        id: 'volvo',
        name: 'Volvo',
        logo: 'https://logo.clearbit.com/volvocars.com',
        models: [
            { id: 's60', name: 'S60', variants: [{ id: 'volvo-s60-b5', name: 'B5 AWD Inscription', years: '2019-2024', slug: 'volvo-s60-b5' }, { id: 'volvo-s60-t4', name: 'T4', years: '2019-2024', slug: 'volvo-s60-t4' }] },
            { id: 's90', name: 'S90', variants: [{ id: 'volvo-s90-d5-awd', name: 'D5 AWD', years: '2016-2023', slug: 'volvo-s90-d5-awd' }] },
            { id: 'v40', name: 'V40', variants: [{ id: 'volvo-v40-1-6-d2', name: '1.6 D2 Powershift', years: '2012-2015', slug: 'volvo-v40-1-6-d2' }] },
            { id: 'xc40', name: 'XC40', variants: [{ id: 'volvo-xc40-t3', name: 'T3 R-Design', years: '2018-2024', slug: 'volvo-xc40-t3' }, { id: 'volvo-xc40-t4', name: 'T4', years: '2018-2024', slug: 'volvo-xc40-t4' }] },
            { id: 'xc60', name: 'XC60', variants: [{ id: 'volvo-xc60-b4', name: 'B4 Mild Hybrid', years: '2017-2024', slug: 'volvo-xc60-b4' }] },
        ]
    },
];
