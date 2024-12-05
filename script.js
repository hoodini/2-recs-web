const toolsData = [ { category: "עריכת סרטונים ותרגום", name: "Veed.io", link: "http://Veed.io", description: "עריכה קלה ומהירה של סרטונים, תמונות ו-GIFים תוך הוספת אפקטים, מוזיקה ועוד. יצירת תרגום לכתוביות ואודיו של סרטונים והסרת רקע בעזרת AI" }, { category: "עריכת סרטונים ותרגום", name: "Kapwing", link: "https://www.kapwing.com/", description: "עריכה קלה ומהירה של סרטונים, תמונות ו-GIFים תוך הוספת אפקטים, מוזיקה ועוד. יצירת תרגום לכתוביות ואודיו של סרטונים והסרת רקע בעזרת AI" }, { category: "אודיו", name: "Play.ht", link: "http://Play.ht", description: "המרת טקסט כתוב לדיבור בקול סינתטי ריאליסטי ו-voice cloning" }, { category: "אודיו", name: "ElevenLabs", link: "https://elevenlabs.io/", description: "המרת טקסט כתוב לדיבור בקול סינתטי ריאליסטי ו-voice cloning" }, { category: "אוואטרים וסרטונים", name: "HeyGen", link: "https://www.heygen.com/", description: "יצירת סרטוני וידאו איכותיים עם אווטארים מדברים בזמן קצר וללא צוות שחקנים" }, { category: "אוואטרים וסרטונים", name: "D-ID", link: "https://www.d-id.com/", description: "יצירת סרטוני וידאו איכותיים עם אווטארים מדברים בזמן קצר וללא צוות שחקנים. D-ID נותנת קרדיטים חינם לטובת הסברה ישראלית" }, { category: "תמונות", name: "Bing Image Creator", link: "https://www.bing.com/images/create", description: "יצירת תמונות בעזרת DALLE-3" }, { category: "תמונות", name: "Ideogram", link: "https://ideogram.ai/login", description: "יצירת תמונות המכילות טקסט" }, { category: "תמונות", name: "Lexica", link: "https://lexica.art/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Dreamlike", link: "https://dreamlike.art/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Leonardo.AI", link: "https://app.leonardo.ai/ai-generations", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Midjourney", link: "https://www.midjourney.com/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Blue Willow", link: "https://www.bluewillow.ai/", description: "סגנון מידג'רני (חינמי ללא הגבלות)" }, { category: "תמונות", name: "Adobe Firefly", link: "https://firefly.adobe.com/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Playground AI", link: "https://playgroundai.com/create", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "GetImg.ai", link: "https://getimg.ai/text-to-image", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "DALL-E", link: "https://labs.openai.com", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "TinyWow", link: "https://tinywow.com/image/ai-image-generator", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Stablecog", link: "https://stablecog.com/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "NightCafe Creator", link: "https://creator.nightcafe.studio/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Mage", link: "https://www.mage.space/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Creative Fabrica", link: "https://www.creativefabrica.com/spark/tools/art-generator/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Promptomania", link: "https://promptomania.com/prompt-builder/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "InstantArt", link: "https://instantart.io/", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Neural.Love", link: "https://neural.love/orders", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Mokker", link: "https://mokker.ai/", description: "יצירת מודל של מוצר" }, { category: "תמונות", name: "Stable Diffusion", link: "https://stablediffusionweb.com/#demo", description: "יצירת תמונות דרך תיאור" }, { category: "תמונות", name: "Segment Anything", link: "https://segment-anything.com/demo#", description: "כלי של מטא לוכד מתוך תמונה" }, { category: "תמונות", name: "Word As Image", link: "https://huggingface.co/spaces/SemanticTypography/Word-As-Image", description: "טקסט לטקסט" }, { category: "תמונות", name: "DreamLab", link: "https://dreamlab.gg/", description: "צור דמויות מונפשים למשחקים" }, { category: "תמונות", name: "Karlo", link: "https://huggingface.co/spaces/kakaobrain/karlo", description: "מחולל תמונות עובד יחסית טוב עם טקסט" }, { category: "תמונות", name: "Scribble Diffusion", link: "https://scribblediffusion.com/", description: "ציור לתמונה" }, { category: "תמונות", name: "ControlNet Pose", link: "https://replicate.com/jagilley/controlnet-pose", description: "תנוחה לתמונה" }, { category: "תלת מימד", name: "Skybox Labs", link: "https://skybox.blockadelabs.com/", description: "יצירת תלת מימד" }, { category: "תמונה לסרטון", name: "Deforum Stable Diffusion", link: "https://replicate.com/deforum/deforum_stable_diffusion", description: "המרת תמונה לסרטון" }, { category: "תמונה לסרטון", name: "Genmo", link: "https://alpha.genmo.ai/", description: "המרת תמונה לסרטון" }, { category: "תמונה לסרטון", name: "Kaiber", link: "https://kaiber.ai/", description: "המרת תמונה לסרטון" }, { category: "תמונה לסרטון", name: "Leia Pix", link: "https://convert.leiapix.com/", description: "המרת תמונה לסרטון" }
];

document.addEventListener('DOMContentLoaded', () => {
    const toolsContainer = document.getElementById('toolsContainer');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    // Populate category filter
    const categories = [...new Set(toolsData.map(tool => tool.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    function renderTools(tools) {
        toolsContainer.innerHTML = '';
        tools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'col-md-4 mb-4';
            toolCard.innerHTML = `
                <div class="tool-card">
                    <span class="category">${tool.category}</span>
                    <h3>${tool.name}</h3>
                    <p class="description">${tool.description}</p>
                    <a href="${tool.link}" target="_blank" class="btn btn-primary">פתח כלי</a>
                </div>
            `;
            toolsContainer.appendChild(toolCard);
        });
    }

    function filterTools() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredTools = toolsData.filter(tool => {
            const matchesSearch = 
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm);
            const matchesCategory = 
                !selectedCategory || tool.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        renderTools(filteredTools);
    }

    searchInput.addEventListener('input', filterTools);
    categoryFilter.addEventListener('change', filterTools);

    // Initial render
    renderTools(toolsData);
});
