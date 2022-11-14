<template>
  <div>
    <p>Path: {{ $route.path }}</p>
    <router-link to="/board-members">Board Members</router-link>
  </div>
</template>

<script>
export default {
  scrollToTop: true,
   loading: false,
}
</script>
