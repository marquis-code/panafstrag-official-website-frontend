<template>
  <ssr-carousel
    show-dots
    :slides-per-page="1"
    :autoplay-delay="5"
    loop
    class="h-96"
  >
    <div
     class="slide"
      v-for="(slide, index) in carouselContents"
      :key="index"
      :index="index + 1"
    >
      <div class="text-white text-center space-y-3 max-w-4xl mx-auto pt-28">
        <h1 class="text-2xl md:text-3xl lg:text-4xl font-medium">{{ slide.title }}</h1>
        <p class="text-sm md:text-base lg:text-lg font-light w-11/12 mx-auto">{{ slide.description }}</p>
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
            "PanAfricana Strategic and Policy Research Group (PANAFSTRAG) is a group of willing Africana People coming together voluntarily to deliver original thinking through in-depth study, research, and analyses that benefit Africana people worldwide.",
        },
        {
          id: 1,
          title: "PANAFSTRAG Transparency",
          description:
            "PanAfricana Strategic is responsive, responsible professional, sensitive to the needs of people, tolerance and responsiveness to criticisms and pro-activity.",
        },
        {
          id: 1,
          title: "PANAFSTRAG Integrity",
          description:
            "PANAFSTRAG is responsible, professional, sensitive to the needs of people, tolerant, responsive to criticisms and pro-active.",
        },
        {
          id: 1,
          title: "PANAFSTRAG Accountability",
          description:
            "PanAfricana Strategic Regard office, power and authority as a trust with the obligation to render service and give timely account of stewardship.",
        },
        {
          id: 1,
          title: "PANAFSTRAG Social Justice",
          description:
            "PanAfricana Strategic Ensures fairness, equity and equal opportunity in apportioning responsibility and resources.",
        },
        {
          id: 1,
          title: "PANAFSTRAG Human Dignity ",
          description:
            "Respect for human life and the human person and promotion of access to meaningful existence.",
        },
      ],
    };
  },
};
</script>

<style>
</style>
