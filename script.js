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
        { title: "Ekmek", url: "ekmek.html" },
        { title: "Lavaş", url: "lavas.html" },
        { title: "Simit", url: "simit.html" },
        { title: "Ramazan Pidesi", url: "ramazan-pidesi.html" },
        { title: "Kıymalı Pide", url: "kiymali-pide.html" },
        { title: "Lahmacun", url: "lahmacun.html" },
        { title: "Börek", url: "borek.html" },
        { title: "Pizza", url: "pizza.html" },
        { title: "Limonlu Kek", url: "limonlu-kek.html" },
        { title: "Brownie", url: "brownie.html" },
        { title: "Kurabiye", url: "kurabiye.html" },
        { title: "Lokum", url: "lokum.html" },
        { title: "Aşure", url: "asure.html" },
        { title: "Su Muhallebisi", url: "su-muhallebisi.html" },
        { title: "Dondurma", url: "dondurma.html" },
        { title: "Tavuk Izgara", url: "tavuk-izgara.html" },
        { title: "Köfte Izgara", url: "kofte-izgara.html" },
        { title: "Balık Izgara", url: "balik-izgara.html" },
        { title: "Adana Kebap", url: "adana-kebap.html" },
        { title: "Taze Fasulye", url: "taze-fasulye.html" },
        { title: "Zeytinyağlı Yaprak Sarma", url: "zeytinyagli-yaprak-sarma.html" },
        { title: "Zeytinyağlı Biber Dolma", url: "zeytinyagli-biber-dolma.html" },
        { title: "Mantarlı Tavuk Sote", url: "mantarli-tavuk-sote.html" },
        { title: "Ciğer", url: "ciger.html" },
        { title: "Sosisli", url: "sosisli.html" },
        { title: "Hamburger", url: "hamburger.html" },
        { title: "Kokoreç", url: "kokorec.html" },
        { title: "Kumpir", url: "kumpir.html" },
        { title: "Menemen", url: "menemen.html" },
        { title: "Tost", url: "tost.html" },
        { title: "Yumurta", url: "yumurta.html" },
        { title: "Beyaz Peynir", url: "beyaz-peynir.html" },
        { title: "Kaşar Peyniri", url: "kasar-peyniri.html" },
        { title: "Zeytin", url: "zeytin.html" },
        { title: "Domates", url: "domates.html" },
        { title: "Salatalık", url: "salatalik.html" },
        { title: "Nane", url: "nane.html" },
        { title: "Biber", url: "biber.html" },
        { title: "Acuka", url: "acuka.html" },
        { title: "Salam", url: "salam.html" },
        { title: "Börek", url: "borek.html" },
        { title: "Kakaolu Fındık Kreması", url: "kakaolu-findik-kremasi.html" },
        { title: "Zahter", url: "zahter.html" },
        { title: "Pirinç Pilavı", url: "pirinc-pilavi.html" },
        { title: "Bulgur Pilavı", url: "bulgur-pilavi.html" },
        { title: "Mevsim Salatası", url: "mevsim-salatasi.html" },
        { title: "Çoban Salatası", url: "coban-salatasi.html" },
        { title: "Patates Salatası", url: "patates-salatasi.html" },
        { title: "Cacık", url: "cacik.html" },
        { title: "Kornişon Turşusu", url: "kornison-tursusu.html" },
        { title: "Biber Turşusu", url: "biber-tursusu.html" },
        { title: "Jalapeno Turşusu", url: "jalapeno-tursusu.html" },
        { title: "Çiğ Köfte", url: "cig-kofte.html" },
        { title: "Beşamel Sos", url: "besamel-sos.html" },
        { title: "Bolonez Sos", url: "bolonez-sos.html" },
        { title: "Domates Sosu", url: "domates-sosu.html" },
        { title: "Haydari", url: "haydari.html" },
        { title: "Mayonez", url: "mayonez.html" },
        { title: "Nar Ekşisi", url: "nar-eksisi.html" },
        { title: "Peynir Sosu", url: "peynir-sosu.html" },
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