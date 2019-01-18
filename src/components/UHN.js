import React, { Component } from 'react'

let connection = [

    "CONNECTION",
    "acceptance",
    "affection",
    "appreciation",
    "belonging",
    "cooperation",
    "communication",
    "closeness",
    "community",
    "companionship",
    "compassion",
    "consideration",
    "consistency",
    "empathy",
    "inclusion",
    "intimacy",
    "love",
    "mutuality",
    "nurturing",
    "respect/self-respect",
    "safety",
    "security",
    "stability",
    "support",
    "to know and be known",
    "to see and be seen",
    "to understand and be understood",
    "trust",
    "warmth"
];

let physical = [
    "PHYSICAL WELL-BEING",
    "air",
    "food",
    "movement/exercise",
    "rest/sleep",
    "sexual expression",
    "safety",
    "shelter",
    "touch",
    "water"
];
    
let honesty = [
    "HONESTY",
    "authenticity",
    "integrity",
    "presence"
];
    
let play = [
    "PLAY",
    "joy",
    "humor"
];
    
let peace = [
    "PEACE",
    "beauty",
    "communion",
    "ease",
    "equality",
    "harmony",
    "inspiration",
    "order"
    ]

let autonomy = [
    "AUTONOMY",
    "choice",
    "freedom",
    "independence",
    "space",
    "spontaneity"
]
    
let meaning = [
    "MEANING",
    "awareness",
    "celebration of life",
    "challenge",
    "clarity",
    "competence",
    "consciousness",
    "contribution",
    "creativity",
    "discovery",
    "efficacy",
    "effectiveness",
    "growth",
    "hope",
    "learning",
    "mourning",
    "participation",
    "purpose",
    "self-expression",
    "stimulation",
    "to matter",
    "understanding"
];

export default class UHN extends Component {
  render() {
      const buttonMaker = connection.map(needs => (
          <button>
              {needs}
          </button>
      ))
    return (
      <div>
        {buttonMaker}
      </div>
    )
  }
}
