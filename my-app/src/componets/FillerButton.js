import React from 'react';
import { PDFDocument } from 'pdf-lib';
import FileSaver from 'file-saver';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


const SavePDF  = (props) => {

    const timekeys = ["MONIn", "TUEIn", "WEDIn", "THURIn", "FRIIn", "SATIn", "SUNIn", "MONOut", "TUEOut", "WEDOut", "THUROut", "FRIOut", "SATOut", "SUNOut", 
    "MONIn_2", "TUEIn_2", "WEDIn_2", "THURIn_2", "FRIIn_2", "SATIn_2", "SUNIn_2", "MONOut_2", "TUEOut_2", "WEDOut_2", "THUROut_2", "FRIOut_2", "SATOut_2", "SUNOut_2",
    "MONIn_3", "TUEIn_3", "WEDIn_3", "THURIn_3", "FRIIn_3", "SATIn_3", "SUNIn_3", "MONOut_3", "TUEOut_3", "WEDOut_3", "THUROut_3", "FRIOut_3", "SATOut_3", "SUNOut_3",
    ]

    const fillForm = async () => {
        const url = props.pdf;
        const formPdfBytes = await fetch(url,
        {headers:{'Content-Type':'application/pdf'}})
            .then(res => {
                console.log(res.headers)
                return (res.arrayBuffer())})
        
        const pdfDoc = await PDFDocument.load(formPdfBytes);

        const form = pdfDoc.getForm();
        console.log(form.getFields().map(f => f.getName()));
        Object.keys(props.timeCard).forEach(key => {
            console.log(`key:${key}, value:${props.timeCard[key]}`)
            form.getTextField(key).setText(props.timeCard[key])
        });
        
        Object.keys(props.daysOBJ).forEach((key, value) => {
            console.log(`key:${key}, value:${props.daysOBJ[key]}`);
            if (props.daysOBJ[key]) { 
                if (timekeys.includes(key)) {
                    console.log(`found key:${key}`)
                    const time24Hr = Number(props.daysOBJ[key].slice(0,2));
                    const timeMn = props.daysOBJ[key].slice(3,5);
                    if(time24Hr > 12) {
                        const time12Hr = time24Hr - 12;
                        form.getTextField(key).setText(`${time12Hr}:${timeMn}`);
                    }else {form.getTextField(key).setText(`${time24Hr}:${timeMn}`)};}
                else {form.getTextField(key).setText(props.daysOBJ[key])};
            }
        });

        const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true }); 
        FileSaver.saveAs(pdfBytes, `Time Card ${props.timeCard["Name"]} for ${props.timeCard["Pay Week Ending"]}`, "application/pdf");
    }

    return (<button label="Download PDF" icon={<PictureAsPdfIcon/>} onClick={() => {fillForm()}}>Download PDF</button>)
}

export default SavePDF;