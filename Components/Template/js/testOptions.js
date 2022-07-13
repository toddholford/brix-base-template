function testOptions(option) {

    const selectedOption = option;
    const inputIframeTabPane = document.getElementById("inputIframeTabPane");
    const inputIframe = document.getElementById("inputIframe");
    const textareaIframeTabPane = document.getElementById("textareaIframeTabPane");
    const textareaIframe = document.getElementById("textareaIframe");

    if (!inputIframeTabPane.classList.contains("active")) {
        textareaIframeTabPane.classList.remove("active");
        inputIframeTabPane.classList.add("active");
    }
    
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

    // Basic Basic None None
    if (topChoice1.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
        inputIframe.src = "../Form Fields/displays/Input/InputBasic.html";
    }
    // Required Basic None None
    else if (topChoice2.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
        inputIframe.src = "../Form Fields/displays/Input/InputRequired.html";
    }
    // Optional Basic None None
    else if (topChoice3.checked == true && typeChoice1.checked == true && innerChoice1.checked == true && bottomChoice1.checked == true) {
        inputIframe.src = "../Form Fields/displays/Input/InputOptional.html";
    }
    else{
        inputIframe.src = "";
    }

}

function testOptions2(option) {
    
    const selectedOption = option;
    const inputIframeTabPane = document.getElementById("inputIframeTabPane");
    const inputIframe = document.getElementById("inputIframe");
    const textareaIframeTabPane = document.getElementById("textareaIframeTabPane");
    const textareaIframe = document.getElementById("textareaIframe");

    if (!textareaIframeTabPane.classList.contains("active")) {
        inputIframeTabPane.classList.remove("active");
        textareaIframeTabPane.classList.add("active");
    }

    const topChoiceTextArea1 =  document.getElementById("btnradioTextArea1");
    const topChoiceTextArea2 =  document.getElementById("btnradioTextArea2");
    const topChoiceTextArea3 =  document.getElementById("btnradioTextArea3");
    const typeChoiceTextArea1 =  document.getElementById("btnradioTextArea4");
    const typeChoiceTextArea2 =  document.getElementById("btnradioTextArea5");
    const typeChoiceTextArea3 =  document.getElementById("btnradioTextArea6");
    const innerChoiceTextArea1 =  document.getElementById("btnradioTextArea7");
    const innerChoiceTextArea2 =  document.getElementById("btnradioTextArea8");
    const innerChoiceTextArea3 =  document.getElementById("btnradioTextArea9");
    const innerChoiceTextArea4 =  document.getElementById("btnradioTextArea10");
    const bottomChoiceTextArea1 =  document.getElementById("btnradioTextArea11");
    const bottomChoiceTextArea2 =  document.getElementById("btnradioTextArea12");

    // Basic Basic None None
    if (topChoiceTextArea1.checked == true && typeChoiceTextArea1.checked == true && innerChoiceTextArea1.checked == true && bottomChoiceTextArea1.checked == true) {
        textareaIframe.src = "../Form Fields/displays/TextArea/TextAreaBasic.html";
    }
    else{
        textareaIframe.src = "";
    }

}