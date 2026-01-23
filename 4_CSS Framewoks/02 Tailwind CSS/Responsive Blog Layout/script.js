const toggleButton = document.querySelector(
  ".fixed.top-0.left-0.p-4.cursor-pointer.z-50",
);
const sidebar = document.querySelector(
  ".fixed.top-0.left-0.h-full.w-64.bg-white.shadow-lg.overflow-y-auto.transform.-translate-x-full.transition-transform.duration-300.ease-in-out.z-50",
);
const readMoreLinks = document.querySelectorAll(".read-more");
const modal = document.querySelector(
  ".bg-gray-800.bg-opacity-75.flex.items-center.justify-center.z-50.hidden",
);
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const closeModalButton = document.getElementById("close-modal");
toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
  document.body.classList.toggle("blur");
});
readMoreLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const postTitle = link.dataset.title;
    modalTitle.textContent = postTitle;
    if (postTitle === "Responsive Web Design") {
      modalContent.innerHTML = `
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240117155347/responsive-web-design-copy.webp" alt="Responsive Web Design" class="w-full mb-4">
                        <p>Responsive Web Design refers to the
                           approach of designing and developing 
                           websites that can adapt and display 
                           correctly on various devices and screen
                           sizes. The goal is to create a seamless
                           and user-friendly experience regardless
                           of whether the user is accessing the 
                           website on a desktop, tablet, or 
                           mobile device.

                          </p>`;
    } else if (postTitle === "JavaScript Fundamentals") {
      modalContent.innerHTML = `
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230809133232/JavaScript-Complete-Guide-copy-2.webp" alt="JavaScript Fundamentals" class="w-full mb-4">
                        <p>JavaScript Fundamentals cover the 
                           foundational concepts and principles
                           of the JavaScript programming language.
                           JavaScript Fundamentals provide the 
                           necessary knowledge and skills to 
                           build interactive and dynamic web 
                           applications, enhance user experience,
                           and work with frameworks and libraries
                           built on top of JavaScript, such as 
                           React, Vue.js, Angular, and Node.js.
                       </p>
                    `;
    } else if (postTitle === "CSS Flexbox Tutorial") {
      modalContent.innerHTML = `
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240507112025/75s2.png" alt="CSS Flexbox Tutorial" class="w-full mb-4">
                        <p>A CSS Flexbox tutorial typically covers
                           the Flexbox layout model, which is 
                           designed to provide a more efficient
                           way to layout, align, and distribute
                           space among items in a container. 
                           Here's an outline of what a CSS 
                           Flexbox tutorial might include
                          </p>
                    `;
    } else if (postTitle === "HTML Basics") {
      modalContent.innerHTML = `
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230821163330/HTML-Complete-Guide---A-to-Z-HTML-Concepts-2-copy.webp" alt="HTML Basics" class="w-full mb-4">
                        <p>HTML (Hypertext Markup Language) is 
                           the standard markup language used to
                           create and structure web pages. 
                           Here's a basic outline of what 
                           an HTML basics tutorial might 
                           cover: Introduction to HTML:
                           What is HTML? Why HTML is 
                           important in web development.
                           Basic anatomy of an HTML element.
                           Block-level vs. inline elements.
                           Common HTML elements.
                          Semantic HTML elements.
                          HTML Attributes:
                          Understanding attributes. Global 
                          attributes that can be applied 
                          to any HTML element. HTML Forms:
                          Creating forms with <form> element.
                          Form input types. Form controls.
                          Creating tables with <table>, 
                          <tr>, <th>, <td> elements.
                          Table headers and data cells.
                          Table structure and styling.
                          HTML Links and Images:
                          Creating hyperlinks with 
                          <a> element.Linking to external 
                          URLs and internal pages. Inserting
                          images with <img> element. HTML Lists
                          Creating ordered lists (<ol>) and 
                          unordered lists (<ul>). List items 
                          (<li>) within lists.</p> `;
    } else if (postTitle === "CSS Grid Layout") {
      modalContent.innerHTML = `
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230713125158/Screenshot-2023-07-13-125103.png" alt="CSS Grid Layout" class="w-full mb-4">
                        <p> CSS Grid Layout is a versatile system
                            that enables web developers to create 
                            complex and responsive layouts with 
                            ease. It revolves around two main 
                            components: the grid container 
                            and grid items. The grid container,
                            designated with display: grid;, 
                            serves as the parent element, 
                            while grid items are the child 
                            elements within the grid container.
                           </p>
                    `;
    } else if (postTitle === "React Hooks") {
      modalContent.innerHTML = `
                        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20240220145751/react-hooksr-tutorial-copy.webp" alt="React Hooks" class="w-full mb-4">
                        <p>React Hooks are a feature introduced
                           in React 16.8 that allows you to use
                           state and other React features without
                           writing class components. They provide
                           a more concise and functional way of
                           managing component state and lifecycle
                           methods in functional components.
                          </p>
                    `;
    } else {
      modalContent.textContent = "Full details of " + postTitle + " go here.";
    }
    modal.classList.remove("hidden");
  });
});
closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
