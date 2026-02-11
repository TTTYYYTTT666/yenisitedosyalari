# n8n Kurulum ve Kullanım Rehberi

## 1. n8n'de Environment Variables Ayarlama

n8n'inize giriş yapın ve **Settings → Variables** bölümünden aşağıdaki değişkenleri ekleyin:

| Variable Name | Value | Açıklama |
|---------------|-------|----------|
| `KRONIKNE_API_URL` | `https://your-site.com` veya `http://localhost:3000` | Kronikne API adresi |
| `KRONIKNE_API_KEY` | `krn_74770f44e8570a06b1bbb0e...` | Oluşturulan API key |
| `OLLAMA_URL` | `http://gpu-server-ip:11434` | Ollama sunucu adresi |

## 2. Workflow'u İçe Aktarma

1. n8n panelinde **Workflows → Import from File** seçin
2. `sikayetvar-scraper.json` dosyasını yükleyin
3. Workflow'u kaydedin

## 3. Test Etme

1. Workflow'u açın
2. **Execute Workflow** butonuna tıklayın
3. İlk aracın verilerini kontrol edin

## 4. API Endpoint'leri

### GET /api/cars
Tüm araçları listeler (n8n için).

```bash
curl http://localhost:3000/api/cars?format=minimal
```

### POST /api/chronicle
Yeni kronik ekler.

```bash
curl -X POST http://localhost:3000/api/chronicle \
  -H "x-api-key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "carSlug": "fiat-egea-1-4-fire",
    "expertNote": "Yağ yakma normal derler inanmayın",
    "issues": [{"title": "Yağ Tüketimi", "description": "...", "category": "motor", "riskLevel": "HIGH"}],
    "pros": ["Ekonomik"],
    "cons": ["Yağ yakıyor"],
    "buyingTips": ["Yağ çubuğunu kontrol edin"],
    "source": "sikayetvar",
    "sourceUrl": "https://sikayetvar.com/fiat-egea"
  }'
```

## 5. GPU Sunucu Kurulumu

VDS veya kiralık GPU sunucuda:

```bash
# Ollama kurulumu
curl -fsSL https://ollama.com/install.sh | sh

# Model indirme (RTX 4090 için)
ollama pull llama3.1:70b-instruct-q4_K_M

# Veya daha küçük model (RTX 3090 için)
ollama pull llama3.1:8b-instruct-q8_0

# Ollama'yı network erişimine aç
OLLAMA_HOST=0.0.0.0 ollama serve
```

## 6. Önerilen GPU Kiralama

| Platform | GPU | Fiyat | Link |
|----------|-----|-------|------|
| Vast.ai | RTX 4090 | ~$0.30/saat | [vast.ai](https://vast.ai) |
| RunPod | RTX 4090 | ~$0.44/saat | [runpod.io](https://runpod.io) |
| Lambda | A100 40GB | ~$1.10/saat | [lambdalabs.com](https://lambdalabs.com) |

**Tavsiye**: Başlangıç için **Vast.ai RTX 4090** en uygun maliyetli seçenek.
