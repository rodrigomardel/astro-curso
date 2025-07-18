---
title: 'Contenido de la página'
layout: '../../layouts/Layout.astro'
---

<div class="text-center max-w-3xl mx-auto px-4 py-10">

# <h1 class="text-4xl font-bold m-4 text-pink-500">¿Por qué elegir Astro para tu próximo proyecto web?</h1>
<p class="text-lg mb-16">Astro es un moderno generador de sitios web que permite crear experiencias rápidas y optimizadas con una arquitectura basada en componentes.</p>

## <h2 class="text-2xl font-semibold mb-2 text-center text-purple-900"> Ventajas principales</h2>
- **Sin JavaScript innecesario**: Astro solo envía el JS que necesitas.
- **Framework-agnostic**: Puedes usar React, Vue, Svelte, incluso todos juntos.
- **Renderizado en el servidor (SSR)** y generación estática de páginas.
- **Optimización automática de imágenes y assets.**
<br><br>

## <h2 class="text-2xl font-semibold mb-2 mt-14 text-center text-purple-900"> Ejemplo básico</h2>
```astro
---
const { title } = Astro.props;
---
<h1>{title}</h1>
