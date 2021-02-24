<template src="./template.pug" lang="pug"></template>

<script src="./script.js"></script>

<router>
  {
  name: 'GbInvestmentChooser'
  }
</router>

<style lang="scss" scoped>
/**
 * Colors by ages
 */

$ageColors: (
  "NoAge": #662211,
  "BronzeAge": #b78d13,
  "IronAge": #984420,
  "EarlyMiddleAges": #4e8144,
  "HighMiddleAges": #2f8e8e,
  "LateMiddleAges": #7f4285,
  "ColonialAge": #ce6404,
  "IndustrialAge": #a72926,
  "ProgressiveEra": #b6895b,
  "ModernEra": #465d88,
  "PostmodernEra": #8d9292,
  "ContemporaryEra": #ce654a,
  "Tomorrow": #22272c,
  "TheFuture": #8dc73f,
  "ArcticFuture": #e9f7f7,
  "OceanicFuture": #225a4b,
  "VirtualFuture": #551a8b,
  "SpaceAgeMars": #bb653d,
  "SpaceAgeAsteroidBelt": #094ebd,
);

@each $key, $color in $ageColors {
  .border-gb-#{$key} {
    @debug $key, $color;
    border-color: $color;
  }
}
</style>
