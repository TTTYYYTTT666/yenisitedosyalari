export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string; // HTML content
    category: string;
    date: string;
    readTime: string;
    image: string; // Emoji or URL
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'ikinci-el-arac-alirken-dikkat-edilmesi-gerekenler',
        title: 'İkinci El Araç Alırken Dikkat Edilmesi Gereken 10 Kritik Nokta',
        excerpt: 'İkinci el araç alımında en sık yapılan hatalar ve bunlardan nasıl kaçınılacağı hakkında kapsamlı bir rehber.',
        category: 'Rehber',
        date: '25 Ocak 2026',
        readTime: '15 dk',
        image: '🚗',
        author: {
            name: 'Ahmet Yılmaz',
            avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            role: 'Otomotiv Uzmanı'
        },
        tags: ['Ekspertiz', 'Alım Satım', 'Rehber'],
        content: `
            <h2>1. Şasi ve Podye Kontrolü (Hayati Önem!)</h2>
            <p>Aracın en önemli kısmı iskeletidir. Şasi, podye ve direklerdeki işlemler aracın büyük bir kaza geçirdiğini gösterir. Bu araçlardan uzak durun.</p>
            <ul>
                <li><strong>Podye Uçları:</strong> Ezik veya boya var mı?</li>
                <li><strong>Kapı Direkleri:</strong> Orijinal puntolar duruyor mu?</li>
                <li><strong>Bagaj Havuzu:</strong> İşlem veya düzeltme var mı?</li>
            </ul>

            <img src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80" alt="Mekanik Kontrol" class="w-full rounded-xl my-6" />

            <h2>2. Motor Performansı ve Duman Testi</h2>
            <p>Motor soğukken çalıştırın. Egzozdan çıkan dumanın rengi size çok şey anlatır:</p>
            <ul>
                <li><strong>Mavi Duman:</strong> Motor yağ yakıyor (Sekman/Gömlek aşınmış).</li>
                <li><strong>Siyah Duman:</strong> Yakıt sistemi arızalı veya enjektör sorunlu.</li>
                <li><strong>Beyaz Duman:</strong> Sürekli geliyorsa conta yanık veya su karışıyor.</li>
            </ul>

            <h2>3. KM Sorgulama ve Tramer Kaydı</h2>
            <p>Satıcının beyanına güvenmeyin. Tüvtürk kayıtları ve HGS uygulamasından KM geçmişini mutlaka sorgulayın.</p>
            <blockquote>
                "Düşük KM her zaman iyi araç demek değildir. Bakımsız 50.000 KM, bakımlı 200.000 KM'den daha masraflı olabilir."
            </blockquote>

            <h2>4. Kaporta ve Boya</h2>
            <p>Boya takıntınız olmasın ama değişen parçalara dikkat edin. Kaput, tavan ve bagaj orijinal ise yanlardaki boyalar çok dert edilmemeli.</p>
            
            <h3>Boya Makinesi ile Ölçüm Değerleri:</h3>
            <ul>
                <li><strong>80-120 mikron:</strong> Orijinal Boya</li>
                <li><strong>150-200 mikron:</strong> İnce Boya/Vernik</li>
                <li><strong>300+ mikron:</strong> Macunlu Boya (Riskli)</li>
            </ul>

            <h2>5. Vites Geçişleri ve Debriyaj</h2>
            <p>Manuel araçlarda kavrama noktasını, otomatik araçlarda ise vites geçişlerindeki vuruntuyu (özellikle ısınınca) test edin.</p>
        `
    },
    {
        id: '2',
        slug: 'dsg-sanziman-rehberi',
        title: 'DSG Şanzıman: Artıları, Eksileri ve Bakım İpuçları',
        excerpt: 'Volkswagen grubunun DSG şanzımanları hakkında bilmeniz gereken her şey.',
        category: 'Teknik',
        date: '18 Ocak 2026',
        readTime: '12 dk',
        image: '⚙️',
        author: {
            name: 'Mehmet Demir',
            avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
            role: 'Mekanik Ustası'
        },
        tags: ['Şanzıman', 'VW', 'Teknik'],
        content: `
            <h2>DSG Nedir?</h2>
            <p>DSG (Direct Shift Gearbox), Volkswagen grubunun çift kavramalı otomatik şanzıman teknolojisidir. Hem manuelin performansını hem de otomatiğin konforunu vaat eder.</p>

            <h2>Kronik Sorunlar ve Çözümleri</h2>
            
            <h3>1. Kavrama Titremesi</h3>
            <p>Özellikle 2. vitesten 1. vitese düşerken veya kalkışta titreme yapıyorsa kavrama bitiyor demektir. <strong>Çözüm:</strong> Kavrama seti değişimi.</p>

            <h3>2. Mekatronik Arızası</h3>
            <p>Vites geçmemesi, göstergede "PRNDS" ışıklarının yanıp sönmesi. <strong>Çözüm:</strong> Mekatronik kart tamiri veya değişimi.</p>

            <div class="bg-yellow-50 dark:bg-yellow-900/30 p-4 border-l-4 border-yellow-500 my-6">
                <strong>Uzman Tavsiyesi:</strong> Sıkışık trafikte sürekli dur-kalk yaparken şanzımanı manuel moda alıp 1. viteste sabitlemek ısınmayı engeller.
            </div>

            <h2>DSG Ömrünü Uzatmak İçin 5 Kural</h2>
            <ol>
                <li>Işıklarda beklerken boşa (N) almanıza gerek yok, frene tam basın.</li>
                <li>Yokuş yukarı gaza basmadan aracı viteste tutmaya çalışmayın (Auto Hold kullanın).</li>
                <li>Park ederken önce N'ye alın, el frenini çekin, yükü frene bindirin, sonra P'ye alın.</li>
                <li>Her 60.000 KM'de bir şanzıman yağı değişimi yapın (Islak tip DSG'ler için).</li>
                <li>Yazılım güncellemesi (Adaptasyon) periyodik olarak yaptırın.</li>
            </ol>
        `
    },
    {
        id: '3',
        slug: '2026-en-guvenilir-araclar',
        title: '2026\'nın En Güvenilir Araçları Listesi',
        excerpt: 'Verilerimize göre 2026 yılında en az sorun yaşanan araç modelleri ve markaların sıralaması.',
        category: 'Analiz',
        date: '20 Ocak 2026',
        readTime: '8 dk',
        image: '🏆',
        author: {
            name: 'Canan Can',
            avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            role: 'Veri Analisti'
        },
        tags: ['Sıralama', 'Güvenilirlik', '2026'],
        content: `
            <p>Kullanıcı şikayetleri, servis kayıtları ve geri çağırma bültenlerini analiz ederek 2026'nın en sorunsuz araçlarını derledik.</p>
            
            <h2>1. Toyota Corolla (Hibrit)</h2>
            <p>Yıllardır değişmeyen lider. Özellikle hibrit sisteminin sorunsuzluğu ve mekanik dayanıklılığı ile zirvede.</p>
            
            <h2>2. Honda Civic (FL1 Kasa)</h2>
            <p>CVT şanzımanın olgunlaşması ve turbo motorun dayanıklılığı ile Civic listemizde 2. sırada.</p>
            
            <h2>3. Mazda CX-5</h2>
            <p>Atmosferik motor ısrarı Mazda'yı dayanıklılık konusunda öne çıkarıyor. Elektronik arıza oranı en düşük SUV.</p>

            <table class="w-full text-left border-collapse my-6">
                <thead>
                    <tr class="border-b border-gray-700">
                        <th class="py-2">Marka</th>
                        <th class="py-2">Model</th>
                        <th class="py-2">Arıza/100 Araç</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-gray-800">
                        <td class="py-2">Toyota</td>
                        <td class="py-2">Corolla</td>
                        <td class="py-2 text-orange-500 font-bold">12</td>
                    </tr>
                    <tr class="border-b border-gray-800">
                        <td class="py-2">Lexus</td>
                        <td class="py-2">RX</td>
                        <td class="py-2 text-orange-500 font-bold">14</td>
                    </tr>
                    <tr>
                        <td class="py-2">Porsche</td>
                        <td class="py-2">911</td>
                        <td class="py-2 text-orange-500 font-bold">18</td>
                    </tr>
                </tbody>
            </table>
        `
    }
];
