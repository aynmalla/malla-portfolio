import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navRef = useRef(null);
  const isClickScrolling = useRef(false);

  // 1. Logika Hide/Show Navbar dengan pengecualian saat klik menu
  useEffect(() => {
    const handleScroll = () => {
      // Jika sedang dalam proses klik navigasi, abaikan perubahan scroll
      if (isClickScrolling.current) return;

      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(true); // Scroll ke bawah -> Muncul
      } else {
        setShowNavbar(false);  // Scroll ke atas -> Hilang
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 2. Logika Deteksi Posisi Halaman (Intersection Observer)
  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.3,
    });

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 3. Menyesuaikan posisi cursor berdasarkan seksi aktif
  useEffect(() => {
    if (!navRef.current) return;
    const activeItem = navRef.current.querySelector(`[data-section="${activeSection}"]`);
    if (activeItem) {
      const { width, offsetLeft } = activeItem;
      setPosition({ width, opacity: 1, left: offsetLeft });
    }
  }, [activeSection]);

  const handleTabClick = (id) => {
    // Paksa navbar untuk tetap muncul dan kunci deteksi scroll sejenak
    isClickScrolling.current = true;
    setShowNavbar(true);
    setActiveSection(id);

    // Buka kunci kembali setelah animasi scroll selesai (sekitar 600ms)
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bottom-6 left-0 right-0 z-[99] flex justify-center px-4 font-['Bricolage_Grotesque',sans-serif]"
    >
      <ul
        ref={navRef}
        className="relative mx-auto flex w-fit gap-1 rounded-full border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-2 shadow-2xl"
        onMouseLeave={() => {
          const activeItem = navRef.current.querySelector(`[data-section="${activeSection}"]`);
          if (activeItem) {
            setPosition({ width: activeItem.offsetWidth, opacity: 1, left: activeItem.offsetLeft });
          }
        }}
      >
        {navItems.map((item) => (
          <Tab
            key={item.id}
            id={item.id}
            href={item.href}
            setPosition={setPosition}
            onClick={() => handleTabClick(item.id)}
          >
            {item.label}
          </Tab>
        ))}

        <Cursor position={position} />
      </ul>
    </motion.header>
  );
}

const Tab = ({ children, setPosition, href, id, onClick }) => {
  const ref = useRef(null);
  
  return (
    <li
      ref={ref}
      data-section={id}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-xs uppercase font-extrabold tracking-wide text-slate-700 dark:text-slate-300 hover:text-white transition-colors duration-200 md:px-6 md:py-3 md:text-sm"
    >
      <a href={href} onClick={onClick} className="block w-full h-full">{children}</a>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={position}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute z-0 h-9 md:h-12 rounded-full bg-rose-600 dark:bg-rose-500 top-2"
    />
  );
};