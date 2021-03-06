/* eslint-disable global-require */

const ASSETS = {
  trees: [
    {
      texture: require('../img/trees/tree_0.png').default,
      width: 200,
      height: 200,
    },
    {
      texture: require('../img/trees/tree_1.png').default,
      width: 200,
      height: 200,
    },
    {
      texture: require('../img/trees/tree_2.png').default,
      width: 200,
      height: 200,
    },
    {
      texture: require('../img/trees/tree_3.png').default,
      width: 200,
      height: 200,
    },
  ],
  rain_trees: [
    {
      texture: require('../img/trees/rain_tree_0.png').default,
      width: 200,
      height: 200,
    },
    {
      texture: require('../img/trees/rain_tree_1.png').default,
      width: 200,
      height: 200,
    },
    {
      texture: require('../img/trees/rain_tree_2.png').default,
      width: 200,
      height: 200,
    },
    {
      texture: require('../img/trees/rain_tree_3.png').default,
      width: 200,
      height: 200,
    },
  ],
  bushes: [
    {
      texture: require('../img/bushes/bush_0.png').default,
      width: 200,
      height: 109,
    },
    {
      texture: require('../img/bushes/bush_1.png').default,
      width: 200,
      height: 105,
    },
    {
      texture: require('../img/bushes/bush_2.png').default,
      width: 200,
      height: 311,
    },
    {
      texture: require('../img/bushes/bush_3.png').default,
      width: 200,
      height: 168,
    },
    {
      texture: require('../img/bushes/bush_4.png').default,
      width: 200,
      height: 278,
    },
  ],
  rain_bushes: [
    {
      texture: require('../img/bushes/rain_bush_0.png').default,
      width: 200,
      height: 152,
    },
    {
      texture: require('../img/bushes/rain_bush_1.png').default,
      width: 200,
      height: 138,
    },
    {
      texture: require('../img/bushes/rain_bush_2.png').default,
      width: 217,
      height: 200,
    },
    {
      texture: require('../img/bushes/rain_bush_3.png').default,
      width: 201,
      height: 200,
    },
    {
      texture: require('../img/bushes/rain_bush_4.png').default,
      width: 200,
      height: 200,
    },
  ],
  papers: [
    {
      texture: require('../img/papers/paper_0.png').default,
      width: 118,
      height: 100,
    },
    {
      texture: require('../img/papers/paper_1.png').default,
      width: 145,
      height: 100,
    },
    {
      texture: require('../img/papers/paper_2.png').default,
      width: 100,
      height: 100,
    },
    {
      texture: require('../img/papers/paper_3.png').default,
      width: 207,
      height: 100,
    },
    {
      texture: require('../img/papers/paper_4.png').default,
      width: 133,
      height: 100,
    },
    {
      texture: require('../img/papers/paper_5.png').default,
      width: 195,
      height: 100,
    },
    {
      texture: require('../img/papers/paper_6.png').default,
      width: 310,
      height: 100,
    },
    {
      texture: require('../img/papers/paper_7.png').default,
      width: 164,
      height: 100,
    },
  ],
  slender: [
    {
      texture: require('../img/slender/right_hand.png').default,
      width: 200,
      height: 200,
    },
    {
      texture: require('../img/slender/left_hand.png').default,
      width: 200,
      height: 200,
    },
  ],
  npc: [
    require('../img/npc/npc_die.gif').default,
    require('../img/npc/npc-1.png').default,
    require('../img/npc/npc-2.png').default,
    require('../img/npc/npc-3.png').default,
    require('../img/npc/npc-4.png').default,
    require('../img/npc/npc2-1.png').default,
    require('../img/npc/npc2-2.png').default,
    require('../img/npc/npc2-3.png').default,
    require('../img/npc/npc2-4.png').default,
    require('../img/npc/npc3-1.png').default,
    require('../img/npc/npc3-2.png').default,
    require('../img/npc/npc3-3.png').default,
    require('../img/npc/npc3-4.png').default,
  ],
  mode: {
    fenceDoor: require('../img/fence_door_0.jpg').default,
    snow: {
      fence: require('../img/snow/fence_snow.png').default,
      sky: require('../img/snow/sky_panorama_snow.jpg').default,
      wall: require('../img/snow/wall_texture_snow.jpg').default,
    },
    rain: {
      fence: require('../img/rain/rain_fence.jpg').default,
      sky: require('../img/rain/rain_sky_panorama.jpg').default,
      wall: require('../img/rain/rain_wall_texture.jpg').default,
    },
  },
};

export default ASSETS;
