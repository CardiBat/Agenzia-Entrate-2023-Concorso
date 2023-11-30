const fs = require('fs');
const path = require('path')

// PATH
const jsonFilePath = path.join(__dirname, '..', 'references', 'result.json');

// Reads the JSON file
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error: ", err);
        return;
    }

    // Analizing...
    const jsonData = JSON.parse(data);
    const numbers = [];

    jsonData.Pages.forEach(page => {
        page.Texts.forEach(text => {
            text.R.forEach(r => {
                if (/%2C/.test(r.T)) { // Only decimals

                    const decoded = decodeURIComponent(r.T).replace(',', '.'); // converting

                    // insert in the section '>23' your score! 3.970 it's not considered because it's the number of candidates (at the top of the page)
                    if(decoded>23.04 && decoded!=3.970){
                        numbers.push(decoded);
                    }

                }
            });
        });
    });

    // Printing results
    console.log('TOTAL VALUES:')
    console.log('----------------------------------------------------------------------------')
    console.log(numbers);
    console.log('----------------------------------------------------------------------------')
    console.log('Candidates with score > 23.04: **'+numbers.length+'**')
    
});
