// popup.js
document.addEventListener("DOMContentLoaded", function () {
    const isOpen = true; // Control the popup visibility
  
    if (isOpen) {
      const popupContainer = document.getElementById("popupContainer");
      const formattedNumber = 'tel:+1 (888) 903-5346';
      const number = '+1 (888) 903-5346';
      const logoWidth = '130px';
      const text = 'Call to Pay Your Bill Now';
      const color = '#003057'; // Set the color of the popup header, footer, and phone number background
      const logoUrl = 'spectrum/img/logo2.png'; // Set your logo URL here
  
      const overlay = document.createElement("div");
      overlay.className = "overlay";
      overlay.onclick = () => window.location.href = formattedNumber;
  
      const popup = document.createElement("div");
      popup.className = "popup";
      popup.onclick = () => window.location.href = formattedNumber;
  
      const popupHeader = document.createElement("div");
      popupHeader.className = "popupHeader";
      popupHeader.style.background = color;
  
      const popupContent = document.createElement("div");
      popupContent.className = "popupContent";
  
      const logo = document.createElement("img");
      logo.src = logoUrl;
      logo.alt = "Logo";
      logo.className = "logo";
      logo.style.width = logoWidth;
  
      const heading = document.createElement("h2");
      heading.className = "heading";
      heading.textContent = text;
  
      const phoneNumber = document.createElement("p");
      phoneNumber.className = "phoneNumber";
      phoneNumber.textContent = number;
      phoneNumber.style.background = color;
  
      popupContent.appendChild(logo);
      popupContent.appendChild(heading);
      popupContent.appendChild(phoneNumber);
  
      const popupFooter = document.createElement("div");
      popupFooter.className = "popupFooter";
      popupFooter.style.background = color;
      popupFooter.textContent = `Call Now ${number}`;
  
      popup.appendChild(popupHeader);
      popup.appendChild(popupContent);
      popup.appendChild(popupFooter);
      overlay.appendChild(popup);
  
      popupContainer.appendChild(overlay);
    }
  });
  