      // Responsive Ayarlar

      function toggleSidebar() {
        const sidebar = document.getElementById("sidebar");
        const body = document.body;

        // Menü açıldığında `no-scroll` sınıfını ekler, kapanınca kaldırır
        if (sidebar.style.transform === "translateX(0%)") {
          sidebar.style.transform = "translateX(-100%)";
          body.classList.remove("no-scroll");
        } else {
          sidebar.style.transform = "translateX(0%)";
          body.classList.add("no-scroll");
        }
      }

      function toggleSubmenu(event) {
        event.preventDefault(); // Varsayılan bağlantı davranışını engelle

        const submenu = event.target.nextElementSibling; // Tıklanan menüdeki alt menüyü seç
        const parentMenu = submenu.parentElement.parentElement; // Üst seviyedeki menüyü seç

        // Aynı seviyedeki diğer açık menüleri kapat
        parentMenu.querySelectorAll(".submenu.open").forEach((menu) => {
          if (menu !== submenu) {
            menu.classList.remove("open");
          }
        });

        // Tıklanan menüyü aç veya kapat
        submenu.classList.toggle("open");
      }

      // Sayfa yüklendiğinde scroll pozisyonunu en üste getirir ve localStorage'ı temizler
      if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
      window.onload = function () {
        localStorage.clear();
        sessionStorage.clear();
      };
      
// Arama Kutusu
      const data = [
        { title: "Template", url: "template.html" },
        { title: "Ekmek", url: "ekmek.html" },
        { title: "Lavaş", url: "lavas.html" },
        { title: "Simit", url: "simit.html" },
        { title: "Ramazan Pidesi", url: "ramazan-pidesi.html" },
        { title: "Limonlu Kek", url: "limonlu-kek.html" },
        { title: "Kurabiye", url: "kurabiye.html" },
        { title: "Beyaz Peynir", url: "beyaz-peynir.html" },
        { title: "Kaşar Peyniri", url: "kasar-peyniri.html" },
        { title: "Acuka", url: "acuka.html" },
        { title: "Pirinç Pilavı", url: "pirinc-pilavi.html" },
        { title: "Bulgur Pilavı", url: "bulgur-pilavi.html" },
        { title: "Çiğ Köfte", url: "cig-kofte.html" },
        { title: "Yoğurt", url: "yogurt.html" },
        { title: "Muhallebi", url: "muhallebi.html" },
        { title: "Lokum", url: "lokum.html" },
        { title: "Kumpir", url: "kumpir.html" },
        { title: "Kahvaltı", url: "kahvalti.html" },
        { title: "Dondurma", url: "dondurma.html" },
      ];

      function search() {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const resultsContainer = document.getElementById("results");

        // Sonuçlar alanını temizleyin
        resultsContainer.innerHTML = "";

        // Arama terimine göre filtreleme
        const results = data.filter((item) => item.title.toLowerCase().includes(searchTerm));

        // Sonuçları göster
        if (results.length > 0 && searchTerm !== "") {
          resultsContainer.style.display = "block"; // Sonuçlar kutusunu göster
          results.forEach((item) => {
            const resultItem = document.createElement("p");

            // Link oluştur
            const link = document.createElement("a");
            link.href = item.url;
            link.textContent = item.title;
            // link.target = "_blank"; // Yeni sekmede açma özelliği kaldırıldı

            resultItem.appendChild(link);
            resultsContainer.appendChild(resultItem);
          });
        } else {
          resultsContainer.style.display = "none"; // Sonuçlar kutusunu gizle
        }
      }

      // Arama kutusundan çıkıldığında sonuçları gizle
      document.getElementById("searchInput").addEventListener("blur", function () {
        setTimeout(() => {
          document.getElementById("results").style.display = "none";
        }, 200);
      });

      // Arama kutusuna yeniden odaklanıldığında, eğer sonuç varsa sonuçları göster
      document.getElementById("searchInput").addEventListener("focus", function () {
        const resultsContainer = document.getElementById("results");
        if (resultsContainer.innerHTML.trim() !== "") {
          resultsContainer.style.display = "block";
        }
      });


    
// Tema geçiş fonksiyonu
// Sayfa yüklendiğinde mevcut temayı kontrol et ve uygula
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = localStorage.getItem('theme') || 'light'; // Varsayılan tema 'light'
  applyTheme(currentTheme);
});

// Tema değiştirme işlevi
function toggleTheme() {
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  // Yeni temayı uygula
  applyTheme(newTheme);

  // Seçilen temayı kaydet
  localStorage.setItem('theme', newTheme);
}

// Temayı uygula
function applyTheme(theme) {
  const themeStylesheet = document.getElementById('theme-stylesheet');
  const htmlElement = document.documentElement; // `<html>` öğesi

  if (theme === 'dark') {
      themeStylesheet.setAttribute('href', '../style-dark.css'); // Dark tema yolunu ayarla
      htmlElement.setAttribute('data-theme', 'dark'); // Tema veri özelliğini güncelle
  } else {
      themeStylesheet.setAttribute('href', '../style-light.css'); // Light tema yolunu ayarla
      htmlElement.setAttribute('data-theme', 'light'); // Tema veri özelliğini güncelle
  }
}





