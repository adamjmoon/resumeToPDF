var fs = require('fs');
var pdf = require('html-pdf');
var resumeToHtml = require('resume-to-html');


function resumeToPDF(resumeJson, callback) {
    // add css into html as:
    // https://github.com/marcbachmann/node-html-pdf/blob/master/test/businesscard.html
    resumeToHtml(resumeJson, {theme: 'modern'}, function(htmlResume) {
      console.log(htmlResume);
        pdf.create(htmlResume, {
            // A4 size? what is that?
            width: '297mm',
            height: '400mm'
        }).toFile('.\\resume.pdf', function(err, res) {
            console.log(res);
            if (err) {
              console.log(err);
              callback(err, buffer);
            }

           // { filename: '/app/businesscard.pdf' }
            callback(err, res);
});

    });
};

module.exports = resumeToPDF;
