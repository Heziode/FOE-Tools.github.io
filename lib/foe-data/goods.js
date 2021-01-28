import moment from "dayjs";
import duration from "dayjs/plugin/duration";

// Import all goods
import dye from "./goods-info/dye";
import lumber from "./goods-info/lumber";
import marble from "./goods-info/marble";
import stone from "./goods-info/stone";
import wine from "./goods-info/wine";

import cloth from "./goods-info/cloth";
import ebony from "./goods-info/ebony";
import iron from "./goods-info/iron";
import jewelry from "./goods-info/jewelry";
import limestone from "./goods-info/limestone";

import alabaster from "./goods-info/alabaster";
import copper from "./goods-info/copper";
import gold from "./goods-info/gold";
import granite from "./goods-info/granite";
import honey from "./goods-info/honey";

import brick from "./goods-info/brick";
import dried_herbs from "./goods-info/dried_herbs";
import glass from "./goods-info/glass";
import rope from "./goods-info/rope";
import salt from "./goods-info/salt";

import basalt from "./goods-info/basalt";
import brass from "./goods-info/brass";
import gunpowder from "./goods-info/gunpowder";
import silk from "./goods-info/silk";
import talc_powder from "./goods-info/talc_powder";

import coffee from "./goods-info/coffee";
import porcelain from "./goods-info/porcelain";
import paper from "./goods-info/paper";
import tar from "./goods-info/tar";
import wire from "./goods-info/wire";

import coke from "./goods-info/coke";
import fertilizer from "./goods-info/fertilizer";
import rubber from "./goods-info/rubber";
import textiles from "./goods-info/textiles";
import whale_oil from "./goods-info/whale_oil";

import asbestos from "./goods-info/asbestos";
import explosives from "./goods-info/explosives";
import gasoline from "./goods-info/gasoline";
import machine_parts from "./goods-info/machine_parts";
import tinplate from "./goods-info/tinplate";

import convenience_food from "./goods-info/convenience_food";
import ferroconcrete from "./goods-info/ferroconcrete";
import flavorants from "./goods-info/flavorants";
import luxury_materials from "./goods-info/luxury_materials";
import packaging from "./goods-info/packaging";

import genome_data from "./goods-info/genome_data";
import industrial_filters from "./goods-info/industrial_filters";
import renewable_resources from "./goods-info/renewable_resources";
import semiconductors from "./goods-info/semiconductors";
import steel from "./goods-info/steel";

import bionics_data from "./goods-info/bionics_data";
import electromagnets from "./goods-info/electromagnets";
import gas from "./goods-info/gas";
import plastics from "./goods-info/plastics";
import robots from "./goods-info/robots";

import nutrition_research from "./goods-info/nutrition_research";
import papercrete from "./goods-info/papercrete";
import preservatives from "./goods-info/preservatives";
import smart_materials from "./goods-info/smart_materials";
import translucent_concrete from "./goods-info/translucent_concrete";

import algae from "./goods-info/algae";
import biogeochemical_data from "./goods-info/biogeochemical_data";
import nanoparticles from "./goods-info/nanoparticles";
import purified_water from "./goods-info/purified_water";
import superconductors from "./goods-info/superconductors";

import ai_data from "./goods-info/ai_data";
import bioplastics from "./goods-info/bioplastics";
import nanowire from "./goods-info/nanowire";
import paper_batteries from "./goods-info/paper_batteries";
import transester_gas from "./goods-info/transester_gas";

import artificial_scales from "./goods-info/artificial_scales";
import biolight from "./goods-info/biolight";
import corals from "./goods-info/corals";
import pearls from "./goods-info/pearls";
import plankton from "./goods-info/plankton";

import cryptocash from "./goods-info/cryptocash";
import data_crystals from "./goods-info/data_crystals";
import golden_rice from "./goods-info/golden_rice";
import nanites from "./goods-info/nanites";
import tea_silk from "./goods-info/tea_silk";

import lubricants from "./goods-info/lubricants";
import biotech_crops from "./goods-info/biotech_crops";
import mars_microbes from "./goods-info/mars_microbes";
import fusion_reactors from "./goods-info/fusion_reactors";
import superalloys from "./goods-info/superalloys";

import nickel from "./goods-info/nickel";
import processed_materials from "./goods-info/processed_materials";
import compound_fluid from "./goods-info/compound_fluid";
import bromine from "./goods-info/bromine";
import platinum_crystals from "./goods-info/platinum_crystals";

moment.extend(duration);

const hiddenAgesCost = {
  BronzeAge: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 100,
      supplies: 100,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 200,
      supplies: 200,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 400,
      supplies: 400,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 600,
      supplies: 600,
      unrefined: null,
    },
  ],
  IronAge: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 200,
      supplies: 200,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 400,
      supplies: 400,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 800,
      supplies: 800,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 1200,
      supplies: 1200,
      unrefined: null,
    },
  ],
  EarlyMiddleAges: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 400,
      supplies: 400,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 800,
      supplies: 800,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 1600,
      supplies: 1600,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 2400,
      supplies: 2400,
      unrefined: null,
    },
  ],
  HighMiddleAges: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 800,
      supplies: 800,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 1600,
      supplies: 1600,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 3200,
      supplies: 3200,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 4800,
      supplies: 4800,
      unrefined: null,
    },
  ],
  LateMiddleAges: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 1600,
      supplies: 1600,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 3200,
      supplies: 3200,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 6400,
      supplies: 6400,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 9600,
      supplies: 9600,
      unrefined: null,
    },
  ],
  ColonialAge: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 2400,
      supplies: 2400,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 4800,
      supplies: 4800,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 9600,
      supplies: 9600,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 14400,
      supplies: 14400,
      unrefined: null,
    },
  ],
  IndustrialAge: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 3200,
      supplies: 3200,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 6400,
      supplies: 6400,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 12800,
      supplies: 12800,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 19200,
      supplies: 19200,
      unrefined: null,
    },
  ],
  ProgressiveEra: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 4000,
      supplies: 4000,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 8000,
      supplies: 8000,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 16000,
      supplies: 16000,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 24000,
      supplies: 24000,
      unrefined: null,
    },
  ],
  ModernEra: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 2400,
      supplies: 2400,
      unrefined: "ColonialAge",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 4800,
      supplies: 4800,
      unrefined: "ColonialAge",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 9600,
      supplies: 9600,
      unrefined: "ColonialAge",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 14400,
      supplies: 14400,
      unrefined: "ColonialAge",
    },
  ],
  PostmodernEra: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 2800,
      supplies: 2800,
      unrefined: "IndustrialAge",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 5600,
      supplies: 5600,
      unrefined: "IndustrialAge",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 11200,
      supplies: 11200,
      unrefined: "IndustrialAge",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 16800,
      supplies: 16800,
      unrefined: "IndustrialAge",
    },
  ],
  ContemporaryEra: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 3200,
      supplies: 3200,
      unrefined: "ProgressiveEra",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 6400,
      supplies: 6400,
      unrefined: "ProgressiveEra",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 12800,
      supplies: 12800,
      unrefined: "ProgressiveEra",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 19200,
      supplies: 19200,
      unrefined: "ProgressiveEra",
    },
  ],
  Tomorrow: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 3600,
      supplies: 3600,
      unrefined: "ModernEra",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 7200,
      supplies: 7200,
      unrefined: "ModernEra",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 14400,
      supplies: 14400,
      unrefined: "ModernEra",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 21600,
      supplies: 21600,
      unrefined: "ModernEra",
    },
  ],
  TheFuture: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 4000,
      supplies: 4000,
      unrefined: "PostmodernEra",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 8000,
      supplies: 8000,
      unrefined: "PostmodernEra",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 16000,
      supplies: 16000,
      unrefined: "PostmodernEra",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 24000,
      supplies: 24000,
      unrefined: "PostmodernEra",
    },
  ],
  ArcticFuture: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 4500,
      supplies: 4500,
      unrefined: "ContemporaryEra",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 9000,
      supplies: 9000,
      unrefined: "ContemporaryEra",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 18000,
      supplies: 18000,
      unrefined: "ContemporaryEra",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 27000,
      supplies: 27000,
      unrefined: "ContemporaryEra",
    },
  ],
  OceanicFuture: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 4500,
      supplies: 4500,
      unrefined: "Tomorrow",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 9000,
      supplies: 9000,
      unrefined: "Tomorrow",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 18000,
      supplies: 18000,
      unrefined: "Tomorrow",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 27000,
      supplies: 27000,
      unrefined: "Tomorrow",
    },
  ],
  VirtualFuture: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 6000,
      supplies: 6000,
      unrefined: "TheFuture",
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 12000,
      supplies: 12000,
      unrefined: "TheFuture",
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 24000,
      supplies: 24000,
      unrefined: "TheFuture",
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 36000,
      supplies: 36000,
      unrefined: "TheFuture",
    },
  ],
  // For SAM, values are not the values in production building.
  // This is due to keep 2:1 ratio here.
  SpaceAgeMars: [
    {
      quantity: 3,
      duration: moment.duration(4, "hours"),
      coins: 96000,
      supplies: 96000,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(8, "hours"),
      coins: 192000,
      supplies: 192000,
      unrefined: null,
    },
    {
      quantity: 12,
      duration: moment.duration(1, "days"),
      coins: 384000,
      supplies: 384000,
      unrefined: null,
    },
    {
      quantity: 18,
      duration: moment.duration(2, "days"),
      coins: 576000,
      supplies: 576000,
      unrefined: null,
    },
  ],
  SpaceAgeAsteroidBelt: [
    {
      quantity: 1,
      duration: moment.duration(4, "hours"),
      coins: 120000,
      supplies: 120000,
      medals: 50,
      unrefined: null,
    },
    {
      quantity: 2,
      duration: moment.duration(8, "hours"),
      coins: 240000,
      supplies: 240000,
      medals: 100,
      unrefined: null,
    },
    {
      quantity: 4,
      duration: moment.duration(1, "days"),
      coins: 480000,
      supplies: 480000,
      medals: 200,
      unrefined: null,
    },
    {
      quantity: 6,
      duration: moment.duration(2, "days"),
      coins: 720000,
      supplies: 720000,
      medals: 300,
      unrefined: null,
    },
  ],
};

export const agesCost = hiddenAgesCost;

export const goods = {
  dye,
  lumber,
  marble,
  stone,
  wine,

  cloth,
  ebony,
  iron,
  jewelry,
  limestone,

  alabaster,
  copper,
  gold,
  granite,
  honey,

  brick,
  dried_herbs,
  glass,
  rope,
  salt,

  basalt,
  brass,
  gunpowder,
  silk,
  talc_powder,

  coffee,
  porcelain,
  paper,
  tar,
  wire,

  coke,
  fertilizer,
  rubber,
  textiles,
  whale_oil,

  asbestos,
  explosives,
  gasoline,
  machine_parts,
  tinplate,

  convenience_food,
  ferroconcrete,
  flavorants,
  luxury_materials,
  packaging,

  genome_data,
  industrial_filters,
  renewable_resources,
  semiconductors,
  steel,

  bionics_data,
  electromagnets,
  gas,
  plastics,
  robots,

  nutrition_research,
  papercrete,
  preservatives,
  smart_materials,
  translucent_concrete,

  algae,
  biogeochemical_data,
  nanoparticles,
  purified_water,
  superconductors,

  ai_data,
  bioplastics,
  nanowire,
  paper_batteries,
  transester_gas,

  artificial_scales,
  biolight,
  corals,
  pearls,
  plankton,

  cryptocash,
  data_crystals,
  golden_rice,
  nanites,
  tea_silk,

  lubricants,
  biotech_crops,
  mars_microbes,
  fusion_reactors,
  superalloys,

  nickel,
  processed_materials,
  compound_fluid,
  bromine,
  platinum_crystals,
};

export const agesGoods = {
  BronzeAge: {
    cost: agesCost.BronzeAge,
    goods: [dye, lumber, marble, stone, wine],
    goodsKey: {
      dye,
      lumber,
      marble,
      stone,
      wine,
    },
  },
  IronAge: {
    cost: agesCost.IronAge,
    goods: [cloth, ebony, iron, jewelry, limestone],
    goodsKey: {
      cloth,
      ebony,
      iron,
      jewelry,
      limestone,
    },
  },
  EarlyMiddleAges: {
    cost: agesCost.EarlyMiddleAges,
    goods: [alabaster, copper, gold, granite, honey],
    goodsKey: {
      alabaster,
      copper,
      gold,
      granite,
      honey,
    },
  },
  HighMiddleAges: {
    cost: agesCost.HighMiddleAges,
    goods: [brick, dried_herbs, glass, rope, salt],
    goodsKey: {
      brick,
      dried_herbs,
      glass,
      rope,
      salt,
    },
  },
  LateMiddleAges: {
    cost: agesCost.LateMiddleAges,
    goods: [basalt, brass, gunpowder, silk, talc_powder],
    goodsKey: {
      basalt,
      brass,
      gunpowder,
      silk,
      talc_powder,
    },
  },
  ColonialAge: {
    cost: agesCost.ColonialAge,
    goods: [coffee, porcelain, paper, tar, wire],
    goodsKey: {
      coffee,
      porcelain,
      paper,
      tar,
      wire,
    },
  },
  IndustrialAge: {
    cost: agesCost.IndustrialAge,
    goods: [coke, fertilizer, rubber, textiles, whale_oil],
    goodsKey: {
      coke,
      fertilizer,
      rubber,
      textiles,
      whale_oil,
    },
  },
  ProgressiveEra: {
    cost: agesCost.ProgressiveEra,
    goods: [asbestos, explosives, gasoline, machine_parts, tinplate],
    goodsKey: {
      asbestos,
      explosives,
      gasoline,
      machine_parts,
      tinplate,
    },
  },
  ModernEra: {
    cost: agesCost.ModernEra,
    goods: [convenience_food, ferroconcrete, flavorants, luxury_materials, packaging],
    goodsKey: {
      convenience_food,
      ferroconcrete,
      flavorants,
      luxury_materials,
      packaging,
    },
  },
  PostmodernEra: {
    cost: agesCost.PostmodernEra,
    goods: [genome_data, industrial_filters, renewable_resources, semiconductors, steel],
    goodsKey: {
      genome_data,
      industrial_filters,
      renewable_resources,
      semiconductors,
      steel,
    },
  },
  ContemporaryEra: {
    cost: agesCost.ContemporaryEra,
    goods: [bionics_data, electromagnets, gas, plastics, robots],
    goodsKey: {
      bionics_data,
      electromagnets,
      gas,
      plastics,
      robots,
    },
  },
  Tomorrow: {
    cost: agesCost.Tomorrow,
    goods: [nutrition_research, papercrete, preservatives, smart_materials, translucent_concrete],
    goodsKey: {
      nutrition_research,
      papercrete,
      preservatives,
      smart_materials,
      translucent_concrete,
    },
  },
  TheFuture: {
    cost: agesCost.TheFuture,
    goods: [algae, biogeochemical_data, nanoparticles, purified_water, superconductors],
    goodsKey: {
      algae,
      biogeochemical_data,
      nanoparticles,
      purified_water,
      superconductors,
    },
  },
  ArcticFuture: {
    cost: agesCost.ArcticFuture,
    goods: [ai_data, bioplastics, nanowire, paper_batteries, transester_gas],
    goodsKey: {
      ai_data,
      bioplastics,
      nanowire,
      paper_batteries,
      transester_gas,
    },
  },
  OceanicFuture: {
    cost: agesCost.OceanicFuture,
    goods: [artificial_scales, biolight, corals, pearls, plankton],
    goodsKey: {
      artificial_scales,
      biolight,
      corals,
      pearls,
      plankton,
    },
  },
  VirtualFuture: {
    cost: agesCost.VirtualFuture,
    goods: [cryptocash, data_crystals, golden_rice, nanites, tea_silk],
    goodsKey: {
      cryptocash,
      data_crystals,
      golden_rice,
      nanites,
      tea_silk,
    },
  },
  SpaceAgeMars: {
    cost: agesCost.SpaceAgeMars,
    goods: [lubricants, biotech_crops, mars_microbes, fusion_reactors, superalloys],
    goodsKey: {
      lubricants,
      biotech_crops,
      mars_microbes,
      fusion_reactors,
      superalloys,
    },
  },
  SpaceAgeAsteroidBelt: {
    cost: agesCost.SpaceAgeAsteroidBelt,
    goods: [nickel, processed_materials, compound_fluid, bromine, platinum_crystals],
    goodsKey: {
      nickel,
      processed_materials,
      compound_fluid,
      bromine,
      platinum_crystals,
    },
  },
};

export const goodsAges = {
  dye: "BronzeAge",
  lumber: "BronzeAge",
  marble: "BronzeAge",
  stone: "BronzeAge",
  wine: "BronzeAge",

  cloth: "IronAge",
  ebony: "IronAge",
  iron: "IronAge",
  jewelry: "IronAge",
  limestone: "IronAge",

  alabaster: "EarlyMiddleAges",
  copper: "EarlyMiddleAges",
  gold: "EarlyMiddleAges",
  granite: "EarlyMiddleAges",
  honey: "EarlyMiddleAges",

  brick: "HighMiddleAges",
  dried_herbs: "HighMiddleAges",
  glass: "HighMiddleAges",
  rope: "HighMiddleAges",
  salt: "HighMiddleAges",

  basalt: "LateMiddleAges",
  brass: "LateMiddleAges",
  gunpowder: "LateMiddleAges",
  silk: "LateMiddleAges",
  talc_powder: "LateMiddleAges",

  coffee: "ColonialAge",
  porcelain: "ColonialAge",
  paper: "ColonialAge",
  tar: "ColonialAge",
  wire: "ColonialAge",

  coke: "IndustrialAge",
  fertilizer: "IndustrialAge",
  rubber: "IndustrialAge",
  textiles: "IndustrialAge",
  whale_oil: "IndustrialAge",

  asbestos: "ProgressiveEra",
  explosives: "ProgressiveEra",
  gasoline: "ProgressiveEra",
  machine_parts: "ProgressiveEra",
  tinplate: "ProgressiveEra",

  convenience_food: "ModernEra",
  ferroconcrete: "ModernEra",
  flavorants: "ModernEra",
  luxury_materials: "ModernEra",
  packaging: "ModernEra",

  genome_data: "PostmodernEra",
  industrial_filters: "PostmodernEra",
  renewable_resources: "PostmodernEra",
  semiconductors: "PostmodernEra",
  steel: "PostmodernEra",

  bionics_data: "ContemporaryEra",
  electromagnets: "ContemporaryEra",
  gas: "ContemporaryEra",
  plastics: "ContemporaryEra",
  robots: "ContemporaryEra",

  nutrition_research: "Tomorrow",
  papercrete: "Tomorrow",
  preservatives: "Tomorrow",
  smart_materials: "Tomorrow",
  translucent_concrete: "Tomorrow",

  algae: "TheFuture",
  biogeochemical_data: "TheFuture",
  nanoparticles: "TheFuture",
  purified_water: "TheFuture",
  superconductors: "TheFuture",

  ai_data: "ArcticFuture",
  bioplastics: "ArcticFuture",
  nanowire: "ArcticFuture",
  paper_batteries: "ArcticFuture",
  transester_gas: "ArcticFuture",

  artificial_scales: "OceanicFuture",
  biolight: "OceanicFuture",
  corals: "OceanicFuture",
  pearls: "OceanicFuture",
  plankton: "OceanicFuture",

  cryptocash: "VirtualFuture",
  data_crystals: "VirtualFuture",
  golden_rice: "VirtualFuture",
  nanites: "VirtualFuture",
  tea_silk: "VirtualFuture",

  lubricants: "SpaceAgeMars",
  biotech_crops: "SpaceAgeMars",
  mars_microbes: "SpaceAgeMars",
  fusion_reactors: "SpaceAgeMars",
  superalloys: "SpaceAgeMars",

  nickel: "SpaceAgeAsteroidBelt",
  processed_materials: "SpaceAgeAsteroidBelt",
  compound_fluid: "SpaceAgeAsteroidBelt",
  bromine: "SpaceAgeAsteroidBelt",
  platinum_crystals: "SpaceAgeAsteroidBelt",
};
