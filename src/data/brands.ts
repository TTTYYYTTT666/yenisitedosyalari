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
            { id: 'a3', name: 'A3', variants: [{ id: 'audi-a3-8p-2-0-tdi', name: '8P 2.0 TDI S-Tronic', years: '2003-2012', slug: 'audi-a3-8p-2-0-tdi' }, { id: 'audi-a3-8v-1-6-tdi', name: '1.6 TDI Ambition', years: '2012-2017', slug: 'audi-a3-8v-1-6-tdi' }, { id: 'audi-a3-8y-35-tfsi', name: '35 TFSI', years: '2020-2024', slug: 'audi-a3-8y-35-tfsi' }, { id: 'audi-a3-8v-1-4-tfsi', name: '8V 1.4 TFSI', years: '2012-2020', slug: 'audi-a3-8v-1-4-tfsi' }, { id: 'audi-a3-sedan-8v-tfsi', name: 'Sedan 35 TFSI', years: '2013-2020', slug: 'audi-a3-sedan-8v-tfsi' }] },
            { id: 'a4', name: 'A4', variants: [{ id: 'audi-a4-b8-1-8-tfsi', name: 'B8 1.8 TFSI Multitronic', years: '2008-2015', slug: 'audi-a4-b8-1-8-tfsi' }, { id: 'audi-a4-b9-2-0-tfsi', name: '2.0 TFSI Advanced', years: '2016-2024', slug: 'audi-a4-b9-2-0-tfsi' }, { id: 'audi-a4-b8-2-0-tdi', name: 'B8 2.0 TDI', years: '2008-2015', slug: 'audi-a4-b8-2-0-tdi' }, { id: 'audi-a4-b9-tdi', name: 'B9 40 TDI Quattro', years: '2016-2024', slug: 'audi-a4-b9-tdi' }, { id: 'audi-a4-b7-2-0-tdi', name: 'B7 2.0 TDI', years: '2004-2008', slug: 'audi-a4-b7-2-0-tdi' }] },
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
            { id: 'x5', name: 'X5', variants: [{ id: 'bmw-x5-xdrive30d-g05', name: 'G05 xDrive30d', years: '2019-2025', slug: 'bmw-x5-xdrive30d-g05' }] },
            { id: '5-series', name: '5 Serisi', variants: [{ id: 'bmw-520d-g30', name: 'G30 520d', years: '2017-2025', slug: 'bmw-520d-g30' }, { id: 'bmw-520i-g30', name: 'G30 520i', years: '2017-2025', slug: 'bmw-520i-g30' }, { id: 'bmw-f10-520d', name: 'F10 520d 2.0 184hp', years: '2010-2017', slug: 'bmw-f10-520d' }, { id: 'bmw-520d-f10', name: 'F10 520d', years: '2010-2017', slug: 'bmw-520d-f10' }, { id: 'bmw-520i-f10', name: 'F10 520i', years: '2010-2017', slug: 'bmw-520i-f10' }, { id: 'bmw-e39-520i', name: 'E39 520i M52', years: '1996-2003', slug: 'bmw-e39-520i-m52' }] },
            { id: '3-series', name: '3 Serisi', variants: [{ id: 'bmw-f30-320i', name: 'F30 320i 2.0T', years: '2012-2019', slug: 'bmw-f30-320i' }, { id: 'bmw-e90-320i-2-0', name: 'E90 320i 2.0', years: '2005-2012', slug: 'bmw-e90-320i-2-0' }, { id: 'bmw-320d-g20', name: 'G20 320d', years: '2019-2025', slug: 'bmw-320d-g20' }, { id: 'bmw-g20-320i', name: 'G20 320i', years: '2019-2025', slug: 'bmw-g20-320i' }, { id: 'bmw-320d-f30', name: 'F30 320d', years: '2012-2019', slug: 'bmw-320d-f30' }, { id: 'bmw-320i-f30-ed', name: 'F30 320i ED', years: '2012-2019', slug: 'bmw-320i-f30-ed' }, { id: 'bmw-x5-e70-3-0d', name: 'X5 E70 3.0d xDrive', years: '2007-2013', slug: 'bmw-x5-e70-3-0d' }, { id: 'bmw-e36-316i', name: 'E36 316i M43', years: '1990-2000', slug: 'bmw-e36-316i-m43' }, { id: 'bmw-e36-318is', name: 'E36 318is M42', years: '1990-2000', slug: 'bmw-e36-318is-m42' }, { id: 'bmw-e46-320i', name: 'E46 320i 2.2 (170hp)', years: '1998-2005', slug: 'bmw-e46-320i' }] },
            { id: '1-serisi', name: '1 Serisi (F20/F40)', variants: [{ id: 'bmw-116i-f20', name: '116i 1.6 Turbo', years: '2011-2019', slug: 'bmw-116i-f20' }, { id: 'bmw-118i-f40', name: '118i 1.5 Turbo', years: '2019-2024', slug: 'bmw-118i-f40' }] },
            { id: '2-serisi', name: '2 Serisi (F44)', variants: [{ id: 'bmw-218i-gran-coupe', name: '218i Gran Coupe 1.5 Turbo M Sport', years: '2020-2024', slug: 'bmw-218i-gran-coupe' }, { id: 'bmw-218i-gran-coupe-msport', name: '218i Gran Coupé M Sport', years: '2020-2025', slug: 'bmw-218i-gran-coupe-msport' }] },
            { id: '4-serisi', name: '4 Serisi (G26)', variants: [{ id: 'bmw-420i-gran-coupe-g26', name: 'G26 420i Gran Coupe 2.0 Turbo M Sport', years: '2021-2025', slug: 'bmw-420i-gran-coupe-g26' }] },
            { id: 'x1', name: 'X1 (F48/U11)', variants: [{ id: 'bmw-x1-sdrive18i', name: 'F48 sDrive18i 1.5 Turbo', years: '2015-2022', slug: 'bmw-x1-sdrive18i' }, { id: 'bmw-x1-sdrive18i-u11', name: 'U11 sDrive18i 1.5 Turbo', years: '2022-2025', slug: 'bmw-x1-sdrive18i-u11' }] },
            { id: 'x2', name: 'X2 (F39)', variants: [{ id: 'bmw-x2-sdrive18i', name: 'F39 sDrive18i', years: '2018-2024', slug: 'bmw-x2-sdrive18i' }] },
            { id: 'x3', name: 'X3 (G01)', variants: [{ id: 'bmw-x3-xdrive20d-g01', name: 'G01 xDrive20d 2.0 Dizel M Sport', years: '2017-2024', slug: 'bmw-x3-xdrive20d-g01' }, { id: 'bmw-x3-xdrive20i', name: 'G01 xDrive20i 2.0 Turbo M Sport', years: '2017-2024', slug: 'bmw-x3-xdrive20i' }] },
        ]
    },
    {
        id: 'chery',
        name: 'Chery',
        logo: 'https://logo.clearbit.com/cheryinternational.com',
        models: [
            { id: 'tiggo-8-pro', name: 'Tiggo 8 Pro', variants: [{ id: 'chery-tiggo-8-pro-e-plus-phev', name: 'E+ PHEV', years: '2024-2025', slug: 'chery-tiggo-8-pro-e-plus-phev' }, { id: 'chery-tiggo-8-pro-max-2025', name: 'Max 2025', years: '2025', slug: 'chery-tiggo-8-pro-max-2025' }, { id: 'chery-tiggo-8-pro-1-6-tgdi', name: '1.6 TGDI', years: '2022-2025', slug: 'chery-tiggo-8-pro-1-6-tgdi' }] },
            { id: 'omoda-5', name: 'Omoda 5', variants: [{ id: 'chery-omoda-5-2025-facelift', name: '2025 Facelift', years: '2025', slug: 'chery-omoda-5-2025-facelift' }, { id: 'chery-omoda-5-1-6-tgdi', name: '1.6 TGDI', years: '2023-2025', slug: 'chery-omoda-5-1-6-tgdi' }] },
            { id: 'omoda-7', name: 'Omoda 7', variants: [{ id: 'chery-omoda-7-2025', name: '1.5 TGDI (CVT)', years: '2025', slug: 'chery-omoda-7-2025' }] },
            { id: 'tiggo-4-pro', name: 'Tiggo 4 Pro', variants: [{ id: 'chery-tiggo-4-pro', name: '1.5 CVT Distinctive', years: '2023-2025', slug: 'chery-tiggo-4-pro' }] },
            { id: 'tiggo-7-pro', name: 'Tiggo 7 Pro', variants: [{ id: 'chery-tiggo-7-pro-1-6-tgdi', name: '1.6 TGDI Distinctive (7DCT)', years: '2023-2024', slug: 'chery-tiggo-7-pro-1-6-tgdi' }] },
            { id: 'tiggo-7-pro-max', name: 'Tiggo 7 Pro Max', variants: [{ id: 'chery-tiggo-7-pro-max-2025', name: '1.5 TGDI (CVT)', years: '2025', slug: 'chery-tiggo-7-pro-max-2025' }] },
        ]
    },
    {
        id: 'chevrolet',
        name: 'Chevrolet',
        logo: 'https://logo.clearbit.com/chevrolet.com',
        models: [
            { id: 'cruze', name: 'Cruze', variants: [{ id: 'chevrolet-cruze-1-6', name: '1.6', years: '2009-2016', slug: 'chevrolet-cruze-1-6' }] },
            { id: 'aveo', name: 'Aveo', variants: [{ id: 'chevrolet-aveo-1-4', name: '1.4 16V', years: '2011-2016', slug: 'chevrolet-aveo-1-4' }] },
        ]
    },
    {
        id: 'citroen',
        name: 'Citroen',
        logo: 'https://logo.clearbit.com/citroen.com',
        models: [
            { id: 'berlingo', name: 'Berlingo', variants: [{ id: 'citroen-berlingo-3-1-5-bluehdi', name: 'K9 1.5 BlueHDi Feel', years: '2018-2025', slug: 'citroen-berlingo-3-1-5-bluehdi' }, { id: 'citroen-berlingo-1-5-bluehdi', name: '1.5 BlueHDi 130 HP Shine Bold (EAT8)', years: '2019-2024', slug: 'citroen-berlingo-1-5-bluehdi' }] },
            { id: 'c-elys-e', name: 'C-Elysée', variants: [{ id: 'citroen-celysee-1-5-bluehdi', name: '1.5 BlueHDi 100 HP Shine', years: '2018-2024', slug: 'citroen-celysee-1-5-bluehdi' }, { id: 'citroen-c-elysee-1-6-hdi', name: '1.6 HDi', years: '2012-2020', slug: 'citroen-c-elysee-1-6-hdi' }, { id: 'citroen-cel-hdi', name: 'C-Elysee 1.6 HDi', years: '2012-2020', slug: 'citroen-c-elysee-1-6-hdi-shine' }] },
            { id: 'c3', name: 'C3', variants: [{ id: 'citroen-c3-2-1-4-hdi', name: 'Mk2 1.4 HDi Attraction', years: '2009-2016', slug: 'citroen-c3-2-1-4-hdi' }, { id: 'citroen-c3-1-2-puretech', name: '1.2 PureTech 82 HP (Manuel)', years: '2016-2024', slug: 'citroen-c3-1-2-puretech' }] },
            { id: 'c3-aircross', name: 'C3 Aircross', variants: [{ id: 'citroen-c3-aircross-new-2024', name: '1.2 PureTech 100 HP Yeni Nesil', years: '2024-2025', slug: 'citroen-c3-aircross-new-2024' }, { id: 'citroen-c3-aircross-1-2-puretech', name: '1.2 PureTech 130 HP Turbo (EAT6)', years: '2017-2024', slug: 'citroen-c3-aircross-1-2-puretech' }, { id: 'citroen-c3-aircross-new-1-2', name: '1.2 PureTech Shine', years: '2022-2025', slug: 'citroen-c3-aircross-new-1-2' }] },
            { id: 'c4', name: 'C4', variants: [{ id: 'citroen-c4-1-2-puretech', name: '1.2 PureTech 130 HP (EAT8)', years: '2021-2024', slug: 'citroen-c4-1-2-puretech' }, { id: 'citroen-c4-1-6-hdi-2008', name: 'I 1.6 HDi', years: '2004-2010', slug: 'citroen-c4-1-6-hdi-2008' }] },
            { id: 'c4-cactus', name: 'C4 Cactus', variants: [{ id: 'citroen-c4-cactus-1-6-bluehdi', name: '1.6 BlueHDi Shine', years: '2014-2020', slug: 'citroen-c4-cactus-1-6-bluehdi' }, { id: 'citroen-c4-cactus-1-2-puretech', name: '1.2 PureTech 110 HP (EAT6)', years: '2014-2020', slug: 'citroen-c4-cactus-1-2-puretech' }, { id: 'citroen-cactus-bhdi', name: 'C4 Cactus 1.6 BlueHDi', years: '2014-2020', slug: 'citroen-c4-cactus-1-6-bluehdi-shine' }] },
            { id: 'c4-picasso', name: 'C4 Picasso', variants: [{ id: 'citroen-c4-picasso-1-6-ehdi', name: '1.6 e-HDi 115 HP', years: '2013-2018', slug: 'citroen-c4-picasso-1-6-ehdi' }] },
            { id: 'c4-x', name: 'C4 X', variants: [{ id: 'citroen-c4-x-1-2-puretech', name: '1.2 PureTech 130 HP (EAT8)', years: '2023-2025', slug: 'citroen-c4-x-1-2-puretech' }] },
            { id: 'c5-aircross', name: 'C5 Aircross', variants: [{ id: 'citroen-c5-aircross-1-5-bluehdi', name: '1.5 BlueHDi 130 HP Shine (EAT8)', years: '2019-2024', slug: 'citroen-c5-aircross-1-5-bluehdi' }, { id: 'citroen-c5-mk1', name: 'C5 Mk1 2.0 HDi', years: '2001-2008', slug: 'citroen-c5-mk1-2-0-hdi-exclusive' }] },
            { id: '-c4', name: 'ë-C4', variants: [{ id: 'citroen-ec4-elektrikli', name: 'Elektrikli 136 HP (50 kWh)', years: '2021-2024', slug: 'citroen-ec4-elektrikli' }] },

            { id: 'citroen-saxo', name: 'Saxo', variants: [{ id: 'citroen-saxo-sx', name: 'Saxo 1.4i SX', years: '1996-2004', slug: 'citroen-saxo-1-4i-sx' }] },
            { id: 'citroen-xsara', name: 'Xsara', variants: [{ id: 'citroen-xsara-sx', name: 'Xsara 1.6 16V SX', years: '1997-2006', slug: 'citroen-xsara-1-6-16v-sx' }] },]
    },
    {
        id: 'cupra',
        name: 'Cupra',
        logo: 'https://logo.clearbit.com/cupraofficial.com',
        models: [
            { id: 'ateca', name: 'Ateca', variants: [{ id: 'cupra-ateca-2-0-tsi-4drive', name: '2.0 TSI 4Drive DSG', years: '2018-2024', slug: 'cupra-ateca-2-0-tsi-4drive' }] },
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
            { id: 'logan-mcv', name: 'Logan MCV', variants: [{ id: 'dacia-logan-mcv-1-5-dci', name: 'K90 1.5 dCi Laureate', years: '2013-2020', slug: 'dacia-logan-mcv-1-5-dci' }] },
            { id: 'sandero-stepway', name: 'Sandero Stepway', variants: [{ id: 'dacia-sandero-2-stepway-0-9-tce', name: 'B52 0.9 TCe', years: '2013-2020', slug: 'dacia-sandero-2-stepway-0-9-tce' }] },
            { id: 'dokker', name: 'Dokker', variants: [{ id: 'dacia-dokker-1-5-dci', name: '1.5 dCi', years: '2012-2021', slug: 'dacia-dokker-1-5-dci' }] },
            { id: 'duster', name: 'Duster', variants: [{ id: 'dacia-duster-1-5-dci', name: 'Mk2 1.5 dCi 4x4 Prestige', years: '2018-2024', slug: 'dacia-duster-1-5-dci' }, { id: 'dacia-duster-1-3-tce', name: '1.3 TCe', years: '2018-2024', slug: 'dacia-duster-1-3-tce' }, { id: 'dacia-duster-mk1', name: 'Duster Mk1 1.5 dCi', years: '2010-2017', slug: 'dacia-duster-mk1-1-5-dci-laureate' }] },
            { id: 'jogger', name: 'Jogger', variants: [{ id: 'dacia-jogger-1-0-tce', name: '1.0 TCe', years: '2022-2024', slug: 'dacia-jogger-1-0-tce' }, { id: 'dacia-jogger-hybrid-140', name: 'Hybrid 140 Extreme', years: '2023-2025', slug: 'dacia-jogger-hybrid-140' }] },
            { id: 'lodgy', name: 'Lodgy', variants: [{ id: 'dacia-lodgy-1-5-dci', name: '1.5 dCi', years: '2012-2022', slug: 'dacia-lodgy-1-5-dci' }] },
            { id: 'sandero', name: 'Sandero', variants: [{ id: 'dacia-sandero-stepway-0-9-tce', name: 'Stepway 0.9 TCe', years: '2012-2020', slug: 'dacia-sandero-stepway-0-9-tce' }, { id: 'dacia-sandero-stepway-1-0-tce', name: 'Stepway 1.0 TCe', years: '2021-2024', slug: 'dacia-sandero-stepway-1-0-tce' }, { id: 'dacia-sandero-mk2', name: 'Sandero Mk2 1.5 dCi', years: '2012-2020', slug: 'dacia-sandero-mk2-1-5-dci-stepway' }] },
            { id: 'spring', name: 'Spring', variants: [{ id: 'dacia-spring-electric', name: 'Electric', years: '2022-2024', slug: 'dacia-spring-electric' }] },
            { id: 'logan', name: 'Logan', variants: [{ id: 'dacia-logan-1-5-dci', name: '1.5 dCi', years: '2005-2012', slug: 'dacia-logan-1-5-dci' }] },
        ]
    },
    {
        id: 'fiat',
        name: 'Fiat',
        logo: 'https://logo.clearbit.com/fiat.com',
        models: [
            { id: '500l', name: '500L', variants: [{ id: 'fiat-500l-1-3-multijet-popstar', name: '1.3 Multijet Popstar', years: '2013-2022', slug: 'fiat-500l-1-3-multijet-popstar' }] },
            { id: '500', name: '500', variants: [{ id: 'fiat-500-1-2-pop', name: '1.2 Pop/Lounge 69 HP', years: '2007-2023', slug: 'fiat-500-1-2-pop' }] },
{ id: '500x', name: '500X', variants: [{ id: 'fiat-500x-1-6-multijet', name: '1.6 MultiJet 120 HP Cross (DCT)', years: '2015-2023', slug: 'fiat-500x-1-6-multijet' }, { id: 'fiat-500x-mj', name: '500X 1.6 MultiJet', years: '2015-2022', slug: 'fiat-500x-1-6-multijet-cross-plus' }] },
            { id: 'doblo', name: 'Doblo', variants: [{ id: 'fiat-doblo-2-1-6-multijet', name: 'Mk2 1.6 Multijet Premio Plus', years: '2010-2022', slug: 'fiat-doblo-2-1-6-multijet' }, { id: 'fiat-doblo-1-3-multijet', name: '1.3 MultiJet 90 HP Combi Premio', years: '2010-2022', slug: 'fiat-doblo-1-3-multijet' }, { id: 'fiat-doblo-1-6-multijet', name: '1.6 MultiJet 120 HP Combi Premio', years: '2010-2022', slug: 'fiat-doblo-1-6-multijet' }, { id: 'fiat-doblo-1-3-multijet-2010', name: '1.3 Multijet (2. Nesil)', years: '2010-2020', slug: 'fiat-doblo-1-3-multijet-2010' }] },
            { id: 'egea', name: 'Egea', variants: [{ id: 'fiat-egea-1-6-multijet-sedan', name: 'Sedan 1.6 Multijet Lounge', years: '2016-2025', slug: 'fiat-egea-1-6-multijet-sedan' }, { id: 'fiat-egea-1-0-turbo-hybrid', name: '1.0 FireFly Turbo Hybrid 100 HP (DCT)', years: '2024-2025', slug: 'fiat-egea-1-0-turbo-hybrid' }, { id: 'fiat-egea-1-3-multijet', name: '1.3 MultiJet 95 HP Sedan (Manuel)', years: '2015-2024', slug: 'fiat-egea-1-3-multijet' }, { id: 'fiat-egea-1-4-fire', name: '1.4 Fire 95 HP Sedan (Manuel)', years: '2015-2024', slug: 'fiat-egea-1-4-fire' }, { id: 'fiat-egea-mj', name: 'Egea 1.3 MultiJet', years: '2015-2024', slug: 'fiat-egea-1-3-multijet-easy' }] },
            { id: 'egea-cross', name: 'Egea Cross', variants: [{ id: 'fiat-egea-cross-1-4', name: '1.4 Fire 95 HP (Manuel)', years: '2020-2024', slug: 'fiat-egea-cross-1-4' }, { id: 'fiat-egea-cross-1-6-multijet', name: '1.6 MultiJet 130 HP DCT (Otomatik)', years: '2021-2024', slug: 'fiat-egea-cross-1-6-multijet' }] },
            { id: 'egea-station-wagon', name: 'Egea Station Wagon', variants: [{ id: 'fiat-egea-sw-1-6-multijet', name: '1.6 MultiJet 120 HP Lounge (DCT)', years: '2017-2024', slug: 'fiat-egea-sw-1-6-multijet' }] },
            { id: 'fiorino', name: 'Fiorino', variants: [{ id: 'fiat-fiorino-1-3-multijet', name: '1.3 MultiJet 75 HP Combi', years: '2008-2024', slug: 'fiat-fiorino-1-3-multijet' }] },
            { id: 'linea', name: 'Linea', variants: [{ id: 'fiat-linea-1-3-multijet-active', name: '1.3 Multijet Active Plus', years: '2007-2016', slug: 'fiat-linea-1-3-multijet-active' }, { id: 'fiat-linea-1-3-multijet', name: '1.3 MultiJet 95 HP', years: '2007-2017', slug: 'fiat-linea-1-3-multijet' }, { id: 'fiat-linea-1-3-multijet-ii', name: '1.3 Multijet II', years: '2007-2017', slug: 'fiat-linea-1-3-multijet-ii' }, { id: 'fiat-linea-mj', name: 'Linea 1.3 Multijet', years: '2007-2017', slug: 'fiat-linea-1-3-multijet-pop' }] },
            { id: 'panda', name: 'Panda', variants: [{ id: 'fiat-panda-1-2-fire', name: '1.2 Fire 69 HP', years: '2012-2024', slug: 'fiat-panda-1-2-fire' }] },
            { id: 'punto', name: 'Punto', variants: [{ id: 'fiat-punto-evo-1-3-multijet', name: '1.3 MultiJet 75 HP Evo', years: '2010-2018', slug: 'fiat-punto-evo-1-3-multijet' }] },
            { id: '-ahin', name: 'Şahin', variants: [{ id: 'tofas-sahin-1-6-ie', name: '1.6 ie S', years: '1998-2002', slug: 'tofas-sahin-1-6-ie' }, { id: 'tofas-sahin-v', name: 'Sahin 1.6 S', years: '1983-2002', slug: 'tofas-sahin-1-6-s' }] },

            { id: 'fiat-tempra', name: 'Tempra', variants: [{ id: 'fiat-tempra-sx', name: 'Tempra 1.6 SX', years: '1991-1999', slug: 'fiat-tempra-1-6-sx' }] },
            { id: 'fiat-marea', name: 'Marea', variants: [{ id: 'fiat-marea-elx', name: 'Marea 1.6 16V ELX', years: '1997-2007', slug: 'fiat-marea-1-6-16v-elx' }] },]
    },
    {
        id: 'ford',
        name: 'Ford',
        logo: 'https://logo.clearbit.com/ford.com',
        models: [
            { id: 'ranger', name: 'Ranger', variants: [{ id: 'ford-ranger-2-0-ecoblue', name: '2.0 EcoBlue', years: '2019-2025', slug: 'ford-ranger-2-0-ecoblue' }] },
            { id: 'focus', name: 'Focus', variants: [{ id: 'ford-focus-2-1-6-tdci', name: 'Mk2 1.6 TDCi', years: '2005-2011', slug: 'ford-focus-2-1-6-tdci' }, { id: 'ford-focus-4-1-5-ecoblue', name: 'Mk4 1.5 EcoBlue', years: '2018-2024', slug: 'ford-focus-4-1-5-ecoblue' }, { id: 'ford-focus-3-5-1-5-tdci', name: 'Mk3.5 1.5 TDCi', years: '2014-2018', slug: 'ford-focus-3-5-1-5-tdci' }, { id: 'ford-focus-3-1-6-tdci', name: 'Mk3 1.6 TDCi', years: '2011-2018', slug: 'ford-focus-3-1-6-tdci' }, { id: 'ford-focus-1-5-ti-vct', name: '1.5 Ti-VCT', years: '2014-2018', slug: 'ford-focus-1-5-ti-vct' }, { id: 'ford-focus-mk1', name: 'Focus Mk1 1.6 Ghia', years: '1998-2005', slug: 'ford-focus-mk1-1-6-ghia' }, { id: 'ford-focus-mk3', name: 'Focus Mk3 1.6 TDCi', years: '2011-2018', slug: 'ford-focus-mk3-1-6-tdci-trend-x' }, { id: 'ford-focus-mk35', name: 'Focus Mk3.5 FL 1.5 TDCi', years: '2015-2018', slug: 'ford-focus-mk3-5-1-5-tdci-facelift' }] },
            { id: 'focus-ps', name: 'Focus PowerShift', variants: [{ id: 'ford-focus-2-1-6-ti-vct-powershift', name: '1.6 Ti-VCT PowerShift', years: '2011-2018', slug: 'ford-focus-2-1-6-ti-vct-powershift' }] },
            { id: 'transit-connect', name: 'Transit Connect', variants: [{ id: 'ford-transit-connect-1-5-ecoblue', name: 'V408 1.5 EcoBlue', years: '2018-2024', slug: 'ford-transit-connect-1-5-ecoblue' }, { id: 'ford-tc-tdci', name: 'Transit Connect 1.5 TDCi', years: '2013-2024', slug: 'ford-transit-connect-1-5-tdci-trend' }] },
            { id: 'ecosport', name: 'EcoSport', variants: [{ id: 'ford-ecosport-1-0-ecoboost', name: '1.0 EcoBoost 125 HP', years: '2014-2022', slug: 'ford-ecosport-1-0-ecoboost' }] },
            { id: 'fiesta', name: 'Fiesta', variants: [{ id: 'ford-fiesta-1-0-ecoboost', name: '1.0 EcoBoost 100/125 HP', years: '2017-2023', slug: 'ford-fiesta-1-0-ecoboost' }, { id: 'ford-fiesta-mk6-1-4-tdci', name: 'Mk6 1.4 TDCi', years: '2008-2013', slug: 'ford-fiesta-mk6-1-4-tdci' }, { id: 'ford-fiesta-mk4', name: 'Fiesta Mk4 1.25', years: '1995-2002', slug: 'ford-fiesta-mk4-1-25-flair' }, { id: 'ford-fiesta-mk7', name: 'Fiesta Mk7 1.4 TDCi', years: '2009-2017', slug: 'ford-fiesta-mk7-1-4-tdci-titanium' }] },
            { id: 'kuga', name: 'Kuga', variants: [{ id: 'ford-kuga-1-5-ecoblue', name: '1.5 EcoBlue 120 HP Titanium (8AT)', years: '2020-2024', slug: 'ford-kuga-1-5-ecoblue' }, { id: 'ford-kuga-fhev-2-5', name: '2.5 FHEV 190 HP Titanium (CVT)', years: '2020-2024', slug: 'ford-kuga-fhev-2-5' }, { id: 'ford-kuga-mk2', name: 'Kuga Mk2 1.5 TDCi', years: '2013-2020', slug: 'ford-kuga-mk2-1-5-tdci-titanium' }] },
            { id: 'mondeo', name: 'Mondeo', variants: [{ id: 'ford-mondeo-1-5-ecoboost', name: '1.5 EcoBoost 160 HP Titanium (6AT)', years: '2014-2022', slug: 'ford-mondeo-1-5-ecoboost' }, { id: 'ford-mondeo-mk2', name: 'Mondeo Mk2 2.0 Ghia', years: '1996-2000', slug: 'ford-mondeo-mk2-2-0-ghia' }] },
            { id: 'puma', name: 'Puma', variants: [{ id: 'ford-puma-1-0-ecoboost', name: '1.0 EcoBoost 125 HP ST-Line (6AT)', years: '2020-2024', slug: 'ford-puma-1-0-ecoboost' }, { id: 'ford-puma-stline-1-0-hybrid', name: '1.0 EcoBoost MHEV 155 HP ST-Line X', years: '2020-2024', slug: 'ford-puma-stline-1-0-hybrid' }] },
            { id: 's-max', name: 'S-Max', variants: [{ id: 'ford-smax-2-0-tdci', name: '2.0 TDCi', years: '2015-2022', slug: 'ford-smax-2-0-tdci' }] },
            { id: 'tourneo-connect', name: 'Tourneo Connect', variants: [{ id: 'ford-tourneo-connect-1-5-tdci', name: '1.5 EcoBlue 120 HP Titanium (8AT)', years: '2018-2024', slug: 'ford-tourneo-connect-1-5-tdci' }] },
            { id: 'tourneo-courier', name: 'Tourneo Courier', variants: [{ id: 'ford-courier-1-5-tdci-titanium', name: '1.5 TDCi Titanium Plus', years: '2014-2024', slug: 'ford-courier-1-5-tdci-titanium' }, { id: 'ford-tourneo-courier-1-5-tdci', name: '1.5 TDCi 100 HP Titanium Plus', years: '2014-2024', slug: 'ford-tourneo-courier-1-5-tdci' }] },
            { id: 'transit-custom', name: 'Transit Custom', variants: [{ id: 'ford-transit-custom-2-0-ecoblue', name: '2.0 EcoBlue 130 HP Titanium (6MT)', years: '2018-2024', slug: 'ford-transit-custom-2-0-ecoblue' }] },

            { id: 'ford-taunus', name: 'Taunus', variants: [{ id: 'ford-taunus-gl', name: 'Taunus 2.0 GL Oto', years: '1970-1994', slug: 'ford-taunus-2-0-gl-oto' }] },
            { id: 'ford-escort', name: 'Escort', variants: [{ id: 'ford-escort-clx', name: 'Escort 1.6 CLX', years: '1990-2000', slug: 'ford-escort-1-6-clx-zetec' }] },
            { id: 'ford-courier', name: 'Courier', variants: [{ id: 'ford-courier-tdci', name: 'Courier 1.5 TDCi', years: '2014-2024', slug: 'ford-courier-1-5-tdci-trend' }] },]
    },
    {
        id: 'honda',
        name: 'Honda',
        logo: 'https://logo.clearbit.com/honda.com',
        models: [
            { id: 'jazz', name: 'Jazz', variants: [{ id: 'honda-jazz-1-5-ehev', name: '1.5 e:HEV', years: '2020-2025', slug: 'honda-jazz-1-5-ehev' }] },
            { id: 'city', name: 'City', variants: [{ id: 'honda-city-1-5-i-vtec', name: '1.5 i-VTEC', years: '2020-2025', slug: 'honda-city-1-5-i-vtec' }] },
            { id: 'civic', name: 'Civic', variants: [{ id: 'honda-civic-fb7-1-6-vtec', name: 'FB7 1.6 i-VTEC', years: '2012-2016', slug: 'honda-civic-fb7-1-6-vtec' }, { id: 'honda-civic-fd6-1-6-vtec', name: 'FD6 1.6 VTEC', years: '2006-2012', slug: 'honda-civic-fd6-1-6-vtec' }, { id: 'honda-civic-fe1-1-5-turbo', name: 'FE1 1.5 Turbo', years: '2022-2025', slug: 'honda-civic-fe1-1-5-turbo' }, { id: 'honda-civic-fk7-1-0-turbo', name: 'FK7 1.0 Turbo', years: '2017-2021', slug: 'honda-civic-fk7-1-0-turbo' }, { id: 'honda-civic-fc5-1-6-vtec', name: 'FC5 1.6 VTEC', years: '2016-2021', slug: 'honda-civic-fc5-1-6-vtec' }, { id: 'honda-civic-fb7-eco', name: 'FB7 Eco', years: '2012-2016', slug: 'honda-civic-fb7-eco' }, { id: 'honda-civic-ek', name: 'Civic EK 1.6 ViRS', years: '1996-2000', slug: 'honda-civic-ek-1-6-vtec-virs' }, { id: 'honda-civic-fc', name: 'Civic FC 1.6 i-VTEC', years: '2016-2021', slug: 'honda-civic-fc-1-6-i-vtec-eco-elegance' }] },
            { id: 'accord', name: 'Accord', variants: [{ id: 'honda-accord-2-0', name: '2.0 i-VTEC 155 HP Executive (5AT)', years: '2008-2015', slug: 'honda-accord-2-0' }, { id: 'honda-accord-cg', name: 'Accord CG 2.0 ES', years: '1998-2003', slug: 'honda-accord-cg-2-0-es' }] },
            { id: 'cr-v', name: 'CR-V', variants: [{ id: 'honda-crv-4-1-6-idtec', name: 'Mk4 1.6 i-DTEC Executive', years: '2012-2018', slug: 'honda-crv-4-1-6-idtec' }, { id: 'honda-crv-hybrid', name: '2.0 i-MMD e:HEV 184 HP (eCVT)', years: '2019-2023', slug: 'honda-crv-hybrid' }] },
            { id: 'hr-v', name: 'HR-V', variants: [{ id: 'honda-hrv-ehev-hybrid', name: '1.5 e:HEV 131 HP (eCVT)', years: '2022-2025', slug: 'honda-hrv-ehev-hybrid' }, { id: 'honda-hrv-1-5-ivtec', name: '1.5 i-VTEC 130 HP Executive (CVT)', years: '2015-2021', slug: 'honda-hrv-1-5-ivtec' }, { id: 'honda-hrv-ru', name: 'HR-V RU 1.5 i-VTEC', years: '2015-2021', slug: 'honda-hr-v-ru-1-5-i-vtec-executive' }] },
            { id: 'zr-v', name: 'ZR-V', variants: [{ id: 'honda-zrv-2-0-ehev', name: '2.0 e:HEV 184 HP Sport (eCVT)', years: '2023-2025', slug: 'honda-zrv-2-0-ehev' }] },
        ]
    },
    {
        id: 'hyundai',
        name: 'Hyundai',
        logo: 'https://logo.clearbit.com/hyundai.com',
        models: [
            { id: 'accent', name: 'Accent Blue', variants: [{ id: 'hyundai-accent-blue-1-4-cvvt', name: 'RB 1.4 CVVT Mode Plus', years: '2011-2018', slug: 'hyundai-accent-blue-1-4-cvvt' }, { id: 'hyundai-accent-lc', name: 'Accent LC 1.5 CRDi', years: '1999-2005', slug: 'hyundai-accent-lc-1-5-crdi-admire' }, { id: 'hyundai-accent-blue', name: 'Accent Blue 1.6 CRDi', years: '2011-2018', slug: 'hyundai-accent-blue-1-6-crdi-mode-plus' }, { id: 'hyundai-accent-blue-1-6-crdi', name: '1.6 CRDi DCT', years: '2011-2018', slug: 'hyundai-accent-blue-1-6-crdi' }] },
            { id: 'i30', name: 'i30', variants: [{ id: 'hyundai-i30-1-6-crdi', name: 'GD 1.6 CRDi DCT Elite', years: '2012-2017', slug: 'hyundai-i30-1-6-crdi' }, { id: 'hyundai-i30-mk2', name: 'i30 Mk2 1.6 CRDi', years: '2012-2017', slug: 'hyundai-i30-mk2-1-6-crdi-elite' }] },
{ id: 'bayon', name: 'Bayon', variants: [{ id: 'hyundai-bayon-1-4-mpi', name: '1.4 MPI', years: '2021-2024', slug: 'hyundai-bayon-1-4-mpi' }] },
            { id: 'elantra', name: 'Elantra', variants: [{ id: 'hyundai-elantra-1-6-mpi', name: '1.6 MPI', years: '2021-2024', slug: 'hyundai-elantra-1-6-mpi' }, { id: 'hyundai-elantra-xd', name: 'Elantra XD 1.6 GL', years: '2000-2006', slug: 'hyundai-elantra-xd-1-6-gl' }] },
            { id: 'kona', name: 'Kona', variants: [{ id: 'hyundai-kona-1-0-tgdi', name: '1.0 T-GDI', years: '2017-2023', slug: 'hyundai-kona-1-0-tgdi' }, { id: 'hyundai-kona-1-6-tgdi', name: '1.6 T-GDI Elite', years: '2018-2023', slug: 'hyundai-kona-1-6-tgdi' }, { id: 'hyundai-kona-ev-39kwh', name: 'EV 39.2 kWh Style', years: '2019-2023', slug: 'hyundai-kona-ev-39kwh' }] },
            { id: 'santa-fe', name: 'Santa Fe', variants: [{ id: 'hyundai-santafe-2-2-crdi', name: '2.2 CRDi', years: '2019-2024', slug: 'hyundai-santafe-2-2-crdi' }] },
            { id: 'tucson', name: 'Tucson', variants: [{ id: 'hyundai-tucson-nx4-1-6-tgdi', name: 'NX4 1.6 T-GDI 4x4 DCT', years: '2021-2025', slug: 'hyundai-tucson-nx4-1-6-tgdi' }, { id: 'hyundai-tucson-1-6-t-gdi', name: '1.6 T-GDI', years: '2021-2024', slug: 'hyundai-tucson-1-6-t-gdi' }, { id: 'hyundai-tucson-1-6-tgdi', name: '1.6 T-GDI Elite', years: '2020-2024', slug: 'hyundai-tucson-1-6-tgdi' }, { id: 'hyundai-tucson-tl', name: 'Tucson TL 1.6 CRDi', years: '2015-2020', slug: 'hyundai-tucson-tl-1-6-crdi-elite' }, { id: 'hyundai-tucson-tl-fl', name: 'Tucson TL FL 1.6 CRDi', years: '2018-2020', slug: 'hyundai-tucson-tl-facelift-1-6-crdi-elite-plus' }] },
            { id: 'i10', name: 'i10', variants: [{ id: 'hyundai-i10-1-2-mpi', name: '1.2 MPI', years: '2020-2024', slug: 'hyundai-i10-1-2-mpi' }] },
            { id: 'i20', name: 'i20', variants: [{ id: 'hyundai-i20-n-line-1-0-tgdi', name: 'BC3 1.0 T-GDI 48V N Line', years: '2020-2025', slug: 'hyundai-i20-n-line-1-0-tgdi' }, { id: 'hyundai-i20-1-4-jump', name: '1.4 Jump', years: '2020-2024', slug: 'hyundai-i20-1-4-jump' }, { id: 'hyundai-i20-1-4-mpi', name: '1.4 MPI Style', years: '2014-2020', slug: 'hyundai-i20-1-4-mpi' }, { id: 'hyundai-i20-troy-1-4', name: '1.4 Troy', years: '2009-2014', slug: 'hyundai-i20-troy-1-4' }, { id: 'hyundai-i20-crdi', name: 'i20 Mk1 1.4 CRDi', years: '2009-2014', slug: 'hyundai-i20-mk1-1-4-crdi-style' }] },
            { id: 'ix35', name: 'ix35', variants: [{ id: 'hyundai-ix35-1-6-gdi', name: '1.6 GDI Style', years: '2010-2015', slug: 'hyundai-ix35-1-6-gdi' }] },
            { id: 'accent-era', name: 'Accent Era', variants: [{ id: 'hyundai-accent-era-1-5-crdi', name: '1.5 CRDi', years: '2006-2012', slug: 'hyundai-accent-era-1-5-crdi' }] },
            { id: 'getz', name: 'Getz', variants: [{ id: 'hyundai-getz-1-5-crdi', name: '1.5 CRDi', years: '2005-2011', slug: 'hyundai-getz-1-5-crdi' }] },
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
            { id: 'wrangler', name: 'Wrangler', variants: [{ id: 'jeep-wrangler-jl-2-0-turbo', name: 'JL 2.0 Turbo Rubicon', years: '2018-2025', slug: 'jeep-wrangler-jl-2-0-turbo' }] },
            { id: 'cherokee', name: 'Cherokee', variants: [{ id: 'jeep-cherokee-2-0-td', name: 'KL 2.0 TD Limited AWD', years: '2014-2022', slug: 'jeep-cherokee-2-0-td' }] },
            { id: 'compass', name: 'Compass', variants: [{ id: 'jeep-compass-1-3-turbo', name: '1.3 T4 150 HP Limited (DDCT)', years: '2017-2024', slug: 'jeep-compass-1-3-turbo' }] },
            { id: 'renegade', name: 'Renegade', variants: [{ id: 'jeep-renegade-1-3-turbo', name: '1.3 T4 150 HP Limited (DDCT)', years: '2019-2023', slug: 'jeep-renegade-1-3-turbo' }, { id: 'jeep-renegade-1-6-multijet', name: '1.6 MultiJet 120 HP Longitude (DDCT)', years: '2015-2023', slug: 'jeep-renegade-1-6-multijet' }] },
        ]
    },
    {
        id: 'kia',
        name: 'Kia',
        logo: 'https://logo.clearbit.com/kia.com',
        models: [
            { id: 'ceed', name: 'Ceed', variants: [{ id: 'kia-ceed-jd-1-6-crdi', name: 'JD 1.6 CRDi DCT Premium', years: '2012-2018', slug: 'kia-ceed-jd-1-6-crdi' }, { id: 'kia-ceed-1-5-tgdi', name: '1.5 T-GDI', years: '2021-2024', slug: 'kia-ceed-1-5-tgdi' }, { id: 'kia-ceed-1-6-crdi', name: '1.6 CRDi', years: '2018-2024', slug: 'kia-ceed-1-6-crdi' }, { id: 'kia-ceed-sw-1-5-tgdi', name: 'SW 1.5 T-GDi DCT Prestige', years: '2021-2025', slug: 'kia-ceed-sw-1-5-tgdi' }, { id: 'kia-ceed-ed-1-6-crdi', name: 'ED 1.6 CRDi', years: '2007-2012', slug: 'kia-ceed-ed-1-6-crdi' }, { id: 'kia-ceed-jd', name: 'Ceed JD 1.6 CRDi', years: '2012-2018', slug: 'kia-ceed-jd-1-6-crdi-concept-plus' }] },
            { id: 'cerato', name: 'Cerato', variants: [{ id: 'kia-cerato-1-6-mpi', name: '1.6 MPI', years: '2017-2021', slug: 'kia-cerato-1-6-mpi' }, { id: 'kia-cerato-2010-1-6-crdi', name: '1.6 CRDi', years: '2009-2013', slug: 'kia-cerato-2010-1-6-crdi' }] },
            { id: 'niro', name: 'Niro', variants: [{ id: 'kia-niro-hybrid', name: '1.6 GDI Hybrid', years: '2016-2022', slug: 'kia-niro-hybrid' }, { id: 'kia-niro-ev', name: 'EV', years: '2022-2024', slug: 'kia-niro-ev' }] },
            { id: 'picanto', name: 'Picanto', variants: [{ id: 'kia-picanto-1-0-amt', name: '1.0 AMT', years: '2017-2024', slug: 'kia-picanto-1-0-amt' }] },
            { id: 'rio', name: 'Rio', variants: [{ id: 'kia-rio-4-1-4-mpi-cool', name: 'YB 1.4 MPI Cool Plus', years: '2017-2023', slug: 'kia-rio-4-1-4-mpi-cool' }, { id: 'kia-rio-1-4-mpi', name: '1.4 MPI', years: '2017-2023', slug: 'kia-rio-1-4-mpi' }, { id: 'kia-rio-ub', name: 'Rio UB 1.4 CRDi', years: '2011-2017', slug: 'kia-rio-ub-1-4-crdi-concept' }] },
            { id: 'sportage', name: 'Sportage', variants: [{ id: 'kia-sportage-ql-1-6-crdi', name: 'QL 1.6 CRDi DCT 4x4 GT-Line', years: '2016-2021', slug: 'kia-sportage-ql-1-6-crdi' }, { id: 'kia-sportage-1-6-crdi', name: '1.6 CRDi Mild Hybrid', years: '2021-2024', slug: 'kia-sportage-1-6-crdi' }, { id: 'kia-sportage-1-6-gdi', name: '1.6 GDI Concept Plus', years: '2012-2016', slug: 'kia-sportage-1-6-gdi' }, { id: 'kia-sportage-1-6-tgdi', name: '1.6 T-GDI', years: '2022-2024', slug: 'kia-sportage-1-6-tgdi' }, { id: 'kia-sportage-ql', name: 'Sportage QL 1.6 CRDi', years: '2016-2021', slug: 'kia-sportage-ql-1-6-crdi-concept-plus' }, { id: 'kia-sportage-ql-fl', name: 'Sportage QL FL 1.6 CRDi', years: '2019-2021', slug: 'kia-sportage-ql-facelift-1-6-crdi-gt-line' }] },
            { id: 'stonic', name: 'Stonic', variants: [{ id: 'kia-stonic-1-4-mpi', name: '1.4 MPI', years: '2017-2024', slug: 'kia-stonic-1-4-mpi' }] },

            { id: 'kia-sephia', name: 'Sephia', variants: [{ id: 'kia-sephia-gtx', name: 'Sephia 1.5 GTX', years: '1994-2001', slug: 'kia-sephia-1-5-gtx' }] },]
    },
    {
        id: 'land-rover',
        name: 'Land Rover',
        logo: 'https://logo.clearbit.com/landrover.com',
        models: [
            { id: 'freelander', name: 'Freelander 2', variants: [{ id: 'lr-freelander-2-2-td4', name: '2.2 TD4 HSE', years: '2006-2014', slug: 'lr-freelander-2-2-td4' }] },
            { id: 'discovery-sport', name: 'Discovery Sport', variants: [{ id: 'lr-discovery-sport-2-0-td4', name: '2.0 TD4 HSE AWD', years: '2015-2023', slug: 'lr-discovery-sport-2-0-td4' }] },
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
            { id: 'zs', name: 'ZS', variants: [{ id: 'mg-zs-1-0-turbo', name: '1.0 Turbo Luxury', years: '2020-2025', slug: 'mg-zs-1-0-turbo' }, { id: 'mg-zs-ev', name: 'EV', years: '2021-2024', slug: 'mg-zs-ev' }] },
        ]
    },
    {
        id: 'mazda',
        name: 'Mazda',
        logo: 'https://logo.clearbit.com/mazda.com',
        models: [
            { id: 'cx-3', name: 'CX-3', variants: [{ id: 'mazda-cx3-1-5-diesel', name: '1.5 Skyactiv-D', years: '2015-2022', slug: 'mazda-cx3-1-5-diesel' }] },
            { id: 'cx-30', name: 'CX-30', variants: [{ id: 'mazda-cx30-2-0-skyactiv', name: '2.0 Skyactiv-G Power Sense', years: '2020-2024', slug: 'mazda-cx30-2-0-skyactiv' }] },
            { id: 'cx-5', name: 'CX-5', variants: [{ id: 'mazda-cx5-2-5-skyactiv', name: 'KF 2.5 Skyactiv-G AWD', years: '2017-2024', slug: 'mazda-cx5-2-5-skyactiv' }, { id: 'mazda-cx5-2-0-skyactiv', name: '2.0 Skyactiv-G', years: '2017-2024', slug: 'mazda-cx5-2-0-skyactiv' }] },
            { id: 'mazda3', name: 'Mazda3', variants: [{ id: 'mazda-3-2-0-skyactiv', name: '2.0 Skyactiv-G', years: '2019-2024', slug: 'mazda-3-2-0-skyactiv' }, { id: 'mazda-3-bl-1-6d', name: 'BL 1.6 CD', years: '2009-2013', slug: 'mazda-3-bl-1-6d' }] },
        ]
    },
    {
        id: 'mercedes-benz',
        name: 'Mercedes-Benz',
        logo: 'https://logo.clearbit.com/mercedes-benz.com',
        models: [
            { id: 'cla', name: 'CLA', variants: [{ id: 'mercedes-cla-180d-c117', name: 'CLA 180d C117', years: '2013-2019', slug: 'mercedes-cla-180d-c117' }, { id: 'mercedes-cla-200', name: 'CLA 200', years: '2013-2019', slug: 'mercedes-cla-200' }] },
            { id: 'a-class', name: 'A Serisi', variants: [{ id: 'mercedes-a180-w176', name: 'A180 W176 CDI', years: '2012-2018', slug: 'mercedes-a180-w176' }, { id: 'mercedes-a180d-amg-v177', name: 'A180d Sedan AMG', years: '2019-2025', slug: 'mercedes-a180d-amg-v177' }, { id: 'mercedes-a180-w177', name: 'A180 1.3 Turbo', years: '2018-2024', slug: 'mercedes-a180-w177' }, { id: 'mercedes-a180d-sedan-v177', name: 'A180d Sedan 1.5 Dizel AMG', years: '2019-2024', slug: 'mercedes-a180d-sedan-v177' }] },
            { id: 'e-class', name: 'E Serisi', variants: [{ id: 'mercedes-e220d-w212', name: 'E220d W212 2.1 CDI', years: '2009-2016', slug: 'mercedes-e220d-w212' }, { id: 'merc-w210', name: 'W210 E200 M111', years: '1995-2003', slug: 'mercedes-w210-e200-m111' }, { id: 'merc-w124', name: 'W124 E200 M111', years: '1984-1997', slug: 'mercedes-w124-e200-m111' }, { id: 'mercedes-e200-w213', name: 'E200 2.0 Turbo', years: '2016-2023', slug: 'mercedes-e200-w213' }, { id: 'mercedes-e220d-w213', name: 'E220d 2.0 Dizel 4Matic', years: '2016-2023', slug: 'mercedes-e220d-w213' }, { id: 'mercedes-e250-w212', name: 'E250 1.8 Turbo', years: '2009-2016', slug: 'mercedes-e250-w212' }, { id: 'mercedes-e200-w211', name: 'E200 Kompressor W211', years: '2003-2009', slug: 'mercedes-e200-w211' }] },
{ id: 'b-serisi', name: 'B Serisi', variants: [{ id: 'mercedes-b180d-w247', name: 'B180d', years: '2019-2024', slug: 'mercedes-b180d-w247' }] },
            { id: 'c-serisi', name: 'C Serisi', variants: [{ id: 'mercedes-c180-w205', name: 'C180 1.6 Turbo', years: '2014-2021', slug: 'mercedes-c180-w205' }, { id: 'mercedes-c200-w205', name: 'C200 2.0 Turbo', years: '2014-2021', slug: 'mercedes-c200-w205' }, { id: 'mercedes-c200-w206', name: 'C200 4Matic 1.5 Turbo +EQ', years: '2021-2025', slug: 'mercedes-c200-w206' }, { id: 'mercedes-c200d-w205', name: 'C200d 1.6 Dizel AMG', years: '2014-2021', slug: 'mercedes-c200d-w205' }, { id: 'mercedes-c180-w204-kompressor', name: 'C180 Kompressor W204', years: '2007-2014', slug: 'mercedes-c180-w204-kompressor' }, { id: 'mercedes-c180-w204', name: 'C180 W204 1.6', years: '2007-2014', slug: 'mercedes-c180-w204' }, { id: 'merc-w202', name: 'W202 C180 M111', years: '1993-2000', slug: 'mercedes-w202-c180-m111' }] },
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
            { id: 'cooper', name: 'Cooper', variants: [{ id: 'mini-cooper-f55-1-5', name: 'F55 5-Door 1.5 Turbo', years: '2014-2021', slug: 'mini-cooper-f55-1-5' }, { id: 'mini-cooper-f56', name: 'F56', years: '2014-2024', slug: 'mini-cooper-f56' }] },
            { id: 'countryman', name: 'Countryman', variants: [{ id: 'mini-countryman-f60', name: 'Cooper ALL4', years: '2017-2024', slug: 'mini-countryman-f60' }] },
        ]
    },
    {
        id: 'mitsubishi',
        name: 'Mitsubishi',
        logo: 'https://logo.clearbit.com/mitsubishi-motors.com',
        models: [
            { id: 'outlander', name: 'Outlander', variants: [{ id: 'mitsubishi-outlander-2-0', name: 'GF 2.0 CVT 4WD Intense', years: '2013-2021', slug: 'mitsubishi-outlander-2-0' }] },
            { id: 'asx', name: 'ASX', variants: [{ id: 'mitsubishi-asx-1-3-turbo', name: '1.3 Turbo Instyle', years: '2023-2024', slug: 'mitsubishi-asx-1-3-turbo' }] },
            { id: 'eclipse-cross', name: 'Eclipse Cross', variants: [{ id: 'mitsubishi-eclipse-cross-phev', name: 'PHEV', years: '2021-2024', slug: 'mitsubishi-eclipse-cross-phev' }] },
            { id: 'l200', name: 'L200', variants: [{ id: 'mitsubishi-l200-tornado', name: '2.4 DI-D Tornado', years: '2015-2023', slug: 'mitsubishi-l200-tornado' }] },
            { id: 'lancer', name: 'Lancer', variants: [{ id: 'mitsubishi-lancer-1-6-mivec', name: '1.6 MIVEC', years: '2008-2014', slug: 'mitsubishi-lancer-1-6-mivec' }] },
        ]
    },
    {
        id: 'nissan',
        name: 'Nissan',
        logo: 'https://logo.clearbit.com/nissan.com.tr',
        models: [
            { id: 'pulsar', name: 'Pulsar', variants: [{ id: 'nissan-pulsar-1-5-dci', name: 'C13 1.5 dCi Tekna', years: '2014-2018', slug: 'nissan-pulsar-1-5-dci' }] },
            { id: 'micra', name: 'Micra', variants: [{ id: 'nissan-micra-ig-t', name: 'K14 1.0 IG-T N-Connecta', years: '2017-2024', slug: 'nissan-micra-ig-t' }] },
            { id: 'juke', name: 'Juke', variants: [{ id: 'nissan-juke-1-0-dig-t', name: '1.0 DIG-T', years: '2019-2024', slug: 'nissan-juke-1-0-dig-t' }, { id: 'nissan-juke-1-6-cvt', name: '1.6 Visia/Tekna', years: '2011-2019', slug: 'nissan-juke-1-6-cvt' }, { id: 'nissan-juke-f15', name: 'Juke F15 1.6 Turbo', years: '2010-2019', slug: 'nissan-juke-f15-1-6-turbo-tekna' }] },
            { id: 'navara', name: 'Navara', variants: [{ id: 'nissan-navara-2-3-dci', name: '2.3 dCi', years: '2016-2023', slug: 'nissan-navara-2-3-dci' }] },
            { id: 'qashqai', name: 'Qashqai', variants: [{ id: 'nissan-qashqai-1-3-dig-t', name: '1.3 DIG-T', years: '2021-2024', slug: 'nissan-qashqai-1-3-dig-t' }, { id: 'nissan-qashqai-j11-1-5-dci', name: 'J11 1.5 dCi Sky Pack', years: '2014-2021', slug: 'nissan-qashqai-j11-1-5-dci' }, { id: 'nissan-qashqai-e-power', name: 'e-POWER N-Connecta', years: '2022-2025', slug: 'nissan-qashqai-e-power' }, { id: 'nissan-qashqai-j10-1-5-dci', name: 'J10 1.5 dCi', years: '2007-2013', slug: 'nissan-qashqai-j10-1-5-dci' }, { id: 'nissan-qash-j11', name: 'Qashqai J11 1.6 dCi', years: '2014-2021', slug: 'nissan-qashqai-j11-1-6-dci-tekna' }, { id: 'nissan-qashqai-j11-fl', name: 'Qashqai J11 FL 1.3 DIG-T', years: '2017-2021', slug: 'nissan-qashqai-j11-facelift-1-3-dig-t-tekna' }] },
            { id: 'x-trail', name: 'X-Trail', variants: [{ id: 'nissan-xtrail-t31-2-0-dci', name: 'T31 2.0 dCi 4x4', years: '2007-2014', slug: 'nissan-xtrail-t31-2-0-dci' }, { id: 'nissan-xtrail-1-6-dci', name: '1.6 dCi Platinum', years: '2014-2021', slug: 'nissan-xtrail-1-6-dci' }] },
            { id: 'note', name: 'Note', variants: [{ id: 'nissan-note-1-5-dci', name: '1.5 dCi', years: '2006-2013', slug: 'nissan-note-1-5-dci' }] },

            { id: 'nissan-primera', name: 'Primera', variants: [{ id: 'nissan-primera-p11', name: 'Primera P11 2.0 GX', years: '1996-2002', slug: 'nissan-primera-p11-2-0-gx' }] },]
    },
    {
        id: 'opel',
        name: 'Opel',
        logo: 'https://logo.clearbit.com/opel.com',
        models: [
            { id: 'insignia-a', name: 'Insignia A', variants: [{ id: 'opel-insignia-a-2-0-cdti-cosmo', name: '2.0 CDTi Cosmo', years: '2008-2017', slug: 'opel-insignia-a-2-0-cdti-cosmo' }] },
            { id: 'astra', name: 'Astra', variants: [{ id: 'opel-insignia-b-1-5-turbo', name: 'Insignia B 1.5 Turbo', years: '2017-2022', slug: 'opel-insignia-b-1-5-turbo' }, { id: 'opel-astra-h-1-3-cdti', name: 'H 1.3 CDTi Enjoy', years: '2004-2010', slug: 'opel-astra-h-1-3-cdti' }, { id: 'opel-astra-1-2-turbo', name: '1.2 Turbo', years: '2022-2024', slug: 'opel-astra-1-2-turbo' }, { id: 'opel-astra-j-1-4-turbo', name: '1.4 Turbo Sport', years: '2009-2020', slug: 'opel-astra-j-1-4-turbo' }, { id: 'opel-astra-k-1-4-turbo', name: 'K 1.4 Turbo Excellence', years: '2015-2021', slug: 'opel-astra-k-1-4-turbo' }, { id: 'opel-astra-j-1-6-cdti', name: 'J 1.6 CDTi', years: '2009-2015', slug: 'opel-astra-j-1-6-cdti' }, { id: 'opel-astra-f', name: 'Astra F 1.6 GL', years: '1991-1998', slug: 'opel-astra-f-1-6-gl' }, { id: 'opel-astra-g', name: 'Astra G 1.6 Comfort', years: '1998-2004', slug: 'opel-astra-g-1-6-comfort' }, { id: 'opel-astra-j', name: 'Astra J 1.6 CDTi', years: '2009-2015', slug: 'opel-astra-j-1-6-cdti-sport' }, { id: 'opel-astra-j-fl', name: 'Astra J FL 1.6 CDTi', years: '2012-2015', slug: 'opel-astra-j-facelift-1-6-cdti-sport' }] },
            { id: 'combo', name: 'Combo', variants: [{ id: 'opel-combo-1-5-cdti', name: '1.5 CDTI', years: '2018-2024', slug: 'opel-combo-1-5-cdti' }] },
            { id: 'corsa', name: 'Corsa', variants: [{ id: 'opel-corsa-e-1-4-enjoy', name: 'E 1.4 Enjoy Otomatik', years: '2014-2019', slug: 'opel-corsa-e-1-4-enjoy' }, { id: 'opel-corsa-1-2-turbo', name: '1.2 Turbo', years: '2019-2024', slug: 'opel-corsa-1-2-turbo' }, { id: 'opel-corsa-d-1-3-cdti', name: 'D 1.3 CDTi', years: '2006-2014', slug: 'opel-corsa-d-1-3-cdti' }, { id: 'opel-corsa-b', name: 'Corsa B 1.4 Swing', years: '1993-2000', slug: 'opel-corsa-b-1-4-swing' }, { id: 'opel-corsa-d', name: 'Corsa D 1.3 CDTi', years: '2006-2014', slug: 'opel-corsa-d-1-3-cdti-enjoy' }] },
            { id: 'crossland', name: 'Crossland', variants: [{ id: 'opel-crossland-1-2-turbo', name: '1.2 Turbo', years: '2020-2024', slug: 'opel-crossland-1-2-turbo' }] },
            { id: 'grandland', name: 'Grandland', variants: [{ id: 'opel-grandland-1-2-turbo', name: '1.2 Turbo GS Line', years: '2022-2025', slug: 'opel-grandland-1-2-turbo' }, { id: 'opel-grandland-1-5-diesel', name: '1.5 Diesel', years: '2018-2024', slug: 'opel-grandland-1-5-diesel' }] },
            { id: 'grandland-x', name: 'Grandland X', variants: [{ id: 'opel-grandland-x-1-2-turbo', name: '1.2 Turbo', years: '2017-2024', slug: 'opel-grandland-x-1-2-turbo' }] },
            { id: 'insignia', name: 'Insignia', variants: [{ id: 'opel-insignia-a-1-6-turbo', name: '1.6 Turbo Cosmo', years: '2009-2017', slug: 'opel-insignia-a-1-6-turbo' }, { id: 'opel-insignia-a-cdti', name: 'Insignia A 1.6 CDTi', years: '2009-2017', slug: 'opel-insignia-a-1-6-cdti-cosmo' }] },
            { id: 'mokka', name: 'Mokka', variants: [{ id: 'opel-mokka-1-2-turbo', name: '1.2 Turbo', years: '2021-2024', slug: 'opel-mokka-1-2-turbo' }, { id: 'opel-mokka-cdti', name: 'Mokka 1.6 CDTi', years: '2012-2019', slug: 'opel-mokka-1-6-cdti-enjoy' }] },

            { id: 'opel-vectra', name: 'Vectra', variants: [{ id: 'opel-vectra-a', name: 'Vectra A 2.0 GL', years: '1988-1995', slug: 'opel-vectra-a-2-0-gl' }, { id: 'opel-vectra-b', name: 'Vectra B 1.6 Comfort', years: '1995-2002', slug: 'opel-vectra-b-1-6-comfort' }] },
            { id: 'opel-omega', name: 'Omega', variants: [{ id: 'opel-omega-b', name: 'Omega B 2.0 GLS', years: '1994-2003', slug: 'opel-omega-b-2-0-gls' }] },]
    },
    {
        id: 'peugeot',
        name: 'Peugeot',
        logo: 'https://logo.clearbit.com/peugeot.com',
        models: [
            { id: '2008', name: '2008', variants: [{ id: 'peugeot-2008-1-5-bluehdi', name: 'P24 1.5 BlueHDi Allure', years: '2020-2025', slug: 'peugeot-2008-1-5-bluehdi' }, { id: 'peugeot-2008-1-2-puretech', name: '1.2 PureTech', years: '2020-2024', slug: 'peugeot-2008-1-2-puretech' }, { id: 'peugeot-2008-mk1', name: '2008 Mk1 1.6 e-HDi', years: '2013-2019', slug: 'peugeot-2008-mk1-1-6-e-hdi-allure' }] },
            { id: '208', name: '208', variants: [{ id: 'peugeot-208-1-2-puretech', name: '1.2 PureTech Allure', years: '2019-2024', slug: 'peugeot-208-1-2-puretech' }] },
            { id: '3008', name: '3008', variants: [{ id: 'peugeot-3008-1-5-bluehdi', name: '1.5 BlueHDi', years: '2016-2023', slug: 'peugeot-3008-1-5-bluehdi' }, { id: 'peugeot-3008-1-6-puretech', name: '1.6 PureTech Allure', years: '2017-2024', slug: 'peugeot-3008-1-6-puretech' }, { id: 'peugeot-3008-fl', name: '3008 II FL 1.5 BlueHDi', years: '2021-2023', slug: 'peugeot-3008-facelift-1-5-bluehdi-allure' }] },
            { id: '301', name: '301', variants: [{ id: 'peugeot-301-1-6-hdi-active', name: '1.6 HDi Active', years: '2012-2022', slug: 'peugeot-301-1-6-hdi-active' }, { id: 'peugeot-301-1-6-hdi', name: '1.6 HDi Allure', years: '2012-2022', slug: 'peugeot-301-1-6-hdi' }] },
            { id: '308', name: '308', variants: [{ id: 'peugeot-308-t7-1-6-hdi', name: 'T7 1.6 HDi Access', years: '2007-2013', slug: 'peugeot-308-t7-1-6-hdi' }, { id: 'peugeot-308-new-1-2', name: '1.2 PureTech', years: '2022-2024', slug: 'peugeot-308-new-1-2' }, { id: 'peugeot-308-t9-1-6-ehdi', name: 'T9 1.6 e-HDi', years: '2013-2021', slug: 'peugeot-308-t9-1-6-ehdi' }, { id: 'peugeot-308-mk2', name: '308 Mk2 1.6 BlueHDi', years: '2013-2021', slug: 'peugeot-308-mk2-1-6-bluehdi-active' }] },
            { id: '408', name: '408', variants: [{ id: 'peugeot-408-1-2-puretech', name: '1.2 PureTech', years: '2023-2024', slug: 'peugeot-408-1-2-puretech' }] },
            { id: '5008', name: '5008', variants: [{ id: 'peugeot-5008-1-6-bluehdi', name: '1.6 BlueHDi Allure', years: '2017-2020', slug: 'peugeot-5008-1-6-bluehdi' }] },
            { id: '508', name: '508', variants: [{ id: 'peugeot-508-1-5-bluehdi', name: '1.5 BlueHDi', years: '2018-2024', slug: 'peugeot-508-1-5-bluehdi' }] },
            { id: 'rifter', name: 'Rifter', variants: [{ id: 'peugeot-rifter-1-5-bluehdi', name: '1.5 BlueHDi GT', years: '2019-2024', slug: 'peugeot-rifter-1-5-bluehdi' }] },
            { id: '206-plus', name: '206+', variants: [{ id: 'peugeot-206-plus-1-4-hdi', name: '1.4 HDi', years: '2006-2013', slug: 'peugeot-206-plus-1-4-hdi' }, { id: 'peugeot-206-xt', name: '206 1.4 XT', years: '1998-2010', slug: 'peugeot-206-1-4-xt' }] },

            { id: 'peugeot-106', name: '106', variants: [{ id: 'peugeot-106-xr', name: '106 1.4 XR', years: '1991-2003', slug: 'peugeot-106-1-4-xr' }] },
            { id: 'peugeot-306', name: '306', variants: [{ id: 'peugeot-306-xt', name: '306 1.6 XT', years: '1993-2002', slug: 'peugeot-306-1-6-xt' }] },
            { id: 'peugeot-405', name: '405', variants: [{ id: 'peugeot-405-sri', name: '405 1.6 SRi', years: '1987-1997', slug: 'peugeot-405-1-6-sri' }] },]
    },
    {
        id: 'porsche',
        name: 'Porsche',
        logo: 'https://logo.clearbit.com/porsche.com',
        models: [
            { id: 'cayenne', name: 'Cayenne', variants: [{ id: 'porsche-cayenne-3-0-v6', name: 'E3 3.0 V6 Turbo', years: '2018-2024', slug: 'porsche-cayenne-3-0-v6' }] },
            { id: 'macan', name: 'Macan', variants: [{ id: 'porsche-macan-2-0', name: '2.0', years: '2014-2023', slug: 'porsche-macan-2-0' }] },
        ]
    },
    {
        id: 'renault',
        name: 'Renault',
        logo: 'https://logo.clearbit.com/renault.com',
        models: [
            { id: 'laguna', name: 'Laguna III', variants: [{ id: 'renault-laguna-3-1-5-dci', name: '1.5 dCi Privilege', years: '2007-2015', slug: 'renault-laguna-3-1-5-dci' }, { id: 'r-lag2', name: 'Laguna II 1.6 16V', years: '2001-2007', slug: 'renault-laguna-2-1-6-16v-expression' }] },
            { id: 'austral', name: 'Austral', variants: [{ id: 'renault-austral-1-3-tce', name: '1.3 TCe Mild Hybrid', years: '2022-2024', slug: 'renault-austral-1-3-tce' }] },
            { id: 'captur', name: 'Captur', variants: [{ id: 'renault-captur-1-5-dci', name: 'J87 1.5 dCi EDC Icon', years: '2013-2019', slug: 'renault-captur-1-5-dci' }, { id: 'renault-captur-1-3-tce', name: '1.3 TCe', years: '2020-2024', slug: 'renault-captur-1-3-tce' }] },
            { id: 'clio', name: 'Clio', variants: [{ id: 'renault-clio-5-1-3-tce', name: 'V 1.3 TCe RS Line EDC', years: '2019-2025', slug: 'renault-clio-5-1-3-tce' }, { id: 'renault-clio-5-1-0-tce', name: '1.0 TCe', years: '2019-2024', slug: 'renault-clio-5-1-0-tce' }, { id: 'renault-clio-4-1-5-dci', name: 'Clio 4 1.5 dCi', years: '2012-2019', slug: 'renault-clio-4-1-5-dci' }, { id: 'renault-clio-3-1-5-dci', name: 'Clio III 1.5 dCi', years: '2005-2012', slug: 'renault-clio-3-1-5-dci' }, { id: 'r-clio4-tce', name: 'Clio IV 1.2 TCe Icon', years: '2012-2019', slug: 'renault-clio-4-1-2-turbo-icon' }, { id: 'r-clio4-ph2', name: 'Clio IV Ph2 1.5 dCi', years: '2016-2019', slug: 'renault-clio-4-phase-2-1-5-dci-icon' }] },
            { id: 'fluence', name: 'Fluence', variants: [{ id: 'renault-fluence-1-5-dci', name: '1.5 dCi EDC', years: '2010-2016', slug: 'renault-fluence-1-5-dci' }, { id: 'renault-fluence-1-5-dci-edc', name: '1.5 dCi EDC (Eski)', years: '2010-2016', slug: 'renault-fluence-1-5-dci-edc' }, { id: 'r-fluence-dci', name: 'Fluence 1.5 dCi Icon', years: '2009-2017', slug: 'renault-fluence-1-5-dci-icon' }] },
            { id: 'kadjar', name: 'Kadjar', variants: [{ id: 'renault-kadjar-1-5-dci', name: '1.5 dCi Icon', years: '2015-2022', slug: 'renault-kadjar-1-5-dci' }, { id: 'r-kadjar-dci', name: 'Kadjar 1.5 dCi Icon', years: '2015-2022', slug: 'renault-kadjar-1-5-dci-icon' }] },
            { id: 'kangoo', name: 'Kangoo', variants: [{ id: 'renault-kangoo-1-5-dci', name: '1.5 dCi Touch', years: '2013-2020', slug: 'renault-kangoo-1-5-dci' }] },
            { id: 'koleos', name: 'Koleos', variants: [{ id: 'renault-koleos-1-6-dci', name: '1.6 dCi Icon', years: '2016-2020', slug: 'renault-koleos-1-6-dci' }] },
            { id: 'latitude', name: 'Latitude', variants: [{ id: 'renault-latitude-1-5-dci', name: '1.5 dCi Privilege', years: '2011-2015', slug: 'renault-latitude-1-5-dci' }] },
            { id: 'megane', name: 'Megane', variants: [{ id: 'renault-megane-4-1-5-dci', name: 'IV 1.5 dCi EDC Touch', years: '2016-2022', slug: 'renault-megane-4-1-5-dci' }, { id: 'renault-megane-4-1-3-tce', name: '1.3 TCe', years: '2016-2023', slug: 'renault-megane-4-1-3-tce' }, { id: 'renault-megane-3-1-5-dci', name: '1.5 dCi', years: '2009-2016', slug: 'renault-megane-3-1-5-dci' }, { id: 'renault-megane-sedan-1-5-dci', name: 'Sedan 1.5 dCi EDC Touch', years: '2016-2022', slug: 'renault-megane-sedan-1-5-dci' }, { id: 'r-meg1', name: 'Megane I 1.6 RTE', years: '1996-2003', slug: 'renault-megane-1-1-6-rte' }, { id: 'r-meg2', name: 'Megane II 1.5 dCi', years: '2003-2009', slug: 'renault-megane-2-1-5-dci-privilege' }, { id: 'r-meg3-dci', name: 'Megane III 1.5 dCi', years: '2009-2016', slug: 'renault-megane-3-1-5-dci-dynamique' }, { id: 'r-meg3-ph2', name: 'Megane III Ph2 1.5 dCi', years: '2012-2016', slug: 'renault-megane-3-phase-2-1-5-dci-gt-line' }] },
            { id: 'scenic', name: 'Scenic', variants: [{ id: 'renault-scenic-1-5-dci', name: '1.5 dCi', years: '2016-2022', slug: 'renault-scenic-1-5-dci' }] },
            { id: 'symbol', name: 'Symbol', variants: [{ id: 'renault-symbol-joy-1-5-dci', name: 'L52 Joy 1.5 dCi', years: '2013-2020', slug: 'renault-symbol-joy-1-5-dci' }, { id: 'renault-symbol-1-5-dci', name: '1.5 dCi', years: '2013-2021', slug: 'renault-symbol-1-5-dci' }, { id: 'r-sym3-dci', name: 'Symbol III 1.5 dCi Joy', years: '2013-2021', slug: 'renault-symbol-3-1-5-dci-joy' }] },
            { id: 'taliant', name: 'Taliant', variants: [{ id: 'renault-taliant-1-0-turbo', name: '1.0 Turbo', years: '2021-2024', slug: 'renault-taliant-1-0-turbo' }] },
            { id: 'talisman', name: 'Talisman', variants: [{ id: 'renault-talisman-1-6-dci', name: '1.6 dCi Icon', years: '2016-2020', slug: 'renault-talisman-1-6-dci' }] },

            { id: 'renault-12', name: '12 Toros', variants: [{ id: 'r-12-toros', name: '12 Toros 1.4', years: '1971-2000', slug: 'renault-12-toros-1-4' }] },
            { id: 'renault-9', name: '9 Broadway', variants: [{ id: 'r-9-bway', name: '9 Broadway 1.4', years: '1987-1999', slug: 'renault-9-broadway-1-4' }] },
            { id: 'renault-19', name: '19 Europa', variants: [{ id: 'r-19-europa', name: '19 Europa 1.6', years: '1988-2003', slug: 'renault-19-europa-1-6' }] },]
    },
    {
        id: 'seat',
        name: 'Seat',
        logo: 'https://logo.clearbit.com/seat.com',
        models: [
            { id: 'toledo', name: 'Toledo', variants: [{ id: 'seat-toledo-1-6-tdi-style', name: 'KG 1.6 TDI Style DSG', years: '2013-2019', slug: 'seat-toledo-1-6-tdi-style' }] },
            { id: 'arona', name: 'Arona', variants: [{ id: 'seat-arona-1-0-eco-tsi', name: '1.0 EcoTSI Xperience', years: '2018-2024', slug: 'seat-arona-1-0-eco-tsi' }] },
            { id: 'ateca', name: 'Ateca', variants: [{ id: 'seat-ateca-1-5-tsi', name: '1.5 TSI', years: '2019-2024', slug: 'seat-ateca-1-5-tsi' }] },
            { id: 'ibiza', name: 'Ibiza', variants: [{ id: 'seat-ibiza-6j-1-4-tdi', name: '6J 1.4 TDI Style DSG', years: '2008-2017', slug: 'seat-ibiza-6j-1-4-tdi' }, { id: 'seat-ibiza-1-0-tsi', name: '1.0 TSI', years: '2017-2024', slug: 'seat-ibiza-1-0-tsi' }, { id: 'seat-ibiza-iv-1-4-tdi', name: 'IV 1.4 TDI', years: '2008-2015', slug: 'seat-ibiza-iv-1-4-tdi' }] },
            { id: 'leon', name: 'Leon', variants: [{ id: 'seat-leon-mk3-1-4-tsi', name: 'Mk3 1.4 TSI FR DSG', years: '2012-2020', slug: 'seat-leon-mk3-1-4-tsi' }, { id: 'seat-leon-1-5-tsi', name: '1.5 TSI FR', years: '2020-2024', slug: 'seat-leon-1-5-tsi' }, { id: 'seat-leon-1-5-etsi', name: '1.5 eTSI', years: '2020-2024', slug: 'seat-leon-1-5-etsi' }, { id: 'seat-leon-mk3-1-6-tdi', name: '1.6 TDI FR', years: '2013-2020', slug: 'seat-leon-mk3-1-6-tdi' }, { id: 'seat-leon-mk2-1-6-tdi', name: 'Mk2 1.6 TDI', years: '2009-2013', slug: 'seat-leon-mk2-1-6-tdi' }] },
            { id: 'tarraco', name: 'Tarraco', variants: [{ id: 'seat-tarraco-2-0-tdi', name: '2.0 TDI', years: '2019-2024', slug: 'seat-tarraco-2-0-tdi' }] },

            { id: 'seat-cordoba', name: 'Cordoba', variants: [{ id: 'seat-cordoba-stella', name: 'Cordoba 1.6 Stella', years: '1999-2009', slug: 'seat-cordoba-1-6-stella' }] },]
    },
    {
        id: 'skoda',
        name: 'Skoda',
        logo: 'https://logo.clearbit.com/skoda-auto.com',
        models: [
            { id: 'rapid', name: 'Rapid', variants: [{ id: 'skoda-rapid-1-6-tdi-greentec', name: 'NH 1.6 TDI Ambition', years: '2013-2019', slug: 'skoda-rapid-1-6-tdi-greentec' }, { id: 'skoda-rapid-nh', name: 'Rapid 1.6 TDI', years: '2013-2019', slug: 'skoda-rapid-1-6-tdi-style' }] },
            { id: 'fabia', name: 'Fabia', variants: [{ id: 'skoda-fabia-1-0-tsi', name: '1.0 TSI', years: '2018-2024', slug: 'skoda-fabia-1-0-tsi' }, { id: 'skoda-fabia-ii-1-4-tdi', name: 'II 1.4 TDI', years: '2007-2014', slug: 'skoda-fabia-ii-1-4-tdi' }] },
            { id: 'kamiq', name: 'Kamiq', variants: [{ id: 'skoda-kamiq-1-0-tsi', name: '1.0 TSI', years: '2019-2024', slug: 'skoda-kamiq-1-0-tsi' }] },
            { id: 'karoq', name: 'Karoq', variants: [{ id: 'skoda-karoq-1-5-tsi', name: '1.5 TSI', years: '2018-2024', slug: 'skoda-karoq-1-5-tsi' }] },
            { id: 'kodiaq', name: 'Kodiaq', variants: [{ id: 'skoda-kodiaq-2-0-tdi', name: '2.0 TDI', years: '2017-2024', slug: 'skoda-kodiaq-2-0-tdi' }] },
            { id: 'octavia', name: 'Octavia', variants: [{ id: 'skoda-octavia-a8-1-5-tsi', name: 'A8 1.5 TSI ACT DSG', years: '2020-2025', slug: 'skoda-octavia-a8-1-5-tsi' }, { id: 'skoda-octavia-1-5-tsi-e-tec', name: '1.5 TSI e-Tec', years: '2020-2024', slug: 'skoda-octavia-1-5-tsi-e-tec' }, { id: 'skoda-octavia-a7-1-6-tdi', name: 'A7 1.6 TDI', years: '2013-2020', slug: 'skoda-octavia-a7-1-6-tdi' }, { id: 'skoda-octavia-a5-1-6-tdi', name: 'A5 1.6 TDI', years: '2009-2013', slug: 'skoda-octavia-a5-1-6-tdi' }, { id: 'skoda-octavia-a7', name: 'Octavia A7 1.6 TDI', years: '2013-2020', slug: 'skoda-octavia-a7-1-6-tdi-style' }, { id: 'skoda-octavia-a7fl', name: 'Octavia A7 FL 1.6 TDI', years: '2017-2020', slug: 'skoda-octavia-a7-facelift-1-6-tdi-style' }] },
            { id: 'scala', name: 'Scala', variants: [{ id: 'skoda-scala-1-0-tsi', name: '1.0 TSI', years: '2019-2024', slug: 'skoda-scala-1-0-tsi' }] },
            { id: 'superb', name: 'Superb', variants: [{ id: 'skoda-superb-b8-2-0-tdi', name: 'B8 2.0 TDI DSG Style', years: '2015-2024', slug: 'skoda-superb-b8-2-0-tdi' }, { id: 'skoda-superb-1-5-tsi', name: '1.5 TSI', years: '2019-2023', slug: 'skoda-superb-1-5-tsi' }, { id: 'skoda-superb-1-6-tdi', name: '1.6 TDI Elegance', years: '2015-2023', slug: 'skoda-superb-1-6-tdi' }] },
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
            { id: 'swift', name: 'Swift', variants: [{ id: 'suzuki-swift-4-1-2-hybrid', name: 'Mk4 1.2 SHVS GLX', years: '2017-2024', slug: 'suzuki-swift-4-1-2-hybrid' }, { id: 'suzuki-swift-1-2-dualjet', name: '1.2 Dualjet', years: '2017-2024', slug: 'suzuki-swift-1-2-dualjet' }, { id: 'suzuki-swift-3-1-3-ddis', name: 'III 1.3 DDiS', years: '2005-2010', slug: 'suzuki-swift-3-1-3-ddis' }] },
            { id: 'vitara', name: 'Vitara', variants: [{ id: 'suzuki-vitara-1-6-ddis', name: 'LY 1.6 DDiS GLX 4x4', years: '2015-2020', slug: 'suzuki-vitara-1-6-ddis' }, { id: 'suzuki-vitara-1-4-boosterjet', name: '1.4 BoosterJet AllGrip', years: '2016-2024', slug: 'suzuki-vitara-1-4-boosterjet' }] },
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
            { id: 'model-3', name: 'Model 3', variants: [{ id: 'tesla-model-3-lr', name: 'Long Range AWD', years: '2019-2024', slug: 'tesla-model-3-lr' }] },
            { id: 'model-y', name: 'Model Y', variants: [{ id: 'tesla-model-y-standard-range', name: 'Standard Range RWD', years: '2023-2025', slug: 'tesla-model-y-standard-range' }, { id: 'tesla-model-y-lr', name: 'Long Range', years: '2022-2024', slug: 'tesla-model-y-lr' }, { id: 'tesla-model-y-long-range', name: 'Long Range', years: '2022-2024', slug: 'tesla-model-y-long-range' }] },
        ]
    },
    {
        id: 'tofa-',
        name: 'Tofaş',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Tofas_logo.jpg',
        models: [
            { id: 'do-an', name: 'Doğan', variants: [{ id: 'tofas-dogan-slx-1-6-ie', name: 'SLX 1.6 ie', years: '1993-2002', slug: 'tofas-dogan-slx-1-6-ie' }] },
            { id: '-ahin', name: 'Şahin', variants: [{ id: 'tofas-sahin-s-1-6', name: 'S 1.6', years: '1993-2002', slug: 'tofas-sahin-s-1-6' }] },

            { id: 'tofas-kartal', name: 'Kartal', variants: [{ id: 'tofas-kartal-slx', name: 'Kartal SLX 1.6 SW', years: '1993-2002', slug: 'tofas-kartal-slx-1-6-sw' }] },]
    },
    {
        id: 'toyota',
        name: 'Toyota',
        logo: 'https://logo.clearbit.com/toyota.com',
        models: [
            { id: 'auris', name: 'Auris', variants: [{ id: 'toyota-auris-1-6-valvematic', name: '1.6 Valvematic Advance', years: '2013-2018', slug: 'toyota-auris-1-6-valvematic' }] },
            { id: 'avensis', name: 'Avensis', variants: [{ id: 'toyota-avensis-1-6-d4d', name: '1.6 D-4D Premium', years: '2015-2018', slug: 'toyota-avensis-1-6-d4d' }, { id: 'toyota-avensis-t22', name: 'Avensis T22 1.6 Sol', years: '1997-2003', slug: 'toyota-avensis-t22-1-6-sol' }] },
            { id: 'c-hr', name: 'C-HR', variants: [{ id: 'toyota-chr-2-0-hybrid', name: '2.0 Hybrid Diamond', years: '2020-2024', slug: 'toyota-chr-2-0-hybrid' }, { id: 'toyota-chr-1-8-hybrid', name: '1.8 Hybrid', years: '2016-2023', slug: 'toyota-chr-1-8-hybrid' }, { id: 'toyota-chr-turbo', name: 'C-HR 1.2 Turbo', years: '2016-2023', slug: 'toyota-c-hr-1-2-turbo-advance' }, { id: 'toyota-chr-fl', name: 'C-HR FL 1.8 Hybrid', years: '2020-2023', slug: 'toyota-c-hr-facelift-1-8-hybrid' }] },
            { id: 'camry', name: 'Camry', variants: [{ id: 'toyota-camry-hybrid', name: '2.5 Hybrid Passion', years: '2019-2024', slug: 'toyota-camry-hybrid' }] },
            { id: 'corolla', name: 'Corolla', variants: [{ id: 'toyota-corolla-e210-hybrid', name: 'E210 1.8 Hybrid Dream', years: '2019-2025', slug: 'toyota-corolla-e210-hybrid' }, { id: 'toyota-corolla-1-5-vision', name: '1.5 Vision', years: '2020-2024', slug: 'toyota-corolla-1-5-vision' }, { id: 'toyota-corolla-hybrid', name: '1.8 Hybrid', years: '2019-2024', slug: 'toyota-corolla-hybrid' }, { id: 'toyota-corolla-e150-1-6-vvti', name: 'E150 1.6 VVT-i', years: '2007-2013', slug: 'toyota-corolla-e150-1-6-vvti' }, { id: 'toyota-e100', name: 'Corolla E100 1.6 XEi', years: '1991-1997', slug: 'toyota-corolla-e100-1-6-xei' }, { id: 'toyota-e110', name: 'Corolla E110 1.6 Terra', years: '1997-2002', slug: 'toyota-corolla-e110-1-6-terra' }, { id: 'toyota-e150', name: 'Corolla E150 1.4 D-4D', years: '2007-2013', slug: 'toyota-corolla-e150-1-4-d4d-elegant' }, { id: 'toyota-e160', name: 'Corolla E160 1.4 D-4D', years: '2013-2019', slug: 'toyota-corolla-e160-1-4-d4d-advance' }] },
            { id: 'corolla-cross', name: 'Corolla Cross', variants: [{ id: 'toyota-corolla-cross-hybrid', name: '1.8 Hybrid', years: '2022-2024', slug: 'toyota-corolla-cross-hybrid' }] },
            { id: 'hilux', name: 'Hilux', variants: [{ id: 'toyota-hilux-2-4-d4d', name: '2.4 D-4D Invincible', years: '2016-2024', slug: 'toyota-hilux-2-4-d4d' }] },
            { id: 'proace-city', name: 'Proace City', variants: [{ id: 'toyota-proace-city-1-5-d', name: '1.5 D Dream', years: '2020-2024', slug: 'toyota-proace-city-1-5-d' }] },
            { id: 'rav4', name: 'RAV4', variants: [{ id: 'toyota-rav4-hybrid', name: '2.5 Hybrid', years: '2019-2024', slug: 'toyota-rav4-hybrid' }, { id: 'toyota-rav4-2-5-hybrid', name: '2.5 Hybrid', years: '2019-2024', slug: 'toyota-rav4-2-5-hybrid' }, { id: 'toyota-rav4-25-hybrid-mk5', name: '2.5 Hybrid AWD Passion X-Pack', years: '2019-2025', slug: 'toyota-rav4-25-hybrid-mk5' }] },
            { id: 'yaris', name: 'Yaris', variants: [{ id: 'toyota-yaris-3-1-33-vvti', name: 'XP130 1.33 VVT-i Fun', years: '2011-2020', slug: 'toyota-yaris-3-1-33-vvti' }, { id: 'toyota-yaris-hybrid', name: '1.5 Hybrid', years: '2020-2024', slug: 'toyota-yaris-hybrid' }, { id: 'toyota-yaris-1-5-hybrid', name: '1.5 Hybrid Dream', years: '2020-2024', slug: 'toyota-yaris-1-5-hybrid' }, { id: 'toyota-yaris-2-1-4-d4d', name: 'II 1.4 D-4D', years: '2006-2011', slug: 'toyota-yaris-2-1-4-d4d' }, { id: 'toyota-yaris-xp130', name: 'Yaris XP130 1.33', years: '2011-2019', slug: 'toyota-yaris-xp130-1-33-fun' }] },
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
            { id: 'caddy', name: 'Caddy', variants: [{ id: 'vw-caddy-2k-1-6-tdi', name: '2K 1.6 TDI Trendline', years: '2010-2015', slug: 'vw-caddy-2k-1-6-tdi' }, { id: 'volkswagen-caddy-mk4-2-0-tdi', name: '2.0 TDI Comfortline (Mk4)', years: '2015-2020', slug: 'volkswagen-caddy-mk4-2-0-tdi' }, { id: 'volkswagen-caddy-2-0-tdi', name: '2.0 TDI Style (Mk5)', years: '2020-2024', slug: 'volkswagen-caddy-2-0-tdi' }, { id: 'vw-caddy-iii-1-9-tdi', name: 'III 1.9 TDI', years: '2004-2010', slug: 'vw-caddy-iii-1-9-tdi' }] },
            { id: 'golf', name: 'Golf', variants: [{ id: 'volkswagen-golf-7-1-4-tsi', name: 'Golf 7 1.4 TSI Highline', years: '2012-2020', slug: 'volkswagen-golf-7-1-4-tsi' }, { id: 'volkswagen-golf-8-1-0-etsi', name: 'Golf 8 1.0 eTSI', years: '2020-2024', slug: 'volkswagen-golf-8-1-0-etsi' }, { id: 'vw-golf-6-1-6-tdi', name: 'Golf VI 1.6 TDI', years: '2008-2013', slug: 'vw-golf-6-1-6-tdi' }, { id: 'vw-golf3', name: 'Golf III 1.6 CL', years: '1991-1997', slug: 'vw-golf-3-1-6-cl' }, { id: 'vw-golf4', name: 'Golf IV 1.6 Comfortline', years: '1997-2003', slug: 'vw-golf-4-1-6-comfortline' }, { id: 'vw-golf7', name: 'Golf VII 1.6 TDI', years: '2012-2019', slug: 'vw-golf-7-1-6-tdi-comfortline' }, { id: 'vw-golf-75-fl', name: 'Golf 7.5 FL 1.5 TSI', years: '2017-2020', slug: 'vw-golf-7-5-1-5-tsi-facelift' }] },
            { id: 'jetta', name: 'Jetta', variants: [{ id: 'volkswagen-jetta-1-6-tdi', name: '1.6 TDI Highline', years: '2011-2018', slug: 'volkswagen-jetta-1-6-tdi' }, { id: 'vw-jetta-mk6', name: 'Jetta Mk6 1.6 TDI', years: '2011-2018', slug: 'vw-jetta-mk6-1-6-tdi-comfortline' }] },
            { id: 'passat', name: 'Passat', variants: [{ id: 'vw-passat-b8-2-0-tdi', name: 'B8 2.0 TDI DSG', years: '2015-2023', slug: 'vw-passat-b8-2-0-tdi' }, { id: 'volkswagen-passat-b8-1-6-tdi', name: 'B8 1.6 TDI Highline', years: '2015-2023', slug: 'volkswagen-passat-b8-1-6-tdi' }, { id: 'vw-passat-b7-1-4-tsi', name: 'B7 1.4 TSI', years: '2010-2014', slug: 'vw-passat-b7-1-4-tsi' }, { id: 'vw-passat-b5', name: 'Passat B5 1.8T', years: '1996-2005', slug: 'vw-passat-b5-1-8t-comfortline' }, { id: 'vw-passat-b7', name: 'Passat B7 1.6 TDI', years: '2010-2015', slug: 'vw-passat-b7-1-6-tdi-comfortline' }, { id: 'vw-passat-b85', name: 'Passat B8.5 FL 1.5 TSI', years: '2019-2023', slug: 'vw-passat-b8-5-1-5-tsi-facelift' }] },
            { id: 'polo', name: 'Polo', variants: [{ id: 'vw-polo-6r-1-4-tdi', name: '6R 1.4 TDI Comfortline', years: '2009-2017', slug: 'vw-polo-6r-1-4-tdi' }, { id: 'volkswagen-polo-1-0-tsi', name: '1.0 TSI', years: '2017-2024', slug: 'volkswagen-polo-1-0-tsi' }, { id: 'volkswagen-polo-1-2-tsi', name: '1.2 TSI / 1.4 TDI', years: '2009-2017', slug: 'volkswagen-polo-1-2-tsi' }, { id: 'vw-polo-6n', name: 'Polo 6N 1.6', years: '1994-2001', slug: 'vw-polo-6n-1-6-comfortline' }, { id: 'vw-polo-6r', name: 'Polo 6R 1.4 TDI', years: '2009-2017', slug: 'vw-polo-6r-1-4-tdi-comfortline' }] },
            { id: 'scirocco', name: 'Scirocco', variants: [{ id: 'volkswagen-scirocco-1-4-tsi', name: '1.4 TSI (160hp)', years: '2009-2017', slug: 'volkswagen-scirocco-1-4-tsi' }] },
            { id: 't-cross', name: 'T-Cross', variants: [{ id: 'volkswagen-tcross-1-0-tsi', name: '1.0 TSI Life', years: '2019-2024', slug: 'volkswagen-tcross-1-0-tsi' }] },
            { id: 't-roc', name: 'T-Roc', variants: [{ id: 'volkswagen-troc-1-5-tsi', name: '1.5 TSI Highline', years: '2018-2024', slug: 'volkswagen-troc-1-5-tsi' }] },
            { id: 'taigo', name: 'Taigo', variants: [{ id: 'volkswagen-taigo-1-0-tsi', name: '1.0 TSI Style', years: '2021-2024', slug: 'volkswagen-taigo-1-0-tsi' }] },
            { id: 'tiguan', name: 'Tiguan', variants: [{ id: 'vw-tiguan-2-0-tdi-mk2', name: 'Mk2 2.0 TDI DSG 4Motion', years: '2016-2024', slug: 'vw-tiguan-2-0-tdi-mk2' }, { id: 'volkswagen-tiguan-1-5-tsi', name: '1.5 TSI Highline', years: '2016-2023', slug: 'volkswagen-tiguan-1-5-tsi' }, { id: 'vw-tiguan-mk2', name: 'Tiguan Mk2 1.4 TSI', years: '2016-2024', slug: 'vw-tiguan-mk2-1-4-tsi-comfortline' }] },
            { id: 'touran', name: 'Touran', variants: [{ id: 'vw-touran-1-6-tdi', name: '1.6 TDI', years: '2015-2022', slug: 'vw-touran-1-6-tdi' }] },
            { id: 'transporter', name: 'Transporter', variants: [{ id: 'volkswagen-transporter-t6', name: '2.0 TDI City Van', years: '2015-2024', slug: 'volkswagen-transporter-t6' }] },

            { id: 'vw-bora', name: 'Bora', variants: [{ id: 'vw-bora-pac', name: 'Bora 1.6 Pacific', years: '1998-2005', slug: 'vw-bora-1-6-pacific' }] },]
    },
    {
        id: 'volvo',
        name: 'Volvo',
        logo: 'https://logo.clearbit.com/volvocars.com',
        models: [
            { id: 'v40', name: 'V40', variants: [{ id: 'volvo-v40-d3-aut', name: 'Mk2 D3 Inscription', years: '2012-2019', slug: 'volvo-v40-d3-aut' }, { id: 'volvo-v40-1-6-d2', name: '1.6 D2 Powershift', years: '2012-2015', slug: 'volvo-v40-1-6-d2' }] },
            { id: 's60', name: 'S60', variants: [{ id: 'volvo-s60-b5', name: 'B5 AWD Inscription', years: '2019-2024', slug: 'volvo-s60-b5' }, { id: 'volvo-s60-t4', name: 'T4', years: '2019-2024', slug: 'volvo-s60-t4' }] },
            { id: 's90', name: 'S90', variants: [{ id: 'volvo-s90-d5-awd', name: 'D5 AWD', years: '2016-2023', slug: 'volvo-s90-d5-awd' }] },
{ id: 'xc40', name: 'XC40', variants: [{ id: 'volvo-xc40-t3', name: 'T3 R-Design', years: '2018-2024', slug: 'volvo-xc40-t3' }, { id: 'volvo-xc40-t4', name: 'T4', years: '2018-2024', slug: 'volvo-xc40-t4' }] },
            { id: 'xc60', name: 'XC60', variants: [{ id: 'volvo-xc60-d5-awd', name: 'Mk1 D5 AWD Inscription', years: '2008-2017', slug: 'volvo-xc60-d5-awd' }, { id: 'volvo-xc60-b4', name: 'B4 Mild Hybrid', years: '2017-2024', slug: 'volvo-xc60-b4' }] },
            { id: 's40', name: 'S40', variants: [{ id: 'volvo-s40-1-6-d', name: '1.6 D DRIVe', years: '2007-2012', slug: 'volvo-s40-1-6-d' }] },
        ]
    },
];
