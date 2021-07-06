import React, {useState} from 'react';
import { PDFDocument } from 'pdf-lib';
import FileSaver from 'file-saver';


const SavePDF  = (props) => {

    const fillForm = async () => {
        // let fileReader = new FileReader();
        const url = props.pdf;
        const formPdfBytes = await fetch(url,
        {headers:{'Content-Type':'application/pdf'}})
            .then(res => {
                console.log(res.headers)
                return (res.arrayBuffer())})
        // fileReader.onload = function(e) {
        //     // The file's text will be printed here
        //     console.log(e.target.result)
        //   };
        
        const pdfDoc = await PDFDocument.load(formPdfBytes);

        const form = pdfDoc.getForm();
        console.log(form.getFields().map(f => f.getName()));
        Object.keys(props.timeCard).forEach(key => {
            console.log(`key:${key}, value:${props.timeCard[key]}`)
            form.getTextField(key).setText(props.timeCard[key])
        });
        
        Object.keys(props.daysOBJ).forEach((key, value) => {
            console.log(`key:${key}, value:${props.daysOBJ[key]}`);
            if (props.daysOBJ[key]) { form.getTextField(key).setText(props.daysOBJ[key])};
        });

        const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });
        props.setUpdatedPDF(pdfBytes);  
        FileSaver.saveAs(pdfBytes, "pdf-lib_form_creation_example.pdf", "application/pdf");
    }

    return (<div>
                <button onClick={() => {fillForm()}}>Fill PDF</button>
            </div>);
}

export default SavePDF;