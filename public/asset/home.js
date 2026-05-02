/* hamburger*/ 
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navContent = document.querySelector(".navbar_content");

    // Ketika hamburger diklik, tambahkan/hapus class 'active'
    hamburger.addEventListener("click", function() {
        navContent.classList.toggle("active");
        
        // Opsional: Ubah ikon dari ☰ menjadi X saat terbuka
        if (navContent.classList.contains("active")) {
            hamburger.innerHTML = "✕";
        } else {
            hamburger.innerHTML = "☰";
        }
    });
});




document.addEventListener("DOMContentLoaded", function() {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2 // Animasi terpicu saat 20% elemen terlihat di layar
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Hanya animasi sekali saja
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach(el => observer.observe(el));
        });

        

        // === FITUR HOVER INGREDIENTS ===
    const ingredients = document.querySelectorAll('.ingredient-item');
    const displayDesc = document.getElementById('dynamic-desc');
    
    // Simpan teks default
    const defaultText = "Arahkan kursor ke suatu bahan untuk mengetahui kisahnya.";

    ingredients.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Saat di-hover, ubah teks dan hilangkan class placeholder
            const textContent = this.getAttribute('data-text');
            
            // Animasi fade out cepat
            displayDesc.style.opacity = 0;
            
            setTimeout(() => {
                displayDesc.textContent = textContent;
                displayDesc.classList.remove('placeholder-text');
                displayDesc.style.opacity = 1; // Fade in kembali
            }, 150); 
        });

        item.addEventListener('mouseleave', function() {
            // Saat kursor pergi, kembalikan ke teks awal
            displayDesc.style.opacity = 0;
            
            setTimeout(() => {
                displayDesc.textContent = defaultText;
                displayDesc.classList.add('placeholder-text');
                displayDesc.style.opacity = 1;
            }, 150);
        });
    });