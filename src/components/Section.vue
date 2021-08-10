<template>
  <div class="sec">
    <h1>Our Courses</h1>
    <li>
      Photography <button>view details</button> <button>apply now</button>
    </li>
    <li>
      Web Development <button>view details</button> <button>apply now</button>
    </li>
    <li>
      Graphic Design <button>view details</button> <button>apply now</button>
    </li>

    <h4><router-link to="">Viw all Courses --></router-link></h4>
    <br />

    <h1>Our Instructor</h1>

    <!-- <Tutrlist /> -->

    <!-- <li>
      <img src="#" /> Md.Sohan (graphic desginer) <button>view details</button>
    </li>
    <li>
      <img src="#" /> Md.Zahid (web developer) <button>view details</button>
    </li> -->
  </div>
</template>

<script>
//import Tutrlist from "./Tutrlist.vue";

export default {
  name: "Section",
  components: {
    //Tutrlist,
  },
};
</script>

<style scoped>
.sec {
  text-align: center;
}
</style>
