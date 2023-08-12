<template>
  <ssr-carousel show-dots :slides-per-page="1" :autoplay-delay="5" loop class="h-80">
    <div class="slide z-0" v-for="(slide, index) in carouselContents" :key="index" :index="index + 1">
      <div class="text-white text-center flex flex-col justify-center space-y-3 max-w-4xl mx-auto">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-medium max-w-prose">
          {{ slide.title }}
        </h1>
        <p class="text-base lg:text-lg font-light w-11/12 mx-auto">
          {{ slide.description }}
        </p>
      </div>
    </div>
  </ssr-carousel>
</template>

<script>
import SsrCarousel from "vue-ssr-carousel";
export default {
  components: {
    "ssr-carousel": SsrCarousel,
  },
  data() {
    return {
      carouselContents: [
        {
          id: 1,
          title: "PANAFSTRAG Mission Statement",
          description:
            "Pan-Africana Strategic and Policy Research Group (PANAFSTRAG) is a group of willing Africana People coming together voluntarily to deliver original thinking through in-depth study, research, and analyses that benefit Africana people worldwide.",
        },
        {
          id: 2,
          title: "Transparency",
          description:
            "PANAFSTRAG is responsive, responsible professional, sensitive to the needs of people, tolerance and responsiveness to criticisms and pro-activity.",
        },
        {
          id: 3,
          title: "Integrity",
          description:
            "PANAFSTRAG is responsible, professional, sensitive to the needs of people, tolerant, responsive to criticisms and pro-active.",
        },
        {
          id: 4,
          title: "Accountability",
          description:
            "PANAFSTRAG regard office, power and authority as a trust with the obligation to render services and give timely account of stewardship.",
        },
        {
          id: 5,
          title: "Social Justice",
          description:
            "PANAFSTRAG ensures fairness, equity and equal opportunity in apportioning responsibility and resources.",
        },
        {
          id: 6,
          title: "Human Dignity",
          description:
            "Respect for human life and the human person and promotion of access to meaningful existence.",
        },
      ],
    };
  },
};
</script>

<style></style>
