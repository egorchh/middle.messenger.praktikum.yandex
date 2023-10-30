import { HelperOptions } from 'handlebars';

export default function page(this: object, { fn, hash }: HelperOptions): string {
    //language=hbs
    return `
        <!doctype html>
        <html lang="ru">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${ hash.title }</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;800&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/src/styles/index.scss">
            <link rel="stylesheet" href="/src/layouts/page/page.scss">
        </head>
        <body>
            <main class="page-${ hash.display }">
                ${fn(this)}
            </main>
        </body>
        </html>
    `
}
