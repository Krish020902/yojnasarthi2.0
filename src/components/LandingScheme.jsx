import React from "react";
import Bot from "./Bot";
import Navbar from "./Navbar";

const LandingScheme = () => {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <aside class="  w-64   " aria-label="Sidebar">
          <div class="overflow-y-auto py-4 px-3 rounded ">
            <ul class="space-y-2">
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-orange-300"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="flex-1 ml-3">Description</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-orange-300 "
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Criteria</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-orange-300"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 hover:bg-orange-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Benefits</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-orange-300 "
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">Documents</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-orange-300 "
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span class="flex-1 ml-3 whitespace-nowrap">FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="flex-col ">
          <div class="mx-20 rounded overflow-hidden shadow-lg ">
            <div class="px-8 py-10 ">
              <div class="font-bold text-xl mb-2">
                Pradhan Mantri Kisan Samman Nidhi
              </div>
              <h4 className="font-bold flex text-xl" id="desc">
                Description.
              </h4>
              <br></br>
              <p class="text-gray-700 text-base text-left ">
                The scheme aims to supplement the financial needs of all
                landholding farmers’ families in procuring various inputs to
                ensure proper crop health and appropriate yields, commensurate
                with the anticipated farm income as well as for domestic needs.
                Under the Scheme an amount of Rs.6000/- per year is released by
                the Central Government online directly into the bank accounts of
                the eligible farmers under Direct Benefit Transfer mode, subject
                to certain exclusions.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2 ">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Farmers.
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Income Support.
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Agricultural Inputs.
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-bold my-10 mx-24 text-2xl flex" id="criteria">
              Criteria.
            </h4>
            <p class="text-gray-700 text-base text-left mx-28">
              1. All land holding eligible farmer families (subject to the
              prevalent exclusion criteria) are to avail of the benefits under
              this scheme, as per the cabinet decision taken in May 2019. The
              revised Scheme is expected to cover around 2 crores more farmers,
              increasing the coverage of PM-KISAN to around 14.5 crore
              beneficiaries.
            </p>
            <br></br>
            <p class="text-gray-700 text-base text-left mx-28">
              2. Under the scheme, financial benefit has been provided to all
              Small and Marginal landholder farmer families with total
              cultivable holding upto 2 hectares with a benefit of Rs.6000 per
              annum per family payable in three equal installments, every four
              months.
            </p>
          </div>
          <div>
            <h4 className="font-bold my-10 mx-24 text-2xl flex" id="benefits">
              Benefits.
            </h4>
            <p class="text-gray-700 text-base text-left mx-28">
              1. All land holding eligible farmer families (subject to the
              prevalent exclusion criteria) are to avail of the benefits under
              this scheme, as per the cabinet decision taken in May 2019. The
              revised Scheme is expected to cover around 2 crores more farmers,
              increasing the coverage of PM-KISAN to around 14.5 crore
              beneficiaries.
            </p>
            <br></br>
            <p class="text-gray-700 text-base text-left mx-28">
              2. Under the scheme, financial benefit has been provided to all
              Small and Marginal landholder farmer families with total
              cultivable holding upto 2 hectares with a benefit of Rs.6000 per
              annum per family payable in three equal installments, every four
              months.
            </p>
          </div>
          <div>
            <h4 className="font-bold my-10 mx-24 text-2xl flex" id="docs">
              Documents.
            </h4>
            <p class="text-gray-700 text-base text-left mx-28">
              1. Aadhaar Card.
            </p>
            <p class="text-gray-700 text-base text-left mx-28">
              2. Landholding papers
            </p>
            <p class="text-gray-700 text-base text-left mx-28">
              3. Savings Bank Account.
            </p>
          </div>

          {/* <div className="flex-col">{nname}</div> */}
        </div>
      </div>
      <Bot />
    </>
  );
};

export default LandingScheme;
