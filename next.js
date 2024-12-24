document.addEventListener("DOMContentLoaded", () => {
    const audioContainer = document.querySelector(".audio-container");
    const nextButton = document.getElementById("nextButton");
  
    const audioTracks = [
        { title: "Tav Prasad Savaiye(ਸ੍ਰਾਵਗ ਸੁੱਧ)<br>12 to 13 (Dasam Granth Sahib ji)", file: "Tav Prasad Savaiye.mp3" },
        { title: "33 Savaiye<br>712 to 716 (Dasam Granth Sahib ji)", file: "33_Savaiye.mp3" },
        { title: "Ardas Buda Dal", file: "Ardaas_Buda_Dal.mp3" },
        { title: "Brahm Kavach", file: "Brahm_Kavach.mp3" },
        { title: "Chandi Di Vaar<br>119 to 127 (Dasam Granth)", file: "Chandi_Di_Vaar.mp3" },
        { title: "Rehraas Sahib Buda Dal", file: "Rehraas_Sahib_Budha_Dal.mp3" },
        { title: "Salok Dumalle Da", file: "Salok Dumalle Da.mp3" },
        { title: "Shastar Naam Mala", file: "Shastar Naam Mala.mp3" },
    ];
  
    audioContainer.innerHTML = audioTracks.map(track => `
        <div class="audio-item">
            <h2>${track.title}</h2>
            <audio controls>
                <source src="music/${track.file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        </div>
    `).join('');
  
    // Show the Next button after the last audio item
    nextButton.style.display = 'block';
  
    // Add event listener to the Next button
    nextButton.addEventListener("click", () => {
        window.location.href = "next1.html"; // Change to the name of your next HTML file
    });
  });
