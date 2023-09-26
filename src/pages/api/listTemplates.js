import fs from 'fs';
import path from 'path';


export default async function handler(request, response) {
    try {
        const getDirectories = source =>
            fs.readdirSync(source, { withFileTypes: true })
                .filter(dirent => dirent.isDirectory() && dirent.name !== 'api') // Exclude the 'api' directory
                .map(dirent => dirent.name);

        const directories = getDirectories(path.join(process.cwd(), '/src/pages'));

        // Read data.json from each directory
        const directoryData = {};
        directories.forEach(dir => {
            const dataPath = path.join(process.cwd(), '/src/pages', dir, 'data.json');
            if (fs.existsSync(dataPath)) {
                const rawData = fs.readFileSync(dataPath, 'utf8');
                try {
                    directoryData[dir] = JSON.parse(rawData);
                } catch (error) {
                    console.error(`Error parsing data.json in ${dir}:`, error);
                }
            }
        });

        // Construct the response object
        const responseObject = {
            directories: directories,
            data: directoryData
        };

        // console.log(responseObject);
        return response.status(200).json(responseObject);
    }
    catch (error) {

        return response.status(500).json({ error });
    }


    //   const pets = await sql`SELECT * FROM Pets;`;
    //   return response.status(200).json({ pets });
}