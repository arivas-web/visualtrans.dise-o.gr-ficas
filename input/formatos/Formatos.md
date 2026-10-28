# Formatos por tipo de pieza

`aspectRatio` y `channel` son los parámetros de `images_generate` de Magnific. Las proporciones
que Magnific no tiene (3:1, 1.91:1, banners muy alargados) se generan en la más cercana y se
ajustan después con `images_crop` / `images_resize` (o `images_expand` si hace falta más lienzo),
sin regenerar.

| Pieza | Tamaño final | Generar en | `channel` | Notas |
|---|---|---|---|---|
| Post LinkedIn (feed) | 1080×1350 | 4:5 | `linkedin_post` | Por defecto para posts de LinkedIn |
| Post LinkedIn horizontal / con enlace | 1200×627 | 16:9 → recorte | `linkedin_post` | |
| Post de Noticias (estilo Noticias) | 1080×1350 o 4:3 | 4:5 (feed) o 4:3 | `linkedin_post` | El estilo propone 4:3; en feed, 4:5 |
| Post de Pains (estilo Pains) | 1080×607 / 1080×675 | 16:9 o 16:10→recorte | `linkedin_post` | Lo que pide el estilo Pains |
| Banner LinkedIn empresa | 1128×191 | 21:9 → recorte | `linkedin_banner_company` | Motivo centrado, márgenes amplios |
| Banner LinkedIn personal | 1584×396 | 21:9 → recorte | `linkedin_banner_personal` | Foto de perfil tapa abajo a la izquierda |
| Post Instagram | 1080×1350 | 4:5 | `instagram_post` | |
| Story / Reel cover | 1080×1920 | 9:16 | `instagram_story` | Zona segura: 250 px arriba y abajo |
| Post X | 1600×900 | 16:9 | `x_post` | |
| Post Facebook | 1080×1350 | 4:5 | `facebook_post` | |
| Cabecera de correo / newsletter | 1200×400 (se ve a 600×200) | 21:9 o 2:1 → recorte 3:1 | `digital` | Hueco para el titular; ver `prompt-cabecera-email.txt` |
| Imagen destacada de blog / OG | 1200×630 | 16:9 → recorte | `og_image` | Ver `prompt-blog.txt` |
| Imagen dentro de un artículo | 1200×800 | 3:2 | `digital` | |
| Banner web / landing (hero) | 1920×820 | 21:9 | `digital` | |
| Portada de presentación | 1920×1080 | 16:9 | `presentation` | |
| Miniatura de YouTube / webinar | 1280×720 | 16:9 | `youtube_thumbnail` | |
| Evento / feria (cartel digital) | 1080×1350 | 4:5 | `social` | |
| Impresión (roll-up, cartel…) | según imprenta | lo más cercano | `print` | Pedir medidas y subir resolución con `images_upscale` |

Si la pieza no está en la tabla, elige la proporción más cercana al tamaño que pida el usuario y
apúntala aquí al terminar.
