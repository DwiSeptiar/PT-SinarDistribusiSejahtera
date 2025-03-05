// Validasi Formulir Kontak
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.querySelector('.contact form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah pengiriman form default

            // Ambil nilai input
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validasi Nama
            if (name === '') {
                alert('Nama tidak boleh kosong.');
                return;
            }

            // Validasi Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert('Masukkan alamat email yang valid.');
                return;
            }

            // Validasi Pesan
            if (message === '') {
                alert('Pesan tidak boleh kosong.');
                return;
            }

            // Jika semua validasi berhasil
            alert('Pesan berhasil dikirim!');
            contactForm.reset(); // Reset form setelah pengiriman
        });
    }

    // Animasi Scroll untuk Navigasi
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah perilaku default link

            const targetId = this.getAttribute('href').substring(1); // Ambil ID target
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll ke bagian target dengan efek smooth
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animasi Fade In pada Section saat Scroll
    const sections = document.querySelectorAll('section');

    const checkSectionVisibility = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    };

    // Jalankan fungsi saat halaman dimuat dan di-scroll
    window.addEventListener('load', checkSectionVisibility);
    window.addEventListener('scroll', checkSectionVisibility);

    // Set opacity awal ke 0 dan transform untuk animasi
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s ease, transform 1s ease';
    });
});