const comSectionTem = document.createElement("template");
comSectionTem.innerHTML = `
    <div class="px-4 w-full absolute right-1/2 top-1 translate-x-1/2 mx-auto">
      <div class="bg-white border border-1 shadow-sm flex items-center justify-center gap-1 px-2 w-full rounded py-2">
        <div data-icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-package">
            <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
            <path
              d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
            </path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <span class="text-lg text-black" data-title>Components</span>
      </div>
    </div>
    <!-- components -->
    <div data-components class="border border-1 border-dashed border-gray-400 h-full rounded pt-10 pb-3 px-4">

    </div>
`

const headingComTem = document.createElement("template");
headingComTem.innerHTML = `
  <div id="heading-component" class="border border-1 border-gray-300 rounded relative p-3 mt-5">
    <h6 class="Heading text-xs bg-gray-200 -top-3 left-2 absolute px-2 rounded-md py-0.5">Heading</h6>
    <button id="close-heading" class="close bg-white rounded-full absolute px-2 -top-2.5 -right-2">
      <span class="text-red-600 font-bold text-sm">X</span>
    </button>
    <input id="heading-input"
      class="bg-white rounded shadow-sm border border-1 w-full px-2.5 mt-4 placeholder:text-gray-400 placeholder:text-sm py-1.5 text-sm outline-none"
      placeholder="Dashboard" />
    <div class="flex justify-between flex-wrap">

      <div id="align-buttons" class="flex items-center mt-2 rounded-md shadow-sm overflow-hidden">
        <button data-value="start"
          class="bg-white align-btn border-1 hover:bg-blue-200 border text-xs flex items-center gap-1 font-medium px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-align-left">
            <line x1="17" y1="10" x2="3" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="17" y1="18" x2="3" y2="18"></line>
          </svg>
          <span>Left</span>
        </button>
        <button data-value="center"
          class="bg-white align-btn border-1 hover:bg-blue-200 border text-xs flex items-center gap-1 font-medium px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-align-center">
            <line x1="18" y1="10" x2="6" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="18" y1="18" x2="6" y2="18"></line>
          </svg>
          <span>Center</span>
        </button>
        <button data-value="end"
          class="bg-white align-btn border-1 hover:bg-blue-200 border text-xs flex items-center gap-1 font-medium px-2 py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-align-right">
            <line x1="21" y1="10" x2="7" y2="10"></line>
            <line x1="21" y1="6" x2="3" y2="6"></line>
            <line x1="21" y1="14" x2="3" y2="14"></line>
            <line x1="21" y1="18" x2="7" y2="18"></line>
          </svg>
          <span>Right</span>
        </button>
      </div>
      <div id="color-buttons" class="flex items-center  mt-2 rounded-md shadow-sm overflow-hidden">
        <button data-value="rgb(59 130 246)"
          class="bg-white border-1 border text-xs flex items-center gap-1 font-medium px-2 py-1 hover:bg-blue-500 text-blue-500 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-circle">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span>Blue</span>
        </button>
        <button data-value="black"
          class="bg-white border-1 border text-xs flex items-center gap-1 font-medium px-2 py-1 hover:bg-gray-900 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-circle">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span>Black</span>
        </button>
        <button data-value="rgb(34 197 94)"
          class="bg-white border-1 border text-xs flex items-center gap-1 font-medium px-2 py-1 hover:bg-green-500 text-green-500 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-circle">
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span>Green</span>
        </button>
      </div>
    </div>
  </div>
`

const imageComTem = document.createElement("template");
imageComTem.innerHTML = `
<div id="image-component" class="border border-1 border-gray-300 rounded relative p-3 mt-5">
  <h6 class="Heading text-xs bg-gray-200 -top-3 left-2 absolute px-2 rounded-md py-0.5">Poster Image</h6>
  <button id="close-image" class="close bg-white rounded-full absolute px-2 -top-2.5 -right-2">
    <span class="text-red-600 font-bold text-sm">X</span>
  </button>
  <div id="dragAndDropContainer"
    class="w-full h-48 bg-white cursor-pointer border border-1 border-gray-300 border-dashed mt-4 flex items-center justify-center rounded-lg overflow-hidden relative">
    <div class="flex flex-col items-center text-center text-gray-500 text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="feather feather-upload-cloud">
        <polyline points="16 16 12 12 8 16"></polyline>
        <line x1="12" y1="12" x2="12" y2="21"></line>
        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
        <polyline points="16 16 12 12 8 16"></polyline>
      </svg>
      <p class="m-0 mt-2">
        <span class="font-bold">Click to upload</span> or drag and drop <br> SVG, PNG, JPG or GIF (MAX.
        800x400px)
      </p>
    </div>
    <input id="dragOrClick" type="file" name="image" class="absolute h-full w-full opacity-0"
      accept=".png,.jpg,.jpeg,.gif,.svg">
  </div>
</div>
`

const descriptionComTem = document.createElement("template");
descriptionComTem.innerHTML = `
<div id="description-component" class="border border-1 border-gray-300 rounded relative p-3 mt-5">
  <h6 class="Heading text-xs bg-gray-200 -top-3 left-2 absolute px-2 rounded-md py-0.5">Description</h6>
  <button id="close-description" class="close bg-white rounded-full absolute px-2 -top-2.5 -right-2">
    <span class="text-red-600 font-bold text-sm">X</span>
  </button>
  <div class="relative mt-4">
    <textarea id="description-input" rows="4" placeholder="Write your thoughts here..."
      class="w-full rounded-lg bg-white border border-1 border-gray-300 outline-none flex items-center justify-center p-2 placeholder:text-gray-400 placeholder:text-sm text-sm"></textarea>
    <div id="typing-icon" class="hidden absolute bg-cyan-800 rounded-full p-1 flex items-center justify-center bottom-3 right-3">
      <svg id="loading-icon" class="animate-spin h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
      </svg>
      <svg id="stopped-icon" viewBox="0 0 24 24" version="1.1" fill="currentColor" transform="matrix(-1, 0, 0, -1, 0, 0)rotate(0)" class="text-white w-3 h-3 hidden"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="SVGRepo_iconCarrier"><title>back_line</title><g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Arrow" transform="translate(-240.000000, 0.000000)"><g id="back_line" transform="translate(240.000000, 0.000000)"><path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"></path><path d="M3.07615,5.61732 C3.23093,5.24364 3.59557,5 4.00003,5 L13.9999996,5 C17.866,5 20.9999996,8.13401 20.9999996,12 C20.9999996,15.866 17.866,19 13.9999996,19 L5.00003,19 C4.44774,19 4.00003,18.5523 4.00003,18 C4.00003,17.4477 4.44774,17 5.00003,17 L13.9999996,17 C16.7615,17 18.9999996,14.7614 18.9999996,12 C18.9999996,9.23858 16.7615,7 13.9999996,7 L6.41424,7 L8.20714,8.79289 C8.59766,9.18342 8.59766,9.81658 8.20714,10.2071 C7.81661,10.5976 7.18345,10.5976 6.79292,10.2071 L3.29292,6.70711 C3.00692,6.42111 2.92137,5.99099 3.07615,5.61732 Z" id="路径" fill="currentColor"></path></g></g></g></g></svg>
    </div>
  </div>
</div>
`

const switchComTem = document.createElement("template");
switchComTem.innerHTML = `
  <div id="items-switcher" class="mt-3">
    <h2 class="font-bold text-lg text-center">Items</h2>
    <div class="item-switcher flex items-center gap-3 mt-1.5">
      <button id="show-heading"
        class="switch shadow-sm flex-1 rounded bg-yellow-200 hover:bg-yellow-400 py-1 border border-1 text-yellow-600 hover:text-black">
        <span class="text-sm font-medium">Heading</span>
      </button>
      <button id="show-image"
        class="switch shadow-sm flex-1 rounded bg-green-200 hover:bg-green-400 py-1 border border-1 text-green-600 hover:text-black">
        <span class="text-sm font-medium">Image</span>
      </button>
      <button id="show-description"
        class="switch shadow-sm flex-1 rounded bg-blue-200 hover:bg-blue-400 py-1 border border-1 text-blue-600 hover:text-black">
        <span class="text-sm font-medium">Description</span>
      </button>
    </div>
  </div>
`

const componentIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="feather feather-package">
  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
  <path
    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
  </path>
  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
  <line x1="12" y1="22.08" x2="12" y2="12"></line>
</svg>
`

const screenIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
  class="feather feather-monitor">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
`

const previewComTem = document.createElement('template');
previewComTem.innerHTML = `
<div id="preview-wrapper" class="px-4 py-4 mt-6 bg-gray-100">
  <h1 id="header-preview" class="text-5xl mb-8 hidden"></h1>
  <img id="image-preview" src="" class="w-full mb-5 h-auto hidden" alt="">
  <p id="description-preview" class="text-base hidden"></p>
</div>
<button class="absolute bottom-8 left-3" id="download-poster">Download</button>
`

class HeadingComponent extends HTMLElement {
  constructor() {
    super();
    const node = headingComTem.content.cloneNode(true);
    this.appendChild(node);
  }
}
customElements.define("c-heading-component", HeadingComponent);

class ImageComponent extends HTMLElement {
  constructor() {
    super();
    const node = imageComTem.content.cloneNode(true);
    this.appendChild(node);
  }
}
customElements.define("c-image-component", ImageComponent);

class DescriptionComponent extends HTMLElement {
  constructor() {
    super();
    const node = descriptionComTem.content.cloneNode(true);
    this.appendChild(node);
  }
}
customElements.define("c-description-component", DescriptionComponent);

class SwitchComponent extends HTMLElement {
  constructor() {
    super();
    const node = switchComTem.content.cloneNode(true);
    this.appendChild(node);
  }
}
customElements.define("c-switch-component", SwitchComponent);

class PreviewComponent extends HTMLElement {
  constructor() {
    super();
    const node = previewComTem.content.cloneNode(true);
    node.querySelector("#preview-wrapper").classList.add("mb-14")
    this.appendChild(node);
  }
}
customElements.define("c-preview-component", PreviewComponent);

class LeftSection extends HTMLElement {
  constructor() {
    super();
    const node = comSectionTem.content.cloneNode(true);
    node.querySelector("[data-icon]").innerHTML = componentIcon;
    node.querySelector("[data-title]").innerText = "Component";
    node.querySelector("[data-components]").innerHTML = `
      <c-heading-component></c-heading-component>
      <c-image-component></c-image-component>
      <c-description-component/></c-description-component>
      <c-switch-component></c-switch-component>
    `
    this.classList.add("relative", "w-full", "pb-3", "pt-5");
    this.appendChild(node);
  }
}
customElements.define("c-left-section", LeftSection);

class RightSection extends HTMLElement {
  constructor() {
    super();
    const node = comSectionTem.content.cloneNode(true);
    node.querySelector("[data-icon]").innerHTML = screenIcon;
    node.querySelector("[data-title]").innerText = "Preview";
    node.querySelector("[data-components]").innerHTML = `
      <c-preview-component/>
    `;
    this.classList.add("relative", "w-full", "pb-3", "pt-5");
    this.appendChild(node);
  }
}
customElements.define("c-right-section", RightSection);

class App extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <c-left-section></c-left-section>
      <c-right-section></c-right-section>
    `
    this.classList.add("flex", "gap-5", "bg-gray-100", "flex-wrap", "md:flex-nowrap", "px-7", "pb-4", "min-h-screen");

    this.defaultState = {
      heading: {
        text: "",
        color: "black",
        align: "start"
      },
      image: {
        URI: "",
        type: ""
      },
      description: ""
    };

    this.setAttribute("data-obj", JSON.stringify(this.defaultState));
  }

  static get observedAttributes() {
    return ["heading", "image", "description", "data-obj"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name == "heading") {
      this.toggleComponent(newValue, "c-heading-component", "#show-heading");
    }
    if (name == "image") {
      this.toggleComponent(newValue, "c-image-component", "#show-image");
    }
    if (name == "description") {
      this.toggleComponent(newValue, "c-description-component", "#show-description");
    }
    if (name == "data-obj") {
      this.render(JSON.parse(oldValue), JSON.parse(newValue));
    }
  }

  setState(obj) {
    const mainObj = JSON.parse(this.getAttribute("data-obj"));
    const modifiedObj = { ...mainObj, ...obj }
    this.setAttribute("data-obj", JSON.stringify(modifiedObj));
  }

  getState() {
    return JSON.parse(this.getAttribute("data-obj"));
  }

  //toggle input components
  toggleComponent(value, componentSelector, btnSelector) {
    const component = this.querySelector(componentSelector);
    const switchBtn = this.querySelector(btnSelector);

    if (value === "true") {
      component.classList.remove("hidden");
      switchBtn.classList.add("hidden");
    } else {
      component.classList.add("hidden");
      switchBtn.classList.remove("hidden");

      switch (componentSelector) {
        case "c-heading-component":
          this.setState({ heading: { ...this.getState().heading, text: "" } })
          break;
        case "c-image-component":
          this.setState({ image: { URI: "", type: "" } })
          break;
        case "c-description-component":
          this.setState({ description: "" })
          break;
      }
    }

    const switchContainer = this.querySelector("#items-switcher");
    const hiddenSwitch = switchContainer.querySelectorAll(".switch.hidden");
    if (hiddenSwitch.length >= 3) {
      switchContainer.classList.add('hidden');
    } else {
      switchContainer.classList.remove('hidden');
    }
  }

  connectedCallback() {
    document.querySelector("c-heading-component").classList.add('hidden');
    document.querySelector("c-image-component").classList.add('hidden');
    document.querySelector("c-description-component").classList.add('hidden');

    const app = this;
    //registering all events
    this.querySelector("#show-heading").addEventListener("click", () => {
      app.setAttribute("heading", true)
    });

    this.querySelector("#close-heading").addEventListener("click", () => {
      app.setAttribute("heading", false)
    });

    this.querySelector("#show-image").addEventListener("click", () => {
      app.setAttribute("image", true)
    });

    this.querySelector("#close-image").addEventListener("click", () => {
      app.setAttribute("image", false)
    });

    this.querySelector("#show-description").addEventListener("click", () => {
      app.setAttribute("description", true)
    });

    this.querySelector("#close-description").addEventListener("click", () => {
      app.setAttribute("description", false)
    });

    this.querySelector("#heading-input").addEventListener("input", (e) => {
      app.setState({ heading: { ...app.getState().heading, text: e.target.value } })
    });

    this.querySelector("#description-input").addEventListener("input", (e) => {
      app.setState({ description: e.target.value })
    });

    this.querySelector("#dragOrClick").addEventListener("change", (event) => {
      const fileTypeAcceptable = ["image/jpeg", "image/png", "image/gif", "image/jpg", "image/svg", "image/svg+xml"];
      const files = event.target.files;

      if (files && files[0]) {
        if (!fileTypeAcceptable.includes(files[0].type)) {
          alert(`File type not allowed. Allowed file types are png, jpeg, jpg, gif and svg!`);
          return;
        }

        const render = new FileReader();
        const maxWidth = 800;
        const maxHeight = 400;
        render.onload = (e) => {
          const img = new Image();
          img.src = e.target.result;
          img.onload = () => {
            const width = img.width;
            const height = img.height;

            if (width > maxWidth || height > maxHeight) {
              alert(`You are trying to upload image with size ${width}x${height}px. Max uploadable Image size is ${maxWidth}x${maxHeight}px!`)
            } else {
              app.setState({ image: { URI: URL.createObjectURL(files[0]), type: files[0].type } })
            }
          }
        }
        render.readAsDataURL(files[0]);
      }
    });
    this.querySelectorAll("#align-buttons button").forEach((el) => {
      el.addEventListener('click', (e) => {
        let value;
        if (!e.target.matches('button')) {
          const closestBtn = e.target.closest('button');
          value = closestBtn.getAttribute('data-value');
        } else {
          value = e.target.getAttribute('data-value')
        }
        app.setState({ heading: { ...app.getState().heading, align: value } })
      });
    });
    this.querySelectorAll("#color-buttons button").forEach((el) => {
      el.addEventListener('click', (e) => {
        let value;
        if (!e.target.matches('button')) {
          const closestBtn = e.target.closest('button');
          value = closestBtn.getAttribute('data-value');
        } else {
          value = e.target.getAttribute('data-value')
        }
        app.setState({ heading: { ...app.getState().heading, color: value } })
      });
    });

    this.querySelector("#download-poster").addEventListener("click", async () => {
      const contentToConvert = document.querySelector('#preview-wrapper');
      const data = app.getState();

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = contentToConvert.offsetWidth;
      canvas.height = contentToConvert.offsetHeight;

      const xmlString = new XMLSerializer().serializeToString(contentToConvert);
      const parser = new DOMParser();
      const doc = parser.parseFromString(xmlString, 'image/svg+xml');
      const foreignObject = doc.createElement('foreignObject');
      foreignObject.setAttribute('width', canvas.width + 15);
      foreignObject.setAttribute('height', canvas.height);
      foreignObject.appendChild(contentToConvert.cloneNode(true));
      doc.documentElement.appendChild(foreignObject);

      let imageData = ""
      if (data.image.URI) {
        imageData = await convertImageToBase64(data.image.URI, data.image.type, canvas.width);
      }
      const heading = data.heading.text ? `<h1 style="font-size:3rem;font-weight:400;margin-top:0;${data.image.URI || data.description ? 'margin-bottom:1.5rem;' : ''}line-height:1;color:${data.heading.color};text-align:${data.heading.align};">${data.heading.text}</h1>` : "";
      const image = data.image.URI ? `<img src="${imageData}" style="width:100%;height:auto;${data.description ? 'margin-bottom:1rem;' : ''}display:inline-block;" alt=""/>` : "";
      const paragraph = data.description ? `<p style="font-size:1rem;margin:0;">${data.description}</p>` : "";

      const svgData = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${contentToConvert.offsetWidth}" height="${contentToConvert.offsetHeight}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml" style="background:rgb(243 244 246);padding:1.5rem;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe U', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'">
            ${heading}
            ${image}
            ${paragraph}
          </div>
        </foreignObject>
      </svg>
      `

      const img = new Image();
      img.onload = function () {
        ctx.drawImage(img, 0, 0);
        const dataURL = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = 'content.png';
        link.click();
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
    });

    async function convertImageToBase64(imgUrl, type = "image/png", widthForSvg = 1000) {
      const promise = new Promise((res, rej) => {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.height = image.naturalHeight;
          canvas.width = image.naturalWidth;

          if (type == "image/svg" || type == "image/svg+xml") {
            canvas.width = (image.naturalWidth/image.naturalHeight) * widthForSvg;
            canvas.height = (image.naturalHeight/image.naturalWidth) * widthForSvg;
          }

          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL(type ? type : "image/png", 1);
          res(dataUrl);
        }
        image.src = imgUrl;
      });
      return promise;
    }
  }

  //fill the input data
  fillInputs(prevState, currentState) {
    if (prevState.heading.text !== currentState.heading.text) {
      this.querySelector("#heading-input").value = currentState.heading.text;
    }

    if (prevState.description !== currentState.description) {
      this.querySelector("#description-input").value = currentState.description;
    }
  }

  //render poster
  renderPoster(prevState, currentState) {
    const imagePreview = this.querySelector("#image-preview");
    const headerPreview = this.querySelector("#header-preview");
    const descriptionPreview = this.querySelector("#description-preview");

    if (prevState.image.URI !== currentState.image.URI) {
      if (currentState.image.URI !== "") {
        imagePreview.setAttribute("src", currentState.image.URI);
        imagePreview.classList.remove("hidden");
      } else {
        imagePreview.setAttribute("src", "");
        imagePreview.classList.add("hidden");
      }
    }

    if (prevState.heading.text !== currentState.heading.text) {
      if (currentState.heading.text !== "") {
        headerPreview.innerText = currentState.heading.text;
        headerPreview.classList.remove("hidden");
      } else {
        headerPreview.classList.add("hidden");
        headerPreview.innerText = "";
      }
    }

    if (prevState.heading.align !== currentState.heading.align) {
      headerPreview.style.textAlign = currentState.heading.align;
    }
    if (prevState.heading.color !== currentState.heading.color) {
      headerPreview.style.color = currentState.heading.color;
    }

    if (prevState.description !== currentState.description) {
      if (currentState.description !== "") {
        descriptionPreview.innerText = currentState.description;
        descriptionPreview.classList.remove("hidden");
      } else {
        descriptionPreview.classList.add("hidden");
        descriptionPreview.innerText = "";
      }
    }
  }

  //render the ui
  render(prevState, currentState) {
    this.fillInputs(prevState, currentState);
    this.renderPoster(prevState, currentState);
  }
}

customElements.define("c-app", App);

document.getElementById("app").innerHTML = '<c-app>'
