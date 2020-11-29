const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    ruhigerPlatzZumSitzen: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    rollstuhlzugang: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    blindenhund: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    assistenzhund: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    rampe: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    einBegleiter: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    ruhigerRaumFürPausen: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    zugangZurInduktionsschleife: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    untertitel: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    übersetzungInDieGebärdensprache: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    übersetzungInEineEinfacheSprache: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    hilfeDenRichtigenPlatzDieToilettenOderPausenräumeZuFinden: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    audiobeschreibung: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    direkterZugangZuEinerToilette: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    einerToiletteInDerNähe: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    besondersKleineSitze: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    besondersGroßeSitze: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    weicheUndBequemeSitze: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },
    entspannterEinlass: {
      type: Number,
      enum: [-1, 0, 1],
      default: 1
    },


    // blind: Boolean,

    // visuallyImpaired: [1, 0, -1],
    // wheelchairUser: [1, 0, -1],
    // disabledInMoving: [1, 0, -1],
    // otherMobilityRestrictions: [1, 0, -1],
    // deaf: [1, 0, -1],
    // hearingImpaired: [1, 0, -1],
    // difficultyInWritingAndReading: [1, 0, -1],
    // claustrophobic: [1, 0, -1],
    // frightenedByLoudNoises, sudden light or unforeseeable things?: [1, 0, -1],

    // Do you have to go to the toilet often?: [1, 0, -1],

    // Can you find your way around the venue by yourself?: [1, 0, -1],

    // Do you often get dizzy?: [1, 0, -1],

    // Do you need medication during the concert?: [1, 0, -1],

    // Are you short?

    // Are you extremely large?: [1, 0, -1],
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);
module.exports = User;
