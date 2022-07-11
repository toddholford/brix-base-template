function testOptions(option) {
    
    const topChoice1 =  document.getElementById("btnradio1");
    const topChoice2 =  document.getElementById("btnradio2");
    const topChoice3 =  document.getElementById("btnradio3");
    const typeChoice1 =  document.getElementById("btnradio4");
    const typeChoice2 =  document.getElementById("btnradio5");
    const typeChoice3 =  document.getElementById("btnradio6");
    const innerChoice1 =  document.getElementById("btnradio7");
    const innerChoice2 =  document.getElementById("btnradio8");
    const innerChoice3 =  document.getElementById("btnradio9");
    const innerChoice4 =  document.getElementById("btnradio10");
    const bottomChoice1 =  document.getElementById("btnradio11");
    const bottomChoice2 =  document.getElementById("btnradio12");

    const selectedOption = option;
    const homeIFrame = document.getElementById("homeIframe");

    

    // Basic Basic None None
    if (topChoice1.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
        homeIFrame.src = "../Form Fields/displays/Inputs/InputBasic.html";
    }
    // Required Basic None None
    else if (topChoice2.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
        homeIFrame.src = "../Form Fields/displays/Inputs/InputRequired.html";
    }
    // Optional Basic None None
    else if (topChoice3.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
        homeIFrame.src = "../Form Fields/displays/Inputs/InputOptional.html";
    }
    else{
        homeIFrame.src = "";
    }

}