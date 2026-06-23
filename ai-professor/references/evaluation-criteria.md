# Criterios de evaluación, XP, niveles y grados

## Estados de módulos

| Símbolo | Estado | Significado |
|---------|--------|-------------|
| 🔒 | Bloqueado | El módulo anterior no está completado |
| ⏳ | Pendiente | Desbloqueado, contenido no generado aún |
| 🔄 | En curso | Contenido generado, estudiante trabajando |
| ⚠️ | Requiere refuerzo | Evaluado, con puntos débiles identificados |
| ✅ | Completado | Evaluado y aprobado |

---

## Sistema de XP (Experiencia)

Cada acción del estudiante otorga XP que se acumula en PROGRESS.md.

### Tabla de XP por acción

| Acción | XP | Frecuencia |
|--------|-----|------------|
| Sesión de estudio completada | +10 | Por sesión |
| Práctica resuelta y aprobada | +25 | Por práctica |
| Módulo completado (todas las prácticas) | +100 | Por módulo |
| Bonus: todas las prácticas del módulo aprobadas | +50 | Por módulo |
| Punto débil superado | +30 | Por punto |
| Proyecto del módulo (si aplica) | +200 | Por proyecto |
| Todos los módulos completados | +500 | Una vez |

### Niveles

| Nivel | XP Requerida | Título |
|-------|-------------|--------|
| 1 | 0 | Iniciado |
| 2 | 100 | Aprendiz |
| 3 | 300 | Estudiante |
| 4 | 600 | Conocedor |
| 5 | 1000 | Competente |
| 6 | 1500 | Avanzado |
| 7 | 2100 | Experto |
| 8 | 2800 | Maestro |
| 9 | 3600 | Sabio |
| 10 | 4500 | Erudito |
| +1 | +500 por nivel | — |

Fórmula: `XP_nivel = 100 × n × (n - 1) / 2` para nivel n.

### Grados

El grado refleja el ratio de prácticas aprobadas sobre el total de prácticas del plan.

| Grado | Prácticas Aprobadas |
|-------|---------------------|
| S | ≥ 95% |
| A | 85–94% |
| B | 70–84% |
| C | 50–69% |
| D | < 50% |

Cálculo del grado: `(prácticas_aprobadas / prácticas_totales) × 100`.

---

## Criterios de evaluación de prácticas

### Aprobado ✅
El estudiante demuestra que:
- Comprende el concepto central de la práctica (no solo copió del ejemplo)
- Puede aplicar el concepto en el contexto pedido
- Sus explicaciones o soluciones son coherentes, aunque no perfectas

### Requiere refuerzo ⚠️
El estudiante muestra que:
- Hay uno o más conceptos del módulo que no quedaron claros
- Las soluciones son incorrectas en aspectos fundamentales (no en detalles menores)
- Hay confusión conceptual evidente entre dos o más ideas del módulo

### Evaluación híbrida (escritas + código)

| Tipo | Dónde leer | Qué evaluar |
|------|------------|-------------|
| Respuesta escrita | `solutions/practice-[NN]-[desc].md` | Comprensión conceptual, explicaciones, razonamiento |
| Código | `playground/practice-[NN]/` | Correctitud, estilo, cumplimiento de criterios de éxito del enunciado |
| Mixta | Ambas ubicaciones | Ambos criterios; la práctica no se aprueba si falla cualquiera de las partes requeridas |

### Criterio de "punto débil"
Registrar en PROGRESS.md cuando:
- Un concepto específico fue respondido incorrectamente en 2+ prácticas
- El estudiante mismo menciona que algo no le quedó claro
- Las respuestas muestran una confusión recurrente

---

## Formato de PROGRESS.md mejorado

El título visible (H1) debe ser `# Ruta de aprendizaje — [Tema]`. El nombre del archivo sigue siendo `PROGRESS.md`.

### Campos nuevos (vs versión Cursor original)

| Campo | Ubicación | Propósito |
|-------|-----------|-----------|
| Nivel | Metadata, línea 4 | Nivel actual del estudiante |
| XP total | Metadata, línea 4 | XP acumulado |
| Progreso a siguiente nivel | Metadata, línea 4 | `XP_actual / XP_siguiente_nivel` |
| Grado | Metadata, línea 4 | Letra S/A/B/C/D |
| Habilidades Adquiridas | Sección nueva | Conceptos que el estudiante ha demostrado dominar |
| Historial de Sesiones | Sección nueva | Registro de sesiones con XP |

### Ejemplo completo de PROGRESS.md

```markdown
# Ruta de aprendizaje — [Tema]

**Estudiante:** [nombre]
**Inicio:** [fecha]
**Última actividad:** [fecha]
**Nivel:** 2 | **XP:** 150/300 | **Grado:** B
**Tipo de prácticas:** [teóricas / código / mixto]

---

## 🎯 Progreso General

**Módulos completados:** 1 / 5
**Progreso total:** 20%

---

## 📚 Módulos

| # | Módulo | Estado | XP | Prácticas | Fecha |
|---|--------|--------|-----|-----------|-------|
| 01 | [nombre](01-nombre/README.md) | ✅ Completado | 175 | [2/2](01-nombre/practices/) | 2026-06-22 |
| 02 | [nombre](02-nombre/README.md) | 🔄 En curso | 25 | [1/3](02-nombre/practices/) | 2026-06-22 |

**Estados:** ⏳ Pendiente · 🔄 En curso · ✅ Completado · 🔒 Bloqueado · ⚠️ Requiere refuerzo

---

## 📝 Módulo Actual

**[Módulo 02 — [nombre]](02-nombre/README.md)**
- Estado: 🔄 En curso
- Prácticas entregadas: 1/3 — [ver prácticas](02-nombre/practices/) · [mis soluciones](02-nombre/solutions/)
- Playground: [02-nombre/playground/](02-nombre/playground/) _(omitir si no aplica)_

---

## 🧠 Habilidades Adquiridas

- [Concepto clave] — [fecha] — [+25 XP]
- [Concepto clave] — [fecha] — [+50 XP]

---

## 💡 Puntos Débiles Detectados

### [Fecha] — [Módulo 01 — nombre](01-nombre/README.md)
- **Concepto:** [nombre del concepto]
- **Observación:** [qué confundió al estudiante]
- **Recomendación:** [qué repasar o practicar]
- **Estado:** 🔴 Sin resolver / 🟡 En refuerzo / 🟢 Superado

---

## 📊 Historial de Sesiones

| Fecha | Duración | Módulo | XP Ganada |
|-------|----------|--------|-----------|
| 2026-06-22 | ~45 min | Módulo 01 | +25 |
| 2026-06-23 | ~30 min | Módulo 02 | +10 |

---

## 📋 Historial de Feedback

### [Módulo 01 — nombre](01-nombre/README.md) — [fecha]
**Veredicto:** ✅ Aprobado / ⚠️ Aprobado con puntos débiles

**Fortalezas:**
- [Lo que el estudiante hizo bien]

**Áreas de mejora:**
- [Lo que mejorar]

**Decisión de avance:** Avanzó a [Módulo 02](02-nombre/README.md) / Tomó refuerzo antes de avanzar
```

---

## Asignación de XP al evaluar

Al finalizar la FASE 4 (evaluación de prácticas), calcular:

```
XP_práctica = 25 (si aprobada)
XP_módulo = 100 (si todas aprobadas)
XP_bonus = 50 (si todas las prácticas del módulo fueron aprobadas)
XP_sesión = 10 (siempre)

Total = XP_práctica(s) + XP_módulo + XP_bonus + XP_sesión
```

Luego:
1. Sumar al `total_xp` en PROGRESS.md
2. Recalcular nivel con la tabla de niveles
3. Recalcular grado con ratio de prácticas aprobadas
4. Actualizar `Última actividad` y `Historial de Sesiones`

---

## Reglas de sincronización (opencode)

Al actualizar PROGRESS.md en evento de módulo completado, práctica evaluada o fin de sesión:

1. Escribir PROGRESS.md en la ruta local del proyecto
2. Hacer sync al respaldo global:
   - **PowerShell:** `Copy-Item -Path ".\PROGRESS.md" -Destination "$env:USERPROFILE\.opencode\learning\[tema-slug]\PROGRESS.md" -Force`
   - **Bash:** `cp "./PROGRESS.md" "$HOME/.opencode/learning/[tema-slug]/PROGRESS.md"`
3. No sync en operaciones de solo lectura (comandos /status, /xp, etc.)
