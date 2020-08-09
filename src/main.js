import fs from 'fs';

export default async function prospect(lang, oldFile, newFile) {
  fs.readFile(oldFile, 'utf8', (readErr, data) => {
    if (readErr) {
      throw new Error(readErr);
    }

    if (!data.includes(`\`\`\`${lang}`)) {
      console.log('Prospector couldn\'t find the code he was looking for :(');
      return;
    }

    const output = data.split(`\`\`\`${lang}`)
      .reduce((acc, curr) => (curr.includes('```') ? [...acc, curr.split('```')[0].trim()] : acc), [])
      .join('\n');

    fs.writeFile(newFile, output, (writeErr) => {
      if (writeErr) {
        throw new Error(writeErr);
      }

      console.log('Prospector struck gold!');
    });
  });
}
