---
title: 'Contenido de la página'
layout: '../../layouts/Layout.astro'
---

<div class="text-center max-w-2xl mx-auto px-4 py-10">

# <span class="text-2xl font-bold">Por qué elegir Astro para tu próximo proyecto web</span>
<p>Astro es un moderno generador de sitios web que permite crear experiencias rápidas y optimizadas con una arquitectura basada en componentes.</p>
<br><br>

## <span class="text-xl font-bold">🚀 Ventajas principales</span>
- **Sin JavaScript innecesario**: Astro solo envía el JS que necesitas.
- **Framework-agnostic**: Puedes usar React, Vue, Svelte, incluso todos juntos.
- **Renderizado en el servidor (SSR)** y generación estática de páginas.
- **Optimización automática de imágenes y assets.**
<br><br>

## <span class="text-xl font-bold">🛠️ Ejemplo básico</span>
```astro
---
const { title } = Astro.props;
---
<h1>{title}</h1>
</div>
