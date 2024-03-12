<template>
 <div class="sliderhm">
    <div class="card">
      <img src="../../assets/img/slider1-white.jpg" alt="" />
    </div>
  

  <!-- <div class="bg_img_box">
        <img src="../../assets/img/slider1-white.jpg" alt="">
      </div> -->

  <Newsline></Newsline>
</div>

  <section class="service_section layout_padding">
    <div class="row">
      <div class="heading_container heading_center">
        <h2 class="w3-center w3-animate-top">Our <span>Services</span></h2>
        <br />
      </div>
    </div>
    <br />
    <br />
    <div class="row">
      <div class="col-md-4 ">
        <div class="box ">
          <div class="img-box">
            <img src="../../assets/img/sw.png" alt="" />
          </div>
          <div class="detail-box">
            <h5>
              Software Development
            </h5>
            <p>
              Software development team involve in activities related to the
              process of creating, designing, deploying and supporting software
            </p>
            <a href="/development">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box ">
          <div class="img-box">
            <img src="../../assets/img/hw.png" alt="" />
          </div>
          <div class="detail-box">
            <h5>
              Hardware Troubleshooting
            </h5>
            <p>
              Hardware team involve in the process of identifying and resolving
              issues with the physical components of a computer system
            </p>
            <a href="/hardware">
              Read More
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="box ">
          <div class="img-box">
            <img src="../../assets/img/nw.png" alt="" />
          </div>
          <div class="detail-box">
            <h5>
              Network and Security
            </h5>
            <p>
              Networking team involve in providing solutions as well as
              processes or rules and configurations relating to network use,
              accessibility, and overall threat protection
            </p>
            <a href="/network">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- end service section -->

  <!-- about section -->

  <section class="about_section layout_padding">
    <div class="container  ">
      <div class="heading_container heading_center">
        <h2>About <span>Us</span></h2>
      </div>
      <div class="row">
        <div class="col-md-6 ">
          <div class="img-box">
            <img src="../../assets/img/bg5.jpg" alt="" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <h3>
              We Are ITMD
            </h3>
            <p>
              The department is responsible for the administration and
              management of Local Area Network, Network Security, Official web
              portal, Official email and catering for the ICT solutions within
              Treasury with a dedicated and well experienced IT staff.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">Top <span> Management</span></h2>
      </div>

      <div class="team_container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="../../assets/img/dg1.jpg" class="img1" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Mr.K Ravindra Pathmapriya
                </h5>
                <p>
                  Director General
                </p>
              </div>
              <div class="social_box">
                <a
                  href="https://www.facebook.com/Ravi.Pathmapriya?mibextid=LQQJ4d"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>

             
&nbsp;&nbsp;
                <a
                  href="https://www.instagram.com/ravindrapathmapriya?igsh=NTc4MTIwNjQ2YQ=="
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
               
                
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="../../assets/img/adg1.jpg" class="img1" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Mr.J H S P Jayamaha
                </h5>
                <p>
                  Additional Director General - Administration and finance
                </p>
              </div>
              <br>
              <br>
              
             
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="../../assets/img/adg2.jpg" class="img1" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                  Mr.Udesh I W Seneviratna
                </h5>
                <p>
                  Additional Director General - Policy and Development
                </p>
              </div>
              <div class="social_box">
               <a href="https://www.facebook.com/udeshiws?mibextid=LQQJ4d">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
               
                  &nbsp;&nbsp;
                
                <a
                  href="https://www.linkedin.com/in/udesh-seneviratna-b204b715/"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              
               
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="btn-box">
          <a href="/Teldirec#contactteam">
            <b> Our Team</b>
          </a>
        </div>
      </div>
    </div>
  </section>
  <hr />
</template>

<style scoped></style>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>
