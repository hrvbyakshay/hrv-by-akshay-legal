# How your scores work

> **Wellness estimate only.** Ready, Stress, Energy, and Recovery are personal insight scores — not a medical device, not a diagnosis, and not medical advice.

**Want the deep technical write-up?**  
→ [Full stress & readiness algorithm (long)](stress-readiness-algorithm.html) — latent states, freshness math, fusion rules, and invariants.

---

## The four numbers on the home card

| Score | Plain meaning |
| --- | --- |
| **Ready** | How prepared your body looks for today — recovery vs load, sleep pressure, and circadian alertness. |
| **Stress** | Strain / tension estimate. Built separately from Ready so you can be recovered but still feel loaded. |
| **Energy** | Immediate “fuel in the tank” — shaped by sleep debt, time of day (circadian rhythm), and recent strain. |
| **Recovery** | How restored your autonomic / overnight picture looks relative to *your* usual. |

Small ↑ / ↓ next to a score is the change since the last engine update — not a clinical trend.

---

## What the engine actually blends

When the data exists, scores are built from several layers — not a single “HRV = ready” formula:

### Autonomic signals
* **Heart-rate variability (HRV)** from finger or overnight sources — compared to *your* baseline, not a population chart
* **Resting / overnight heart rate** — elevated vs usual can soften recovery; context matters (post-workout readings are gated)
* **Measurement quality & context** — resting vs after exercise is treated differently on purpose

### Sleep & body clock
* **Last night’s sleep** (duration, and stages when Health Connect provides them)
* **Sleep pressure** — how much “sleep debt” is still hanging over today
* **Circadian rhythm / alertness** — time-of-day and wake timing so Energy and Ready can diverge (you can be recovered but still low-energy at the wrong clock hour)

### Load & movement
* **Workouts** — raise physical fatigue / training load; they do **not** get dumped straight into psychological Stress
* **Steps / daily activity** — lighter day context when available

### Your voice
* **Short check-ins** (stress, energy, recovery feel) when you answer them — they nudge the matching state without wiping physiology

You do **not** need every signal. Missing pieces usually mean **lower confidence** or a smaller move — not an automatic bad score.

---

## How the pieces talk to each other (simplified)

Internally the app keeps a few **evolving states** (recovery, fatigue, sleep pressure, circadian alertness, stress, energy, and more). Each new observation updates only the states it is relevant to.

Rough intuition:

1. **Normalize** the reading against your personal usual (HRV, HR, sleep, load).
2. **Ask how fresh it is** — this morning’s resting HR weighs more on “right now” than a reading from three days ago.
3. **Apply context gates** — e.g. exercise-related autonomic activation is not blindly labeled as Stress.
4. **Let overnight and workouts linger** — their effects can keep shaping scores after the event itself is “old.”
5. **Derive the four cards** from those states: Ready mixes recovery + fatigue + sleep pressure + alertness; Stress stays its own track; Energy leans on circadian + sleep pressure + recent strain; Recovery tracks the autonomic overnight picture.

That is why Ready and Energy can disagree, and why a hard session can drop Recovery without spiking Stress.

---

## A few rules that matter

1. **Personal, not population.** Scores are judged against *your* recent baseline when enough history exists.
2. **Freshness counts.** Newer, better-context readings move the needle more.
3. **Workout ≠ stress.** Hard exercise can raise fatigue or dip recovery without being treated as psychological stress.
4. **Circadian is real.** Clock hour and wake timing can change Energy / Ready even when overnight recovery looks fine.
5. **Heart rate and HRV are relatives.** Absolute ms or bpm matter less than how they sit vs *your* usual, and when they were taken.
6. **Confidence is honest.** Thin or stale data shows up as weaker confidence, not fake certainty.

---

## What this is not

* Not clinically validated for diagnosis or treatment  
* Not a substitute for a clinician  
* Not a guarantee of how you will feel or perform  

Use the scores as a **personal wellness estimate**. If something feels off with your health, talk to a professional.

---

## Go deeper

If you want equations, state names, freshness half-lives, circadian / sleep-regulation notes, and the full design rationale:

**[Open the full algorithm document →](stress-readiness-algorithm.html)**

Questions or ideas: [hrvbyakshay@gmail.com](mailto:hrvbyakshay@gmail.com)
