const LEVEL_DATA = {
  "Prologue-1": {
    text:
      "You awaken on a desolate shore with no memories of your past. 'Where am I?' You ask yourself. You look to your left and see a bag. Maybe the bag has the answers. What do you do?",
    options: [
      { optionID: 1, option: "Open the Bag", optionAction: "Prologue-1A" },
      { optionID: 2, option: "Dismiss the Bag", optionAction: "Prologue-1B" },
    ],
    levelSet: "1",
  },
  "Prologue-1A": {
    text:
      "You open the bag which is in an oddly pristine condition. Inside are three items and an odd-smelling note. Proceeding with caution, you?",
    options: [
      { optionID: 3, option: "Read the Note", optionAction: "Prologue-1AA" },
      { optionID: 4, option: "Take the Items", optionAction: "Prologue-1AB" },
    ],
    levelSet: "1",
  },
  "Prologue-1AA": {
    text:
      "You take out the note. 'The curse is lifted, your adventure begins. Choose wisely...' You peer into the bag. Inside is 3 items. Take your pick.",
    options: [
      {
        optionID: 5,
        option: "Take the Sword",
        optionAction: "Prologue-1AAA",
        items: ["001"],
      },
      {
        optionID: 6,
        option: "Take the Bow",
        optionAction: "Prologue-1AAB",
        items: ["002"],
      },
      {
        optionID: 7,
        option: "Take the Staff",
        optionAction: "Prologue-1AAC",
        items: ["003"],
      },
    ],
    levelSet: "1",
  },
  "Prologue-1AAA": {
    text:
      "You put the sword in your inventory. A nice choice indeed. You look around you. You notice two points of interest. A lighthouse not too far in the distance and a weirdly shaped rock to the east. Where do you go?",
    options: [
      { optionID: 7, option: "Investigate the Lighthouse" },
      { optionID: 8, option: "Head to the Rock" },
    ],
  },
  "Prologue-1AAB": {
    text:
      "You put the bow in your inventory. A sneaky choice indeed. You look around you. You notice two points of interest. A lighthouse not too far in the distance and a weirdly shaped rock to the east. Where do you go?",
    options: [
      { optionID: 7, option: "Investigate the Lighthouse" },
      { optionID: 8, option: "Head to the Rock" },
    ],
  },
  "Prologue-1AAA": {
    text:
      "You put the staff in your inventory. A wise choice indeed. You look around you. You notice two points of interest. A lighthouse not too far in the distance and a weirdly shaped rock to the east. Where do you go?",
    options: [
      { optionID: 7, option: "Investigate the Lighthouse" },
      { optionID: 8, option: "Head to the Rock" },
    ],
  },
  "Prologue-1B": {
    text:
      "You ignore the bag. Standing up, you look around you. You notice two points of interest. A lighthouse not too far in the distance and a weirdly shaped rock to the east. Where do you go?",
    options: [
      { optionID: 7, option: "Investigate the Lighthouse" },
      { optionID: 8, option: "Head to the Rock" },
    ],
    levelSet: "1",
  },
};

export default LEVEL_DATA;
