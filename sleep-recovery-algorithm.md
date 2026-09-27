# Overnight Recovery Score — Expanded Algorithm

> **Disclaimer — not a scientific or medical claim.**
> This page describes a **wellness estimate** for personal insight. It is **not** a clinically validated algorithm, **not** a medical device, and **not** a diagnosis. It must not be used to make medical decisions. It is separate from the [Stress & Readiness](stress-readiness-algorithm.html) engine.

## 1. Purpose

The Overnight Recovery Score is a 0–100 wellness estimate answering:

**“After yesterday’s load, how restored does last night look?”**

The algorithm is designed to be primarily driven by the most recent recorded sleep period.

It uses the following principles:

1. The night itself should determine most of the score.
2. Previous-day activity should provide context, not dominate the result.
3. Personal history should gradually become more important as enough data accumulate.
4. Missing data must not automatically become negative data.
5. The same physiological event should not be penalized multiple times.
6. A small change in the user's recent behavior should be capable of producing a small change in the score without causing large swings.
7. The score is an estimate for wellness and personal insight, not a clinically validated measurement.

---

# 2. Select the Sleep Period

Use the most recent valid sleep period available in Health Connect.

Check today's recorded data first. If no valid sleep period exists for today, check yesterday.

The date changing at midnight or noon must not invalidate a sleep period that belongs to the previous night.

Use the actual recorded values for:

* sleep duration
* bedtime
* wake time
* awake periods
* awakenings
* deep sleep
* REM sleep
* light sleep
* sleeping heart rate
* other available overnight physiological signals

Never create a value simply because a metric is missing.

A nap does not rewrite this night. Naps belong to the separate readiness engine as something that happens after the night.

---

# 3. Overall Architecture

The algorithm has three layers.

### Layer 1 — Night Quality

First calculate how good the recorded sleep itself looks.

Use:

* Sleep duration
* Sleep stages
* Sleep continuity
* Sleep efficiency
* Sleeping heart rate

These are the existing core components.

### Layer 2 — Recent Recovery Context

Then consider whether the person entered the night with additional recovery demand based on:

* Recent sleep debt
* Yesterday's unusual activity
* Yesterday's unusually high training load
* Recent autonomic state
* Recent sleep consistency

These factors should modify the night score only slightly.

### Layer 3 — Confidence and Stability

Finally determine:

* How much data support the score
* Whether the current result is consistent with recent nights
* Whether a change is large enough to be meaningful

Confidence affects how the result is presented and how aggressively the algorithm allows the score to move. It does not turn missing data into bad sleep.

---

# 4. Existing Night Score

Keep the current night-score structure as the foundation.

When sleeping heart rate is available:

* Duration: 30%
* Restorative stages: 25%
* Continuity: 20%
* Efficiency: 15%
* Sleeping heart rate: 10%

When sleeping heart rate is unavailable, remove its weight and renormalize the remaining components: duration 34%, stages 28%, continuity 22%, efficiency 16%.

A missing component is not automatically a zero.

A missing metric means:

**“We do not know.”**

A recorded zero means:

**“The source explicitly reported zero.”**

This distinction must remain throughout the engine.

A night longer than 18 hours, or a stage total more than 15% above time asleep, is treated as bad data. The impossible part is ignored. The rest of the night is still scored.

---

# 5. Sleep Duration

Calculate duration from actual time asleep.

Do not confuse time asleep with time in bed.

The duration curve is smooth. Crossing 7.00 hours does not jump the score.

* From 7 to 9 hours, duration is 100.
* Under 7 hours, the score is `100 × e^(−0.48 × hours short of 7)`. A 6-hour night is about 62. A 4-hour night is under 30. Short sleep still matters a lot.
* Over 9 hours, the score eases toward 82 and stops falling: `82 + 18 × e^(−extra hours / 2.5)`. A 12-hour night stays above 80. Extra sleep is not treated as poor sleep.

---

# 6. Sleep Architecture

Deep and REM are scored when they were recorded. Light sleep is shown and is not an extra plus or minus.

* Missing deep sleep is not zero deep sleep.
* Missing REM sleep is not zero REM sleep.
* A recorded zero remains a real zero.
* If only one of deep or REM was recorded, only that one is scored.
* If neither was recorded, the stage part stays at a neutral 70, even if light sleep is present.

Textbook bands still exist (deep about 13–23%, REM about 20–25%). When at least five earlier nights have that stage, the person's own median share also counts. A night inside about 4 points of that usual share scores as a normal stage night. The better of “usual for you” and “inside the textbook band” is used, so a personal pattern is not punished for missing a textbook percentage.

The stage result is then pulled 40% of the way back toward 70. One odd deep or REM reading can soften the night. It cannot by itself turn an otherwise normal night into a very poor one.

---

# 7. Sleep Continuity

Awake minutes are the main fragmentation signal: 0.8 points per minute awake.

Awakening count is secondary:

* When awake minutes are also known, each awakening costs 6 points.
* When only the count is known, each awakening costs 12 points.
* The count is never turned into invented awake minutes.

Unknown continuity stays at 70. A measured quiet night stays at 100.

A long single awakening and many short awakenings therefore do not score the same, and the same awake period is not charged twice at full strength.

---

# 8. Sleep Efficiency

Sleep efficiency is time asleep divided by time in bed.

If bedtime or wake time is missing, efficiency stays at the neutral 70. It is not zero.

When both continuity and efficiency were actually measured, their penalties are capped together: keep the larger penalty, plus 35% of the smaller one. One fragmented night cannot take two full penalties for the same wakefulness.

---

# 9. Personal Sleeping Heart Rate

Only the average heart rate during the night is used. Daytime resting heart rate is not a substitute. Values outside 28–120 bpm are ignored.

Until five earlier nights exist, a population ladder is the fallback:

| Sleeping heart rate | Score |
| --- | --- |
| 50 bpm or below | 100 |
| 51–55 | 95 |
| 56–60 | 85 |
| 61–65 | 70 |
| 66–70 | 55 |
| 71–75 | 40 |
| above 75 | 40, minus 2 points per bpm, and not below 10 |

From five nights onward, the median of up to 14 earlier nights becomes the personal usual rate. The personal curve takes over gradually and is fully personal at 14 nights. At or below that usual rate scores 100. Each beat above it costs a little, on the same steps as before (3, then 5, then 5, then 3 points per bpm).

The heart-rate component cannot fall below 25, so one unusual night cannot overpower duration and continuity. Its weight in the night score is 10%.

---

# 10. Sleep Debt

Recent sleep debt is not a second duration score.

It looks at other nights in the previous 14 days, needs five of them, and compares them with the median of those nights. More recent shortfalls count more. The weight of a night is `e^(−days ago / 4)`.

The scored night itself is not included, so last night is not punished twice.

The adjustment is about 1.3 points per hour of that weighted gap, clamped to **−4 to +2**.

A good night after a short week stays a good night. The debt line only acknowledges that recovery may still be incomplete.

---

# 11. Sleep Timing Regularity

Usual bedtime and usual wake time are the circular medians of up to 14 earlier nights that have both timestamps. Five nights are required.

The worse of tonight's bedtime gap and wake-time gap is used:

| Gap from your usual | Points |
| --- | --- |
| 45 minutes or less | 0 |
| up to 90 minutes | −1 |
| up to 150 minutes | −2 |
| more than that | −3 |

This is a consistency nudge, not a claim that one late night is unhealthy.

---

# 12. Recent Sleep Trend

If at least three recent nights exist, and tonight's duration is within 25 minutes of their median duration, a night-score jump larger than 15 points is treated as likely noise. Only 55% of that jump is kept.

If the duration actually changed, the new score is left alone. The trend check is not a cosmetic smoother.

---

# 13. Yesterday's Steps

Steps are compared with the person's own median over about three weeks, excluding yesterday, and only when five days exist.

A day within about 25% of usual does not move the score. A 12,000-step day is neutral if 12,000 is normal.

| Yesterday ÷ usual | Points |
| --- | --- |
| 1.75 or more | −6 |
| 1.45–1.75 | −4 |
| 1.25–1.45 | −2 |
| 0.75–1.25 | 0 |
| 0.55–0.75 | +1 |
| under 0.55 | +2 |

A quiet day is only a very small plus. It is not a recovery bonus.

---

# 14. Yesterday's Training

Exercise type is not treated as inherently hard. A run, a lift, and a walk are not taxed because of their names.

Only an unusually long day moves the score:

| Yesterday's total training | Points |
| --- | --- |
| under 60 minutes | 0 |
| 60–74 minutes | −1 |
| 75–99 minutes | −2 |
| 100 minutes or more | −4 |

A normal session does not rewrite the night.

---

# 15. Overnight Autonomic Context

The readiness engine's output is not fed back into this score. That would count the night twice.

When overnight HRV exists, it is compared with the median of up to 14 earlier nights (five required):

| Tonight ÷ your usual HRV | Points |
| --- | --- |
| 1.12 or more | +2 |
| 1.04–1.12 | +1 |
| 0.92–1.04 | 0 |
| 0.80–0.92 | −1 |
| 0.68–0.80 | −2 |
| below 0.68 | −3 |

If the sleeping-heart-rate component is already below 75, a negative HRV nudge is halved. The same elevation is not charged in full twice.

---

# 16. Recent Physiological Direction

When at least six earlier nights have a sleeping heart rate, the older half is compared with the newer half.

If heart rate is up by 4 bpm or more and HRV is down by about 8% or more, the context is **−2**.

If heart rate is down by 3 bpm or more and HRV is up by about 8% or more, the context is **+1**.

Otherwise this part is zero. It means the recent pattern looks different from the person's own earlier nights. It is not a diagnosis.

---

# 17. Naps

A nap does not change the previous night's score. The overnight score describes the recorded night. A nap can still matter in the separate readiness engine, as a recovery event after the night.

---

# 18. Data Quality

Impossible values are ignored rather than scored as terrible sleep:

* sleep longer than 18 hours is not scored
* negative durations are ignored
* stage minutes more than 15% above time asleep are dropped, and the night is scored without stages
* sleeping heart rate outside 28–120 bpm is ignored

A night is not rejected just because an optional measurement is missing.

---

# 19. Confidence

Confidence is “how much usable information do we have,” not “how good was the sleep.”

If the night has duration but neither stages nor sleeping heart rate, context adjustments are halved. The night score itself is not reduced because data are thin.

Missing stages are described as unavailable. They are not described as poor sleep.

---

# 20. Context Adjustment Limits

All context together — debt, timing, steps, training, HRV, and multi-night direction — is clamped to **−8 to +4**.

A poor 4-hour night stays poor. A strong 8-hour night stays strong. Context can refine the night. It cannot rewrite it.

---

# 21. Missing Data Handling

**Missing is not zero.**

If a metric is unavailable, the engine does not invent it, does not treat it as bad, drops or neutralizes that part, and lowers how hard secondary signals may push. A recorded zero is still a real zero.

---

# 22. Anti-Double-Counting Rules

* Awake time and efficiency share one capped penalty.
* Sleeping heart rate and overnight HRV do not both take a full penalty for the same bad night.
* Last night's duration and recent sleep debt are different time scales. Debt stays inside −4 to +2 and excludes the scored night.
* A composite readiness score is not an input here.

---

# 23. Responsiveness

Meaningful changes in the night move the score. Tiny differences do not jump it, because the duration curve is smooth, stage influence is limited, and context is capped.

The score is not held near yesterday when the night actually changed.

---

# 24. Final Calculation

**Final score = night score + context adjustments**

Then clamp to 0–100.

---

# 25. Interpretation

**75–100 — Strong overnight.** Mostly restored.

**55–74 — Steady overnight.** Everyday pace usually works.

**35–54 — Still catching up.** Keep some margin.

**0–34 — Needs rest.** Overnight restoration looks limited.

These are wellness descriptions, not medical classifications.

If there is no recorded sleep, the card waits. It does not invent a score from a readiness number.

---

# 26. Explanation Shown to the User

The detail text says what the night was made of, and it says when stages were missing so they were not treated as poor sleep.

Lines that did not change the score are not presented as point changes. Context lines show the small adjustment they actually applied.

---

# 27. What the Expanded Algorithm Is Designed to Achieve

Duration stays important. Stages stay available when the device provides them, without dominating. Continuity stays meaningful. Efficiency stays descriptive. Sleeping heart rate becomes personal as history grows. Yesterday stays contextual. Missing data do not become zeros.

The expansion adds cumulative recent sleep debt, personal sleep-timing consistency, a recent-night stability check, stronger personal baselines, multi-night physiological direction, a limit on thin-data context, anti-double-counting, smoother duration, and a hard separation from the readiness score.

**Measure the night first. Understand it using the person's history. Use yesterday for context. Use physiology for refinement. Never let a secondary or noisy signal overpower the main sleep measurements.**
