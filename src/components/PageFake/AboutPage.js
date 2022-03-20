import React from "react";
import UploadPostSpace from "../main/UploadPostSpace";
import "../../css/AboutPage.css";

function AboutPage() {
  return (
    <div class="md:flex md:space-x-6 pageAboutWrapper">
      <div class="w-full flex-shirink-0">
        <div class="card p-5 mb-5">
          <h1 class="block text-lg font-bold"> About </h1>

          <div class="space-y-4 mt-3">
            <div class="flex items-center space-x-3">
              <ion-icon
                name="alert-circle"
                class="bg-gray-100 p-1.5 rounded-full text-xl"
              ></ion-icon>
              <div class="flex-1">
                <div>
                  {" "}
                  We Plan ,We Desing, We Estimate for Approval to Build..{" "}
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <ion-icon
                name="thumbs-up"
                class="bg-gray-100 p-1.5 rounded-full text-xl"
              ></ion-icon>
              <div class="flex-1">
                <div class="font-semibold"> 347 people follow this </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <ion-icon
                name="globe"
                class="bg-gray-100 p-1.5 rounded-full text-xl"
              ></ion-icon>
              <div class="flex-1">
                <div>
                  {" "}
                  <a href="#" class="text-blue-500">
                    {" "}
                    https://mydomain.com{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <ion-icon
                name="mail-open"
                class="bg-gray-100 p-1.5 rounded-full text-xl"
              ></ion-icon>
              <div class="flex-1">
                <div>
                  {" "}
                  <a href="#" class="text-blue-500">
                    myname@mywebssite.com
                  </a>{" "}
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <ion-icon
                name="albums"
                class="bg-gray-100 p-1.5 rounded-full text-xl"
              ></ion-icon>
              <div class="flex-1">
                <div>
                  {" "}
                  <a href="#" class="text-blue-500">
                    Product/service
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="widget card p-5 border-t">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h4 class="text-lg font-semibold"> Related Pages </h4>
            </div>
            <a href="#" class="text-blue-600 ">
              {" "}
              See all
            </a>
          </div>
          <div>
            <div class="flex items-center space-x-4 rounded-md -mx-2 p-2 hover:bg-gray-50">
              <a
                href="timeline-group.html"
                class="w-12 h-12 flex-shrink-0 overflow-hidden rounded-full relative"
              >
                <img
                  src="assets/images/avatars/avatar-3.jpg"
                  class="absolute w-full h-full inset-0 "
                  alt=""
                />
              </a>
              <div class="flex-1">
                <a
                  href="timeline-page.html"
                  class="text-base font-semibold capitalize"
                >
                  {" "}
                  Monroe Parker{" "}
                </a>
                <div class="text-sm text-gray-500 mt-0.5"> 345K Following</div>
              </div>
              <a
                href="timeline-page.html"
                class="flex items-center justify-center h-8 px-3 rounded-md text-sm border font-semibold bg-blue-500 text-white"
              >
                Like
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="space-y-5 flex-shrink-0 md:w-7/12 uploadPostPage">
        <UploadPostSpace />
      </div>
    </div>
  );
}

export default AboutPage;
