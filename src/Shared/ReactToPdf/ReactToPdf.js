import React from 'react';
import { Button } from 'react-bootstrap';
import jsPDF from 'jspdf'



const ReactToPdf = () => {
    const pdfGenerate = () =>{
        const doc = new jsPDF('landscape', 'px', 'a4', 'false')
        doc.addPage()
        doc.text(120,410, 'Name')
        doc.save('a.pdf')
    }
    return (
        <div>
           <Button  onClick={pdfGenerate} >Download Pdf</Button>
        </div>
    );
};

export default ReactToPdf;