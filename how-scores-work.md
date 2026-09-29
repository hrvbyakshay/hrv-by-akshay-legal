# How your scores work

> **Wellness estimate only.** Ready, Stress, Energy, and Recovery are personal insight scores — not a medical device, not a diagnosis, and not medical advice.

**Want the deep technical write-up?**  
→ [Full stress & readiness algorithm (long)](stress-readiness-algorithm.html) — the complete design notes: latent states, freshness, fusion rules, and invariants.

---

## The four numbers on the home card

| Score | Plain meaning |
| --- | --- |
| **Ready** | How prepared your body looks for today — recovery vs load, sleep pressure, and alertness. |
| **Stress** | Strain / tension estimate. Built separately from Ready so you can be recovered but still feel loaded. |
| **Energy** | Immediate “fuel in the tank” feel — not the same as long-term recovery. |
| **Recovery** | How restored your autonomic / overnight picture looks relative to *your* usual. |

Small ↑ / ↓ next to a score is the change since the last engine update — not a clinical trend.

---

## What goes into them

The app blends several kinds of input when they exist:

* **Sleep** from Health Connect (or a manual night)
* **Finger or face check-ins** (HRV / resting pulse when you measure)
* **Workouts and steps**
* **Short self check-ins** (“how stressed?”, energy, etc.) when you answer them

You do **not** need every signal. Missing data usually means **lower confidence** or a smaller move — not an automatic bad score.

---

## A few rules that matter

1. **Personal, not population.** Scores are judged against *your* recent baseline when enough history exists.
2. **Freshness counts.** A reading from this morning weighs more than one from three days ago for “right now.”
3. **Workout ≠ stress.** Hard exercise can raise fatigue or dip recovery without being treated as psychological stress.
4. **Sleep and exercise linger.** Their effects can keep shaping scores after the event itself is “old.”
5. **Confidence is honest.** Thin or stale data shows up as weaker confidence, not fake certainty.

---

## What this is not

* Not clinically validated for diagnosis or treatment  
* Not a substitute for a clinician  
* Not a guarantee of how you will feel or perform  

Use the scores as a **personal wellness estimate**. If something feels off with your health, talk to a professional.

---

## Go deeper

If you want equations, state names, freshness half-lives, and the full design rationale (the long “PR-style” explanation):

**[Open the full algorithm document →](stress-readiness-algorithm.html)**

Questions or ideas: [hrvbyakshay@gmail.com](mailto:hrvbyakshay@gmail.com)
