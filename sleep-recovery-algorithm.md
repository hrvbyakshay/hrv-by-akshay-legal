# Overnight recovery score

> **Disclaimer — not a scientific or medical claim.**
> This page describes a **wellness estimate** for personal insight. It is **not** a clinically validated algorithm, **not** a medical device, and **not** a diagnosis. It must not be used to make medical decisions. The numbers below are the rules the app actually uses. Research ranges motivate those rules. They do not validate clinical use.

This is the number on the sleep card: **0–100**, with a label of Needs rest, Still catching up, Steady overnight, or Strong overnight.

It is a different number from [Stress & Readiness](stress-readiness-algorithm.html). Readiness is the latent-state engine. This page is only “how restored does last night look, after yesterday.”

The night score itself is an English description of a Kotlin port of the MIT-licensed sleep score in [IntervalsWellnessSync](https://github.com/ryangrg/intervalswellnesssync-hrv-sleep-score-algorithms) (`SleepScoreCalculator.swift`), with the changes in the last section.

---

## 1. What the card is answering

One question:

**After yesterday’s load, how restored does last night look?**

The answer is built in two steps.

1. Score the night itself: duration, restorative stages, continuity, time asleep in bed, and sleeping heart rate when we have it.
2. Nudge that score a little for yesterday: a personal step comparison, an unusually hard or long session, and a small autonomic signal.

The result is clamped to 0–100.

| Score | Label | Plain reading |
| --- | --- | --- |
| 75–100 | Strong overnight | Mostly restored |
| 55–74 | Steady overnight | Everyday pace usually works |
| 35–54 | Still catching up | Keep some margin |
| 0–34 | Needs rest | Overnight restore looks limited |

If there is no sleep duration and no autonomic reading, the card does not invent a score. It waits for data.

---

## 2. Which night

“Last night” is the latest day in Health Connect that actually has sleep, looking at today first and then yesterday. Noon does not wipe a recorded night.

Minutes on the card (sleep, deep, REM, steps) are the recorded values. They are not themselves the score.

---

## 3. The night score

Each part is itself 0–100. They are then weighted.

**When sleeping heart rate is available**

| Part | Weight |
| --- | --- |
| Duration | 30% |
| Restorative stages (deep and REM) | 25% |
| Continuity | 20% |
| Efficiency | 15% |
| Sleeping heart rate | 10% |

**When sleeping heart rate is missing**

The heart-rate share is dropped and the other weights are renormalized: duration 34%, stages 28%, continuity 22%, efficiency 16%.

A missing part is a **neutral 70**, not a zero, except where a section below says otherwise. Zero means “we measured none of this.” Missing means “we do not know.”

### 3.1 Duration

Hours asleep, not time in bed.

| Hours asleep | Duration score |
| --- | --- |
| 7 to 9 | 100 |
| 9 to 10 | falls by 20 points per extra hour (90 at 9.5 h, 80 at 10 h) |
| above 10 | starts at 80 and falls by 15 points per extra hour, and does not go below 50 |
| 6 to 7 | falls by 40 points per hour short of 7 (60 at 6 h) |
| 5 to 6 | falls by 30 points per hour short of 6 (30 at 5 h) |
| under 5 | starts at 30 and falls by 15 points per hour short of 5, down to 0 |

### 3.2 Restorative stages

Deep and REM are each scored as a percent of time asleep, then averaged. Light sleep is shown on the card and is **not** part of this score.

Targets used here, as commonly cited ranges, not as a clinical cutoff:

- Deep: about 13–23% of the night
- REM: about 20–25% of the night

**Deep**

| Share of the night | Score |
| --- | --- |
| 13–23% | 100 |
| 10–13% | 70, rising by 10 points per extra percent |
| under 10% | 7 points per percent (0 at 0%) |
| 23–30% | 100, falling by 5 points per extra percent |
| above 30% | 50 |

**REM**

| Share of the night | Score |
| --- | --- |
| 20–25% | 100 |
| 15–20% | 60, rising by 8 points per extra percent |
| under 15% | 4 points per percent (0 at 0%) |
| 25–35% | 100, falling by 3 points per extra percent |
| above 35% | 50 |

If only deep was recorded, only deep is scored. If only REM was recorded, only REM is scored. If neither was recorded, the stage part stays at **70**, even when light sleep is present. A watch that never wrote deep or REM is not treated as a night with no deep and no REM.

If deep or REM was recorded as zero minutes, that zero is real and scores as 0% for that stage.

### 3.3 Continuity

Starts at 100 when we know the night was quiet.

- Each significant awakening costs **20** points.
- Each minute awake during the night costs **0.5** points.

A significant awakening is a mid-night awake block of at least 2 minutes, ignoring the few minutes at falling asleep and at waking.

If we know the count but not the minutes, only the count is charged. The app does **not** invent extra wake minutes from the count. Charging both would punish the same awakening twice.

If we know neither the count nor the awake minutes, continuity stays at the neutral **70**.

### 3.4 Efficiency

Efficiency is time asleep divided by time in bed (bedtime to wake, which includes time awake in bed).

| Efficiency | Score |
| --- | --- |
| 90% or more | 100 |
| 85–90% | 80, plus 4 points per extra percent |
| 75–85% | 50, plus 3 points per extra percent |
| under 75% | about two-thirds of the efficiency percent |

If bedtime or wake time is missing, efficiency stays at **70**.

### 3.5 Sleeping heart rate

Only the average heart rate **during the night** is used. Daytime resting heart rate is not a stand-in. If the night has no sleeping heart rate, this part is omitted and the other weights grow, as in the table above.

**When five earlier nights have a sleeping heart rate**, tonight is compared with the median of those nights (the personal usual rate).

| Tonight versus your usual sleeping heart rate | Score |
| --- | --- |
| at or below usual | 100 |
| up to 3 bpm higher | 100, minus 3 points per bpm |
| 3 to 6 bpm higher | 91, minus 5 points per bpm past 3 |
| 6 to 10 bpm higher | 76, minus 5 points per bpm past 6 |
| more than 10 bpm higher | 56, minus 3 points per bpm past 10, and not below 10 |

**Without five earlier nights**, a population ladder is the fallback:

| Sleeping heart rate | Score |
| --- | --- |
| 50 bpm or below | 100 |
| 51–55 | 95 |
| 56–60 | 85 |
| 61–65 | 70 |
| 66–70 | 55 |
| 71–75 | 40 |
| above 75 | 40, minus 2 points per bpm past 75, and not below 10 |

The personal comparison exists because a sleeping heart rate of 62 can be an ordinary night for one person and a high night for another. The population ladder remains only until there is enough of your own history.

---

## 4. From the night score to the card

The card starts at the night score, then applies three small adjustments. They are nudges. The night still owns the number.

### 4.1 Autonomic nudge

If there is a recent readiness reading, or otherwise an overnight HRV value:

| Signal | Points |
| --- | --- |
| Ready | +6 |
| Settled | +3 |
| Soft | 0 |
| Rest | −5 |

### 4.2 Yesterday’s steps, versus you

Steps move the score only when yesterday was unusual compared with your own median over the previous three weeks (at least five days, and yesterday itself is not part of that median). Within about 25% of your usual day, the change is zero.

| Yesterday ÷ your usual | Points |
| --- | --- |
| 1.75 or more | −10 |
| 1.45–1.75 | −6 |
| 1.25–1.45 | −3 |
| 0.75–1.25 | 0 |
| 0.55–0.75 | +1 |
| under 0.55 | +3 |

A 12,000-step day is neutral if 12,000 is normal for you.

### 4.3 Yesterday’s training

Ordinary training does not tax the card. Only a notably hard or long day does.

A session counts as hard when it lasted at least 25 minutes, or when the type is something like a run, ride, swim, row, strength session, or intervals.

| Yesterday | Points |
| --- | --- |
| Hard session totaling 75 minutes or more | −8 |
| Hard session totaling 50–74 minutes | −5 |
| Hard session totaling 35–49 minutes | −3 |
| Any movement totaling 90 minutes or more, if the row above did not already apply | −4 |
| Otherwise | 0 |

The final card score is the night score plus these three nudges, clamped to 0–100.

The deep/REM and continuity lines inside the night detail are explanations of parts already inside the night score. They are not added a second time.

---

## 5. Worked example

Eight hours asleep. Deep 18% (inside 13–23). REM 22% (inside 20–25). One mid-night awakening and 10 minutes awake. Efficiency 92%. Sleeping heart rate 58, and your usual from earlier nights is 60.

- Duration: 100
- Stages: deep 100, REM 100, average 100
- Continuity: 100 − 20 − (10 × 0.5) = 75
- Efficiency: 100
- Heart rate: 2 bpm under your usual, so 100

With heart rate present:

0.30×100 + 0.25×100 + 0.20×75 + 0.15×100 + 0.10×100 = **95**

Yesterday was a normal step day (0) and not a long hard session (0). The latest autonomic signal is Settled (+3).

Card: 95 + 3 = **98**, which is Strong overnight.

A different person with the same 58 bpm, but no five-night history, would use the population ladder (85 at 58 bpm) instead of 100. The rest of the night would be unchanged.

---

## 6. What this version changed

Three rules were tightened so missing data stops pretending to be a bad measurement.

1. **Missing deep or REM is not zero.** Only a recorded stage is scored. Light-only nights stay on the neutral stage prior.
2. **One awakening is one penalty.** If we do not have awake minutes, we do not invent them from the wake count.
3. **Sleeping heart rate is personal once we know you.** Five earlier nights switch the score from a population ladder to “tonight versus your usual.” Daytime resting heart rate is no longer used as if it were a sleeping heart rate. Until those five nights exist, the population ladder remains.

---

## 7. What this is not

- Not a sleep-apnea test, not a diagnosis, and not a clinically validated sleep score.
- Not the readiness, stress, energy, or recovery numbers from the [latent-state engine](stress-readiness-algorithm.html).
- Not a claim that 13–23% deep or 20–25% REM is a personal medical target. Those ranges only set the shape of this wellness score.
- Not a full copy of anyone else’s product. The duration, stage, continuity, efficiency, and population heart-rate curves follow the MIT sleep-score algorithm linked above. The personal heart-rate comparison, the missing-versus-zero stage rule, the single wake penalty, and the step and workout nudges are part of this app.
