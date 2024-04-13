const path = require('path');

module.exports = {
    mode: 'development', // Establece el modo de Webpack a 'development'
    entry: './src/index.js', // Entrada de tu aplicación
    output: {
        path: path.resolve(__dirname, 'dist'), // Carpeta de salida
        filename: 'main.js' // Nombre del archivo de salida
    },
};
