/**
 * Ceylone Culture - Unified SPA Controller & State Engine
 * Manages reactive UI states, calculations, local storage, simulated AI copywriting, and Java API bindings.
 */

// --- Default Data Repositories ---
const CEYLON_MENU = [
    // --- SPECIAL SET MENU (category: set-menus) ---
    { id: 'sm1', name: 'Fish Set Menu', category: 'set-menus', price: 750, desc: 'Includes: Egg Rice, Devilled Fish, Vegetable Chop Suey, Omelette with Peas, and Chili Paste. (Basmathi +LKR 200)' },
    { id: 'sm2', name: 'Chicken Set Menu', category: 'set-menus', price: 700, desc: 'Includes: Egg Rice, Devilled Chicken, Vegetable Chop Suey, Omelette with Peas, and Chili Paste. (Basmathi +LKR 200)' },
    { id: 'sm3', name: 'Beef Set Menu', category: 'set-menus', price: 850, desc: 'Includes: Egg Rice, Devilled Beef, Vegetable Chop Suey, Omelette with Peas, and Chili Paste. (Basmathi +LKR 200)' },
    { id: 'sm4', name: 'Prawns Set Menu', category: 'set-menus', price: 900, desc: 'Includes: Egg Rice, Devilled Prawns, Vegetable Chop Suey, Omelette with Peas, and Chili Paste. (Basmathi +LKR 200)' },
    { id: 'sm5', name: 'Vegetable Set Menu', category: 'set-menus', price: 550, desc: 'Includes: Vegetable Rice, Devilled Mushrooms, Chop Suey, and Chili Paste. (Basmathi +LKR 200)' },

    // --- BUDGET PACK (category: set-menus) ---
    { id: 'bp1', name: 'Budget Pack - Chicken', category: 'set-menus', price: 400, desc: 'Samba Fried Rice, Devilled Chicken, Vegetable Chop Suey, and Chili Paste.' },
    { id: 'bp2', name: 'Budget Pack - Egg', category: 'set-menus', price: 300, desc: 'Samba Fried Rice, Fried Egg, Chop Suey, and Chili Paste.' },
    { id: 'bp3', name: '2C Special Budget Pack', category: 'set-menus', price: 450, desc: 'Samba Fried Rice, 2 Fried Sausages, Chop Suey, Chili Paste, and a sweet Pineapple Slice.' },

    // --- FRIED RICE (category: fried-rice) ---
    { id: 'fr1', name: 'Vegetable Fried Rice (Small)', category: 'fried-rice', price: 450, desc: 'Wok-tossed aromatic rice with finely chopped garden greens.' },
    { id: 'fr2', name: 'Vegetable Fried Rice (Large)', category: 'fried-rice', price: 600, desc: 'Sharing portion of wok-tossed savory vegetable rice.' },
    { id: 'fr3', name: 'Egg Fried Rice (Small)', category: 'fried-rice', price: 550, desc: 'Fluffy seasoned rice tossed with scrambled eggs and scallions.' },
    { id: 'fr4', name: 'Egg Fried Rice (Large)', category: 'fried-rice', price: 700, desc: 'Generous portion of traditional seasoned egg fried rice.' },
    { id: 'fr5', name: 'Chicken Fried Rice (Small)', category: 'fried-rice', price: 600, desc: 'Tender seasoned chicken bits wok-tossed with fresh premium rice.' },
    { id: 'fr6', name: 'Chicken Fried Rice (Large)', category: 'fried-rice', price: 850, desc: 'Hearty signature platter of seasoned chicken fried rice.' },
    { id: 'fr7', name: 'Mix Fried Rice (Small)', category: 'fried-rice', price: 800, desc: 'Combination of savory meats and egg tossed together on a high flame.' },
    { id: 'fr8', name: 'Mix Fried Rice (Large)', category: 'fried-rice', price: 1100, desc: 'Large supreme combination platter of seasoned mixed meats fried rice.' },
    { id: 'fr9', name: 'Sea Food Fried Rice (Small)', category: 'fried-rice', price: 750, desc: 'Fragrant wok rice featuring a fresh catch of local seafood.' },
    { id: 'fr10', name: 'Sea Food Fried Rice (Large)', category: 'fried-rice', price: 1050, desc: 'Abundant combination platter of premium seafood fried rice.' },
    { id: 'fr11', name: 'Nasi Goreng Rice (Small)', category: 'fried-rice', price: 800, desc: 'Indonesian style sweet & spicy fried rice with distinct local accents.' },
    { id: 'fr12', name: 'Nasi Goreng Rice (Large)', category: 'fried-rice', price: 1000, desc: 'Deluxe sweet-savory traditional Nasi Goreng setup.' },
    { id: 'fr13', name: 'Mongolian Mix Rice (Small)', category: 'fried-rice', price: 900, desc: 'Fiery Mongolian sauces tossed with mixed protein and crisp veggies.' },
    { id: 'fr14', name: 'Mongolian Mix Rice (Large)', category: 'fried-rice', price: 1100, desc: 'Large sharing platter of extra spicy Mongolian mixed rice.' },
    { id: 'fr15', name: 'Fish Fried Rice (Small)', category: 'fried-rice', price: 700, desc: 'Flavorful seasoned rice tossed with flaked choice fish fillets.' },
    { id: 'fr16', name: 'Fish Fried Rice (Large)', category: 'fried-rice', price: 950, desc: 'Large portion of savory fish fried rice.' },
    { id: 'fr17', name: 'Prawns Fried Rice (Small)', category: 'fried-rice', price: 700, desc: 'Juicy premium prawns tossed gently with buttered savory rice.' },
    { id: 'fr18', name: 'Prawns Fried Rice (Large)', category: 'fried-rice', price: 900, desc: 'Large plate loaded with delicious wok-tossed prawns fried rice.' },
    { id: 'fr19', name: 'Beef Fried Rice (Small)', category: 'fried-rice', price: 750, desc: 'Stir-fried seasoned rice loaded with savory beef strips.' },
    { id: 'fr20', name: 'Beef Fried Rice (Large)', category: 'fried-rice', price: 1000, desc: 'Hearty large portion of seasoned beef fried rice.' },
    { id: 'fr21', name: 'Garlic Fried Rice (Small)', category: 'fried-rice', price: 650, desc: 'Fragrant, intensely aromatic toasted garlic wok-tossed rice.' },
    { id: 'fr22', name: 'Garlic Fried Rice (Large)', category: 'fried-rice', price: 750, desc: 'Large comfort platter of aromatic golden garlic fried rice.' },
    { id: 'fr23', name: 'Chicken Chop Suey Rice (Small)', category: 'fried-rice', price: 1300, desc: 'Steamed rice bed topped with crisp wok vegetables and saucy chicken.' },
    { id: 'fr24', name: 'Chicken Chop Suey Rice (Large)', category: 'fried-rice', price: 1700, desc: 'Large steamed rice bed topped with crisp wok vegetables and saucy chicken.' },
    { id: 'fr25', name: 'Mixed Chop Suey Rice (Small)', category: 'fried-rice', price: 2250, desc: 'Premium assorted meats in an authentic Chinese style stir-fry sauce over rice.' },
    { id: 'fr26', name: 'Mixed Chop Suey Rice (Large)', category: 'fried-rice', price: 2750, desc: 'Large premium assorted meats in an authentic Chinese style stir-fry sauce over rice.' },
    { id: 'fr27', name: 'Sea Food Chop Suey Rice (Small)', category: 'fried-rice', price: 1800, desc: 'Fresh mixed coastal seafood stewed in clear glaze with greens over rice.' },
    { id: 'fr28', name: 'Sea Food Chop Suey Rice (Large)', category: 'fried-rice', price: 2250, desc: 'Large fresh mixed coastal seafood stewed in clear glaze with greens over rice.' },
    { id: 'fr29', name: 'Basmathi Rice Option Upgrade (Small)', category: 'fried-rice', price: 250, desc: 'Premium long-grain fragrant Basmathi rice base variant.' },
    { id: 'fr30', name: 'Basmathi Rice Option Upgrade (Large)', category: 'fried-rice', price: 300, desc: 'Large premium long-grain fragrant Basmathi rice base variant.' },

    // --- QUICK BYTES (category: quick-bytes) ---
    { id: 'qb1', name: 'French Fries', category: 'quick-bytes', price: 850, desc: 'Crispy golden classic French fries served hot with tomato ketchup.' },
    { id: 'qb2', name: 'Cashew Nuts', category: 'quick-bytes', price: 1200, desc: 'Premium roasted whole cashew nuts salted to perfection.' },
    { id: 'qb3', name: 'Fried Chicken Sausages', category: 'quick-bytes', price: 900, desc: 'Portion of deep-fried premium chicken sausages served with chili sauce.' },
    { id: 'qb4', name: 'Chinese Rolls (1 Pcs)', category: 'quick-bytes', price: 100, desc: 'Authentic crispy Sri Lankan pancake roll stuffed with spiced meat/veg.' },

    // --- OMELETTE & EGGS (category: quick-bytes) ---
    { id: 'eg1', name: 'Sri Lankan Omelette', category: 'quick-bytes', price: 300, desc: 'Fluffy farm eggs folded with chopped red onions, green chilies, and black pepper.' },
    { id: 'eg2', name: 'Chicken Omelette', category: 'quick-bytes', price: 450, desc: 'Hearty egg omelette loaded with savory shredded chicken.' },
    { id: 'eg3', name: 'Cheese Omelette', category: 'quick-bytes', price: 600, desc: 'Fluffy omelette stuffed with thick melted premium cheddar cheese.' },
    { id: 'eg4', name: 'Sea Food Omelette', category: 'quick-bytes', price: 700, desc: 'Gourmet omelette folded with fresh prawns and cuttlefish bites.' },
    { id: 'eg5', name: 'Fried Egg', category: 'quick-bytes', price: 100, desc: 'Classic sunny-side up or single fried farm fresh egg.' },

    // --- KOTHTHU HUT (category: koththu-hut) ---
    { id: 'kt1', name: 'Vegetable Kottu (Small)', category: 'koththu-hut', price: 500, desc: 'Finely chopped roti shredded with local farm fresh greens and aromatic spices.' },
    { id: 'kt2', name: 'Vegetable Kottu (Large)', category: 'koththu-hut', price: 600, desc: 'Traditional full-sized authentic vegetable kottu.' },
    { id: 'kt3', name: 'Egg Kottu (Small)', category: 'koththu-hut', price: 550, desc: 'Rhythmic chopped street style kottu with fluffy egg folds and spices.' },
    { id: 'kt4', name: 'Egg Kottu (Large)', category: 'koththu-hut', price: 700, desc: 'Large authentic chopped egg kottu plate.' },
    { id: 'kt5', name: 'Chicken Kottu (Small)', category: 'koththu-hut', price: 600, desc: 'A Sri Lankan classic! Shredded parotta mashed with rich aromatic chicken curry.' },
    { id: 'kt6', name: 'Chicken Kottu (Large)', category: 'koththu-hut', price: 800, desc: 'Large full-scale authentic Sri Lankan chicken kottu feast.' },
    { id: 'kt7', name: 'Cheese Kottu (Small)', category: 'koththu-hut', price: 700, desc: 'Creamy molten milk cheeses folded elegantly into chopped vegetable spice kottu.' },
    { id: 'kt8', name: 'Cheese Kottu (Large)', category: 'koththu-hut', price: 950, desc: 'Rich, extra creamy large gourmet cheese kottu.' },
    { id: 'kt9', name: 'Beef Kottu (Small)', category: 'koththu-hut', price: 750, desc: 'Spiced slow-roasted beef chunks chopped into savory parotta ribbons.' },
    { id: 'kt10', name: 'Beef Kottu (Large)', category: 'koththu-hut', price: 1000, desc: 'Hearty large authentic chopped beef kottu platter.' },
    { id: 'kt11', name: 'Cheese Chicken Kottu (Small)', category: 'koththu-hut', price: 850, desc: 'The perfect fusion! Decadent cheese mixed with premium rich chicken kottu.' },
    { id: 'kt12', name: 'Cheese Chicken Kottu (Large)', category: 'koththu-hut', price: 1100, desc: 'Gourmet supreme large cheese chicken kottu creation.' },
    { id: 'kt13', name: '2C Special Kottu Mix (Small)', category: 'koththu-hut', price: 800, desc: 'House secret combination mix of finest multi-meat combinations.' },
    { id: 'kt14', name: '2C Special Kottu Mix (Large)', category: 'koththu-hut', price: 1100, desc: 'Master chef signature large luxury multi-meat kottu assortment.' },

    // --- MEAT HUT (category: meat-hut) ---
    { id: 'mp1', name: 'Devilled Chicken (Small)', category: 'meat-hut', price: 1100, desc: 'Fiery wok-fried spicy chicken chunk glazed in capsicum, onions, and sweet-hot sauce.' },
    { id: 'mp2', name: 'Fried Chicken (Small)', category: 'meat-hut', price: 1200, desc: 'Golden crispy seasoned fried chicken pieces prepared with local spices.' },
    { id: 'mp3', name: 'Chicken Stew (Small)', category: 'meat-hut', price: 1250, desc: 'Comforting, velvety aromatic clear-sauced classic Sri Lankan chicken stew.' },
    { id: 'mp4', name: 'Chicken with Kan Kung (Small)', category: 'meat-hut', price: 1200, desc: 'Fresh water spinach wok-tossed on high flame with seasoned chicken strips.' },
    { id: 'mp5', name: 'Hot Butter Chicken (Small)', category: 'meat-hut', price: 1200, desc: 'Crisp seasoned chicken coated in creamy savory chili butter.' },
    { id: 'mp6', name: 'Devilled Beef (Small)', category: 'meat-hut', price: 1400, desc: 'Tender beef slices stir-fried into a dynamic sweet, sour, and fiery chili reduction.' },
    { id: 'mp7', name: 'Beef with Kan Kung (Small)', category: 'meat-hut', price: 1500, desc: 'Savory beef combinations tossed crisp with premium fresh green Kan Kung leaves.' },
    { id: 'mp8', name: 'Paper Beef (Small)', category: 'meat-hut', price: 1300, desc: 'Ultra-thin sliced crisped beef dry-rubbed in cracked black pepper spices.' },
    { id: 'mp9', name: 'Beef Curry (Small)', category: 'meat-hut', price: 1300, desc: 'Richly authentic, slow-simmered dark roasted Sri Lankan village style beef curry.' },

    // --- SEA FOOD (category: seafood-vege) ---
    // Fish
    { id: 'sf1', name: 'Devilled Fish', category: 'seafood-vege', price: 1200, desc: 'Tender fish chunks tossed in spicy Sri Lankan devilled sauce, onions, and banana peppers.' },
    { id: 'sf2', name: 'Fish Finger', category: 'seafood-vege', price: 1250, desc: 'Crispy breaded fish fingers served with rich tartar dipping sauce.' },
    { id: 'sf3', name: 'Fish and Chips', category: 'seafood-vege', price: 1400, desc: 'Classic golden battered fish fillet served with French fries and tartar sauce.' },
    { id: 'sf4', name: 'Fish Singapore Style', category: 'seafood-vege', price: 1250, desc: 'Premium fish prepared in a zesty, aromatic Singaporean sweet & spicy style.' },
    // Prawns
    { id: 'sf5', name: 'Devilled Prawns', category: 'seafood-vege', price: 1400, desc: 'Fresh prawns cooked in hot devilled paste, chili flakes, tomatoes, and crisp onions.' },
    { id: 'sf6', name: 'Hot Butter Prawns', category: 'seafood-vege', price: 1400, desc: 'Crispy battered lagoon prawns tossed in a rich, buttery, spiced garlic glaze.' },
    { id: 'sf7', name: 'Garlic Prawns with Kan Kung', category: 'seafood-vege', price: 1500, desc: 'Fresh water prawns stir-fried with garlic, soy, and fresh green Kan Kung leaves.' },
    { id: 'sf8', name: 'Hot Garlic Prawns', category: 'seafood-vege', price: 1400, desc: 'Lagoon prawns cooked in a powerful, savory hot garlic chili reduction.' },
    // Cuttle Fish
    { id: 'sf9', name: 'Hot Butter Cuttle Fish', category: 'seafood-vege', price: 1300, desc: 'Traditional crispy fried cuttlefish rings tossed with butter, spring onions, and dry chilies.' },
    { id: 'sf10', name: 'Devilled Cuttle Fish', category: 'seafood-vege', price: 1300, desc: 'Lagoon cuttlefish rings cooked in a highly-spiced devilled chili tomato sauce.' },
    
    // Soups
    { id: 'sp1', name: 'Vegetable Sweet Corn Soup', category: 'soups', price: 350, desc: 'Classic thick sweet corn soup cooked with fresh garden vegetables.' },
    { id: 'sp2', name: 'Chicken Sweet Corn Soup', category: 'soups', price: 450, desc: 'Creamy sweet corn base with shredded chicken and egg drops.' },
    { id: 'sp3', name: 'Hot & Sour (Chicken)', category: 'soups', price: 500, desc: 'Spicy and tangy chicken broth with herbs and pepper kick.' },
    { id: 'sp4', name: 'Tom Yom Soup (Sea Food)', category: 'soups', price: 550, desc: 'Thai-inspired hot, sour, and fragrant soup loaded with seafood.' },
    { id: 'sp5', name: 'Soup Noodles (Sea Food)', category: 'soups', price: 550, desc: 'Comforting noodle broth served with freshly caught mixed seafood.' },

    // --- SALADS & VEGE ITEMS (category: seafood-vege) ---
    // Salads
    { id: 'sl1', name: 'Mix Salad', category: 'seafood-vege', price: 850, desc: 'Crunchy colorful garden salad featuring lettuce, tomatoes, cucumbers, carrots, and house dressing.' },
    { id: 'sl2', name: 'Cucumber Salad', category: 'seafood-vege', price: 450, desc: 'Cool sliced cucumbers tossed with vinegar, cracked pepper, and red onions.' },
    { id: 'sl3', name: 'Garden Fresh Vegetable Salad', category: 'seafood-vege', price: 550, desc: 'Assorted crisp organic vegetables drizzled with light olive oil and lime.' },
    { id: 'sl4', name: 'Tomato and Onion Salad', category: 'seafood-vege', price: 350, desc: 'Traditional salad of juicy red tomatoes and sliced onions with black pepper.' },
    // Vege
    { id: 'vg1', name: 'Vegetable Chopsuey', category: 'seafood-vege', price: 800, desc: 'Authentic Chinese-style stir-fried mixed garden vegetables in light savory glaze.' },
    { id: 'vg2', name: 'Hot Butter Mushroom', category: 'seafood-vege', price: 700, desc: 'Crispy fried local oyster mushrooms tossed in spicy chili butter sauce.' },
    { id: 'vg3', name: 'Garlic Kan Kung', category: 'seafood-vege', price: 600, desc: 'Fresh local water spinach sautéed with rich crushed garlic and soy.' },
    { id: 'vg4', name: 'Boiled Vegetable', category: 'seafood-vege', price: 700, desc: 'Chilled or warm portion of boiled carrots, beans, baby corn, and broccoli.' },

    // --- SANDWICH CORNER (category: sandwiches-pasta) ---
    { id: 'sd1', name: 'Vegetable Sandwich', category: 'sandwiches-pasta', price: 350, desc: 'Freshly toasted vegetable sandwich, served with crispy golden French fries.' },
    { id: 'sd2', name: 'Chicken Sandwich', category: 'sandwiches-pasta', price: 450, desc: 'Toasted sandwich stuffed with spiced shredded chicken breast, served with French fries.' },
    { id: 'sd3', name: 'Cheese & Tomato Sandwich', category: 'sandwiches-pasta', price: 550, desc: 'Grilled sandwich with melted cheddar cheese and juicy fresh tomatoes, served with French fries.' },
    { id: 'sd4', name: 'Club Sandwich', category: 'sandwiches-pasta', price: 850, desc: 'Triple-decker sandwich loaded with chicken, fried egg, cheese, and salad greens, served with French fries.' },
    { id: 'sd5', name: 'Toast with Butter & Jam', category: 'sandwiches-pasta', price: 300, desc: 'Perfectly toasted white bread slices served with premium butter and sweet fruit jam.' },

    // --- FRIED NOODLES (category: fried-noodles) ---
    { id: 'nd1', name: 'Vegetable Fried Noodles (Small)', category: 'fried-noodles', price: 450, desc: 'Stir-fried fine noodles combined with farm-fresh garden matchstick vegetables.' },
    { id: 'nd2', name: 'Vegetable Fried Noodles (Large)', category: 'fried-noodles', price: 600, desc: 'Large wok-seared vegetable noodles layout.' },
    { id: 'nd3', name: 'Egg Fried Noodles (Small)', category: 'fried-noodles', price: 550, desc: 'Quick-tossed noodles with premium scrambled eggs and savory sauce.' },
    { id: 'nd4', name: 'Egg Fried Noodles (Large)', category: 'fried-noodles', price: 700, desc: 'Classic sharing layout of savory egg noodles.' },
    { id: 'nd5', name: 'Chicken Fried Noodles (Small)', category: 'fried-noodles', price: 600, desc: 'Savory stir-fried noodles mixed with marinated chicken shreds.' },
    { id: 'nd6', name: 'Chicken Fried Noodles (Large)', category: 'fried-noodles', price: 800, desc: 'Wok-cooked rich chicken noodles platter.' },
    { id: 'nd7', name: 'Mix Fried Noodles (Small)', category: 'fried-noodles', price: 800, desc: 'Medley of chicken, beef, seafood, and eggs over a high-flame noodle toss.' },
    { id: 'nd8', name: 'Mix Fried Noodles (Large)', category: 'fried-noodles', price: 1000, desc: 'Supreme master combination layout of mixed protein fried noodles.' },
    { id: 'nd9', name: 'Beef Fried Noodles (Small)', category: 'fried-noodles', price: 800, desc: 'Tender seasoned beef strips tossed with authentic quick-cooked wheat noodles.' },
    { id: 'nd10', name: 'Beef Fried Noodles (Large)', category: 'fried-noodles', price: 1000, desc: 'Large savory, saucy beef noodles plate.' },
    { id: 'nd11', name: 'Fish Fried Noodles (Small)', category: 'fried-noodles', price: 700, desc: 'Noodles skillfully tossed with seasoned crispy pieces of select fresh fish.' },
    { id: 'nd12', name: 'Fish Fried Noodles (Large)', category: 'fried-noodles', price: 900, desc: 'Large platter layout of comforting fish noodles.' },
    { id: 'nd13', name: 'Prawns Fried Noodles (Small)', category: 'fried-noodles', price: 700, desc: 'Premium prawns stir-fried into a savory garlic soy noodle base.' },
    { id: 'nd14', name: 'Prawns Fried Noodles (Large)', category: 'fried-noodles', price: 900, desc: 'Richly portioned wok fried prawns noodles.' },
    { id: 'nd15', name: 'Korean Ramen', category: 'fried-noodles', price: 800, desc: 'Spicy Korean style broth noodles packed with rich umami flavours.' },
    { id: 'nd16', name: 'Sea Food Fried Noodles (Small)', category: 'fried-noodles', price: 800, desc: 'Savory coastal style seafood blend tossed with soft noodles.' },
    { id: 'nd17', name: 'Sea Food Fried Noodles (Large)', category: 'fried-noodles', price: 1000, desc: 'Large sharing layout of premium marine catch fried noodles.' },
    { id: 'nd18', name: 'Mie Goreng Noodles (Small)', category: 'fried-noodles', price: 750, desc: 'Indonesian style spicy stir-fried street noodles with spicy seasonings.' },
    { id: 'nd19', name: 'Mie Goreng Noodles (Large)', category: 'fried-noodles', price: 1000, desc: 'Large authentic saucy Mie Goreng platter.' },

    // --- PASTA (category: sandwiches-pasta) ---
    { id: 'pt1', name: 'Chicken Pasta', category: 'sandwiches-pasta', price: 750, desc: 'Pasta tossed with tender shredded chicken in a savory, aromatic sauce.' },
    { id: 'pt2', name: 'Cheese Pasta', category: 'sandwiches-pasta', price: 800, desc: 'Rich, creamy pasta loaded with melted mozzarella and cheddar cheese.' },
    { id: 'pt3', name: 'Chicken Cheese Pasta', category: 'sandwiches-pasta', price: 1000, desc: 'Premium pasta combining tender savory chicken and thick melted cheese sauce.' },
    { id: 'pt4', name: 'Spaghetti Bolognese', category: 'sandwiches-pasta', price: 1000, desc: 'Spaghetti pasta topped with a traditional slow-simmered rich beef Bolognese sauce.' },

    // --- DESSERT HUT (category: desserts) ---
    { id: 'ds1', name: 'Choice of Ice Cream', category: 'desserts', price: 250, desc: 'Creamy high-quality scoop of vanilla, chocolate, or strawberry ice cream.' },
    { id: 'ds2', name: 'Fresh Fruit Salad', category: 'desserts', price: 250, desc: 'Assorted seasonal fresh tropical fruits tossed in natural juices.' },
    { id: 'ds3', name: 'Fruit Salad with Ice Cream', category: 'desserts', price: 300, desc: 'Tropical fresh fruit salad topped with a rich scoop of your choice of ice cream.' },
    { id: 'ds4', name: 'Cream Caramel', category: 'desserts', price: 200, desc: 'Silky smooth baked custard topped with rich amber caramel syrup.' },
    { id: 'ds5', name: 'Curd with Honey', category: 'desserts', price: 300, desc: 'Traditional buffalo curd served chilled with sweet Sri Lankan kithul honey.' },
    { id: 'ds6', name: 'Fruit Platter', category: 'desserts', price: 400, desc: 'Artfully sliced platter of seasonal papaya, watermelon, pineapple, and bananas.' },
    { id: 'ds7', name: 'Wattalappan', category: 'desserts', price: 200, desc: 'Authentic rich Sri Lankan jaggery coconut custard with cardamoms and cashews.' },

    // --- DRINKS & JUICE BAR (category: juice-bar) ---
    // Hot Beverages
    { id: 'hb1', name: 'Plain Tea', category: 'juice-bar', price: 50, desc: 'Freshly brewed aromatic plain Ceylon black tea.' },
    { id: 'hb2', name: 'Milk Tea', category: 'juice-bar', price: 200, desc: 'Traditional rich pulled Ceylon milk tea.' },
    { id: 'hb3', name: 'Coffee', category: 'juice-bar', price: 150, desc: 'Freshly brewed aromatic black coffee.' },
    { id: 'hb4', name: 'Nescafe', category: 'juice-bar', price: 100, desc: 'Premium classic instant Nescafe blend.' },
    { id: 'hb5', name: 'Nesc Tea', category: 'juice-bar', price: 100, desc: 'Instant Nescafe milk tea blend.' },
    // Mojitos
    { id: 'jb1', name: 'Lime Mojito', category: 'juice-bar', price: 450, desc: 'Refreshing mocktail with fresh lime, mint leaves, and sparkling soda.' },
    { id: 'jb2', name: 'Mint Mojito', category: 'juice-bar', price: 500, desc: 'Cooling sparkling drink with rich fresh mint extract, lime, and crushed ice.' },
    { id: 'jb3', name: 'Orange Mojito', category: 'juice-bar', price: 650, desc: 'Citrusy sparkling mocktail with sweet fresh orange juice, lime, and mint.' },
    { id: 'jb4', name: 'Classic Mojito', category: 'juice-bar', price: 600, desc: 'Traditional mocktail featuring clean lime juice, muddled mint, and sugar cane syrup.' },
    // Lassis
    { id: 'jb5', name: 'Mango Lassi', category: 'juice-bar', price: 550, desc: 'Creamy yogurt beverage blended with sweet ripe mango pulp.' },
    { id: 'jb6', name: 'Banana Lassi', category: 'juice-bar', price: 550, desc: 'Smooth yogurt-based traditional drink infused with sweet bananas.' },
    { id: 'jb7', name: 'Chocolate Lassi', category: 'juice-bar', price: 650, desc: 'Creamy yogurt blend infused with rich Dutch cocoa and chocolate syrup.' },
    // Fresh Juices (Add Ice Cream + LKR 50)
    { id: 'jb8', name: 'Fresh Mango Juice', category: 'juice-bar', price: 250, desc: 'Thick, sweet fresh juice blended from ripe Sri Lankan mangoes.' },
    { id: 'jb9', name: 'Fresh Pineapple Juice', category: 'juice-bar', price: 300, desc: 'Freshly extracted zesty and sweet pineapple juice.' },
    { id: 'jb10', name: 'Fresh Orange Juice', category: 'juice-bar', price: 300, desc: 'Freshly squeezed vitamin-rich orange juice.' },
    { id: 'jb11', name: 'Fresh Papaya Juice', category: 'juice-bar', price: 250, desc: 'Silky smooth fresh juice blended from ripe sweet papaya.' },
    { id: 'jb12', name: 'Fresh Lime Juice', category: 'juice-bar', price: 300, desc: 'Tangy and refreshing freshly squeezed lime juice with ice.' },
    { id: 'jb13', name: 'Mix Fruit Juice', category: 'juice-bar', price: 300, desc: 'Delicious blend of multiple fresh tropical seasonal fruits.' },
    { id: 'jb14', name: 'Watermelon Juice', category: 'juice-bar', price: 200, desc: 'Sweet, hydrating, freshly crushed watermelon juice.' },
    { id: 'jb15', name: 'Nelly Juice', category: 'juice-bar', price: 250, desc: 'Traditional health-boosting fresh Gooseberry (Nelli) juice.' },
    { id: 'jb16', name: 'Mint Lime Juice', category: 'juice-bar', price: 350, desc: 'Zesty fresh lime juice blended with cooling fresh mint leaves.' },
    { id: 'jb17', name: 'Carrot Juice', category: 'juice-bar', price: 250, desc: 'Freshly extracted sweet carrot juice, packed with vitamins.' },
    // Classic Milk Shakes
    { id: 'jb18', name: 'Vanilla Milk Shake', category: 'juice-bar', price: 300, desc: 'Creamy milk shake blended with premium vanilla bean ice cream.' },
    { id: 'jb19', name: 'Chocolate Milk Shake', category: 'juice-bar', price: 350, desc: 'Rich milk shake blended with delicious chocolate ice cream and cocoa syrup.' },
    { id: 'jb20', name: 'Strawberry Milk Shake', category: 'juice-bar', price: 350, desc: 'Sweet, creamy shake blended with strawberries and premium ice cream.' },
    { id: 'jb21', name: 'Banana Milk Shake', category: 'juice-bar', price: 400, desc: 'Thick, healthy shake made with ripe bananas and fresh milk.' },
    { id: 'jb22', name: 'Caramel & Coffee Milk Shake', category: 'juice-bar', price: 500, desc: 'Rich milk shake blending fresh coffee espresso, sweet caramel, and vanilla ice cream.' },
    { id: 'jb23', name: 'Oreo Chocolate Milk Shake', category: 'juice-bar', price: 700, desc: 'Ultimate indulgence shake blended with Oreo cookies, chocolate syrup, and ice cream.' }
];

const PACKAGE_RATES = {
    'Silver Spice': 3500,
    'Golden Heritage': 5000,
    'Royal Ceylon': 7500
};

// --- Application Core State ---
let APP_STATE = {
    orders: [],        // Standard dine-in/takeaway orders
    bulkOrders: [],    // Large event catering bookings
    promotions: [],    // AI generated & active coupons
    cart: [],          // Active standard order cart
    selectedOrder: null, // Order currently viewed in Invoice Generator
    activePromoCode: null, // Deployed discount applied to current cart
    serverConnected: false
};

const API_BASE = 'http://localhost:8080/api';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTimeClock();
    initNavigation();
    initMenuRenderer();
    initCartHandlers();
    initBulkOrderCalculator();
    initAIPromoter();
    initInvoiceLoader();
    initSawanLightbox();
    
    // Load local cache first (ensures instant offline visual rendering)
    loadLocalCache();
    renderDashboard();
    renderBulkOrders();
    
    // Attempt handshake connection with Java Backend
    attemptBackendSync();
});

// --- Dynamic Time Display ---
function initTimeClock() {
    const timeEl = document.getElementById('live-time');
    const dateEl = document.getElementById('live-date');
    
    function updateClock() {
        const now = new Date();
        timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    updateClock();
    setInterval(updateClock, 1000);
}

// --- Navigation Controller (SPA Router) ---
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.app-section');
    const titleEl = document.getElementById('current-section-title');
    const descEl = document.getElementById('current-section-desc');

    const SECTION_METADATA = {
        'dashboard-section': { title: 'Dashboard Overview', desc: 'Key performance and restaurant operations metrics.' },
        'orders-section': { title: 'Order Management', desc: 'Place standard dine-in or takeaway customer orders.' },
        'bulk-section': { title: 'Bulk Event Booking', desc: 'Manage large corporate catering, banquets, and customized heritage menus.' },
        'invoices-section': { title: 'Invoice Generator', desc: 'Generate and print branded billing statements for standard & bulk orders.' },
        'ai-section': { title: 'AI Promotion Hub', desc: 'Optimize menu campaigns, generate cultural copy, and deploy promo coupon codes.' },
        'daily-sales-section': { title: 'Daily Sales Summary', desc: 'Item-wise breakdown of all meals sold today — quantities, revenue, and trends.' }
    };

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetSectionId = item.getAttribute('data-section');
            
            // Switch navigation highlights
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Show target section
            sections.forEach(sec => sec.classList.remove('active'));
            document.getElementById(targetSectionId).classList.add('active');

            // Update header text
            const meta = SECTION_METADATA[targetSectionId];
            titleEl.textContent = meta.title;
            descEl.textContent = meta.desc;

            // Trigger dashboard rendering refresh
            if (targetSectionId === 'dashboard-section') {
                renderDashboard();
            } else if (targetSectionId === 'invoices-section') {
                updateInvoiceSelector();
            } else if (targetSectionId === 'daily-sales-section') {
                // Pre-set today's date if not already set
                const picker = document.getElementById('sales-date-picker');
                if (!picker.value) {
                    picker.value = new Date().toISOString().slice(0, 10);
                }
                renderDailySummary();
            }
        });
    });
}

// --- Menu Rendering & Category Filters ---
function initMenuRenderer() {
    const container = document.getElementById('menu-items-container');
    const categoryButtons = document.querySelectorAll('.category-btn');

    function renderMenuItems(filterCategory = 'all') {
        container.innerHTML = '';
        const items = filterCategory === 'all' 
            ? CEYLON_MENU 
            : CEYLON_MENU.filter(item => item.category === filterCategory);

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-item-card';
            card.innerHTML = `
                <div>
                    <div class="menu-item-name">${item.name}</div>
                    <div class="menu-item-description" style="margin-top: 4px;">${item.desc}</div>
                </div>
                <div class="menu-item-footer">
                    <span class="menu-item-price">LKR ${item.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-id="${item.id}">+</button>
                </div>
            `;
            
            // Clicking card or button adds to cart
            card.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(item.id);
            });
            card.addEventListener('click', () => addToCart(item.id));
            
            container.appendChild(card);
        });
    }

    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMenuItems(btn.getAttribute('data-category'));
        });
    });

    renderMenuItems(); // Initial render
}

// --- Standard Order Cart Logic ---
function initCartHandlers() {
    const placeOrderBtn = document.getElementById('place-order-btn');
    const clearOrderBtn = document.getElementById('clear-order-btn');
    const applyCouponBtn = document.getElementById('apply-coupon-btn');
    const couponInput = document.getElementById('order-coupon-input');
    const couponFeedback = document.getElementById('coupon-feedback');

    // Clear Order Cart
    clearOrderBtn.addEventListener('click', () => {
        APP_STATE.cart = [];
        APP_STATE.activePromoCode = null;
        couponInput.value = '';
        couponFeedback.textContent = '';
        updateCartUI();
    });

    // Apply Coupon Code
    applyCouponBtn.addEventListener('click', () => {
        const code = couponInput.value.trim().toUpperCase();
        if (!code) {
            couponFeedback.textContent = 'Please enter a code.';
            couponFeedback.style.color = 'var(--danger)';
            return;
        }

        // Validate against deployed promotions list
        const matchedPromo = APP_STATE.promotions.find(p => p.code === code);
        
        if (matchedPromo) {
            APP_STATE.activePromoCode = matchedPromo;
            couponFeedback.textContent = `Promo Code "${code}" applied successfully! (15% Off Total)`;
            couponFeedback.style.color = 'var(--success)';
            updateCartUI();
        } else {
            couponFeedback.textContent = 'Invalid promo code or expired coupon.';
            couponFeedback.style.color = 'var(--danger)';
            APP_STATE.activePromoCode = null;
            updateCartUI();
        }
    });

    // Submit Order Handlers
    placeOrderBtn.addEventListener('click', () => {
        if (APP_STATE.cart.length === 0) {
            alert('Your cart is empty! Select items before submitting.');
            return;
        }

        const subtotal = APP_STATE.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
        let discount = 0;
        if (APP_STATE.activePromoCode) {
            discount = subtotal * 0.15; // 15% discount
        }
        const total = subtotal - discount;
        const customerRef = '';

        // Create standard order object
        const orderId = `STAND-${Date.now().toString().slice(-6)}`;
        const newOrder = {
            id: orderId,
            type: 'Standard',
            customer: customerRef,
            items: [...APP_STATE.cart],
            subtotal,
            discount,
            promoApplied: APP_STATE.activePromoCode ? APP_STATE.activePromoCode.code : null,
            total,
            status: 'Preparing',
            date: new Date().toISOString()
        };

        // Add to state and save
        APP_STATE.orders.unshift(newOrder);
        // Auto-assign to Invoice Viewer
        APP_STATE.selectedOrder = newOrder;
        
        // Save
        saveState();
        renderDailySummary();
        
        // Clear cart
        APP_STATE.cart = [];
        APP_STATE.activePromoCode = null;
        couponInput.value = '';
        couponFeedback.textContent = '';
        
        updateCartUI();
        
        // Push REST API update
        postToServer('/orders', newOrder);
        
        // Redirect to Invoice page
        document.querySelector('[data-section="invoices-section"]').click();
        viewInvoice(newOrder);
    });
}

function addToCart(itemId) {
    const menuItem = CEYLON_MENU.find(m => m.id === itemId);
    if (!menuItem) return;

    const existingCartItem = APP_STATE.cart.find(c => c.id === itemId);
    if (existingCartItem) {
        existingCartItem.qty++;
    } else {
        APP_STATE.cart.push({
            id: menuItem.id,
            name: menuItem.name,
            price: menuItem.price,
            qty: 1
        });
    }
    updateCartUI();
}

function adjustCartQty(itemId, delta) {
    const cartItem = APP_STATE.cart.find(c => c.id === itemId);
    if (!cartItem) return;

    cartItem.qty += delta;
    if (cartItem.qty <= 0) {
        APP_STATE.cart = APP_STATE.cart.filter(c => c.id !== itemId);
    }
    updateCartUI();
}

function updateCartUI() {
    const listContainer = document.getElementById('cart-items-list');
    const emptyMsg = document.getElementById('cart-empty-msg');
    
    const subtotalEl = document.getElementById('cart-subtotal');
    const discountRow = document.getElementById('cart-discount-row');
    const discountEl = document.getElementById('cart-discount');
    const totalEl = document.getElementById('cart-grand-total');

    if (APP_STATE.cart.length === 0) {
        listContainer.style.display = 'none';
        emptyMsg.style.display = 'flex';
        subtotalEl.textContent = 'LKR 0.00';
        discountRow.style.display = 'none';
        totalEl.textContent = 'LKR 0.00';
        return;
    }

    listContainer.style.display = 'flex';
    emptyMsg.style.display = 'none';
    listContainer.innerHTML = '';

    let subtotal = 0;
    APP_STATE.cart.forEach(item => {
        subtotal += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item-row';
        div.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-rate">LKR ${item.price.toFixed(2)} Each</div>
            </div>
            <div class="cart-qty-controls">
                <button onclick="adjustCartQty('${item.id}', -1)">-</button>
                <span>${item.qty}</span>
                <button onclick="adjustCartQty('${item.id}', 1)">+</button>
            </div>
        `;
        listContainer.appendChild(div);
    });

    let discount = 0;

    if (APP_STATE.activePromoCode) {
        discount = subtotal * 0.15;
        discountRow.style.display = 'flex';
        discountEl.textContent = `- LKR ${discount.toFixed(2)}`;
    } else {
        discountRow.style.display = 'none';
    }

    const grandTotal = subtotal - discount;

    subtotalEl.textContent = `LKR ${subtotal.toFixed(2)}`;
    totalEl.textContent = `LKR ${grandTotal.toFixed(2)}`;
}

// --- Bulk Event Booking Calculations ---
function initBulkOrderCalculator() {
    const clientNameInput = document.getElementById('bulk-client-name');
    const eventTypeSelect = document.getElementById('bulk-event-type');
    const tableSelect = document.getElementById('bulk-table');
    const eventDateInput = document.getElementById('bulk-date');
    const eventTimeInput = document.getElementById('bulk-time');
    const notesInput = document.getElementById('bulk-notes');
    const servicePctInput = document.getElementById('bulk-service-pct');
    const discountInput = document.getElementById('bulk-discount');
    const paymentMethodSelect = document.getElementById('bulk-payment-method');
    const downpaymentInput = document.getElementById('bulk-downpayment-input');
    const downpaymentGroup = document.getElementById('bulk-downpayment-group');
    
    const foodContainer = document.getElementById('bulk-food-items-container');
    const addRowBtn = document.getElementById('add-food-row-btn');
    const saveBulkBtn = document.getElementById('save-bulk-order-btn');
    const cancelBulkBtn = document.getElementById('cancel-bulk-order-btn');

    const CATEGORY_NAMES = {
        'set-menus': 'Rice & Set Menus',
        'fried-rice': 'Fried Rice',
        'quick-bytes': 'Quick Bytes & Eggs',
        'koththu-hut': 'Kottu Hut',
        'meat-hut': 'Meat Hut',
        'seafood-vege': 'Seafood & Vege',
        'soups': 'Soups',
        'sandwiches-pasta': 'Sandwiches & Pasta',
        'fried-noodles': 'Fried Noodles',
        'desserts': 'Dessert Hut',
        'juice-bar': 'Drinks & Juice Bar'
    };

    // Make the bulk order calendar show only future dates
    if (eventDateInput) {
        const today = new Date().toISOString().split('T')[0];
        eventDateInput.min = today;
    }

    let calculatedBulkTotal = 0;

    function addFoodRow(selectedCategory = '', selectedItemId = '', qty = 1) {
        const row = document.createElement('div');
        row.className = 'food-row';
        row.style.display = 'grid';
        row.style.gridTemplateColumns = '2.2fr 2.2fr 1fr 1.2fr 40px';
        row.style.gap = '10px';
        row.style.alignItems = 'center';
        row.style.marginBottom = '10px';

        // 1. Category Select
        const catSelect = document.createElement('select');
        catSelect.className = 'form-select';
        catSelect.style.padding = '8px';
        catSelect.innerHTML = '<option value="">-- Category --</option>';
        Object.entries(CATEGORY_NAMES).forEach(([key, name]) => {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = name;
            if (key === selectedCategory) opt.selected = true;
            catSelect.appendChild(opt);
        });

        // 2. Item Select
        const itemSelect = document.createElement('select');
        itemSelect.className = 'form-select';
        itemSelect.style.padding = '8px';
        itemSelect.innerHTML = '<option value="">-- Item --</option>';

        // 3. Qty Input
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.className = 'form-control';
        qtyInput.style.padding = '8px';
        qtyInput.placeholder = 'Qty';
        qtyInput.value = qty;
        qtyInput.min = 1;

        // 4. Unit Price Input
        const priceInput = document.createElement('input');
        priceInput.type = 'number';
        priceInput.className = 'form-control';
        priceInput.style.padding = '8px';
        priceInput.placeholder = 'Price';
        priceInput.readOnly = true;

        // 5. Delete Button
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.className = 'btn btn-outline';
        delBtn.style.padding = '8px';
        delBtn.style.height = '38px';
        delBtn.style.display = 'flex';
        delBtn.style.alignItems = 'center';
        delBtn.style.justifyContent = 'center';
        delBtn.style.color = 'var(--danger)';
        delBtn.style.borderColor = 'rgba(239, 68, 68, 0.2)';
        delBtn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>`;

        function updateItemsDropdown() {
            const cat = catSelect.value;
            itemSelect.innerHTML = '<option value="">-- Item --</option>';
            priceInput.value = '';
            
            if (cat) {
                const filtered = CEYLON_MENU.filter(item => item.category === cat);
                filtered.forEach(item => {
                    const opt = document.createElement('option');
                    opt.value = item.id;
                    opt.textContent = `${item.name} (LKR ${item.price})`;
                    if (item.id === selectedItemId) opt.selected = true;
                    itemSelect.appendChild(opt);
                });
            }
            updatePrice();
        }

        function updatePrice() {
            const itemId = itemSelect.value;
            if (itemId) {
                const item = CEYLON_MENU.find(m => m.id === itemId);
                if (item) {
                    priceInput.value = item.price;
                }
            } else {
                priceInput.value = '';
            }
            calculateBulk();
        }

        catSelect.addEventListener('change', updateItemsDropdown);
        itemSelect.addEventListener('change', updatePrice);
        qtyInput.addEventListener('input', calculateBulk);
        
        delBtn.addEventListener('click', () => {
            row.remove();
            calculateBulk();
        });

        row.appendChild(catSelect);
        row.appendChild(itemSelect);
        row.appendChild(qtyInput);
        row.appendChild(priceInput);
        row.appendChild(delBtn);

        foodContainer.appendChild(row);

        if (selectedCategory) {
            updateItemsDropdown();
        }
    }

    function calculateBulk() {
        let subtotal = 0;
        const rows = foodContainer.querySelectorAll('.food-row');
        
        rows.forEach(row => {
            const itemSelect = row.children[1];
            const qtyInput = row.children[2];
            const priceInput = row.children[3];
            
            const itemId = itemSelect.value;
            const qty = parseInt(qtyInput.value) || 0;
            const price = parseFloat(priceInput.value) || 0;
            
            if (itemId && qty > 0) {
                subtotal += qty * price;
            }
        });

        const servicePct = parseFloat(servicePctInput.value) || 0;
        const discount = parseFloat(discountInput.value) || 0;
        
        const serviceCharge = subtotal * (servicePct / 100);
        calculatedBulkTotal = Math.max(0, subtotal + serviceCharge - discount);

        document.getElementById('bulk-calc-subtotal').textContent = `LKR ${subtotal.toFixed(2)}`;
        document.getElementById('bulk-calc-service').textContent = `LKR ${serviceCharge.toFixed(2)}`;
        document.getElementById('bulk-calc-total').textContent = `LKR ${calculatedBulkTotal.toFixed(2)}`;

        const paymentMethod = paymentMethodSelect.value;
        const downpaymentSummaryRow = document.getElementById('bulk-downpayment-summary-row');
        const balanceSummaryRow = document.getElementById('bulk-balance-summary-row');

        if (paymentMethod === 'Advance Payment') {
            downpaymentGroup.style.display = 'block';
            if (downpaymentSummaryRow) downpaymentSummaryRow.style.display = 'flex';
            if (balanceSummaryRow) balanceSummaryRow.style.display = 'flex';
            
            const downpaymentVal = parseFloat(downpaymentInput.value) || 0;
            const balance = Math.max(0, calculatedBulkTotal - downpaymentVal);
            
            document.getElementById('bulk-calc-downpayment').textContent = `LKR ${downpaymentVal.toFixed(2)}`;
            document.getElementById('bulk-calc-balance').textContent = `LKR ${balance.toFixed(2)}`;
        } else {
            downpaymentGroup.style.display = 'none';
            if (downpaymentSummaryRow) downpaymentSummaryRow.style.display = 'none';
            if (balanceSummaryRow) balanceSummaryRow.style.display = 'none';
            
            document.getElementById('bulk-calc-downpayment').textContent = 'LKR 0.00';
            document.getElementById('bulk-calc-balance').textContent = 'LKR 0.00';
        }
    }

    if (addRowBtn) {
        addRowBtn.addEventListener('click', () => addFoodRow());
    }

    if (servicePctInput) servicePctInput.addEventListener('input', calculateBulk);
    if (discountInput) discountInput.addEventListener('input', calculateBulk);
    if (paymentMethodSelect) paymentMethodSelect.addEventListener('change', calculateBulk);
    if (downpaymentInput) downpaymentInput.addEventListener('input', calculateBulk);

    if (cancelBulkBtn) {
        cancelBulkBtn.addEventListener('click', () => {
            clientNameInput.value = '';
            eventTypeSelect.value = 'Party';
            tableSelect.value = 'Table 1';
            eventDateInput.value = '';
            eventTimeInput.value = '';
            notesInput.value = '';
            servicePctInput.value = '10';
            discountInput.value = '0';
            paymentMethodSelect.value = 'Full Payment';
            downpaymentInput.value = '';
            foodContainer.innerHTML = '';
            addFoodRow();
            calculateBulk();
        });
    }

    if (saveBulkBtn) {
        saveBulkBtn.addEventListener('click', () => {
            const client = clientNameInput.value.trim();
            const eventType = eventTypeSelect.value;
            const table = tableSelect.value;
            const eventDate = eventDateInput.value;
            const eventTime = eventTimeInput.value;
            const notes = notesInput.value.trim();
            const servicePct = parseFloat(servicePctInput.value) || 0;
            const discount = parseFloat(discountInput.value) || 0;
            const paymentMethod = paymentMethodSelect.value;
            const downpayment = parseFloat(downpaymentInput.value) || 0;

            if (!client) {
                alert('Please enter a Customer / Client Name.');
                return;
            }
            if (!eventDate) {
                alert('Please select a Delivery Date.');
                return;
            }
            if (!eventTime) {
                alert('Please select a Delivery Time.');
                return;
            }

            const selectedItems = [];
            let itemsSubtotal = 0;
            const rows = foodContainer.querySelectorAll('.food-row');
            
            rows.forEach(row => {
                const itemSelect = row.children[1];
                const qtyInput = row.children[2];
                const priceInput = row.children[3];
                
                const itemId = itemSelect.value;
                const qty = parseInt(qtyInput.value) || 0;
                const price = parseFloat(priceInput.value) || 0;
                
                if (itemId && qty > 0) {
                    const item = CEYLON_MENU.find(m => m.id === itemId);
                    selectedItems.push({
                        id: itemId,
                        name: item ? item.name : 'Unknown',
                        price: price,
                        qty: qty
                    });
                    itemsSubtotal += qty * price;
                }
            });

            if (selectedItems.length === 0) {
                alert('Please add at least one valid Food/Beverage item.');
                return;
            }

            const serviceCharge = itemsSubtotal * (servicePct / 100);
            const finalPrice = Math.max(0, itemsSubtotal + serviceCharge - discount);

            if (paymentMethod === 'Advance Payment' && downpayment > finalPrice) {
                alert('Down payment amount cannot exceed the final price.');
                return;
            }

            let paymentStatus = 'FULLY PAID';
            if (paymentMethod === 'Advance Payment') {
                paymentStatus = downpayment >= finalPrice ? 'FULLY PAID' : 'ADVANCE PAID';
            }

            const bulkId = `BULK-${Date.now().toString().slice(-6)}`;
            const newBulkOrder = {
                id: bulkId,
                type: 'Event-Catering',
                clientName: client,
                eventType: eventType,
                table: table,
                eventDate: eventDate,
                eventTime: eventTime,
                notes: notes,
                items: selectedItems,
                subtotal: itemsSubtotal,
                servicePct: servicePct,
                serviceCharge: serviceCharge,
                discount: discount,
                paymentMethod: paymentMethod,
                downpayment: downpayment,
                total: finalPrice,
                status: paymentStatus,
                date: new Date().toISOString()
            };

            APP_STATE.bulkOrders.unshift(newBulkOrder);
            saveState();
            renderDailySummary();
            renderBulkOrders();
            renderDashboard();
            postToServer('/bulk-orders', newBulkOrder);

            alert(`Bulk Booking ${bulkId} saved successfully!`);
            
            // Auto-assign to Invoice Viewer
            APP_STATE.selectedOrder = newBulkOrder;
            
            // Reset Inputs
            clientNameInput.value = '';
            eventTypeSelect.value = 'Party';
            tableSelect.value = 'Table 1';
            eventDateInput.value = '';
            eventTimeInput.value = '';
            notesInput.value = '';
            servicePctInput.value = '10';
            discountInput.value = '0';
            paymentMethodSelect.value = 'Full Payment';
            downpaymentInput.value = '';
            foodContainer.innerHTML = '';
            addFoodRow();
            calculateBulk();

            // Redirect to Invoice page
            document.querySelector('[data-section="invoices-section"]').click();
            viewInvoice(newBulkOrder);
        });
    }

    // Initialize with one empty row
    addFoodRow();
    calculateBulk();
}

// --- AI Promotion Campaign Hub Engine ---
function initAIPromoter() {
    const generateBtn = document.getElementById('generate-campaign-btn');
    const outputBox = document.getElementById('ai-output-box');
    const codeDisplay = document.getElementById('generated-promo-code');
    const deployBtn = document.getElementById('deploy-campaign-btn');

    let transientCode = null;
    let transientTarget = null;

    if (!generateBtn) return;

    generateBtn.addEventListener('click', () => {
        const contextType = document.getElementById('ai-campaign-context').value;
        transientTarget = contextType;

        const mockTemplates = {
            'Cultural Heritage Platter Placements': {
                code: 'CEYLONHERITAGE15',
                text: '🌸 "Discover the true taste of ancient island banquets!" Experience authentic Sri Lankan food expertly curated with standard-defining recipes. Enjoy handpicked cardamoms and locally sourced spices. Use code CEYLONHERITAGE15 for 15% off standard dining.'
            },
            'Weekend Sawan Festive Gatherings': {
                code: 'SAWANFEST2026',
                text: '🥘 "Gather around the authentic Sawan circle!" Bring families together with traditional culinary arrangements. Rice tossed in fragrant clarified ghee, accompanied by classic devilled side layers. Use code SAWANFEST2026 for a premium total calculation advantage.'
            },
            'Mid-Week Corporate Executive Dining': {
                code: 'COLOMBOCORP',
                text: '💼 "Elevate your mid-week corporate discussions." A sleek premium lunch format containing signature selection menus designed for productivity and high business energy levels. Deploy coupon code COLOMBOCORP to redeem 15% billing optimizations.'
            }
        };

        const result = mockTemplates[contextType];
        transientCode = result.code;

        outputBox.style.display = 'block';
        document.getElementById('ai-text-target').textContent = result.text;
        codeDisplay.textContent = result.code;
    });

    deployBtn.addEventListener('click', () => {
        if (!transientCode) return;

        // Check redundancy duplicates
        if (APP_STATE.promotions.some(p => p.code === transientCode)) {
            alert('This promotional code is already actively deployed.');
            return;
        }

        const newPromo = {
            code: transientCode,
            target: transientTarget,
            benefit: '15% Off Cart Checkout',
            active: true
        };

        APP_STATE.promotions.push(newPromo);
        saveState();
        renderPromotionsTable();
        alert(`Campaign optimization successfully deployed! Active Code: ${transientCode}`);
    });
}

function renderPromotionsTable() {
    const tbody = document.getElementById('deployed-promos-tbody');
    if (!tbody) return;

    if (APP_STATE.promotions.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" class="cart-empty" style="padding: 16px 0; font-size: 0.75rem;">No coupons active. Deploy campaign above to inject codes into standard billing.</td></tr>`;
        return;
    }

    tbody.innerHTML = '';
    APP_STATE.promotions.forEach((p, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><span class="qty-badge" style="font-size:0.75rem;">${p.code}</span></td>
            <td>${p.target}</td>
            <td>${p.benefit}</td>
            <td><span style="color:var(--success)">● Live</span></td>
            <td><button class="add-to-cart-btn" style="padding:2px 8px; background:var(--danger);" onclick="deletePromo(${idx})">&times;</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function deletePromo(index) {
    APP_STATE.promotions.splice(index, 1);
    saveState();
    renderPromotionsTable();
}

// --- Invoice Loader View Engine ---
function initInvoiceLoader() {
    const selector = document.getElementById('invoice-selector');
    const printBtn = document.getElementById('invoice-print-btn');
    const sampleBtn = document.getElementById('load-sample-invoice-btn');
    if (!selector || !printBtn) return;

    selector.addEventListener('change', () => {
        const selectedId = selector.value;
        if (!selectedId) return;

        const foundStandard = APP_STATE.orders.find(o => o.id === selectedId);
        if (foundStandard) {
            viewInvoice(foundStandard);
            return;
        }

        const foundBulk = APP_STATE.bulkOrders.find(b => b.id === selectedId);
        if (foundBulk) {
            viewInvoice(foundBulk);
        }
    });

    printBtn.addEventListener('click', () => {
        window.print();
    });

    if (sampleBtn) {
        sampleBtn.addEventListener('click', () => {
            loadSampleInvoice();
        });
    }
}

function updateInvoiceSelector() {
    const selector = document.getElementById('invoice-selector');
    if (!selector) return;

    selector.innerHTML = '<option value="">-- Choose Active Order / Booking Reference --</option>';
    
    // Populate standard orders
    if (APP_STATE.orders.length > 0) {
        const optGroupStd = document.createElement('optgroup');
        optGroupStd.label = 'Standard Billing Orders';
        APP_STATE.orders.forEach(o => {
            const opt = document.createElement('option');
            opt.value = o.id;
            opt.textContent = `${o.id} - ${o.customer} (LKR ${o.total.toFixed(2)})`;
            optGroupStd.appendChild(opt);
        });
        selector.appendChild(optGroupStd);
    }

    // Populate bulk orders
    if (APP_STATE.bulkOrders.length > 0) {
        const optGroupBulk = document.createElement('optgroup');
        optGroupBulk.label = 'Corporate Event Catering';
        APP_STATE.bulkOrders.forEach(b => {
            const opt = document.createElement('option');
            opt.value = b.id;
            opt.textContent = `${b.id} - ${b.clientName} (LKR ${b.total.toFixed(2)})`;
            optGroupBulk.appendChild(opt);
        });
        selector.appendChild(optGroupBulk);
    }
}

function viewInvoice(order) {
    const invSerial = document.getElementById('inv-serial');
    const invDate = document.getElementById('inv-date');
    const invBillingTo = document.getElementById('inv-billing-to');
    const invoiceItems = document.getElementById('invoice-items-tbody');
    const invSubtotal = document.getElementById('inv-subtotal');
    const invServiceRow = document.getElementById('inv-service-row');
    const invServiceLabel = document.getElementById('inv-service-label');
    const invService = document.getElementById('inv-service');
    const invDiscountRow = document.getElementById('inv-discount-row');
    const invDiscountLabel = document.getElementById('inv-discount-label');
    const invDiscount = document.getElementById('inv-discount');
    const invDepositRow = document.getElementById('inv-deposit-row');
    const invDeposit = document.getElementById('inv-deposit');
    const invGrandTotalLabel = document.getElementById('inv-grand-total-label');
    const invGrandTotal = document.getElementById('inv-grand-total');

    if (!invSerial || !invDate || !invBillingTo || !invoiceItems || !invSubtotal || !invGrandTotal) return;

    const isBulk = order.id && order.id.startsWith('BULK');
    const dateFormatted = order.date ? new Date(order.date).toLocaleString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', day: '2-digit', month: 'long', year: 'numeric' }) : new Date().toLocaleString();

    invSerial.textContent = order.id || 'INV-UNKNOWN';
    invDate.textContent = dateFormatted;
    invoiceItems.innerHTML = '';
    if (invServiceRow) invServiceRow.style.display = 'none';
    invDiscountRow.style.display = 'none';
    invDepositRow.style.display = 'none';
    invGrandTotalLabel.textContent = 'Total Amount Due';

    if (!isBulk) {
        let subtotal = 0;
        order.items.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td style="text-align:center;">${item.qty}</td>
                <td style="text-align:right;">${item.price.toFixed(2)}</td>
                <td style="text-align:right;">${(item.price * item.qty).toFixed(2)}</td>
            `;
            invoiceItems.appendChild(row);
            subtotal += item.price * item.qty;
        });

        invBillingTo.innerHTML = `Walk-in Guest<br>Table: Dine-In Service<br>Order Reference: #${order.id}`;
        invSubtotal.textContent = subtotal.toFixed(2);

        if (order.discount && order.discount > 0) {
            invDiscountRow.style.display = 'flex';
            invDiscountLabel.textContent = order.promoApplied ? `AI Promo Discount (${order.promoApplied})` : 'Discount Applied';
            invDiscount.textContent = `- LKR ${order.discount.toFixed(2)}`;
        }

        invGrandTotal.textContent = order.total.toFixed(2);
    } else {
        // Bulk items rendering
        if (order.items && order.items.length > 0) {
            order.items.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.name}</td>
                    <td style="text-align:center;">${item.qty}</td>
                    <td style="text-align:right;">${item.price.toFixed(2)}</td>
                    <td style="text-align:right;">${(item.price * item.qty).toFixed(2)}</td>
                `;
                invoiceItems.appendChild(row);
            });
        } else {
            // Fallback for legacy bulk bookings without items array
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>Catering Package Service: <strong>${order.package}</strong></td>
                <td style="text-align:center;">${order.guests}</td>
                <td style="text-align:right;">LKR ${PACKAGE_RATES[order.package].toFixed(2)}</td>
                <td style="text-align:right;">LKR ${order.total.toFixed(2)}</td>
            `;
            invoiceItems.appendChild(row);
        }

        invBillingTo.innerHTML = `<strong>${order.clientName || 'Corporate Client'}</strong><br>Event Type: ${order.eventType || 'N/A'}<br>Space: ${order.table || 'N/A'}<br>Delivery Date: ${order.eventDate ? new Date(order.eventDate).toLocaleDateString() : 'TBD'}<br>Time: ${order.eventTime || 'TBD'}<br>Booking Ref: #${order.id}`;
        
        invSubtotal.textContent = (order.subtotal || order.total).toFixed(2);

        if (invServiceRow && order.serviceCharge && order.serviceCharge > 0) {
            invServiceRow.style.display = 'flex';
            invServiceLabel.textContent = `Service Charge / Delivery (${order.servicePct || 0}%)`;
            invService.textContent = `LKR ${order.serviceCharge.toFixed(2)}`;
        }

        if (order.discount && order.discount > 0) {
            invDiscountRow.style.display = 'flex';
            invDiscountLabel.textContent = 'Discount Applied';
            invDiscount.textContent = `- LKR ${order.discount.toFixed(2)}`;
        }

        if (order.downpayment && order.downpayment > 0) {
            invDepositRow.style.display = 'flex';
            invDeposit.textContent = `- LKR ${order.downpayment.toFixed(2)}`;
            
            const remainingBalance = Math.max(0, order.total - order.downpayment);
            invGrandTotalLabel.textContent = 'Full Price to Receive';
            invGrandTotal.textContent = remainingBalance.toFixed(2);
        } else {
            invGrandTotalLabel.textContent = 'Total Amount Due';
            invGrandTotal.textContent = order.total.toFixed(2);
        }
    }
}

function loadSampleInvoice() {
    const sampleOrder = {
        id: 'SAMPLE-INV-001',
        date: new Date().toISOString(),
        items: [
            { name: 'Golden Kothu - Chicken (Large)', qty: 2, price: 1450 },
            { name: 'Egg Hopper Station Special', qty: 4, price: 180 },
            { name: 'Spiced Ceylon Ginger Tea', qty: 3, price: 320 }
        ],
        subtotal: 4580,
        discount: 0,
        total: 4580
    };
    viewInvoice(sampleOrder);
}

// --- Daily Sales Item-wise Summary Engine ---
function renderDailySummary() {
    const selectedDate = document.getElementById('sales-date-picker').value;
    const tableBody = document.getElementById('daily-sales-tbody');
    const totalQtyEl = document.getElementById('total-items-sold');
    const totalRevEl = document.getElementById('total-sales-revenue');

    if (!tableBody) return;
    tableBody.innerHTML = '';

    let itemMap = {};
    let grandQty = 0;
    let grandRevenue = 0;

    // Filter standard orders matching day
    const matchingOrders = APP_STATE.orders.filter(o => o.date && o.date.startsWith(selectedDate));
    
    matchingOrders.forEach(order => {
        order.items.forEach(item => {
            const key = item.id;
            if (!itemMap[key]) {
                const menuEntry = CEYLON_MENU.find(m => m.id === key);
                itemMap[key] = {
                    name: item.name,
                    category: menuEntry ? menuEntry.category : 'General',
                    unitPrice: item.price,
                    qty: 0,
                    revenue: 0
                };
            }
            itemMap[key].qty += item.qty;
            itemMap[key].revenue += item.price * item.qty;
            grandQty += item.qty;
            grandRevenue += item.price * item.qty;
        });
    });

    const sortedItems = Object.values(itemMap).sort((a, b) => b.qty - a.qty);

    if (sortedItems.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:20px; font-size:0.8rem;">No sales recorded for this date.</td></tr>`;
        totalQtyEl.textContent = '0 Meals';
        totalRevEl.textContent = 'LKR 0.00';
        return;
    }

    sortedItems.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><strong>${item.name}</strong></td>
            <td><span class="qty-badge" style="font-size:0.7rem; background:rgba(255,255,255,0.05); color:var(--text-secondary); border:none;">${item.category}</span></td>
            <td>${item.qty}</td>
            <td>LKR ${item.unitPrice.toFixed(2)}</td>
            <td style="color:var(--primary-gold);">LKR ${item.revenue.toFixed(2)}</td>
        `;
        tableBody.appendChild(tr);
    });

    totalQtyEl.textContent = `${grandQty} Meals`;
    totalRevEl.textContent = `LKR ${grandRevenue.toFixed(2)}`;

    // Render bulk orders
    const bulkBody = document.getElementById('daily-bulk-tbody');
    if (bulkBody) {
        bulkBody.innerHTML = '';
        const matchingBulk = APP_STATE.bulkOrders.filter(b => (b.eventDate === selectedDate) || (b.date && b.date.startsWith(selectedDate)));
        
        if (matchingBulk.length === 0) {
            bulkBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted); padding:20px; font-size:0.8rem;">No bulk orders for this date.</td></tr>`;
        } else {
            matchingBulk.forEach((b, idx) => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${idx + 1}</td>
                    <td><strong>${b.clientName}</strong></td>
                    <td>${b.guests}</td>
                    <td>${b.package}</td>
                    <td style="color:var(--primary-gold);">LKR ${(b.total || 0).toFixed(2)}</td>
                `;
                bulkBody.appendChild(tr);
            });
        }
    }
}

function exportSalesCSV() {
    const selectedDate = document.getElementById('sales-date-picker').value;
    let itemMap = {};

    APP_STATE.orders.filter(o => o.date && o.date.startsWith(selectedDate)).forEach(order => {
        order.items.forEach(item => {
            const key = item.id;
            if (!itemMap[key]) {
                const menuEntry = CEYLON_MENU.find(m => m.id === key);
                itemMap[key] = { name: item.name, category: menuEntry ? menuEntry.category : 'General', unitPrice: item.price, qty: 0, revenue: 0 };
            }
            itemMap[key].qty += item.qty;
            itemMap[key].revenue += item.price * item.qty;
        });
    });

    const rows = [['#', 'Item Name', 'Category', 'Qty Sold', 'Unit Price (LKR)', 'Total Revenue (LKR)']];
    Object.values(itemMap).sort((a, b) => b.qty - a.qty).forEach((item, idx) => {
        rows.push([idx + 1, item.name, item.category, item.qty, item.unitPrice.toFixed(2), item.revenue.toFixed(2)]);
    });

    // Add bulk orders
    rows.push([]);
    rows.push(['--- BULK / CATERING ORDERS ---']);
    rows.push(['#', 'Client', 'Guests', 'Package', 'Total (LKR)']);
    APP_STATE.bulkOrders
        .filter(b => (b.eventDate === selectedDate) || (b.date && b.date.startsWith(selectedDate)))
        .forEach((b, idx) => {
            rows.push([idx + 1, b.clientName, b.guests, b.package, (b.total || 0).toFixed(2)]);
        });

    const csvContent = rows.map(r => r.map(cell => `"${String(cell).replace(/\"/g, '\"\"')}"`).join(',')).join('\\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.setAttribute('download', `Ceylon_Culture_Sales_${selectedDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// --- Lightbox Sawan Controller ---
function initSawanLightbox() {
    const trigger = document.getElementById('view-sawan-btn');
    const lightbox = document.getElementById('sawan-lightbox');
    const closeBtn = document.getElementById('lightbox-close-btn');

    if (!trigger || !lightbox) return;

    trigger.addEventListener('click', () => {
        lightbox.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightbox.querySelector('.lightbox-content')) {
            lightbox.classList.remove('active');
        }
    });
}

// --- Bulk Order Render & Management Functions ---
function renderBulkOrders() {
    const tbody = document.getElementById('bulk-list-body');
    if (!tbody) return;

    if (APP_STATE.bulkOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="cart-empty">No bulk bookings currently registered.</td></tr>`;
        return;
    }

    tbody.innerHTML = '';
    APP_STATE.bulkOrders.forEach((b, index) => {
        const tr = document.createElement('tr');
        
        // Schedule display
        const dateStr = b.eventDate ? new Date(b.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'TBD';
        const timeStr = b.eventTime || 'TBD';
        const scheduleHtml = `
            <div style="display:flex; align-items:center; gap:6px; font-size:0.8rem;">
                <span>📅 ${dateStr}</span>
            </div>
            <div style="display:flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
                <span>🕒 ${timeStr}</span>
            </div>
        `;

        // Client & Event Type badge
        let badgeStyle = 'background: rgba(255, 102, 0, 0.1); color: var(--primary-gold); border: 1px solid rgba(255, 102, 0, 0.2);';
        if (b.eventType === 'Wedding') {
            badgeStyle = 'background: rgba(236, 72, 153, 0.1); color: #ec4899; border: 1px solid rgba(236, 72, 153, 0.2);';
        } else if (b.eventType === 'Anniversary') {
            badgeStyle = 'background: rgba(59, 130, 246, 0.1); color: #3b82f6; border: 1px solid rgba(59, 130, 246, 0.2);';
        } else if (b.eventType === 'Corporate') {
            badgeStyle = 'background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2);';
        }
        
        const clientHtml = `
            <div style="font-weight:600; color:var(--text-light);">${b.clientName}</div>
            <div style="margin-top:4px;">
                <span class="qty-badge" style="font-size:0.7rem; padding:2px 8px; border-radius:4px; ${badgeStyle}">${b.eventType || 'Party'}</span>
                <span style="font-size:0.75rem; color:var(--text-muted); margin-left:6px;">Space: ${b.table || 'N/A'}</span>
            </div>
        `;

        // Payment status badge
        let statusBadge = '';
        if (b.status === 'FULLY PAID') {
            statusBadge = `<span class="qty-badge" style="background:rgba(16,185,129,0.1); color:#10b981; border:1px solid rgba(16,185,129,0.2);">FULLY PAID</span>`;
        } else {
            statusBadge = `<span class="qty-badge" style="background:rgba(245,158,11,0.1); color:#f59e0b; border:1px solid rgba(245,158,11,0.2);">ADVANCE PAID</span>`;
        }

        tr.innerHTML = `
            <td><strong style="color:var(--primary-gold); font-family:monospace;">${b.id}</strong></td>
            <td>${clientHtml}</td>
            <td>${scheduleHtml}</td>
            <td style="text-align:right; font-weight:600; color:var(--text-light);">LKR ${b.total.toFixed(2)}</td>
            <td style="text-align:center;">${statusBadge}</td>
            <td style="text-align:center;">
                <button class="btn btn-outline" style="padding:6px 12px; font-size:0.75rem; width:auto; display:inline-flex; align-items:center; gap:4px;" onclick="viewInvoiceFromTable('${b.id}')">
                    <span>Invoice</span>
                </button>
                <button class="btn btn-outline" style="padding:6px 12px; font-size:0.75rem; width:auto; background:rgba(239,68,68,0.1); color:#ef4444; border-color:rgba(239,68,68,0.2); display:inline-flex; align-items:center; gap:4px; margin-left:4px;" onclick="deleteBulkOrder('${b.id}')">
                    <span>Delete</span>
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

window.viewInvoiceFromTable = function(id) {
    const found = APP_STATE.bulkOrders.find(b => b.id === id);
    if (!found) {
        // Check standard orders too
        const foundStd = APP_STATE.orders.find(o => o.id === id);
        if (foundStd) {
            APP_STATE.selectedOrder = foundStd;
            updateInvoiceSelector();
            document.getElementById('invoice-selector').value = id;
            document.querySelector('[data-section="invoices-section"]').click();
            viewInvoice(foundStd);
        }
        return;
    }
    APP_STATE.selectedOrder = found;
    updateInvoiceSelector();
    document.getElementById('invoice-selector').value = id;
    document.querySelector('[data-section="invoices-section"]').click();
    viewInvoice(found);
};

window.deleteBulkOrder = function(id) {
    if (confirm(`Are you sure you want to delete Bulk Order ${id}?`)) {
        APP_STATE.bulkOrders = APP_STATE.bulkOrders.filter(b => b.id !== id);
        saveState();
        renderBulkOrders();
        renderDailySummary();
        updateInvoiceSelector();
        renderDashboard();
    }
};

// --- Dashboard Statistics & Live Queue Renderer ---
function renderDashboard() {
    const revenueEl = document.getElementById('dash-revenue');
    const ordersEl = document.getElementById('dash-orders');
    const bulkEl = document.getElementById('dash-bulk');
    const promosEl = document.getElementById('dash-promos');
    const ordersTable = document.getElementById('dashboard-orders-table');
    const bulkTable = document.getElementById('dashboard-bulk-table');

    const todayStr = new Date().toISOString().slice(0, 10);

    const todayOrders = APP_STATE.orders.filter(o => o.date && o.date.startsWith(todayStr));
    const todayBulk = APP_STATE.bulkOrders.filter(b => (b.eventDate === todayStr) || (b.date && b.date.startsWith(todayStr)));

    const todayOrdersRevenue = todayOrders.reduce((sum, o) => sum + o.total, 0);
    const todayBulkRevenue = todayBulk.reduce((sum, b) => sum + b.total, 0);
    const totalRevenue = todayOrdersRevenue + todayBulkRevenue;

    if (revenueEl) revenueEl.textContent = `LKR ${totalRevenue.toFixed(2)}`;
    
    if (ordersEl) ordersEl.textContent = APP_STATE.orders.length;
    if (bulkEl) bulkEl.textContent = APP_STATE.bulkOrders.length;
    if (promosEl) promosEl.textContent = APP_STATE.promotions.filter(p => p.active).length;

    if (ordersTable) {
        const tbody = ordersTable.querySelector('tbody');
        if (tbody) {
            if (APP_STATE.orders.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="cart-empty" style="padding: 30px 0;">No active standard orders. Open Order Management to place one.</td></tr>`;
            } else {
                tbody.innerHTML = '';
                APP_STATE.orders.slice(0, 5).forEach(o => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td><strong style="color:var(--primary-gold); font-family:monospace;">${o.id}</strong></td>
                        <td>${o.customer || 'Walk-in Guest'}</td>
                        <td>${o.type || 'Standard'}</td>
                        <td>LKR ${o.total.toFixed(2)}</td>
                        <td><span class="qty-badge" style="background:rgba(245,158,11,0.1); color:#f59e0b; border:1px solid rgba(245,158,11,0.2);">${o.status}</span></td>
                        <td>
                            <button class="btn btn-outline" style="padding:2px 8px; font-size:0.7rem;" onclick="viewInvoiceFromTable('${o.id}')">Invoice</button>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
    }

    if (bulkTable) {
        const tbody = bulkTable.querySelector('tbody');
        if (tbody) {
            if (APP_STATE.bulkOrders.length === 0) {
                tbody.innerHTML = `<tr><td colspan="6" class="cart-empty" style="padding: 30px 0;">No registered events. Open Bulk Orders to register one.</td></tr>`;
            } else {
                tbody.innerHTML = '';
                APP_STATE.bulkOrders.slice(0, 5).forEach(b => {
                    const tr = document.createElement('tr');
                    const dateStr = b.eventDate ? new Date(b.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'TBD';
                    tr.innerHTML = `
                        <td>${dateStr}</td>
                        <td><strong>${b.clientName}</strong></td>
                        <td>${b.guests || 0}</td>
                        <td>LKR ${b.total.toFixed(2)}</td>
                        <td>LKR ${(b.downpayment || 0).toFixed(2)}</td>
                        <td><span class="qty-badge" style="background:rgba(16,185,129,0.1); color:#10b981; border:1px solid rgba(16,185,129,0.2);">${b.status}</span></td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
    }
}

// --- Operational State Management Cache ---
function saveState() {
    localStorage.setItem('CEYLON_STATE', JSON.stringify({
        orders: APP_STATE.orders,
        bulkOrders: APP_STATE.bulkOrders,
        promotions: APP_STATE.promotions
    }));
}

function loadLocalCache() {
    const cached = localStorage.getItem('CEYLON_STATE');
    if (cached) {
        const structuralData = JSON.parse(cached);
        APP_STATE.orders = structuralData.orders || [];
        APP_STATE.bulkOrders = structuralData.bulkOrders || [];
        APP_STATE.promotions = structuralData.promotions || [];
        
        renderPromotionsTable();
    }
}

// --- REST Architecture Async Java Communication Handshake Bindings ---
function attemptBackendSync() {
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');

    fetch(`${API_BASE}/health`)
        .then(res => {
            if (res.ok) {
                APP_STATE.serverConnected = true;
                statusDot.style.background = 'var(--success)';
                statusText.textContent = 'Server Connected (Java API)';
                syncPullIncomingData();
            }
        })
        .catch(() => {
            APP_STATE.serverConnected = false;
            statusDot.style.background = 'var(--danger)';
            statusText.textContent = 'Server Disconnected (Using LocalStorage LocalCache)';
        });
}

function syncPullIncomingData() {
    // Background pull pipeline implementations
    fetch(`${API_BASE}/orders`)
        .then(res => res.json())
        .then(data => {
            if(data && data.length > 0) {
                APP_STATE.orders = data;
                saveState();
                renderDashboard();
            }
        }).catch(err => console.log('Sync pull deferred.', err));

    fetch(`${API_BASE}/bulk-orders`)
        .then(res => res.json())
        .then(data => {
            if(data && data.length > 0) {
                APP_STATE.bulkOrders = data;
                saveState();
                renderDashboard();
                renderBulkOrders();
            }
        }).catch(err => console.log('Sync bulk pull deferred.', err));
}

function postToServer(endpoint, payload) {
    if (!APP_STATE.serverConnected) return;

    fetch(`${API_BASE}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch(err => console.error('REST binding pipeline error:', err));
}