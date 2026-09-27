# CV Web — Gabriel

Currículum vitae profesional en formato web, bilingüe (Español / Inglés), con diseño corporativo moderno. Desplegado mediante GitHub Pages.

## 🚀 Demo

Una vez desplegado en GitHub Pages, tu CV estará disponible en:

```

[https://BeyondGabriel.github.io/cv-web/](https://beyondgabriel.github.io/cv-web/)

```

## ✨ Características

- **Bilingüe (ES / EN):** cambia todo el contenido con un solo clic.
- **Tema claro / oscuro:** se adapta a la preferencia del sistema y permite alternancia manual.
- **Descarga en PDF:** botón que usa la impresión nativa del navegador (guarda como PDF).
- **Diseño responsivo:** se adapta a móviles, tablets y escritorio.
- **Optimizado para impresión:** oculta la barra de herramientas y ajusta el diseño al generar el PDF.
- **Sin dependencias externas:** solo HTML, CSS y JavaScript puro.
- **Persistencia de preferencias:** guarda el idioma y el tema elegidos en `localStorage`.

## 📁 Estructura del proyecto

```

cv-web/
├── index.html      # Estructura del CV
├── style.css       # Estilos (corporativo moderno, temas, responsive, print)
├── script.js       # Lógica: idioma, tema, PDF
└── README.md       # Este archivo

```

## 🛠️ Cómo personalizar

### 1. Reemplaza los datos de contacto

En `index.html`, busca la sección `header-info` y actualiza:

- Correo electrónico
- Teléfono / WhatsApp
- GitHub
- LinkedIn

### 2. Reemplaza la foto de perfil

Sustituye la URL de la imagen en:

```html
<img src="https://via.placeholder.com/150/1e3a5f/ffffff?text=FOTO" alt="Foto de perfil" id="profilePhoto">
```

Puedes colocar tu foto en una carpeta `assets/` y referenciarla como `assets/foto.jpg`.

### 3. Actualiza el contenido

Todo el contenido bilingüe usa atributos `data-es` y `data-en`:

```
<p data-es="Texto en español" data-en="Text in English">Texto en español</p>
```

Edita ambos valores para mantener la coherencia bilingüe.

## 🌐 Cómo desplegar en GitHub Pages

### Paso 1: Crea el repositorio

1. Ve a [github.com/new](https://github.com/new).
2. Nombra el repositorio como `cv-web` (o el nombre que prefieras).
3. Déjalo público.
4. No inicialices con README (ya tienes uno).

### Paso 2: Sube los archivos

Desde tu terminal, dentro de la carpeta `cv-web`:

```
git init
git add .
git commit -m "CV web inicial"
git branch -M main
git remote add origin https://github.com/BeyondGabriel/cv-web.git
git push -u origin main
```

O arrastra los archivos directamente desde la interfaz web de GitHub.

### Paso 3: Activa GitHub Pages

1. Ve a **Settings** → **Pages**.
2. En **Source**, selecciona `Deploy from a branch`.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**.

En unos minutos tu CV estará disponible en:

```
https://BeyondGabriel.github.io/cv-web/
```

### Paso 4 (opcional): Dominio personalizado

Si tienes un dominio propio, puedes configurarlo en la misma sección de Pages.

## 🖨️ Cómo generar el PDF

1. Abre tu CV en el navegador.
2. Haz clic en el botón **📄 PDF** (arriba a la derecha).
3. En el diálogo de impresión, selecciona **Guardar como PDF**.
4. Ajusta los márgenes si es necesario y guarda.

El CSS de impresión ya está optimizado para que el resultado sea limpio y profesional.

## 📱 Vista previa

| Escritorio | Móvil |
|---|---|
| Diseño de dos columnas | Diseño de una columna |
| Barra de herramientas fija | Barra de herramientas compacta |

## 📄 Licencia

Este proyecto es de uso personal. Puedes adaptarlo libremente para tu propio CV.

---

**Autor:** Gabriel ([@BeyondGabriel](https://github.com/BeyondGabriel))

</BDS:create_file>

<BDS:create_file fileName="cv-web/.gitignore">

```gitignore
# Dependencias
node_modules/
package-lock.json

# Sistema operativo
.DS_Store
Thumbs.db

# Editores
.vscode/
.idea/
*.swp
*.swo

# Archivos temporales
*.log
*.tmp

