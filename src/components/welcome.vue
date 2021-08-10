<template>
  <div>
    <Head />
    <Navigation />
    <Registration />
    <Section />
    <Articales />
    <Footer />
  </div>
</template>

<script>
import Head from "./Head.vue";
import Navigation from "./Navigation.vue";
import Registration from "./Registration.vue";
import Section from "./Section.vue";
import Articales from "./Articales.vue";
import Footer from "./Footer.vue";

export default {
  name: "welcome",
  components: {
    Head,
    Navigation,
    Registration,
    Section,
    Articales,
    Footer,
  },
};
</script>

<style scoped></style>
