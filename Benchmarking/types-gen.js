import { writeFile, appendFile } from "node:fs/promises";

const NO_OF_FILES = 400;
const NO_OF_TYPES = 800;

for (let i = 1; i <= NO_OF_FILES; i++) {
    writeFile(`./types/type${i}.ts`, `
        type Student0 = {
            id0: number;
            name0: number;
            roll0: number;
        }
        `)
        .then(async () => {
            for (let j = 1; j <= NO_OF_TYPES; j++) {
                await appendFile(`./types/type${i}.ts`, `
                    \n
                    type Student${j} = {
                        id${j}: number;
                        name${j}: number;
                        roll${j}: number;
                    }
                    `)
            }
        })

}