<template>
<section class="bg-gray-900 text-white">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-bold sm:text-4xl">
        Our Team
        </h2>
  <section class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Prof. António Luís Jorge Gumbe
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
    University of Angola
    </p>

      <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
    gumbe.jorge@gmail.com
    </p>


    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Eduardo Lourenço Viana
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      Marioza & Viana- Advogados Associados, Brazil.
    </p>

     <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      lourencoviana1@gmail.com
    </p>


    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Prof. Solomon Negash
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      Kennesaw State University
    </p>

     <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      560 Parliament Garden Way NW,
       Mail Drop #0405
       Kennesaw, GA 30144
    </p>

     <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     snegash@kennesaw.edu.
    </p>

    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
       Dr. Margaret T. Andrews Cert Ed MA PhD
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      Education Expert
    </p>

        <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     drmtandrews84@gmail.com
    </p>

    <nuxt-link
      :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Ms. Evelyn Dan Epelle
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Journalism/Media Expert
    </p>

      <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     mzepelle@gmail.com, ed773@georgetown.edu
    </p>

     <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     ed773@georgetown.edu
    </p>

    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Professor Dr. Anny Ocoró Luango
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Chairperson of the Association of Afro-Latin American and Caribbean Researchers. Argentina.
    </p>

      <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
   annyocoro@hotmail.com
    </p>

    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Professor Dr. Cleber Santos Vieira
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      Chairperson of the ABPN- Association of Afro- Brazilian Researchers and Professor of UNIFESP (Federal University of São Paulo )- Campus Guarulhos.
    </p>

       <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     cleber.vieira@unifesp.br, presidencia@abpn.org.br
    </p>

    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Dr. Saul Molobi (FCIM)
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Group Chairman and Chief Executive Officer
    </p>

        <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Brandhill Africa™, Johannesburg
    </p>

         <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     saul.molobi@brandhillafrica.com
    </p>

    <nuxt-link
      :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Prof. Binta Tijjani Jibril
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Director
International Institute of Islamic Banking and Finance
    </p>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Economics Department
    </p>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Bayero University, Kano
    </p>

      <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     bjibril1710@gmail.com
    </p>

    <nuxt-link
      :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
     Cheikh Thiam
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Professor of English and Black Studies
    </p>

        <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Amherst College
    </p>

        <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Department of English
    </p>
        <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     cthiam1@gmail.com
    </p>

    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Anthony C. Diala, Associate Prof.
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      Director, Centre for Legal Integration in Africa
    </p>

        <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
     Faculty of Law, Department of Law
    </p>


    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      University of Western Cape, South Africa
    </p>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      adiala@uwc.ac.za
    </p>
    <nuxt-link
      :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Jamila Ksiksi
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      Tunisian Politician
      jamilaksiksi2011@gmail.com
    </p>

     <p
      class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3 dark:text-gray-400"
    >
      jamilaksiksi2011@gmail.com
    </p>

    <nuxt-link
      :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Prof. Njoki Wane
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <nuxt-link
      :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>

<article
  class="overflow-hidden rounded-lg border border-gray-100 shadow-sm dark:border-gray-800 dark:shadow-gray-700/25"
>
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900 dark:text-white">
      Prof. Marquita Smith
        <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. -->
      </h3>
    </a>

    <nuxt-link
     :to="'/board-members/' + id"
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Read Bio

      <span
        aria-hidden="true"
        class="block transition group-hover:translate-x-0.5"
      >
        &rarr;
      </span>
    </nuxt-link>
  </div>
</article>
  </section>

    </div>
</section>
</template>


<script>
export default {
  name: "board-members",
  scrollToTop: true,
  loading: false,
  data() {
    return {
      title: "Pan Africa Board Members",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Pan Africa &#8211; Original thinking, research help add to human knowledge",
        },
      ],
    };
  },
};
</script>

<style>
</style>
