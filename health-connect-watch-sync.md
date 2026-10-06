# Watch → Health Connect → Body Stress Meter

> **Why this guide exists:** Body Stress Meter (and apps like Welltory) read sleep, steps, heart rate, and workouts from **Health Connect** — not from your watch over Bluetooth. If the watch companion app is not writing into Health Connect, Home looks empty even when permissions for this app look fine.

**Wellness information only — not a medical device.**

---

## Jump to your brand

| Brand | Direct link |
| --- | --- |
| Samsung Galaxy Watch | [Open Samsung steps](#brand-samsung) |
| Pixel Watch / Fitbit / Google Health | [Open Fitbit / Pixel steps](#brand-fitbit) |
| Garmin | [Open Garmin steps](#brand-garmin) |
| Polar | [Open Polar steps](#brand-polar) |
| Oura | [Open Oura steps](#brand-oura) |
| COROS | [Open COROS steps](#brand-coros) |
| Withings | [Open Withings steps](#brand-withings) |
| WHOOP | [Open WHOOP steps](#brand-whoop) |
| Amazfit / Zepp | [Open Zepp steps](#brand-zepp) |
| boAt / Noise | [Open boAt / Noise steps](#brand-boat) |
| Huawei / Honor | [Open Huawei notes](#brand-huawei) |
| Suunto | [Open Suunto notes](#brand-suunto) |

You can also open a brand directly with a URL like  
`health-connect-watch-sync.html?brand=garmin` or `#brand-garmin`.

## Table of contents

1. [The data chain (read this first)](#1-the-data-chain-read-this-first)
2. [Quick start (any watch)](#2-quick-start-any-watch)
3. [Install Health Connect](#3-install-health-connect)
4. [Allow Body Stress Meter](#4-allow-body-stress-meter)
5. [Verify data is actually in Health Connect](#5-verify-data-is-actually-in-health-connect)
6. [Provider guides](#6-provider-guides)
   - [Samsung Galaxy Watch / Samsung Health](#brand-samsung)
   - [Google Pixel Watch / Fitbit / Google Health](#brand-fitbit)
   - [Garmin](#brand-garmin)
   - [Polar](#brand-polar)
   - [Oura](#brand-oura)
   - [COROS](#brand-coros)
   - [Withings](#brand-withings)
   - [WHOOP](#brand-whoop)
   - [Amazfit / Zepp](#brand-zepp)
   - [boAt, Noise, and other Android wearables](#brand-boat)
   - [Huawei / Honor (limited)](#brand-huawei)
   - [Suunto (limited)](#brand-suunto)
7. [What Body Stress Meter uses from Health Connect](#7-what-body-stress-meter-uses-from-health-connect)
8. [In-app help](#8-in-app-help)
9. [Troubleshooting](#9-troubleshooting)
10. [Official link index](#10-official-link-index)
11. [How Welltory frames the same problem](#11-how-welltory-frames-the-same-problem)

---

## 1. The data chain (read this first)

```text
Watch / band / ring
        │  (Bluetooth sync)
        ▼
Companion app on phone
  (Samsung Health, Garmin Connect, Fitbit / Google Health, …)
        │  (must enable “Health Connect” / share / export)
        ▼
Health Connect (on-device hub)
        │  (Allow All for Body Stress Meter)
        ▼
Body Stress Meter
```

| Step | Who does it | Can this app flip the switch? |
| --- | --- | --- |
| Watch ↔ companion app | You + manufacturer app | No |
| Companion → Health Connect | You, in the companion app | No |
| Health Connect → Body Stress Meter | You, via permission sheet | **Yes** (we show the system dialog) |
| Confirm data exists | You (or our empty-state prompt) | We can detect missing sleep/steps |

If any link is broken, sleep, overnight HR, workouts, or watch steps will not show up.

---

## 2. Quick start (any watch)

1. Update your **watch companion app** from Play Store.
2. Make sure the watch has synced recently (open the companion and pull to refresh).
3. Install / open **Health Connect** ([§3](#3-install-health-connect)).
4. In the **companion app**, turn on sharing / export to Health Connect ([§6](#6-provider-guides)).
5. In Body Stress Meter, tap **Allow** / **Allow all** for Health Connect ([§4](#4-allow-body-stress-meter)).
6. Confirm Sleep / Steps / Heart rate appear under Health Connect → Browse data ([§5](#5-verify-data-is-actually-in-health-connect)).
7. In Body Stress Meter, use **Sync now** (or open Home and pull to refresh).

Phone step counting can still work without a watch. **Sleep and most workouts need the companion writing into Health Connect.**

---

## 3. Install Health Connect

### Android 14 and newer

Health Connect is built into the system:

1. Open **Settings**.
2. Search for **Health Connect**, or go to  
   **Security & privacy → Privacy controls → Health Connect**  
   (path can vary by OEM skin).
3. Open it once and complete any first-run prompts.

### Android 9–13

1. Install **[Health Connect by Android](https://play.google.com/store/apps/details?id=com.google.android.apps.healthdata)** from Google Play.
2. Open the app once.

### Google’s official docs

- [Get started with Health Connect (Android Help)](https://support.google.com/android/answer/12201227)
- [Health Connect overview (Android Developers)](https://developer.android.com/health-and-fitness/health-connect)

---

## 4. Allow Body Stress Meter

Do this **after** (or while) linking the watch companion — both sides need permission.

1. Open **Body Stress Meter**.
2. On first run, complete the Health Connect onboarding screen, or later use:
   - Home / menu → **Health Connect**, or  
   - Menu → **Watch & Health Connect**
3. When the system sheet appears, tap **Allow all** (recommended), or at least:

   | Permission | Why |
   | --- | --- |
   | Sleep | Morning recovery / overnight context |
   | Steps | Move load, sedentary context |
   | Exercise / workouts | Training load, ACWR-style context |
   | Heart rate | Trends, overnight / resting context |
   | Resting heart rate | Recovery baselines |
   | Access past data (history) | Older nights and workouts when available |

4. Optionally open **Health Connect → App permissions → Body Stress Meter** and double-check the same toggles.

Body Stress Meter only **reads** Health Connect for wellness scores. It does not replace your watch vendor’s cloud sync.

---

## 5. Verify data is actually in Health Connect

Before blaming Body Stress Meter, confirm the hub has data:

1. Open **Health Connect**.
2. Tap **Data and access** / **Browse data** (wording varies).
3. Check **Sleep**, **Steps**, **Exercise**, **Heart rate**.
4. Open an entry and note the **source app** (e.g. Samsung Health, Garmin Connect).

- If the metric is **missing here**, fix the companion → Health Connect link ([§6](#6-provider-guides)).
- If the metric is **present here** but missing in Body Stress Meter, re-grant permissions and tap **Sync now**.

---

## 6. Provider guides

Jump to your brand. Each section has short steps for Body Stress Meter users **and** a link to the manufacturer’s own guide when one exists.

<a id="brand-samsung"></a>

### 6.1 Samsung Galaxy Watch / Samsung Health

**Companion apps:** Samsung Health · Galaxy Wearable  

**In-app path (typical):**

1. Wear the Galaxy Watch and open **Samsung Health** on the phone so the watch can sync.
2. Samsung Health → **⋮ / Menu → Settings → Health Connect**.
3. Tap **Get started** (first time).
4. **Allow** Sleep, Steps, Exercise, Heart rate, Resting heart rate (or Allow all).
5. Also keep **Sync with Samsung account / Samsung Cloud** on, and tap **Sync now** if shown.
6. After changing permissions in phone Settings → Health Connect, **re-open Samsung Health** once (Samsung’s own note).
7. In Body Stress Meter → Allow Health Connect → Sync.

**Official / primary docs**

| Resource | Link |
| --- | --- |
| Samsung Developer — Accessing Samsung Health via Health Connect | [developer.samsung.com/…/accessing-samsung-health-data-through-health-connect](https://developer.samsung.com/health/blog/en/accessing-samsung-health-data-through-health-connect) |
| Samsung Developer — Health Connect FAQ | [developer.samsung.com/health/health-connect-faq.html](https://developer.samsung.com/health/health-connect-faq.html) |

**Notes**

- Needs a recent Samsung Health (HC sync since ~6.22.5+).
- Some Samsung-only scores (e.g. certain stress/ECG surfaces) stay inside Samsung Health and never appear in Health Connect.
- Galaxy Watch HRV for Body Stress Meter’s **finger/watch IBI session** uses the wear companion path separately from Health Connect sleep/steps.

---

<a id="brand-fitbit"></a>

### 6.2 Google Pixel Watch / Fitbit / Google Health

**Companion apps:** Google Health (Fitbit) · formerly Google Fit  

**In-app path (typical):**

1. Pair the Pixel Watch / Fitbit and let **Google Health** sync.
2. In Google Health: **Connections → Partner apps** (or Profile → Settings).
3. Set up / manage **Health Connect** sharing — allow Sleep, Steps, Exercise, Heart rate.
4. On older Google Fit installs: Profile → Settings → turn on **Sync Fit with Health Connect**.
5. Body Stress Meter → Allow → Sync.

**Official docs**

| Resource | Link |
| --- | --- |
| Use Health Connect with Google Health | [support.google.com/googlehealth/answer/14506680](https://support.google.com/googlehealth/answer/14506680) |
| Connect third-party devices to Google Health | [support.google.com/googlehealth/answer/14236613](https://support.google.com/googlehealth/answer/14236613) |
| Health Connect on Google Fit (legacy Fit UI) | [support.google.com/fit/answer/12830119](https://support.google.com/fit/answer/12830119) |
| How Fitbit devices sync | [support.google.com/googlehealth/answer/14237221](https://support.google.com/googlehealth/answer/14237221) |

**Notes**

- Google Health does **not** talk to third-party watches directly for HC — the companion must sync first.
- Menu names are migrating from “Fitbit app” → “Google Health”; search for **Health Connect** inside the app if the path differs.

---

<a id="brand-garmin"></a>

### 6.3 Garmin

**Companion app:** Garmin Connect  

**In-app path (typical):**

1. Update Garmin Connect; sync the watch (Bluetooth).
2. Garmin Connect → **More (☰) → Settings → Health Connect**.
3. Enable **Write** (and Read if you want) for Sleep, Steps, Heart rate, Exercise, etc. → **Allow**.
4. Confirm under Health Connect → App permissions → **Garmin Connect**.
5. Body Stress Meter → Allow → Sync.

**Official docs**

| Resource | Link |
| --- | --- |
| Sharing Garmin Connect data with Health Connect | [support.garmin.com/en-US/?faq=JToBEy0jfe6pIygark2Ui5](https://support.garmin.com/en-US/?faq=JToBEy0jfe6pIygark2Ui5) |

**Notes**

- Native Health Connect support landed in Garmin Connect for Android (keep the app updated; older builds hide the setting).
- Open Garmin Connect regularly — background write is not always instantaneous.
- Not every Garmin-only metric is exported to Health Connect.

---

<a id="brand-polar"></a>

### 6.4 Polar

**Companion app:** Polar Flow  

**In-app path (typical):**

1. Open Polar Flow → **General settings**.
2. Turn on **Health Connect** (install HC from Play if prompted).
3. Allow Sleep, Steps, Exercise, Heart rate, Resting HR, etc.
4. Body Stress Meter → Allow → Sync.

**Official docs**

| Resource | Link |
| --- | --- |
| Connecting Polar Flow to Health Connect | [support.polar.com/en/flow-app-health-connect](https://support.polar.com/en/flow-app-health-connect) |

**What Polar lists as syncing to HC (summary):** sleep (incl. phases when available), steps, exercise sessions, workout HR, resting HR, calories, SpO2, VO2 max settings, weight/height — see Polar’s page for the full list.

---

<a id="brand-oura"></a>

### 6.5 Oura

**Companion app:** Oura  

**In-app path (typical):**

1. Oura app → menu → **Settings → Data Sharing → Health Connect**.
2. Install Health Connect if prompted.
3. Toggle the categories you want to share (sleep is the main one for Body Stress Meter).
4. Body Stress Meter → Allow → Sync.

**Official docs**

| Resource | Link |
| --- | --- |
| Health Connect by Android Integration (Oura) | [support.ouraring.com/hc/en-us/articles/10786105824531-Health-Connect-by-Android-Integration](https://support.ouraring.com/hc/en-us/articles/10786105824531-Health-Connect-by-Android-Integration) |

**Notes**

- Android only for HC; Gen2 / Gen3+ with membership per Oura’s article.
- Open Oura at least once a day so sharing stays fresh (Oura documents background/refresh caveats).

---

<a id="brand-coros"></a>

### 6.6 COROS

**Companion app:** COROS  

**In-app path (typical):**

1. COROS app → **Profile → Settings → 3rd Party Apps → Data Sync**.
2. Select **Health Connect**.
3. Authorize Sleep / Steps / Exercise / Heart rate as offered.
4. Body Stress Meter → Allow → Sync.

**Official docs**

| Resource | Link |
| --- | --- |
| Supported 3rd Party Apps (includes Health Connect) | [support.coros.com/hc/en-us/articles/360040256531-Supported-3rd-Party-Apps](https://support.coros.com/hc/en-us/articles/360040256531-Supported-3rd-Party-Apps) |
| Syncing with 3rd Party Apps | [support.coros.com/hc/en-us/articles/360040256591-Syncing-with-3rd-Party-Apps](https://support.coros.com/hc/en-us/articles/360040256591-Syncing-with-3rd-Party-Apps) |

---

<a id="brand-withings"></a>

### 6.7 Withings

**Companion app:** Withings  

**In-app path — export to Health Connect (what Body Stress Meter needs):**

1. Withings → **Profile → Settings (gear)**.
2. Tap **Export health data to Health Connect**.
3. Follow prompts → allow categories in Health Connect for Withings.
4. Body Stress Meter → Allow → Sync.

**Official docs**

| Resource | Link |
| --- | --- |
| What is Health Connect? | [support.withings.com/hc/en-us/articles/23104637348241](https://support.withings.com/hc/en-us/articles/23104637348241-Partner-Apps-What-is-Health-Connect) |
| Exporting Withings data into Health Connect | [support.withings.com/hc/en-us/articles/27322856325905](https://support.withings.com/hc/en-us/articles/27322856325905-Partner-Apps-Health-Connect-Exporting-Withings-data-into-Health-Connect) |
| Importing Health Connect into Withings | [support.withings.com/hc/en-us/articles/47487495293585](https://support.withings.com/hc/zh-cn/articles/47487495293585-Partner-Apps-Health-Connect-Importing-Health-Connect-data-into-the-Withings-App) |
| Sync troubleshooting | [support.withings.com/hc/en-us/articles/42212686971537](https://support.withings.com/hc/en-us/articles/42212686971537-Partner-Apps-Health-Connect-Data-Synchronization-Issues) |

**Notes**

- Wait ~15 minutes after linking; Withings documents sync delay.
- “Export” (Withings → HC) is the direction Body Stress Meter cares about.

---

<a id="brand-whoop"></a>

### 6.8 WHOOP

**Companion app:** WHOOP  

**In-app path (typical):**

1. Update WHOOP; sync the strap.
2. WHOOP → **More / Settings → Integrations → Health Connect**.
3. **Set up** → Allow sleep, recovery-related, workouts / activity (Allow all if offered).
4. Open WHOOP again usually helps push a write (background can lag).
5. Body Stress Meter → Allow → Sync.

**Official / reference**

| Resource | Link |
| --- | --- |
| Google Health — connecting WHOOP via Health Connect | [support.google.com/googlehealth/answer/14236613](https://support.google.com/googlehealth/answer/14236613) (WHOOP section) |
| WHOOP product announcement (Health Connect) | Search WHOOP help / in-app Integrations if a dedicated FAQ moves |

**Notes**

- Google Health documents that some metrics (e.g. certain HRV surfaces) may **not** be shared by WHOOP into aggregator apps — availability varies by vendor export policy.

---

<a id="brand-zepp"></a>

### 6.9 Amazfit / Zepp

**Companion apps:** Zepp · Zepp Life  

**In-app path (typical):**

1. Sync the Amazfit device in **Zepp** / **Zepp Life**.
2. Open app settings and search for **Health Connect** / **Data sharing** / **Third-party services**.
3. Enable write access for Sleep, Steps, Heart rate, Exercise.
4. Confirm source under Health Connect → Browse data.
5. Body Stress Meter → Allow → Sync.

**Official / reference**

| Resource | Link |
| --- | --- |
| Google Health — Zepp (Amazfit) via Health Connect | [support.google.com/googlehealth/answer/14236613](https://support.google.com/googlehealth/answer/14236613) |

Menu labels change often between Zepp and Zepp Life builds — if you do not see Health Connect, update the app or check Zepp’s regional help site.

---

<a id="brand-boat"></a>

### 6.10 boAt, Noise, and other Android wearables

**Companion apps:** boAt Crest · NoiseFit · Noise · similar OEM apps  

**Typical pattern:**

1. Pair and sync in the brand’s Android app.
2. Look for **Health Connect**, **Google Fit / Health**, or **Third-party sync** in Settings.
3. Allow Sleep / Steps / Heart rate / Workouts **write** permissions.
4. Verify in Health Connect Browse data.
5. Body Stress Meter → Allow → Sync.

Many value-tier brands expose HC under different names, or only after a Play Store update. If the companion **never** offers Health Connect, Body Stress Meter cannot invent sleep/workout rows from the watch.

---

<a id="brand-huawei"></a>

### 6.11 Huawei / Honor (limited)

**Companion app:** Huawei Health  

Huawei Health historically uses **Huawei Health Kit**, not Health Connect write, on many regions/builds. If Health Connect Browse data never shows Huawei as a source for sleep/steps, Body Stress Meter cannot import that watch data through HC.

**Workarounds users sometimes use** (outside this app): OEM bridges / third-party sync tools — not endorsed or supported by Body Stress Meter; use at your own risk and privacy judgment.

---

<a id="brand-suunto"></a>

### 6.12 Suunto (limited)

**Companion app:** Suunto  

As of early 2026, many Suunto Android builds still lack a reliable native Health Connect **write** path. Check Suunto’s release notes / in-app Integrations after updates. Until Suunto appears as a source in Health Connect Browse data, Body Stress Meter will not see that watch’s sleep/workouts via HC.

---

## 7. What Body Stress Meter uses from Health Connect

When available, Health Connect feeds:

- Overnight **sleep** (duration / stages when written)
- **Steps** and movement context
- **Exercise sessions** / workouts
- **Heart rate** samples and **resting HR** when the companion exports them

Finger / face stress checks and (on Galaxy Watch) Sensor SDK HRV sessions are **separate** from this Health Connect pipeline.

---

## 8. In-app help

| Surface | What it does |
| --- | --- |
| First-run **Health Connect onboarding** | Requests HC permissions and starts sync |
| Menu → **Watch & Health Connect** | Welltory-style walkthrough + open companion + Sync |
| Home empty-state prompt | Shown when HC may be OK but sleep/steps still missing |
| Menu → Health Connect strip | Install / connect / manage permissions |

The app tries to open the **companion you actually have installed** (Garmin, Fitbit, Samsung Health, boAt, Zepp, …) instead of always launching Samsung Health.

---

## 9. Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Permissions granted, Home still empty | Companion not writing to HC | Follow your brand in [§6](#6-provider-guides); verify [§5](#5-verify-data-is-actually-in-health-connect) |
| Sleep missing, steps present | Sleep permission off in companion or BSM | Re-allow Sleep on both sides |
| Data in HC, not in BSM | BSM read permission / need sync | App permissions → Body Stress Meter → Allow all → Sync now |
| Only last ~30 days | Default HC history window | Grant **Access past data** / history read when offered |
| Samsung data “allowed” but empty | Permissions set in Settings without reopening Samsung Health | Open Samsung Health after granting; Sync with Samsung account |
| Garmin / WHOOP lag | Background sync | Open companion, pull to refresh, wait a few minutes |
| Duplicate / weird steps | Multiple writers (phone + watch) | In HC, review **Data sources and priority** |
| Huawei / Suunto empty | No HC write support | See [§6.11](#611-huawei--honor-limited) / [§6.12](#612-suunto-limited) |

**Reset checklist (Welltory-style):**

1. Confirm companion → HC write in Health Connect Browse data.  
2. Revoke and re-allow Body Stress Meter in HC App permissions.  
3. Force-stop companion + Body Stress Meter, reopen both.  
4. Sync watch → open companion → Sync now in Body Stress Meter.  
5. Sleep on it: many companions only write a full sleep session after morning sync.

---

## 10. Official link index

Use this table on the GitHub / docs site as a single jump list.

| Provider | Official guide |
| --- | --- |
| **Android / Google — Health Connect** | [support.google.com/android/answer/12201227](https://support.google.com/android/answer/12201227) |
| **Samsung Health ↔ Health Connect** | [Samsung developer blog](https://developer.samsung.com/health/blog/en/accessing-samsung-health-data-through-health-connect) · [FAQ](https://developer.samsung.com/health/health-connect-faq.html) |
| **Google Health / Fitbit ↔ Health Connect** | [support.google.com/googlehealth/answer/14506680](https://support.google.com/googlehealth/answer/14506680) |
| **Third-party devices → Google Health (HC hub)** | [support.google.com/googlehealth/answer/14236613](https://support.google.com/googlehealth/answer/14236613) |
| **Garmin Connect ↔ Health Connect** | [support.garmin.com FAQ](https://support.garmin.com/en-US/?faq=JToBEy0jfe6pIygark2Ui5) |
| **Polar Flow ↔ Health Connect** | [support.polar.com/en/flow-app-health-connect](https://support.polar.com/en/flow-app-health-connect) |
| **Oura ↔ Health Connect** | [Oura Member Care](https://support.ouraring.com/hc/en-us/articles/10786105824531-Health-Connect-by-Android-Integration) |
| **COROS ↔ Health Connect** | [Supported 3rd Party Apps](https://support.coros.com/hc/en-us/articles/360040256531-Supported-3rd-Party-Apps) |
| **Withings → Health Connect (export)** | [Withings support](https://support.withings.com/hc/en-us/articles/27322856325905-Partner-Apps-Health-Connect-Exporting-Withings-data-into-Health-Connect) |
| **Welltory — connect via Health Connect** (reference UX) | [help.welltory.com/…/how-to-connect-data-source-via-health-connect](https://help.welltory.com/en/articles/9214700-how-to-connect-data-source-via-health-connect) |
| **Health Connect Play listing** | [play.google.com/…/healthdata](https://play.google.com/store/apps/details?id=com.google.android.apps.healthdata) |

Manufacturer URLs move. If a link 404s, search the brand’s support site for **“Health Connect”**.

---

## 11. How Welltory frames the same problem

Welltory’s public help matches this architecture:

1. Install Health Connect.  
2. In Welltory: Menu → Apps → Health Connect → Connect → **Allow all**.  
3. In the **source** app, enable transfer to Health Connect.  
4. In Health Connect → App permissions, confirm both apps.  
5. For gadgets: sync gadget → Health Connect first (sometimes via a third-party companion), then connect HC to Welltory.

See: [How to connect data source via Health Connect (Welltory)](https://help.welltory.com/en/articles/9214700-how-to-connect-data-source-via-health-connect).

Body Stress Meter uses the same chain; this document is the long-form, multi-brand version you can host on GitHub Pages or link from the in-app **Watch & Health Connect** screen.

---

## Document maintenance

| Item | Detail |
| --- | --- |
| Path | `docs/HEALTH_CONNECT_WATCH_SYNC_GUIDE.md` |
| GitHub Pages | [hrvbyakshay.github.io/hrv-by-akshay-legal/health-connect-watch-sync.html](https://hrvbyakshay.github.io/hrv-by-akshay-legal/health-connect-watch-sync.html) |
| Legal-site source | `legal-site/health-connect-watch-sync.{md,html}` |
| Audience | End users + Play Store / GitHub support |
| Related in-app code | `WatchHealthConnectGuide.kt`, `WatchHealthConnectGuideScreen.kt`, `HealthConnectOnboardScreen.kt` |
| Related setup | [`DEVICE_SETUP.md`](../DEVICE_SETUP.md) (Galaxy Watch developer install) |

When a brand ships or removes Health Connect support, update **§6** and the **§10** index — do not assume every companion listed in the Android package detector already writes useful sleep data.
