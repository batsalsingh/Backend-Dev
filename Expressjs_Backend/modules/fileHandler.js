const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'student.json');

// ✅ READ
const readStudentsFromFile = async () => {
    try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        // If file doesn't exist or is empty → return []
        return [];
    }
};

// ✅ WRITE
const writeStudentsToFile = async (records) => {
    try {
        await fs.writeFile(filePath, JSON.stringify(records, null, 2));
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { readStudentsFromFile, writeStudentsToFile };