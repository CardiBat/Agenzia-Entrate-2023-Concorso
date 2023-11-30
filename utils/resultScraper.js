const fs = require('fs');
const PDFParser = require('pdf2json')

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError));
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFile("../references/result.json", JSON.stringify(pdfData), (err) => {
        if (err) {
            console.error("Error file JSON:", err);
        } else {
            console.log("JSON saved.");
        }
    });
});

pdfParser.loadPDF("../references/3970_trib_esiti_prova_scritta.pdf");
