# Changelog

Todos los cambios notables de este repositorio se documentan en este archivo.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) e incluye qué skills se ven afectadas en cada release.

## [0.3.0] - 2026-06-22

### Added

- ai-professor: sistema de **XP/experiencia** por módulos (+100), prácticas (+25), bonus (+50), sesiones (+10) y puntos débiles superados (+30)
- ai-professor: **6 comandos interactivos** — `/status`, `/xp`, `/review`, `/grade`, `/history`, `/practice` (disponibles en cualquier momento)
- ai-professor: **niveles** (1–10+) y **grados académicos** (S/A/B/C/D) calculados automáticamente desde PROGRESS.md
- ai-professor: sección `Historial de Sesiones` en PROGRESS.md con tracking de XP por sesión
- ai-professor: sección `Habilidades Adquiridas` en PROGRESS.md
- ai-professor: **sincronización híbrida** — PROGRESS.md local + respaldo automático en `~/.opencode/learning/` en cada evento de escritura
- ai-professor: references `evaluation-criteria.md` (XP tables, niveles, grados, criterios, formato PROGRESS)
- ai-professor: references `interactive-questions.md` adaptado a tool `question()` de opencode
- ai-professor: references `content-templates.md` (fusión de readme-template + practice-template + playground-template)

### Changed

- ai-professor: `AskQuestion` → tool **`question()`** de opencode (API con `label`/`description` en lugar de `id`/`label`)
- ai-professor: flujo completo reestructurado en **6 fases** (FASE 0–5 originales + FASE 6 de comandos)
- ai-professor: mensajes de bienvenida y anuncio ahora mencionan XP y comandos disponibles
- ai-professor: plantillas fusionadas: `readme-template.md` + `practice-template.md` + `playground-template.md` → `content-templates.md`
- ai-professor: `progress-states.md` absorbido en `evaluation-criteria.md`
- repo: README actualizado con instalación para opencode y tabla de diferencias vs Cursor

### Removed

- ai-professor: `references/readme-template.md` (contenido migrado a `content-templates.md`)
- ai-professor: `references/practice-template.md` (contenido migrado a `content-templates.md`)
- ai-professor: `references/playground-template.md` (contenido migrado a `content-templates.md`)
- ai-professor: `references/progress-states.md` (contenido migrado a `evaluation-criteria.md`)

**Skills:** ai-professor

## [0.2.0] - 2026-05-23

### Added

- ai-professor: flujo `AskQuestion` interactivo (diagnóstico, retorno de sesión, validación de ruta de aprendizaje, refuerzo A/B, verificación de comprensión)
- ai-professor: references `interactive-questions`, `navigation-conventions`, `playground-template`, `practice-template`, `welcome-messages`
- ai-professor: estructura `solutions/` y `playground/` por módulo; placeholders de solución separados del enunciado
- ai-professor: pregunta de nombre del estudiante (`student_name`) al inicio del diagnóstico
- ai-professor: nomenclatura `ejemplo-XX` para archivos y títulos de ejemplos

### Changed

- ai-professor: mensajes de bienvenida conversacionales; saludo separado de preguntas interactivas
- ai-professor: enlaces relativos cruzados entre README, examples, practices, solutions, playground y PROGRESS.md
- ai-professor: título visible de PROGRESS.md pasa de `PROGRESS —` a `Ruta de aprendizaje — [Tema]`
- ai-professor: terminología currículo reemplazada por ruta de aprendizaje / aprendizaje
- ai-professor: ejemplos visibles en español (`Ejemplo`, no `Example`)
- repo: README actualizado con estructura de references e interactividad AskQuestion

**Skills:** ai-professor

## [0.1.0] - 2026-05-23

### Added

- ai-professor: skill inicial con módulos estructurados, PROGRESS.md, readme-template y progress-states
- repo: README de instalación y licencia MIT

**Skills:** ai-professor
