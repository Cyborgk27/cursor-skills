# Preguntas interactivas (question tool)

Toda decisión del estudiante debe presentarse con la herramienta **`question()`** de opencode, no como párrafo con opciones en el chat.

## API del tool question()

```json
{
  "questions": [{
    "question": "Texto de la pregunta",
    "header": "Etiqueta corta (max 30 chars)",
    "options": [
      { "label": "Opción visible", "description": "Explicación breve" }
    ],
    "multiple": false
  }]
}
```

- Retorna `string[]` con las etiquetas seleccionadas
- Si `multiple: false` (default), retorna un solo elemento
- Una pregunta por llamada
- El `custom` mode añade automáticamente "Type your own answer"

## Reglas obligatorias

1. **Usar `question()`** para elegir, confirmar o priorizar — diagnóstico, retorno de sesión, validar ruta de aprendizaje, plan del módulo, refuerzo vs avanzar, verificación de comprensión
2. **Una pregunta por llamada** — el array `questions` tiene un solo elemento
3. **Esperar** la respuesta antes de la siguiente pregunta; nunca encadenar el diagnóstico en un solo mensaje
4. Incluir en el `question` la recomendación del profesor cuando aplique
5. Marcar la opción recomendada como **primera opción** o con sufijo `(recomendado)` en `label`
6. La `description` debe ser informativa pero concisa — explica por qué elegir esa opción
7. Si el usuario ya mencionó el tema, **no repetirlo en texto** — confirmar con `question()` o pasar directo

## Fallback

Si `question()` no está disponible:
- Preguntar en texto listando las **mismas opciones numeradas**
- Mantener una pregunta por mensaje
- Indicar cuál es la recomendada

## Persistencia

Tras cada respuesta, guardar en contexto la etiqueta elegida. Al crear `PROGRESS.md`, anotar en metadatos: objetivo, nivel previo, estilo, tipo de prácticas.

---

## Plantillas por fase

### FASE 0 — Retorno de sesión

| Campo | Valor |
|-------|-------|
| `header` | Retomar sesión |
| `question` | ¿Qué quieres hacer hoy? |

Opciones:
| label | description |
|-------|-------------|
| Continuar módulo actual (recomendado) | Seguir con el contenido donde lo dejaste |
| Revisar prácticas pendientes | Entregar soluciones para evaluación |
| Repasar un concepto | Pedir explicación de un punto específico |
| Cambiar de tema | Empezar una nueva ruta de aprendizaje |

---

### FASE 1 — Diagnóstico (una question() por pregunta)

#### 0. Nombre (`student_name`) — solo estudiante nuevo sin nombre conocido

Preguntar **antes** del tema, justo después del saludo de bienvenida.

| Campo | Valor |
|-------|-------|
| `header` | Diagnóstico — tu nombre |
| `question` | ¿Cómo te llamo? Lo usaré en PROGRESS.md y para personalizar tu aprendizaje. |

Opciones:
| label | description |
|-------|-------------|
| Escribiré mi nombre en el chat | Lo escribiré en el siguiente mensaje |
| Prefiero no decirlo | Llámame Estudiante |

Si elige la primera, esperar el nombre en el siguiente mensaje. Si elige la segunda, usar "Estudiante".

#### 1. Tema (`learning_topic`)

Si **no** mencionó tema:
| label | description |
|-------|-------------|
| Escribiré el tema en el chat (recomendado) | Lo escribiré en el siguiente mensaje |

Si **ya** mencionó tema:
| label | description |
|-------|-------------|
| Sí, ese tema (recomendado) | Confirmar y seguir con el diagnóstico |
| Precisar mejor | Quiero refinar el tema |
| Otro tema | Cambiar a un tema diferente |

#### 2. Propósito (`learning_goal`)

| label | description |
|-------|-------------|
| Proyecto personal (recomendado) | Quiero construir algo con este conocimiento |
| Curiosidad técnica | Quiero entender cómo funciona |
| Preparación para entrevistas | Estudio para un proceso de selección |
| Uso profesional | Lo necesito para mi trabajo actual |
| Crecimiento de carrera | Quiero especializarme para futuro |

#### 3. Nivel previo (`prior_knowledge`)

| label | description |
|-------|-------------|
| No sé nada del tema | Concepto completamente nuevo |
| Conceptos básicos | He leído algo pero no he practicado |
| Experiencia parcial | He trabajado con esto pero tengo lagunas |
| Avanzado en partes | Domino algunas áreas, otras no |
| Lo explico en el chat | Describiré mi nivel con más detalle |

Si elige "Experiencia parcial" o "Avanzado en partes": hacer `question()` follow-up con `multiple: true` para que marque qué áreas conoce.

#### 4. Prioridades (`must_learn`)

| label | description |
|-------|-------------|
| Todo, desde cero (recomendado) | Déjame explorar sin sesgos |
| Tengo prioridades específicas | Quiero enfocarme en áreas concretas |

Si elige prioridades: segunda `question()` con `multiple: true` y opciones adaptadas al tema.

#### 5. Estilo de aprendizaje (`learning_style`)

| label | description |
|-------|-------------|
| Ejemplos primero (recomendado) | Muéstrame código/casos y luego la teoría |
| Teoría primero | Explicame los conceptos y luego los ejemplos |
| Mezclado | Alterna teoría y ejemplos |

#### 6. Tipo de prácticas (`practice_type`)

| label | description |
|-------|-------------|
| Código | Prefiero ejercicios de programación |
| Teóricas | Prefiero preguntas conceptuales y escritas |
| Mixto (recomendado) | Combinación de ambas |

Mapeo: `Código` → `codigo`, `Teóricas` → `teorico`, `Mixto` → `mixto`

---

### FASE 2 — Validar ruta de aprendizaje

| Campo | Valor |
|-------|-------|
| `header` | Validar aprendizaje |
| `question` | ¿Esta ruta de aprendizaje te funciona? |

Opciones:
| label | description |
|-------|-------------|
| Aprobado, empecemos (recomendado) | La ruta se ve bien, crea la estructura |
| Ajustar módulos | Quiero reorganizar el orden o contenido |
| Añadir un tema específico | Falta cubrir algo que mencioné en prioridades |
| Replantear la ruta | Prefiero un enfoque diferente |

No avanzar a creación de estructura hasta recibir `Aprobado, empecemos`.

---

### FASE 3.0 — Plan del módulo (antes de generar contenido)

Presentar en el chat un **resumen estructurado** y luego invocar `question()`. **No escribir** README, examples, practices ni playground hasta recibir respuesta.

Contenido del resumen (visible antes de la pregunta):
- Objetivo del módulo (una línea)
- Secciones previstas del README (lista)
- Número y títulos tentativos de ejemplos
- Número de prácticas con título y tipo
- Archivos previstos en playground por práctica de código

| Campo | Valor |
|-------|-------|
| `header` | Plan del módulo [N] |
| `question` | ¿Apruebas este plan antes de que genere los archivos? |

Opciones:
| label | description |
|-------|-------------|
| Aprobado, genéralo (recomendado) | El plan se ve bien, adelante |
| Ajustar el README | Quiero cambios en la estructura del contenido |
| Ajustar las prácticas | Quiero cambios en los ejercicios |
| Ajustar los ejemplos | Quiero otros ejemplos o más variedad |

Si elige ajustar: iterar el resumen y volver a preguntar hasta `Aprobado, genéralo`.

---

### FASE 4 — Puntos débiles

| Campo | Valor |
|-------|-------|
| `header` | ¿Cómo seguir? |
| `question` | Noté dificultades en: [lista de conceptos]. ¿Cómo prefieres continuar? |

Opciones:
| label | description |
|-------|-------------|
| Reforzar estos puntos (recomendado) | Genera ejercicios adicionales para practicar |
| Avanzar al siguiente módulo | Seguir adelante, ya reforzaré después |

Si elige reforzar: generar prácticas adicionales, evaluarlas, y luego avanzar.
Si elige avanzar: registrar en PROGRESS.md como puntos débiles sin resolver y generar el siguiente módulo.

---

### Verificación de comprensión

Después de explicar algo complejo:

| Campo | Valor |
|-------|-------|
| `header` | ¿Quedó claro? |
| `question` | ¿Quedó claro [concepto]? ¿Necesitas algo más? |

Opciones:
| label | description |
|-------|-------------|
| Entendido, sigue adelante | Pasó la explicación, continuar |
| Otro ejemplo, por favor | Quiero ver un caso diferente |
| Otra explicación | La forma en que lo explicaste no me queda clara |
| Tengo una duda | Quiero preguntar algo específico |

---

## Prohibiciones

- **No** listar opciones solo en prosa si `question()` está disponible
- **No** hacer varias preguntas de diagnóstico en un solo mensaje
- **No** simular opciones clicables con bloques de código — invocar la herramienta
