// Change text and styles
document.getElementById("learn-btn").addEventListener("click", () => {
    const intro = document.getElementById("intro-text");
    intro.textContent = "Artificial Intelligence is the technology that enables machines to perform tasks that typically require human intelligence, such as learning, problem-solving, and decision-making.!";
    intro.style.color = "#007acc";
    intro.style.fontSize = "1.2rem";
  });
  
  // Add AI facts 
  const facts = [
    "AI can help reduce energy consumption.",
    "AI can create art.",
    "AI can be used for facial recognition.",
    "AI can be used to diagnose diseases.",
    "AI can be used for natural language processing."
  ];
  
  let factIndex = 0;
  
  document.getElementById("add-fact-btn").addEventListener("click", () => {
    if (factIndex < facts.length) {
      const li = document.createElement("li");
      li.textContent = facts[factIndex++];
      document.getElementById("facts-list").appendChild(li);
    }
  });
  
  document.getElementById("remove-fact-btn").addEventListener("click", () => {
    const list = document.getElementById("facts-list");
    if (list.lastChild) {
      list.removeChild(list.lastChild);
      factIndex--;
    }
  });
  
  // Display uploaded image
  document.getElementById("imageUpload").addEventListener("change", function () {
    const file = this.files[0];
    const imgContainer = document.getElementById("image-container");
    imgContainer.innerHTML = ""; // Clear previous image
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Uploaded Simulation Image";
        imgContainer.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
  