# Agenzia-Entrate-2023-Concorso
This little app analizes all results of 'Concorso Agenzia Entrate 2023 - Funzionari Tributari 3970' parsing all results in a variable descriminating by the score. With this, you can use 'Pigeon-hole-principle' knowing if you will probably be employed. 

## Example of 'Pigeon-hole-principle' application
If your score is 21 and there are about 20k people with a better score, you know that you will not be employed because total free seats are 3970.
Otherwise, if your score has only 1000 people over than you, you will SURELY be employed.

## Usage

Change the '23' score in the inner if (in resultGenerator.js) with your score. Make the same thing with the printing code on the bottom.

Run the following command (In 'utils' directory!:
```
node resultGenerator.js
```
And your result will be displayed.

## Other uses

If you want, you can re-generate the JSON-converted pdf with resultScraper.JS and also you can do this with another pdf-result files (for example, Concorso Agenzia Entrate 2023 - Funzionari Servizi Pubblicità Immobiliari 530')


