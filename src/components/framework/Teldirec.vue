<template>
  <section class="about_section layout_padding">
    <div class="container  ">
      <div class="row">
        <div class="col-md-6">
          <div class="img-box aww">
            <a href="https://maps.app.goo.gl/AK46vkkaZhrJHFQV7"
             target="_blank" ><img src="../../assets/img/map2.png"
            /></a>
          </div>
        </div>

        <div class="col-md-6">
          <div class="heading_container heading_center">
            <h2 id="inqui">
              <span>Inquiries</span>
            </h2>
          </div>
          <div class="detail-box">
            <br />
            <form id="inquirieForm">
              <!-- First Name input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="firstName"
                  ><b>First Name</b></label
                >
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="form-control"
                  required
                />
              </div>
              <!--Last Name input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="lastName"
                  ><b>Last Name</b></label
                >
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-control"
                  required
                />
              </div>
              <!--contact number input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="contactNumber"
                  ><b>Contact number</b></label
                >
                <input
                  type="number"
                  id="contactNumber"
                  name="contactNumber"
                  class="form-control"
                  required
                />
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="email"
                  ><b>Email address</b></label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  required
                />
              </div>

              <!-- Message input -->
              <div class="form-outline mb-4">
                <label class="form-label" for="message"><b>Message</b></label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <!-- Submit button -->
              <button
                type="submit"
                id="submitButton"
                value="Submit"
                class="btn btn-primary btn-block mb-4"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="row">
        <div class="heading_container heading_center">
          <h2 id="contactteam">Contact<span> Our Team</span></h2>
        </div>
        <div class="img-box">
          <table class=" table ttttt ">
            <thead class="yyyy">
              <tr>
                <th>Name</th>
                <th>Designation</th>

                <th>Office / Ext / Fax</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Mr. K Ravindra Pathmapriya &nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Director General</td>

                <td>+94 11 2484861/ 1282/ +94 11 2421219</td>
                <td>dgitm@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td></td>
                <td>Office of DG</td>

                <td>2904</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Mr. J H S P Jayamaha&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Additional Director Genaeral</td>

                <td>+94 11 2484791/ 1369</td>
                <td>jayamaha.jhsp@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td>
                  Mr. Udesh I W Seneviratna&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Additional Director Genaeral</td>

                <td>+94 11 2484763/ 1339</td>
                <td>seneviratna.uiw@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td>
                  Mr.D P Gnanendra Pradeep&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Director(Fin)</td>

                <td>+94 11 2484519/ 2997/ +94 11 2431028</td>
                <td>pradeep.dpg@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td>
                  Mrs.M A C N Senevirathne&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Director (Policy & Development)</td>

                <td>+94 11 2034531/ +94 11 2421219/ 4177/ +9476 - 6083667</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Mrs.M S S Sumanapala&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Director (IT)</td>

                <td>+94 11 2151440/ 2902/ +94 11 2141518</td>
                <td>sumanapala.mss@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td>
                  Mrs.C D Wijeratne&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Deputy Director</td>

                <td>+94 11 2484828/ 1219</td>
                <td>wijeratne.cd@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td>
                  Mr.E Dishan Shirantha&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Assistant Director</td>

                <td>+94 11 2034442/ 1365/ +94 11 2431028/ +94 71 8031678</td>
                <td>shirantha.ed@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td>
                  Mrs.Achini Mudalige&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Assistant Director</td>

                <td>+94 11 2034443/ 1132</td>
                <td>mudalige.a@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td>
                  Mrs.G G U Fernando&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Assistant Director</td>

                <td>+94 11 2034533/ 2269</td>
                <td>fernando.ggu@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td>
                  Mr.I M M C Illankoon&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Assistant Director</td>

                <td>+94 11 2034534/ 2270/ +94 76 2196805</td>
                <td>illankoon.imm@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td>
                  Mr.K Sudharshana&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Assistant Director</td>

                <td>+94 11 2034534/ 2270/ +94 77 0715697</td>
                <td>sudharshana.k@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td>
                  Mrs.K H Chandrasekera&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Assistant Director</td>

                <td>+94 11 2034534/ 2270/ +94 703355994</td>
                <td>chandrasekara.kh@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td>
                  Mrs.W P P D Gunasekara&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Administrative Officer</td>

                <td>+94 11 2484582/ 1011/ +94 714696573</td>
                <td>gunasekara.wppd@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td colspan="4"><b>Hardware Unit</b></td>
              </tr>

              <tr>
                <td>
                  Mr.W K K Perera&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>ICT Officer</td>

                <td>1315</td>
                <td>perera.wwk@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td colspan="4"><b>e-Payroll System</b></td>
              </tr>
              <tr>
                <td>
                  Mr.P D Tharanga Pathirana&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Development Officer</td>

                <td>2916</td>
                <td>pathirana.pdt@itmd.treasury.gov.lk</td>
              </tr>

              <tr>
                <td colspan="4"><b>E mail, AD Account</b></td>
              </tr>
              <tr>
                <td>
                  Ms.S P D N Sandagiri&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>ICT Officer</td>

                <td>1386</td>
                <td>sandagiri.spdn@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td colspan="4"><b>Network Operation Centre</b></td>
              </tr>

              <tr>
                <td>
                  Mr.G K H Lahiru&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Development Officer</td>

                <td>1143</td>
                <td>lahiru.gkh@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td>
                  Mr.K C Karunaratne&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>ICT Officer</td>

                <td>1143</td>
                <td>karunaratne.ac@itmd.treasury.gov.lk</td>
              </tr>
              <tr>
                <td colspan="4"><b>Website</b></td>
              </tr>
              <tr>
                <td>
                  Mr.W K S Dayawansa&nbsp;<i
                    class="fa fa-linkedin-square"
                    style="font-size:24px;color:rgb(47, 93, 180)"
                  ></i>
                </td>
                <td>Statistical Officer</td>

                <td>+94 11 2484893/ 1342</td>
                <td>senarath.wks@itmd.treasury.gov.lk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>
