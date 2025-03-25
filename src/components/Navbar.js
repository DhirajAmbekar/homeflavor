import React, { useState } from "react";
import Logo from "../assets/homeflavorlogo.png";
export const Navbar = () => {
  const [menu_ctr, setMenu_ctr] = useState(false);
  return (
    <div className="navbar_container">
      <div className="navbar_section1">
        <div className="navbar_contacts">
          <a href="tel:+919878677656">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2.75C1 1.92157 1.67157 1.25 2.5 1.25H4.95943C5.28225 1.25 5.56886 1.45657 5.67094 1.76283L6.7943 5.13291C6.91233 5.48699 6.75203 5.87398 6.4182 6.0409L4.72525 6.88737C5.55194 8.72091 7.02909 10.1981 8.86263 11.0247L9.7091 9.3318C9.87602 8.99796 10.263 8.83767 10.6171 8.9557L13.9872 10.0791C14.2934 10.1811 14.5 10.4677 14.5 10.7906V13.25C14.5 14.0784 13.8284 14.75 13 14.75H12.25C6.0368 14.75 1 9.7132 1 3.5V2.75Z"
                stroke="#FFB400"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            (414) 857 - 0107
          </a>
          <a href="mailto:yoga@gmail.com">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3L7.41795 6.9453C7.9218 7.2812 8.5782 7.2812 9.08205 6.9453L15 3M3 11.25H13.5C14.3284 11.25 15 10.5784 15 9.75V2.25C15 1.42157 14.3284 0.75 13.5 0.75H3C2.17157 0.75 1.5 1.42157 1.5 2.25V9.75C1.5 10.5784 2.17157 11.25 3 11.25Z"
                stroke="#FFB400"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            homeflavor@gmail.com
          </a>
        </div>
        <div className="navbar_social_icons">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="28"
              height="28"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              space="preserve"
              class=""
            >
              <g>
                <path
                  d="M256.064 0h-.128C114.784 0 0 114.816 0 256c0 56 18.048 107.904 48.736 150.048l-31.904 95.104 98.4-31.456C155.712 496.512 204 512 256.064 512 397.216 512 512 397.152 512 256S397.216 0 256.064 0zm148.96 361.504c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.616-127.456-112.576-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016.16 8.576.288 7.52.32 11.296.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744-3.776 4.352-7.36 7.68-11.136 12.352-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z"
                  fill="#fff"
                  opacity="1"
                  data-original="#fff"
                  class=""
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="30"
              height="30"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M17 2H7C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5zm-5 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm5.35-9.38c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
                  fill="#fff"
                  opacity="1"
                  data-original="#fff"
                  class="hovered-path"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  fill="#fff"
                  opacity="1"
                  data-original="#fff"
                  class="hovered-path"
                ></circle>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="28"
              height="28"
              x="0"
              y="0"
              viewBox="0 0 510 510"
              space="preserve"
              class=""
            >
              <g>
                <path
                  d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"
                  fill="#fff"
                  opacity="1"
                  data-original="#fff"
                  class=""
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="28"
              height="28"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                  fill="#fff"
                  opacity="1"
                  data-original="#fff"
                  class="hovered-path"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="navbar_section2">
        <img src={Logo} alt="yoga logo" />
        <div className="navbar_section2_desktop_menu">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Menu</a>
          <a href="/">Page</a>
          <a href="/">Contact</a>
        </div>
        <div className="navbar_section2_btns">
          <div className="navbar_section2_btns_login">Login</div>
          <div className="navbar_section2_btns_started">Get Started</div>
        </div>
        <div
          className="navbar_section2_mobile_menu"
          onClick={() => {
            setMenu_ctr((prev) => !prev);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xlink="http://www.w3.org/1999/xlink"
            width="35"
            height="35"
            x="0"
            y="0"
            viewBox="0 0 24 24"
          >
            <g transform="matrix(-1,2.4492935982947064e-16,2.4492935982947064e-16,1,23.999999999999996,-3.552713678800501e-15)">
              <linearGradient
                id="a"
                x1="12"
                x2="12"
                y1="5"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#fd6700"></stop>
                <stop offset="1" stop-color="#85a389"></stop>
              </linearGradient>
              <path
                fill="url(#a)"
                fill-rule="evenodd"
                d="M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"
                clip-rule="evenodd"
                opacity="1"
                data-original="url(#a)"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      {menu_ctr && (
        <div className="navbar_section2_list">
          <a href="/">Home</a>
          <a href="/">
            Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="21"
              height="21"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm4.53 9.28-3.646 3.646c-.243.244-.563.365-.884.365s-.641-.121-.884-.365L7.47 11.53a.75.75 0 1 1 1.061-1.061l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.061 1.061z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="hovered-path"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">
            Protfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="21"
              height="21"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm4.53 9.28-3.646 3.646c-.243.244-.563.365-.884.365s-.641-.121-.884-.365L7.47 11.53a.75.75 0 1 1 1.061-1.061l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.061 1.061z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="hovered-path"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">
            Blogs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xlink="http://www.w3.org/1999/xlink"
              width="21"
              height="21"
              x="0"
              y="0"
              viewBox="0 0 24 24"
              space="preserve"
              class="hovered-paths"
            >
              <g>
                <path
                  d="M12 2.25c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75 9.75-4.374 9.75-9.75S17.376 2.25 12 2.25zm4.53 9.28-3.646 3.646c-.243.244-.563.365-.884.365s-.641-.121-.884-.365L7.47 11.53a.75.75 0 1 1 1.061-1.061l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.061 1.061z"
                  fill="#000000"
                  opacity="1"
                  data-original="#000000"
                  class="hovered-path"
                ></path>
              </g>
            </svg>
          </a>
          <a href="/">Contact</a>
        </div>
      )}
    </div>
  );
};
