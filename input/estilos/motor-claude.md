# Motor Claude: piezas sin Magnific (v1)

Cuándo: siempre que Magnific no esté disponible en la sesión (no aparecen sus herramientas,
falla la conexión o no hay créditos). **No es un error ni se pregunta**: se diseña con Claude y
se entrega igual. Tampoco se tira de otros generadores de pago (ElevenLabs, Figma…) salvo que
el usuario lo pida.

## Cómo funciona

Claude compone la pieza en HTML + SVG inline y Chromium la convierte en PNG al tamaño final
exacto (sin recortes posteriores):

```
node scripts/render.js output/fuentes/<id>.html <ancho> <alto> output/imagenes/<id>.png 2
```

- `2` = escala: la imagen sale al doble (más nítida en pantallas retina). Impresión: `4`.
- Fuente HTML en `output/fuentes/<id>.html`, PNG en `output/imagenes/<id>.png`.
- Enlace de entrega (el repo es público), tras commit y push:
  `https://raw.githubusercontent.com/arivas-web/visualtrans.dise-o.gr-ficas/<rama>/output/imagenes/<id>.png`
  Comprueba que responde 200 antes de entregarlo.
- Mira el PNG antes de entregarlo (leerlo como imagen) y corrige lo que no encaje.

## Look

No es fotografía: es **ilustración editorial vectorial limpia**, coherente con la marca.

- Fondo de cielo/mar en degradados muy suaves de azul a blanco; mucho espacio negativo.
- Escena logística reconocible en siluetas planas y desaturadas (grúas, contenedores, camión
  europeo, avión de carga, almacén), al fondo.
- Primer plano con el tema: documentos, paneles de interfaz en glassmorphism (blanco
  translúcido, esquinas redondeadas, sombra azul suave), filas y datos como barras redondeadas.
- Paleta de `input/marca/Marca_Visual_Trans.md`: azul marino `#2E5590` para lo principal, cian
  `#00B4E6` para datos/flujo, como mucho un toque de naranja `#F39200`; verde `#2EAA5C` solo
  para algo validado/positivo.
- Tipografía, si hay texto (solo cuando el estilo o el usuario lo piden): Inter (instalada).
- Respeta el mismo "Siempre/Nunca" de la marca: sin logos, sin flechas (usa trazos punteados),
  sin banderas, sin rótulos, esquina inferior derecha despejada, hueco para el titular donde lo
  pida el estilo de la pieza.

## Registro

En `output/registro.csv`: `modelo = claude-svg`, `prompt` = resumen de la composición y la
ruta de la fuente HTML.
