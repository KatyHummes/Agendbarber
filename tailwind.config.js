import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            'th-primary': '#2DC8C5',
            'th-primary-dark': '#208F8D',
            'th-green': '#2DC8C5',
            'th-green-dark': '#208F8D',
            'th-red': '#C82D30',
            'th-red-dark': '#B04042',
            'th-gray': '#7A7A7A',
            'white': '#FFFFFF',
            'black': '#000000',
        },
    },

    plugins: [forms, typography],
};
