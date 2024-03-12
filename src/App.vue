<template>
  <div class="hd">
    <navigation></navigation>
  </div>

  <div class="rw">
    <router-view />
  </div>

  <!-- <div class="row rw">
      <div class="col-sm-12 col-lg-12 col-md-12 col-xs-12">
        <router-view />
      </div>
    </div> -->

  <div class="ft">
    <Footer></Footer>
  </div>
</template>

<script>
import jQuery from "jquery";
window.$ = jQuery;

export default {
  data() {
    return {
      //global variables
    };
  },
  computed: {
    //computed data
  },
  methods: {
    //user methods
  },
};

</script>

