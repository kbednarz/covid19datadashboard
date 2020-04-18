<template>
<div class="col mb-4">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ subtitle }}</h6>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ["title", "subtitle", "text"]
};
</script>
