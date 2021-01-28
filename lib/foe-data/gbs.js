import ages from "./ages";
import Observatory from "./gbs-data/Observatory";
import Temple_of_Relics from "./gbs-data/Temple_of_Relics";
import Oracle_of_Delphi from "./gbs-data/Oracle_of_Delphi";
import Galata_Tower from "./gbs-data/Galata_Tower";
import Tower_of_Babel from "./gbs-data/Tower_of_Babel";
import Statue_of_Zeus from "./gbs-data/Statue_of_Zeus";
import Colosseum from "./gbs-data/Colosseum";
import Lighthouse_of_Alexandria from "./gbs-data/Lighthouse_of_Alexandria";
import Hagia_Sophia from "./gbs-data/Hagia_Sophia";
import Cathedral_of_Aachen from "./gbs-data/Cathedral_of_Aachen";
import St_Mark_s_Basilica from "./gbs-data/St_Mark_s_Basilica";
import Notre_Dame from "./gbs-data/Notre_Dame";
import Saint_Basil_s_Cathedral from "./gbs-data/Saint_Basil_s_Cathedral";
import Castel_del_Monte from "./gbs-data/Castel_del_Monte";
import Deal_Castle from "./gbs-data/Deal_Castle";
import Frauenkirche_of_Dresden from "./gbs-data/Frauenkirche_of_Dresden";
import Capitol from "./gbs-data/Capitol";
import Royal_Albert_Hall from "./gbs-data/Royal_Albert_Hall";
import Chateau_Frontenac from "./gbs-data/Chateau_Frontenac";
import Alcatraz from "./gbs-data/Alcatraz";
import Space_Needle from "./gbs-data/Space_Needle";
import Atomium from "./gbs-data/Atomium";
import Cape_Canaveral from "./gbs-data/Cape_Canaveral";
import The_Habitat from "./gbs-data/The_Habitat";
import Lotus_Temple from "./gbs-data/Lotus_Temple";
import Innovation_Tower from "./gbs-data/Innovation_Tower";
import Truce_Tower from "./gbs-data/Truce_Tower";
import Voyager_V1 from "./gbs-data/Voyager_V1";
import The_Arc from "./gbs-data/The_Arc";
import Rain_Forest_Project from "./gbs-data/Rain_Forest_Project";
import Gaea_Statue from "./gbs-data/Gaea_Statue";
import Arctic_Orangery from "./gbs-data/Arctic_Orangery";
import Seed_Vault from "./gbs-data/Seed_Vault";
import Atlantis_Museum from "./gbs-data/Atlantis_Museum";
import The_Kraken from "./gbs-data/The_Kraken";
import The_Blue_Galaxy from "./gbs-data/The_Blue_Galaxy";
import Terracotta_Army from "./gbs-data/Terracotta_Army";
import Himeji_Castle from "./gbs-data/Himeji_Castle";
import The_Virgo_Project from "./gbs-data/The_Virgo_Project";
import Star_Gazer from "./gbs-data/Star_Gazer";
import Space_Carrier from "./gbs-data/Space_Carrier";

export const gbs = {
  Observatory: { key: "Observatory", age: ages.NoAge.key },
  Temple_of_Relics: { key: "Temple_of_Relics", age: ages.NoAge.key },
  Oracle_of_Delphi: { key: "Oracle_of_Delphi", age: ages.NoAge.key },
  Galata_Tower: { key: "Galata_Tower", age: ages.NoAge.key },
  Tower_of_Babel: { key: "Tower_of_Babel", age: ages.BronzeAge.key },
  Statue_of_Zeus: { key: "Statue_of_Zeus", age: ages.BronzeAge.key },
  Colosseum: { key: "Colosseum", age: ages.IronAge.key },
  Lighthouse_of_Alexandria: {
    key: "Lighthouse_of_Alexandria",
    age: ages.IronAge.key,
  },
  Hagia_Sophia: { key: "Hagia_Sophia", age: ages.EarlyMiddleAges.key },
  Cathedral_of_Aachen: {
    key: "Cathedral_of_Aachen",
    age: ages.EarlyMiddleAges.key,
  },
  St_Mark_s_Basilica: {
    key: "St_Mark_s_Basilica",
    age: ages.HighMiddleAges.key,
  },
  Notre_Dame: { key: "Notre_Dame", age: ages.HighMiddleAges.key },
  Saint_Basil_s_Cathedral: {
    key: "Saint_Basil_s_Cathedral",
    age: ages.LateMiddleAges.key,
  },
  Castel_del_Monte: { key: "Castel_del_Monte", age: ages.LateMiddleAges.key },
  Deal_Castle: { key: "Deal_Castle", age: ages.ColonialAge.key },
  Frauenkirche_of_Dresden: {
    key: "Frauenkirche_of_Dresden",
    age: ages.ColonialAge.key,
  },
  Capitol: { key: "Capitol", age: ages.IndustrialAge.key },
  Royal_Albert_Hall: { key: "Royal_Albert_Hall", age: ages.IndustrialAge.key },
  Chateau_Frontenac: { key: "Chateau_Frontenac", age: ages.ProgressiveEra.key },
  Alcatraz: { key: "Alcatraz", age: ages.ProgressiveEra.key },
  Space_Needle: { key: "Space_Needle", age: ages.ModernEra.key },
  Atomium: { key: "Atomium", age: ages.ModernEra.key },
  Cape_Canaveral: { key: "Cape_Canaveral", age: ages.PostmodernEra.key },
  The_Habitat: { key: "The_Habitat", age: ages.PostmodernEra.key },
  Lotus_Temple: { key: "Lotus_Temple", age: ages.ContemporaryEra.key },
  Innovation_Tower: { key: "Innovation_Tower", age: ages.ContemporaryEra.key },
  Truce_Tower: { key: "Truce_Tower", age: ages.Tomorrow.key },
  Voyager_V1: { key: "Voyager_V1", age: ages.Tomorrow.key },
  The_Arc: { key: "The_Arc", age: ages.TheFuture.key },
  Rain_Forest_Project: { key: "Rain_Forest_Project", age: ages.TheFuture.key },
  Gaea_Statue: { key: "Gaea_Statue", age: ages.ArcticFuture.key },
  Arctic_Orangery: { key: "Arctic_Orangery", age: ages.ArcticFuture.key },
  Seed_Vault: { key: "Seed_Vault", age: ages.ArcticFuture.key },
  Atlantis_Museum: { key: "Atlantis_Museum", age: ages.OceanicFuture.key },
  The_Kraken: { key: "The_Kraken", age: ages.OceanicFuture.key },
  The_Blue_Galaxy: { key: "The_Blue_Galaxy", age: ages.OceanicFuture.key },
  Terracotta_Army: { key: "Terracotta_Army", age: ages.VirtualFuture.key },
  Himeji_Castle: { key: "Himeji_Castle", age: ages.VirtualFuture.key },
  The_Virgo_Project: { key: "The_Virgo_Project", age: ages.SpaceAgeMars.key },
  Star_Gazer: { key: "Star_Gazer", age: ages.SpaceAgeMars.key },
  Space_Carrier: { key: "Space_Carrier", age: ages.SpaceAgeAsteroidBelt.key },
};

export const gbList = [
  {
    key: "NoAge",
    gbs: ["Observatory", "Temple_of_Relics", "Oracle_of_Delphi", "Galata_Tower"],
  },
  { key: "BronzeAge", gbs: ["Tower_of_Babel", "Statue_of_Zeus"] },
  { key: "IronAge", gbs: ["Colosseum", "Lighthouse_of_Alexandria"] },
  { key: "EarlyMiddleAges", gbs: ["Hagia_Sophia", "Cathedral_of_Aachen"] },
  { key: "HighMiddleAges", gbs: ["St_Mark_s_Basilica", "Notre_Dame"] },
  {
    key: "LateMiddleAges",
    gbs: ["Saint_Basil_s_Cathedral", "Castel_del_Monte"],
  },
  { key: "ColonialAge", gbs: ["Deal_Castle", "Frauenkirche_of_Dresden"] },
  { key: "IndustrialAge", gbs: ["Capitol", "Royal_Albert_Hall"] },
  { key: "ProgressiveEra", gbs: ["Chateau_Frontenac", "Alcatraz"] },
  { key: "ModernEra", gbs: ["Space_Needle", "Atomium"] },
  { key: "PostmodernEra", gbs: ["Cape_Canaveral", "The_Habitat"] },
  { key: "ContemporaryEra", gbs: ["Lotus_Temple", "Innovation_Tower"] },
  { key: "Tomorrow", gbs: ["Truce_Tower", "Voyager_V1"] },
  { key: "TheFuture", gbs: ["The_Arc", "Rain_Forest_Project"] },
  {
    key: "ArcticFuture",
    gbs: ["Gaea_Statue", "Arctic_Orangery", "Seed_Vault"],
  },
  {
    key: "OceanicFuture",
    gbs: ["Atlantis_Museum", "The_Kraken", "The_Blue_Galaxy"],
  },
  { key: "VirtualFuture", gbs: ["Terracotta_Army", "Himeji_Castle"] },
  { key: "SpaceAgeMars", gbs: ["The_Virgo_Project", "Star_Gazer"] },
  { key: "SpaceAgeAsteroidBelt", gbs: ["Space_Carrier"] },
];

export const gbsData = {
  Observatory,
  Temple_of_Relics,
  Oracle_of_Delphi,
  Galata_Tower,
  Tower_of_Babel,
  Statue_of_Zeus,
  Colosseum,
  Lighthouse_of_Alexandria,
  Hagia_Sophia,
  Cathedral_of_Aachen,
  St_Mark_s_Basilica,
  Notre_Dame,
  Saint_Basil_s_Cathedral,
  Castel_del_Monte,
  Deal_Castle,
  Frauenkirche_of_Dresden,
  Capitol,
  Royal_Albert_Hall,
  Chateau_Frontenac,
  Alcatraz,
  Space_Needle,
  Atomium,
  Cape_Canaveral,
  The_Habitat,
  Lotus_Temple,
  Innovation_Tower,
  Truce_Tower,
  Voyager_V1,
  The_Arc,
  Rain_Forest_Project,
  Gaea_Statue,
  Arctic_Orangery,
  Seed_Vault,
  Atlantis_Museum,
  The_Kraken,
  The_Blue_Galaxy,
  Terracotta_Army,
  Himeji_Castle,
  The_Virgo_Project,
  Star_Gazer,
  Space_Carrier,
};

export const agesCost = {
  Oracle: require("./ages-cost/Oracle"),
  NoAge: require("./ages-cost/NoAge"),
  BronzeAge: require("./ages-cost/BronzeAge"),
  IronAge: require("./ages-cost/IronAge"),
  EarlyMiddleAges: require("./ages-cost/EarlyMiddleAges"),
  HighMiddleAges: require("./ages-cost/HighMiddleAges"),
  LateMiddleAges: require("./ages-cost/LateMiddleAges"),
  ColonialAge: require("./ages-cost/ColonialAge"),
  IndustrialAge: require("./ages-cost/IndustrialAge"),
  ProgressiveEra: require("./ages-cost/ProgressiveEra"),
  ModernEra: require("./ages-cost/ModernEra"),
  PostmodernEra: require("./ages-cost/PostmodernEra"),
  ContemporaryEra: require("./ages-cost/ContemporaryEra"),
  Tomorrow: require("./ages-cost/Tomorrow"),
  TheFuture: require("./ages-cost/TheFuture"),
  ArcticFuture: require("./ages-cost/ArcticFuture"),
  OceanicFuture: require("./ages-cost/OceanicFuture"),
  VirtualFuture: require("./ages-cost/VirtualFuture"),
  SpaceAgeMars: require("./ages-cost/SpaceAgeMars"),
  SpaceAgeAsteroidBelt: require("./ages-cost/SpaceAgeAsteroidBelt"),
};
