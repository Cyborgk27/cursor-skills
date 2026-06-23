# cursor-skills — Adaptado para opencode

Colección de Agent Skills para **opencode** que amplían las capacidades del asistente con flujos especializados de aprendizaje estructurado.

Originalmente diseñado para Cursor, este repositorio fue readaptado para el ecosistema opencode con mejoras significativas en tracking de progreso, sistema de experiencia (XP) y comandos interactivos.

## Skills incluidas

### ai-professor

Convierte al agente en un **profesor de élite** que enseña cualquier tema mediante módulos estructurados, ejemplos detallados, prácticas evaluadas y seguimiento de progreso con **XP, niveles y grados** en `PROGRESS.md`.

**Novedades respecto a la versión Cursor original:**
- Sistema de **XP/experiencia** por módulos, prácticas y sesiones
- **6 comandos interactivos**: `/status`, `/xp`, `/review`, `/grade`, `/history`, `/practice`
- **Niveles y grados** (S/A/B/C/D) calculados automáticamente
- **Sincronización híbrida**: PROGRESS.md local + respaldo en `~/.opencode/learning/`
- Tool `question()` de opencode para diagnóstico interactivo

**Cuándo se activa:**
- Cuando expresas intención de aprender: "Quiero aprender [tema]", "Enséñame [tema]", "Sé mi profesor", "Crea una ruta de aprendizaje para [tema]", "Arma los módulos para aprender [tema]", "Quiero estudiar [tema]", "ai-professor"
- Cuando usas comandos: `/status`, `/xp`, `/review`, `/grade`, `/history`, `/practice`
- Cuando pides continuar un módulo, entregar una práctica o feedback de avance

---

## Instalación en opencode

### 1. Clonar el repositorio

```bash
git clone https://github.com/alenj0x1/cursor-skills.git
```

### 2. Copiar la skill a opencode

Copia la carpeta `ai-professor/` a la ubicación de skills de opencode:

**Windows (PowerShell):**
```powershell
Copy-Item -Recurse .\cursor-skills\ai-professor $env:USERPROFILE\.agents\skills\ai-professor
```

**macOS/Linux:**
```bash
cp -r cursor-skills/ai-professor ~/.agents/skills/ai-professor
```

### 3. Verificar

La estructura final debe quedar así:

```
~/.agents/skills/ai-professor/
├── SKILL.md
└── references/
    ├── interactive-questions.md
    ├── evaluation-criteria.md
    ├── content-templates.md
    ├── navigation-conventions.md
    ├── content-quality-checklist.md
    └── welcome-messages.md
```

### 4. Usar en opencode

Escribe en el chat de opencode cualquiera de las frases de activación, o un comando como `/status` una vez que hayas iniciado una ruta de aprendizaje.

### Instalación global del respaldo (opcional)

Para que la sincronización híbrida funcione, crea la carpeta global:

```powershell
# Windows
New-Item -ItemType Directory -Path "$env:USERPROFILE\.opencode\learning" -Force
```

```bash
# macOS/Linux
mkdir -p ~/.opencode/learning
```

---

## Estructura del repositorio

```
cursor-skills/
├── .cursor/
│   └── rules/
│       └── conventional-commits.mdc
├── ai-professor/
│   ├── SKILL.md
│   └── references/
│       ├── interactive-questions.md
│       ├── evaluation-criteria.md
│       ├── content-templates.md
│       ├── navigation-conventions.md
│       ├── content-quality-checklist.md
│       └── welcome-messages.md
├── CHANGELOG.md
├── LICENSE
└── README.md
```

---

## Historial de adaptación

| Versión | Cambio |
|---------|--------|
| 0.3.0 | Adaptación a opencode: XP/niveles/grados, 6 comandos, sync híbrido, fusion de templates, question() tool |
| 0.2.0 | Versión Cursor con AskQuestion interactivo y 8 referencias |
| 0.1.0 | Versión Cursor inicial |

Ver [CHANGELOG.md](CHANGELOG.md) para detalle completo.

---

## Licencia

[MIT](LICENSE)

