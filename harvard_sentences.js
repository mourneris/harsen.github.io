const harvardSentences = [
    {
        "id": 1,
        "sentence": "The birch canoe slid on the smooth planks."
    },
    {
        "id": 2,
        "sentence": "Glue the sheet to the dark blue background."
    },
    {
        "id": 3,
        "sentence": "It's easy to tell the depth of a well."
    },
    {
        "id": 4,
        "sentence": "These days a chicken leg is a rare dish."
    },
    {
        "id": 5,
        "sentence": "Rice is often served in round bowls."
    },
    {
        "id": 6,
        "sentence": "The juice of lemons makes fine punch."
    },
    {
        "id": 7,
        "sentence": "The box was thrown beside the parked truck."
    },
    {
        "id": 8,
        "sentence": "The hogs were fed chopped corn and garbage."
    },
    {
        "id": 9,
        "sentence": "Four hours of steady work faced us."
    },
    {
        "id": 10,
        "sentence": "A large size in stockings is hard to sell."
    },
    {
        "id": 11,
        "sentence": "The boy was there when the sun rose."
    },
    {
        "id": 12,
        "sentence": "A rod is used to catch pink salmon."
    },
    {
        "id": 13,
        "sentence": "The source of the huge river is the clear spring."
    },
    {
        "id": 14,
        "sentence": "Kick the ball straight and follow through."
    },
    {
        "id": 15,
        "sentence": "Help the woman get back to her feet."
    },
    {
        "id": 16,
        "sentence": "A pot of tea helps to pass the evening."
    },
    {
        "id": 17,
        "sentence": "Smoky fires lack flame and heat."
    },
    {
        "id": 18,
        "sentence": "The soft cushion broke the man's fall."
    },
    {
        "id": 19,
        "sentence": "The salt breeze came across from the sea."
    },
    {
        "id": 20,
        "sentence": "The girl at the booth sold fifty bonds."
    },
    {
        "id": 21,
        "sentence": "The small pup gnawed a hole in the sock."
    },
    {
        "id": 22,
        "sentence": "The fish twisted and turned on the bent hook."
    },
    {
        "id": 23,
        "sentence": "Press the pants and sew a button on the vest."
    },
    {
        "id": 24,
        "sentence": "The swan dive was far short of perfect."
    },
    {
        "id": 25,
        "sentence": "The beauty of the view stunned the young boy."
    },
    {
        "id": 26,
        "sentence": "Two blue fish swam in the tank."
    },
    {
        "id": 27,
        "sentence": "Her purse was full of useless trash."
    },
    {
        "id": 28,
        "sentence": "The colt reared and threw the tall rider."
    },
    {
        "id": 29,
        "sentence": "It snowed, rained, and hailed the same morning."
    },
    {
        "id": 30,
        "sentence": "Read verse out loud for pleasure."
    },
    {
        "id": 31,
        "sentence": "Hoist the load to your left shoulder."
    },
    {
        "id": 32,
        "sentence": "Take the winding path to reach the lake."
    },
    {
        "id": 33,
        "sentence": "Note closely the size of the gas tank."
    },
    {
        "id": 34,
        "sentence": "Wipe the grease off his dirty face."
    },
    {
        "id": 35,
        "sentence": "Mend the coat before you go out."
    },
    {
        "id": 36,
        "sentence": "The wrist was badly strained and hung limp."
    },
    {
        "id": 37,
        "sentence": "The stray cat gave birth to kittens."
    },
    {
        "id": 38,
        "sentence": "The young girl gave no clear response."
    },
    {
        "id": 39,
        "sentence": "The meal was cooked before the bell rang."
    },
    {
        "id": 40,
        "sentence": "What joy there is in living."
    },
    {
        "id": 41,
        "sentence": "A king ruled the state in the early days."
    },
    {
        "id": 42,
        "sentence": "The ship was torn apart on the sharp reef."
    },
    {
        "id": 43,
        "sentence": "Sickness kept him home the third week."
    },
    {
        "id": 44,
        "sentence": "The wide road shimmered in the hot sun."
    },
    {
        "id": 45,
        "sentence": "The lazy cow lay in the cool grass."
    },
    {
        "id": 46,
        "sentence": "Lift the square stone over the fence."
    },
    {
        "id": 47,
        "sentence": "The rope will bind the seven books at once."
    },
    {
        "id": 48,
        "sentence": "Hop over the fence and plunge in."
    },
    {
        "id": 49,
        "sentence": "The friendly gang left the drug store."
    },
    {
        "id": 50,
        "sentence": "Mesh wire keeps chicks inside."
    },
    {
        "id": 51,
        "sentence": "The frosty air passed through the coat."
    },
    {
        "id": 52,
        "sentence": "The crooked maze failed to fool the mouse."
    },
    {
        "id": 53,
        "sentence": "Adding fast leads to wrong sums."
    },
    {
        "id": 54,
        "sentence": "The show was a flop from the very start."
    },
    {
        "id": 55,
        "sentence": "A saw is a tool used for making boards."
    },
    {
        "id": 56,
        "sentence": "The wagon moved on well oiled wheels."
    },
    {
        "id": 57,
        "sentence": "March the soldiers past the next hill."
    },
    {
        "id": 58,
        "sentence": "A cup of sugar makes sweet fudge."
    },
    {
        "id": 59,
        "sentence": "Place a rosebush near the porch steps."
    },
    {
        "id": 60,
        "sentence": "Both lost their lives in the raging storm."
    },
    {
        "id": 61,
        "sentence": "We talked of the side show in the circus."
    },
    {
        "id": 62,
        "sentence": "Use a pencil to write the first draft."
    },
    {
        "id": 63,
        "sentence": "He ran half way to the hardware store."
    },
    {
        "id": 64,
        "sentence": "The clock struck to mark the third period."
    },
    {
        "id": 65,
        "sentence": "A small creek cut across the field."
    },
    {
        "id": 66,
        "sentence": "Cars and busses stalled in snow drifts."
    },
    {
        "id": 67,
        "sentence": "The set of china hit the floor with a crash."
    },
    {
        "id": 68,
        "sentence": "This is a grand season for hikes on the road."
    },
    {
        "id": 69,
        "sentence": "The dune rose from the edge of the water."
    },
    {
        "id": 70,
        "sentence": "Those words were the cue for the actor to leave."
    },
    {
        "id": 71,
        "sentence": "A yacht slid around the point into the bay."
    },
    {
        "id": 72,
        "sentence": "The two met while playing on the sand."
    },
    {
        "id": 73,
        "sentence": "The ink stain dried on the finished page."
    },
    {
        "id": 74,
        "sentence": "The walled town was seized without a fight."
    },
    {
        "id": 75,
        "sentence": "The lease ran out in sixteen weeks."
    },
    {
        "id": 76,
        "sentence": "A tame squirrel makes a nice pet."
    },
    {
        "id": 77,
        "sentence": "The horn of the car woke the sleeping cop."
    },
    {
        "id": 78,
        "sentence": "The heart beat strongly and with firm strokes."
    },
    {
        "id": 79,
        "sentence": "The pearl was worn in a thin silver ring."
    },
    {
        "id": 80,
        "sentence": "The fruit peel was cut in thick slices."
    },
    {
        "id": 81,
        "sentence": "The Navy attacked the big task force."
    },
    {
        "id": 82,
        "sentence": "See the cat glaring at the scared mouse."
    },
    {
        "id": 83,
        "sentence": "There are more than two factors here."
    },
    {
        "id": 84,
        "sentence": "The hat brim was wide and too droopy."
    },
    {
        "id": 85,
        "sentence": "The lawyer tried to lose his case."
    },
    {
        "id": 86,
        "sentence": "The grass curled around the fence post."
    },
    {
        "id": 87,
        "sentence": "Cut the pie into large parts."
    },
    {
        "id": 88,
        "sentence": "Men strive but seldom get rich."
    },
    {
        "id": 89,
        "sentence": "Always close the barn door tight."
    },
    {
        "id": 90,
        "sentence": "He lay prone and hardly moved a limb."
    },
    {
        "id": 91,
        "sentence": "The slush lay deep along the street."
    },
    {
        "id": 92,
        "sentence": "A wisp of cloud hung in the blue air."
    },
    {
        "id": 93,
        "sentence": "A pound of sugar costs more than eggs."
    },
    {
        "id": 94,
        "sentence": "The fin was sharp and cut the clear water."
    },
    {
        "id": 95,
        "sentence": "The play seems dull and quite stupid."
    },
    {
        "id": 96,
        "sentence": "Bail the boat to stop it from sinking."
    },
    {
        "id": 97,
        "sentence": "The term ended in late june that year."
    },
    {
        "id": 98,
        "sentence": "A Tusk is used to make costly gifts."
    },
    {
        "id": 99,
        "sentence": "Ten pins were set in order."
    },
    {
        "id": 100,
        "sentence": "The bill was paid every third week."
    },
    {
        "id": 101,
        "sentence": "Oak is strong and also gives shade."
    },
    {
        "id": 102,
        "sentence": "Cats and Dogs each hate the other."
    },
    {
        "id": 103,
        "sentence": "The pipe began to rust while new."
    },
    {
        "id": 104,
        "sentence": "Open the crate but don't break the glass."
    },
    {
        "id": 105,
        "sentence": "Add the sum to the product of these three."
    },
    {
        "id": 106,
        "sentence": "Thieves who rob friends deserve jail."
    },
    {
        "id": 107,
        "sentence": "The ripe taste of cheese improves with age."
    },
    {
        "id": 108,
        "sentence": "Act on these orders with great speed."
    },
    {
        "id": 109,
        "sentence": "The hog crawled under the high fence."
    },
    {
        "id": 110,
        "sentence": "Move the vat over the hot fire."
    },
    {
        "id": 111,
        "sentence": "The bark of the pine tree was shiny and dark."
    },
    {
        "id": 112,
        "sentence": "Leaves turn brown and yellow in the fall."
    },
    {
        "id": 113,
        "sentence": "The pennant waved when the wind blew."
    },
    {
        "id": 114,
        "sentence": "Split the log with a quick, sharp blow."
    },
    {
        "id": 115,
        "sentence": "Burn peat after the logs give out."
    },
    {
        "id": 116,
        "sentence": "He ordered peach pie with ice cream."
    },
    {
        "id": 117,
        "sentence": "Weave the carpet on the right hand side."
    },
    {
        "id": 118,
        "sentence": "Hemp is a weed found in parts of the tropics."
    },
    {
        "id": 119,
        "sentence": "A lame back kept his score low."
    },
    {
        "id": 120,
        "sentence": "We find joy in the simplest things."
    },
    {
        "id": 121,
        "sentence": "Type out three lists of orders."
    },
    {
        "id": 122,
        "sentence": "The harder he tried the less he got done."
    },
    {
        "id": 123,
        "sentence": "The boss ran the show with a watchful eye."
    },
    {
        "id": 124,
        "sentence": "The cup cracked and spilled its contents."
    },
    {
        "id": 125,
        "sentence": "Paste can cleanse the most dirty brass."
    },
    {
        "id": 126,
        "sentence": "The slang word for raw whiskey is booze."
    },
    {
        "id": 127,
        "sentence": "It caught its hind paw in a rusty trap."
    },
    {
        "id": 128,
        "sentence": "The wharf could be seen at the farther shore."
    },
    {
        "id": 129,
        "sentence": "Feel the heat of the weak dying flame."
    },
    {
        "id": 130,
        "sentence": "The tiny girl took off her hat."
    },
    {
        "id": 131,
        "sentence": "A cramp is no small danger on a swim."
    },
    {
        "id": 132,
        "sentence": "He said the same phrase thirty times."
    },
    {
        "id": 133,
        "sentence": "Pluck the bright rose without leaves."
    },
    {
        "id": 134,
        "sentence": "Two plus seven is less than ten."
    },
    {
        "id": 135,
        "sentence": "The glow deepened in the eyes of the sweet girl."
    },
    {
        "id": 136,
        "sentence": "Bring your problems to the wise chief."
    },
    {
        "id": 137,
        "sentence": "Write a fond note to the friend you cherish."
    },
    {
        "id": 138,
        "sentence": "Clothes and lodging are free to new men."
    },
    {
        "id": 139,
        "sentence": "We frown when events take a bad turn."
    },
    {
        "id": 140,
        "sentence": "Port is a strong wine with a smoky taste."
    },
    {
        "id": 141,
        "sentence": "The young kid jumped the rusty gate."
    },
    {
        "id": 142,
        "sentence": "Guess the result from the first scores."
    },
    {
        "id": 143,
        "sentence": "A salt pickle tastes fine with ham."
    },
    {
        "id": 144,
        "sentence": "The just claim got the right verdict."
    },
    {
        "id": 145,
        "sentence": "Those thistles bend in a high wind."
    },
    {
        "id": 146,
        "sentence": "Pure bred poodles have curls."
    },
    {
        "id": 147,
        "sentence": "The tree top waved in a graceful way."
    },
    {
        "id": 148,
        "sentence": "The spot on the blotter was made by green ink."
    },
    {
        "id": 149,
        "sentence": "Mud was spattered on the front of his white shirt."
    },
    {
        "id": 150,
        "sentence": "The cigar burned a hole in the desk top."
    },
    {
        "id": 151,
        "sentence": "The empty flask stood on the tin tray."
    },
    {
        "id": 152,
        "sentence": "A speedy man can beat this track mark."
    },
    {
        "id": 153,
        "sentence": "He broke a new shoelace that day."
    },
    {
        "id": 154,
        "sentence": "The coffee stand is too high for the couch."
    },
    {
        "id": 155,
        "sentence": "The urge to write short stories is rare."
    },
    {
        "id": 156,
        "sentence": "The pencils have all been used."
    },
    {
        "id": 157,
        "sentence": "The pirates seized the crew of the lost ship."
    },
    {
        "id": 158,
        "sentence": "We tried to replace the coin but failed."
    },
    {
        "id": 159,
        "sentence": "She sewed the torn coat quite neatly."
    },
    {
        "id": 160,
        "sentence": "The sofa cushion is red and of light weight."
    },
    {
        "id": 161,
        "sentence": "The jacket hung on the back of the wide chair."
    },
    {
        "id": 162,
        "sentence": "At that high level the air is pure."
    },
    {
        "id": 163,
        "sentence": "Drop the two when you add the figures."
    },
    {
        "id": 164,
        "sentence": "A filing case is now hard to buy."
    },
    {
        "id": 165,
        "sentence": "An abrupt start does not win the prize."
    },
    {
        "id": 166,
        "sentence": "Wood is best for making toys and blocks."
    },
    {
        "id": 167,
        "sentence": "The office paint was a dull, sad tan."
    },
    {
        "id": 168,
        "sentence": "He knew the skill of the great young actress."
    },
    {
        "id": 169,
        "sentence": "A rag will soak up spilled water."
    },
    {
        "id": 170,
        "sentence": "A shower of dirt fell from the hot pipes."
    },
    {
        "id": 171,
        "sentence": "Steam hissed from the broken valve."
    },
    {
        "id": 172,
        "sentence": "The child almost hurt the small dog."
    },
    {
        "id": 173,
        "sentence": "There was a sound of dry leaves outside."
    },
    {
        "id": 174,
        "sentence": "The sky that morning was clear and bright blue."
    },
    {
        "id": 175,
        "sentence": "Torn scraps littered the stone floor."
    },
    {
        "id": 176,
        "sentence": "Sunday is the best part of the week."
    },
    {
        "id": 177,
        "sentence": "The doctor cured him with these pills."
    },
    {
        "id": 178,
        "sentence": "The new girl was fired today at noon."
    },
    {
        "id": 179,
        "sentence": "They felt gay when the ship arrived in port."
    },
    {
        "id": 180,
        "sentence": "Add the store's account to the last cent."
    },
    {
        "id": 181,
        "sentence": "Acid burns holes in wool cloth."
    },
    {
        "id": 182,
        "sentence": "Fairy tales should be fun to write."
    },
    {
        "id": 183,
        "sentence": "Eight miles of woodland burned to waste."
    },
    {
        "id": 184,
        "sentence": "The third act was dull and tired the players."
    },
    {
        "id": 185,
        "sentence": "A young child should not suffer fright."
    },
    {
        "id": 186,
        "sentence": "Add the column and put the sum here."
    },
    {
        "id": 187,
        "sentence": "We admire and love a good cook."
    },
    {
        "id": 188,
        "sentence": "There the flood mark is ten inches."
    },
    {
        "id": 189,
        "sentence": "He carved a head from the round block of marble."
    },
    {
        "id": 190,
        "sentence": "She has a smart way of wearing clothes."
    },
    {
        "id": 191,
        "sentence": "The fruit of a fig tree is apple shaped."
    },
    {
        "id": 192,
        "sentence": "Corn cobs can be used to kindle a fire."
    },
    {
        "id": 193,
        "sentence": "Where were they when the noise started."
    },
    {
        "id": 194,
        "sentence": "The paper box is full of thumb tacks."
    },
    {
        "id": 195,
        "sentence": "Sell your gift to a buyer at a good gain."
    },
    {
        "id": 196,
        "sentence": "The tongs lay beside the ice pail."
    },
    {
        "id": 197,
        "sentence": "The petals fall with the next puff of wind."
    },
    {
        "id": 198,
        "sentence": "Bring your best compass to the third class."
    },
    {
        "id": 199,
        "sentence": "They could laugh although they were sad."
    },
    {
        "id": 200,
        "sentence": "Farmers came in to thresh the oat crop."
    },
    {
        "id": 201,
        "sentence": "The brown house was on fire to the attic."
    },
    {
        "id": 202,
        "sentence": "The lure is used to catch trout and flounder."
    },
    {
        "id": 203,
        "sentence": "Float the soap on top of the bath water."
    },
    {
        "id": 204,
        "sentence": "A blue crane is a tall wading bird."
    },
    {
        "id": 205,
        "sentence": "A fresh start will work such wonders."
    },
    {
        "id": 206,
        "sentence": "The club rented the rink for the fifth night."
    },
    {
        "id": 207,
        "sentence": "After the dance, they went straight home."
    },
    {
        "id": 208,
        "sentence": "The hostess taught the new maid to serve."
    },
    {
        "id": 209,
        "sentence": "He wrote his last novel there at the inn."
    },
    {
        "id": 210,
        "sentence": "Even the worst will beat his low score."
    },
    {
        "id": 211,
        "sentence": "The cement had dried when he moved it."
    },
    {
        "id": 212,
        "sentence": "The loss of the second ship was hard to take."
    },
    {
        "id": 213,
        "sentence": "The fly made its way along the wall."
    },
    {
        "id": 214,
        "sentence": "Do that with a wooden stick."
    },
    {
        "id": 215,
        "sentence": "Live wires should be kept covered."
    },
    {
        "id": 216,
        "sentence": "The large house had hot water taps."
    },
    {
        "id": 217,
        "sentence": "It is hard to erase blue or red ink."
    },
    {
        "id": 218,
        "sentence": "Write at once or you may forget it."
    },
    {
        "id": 219,
        "sentence": "The doorknob was made of bright clean brass."
    },
    {
        "id": 220,
        "sentence": "The wreck occurred by the bank on Main Street."
    },
    {
        "id": 221,
        "sentence": "A pencil with black lead writes best."
    },
    {
        "id": 222,
        "sentence": "Coax a young calf to drink from a bucket."
    },
    {
        "id": 223,
        "sentence": "Schools for ladies teach charm and grace."
    },
    {
        "id": 224,
        "sentence": "The lamp shone with a steady green flame."
    },
    {
        "id": 225,
        "sentence": "They took the axe and the saw to the forest."
    },
    {
        "id": 226,
        "sentence": "The ancient coin was quite dull and worn."
    },
    {
        "id": 227,
        "sentence": "The shaky barn fell with a loud crash."
    },
    {
        "id": 228,
        "sentence": "Jazz and swing fans like fast music."
    },
    {
        "id": 229,
        "sentence": "Rake the rubbish up and then burn it."
    },
    {
        "id": 230,
        "sentence": "Slash the gold cloth into fine ribbons."
    },
    {
        "id": 231,
        "sentence": "Try to have the court decide the case."
    },
    {
        "id": 232,
        "sentence": "They are pushed back each time they attack."
    },
    {
        "id": 233,
        "sentence": "He broke his ties with groups of former friends."
    },
    {
        "id": 234,
        "sentence": "They floated on the raft to sun their white backs."
    },
    {
        "id": 235,
        "sentence": "The map had an X that meant nothing."
    },
    {
        "id": 236,
        "sentence": "Whitings are small fish caught in nets."
    },
    {
        "id": 237,
        "sentence": "Some ads serve to cheat buyers."
    },
    {
        "id": 238,
        "sentence": "Jerk the rope and the bell rings weakly."
    },
    {
        "id": 239,
        "sentence": "A waxed floor makes us lose balance."
    },
    {
        "id": 240,
        "sentence": "Madam, this is the best brand of corn."
    },
    {
        "id": 241,
        "sentence": "On the islands the sea breeze is soft and mild."
    },
    {
        "id": 242,
        "sentence": "The play began as soon as we sat down."
    },
    {
        "id": 243,
        "sentence": "This will lead the world to more sound and fury."
    },
    {
        "id": 244,
        "sentence": "Add salt before you fry the egg."
    },
    {
        "id": 245,
        "sentence": "The rush for funds reached its peak Tuesday."
    },
    {
        "id": 246,
        "sentence": "The birch looked stark white and lonesome."
    },
    {
        "id": 247,
        "sentence": "The box is held by a bright red snapper."
    },
    {
        "id": 248,
        "sentence": "To make pure ice, you freeze water."
    },
    {
        "id": 249,
        "sentence": "The first worm gets snapped early."
    },
    {
        "id": 250,
        "sentence": "Jump the fence and hurry up the bank."
    },
    {
        "id": 251,
        "sentence": "Yell and clap as the curtain slides back."
    },
    {
        "id": 252,
        "sentence": "They are men who walk the middle of the road."
    },
    {
        "id": 253,
        "sentence": "Both brothers wear the same size."
    },
    {
        "id": 254,
        "sentence": "In some form or other we need fun."
    },
    {
        "id": 255,
        "sentence": "The prince ordered his head chopped off."
    },
    {
        "id": 256,
        "sentence": "The houses are built of red clay bricks."
    },
    {
        "id": 257,
        "sentence": "Ducks fly north but lack a compass."
    },
    {
        "id": 258,
        "sentence": "Fruit flavors are used in fizz drinks."
    },
    {
        "id": 259,
        "sentence": "These pills do less good than others."
    },
    {
        "id": 260,
        "sentence": "Canned pears lack full flavor."
    },
    {
        "id": 261,
        "sentence": "The dark pot hung in the front closet."
    },
    {
        "id": 262,
        "sentence": "Carry the pail to the wall and spill it there."
    },
    {
        "id": 263,
        "sentence": "The train brought our hero to the big town."
    },
    {
        "id": 264,
        "sentence": "We are sure that one war is enough."
    },
    {
        "id": 265,
        "sentence": "Gray paint stretched for miles around."
    },
    {
        "id": 266,
        "sentence": "The rude laugh filled the empty room."
    },
    {
        "id": 267,
        "sentence": "High seats are best for football fans."
    },
    {
        "id": 268,
        "sentence": "Tea served from the brown jug is tasty."
    },
    {
        "id": 269,
        "sentence": "A dash of pepper spoils beef stew."
    },
    {
        "id": 270,
        "sentence": "A zestful food is the hot-cross bun."
    },
    {
        "id": 271,
        "sentence": "The horse trotted around the field at a brisk pace."
    },
    {
        "id": 272,
        "sentence": "Find the twin who stole the pearl necklace."
    },
    {
        "id": 273,
        "sentence": "Cut the cord that binds the box tightly."
    },
    {
        "id": 274,
        "sentence": "The red tape bound the smuggled food."
    },
    {
        "id": 275,
        "sentence": "Look in the corner to find the tan shirt."
    },
    {
        "id": 276,
        "sentence": "The cold drizzle will halt the bond drive."
    },
    {
        "id": 277,
        "sentence": "Nine men were hired to dig the ruins."
    },
    {
        "id": 278,
        "sentence": "The junk yard had a mouldy smell."
    },
    {
        "id": 279,
        "sentence": "The flint sputtered and lit a pine torch."
    },
    {
        "id": 280,
        "sentence": "Soak the cloth and drown the sharp odor."
    },
    {
        "id": 281,
        "sentence": "The shelves were bare of both jam or crackers."
    },
    {
        "id": 282,
        "sentence": "A joy to every child is the swan boat."
    },
    {
        "id": 283,
        "sentence": "All sat frozen and watched the screen."
    },
    {
        "id": 284,
        "sentence": "A cloud of dust stung his tender eyes."
    },
    {
        "id": 285,
        "sentence": "To reach the end he needs much courage."
    },
    {
        "id": 286,
        "sentence": "Shape the clay gently into block form."
    },
    {
        "id": 287,
        "sentence": "A ridge on a smooth surface is a bump or flaw."
    },
    {
        "id": 288,
        "sentence": "Hedge apples may stain your hands green."
    },
    {
        "id": 289,
        "sentence": "Quench your thirst, then eat the crackers."
    },
    {
        "id": 290,
        "sentence": "Tight curls get limp on rainy days."
    },
    {
        "id": 291,
        "sentence": "The mute muffled the high tones of the horn."
    },
    {
        "id": 292,
        "sentence": "The gold ring fits only a pierced ear."
    },
    {
        "id": 293,
        "sentence": "The old pan was covered with hard fudge."
    },
    {
        "id": 294,
        "sentence": "Watch the log float in the wide river."
    },
    {
        "id": 295,
        "sentence": "The node on the stalk of wheat grew daily."
    },
    {
        "id": 296,
        "sentence": "The heap of fallen leaves was set on fire."
    },
    {
        "id": 297,
        "sentence": "Write fast if you want to finish early."
    },
    {
        "id": 298,
        "sentence": "His shirt was clean but one button was gone."
    },
    {
        "id": 299,
        "sentence": "The barrel of beer was a brew of malt and hops."
    },
    {
        "id": 300,
        "sentence": "Tin cans are absent from store shelves."
    },
    {
        "id": 301,
        "sentence": "Slide the box into that empty space."
    },
    {
        "id": 302,
        "sentence": "The plant grew large and green in the window."
    },
    {
        "id": 303,
        "sentence": "The beam dropped down on the workman's head."
    },
    {
        "id": 304,
        "sentence": "Pink clouds floated with the breeze."
    },
    {
        "id": 305,
        "sentence": "She danced like a swan, tall and graceful."
    },
    {
        "id": 306,
        "sentence": "The tube was blown and the tire flat and useless."
    },
    {
        "id": 307,
        "sentence": "It is late morning on the old wall clock."
    },
    {
        "id": 308,
        "sentence": "Let's all join as we sing the last chorus."
    },
    {
        "id": 309,
        "sentence": "The last switch cannot be turned off."
    },
    {
        "id": 310,
        "sentence": "The fight will end in just six minutes."
    },
    {
        "id": 311,
        "sentence": "The store walls were lined with colored frocks."
    },
    {
        "id": 312,
        "sentence": "The peace league met to discuss their plans."
    },
    {
        "id": 313,
        "sentence": "The rise to fame of a person takes luck."
    },
    {
        "id": 314,
        "sentence": "Paper is scarce, so write with much care."
    },
    {
        "id": 315,
        "sentence": "The quick fox jumped on the sleeping cat."
    },
    {
        "id": 316,
        "sentence": "The nozzle of the fire hose was bright brass."
    },
    {
        "id": 317,
        "sentence": "Screw the round cap on as tight as needed."
    },
    {
        "id": 318,
        "sentence": "Time brings us many changes."
    },
    {
        "id": 319,
        "sentence": "The purple tie was ten years old."
    },
    {
        "id": 320,
        "sentence": "Men think and plan and sometimes act."
    },
    {
        "id": 321,
        "sentence": "Fill the ink jar with sticky glue."
    },
    {
        "id": 322,
        "sentence": "He smoke a big pipe with strong contents."
    },
    {
        "id": 323,
        "sentence": "We need grain to keep our mules healthy."
    },
    {
        "id": 324,
        "sentence": "Pack the records in a neat thin case."
    },
    {
        "id": 325,
        "sentence": "The crunch of feet in the snow was the only sound."
    },
    {
        "id": 326,
        "sentence": "The copper bowl shone in the sun's rays."
    },
    {
        "id": 327,
        "sentence": "Boards will warp unless kept dry."
    },
    {
        "id": 328,
        "sentence": "The plush chair leaned against the wall."
    },
    {
        "id": 329,
        "sentence": "Glass will clink when struck by metal."
    },
    {
        "id": 330,
        "sentence": "Bathe and relax in the cool green grass."
    },
    {
        "id": 331,
        "sentence": "Nine rows of soldiers stood in a line."
    },
    {
        "id": 332,
        "sentence": "The beach is dry and shallow at low tide."
    },
    {
        "id": 333,
        "sentence": "The idea is to sew both edges straight."
    },
    {
        "id": 334,
        "sentence": "The kitten chased the dog down the street."
    },
    {
        "id": 335,
        "sentence": "Pages bound in cloth make a book."
    },
    {
        "id": 336,
        "sentence": "Try to trace the fine lines of the painting."
    },
    {
        "id": 337,
        "sentence": "Women form less than half of the group."
    },
    {
        "id": 338,
        "sentence": "The zones merge in the central part of town."
    },
    {
        "id": 339,
        "sentence": "A gem in the rough needs work to polish."
    },
    {
        "id": 340,
        "sentence": "Code is used when secrets are sent."
    },
    {
        "id": 341,
        "sentence": "Most of the news is easy for us to hear."
    },
    {
        "id": 342,
        "sentence": "He used the lathe to make brass objects."
    },
    {
        "id": 343,
        "sentence": "The vane on top of the pole revolved in the wind."
    },
    {
        "id": 344,
        "sentence": "Mince pie is a dish served to children."
    },
    {
        "id": 345,
        "sentence": "The clan gathered on each dull night."
    },
    {
        "id": 346,
        "sentence": "Let it burn, it gives us warmth and comfort."
    },
    {
        "id": 347,
        "sentence": "A castle built from sand fails to endure."
    },
    {
        "id": 348,
        "sentence": "A child's wit saved the day for us."
    },
    {
        "id": 349,
        "sentence": "Tack the strip of carpet to the worn floor."
    },
    {
        "id": 350,
        "sentence": "Next Tuesday we must vote."
    },
    {
        "id": 351,
        "sentence": "Pour the stew from the pot into the plate."
    },
    {
        "id": 352,
        "sentence": "Each penny shone like new."
    },
    {
        "id": 353,
        "sentence": "The man went to the woods to gather sticks."
    },
    {
        "id": 354,
        "sentence": "The dirt piles were lines along the road."
    },
    {
        "id": 355,
        "sentence": "The logs fell and tumbled into the clear stream."
    },
    {
        "id": 356,
        "sentence": "Just hoist it up and take it away."
    },
    {
        "id": 357,
        "sentence": "A ripe plum is fit for a king's palate."
    },
    {
        "id": 358,
        "sentence": "Our plans right now are hazy."
    },
    {
        "id": 359,
        "sentence": "Brass rings are sold by these natives."
    },
    {
        "id": 360,
        "sentence": "It takes a good trap to capture a bear."
    },
    {
        "id": 361,
        "sentence": "Feed the white mouse some flower seeds."
    },
    {
        "id": 362,
        "sentence": "The thaw came early and freed the stream."
    },
    {
        "id": 363,
        "sentence": "He took the lead and kept it the whole distance."
    },
    {
        "id": 364,
        "sentence": "The key you designed will fit the lock."
    },
    {
        "id": 365,
        "sentence": "Plead to the council to free the poor thief."
    },
    {
        "id": 366,
        "sentence": "Better hash is made of rare beef."
    },
    {
        "id": 367,
        "sentence": "This plank was made for walking on ."
    },
    {
        "id": 368,
        "sentence": "The lake sparkled in the red hot sun."
    },
    {
        "id": 369,
        "sentence": "He crawled with care along the ledge."
    },
    {
        "id": 370,
        "sentence": "Tend the sheep while the dog wanders."
    },
    {
        "id": 371,
        "sentence": "It takes a lot of help to finish these."
    },
    {
        "id": 372,
        "sentence": "Mark the spot with a sign painted red."
    },
    {
        "id": 373,
        "sentence": "Take two shares as a fair profit."
    },
    {
        "id": 374,
        "sentence": "The fur of cats goes by many names."
    },
    {
        "id": 375,
        "sentence": "North winds bring colds and fevers."
    },
    {
        "id": 376,
        "sentence": "He asks no person to vouch for him."
    },
    {
        "id": 377,
        "sentence": "Go now and come here later."
    },
    {
        "id": 378,
        "sentence": "A sash of gold silk will trim her dress."
    },
    {
        "id": 379,
        "sentence": "Soap can wash most dirt away."
    },
    {
        "id": 380,
        "sentence": "That move means the game is over."
    },
    {
        "id": 381,
        "sentence": "He wrote down a long list of items."
    },
    {
        "id": 382,
        "sentence": "A siege will crack the strong defense."
    },
    {
        "id": 383,
        "sentence": "Grape juice and water mix well."
    },
    {
        "id": 384,
        "sentence": "Roads are paved with sticky tar."
    },
    {
        "id": 385,
        "sentence": "Fake stones shine but cost little."
    },
    {
        "id": 386,
        "sentence": "The drip of the rain made a pleasant sound."
    },
    {
        "id": 387,
        "sentence": "Smoke poured out of every crack."
    },
    {
        "id": 388,
        "sentence": "Serve the hot rum to the tired heroes."
    },
    {
        "id": 389,
        "sentence": "Much of the story makes good sense."
    },
    {
        "id": 390,
        "sentence": "The sun came up to light the eastern sky."
    },
    {
        "id": 391,
        "sentence": "Heave the line over the port side."
    },
    {
        "id": 392,
        "sentence": "A lathe cuts and trims any wood."
    },
    {
        "id": 393,
        "sentence": "It's a dense crowd in two distinct ways."
    },
    {
        "id": 394,
        "sentence": "His hip struck the knee of the next player."
    },
    {
        "id": 395,
        "sentence": "The stale smell of old beer lingers."
    },
    {
        "id": 396,
        "sentence": "The desk was firm on the shaky floor."
    },
    {
        "id": 397,
        "sentence": "It takes heat to bring out the odor."
    },
    {
        "id": 398,
        "sentence": "Beef is scarcer than some lamb."
    },
    {
        "id": 399,
        "sentence": "Raise the sail and steer the ship northward."
    },
    {
        "id": 400,
        "sentence": "A cone costs five cents on Mondays."
    },
    {
        "id": 401,
        "sentence": "A pod is what peas always grow in."
    },
    {
        "id": 402,
        "sentence": "Jerk that dart from the cork target."
    },
    {
        "id": 403,
        "sentence": "No cement will hold hard wood."
    },
    {
        "id": 404,
        "sentence": "We now have a new base for shipping."
    },
    {
        "id": 405,
        "sentence": "A list of names is carved around the base."
    },
    {
        "id": 406,
        "sentence": "The sheep were led home by a dog."
    },
    {
        "id": 407,
        "sentence": "Three for a dime, the young peddler cried."
    },
    {
        "id": 408,
        "sentence": "The sense of smell is better than that of touch."
    },
    {
        "id": 409,
        "sentence": "No hardship seemed to make him sad."
    },
    {
        "id": 410,
        "sentence": "Grace makes up for lack of beauty."
    },
    {
        "id": 411,
        "sentence": "Nudge gently but wake her now."
    },
    {
        "id": 412,
        "sentence": "The news struck doubt into restless minds."
    },
    {
        "id": 413,
        "sentence": "Once we stood beside the shore."
    },
    {
        "id": 414,
        "sentence": "A chink in the wall allowed a draft to blow."
    },
    {
        "id": 415,
        "sentence": "Fasten two pins on each side."
    },
    {
        "id": 416,
        "sentence": "A cold dip restores health and zest."
    },
    {
        "id": 417,
        "sentence": "He takes the oath of office each March."
    },
    {
        "id": 418,
        "sentence": "The sand drifts over the sills of the old house."
    },
    {
        "id": 419,
        "sentence": "The point of the steel pen was bent and twisted."
    },
    {
        "id": 420,
        "sentence": "There is a lag between thought and act."
    },
    {
        "id": 421,
        "sentence": "Seed is needed to plant the spring corn."
    },
    {
        "id": 422,
        "sentence": "Draw the chart with heavy black lines."
    },
    {
        "id": 423,
        "sentence": "The boy owed his pal thirty cents."
    },
    {
        "id": 424,
        "sentence": "The chap slipped into the crowd and was lost."
    },
    {
        "id": 425,
        "sentence": "Hats are worn to tea and not to dinner."
    },
    {
        "id": 426,
        "sentence": "The ramp led up to the wide highway."
    },
    {
        "id": 427,
        "sentence": "Beat the dust from the rug onto the lawn."
    },
    {
        "id": 428,
        "sentence": "Say it slowly but make it ring clear."
    },
    {
        "id": 429,
        "sentence": "The straw nest housed five robins."
    },
    {
        "id": 430,
        "sentence": "Screen the porch with woven straw mats."
    },
    {
        "id": 431,
        "sentence": "This horse will nose his way to the finish."
    },
    {
        "id": 432,
        "sentence": "The dry wax protects the deep scratch."
    },
    {
        "id": 433,
        "sentence": "He picked up the dice for a second roll."
    },
    {
        "id": 434,
        "sentence": "These coins will be needed to pay his debt."
    },
    {
        "id": 435,
        "sentence": "The nag pulled the frail cart along."
    },
    {
        "id": 436,
        "sentence": "Twist the valve and release hot steam."
    },
    {
        "id": 437,
        "sentence": "The vamp of the shoe had a gold buckle."
    },
    {
        "id": 438,
        "sentence": "The smell of burned rags itches my nose."
    },
    {
        "id": 439,
        "sentence": "New pants lack cuffs and pockets."
    },
    {
        "id": 440,
        "sentence": "The marsh will freeze when cold enough."
    },
    {
        "id": 441,
        "sentence": "They slice the sausage thin with a knife."
    },
    {
        "id": 442,
        "sentence": "The bloom of the rose lasts a few days."
    },
    {
        "id": 443,
        "sentence": "A gray mare walked before the colt."
    },
    {
        "id": 444,
        "sentence": "Breakfast buns are fine with a hot drink."
    },
    {
        "id": 445,
        "sentence": "Bottles hold four kinds of rum."
    },
    {
        "id": 446,
        "sentence": "The man wore a feather in his felt hat."
    },
    {
        "id": 447,
        "sentence": "He wheeled the bike past the winding road."
    },
    {
        "id": 448,
        "sentence": "Drop the ashes on the worn old rug."
    },
    {
        "id": 449,
        "sentence": "The desk and both chairs were painted tan."
    },
    {
        "id": 450,
        "sentence": "Throw out the used paper cup and plate."
    },
    {
        "id": 451,
        "sentence": "A clean neck means a neat collar."
    },
    {
        "id": 452,
        "sentence": "The couch cover and hall drapes were blue."
    },
    {
        "id": 453,
        "sentence": "The stems of the tall glasses cracked and broke."
    },
    {
        "id": 454,
        "sentence": "The wall phone rang loud and often."
    },
    {
        "id": 455,
        "sentence": "The clothes dried on a thin wooden rack."
    },
    {
        "id": 456,
        "sentence": "Turn out the lantern which gives us light."
    },
    {
        "id": 457,
        "sentence": "The cleat sank deeply into the soft turf."
    },
    {
        "id": 458,
        "sentence": "The bills were mailed promptly on the tenth of the month."
    },
    {
        "id": 459,
        "sentence": "To have is better than to wait and hope."
    },
    {
        "id": 460,
        "sentence": "The price is fair for a good antique clock."
    },
    {
        "id": 461,
        "sentence": "The music played on while they talked."
    },
    {
        "id": 462,
        "sentence": "Dispense with a vest on a day like this."
    },
    {
        "id": 463,
        "sentence": "The bunch of grapes was pressed into wine."
    },
    {
        "id": 464,
        "sentence": "He sent the figs, but kept the ripe cherries."
    },
    {
        "id": 465,
        "sentence": "The hinge on the door creaked with old age."
    },
    {
        "id": 466,
        "sentence": "The screen before the fire kept in the sparks."
    },
    {
        "id": 467,
        "sentence": "Fly by night and you waste little time."
    },
    {
        "id": 468,
        "sentence": "Thick glasses helped him read the print."
    },
    {
        "id": 469,
        "sentence": "Birth and death marks the limits of life."
    },
    {
        "id": 470,
        "sentence": "The chair looked strong but had no bottom."
    },
    {
        "id": 471,
        "sentence": "The kite flew wildly in the high wind."
    },
    {
        "id": 472,
        "sentence": "A fur muff is stylish once more."
    },
    {
        "id": 473,
        "sentence": "The tin box held priceless stones."
    },
    {
        "id": 474,
        "sentence": "We need an end of all such matter."
    },
    {
        "id": 475,
        "sentence": "The case was puzzling to the old and wise."
    },
    {
        "id": 476,
        "sentence": "The bright lanterns were gay on the dark lawn."
    },
    {
        "id": 477,
        "sentence": "We don't get much money but we have fun."
    },
    {
        "id": 478,
        "sentence": "The youth drove with zest, but little skill."
    },
    {
        "id": 479,
        "sentence": "Five years he lived with a shaggy dog."
    },
    {
        "id": 480,
        "sentence": "A fence cuts through the corner lot."
    },
    {
        "id": 481,
        "sentence": "The way to save money is not to spend much."
    },
    {
        "id": 482,
        "sentence": "Shut the hatch before the waves push it in."
    },
    {
        "id": 483,
        "sentence": "The odor of spring makes young hearts jump."
    },
    {
        "id": 484,
        "sentence": "Crack the walnut with your sharp side teeth."
    },
    {
        "id": 485,
        "sentence": "He offered proof in the form of a large chart."
    },
    {
        "id": 486,
        "sentence": "Send the stuff in a thick paper bag."
    },
    {
        "id": 487,
        "sentence": "A quart of milk is water for the most part."
    },
    {
        "id": 488,
        "sentence": "They told wild tales to frighten him."
    },
    {
        "id": 489,
        "sentence": "The three story house was built of stone."
    },
    {
        "id": 490,
        "sentence": "In the rear of the ground floor was a large passage."
    },
    {
        "id": 491,
        "sentence": "A man in a blue sweater sat at the desk."
    },
    {
        "id": 492,
        "sentence": "Oats are a food eaten by horse and man."
    },
    {
        "id": 493,
        "sentence": "Their eyelids droop for want of sleep."
    },
    {
        "id": 494,
        "sentence": "A sip of tea revives his tired friend."
    },
    {
        "id": 495,
        "sentence": "There are many ways to do these things."
    },
    {
        "id": 496,
        "sentence": "Tuck the sheet under the edge of the mat."
    },
    {
        "id": 497,
        "sentence": "A force equal to that would move the earth."
    },
    {
        "id": 498,
        "sentence": "We like to see clear weather."
    },
    {
        "id": 499,
        "sentence": "The work of the tailor is seen on each side."
    },
    {
        "id": 500,
        "sentence": "Take a chance and win a china doll."
    },
    {
        "id": 501,
        "sentence": "Shake the dust from your shoes, stranger."
    },
    {
        "id": 502,
        "sentence": "She was kind to sick old people."
    },
    {
        "id": 503,
        "sentence": "The square wooden crate was packed to be shipped."
    },
    {
        "id": 504,
        "sentence": "The dusty bench stood by the stone wall."
    },
    {
        "id": 505,
        "sentence": "We dress to suit the weather of most days."
    },
    {
        "id": 506,
        "sentence": "Smile when you say nasty words."
    },
    {
        "id": 507,
        "sentence": "A bowl of rice is free with chicken stew."
    },
    {
        "id": 508,
        "sentence": "The water in this well is a source of good health."
    },
    {
        "id": 509,
        "sentence": "Take shelter in this tent, but keep still."
    },
    {
        "id": 510,
        "sentence": "That guy is the writer of a few banned books."
    },
    {
        "id": 511,
        "sentence": "The little tales they tell are false."
    },
    {
        "id": 512,
        "sentence": "The door was barred, locked, and bolted as well."
    },
    {
        "id": 513,
        "sentence": "Ripe pears are fit for a queen's table."
    },
    {
        "id": 514,
        "sentence": "A big wet stain was on the round carpet."
    },
    {
        "id": 515,
        "sentence": "The kite dipped and swayed, but stayed aloft."
    },
    {
        "id": 516,
        "sentence": "The pleasant hours fly by much too soon."
    },
    {
        "id": 517,
        "sentence": "The room was crowded with a wild mob."
    },
    {
        "id": 518,
        "sentence": "This strong arm shall shield your honor."
    },
    {
        "id": 519,
        "sentence": "She blushed when he gave her a white orchid."
    },
    {
        "id": 520,
        "sentence": "The beetle droned in the hot June sun."
    },
    {
        "id": 521,
        "sentence": "Press the pedal with your left foot."
    },
    {
        "id": 522,
        "sentence": "Neat plans fail without luck."
    },
    {
        "id": 523,
        "sentence": "The black trunk fell from the landing."
    },
    {
        "id": 524,
        "sentence": "The bank pressed for payment of the debt."
    },
    {
        "id": 525,
        "sentence": "The theft of the pearl pin was kept secret."
    },
    {
        "id": 526,
        "sentence": "Shake hands with this friendly child."
    },
    {
        "id": 527,
        "sentence": "The vast space stretched into the far distance."
    },
    {
        "id": 528,
        "sentence": "A rich farm is rare in this sandy waste."
    },
    {
        "id": 529,
        "sentence": "His wide grin earned many friends."
    },
    {
        "id": 530,
        "sentence": "Flax makes a fine brand of paper."
    },
    {
        "id": 531,
        "sentence": "Hurdle the pit with the aid of a long pole."
    },
    {
        "id": 532,
        "sentence": "A strong bid may scare your partner stiff."
    },
    {
        "id": 533,
        "sentence": "Even a just cause needs power to win."
    },
    {
        "id": 534,
        "sentence": "Peep under the tent and see the clowns."
    },
    {
        "id": 535,
        "sentence": "The leaf drifts along with a slow spin."
    },
    {
        "id": 536,
        "sentence": "Cheap clothes are flashy but don't last."
    },
    {
        "id": 537,
        "sentence": "A thing of small note can cause despair."
    },
    {
        "id": 538,
        "sentence": "Flood the mails with requests for this book."
    },
    {
        "id": 539,
        "sentence": "A thick coat of black paint covered all."
    },
    {
        "id": 540,
        "sentence": "The pencil was cut to be sharp at both ends."
    },
    {
        "id": 541,
        "sentence": "Those last words were a strong statement."
    },
    {
        "id": 542,
        "sentence": "He wrote his name boldly at the top of the sheet."
    },
    {
        "id": 543,
        "sentence": "Dill pickles are sour but taste fine."
    },
    {
        "id": 544,
        "sentence": "Down that road is the way to the grain farmer."
    },
    {
        "id": 545,
        "sentence": "Either mud or dust are found at all times."
    },
    {
        "id": 546,
        "sentence": "The best method is to fix it in place with clips."
    },
    {
        "id": 547,
        "sentence": "If you mumble your speech will be lost."
    },
    {
        "id": 548,
        "sentence": "At night the alarm roused him from a deep sleep."
    },
    {
        "id": 549,
        "sentence": "Read just what the meter says."
    },
    {
        "id": 550,
        "sentence": "Fill your pack with bright trinkets for the poor."
    },
    {
        "id": 551,
        "sentence": "The small red neon lamp went out."
    },
    {
        "id": 552,
        "sentence": "Clams are small, round, soft, and tasty."
    },
    {
        "id": 553,
        "sentence": "The fan whirled its round blades softly."
    },
    {
        "id": 554,
        "sentence": "The line where the edges join was clean."
    },
    {
        "id": 555,
        "sentence": "Breathe deep and smell the piny air."
    },
    {
        "id": 556,
        "sentence": "It matters not if he reads these words or those."
    },
    {
        "id": 557,
        "sentence": "A brown leather bag hung from its strap."
    },
    {
        "id": 558,
        "sentence": "A toad and a frog are hard to tell apart."
    },
    {
        "id": 559,
        "sentence": "A white silk jacket goes with any shoes."
    },
    {
        "id": 560,
        "sentence": "A break in the dam almost caused a flood."
    },
    {
        "id": 561,
        "sentence": "Paint the sockets in the wall dull green."
    },
    {
        "id": 562,
        "sentence": "The child crawled into the dense grass."
    },
    {
        "id": 563,
        "sentence": "Bribes fail where honest men work."
    },
    {
        "id": 564,
        "sentence": "Trample the spark, else the flames will spread."
    },
    {
        "id": 565,
        "sentence": "The hilt of the sword was carved with fine designs."
    },
    {
        "id": 566,
        "sentence": "A round hole was drilled through the thin board."
    },
    {
        "id": 567,
        "sentence": "Footprints showed the path he took up the beach."
    },
    {
        "id": 568,
        "sentence": "She was waiting at my front lawn."
    },
    {
        "id": 569,
        "sentence": "A vent near the edge brought in fresh air."
    },
    {
        "id": 570,
        "sentence": "Prod the old mule with a crooked stick."
    },
    {
        "id": 571,
        "sentence": "It is a band of steel three inches wide."
    },
    {
        "id": 572,
        "sentence": "The pipe ran almost the length of the ditch."
    },
    {
        "id": 573,
        "sentence": "It was hidden from sight by a mass of leaves and shrubs."
    },
    {
        "id": 574,
        "sentence": "The weight of the package was seen on the high scale."
    },
    {
        "id": 575,
        "sentence": "Wake and rise, and step into the green outdoors."
    },
    {
        "id": 576,
        "sentence": "The green light in the brown box flickered."
    },
    {
        "id": 577,
        "sentence": "The brass tube circled the high wall."
    },
    {
        "id": 578,
        "sentence": "The lobes of her ears were pierced to hold rings."
    },
    {
        "id": 579,
        "sentence": "Hold the hammer near the end to drive the nail."
    },
    {
        "id": 580,
        "sentence": "Next Sunday is the twelfth of the month."
    },
    {
        "id": 581,
        "sentence": "Every word and phrase he speaks is true."
    },
    {
        "id": 582,
        "sentence": "He put his last cartridge into the gun and fired."
    },
    {
        "id": 583,
        "sentence": "They took their kids from the public school."
    },
    {
        "id": 584,
        "sentence": "Drive the screw straight into the wood."
    },
    {
        "id": 585,
        "sentence": "Keep the hatch tight and the watch constant."
    },
    {
        "id": 586,
        "sentence": "Sever the twine with a quick snip of the knife."
    },
    {
        "id": 587,
        "sentence": "Paper will dry out when wet."
    },
    {
        "id": 588,
        "sentence": "Slide the catch back and open the desk."
    },
    {
        "id": 589,
        "sentence": "Help the weak to preserve their strength."
    },
    {
        "id": 590,
        "sentence": "A sullen smile gets few friends."
    },
    {
        "id": 591,
        "sentence": "Stop whistling and watch the boys march."
    },
    {
        "id": 592,
        "sentence": "Jerk the cord, and out tumbles the gold."
    },
    {
        "id": 593,
        "sentence": "Slide the tray across the glass top."
    },
    {
        "id": 594,
        "sentence": "The cloud moved in a stately way and was gone."
    },
    {
        "id": 595,
        "sentence": "Light maple makes for a swell room."
    },
    {
        "id": 596,
        "sentence": "Set the piece here and say nothing."
    },
    {
        "id": 597,
        "sentence": "Dull stories make her laugh."
    },
    {
        "id": 598,
        "sentence": "A stiff cord will do to fasten your shoe."
    },
    {
        "id": 599,
        "sentence": "Get the trust fund to the bank early."
    },
    {
        "id": 600,
        "sentence": "Choose between the high road and the low."
    },
    {
        "id": 601,
        "sentence": "A plea for funds seems to come again."
    },
    {
        "id": 602,
        "sentence": "He lent his coat to the tall gaunt stranger."
    },
    {
        "id": 603,
        "sentence": "There is a strong chance it will happen once more."
    },
    {
        "id": 604,
        "sentence": "The duke left the park in a silver coach."
    },
    {
        "id": 605,
        "sentence": "Greet the new guests and leave quickly."
    },
    {
        "id": 606,
        "sentence": "When the frost has come it is time for turkey."
    },
    {
        "id": 607,
        "sentence": "Sweet words work better than fierce."
    },
    {
        "id": 608,
        "sentence": "A thin stripe runs down the middle."
    },
    {
        "id": 609,
        "sentence": "A six comes up more often than a ten."
    },
    {
        "id": 610,
        "sentence": "Lush ferns grow on the lofty rocks."
    },
    {
        "id": 611,
        "sentence": "The ram scared the school children off."
    },
    {
        "id": 612,
        "sentence": "The team with the best timing looks good."
    },
    {
        "id": 613,
        "sentence": "The farmer swapped his horse for a brown ox."
    },
    {
        "id": 614,
        "sentence": "Sit on the perch and tell the others what to do."
    },
    {
        "id": 615,
        "sentence": "A steep trail is painful for our feet."
    },
    {
        "id": 616,
        "sentence": "The early phase of life moves fast."
    },
    {
        "id": 617,
        "sentence": "Green moss grows on the northern side."
    },
    {
        "id": 618,
        "sentence": "Tea in thin china has a sweet taste."
    },
    {
        "id": 619,
        "sentence": "Pitch the straw through the door of the stable."
    },
    {
        "id": 620,
        "sentence": "The latch on the back gate needed a nail."
    },
    {
        "id": 621,
        "sentence": "The goose was brought straight from the old market."
    },
    {
        "id": 622,
        "sentence": "The sink is the thing in which we pile dishes."
    },
    {
        "id": 623,
        "sentence": "A whiff of it will cure the most stubborn cold."
    },
    {
        "id": 624,
        "sentence": "The facts don't always show who is right."
    },
    {
        "id": 625,
        "sentence": "She flaps her cape as she parades the street."
    },
    {
        "id": 626,
        "sentence": "The loss of the cruiser was a blow to the fleet."
    },
    {
        "id": 627,
        "sentence": "Loop the braid to the left and then over."
    },
    {
        "id": 628,
        "sentence": "Plead with the lawyer to drop the lost cause."
    },
    {
        "id": 629,
        "sentence": "Calves thrive on tender spring grass."
    },
    {
        "id": 630,
        "sentence": "Post no bills on this office wall."
    },
    {
        "id": 631,
        "sentence": "Tear a thin sheet from the yellow pad."
    },
    {
        "id": 632,
        "sentence": "A cruise in warm waters in a sleek yacht is fun."
    },
    {
        "id": 633,
        "sentence": "A streak of color ran down the left edge."
    },
    {
        "id": 634,
        "sentence": "It was done before the boy could see it."
    },
    {
        "id": 635,
        "sentence": "Crouch before you jump or miss the mark."
    },
    {
        "id": 636,
        "sentence": "Pack the kits and don't forget the salt."
    },
    {
        "id": 637,
        "sentence": "The square peg will settle in the round hole."
    },
    {
        "id": 638,
        "sentence": "Fine soap saves tender skin."
    },
    {
        "id": 639,
        "sentence": "Poached eggs and tea must suffice."
    },
    {
        "id": 640,
        "sentence": "Bad nerves are jangled by a door slam."
    },
    {
        "id": 641,
        "sentence": "Ship maps are different from those for planes."
    },
    {
        "id": 642,
        "sentence": "Dimes showered down from all sides."
    },
    {
        "id": 643,
        "sentence": "They sang the same tunes at each party."
    },
    {
        "id": 644,
        "sentence": "The sky in the west is tinged with orange red."
    },
    {
        "id": 645,
        "sentence": "The pods of peas ferment in bare fields."
    },
    {
        "id": 646,
        "sentence": "The horse balked and threw the tall rider."
    },
    {
        "id": 647,
        "sentence": "The hitch between the horse and cart broke."
    },
    {
        "id": 648,
        "sentence": "Pile the coal high in the shed corner."
    },
    {
        "id": 649,
        "sentence": "A gold vase is both rare and costly."
    },
    {
        "id": 650,
        "sentence": "The knife was hung inside its bright sheath."
    },
    {
        "id": 651,
        "sentence": "The rarest spice comes from the far East."
    },
    {
        "id": 652,
        "sentence": "The roof should be tilted at a sharp slant."
    },
    {
        "id": 653,
        "sentence": "A smatter of French is worse than none."
    },
    {
        "id": 654,
        "sentence": "The mule trod the treadmill day and night."
    },
    {
        "id": 655,
        "sentence": "The aim of the contest is to raise a great fund."
    },
    {
        "id": 656,
        "sentence": "To send it now in large amounts is bad."
    },
    {
        "id": 657,
        "sentence": "There is a fine hard tang in salty air."
    },
    {
        "id": 658,
        "sentence": "Cod is the main business of the north shore."
    },
    {
        "id": 659,
        "sentence": "The slab was hewn from heavy blocks of slate."
    },
    {
        "id": 660,
        "sentence": "Dunk the stale biscuits into strong drink."
    },
    {
        "id": 661,
        "sentence": "Hang tinsel from both branches."
    },
    {
        "id": 662,
        "sentence": "Cap the jar with a tight brass cover."
    },
    {
        "id": 663,
        "sentence": "The poor boy missed the boat again."
    },
    {
        "id": 664,
        "sentence": "Be sure to set that lamp firmly in the hole."
    },
    {
        "id": 665,
        "sentence": "Pick a card and slip it under the pack."
    },
    {
        "id": 666,
        "sentence": "A round mat will cover the dull spot."
    },
    {
        "id": 667,
        "sentence": "The first part of the plan needs changing."
    },
    {
        "id": 668,
        "sentence": "A good book informs of what we ought to know."
    },
    {
        "id": 669,
        "sentence": "The mail comes in three batches per day."
    },
    {
        "id": 670,
        "sentence": "You cannot brew tea in a cold pot."
    },
    {
        "id": 671,
        "sentence": "Dots of light betrayed the black cat."
    },
    {
        "id": 672,
        "sentence": "Put the chart on the mantel and tack it down."
    },
    {
        "id": 673,
        "sentence": "The night shift men rate extra pay."
    },
    {
        "id": 674,
        "sentence": "The red paper brightened the dim stage."
    },
    {
        "id": 675,
        "sentence": "See the player scoot to third base."
    },
    {
        "id": 676,
        "sentence": "Slide the bill between the two leaves."
    },
    {
        "id": 677,
        "sentence": "Many hands help get the job done."
    },
    {
        "id": 678,
        "sentence": "We don't like to admit our small faults."
    },
    {
        "id": 679,
        "sentence": "No doubt about the way the wind blows."
    },
    {
        "id": 680,
        "sentence": "Dig deep in the earth for pirate's gold."
    },
    {
        "id": 681,
        "sentence": "The steady drip is worse than a drenching rain."
    },
    {
        "id": 682,
        "sentence": "A flat pack takes less luggage space."
    },
    {
        "id": 683,
        "sentence": "Green ice frosted the punch bowl."
    },
    {
        "id": 684,
        "sentence": "A stuffed chair slipped from the moving van."
    },
    {
        "id": 685,
        "sentence": "The stitch will serve but needs to be shortened."
    },
    {
        "id": 686,
        "sentence": "A thin book fits in the side pocket."
    },
    {
        "id": 687,
        "sentence": "The gloss on top made it unfit to read."
    },
    {
        "id": 688,
        "sentence": "The hail pattered on the burnt brown grass."
    },
    {
        "id": 689,
        "sentence": "Seven seals were stamped on great sheets."
    },
    {
        "id": 690,
        "sentence": "Our troops are set to strike heavy blows."
    },
    {
        "id": 691,
        "sentence": "The store was jammed before the sale could start."
    },
    {
        "id": 692,
        "sentence": "It was a bad error on the part of the new judge."
    },
    {
        "id": 693,
        "sentence": "One step more and the board will collapse."
    },
    {
        "id": 694,
        "sentence": "Take the match and strike it against your shoe."
    },
    {
        "id": 695,
        "sentence": "The pot boiled but the contents failed to jell."
    },
    {
        "id": 696,
        "sentence": "The baby puts his right foot in his mouth."
    },
    {
        "id": 697,
        "sentence": "The bombs left most of the town in ruins."
    },
    {
        "id": 698,
        "sentence": "Stop and stare at the hard working man."
    },
    {
        "id": 699,
        "sentence": "The streets are narrow and full of sharp turns."
    },
    {
        "id": 700,
        "sentence": "The pup jerked the leash as he saw a feline shape."
    },
    {
        "id": 701,
        "sentence": "Open your book to the first page."
    },
    {
        "id": 702,
        "sentence": "Fish evade the net and swim off."
    },
    {
        "id": 703,
        "sentence": "Dip the pail once and let it settle."
    },
    {
        "id": 704,
        "sentence": "Will you please answer that phone."
    },
    {
        "id": 705,
        "sentence": "The big red apple fell to the ground."
    },
    {
        "id": 706,
        "sentence": "The curtain rose and the show was on."
    },
    {
        "id": 707,
        "sentence": "The young prince became heir to the throne."
    },
    {
        "id": 708,
        "sentence": "He sent the boy on a short errand."
    },
    {
        "id": 709,
        "sentence": "Leave now and you will arrive on time."
    },
    {
        "id": 710,
        "sentence": "The corner store was robbed last night."
    },
    {
        "id": 711,
        "sentence": "A gold ring will please most any girl."
    },
    {
        "id": 712,
        "sentence": "The long journey home took a year."
    },
    {
        "id": 713,
        "sentence": "She saw a cat in the neighbor's house."
    },
    {
        "id": 714,
        "sentence": "A pink shell was found on the sandy beach."
    },
    {
        "id": 715,
        "sentence": "Small children came to see him."
    },
    {
        "id": 716,
        "sentence": "The grass and bushes were wet with dew."
    },
    {
        "id": 717,
        "sentence": "The blind man counted his old coins."
    },
    {
        "id": 718,
        "sentence": "A severe storm tore down the barn."
    },
    {
        "id": 719,
        "sentence": "She called his name many times."
    },
    {
        "id": 720,
        "sentence": "When you hear the bell, come quickly."
    }
];

export default harvardSentences;