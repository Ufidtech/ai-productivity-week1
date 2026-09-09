# Live Demo Script — Week 1

> **⚠️ Read this first — Copilot access changed in April 2026**
> Microsoft moved in-app Copilot (the button inside Word/Excel) behind a
> **paid** Microsoft 365 Copilot license. Free-tier accounts — including
> most student accounts — no longer get Copilot inside the Word/Excel
> ribbon. Free **Copilot Chat** (a separate chat window, at
> [copilot.microsoft.com](https://copilot.microsoft.com) or the Copilot
> Chat app) is still free for students. **This script uses Copilot Chat +
> copy/paste for Word and Excel**, so it works for you and for every
> attendee, regardless of whether anyone has a paid license. If you *do*
> have a paid Microsoft 365 Copilot license active, feel free to use the
> in-ribbon buttons instead — same prompts, more seamless demo.

Three demos, matching the "What we'll build, live" slide. Each one has a
real file to open — no improvising, no theoretical talk. Test each once
before the session with your own Copilot access.

---

## Demo 1 — Draft in Word (~8 min)

**Files:** [`word/outline-raw-notes.docx`](./word/outline-raw-notes.docx) +
Copilot Chat (copilot.microsoft.com, or the app) open side-by-side.

This is deliberately messy — lowercase, no structure, typos left in. That's
the point: show Copilot turning real rough notes into something usable.

**Steps:**
1. Open the notes file in Word. Open Copilot Chat in a second window/tab.
2. Copy the notes text and paste it into Copilot Chat with this prompt:
   > "Turn these notes into a one-page proposal to a university department,
   > with a clear intro, problem, plan, and ask, in a confident but
   > respectful tone: [paste notes]"
3. Copilot Chat returns the drafted text. Paste it into Word and show the
   before/after side by side.
4. Point out what it inferred (structure, headings) vs. what's still the
   student's own content.
5. **Talking point:** ask a follow-up prompt live — "Make the ask section
   more specific" — to show iteration, not just one-shot magic.
6. **If you do have a paid Microsoft 365 Copilot license:** skip the
   copy/paste and use the Copilot button inside Word directly — same
   prompt, shown natively in the document.

**Fallback if Copilot Chat is slow/unavailable:** run the prompt yourself
ahead of time and keep a saved "before/after" pair ready to show instead.

---

## Demo 2 — Analyze in Excel (~8 min)

**Files:** [`excel/event-data.xlsx`](./excel/event-data.xlsx) + Copilot
Chat open side-by-side.

20 rows of realistic tech-club event data (RSVPs, attendees, budget,
feedback score). No formulas yet.

**Steps:**
1. Open the file in Excel. Open Copilot Chat in a second window/tab.
2. In Copilot Chat, describe the columns and ask:
   > "I have event data with columns Event Date, Event Name, Category,
   > RSVPs, Attendees, Budget, and Feedback Score. Which category had the
   > best average feedback score? Give me the Excel formula to calculate
   > that, and explain it."
3. Type the formula it gives you (likely `AVERAGEIFS`) into a cell in
   Excel and show it calculate live.
4. Ask a follow-up: "What chart would best show attendance trend over
   time?" — then build that chart in Excel yourself using its suggestion.
5. **Talking point:** show the formula in the formula bar — "it's not just
   answering, it's giving you something you can inspect and reuse."
6. **If you do have a paid Microsoft 365 Copilot license:** select the
   data range and use the in-ribbon Copilot button directly — it can
   generate the formula and chart in place.

**Fallback:** if formula generation misfires, ask Copilot Chat to explain
a simpler formula instead (e.g. a plain `AVERAGE`) — still a strong demo
moment about verifying AI output before trusting it.

---

## Demo 3 — Code with GitHub Copilot (~10 min)

**Files:** [`../starter-project/`](../starter-project/)

**Steps:**
1. Open `starter-project/` in VS Code, Copilot extension signed in.
2. Open `app.js`, scroll to the `TODO` list at the bottom.
3. Pick **one** item — recommended for live demo: the delete button (fast,
   visual, satisfying payoff).
4. Type a comment describing the feature and let inline suggestions appear:
   ```js
   // add a delete button next to each task that removes it from the list
   ```
   Accept suggestions with Tab as they appear.
5. Open Copilot Chat and prompt:
   > "Add a delete button to each task in this list, for a plain JS app,
   > keeping the existing style, in a way that's easy to read."
6. Refresh `index.html` in the browser and click delete — show it working.

**Fallback:** if a suggestion goes sideways, that's a real teaching moment —
show how you'd prompt Copilot to fix or explain its own output.

---

## Timing recap (fits inside the 90-min session)

| Segment | Minutes |
|---|---|
| Demo 1 — Word | ~8 |
| Demo 2 — Excel | ~8 |
| Demo 3 — GitHub Copilot | ~10 |
| **Total live demo block** | **~26** |

Leaves room for the earlier slides (~25 min), the hands-on challenge
(~20 min), and intro/wrap-up (~15 min) inside 90 minutes.
