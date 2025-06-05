<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import BackToTop from "@/components/BackToTop.vue";
import About from "@/components/About.vue";
import Services from "@/components/Services.vue";
import HomeGallery from "@/components/Home-Gallery.vue";
import Book from "@/components/Book.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <header>
    <Navbar />
    <Hero />
  </header>
  <main>
    <About />
    <Services />
    <HomeGallery />
    <Book />
    <Contact />
  </main>
  <footer>
    <Footer />
  </footer>
  <div>
    <BackToTop />
  </div>
</template>
