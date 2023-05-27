document.getElementById("resumeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var Name = document.getElementById("Name").value;
    var StraßeHausnummer = document.getElementById("StraßeHausnummer").value;
    var PostleitzahlOrt = document.getElementById("PostleitzahlOrt").value;
    var Telefon = document.getElementById("Telefon").value;
    var Email = document.getElementById("Email").value;
    var Geburtsdatumort = document.getElementById("Geburtsdatumort").value;
    var DateStartPraktikum = document.getElementById("DateStartPraktikum").value;
    var DateEndPraktikum = document.getElementById("DateEndPraktikum").value;
    var Praktikum = document.getElementById("Praktikum").value;
    var DateStartPraktikum2 = document.getElementById("DateStartPraktikum2").value;
    var DateEndPraktikum2 = document.getElementById("DateEndPraktikum2").value;
    var Praktikum2 = document.getElementById("Praktikum2").value;
    var DatumZukunftstag = document.getElementById("DatumZukunftstag").value;
    var Zukunftstag = document.getElementById("Zukunftstag").value;
    var DatumZukunftstag2 = document.getElementById("DatumZukunftstag2").value;
    var Zukunftstag2 = document.getElementById("Zukunftstag2").value;
    var Schulabschluss = document.getElementById("Schulabschluss").value;
    var DateStartExtra = document.getElementById("DateStartExtra").value;
    var DateEndExtra = document.getElementById("DateEndExtra").value;
    var ExtraSchool = document.getElementById("ExtraSchool").value;
    var DateStartHP = document.getElementById("DateStartHP").value;
    var DateEndHP = document.getElementById("DateEndHP").value;
    var HP = document.getElementById("HP").value;
    var Grundschule = document.getElementById("Grundschule").value;
    var Computerkenntnisse = document.getElementById("Computerkenntnisse").value;
    var Sprachkenntnisse = document.getElementById("Sprachkenntnisse").value;
    var PS = document.getElementById("PS").value;
    var Hobbys = document.getElementById("Hobbys").value;
    var OD = document.getElementById("OD").value;

    var imageURL = document.getElementById('CvPhoto').value;
    var fileName = '';
    var fileType = '';
    
    if (imageURL) {
      fileName = imageURL.substring(imageURL.lastIndexOf('/') + 1);
      fileType = fileName.substring(fileName.lastIndexOf('.') + 1);
    }
    
    // Check if imageURL exists
    if (!imageURL) {
      fileName = 'https://gitdeu.github.io/cv/image.png';
      fileType = 'image/png';
    }

// Create the resume content
var resumeContent = '<!DOCTYPE html><html lang="de"><head>';
resumeContent += '<meta name=Generator content="Microsoft Word 15 (filtered)">';
resumeContent += '<meta http-equiv=Content-Type content="text/html; charset=utf-8">';
resumeContent += '<meta name="viewport" content="width=device-width, initial-scale=0">';
resumeContent += '<link rel="stylesheet" href="https://gitdeu.github.io/cv/style.css">';
resumeContent += '<body lang=EN-US style="word-wrap:break-word">';
resumeContent += '<div class=WordSection1>';
resumeContent += '<style>#CvPhotocss img { width: 121px; height: 154px; }</style>';
resumeContent += '<h1><span id="CvPhotocss">';
if (imageURL) {
  resumeContent += '<img src="' + imageURL + '" alt="' + fileName + '" type="' + fileType + '">';
} else {
  resumeContent += '<img src="' + fileName + '" alt="' + fileName + '" type="' + fileType + '">';
}
resumeContent += '</span><span>Lebenslauf</span></h1>';
resumeContent += '<p class=MsoNormal><b><span lang=DE id="space2">&nbsp;</span></b></p>';
resumeContent += '<h2><span lang=DE>Persönliche Daten</span></h2>';
resumeContent += '<p class=MsoNormal><b><span lang=DE class="styleAll">&nbsp;</span></b></p>';
resumeContent += '<p class="MsoNormal"><span lang="de" class="styleAll">Name                                     </span><span lang="de" class="styleAll">' + Name + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Anschrift                                 </span><span lang="DE" class="styleAll">' + StraßeHausnummer + '</span><span lang="DE" class="styleAll">, </span><span lang="DE" class="styleAll">' + PostleitzahlOrt + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Telefon                                   </span><span lang="DE" class="styleAll">' + Telefon + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">E-Mail                                     </span><span lang="DE" class="styleAll">' + Email + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Geburtsdatum, -ort                 </span><span lang="DE" class="styleAll">' + Geburtsdatumort + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<h2><span lang="DE">Praktische Erfahrung</span></h2>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<pre><p class="MsoNormal"><span lang="DE" class="styleAll">' + DateStartPraktikum + ' - ' + DateEndPraktikum + '      ' + Praktikum + '</span></p></pre>';
if (DateStartPraktikum2 && DateEndPraktikum2 && Praktikum2) {
resumeContent += '<pre><p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p><p class="MsoNormal"><span lang="DE" class="styleAll">' + DateStartPraktikum2 + ' - ' + DateEndPraktikum2 + '      ' + Praktikum2 + '</span></p></pre>';
}
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<pre><p class="MsoNormal"><span lang="DE" class="styleAll">' + DatumZukunftstag + '                            ' + Zukunftstag + '</span></p></pre>';
if (DatumZukunftstag2 && Zukunftstag2) {
resumeContent += '<pre><p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p><p class="MsoNormal"><span lang="DE" class="styleAll">' + DatumZukunftstag2 + '                            ' + Zukunftstag2 + '</span></p></pre>';
}
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<h2><span lang="DE">Schulbildung</span></h2>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Schulabschluss:                    </span><span lang="DE" class="styleAll"><a name=Text27></a>' + Schulabschluss + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
if (DateStartExtra && DateEndExtra && ExtraSchool) {
resumeContent += '<pre><p class="MsoNormal"><span lang="DE" class="styleAll"><a name=Text21></a>' + DateStartExtra + ' - ' + DateEndExtra + '       ' + ExtraSchool + '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>'; '</span></p></pre>';
}


resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">' + DateStartHP;
if (DateEndHP) {
resumeContent += ' - ' + DateEndHP;
} else {
resumeContent += '                     ';
}
resumeContent += '       ' + HP + '</span></p>';




resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll"><a name=Text22></a>Grundschule:                         </span><span lang="DE" class="styleAll"></span><span lang="DE" class="styleAll"><a name=Text32></a>' + Grundschule + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<h2><span lang="DE">Persönliche Fähigkeiten und Kompetenzen</span></h2>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Computerkenntnisse:              </span><span lang="DE" class="styleAll"><a name="Text38"></a>' + Computerkenntnisse + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Sprachkenntnisse:                  </span><span lang="DE" class="styleAll">' + Sprachkenntnisse + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Persönliche Stärken:               </span><span lang="DE" class="styleAll">' + PS + '</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll">Hobbys:                                   </span><span lang="DE" class="styleAll"><a name=Text31></a>' + Hobbys + '</span></p>';
resumeContent += '<p class="MsoNormal"><a name=Text13><span lang=DE style="font-size:11.0pt; font-family:Arial,sans-serif">&nbsp;</span></a></p>';
resumeContent += '<p class="MsoNormal"><span lang=DE class="styleAll">&nbsp;</span></p>';
resumeContent += '<p class="MsoNormal"><span lang="DE" class="styleAll"> ' + OD + ' </span></p>';
resumeContent += '</div>';
resumeContent += '</body></html>';



    // Create a new Blob with the resume content
    var blob = new Blob([resumeContent], {type: "text/html"});

    // Create a temporary link element
    var downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "Lebenslauf.html";

    // Programmatically click the link to trigger the download
    downloadLink.click();
  });

  window.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('CvPhoto');
    input.addEventListener('input', previewImage);
  });
  
  function previewImage() {
    var input = document.getElementById('CvPhoto');
    var imageURL = input.value;
  
    var image = document.getElementById('preview');
    if (imageURL) {
      image.src = imageURL;
      image.style.display = 'block';
    } else {
      image.src = 'https://gitdeu.github.io/cv/image.png';
      image.style.display = 'block';
    }
  }
  
  function generateImageUrl() {
    var input = document.getElementById("imageFile");
    var file = input.files[0];
  
    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var imageUrl = e.target.result;
            document.getElementById("CvPhoto").value = imageUrl;
            document.getElementById("preview").src = imageUrl;
            document.getElementById("preview").classList.remove("hidden");
        }
        reader.readAsDataURL(file);
    }
  }
  
  var input = document.getElementById("imageFile");
  
  input.addEventListener("change", function() {
    generateImageUrl();
  });
