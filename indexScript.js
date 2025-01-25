// Get DOM elements
const listPropertyBtn = document.getElementById("postPropButton");
const propertyFormContainer = document.getElementById("propertyFormContainer");
const closeFormBtn = document.getElementById("closeFormBtn");
const propertyListingForm = document.getElementById("propertyListingForm");
const searchButton = document.getElementById("initialSearch");
const burgerMenu = document.querySelector(".burgerMenu");
const dropdownMenu = document.querySelector(".dropdownMenu");
const closeDropdownMenu = document.querySelector(".closeDropdown");

// Show form when 'List Your Property' button is clicked
listPropertyBtn.addEventListener("click", function () {
  propertyFormContainer.style.display = "block";
  listPropertyBtn.style.display = "none";
});

// Close form when 'Close Form' button is clicked
closeFormBtn.addEventListener("click", function () {
  propertyFormContainer.style.display = "none";
  listPropertyBtn.style.display = "block";
  propertyListingForm.reset(); // Reset form fields
});

// Form submission validation
propertyListingForm.addEventListener("submit", function (event) {
  const photos = document.getElementById("photos");

  // Validate photo count
  if (photos.files.length > 5) {
    event.preventDefault();
    alert("You can upload a maximum of 5 photos.");
    return;
  }

  // Validate photo sizes
  for (let file of photos.files) {
    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      event.preventDefault();
      alert("Each photo must be less than 10MB.");
      return;
    }
  }
});

document.querySelector(".searchButton").addEventListener("click", function () {
  const searchText = document.querySelector(".searchText").value;
  const propertyType = document.querySelector(".propertyType").value;

  document.querySelector(".searchText").value = "";

  document.querySelector(".propertyType").selectedIndex = 0;

  console.log("Searching for:", {
    term: searchText,
    type: propertyType,
  });
});

burgerMenu.addEventListener("click", function () {
  burgerMenu.style.display = "none";
  dropdownMenu.style.display = "flex";
});

closeDropdownMenu.addEventListener("click", function () {
  burgerMenu.style.display = "flex";
  dropdownMenu.style.display = "none";
});
