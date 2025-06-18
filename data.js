const timetable = [
  {
    teacher: "AIZAT SHAZMAN BIN GHAZIMI",
    sessions: [
      { subject: "PJ", classroom: "4 EFISIEN", duration: 30 }, // 7:30
      { subject: "M3", classroom: "4 SUKSES", duration: 30 }, // 8:00
      { subject: "M3", classroom: "4 SUKSES", duration: 30 }, // 8:30
      { subject: "M3", classroom: "4 SUKSES", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "RBT", classroom: "4 BESTARI", duration: 30 }, // 10:50
      { subject: "RBT", classroom: "4 BESTARI", duration: 30 }, // 11:20
      { subject: "RBT", classroom: "5 EFISIEN", duration: 30 }, // 11:50
      { subject: "RBT", classroom: "5 EFISIEN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "AZNIRATIMALA BT AWANG",
    sessions: [
      { subject: "PJ", classroom: "4 NEKAD", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "BM", classroom: "6 CEMER", duration: 30 }, // 8:30
      { subject: "BM", classroom: "6 CEMER", duration: 30 }, // 9:00
      { subject: "BM", classroom: "6 ADIL", duration: 30 }, // 9:30 *
      { subject: "BM", classroom: "6 ADIL", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "AZURA BT ABD RAHMAN",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "SJRH", classroom: "6 KARISMA", duration: 30 }, // 8:00
      { subject: "SJRH", classroom: "6 KARISMA", duration: 30 }, // 8:30
      { subject: "BM", classroom: "6 KARISMA", duration: 30 }, // 9:00
      { subject: "BM", classroom: "6 KARISMA", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BM", classroom: "5 LITERASI", duration: 30 }, // 10:50
      { subject: "BM", classroom: "5 LITERASI", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "CHE ZURIAH BT ARONG (PKKO)",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "M3", classroom: "4 NEKAD", duration: 30 }, // 8:00
      { subject: "M3", classroom: "4 NEKAD", duration: 30 }, // 8:30
      { subject: "M3", classroom: "4 NEKAD", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 * 
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "DURAR ADILAH BT MOHD SANI",
    sessions: [
      { subject: "BA", classroom: "6 LITERASI", duration: 30 }, // 7:30
      { subject: "PSV", classroom: "5 CEMER", duration: 30 }, // 8:00
      { subject: "PSV", classroom: "5 CEMER", duration: 30 }, // 8:30
      { subject: "BA", classroom: "6 BESTARI", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BA", classroom: "6 SETIA", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BA", classroom: "6 EFEKTIF", duration: 30 }, // 11:50
      { subject: "BA", classroom: "6 EFEKTIF", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "EFINDI BIN CHE HAAT (PK HEM)",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "M3", classroom: "4 KARISMA", duration: 30 }, // 8:00
      { subject: "M3", classroom: "4 KARISMA", duration: 30 }, // 8:30
      { subject: "M3", classroom: "4 KARISMA", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "SJRH", classroom: "4 KARISMA", duration: 30 }, // 10:50
      { subject: "SJRH", classroom: "4 KARISMA", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "EIZZAT B SAHARUDIN",
    sessions: [
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "TASMEK", classroom: "4 LITERASI", duration: 30 }, // 9:50/10:00 *
      { subject: "TASMEK", classroom: "4 LITERASI", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "PAI(ULUM)", classroom: "5 MURNI", duration: 30 }, // 11:50
      { subject: "PAI(ULUM)", classroom: "5 MURNI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ESNAINEY BT RAMLE",
    sessions: [
      { subject: "M3", classroom: "4 MURNI", duration: 30 }, // 7:30
      { subject: "M3", classroom: "4 MURNI", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "M3", classroom: "5 BESTARI", duration: 30 }, // 10:20/10:30 *
      { subject: "M3", classroom: "5 BESTARI", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "FADZILAH BT ADNAN",
    sessions: [
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "PAI(ULUM)", classroom: "6 EFEKTIF", duration: 30 }, // 9:30 *
      { subject: "PAI(ULUM)", classroom: "6 EFEKTIF", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "TASMEK", classroom: "6 KARISMA", duration: 30 }, // 10:50
      { subject: "TASMEK", classroom: "6 KARISMA", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "FATIN AZREEN BT CHE JUSOH",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "FEMALA APVELLU",
    sessions: [
      { subject: "RBT", classroom: "4 LITERASI", duration: 30 }, // 7:30
      { subject: "RBT", classroom: "4 LITERASI", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "M3", classroom: "6 RAJIN", duration: 30 }, // 9:00
      { subject: "M3", classroom: "6 RAJIN", duration: 30 }, // 9:30 *
      { subject: "M3", classroom: "6 RAJIN", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "M3", classroom: "4 ADIL", duration: 30 }, // 11:20
      { subject: "M3", classroom: "4 ADIL", duration: 30 }, // 11:50
      { subject: "M3", classroom: "4 ADIL", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "HAMIDAH BT ABDULLAH",
    sessions: [
      { subject: "SN", classroom: "4 BESTARI", duration: 30 }, // 7:30
      { subject: "SN", classroom: "4 BESTARI", duration: 30 }, // 8:00
      { subject: "SN", classroom: "4 MURNI", duration: 30 }, // 8:30
      { subject: "SN", classroom: "4 MURNI", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "SN", classroom: "6 SETIA", duration: 30 }, // 11:20
      { subject: "SN", classroom: "6 SETIA", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "HANIS BINTI MOHAMMAD KUSAIRI",
    sessions: [
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "PAI(ULUM)", classroom: "4 KARISMA", duration: 30 }, // 9:50/10:00 *
      { subject: "PAI(ULUM)", classroom: "4 KARISMA", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "HASSARUDDIN BIN YAAKOB (GB)",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "HAZLIZA BT KAMARUDIN",
    sessions: [
      { subject: "PSV", classroom: "5 MURNI", duration: 30 }, // 7:30
      { subject: "PSV", classroom: "5 MURNI", duration: 30 }, // 8:00
      { subject: "BI", classroom: "6 EFEKTIF", duration: 30 }, // 8:30
      { subject: "BI", classroom: "6 EFEKTIF", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "BI", classroom: "5 NEKAD", duration: 30 }, // 11:20
      { subject: "BI", classroom: "5 NEKAD", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  /*
  {
    teacher: "HAZRINA BT SOID",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  */
  {
    teacher: "HINDUN BT MOHD NOOR",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "BM", classroom: "6 SETIA", duration: 30 }, // 8:30
      { subject: "BM", classroom: "6 SETIA", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BM", classroom: "4 EFISIEN", duration: 30 }, // 10:50
      { subject: "BM", classroom: "4 EFISIEN", duration: 30 }, // 11:20
      { subject: "BM", classroom: "4 MURNI", duration: 30 }, // 11:50
      { subject: "BM", classroom: "4 MURNI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "IZURA BT MOHAMAD AKHWAN",
    sessions: [
      { subject: "BA", classroom: "5 CEMER", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "BA", classroom: "5 LITERASI", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "TASMEK", classroom: "4 EFEKTIF", duration: 30 }, // 9:50/10:00 *
      { subject: "TASMEK", classroom: "4 EFEKTIF", duration: 30 }, // 10:20/10:30 *
      { subject: "TASMEK", classroom: "5 CEMER", duration: 30 }, // 10:50
      { subject: "TASMEK", classroom: "5 CEMER", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MARIANI BT MAHMUD",
    sessions: [
      { subject: "AKADEMIK", classroom: "5 ADIL/5 NEKAD", duration: 30 }, // 7:30
      { subject: "AKADEMIK", classroom: "5 ADIL/5 NEKAD", duration: 30 }, // 8:00
      { subject: "M3", classroom: "5 SUKSES", duration: 30 }, // 8:30
      { subject: "M3", classroom: "5 SUKSES", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "M3", classroom: "5 EFEKTIF", duration: 30 }, // 10:20/10:30 *
      { subject: "M3", classroom: "5 EFEKTIF", duration: 30 }, // 10:50
      { subject: "M3", classroom: "5 EFEKTIF", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "PK", classroom: "5 SUKSES", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MARYAM BT MUHAMMAD",
    sessions: [
      { subject: "BM", classroom: "5 BESTARI", duration: 30 }, // 7:30
      { subject: "BM", classroom: "5 BESTARI", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "BM", classroom: "5 MURNI", duration: 30 }, // 9:00
      { subject: "BM", classroom: "5 MURNI", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "BM", classroom: "5 ADIL", duration: 30 }, // 11:20
      { subject: "BM", classroom: "5 ADIL", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MILIYANA BT JOHARI",
    sessions: [
      { subject: "BI", classroom: "6 ADIL", duration: 30 }, // 7:30
      { subject: "BI", classroom: "6 ADIL", duration: 30 }, // 8:00
      { subject: "BI", classroom: "5 BESTARI", duration: 30 }, // 8:30
      { subject: "BI", classroom: "5 BESTARI", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BI", classroom: "6 CEMER", duration: 30 }, // 10:50
      { subject: "BI", classroom: "6 CEMER", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MOHAMAD KHAIRUL AMRI BIN ROSLI",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BM", classroom: "4 NEKAD", duration: 30 }, // 10:50
      { subject: "BM", classroom: "4 NEKAD", duration: 30 }, // 11:20
      { subject: "BM", classroom: "5 RAJIN", duration: 30 }, // 11:50
      { subject: "BM", classroom: "5 RAJIN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MOHAMMAD AZAMUDDIN B ABDUL AZIZ",
    sessions: [
      { subject: "TASMEK", classroom: "5 NEKAD", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "5 NEKAD", duration: 30 }, // 8:00
      { subject: "BA", classroom: "4 RAJIN", duration: 30 }, // 8:30
      { subject: "BA", classroom: "4 RAJIN", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "BA", classroom: "4 EFISIEN", duration: 30 }, // 9:50/10:00 *
      { subject: "BA", classroom: "4 EFISIEN", duration: 30 }, // 10:20/10:30 *
      { subject: "BA", classroom: "4 ADIL", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MOHD GHAZALI BIN ABD RAZAK",
    sessions: [
      { subject: "TASMEK", classroom: "5 ADIL", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "5 ADIL", duration: 30 }, // 8:00
      { subject: "BA", classroom: "5 MURNI", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "BA", classroom: "5 ADIL", duration: 30 }, // 10:20/10:30 *
      { subject: "BA", classroom: "5 ADIL", duration: 30 }, // 10:50
      { subject: "PK", classroom: "5 RAJIN", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MOHD ZAIRONI B MARKIMIN",
    sessions: [
      { subject: "TASMEK", classroom: "5 NEKAD", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "5 NEKAD", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "TASMEK", classroom: "4 EFEKTIF", duration: 30 }, // 9:50/10:00 *
      { subject: "TASMEK", classroom: "4 EFEKTIF", duration: 30 }, // 10:20/10:30 *
      { subject: "TASMEK", classroom: "5 CEMER", duration: 30 }, // 10:50
      { subject: "TASMEK", classroom: "5 CEMER", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MUHAMAD EZHAR BIN ZAWAWI",
    sessions: [
      { subject: "PJ", classroom: "6 RAJIN", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "PJ", classroom: "6 BESTARI", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "PJ", classroom: "6 BESTARI", duration: 30 }, // 9:30 *
      { subject: "PJ", classroom: "6 LITERASI", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "PK", classroom: "6 RAJIN", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MUHAMMAD FAIEZ B MOHD ZAINAL",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "RBT", classroom: "6 RAJIN", duration: 30 }, // 8:00
      { subject: "RBT", classroom: "6 RAJIN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "RBT", classroom: "6 BESTARI", duration: 30 }, // 9:30 *
      { subject: "RBT", classroom: "6 BESTARI", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "RBT", classroom: "6 EFEKTIF", duration: 30 }, // 10:50
      { subject: "RBT", classroom: "6 EFEKTIF", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MUHAMMAD FAIZUL B MOHD RIDZUAN",
    sessions: [
      { subject: "BI", classroom: "4 RAJIN", duration: 30 }, // 7:30
      { subject: "BI", classroom: "4 RAJIN", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "BI", classroom: "6 MURNI", duration: 30 }, // 9:30 *
      { subject: "BI", classroom: "6 MURNI", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "BI", classroom: "4 SUKSES", duration: 30 }, // 10:50
      { subject: "BI", classroom: "4 SUKSES", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "PM", classroom: "5 ADIL/5 NEKAD", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "MUHAMMAD IZZUDDIN BIN ROSLI",
    sessions: [
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NOOR AINI BT MD GHAZALI",
    sessions: [
      { subject: "TASMEK", classroom: "5 NEKAD", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "5 NEKAD", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "PAI(JAWI)", classroom: "5 CEMER", duration: 30 }, // 10:20/10:30 *
      { subject: "TASMEK", classroom: "5 CEMER", duration: 30 }, // 10:50
      { subject: "TASMEK", classroom: "5 CEMER", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "PAI(JAWI)", classroom: "5 NEKAD", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NOOR HAMILIN BT BAHROM",
    sessions: [
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "TASMEK", classroom: "6 KARISMA", duration: 30 }, // 10:50
      { subject: "TASMEK", classroom: "6 KARISMA", duration: 30 }, // 11:20
      { subject: "PAI(ULUM)", classroom: "6 LITERASI", duration: 30 }, // 11:50
      { subject: "PAI(ULUM)", classroom: "6 LITERASI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NOOR LAILA BT MOHD YUSOFF",
    sessions: [
      { subject: "SN", classroom: "5 LITERASI", duration: 30 }, // 7:30
      { subject: "SN", classroom: "5 LITERASI", duration: 30 }, // 8:00
      { subject: "SN", classroom: "4 SETIA", duration: 30 }, // 8:30
      { subject: "SN", classroom: "4 SETIA", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "SN", classroom: "4 EFEKTIF", duration: 30 }, // 11:50
      { subject: "SN", classroom: "4 EFEKTIF", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NOR ATIKAH BINTI AHMAD",
    sessions: [
      { subject: "TASMEK", classroom: "4 SETIA", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "4 SETIA", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "BA", classroom: "4 BESTARI", duration: 30 }, // 10:20/10:30 *
      { subject: "BA", classroom: "4 CEMER", duration: 30 }, // 10:50
      { subject: "BA", classroom: "4 SETIA", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NOR DIYANA BT ALI",
    sessions: [
      { subject: "TASMEK", classroom: "5 ADIL", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "5 ADIL", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "PAI(JAWI)", classroom: "5 ADIL", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NOR HASLINDA BT HASHIM",
    sessions: [
      { subject: "PAI(JAWI)", classroom: "4 SUKSES", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "PAI(ULUM)", classroom: "4 SUKSES", duration: 30 }, // 9:50/10:00 *
      { subject: "PAI(ULUM)", classroom: "4 SUKSES", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "PAI(JAWI)", classroom: "5 BESTARI", duration: 30 }, // 11:20
      { subject: "TASMEK", classroom: "5 BESTARI", duration: 30 }, // 11:50
      { subject: "TASMEK", classroom: "5 BESTARI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NOR HAYATI BT KAMALUDIN",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "BI", classroom: "4 BESTARI", duration: 30 }, // 8:30
      { subject: "BI", classroom: "4 BESTARI", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "PJ", classroom: "4 BESTARI", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BI", classroom: "6 LITERASI", duration: 30 }, // 10:50
      { subject: "BI", classroom: "6 LITERASI", duration: 30 }, // 11:20
      { subject: "BI", classroom: "4 EFISIEN", duration: 30 }, // 11:50
      { subject: "BI", classroom: "4 EFISIEN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NORAZIMAH BINTI KAMARUDDIN",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BA", classroom: "5 EFISIEN", duration: 30 }, // 10:50
      { subject: "BA", classroom: "5 EFISIEN", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NORAZIMAH BT ALI (PKP)",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "PM", classroom: "6 SETIA/6 EFEKTIF", duration: 30 }, // 9:30 *
      { subject: "PM", classroom: "6 SETIA/6 EFEKTIF", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NORBAIZURA BT BAHROM",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "BM", classroom: "5 CEMER", duration: 30 }, // 9:00
      { subject: "BM", classroom: "5 CEMER", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BM", classroom: "4 RAJIN", duration: 30 }, // 11:50
      { subject: "BM", classroom: "4 RAJIN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NORHAYATI BT ABD RAHMAN",
    sessions: [
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "5 EFISIEN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "PAI(ULUM)", classroom: "4 NEKAD", duration: 30 }, // 9:50/10:00 *
      { subject: "PAI(ULUM)", classroom: "4 NEKAD", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NORHAYATI BT MAHMOOD",
    sessions: [
      { subject: "BM", classroom: "5 SETIA", duration: 30 }, // 7:30
      { subject: "BM", classroom: "5 SETIA", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "BM", classroom: "6 LITERASI", duration: 30 }, // 9:00
      { subject: "BM", classroom: "6 LITERASI", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BM", classroom: "6 EFISIEN", duration: 30 }, // 11:50
      { subject: "BM", classroom: "6 EFISIEN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NORHAZAH BT MAT PIAH",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "BI", classroom: "5 LITERASI", duration: 30 }, // 9:00
      { subject: "BI", classroom: "5 LITERASI", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BI", classroom: "4 EFEKTIF", duration: 30 }, // 10:50
      { subject: "BI", classroom: "4 EFEKTIF", duration: 30 }, // 11:20
      { subject: "BI", classroom: "4 SETIA", duration: 30 }, // 11:50
      { subject: "BI", classroom: "4 SETIA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NORHIDAYU BT MOHAMAD NORDIN",
    sessions: [
      { subject: "M3", classroom: "5 KARISMA", duration: 30 }, // 7:30
      { subject: "M3", classroom: "5 KARISMA", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "PJ", classroom: "4 CEMER", duration: 30 }, // 9:00
      { subject: "MZ5", classroom: "5 SETIA", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "MZ5", classroom: "5 EFISIEN", duration: 30 }, // 10:20/10:30 *
      { subject: "MZ5", classroom: "5 NEKAD", duration: 30 }, // 10:50
      { subject: "MZ5", classroom: "5 MURNI", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NUR AIMUNI SYAKIRAH BT ROSLAN",
    sessions: [
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "BA", classroom: "6 KARISMA", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "PSV", classroom: "5 SUKSES", duration: 30 }, // 11:20
      { subject: "PSV", classroom: "5 SUKSES", duration: 30 }, // 11:50
      { subject: "BA", classroom: "6 CEMER", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NUR HARIZAH BT SURIANTO",
    sessions: [
      { subject: "TASMEK", classroom: "5 ADIL", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "5 ADIL", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "TASMEK", classroom: "4 LITERASI", duration: 30 }, // 9:50/10:00 *
      { subject: "TASMEK", classroom: "4 LITERASI", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "TASMEK", classroom: "5 BESTARI", duration: 30 }, // 11:50
      { subject: "TASMEK", classroom: "5 BESTARI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NUR SHAHIDA BINTI AZIZ",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "BI", classroom: "5 ADIL", duration: 30 }, // 9:00
      { subject: "BI", classroom: "5 ADIL", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BI", classroom: "6 EFISIEN", duration: 30 }, // 10:50
      { subject: "BI", classroom: "6 EFISIEN", duration: 30 }, // 11:20
      { subject: "BI", classroom: "6 BESTARI", duration: 30 }, // 11:50
      { subject: "BI", classroom: "6 BESTARI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NUR SHAHIRAH BT MOHD AZMI",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "BI", classroom: "4 MURNI", duration: 30 }, // 9:50/10:00 *
      { subject: "BI", classroom: "4 MURNI", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BI", classroom: "6 KARISMA", duration: 30 }, // 11:50
      { subject: "BI", classroom: "6 KARISMA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NURUL ASILAH BT TARMIZI",
    sessions: [
      { subject: "BI", classroom: "4 CEMER", duration: 30 }, // 7:30
      { subject: "BI", classroom: "4 CEMER", duration: 30 }, // 8:00
      { subject: "PJ", classroom: "5 ADIL", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "PJ", classroom: "5 SETIA", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BI", classroom: "5 SETIA", duration: 30 }, // 11:50
      { subject: "BI", classroom: "5 SETIA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "NURUL FAHIMA BT HALIAH",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "TASMEK", classroom: "4 LITERASI", duration: 30 }, // 9:50/10:00 *
      { subject: "TASMEK", classroom: "4 LITERASI", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "RABIATUL ADAWIYYAH BT RAMLEE",
    sessions: [
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "RAHIMAH BT MOHD ZAIN",
    sessions: [
      { subject: "SJRH", classroom: "6 BESTARI", duration: 30 }, // 7:30
      { subject: "SJRH", classroom: "6 BESTARI", duration: 30 }, // 8:00
      { subject: "BM", classroom: "4 EFEKTIF", duration: 30 }, // 8:30
      { subject: "BM", classroom: "4 EFEKTIF", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BM", classroom: "6 BESTARI", duration: 30 }, // 10:50
      { subject: "BM", classroom: "6 BESTARI", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "RAHIMAH BT MOKHTAR",
    sessions: [
      { subject: "BM", classroom: "6 EFEKTIF", duration: 30 }, // 7:30
      { subject: "BM", classroom: "6 EFEKTIF", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "BM", classroom: "5 NEKAD", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "BM", classroom: "5 NEKAD", duration: 30 }, // 10:20/10:30 *
      { subject: "BM", classroom: "6 SUKSES", duration: 30 }, // 10:50
      { subject: "BM", classroom: "6 SUKSES", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "RAJA NORAINI BT RAJA ABDULLAH",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "SN", classroom: "5 NEKAD", duration: 30 }, // 8:30
      { subject: "SN", classroom: "5 NEKAD", duration: 30 }, // 9:00
      { subject: "SN", classroom: "6 SUKSES", duration: 30 }, // 9:30 *
      { subject: "SN", classroom: "6 SUKSES", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "SN", classroom: "6 MURNI", duration: 30 }, // 11:50
      { subject: "SN", classroom: "6 MURNI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "RASIDAH BT GULAM MHAMAD",
    sessions: [
      { subject: "BM", classroom: "4 ADIL", duration: 30 }, // 7:30
      { subject: "BM", classroom: "4 ADIL", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "SN", classroom: "4 RAJIN", duration: 30 }, // 10:50
      { subject: "SN", classroom: "4 RAJIN", duration: 30 }, // 11:20
      { subject: "BM", classroom: "4 KARISMA", duration: 30 }, // 11:50
      { subject: "BM", classroom: "4 KARISMA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ROHANA BT HARUN",
    sessions: [
      { subject: "M3", classroom: "5 RAJIN", duration: 30 }, // 7:30
      { subject: "M3", classroom: "5 RAJIN", duration: 30 }, // 8:00
      { subject: "M3", classroom: "5 RAJIN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "SN", classroom: "6 EFISIEN", duration: 30 }, // 9:30 *
      { subject: "SN", classroom: "6 EFISIEN", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "PSV", classroom: "5 SETIA", duration: 30 }, // 10:50
      { subject: "PSV", classroom: "5 SETIA", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ROHAYA BT HASHIM",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "M3", classroom: "6 SUKSES", duration: 30 }, // 8:30
      { subject: "M3", classroom: "6 SUKSES", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "AKADEMIK", classroom: "4 EFEKTIF/4 LITERASI", duration: 30 }, // 9:50/10:00 *
      { subject: "AKADEMIK", classroom: "4 EFEKTIF/4 LITERASI", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "M3", classroom: "5 LITERASI", duration: 30 }, // 11:50
      { subject: "M3", classroom: "5 LITERASI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ROSMADI B JOHARI",
    sessions: [
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ROSMILAH BT BADRUSAMIN",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "PAI(JAWI)", classroom: "4 CEMER", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "TASMEK", classroom: "4 EFEKTIF", duration: 30 }, // 9:50/10:00 *
      { subject: "TASMEK", classroom: "4 EFEKTIF", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "4 CEMER", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ROSNIDA BT HUSSAIN",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "BI", classroom: "4 ADIL", duration: 30 }, // 8:30
      { subject: "BI", classroom: "4 ADIL", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "BI", classroom: "5 KARISMA", duration: 30 }, // 10:20/10:30 *
      { subject: "BI", classroom: "5 KARISMA", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BI", classroom: "4 LITERASI", duration: 30 }, // 11:50
      { subject: "BI", classroom: "4 LITERASI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "RUZILAWATI BT MAHADI",
    sessions: [
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "6 EFISIEN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "PAI(ULUM)", classroom: "6 SETIA", duration: 30 }, // 9:30 *
      { subject: "PAI(ULUM)", classroom: "6 SETIA", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "6 RAJIN", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SITI FATIMAH BT ABDULLAH",
    sessions: [
      { subject: "PJ", classroom: "6 KARISMA", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "PJ", classroom: "6 EFISIEN", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "BM", classroom: "4 LITERASI", duration: 30 }, // 10:50
      { subject: "BM", classroom: "4 LITERASI", duration: 30 }, // 11:20
      { subject: "BM", classroom: "4 BESTARI", duration: 30 }, // 11:50
      { subject: "BM", classroom: "4 BESTARI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SITI JAMILAH BT HASSAN",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "PSV", classroom: "4 LITERASI", duration: 30 }, // 8:30
      { subject: "PSV", classroom: "4 LITERASI", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "SN", classroom: "4 ADIL", duration: 30 }, // 9:50/10:00 *
      { subject: "SN", classroom: "4 ADIL", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "SN", classroom: "4 SUKSES", duration: 30 }, // 11:50
      { subject: "SN", classroom: "4 SUKSES", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SITI JAMILAH BT OTHMAN",
    sessions: [
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "6 MURNI", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "PRA", classroom: "PRA", duration: 30 }, // 9:50/10:00 *
      { subject: "PRA", classroom: "PRA", duration: 30 }, // 10:20/10:30 *
      { subject: "TASMEK", classroom: "6 KARISMA", duration: 30 }, // 10:50
      { subject: "TASMEK", classroom: "6 KARISMA", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SITI MARIANA BT YA'ACOB",
    sessions: [
      { subject: "BI", classroom: "6 SUKSES", duration: 30 }, // 7:30
      { subject: "BI", classroom: "6 SUKSES", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "BI", classroom: "5 EFEKTIF", duration: 30 }, // 9:00
      { subject: "BI", classroom: "5 EFEKTIF", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BI", classroom: "5 CEMER", duration: 30 }, // 11:50
      { subject: "BI", classroom: "5 CEMER", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SRIDHAVENYA A/P PANIER SELVAM",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "BI", classroom: "5 RAJIN", duration: 30 }, // 9:00
      { subject: "BI", classroom: "5 RAJIN", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "BI", classroom: "5 SUKSES", duration: 30 }, // 10:20/10:30 *
      { subject: "BI", classroom: "5 SUKSES", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SUZANA BT ABD MAJID",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "BM", classroom: "5 KARISMA", duration: 30 }, // 8:30
      { subject: "BM", classroom: "5 KARISMA", duration: 30 }, // 9:00
      { subject: "SJRH", classroom: "6 CEMER", duration: 30 }, // 9:30 *
      { subject: "SJRH", classroom: "6 CEMER", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 20 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "SJRH", classroom: "6 SUKSES", duration: 30 }, // 11:50
      { subject: "SJRH", classroom: "6 SUKSES", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SYAMIN AIZZA BT MOHD SUHAIMI",
    sessions: [
      { subject: "TASMEK", classroom: "4 SETIA", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "4 SETIA", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "PAI(ULUM)", classroom: "4 RAJIN", duration: 30 }, // 9:50/10:00 *
      { subject: "PAI(ULUM)", classroom: "4 RAJIN", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 11:20
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 11:50
      { subject: "AL-QURAN", classroom: "5 KARISMA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SYARUL AZMI B RAZALLI",
    sessions: [
      { subject: "RBT", classroom: "4 EFEKTIF", duration: 30 }, // 7:30
      { subject: "RBT", classroom: "4 EFEKTIF", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "PJ", classroom: "6 MURNI", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "RBT", classroom: "6 MURNI", duration: 30 }, // 10:50
      { subject: "RBT", classroom: "6 MURNI", duration: 30 }, // 11:20
      { subject: "RBT", classroom: "4 NEKAD", duration: 30 }, // 11:50
      { subject: "RBT", classroom: "4 NEKAD", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "SYED MAHDZAR B SYED HASSAN",
    sessions: [
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 7:30
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 8:00
      { subject: "AL-QURAN", classroom: "5 EFEKTIF", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "PAI(JAWI)", classroom: "5 SUKSES", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "PAI(ULUM)", classroom: "5 RAJIN", duration: 30 }, // 10:20/10:30 *
      { subject: "PAI(ULUM)", classroom: "5 RAJIN", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "TASMEK", classroom: "5 BESTARI", duration: 30 }, // 11:50
      { subject: "TASMEK", classroom: "5 BESTARI", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "WAN FAIZA BT WAN YUSOFF",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "M3", classroom: "6 LITERASI", duration: 30 }, // 8:00
      { subject: "M3", classroom: "6 LITERASI", duration: 30 }, // 8:30
      { subject: "PSV", classroom: "5 EFISIEN", duration: 30 }, // 9:00
      { subject: "PSV", classroom: "5 EFISIEN", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "WAN NOOR ADILA BT WAN MAHMOD",
    sessions: [
      { subject: "TASMEK", classroom: "4 SETIA", duration: 30 }, // 7:30
      { subject: "TASMEK", classroom: "4 SETIA", duration: 30 }, // 8:00
      { subject: "PAI(ULUM)", classroom: "6 ADIL", duration: 30 }, // 8:30
      { subject: "PAI(ULUM)", classroom: "6 ADIL", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "PAI(JAWI)", classroom: "6 ADIL", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "WAN NUR MONAWARAH BT WAN AYUB",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ZAIMANIZAYUSNI BT ZAINUDDIN",
    sessions: [
      { subject: "SN", classroom: "6 CEMER", duration: 30 }, // 7:30
      { subject: "SN", classroom: "6 CEMER", duration: 30 }, // 8:00
      { subject: "SN", classroom: "5 SETIA", duration: 30 }, // 8:30
      { subject: "SN", classroom: "5 SETIA", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "SN", classroom: "5 MURNI", duration: 30 }, // 10:20/10:30 *
      { subject: "SN", classroom: "5 MURNI", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "SN", classroom: "6 ADIL", duration: 30 }, // 11:50
      { subject: "SN", classroom: "6 ADIL", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ZAINUDDIN B ALI",
    sessions: [
      { subject: "PJ", classroom: "4 KARISMA", duration: 30 }, // 7:30
      { subject: "", classroom: "", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "PJ", classroom: "5 KARISMA", duration: 30 }, // 9:30 *
      { subject: "", classroom: "", duration: 20 }, // 9:50/10:00 *
      { subject: "PJ", classroom: "5 LITERAS", duration: 30 }, // 10:20/10:30 *
      { subject: "RBT", classroom: "4 MURNI", duration: 30 }, // 10:50
      { subject: "RBT", classroom: "4 MURNI", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ZALEHA BT AHMAD",
    sessions: [
      { subject: "PSV", classroom: "6 SETIA", duration: 30 }, // 7:30
      { subject: "PSV", classroom: "6 SETIA", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "MZ4", classroom: "4 EFISIEN", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "", classroom: "", duration: 30 }, // 9:50/10:00 *
      { subject: "", classroom: "", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "MZ6", classroom: "6 ADIL", duration: 30 }, // 11:20
      { subject: "MZ6", classroom: "6 CEMER", duration: 30 }, // 11:50
      { subject: "MZ6", classroom: "6 SETIA", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ZALENA BT RASEDIN",
    sessions: [
      { subject: "BM", classroom: "5 SUKSES", duration: 30 }, // 7:30
      { subject: "BM", classroom: "5 SUKSES", duration: 30 }, // 8:00
      { subject: "", classroom: "", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "BM", classroom: "4 CEMER", duration: 30 }, // 9:50/10:00 *
      { subject: "BM", classroom: "4 CEMER", duration: 30 }, // 10:20/10:30 *
      { subject: "", classroom: "", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "BM", classroom: "5 EFEKTIF", duration: 30 }, // 11:50
      { subject: "BM", classroom: "5 EFEKTIF", duration: 30 }, // 12:20
    ]
  },
  {
    teacher: "ZUMARIAH BT AHMAD",
    sessions: [
      { subject: "", classroom: "", duration: 30 }, // 7:30
      { subject: "M3", classroom: "4 EFISIEN", duration: 30 }, // 8:00
      { subject: "M3", classroom: "4 EFISIEN", duration: 30 }, // 8:30
      { subject: "", classroom: "", duration: 30 }, // 9:00
      { subject: "", classroom: "", duration: 20 }, // 9:30 *
      { subject: "M3", classroom: "4 SETIA", duration: 30 }, // 9:50/10:00 *
      { subject: "M3", classroom: "4 SETIA", duration: 30 }, // 10:20/10:30 *
      { subject: "M3", classroom: "4 SETIA", duration: 30 }, // 10:50
      { subject: "", classroom: "", duration: 30 }, // 11:20
      { subject: "", classroom: "", duration: 30 }, // 11:50
      { subject: "", classroom: "", duration: 30 }, // 12:20
    ]
  }
];

const period = [ 
  "7:30", "8:00", "8:30", "9:00", "9:30", "9:50", "10:20", "10:50", "11:20", "11:50", "12:20" 
];