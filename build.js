const fs = require('fs');

const requiredFiles = [
    'index.html',
    'script.js',
    'style.css'
];

console.log('Starting Student Task Manager build validation...');

for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
        console.error(`Build Failed: ${file} not found`);
        process.exit(1);
    }
}

console.log('All required application files are present.');
console.log('Student Task Manager build completed successfully.');