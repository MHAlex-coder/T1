import { useState, useMemo, useRef } from 'react'
import {
  ArrowLeft,
  ArrowUpDown,
  ArrowLeftRight,
  RotateCw,
  PackagePlus,
  PackageMinus,
  Layers,
  Wrench,
  Zap,
  Code2,
  ShieldCheck,
  FileText,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  AlertCircle,
  Info,
  Factory,
  Cog,
  Box,
  Move,
  Grip,
  CircuitBoard,
  Settings,
  Frame,
  MonitorSmartphone,
  Cable,
  ScanLine,
  Gauge,
  Lightbulb,
  PanelTop,
  TriangleAlert,
  Repeat,
  Search,
  X,
  Hash,
  FolderTree,
  FolderOpen,
  Folder,
  ExternalLink,
  Network,
  Pencil,
  Upload,
  Trash2,
  Save,
  Download,
  Wind,
} from 'lucide-react'
import Sandbox from './Sandbox'

const APP_I18N = {
  sv: {
    appTitle: 'Building Block Arkitektur',
    appSubtitle: 'Modulär produktstruktur — Conveyor Systems',
    overviewTab: 'Översikt',
    builderTab: 'BB Builder',
    phase: 'Fas 1 — Prototyp',
    standardizationDegree: 'Standardiseringsgrad',
    standard: 'Standard',
    configurable: 'Konfigurerbara',
    customized: 'Kundanpassade',
    moduleReuse: 'Modulåteranvändning',
    weightedAverage: 'Vägt snitt av alla modulers mognadsnivå',
    zeroEngineering: 'Noll konstruktionstid',
    parametricAdaptation: 'Parametrisk anpassning',
    uniqueEngineering: 'Unik konstruktion',
    sharedModulesText: '{shared} av {unique} moduler delas',
    backToOverview: 'Tillbaka till översikt',
    readGuide: 'Läsguide — Standardiseringsnivåer',
    buildingBlocks: 'Building Blocks',
    machinesAndStations: 'maskiner & stationer',
    searchPlaceholder: 'Sök Building Blocks — namn, modul, beskrivning, BB-nummer, MA-nummer, CI-nummer...',
    searchMatches: '{matches} av {total} Building Blocks matchar "{query}"',
    noHits: 'inga träffar, prova ett annat sökord',
    clickInspect: 'Klicka för att inspektera →',
    moduleSubsystem: 'Modul (delsystem)',
    matrixTitle: 'Modul × Building Block — Standardiseringsmatris',
    matrixDesc: 'Visar vilka delsystem som ingår i varje Building Block, deras standardiseringsnivå och vilka som delas över maskintyper.',
    matrixLegendMA: 'MA-nummer',
    matrixLegendCustomId: 'Eget ID',
    bbCount: 'Antal BBs',
    sharedModule: 'Delad modul',
    reusedIn: 'Återanvänds i:',
    standardization: 'Standardisering',
    modules: 'moduler',
    bbLevel: 'Building Block-nivå: 1 maskin/station',
    businessImpact: 'Affärspåverkan',
    sharedOfTotal: '{shared} delade av {total}',
    sharedSection: 'Delade moduler — återanvänds i flera Building Blocks',
    uniqueSection: 'Unika moduler — specifika för {name}',
    narrativeTitle: 'Produktarkitektur — Varför det spelar roll',
    narrativeBBBody: 'En komplett maskin som Sälj presenterar. Kunden ser en produkt med fast pris och leveranstid.',
    narrativeModuleTitle: 'Moduler (Delsystem)',
    narrativeModuleBody: 'Fysiska byggsatser standardiseras och delas över maskiner — nyckeln till lönsamhet.',
    narrativeDisciplineTitle: 'Discipliner',
    narrativeDisciplineBody: 'Varje modul kräver leverabler från Mek, El, Prog, Säk och Dok. Standardiserade moduler har färdiga leverabler.',
    moreStandardized: 'Ju fler moduler som är Standard eller Konfigurerbara:',
    lessLead: 'Kortare ledtid per projekt',
    lowerCost: 'Lägre konstruktionskostnad',
    higherQuality: 'Högre kvalitet — beprövade lösningar',
    moreProjects: 'Fler projekt per år, samma resurser',
    customWhere: 'Var Kundanpassade moduler finns → där blöder vi tid & pengar:',
    customModulesCount: '{name}: {count} kundanpassade moduler',
    optionsAvailable: '+{count} optioner',
    optionsSection: 'Tillgängliga optioner',
    optionEnabled: 'Aktiverad',
    optionDisabled: 'Inaktiverad',
    optionModules: '{count} moduler',
    optionBadge: 'OPT',
    topologyTab: 'Topology',
    topologyTitle: 'BB Topology — Mappstruktur',
    topologyDesc: 'Visar hela Building Block-strukturen som ett mappträd baserat på BB ID-segmenten. Klicka dig ner till lägsta nivån för att se vilka moduler som ingår i varje BB.',
    topologyModules: 'Moduler i detta Building Block',
    topologyNoModules: 'Inga moduler tillagda',
    topologyNoBBs: 'Inga Building Blocks skapade ännu. Använd BB Builder för att skapa ditt första BB.',
    topologyDocLink: 'Dokumentationslänk',
    saveToLibrary: 'Spara till bibliotek',
    openInBuilder: 'Öppna i BB Builder',
    importBB: 'Importera BB',
    deleteBBFromLibrary: 'Ta bort från bibliotek',
    libraryEmpty: 'Inga sparade Building Blocks ännu. Skapa och spara ditt första BB i BB Builder.',
    confirmDeleteBB: 'Ta bort detta BB från biblioteket?',
    bbDeclaration: 'BB-Deklaration',
    interactiveTest: 'Interaktiv test',
    segmentConfig: 'Segment-konfiguration',
    dictionaryTitle: 'Dictionary — Maskintyp-specifika definitioner',
    serialDefs: 'Serial-definitioner',
    variantDefs: 'Variant-definitioner',
    invalidCombos: 'Ogiltiga kombinationer',
    comboWarning: '⚠ Ogiltig kombination: {serial} + {variant} är inte tillåten för denna maskintyp.',
    deprecated: 'Utgången',
    active: 'Aktiv',
    addEntry: 'Lägg till',
    addRule: 'Ny regel',
    aliasLabel: 'Alias',
    specsLabel: 'Teknisk spec',
    statusLabel: 'Status',
    dependsOnType: 'Styrs av maskintyp (Dictionary)',
    noDict: 'Inga definitioner för denna maskintyp.',
    codeLabel: 'Kod',
    bbIdConfig: 'BB ID-konfiguration',
    bbIdConfigDesc: 'Definiera ID-strukturen. Testa kombinationer i panelen nedan.',
    selectableCodesLabel: 'Valbara koder',
    meaningLabel: 'Förklaring',
    removeCombo: 'Ta bort',
  },
  en: {
    appTitle: 'Building Block Architecture',
    appSubtitle: 'Modular product structure',
    overviewTab: 'Overview',
    builderTab: 'BB Builder',
    phase: 'Phase 1 — Prototype',
    standardizationDegree: 'Standardization',
    standard: 'Standard',
    configurable: 'Configurable',
    customized: 'Custom',
    moduleReuse: 'Module reuse',
    weightedAverage: 'Weighted average across all module maturity levels',
    zeroEngineering: 'Zero engineering time',
    parametricAdaptation: 'Parametric adaptation',
    uniqueEngineering: 'Unique engineering',
    sharedModulesText: '{shared} of {unique} modules are shared',
    backToOverview: 'Back to overview',
    readGuide: 'Reading guide — Standardization levels',
    buildingBlocks: 'Building Blocks',
    machinesAndStations: 'machines & stations',
    searchPlaceholder: 'Search Building Blocks — name, module, description, BB number, MA number, CI number...',
    searchMatches: '{matches} of {total} Building Blocks match "{query}"',
    noHits: 'no matches, try another keyword',
    clickInspect: 'Click to inspect →',
    moduleSubsystem: 'Module (subsystem)',
    matrixTitle: 'Module × Building Block — Standardization matrix',
    matrixDesc: 'Shows which subsystems are included in each Building Block, their standardization level, and what is shared across machine types.',
    matrixLegendMA: 'MA number',
    matrixLegendCustomId: 'Custom ID',
    bbCount: 'No. of BBs',
    sharedModule: 'Shared module',
    reusedIn: 'Reused in:',
    standardization: 'Standardization',
    modules: 'modules',
    bbLevel: 'Building Block level: 1 machine/station',
    businessImpact: 'Business impact',
    sharedOfTotal: '{shared} shared of {total}',
    sharedSection: 'Shared modules — reused across multiple Building Blocks',
    uniqueSection: 'Unique modules — specific to {name}',
    narrativeTitle: 'Product architecture — why it matters',
    narrativeBBBody: 'A complete machine presented by Sales. The customer sees a product with fixed price and lead time.',
    narrativeModuleTitle: 'Modules (Subsystems)',
    narrativeModuleBody: 'Physical building kits are standardized and shared across machines — the key to profitability.',
    narrativeDisciplineTitle: 'Disciplines',
    narrativeDisciplineBody: 'Each module requires deliverables from Mech, Elec, SW, Safe, and Docs. Standardized modules have ready deliverables.',
    moreStandardized: 'The more modules are Standard or Configurable:',
    lessLead: 'Shorter lead time per project',
    lowerCost: 'Lower engineering cost',
    higherQuality: 'Higher quality — proven solutions',
    moreProjects: 'More projects per year with the same resources',
    customWhere: 'Where Custom modules exist → this is where time & cost bleed:',
    customModulesCount: '{name}: {count} custom modules',
    optionsAvailable: '+{count} options',
    optionsSection: 'Available options',
    optionEnabled: 'Enabled',
    optionDisabled: 'Disabled',
    optionModules: '{count} modules',
    optionBadge: 'OPT',
    topologyTab: 'Topology',
    topologyTitle: 'BB Topology — Folder Structure',
    topologyDesc: 'Shows the entire Building Block structure as a folder tree based on BB ID segments. Drill down to the lowest level to see which modules belong to each BB.',
    topologyModules: 'Modules in this Building Block',
    topologyNoModules: 'No modules added',
    topologyNoBBs: 'No Building Blocks created yet. Use BB Builder to create your first BB.',
    topologyDocLink: 'Documentation link',
    saveToLibrary: 'Save to Library',
    openInBuilder: 'Open in BB Builder',
    importBB: 'Import BB',
    deleteBBFromLibrary: 'Delete from library',
    libraryEmpty: 'No saved Building Blocks yet. Create and save your first BB in BB Builder.',
    confirmDeleteBB: 'Remove this BB from the library?',
    bbDeclaration: 'BB Declaration',
    interactiveTest: 'Interactive test',
    segmentConfig: 'Segment configuration',
    dictionaryTitle: 'Dictionary — Machine type specific definitions',
    serialDefs: 'Serial definitions',
    variantDefs: 'Variant definitions',
    invalidCombos: 'Invalid combinations',
    comboWarning: '⚠ Invalid combination: {serial} + {variant} is not allowed for this machine type.',
    deprecated: 'Deprecated',
    active: 'Active',
    addEntry: 'Add',
    addRule: 'New rule',
    aliasLabel: 'Alias',
    specsLabel: 'Tech spec',
    statusLabel: 'Status',
    dependsOnType: 'Driven by machine type (Dictionary)',
    noDict: 'No definitions for this machine type.',
    codeLabel: 'Code',
    bbIdConfig: 'BB ID configuration',
    bbIdConfigDesc: 'Define the ID structure. Test combinations in the panel below.',
    selectableCodesLabel: 'Selectable codes',
    meaningLabel: 'Meaning',
    removeCombo: 'Remove',
  },
}

function t(locale, key, vars = {}) {
  const raw = (APP_I18N[locale] && APP_I18N[locale][key]) || APP_I18N.sv[key] || key
  return raw.replace(/\{(\w+)\}/g, (_, token) => vars[token] ?? '')
}

function localized(value, locale) {
  if (value && typeof value === 'object') return value[locale] || value.sv || ''
  return value || ''
}

// ═══════════════════════════════════════════════════════════════════════════════
//  BB LIBRARY — localStorage persistence
// ═══════════════════════════════════════════════════════════════════════════════

const LIBRARY_KEY = 'bb-library'

function loadLibrary() {
  try {
    const raw = localStorage.getItem(LIBRARY_KEY)
    if (!raw) return { modules: [], bbs: [] }
    const data = JSON.parse(raw)
    return { modules: Array.isArray(data.modules) ? data.modules : [], bbs: Array.isArray(data.bbs) ? data.bbs : [] }
  } catch { return { modules: [], bbs: [] } }
}

function persistLibrary(lib) {
  try {
    localStorage.setItem(LIBRARY_KEY, JSON.stringify(lib))
  } catch { /* storage full — fail silently */ }
}

function mergeBBIntoLibrary(library, bb, modules) {
  // Merge modules: update existing, add new
  const modMap = new Map(library.modules.map(m => [m.id, m]))
  for (const m of modules) modMap.set(m.id, m)
  const nextModules = [...modMap.values()]

  // Merge BB: update existing, add new
  const bbIdx = library.bbs.findIndex(b => b.id === bb.id)
  const nextBBs = [...library.bbs]
  if (bbIdx >= 0) nextBBs[bbIdx] = bb
  else nextBBs.push(bb)

  return { modules: nextModules, bbs: nextBBs }
}

function importBBFileIntoLibrary(library, fileData) {
  // v2 single-BB format
  if (fileData.version === 2 && fileData.bb) {
    return mergeBBIntoLibrary(library, fileData.bb, fileData.modules || [])
  }
  // v1 multi-BB format
  if (fileData.bbs && Array.isArray(fileData.bbs)) {
    let lib = { ...library }
    for (const bb of fileData.bbs) {
      lib = mergeBBIntoLibrary(lib, bb, fileData.modules || [])
    }
    return lib
  }
  return library
}

const DEFAULT_BB_ID_CONFIG = {
  segments: [
    { key: 'prefix',      name: { sv: 'Prefix', en: 'Prefix' },         meaning: { sv: 'Typ av block', en: 'Block type' },            options: ['BB'],
      aliases: { BB: { alias: { sv: 'Building Block', en: 'Building Block' } } } },
    { key: 'domain',      name: { sv: 'Domän', en: 'Domain' },           meaning: { sv: 'Applikationsdomän', en: 'Application domain' }, options: ['TRP', 'LFT', 'ROT'],
      aliases: { TRP: { alias: { sv: 'Transport', en: 'Transport' } }, LFT: { alias: { sv: 'Lyft', en: 'Lifting' } }, ROT: { alias: { sv: 'Rotation', en: 'Rotation' } } } },
    { key: 'duty',        name: { sv: 'Duty', en: 'Duty' },             meaning: { sv: 'Belastningsklass', en: 'Load class' },         options: ['LD', 'MD', 'HD'],
      aliases: { LD: { alias: { sv: 'Light Duty', en: 'Light Duty' }, specs: '≤ 200 kg' }, MD: { alias: { sv: 'Medium Duty', en: 'Medium Duty' }, specs: '200–1 000 kg' }, HD: { alias: { sv: 'Heavy Duty', en: 'Heavy Duty' }, specs: '> 1 000 kg' } } },
    { key: 'machineType', name: { sv: 'Maskintyp', en: 'Machine type' }, meaning: { sv: 'Maskinkategori', en: 'Machine category' },     options: ['VTD', 'TC', 'CON'],
      aliases: { VTD: { alias: { sv: 'Vertikal Transfer', en: 'Vertical Transfer Device' } }, TC: { alias: { sv: 'Transfervagn', en: 'Transfer Car' } }, CON: { alias: { sv: 'Transportör', en: 'Conveyor' } } } },
    { key: 'serial',      name: { sv: 'Löpnummer', en: 'Serial' },       meaning: { sv: 'Unik maskindefinition', en: 'Unique machine definition' }, options: ['001', '002', '003'], dependsOn: 'machineType' },
    { key: 'variant',     name: { sv: 'Variant', en: 'Variant' },       meaning: { sv: 'Utförandevariant', en: 'Execution variant' },   options: ['A', 'B', 'C'], dependsOn: 'machineType' },
    { key: 'version',     name: { sv: 'Version', en: 'Version' },       meaning: { sv: 'Revisionsversion', en: 'Revision version' },   options: ['v1', 'v2', 'v3'],
      aliases: { v1: { alias: { sv: 'Version 1', en: 'Version 1' } }, v2: { alias: { sv: 'Version 2', en: 'Version 2' } }, v3: { alias: { sv: 'Version 3', en: 'Version 3' } } } },
  ],
  dictionary: {
    VTD: {
      name: { sv: 'Vertikal Transfer', en: 'Vertical Transfer Device' },
      serial: {
        '001': { alias: { sv: 'Kedjelyft', en: 'Chain Lift' }, specs: 'Max 500 kg, H ≤ 3 m', status: 'active' },
        '002': { alias: { sv: 'Skruvlyft', en: 'Screw Lift' }, specs: 'Max 200 kg, H ≤ 2 m', status: 'active' },
        '003': { alias: { sv: 'Saxlyft', en: 'Scissor Lift' }, specs: 'Max 1 000 kg, H ≤ 1.5 m', status: 'active' },
      },
      variant: {
        A: { alias: { sv: 'Servo', en: 'Servo drive' }, specs: 'Servomotor + absolut encoder', status: 'active' },
        B: { alias: { sv: 'Pneumatisk', en: 'Pneumatic' }, specs: 'Pneumatisk cylinder, 2-pos', status: 'active' },
        C: { alias: { sv: 'Manuell', en: 'Manual' }, specs: 'Handvev / handpump', status: 'deprecated' },
      },
      invalidCombos: [{ serial: '003', variant: 'B' }],
    },
    TC: {
      name: { sv: 'Transfervagn', en: 'Transfer Car' },
      serial: {
        '001': { alias: { sv: 'Rälsstyrd', en: 'Rail Guided' }, specs: 'Fast spår, ±0.5 mm', status: 'active' },
        '002': { alias: { sv: 'Frihjul', en: 'Free Running' }, specs: 'Golvdriven, induktiv styrning', status: 'active' },
        '003': { alias: { sv: 'AGV', en: 'AGV' }, specs: 'Autonom, laser-navigation', status: 'active' },
      },
      variant: {
        A: { alias: { sv: 'Batteri', en: 'Battery' }, specs: 'Li-Ion 48 V', status: 'active' },
        B: { alias: { sv: 'Kabelmatad', en: 'Cable Powered' }, specs: 'Energikedja', status: 'active' },
        C: { alias: { sv: 'Hybrid', en: 'Hybrid' }, specs: 'Batteri + laddstation', status: 'active' },
      },
      invalidCombos: [{ serial: '003', variant: 'B' }],
    },
    CON: {
      name: { sv: 'Transportör', en: 'Conveyor' },
      serial: {
        '001': { alias: { sv: 'Bandtransportör', en: 'Belt Conveyor' }, specs: 'PVC/PU-band, B ≤ 1 200 mm', status: 'active' },
        '002': { alias: { sv: 'Rullbana', en: 'Roller Conveyor' }, specs: 'Ø50 rullar, c/c 100 mm', status: 'active' },
        '003': { alias: { sv: 'Kedjetransportör', en: 'Chain Conveyor' }, specs: 'Dubbel kedja, max 2 000 kg', status: 'active' },
        '004': { alias: { sv: 'Skruvtransportör', en: 'Screw Conveyor' }, specs: 'Bulkmaterial, Ø ≤ 500 mm', status: 'active' },
      },
      variant: {
        A: { alias: { sv: 'Standardstål', en: 'Standard Steel' }, specs: 'S235JR, pulverlack', status: 'active' },
        B: { alias: { sv: 'Rostfritt', en: 'Stainless Steel' }, specs: 'AISI 304, livsmedel', status: 'active' },
        C: { alias: { sv: 'ESD', en: 'ESD' }, specs: 'Antistatisk, R < 10⁹ Ω', status: 'active' },
      },
      invalidCombos: [],
    },
  },
}

function composeCustomId(config, values = {}) {
  return (config?.segments || [])
    .map(seg => (values[seg.key] || '').trim())
    .filter(Boolean)
    .join('-')
}

// ── Dictionary helpers ─────────────────────────────────────────────────────
function getSegmentEntries(config, segKey, currentParts) {
  const seg = (config?.segments || []).find(s => s.key === segKey)
  if (!seg) return []
  if (seg.dependsOn) {
    const parentVal = currentParts?.[seg.dependsOn]
    const dictEntry = config?.dictionary?.[parentVal]?.[segKey]
    if (dictEntry) return Object.entries(dictEntry).map(([code, meta]) => ({ code, alias: meta.alias || {}, specs: meta.specs || '', status: meta.status || 'active' }))
    return (seg.options || []).map(code => ({ code, alias: {}, specs: '', status: 'active' }))
  }
  return (seg.options || []).map(code => ({ code, alias: seg.aliases?.[code]?.alias || {}, specs: seg.aliases?.[code]?.specs || '', status: seg.aliases?.[code]?.status || 'active' }))
}

function getComboWarning(config, parts) {
  const mt = parts?.machineType
  const combos = config?.dictionary?.[mt]?.invalidCombos
  if (!combos) return null
  return combos.find(c => Object.entries(c).every(([k, v]) => parts[k] === v)) || null
}

function buildDeclaration(config, parts, lang) {
  return (config?.segments || []).map(seg => {
    const val = parts?.[seg.key]
    if (!val) return null
    let alias = '', specs = '', status = 'active'
    if (seg.dependsOn) {
      const parentVal = parts[seg.dependsOn]
      const meta = config?.dictionary?.[parentVal]?.[seg.key]?.[val]
      if (meta) { alias = localized(meta.alias, lang); specs = meta.specs || ''; status = meta.status || 'active' }
    } else if (seg.aliases?.[val]) {
      alias = localized(seg.aliases[val].alias, lang); specs = seg.aliases[val].specs || ''; status = seg.aliases[val].status || 'active'
    }
    return { key: seg.key, name: localized(seg.name, lang), code: val, alias, specs, status }
  }).filter(Boolean)
}

function optionLabel(entry, lang) {
  const a = localized(entry.alias, lang)
  const dep = entry.status === 'deprecated' ? ' ⚠' : ''
  return a ? `${entry.code} — ${a}${dep}` : entry.code
}

function BBIdTab({ language = 'sv', config, onChange }) {
  const [drafts, setDrafts] = useState({})
  const [dictDrafts, setDictDrafts] = useState({})
  const [testParts, setTestParts] = useState(() =>
    Object.fromEntries((config?.segments || []).map(seg => [seg.key, seg.options?.[0] || '']))
  )
  const [dictEditType, setDictEditType] = useState(config?.segments?.find(s => s.key === 'machineType')?.options?.[0] || '')

  function updateSegment(index, patch) {
    onChange({ ...config, segments: config.segments.map((seg, i) => i === index ? { ...seg, ...patch } : seg) })
  }
  function updateDictionary(patch) {
    onChange({ ...config, dictionary: { ...config.dictionary, ...patch } })
  }

  // Non-dependent segment: add/remove options
  function addOption(index) {
    const value = (drafts[index] || '').trim()
    if (!value) return
    const seg = config.segments[index]
    if (seg.options.includes(value)) return
    const newConfig = {
      ...config,
      segments: config.segments.map((s, i) => i === index ? { ...s, options: [...s.options, value] } : s)
    }
    // Auto-create dictionary entry for new machineType
    if (seg.key === 'machineType' && !config.dictionary?.[value]) {
      newConfig.dictionary = { ...config.dictionary, [value]: { name: { sv: value, en: value }, serial: {}, variant: {}, invalidCombos: [] } }
    }
    onChange(newConfig)
    setDrafts(prev => ({ ...prev, [index]: '' }))
  }
  function removeOption(index, option) {
    const seg = config.segments[index]
    updateSegment(index, { options: seg.options.filter(o => o !== option) })
  }

  // Dictionary entry CRUD
  function addDictEntry(machineType, segKey) {
    const draftKey = `${machineType}-${segKey}`
    const code = (dictDrafts[draftKey] || '').trim()
    if (!code) return
    const entry = config.dictionary?.[machineType]?.[segKey] || {}
    if (entry[code]) return
    updateDictionary({
      [machineType]: {
        ...config.dictionary[machineType],
        [segKey]: { ...entry, [code]: { alias: { sv: '', en: '' }, specs: '', status: 'active' } }
      }
    })
    setDictDrafts(prev => ({ ...prev, [draftKey]: '' }))
  }
  function updateDictEntry(machineType, segKey, code, patch) {
    const entry = config.dictionary?.[machineType]?.[segKey]?.[code]
    if (!entry) return
    updateDictionary({
      [machineType]: {
        ...config.dictionary[machineType],
        [segKey]: { ...config.dictionary[machineType][segKey], [code]: { ...entry, ...patch } }
      }
    })
  }
  function removeDictEntry(machineType, segKey, code) {
    const entries = { ...config.dictionary[machineType][segKey] }
    delete entries[code]
    updateDictionary({ [machineType]: { ...config.dictionary[machineType], [segKey]: entries } })
  }
  function addInvalidCombo(machineType) {
    const d = config.dictionary[machineType]
    const sKeys = Object.keys(d.serial || {})
    const vKeys = Object.keys(d.variant || {})
    if (!sKeys.length || !vKeys.length) return
    const rule = { serial: sKeys[0], variant: vKeys[0] }
    if ((d.invalidCombos || []).some(c => c.serial === rule.serial && c.variant === rule.variant)) return
    updateDictionary({ [machineType]: { ...d, invalidCombos: [...(d.invalidCombos || []), rule] } })
  }
  function removeInvalidCombo(machineType, idx) {
    const d = config.dictionary[machineType]
    updateDictionary({ [machineType]: { ...d, invalidCombos: d.invalidCombos.filter((_, i) => i !== idx) } })
  }
  function updateInvalidCombo(machineType, idx, field, value) {
    const d = config.dictionary[machineType]
    const combos = [...d.invalidCombos]
    combos[idx] = { ...combos[idx], [field]: value }
    updateDictionary({ [machineType]: { ...d, invalidCombos: combos } })
  }

  // Keep testParts in sync when parent segment changes
  function setTestPart(key, value) {
    setTestParts(prev => {
      const next = { ...prev, [key]: value }
      // If machineType changed, reset dependent segments to first valid option
      if (key === 'machineType') {
        for (const seg of config.segments) {
          if (seg.dependsOn === 'machineType') {
            const entries = getSegmentEntries(config, seg.key, next)
            next[seg.key] = entries[0]?.code || ''
          }
        }
      }
      return next
    })
  }

  const preview = composeCustomId(config, testParts)
  const declaration = buildDeclaration(config, testParts, language)
  const comboWarn = getComboWarning(config, testParts)
  const mtSegIdx = config.segments.findIndex(s => s.key === 'machineType')
  const currentDict = config.dictionary?.[dictEditType] || {}

  return (
    <div className="space-y-6">
      {/* ── Interactive test panel ── */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800">{t(language, 'bbIdConfig')}</h2>
        <p className="text-sm text-slate-500 mt-1">{t(language, 'bbIdConfigDesc')}</p>

        <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50/50 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 mb-3">{t(language, 'interactiveTest')}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
            {config.segments.map(seg => {
              const entries = getSegmentEntries(config, seg.key, testParts)
              return (
                <div key={seg.key}>
                  <label className="text-[10px] text-slate-500 uppercase tracking-wider">{localized(seg.name, language)}</label>
                  <select
                    value={testParts[seg.key] || ''}
                    onChange={e => setTestPart(seg.key, e.target.value)}
                    className="mt-1 w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    {entries.map(entry => (
                      <option key={entry.code} value={entry.code}>{optionLabel(entry, language)}</option>
                    ))}
                  </select>
                </div>
              )
            })}
          </div>

          <p className="mt-3 text-sm text-blue-700 bg-white border border-blue-200 rounded-lg px-3 py-2 font-mono font-semibold">
            {preview}
          </p>

          {comboWarn && (
            <div className="mt-2 flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-lg px-3 py-2 text-sm text-amber-800">
              <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
              {t(language, 'comboWarning', { serial: testParts.serial, variant: testParts.variant })}
            </div>
          )}
        </div>

        {/* BB-Deklaration */}
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">{t(language, 'bbDeclaration')}</p>
          <div className="space-y-1.5">
            {declaration.map(line => (
              <div key={line.key} className="flex items-center gap-2 text-xs">
                <span className="w-20 text-right font-mono font-bold text-slate-600 uppercase truncate">{line.name}</span>
                <span className="text-slate-300">──</span>
                <span className="font-mono font-semibold text-slate-800 min-w-[40px]">{line.code}</span>
                <span className="text-slate-300">──</span>
                <span className="text-slate-700 font-medium">{line.alias || '–'}</span>
                {line.specs && <span className="text-slate-400 ml-1">· {line.specs}</span>}
                {line.status === 'deprecated'
                  ? <span className="ml-auto px-1.5 py-0.5 rounded bg-red-100 text-red-700 text-[10px] font-semibold">⚠ {t(language, 'deprecated')}</span>
                  : line.status === 'active' && line.specs
                    ? <span className="ml-auto px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-700 text-[10px] font-semibold">✓ {t(language, 'active')}</span>
                    : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Segment configuration (non-dependent) ── */}
      <div>
        <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">{t(language, 'segmentConfig')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {config.segments.map((seg, idx) => (
            <div key={seg.key} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-slate-700">{localized(seg.name, language)}</h3>
                <div className="flex items-center gap-2">
                  {seg.dependsOn && <span className="text-[10px] bg-violet-100 text-violet-700 px-2 py-0.5 rounded-full font-medium">{t(language, 'dependsOnType')}</span>}
                  <span className="text-[11px] font-mono bg-slate-100 text-slate-500 px-2 py-0.5 rounded">{seg.key.toUpperCase()}</span>
                </div>
              </div>

              <label className="text-[11px] text-slate-500 uppercase tracking-wider">{t(language, 'meaningLabel')}</label>
              <input
                type="text"
                value={localized(seg.meaning, language)}
                onChange={e => updateSegment(idx, { meaning: { ...seg.meaning, [language]: e.target.value } })}
                className="mt-1 w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />

              {!seg.dependsOn && (
                <div className="mt-3">
                  <label className="text-[11px] text-slate-500 uppercase tracking-wider">{t(language, 'selectableCodesLabel')}</label>
                  <div className="space-y-1 mt-2">
                    {seg.options.map(opt => {
                      const al = seg.aliases?.[opt]
                      return (
                        <div key={opt} className="flex items-center gap-2">
                          <button onClick={() => removeOption(idx, opt)} className="px-2 py-1 text-xs rounded-md bg-slate-100 text-slate-700 hover:bg-red-50 hover:text-red-600 transition-colors font-mono font-semibold min-w-[40px]" title={language === 'sv' ? 'Ta bort' : 'Remove'}>{opt}</button>
                          <input
                            type="text"
                            value={localized(al?.alias, language) || ''}
                            onChange={e => {
                              const aliases = { ...(seg.aliases || {}) }
                              aliases[opt] = { ...(aliases[opt] || {}), alias: { ...(aliases[opt]?.alias || {}), [language]: e.target.value } }
                              updateSegment(idx, { aliases })
                            }}
                            placeholder={t(language, 'aliasLabel')}
                            className="flex-1 px-2 py-1 rounded-md border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-300"
                          />
                          <input
                            type="text"
                            value={al?.specs || ''}
                            onChange={e => {
                              const aliases = { ...(seg.aliases || {}) }
                              aliases[opt] = { ...(aliases[opt] || {}), specs: e.target.value }
                              updateSegment(idx, { aliases })
                            }}
                            placeholder={t(language, 'specsLabel')}
                            className="w-32 px-2 py-1 rounded-md border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-300"
                          />
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={drafts[idx] || ''}
                      onChange={e => setDrafts(prev => ({ ...prev, [idx]: e.target.value }))}
                      placeholder={language === 'sv' ? 'Ny kod...' : 'New code...'}
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button onClick={() => addOption(idx)} className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700">{t(language, 'addEntry')}</button>
                  </div>
                </div>
              )}

              {seg.dependsOn && (
                <p className="mt-3 text-xs text-violet-600 italic">{t(language, 'dependsOnType')} — {language === 'sv' ? 'redigeras i Dictionary-sektionen nedan.' : 'edit in the Dictionary section below.'}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── Dictionary (machine-type specific definitions) ── */}
      <div>
        <h3 className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-3">{t(language, 'dictionaryTitle')}</h3>
        <div className="flex gap-2 mb-4">
          {(config.segments.find(s => s.key === 'machineType')?.options || []).map(mt => (
            <button key={mt} onClick={() => setDictEditType(mt)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${dictEditType === mt ? 'bg-violet-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
              {mt} {config.dictionary?.[mt] ? `— ${localized(config.dictionary[mt].name, language)}` : ''}
            </button>
          ))}
        </div>

        {!config.dictionary?.[dictEditType] ? (
          <p className="text-sm text-slate-500 italic">{t(language, 'noDict')}</p>
        ) : (
          <div className="space-y-4">
            {/* Serial table */}
            {['serial', 'variant'].map(segKey => {
              const entries = currentDict[segKey] || {}
              const draftKey = `${dictEditType}-${segKey}`
              return (
                <div key={segKey} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">{t(language, segKey === 'serial' ? 'serialDefs' : 'variantDefs')} — {dictEditType}</h4>
                  <div className="space-y-1.5">
                    {Object.entries(entries).map(([code, meta]) => (
                      <div key={code} className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                        <span className="font-mono font-bold text-sm text-slate-800 min-w-[40px]">{code}</span>
                        <input
                          type="text"
                          value={localized(meta.alias, language) || ''}
                          onChange={e => updateDictEntry(dictEditType, segKey, code, { alias: { ...meta.alias, [language]: e.target.value } })}
                          placeholder={t(language, 'aliasLabel')}
                          className="flex-1 px-2 py-1 rounded-md border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                        <input
                          type="text"
                          value={meta.specs || ''}
                          onChange={e => updateDictEntry(dictEditType, segKey, code, { specs: e.target.value })}
                          placeholder={t(language, 'specsLabel')}
                          className="w-40 px-2 py-1 rounded-md border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                        <select
                          value={meta.status || 'active'}
                          onChange={e => updateDictEntry(dictEditType, segKey, code, { status: e.target.value })}
                          className="px-2 py-1 rounded-md border border-slate-200 text-xs focus:outline-none focus:ring-1 focus:ring-blue-300"
                        >
                          <option value="active">{t(language, 'active')}</option>
                          <option value="deprecated">{t(language, 'deprecated')}</option>
                        </select>
                        <button onClick={() => removeDictEntry(dictEditType, segKey, code)} className="p-1 rounded text-red-400 hover:text-red-600 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <input
                      type="text"
                      value={dictDrafts[draftKey] || ''}
                      onChange={e => setDictDrafts(prev => ({ ...prev, [draftKey]: e.target.value }))}
                      placeholder={language === 'sv' ? 'Ny kod...' : 'New code...'}
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    <button onClick={() => addDictEntry(dictEditType, segKey)} className="px-3 py-2 rounded-lg bg-violet-600 text-white text-sm font-medium hover:bg-violet-700">{t(language, 'addEntry')}</button>
                  </div>
                </div>
              )
            })}

            {/* Invalid combos */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <h4 className="text-sm font-semibold text-slate-700 mb-3">{t(language, 'invalidCombos')} — {dictEditType}</h4>
              <div className="space-y-1.5">
                {(currentDict.invalidCombos || []).map((combo, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-xs">
                    <span className="font-medium text-amber-800">Serial:</span>
                    <select value={combo.serial} onChange={e => updateInvalidCombo(dictEditType, idx, 'serial', e.target.value)} className="px-2 py-1 rounded-md border border-amber-200 text-xs bg-white">
                      {Object.keys(currentDict.serial || {}).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <span className="font-medium text-amber-800">Variant:</span>
                    <select value={combo.variant} onChange={e => updateInvalidCombo(dictEditType, idx, 'variant', e.target.value)} className="px-2 py-1 rounded-md border border-amber-200 text-xs bg-white">
                      {Object.keys(currentDict.variant || {}).map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <button onClick={() => removeInvalidCombo(dictEditType, idx)} className="ml-auto p-1 rounded text-red-400 hover:text-red-600 hover:bg-red-50"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                ))}
              </div>
              <button onClick={() => addInvalidCombo(dictEditType)} className="mt-2 px-3 py-2 rounded-lg bg-amber-100 text-amber-800 text-xs font-medium hover:bg-amber-200 transition-colors">{t(language, 'addRule')}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  DATA MODEL — Conveyor Machine Builder
//
//  Hierarki:
//    Building Block (BB)  = en maskin/station som Sälj säljer
//      └─ Modul           = fysiskt delsystem / byggsats
//           └─ Discipliner = ingenjörsleverabler (Mek, El, Prog, Säk, Dok)
//
//  Standardiseringsnivåer gäller per modul.
//  Delade moduler (samma ID) återanvänds i flera BBs → standardiseringsvinst.
// ═══════════════════════════════════════════════════════════════════════════════

const MATURITY = {
  standard:   { label: { sv: 'Standard', en: 'Standard' }, icon: CheckCircle2, desc: { sv: 'Fullt standardiserad — återanvänds direkt utan konstruktion', en: 'Fully standardized — reused directly without engineering' } },
  configured: { label: { sv: 'Konfigurerbar', en: 'Configurable' }, icon: Cog, desc: { sv: 'Standardram med parametrisk konfigurering (längd, höjd, kapacitet)', en: 'Standard framework with parametric configuration (length, height, capacity)' } },
  custom:     { label: { sv: 'Kundanpassad', en: 'Custom' }, icon: AlertCircle, desc: { sv: 'Kräver unik konstruktion — huvudkostnads­drivare', en: 'Requires unique engineering — key cost driver' } },
}

// Ingenjörsdiscipliner som leverabler inom varje modul
const DISCIPLINES = [
  { key: 'mek',    label: { sv: 'Mek', en: 'Mech' }, icon: Wrench, tip: { sv: 'Mekanisk konstruktion, 3D, tillverkningsunderlag', en: 'Mechanical engineering, 3D, production drawings' } },
  { key: 'el',     label: { sv: 'El', en: 'Elec' }, icon: Zap, tip: { sv: 'Elschema, kablage, komponentval', en: 'Electrical schematics, cabling, component selection' } },
  { key: 'prog',   label: { sv: 'Prog', en: 'SW' }, icon: Code2, tip: { sv: 'PLC / HMI-program, fältbusskonfig', en: 'PLC / HMI programs, fieldbus configuration' } },
  { key: 'safety', label: { sv: 'Säk', en: 'Safe' }, icon: ShieldCheck, tip: { sv: 'Riskbedömning, säkerhetskretsar, CE', en: 'Risk assessment, safety circuits, CE' } },
  { key: 'dok',    label: { sv: 'Dok', en: 'Docs' }, icon: FileText, tip: { sv: 'Dokumentation, manualer, reservdelslistor', en: 'Documentation, manuals, spare parts lists' } },
  { key: 'other',  label: { sv: 'Annat', en: 'Other' }, icon: Settings, tip: { sv: 'Övriga leverabler och särskilda behov', en: 'Other deliverables and special requirements' } },
]

// ─── Reusable sub-assembly modules ──────────────────────────────────────────
// Modules shared across BBs have the SAME id → this is what drives standardization.

const MODULE_CATALOG = {
  // Shared modules
  ramverk:     { id: 'ramverk',     name: 'Mechanics',                       icon: Frame,            color: 'slate',   desc: 'Load-bearing frame, feet, and mounting points. Parametric in length/height/width.' },
  drivpaket:   { id: 'drivpaket',   name: 'Drive Package',                   icon: Cog,              color: 'blue',    desc: 'Motor, gearbox, and inverter. Standardized power levels.' },
  styrsystem:  { id: 'styrsystem',  name: 'Control System PLC (I/O-Layer)',   icon: CircuitBoard,     color: 'violet',  desc: 'PLC software, HMI panel, I/O modules, and fieldbus configuration.' },
  behavior:    { id: 'behavior',    name: 'Behavior',                        icon: Code2,            color: 'teal',    desc: 'How the Building Block acts under different conditions, including start-up behavior, failure behavior, response to inputs, and state transitions.' },
  elskap:      { id: 'elskap',      name: 'Electrical',                      icon: Cable,            color: 'amber',   desc: 'Cabinet, terminal blocks, cabling, and labeling.' },
  sakerhet:    { id: 'sakerhet',    name: 'Safety System',                   icon: ShieldCheck,      color: 'rose',    desc: 'Emergency stops, safety doors, light curtains, safety PLC, and CE compliance.' },
  dokpaket:    { id: 'dokpaket',    name: 'Training',                        icon: FileText,         color: 'sky',     desc: 'Operation manual, maintenance manual, electrical schematics, spare parts list, and CE docs.' },
  limits:      { id: 'limits',      name: 'Limits',                          icon: TriangleAlert,    color: 'amber',   desc: 'Building Block constraints, e.g. max load, takt time, size limits, safety limits, and media limits.' },
  operatorhmi: { id: 'operatorhmi', name: 'OperatorInterface HMI',            icon: MonitorSmartphone,color: 'blue',    desc: 'HMI panel, status indicators, alarm list, and production counters.' },
  pneumatic:   { id: 'pneumatic',   name: 'Pneumatic',                       icon: Wind,             color: 'cyan',    desc: 'Pneumatic cylinders, valves, FRL units, and air distribution.' },
}

// ─── Building Blocks ────────────────────────────────────────────────────────

const BUILDING_BLOCKS = [
  {
    id: 'demo-station',
    name: 'Demo Station',
    subtitle: 'Example machine (demo)',
    icon: Move,
    gradient: 'from-blue-600 to-blue-700',
    desc: 'This is a demo example showing how to build a machine from modules in BB Builder.',
    modules: [
      { moduleId: 'ramverk',     maturity: 'standard',   disciplines: ['mek'] },
      { moduleId: 'drivpaket',   maturity: 'standard',   disciplines: ['mek', 'el'] },
      { moduleId: 'styrsystem',  maturity: 'standard',   disciplines: ['prog', 'el'] },
      { moduleId: 'behavior',    maturity: 'standard',   disciplines: ['prog', 'el'] },
      { moduleId: 'elskap',      maturity: 'standard',   disciplines: ['el'] },
      { moduleId: 'sakerhet',    maturity: 'configured',  disciplines: ['safety', 'el', 'dok'] },
      { moduleId: 'limits',      maturity: 'configured',  disciplines: ['mek'] },
      { moduleId: 'dokpaket',    maturity: 'standard',   disciplines: ['dok'] },
    ],
  },
  {
    id: 'vertical-transfer',
    name: 'Vertical Transfer',
    subtitle: 'Lift station',
    icon: ArrowUpDown,
    gradient: 'from-violet-600 to-violet-700',
    desc: 'Moves products between levels using chain or screw lift principles. Sized by load, stroke height, and cycle time.',
    modules: [
      { moduleId: 'ramverk',     maturity: 'configured',  disciplines: ['mek'] },
      { moduleId: 'drivpaket',   maturity: 'configured',  disciplines: ['mek', 'el'] },
      { moduleId: 'styrsystem',  maturity: 'configured',  disciplines: ['prog', 'el'] },
      { moduleId: 'behavior',    maturity: 'configured',  disciplines: ['prog', 'el'] },
      { moduleId: 'elskap',      maturity: 'configured',  disciplines: ['el'] },
      { moduleId: 'sakerhet',    maturity: 'custom',      disciplines: ['safety', 'el', 'mek', 'dok'] },
      { moduleId: 'dokpaket',    maturity: 'configured',  disciplines: ['dok'] },
    ],
  },
  {
    id: 'horizontal-transfer',
    name: 'Horizontal Transfer',
    subtitle: 'Cross transfer / shuttle',
    icon: ArrowLeftRight,
    gradient: 'from-cyan-600 to-cyan-700',
    desc: 'Moves goods between parallel lines using shuttle or traverse. Configurable stroke and number of positions.',
    modules: [
      { moduleId: 'ramverk',     maturity: 'configured',  disciplines: ['mek'] },
      { moduleId: 'drivpaket',   maturity: 'standard',   disciplines: ['mek', 'el'] },
      { moduleId: 'styrsystem',  maturity: 'configured',  disciplines: ['prog', 'el'] },
      { moduleId: 'behavior',    maturity: 'configured',  disciplines: ['prog', 'el'] },
      { moduleId: 'elskap',      maturity: 'standard',   disciplines: ['el'] },
      { moduleId: 'sakerhet',    maturity: 'configured',  disciplines: ['safety', 'el', 'dok'] },
      { moduleId: 'dokpaket',    maturity: 'configured',  disciplines: ['dok'] },
    ],
  },
  {
    id: 'turntable',
    name: 'Turn Station',
    subtitle: 'Turntable 90° / 180°',
    icon: RotateCw,
    gradient: 'from-emerald-600 to-emerald-700',
    desc: 'Rotates products to change flow direction. Fully standardized in 90° and 180° variants.',
    modules: [
      { moduleId: 'ramverk',     maturity: 'standard',   disciplines: ['mek'] },
      { moduleId: 'drivpaket',   maturity: 'standard',   disciplines: ['mek', 'el'] },
      { moduleId: 'styrsystem',  maturity: 'standard',   disciplines: ['prog', 'el'] },
      { moduleId: 'behavior',    maturity: 'standard',   disciplines: ['prog', 'el'] },
      { moduleId: 'elskap',      maturity: 'standard',   disciplines: ['el'] },
      { moduleId: 'sakerhet',    maturity: 'standard',   disciplines: ['safety', 'dok'] },
      { moduleId: 'dokpaket',    maturity: 'standard',   disciplines: ['dok'] },
    ],
  },
  {
    id: 'loading-station',
    name: 'Loading Station',
    subtitle: 'Infeed / loading',
    icon: PackagePlus,
    gradient: 'from-orange-500 to-orange-600',
    desc: 'Flow starting point. Manual or automatic infeed. Often customer-specific due to product adaptation.',
    modules: [
      { moduleId: 'ramverk',     maturity: 'configured',  disciplines: ['mek'] },
      { moduleId: 'drivpaket',   maturity: 'standard',   disciplines: ['mek', 'el'] },
      { moduleId: 'operatorhmi', maturity: 'custom',      disciplines: ['prog', 'el'] },
      { moduleId: 'styrsystem',  maturity: 'configured',  disciplines: ['prog', 'el'] },
      { moduleId: 'behavior',    maturity: 'custom',      disciplines: ['prog', 'el'] },
      { moduleId: 'elskap',      maturity: 'configured',  disciplines: ['el'] },
      { moduleId: 'sakerhet',    maturity: 'custom',      disciplines: ['safety', 'el', 'mek', 'dok'] },
      { moduleId: 'dokpaket',    maturity: 'custom',      disciplines: ['dok'] },
    ],
  },
  {
    id: 'unloading-station',
    name: 'Unloading Station',
    subtitle: 'Outfeed / unload',
    icon: PackageMinus,
    gradient: 'from-rose-500 to-rose-600',
    desc: 'Flow end point. Manual or automatic outfeed. Often customer-specific due to product adaptation.',
    modules: [
      { moduleId: 'ramverk',     maturity: 'configured',  disciplines: ['mek'] },
      { moduleId: 'drivpaket',   maturity: 'standard',   disciplines: ['mek', 'el'] },
      { moduleId: 'operatorhmi', maturity: 'custom',      disciplines: ['prog', 'el'] },
      { moduleId: 'styrsystem',  maturity: 'configured',  disciplines: ['prog', 'el'] },
      { moduleId: 'behavior',    maturity: 'custom',      disciplines: ['prog', 'el'] },
      { moduleId: 'elskap',      maturity: 'configured',  disciplines: ['el'] },
      { moduleId: 'sakerhet',    maturity: 'custom',      disciplines: ['safety', 'el', 'mek', 'dok'] },
      { moduleId: 'dokpaket',    maturity: 'custom',      disciplines: ['dok'] },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════════════════════
//  COLORS
// ═══════════════════════════════════════════════════════════════════════════════

const COLORS = {
  slate:   { bg: 'bg-slate-50',   border: 'border-slate-200',   text: 'text-slate-700',   iconBg: 'bg-slate-100' },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-700',   iconBg: 'bg-amber-100' },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-700',  iconBg: 'bg-violet-100' },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-200',    text: 'text-rose-700',    iconBg: 'bg-rose-100' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-200',     text: 'text-sky-700',     iconBg: 'bg-sky-100' },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-200',    text: 'text-teal-700',    iconBg: 'bg-teal-100' },
  orange:  { bg: 'bg-orange-50',  border: 'border-orange-200',  text: 'text-orange-700',  iconBg: 'bg-orange-100' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', iconBg: 'bg-emerald-100' },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-700',    iconBg: 'bg-blue-100' },
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-200',    text: 'text-cyan-700',    iconBg: 'bg-cyan-100' },
}

const MATURITY_COLORS = {
  standard:   { bg: 'bg-emerald-100', text: 'text-emerald-800', bar: 'bg-emerald-500' },
  configured: { bg: 'bg-blue-100',    text: 'text-blue-800',    bar: 'bg-blue-500' },
  custom:     { bg: 'bg-amber-100',   text: 'text-amber-800',   bar: 'bg-amber-500' },
}

// ═══════════════════════════════════════════════════════════════════════════════
//  METRICS
// ═══════════════════════════════════════════════════════════════════════════════

function computeMetrics(blocks) {
  let total = 0, standard = 0, configured = 0, custom = 0
  const uniqueModules = new Set()
  let totalModuleSlots = 0

  for (const bb of blocks) {
    for (const slot of bb.modules) {
      total++
      totalModuleSlots++
      uniqueModules.add(slot.moduleId)
      if (slot.maturity === 'standard') standard++
      else if (slot.maturity === 'configured') configured++
      else custom++
    }
    for (const opt of (bb.options || [])) {
      if (!opt.enabled) continue
      for (const slot of opt.modules) {
        total++
        totalModuleSlots++
        uniqueModules.add(slot.moduleId)
        if (slot.maturity === 'standard') standard++
        else if (slot.maturity === 'configured') configured++
        else custom++
      }
    }
  }

  const score = total > 0
    ? Math.round(((standard * 100 + configured * 60 + custom * 10) / (total * 100)) * 100)
    : 0

  // Reuse ratio: how many module slots use a shared module (appears in >1 BB)
  const moduleBBCount = {}
  for (const bb of blocks) {
    for (const slot of bb.modules) {
      moduleBBCount[slot.moduleId] = (moduleBBCount[slot.moduleId] || 0) + 1
    }
    for (const opt of (bb.options || [])) {
      if (!opt.enabled) continue
      for (const slot of opt.modules) {
        moduleBBCount[slot.moduleId] = (moduleBBCount[slot.moduleId] || 0) + 1
      }
    }
  }
  const sharedModules = Object.entries(moduleBBCount).filter(([, c]) => c > 1)
  const sharedSlots = sharedModules.reduce((sum, [, c]) => sum + c, 0)
  const reusePercent = totalModuleSlots > 0 ? Math.round((sharedSlots / totalModuleSlots) * 100) : 0

  return { total, standard, configured, custom, score, uniqueModules: uniqueModules.size, reusePercent, sharedModules: sharedModules.length }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

function MaturityBadge({ maturity, size = 'sm', language = 'sv' }) {
  const m = MATURITY[maturity]
  const mc = MATURITY_COLORS[maturity]
  const Icon = m.icon
  const cls = size === 'sm' ? 'px-2 py-0.5 text-xs gap-1' : 'px-3 py-1 text-sm gap-1.5'

  return (
    <span className={`inline-flex items-center font-medium rounded-full ${mc.bg} ${mc.text} ${cls}`}>
      <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-4 h-4'} />
      {localized(m.label, language)}
    </span>
  )
}

function DisciplineChips({ disciplines, language = 'sv' }) {
  return (
    <div className="flex flex-wrap gap-1">
      {disciplines.map(dk => {
        const d = DISCIPLINES.find(dd => dd.key === dk)
        if (!d) return null
        const DIcon = d.icon
        return (
          <span
            key={dk}
            title={localized(d.tip, language)}
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-100 text-[10px] font-medium text-slate-500"
          >
            <DIcon className="w-3 h-3" />
            {localized(d.label, language)}
          </span>
        )
      })}
    </div>
  )
}

function ScoreRing({ value, size = 100 }) {
  const r = (size - 12) / 2
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  const color = value >= 70 ? '#10b981' : value >= 40 ? '#3b82f6' : '#f59e0b'

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute -rotate-90">
        <circle cx={size/2} cy={size/2} r={r} stroke="#e2e8f0" strokeWidth="8" fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth="8" fill="none"
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
          className="transition-all duration-700" />
      </svg>
      <span className="text-2xl font-bold text-slate-800">{value}%</span>
    </div>
  )
}

function MetricCard({ label, value, suffix = '', icon: Icon, desc, highlight }) {
  return (
    <div className={`rounded-xl border p-5 shadow-sm ${highlight ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-500">{label}</span>
        <div className={`p-2 rounded-lg ${highlight ? 'bg-blue-100' : 'bg-slate-50'}`}>
          <Icon className={`w-4 h-4 ${highlight ? 'text-blue-500' : 'text-slate-400'}`} />
        </div>
      </div>
      <div className="flex items-end gap-1">
        <span className="text-3xl font-bold text-slate-800">{value}</span>
        {suffix && <span className="text-lg font-medium text-slate-400 mb-0.5">{suffix}</span>}
      </div>
      {desc && <p className="text-xs text-slate-400 mt-1">{desc}</p>}
    </div>
  )
}

// ── BB Card ──────────────────────────────────────────────────────────────────

function fmtBB(n) { return `BB-${String(n || 0).padStart(3, '0')}` }
function fmtMA(n) { return `MA-${String(n || 0).padStart(3, '0')}` }

function BBCard({ bb, moduleCatalog, onClick, onEdit, onDelete, language = 'sv', bbIdConfig }) {
  const Icon = bb.icon
  const counts = { standard: 0, configured: 0, custom: 0 }
  bb.modules.forEach(s => counts[s.maturity]++)

  const total = bb.modules.length
  const pctS = Math.round((counts.standard / total) * 100)
  const pctC = Math.round((counts.configured / total) * 100)
  const pctK = Math.round((counts.custom / total) * 100)

  const bbLabel = (bb.customId || '').trim() || fmtBB(bb.bbNumber)
  const optionCount = (bb.options || []).length
  const optionTooltip = optionCount > 0
    ? (bb.options || []).map((o, i) => `${i + 1}=${o.enabled ? '1' : '0'} ${o.name || '—'}`).join(', ')
    : ''

  // Build variant descriptor from dictionary
  const idParts = bb.customIdParts || {}
  const variantTags = bbIdConfig ? buildDeclaration(bbIdConfig, idParts, language).filter(d => ['machineType','serial','variant'].includes(d.key)) : []

  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 text-left overflow-hidden"
    >
      <div className={`bg-gradient-to-r ${bb.gradient} p-5 pb-7`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">{bb.name}</h3>
              <span className="px-2 py-0.5 rounded-md bg-white/20 text-[11px] font-mono font-bold text-white/90 tracking-wide" title={optionTooltip}>{bbLabel}</span>
            </div>
            <p className="text-sm text-white/70">{bb.subtitle}</p>
          </div>
        </div>
        {/* Variant descriptor strip */}
        {variantTags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {variantTags.map(tag => (
              <span key={tag.key} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-sm text-[10px] text-white/90">
                <span className="font-mono font-bold">{tag.code}</span>
                {tag.alias && <span className="opacity-80">= {tag.alias}</span>}
                {tag.status === 'deprecated' && <span className="text-red-300">⚠</span>}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="p-5 -mt-3">
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{t(language, 'standardizationDegree')}</span>
            <span className="text-xs font-bold text-slate-600">{total} {t(language, 'modules')}</span>
          </div>
          <div className="flex h-3 rounded-full overflow-hidden gap-0.5">
            {pctS > 0 && <div className="bg-emerald-500 rounded-full" style={{ width: `${pctS}%` }} />}
            {pctC > 0 && <div className="bg-blue-500 rounded-full" style={{ width: `${pctC}%` }} />}
            {pctK > 0 && <div className="bg-amber-500 rounded-full" style={{ width: `${pctK}%` }} />}
          </div>
          <div className="flex gap-3 mt-2">
            {counts.standard > 0 && (
              <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" /> {counts.standard} Standard
              </span>
            )}
            {counts.configured > 0 && (
              <span className="text-[10px] text-blue-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> {counts.configured} {t(language, 'configurable')}
              </span>
            )}
            {counts.custom > 0 && (
              <span className="text-[10px] text-amber-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> {counts.custom} {t(language, 'customized')}
              </span>
            )}
          </div>
        </div>

        {/* Options badge */}
        {optionCount > 0 && (
          <div className="mt-2 flex items-center gap-1.5">
            <span className="px-2 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[10px] font-semibold text-orange-700">
              {t(language, 'optionsAvailable', { count: optionCount })}
            </span>
          </div>
        )}

        {/* Module mini-icons */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {bb.modules.map(slot => {
            const mod = moduleCatalog[slot.moduleId]
            if (!mod) return null
            const mc = MATURITY_COLORS[slot.maturity]
            const ModIcon = mod.icon
            const hasMANumber = !!mod.maNumber
            const maLabel = hasMANumber ? fmtMA(mod.maNumber) : null
            const customLabel = (mod.customId || '').trim()
            return (
              <div key={slot.moduleId} className={`p-2 rounded-lg ${mc.bg} flex items-center gap-1`} title={`${maLabel ? `${maLabel} ` : ''}${customLabel ? `${customLabel} ` : ''}${mod.name} — ${localized(MATURITY[slot.maturity].label, language)}`}>
                <ModIcon className={`w-4 h-4 ${mc.text}`} />
                {maLabel && <span className={`text-[9px] font-mono font-bold ${mc.text} opacity-70`}>{maLabel}</span>}
                {customLabel && <span className={`text-[9px] font-mono font-bold ${mc.text} opacity-70`}>{customLabel}</span>}
              </div>
            )
          })}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-slate-400">{t(language, 'clickInspect')}</span>
          <div className="flex items-center gap-1">
            {onEdit && (
              <button onClick={e => { e.stopPropagation(); onEdit(bb.id) }} className="flex items-center gap-1 px-2 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-medium text-blue-700 hover:bg-blue-100 transition-colors" title={t(language, 'openInBuilder')}>
                <Pencil className="w-3 h-3" />
                {t(language, 'openInBuilder')}
              </button>
            )}
            {onDelete && (
              <button onClick={e => { e.stopPropagation(); if (confirm(t(language, 'confirmDeleteBB'))) onDelete(bb.id) }} className="flex items-center gap-1 px-2 py-1 rounded-md bg-red-50 border border-red-200 text-[11px] font-medium text-red-600 hover:bg-red-100 transition-colors" title={t(language, 'deleteBBFromLibrary')}>
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
          {bb.ciProject && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] font-mono font-semibold text-blue-700">
              CI: {bb.ciProject}
            </span>
          )}
          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all" />
        </div>
      </div>
    </button>
  )
}

// ── Module Detail Row (Inspection) ───────────────────────────────────────────

function ModuleDetailRow({ slot, bbId, moduleCatalog, blocks, language = 'sv' }) {
  const mod = moduleCatalog[slot.moduleId]
  if (!mod) return null
  const colors = COLORS[mod.color]
  const mat = MATURITY[slot.maturity]
  const Icon = mod.icon

  // Find other BBs sharing this exact module
  const sharedWith = blocks.filter(
    bb => bb.id !== bbId && bb.modules.some(s => s.moduleId === slot.moduleId)
  )
  const isShared = sharedWith.length > 0

  return (
    <div className={`rounded-xl border ${colors.border} ${colors.bg} p-5`}>
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-3">
          <div className={`p-3 rounded-xl ${colors.iconBg} mt-0.5`}>
            <Icon className={`w-5 h-5 ${colors.text}`} />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              {mod.maNumber && <span className="px-1.5 py-0.5 rounded bg-slate-200 text-[10px] font-mono font-bold text-slate-600 tracking-wide">{fmtMA(mod.maNumber)}</span>}
              {mod.customId && <span className="px-1.5 py-0.5 rounded bg-blue-50 text-[10px] font-mono font-bold text-blue-700 tracking-wide">{mod.customId}</span>}
              <h4 className={`font-semibold ${colors.text}`}>{mod.name}</h4>
              {isShared && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-medium text-emerald-700">
                  <Repeat className="w-3 h-3" />
                  {t(language, 'sharedModule')}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 max-w-lg">{mod.desc}</p>
            {/* Disciplines */}
            <div className="pt-1">
              <DisciplineChips disciplines={slot.disciplines} language={language} />
            </div>
          </div>
        </div>
        <MaturityBadge maturity={slot.maturity} size="md" language={language} />
      </div>

      {/* Maturity explanation */}
      <div className="mt-3 flex items-start gap-2 ml-[52px]">
        <Info className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
        <span className="text-xs text-slate-500">{localized(mat.desc, language)}</span>
      </div>

      {/* Shared across */}
      {isShared && (
        <div className="mt-3 ml-[52px]">
          <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{t(language, 'reusedIn')}</span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {sharedWith.map(bb => (
              <span key={bb.id} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-medium text-slate-600 shadow-sm">
                <bb.icon className="w-3 h-3" />
                {bb.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Inspection View ──────────────────────────────────────────────────────────

function InspectionView({ bb, blocks, moduleCatalog, onBack, onOpenInBuilder, language = 'sv' }) {
  const Icon = bb.icon
  const counts = { standard: 0, configured: 0, custom: 0 }
  bb.modules.forEach(s => counts[s.maturity]++)

  const score = Math.round(
    ((counts.standard * 100 + counts.configured * 60 + counts.custom * 10) / (bb.modules.length * 100)) * 100
  )

  // Split modules into shared and unique
  const shared = bb.modules.filter(s =>
    blocks.some(other => other.id !== bb.id && other.modules.some(os => os.moduleId === s.moduleId))
  )
  const unique = bb.modules.filter(s =>
    !blocks.some(other => other.id !== bb.id && other.modules.some(os => os.moduleId === s.moduleId))
  )

  const bbLabel = (bb.customId || '').trim() || fmtBB(bb.bbNumber)

  return (
    <div>
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 transition-colors mb-6 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        {t(language, 'backToOverview')}
      </button>

      {onOpenInBuilder && (
        <button onClick={() => onOpenInBuilder(bb.id)} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors mb-6 shadow-sm">
          <Pencil className="w-4 h-4" />
          {t(language, 'openInBuilder')}
        </button>
      )}

      {/* Header */}
      <div className="rounded-2xl p-6 mb-6 shadow-sm border border-slate-200 bg-white">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div className="flex items-start gap-4">
            <div className={`p-3 bg-gradient-to-r ${bb.gradient} rounded-2xl shadow-sm`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold text-slate-800">{bb.name}</h2>
                <span className="px-2 py-0.5 rounded-md bg-slate-100 text-xs font-mono font-bold text-slate-500 tracking-wide">{bbLabel}</span>
              </div>
              <p className="text-slate-500 mt-1">{bb.subtitle}</p>
              <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">{bb.desc}</p>
              <span className="inline-flex items-center mt-3 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                {t(language, 'bbLevel')}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-3 min-w-[170px]">
            <ScoreRing value={score} size={88} />
            <p className="text-xs text-slate-500 mt-2 font-medium">{t(language, 'standardization')}</p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="px-4 py-2 rounded-xl border border-emerald-200 bg-emerald-50 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-sm text-emerald-800 font-medium">{counts.standard} Standard</span>
          </div>
          <div className="px-4 py-2 rounded-xl border border-blue-200 bg-blue-50 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span className="text-sm text-blue-800 font-medium">{counts.configured} {t(language, 'configurable')}</span>
          </div>
          {counts.custom > 0 && (
            <div className="px-4 py-2 rounded-xl border border-amber-200 bg-amber-50 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span className="text-sm text-amber-800 font-medium">{counts.custom} {t(language, 'customized')}</span>
            </div>
          )}
          <div className="px-4 py-2 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2">
            <Repeat className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-sm text-slate-700 font-medium">{t(language, 'sharedOfTotal', { shared: shared.length, total: bb.modules.length })}</span>
          </div>
        </div>
      </div>

      {/* Business insight */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex items-start gap-3">
        <div className="p-1.5 bg-blue-100 rounded-lg mt-0.5 flex-shrink-0">
          <TrendingUp className="w-4 h-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-semibold text-blue-800">{t(language, 'businessImpact')} — {bb.name}</p>
          <p className="text-xs text-blue-600 mt-1 leading-relaxed">
            Denna Building Block består av <strong>{bb.modules.length} moduler</strong>.{' '}
            {shared.length > 0 && <><strong>{shared.length} av dessa delas</strong> med andra Building Blocks, vilket innebär att standardiseringsarbete här ger effekt i hela produktportföljen. </>}
            {counts.custom > 0 && <>{language === 'sv'
              ? <>De <strong>{counts.custom} kundanpassade</strong> modulerna driver huvuddelen av konstruktionskostnaden per projekt — att flytta dessa till "Konfigurerbar" bör prioriteras.</>
              : <>The <strong>{counts.custom} custom</strong> modules drive most engineering cost per project — moving these toward "Configurable" should be prioritized.</>
            }</>}
            {counts.custom === 0 && <>Alla moduler är standardiserade eller konfigurerbara — detta är ett moget Building Block med hög leveranseffektivitet.</>}
          </p>
        </div>
      </div>

      {/* Module sections */}
      {shared.length > 0 && (
        <>
          <div className="mb-4 flex items-center gap-2">
            <Repeat className="w-4 h-4 text-emerald-500" />
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
              {t(language, 'sharedSection')}
            </h3>
          </div>
          <div className="space-y-3 mb-8">
            {shared.map(slot => (
              <ModuleDetailRow key={slot.moduleId} slot={slot} bbId={bb.id} moduleCatalog={moduleCatalog} blocks={blocks} language={language} />
            ))}
          </div>
        </>
      )}

      {unique.length > 0 && (
        <>
          <div className="mb-4 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
              {t(language, 'uniqueSection', { name: bb.name })}
            </h3>
          </div>
          <div className="space-y-3">
            {unique.map(slot => (
              <ModuleDetailRow key={slot.moduleId} slot={slot} bbId={bb.id} moduleCatalog={moduleCatalog} blocks={blocks} language={language} />
            ))}
          </div>
        </>
      )}

      {/* Options section */}
      {(bb.options || []).length > 0 && (
        <div className="mt-8">
          <div className="mb-4 flex items-center gap-2">
            <Settings className="w-4 h-4 text-orange-500" />
            <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
              {t(language, 'optionsSection')}
            </h3>
          </div>
          <div className="space-y-4">
            {(bb.options || []).map(opt => (
              <div key={opt.id} className={`rounded-xl border-2 ${opt.enabled ? 'border-orange-200 bg-orange-50/30' : 'border-slate-200 bg-slate-50/30 opacity-60'} p-4`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${opt.enabled ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-400'}`}>
                    {opt.enabled ? t(language, 'optionEnabled') : t(language, 'optionDisabled')}
                  </span>
                  <span className="text-sm font-semibold text-slate-700">{opt.name || '—'}</span>
                  <span className="text-[10px] text-slate-400">{t(language, 'optionModules', { count: opt.modules.length })}</span>
                </div>
                <div className="space-y-3">
                  {opt.modules.map(slot => (
                    <ModuleDetailRow key={slot.moduleId} slot={slot} bbId={bb.id} moduleCatalog={moduleCatalog} blocks={blocks} language={language} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Cross-Reference Matrix ───────────────────────────────────────────────────

function ModuleMatrix({ blocks, moduleCatalog, language = 'sv' }) {
  // Include option modules in the matrix
  const allModuleIds = [...new Set(blocks.flatMap(bb => [
    ...bb.modules.map(s => s.moduleId),
    ...(bb.options || []).flatMap(o => o.modules.map(s => s.moduleId)),
  ]))]

  // Helper: find slot or option slot for a module in a BB
  function findSlotInfo(bb, modId) {
    const baseSlot = bb.modules.find(s => s.moduleId === modId)
    if (baseSlot) return { slot: baseSlot, isOption: false }
    for (const opt of (bb.options || [])) {
      const optSlot = opt.modules.find(s => s.moduleId === modId)
      if (optSlot) return { slot: optSlot, isOption: true, optionName: opt.name, enabled: opt.enabled }
    }
    return null
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-5 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-slate-400" />
          <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
            {t(language, 'matrixTitle')}
          </h3>
        </div>
        <p className="text-xs text-slate-400 mt-1">
          {t(language, 'matrixDesc')}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left p-3 pl-5 text-xs font-semibold text-slate-500 uppercase tracking-wider sticky left-0 bg-slate-50 z-10 min-w-[200px]">
                <div className="flex flex-col gap-1">
                  <span>{t(language, 'moduleSubsystem')}</span>
                  <span className="text-[9px] normal-case font-medium tracking-normal text-slate-400">
                    {t(language, 'matrixLegendMA')} / {t(language, 'matrixLegendCustomId')}
                  </span>
                </div>
              </th>
              {blocks.map(bb => {
                const BbIcon = bb.icon
                return (
                  <th key={bb.id} className="p-3 text-center min-w-[110px]">
                    <div className="flex flex-col items-center gap-1">
                      <BbIcon className="w-4 h-4 text-slate-400" />
                      <span className="text-[9px] font-mono font-bold text-slate-400">{(bb.customId || '').trim() || fmtBB(bb.bbNumber)}</span>
                      <span className="text-[11px] font-semibold text-slate-600 leading-tight">{bb.name}</span>
                    </div>
                  </th>
                )
              })}
              <th className="p-3 text-center min-w-[70px]">
                <span className="text-[11px] font-semibold text-slate-500">{t(language, 'bbCount')}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {allModuleIds.map((modId, idx) => {
              const mod = moduleCatalog[modId]
              if (!mod) return null
              const ModIcon = mod.icon
              const bbCount = blocks.filter(bb => findSlotInfo(bb, modId)).length

              return (
                <tr key={modId} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className={`p-3 pl-5 sticky left-0 z-10 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                    <div className="flex items-center gap-2">
                      <ModIcon className="w-4 h-4 text-slate-400" />
                      {mod.maNumber && <span className="text-[9px] font-mono font-bold text-slate-400">{t(language, 'matrixLegendMA')}: {fmtMA(mod.maNumber)}</span>}
                      {mod.customId && <span className="text-[9px] font-mono font-bold text-blue-600">{t(language, 'matrixLegendCustomId')}: {mod.customId}</span>}
                      <span className="font-medium text-slate-700">{mod.name}</span>
                      {bbCount > 1 && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold border border-emerald-200">
                          {t(language, 'sharedModule')}
                        </span>
                      )}
                    </div>
                  </td>
                  {blocks.map(bb => {
                    const info = findSlotInfo(bb, modId)
                    return (
                      <td key={bb.id} className="p-3 text-center">
                        {info ? (
                          <div className="flex flex-col items-center gap-0.5">
                            <MaturityBadge maturity={info.slot.maturity} size="sm" language={language} />
                            {info.isOption && <span className="text-[8px] font-bold text-orange-500">{t(language, 'optionBadge')}</span>}
                          </div>
                        ) : <span className="text-slate-300">—</span>}
                      </td>
                    )
                  })}
                  <td className="p-3 text-center">
                    <span className={`text-sm font-bold ${bbCount > 1 ? 'text-emerald-600' : 'text-slate-400'}`}>{bbCount}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  TOPOLOGY VIEW
// ═══════════════════════════════════════════════════════════════════════════════

function buildTopologyTree(blocks, bbIdConfig) {
  const segments = bbIdConfig?.segments || []
  const root = { children: {}, bbs: [] }

  for (const bb of blocks) {
    const parts = bb.customIdParts || {}
    let node = root
    for (const seg of segments) {
      const val = (parts[seg.key] || '').trim()
      if (!val) break
      if (!node.children[val]) {
        node.children[val] = { children: {}, bbs: [], segKey: seg.key }
      }
      node = node.children[val]
    }
    node.bbs.push(bb)
  }
  return root
}

function TopologyModuleRow({ slot, mod, language }) {
  const ModIcon = mod.icon
  const colors = COLORS[mod.color]
  const docUrl = (slot.documentationUrl ?? mod.docUrl ?? '').trim()
  const hasLink = docUrl.length > 0

  function openLink() {
    if (!hasLink) return
    const normalized = /^https?:\/\//i.test(docUrl) ? docUrl : `https://${docUrl}`
    window.open(normalized, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${colors.bg} border ${colors.border}`}>
      <div className={`p-1.5 rounded-md ${colors.iconBg}`}>
        <ModIcon className={`w-3.5 h-3.5 ${colors.text}`} />
      </div>
      <span className={`text-sm font-medium ${colors.text} flex-1 min-w-0`}>{mod.name}</span>
      <MaturityBadge maturity={slot.maturity} size="sm" language={language} />
      {hasLink ? (
        <button
          onClick={openLink}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[11px] font-medium text-blue-700 hover:bg-blue-100 transition-colors cursor-pointer"
          title={docUrl}
        >
          <ExternalLink className="w-3 h-3" />
          {t(language, 'topologyDocLink')}
        </button>
      ) : (
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-slate-50 border border-slate-200 text-[10px] text-slate-400 italic">
          <FileText className="w-3 h-3" />
          {language === 'sv' ? 'Ingen länk' : 'No link'}
        </span>
      )}
    </div>
  )
}

function TopologyNode({ name, node, depth, moduleCatalog, language, bbIdConfig, pathParts = {} }) {
  const [open, setOpen] = useState(depth < 3)
  const childKeys = Object.keys(node.children)
  const hasChildren = childKeys.length > 0 || node.bbs.length > 0

  const segDef = bbIdConfig?.segments?.find(s => s.key === node.segKey)
  const segLabel = segDef ? localized(segDef.name, language) : ''
  const currentParts = node.segKey ? { ...pathParts, [node.segKey]: name } : pathParts

  return (
    <div className={depth > 0 ? 'ml-5 border-l-2 border-slate-200' : ''}>
      <button
        onClick={() => setOpen(o => !o)}
        className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition-colors ${
          open ? 'bg-amber-50/60' : 'hover:bg-slate-50'
        }`}
      >
        {hasChildren ? (
          open ? <ChevronDown className="w-4 h-4 text-amber-500 flex-shrink-0" /> : <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
        ) : <span className="w-4" />}
        {open ? (
          <FolderOpen className="w-5 h-5 text-amber-500 flex-shrink-0" />
        ) : (
          <Folder className="w-5 h-5 text-amber-400 flex-shrink-0" />
        )}
        <span className="font-semibold text-slate-700 text-sm">{name}</span>
        {segLabel && <span className="text-[10px] text-slate-400 font-medium ml-1">({segLabel})</span>}
        {/* Show alias for folder node value from config */}
        {(() => {
          if (!segDef || !bbIdConfig) return null
          let alias = ''
          if (segDef.aliases?.[name]) alias = localized(segDef.aliases[name].alias, language)
          else if (segDef.dependsOn) {
            const parentVal = currentParts?.[segDef.dependsOn]
            const meta = bbIdConfig?.dictionary?.[parentVal]?.[segDef.key]?.[name]
            if (meta) alias = localized(meta.alias, language)
          }
          return alias ? <span className="text-[10px] text-violet-600 font-medium ml-1">— {alias}</span> : null
        })()}
        {node.bbs.length > 0 && (
          <span className="ml-auto text-[10px] bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded-full">
            {node.bbs.length} BB{node.bbs.length > 1 ? 's' : ''}
          </span>
        )}
      </button>

      {open && (
        <div className="mt-0.5">
          {childKeys.sort().map(key => (
            <TopologyNode
              key={key}
              name={key}
              node={node.children[key]}
              depth={depth + 1}
              moduleCatalog={moduleCatalog}
              language={language}
              bbIdConfig={bbIdConfig}
              pathParts={currentParts}
            />
          ))}

          {node.bbs.map(bb => {
            const Icon = bb.icon
            const idParts = bb.customIdParts || {}
            const topoDecl = bbIdConfig ? buildDeclaration(bbIdConfig, idParts, language).filter(d => ['machineType','serial','variant'].includes(d.key)) : []
            return (
              <div key={bb.id} className="ml-5 border-l-2 border-blue-200">
                <div className="ml-3 my-1.5 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${bb.gradient} text-white`}>
                    <Icon className="w-5 h-5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm">{bb.name}</p>
                      <p className="text-[11px] text-white/70">{bb.subtitle}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-white/20 text-[10px] font-mono font-bold">
                      {(bb.customId || '').trim() || `BB-${String(bb.bbNumber || 0).padStart(3, '0')}`}
                    </span>
                  </div>
                  {/* Variant descriptor */}
                  {topoDecl.length > 0 && (
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex flex-wrap gap-2">
                      {topoDecl.map(tag => (
                        <span key={tag.key} className="inline-flex items-center gap-1 text-[10px] text-slate-600">
                          <span className="font-mono font-bold text-slate-800">{tag.code}</span>
                          {tag.alias && <span className="text-slate-500">= {tag.alias}</span>}
                          {tag.specs && <span className="text-slate-400">({tag.specs})</span>}
                          {tag.status === 'deprecated' && <span className="text-red-500">⚠</span>}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="px-4 py-3">
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mb-2">
                      {t(language, 'topologyModules')}
                    </p>
                    {bb.modules.length === 0 ? (
                      <p className="text-xs text-slate-400 italic">{t(language, 'topologyNoModules')}</p>
                    ) : (
                      <div className="space-y-1.5">
                        {bb.modules.map(slot => {
                          const mod = moduleCatalog[slot.moduleId]
                          if (!mod) return null
                          return <TopologyModuleRow key={slot.moduleId} slot={slot} mod={mod} language={language} />
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function TopologyView({ blocks, moduleCatalog, bbIdConfig, language = 'sv' }) {
  const tree = useMemo(() => buildTopologyTree(blocks, bbIdConfig), [blocks, bbIdConfig])
  const childKeys = Object.keys(tree.children)
  const hasBBs = blocks.length > 0

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
            <FolderTree className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">{t(language, 'topologyTitle')}</h2>
            <p className="text-sm text-slate-500 mt-0.5">{t(language, 'topologyDesc')}</p>
          </div>
        </div>
      </div>

      {!hasBBs ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-10 shadow-sm text-center">
          <Network className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <p className="text-sm text-slate-500">{t(language, 'topologyNoBBs')}</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
          <div className="flex items-center gap-2 mb-3 px-3">
            <FolderOpen className="w-5 h-5 text-amber-500" />
            <span className="text-sm font-bold text-slate-700">BB</span>
          </div>
          {childKeys.length > 0 ? (
            childKeys.sort().map(key => (
              <TopologyNode
                key={key}
                name={key}
                node={tree.children[key]}
                depth={0}
                moduleCatalog={moduleCatalog}
                language={language}
                bbIdConfig={bbIdConfig}
                pathParts={{}}
              />
            ))
          ) : (
            /* BBs exist but have no ID parts — show them flat */
            tree.bbs.map(bb => {
              const Icon = bb.icon
              return (
                <div key={bb.id} className="my-1.5 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                  <div className={`flex items-center gap-3 px-4 py-3 bg-gradient-to-r ${bb.gradient} text-white`}>
                    <Icon className="w-5 h-5" />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm">{bb.name}</p>
                      <p className="text-[11px] text-white/70">{bb.subtitle}</p>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mb-2">
                      {t(language, 'topologyModules')}
                    </p>
                    {bb.modules.length === 0 ? (
                      <p className="text-xs text-slate-400 italic">{t(language, 'topologyNoModules')}</p>
                    ) : (
                      <div className="space-y-1.5">
                        {bb.modules.map(slot => {
                          const mod = moduleCatalog[slot.moduleId]
                          if (!mod) return null
                          return <TopologyModuleRow key={slot.moduleId} slot={slot} mod={mod} language={language} />
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  APP
// ═══════════════════════════════════════════════════════════════════════════════

export default function App() {
  const [selectedBB, setSelectedBB] = useState(null)
  const [activeTab, setActiveTab] = useState('overview')
  const [language, setLanguage] = useState('en')
  const [bbIdConfig, setBbIdConfig] = useState(DEFAULT_BB_ID_CONFIG)

  // ── BB Library (localStorage) — source of truth for Overview ──
  const [bbLibrary, setBbLibrary] = useState(() => loadLibrary())
  const importFileRef = useRef(null)

  function saveBBToLibrary({ bb, modules }) {
    setBbLibrary(prev => {
      const next = mergeBBIntoLibrary(prev, bb, modules)
      persistLibrary(next)
      return next
    })
  }

  function deleteBBFromLibrary(bbId) {
    setBbLibrary(prev => {
      const next = { ...prev, bbs: prev.bbs.filter(b => b.id !== bbId) }
      persistLibrary(next)
      return next
    })
  }

  function handleImportBBFile(e) {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return
    let remaining = files.length
    const parsed = []
    files.forEach(file => {
      const reader = new FileReader()
      reader.onload = ev => {
        try { parsed.push(JSON.parse(ev.target.result)) } catch { /* skip */ }
        remaining--
        if (remaining === 0) {
          setBbLibrary(prev => {
            let lib = prev
            for (const data of parsed) lib = importBBFileIntoLibrary(lib, data)
            persistLibrary(lib)
            return lib
          })
        }
      }
      reader.readAsText(file)
    })
    e.target.value = ''
  }

  // ── Sandbox (BB Builder) state — preserved across tab switches ──
  const sandboxDefaultModules = useMemo(() =>
    Object.values(MODULE_CATALOG).map(m => ({
      id: m.id,
      name: m.name,
      iconKey: m.icon === Frame ? 'Frame' : m.icon === Cog ? 'Cog' : m.icon === CircuitBoard ? 'CircuitBoard' : m.icon === Code2 ? 'Code2' : m.icon === Cable ? 'Cable' : m.icon === ShieldCheck ? 'ShieldCheck' : m.icon === FileText ? 'FileText' : m.icon === Move ? 'Move' : m.icon === ScanLine ? 'ScanLine' : m.icon === ArrowUpDown ? 'ArrowUpDown' : m.icon === ArrowLeftRight ? 'ArrowLeftRight' : m.icon === RotateCw ? 'RotateCw' : m.icon === PackagePlus ? 'PackagePlus' : m.icon === PackageMinus ? 'PackageMinus' : m.icon === MonitorSmartphone ? 'MonitorSmartphone' : m.icon === Wind ? 'Wind' : m.icon === TriangleAlert ? 'TriangleAlert' : 'Box',
      color: m.color,
      desc: m.desc,
    }))
  , [])

  const [sandboxModules, setSandboxModules] = useState(sandboxDefaultModules)
  const [sandboxBBs, setSandboxBBs] = useState([])
  const [sandboxKey, setSandboxKey] = useState(0)

  function openBBInBuilder(bbId) {
    const bb = bbLibrary.bbs.find(b => b.id === bbId)
    if (!bb) return
    // Merge library modules with default catalog for the builder
    const modMap = new Map(sandboxDefaultModules.map(m => [m.id, m]))
    for (const m of bbLibrary.modules) modMap.set(m.id, m)
    setSandboxModules([...modMap.values()])
    setSandboxBBs([bb])
    setSandboxKey(k => k + 1)
    setActiveTab('sandbox')
    setSelectedBB(null)
  }

  // ── Icon mapper ──
  const iconFromKey = (key) => ({
    Move, ArrowUpDown, ArrowLeftRight, RotateCw, PackagePlus, PackageMinus,
    Frame, Cog, CircuitBoard, Code2, Cable, ShieldCheck, FileText, ScanLine, MonitorSmartphone, Wind, TriangleAlert,
  }[key] || Box)

  // ── Overview data — derived from library ──
  const overviewModuleCatalog = useMemo(() =>
    Object.fromEntries(
      bbLibrary.modules.map(m => [m.id, {
        id: m.id,
        name: m.name,
        maNumber: m.maNumber,
        customId: m.customId,
        icon: iconFromKey(m.iconKey),
        color: m.color || 'slate',
        desc: m.desc || '',
        docUrl: m.docUrl || '',
      }])
    )
  , [bbLibrary.modules])

  const overviewBlocks = useMemo(() =>
    bbLibrary.bbs.map(bb => ({
      id: bb.id,
      name: bb.name,
      subtitle: bb.subtitle || '',
      bbNumber: bb.bbNumber,
      customId: bb.customId,
      customIdParts: bb.customIdParts || {},
      ciProject: bb.ciProject,
      icon: iconFromKey(bb.iconKey),
      gradient: bb.gradient || 'from-blue-600 to-blue-700',
      desc: bb.desc || '',
      modules: (bb.modules || []).map(s => ({ ...s })),
      options: (bb.options || []).map(o => ({ ...o, modules: o.modules.map(s => ({ ...s })) })),
    }))
  , [bbLibrary.bbs])

  const metrics = useMemo(() => computeMetrics(overviewBlocks), [overviewBlocks])
  const activeBB = overviewBlocks.find(bb => bb.id === selectedBB)

  // ── Search ──
  const [searchQuery, setSearchQuery] = useState('')
  const filteredBlocks = useMemo(() => {
    if (!searchQuery.trim()) return overviewBlocks
    const q = searchQuery.toLowerCase()
    return overviewBlocks.filter(bb => {
      if (bb.name.toLowerCase().includes(q)) return true
      if (bb.subtitle?.toLowerCase().includes(q)) return true
      if (bb.desc?.toLowerCase().includes(q)) return true
      if ((bb.ciProject || '').toLowerCase().includes(q)) return true
      if (bb.bbNumber && `bb-${String(bb.bbNumber).padStart(3,'0')}`.includes(q)) return true
      if ((bb.customId || '').toLowerCase().includes(q)) return true
      // Search serial/variant aliases from dictionary
      if (bb.customIdParts && bbIdConfig) {
        const decl = buildDeclaration(bbIdConfig, bb.customIdParts, language)
        if (decl.some(d => d.alias?.toLowerCase().includes(q) || d.specs?.toLowerCase().includes(q))) return true
      }
      if (bb.modules.some(s => {
        const mod = overviewModuleCatalog[s.moduleId]
        return mod && (
          mod.name.toLowerCase().includes(q) ||
          (mod.maNumber && `ma-${String(mod.maNumber).padStart(3,'0')}`.includes(q)) ||
          ((mod.customId || '').toLowerCase().includes(q))
        )
      })) return true
      if ((bb.options || []).some(opt =>
        (opt.name || '').toLowerCase().includes(q) ||
        opt.modules.some(s => {
          const mod = overviewModuleCatalog[s.moduleId]
          return mod && mod.name.toLowerCase().includes(q)
        })
      )) return true
      return false
    })
  }, [searchQuery, overviewBlocks, overviewModuleCatalog, bbIdConfig, language])

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl">
              <Factory className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-800">{t(language, 'appTitle')}</h1>
              <p className="text-xs text-slate-400">{t(language, 'appSubtitle')}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-slate-100 rounded-lg p-0.5">
              <button
                onClick={() => { setActiveTab('overview'); setSelectedBB(null) }}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'overview' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {t(language, 'overviewTab')}
              </button>
              <button
                onClick={() => setActiveTab('sandbox')}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'sandbox' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {t(language, 'builderTab')}
              </button>
              <button
                onClick={() => { setActiveTab('bbid'); setSelectedBB(null) }}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'bbid' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                BB ID
              </button>
              <button
                onClick={() => { setActiveTab('topology'); setSelectedBB(null) }}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${activeTab === 'topology' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {t(language, 'topologyTab')}
              </button>
            </div>
            <div className="flex bg-slate-100 rounded-lg p-0.5">
              <button
                onClick={() => setLanguage('sv')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${language === 'sv' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                SV
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${language === 'en' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
              >
                EN
              </button>
            </div>
            <span className="hidden sm:inline px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
              {t(language, 'phase')}
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {activeTab === 'sandbox' ? (
          <Sandbox
            key={sandboxKey}
            initialModules={sandboxModules}
            initialBBs={sandboxBBs}
            language={language}
            bbIdConfig={bbIdConfig}
            onDataChange={({ modules, bbs }) => {
              setSandboxModules(modules)
              setSandboxBBs(bbs)
            }}
            onSaveBB={saveBBToLibrary}
          />
        ) : activeTab === 'bbid' ? (
          <BBIdTab language={language} config={bbIdConfig} onChange={setBbIdConfig} />
        ) : activeTab === 'topology' ? (
          <TopologyView blocks={overviewBlocks} moduleCatalog={overviewModuleCatalog} bbIdConfig={bbIdConfig} language={language} />
        ) : (
        <>
        {!activeBB && (
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t(language, 'searchPlaceholder')}
                  className="w-full pl-12 pr-12 py-3.5 text-base bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 placeholder-slate-400 transition-all"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
              )}
              </div>
              <input ref={importFileRef} type="file" accept=".json" multiple onChange={handleImportBBFile} className="hidden" />
              <button onClick={() => importFileRef.current?.click()} className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-sm text-sm font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all whitespace-nowrap">
                <Upload className="w-4 h-4" />
                {t(language, 'importBB')}
              </button>
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-slate-500 pl-1">
                {t(language, 'searchMatches', { matches: filteredBlocks.length, total: overviewBlocks.length, query: searchQuery })}
                {filteredBlocks.length === 0 && <span className="ml-2 text-amber-600">— {t(language, 'noHits')}</span>}
              </p>
            )}
          </div>
        )}
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <MetricCard label={t(language, 'standardizationDegree')} value={metrics.score} suffix="%" icon={TrendingUp} desc={t(language, 'weightedAverage')} highlight />
          <MetricCard label={t(language, 'standard')} value={metrics.standard} suffix={`/ ${metrics.total}`} icon={CheckCircle2} desc={t(language, 'zeroEngineering')} />
          <MetricCard label={t(language, 'configurable')} value={metrics.configured} suffix={`/ ${metrics.total}`} icon={Cog} desc={t(language, 'parametricAdaptation')} />
          <MetricCard label={t(language, 'customized')} value={metrics.custom} suffix={`/ ${metrics.total}`} icon={AlertCircle} desc={t(language, 'uniqueEngineering')} />
          <MetricCard label={t(language, 'moduleReuse')} value={metrics.reusePercent} suffix="%" icon={Repeat} desc={t(language, 'sharedModulesText', { shared: metrics.sharedModules, unique: metrics.uniqueModules })} />
        </div>

        {activeBB ? (
          <InspectionView bb={activeBB} blocks={overviewBlocks} moduleCatalog={overviewModuleCatalog} onBack={() => setSelectedBB(null)} onOpenInBuilder={openBBInBuilder} language={language} />
        ) : (
          <>
            {/* Legend */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-semibold text-slate-600">{t(language, 'readGuide')}</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {Object.entries(MATURITY).map(([key, m]) => (
                  <div key={key} className="flex items-center gap-2">
                    <MaturityBadge maturity={key} size="sm" language={language} />
                    <span className="text-xs text-slate-500">— {localized(m.desc, language)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BB Grid */}
            <div className="flex items-center gap-2 mb-5">
              <Box className="w-5 h-5 text-slate-400" />
              <h2 className="text-xl font-bold text-slate-700">{t(language, 'buildingBlocks')}</h2>
              <span className="text-sm text-slate-400 ml-2">— {filteredBlocks.length} {t(language, 'machinesAndStations')}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {filteredBlocks.length === 0 && overviewBlocks.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <Box className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500 text-sm">{t(language, 'libraryEmpty')}</p>
                </div>
              )}
              {filteredBlocks.map(bb => (
                <BBCard key={bb.id} bb={bb} moduleCatalog={overviewModuleCatalog} onClick={() => setSelectedBB(bb.id)} onEdit={openBBInBuilder} onDelete={deleteBBFromLibrary} language={language} bbIdConfig={bbIdConfig} />
              ))}
            </div>

            {/* Matrix */}
            <ModuleMatrix blocks={overviewBlocks} moduleCatalog={overviewModuleCatalog} language={language} />

            {/* Narrative */}
            <div className="mt-10 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-lg font-bold mb-3">{t(language, 'narrativeTitle')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Box className="w-5 h-5 text-blue-400" />
                    <h4 className="font-semibold">Building Block</h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t(language, 'narrativeBBBody')}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-5 h-5 text-emerald-400" />
                    <h4 className="font-semibold">{t(language, 'narrativeModuleTitle')}</h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t(language, 'narrativeModuleBody')}
                  </p>
                </div>
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-5 h-5 text-violet-400" />
                    <h4 className="font-semibold">{t(language, 'narrativeDisciplineTitle')}</h4>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t(language, 'narrativeDisciplineBody')}
                  </p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-slate-300 text-sm mb-2">{t(language, 'moreStandardized')}</p>
                  <ul className="space-y-1.5">
                    {[t(language, 'lessLead'), t(language, 'lowerCost'), t(language, 'higherQuality'), t(language, 'moreProjects')].map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-slate-300 text-sm mb-2">{t(language, 'customWhere')}</p>
                  <ul className="space-y-1.5">
                    {overviewBlocks.filter(bb => bb.modules.some(s => s.maturity === 'custom')).map(bb => {
                      const customCount = bb.modules.filter(s => s.maturity === 'custom').length
                      const BbIcon = bb.icon
                      return (
                        <li key={bb.id} className="flex items-center gap-2 text-sm text-slate-300">
                          <BbIcon className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          {t(language, 'customModulesCount', { name: bb.name, count: customCount })}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white/10 rounded-lg text-sm">
                  <span className="text-slate-400">{t(language, 'standardization')}:</span>{' '}
                  <span className="font-bold">{metrics.score}%</span>
                </div>
                <div className="px-4 py-2 bg-white/10 rounded-lg text-sm">
                  <span className="text-slate-400">{t(language, 'moduleReuse')}:</span>{' '}
                  <span className="font-bold">{metrics.reusePercent}%</span>
                </div>
              </div>
            </div>
          </>
        )}
        </>
        )}
      </main>
    </div>
  )
}
