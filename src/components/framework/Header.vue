<template>
  <div class="hero_area">
    <!-- header section strats -->

    <header class="header_section">
      <div class="container-fluid">
        <nav
          class="navbar navbar-expand-xl custom_nav-container "
          :class="{ collapsed: isCollapsed }"
        >
          <a class="navbar-brand" href="/">
            <span>
              
                  <img src="../../assets/img/gov_logo.png" class="logo" /><img
                    src="../../assets/img/itmdlogonew.png"
                    class="logoit"
                  />
                
               
                  <h5 class="name2">තොරතුරු තාක්ෂණ කළමනාකරණ දෙපාර්තමේන්තුව</h5>
                  <h5 class="name3">
                    தகவல் தொழில்நுட்ப முகாமைத்துவ திணைக்களம்
                  </h5>
                  <h5 class="name1">
                    Department of Information Technology Management
                  </h5>
                
              
            </span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            @click="toggleNavbar"
          >
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav  ">
              <li class="nav-item ">
                <a class="nav-link" href="/"
                  >Home <span class="sr-only">(current)</span></a
                >
              </li>
              <li class="nav-item ">
                <a class="nav-link" href="/About"> About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/OurTeam">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Actionplan">Publications</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Gallery">Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/careers">Careers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Officers">RTI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Teldirec">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    toggleNavbar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style>
/* Add any custom styles here */
.collapsed .navbar-collapse {
  display: none;
}
</style>
