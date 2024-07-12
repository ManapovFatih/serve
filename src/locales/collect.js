const fs = require('fs-extra');
const path = require('path');


const directoryPath = './src'; // Укажите путь к директории с файлами

let i18nContent = {};
const ignoredComments = []; // Список комментариев, которые не нужно трогать
const ignoredSentences = [];
const savedComments = [];
const savedSentences = [];
const savedWords = [];
const ignoredDirectories = ['assets', 'config', 'contexts', 'hooks', 'layouts', 'locales', 'providers', 'routes', 'services', 'store', 'helpers']; // Папки, которые нужно игнорировать


const translateFolderPath = './src/locales/translate';
if (!fs.existsSync(translateFolderPath)) {
    fs.mkdirSync(translateFolderPath);
}

const filesFolderPath = './src/locales/files';
if (!fs.existsSync(filesFolderPath)) {
    fs.mkdirSync(filesFolderPath);
}
const RuPath = path.join(__dirname, './translate/ru.json');
if (fs.existsSync(RuPath)) {
    i18nContent = JSON.parse(fs.readFileSync(RuPath, 'utf8'));
}
const i18nPath = path.join(__dirname, './files/i18n.json');
let templates = 0;


function readFiles(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (!ignoredDirectories.includes(file)) { // Проверяем, не находится ли папка в списке игнорируемых
                readFiles(filePath); // Рекурсивно проходить по подпапкам
            }
        } else if (['.js', '.jsx'].includes(path.extname(file))) { // Проверяем, не был ли файл уже обработан
            let content = fs.readFileSync(filePath, 'utf8');

            // Игнорируем комментарии
            const comments = content.match(/\/\*[\s\S]*?\*\/|\/\/.+/g);

            if (comments) {
                // Сохраняем комментарии и их позиции
                comments.forEach((comment) => {
                    const startIndexComments = content.indexOf(comment);
                    savedComments.push({ comment, startIndexComments });
                    content = content.slice(0, startIndexComments) + `{startIndexComments[${startIndexComments}]}` + content.slice(startIndexComments + comment.length);

                });

                // Добавляем удаленные комментарии в список ignoredComments
                ignoredComments.push(...comments);
            }
            const tSentences = content.match(/t\('[^']+'\)/g);
            if (tSentences) {
                // Сохраняем комментарии и их позиции
                tSentences.forEach((sentence) => {
                    const startIndexIgnoredSentences = content.indexOf(sentence);
                    savedSentences.push({ sentence, startIndexIgnoredSentences });
                    content = content.slice(0, startIndexIgnoredSentences) + `{startIndexIgnoredSentences[${startIndexIgnoredSentences}]}` + content.slice(startIndexIgnoredSentences + sentence.length);
                });

                // Добавляем удаленные комментарии в список ignoredComments
                ignoredSentences.push(...tSentences);
            }

            const lines = content.split('\n'); // Разделяем строку на отдельные строки

            const result = [];

            for (const line of lines) { // Проходим по каждой строке
                const russianWords = line.match(/(?:(["'])[^"']*?\1)|(?:(>([^<]*<))|(?:(\[[^\]]*\]))|(?:(\([^)]*\))))/gi);

                if (russianWords) {
                    ;
                    for (const match of russianWords) {
                        if (match) {
                            const russianMatch = match.match(/[А-Яа-яЁё]+/);
                            if (russianMatch) {
                                result.push(match.trim());
                            }
                        }
                    }
                }
            }

            // const russianWords = content.match(/(?:(["'])[^"']*?\1)|(?:(>([^<]*<))|(?:(\[[^\]]*\]))|(?:(\([^)]*\))))/gi);


            console.log(result);
            templates += result?.length;

            // const russianWords = content.match(/([>"'()\[\]]*)(?:[0-9]*?[a-zA-Z]*[А-Яа-яЁё]+[А-Яа-яЁё]*[\sА-Яа-яЁё]+?[\s0-9]*?[\sa-zA-Z]*?[\s,.?!«»%()\]\-_'’"\s]+[/sА-Яа-яЁё]*?[,.?!«»%()<\]\-_'’"0-9a-zA-Z\s]*)+/gis);

            // const russianWords = content.match(/(?:["'(\[\]]*)([а-яё]+[-а-яё]*[\sА-ЯЁ]+[-а-яё]*?[,.?!«»()\-_'’"\s]*)+/gis); // Machine worked
            if (result) {
                // Сохраняем комментарии и их позиции
                result.forEach((words) => {
                    let word = words.trim();
                    const startIndexWord = content.indexOf(word);
                    savedWords.push({ word, startIndexWord });
                    content = content.slice(0, startIndexWord) + `{startIndexWord[${startIndexWord}]}` + content.slice(startIndexWord + word.length);
                });

            }




            savedWords.forEach(({ word, startIndexWord }) => {
                let newWord;
                let saveRu = [];
                if (word.startsWith('(')) {
                    newWord = word.replace(/^\(|\)$/g, ''); // Удаляем скобки в начале и конце строки
                    newWord = newWord.trim(); // Удаляем пробелы в начале и конце
                    newWord = newWord.replace(/^["']|["']$/g, ''); // Удаляем кавычки
                    newWord = newWord.trim(); // Удаляем пробелы
                    saveRu.push(newWord);
                    newWord = `(t('${newWord}'))`;
                }
                else if (word.startsWith('[')) {
                    newWord = word.replace(/^\[|\]$/g, ''); // Удаляем скобки в начале и конце строки
                    newWord = newWord.trim(); // Удаляем пробелы в начале и конце
                    newWord = newWord.replace(/^["']|["']$/g, ''); // Удаляем кавычки
                    newWord = newWord.trim();
                    if (newWord.includes('", "')) {
                        newWord = newWord.split('", "').map(item => {
                            saveRu.push(item.trim());
                            return `t('${item.trim()}')`;
                        }).join(', ');
                        newWord = `[${newWord}]`;
                    }
                    else {
                        saveRu.push(newWord);
                        newWord = `[t('${newWord}')]`;
                    }
                }
                else if (word.startsWith('>')) {
                    newWord = word.replace(/^[>]|[<]$/g, '');
                    newWord = newWord.trim();
                    saveRu.push(newWord);
                    newWord = `>{t('${newWord}')}<`;

                }
                else {
                    newWord = word.replace(/^["']|["']$/g, '');
                    newWord = newWord.trim();
                    saveRu.push(newWord);
                    newWord = `{t('${newWord}')}`;

                }

                content = content.replace(`{startIndexWord[${startIndexWord}]}`, newWord);


                saveRu.forEach((e) => {
                    if (!i18nContent[e]) {
                        i18nContent[e] = e;
                    }
                });


            });


            savedComments.forEach(({ comment, startIndexComments }) => {
                content = content.replace(`{startIndexComments[${startIndexComments}]}`, comment);
            });
            savedSentences.forEach(({ sentence, startIndexIgnoredSentences }) => {
                content = content.replace(`{startIndexIgnoredSentences[${startIndexIgnoredSentences}]}`, sentence);
            });
            if (result && result.length > 0) {
                content = `import { useTranslation } from "react-i18next";\n${content}`;
                content = content.replace(/(\) => {)/, '$1\nconst {t} = useTranslation();');
                fs.writeFileSync(filePath, content);
            }

        }
    });
}


readFiles(directoryPath);
// Создаем файл i18n
const valuesArray = Object.values(i18nContent);

fs.writeFileSync(RuPath, JSON.stringify(i18nContent, null, 2));
fs.writeFileSync(i18nPath, JSON.stringify(valuesArray, null, 2));
console.log('Скрипт выполнен успешно.');
console.log(`Выделено: ${templates} мест`)
console.log(`Предложений для перевода: ${i18nContent?.length} штук`)
