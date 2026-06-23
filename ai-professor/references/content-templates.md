# Plantillas de contenido (fusión)

Este archivo unifica las plantillas de README, práctica, solución y playground que antes vivían en archivos separados (`readme-template.md`, `practice-template.md`, `playground-template.md`).

---

## 1. README del módulo

Usar esta plantilla como guía estructural. Adaptar al tema.

Ver `navigation-conventions.md` para reglas de enlaces.
Ver `content-quality-checklist.md` para mínimos de calidad.

```markdown
# Módulo [N] — [Nombre del Módulo]

> **Objetivo:** Al terminar este módulo, serás capaz de [verbo concreto + resultado esperado].

## Navegación

← [Progreso general](../PROGRESS.md) · [Ejemplos](examples/) · [Prácticas](practices/) · [Mis soluciones](solutions/) · [Playground](playground/)

_(Omitir link a Playground si el módulo no tiene prácticas de código.)_

---

## 🧭 ¿Por qué importa esto?

>=2 párrafos; conectar con el diagnóstico del estudiante (objetivo, trabajo, proyecto).

[Motivación real. ¿Qué problema resuelve saber esto? ¿Qué puedes hacer que antes no podías?]

---

## 🗺️ Mapa del módulo

Diagrama ASCII o jerarquía que incluya todos los conceptos que se desarrollarán abajo.

```
[Concepto A]
    ├── [Sub-concepto A1]
    │       └── [Detalle]
    └── [Sub-concepto A2]
[Concepto B]
    └── [depende de A]
```

---

## 📖 Conceptos Fundamentales

### [Concepto 1]

**Analogía:** [Explicar con una metáfora del mundo real antes de la definición técnica]

**Definición:** [Definición técnica precisa, en lenguaje accesible]

**En detalle:**
[Desarrollo profundo. Sin saltarse pasos. Cada oración tiene sentido para alguien que nunca lo vio.]

**Ejemplo rápido:**
[Ejemplo concreto inline. Código: comentarios en español.]

---

### [Concepto 2]

[Misma estructura. Repetir para cada concepto.]

---

## 🔗 Cómo se relacionan estos conceptos

Tabla o diagrama que relacione al menos dos conceptos.

| Concepto | Cuándo usarlo | Qué lo diferencia |
|----------|--------------|-------------------|
| A        | ...          | ...               |
| B        | ...          | ...               |

---

## ⚠️ Errores comunes

>=3 errores; cada uno con causa y cómo evitarlo.

**Error 1: [Descripción]**
- Por qué ocurre: ...
- Cómo evitarlo: ...

---

## 🧠 Resumen visual

Condensar TODOS los conceptos del módulo en una vista de referencia (tabla, mapa o lista).

---

## 📂 Contenido de este módulo

### Ejemplos
- [Ejemplo 01 — [desc]](examples/ejemplo-01-[desc].md)
- [Ejemplo 02 — [desc]](examples/ejemplo-02-[desc].md)

### Prácticas
- [Practice 01 — [desc]](practices/practice-01-[desc].md) → [solución](solutions/practice-01-[desc].md) · [playground](playground/practice-01/)
- [Practice 02 — [desc]](practices/practice-02-[desc].md) → [solución](solutions/practice-02-[desc].md)

---

## 📚 Referencias

- [Nombre](URL) — [Una línea de por qué vale la pena]
- *(URLs reales verificables)*

---

## ➡️ Siguiente paso

1. Revisa los [ejemplos](examples/)
2. Completa las [prácticas](practices/) → respuestas en [solutions/](solutions/) o [playground/](playground/)
3. Cuando termines, avísame en el chat para revisar juntos
```

---

## 2. Archivo de ejemplo (`examples/`)

Nomenclatura: `ejemplo-XX`, nunca `example-XX`. Título: `# Ejemplo [N] — ...`.

```markdown
# Ejemplo [N] — [Título descriptivo]

## Navegación

← [Progreso general](../../PROGRESS.md) · [Módulo](../README.md) · [Ejemplos](.) · [Prácticas](../practices/) · [Mis soluciones](../solutions/)

---

## ¿Qué problema resuelve este ejemplo?

[Contexto breve]

---

[Contenido del ejemplo con explicaciones; comentarios en español en el código]
```

---

## 3. Práctica (enunciado en `practices/`)

```markdown
# Práctica [N] — [Título descriptivo]

## Navegación

← [Progreso general](../../PROGRESS.md) · [Módulo](../README.md) · [Ejemplos](../examples/) · [Prácticas](.) · [Mi solución](../solutions/practice-[NN]-[desc].md)

---

## Objetivo

[Qué habilidad o concepto demuestra esta práctica]

---

## Prerrequisitos

- [Concepto(s) del README que debe haber leído]
- [Herramientas instaladas]

---

## Tiempo estimado

[~X minutos]

---

## Archivos involucrados

- [ruta relativa]

---

## Enunciado

[Contexto narrativo, restricciones, inputs/outputs esperados]

---

## Pasos

1. [Acción concreta] → [Resultado esperado verificable]
2. [Siguiente acción] → [Resultado esperado]

---

## Criterio de éxito

- [Criterio verificable 1]
- [Criterio verificable 2]

---

## Dónde entregar

| Tipo | Ubicación |
|------|-----------|
| Respuesta escrita | [solutions/practice-[NN]-[desc].md](../solutions/practice-[NN]-[desc].md) |
| Código | [playground/practice-[NN]/](../playground/practice-[NN]/) |

_(Incluir solo las filas que apliquen.)_

---

## Pistas _(opcional)_

[Máximo 2 pistas progresivas, no la solución.]
```

### Reglas para prácticas
1. **Nunca** incluir `## Mi solución` en el enunciado
2. Crear placeholder en `solutions/` con el mismo nombre
3. Si requiere código: crear `playground/practice-[NN]/` con archivos starter
4. Progresión: simple → complejo
5. Comentarios en **español** en cualquier código del enunciado

---

## 4. Solución placeholder (`solutions/`)

```markdown
# Solución — Práctica [N] — [Título]

## Navegación

← [Progreso general](../../PROGRESS.md) · [Módulo](../README.md) · [Enunciado](../practices/practice-[NN]-[desc].md) · [Prácticas](../practices/)

---

## Tu respuesta

_(Escribe aquí tu solución.)_
```

---

## 5. Playground (`playground/`)

Solo si diagnóstico = `codigo` o `mixto`.

### Estructura

```
01-[nombre-modulo]/playground/
├── README.md
├── practice-01/
│   └── [archivos starter]
└── practice-02/
    └── [archivos starter]
```

**No crear** `README.md` dentro de `practice-[NN]/` — la guía va en comentarios del código.

### playground/README.md

```markdown
# Playground — Módulo [N] — [Nombre]

## Navegación

← [Progreso general](../../PROGRESS.md) · [Módulo](../README.md) · [Prácticas](../practices/) · [Mis soluciones](../solutions/)

---

## Requisitos

[Dependencias mínimas]

## Instalación

```bash
[comandos]
```

## Cómo ejecutar

| Práctica | Comando |
|----------|---------|
| [Practice 01](../practices/practice-01-[desc].md) | `[comando]` |
| [Practice 02](../practices/practice-02-[desc].md) | `[comando]` |
```

### Archivos starter por práctica

Cada `playground/practice-[NN]/` contiene:
- Archivos mínimos para empezar (no solución completa)
- Comentarios en **español**, detallados
- **Sin** README local

Comentarios inline obligatorios en el entry point:
1. Encabezado: título + ruta al enunciado
2. Mapa del archivo
3. Por función/bloque: propósito del scaffolding
4. Cada TODO: qué implementar, por qué, cómo comprobar
5. Qué no modificar

Ejemplo (Python):
```python
# Práctica 01 — [Título]
# Enunciado: ../practices/practice-01-[desc].md
#
# Este archivo es tu punto de partida. No borres las funciones marcadas;
# completa solo los bloques TODO.

def solve():
    # TODO: [qué implementar]
    # Por qué: [vincula con el concepto del README]
    # Comprobar: [comando o salida esperada]
    pass

if __name__ == "__main__":
    solve()
```

### Configuración por stack

| Stack | Entry point | Run |
|-------|-------------|-----|
| Python | `main.py` | `python practice-01/main.py` |
| Node.js | `index.js` | `node practice-01/index.js` |
| TypeScript | `index.ts` | `npx tsx practice-01/index.ts` |
| HTML/CSS/JS | `index.html` | Abrir en navegador |
| SQL | `query.sql` | Según motor (SQLite, PostgreSQL) |
| Otros | Convencional del lenguaje | Según corresponda |
