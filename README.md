# CHAMPS E-commerce Project

Este proyecto es una implementación de una sección de un e-commerce para la página CHAMPS. La sección específica a actualizar es la de la marca Carolina Herrera.

## Tecnologías Utilizadas

- **HTML**
- **Tailwind CSS**
- **DaisyUI**

## Estructura del Proyecto

El proyecto consta de tres páginas principales:

1. **Página Principal (Home)**: `index.html`
2. **Página de Listado de Productos**: `productos.html`
3. **Página de Detalle de Productos**: `detalle-producto.html`

## Instalación y Uso

### Requisitos Previos

Asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Clonar el Repositorio

```bash
git clone https://github.com/mariokarajallo/champs-carolina-herrera-2024.git
cd champs-carolina-herrera-2024
```

### Instalación de Dependencias

```bash
npm install
```

### Ejecutar el Proyecto

Para iniciar el proyecto ejecuta:

```bash
npm run build:css
```

## Estructura de Carpetas

```plaintext
.
├── src/
│   ├── css/
│   │   ├── tailwind.css       # Configuración de Tailwind CSS
│   ├── js/
│   │   └── main.js            # Archivos JavaScript principales (si aplica)
│   ├── assets/
│   │   ├── images/            # Imágenes del proyecto
├── detalle-producto.html      # Página de Detalle de Productos
├── index.html                 # Página Principal (Home)
├── package-lock.json
├── package.json
├── productos.html             # Página de Listado de Productos
├── tailwind.config.js         # Configuración de Tailwind CSS
└── ...
```

## Personalización

### Tailwind CSS

Puedes personalizar las configuraciones de Tailwind CSS en el archivo `tailwind.config.js`.

```javascript
// tailwind.config.js
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      // tus personalizaciones aquí
    },
  },
  plugins: [require('daisyui')],
}
```

### DaisyUI

Para más información sobre cómo utilizar y personalizar DaisyUI, visita la [documentación oficial](https://daisyui.com/).

## Contribuciones

Las contribuciones son bienvenidas. Para contribuir, por favor sigue los siguientes pasos:

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agregar nueva feature'`)
4. Sube tu rama (`git push origin feature/nueva-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, por favor contacta a [Mario Karajallo] a través de [mario@karajallo.com].

---

¡Gracias por tu interés en el proyecto!
