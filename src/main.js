import fs from 'fs';

export async function prospect(oldFile, newFile) {
    fs.readFile(oldFile, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        const codeStart = '```js';
        const codeEnd = '```';
        const firstIndex = data.indexOf(codeStart) + codeStart.length + 1;
        const secondIndex = data.indexOf(codeEnd, firstIndex + 1);

        const output = data.substring(firstIndex, secondIndex);

        fs.writeFile(newFile, output, function (err) {
            if (err) {
                return console.log(err);
            }
    
            console.log('Struck gold!');
        });
    });

    // fs.writeFile(newFile, output, function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log('Struck gold!');
    // });
}
