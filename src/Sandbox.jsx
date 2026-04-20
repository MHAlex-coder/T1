import { useState, useMemo, useEffect, useRef } from 'react'
import {
  Plus, Trash2, Pencil, Check, X, ChevronDown, ChevronRight, GripVertical,
  Copy, Layers, Repeat, ArrowUpDown, ArrowLeftRight, RotateCw, PackagePlus,
  PackageMinus, Wrench, Zap, Code2, ShieldCheck, FileText, Move, Cog,
  CircuitBoard, Cable, ScanLine, MonitorSmartphone, Frame, Box, Factory,
  Settings, ArrowLeft, ArrowRight, ArrowDown, ArrowUp, Gauge, Lightbulb,
  AlertCircle, CheckCircle2, Info, TrendingUp, BarChart3, Hammer, Ruler,
  Thermometer, Droplets, Wind, Magnet, Blocks, Container, Weight, Plug,
  Radio, Wifi, Camera, Eye, Lock, Unlock, Power, ToggleLeft, Cpu, HardDrive,
  Database, Server, Monitor, Smartphone, Tablet, Printer, Scissors, Pipette,
  Flame, Snowflake, Sun, Moon, Star, Heart, Shield, Target, Crosshair,
  Navigation, Compass, Map, MapPin, Flag, Bookmark, Tag, Hash, AtSign,
  Bell, Volume2, Speaker, Music, Play, Pause, Square, Circle, Triangle,
  Hexagon, Octagon, Diamond, PanelTop, LayoutGrid, Download, Upload,
  Save, FileDown, FileUp,
} from 'lucide-react'

const SB_I18N = {
  sv: {
    searchIcon: 'Sök ikon...',
    catalog: 'Modulkatalog',
    dragToWorkspace: 'Dra moduler till arbetsytan. Klicka för att redigera.',
    moduleCount: 'moduler',
    name: 'Namn',
    description: 'Beskrivning',
    docLink: 'Dokumentationslank',
    icon: 'Ikon',
    color: 'Färg',
    change: 'Byt',
    removeModule: 'Ta bort modul',
    newModule: 'Ny modul',
    title: 'Rubrik',
    standardLevel: 'Standardiseringsnivå',
    disciplines: 'Discipliner',
    openLink: 'Oppna lank',
    saveAsNewModule: 'Spara som ny modul',
    buildBB: 'Bygg Building Block',
    buildComposite: 'Sammansatt modul',
    exportPdf: 'Exportera PDF',
    saveJson: 'Spara JSON',
    loadJson: 'Ladda JSON',
    newBB: 'Ny BB',
    saveAsModule: 'Spara som modul',
    liveMatrix: 'Live-matris',
    realTime: 'Uppdateras i realtid.',
    module: 'Modul',
    bbs: 'BBs',
    standardization: 'Standardisering',
    modules: 'Moduler',
    dropHere: 'Släpp modulen här',
    dragWorkspace: 'Drag and drop arbetsyta',
    configureHint: 'Varje modul kan sedan konfigureras med standardiseringsnivå, discipliner, ikon och färg direkt här.',
    writeBBName: 'Skriv namn på Building Block...',
    writeCompositeName: 'Skriv namn på sammansatt modul...',
    dragFromCatalog: 'Dra moduler från katalogen hit. {count} moduler tillagda.',
    dragForComposite: 'Dra moduler hit för sammansatt modul. {count} delar.',
    save: 'Spara',
    load: 'Ladda',
    duplicate: 'Duplicera',
    delete: 'Ta bort',
    saveToLibrary: 'Spara till bibliotek',
    newBBClear: 'Nytt BB',
    exportJson: 'Exportera JSON',
    savedToLibrary: 'Sparad!',
    clearConfirm: 'Rensa arbetsytan och börja nytt BB?',
    bbIdBuilder: 'BB ID-byggare',
    bbIdPreview: 'Förhandsvisning',
    applyToBB: 'Detta ID sparas på aktiv BB',
    applyToComposite: 'Detta ID sparas på sammansatt modul',
    emptyIdValue: 'Tomt',
    optionSuffixLabel: 'Optionssuffix',
    optionSuffixTooltipTitle: 'Optionspositioner',
    optionPosition: 'Pos {pos}: {name}',
    optionSuffixNone: 'Inga optioner skapade',
    defaultNewModuleName: 'Ny modul',
    defaultNewModuleDesc: 'Beskrivning...',
    createdFromWorkspace: 'Skapad från arbetsytan',
    defaultNewBBName: 'Ny maskin',
    defaultNewBBDropName: 'Ny Building Block',
    composedOf: 'Sammansatt av',
    remove: 'Ta bort',
    colorEditOnlyNew: 'Färg kan bara ändras för nya moduler',
    colorLockedStandard: 'Låst för standardmoduler',
    optionsTitle: 'Optioner',
    addOption: 'Ny option',
    optionName: 'Optionnamn',
    optionEnabled: 'Aktiverad',
    optionDisabled: 'Inaktiverad',
    removeOption: 'Ta bort option',
    optionPlaceholder: 'Skriv optionnamn...',
    optionDropHint: 'Dra moduler hit för att lägga till i optionen',
    optionBadge: 'OPTION',
    optionsCount: '{count} optioner',
    enabledCount: '{enabled} av {total} aktiverade',
    configParams: 'Konfigurationsparametrar',
    customParams: 'Egna parametrar',
    addParam: 'Lägg till',
    paramName: 'Namn',
    paramValue: 'Värde',
    paramUnit: 'Enhet',
    outOfRange: 'Värdet måste vara mellan {min} och {max}',
    articleNumber: 'Artikelnummer',
    costSek: 'Kostnad (SEK)',
    ciProject: 'CI-projekt',
    ciProjectPlaceholder: 'T.ex. CI345',
    bbDeclaration: 'BB-Deklaration',
    comboWarning: '⚠ Ogiltig kombination',
    deprecated: 'Utgången',
    active: 'Aktiv',
  },
  en: {
    searchIcon: 'Search icon...',
    catalog: 'Module catalog',
    dragToWorkspace: 'Drag modules to the workspace. Click to edit.',
    moduleCount: 'modules',
    name: 'Name',
    description: 'Description',
    docLink: 'Link',
    icon: 'Icon',
    color: 'Color',
    change: 'Change',
    removeModule: 'Delete module',
    newModule: 'New module',
    title: 'Title',
    standardLevel: 'Standardization level',
    disciplines: 'Disciplines',
    openLink: 'Open link',
    saveAsNewModule: 'Save as new module',
    buildBB: 'Build Building Block',
    buildComposite: 'Composite module',
    exportPdf: 'Export PDF',
    saveJson: 'Save JSON',
    loadJson: 'Load JSON',
    newBB: 'New BB',
    saveAsModule: 'Save as module',
    liveMatrix: 'Live matrix',
    realTime: 'Updates in real time.',
    module: 'Module',
    bbs: 'BBs',
    standardization: 'Standardization',
    modules: 'Modules',
    dropHere: 'Drop module here',
    dragWorkspace: 'Drag and drop workspace',
    configureHint: 'Each module can then be configured with standardization level, disciplines, icon and color directly here.',
    writeBBName: 'Type Building Block name...',
    writeCompositeName: 'Type composite module name...',
    dragFromCatalog: 'Drag modules from the catalog here. {count} modules added.',
    dragForComposite: 'Drag modules here for composite module. {count} parts.',
    save: 'Save',
    load: 'Load',
    duplicate: 'Duplicate',
    delete: 'Delete',
    saveToLibrary: 'Save to Library',
    newBBClear: 'New BB',
    exportJson: 'Export JSON',
    savedToLibrary: 'Saved!',
    clearConfirm: 'Clear workspace and start a new BB?',
    bbIdBuilder: 'BB ID builder',
    bbIdPreview: 'Preview',
    applyToBB: 'This ID is saved on active BB',
    applyToComposite: 'This ID is saved on composite module',
    emptyIdValue: 'Empty',
    optionSuffixLabel: 'Option suffix',
    optionSuffixTooltipTitle: 'Option positions',
    optionPosition: 'Pos {pos}: {name}',
    optionSuffixNone: 'No options created',
    defaultNewModuleName: 'New module',
    defaultNewModuleDesc: 'Description...',
    createdFromWorkspace: 'Created from workspace',
    defaultNewBBName: 'New machine',
    defaultNewBBDropName: 'New Building Block',
    composedOf: 'Composed of',
    remove: 'Remove',
    colorEditOnlyNew: 'Color can only be changed for new modules',
    colorLockedStandard: 'Locked for standard modules',
    optionsTitle: 'Options',
    addOption: 'New option',
    optionName: 'Option name',
    optionEnabled: 'Enabled',
    optionDisabled: 'Disabled',
    removeOption: 'Remove option',
    optionPlaceholder: 'Type option name...',
    optionDropHint: 'Drag modules here to add to the option',
    optionBadge: 'OPTION',
    optionsCount: '{count} options',
    enabledCount: '{enabled} of {total} enabled',
    configParams: 'Configuration Parameters',
    customParams: 'Custom Parameters',
    addParam: 'Add',
    paramName: 'Name',
    paramValue: 'Value',
    paramUnit: 'Unit',
    outOfRange: 'Value must be between {min} and {max}',
    bbDeclaration: 'BB Declaration',
    comboWarning: '⚠ Invalid combination',
    deprecated: 'Deprecated',
    active: 'Active',
    articleNumber: 'Article number',
    costSek: 'Cost (SEK)',
    ciProject: 'CI Project',
    ciProjectPlaceholder: 'e.g. CI345',
  },
}

function ts(locale, key, vars = {}) {
  const raw = (SB_I18N[locale] && SB_I18N[locale][key]) || SB_I18N.sv[key] || key
  return raw.replace(/\{(\w+)\}/g, (_, token) => vars[token] ?? '')
}

function maturityLabel(key, locale) {
  const labels = {
    standard: { sv: 'Standard', en: 'Standard' },
    configured: { sv: 'Konfigurerbar', en: 'Configurable' },
    custom: { sv: 'Kundanpassad', en: 'Custom' },
  }
  return (labels[key] && labels[key][locale]) || (labels[key] && labels[key].sv) || key
}

function disciplineLabel(key, locale) {
  const labels = {
    mek: { sv: 'Mek', en: 'Mech' },
    el: { sv: 'El', en: 'Elec' },
    prog: { sv: 'Prog', en: 'SW' },
    safety: { sv: 'Säk', en: 'Safe' },
    dok: { sv: 'Dok', en: 'Docs' },
    other: { sv: 'Annat', en: 'Other' },
  }
  return (labels[key] && labels[key][locale]) || (labels[key] && labels[key].sv) || key
}

// ═══════════════════════════════════════════════════════════════════════════════
//  ICON CATALOG
// ═══════════════════════════════════════════════════════════════════════════════

const ICON_OPTIONS = [
  { key: 'Move', icon: Move, label: 'Transport' },
  { key: 'ArrowUpDown', icon: ArrowUpDown, label: 'Vertikal' },
  { key: 'ArrowLeftRight', icon: ArrowLeftRight, label: 'Horisontell' },
  { key: 'RotateCw', icon: RotateCw, label: 'Rotation' },
  { key: 'PackagePlus', icon: PackagePlus, label: 'Inmatning' },
  { key: 'PackageMinus', icon: PackageMinus, label: 'Utmatning' },
  { key: 'Wrench', icon: Wrench, label: 'Verktyg' },
  { key: 'Hammer', icon: Hammer, label: 'Hammare' },
  { key: 'Zap', icon: Zap, label: 'El' },
  { key: 'Code2', icon: Code2, label: 'Program' },
  { key: 'ShieldCheck', icon: ShieldCheck, label: 'Säkerhet' },
  { key: 'FileText', icon: FileText, label: 'Dokument' },
  { key: 'Cog', icon: Cog, label: 'Kugghjul' },
  { key: 'Settings', icon: Settings, label: 'Inställningar' },
  { key: 'CircuitBoard', icon: CircuitBoard, label: 'Kretskort' },
  { key: 'Cable', icon: Cable, label: 'Kabel' },
  { key: 'ScanLine', icon: ScanLine, label: 'Sensor' },
  { key: 'MonitorSmartphone', icon: MonitorSmartphone, label: 'HMI' },
  { key: 'Frame', icon: Frame, label: 'Ram' },
  { key: 'Box', icon: Box, label: 'Låda' },
  { key: 'Factory', icon: Factory, label: 'Fabrik' },
  { key: 'Layers', icon: Layers, label: 'Lager' },
  { key: 'Gauge', icon: Gauge, label: 'Mätare' },
  { key: 'Ruler', icon: Ruler, label: 'Linjal' },
  { key: 'Thermometer', icon: Thermometer, label: 'Temperatur' },
  { key: 'Droplets', icon: Droplets, label: 'Vätska' },
  { key: 'Wind', icon: Wind, label: 'Luft' },
  { key: 'Magnet', icon: Magnet, label: 'Magnet' },
  { key: 'Plug', icon: Plug, label: 'Kontakt' },
  { key: 'Power', icon: Power, label: 'Ström' },
  { key: 'Cpu', icon: Cpu, label: 'CPU' },
  { key: 'HardDrive', icon: HardDrive, label: 'Disk' },
  { key: 'Monitor', icon: Monitor, label: 'Skärm' },
  { key: 'Camera', icon: Camera, label: 'Kamera' },
  { key: 'Eye', icon: Eye, label: 'Vision' },
  { key: 'Lock', icon: Lock, label: 'Lås' },
  { key: 'Shield', icon: Shield, label: 'Sköld' },
  { key: 'Target', icon: Target, label: 'Mål' },
  { key: 'Crosshair', icon: Crosshair, label: 'Sikte' },
  { key: 'Flag', icon: Flag, label: 'Flagga' },
  { key: 'Tag', icon: Tag, label: 'Tagg' },
  { key: 'Lightbulb', icon: Lightbulb, label: 'Lampa' },
  { key: 'Star', icon: Star, label: 'Stjärna' },
  { key: 'Flame', icon: Flame, label: 'Eld' },
  { key: 'Snowflake', icon: Snowflake, label: 'Kyla' },
  { key: 'Circle', icon: Circle, label: 'Cirkel' },
  { key: 'Square', icon: Square, label: 'Kvadrat' },
  { key: 'Triangle', icon: Triangle, label: 'Triangel' },
  { key: 'Hexagon', icon: Hexagon, label: 'Hexagon' },
  { key: 'Diamond', icon: Diamond, label: 'Diamant' },
  { key: 'Blocks', icon: Blocks, label: 'Block' },
  { key: 'LayoutGrid', icon: LayoutGrid, label: 'Rutnät' },
]

const COLOR_OPTIONS = [
  { key: 'slate',   label: 'Grå',     dot: 'bg-slate-500',   bg100: 'bg-slate-100',   text600: 'text-slate-600' },
  { key: 'blue',    label: 'Blå',     dot: 'bg-blue-500',    bg100: 'bg-blue-100',    text600: 'text-blue-600' },
  { key: 'violet',  label: 'Violet',  dot: 'bg-violet-500',  bg100: 'bg-violet-100',  text600: 'text-violet-600' },
  { key: 'cyan',    label: 'Cyan',    dot: 'bg-cyan-500',    bg100: 'bg-cyan-100',    text600: 'text-cyan-600' },
  { key: 'emerald', label: 'Grön',    dot: 'bg-emerald-500', bg100: 'bg-emerald-100', text600: 'text-emerald-600' },
  { key: 'teal',    label: 'Teal',    dot: 'bg-teal-500',    bg100: 'bg-teal-100',    text600: 'text-teal-600' },
  { key: 'amber',   label: 'Gul',     dot: 'bg-amber-500',   bg100: 'bg-amber-100',   text600: 'text-amber-600' },
  { key: 'orange',  label: 'Orange',  dot: 'bg-orange-500',  bg100: 'bg-orange-100',  text600: 'text-orange-600' },
  { key: 'rose',    label: 'Rosa',    dot: 'bg-rose-500',    bg100: 'bg-rose-100',    text600: 'text-rose-600' },
  { key: 'sky',     label: 'Ljusblå', dot: 'bg-sky-500',     bg100: 'bg-sky-100',     text600: 'text-sky-600' },
]

const GRADIENT_OPTIONS = [
  { key: 'from-blue-600 to-blue-700',     label: 'Blå' },
  { key: 'from-violet-600 to-violet-700', label: 'Violet' },
  { key: 'from-cyan-600 to-cyan-700',     label: 'Cyan' },
  { key: 'from-emerald-600 to-emerald-700', label: 'Grön' },
  { key: 'from-orange-500 to-orange-600', label: 'Orange' },
  { key: 'from-rose-500 to-rose-600',     label: 'Rosa' },
  { key: 'from-slate-600 to-slate-700',   label: 'Grå' },
  { key: 'from-teal-600 to-teal-700',     label: 'Teal' },
  { key: 'from-amber-500 to-amber-600',   label: 'Gul' },
  { key: 'from-indigo-600 to-indigo-700', label: 'Indigo' },
]

const MATURITY_OPTIONS = [
  { key: 'standard',   label: 'Standard',      bg: 'bg-emerald-100', text: 'text-emerald-800' },
  { key: 'configured', label: 'Konfigurerbar', bg: 'bg-blue-100',    text: 'text-blue-800' },
  { key: 'custom',     label: 'Kundanpassad',  bg: 'bg-amber-100',   text: 'text-amber-800' },
]

const DISCIPLINE_OPTIONS = [
  { key: 'mek',    label: 'Mek' },
  { key: 'el',     label: 'El' },
  { key: 'prog',   label: 'Prog' },
  { key: 'safety', label: 'Säk' },
  { key: 'dok',    label: 'Dok' },
  { key: 'other',  label: 'Annat' },
]

// ═══════════════════════════════════════════════════════════════════════════════
//  CONFIGURATION PARAMETERS PER DISCIPLINE
// ═══════════════════════════════════════════════════════════════════════════════

const CONFIG_PARAMS = {
  mek: [
    { name: 'length',    label: { sv: 'Längd',  en: 'Length' },   type: 'number', unit: 'mm', min: 10,  max: 10000, defaultValue: 500 },
    { name: 'width',     label: { sv: 'Bredd',  en: 'Width' },    type: 'number', unit: 'mm', min: 10,  max: 5000,  defaultValue: 300 },
    { name: 'height',    label: { sv: 'Höjd',   en: 'Height' },   type: 'number', unit: 'mm', min: 10,  max: 5000,  defaultValue: 200 },
    { name: 'material',  label: { sv: 'Material', en: 'Material' }, type: 'select', options: ['Steel', 'Aluminium', 'Stainless Steel', 'Composite'], defaultValue: 'Steel' },
    { name: 'surfaceTreatment', label: { sv: 'Ytbehandling', en: 'Surface Treatment' }, type: 'select', options: ['None', 'Powder Coated', 'Anodized', 'Galvanized', 'Painted'], defaultValue: 'None' },
  ],
  el: [
    { name: 'voltage',   label: { sv: 'Spänning', en: 'Voltage' },  type: 'number', unit: 'V',  min: 12,  max: 690,  defaultValue: 400 },
    { name: 'current',   label: { sv: 'Ström',    en: 'Current' },  type: 'number', unit: 'A',  min: 0.1, max: 200,  defaultValue: 16 },
    { name: 'protection', label: { sv: 'Skyddsklass', en: 'Protection Class' }, type: 'select', options: ['IP20', 'IP44', 'IP54', 'IP65', 'IP67'], defaultValue: 'IP54' },
    { name: 'cableType', label: { sv: 'Kabeltyp', en: 'Cable Type' }, type: 'select', options: ['PVC', 'PUR', 'Drag Chain', 'Shielded'], defaultValue: 'PVC' },
  ],
  prog: [
    { name: 'protocol',  label: { sv: 'Kommunikationsprotokoll', en: 'Communication Protocol' }, type: 'select', options: ['PROFINET', 'EtherCAT', 'Modbus TCP', 'OPC UA', 'Ethernet/IP'], defaultValue: 'PROFINET' },
    { name: 'cycleTime', label: { sv: 'Cykeltid', en: 'Cycle Time' }, type: 'number', unit: 'ms', min: 1, max: 1000, defaultValue: 10 },
    { name: 'redundancy', label: { sv: 'Redundans', en: 'Redundancy' }, type: 'boolean', defaultValue: false },
  ],
  safety: [
    { name: 'performanceLevel', label: { sv: 'Prestanda-nivå', en: 'Performance Level' }, type: 'select', options: ['PLa', 'PLb', 'PLc', 'PLd', 'PLe'], defaultValue: 'PLd' },
    { name: 'silLevel',  label: { sv: 'SIL-nivå', en: 'SIL Level' }, type: 'select', options: ['SIL 1', 'SIL 2', 'SIL 3'], defaultValue: 'SIL 2' },
    { name: 'eStop',     label: { sv: 'Nödstopp',    en: 'Emergency Stop' }, type: 'boolean', defaultValue: true },
    { name: 'lightCurtain', label: { sv: 'Ljusridå', en: 'Light Curtain' }, type: 'boolean', defaultValue: false },
  ],
  dok: [
    { name: 'docLanguage', label: { sv: 'Dokumentspråk', en: 'Document Language' }, type: 'select', options: ['Swedish', 'English', 'German', 'French'], defaultValue: 'Swedish' },
    { name: 'format',    label: { sv: 'Format', en: 'Format' }, type: 'select', options: ['PDF', 'DWG', 'STEP', 'JT'], defaultValue: 'PDF' },
    { name: 'revisionControl', label: { sv: 'Revisionskontroll', en: 'Revision Control' }, type: 'boolean', defaultValue: true },
  ],
  other: [
    { name: 'weight',    label: { sv: 'Vikt', en: 'Weight' },    type: 'number', unit: 'kg', min: 0.1, max: 10000, defaultValue: 50 },
    { name: 'operatingTemp', label: { sv: 'Driftstemperatur', en: 'Operating Temp.' }, type: 'number', unit: '°C', min: -40, max: 120, defaultValue: 25 },
  ],
}

function getConfigParamsForDiscipline(disciplines) {
  const key = disciplines?.[0]
  return CONFIG_PARAMS[key] || []
}

function initConfigValues(params, existing = {}) {
  const values = {}
  for (const p of params) {
    values[p.name] = existing[p.name] !== undefined ? existing[p.name] : p.defaultValue
  }
  return values
}

// ═══════════════════════════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════════════════════════

function getIconComponent(iconKey) {
  const found = ICON_OPTIONS.find(o => o.key === iconKey)
  return found ? found.icon : Box
}

function getColorClasses(colorKey) {
  return COLOR_OPTIONS.find(o => o.key === colorKey) || COLOR_OPTIONS[0]
}

let _nextId = 1000
// helpers
function fmtBB(n) { return `BB-${String(n || 0).padStart(3, '0')}` }
function fmtMA(n) { return `MA-${String(n || 0).padStart(3, '0')}` }

function uid() { return `id-${_nextId++}-${Date.now()}` }

function initialIdParts(config, allowEmpty = false) {
  const segments = config?.segments || []
  return Object.fromEntries(segments.map(seg => [seg.key, allowEmpty ? '' : (seg.options?.[0] || '')]))
}

function normalizeIdParts(config, current = {}, allowEmpty = false) {
  const segments = config?.segments || []
  const result = {}
  // Process in order so parent segments resolve before dependents
  for (const seg of segments) {
    const value = current[seg.key]
    let validCodes
    if (seg.dependsOn) {
      const parentVal = result[seg.dependsOn]
      const dictEntry = config?.dictionary?.[parentVal]?.[seg.key]
      validCodes = dictEntry ? Object.keys(dictEntry) : (seg.options || [])
    } else {
      validCodes = seg.options || []
    }
    if (allowEmpty && value === '') { result[seg.key] = '' }
    else if (value && validCodes.includes(value)) { result[seg.key] = value }
    else { result[seg.key] = allowEmpty ? '' : (validCodes[0] || '') }
  }
  return result
}

// ── Dictionary helpers (mirrored from App.jsx for Sandbox use) ──
function sbGetSegmentEntries(config, segKey, currentParts) {
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

function sbGetComboWarning(config, parts) {
  const mt = parts?.machineType
  const combos = config?.dictionary?.[mt]?.invalidCombos
  if (!combos) return null
  return combos.find(c => Object.entries(c).every(([k, v]) => parts[k] === v)) || null
}

function sbOptionLabel(entry, language) {
  const a = typeof entry.alias === 'object' ? (entry.alias[language] || entry.alias.sv || '') : (entry.alias || '')
  const dep = entry.status === 'deprecated' ? ' ⚠' : ''
  return a ? `${entry.code} — ${a}${dep}` : entry.code
}

function sbBuildDeclaration(config, parts, language) {
  const loc = (v) => v && typeof v === 'object' ? (v[language] || v.sv || '') : (v || '')
  return (config?.segments || []).map(seg => {
    const val = parts?.[seg.key]
    if (!val) return null
    let alias = '', specs = '', status = 'active'
    if (seg.dependsOn) {
      const parentVal = parts[seg.dependsOn]
      const meta = config?.dictionary?.[parentVal]?.[seg.key]?.[val]
      if (meta) { alias = loc(meta.alias); specs = meta.specs || ''; status = meta.status || 'active' }
    } else if (seg.aliases?.[val]) {
      alias = loc(seg.aliases[val].alias); specs = seg.aliases[val].specs || ''; status = seg.aliases[val].status || 'active'
    }
    return { key: seg.key, name: loc(seg.name), code: val, alias, specs, status }
  }).filter(Boolean)
}

function composeId(config, parts = {}) {
  return (config?.segments || [])
    .map(seg => (parts[seg.key] || '').trim())
    .filter(Boolean)
    .join('-')
}

function composeOptionSuffix(options) {
  if (!options || options.length === 0) return ''
  return '-O' + options.map(o => o.enabled ? '1' : '0').join('')
}

function preventSelectWheelChange(e) {
  // Prevent mouse wheel from cycling select values while scrolling the page.
  e.currentTarget.blur()
}

function colorLabel(colorKey, language) {
  const sv = {
    slate: 'Grå', blue: 'Blå', violet: 'Violet', cyan: 'Cyan', emerald: 'Grön', teal: 'Teal',
    amber: 'Gul', orange: 'Orange', rose: 'Rosa', sky: 'Ljusblå',
  }
  const en = {
    slate: 'Gray', blue: 'Blue', violet: 'Violet', cyan: 'Cyan', emerald: 'Green', teal: 'Teal',
    amber: 'Yellow', orange: 'Orange', rose: 'Rose', sky: 'Sky Blue',
  }
  return (language === 'sv' ? sv[colorKey] : en[colorKey]) || colorKey
}

function iconLabel(opt, language) {
  if (language === 'sv') return opt.label
  return opt.key.replace(/([a-z])([A-Z])/g, '$1 $2')
}

// ═══════════════════════════════════════════════════════════════════════════════
//  ICON PICKER
// ═══════════════════════════════════════════════════════════════════════════════

function IconPicker({ value, onChange, onClose, language = 'sv' }) {
  const [search, setSearch] = useState('')
  const filtered = ICON_OPTIONS.filter(o =>
    iconLabel(o, language).toLowerCase().includes(search.toLowerCase()) || o.key.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="absolute z-50 mt-1 bg-white rounded-xl border border-slate-200 shadow-xl p-3 w-[320px]">
      <input type="text" value={search} onChange={e => setSearch(e.target.value)}
        placeholder={ts(language, 'searchIcon')} autoFocus
        className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
      <div className="grid grid-cols-8 gap-1 max-h-[200px] overflow-y-auto">
        {filtered.map(opt => {
          const Ic = opt.icon
          return (
            <button key={opt.key} onClick={() => { onChange(opt.key); onClose() }} title={iconLabel(opt, language)}
              className={`p-2 rounded-lg hover:bg-blue-50 transition-colors ${value === opt.key ? 'bg-blue-100 ring-2 ring-blue-400' : ''}`}>
              <Ic className="w-4 h-4 text-slate-600" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MODULE CATALOG SIDEBAR (draggable items)
// ═══════════════════════════════════════════════════════════════════════════════

function ModuleCatalogPanel({ modules, onUpdate, onAdd, onDelete, language = 'sv' }) {
  const [expandedId, setExpandedId] = useState(null)
  const [iconPickerFor, setIconPickerFor] = useState(null)

  return (
    <div className="space-y-2">
      {modules.map(mod => {
        const isExpanded = expandedId === mod.id
        const canEditColor = !!mod.isUserCreated
        const Icon = getIconComponent(mod.iconKey)
        const cc = getColorClasses(mod.color)

        return (
          <div key={mod.id} className="bg-white rounded-xl border border-slate-200 shadow-sm">
            <button draggable
              onDragStart={e => { e.dataTransfer.setData('text/module-id', mod.id); e.dataTransfer.effectAllowed = 'copy' }}
              onClick={() => setExpandedId(isExpanded ? null : mod.id)}
              className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 transition-colors text-left cursor-grab active:cursor-grabbing">
              <div className={`p-2 rounded-lg ${cc.bg100}`}>
                <Icon className={`w-4 h-4 ${cc.text600}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  {mod.maNumber && <span className="px-1 py-0.5 rounded bg-slate-100 text-[9px] font-mono font-bold text-slate-400 tracking-wide">{fmtMA(mod.maNumber)}</span>}
                  {mod.customId && <span className="px-1 py-0.5 rounded bg-blue-50 text-[9px] font-mono font-bold text-blue-600 tracking-wide">{mod.customId}</span>}
                  <p className="text-sm font-semibold text-slate-700 truncate">{mod.name}</p>
                </div>
                <p className="text-[11px] text-slate-400 truncate">{mod.desc}</p>
              </div>
              <GripVertical className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />
            </button>

            {isExpanded && (
              <div className="border-t border-slate-100 p-4 bg-slate-50/50 space-y-3">
                <div>
                  <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'name')}</label>
                  <input type="text" value={mod.name} onChange={e => onUpdate(mod.id, { name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'description')}</label>
                  <textarea value={mod.desc} onChange={e => onUpdate(mod.id, { desc: e.target.value })} rows={2}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300" />
                </div>
                <div>
                  <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'docLink')}</label>
                  <input
                    type="text"
                    value={mod.docUrl || ''}
                    onChange={e => onUpdate(mod.id, { docUrl: e.target.value })}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'icon')}</label>
                    <button onClick={() => setIconPickerFor(iconPickerFor === mod.id ? null : mod.id)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm hover:bg-slate-50">
                      <Icon className={`w-4 h-4 ${cc.text600}`} /><span className="text-slate-600">{ts(language, 'change')}</span>
                    </button>
                    {iconPickerFor === mod.id && (
                      <IconPicker value={mod.iconKey} onChange={key => onUpdate(mod.id, { iconKey: key })} onClose={() => setIconPickerFor(null)} language={language} />
                    )}
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'color')}</label>
                    <div className="flex gap-1">
                      {COLOR_OPTIONS.map(c => (
                        <button
                          key={c.key}
                          onClick={() => canEditColor && onUpdate(mod.id, { color: c.key })}
                          title={canEditColor ? colorLabel(c.key, language) : ts(language, 'colorEditOnlyNew')}
                          disabled={!canEditColor}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${!canEditColor ? 'opacity-40 cursor-not-allowed' : ''} ${mod.color === c.key ? 'ring-2 ring-offset-1 ring-blue-400' : 'hover:scale-110'}`}>
                          <span className={`w-4 h-4 rounded-full ${c.dot}`} />
                        </button>
                      ))}
                    </div>
                    {!canEditColor && <p className="text-[10px] text-slate-400 mt-1">{ts(language, 'colorLockedStandard')}</p>}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <button onClick={() => { onDelete(mod.id); setExpandedId(null) }}
                    className="flex items-center gap-2 text-xs text-red-500 hover:text-red-700 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" />{ts(language, 'removeModule')}
                  </button>
                </div>
              </div>
            )}
          </div>
        )
      })}

      <button onClick={onAdd}
        className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border-2 border-dashed border-slate-300 text-sm text-slate-500 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50/50 transition-colors">
        <Plus className="w-4 h-4" />{ts(language, 'newModule')}
      </button>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  WORKSPACE MODULE CARD — full inline editing inside the workspace
// ═══════════════════════════════════════════════════════════════════════════════

function WorkspaceSlotCard({ slot, mod, onUpdateSlot, onRemove, onSaveAsNewModule, language = 'sv' }) {
  const [expanded, setExpanded] = useState(false)
  const [iconPickerOpen, setIconPickerOpen] = useState(false)
  const canEditColor = !!mod.isUserCreated
  const Icon = getIconComponent(mod.iconKey)
  const cc = getColorClasses(mod.color)
  const matOpt = MATURITY_OPTIONS.find(m => m.key === slot.maturity)
  const displayName = (slot.customTitle || '').trim() || mod.name
  const currentDocUrl = (slot.documentationUrl ?? mod.docUrl ?? '').trim()

  function openDocumentationLink(rawUrl) {
    const value = (rawUrl || '').trim()
    if (!value) return
    const normalized = /^https?:\/\//i.test(value) ? value : `https://${value}`
    window.open(normalized, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all ${expanded ? 'border-blue-300 ring-1 ring-blue-200' : 'border-slate-200 hover:shadow-md'}`}>
      {/* Collapsed header */}
      <div className="flex items-center gap-2.5 p-3 cursor-pointer hover:bg-slate-50/50" onClick={() => setExpanded(!expanded)}>
        <div className={`p-2 rounded-lg ${cc.bg100}`}>
          <Icon className={`w-4 h-4 ${cc.text600}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            {mod.maNumber && <span className="px-1 py-0.5 rounded bg-slate-100 text-[9px] font-mono font-bold text-slate-400 tracking-wide">{fmtMA(mod.maNumber)}</span>}
            {mod.customId && <span className="px-1 py-0.5 rounded bg-blue-50 text-[9px] font-mono font-bold text-blue-600 tracking-wide">{mod.customId}</span>}
            <p className="text-sm font-semibold text-slate-700 truncate">{displayName}</p>
          </div>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-medium ${matOpt.bg} ${matOpt.text}`}>{maturityLabel(slot.maturity, language)}</span>
            <span className="text-[10px] text-slate-400">{slot.disciplines.map(d => disciplineLabel(d, language)).filter(Boolean).join(' · ')}</span>
          </div>
        </div>
        <button onClick={e => { e.stopPropagation(); onRemove() }}
          className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors" title={ts(language, 'remove')}>
          <X className="w-3.5 h-3.5" />
        </button>
        {expanded ? <ChevronDown className="w-4 h-4 text-slate-400" /> : <ChevronRight className="w-4 h-4 text-slate-400" />}
      </div>

      {/* Expanded inline editor */}
      {expanded && (
        <div className="border-t border-slate-100 p-4 bg-slate-50/30 space-y-3" onClick={e => e.stopPropagation()}>
          <div>
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'title')}</label>
            <input
              type="text"
              value={slot.customTitle ?? mod.name}
              onChange={e => onUpdateSlot({ customTitle: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Maturity */}
          <div>
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1.5 block">{ts(language, 'standardLevel')}</label>
            <div className="flex gap-1.5">
              {MATURITY_OPTIONS.map(m => (
                <button key={m.key} onClick={() => onUpdateSlot({ maturity: m.key })}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${slot.maturity === m.key ? `${m.bg} ${m.text} ring-2 ring-offset-1 ring-blue-400` : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                  {maturityLabel(m.key, language)}
                </button>
              ))}
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1.5 block">{ts(language, 'disciplines')}</label>
            <div className="flex gap-1.5">
              {DISCIPLINE_OPTIONS.map(d => {
                const active = slot.disciplines?.[0] === d.key
                return (
                  <button key={d.key} onClick={() => {
                    const params = getConfigParamsForDiscipline([d.key])
                    onUpdateSlot({ disciplines: [d.key], configValues: initConfigValues(params, slot.configValues || {}) })
                  }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${active ? 'bg-blue-100 text-blue-700 ring-1 ring-blue-300' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}>
                    {disciplineLabel(d.key, language)}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Icon + Color */}
          <div className="flex gap-3 items-end">
            <div className="relative">
              <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'icon')}</label>
              <button onClick={() => setIconPickerOpen(!iconPickerOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm hover:bg-slate-50">
                <Icon className={`w-4 h-4 ${cc.text600}`} /><span className="text-slate-500 text-xs">{ts(language, 'change')}</span>
              </button>
              {iconPickerOpen && (
                <IconPicker value={mod.iconKey} onChange={key => onUpdateSlot({ _modPatch: { iconKey: key } })} onClose={() => setIconPickerOpen(false)} language={language} />
              )}
            </div>
            <div>
              <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'color')}</label>
              <div className="flex gap-1">
                {COLOR_OPTIONS.map(c => (
                  <button
                    key={c.key}
                    onClick={() => canEditColor && onUpdateSlot({ _modPatch: { color: c.key } })}
                    title={canEditColor ? colorLabel(c.key, language) : ts(language, 'colorEditOnlyNew')}
                    disabled={!canEditColor}
                    className={`w-6 h-6 rounded-md flex items-center justify-center transition-all ${!canEditColor ? 'opacity-40 cursor-not-allowed' : ''} ${mod.color === c.key ? 'ring-2 ring-offset-1 ring-blue-400' : 'hover:scale-110'}`}>
                    <span className={`w-3.5 h-3.5 rounded-full ${c.dot}`} />
                  </button>
                ))}
              </div>
              {!canEditColor && <p className="text-[10px] text-slate-400 mt-1">{ts(language, 'colorLockedStandard')}</p>}
            </div>
          </div>

          <div>
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'description')}</label>
            <textarea
              value={slot.description ?? mod.desc ?? ''}
              onChange={e => onUpdateSlot({ description: e.target.value })}
              rows={2}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'articleNumber')}</label>
              <input
                type="text"
                value={slot.articleNumber ?? ''}
                onChange={e => onUpdateSlot({ articleNumber: e.target.value })}
                onMouseDown={e => e.stopPropagation()}
                placeholder="ART-..."
                className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'costSek')}</label>
              <div className="relative">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={slot.costSek ?? ''}
                  onChange={e => onUpdateSlot({ costSek: e.target.value })}
                  onMouseDown={e => e.stopPropagation()}
                  className="w-full px-3 py-2 pr-12 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">SEK</span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider mb-1 block">{ts(language, 'docLink')}</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={currentDocUrl}
                onChange={e => onUpdateSlot({ documentationUrl: e.target.value })}
                placeholder="https://..."
                className="flex-1 px-3 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                onClick={() => openDocumentationLink(currentDocUrl)}
                disabled={!currentDocUrl}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${currentDocUrl ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
              >
                {ts(language, 'openLink')}
              </button>
            </div>
          </div>

          {/* Configuration Parameters – only for 'configured' maturity */}
          {slot.maturity === 'configured' && (() => {
            const params = getConfigParamsForDiscipline(slot.disciplines)
            const hidden = slot.hiddenConfigParams || []
            const visibleParams = params.filter(p => !hidden.includes(p.name))
            if (visibleParams.length === 0) return null
            const configValues = slot.configValues || {}
            return (
              <div className="pt-3 border-t border-blue-200">
                <div className="flex items-center gap-2 mb-2.5">
                  <Settings className="w-4 h-4 text-blue-500" />
                  <label className="text-[11px] font-medium text-blue-600 uppercase tracking-wider">{ts(language, 'configParams')}</label>
                </div>
                <div className="space-y-2.5">
                  {visibleParams.map(p => {
                    const val = configValues[p.name] !== undefined ? configValues[p.name] : p.defaultValue
                    const paramLabel = p.label[language] || p.label.sv || p.name

                    if (p.type === 'number') {
                      const numVal = val === '' ? '' : Number(val)
                      const outOfRange = val !== '' && (numVal < p.min || numVal > p.max)
                      return (
                        <div key={p.name}>
                          <div className="flex items-center justify-between mb-1">
                            <label className="text-[10px] font-medium text-slate-500">{paramLabel}</label>
                            <button onClick={() => onUpdateSlot({ hiddenConfigParams: [...hidden, p.name] })} className="p-0.5 rounded text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors" title={language === 'sv' ? 'Ta bort parameter' : 'Remove parameter'}><X className="w-3 h-3" /></button>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="relative flex-1">
                              <input
                                type="number"
                                value={val}
                                min={p.min}
                                max={p.max}
                                onChange={e => onUpdateSlot({
                                  configValues: { ...configValues, [p.name]: e.target.value === '' ? '' : Number(e.target.value) }
                                })}
                                className={`w-full px-3 py-1.5 pr-10 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-colors ${outOfRange ? 'border-red-400 ring-red-200 bg-red-50/50' : 'border-slate-200 focus:ring-blue-300'}`}
                              />
                              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-medium text-slate-400">{p.unit}</span>
                            </div>
                            {outOfRange && (
                              <div className="flex items-center gap-1 text-red-500" title={ts(language, 'outOfRange', { min: p.min, max: p.max })}>
                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                              </div>
                            )}
                          </div>
                          {outOfRange && (
                            <p className="text-[10px] text-red-500 mt-0.5">{ts(language, 'outOfRange', { min: p.min, max: p.max })}</p>
                          )}
                        </div>
                      )
                    }

                    if (p.type === 'select') {
                      return (
                        <div key={p.name}>
                          <div className="flex items-center justify-between mb-1">
                            <label className="text-[10px] font-medium text-slate-500">{paramLabel}</label>
                            <button onClick={() => onUpdateSlot({ hiddenConfigParams: [...hidden, p.name] })} className="p-0.5 rounded text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors" title={language === 'sv' ? 'Ta bort parameter' : 'Remove parameter'}><X className="w-3 h-3" /></button>
                          </div>
                          <select
                            value={val}
                            onChange={e => onUpdateSlot({
                              configValues: { ...configValues, [p.name]: e.target.value }
                            })}
                            onWheel={e => e.target.blur()}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none cursor-pointer"
                          >
                            {p.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </div>
                      )
                    }

                    if (p.type === 'boolean') {
                      const boolVal = !!val
                      return (
                        <div key={p.name} className="flex items-center justify-between py-0.5">
                          <label className="text-[10px] font-medium text-slate-500">{paramLabel}</label>
                          <div className="flex items-center gap-1.5">
                            <button onClick={() => onUpdateSlot({ hiddenConfigParams: [...hidden, p.name] })} className="p-0.5 rounded text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors" title={language === 'sv' ? 'Ta bort parameter' : 'Remove parameter'}><X className="w-3 h-3" /></button>
                            <button
                              onClick={() => onUpdateSlot({
                                configValues: { ...configValues, [p.name]: !boolVal }
                              })}
                              className={`relative w-9 h-5 rounded-full transition-colors ${boolVal ? 'bg-blue-500' : 'bg-slate-300'}`}
                            >
                              <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${boolVal ? 'translate-x-4' : 'translate-x-0'}`} />
                            </button>
                          </div>
                        </div>
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            )
          })()}

          {/* Custom Configuration Parameters — always available */}
          {(() => {
            const customParams = slot.customParams || []
            return (
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center gap-2 mb-2.5">
                  <Settings className="w-4 h-4 text-violet-500" />
                  <label className="text-[11px] font-medium text-violet-600 uppercase tracking-wider">{ts(language, 'customParams')}</label>
                </div>
                {customParams.length > 0 && (
                  <div className="space-y-1.5 mb-2.5">
                    {customParams.map((cp, cpIdx) => (
                      <div key={cpIdx} className="flex items-center gap-1.5">
                        <input
                          type="text"
                          value={cp.name}
                          onChange={e => {
                            const updated = [...customParams]
                            updated[cpIdx] = { ...cp, name: e.target.value }
                            onUpdateSlot({ customParams: updated })
                          }}
                          placeholder={ts(language, 'paramName')}
                          className="flex-1 min-w-0 px-2 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-violet-300"
                        />
                        <input
                          type="text"
                          value={cp.value}
                          onChange={e => {
                            const updated = [...customParams]
                            updated[cpIdx] = { ...cp, value: e.target.value }
                            onUpdateSlot({ customParams: updated })
                          }}
                          placeholder={ts(language, 'paramValue')}
                          className="flex-1 min-w-0 px-2 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-violet-300"
                        />
                        <input
                          type="text"
                          value={cp.unit || ''}
                          onChange={e => {
                            const updated = [...customParams]
                            updated[cpIdx] = { ...cp, unit: e.target.value }
                            onUpdateSlot({ customParams: updated })
                          }}
                          placeholder={ts(language, 'paramUnit')}
                          className="w-14 px-2 py-1.5 rounded-lg border border-slate-200 text-xs text-right focus:outline-none focus:ring-2 focus:ring-violet-300"
                        />
                        <button
                          onClick={() => {
                            const updated = customParams.filter((_, i) => i !== cpIdx)
                            onUpdateSlot({ customParams: updated })
                          }}
                          className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => onUpdateSlot({ customParams: [...customParams, { name: '', value: '', unit: '' }] })}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-medium bg-violet-50 text-violet-700 hover:bg-violet-100 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />{ts(language, 'addParam')}
                </button>
              </div>
            )
          })()}

          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => onSaveAsNewModule?.()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />{ts(language, 'saveAsNewModule')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
//  METRICS
// ═══════════════════════════════════════════════════════════════════════════════

function computeSandboxMetrics(bbs) {
  let total = 0, standard = 0, configured = 0, custom = 0
  const uniqueMods = new Set()
  for (const bb of bbs) {
    for (const slot of bb.modules) {
      total++; uniqueMods.add(slot.moduleId)
      if (slot.maturity === 'standard') standard++
      else if (slot.maturity === 'configured') configured++
      else custom++
    }
    // Include enabled options
    for (const opt of (bb.options || [])) {
      if (!opt.enabled) continue
      for (const slot of opt.modules) {
        total++; uniqueMods.add(slot.moduleId)
        if (slot.maturity === 'standard') standard++
        else if (slot.maturity === 'configured') configured++
        else custom++
      }
    }
  }
  const score = total > 0 ? Math.round(((standard * 100 + configured * 60 + custom * 10) / (total * 100)) * 100) : 0
  const moduleBBCount = {}
  for (const bb of bbs) {
    for (const slot of bb.modules) moduleBBCount[slot.moduleId] = (moduleBBCount[slot.moduleId] || 0) + 1
    for (const opt of (bb.options || [])) {
      if (!opt.enabled) continue
      for (const slot of opt.modules) moduleBBCount[slot.moduleId] = (moduleBBCount[slot.moduleId] || 0) + 1
    }
  }
  const shared = Object.entries(moduleBBCount).filter(([, c]) => c > 1)
  const sharedSlots = shared.reduce((sum, [, c]) => sum + c, 0)
  const reusePercent = total > 0 ? Math.round((sharedSlots / total) * 100) : 0
  return { total, standard, configured, custom, score, reusePercent, uniqueModules: uniqueMods.size, sharedModules: shared.length }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  PDF EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

function exportPDF(bbs, modules, metrics, language = 'sv', bbIdConfig) {
  const isEn = language === 'en'
  const labels = isEn
    ? {
      title: 'Building Block Architecture - Export',
      generated: 'Generated',
      module: 'Module',
      level: 'Level',
      disciplines: 'Disciplines',
      configParams: 'Configuration Parameters',
      articleNumber: 'Article no',
      costSek: 'Cost (SEK)',
      totalCostBb: 'Total Cost (BB)',
      baseCost: 'Base Cost',
      optionCost: 'Option Cost',
      bbId: 'BB ID',
      ciProject: 'CI Project',
      option: 'Option',
      enabled: 'Enabled',
      disabled: 'Disabled',
      standardization: 'Standardization',
      reuse: 'Reuse',
      buildingBlocks: 'Building Blocks',
      modules: 'Modules',
      yes: 'Yes',
      no: 'No',
      bbDeclaration: 'BB Declaration',
      description: 'Description',
      machineType: 'Machine Type',
      serial: 'Serial',
      variant: 'Variant',
      standard: 'Standard',
      configurable: 'Configurable',
      custom: 'Custom',
      options: 'Options',
      docLink: 'Documentation',
    }
    : {
      title: 'Building Block Arkitektur - Export',
      generated: 'Genererad',
      module: 'Modul',
      level: 'Nivå',
      disciplines: 'Discipliner',
      configParams: 'Konfigurationsparametrar',
      articleNumber: 'Artikel nr',
      costSek: 'Kostnad (SEK)',
      totalCostBb: 'Total kostnad (BB)',
      baseCost: 'Baskostnad',
      optionCost: 'Optionskostnad',
      bbId: 'BB ID',
      ciProject: 'CI-projekt',
      option: 'Option',
      enabled: 'Aktiverad',
      disabled: 'Inaktiverad',
      standardization: 'Standardisering',
      reuse: 'Återanvändning',
      buildingBlocks: 'Building Blocks',
      modules: 'Moduler',
      yes: 'Ja',
      no: 'Nej',
      bbDeclaration: 'BB-Deklaration',
      description: 'Beskrivning',
      machineType: 'Maskintyp',
      serial: 'Löpnummer',
      variant: 'Variant',
      standard: 'Standard',
      configurable: 'Konfigurerbar',
      custom: 'Kundanpassad',
      options: 'Optioner',
      docLink: 'Dokumentation',
    }

  const matLabel = k => maturityLabel(k, language)
  const discLabels = ds => ds.map(d => disciplineLabel(d, language)).filter(Boolean).join(', ')
  const boolLabel = value => value ? labels.yes : labels.no
  const parseCost = value => {
    const num = Number(value)
    return Number.isFinite(num) ? num : 0
  }

  function formatSlotConfig(slot) {
    const lines = []
    if (slot.maturity === 'configured') {
      const params = getConfigParamsForDiscipline(slot.disciplines)
      const hidden = slot.hiddenConfigParams || []
      const visibleParams = params.filter(p => !hidden.includes(p.name))
      if (visibleParams.length) {
        const values = initConfigValues(visibleParams, slot.configValues || {})
        visibleParams.forEach(p => {
          const label = p.label?.[language] || p.label?.sv || p.name
          const raw = values[p.name]

          if (p.type === 'number') {
            if (raw === '' || raw === undefined || raw === null) { lines.push(`${label}: —`); return }
            const num = Number(raw)
            const outOfRange = num < p.min || num > p.max
            const rangeWarning = outOfRange ? ` <span style="color:#dc2626;font-weight:700">⚠ (${p.min}-${p.max})</span>` : ''
            lines.push(`${label}: <strong>${num}${p.unit ? ` ${p.unit}` : ''}</strong>${rangeWarning}`)
          } else if (p.type === 'boolean') {
            lines.push(`${label}: <strong>${boolLabel(!!raw)}</strong>`)
          } else {
            lines.push(`${label}: <strong>${raw ?? '—'}</strong>`)
          }
        })
      }
    }
    // Append custom params
    if (slot.customParams?.length) {
      slot.customParams.forEach(cp => {
        if (cp.name || cp.value) {
          lines.push(`${cp.name || '—'}: <strong>${cp.value || '—'}${cp.unit ? ` ${cp.unit}` : ''}</strong>`)
        }
      })
    }
    return lines.length ? lines.join('<br/>') : '—'
  }

  const bbRows = bbs.map(bb => {
    const totalBaseCost = (bb.modules || []).reduce((sum, slot) => sum + parseCost(slot.costSek), 0)
    const totalEnabledOptionCost = (bb.options || []).reduce((sum, opt) => {
      if (!opt.enabled) return sum
      return sum + (opt.modules || []).reduce((optSum, slot) => optSum + parseCost(slot.costSek), 0)
    }, 0)
    const totalBbCost = totalBaseCost + totalEnabledOptionCost

    // Module counts by maturity
    const counts = { standard: 0, configured: 0, custom: 0 }
    bb.modules.forEach(s => counts[s.maturity]++)
    const total = bb.modules.length
    const pctS = total > 0 ? Math.round((counts.standard / total) * 100) : 0
    const pctC = total > 0 ? Math.round((counts.configured / total) * 100) : 0
    const pctK = total > 0 ? Math.round((counts.custom / total) * 100) : 0

    // BB-Deklaration from dictionary
    const idParts = bb.customIdParts || {}
    const decl = bbIdConfig ? sbBuildDeclaration(bbIdConfig, idParts, language) : []
    const declHtml = decl.length > 0
      ? `<div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:8px;padding:8px 12px;margin:6px 0 10px">
          <div style="font-size:10px;font-weight:700;color:#0284c7;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">${labels.bbDeclaration}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px 16px">
            ${decl.map(d => `<span style="font-size:11px;color:#334155"><strong style="font-family:monospace">${d.code}</strong>${d.alias ? ` = ${d.alias}` : ''}${d.specs ? ` <span style="color:#94a3b8">(${d.specs})</span>` : ''}${d.status === 'deprecated' ? ' <span style="color:#dc2626">⚠</span>' : ''}</span>`).join('')}
          </div>
        </div>`
      : ''

    // Options summary
    const optionCount = (bb.options || []).length
    const enabledOpts = (bb.options || []).filter(o => o.enabled)
    const optSummaryHtml = optionCount > 0
      ? `<div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:8px;padding:8px 12px;margin:6px 0 10px">
          <div style="font-size:10px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px">${labels.options} (${enabledOpts.length}/${optionCount})</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${(bb.options || []).map(o => `<span style="font-size:11px;padding:2px 8px;border-radius:4px;${o.enabled ? 'background:#dcfce7;color:#166534;font-weight:600' : 'background:#f1f5f9;color:#94a3b8;text-decoration:line-through'}">${o.name || '—'}</span>`).join('')}
          </div>
        </div>`
      : ''

    const modRows = bb.modules.map(slot => {
      const mod = modules.find(m => m.id === slot.moduleId)
      const docUrl = (slot.documentationUrl ?? mod?.docUrl ?? '').trim()
      return `<tr>
        <td style="padding:6px 10px;border:1px solid #e2e8f0">${mod?.name || slot.moduleId}</td>
        <td style="padding:6px 10px;border:1px solid #e2e8f0">${slot.articleNumber || '—'}</td>
        <td style="padding:6px 10px;border:1px solid #e2e8f0;text-align:right">${slot.costSek !== undefined && slot.costSek !== null && slot.costSek !== '' ? `${Number(slot.costSek).toFixed(2)} SEK` : '—'}</td>
        <td style="padding:6px 10px;border:1px solid #e2e8f0;text-align:center">${matLabel(slot.maturity)}</td>
        <td style="padding:6px 10px;border:1px solid #e2e8f0">${discLabels(slot.disciplines)}</td>
        <td style="padding:6px 10px;border:1px solid #e2e8f0">${formatSlotConfig(slot)}</td>
        <td style="padding:6px 10px;border:1px solid #e2e8f0">${docUrl ? `<a href="${/^https?:\/\//i.test(docUrl) ? docUrl : 'https://' + docUrl}" style="color:#2563eb;text-decoration:underline" target="_blank">${labels.docLink}</a>` : '—'}</td>
      </tr>`
    }).join('')

    const optRows = (bb.options || []).map(opt => {
      const optModRows = opt.modules.map(slot => {
        const mod = modules.find(m => m.id === slot.moduleId)
        const docUrl = (slot.documentationUrl ?? mod?.docUrl ?? '').trim()
        return `<tr style="${!opt.enabled ? 'opacity:0.5' : ''}">
          <td style="padding:6px 10px;border:1px solid #e2e8f0">[OPT] ${mod?.name || slot.moduleId}</td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0">${slot.articleNumber || '—'}</td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;text-align:right">${slot.costSek !== undefined && slot.costSek !== null && slot.costSek !== '' ? `${Number(slot.costSek).toFixed(2)} SEK` : '—'}</td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0;text-align:center">${matLabel(slot.maturity)}</td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0">${discLabels(slot.disciplines)}</td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0">${formatSlotConfig(slot)}</td>
          <td style="padding:6px 10px;border:1px solid #e2e8f0">${docUrl ? `<a href="${/^https?:\/\//i.test(docUrl) ? docUrl : 'https://' + docUrl}" style="color:#2563eb;text-decoration:underline" target="_blank">${labels.docLink}</a>` : '—'}</td>
        </tr>`
      }).join('')
      return `<tr style="background:#fff7ed"><td colspan="7" style="padding:6px 10px;border:1px solid #e2e8f0;font-weight:600;color:#c2410c">${labels.option}: ${opt.name || '—'} (${opt.enabled ? labels.enabled : labels.disabled})</td></tr>${optModRows}`
    }).join('')

    return `<div style="page-break-inside:avoid;margin-bottom:28px;border:1px solid #e2e8f0;border-radius:12px;overflow:hidden">
      <div style="background:linear-gradient(135deg,#1e293b,#334155);color:white;padding:16px 20px">
        <h2 style="font-size:18px;margin:0 0 2px;font-weight:700">${bb.name}</h2>
        <p style="font-size:12px;margin:0;opacity:0.7">${bb.subtitle || ''}</p>
        <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
          <span style="background:rgba(255,255,255,0.15);padding:2px 10px;border-radius:4px;font-size:12px;font-family:monospace;font-weight:700">${bb.customId || '—'}</span>
          ${bb.ciProject ? `<span style="background:rgba(96,165,250,0.3);padding:2px 10px;border-radius:4px;font-size:12px;font-weight:600">CI: ${bb.ciProject}</span>` : ''}
        </div>
      </div>
      <div style="padding:12px 20px">
        ${declHtml}
        ${bb.desc ? `<p style="font-size:12px;color:#64748b;margin:0 0 8px">${bb.desc}</p>` : ''}
        <div style="display:flex;gap:12px;margin-bottom:10px;flex-wrap:wrap">
          <div style="background:#f1f5f9;padding:6px 12px;border-radius:6px;font-size:11px">
            <span style="color:#64748b">${labels.totalCostBb}:</span> <strong>${totalBbCost.toFixed(2)} SEK</strong>
          </div>
          ${totalEnabledOptionCost > 0 ? `<div style="background:#fff7ed;padding:6px 12px;border-radius:6px;font-size:11px">
            <span style="color:#9a3412">${labels.baseCost}:</span> <strong>${totalBaseCost.toFixed(2)}</strong> + <span style="color:#9a3412">${labels.optionCost}:</span> <strong>${totalEnabledOptionCost.toFixed(2)}</strong>
          </div>` : ''}
          <div style="background:#f1f5f9;padding:6px 12px;border-radius:6px;font-size:11px">
            <span style="color:#64748b">${labels.modules}:</span> <strong>${total}</strong>
            ${counts.standard ? ` · <span style="color:#059669">${counts.standard} ${labels.standard}</span>` : ''}
            ${counts.configured ? ` · <span style="color:#2563eb">${counts.configured} ${labels.configurable}</span>` : ''}
            ${counts.custom ? ` · <span style="color:#d97706">${counts.custom} ${labels.custom}</span>` : ''}
          </div>
        </div>
        <div style="height:6px;border-radius:3px;display:flex;gap:2px;overflow:hidden;margin-bottom:12px">
          ${pctS > 0 ? `<div style="width:${pctS}%;background:#10b981;border-radius:3px"></div>` : ''}
          ${pctC > 0 ? `<div style="width:${pctC}%;background:#3b82f6;border-radius:3px"></div>` : ''}
          ${pctK > 0 ? `<div style="width:${pctK}%;background:#f59e0b;border-radius:3px"></div>` : ''}
        </div>
        ${optSummaryHtml}
        <table style="width:100%;border-collapse:collapse;font-size:11px">
          <thead><tr style="background:#f1f5f9">
            <th style="padding:6px 10px;border:1px solid #e2e8f0;text-align:left">${labels.module}</th>
            <th style="padding:6px 10px;border:1px solid #e2e8f0;text-align:left">${labels.articleNumber}</th>
            <th style="padding:6px 10px;border:1px solid #e2e8f0;text-align:right">${labels.costSek}</th>
            <th style="padding:6px 10px;border:1px solid #e2e8f0;text-align:center">${labels.level}</th>
            <th style="padding:6px 10px;border:1px solid #e2e8f0;text-align:left">${labels.disciplines}</th>
            <th style="padding:6px 10px;border:1px solid #e2e8f0;text-align:left">${labels.configParams}</th>
            <th style="padding:6px 10px;border:1px solid #e2e8f0;text-align:center">${labels.docLink}</th>
          </tr></thead>
          <tbody>${modRows}${optRows}</tbody>
        </table>
      </div>
    </div>`
  }).join('')

  const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Building Block Export</title>
    <style>body{font-family:system-ui,-apple-system,sans-serif;max-width:800px;margin:0 auto;padding:40px 24px;color:#0f172a}
    @media print{body{padding:20px}}</style></head><body>
    <h1 style="font-size:22px;margin:0 0 4px">${labels.title}</h1>
    <p style="font-size:12px;color:#64748b;margin:0 0 20px">${labels.generated}: ${new Date().toLocaleString(isEn ? 'en-GB' : 'sv-SE')}</p>
    <div style="display:flex;gap:16px;margin-bottom:24px;flex-wrap:wrap">
      <div style="background:#f1f5f9;padding:10px 16px;border-radius:8px;min-width:120px">
        <div style="font-size:11px;color:#64748b">${labels.standardization}</div>
        <div style="font-size:22px;font-weight:700">${metrics.score}%</div>
      </div>
      <div style="background:#f1f5f9;padding:10px 16px;border-radius:8px;min-width:120px">
        <div style="font-size:11px;color:#64748b">${labels.modules}</div>
        <div style="font-size:22px;font-weight:700">${bbs.reduce((s, b) => s + (b.modules || []).length, 0)}</div>
      </div>
    </div>
    ${bbRows}
    </body></html>`

  const w = window.open('', '_blank')
  if (w) { w.document.write(html); w.document.close(); w.print() }
}

// ═══════════════════════════════════════════════════════════════════════════════
//  JSON SAVE / LOAD
// ═══════════════════════════════════════════════════════════════════════════════

function exportBBJSON(bb, modules, bbIdConfig) {
  const refIds = new Set((bb.modules || []).map(s => s.moduleId))
  ;(bb.options || []).forEach(o => (o.modules || []).forEach(s => refIds.add(s.moduleId)))
  const usedModules = modules.filter(m => refIds.has(m.id))
  const data = JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), bb, modules: usedModules, bbIdConfig }, null, 2)
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${(bb.customId || bb.name || 'bb').replace(/[\s/\\]+/g, '-')}-${new Date().toISOString().slice(0, 10)}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// ═══════════════════════════════════════════════════════════════════════════════
//  SANDBOX MAIN
// ═══════════════════════════════════════════════════════════════════════════════

export default function Sandbox({ initialModules, initialBBs, onDataChange, onSaveBB, language = 'sv', bbIdConfig, onImportBbIdConfig }) {
  const [modules, setModules] = useState(() => initialModules.map(m => ({ ...m, isUserCreated: !!m.isUserCreated })))
  const [bbs, setBBs] = useState(() => {
    const mapped = initialBBs.map(bb => ({ ...bb, modules: bb.modules.map(s => ({ ...s })), options: (bb.options || []).map(opt => ({ ...opt, modules: opt.modules.map(s => ({ ...s })) })) }))
    if (mapped.length > 0) return [mapped[0]]
    return [{ id: uid(), bbNumber: 1, customId: '', customIdParts: {}, name: '', subtitle: '', iconKey: 'Box', gradient: 'from-blue-600 to-blue-700', desc: '', ciProject: '', modules: [], options: [] }]
  })
  const [saveFlash, setSaveFlash] = useState(false)
  const [workspaceMode, setWorkspaceMode] = useState('bb')
  const [dropActive, setDropActive] = useState(false)

  // BB mode
  const [bbName, setBBName] = useState(initialBBs[0]?.name || '')
  const [bbCiProject, setBBCiProject] = useState(initialBBs[0]?.ciProject || '')
  const [workspaceBBId, setWorkspaceBBId] = useState(initialBBs[0]?.id || null)
  const [bbIdParts, setBbIdParts] = useState(() => initialIdParts(bbIdConfig))

  // Composite mode
  const [compositeName, setCompositeName] = useState('')
  const [compositeSlots, setCompositeSlots] = useState([])
  const [compositeIdParts, setCompositeIdParts] = useState(() => initialIdParts(bbIdConfig, true))

  const fileInputRef = useRef(null)
  const bbsRef = useRef(bbs)
  bbsRef.current = bbs
  const workspaceBBIdRef = useRef(workspaceBBId)
  workspaceBBIdRef.current = workspaceBBId
  const metrics = useMemo(() => computeSandboxMetrics(bbs), [bbs])

  useEffect(() => {
    if (bbs.length === 0) { setWorkspaceBBId(null); setBBName(''); setBBCiProject(''); return }
    if (!workspaceBBId || !bbs.some(bb => bb.id === workspaceBBId)) {
      setWorkspaceBBId(bbs[0].id); setBBName(bbs[0].name); setBBCiProject(bbs[0].ciProject || '')
    }
  }, [bbs, workspaceBBId])

  // Sync active BB's data into local state (only when switching BBs)
  useEffect(() => {
    if (!workspaceBBId) return
    const active = bbsRef.current.find(bb => bb.id === workspaceBBId)
    if (!active) return
    setBBCiProject(active.ciProject || '')
    const next = normalizeIdParts(bbIdConfig, active.customIdParts || {})
    setBbIdParts(next)
  }, [workspaceBBId, bbIdConfig])

  const workspaceBB = bbs.find(bb => bb.id === workspaceBBId)
  const bbBaseId = composeId(bbIdConfig, bbIdParts)
  const optionSuffix = composeOptionSuffix(workspaceBB?.options)
  const bbCustomId = bbBaseId + optionSuffix
  const compositeCustomId = composeId(bbIdConfig, compositeIdParts)

  useEffect(() => {
    setBbIdParts(prev => normalizeIdParts(bbIdConfig, prev))
    setCompositeIdParts(prev => normalizeIdParts(bbIdConfig, prev, true))
  }, [bbIdConfig])

  // Sync name edits
  useEffect(() => {
    const bbId = workspaceBBIdRef.current
    if (bbId && bbName.trim()) {
      setBBs(prev => {
        const idx = prev.findIndex(bb => bb.id === bbId)
        if (idx === -1 || prev[idx].name === bbName) return prev
        const updated = [...prev]
        updated[idx] = { ...prev[idx], name: bbName }
        return updated
      })
    }
  }, [bbName])

  // Sync CI project edits
  useEffect(() => {
    const bbId = workspaceBBIdRef.current
    if (!bbId) return
    setBBs(prev => {
      const idx = prev.findIndex(bb => bb.id === bbId)
      if (idx === -1 || prev[idx].ciProject === bbCiProject) return prev
      const updated = [...prev]
      updated[idx] = { ...prev[idx], ciProject: bbCiProject }
      return updated
    })
  }, [bbCiProject])

  useEffect(() => {
    const bbId = workspaceBBIdRef.current
    if (!bbId) return
    setBBs(prev => {
      const idx = prev.findIndex(bb => bb.id === bbId)
      if (idx === -1 || prev[idx].customId === bbCustomId) return prev
      const updated = [...prev]
      updated[idx] = { ...prev[idx], customId: bbCustomId, customIdParts: { ...bbIdParts } }
      return updated
    })
  }, [bbCustomId, bbIdParts])

  // ── CRUD ──
  function updateModule(id, patch) { setModules(prev => prev.map(m => m.id === id ? { ...m, ...patch } : m)) }
  function addModule() {
    setModules(prev => [...prev, { id: uid(), name: ts(language, 'defaultNewModuleName'), iconKey: 'Box', color: 'slate', desc: ts(language, 'defaultNewModuleDesc'), docUrl: '', isUserCreated: true }])
  }
  function deleteModule(id) {
    setModules(prev => prev.filter(m => m.id !== id))
    setBBs(prev => prev.map(bb => ({
      ...bb,
      modules: bb.modules.filter(s => s.moduleId !== id),
      options: (bb.options || []).map(o => ({ ...o, modules: o.modules.filter(s => s.moduleId !== id) })),
    })))
  }
  function newBBClear() {
    const newId = uid()
    const freshBB = { id: newId, bbNumber: 1, customId: '', customIdParts: {}, name: '', subtitle: '', iconKey: 'Box', gradient: 'from-blue-600 to-blue-700', desc: '', ciProject: '', modules: [], options: [] }
    setBBs([freshBB])
    setWorkspaceBBId(newId)
    setBBName('')
    setBBCiProject('')
    setBbIdParts(normalizeIdParts(bbIdConfig, {}))
  }
  function addBB(name, idParts = bbIdParts) {
    const newId = uid()
    const customId = composeId(bbIdConfig, idParts)
    const freshBB = { id: newId, bbNumber: 1, customId, customIdParts: { ...idParts }, name: name || ts(language, 'defaultNewBBName'), subtitle: '', iconKey: 'Box', gradient: 'from-blue-600 to-blue-700', desc: '', ciProject: '', modules: [], options: [] }
    setBBs([freshBB])
    setWorkspaceBBId(newId); setBBName(name || ts(language, 'defaultNewBBName')); setBBCiProject('')
    return newId
  }
  function handleSaveToLibrary() {
    if (!workspaceBB || !onSaveBB) return
    onSaveBB({ bb: workspaceBB, modules })
    setSaveFlash(true)
    setTimeout(() => setSaveFlash(false), 2000)
  }

  // ── Slot updates ──
  function updateWorkspaceSlot(bbId, idx, patch) {
    if (patch._modPatch) {
      const bb = bbs.find(b => b.id === bbId)
      const moduleId = bb?.modules[idx]?.moduleId
      if (moduleId) setModules(prev => prev.map(m => m.id === moduleId ? { ...m, ...patch._modPatch } : m))
      return
    }
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      const nm = [...bb.modules]; nm[idx] = { ...nm[idx], ...patch }
      return { ...bb, modules: nm }
    }))
  }
  function removeModuleFromBB(bbId, idx) {
    setBBs(prev => prev.map(bb => bb.id !== bbId ? bb : { ...bb, modules: bb.modules.filter((_, i) => i !== idx) }))
  }
  function updateCompositeSlot(idx, patch) {
    if (patch._modPatch) {
      const moduleId = compositeSlots[idx]?.moduleId
      if (moduleId) setModules(prev => prev.map(m => m.id === moduleId ? { ...m, ...patch._modPatch } : m))
      return
    }
    setCompositeSlots(prev => { const n = [...prev]; n[idx] = { ...n[idx], ...patch }; return n })
  }

  function saveSlotAsNewModule(slot, mod, idx) {
    const newModuleId = uid()
    const nextMA = modules.reduce((m, mod) => Math.max(m, mod.maNumber || 0), 0) + 1
    const baseName = (slot?.customTitle || '').trim() || mod?.name || 'Ny modul'
    const newModule = {
      id: newModuleId,
      maNumber: nextMA,
      name: `${baseName} (${language === 'sv' ? 'ny' : 'new'})`,
      iconKey: mod?.iconKey || 'Box',
      color: mod?.color || 'slate',
      desc: slot?.description ?? mod?.desc ?? ts(language, 'createdFromWorkspace'),
      docUrl: slot?.documentationUrl ?? mod?.docUrl ?? '',
      isUserCreated: true,
    }

    setModules(prev => [...prev, newModule])

    if (workspaceMode === 'bb' && workspaceBBId) {
      setBBs(prev => prev.map(bb => {
        if (bb.id !== workspaceBBId) return bb
        const nextModules = [...bb.modules]
        nextModules[idx] = { ...slot, moduleId: newModuleId }
        return { ...bb, modules: nextModules }
      }))
    } else {
      setCompositeSlots(prev => {
        const nextSlots = [...prev]
        nextSlots[idx] = { ...slot, moduleId: newModuleId }
        return nextSlots
      })
    }
  }

  // ── Options CRUD ──
  function recomputeBBCustomId(bb) {
    const base = composeId(bbIdConfig, bb.customIdParts || {})
    return base + composeOptionSuffix(bb.options)
  }
  function addOptionToBB(bbId) {
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      const opts = bb.options || []
      const updated = { ...bb, options: [...opts, { id: uid(), name: '', enabled: true, modules: [] }] }
      updated.customId = recomputeBBCustomId(updated)
      return updated
    }))
  }
  function removeOptionFromBB(bbId, optionId) {
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      const updated = { ...bb, options: (bb.options || []).filter(o => o.id !== optionId) }
      updated.customId = recomputeBBCustomId(updated)
      return updated
    }))
  }
  function toggleOption(bbId, optionId) {
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      const updated = { ...bb, options: (bb.options || []).map(o => o.id === optionId ? { ...o, enabled: !o.enabled } : o) }
      updated.customId = recomputeBBCustomId(updated)
      return updated
    }))
  }
  function updateOptionName(bbId, optionId, name) {
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      return { ...bb, options: (bb.options || []).map(o => o.id === optionId ? { ...o, name } : o) }
    }))
  }
  function addModuleToOption(bbId, optionId, moduleId) {
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      const srcMod = modules.find(m => m.id === moduleId)
      return { ...bb, options: (bb.options || []).map(o => {
        if (o.id !== optionId) return o
        if (o.modules.some(s => s.moduleId === moduleId)) return o
        return { ...o, modules: [...o.modules, { moduleId, maturity: 'configured', disciplines: ['mek'], description: srcMod?.desc || '', documentationUrl: srcMod?.docUrl || '' }] }
      })}
    }))
  }
  function removeModuleFromOption(bbId, optionId, idx) {
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      return { ...bb, options: (bb.options || []).map(o => {
        if (o.id !== optionId) return o
        return { ...o, modules: o.modules.filter((_, i) => i !== idx) }
      })}
    }))
  }
  function updateOptionSlot(bbId, optionId, idx, patch) {
    if (patch._modPatch) {
      const bb = bbs.find(b => b.id === bbId)
      const opt = (bb?.options || []).find(o => o.id === optionId)
      const moduleId = opt?.modules[idx]?.moduleId
      if (moduleId) setModules(prev => prev.map(m => m.id === moduleId ? { ...m, ...patch._modPatch } : m))
      return
    }
    setBBs(prev => prev.map(bb => {
      if (bb.id !== bbId) return bb
      return { ...bb, options: (bb.options || []).map(o => {
        if (o.id !== optionId) return o
        const nm = [...o.modules]; nm[idx] = { ...nm[idx], ...patch }
        return { ...o, modules: nm }
      })}
    }))
  }

  // ── Drop ──
  function onWorkspaceDrop(e) {
    e.preventDefault(); setDropActive(false)
    const moduleId = e.dataTransfer.getData('text/module-id')
    if (!moduleId) return

    if (workspaceMode === 'bb') {
      let targetId = workspaceBBId
      if (!targetId) targetId = addBB(bbName || ts(language, 'defaultNewBBDropName'), bbIdParts)
      setBBs(prev => prev.map(bb => {
        if (bb.id !== targetId) return bb
        if (bb.modules.some(m => m.moduleId === moduleId)) return bb
        const srcMod = modules.find(m => m.id === moduleId)
        return { ...bb, modules: [...bb.modules, { moduleId, maturity: 'configured', disciplines: ['mek'], description: srcMod?.desc || '', documentationUrl: srcMod?.docUrl || '' }] }
      }))
    } else {
      setCompositeSlots(prev => {
        if (prev.some(s => s.moduleId === moduleId)) return prev
        const srcMod = modules.find(m => m.id === moduleId)
        return [...prev, { moduleId, maturity: 'configured', disciplines: ['mek'], description: srcMod?.desc || '', documentationUrl: srcMod?.docUrl || '' }]
      })
    }
  }

  function saveCompositeModule() {
    if (compositeSlots.length === 0) return
    const parts = compositeSlots.map(s => modules.find(m => m.id === s.moduleId)?.name).filter(Boolean)
    const customId = composeId(bbIdConfig, compositeIdParts)
    setModules(prev => [...prev, {
      id: uid(), name: compositeName.trim() || ts(language, 'buildComposite'), iconKey: 'Layers', color: 'violet',
      customId,
      customIdParts: { ...compositeIdParts },
      desc: `${ts(language, 'composedOf')}: ${parts.join(', ')}`, isComposite: true, children: compositeSlots.map(s => s.moduleId),
      isUserCreated: true,
    }])
    setCompositeSlots([]); setCompositeName('')
  }

  // ── JSON load ──
  function handleLoadJSON(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result)
        if (data.bbIdConfig && onImportBbIdConfig) onImportBbIdConfig(data.bbIdConfig)
        // Support v2 single-BB format
        if (data.version === 2 && data.bb) {
          if (data.modules && Array.isArray(data.modules)) {
            setModules(prev => {
              const existing = new Set(prev.map(m => m.id))
              const newMods = data.modules.filter(m => !existing.has(m.id)).map(m => ({ ...m, isUserCreated: !!m.isUserCreated }))
              return [...prev, ...newMods]
            })
          }
          const bb = data.bb
          setBBs([{ ...bb, modules: (bb.modules || []).map(s => ({ ...s })), options: (bb.options || []).map(o => ({ ...o, modules: o.modules.map(s => ({ ...s })) })) }])
          setWorkspaceBBId(bb.id); setBBName(bb.name || '')
        }
        // Support v1 multi-BB format (load first BB)
        else if (data.bbs && Array.isArray(data.bbs)) {
          if (data.modules && Array.isArray(data.modules)) {
            setModules(data.modules.map(m => ({ ...m, isUserCreated: !!m.isUserCreated })))
          }
          if (data.bbs.length > 0) {
            setBBs([data.bbs[0]])
            setWorkspaceBBId(data.bbs[0].id); setBBName(data.bbs[0].name)
          }
        }
      } catch { /* ignore malformed files */ }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const workspaceSlots = workspaceMode === 'bb' ? (workspaceBB?.modules || []) : compositeSlots

  const workspaceMetrics = useMemo(() => {
    if (workspaceMode === 'bb') {
      if (!workspaceBB) return { score: 0, reusePercent: 0, bbsCount: 0, modulesCount: 0 }
      const m = computeSandboxMetrics([workspaceBB])
      return { score: m.score, reusePercent: m.reusePercent, bbsCount: 1, modulesCount: workspaceBB.modules.length }
    }

    const total = compositeSlots.length
    const standard = compositeSlots.filter(s => s.maturity === 'standard').length
    const configured = compositeSlots.filter(s => s.maturity === 'configured').length
    const custom = compositeSlots.filter(s => s.maturity === 'custom').length
    const score = total > 0 ? Math.round(((standard * 100 + configured * 60 + custom * 10) / (total * 100)) * 100) : 0

    return { score, reusePercent: 0, bbsCount: 0, modulesCount: total }
  }, [workspaceMode, workspaceBB, compositeSlots])

  useEffect(() => {
    if (onDataChange) onDataChange({ modules, bbs })
  }, [modules, bbs, onDataChange])

  return (
    <div className="space-y-6">
      {/* ── TOOLBAR ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <button onClick={() => setWorkspaceMode('bb')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${workspaceMode === 'bb' ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
            {ts(language, 'buildBB')}
          </button>
          <button onClick={() => setWorkspaceMode('composite')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${workspaceMode === 'composite' ? 'bg-violet-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}>
            {ts(language, 'buildComposite')}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={newBBClear}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
            <Plus className="w-4 h-4" />{ts(language, 'newBBClear')}
          </button>
          <button onClick={handleSaveToLibrary}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${saveFlash ? 'bg-emerald-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
            <Save className="w-4 h-4" />{saveFlash ? ts(language, 'savedToLibrary') : ts(language, 'saveToLibrary')}
          </button>
          <button onClick={() => workspaceBB && exportBBJSON(workspaceBB, modules, bbIdConfig)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
            <FileDown className="w-4 h-4" />{ts(language, 'exportJson')}
          </button>
          <button onClick={() => exportPDF(bbs, modules, metrics, language, bbIdConfig)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
            <FileDown className="w-4 h-4" />{ts(language, 'exportPdf')}
          </button>
          <button onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-700 hover:bg-slate-50 transition-colors">
            <FileUp className="w-4 h-4" />{ts(language, 'load')}
          </button>
          <input ref={fileInputRef} type="file" accept=".json" onChange={handleLoadJSON} className="hidden" />
        </div>
      </div>

      {/* ── SPLIT VIEW: SIDE CATALOG + MAIN WORKSPACE ── */}
      <div className="grid grid-cols-[360px_minmax(0,1fr)] gap-6 items-start">
        {/* LEFT: Catalog side window */}
        <aside className="sticky top-[73px]">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-slate-400" />
                  <h3 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{ts(language, 'catalog')}</h3>
                </div>
                <span className="text-xs text-slate-400">{modules.length} {ts(language, 'moduleCount')}</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">{ts(language, 'dragToWorkspace')}</p>
            </div>
            <div className="p-3 max-h-[calc(100vh-180px)] overflow-y-auto">
              <ModuleCatalogPanel modules={modules} onUpdate={updateModule} onAdd={addModule} onDelete={deleteModule} language={language} />
            </div>
          </div>
        </aside>

        {/* RIGHT: Main workspace area */}
        <section>
          <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-sm overflow-hidden">
            {/* Workspace header */}
            <div className="p-5 border-b border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2.5 rounded-xl ${workspaceMode === 'bb' ? 'bg-blue-100' : 'bg-violet-100'}`}>
                  <Layers className={`w-5 h-5 ${workspaceMode === 'bb' ? 'text-blue-700' : 'text-violet-700'}`} />
                </div>
                <div className="flex-1">
                  <input type="text"
                    value={workspaceMode === 'bb' ? bbName : compositeName}
                    onChange={e => workspaceMode === 'bb' ? setBBName(e.target.value) : setCompositeName(e.target.value)}
                    placeholder={workspaceMode === 'bb' ? ts(language, 'writeBBName') : ts(language, 'writeCompositeName')}
                    className="w-full text-lg font-bold text-slate-800 bg-transparent border-b-2 border-transparent hover:border-slate-200 focus:border-blue-400 focus:outline-none pb-1 transition-colors" />
                  {workspaceMode === 'bb' && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 whitespace-nowrap">{ts(language, 'ciProject')}</span>
                      <input type="text"
                        value={bbCiProject}
                        onChange={e => setBBCiProject(e.target.value)}
                        placeholder={ts(language, 'ciProjectPlaceholder')}
                        className="w-28 px-2 py-0.5 rounded-md border border-slate-200 text-xs font-mono text-blue-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 placeholder:text-slate-300" />
                    </div>
                  )}
                  <p className="text-xs text-slate-400 mt-1">
                    {workspaceMode === 'bb'
                      ? ts(language, 'dragFromCatalog', { count: workspaceSlots.length })
                      : ts(language, 'dragForComposite', { count: compositeSlots.length })}
                  </p>
                </div>
              </div>

              <div className="mb-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">{ts(language, 'bbIdBuilder')}</p>
                  <p className="text-[10px] text-slate-400">{workspaceMode === 'bb' ? ts(language, 'applyToBB') : ts(language, 'applyToComposite')}</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2">
                  {(bbIdConfig?.segments || []).map((seg, idx) => {
                    const currentParts = workspaceMode === 'bb' ? bbIdParts : compositeIdParts
                    const entries = sbGetSegmentEntries(bbIdConfig, seg.key, currentParts)
                    return (
                      <div key={`${seg.key}-${idx}`}>
                        <label className="text-[10px] text-slate-500 uppercase tracking-wider">{typeof seg.name === 'object' ? (seg.name[language] || seg.name.sv || seg.key) : seg.key}</label>
                        <select
                          value={currentParts[seg.key] || ''}
                          onWheel={preventSelectWheelChange}
                          onChange={e => {
                            const value = e.target.value
                            if (workspaceMode === 'bb') {
                              setBbIdParts(prev => {
                                const next = { ...prev, [seg.key]: value }
                                // Reset dependent segments when parent changes
                                if (seg.key === 'machineType') {
                                  for (const s of (bbIdConfig?.segments || [])) {
                                    if (s.dependsOn === 'machineType') {
                                      const depEntries = sbGetSegmentEntries(bbIdConfig, s.key, next)
                                      next[s.key] = depEntries[0]?.code || ''
                                    }
                                  }
                                }
                                return next
                              })
                            } else {
                              setCompositeIdParts(prev => {
                                const next = { ...prev, [seg.key]: value }
                                if (seg.key === 'machineType') {
                                  for (const s of (bbIdConfig?.segments || [])) {
                                    if (s.dependsOn === 'machineType') {
                                      const depEntries = sbGetSegmentEntries(bbIdConfig, s.key, next)
                                      next[s.key] = depEntries[0]?.code || ''
                                    }
                                  }
                                }
                                return next
                              })
                            }
                          }}
                          className="mt-1 w-full px-2 py-1.5 rounded-lg border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                          {workspaceMode === 'composite' && <option value="">{ts(language, 'emptyIdValue')}</option>}
                          {entries.map(entry => (
                            <option key={`${seg.key}-${entry.code}`} value={entry.code}>{sbOptionLabel(entry, language)}</option>
                          ))}
                        </select>
                      </div>
                    )
                  })}
                </div>
                <p className="mt-2 text-xs text-blue-700 font-mono font-semibold">
                  {ts(language, 'bbIdPreview')}: {workspaceMode === 'bb' ? bbCustomId : compositeCustomId}
                </p>

                {/* Combo validation warning */}
                {(() => {
                  const currentParts = workspaceMode === 'bb' ? bbIdParts : compositeIdParts
                  const warn = sbGetComboWarning(bbIdConfig, currentParts)
                  if (!warn) return null
                  return (
                    <div className="mt-1.5 flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-lg px-2.5 py-1.5 text-[11px] text-amber-800">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      {ts(language, 'comboWarning')}: Serial {currentParts.serial} + Variant {currentParts.variant}
                    </div>
                  )
                })()}

                {/* BB-Deklaration */}
                {(() => {
                  const currentParts = workspaceMode === 'bb' ? bbIdParts : compositeIdParts
                  const decl = sbBuildDeclaration(bbIdConfig, currentParts, language)
                  if (!decl.length) return null
                  return (
                    <div className="mt-2 rounded-lg border border-slate-200 bg-white p-2.5">
                      <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5">{ts(language, 'bbDeclaration')}</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {decl.map(line => (
                          <span key={line.key} className="text-[10px] text-slate-600">
                            <span className="font-mono font-bold text-slate-800">{line.code}</span>
                            {line.alias && <span className="text-slate-500"> = {line.alias}</span>}
                            {line.specs && <span className="text-slate-400 ml-0.5">({line.specs})</span>}
                            {line.status === 'deprecated' && <span className="text-red-500 ml-0.5">⚠</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  )
                })()}

                {workspaceMode === 'bb' && (workspaceBB?.options || []).length > 0 && (
                  <div className="mt-1.5 flex items-start gap-2 bg-orange-50 border border-orange-200 rounded-lg px-2.5 py-1.5">
                    <span className="text-[10px] font-semibold text-orange-700 uppercase tracking-wider whitespace-nowrap">{ts(language, 'optionSuffixLabel')}:</span>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5">
                      {(workspaceBB?.options || []).map((opt, i) => (
                        <span key={opt.id} className={`text-[10px] font-mono ${opt.enabled ? 'text-orange-700 font-bold' : 'text-orange-400'}`}>
                          {i + 1}={opt.enabled ? '1' : '0'} {opt.name || '—'}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick metrics */}
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-slate-50 rounded-lg px-3 py-2"><p className="text-[10px] text-slate-500 uppercase">{ts(language, 'standardization')}</p><p className="text-lg font-bold text-emerald-600">{workspaceMetrics.score}%</p></div>
                <div className="bg-slate-50 rounded-lg px-3 py-2"><p className="text-[10px] text-slate-500 uppercase">{ts(language, 'modules')}</p><p className="text-lg font-bold text-slate-800">{workspaceMetrics.modulesCount}</p></div>
              </div>



              {workspaceMode === 'composite' && compositeSlots.length > 0 && (
                <div className="mt-3">
                  <button onClick={saveCompositeModule}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 transition-colors shadow-sm">
                    <Check className="w-4 h-4" />{ts(language, 'saveAsModule')}
                  </button>
                </div>
              )}
            </div>

            {/* Drop zone */}
            <div onDragOver={e => { e.preventDefault(); if (!dropActive) setDropActive(true) }}
              onDragLeave={() => setDropActive(false)} onDrop={onWorkspaceDrop}
              className={`min-h-[520px] p-4 transition-colors ${dropActive ? 'bg-blue-50' : 'bg-slate-50/30'}`}>

              {workspaceSlots.length === 0 ? (
                <div className="h-full min-h-[460px] border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center border-slate-200 bg-white/70">
                  <div className={`p-4 rounded-2xl mb-3 ${dropActive ? 'bg-blue-100' : 'bg-slate-100'}`}>
                    <Layers className={`w-10 h-10 ${dropActive ? 'text-blue-500' : 'text-slate-300'}`} />
                  </div>
                  <p className="font-semibold text-slate-600">{dropActive ? ts(language, 'dropHere') : ts(language, 'dragWorkspace')}</p>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    {ts(language, 'configureHint')}
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {workspaceSlots.map((slot, idx) => {
                    const mod = modules.find(m => m.id === slot.moduleId)
                    if (!mod) return null
                    return (
                      <WorkspaceSlotCard key={`${slot.moduleId}-${idx}`} slot={slot} mod={mod}
                        onUpdateSlot={patch => workspaceMode === 'bb' ? updateWorkspaceSlot(workspaceBBId, idx, patch) : updateCompositeSlot(idx, patch)}
                        onRemove={() => workspaceMode === 'bb' ? removeModuleFromBB(workspaceBBId, idx) : setCompositeSlots(prev => prev.filter((_, i) => i !== idx))}
                        onSaveAsNewModule={() => saveSlotAsNewModule(slot, mod, idx)} language={language} />
                    )
                  })}
                </div>
              )}

              {/* ── OPTIONS SECTION ── */}
              {workspaceMode === 'bb' && workspaceBBId && (() => {
                const bbOpts = (workspaceBB?.options || [])
                return (
                  <div className="mt-6 border-t-2 border-dashed border-orange-200 pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <ToggleLeft className="w-4 h-4 text-orange-500" />
                        <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">{ts(language, 'optionsTitle')}</h4>
                        {bbOpts.length > 0 && (
                          <span className="text-[10px] text-slate-400">
                            {ts(language, 'enabledCount', { enabled: bbOpts.filter(o => o.enabled).length, total: bbOpts.length })}
                          </span>
                        )}
                      </div>
                      <button onClick={() => addOptionToBB(workspaceBBId)}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-orange-50 text-orange-700 hover:bg-orange-100 transition-colors">
                        <Plus className="w-3 h-3" />{ts(language, 'addOption')}
                      </button>
                    </div>

                    {bbOpts.length === 0 && (
                      <p className="text-xs text-slate-400 italic mb-2">{ts(language, 'optionDropHint')}</p>
                    )}

                    <div className="space-y-3">
                      {bbOpts.map(opt => (
                        <div key={opt.id} className={`rounded-xl border-2 ${opt.enabled ? 'border-orange-200 bg-orange-50/30' : 'border-slate-200 bg-slate-50/30 opacity-60'} overflow-hidden`}>
                          {/* Option header */}
                          <div className="flex items-center gap-2 px-3 py-2 bg-white/70">
                            <button onClick={() => toggleOption(workspaceBBId, opt.id)}
                              className={`px-2 py-1 rounded-md text-[10px] font-bold transition-colors ${opt.enabled ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-400'}`}>
                              {opt.enabled ? ts(language, 'optionEnabled') : ts(language, 'optionDisabled')}
                            </button>
                            <input type="text" value={opt.name} onChange={e => updateOptionName(workspaceBBId, opt.id, e.target.value)}
                              placeholder={ts(language, 'optionPlaceholder')}
                              className="flex-1 px-2 py-1 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-300" />
                            <span className="text-[10px] text-slate-400">{opt.modules.length} {ts(language, 'modules').toLowerCase()}</span>
                            <button onClick={() => removeOptionFromBB(workspaceBBId, opt.id)}
                              className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors" title={ts(language, 'removeOption')}>
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Option modules drop zone */}
                          <div
                            onDragOver={e => { e.preventDefault(); e.stopPropagation() }}
                            onDrop={e => { e.preventDefault(); e.stopPropagation(); setDropActive(false); const mid = e.dataTransfer.getData('text/module-id'); if (mid) addModuleToOption(workspaceBBId, opt.id, mid) }}
                            className="p-3 min-h-[60px]">
                            {opt.modules.length === 0 ? (
                              <p className="text-xs text-slate-400 text-center py-2 border border-dashed border-slate-200 rounded-lg">{ts(language, 'optionDropHint')}</p>
                            ) : (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {opt.modules.map((slot, idx) => {
                                  const mod = modules.find(m => m.id === slot.moduleId)
                                  if (!mod) return null
                                  return (
                                    <div key={`${slot.moduleId}-${idx}`} className="relative">
                                      <span className="absolute -top-1 -right-1 z-10 px-1.5 py-0.5 rounded-md bg-orange-500 text-white text-[8px] font-bold tracking-wider">{ts(language, 'optionBadge')}</span>
                                      <WorkspaceSlotCard slot={slot} mod={mod}
                                        onUpdateSlot={patch => updateOptionSlot(workspaceBBId, opt.id, idx, patch)}
                                        onRemove={() => removeModuleFromOption(workspaceBBId, opt.id, idx)}
                                        onSaveAsNewModule={() => saveSlotAsNewModule(slot, mod, idx)} language={language} />
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </section>
      </div>

      {/* ── LIVE MATRIX ── */}
      {bbs.length > 0 && modules.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-slate-400" />
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">{ts(language, 'liveMatrix')}</h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">{ts(language, 'realTime')}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="text-left p-3 pl-5 text-xs font-semibold text-slate-500 uppercase tracking-wider sticky left-0 bg-slate-50 z-10 min-w-[180px]">{ts(language, 'module')}</th>
                  {bbs.map(bb => {
                    const BbIcon = getIconComponent(bb.iconKey)
                    return (<th key={bb.id} className="p-3 text-center min-w-[100px]">
                      <div className="flex flex-col items-center gap-1"><BbIcon className="w-4 h-4 text-slate-400" /><span className="text-[9px] font-mono font-bold text-slate-400">{(bb.customId || '').trim() || fmtBB(bb.bbNumber)}</span><span className="text-[11px] font-semibold text-slate-600 leading-tight">{bb.name}</span></div>
                    </th>)
                  })}
                  <th className="p-3 text-center min-w-[60px]"><span className="text-[11px] font-semibold text-slate-500">{ts(language, 'bbs')}</span></th>
                </tr>
              </thead>
              <tbody>
                {modules.map((mod, idx) => {
                  const ModIcon = getIconComponent(mod.iconKey)
                  const cc = getColorClasses(mod.color)
                  const bbCount = bbs.filter(bb => bb.modules.some(s => s.moduleId === mod.id) || (bb.options || []).some(o => o.modules.some(s => s.moduleId === mod.id))).length
                  return (
                    <tr key={mod.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className={`p-3 pl-5 sticky left-0 z-10 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                        <div className="flex items-center gap-2">
                          <ModIcon className={`w-4 h-4 ${cc.text600}`} />
                          {mod.maNumber && <span className="text-[9px] font-mono font-bold text-slate-400">{fmtMA(mod.maNumber)}</span>}
                          <span className="font-medium text-slate-700">{mod.name}</span>
                          {bbCount > 1 && <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold border border-emerald-200">DELAD</span>}
                        </div>
                      </td>
                      {bbs.map(bb => {
                        const baseSlot = bb.modules.find(s => s.moduleId === mod.id)
                        if (baseSlot) {
                          const matOpt = MATURITY_OPTIONS.find(m => m.key === baseSlot.maturity)
                          return (<td key={bb.id} className="p-3 text-center">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${matOpt.bg} ${matOpt.text}`}>{maturityLabel(baseSlot.maturity, language)}</span>
                          </td>)
                        }
                        const optSlot = (bb.options || []).reduce((found, o) => found || o.modules.find(s => s.moduleId === mod.id), null)
                        if (optSlot) {
                          const matOpt = MATURITY_OPTIONS.find(m => m.key === optSlot.maturity)
                          return (<td key={bb.id} className="p-3 text-center">
                            <div className="flex flex-col items-center gap-0.5">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${matOpt.bg} ${matOpt.text}`}>{maturityLabel(optSlot.maturity, language)}</span>
                              <span className="text-[8px] font-bold text-orange-500">{ts(language, 'optionBadge')}</span>
                            </div>
                          </td>)
                        }
                        return <td key={bb.id} className="p-3 text-center"><span className="text-slate-300">—</span></td>
                      })}
                      <td className="p-3 text-center"><span className={`text-sm font-bold ${bbCount > 1 ? 'text-emerald-600' : 'text-slate-400'}`}>{bbCount}</span></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
