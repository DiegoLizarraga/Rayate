# Rayate
La aplicación es completamente funcional y lista para usar. Los dibujos se guardan automáticamente mientras dibujas y puedes descargarlos como archivos PNG


Usar los colores en CSS;
Utilizar colores hexadecimales en CSS;
Utilizar paletas de colores de terceros;
Cambiar los colores de fondo y de los textos;
Extraer el color de Figma para usar en CSS;
Destacar el texto y cambiar el color del texto destacado.

# 🎨 Mi Aplicación de Dibujo

Una aplicación web moderna y responsive para dibujar, con guardado automático y descarga de imágenes. Perfecta para crear arte digital desde cualquier dispositivo.

## ✨ Demo 


## 🚀 Características

### 🎯 **Funcionalidades Principales**
- **Dibujo intuitivo** con mouse y soporte táctil completo
- **8 colores vibrantes** en paleta interactiva
- **Pincel ajustable** de 1 a 50 píxeles con vista previa en tiempo real
- **Guardado automático** en el navegador (localStorage)
- **Descarga de imágenes** en formato PNG de alta calidad
- **Interfaz completamente responsive** para desktop y móvil

### 🎨 **Experiencia de Usuario**
- Diseño moderno con gradientes y efectos glassmorphism
- Animaciones suaves y feedback visual
- Cursor personalizado para el área de dibujo
- Indicador de guardado automático
- Confirmación antes de limpiar el canvas

### 📱 **Compatibilidad**
- ✅ **Desktop**: Chrome, Firefox, Safari, Edge
- ✅ **Móvil**: iOS Safari, Chrome Mobile, Firefox Mobile
- ✅ **Tablet**: iPad, Android tablets
- ✅ **Responsive**: Se adapta a cualquier tamaño de pantalla

## 🛠️ Instalación y Uso

### Opción 1: Descarga Directa
```bash
# Clona el repositorio
git clone https://github.com/DiegoLizarraga/Rayate.git

# Navega al directorio
cd rayate

# Abre index.html en tu navegador
open index.html
```

### Opción 2: GitHub Pages (Recomendado)
1. **Fork** este repositorio
2. Ve a **Settings** → **Pages**
3. Selecciona **Deploy from a branch** → **main**
4. Tu aplicación estará disponible en: `https://github.com/DiegoLizarraga/Rayate`

### Opción 3: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx serve .

# Con PHP
php -S localhost:8000
```

## 📂 Estructura del Proyecto

```
mi-app-dibujo/
├── 📄 index.html          # Estructura HTML principal
├── 🎨 styles.css          # Estilos y diseño responsive
├── ⚡ script.js           # Lógica de la aplicación
├── 📖 README.md           # Documentación (este archivo)
└── 🖼️ screenshots/        # Capturas de pantalla (opcional)
```

## 🎯 Cómo Usar

### Controles Básicos
1. **Seleccionar color**: Haz clic en cualquier color de la paleta
2. **Ajustar pincel**: Usa el deslizador para cambiar el grosor
3. **Dibujar**: Click y arrastra en el canvas (o usa el dedo en móvil)
4. **Limpiar**: Botón "Limpiar" (con confirmación)
5. **Descargar**: Botón "Descargar" para guardar como PNG

### Funciones Avanzadas
- **Guardado automático**: Tus dibujos se guardan mientras trabajas
- **Vista previa del pincel**: Ve el tamaño exacto antes de dibujar
- **Zoom responsive**: El canvas se ajusta al tamaño de tu pantalla

## 🔧 Personalización

### Añadir Nuevos Colores
Edita el HTML en `index.html`:
```html
<div class="color-option" style="background: #tu-color" data-color="#tu-color"></div>
```

### Cambiar Tamaños del Canvas
Modifica las dimensiones en `script.js`:
```javascript
this.canvas.width = 1200;  // Ancho personalizado
this.canvas.height = 800;  // Alto personalizado
```

### Personalizar Estilos
Todos los estilos están en `styles.css` usando CSS moderno:
- Variables CSS para colores consistentes
- Gradientes personalizables
- Animaciones ajustables

## 🌟 Características Técnicas

### Tecnologías Utilizadas
- **HTML5 Canvas** para renderizado de alta performance
- **CSS3** con Flexbox, Grid y gradientes modernos
- **JavaScript ES6+** con clases y métodos modernos
- **localStorage API** para persistencia de datos
- **Touch Events** para soporte móvil completo

### Optimizaciones
- Código modular con clases ES6
- Event listeners eficientes
- Prevención de scroll en móviles
- Fallbacks para compatibilidad
- Compresión de imágenes automática

## 🎨 Capturas de Pantalla


## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación:

1. **Fork** el proyecto
2. Crea una **rama** para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request**

### Ideas para Contribuciones
- 🎨 Más herramientas de dibujo (líneas, formas)
- 🖌️ Diferentes tipos de pinceles
- 🎭 Filtros y efectos
- 📁 Sistema de capas
- 💾 Múltiples slots de guardado
- 🔄 Deshacer/Rehacer

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

```
MIT License - Siéntete libre de usar, modificar y distribuir este código.
```

## 🙋‍♂️ Soporte

¿Tienes preguntas o problemas?

- 📧 **Email**: lizarragasanchezdiego@gmail.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/DiegoLizarraga/Rayate/issues)
- 💬 **Discusiones**: [GitHub Discussions](https://github.com/DiegoLizarraga/Rayate/discussions)

## 🎯 Roadmap

### Versión 2.0 (Próximamente)
- [ ] Herramientas geométricas (rectángulos, círculos)
- [ ] Sistema de capas
- [ ] Paleta de colores personalizable
- [ ] Modo oscuro
- [ ] Exportar en múltiples formatos (SVG, JPG)

### Versión 1.5
- [ ] Función deshacer/rehacer
- [ ] Zoom del canvas
- [ ] Más tamaños de pincel
- [ ] Texturas de pincel

---

## ⭐ ¿Te Gusta el Proyecto?

Si te ha sido útil esta aplicación, ¡no olvides darle una ⭐ al repositorio!

**Hecho con unos tacos y muchos capuchinos**

---

### 🔗 Links Útiles

- [Documentación HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript ES6 Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [GitHub Pages Setup](https://pages.github.com/)
