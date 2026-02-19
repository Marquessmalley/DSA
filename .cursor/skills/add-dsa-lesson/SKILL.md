---
name: add-dsa-lesson
description: Add a new lesson to the DSA course. Use when the user wants to add, create, or implement a new lesson in a phase, or references course-roadmap.md to build the next lesson.
---

# Add DSA Lesson

## Workflow

1. **Identify the lesson** — Get the phase number, lesson number, and title from `course-roadmap.md`.
2. **Create the lesson folder** — `phase-{n}/lesson-{number-word}/` (e.g. `lesson-ten`).
3. **Create the markdown file** — `{topic-slug}.md` (kebab-case, e.g. `stacks-lifo.md`).
4. **Create the LeetCode challenge** — `leetcode-challenge.py` in the same folder.Do not write coded solution.
5. **Update the phase index.html** — Add a drawer link AND an `<article>` section.
6. **Update other phase index.html drawers** — Add the new lesson link to the drawer nav in every other phase's `index.html` so cross-phase navigation stays in sync.
7. **Update the main index.html** — If the phase is new, add it to the landing page drawer and roadmap.

## Step 1: Lesson folder

Folder names use the spelled-out number:

| Lesson | Folder name     |
| ------ | --------------- |
| 10     | `lesson-ten`    |
| 11     | `lesson-eleven` |
| 12     | `lesson-twelve` |

## Step 2: Markdown file

Follow this structure (reference `phase-2/lesson-eight/linked-list.md`):

```markdown
# Phase {N} – Lesson {X}: {Title}

> {One-line hook or insight}

---

## 1. {First concept}

{Explanation with code blocks, lists, and analogies}

---

## 2. {Second concept}

...

---

## {Last number}. Key Takeaway

{Highlight box content}
```

Rules:

- Sections are numbered: `## 1. Title`, `## 2. Title`, etc.
- Use fenced Python code blocks with no HTML.
- Include a blockquote hook after the title.
- End with a "Key Takeaway" section.

## Step 3: LeetCode challenge file

Follow the pattern in `phase-2/lesson-nine/leetcode-challenge.py`:

```python
"""
Problem: {Problem Title}

Problem Statement:
    {Description}

Function Signature:
    def {function_name}({params}) -> {return_type}

Example:
    {Example input/output}

Key Insight:
    {One-line insight}

Expected Complexity:
    Time: O(?)
    Space: O(?)
"""


# Any helper classes (e.g. Node)


# Function Signature
def function_name(params):
    pass


# Test setup and calls
print(function_name(test_input))
```

## Step 4: Phase index.html

### Drawer link

Add inside the correct `.drawer-links` div for the phase:

```html
<a href="#lesson-{X}" class="drawer-link">Lesson {X}: {Short Title}</a>
```

### Article section

Add after the last `</article>` in `<main>`. Alternate `class="lesson"` and `class="lesson lesson-alt"` based on the previous lesson.

```html
<article id="lesson-{X}" data-lesson-section class="lesson">
  <div class="lesson-header">
    <span class="lesson-number">{XX}</span>
    <h3 class="lesson-title">{Title}</h3>
    <p class="lesson-subtitle">{Subtitle}</p>
  </div>

  <blockquote class="lesson-intro fade-in">{Hook quote}</blockquote>

  <div class="content-block fade-in">
    <h4>1. {Section Title}</h4>
    <!-- Content using: core-idea, teaches-list, code-block, analogy-box,
         comparison-table, big-o-reveal, highlight-box, practice-problem -->
  </div>

  <!-- More content-block sections... -->

  <div class="where-we-are fade-in">
    <h4>Where We Are Now</h4>
    <p>You now understand:</p>
    <ul>
      <li>{Learning outcome 1}</li>
      <li>{Learning outcome 2}</li>
    </ul>
  </div>

  <div class="what-next fade-in">
    <h4>What Comes Next</h4>
    <p><strong>Lesson {X+1}: {Next Title}.</strong> {Teaser}</p>
  </div>
</article>
```

### Lesson number format

Zero-padded two digits: `01`, `02`, ... `09`, `10`, `11`.

### CSS class reference for content

| Class              | Usage                                                     |
| ------------------ | --------------------------------------------------------- |
| `core-idea`        | Highlighted concept box                                   |
| `teaches-list`     | Arrow-bulleted list (use `<span class="bullet">→</span>`) |
| `code-block`       | `<pre class="code-block"><code>...</code></pre>`          |
| `big-o-reveal`     | Big-O callout with `.big-o` and `.label` spans            |
| `highlight-box`    | Key takeaway box                                          |
| `comparison-table` | Wraps a `<table>`                                         |
| `practice-problem` | LeetCode-style problem with `.problem-section` divs       |
| `analogy-box`      | Real-world analogy with icon                              |
| `insight`          | `<blockquote class="insight">` for key insights           |

### Syntax highlighting spans for code

Use these classes inside `<code>`: `keyword`, `function`, `number`, `string`, `comment`.

## Step 5: Cross-phase drawer sync

Every phase `index.html` has a full drawer with links to all phases. When adding a lesson, update the drawer in **every** phase's `index.html` (and the main `index.html` if applicable) so the new lesson appears in navigation everywhere.

## Step 6: New phase setup

If the lesson belongs to a phase that doesn't exist yet:

1. Create `phase-{n}/` directory.
2. Create `phase-{n}/index.html` — copy structure from an existing phase index, update phase badge/title/description/topics.
3. Update every existing phase's `index.html` drawer to include the new phase section.
4. Update `index.html` landing page drawer and roadmap if needed.

## Checklist

Copy and track:

```
- [ ] Lesson identified from course-roadmap.md
- [ ] Folder created: phase-{n}/lesson-{word}/
- [ ] Markdown file created: {topic-slug}.md
- [ ] LeetCode challenge created: leetcode-challenge.py
- [ ] Phase index.html updated (drawer link + article)
- [ ] Other phase index.html drawers updated
- [ ] Main index.html updated (if new phase)
```
