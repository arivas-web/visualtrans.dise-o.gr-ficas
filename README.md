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

El agente entiende el encargo, elige estilo y formato, lo manda a generar con el Magnific del
compañero (rutina `agente-diseno`), y cuando vuelve entrega en el chat el enlace a la imagen. Lo
hecho queda en `output/AAAA-MM/disenos.csv` y en `output/registro.csv`.

## Estructura

```
input/                                ← lo que LEE el agente
├── marca/Marca_Visual_Trans.md       ← paleta, look, siempre/nunca (lo leen todas las piezas)
├── estilos/                          ← un estilo por tipo de pieza
│   ├── prompt-noticias.txt           ← noticias (copia del de LinkedIn)
│   ├── prompt-pains.txt              ← pains: foto + interfaz-metáfora (copia del de LinkedIn)
│   ├── prompt-cabecera-email.txt     ← cabeceras de correo y newsletter
│   ├── prompt-blog.txt               ← imágenes de blog
│   └── prompt-libre.txt              ← todo lo demás
├── formatos/Formatos.md              ← tamaño, proporción y canal por tipo de pieza
└── inbox/INBOX.md                    ← novedades de diseño (se apuntan con fecha)
output/
├── AAAA-MM/encargos-para-graficas.txt ← piezas sueltas pendientes (entrada de la rutina)
├── AAAA-MM/disenos.csv               ← resultado de la rutina: enlace y estado por pieza
└── registro.csv                      ← cada pieza generada: tema, prompt, enlace, estado
.claude/
├── commands/disenar.md               ← agente de diseño general
├── commands/generar-disenos.md       ← lo corre la rutina agente-diseno con los encargos
├── commands/generar-graficas.md      ← lote mensual de LinkedIn (copia)
├── agents/agente-disenador.md        ← genera cualquier pieza
├── agents/subagente-noticias.md      ← posts de LinkedIn pilar Noticia (copia)
└── agents/subagente-pains.md         ← posts de LinkedIn pilar Pain (copia)
docs/graficas-linkedin.md             ← cómo funciona el flujo de LinkedIn y la copia
docs/disenos-rutina.md                ← piezas sueltas con la rutina del compañero (y su alta)
.github/workflows/lanzar-graficas.yml ← disparo de la rutina del compañero (copia)
.github/workflows/lanzar-disenos.yml  ← disparo de la rutina agente-diseno del compañero
```

## Añadir un tipo de pieza nuevo

1. Una fila en `input/formatos/Formatos.md` (tamaño, proporción, canal).
2. Si necesita un look propio, un `input/estilos/prompt-<tipo>.txt` siguiendo los existentes.
3. Una línea en el paso 1 de `.claude/commands/disenar.md` que diga cuándo usarlo.

## Créditos de Magnific

Todo sale con el Magnific del compañero, no con el de la sesión:

- **Piezas sueltas** (`/disenar`): rutina `agente-diseno`, con este repo como fuente
  (`docs/disenos-rutina.md`, incluida la puesta en marcha).
- **Posts del calendario de LinkedIn**: rutina `agente-graficas` (`docs/graficas-linkedin.md`).

Solo si se pide expresamente se usa el Magnific de la sesión; si no tiene créditos, el agente
entrega los prompts listos para lanzarlos donde los haya.
