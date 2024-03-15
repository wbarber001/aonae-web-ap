const attDescripts = [
  {
    attribute: "Wisdom",
    text:
      "This attribute represents intelligence and knowledge. When checking to see if you know something or remember anything you add your Wisdom to the roll.",
  },
  {
    attribute: "Awareness",
    text:
      "A measure of one's perception and intuition. When you attempt to see, listen, feel, I.e. gain information through your senses you add your Awareness.",
  },
  {
    attribute: "Soul",
    text:
      "Describes willpower, spiritual Strength and charisma. Attempting to resist seduction, resist magic or trying to use charm are all examples of rolls to which you'd add Soul.",
  },
  {
    attribute: "Strength",
    text:
      "The attribute that measures physical Strength and endurance. Stunts to lift heavy weight, break hard material or wield melee weapons test Strength. As do attempts to resist the elements, poison or torture. Add Strength to such rolls.",
  },
  {
    attribute: "Agility",
    text:
      "Agility portrays physical dexterity and speed. Stunts using ranged weapons, maintain balance, climb or run add Agility.",
  },
];

const origins = [
  {
    origin: "Mansa Kingdom",
    language: "Keitan",
    faith: "The Prophet",
    text:
      "The Keita kingdom of Mansa lies in the west abutted at its eastern border by the gold rich Bure mountains. Mansas are peerless horse breeders, gifted riders and sagacious financial advisors.",
    attributeBonus: "Agility",
    abilityBonus: "Ride",
  },
  {
    origin: "Tumbutu City State",
    language: "Keitan",
    faith: "The Prophet",
    text:
      "The Scions of the Prophet carved the new Keita city state of Tumbutu from the Mansa Kingdom's northern tip. Even the most gruff citizen is literate as Tumbutu arose around hallowed Korsan University.",
    attributeBonus: "Wisdom",
    abilityBonus: "Decipher",
  },
  {
    origin: "Tsugoab Plains",
    language: "Khoi",
    faith: "Cagn",
    text:
      "In the south Tsugoab Plains, beneath the Coti Hills, Khoi nomads hunt for survival. The relentless nomads of the Tsugoab dip their arrows in a paralyzing agent used in hunting and warfare.",
    attributeBonus: "Awareness",
    abilityBonus: "Endurance",
  },
  {
    origin: "Kermo City",
    language: "Khastan",
    faith: "Menhit",
    text:
      "To the south of Mero is Kermo, crown of the Khastan kingdom of North East Aonae. Kermo's craftsmen and architects rival those of the fallen kingdom, Atum.",
    attributeBonus: "Wisdom",
    abilityBonus: "Craft",
  },
  {
    origin: "Mero City",
    language: "Khastan",
    faith: "Horu",
    text:
      "The Khastan city of Mero lies south of the remnants of Fallen Atum in North East Aonae. Being so close to the fallen kingdom Mero citizens are ever wary of monsters, ghosts and demons.",
    attributeBonus: "Awareness",
    abilityBonus: "Alert",
  },
  {
    origin: "Turkhana Plains",
    language: "Unku",
    faith: "Shaka",
    text:
      "In the South west the Turkhana plains and forest are ruled by the Unku, a tribe of nubian warriors. Turkhana Unku are fearsome silent stalkers and are renowned for their short and lethal Turkhana Spear.",
    attributeBonus: "Strength",
    abilityBonus: "Sneak",
  },
  {
    origin: "Mbuti Village",
    language: "Bayaka",
    faith: "Mbuti Forest",
    text:
      "The Mbuti Bayaka suspend their houses in trees high above the floor of the L'Ongo Rainforest. Mbuti Bayaka are the only culture that knows how to safely harvest and process L'Ongo Devil Fly Honey.",
    attributeBonus: "Agility",
    abilityBonus: "Survival",
  },
  {
    origin: "Ounsi Forest",
    language: "Oduduwa",
    faith: "Olodu",
    text:
      "Deep in the south east Oduduwa people called the Ounsi worship ancestors and spirits. Their refined medicines are potent but Ounsi are renowned for brewing poison antidotes and spiritual cleansing.",
    attributeBonus: "Soul",
    abilityBonus: "Survival",
  },
  {
    origin: "Olodumare Plains",
    language: "Oduduwa",
    faith: "Olodu",
    text:
      "In the west Oduduwa of the Olodumare Plains live in mud brick clan houses built around farms and kilns. In an age of bronze the Olodumare prosper from tools and weapons crafted of iron.",
    attributeBonus: "Strength",
    abilityBonus: "Craft Metal",
  },
  {
    origin: "Qertassi Temple",
    language: "Khastan",
    faith: "Apademak",
    text:
      "Khastan priests of Apademak built Qertassi Temple where the Wassa encroaches south west of Mero. The Wassa ensures that only the strongest most determined may study their hallowed martial arts.",
    attributeBonus: "Awareness",
    abilityBonus: "Focus",
  },
  {
    origin: "Napoto City",
    language: "Khastan",
    faith: "Piye",
    text:
      "In the dry lands west of the River Aur, Khasta built the City of Napoto to mine gold. Napoto is populated by impoverished and debt ridden Khastans and disgraced nobles.",
    attributeBonus: "Strength",
    abilityBonus: "Endurance",
  },
  {
    origin: "Sebiumeker",
    language: "Khastan",
    faith: "Alara",
    text:
      "Far to the south of Khasta just northwest of the Aur Woods is the small river town Sebiumeker. Sebiumeker is nearest to the Visage of Alara and home to the Order of Ma'at, a guild of monster hunters.",
    attributeBonus: "Soul",
    abilityBonus: "Swim",
  },
];

const jobs = [
  {
    job: "Apothecary",
    text: "Make and trade medicines, potions and salves.",
    firstAbility: "Craft Medicine",
    secondAbility: "Survival",
  },
  {
    job: "Artisan",
    text: "Make and trade sculptures, textiles and useful goods.",
    firstAbility: "Craft Art",
    secondAbility: "Trade",
  },
  {
    job: "Bandit",
    text: "You've survived by robbing others for goods and gold.",
    firstAbility: "Alert",
    secondAbility: "Intimidate",
  },
  {
    job: "Blacksmith",
    text: "Work with metal and kiln to craft tools and weapons for trade.",
    firstAbility: "Craft Metal",
    secondAbility: "Trade",
  },
  {
    job: "Boxer",
    text:
      "Gambling houses host boxing spectacles. Winners earn a larger share of the pot than the loser.",
    firstAbility: "Fight",
    secondAbility: "Endurance",
  },
  {
    job: "Chandler",
    text: "Travel about trading handcrafted household goods.",
    firstAbility: "Craft Goods",
    secondAbility: "Trade",
  },
  {
    job: "Cobbler",
    text: "Craft and trade footwear. A great commodity.",
    firstAbility: "Craft Shoes",
    secondAbility: "Trade",
  },
  {
    job: "Healer",
    text: "Earn your keep sealing wounds and curing sickness.",
    firstAbility: "Craft Medicine",
    secondAbility: "Heal Others",
  },
  {
    job: "Hunter",
    text: "Hunt beasts for meat and craftable materials to trade.",
    firstAbility: "Sneak",
    secondAbility: "Survival",
  },
  {
    job: "Mason",
    text: "A difficult and hazardous way to make a living. But it pays well.",
    firstAbility: "Craft Stone",
    secondAbility: "Inspect",
  },
  {
    job: "Mercenary",
    text:
      "Some soldiers hire themselves out because war pays well. And there's always a war.",
    firstAbility: "Strike",
    secondAbility: "Language",
  },
  {
    job: "Merchant",
    text:
      "Trade jewelry, accessories and weapons. When you can carry them and avoid bandits.",
    firstAbility: "Language",
    secondAbility: "Trade",
  },
  {
    job: "Miner",
    text: "A difficult and hazardous way to make a living.",
    firstAbility: "Alert",
    secondAbility: "Navigate",
  },
  {
    job: "Pathfinder",
    text:
      "Build a reputable business finding safe and reliable routes for travel and trade.",
    firstAbility: "Navigate",
    secondAbility: "Scribe",
  },
  {
    job: "Prophet",
    text: "Live off the support of those you recruit and lead to your faith.",
    firstAbility: "Language",
    secondAbility: "Lore",
  },
  {
    job: "Sailor",
    text:
      "Sail The Wassan sands wary of Gods, demons and time tears. In search of lost knowledge and powerful relics.",
    firstAbility: "Alert",
    secondAbility: "Navigate",
  },
  {
    job: "Scribe",
    text:
      "Illiteracy is very common. And those who cannot read or write will compensate you to do so for them.",
    firstAbility: "Decipher",
    secondAbility: "Scribe",
  },
  {
    job: "Slayer",
    text: "Collect bounties to hunt and slay beasts, undead and demons.",
    firstAbility: "Strike",
    secondAbility: "Lore",
  },
];

const abilities = [
  {
    ability: "Aim",
    text:
      "Add the aim ability when attempting to hit with a ranged attack such as a thrown stone, bow or throwing knife, etc.",
    attribute: "Agility",
    modifier: 1,
  },
  {
    ability: "Alert",
    text:
      "Catch warning signs of ambushes and traps. Lighting or weather could affect difficulty.",
    attribute: "Awareness",
    modifier: 1,
  },
  {
    ability: "Charm",
    text: "Gain the attention, trust and affection of others.",
    attribute: "Soul",
    modifier: 1,
  },
  {
    ability: "Constitution",
    text: "Resist the effects of disease, illness and poison.",
    attribute: "Strength",
    modifier: 1,
  },
  {
    ability: "Craft",
    text: "Make, repair and identify items.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Art",
    text: "Make and communicate through art. Trade your work for profit.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Goods",
    text: "Make and trade domestic items for home, hunting and agriculture.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Medicine",
    text: "Make medicine from ingredients that were hunted and gathered.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Metal",
    text: "Make, repair and identify metallic items.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Shoes",
    text: "Make and repair footwear.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Craft Stone",
    text: "Make and repair stonework and masonry.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Decipher",
    text: "Read and translate Atum or Wassan glyphs.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Deftness",
    text: "Perform feats of manual dexterity and precision.",
    attribute: "Agility",
    modifier: 1,
  },
  {
    ability: "Endurance",
    text: "Resist exhausted, exposed, starving or dehydrated.",
    attribute: "Strength",
    modifier: 1,
  },
  {
    ability: "Evade",
    text:
      "Avoid falling, being crushed, impaled and other such instant perils with an evade roll. In combat sacrifice an action to concentrate on defense. The Narrator sets the difficulty. Success increases your Reflex until your next action. Good +1 Reflex, Excellent +3 Reflex.",
    attribute: "Agility",
    modifier: 1,
  },
  {
    ability: "Fight",
    text:
      "Add the fight ability if your stunt is an unarmed attack such as a punch, kick, grapple or throw, etc. On a hit add your Strength mod to the OC.",
    attribute: "Strength",
    modifier: 1,
  },
  {
    ability: "Focus",
    text:
      "Sacrifice an action to concentrate on success. The Narrator sets the difficulty. The outcome is the amount of Ase you regain. Good +1 Ase, Excellent +3 Ase.",
    attribute: "Soul",
    modifier: 1,
  },
  {
    ability: "Heal Others",
    text:
      "Clean and bind wounds and ease discomfort. Ok + 1HP, Good +2HP, Excellent +3HP.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Intimidate",
    text:
      "Intimidate others through action or word. Success places disadvantage on your target. Good on next action, Excellent on next 2 actions.",
    attribute: "Soul",
    modifier: 1,
  },
  {
    ability: "Inspect",
    text: "Scan a scene to pick up hidden unobvious clues.",
    attribute: "Awareness",
    modifier: 1,
  },
  {
    ability: "Inspire",
    text:
      "Encourage others through action or word. Success places an advantage on your target. Good on next action, Excellent on next 2 actions.",
    attribute: "Soul",
    modifier: 1,
  },
  {
    ability: "Language",
    text:
      "Speak or understand a non native language. Distance between home and where a language is spoken could increase difficulty.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Lore",
    text:
      "Knowledge of local tales, beliefs and customs. Talent at impressing an audience. Jali’s use lore to perform Jeliya (lore magic).",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Magic",
    text: "Add the magic ability to cast a spell or perform rituals.",
    attribute: "Soul",
    modifier: 1,
  },
  {
    ability: "Navigate",
    text:
      "Find direction with stars, wind or other clues. Lighting or weather could affect difficulty.",
    attribute: "Awareness",
    modifier: 1,
  },
  {
    ability: "Reason",
    text: "Understand or express concepts through logic.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Resolve",
    text: "Resist temptation, fear and stress.",
    attribute: "Soul",
    modifier: 1,
  },
  {
    ability: "Ride",
    text: "Ride a mount through challenging conditions.",
    attribute: "Agility",
    modifier: 1,
  },
  {
    ability: "Scribe",
    text: "Read and write Khastan glyphs.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Sneak",
    text: "Move unseen and unheard.",
    attribute: "Agility",
    modifier: 1,
  },
  {
    ability: "Spiritualism",
    text:
      "Knowledge of spirits, monsters and demons. The Narrator may increase difficulty if the creature is more commonly encountered far from home.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Strike",
    text:
      "Add the strike ability if you’re trying to strike with a melee weapon such as a spear, sword or club, etc.",
    attribute: "Strength",
    modifier: 1,
  },
  {
    ability: "Survival",
    text: "Find safe water, food and shelter in the wild. Specify which of the three the stunt is intended to locate. The outcome indicates how much food or water is acquired. Or the size of your shelter. Ok  + 1 day /1 adult, Good + 2 days /2 adults , Excellent + 3 days /4 adults.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Swim",
    text: "Hold your breath and swim long distances.",
    attribute: "Strength",
    modifier: 1,
  },
  {
    ability: "Trade",
    text: "Barter for goods and currency.",
    attribute: "Wisdom",
    modifier: 1,
  },
  {
    ability: "Ward",
    text: "Resist spells and curses.",
    attribute: "Soul",
    modifier: 1,
  },
];

const charClasses = [
  {
    type: "Archer",
    path: "strong",
    text:
      "Archers have toppled kingdoms and raised empires. The Khastan army produced special forces known as Apedemak, archers who mastered ASE powered Skills.",
    plusTwoAtt: "Agility",
    plusOneAtt: "Awareness",
    plusTwoAbi: "Aim",
    plusOneAbi: "Evade",
  },
  {
    type: "Jali",
    path: "wise",
    text:
      "Jalis pass on the history of their people and Aonae through tales, poems and songs known as Jeliya. Through ASE channeling the Jali transforms Jeliya into powerful spells.",
    plusTwoAtt: "Soul",
    plusOneAtt: "Awareness",
    plusTwoAbi: "Lore",
    plusOneAbi: "Inspire",
  },
  {
    type: "Marabout",
    path: "wise",
    text:
      "Marabout are holy teachers possessing great knowledge of esoteric prayers called Lessons. These Lessons evoke great miracles that can cleanse, protect, Strengthen or heal. ",
    plusTwoAtt: "Soul",
    plusOneAtt: "Wisdom",
    plusTwoAbi: "Magic",
    plusOneAbi: "Decipher",
  },
  {
    type: "Martial Artist",
    path: "strong",
    text:
      "Martial Artists master unarmed fighting arts. But a rare few can channel ASE into superhuman punches, kicks, sweeps and other moves are known as Forms.",
    plusTwoAtt: "Strength",
    plusOneAtt: "Soul",
    plusTwoAbi: "Fight",
    plusOneAbi: "Evade",
  },
  {
    type: "Nok",
    path: "wise",
    text:
      "The Nok Artificer wields an ASE infused Idol bearing Adinka Sigils. The Adinka Sigils are talisman that function when installed in a Nok Idol. Adinka Sigils are derived from Wassan craft.",
    plusTwoAtt: "Wisdom",
    plusOneAtt: "Strength",
    plusTwoAbi: "Craft",
    plusOneAbi: "Aim",
  },
  {
    type: "Shaman",
    path: "wise",
    text:
      "Shaman casts spells called nri, they are ancient, enigmatic and sometimes dark in nature. Shamanism is one of the most ancient forms of ASE manipulation.",
    plusTwoAtt: "Soul",
    plusOneAtt: "Awareness",
    plusTwoAbi: "Magic",
    plusOneAbi: "Spiritualism",
  },
  {
    type: "Soldier",
    path: "strong",
    text:
      "Soldiers are skilled in the use of weapons and armor. Both Atum and Khasta trained special forces to wield amazing ASE infused Tactics.",
    plusTwoAtt: "Strength",
    plusOneAtt: "Agility",
    plusTwoAbi: "Strike",
    plusOneAbi: "Fight",
  },
  {
    type: "Thief",
    path: "strong",
    text:
      "Some soldiers particularly skilled in observation, larceny and stealth are further enhanced to develop ASE Talents. After the war many turned to thievery, spying and assassination.",
    plusTwoAtt: "Agility",
    plusOneAtt: "Awareness",
    plusTwoAbi: "Sneak",
    plusOneAbi: "Deftness",
  },
];

const miracles = [
  {
    miracle: "BATTLE KEEN",
    type: "Archer",
    text:
      "The Archer channels ASE to her senses. Increasing her chances of detecting hidden weapons, traps and ambushes. Spend ASE to add a bonus to both your Awareness and Action. Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "SKY VOLLEY",
    type: "Archer",
    text:
      "One arrow becomes many as the Archer rains a volley down upon her enemies. Roll 2d6 + aim vs highest target reflex. Spend ASE to cover multiple targets in your downpour; 1 ASE = 2 enemies, 3 ASE = 4 enemies, 5 ASE = 6 enemies",
  },
  {
    miracle: "SWIFT",
    type: "Archer",
    text:
      "This skill channels ASE through the Archer's body granting them superhuman speed and reflexes. Spend ASE to add a bonus to both your Reflex and Agility. Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "STEEL",
    type: "Archer",
    text:
      "A skill that hardens an Archer's will and spirit. Spend ASE to add a bonus to both your Spirit and Will. Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "ARCHER'S EYE",
    type: "Archer",
    text:
      "This skill enhances the Archer's vision and aim. Spend ASE to add a bonus to your Aim. Bonus last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "LIGHTNING",
    type: "Archer",
    text:
      "The Archer can dodge swift as lightning. When hit by an attack that targets reflex, spend 5 ASE to declare it a miss. The Archer instead moves avoiding the hit. This cannot be used against a surprise attack.",
  },
  {
    miracle: "SONG OF PEACE",
    type: "Jali",
    text:
      "The Jali's song removes anger and hostility leaving the target calm and noncombative. To use roll 2d6 + lore vs the target's spirit. The more ASE you spend the longer peace lasts; 1 ASE = 1 action, 3 ASE = 2 actions, 5 ASE = 3 actions",
  },
  {
    miracle: "SONG OF PRAISE",
    type: "Jali",
    text:
      "The Jali's song is a devotion of praise for their god. Through faith the Jali finds spiritual Strength. Spend ASE to add a bonus to both your Spirit and Will . Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "LORE OF IRON",
    type: "Jali",
    text:
      "This Lore surrounds an ally within line of sight in mystical armor. To use roll 2d6 + lore vs. 7; 1 ASE = +2 armor, 3 ASE = +3 armor, 5 ASE = +4 armor The effect lasts; 1 action on a good outcome, 2 actions on an excellent outcome.",
  },
  {
    miracle: "LORE OF MAWU",
    type: "Jali",
    text:
      "The Jali is able to read recent history of the small area. To use roll 2d6 + lore vs difficulty. The further back the Jali peers the higher both the ASE cost and difficulty. 1 hour = 1 ASE /DN8, 12 hours = 3 ASE /DN10, 1 day = 5 ASE /DN12",
  },
  {
    miracle: "DAMNING WORDS",
    type: "Jali",
    text:
      "Cast words of condemnation. To use roll 2d6 + lore vs the target's spirit. Damage equals the outcome plus bonus from ASE spent; 1 ASE = +1 damage, 3 ASE = +3 damage, 5 ASE = +5 damage.",
  },
  {
    miracle: "SONG OF INSPIRATION",
    type: "Jali",
    text:
      "The Jali's song inspires conviction, confidence and faith in an ally. Through the Jali's faith the ally finds spiritual Strength. To use roll 2d6 + lore vs. 7. Spend ASE to add a bonus to both your Spirit and Will; 1 ASE = +1, 3 ASE = +3, 5 ASE = +5. Bonus last; 1 action on a good outcome, 2 actions on an excellent outcome.",
  },
  {
    miracle: "BLESS THE SPEARS",
    type: "Marabout",
    text:
      "The Marabout calls on Apademak to guide the weapon of an ally. To use roll 2d6 + magic vs. 7. Spend ASE to add a bonus to their Strike. Bonuses last until your next action; 1 ASE = +1, 3 ASE = +3, 5 ASE = +5 Bonus last; 1 action on a good outcome, 2 actions on an excellent outcome.",
  },
  {
    miracle: "BANISH EVIL",
    type: "Marabout",
    text:
      "Evil undead flee Oya's power. To use roll 2d6 + magic vs the highest target spirit. ASE increases the number affected, 1 ASE = 2 undead, 3 ASE = 4 undead, 5 ASE = 6 undead. Terror last; good outcome 1 action, excellent outcome 2 actions",
  },
  {
    miracle: "RAISE THE LAND",
    type: "Marabout",
    text:
      "Prayer raises slabs of ground to shield yourself and others from harm. The more ASE you devote the more HP for the slabs. The slabs recede on your next action. 1 ASE = 10 HP, 3 ASE = 12 HP, 5 ASE = 14 HP",
  },
  {
    miracle: "CLEANSING PRAYER",
    type: "Marabout",
    text:
      "This lesson asks the high to remove poison or disease from the subject. To use roll 2d6 + magic vs the difficulty. The stronger the poison or disease the higher both the ASE cost and difficulty. Sickening = 1 ASE DN/6, Crippling = 3 ASE /DN8, Lethal = 5 ASE /DN10",
  },
  {
    miracle: "RA'S JUDGEMENT",
    type: "Marabout",
    text:
      "Call upon Ra's judging sunbeam, no effect vs the just or innocent. To use roll 2d6 + magic vs. the target's Spirit. Damage equals the outcome plus bonus from ASE spent; 1 ASE = +1 damage, 3 ASE = +3 damage, 5 ASE = +5 damage",
  },
  {
    miracle: "MENDING PRAYER",
    type: "Marabout",
    text:
      "This lesson asks the high to heal the subject's wounds. To use roll 2d6 + magic vs 8. Restored HP equals the outcome plus bonus from ASE spent; 1 ASE = +1 HP, 3 ASE = +3 HP, 5 ASE = +5 HP",
  },
  {
    miracle: "SLOW ASE",
    type: "Martial Artist",
    text:
      "The warrior strikes an ASE point on her opponent slowing their movement. To use roll 2d6 + fight vs the target's reflex +2. Spend ASE to lower their Reflex and Stunt; 1 ASE = -1, 3 ASE = -3, 5 ASE = -5. This hindrance lasts; 1 action on a good. 2 actions on an excellent.",
  },
  {
    miracle: "LEOPARD'S RESPLENDENCE",
    type: "Martial Artist",
    text:
      "This warrior channels ASE into superhuman speed and reflexes. Spend ASE to add a bonus to both your Reflex and Agility. Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5. Bonus lasts until your next action.",
  },
  {
    miracle: "CROCODILE'S SCALE",
    type: "Martial Artist",
    text:
      "The Martial artist has trained to channel their ASE to toughen and harden their skin. The more ASE you channel the higher your armor. Your armor recedes on your next action; 1 ASE = 2 armor, 3 ASE = 3 armor, 5 ASE = 4 armor",
  },
  {
    miracle: "APADEMAK'S WRATH",
    type: "Martial Artist",
    text:
      "The fury of the lion god is channeled to inflict a magic attack. To use roll 2d6 + fight vs. the target's Reflex. Damage equals the outcome plus bonus from ASE spent; 1 ASE = +1 damage, 3 ASE = +3 damage, 5 ASE = +5 damage",
  },
  {
    miracle: "BREATH OF OLUDAMARE",
    type: "Martial Artist",
    text:
      "This Form quickens the Martial Artist's will. Spend ASE to add a bonus to both your Spirit and Will. Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE =",
  },
  {
    miracle: "SLAYER'S REVEAL",
    type: "Martial Artist",
    text:
      "The Martial artist can disrupt a supernatural disguise with a non-damaging ASE infused strike. To use roll 2d6 + fight vs. the target's Spirit and spend 3 ASE.",
  },
  {
    miracle: "AKOBEN WAR HORN",
    type: "Nok",
    text:
      "The Idol's fearsome appearance and horn freightens hostiles. Roll 2d6 + craft vs the target's spirit. The more ASE you spend the longer fear lasts; 1 ASE = 1 action, 3 ASE = 2 actions, 5 ASE = 3 actions.",
  },
  {
    miracle: "NKYINKYIM SIGIL",
    type: "Nok",
    text:
      "The Idol summons ASE into super speed and reflexes. Spend ASE to add a bonus to both your Reflex and Agility. Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "FIHANKRA HOUSE",
    type: "Nok",
    text:
      "The Idol is strapped onto the Nok's back and limbs. Acts as armor 3, permanently reduces ASE by 3. Only the Nok can use the Idol as armor. The Nok can wear no other armor while donning the Idol.",
  },
  {
    miracle: "NKONSONKONSON CHAIN",
    type: "Nok",
    text:
      "Limbs extend from the Idol to seize your target. Roll 2d6 + aim vs the target's reflex. Spend Ase to increase the escape stunt difficulty. 1 ASE = difficulty 7, 3 ASE = difficulty 9, 5 ASE = difficulty 11",
  },
  {
    miracle: "AKOFENA CANNON",
    type: "Nok",
    text:
      "A cannon built into the Idol fires a flaming projectile. Roll 2d6 + aim vs the target's reflex. Damage +4, spend 5 ASE. On success, the target rolls Soul vs 7 or ignites losing 1HP on their next 3 actions.",
  },
  {
    miracle: "WAWA ABA SIGIL",
    type: "Nok",
    text:
      "The Idol summons ASE into super Strength. Spend ASE to add a bonus to both your Strength. Bonus last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "EYE OF KOKOU",
    type: "Shaman",
    text:
      "The Shaman can cast bloodthirsty Soldier god, Kokou's powerful stare. To use roll 2d6 + magic vs the target's spirit. Damage equals the outcome plus bonus from ASE spent; 1 ASE = +1 damage, 3 ASE = +3 damage, 5 ASE = +5 damage",
  },
  {
    miracle: "DREAM SPEAK",
    type: "Shaman",
    text:
      "Using a subject's name and location the Shaman can slip into a deep sleep to mentally communicate with them. To use roll 2d6 + magic vs the target's spirit, the Narrator should increase this number depending on distance. 1 ASE = 1 mile, 3 ASE = 3 miles, 5 ASE = 5 miles",
  },
  {
    miracle: "DRINK ASE",
    type: "Shaman",
    text:
      "Wounded Shaman can drink ASE from a subject within a few feet. Roll 2d6 + magic vs the target's spirit and spend 3 ASE. The outcome is the amount of ASE the target loses, minimum of 1. The Shaman regains that amount in HP.",
  },
  {
    miracle: "GRASPING HANDS",
    type: "Shaman",
    text:
      "Hands sprout from beneath to seize your target. Roll 2d6 + magic vs the target's spirit. Spend Ase to increase the escape stunt difficulty. 1 ASE = difficulty 7, 3 ASE = difficulty 9, 5 ASE = difficulty 11",
  },
  {
    miracle: "ESHU'S WHISPER",
    type: "Shaman",
    text:
      "Eshu fills the target with the irresistible urge to flee from the shaman for 3 ASE. To use roll 2d6 + magic vs the target's spirit. Terror lasts; 1 action on a good outcome. 2 actions on an excellent outcome.",
  },
  {
    miracle: "BEAST FORM",
    type: "Shaman",
    text:
      "The Shaman transforms into a beast. Spend the chosen beast's xp drop in ASE. Roll 2d6 + magic vs 6 + beast xp drop. Transformation lasts until beast HP is depleted.",
  },
  {
    miracle: "SWIFT",
    type: "Soldier",
    text:
      "This tactic channels ASE into superhuman speed and reflexes. Spend ASE to add a bonus to both your Reflex and Agility. Bonus last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "ARM OF GEB",
    type: "Soldier",
    text:
      "ARM OF GEB A powerful tactic that channels the Soldier's ASE into their weapon. Spend 3 ASE to activate and the weapon ignores armor of 3 or lower grade. Effect lasts until the Soldier's next action.",
  },
  {
    miracle: "IRON BLOOD",
    type: "Soldier",
    text:
      "A tactic that Strengthens the Soldier against poison and disease. The stronger the poison or disease the more ASE it costs to remove. 1 ASE/ Sickening = DN6, 3 ASE/ Crippling = DN8, 5 ASE/ Lethal = DN10",
  },
  {
    miracle: "IRON SOUL",
    type: "Soldier",
    text:
      "A tactic that hardens a Soldier's will and spirit. Spend ASE to add a bonus to both your Spirit and Will. Bonus last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "IRON BONE",
    type: "Soldier",
    text:
      "This tactic channels ASE into superhuman Strength. Spend ASE to add a bonus to Strength. Bonuses last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "MAWU'S STRENGTH",
    type: "Soldier",
    text:
      "The Soldier strikes the ground sending surrounding foes flying away. To use roll 2d6 + strike vs the highest target reflex. Outcome equals damage and ASE spent increases the number affected; 1 ASE = 2 foes, 3 ASE = 4 foes, 5 ASE = 6 foes",
  },
  {
    miracle: "THIEVE'S SENSE",
    type: "Thief",
    text:
      "This talent channels ASE into superhuman Awareness. Spend ASE to add a bonus to both your Awareness and Action when attempting to detect hidden spaces, traps and ambushes. Bonus last until your next action. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5",
  },
  {
    miracle: "SHADOW STRIDER",
    type: "Thief",
    text: "This talent allows the thief to become nearly invisible while in shadows. Spend ASE to add a bonus to both your Reflex and Sneak; 1 ASE = +1, 3 ASE = +3, 5 ASE = +5. Bonus last until your next action.",
  },
  {
    miracle: "BLINDING DUST",
    type: "Thief",
    text:
      "The thief blows blinding dust in their target's eyes. To use roll 2d6 + sneak vs the target's reflex + 2. Spend ASE to lower their Reflex and Stunt; 1 ASE = -1, 3 ASE = -3, 5 ASE = -5. Blindness lasts; 1 action on a good outcome, 2 actions on an excellent outcome.",
  },
  {
    miracle: "CHASE BANE",
    type: "Thief",
    text:
      "Leave caltrops in your wake. Roll 2d6 + sneak vs 7, spend ASE. Pursuers roll Agility vs the difficulty (DN) to avoid the caltrops. Failure reduces their reflex and stunt rolls by the modifier (MD). 1 ASE = DN 7 /MD -1, 3 ASE = DN 9 /MD -3, 5 ASE = DN 11 /MD -5 Hinderance last; good outcome 1 action, excellent outcome 2 actions.",
  },
  {
    miracle: "BREECH",
    type: "Thief",
    text:
      "The thief can slip in or out of locks, shackles and chains of mundane or magical nature. Spend ASE to add a bonus to your Agility. 1 ASE = +1, 3 ASE = +3, 5 ASE = +5 Bonus lasts until your next action.",
  },
  {
    miracle: "ASE TRAP",
    type: "Thief",
    text:
      "When struck by a close range attack cancel the hit by vanishing and reappearing nearby. You leave an ASE bomb in your wake. Spend 5 ASE and inflict 5 damage to the attacker, armor is effective. This talent cannot be used against surprise attacks.",
  },
];
