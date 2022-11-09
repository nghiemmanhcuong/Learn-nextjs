import fs from 'fs';
import path from 'path';

const booksDir = path.join(process.cwd(), 'books');

export const getBooks = () => {
    const booksFileNames = fs.readdirSync(booksDir);
    const bookDatas = booksFileNames.map((bookFileName) => {
        const bookDir = path.join(booksDir, bookFileName);
        const bookContent = fs.readFileSync(bookDir,'utf8');

        return {
            bookName: bookFileName.replace(/\.txt$/, ''),
            bookContent,
        };
    });

    return bookDatas;
};
