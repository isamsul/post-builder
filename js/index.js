//poster object
const posterObject = {
  heading: {
    text: "",
    color: "black",
    align: "start"
  },
  imageURI: "",
  description: ""
}

// selectors

const dragAndDropContainer = document.getElementById("dragAndDropContainer");
const dragOrClick = document.getElementById("dragOrClick");
const headerInput = document.getElementById("heading-input");
const descriptionInput = document.getElementById("description-input");
const downloadPoster = document.getElementById("download-poster");
const alignButtons = document.querySelectorAll("#align-buttons button");
const colorButtons = document.querySelectorAll("#color-buttons button");
const typingIcon = document.getElementById("typing-icon");
const loadingIcon = document.getElementById("loading-icon");
const stoppedIcon = document.getElementById("stopped-icon");

const itemSwitcher = document.getElementById("items-switcher");
const headingSwitcher = document.getElementById("show-heading");
const imageSwitcher = document.getElementById("show-image");
const descriptionSwitcher = document.getElementById("show-description");
const headingClose = document.getElementById("close-heading");
const imageClose = document.getElementById("close-image");
const descriptionClose = document.getElementById("close-description");

const headingComponent = document.getElementById("heading-component");
const imageComponent = document.getElementById("image-component");
const descriptionComponent = document.getElementById("description-component");

const headerPreview = document.getElementById("header-preview");
const imagePreview = document.getElementById("image-preview");
const descriptionPreview = document.getElementById("description-preview");

// resets
headerInput.value = "";
descriptionInput.value = "";

// render poster

const renderPoster = () => {
  if (posterObject.imageURI !== null && posterObject.imageURI !== "") {
    const file = URL.createObjectURL(posterObject.imageURI);
    imagePreview.setAttribute("src", file);
  } else {
    imagePreview.setAttribute("src", "");
  }

  if (posterObject.heading.text !== null && posterObject.heading.text !== "") {
    headerPreview.innerText = posterObject.heading.text;
    headerPreview.style.textAlign = posterObject.heading.align;
    headerPreview.style.color = posterObject.heading.color;
    headerPreview.classList.remove("hidden");
  } else {
    headerPreview.classList.add("hidden");
    headerPreview.innerText = "";
  }

  if (posterObject.description !== null && posterObject.description !== "") {
    descriptionPreview.innerText = posterObject.description;
    descriptionPreview.classList.remove("hidden");
  } else {
    descriptionPreview.classList.add("hidden");
    descriptionPreview.innerText = "";
  }
}

//event handlers

const handleDragAndDrop = (event) => {
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
          posterObject.imageURI = files[0];
          renderPoster();
        }
      }
    }
    render.readAsDataURL(files[0]);
  }
}

const handleHeaderInput = (e) => {
  posterObject.heading.text = e.target.value;
  renderPoster();
}

let typingTimeout;
const handleDescriptionInput = (e) => {
  posterObject.description = e.target.value;
  if (e.target.value.length > 0) {
    typingIcon.classList.remove('hidden');
    loadingIcon.classList.remove('hidden');
    stoppedIcon.classList.add('hidden')
  } else {
    typingIcon.classList.add('hidden');
  }
  renderPoster();
  clearTimeout(typingTimeout);
  typingTimeout = setTimeout(() => {
    loadingIcon.classList.add('hidden');
    stoppedIcon.classList.remove('hidden')
  }, 1000)
}

const handleDownloadPoster = () => {
  if (
    !posterObject.heading.text &&
    !posterObject.imageURI &&
    !posterObject.description
  ) return;
  
  const contentToConvert = document.getElementById('preview-wrapper');

  html2canvas(contentToConvert, { useCORS: true })
    .then(function (canvas) {
      const dataURI = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataURI;
      link.download = 'poster.png';
      link.click();
    })
    .catch(function (error) {
      console.error('Error converting to PNG:', error);
    });
}

const toggleSwitcherContainer = () => {
  const hiddenSwitch = itemSwitcher.querySelectorAll(".switch.hidden");
  if (hiddenSwitch.length >= 3) {
    itemSwitcher.classList.add('hidden');
  } else {
    itemSwitcher.classList.remove('hidden');
  }
}

const handleHeadingSwitcher = () => {
  headingComponent.classList.remove('hidden');
  headingSwitcher.classList.add('hidden');
  toggleSwitcherContainer();
}

const handleImageSwitcher = () => {
  imageComponent.classList.remove('hidden');
  imageSwitcher.classList.add('hidden');
  toggleSwitcherContainer();
}

const handleDescriptionSwitcher = () => {
  descriptionComponent.classList.remove('hidden');
  descriptionSwitcher.classList.add('hidden');
  toggleSwitcherContainer();
}

const handleHeadingClose = () => {
  headingComponent.classList.add('hidden');
  headingSwitcher.classList.remove('hidden');
  toggleSwitcherContainer();
  posterObject.heading.text = "";
  renderPoster();
}

const handleImageClose = () => {
  imageComponent.classList.add('hidden');
  imageSwitcher.classList.remove('hidden');
  toggleSwitcherContainer();
  posterObject.imageURI = "";
  renderPoster();
}

const handleDescriptionClose = () => {
  descriptionComponent.classList.add('hidden');
  descriptionSwitcher.classList.remove('hidden');
  toggleSwitcherContainer();
  posterObject.description = "";
  renderPoster();
}

const handleChangeHeadingAlign = (e) => {
  let value;
  if (!e.target.matches('button')) {
    const closestBtn = e.target.closest('button');
    value = closestBtn.getAttribute('data-value');
  } else {
    value = e.target.getAttribute('data-value')
  }
  posterObject.heading.align = value;
  renderPoster();
}
const handleChangeHeadingColor = (e) => {
  let value;
  if (!e.target.matches('button')) {
    const closestBtn = e.target.closest('button');
    value = closestBtn.getAttribute('data-value');
  } else {
    value = e.target.getAttribute('data-value')
  }
  posterObject.heading.color = value;
  renderPoster();
}

//events

dragOrClick.addEventListener('change', handleDragAndDrop);
headerInput.addEventListener('input', handleHeaderInput);
descriptionInput.addEventListener('input', handleDescriptionInput);
downloadPoster.addEventListener('click', handleDownloadPoster);
headingSwitcher.addEventListener('click', handleHeadingSwitcher);
imageSwitcher.addEventListener('click', handleImageSwitcher);
descriptionSwitcher.addEventListener('click', handleDescriptionSwitcher);
headingClose.addEventListener('click', handleHeadingClose);
imageClose.addEventListener('click', handleImageClose);
descriptionClose.addEventListener('click', handleDescriptionClose);

alignButtons.forEach((el) => {
  el.addEventListener('click', handleChangeHeadingAlign);
});
colorButtons.forEach((el) => {
  el.addEventListener('click', handleChangeHeadingColor);
});