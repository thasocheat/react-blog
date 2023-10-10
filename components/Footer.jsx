import { useState } from "react";
import Link from "next/link";


const footerNav = {
    // Company: [
    //   {
    //     title: "About Us",
    //     href: "/#",
    //   },
    //   { title: "Contact Us", href: "/#" },
    //   { title: "Newsroom", href: "/#" },
    //   { title: "FAQ", href: "/#" },
    // ],
    // "Job Seeker": [
    //   {
    //     title: "Jobs by Specialisation",
    //     href: "/#",
    //   },
    //   { title: "Jobs by Location", href: "/#" },
    //   { title: "Jobs by Type", href: "/#" },
    //   { title: "Jobs by Experience Level", href: "/#" },
    //   { title: "Companies", href: "/#" },
    //   { title: "Advice", href: "/#" },
    // ],
    FooterMenu: [
      {
        title: "About",
        href: "/about",
      },
      { title: "Blog", 
        href: "/blog" 
      },
      { title: "Contact", 
        href: "/contact" 
      },
    ],
  };
  
  const SocialLinks = [
    // {
    //   title: "Instagram",
    //   link: "https://instagram.com/",
    //   Icon: <InstagramIcon height={30} width={30} />,
    // },
    {
      title: "Facebook",
      link: "https://www.facebook.com/profile.php?id=100012747163486",
      Icon: <img src="../img/facebook.png" height={30} width={30} />,
    },
    // {
    //   title: "Tiktok",
    //   link: "https://tiktok.com/",
    //   Icon: <TiktokIcon height={30} width={30} />,
    // },
    // {
    //   title: "LinkedIn",
    //   link: "https://linkedin.com/",
    //   Icon: <LinkedInIcon height={30} width={30} />,
    // },
    {
      title: "Youtube",
      link: "https://www.youtube.com/@-learntechnology3197",
      Icon: <img src="../img/youtube.png" height={30} width={30} />,
    },
  ];

export default function Footer() {
    // const [navbar, setNavbar] = useState(false);

    return (
        // <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
        //     <div class="md:flex md:justify-between">
        //         <div class="mb-6 md:mb-0">
        //             <a href="https://flowbite.com" target="_blank" class="flex items-center">
        //                 <img src="/docs/images/logo.svg" class="mr-4 h-10" alt="FlowBite Logo" />
        //                 <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        //             </a>
        //         </div>
        //         <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
        //             <div>
        //                 <h3 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h3>
        //                 <ul>
        //                     <li class="mb-4">
        //                         <a href="https://flowbite.com" target="_blank" class="text-gray-600 hover:underline dark:text-gray-400">Flowbite</a>
        //                     </li>
        //                     <li>
        //                         <a href="https://tailwindcss.com/" target="_blank" rel="nofollow" class="text-gray-600 hover:underline dark:text-gray-400">Tailwind CSS</a>
        //                     </li>
        //                 </ul>
        //             </div>
        //             <div>
                        
        //             </div>
        //             <div>
                        
        //             </div>
        //         </div>
        //     </div>
        //     <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        //     <div class="sm:flex sm:items-center sm:justify-between">
        //             <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" target="_blank" class="hover:underline">Flowbite™</a>. All Rights Reserved.
        //             </span>
        //             <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
        //                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        //                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
        //                 </a>
        //                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        //                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
        //                 </a>
        //                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        //                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
        //                 </a>
        //                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        //                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
        //                 </a>
        //                 <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
        //                     <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd" /></svg>
        //                 </a>
        //             </div>
        //     </div>
        // </footer>
        <footer className="mt-20 bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-screen-xl px-6 pt-16 sm:px-8">
            <div className="grid grid-cols-1 gap-y-6 gap-x-6 md:!grid-cols-4 md:gap-8 xs:grid-cols-2">
              <div className="mb-4  flex flex-col xs:col-span-2">
                <img src="../circle.jpg" alt="Logo" width={50} />
                <p className="mt-4 max-w-screen-xs text-sm">
                  Future!!!.
                </p>
                <ul
                  id="social-media-links"
                  className="mt-4 flex items-center space-x-4"
                >
                  {SocialLinks.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.link}
                        aria-label={`${item.title} profile`}
                        className="transition-all duration-150 hover:fill-indigo-800 dark:fill-white dark:hover:fill-indigo-800"
                      >
                        {item.Icon}
                      </a>
                    </li>
                  ))}
                </ul>

                <span className="mt-8 text-xl font-bold capitalize">
                  Many Problems!!!.
                </span>

                <a
                  href="https://www.linkedin.com/"
                  rel="noreferrer"
                  target="_blank"
                  className="mt-4 max-w-min"
                >
                  {/* <LinkedInFullIcon height={35} /> */}
                </a>
              </div>

              {Object.entries(footerNav).map(([title, items]) => {
                return (
                  <div key={title}>
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {title}
                    </h2>
                    <ul className="mt-4 space-y-2">
                      {items.map((item) => (
                        <li key={item.title}>
                          <Link href={item.href}>
                            <span className="transition-all duration-150 hover:text-indigo-800 hover:underline dark:text-gray-300 dark:hover:text-white">
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}             
            </div>

            <div
              id="footer-copyright"
              className="mt-2 border-t border-slate-200 py-4 dark:border-slate-600"
            >
              <p className="text-center text-sm dark:text-gray-300">
                Copyright © 2022{" "}
                <a
                  href="https://github.com/thasocheat/react-blog"
                  className="font-semibold hover:text-indigo-800 hover:underline dark:hover:text-white"
                >
                  បង្កើតដោយ ៖ ថា សុជាតិ / Tha Socheat / 
                </a>
              </p>
            </div>
          </div>
        </footer>
    );
}

// function LinkedInFullIcon(props: React.SVGProps<SVGSVGElement>) {
//     const { height, width, ...otherProps } = props;
//     return (
//       <svg viewBox="0 0 270 65" height={height} width={width} {...otherProps}>
//         <path
//           fill="#0a66c2"
//           d="M263.744 61.1094a1.2 1.2 0 001.21-1.269c0-.9-.543-1.33-1.657-1.33h-1.8v4.712h.677v-2.054h.832l.019.025 1.291 2.029h.724l-1.389-2.1zm-.783-.472h-.785v-1.593h.995c.514 0 1.1.084 1.1.757 0 .774-.593.836-1.314.836M0 9.5874h9.993v36.4h18.5v9.222H0zm32.911 14.689h9.6v30.916h-9.6zm4.8-15.37a5.569 5.569 0 11-5.57 5.569 5.569 5.569 0 015.57-5.569m44.958.674h9.6v27.265l10.88-12.583h11.77l-12.6 14.313 12.335 16.63h-12.066l-10.191-15.282h-.126v15.28h-9.6zm-34.835 14.699h9.219v4.225h.131a10.085 10.085 0 019.09-4.994c9.735 0 11.527 6.405 11.527 14.726v16.954h-9.6v-15.031c0-3.588-.066-8.2-5-8.2-4.99 0-5.76 3.907-5.76 7.939v15.288h-9.6z"
//         />
//         <path
//           fill="#0a66c2"
//           d="M135.136 36.1384a5.756 5.756 0 00-5.894-5.89 6.406 6.406 0 00-6.784 5.89zm8.132 13.7a16.909 16.909 0 01-13.128 6.151c-9.6 0-17.286-6.408-17.286-16.331 0-9.923 7.685-16.328 17.286-16.328 8.973 0 14.6 6.4 14.6 16.328v3.01h-22.282a7.171 7.171 0 007.235 6.019 8.193 8.193 0 006.851-3.778zm21.482-18.089c-4.8 0-7.68 3.205-7.68 7.875s2.879 7.878 7.68 7.878 7.687-3.2 7.687-7.878-2.881-7.875-7.687-7.875m16.525 23.437h-8.838v-4.1h-.131a12.071 12.071 0 01-9.544 4.868c-9.224 0-15.3-6.657-15.3-16.071 0-8.646 5.377-16.585 14.216-16.585 3.973 0 7.684 1.087 9.861 4.1h.126V9.5774h9.609zm64.809.018h-9.6v-15.034c0-3.585-.064-8.2-4.993-8.2-5 0-5.765 3.906-5.765 7.939v15.294h-9.6v-30.916h9.216v4.225h.129a10.1 10.1 0 019.093-4.994c9.73 0 11.524 6.4 11.524 14.726zm-40.79-35.143a5.571 5.571 0 115.57-5.572 5.571 5.571 0 01-5.57 5.572m4.8 35.143h-9.61v-30.917h9.61zm40.776-55.2h-55.21a4.728 4.728 0 00-4.781 4.67v55.439a4.731 4.731 0 004.781 4.675h55.21a4.741 4.741 0 004.8-4.675V4.6704a4.738 4.738 0 00-4.8-4.67m12.173 56.411a4.418 4.418 0 10.085 0h-.085m0 8.33a3.874 3.874 0 113.809-3.938v.065a3.791 3.791 0 01-3.708 3.871h-.1"
//         />
//       </svg>
//     );
//   }
  
//   function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
//     const { height, width, ...otherProps } = props;
  
//     return (
//       <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
//         <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
//       </svg>
//     );
//   }
//   function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
//     const { height, width, ...otherProps } = props;
  
//     return (
//       <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
//         <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
//         <circle cx="11.994" cy="11.979" r="3.003"></circle>
//       </svg>
//     );
//   }
//   function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
//     const { height, width, ...otherProps } = props;
  
//     return (
//       <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
//         <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
//       </svg>
//     );
//   }
//   function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
//     const { height, width, ...otherProps } = props;
  
//     return (
//       <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
//         <circle cx="4.983" cy="5.009" r="2.188"></circle>
//         <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
//       </svg>
//     );
//   }
//   function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
//     const { height, width, ...otherProps } = props;
  
//     return (
//       <svg viewBox="0 0 24 24" height={height} width={width} {...otherProps}>
//         <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
//       </svg>
//     );
//   }
