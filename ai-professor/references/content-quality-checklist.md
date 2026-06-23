# Checklist de calidad de contenido

Usar **antes de anunciar** un módulo al estudiante (FASE 3.5). Si algún ítem falla, corregir y volver a revisar.

---

## README del módulo

### Por sección (obligatorio)

| Sección | Mínimo |
|---------|--------|
| Navegación | Links relativos a PROGRESS, examples, practices, solutions, playground (si aplica) |
| Por qué importa | ≥2 párrafos; conectado al diagnóstico del estudiante |
| Mapa del módulo | Diagrama ASCII o jerarquía con todos los conceptos |
| Conceptos fundamentales | Por cada concepto: analogía + definición + ≥3 párrafos + ejemplo inline |
| Cómo se relacionan | Tabla o diagrama que enlace ≥2 conceptos |
| Errores comunes | ≥3 errores, cada uno con causa y cómo evitarlo |
| Resumen visual | Condensa todos los conceptos (tabla, mapa o lista) |
| Contenido del módulo | Enlaces relativos a cada ejemplo y práctica |
| Referencias | URLs reales (documentación oficial, artículos) |
| Siguiente paso | Pasos claros hacia examples/ y practices/ |

### Código en README
- Comentarios en **español** en cada bloque de código
- Comentar partes no obvias línea a línea o por bloque lógico

### Anti-patrones
- Un solo párrafo por concepto
- Motivación genérica sin vínculo al diagnóstico
- Secciones vacías, "TBD" o "pendiente"
- Referencias sin URLs o con enlaces rotos inventados
- Ejemplos o prácticas listados sin enlaces relativos
- Código sin comentarios en español

---

## Examples (`examples/`)

- Al menos **un ejemplo** por cada concepto importante del README
- Bloque Navegación en cada archivo
- Sección "¿Qué problema resuelve este ejemplo?"
- Contenido completo (no esbozos)
- Comentarios en **español** en bloques de código
- Variaciones o casos límite cuando aporten claridad

### Anti-patrones
- Ejemplo que solo repite una frase del README sin demostración
- Código copiado sin explicación entre bloques
- Títulos o archivos con "Example" en lugar de "Ejemplo" / `ejemplo-XX`

---

## Practices (`practices/`)

### Secciones obligatorias
1. Navegación
2. Objetivo
3. Prerrequisitos
4. Tiempo estimado
5. Archivos involucrados
6. Enunciado
7. Pasos numerados (acción → resultado esperado)
8. Criterio de éxito (≥2 criterios verificables)
9. Dónde entregar
10. Pistas (opcional, máximo 2)

### Anti-patrones
- Enunciado vago sin pasos
- Sin prerrequisitos en prácticas que dependen de conceptos previos
- Sección `## Mi solución` en el enunciado
- Pasos que no indican qué archivo tocar o qué comprobar

---

## Playground (`playground/`)

Solo aplica si diagnóstico = `codigo` o `mixto`.

### Por carpeta `practice-[NN]/`
- Archivos starter mínimos (no solución completa)
- Sin README local — guía en comentarios inline
- Comentarios en español: título, mapa, propósito de cada bloque, TODO detallados
- Qué no modificar (scaffolding fijo)

### `playground/README.md` del módulo
- Requisitos, instalación, tabla de comandos por práctica
- Links al enunciado de cada práctica de código

### Anti-patrones
- Solo `pass` o `TODO` sin explicación
- Comentarios en inglés
- Solución completa en el starter
- README duplicado por práctica

---

## Solutions (`solutions/`)

- Placeholder por práctica con mismo nombre que el enunciado
- Bloque Navegación
- Sección "Tu respuesta" vacía para que el estudiante escriba

---

## Regla operativa

1. Generar todo el contenido del módulo
2. Recorrer este checklist **en silencio** (no mostrar al estudiante)
3. Corregir lo que falle
4. Solo entonces: anuncio del módulo
