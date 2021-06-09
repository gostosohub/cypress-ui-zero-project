const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'cypress/cucumber-json/',
    reportPath: './testOutput',
    displayDuration: true,
    hideMetadata: true,
    customData: {
        title: 'Run local',
        data: [
            {label: 'Project', value: 'cypress-zero-project'},
            {label: 'Release', value: '1.0.0'}
        ]
    }
});