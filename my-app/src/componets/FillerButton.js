import React from 'react';
import { PDFDocument } from 'pdf-lib';
import FileSaver from 'file-saver';

const fillForm = async () => {
    let fileReader = new FileReader();
    const formPath = 'fillable.pdf';
    const formPdfBytes = fileReader.readAsDataURL();
    fileReader.onload = function(e) {
        // The file's text will be printed here
        console.log(e.target.result)
      };
    const pdfDoc = await PDFDocument.load(formPdfBytes);

    const form = pdfDoc.getForm();
   
    const pdfBytes = await pdfDoc.save();

    FileSaver.saveAs(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");
}

const SavePDF  = () => {
    return (<button onclick={fillForm()}>Fill PDF</button>);
}

export default SavePDF;