import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
    /*plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],

            refresh: true,
        }),
    ],
    resolve:{
        alias:{
           "@" : "/resource/js",
           '~bootstrap': path.resolve(__dirname,"node_modules/bootstrap/dist")     
        } 
     },*/
     plugins: [
        laravel(['resources/css/app.css',
        'resources/sass/app.scss',
        'resources/js/app.js']),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            '~bootstrap': path.resolve(__dirname,"node_modules/bootstrap/dist")
        },
    },
});
