document.addEventListener("DOMContentLoaded", () => {
    const pdfViewer = document.getElementById("pdfViewer");
    const nextButton = document.querySelector(".next-button");

    // Set the path to the PDF file
    const pdfPath = "siri-guru-granth-sahib.pdf"; // Replace with your actual PDF path

    // Update the iframe source to the PDF path
    pdfViewer.src = pdfPath;

    // Prevent downloading of the PDF by adding a sandbox attribute
    pdfViewer.setAttribute("sandbox", "allow-scripts allow-same-origin");

    // Add event listener to the Next button
    nextButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = "next2.html"; // Redirect to next2.html
    });
});
