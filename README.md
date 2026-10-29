# visualtrans-diseño-gráficas

Agente de **diseño gráfico** de Visual Trans / Visual MS. Hace cualquier pieza con Magnific:
imágenes para redes sociales (LinkedIn, Instagram, X, Facebook, stories), imágenes de noticias,
cabeceras de correo y newsletter, imágenes de blog, banners, portadas de presentación,
miniaturas, carteles de evento… y además contiene una copia del flujo de gráficas del repo de
LinkedIn (lote mensual de posts).

## Cómo se usa

Se habla con Claude Code y se pide lo que haga falta, o con el comando:

```
/disenar cabecera para la newsletter de noviembre sobre el e-CMR
/disenar imagen de blog para el artículo "5 errores en el DUA que cuestan dinero"
/disenar post de Instagram y story con el mismo motivo: feria SIL Barcelona
/disenar banner de LinkedIn de empresa, look mar y contenedores, 3 opciones
```

El agente entiende el encargo, elige estilo y formato, genera la imagen, la ajusta al tamaño
final y la entrega en el chat con el enlace. Lo hecho queda en `output/registro.csv`.

## Estructura

```
input/                                ← lo que LEE el agente
├── marca/Marca_Visual_Trans.md       ← paleta, look, siempre/nunca (lo leen todas las piezas)
├── estilos/                          ← un estilo por tipo de pieza
│   ├── motor-claude.md               ← cómo se hacen las piezas sin Magnific
│   ├── prompt-noticias.txt           ← noticias (copia del de LinkedIn)
│   ├── prompt-pains.txt              ← pains: foto + interfaz-metáfora (copia del de LinkedIn)
│   ├── prompt-cabecera-email.txt     ← cabeceras de correo y newsletter
│   ├── prompt-blog.txt               ← imágenes de blog
│   └── prompt-libre.txt              ← todo lo demás
├── formatos/Formatos.md              ← tamaño, proporción y canal por tipo de pieza
└── inbox/INBOX.md                    ← novedades de diseño (se apuntan con fecha)
output/
├── registro.csv                      ← cada pieza generada: tema, prompt, enlace, estado
├── imagenes/                         ← PNG del motor Claude (enlace raw de GitHub)
└── fuentes/                          ← HTML+SVG de cada pieza del motor Claude
scripts/render.js                     ← HTML → PNG con Chromium (motor Claude)
.claude/
├── commands/disenar.md               ← agente de diseño general
├── commands/generar-graficas.md      ← lote mensual de LinkedIn (copia)
├── agents/agente-disenador.md        ← genera cualquier pieza
├── agents/subagente-noticias.md      ← posts de LinkedIn pilar Noticia (copia)
└── agents/subagente-pains.md         ← posts de LinkedIn pilar Pain (copia)
docs/graficas-linkedin.md             ← cómo funciona el flujo de LinkedIn y la copia
.github/workflows/lanzar-graficas.yml ← disparo de la rutina del compañero (copia)
```

## Añadir un tipo de pieza nuevo

1. Una fila en `input/formatos/Formatos.md` (tamaño, proporción, canal).
2. Si necesita un look propio, un `input/estilos/prompt-<tipo>.txt` siguiendo los existentes.
3. Una línea en el paso 1 de `.claude/commands/disenar.md` que diga cuándo usarlo.

## Motores: Magnific y Claude

Las piezas se generan con el Magnific de la sesión. Si no está conectado o no tiene créditos,
el agente las hace con el **motor Claude**: compone la pieza en HTML+SVG y la convierte a PNG al
tamaño final con `scripts/render.js` (ver `input/estilos/motor-claude.md`). Nunca se queda sin
entregar por falta de Magnific. Los posts del calendario de LinkedIn siguen yendo
por la rutina `agente-graficas` del compañero (ver `docs/graficas-linkedin.md`).
