// This files contains the seed information for the database. 

// For seeding plants 
db.plants.insertMany([
    {
        "title": "Tomatoes",
        "Climate": "Tomatoes need warmth; plant in late spring and early summer for most breeds",
        "Sunlight": "6 - 8",
        "Support": "yes",
        "Spacing": "24 - 36",
        "Water": "Water regularly",
        "Special": ["Recommend burying two-thirds of the stem when planting (note method of deep planting only works with tomatoes)"],
        "description": null,
        "bullets": null,
        "skillLevel": "Beginner",
        "parentLevel": true,
        "parentCat": null,
        "imageURL": "http://assets.nydailynews.com/polopoly_fs/1.2834910.1476795531!/img/httpImage/image.jpg_gen/derivatives/article_750/488059328.jpg"
    },
    {
        "title": "Bell Peppers",
        "Climate": "Peppers need at least 70°F for germination, and 65°F for successful transplanting.",
        "Sunlight": "6 - 8",
        "Support": "maybe",
        "Spacing": "18 - 24",
        "Water": "Water regularly",
        "Special": ["Start pepper seeds three to a pot, and thin out the weakest seedling. Let the remaining two pepper plants spend their entire lives together as one plant. The leaves of two plants help protect peppers against sunscald and the yield is often twice as good as two segregated plants."],
        "description": null,
        "bullets": null,
        "skillLevel": "Intermediate",
        "parentLevel": true,
        "parentCat": null,
        "imageURL": "https://img.buzzfeed.com/buzzfeed-static/static/2017-05/4/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-20636-1493915918-9.jpg?downsize=715:*&output-format=auto&output-quality=auto"
    },
    {
        "title": "Broccoli",
        "Climate": "Broccoli is a cool-season crop that, like spinach, can be grown in the spring or fall. Broccoli can germinate in soil with temperatures as low as 40°F.",
        "Sunlight": "6 - 10",
        "Support": "no",
        "Spacing": "16 - 24",
        "Water": "Water frequently, keep up moisture but do not wet head.",
        "Special": ["Do not get developing heads wet when watering. Roots are very shallow, do not cultivate. Use mulch to keep soil temperature low."],
        "description": null,
        "bullets": null,
        "skillLevel": "Expert",
        "parentLevel": true,
        "parentCat": null, 
        "imageURL": "https://www.cookforyourlife.org/wp-content/uploads/2015/08/shutterstock_294838064-min.jpg"
    },
    {
        "title": 'Radishes',
        "Climate": 'There are two main types of radishes, spring radishes and winter radishes. Avoid warm weather, radishes do not thrive above 65°F.',
        "Sunlight": "6 - 10",
        "Support": 'no',
        "Spacing": '12 - 16',
        "Water": "Water moderately. If the soil is too dry, radishes will bolt and become pithy and too pungent to eat. If too wet, the roots will split and rot. Never let the soil dry out, but don't keep it mucky, either.",
        "Special": ["Prepare a light, well-drained soil with a pH of 5.8 to 6.8 for best production. When preparing the soil, avoid fresh manure and organic materials or fertilizers high in nitrogen."],
        "description": null,
        "bullets": null,
        "skillLevel": "Beginner",
        "parentLevel": true,
        "parentCat": null, 
        "imageURL": "http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/24171905/ING-radish-thumb1x1.jpg" 
    },
    {
        "title": "Beans",
        "Climate": "In general, beans are very sensitive to frost. Most beans grow best in air temperatures of 70°F to 80°F, and soil temperature should be at least 60°F.",
        "Sunlight": "6 - 8",
        "Support": "yes",
        "Spacing": "6 - 10 inches",
        "Water": "Water intensively once a week",
        "Special": ["Beans generally don't need extra nitrogen for good growth because the beneficial bacteria that live in nodules on bean roots help to provide nitrogen for the plants. To speed up growth, give beans—particularly long-bearing pole beans or heavy-feeding limas—a midseason side-dressing of compost or kelp extract solution."],
        "description": null,
        "bullets": null,
        "skillLevel": "Beginner",
        "parentLevel": true,
        "parentCat": null, 
        "imageURL": "https://cdn1.medicalnewstoday.com/content/images/articles/285/285753/beans.jpg"
    },
    {
        "title": "Brussel Sprouts",
        "Climate": "Growing Brussels sprouts requires cool weather. The ideal climate is the “fog belt” of the Pacific Northwest, but they will grow in just about any part of the country.",
        "Sunlight": "6 - 10",
        "Support": "no",
        "Spacing": "18 - 24",
        "Water": "Water regularly",
        "Special": ["Brussels sprouts also need more boron than most other vegetables. If your brussels sprouts develop hollow stems and small buds, you can add boron to the soil by dissolving 1 level tablespoon of borax in 5 quarts of water and sprinkling it evenly over 50 square feet of bed. DO NOT be tempted to mix more, and do not apply unless your plants have shown the deficiency symptoms we just mentioned."],
        "description": null,
        "bullets": null,
        "skillLevel": "Intermediate",
        "parentLevel": true,
        "parentCat": null, 
        "imageURL": "http://www.well-beingsecrets.com/wp-content/uploads/Brussels-Sprouts-and-Manganese.jpg"
    },
    {
        "title": "Beets",
        "Climate": "Beets like cool weather. In northern soils, beets shouldn’t be planted until the temperature of the soil is at least 40°F.",
        "Sunlight": "6 - 8",
        "Support": "no",
        "Spacing": "2 - 4",
        "Water": "Water regularly",
        "Special": ["You can plant beets in partial shade, but when growing beets, you want their roots to reach a depth of at least 3-6 inches, so don’t plant them under a tree where they might run into tree roots."],
        "description": null,
        "bullets": null,
        "skillLevel": "Beginner",
        "parentLevel": true,
        "parentCat": null, 
        "imageURL": "https://cdn1.medicalnewstoday.com/content/images/articles/311/311343/one-whole-beet-and-one-halved-beet.jpg"
    },
    {
        "title": "Carrots",
        "Climate": "Start sowing this cool-weather crop 3 weeks before the last expected frost; plant again every 2 to 3 weeks after that.",
        "Sunlight": "6 - 8",
        "Support": "no",
        "Spacing": "1 - 3",
        "Water": "Water gently",
        "Special": ["To produce the best crop possible, double-dig your planting area or build up a raised bed."],
        "description": null,
        "bullets": null,
        "skillLevel": "Expert",
        "parentLevel": true,
        "parentCat": null, 
        "imageURL": "https://www.organicfacts.net/wp-content/uploads/2013/05/Carrot1.jpg"
    }
    ])
    
    //Seedint plant categories test
    db.plants.insertMany([
    {
        "title": 'Melons',
        "description": "Toward the end of the growing season, pinch off any small melons so the larger melons will ripen and sweeten up.",
        "imageURL": "https://groceries.morrisons.com/productImages/210/210305011_0_640x640.jpg?identifier=6ff605c91cd0384439fa1acbd7de32a1",
        "parentLevel": true,
        "childPlants": [
            {
                "title": "Watermelon",
                "Climate": "Likes warmth. Needs long growing season of at least 70 to 85 days. If you live in warmer climates, you can sow seeds directly outdoors, but wait until the soil temperature warms to at least 70°F.",
                "Sunlight": "8 - 10",
                "Support": "maybe",
                "Spacing": "2 - 6 Feet",
                "Water": "Water regularly, 1-2 Inches per week",
                "Special": ["Watering is very important—from planting until fruit begins to form. Keep soil moist, but not waterlogged. Water at the vine’s base in the morning, and try to avoid wetting the leaves and avoid overhead watering. Reduce watering once fruit are growing. Dry weather produces the sweetest melons. If you choose to fertilize (and many do), make sure it delivers more nitrogen than phosphorus and potassium. However, after flowering begins, use a fertilizer with less nitrogen. Pruning isn’t necessary, but vine productivity may be improved if you do not allow lateral vines to grow and stick to the main vine. When the plant is young, cut off the end buds as they form. Pinch off some blossoms to focus the energy on fewer melons. Blossoms require pollination to set fruit, so be kind to the bees! As fruit is ripening, prevent rotting by gently lifting it and putting cardboard or straw between the fruit and the soil.",
                    "While harvesting, if the watermelon sounds hollow it’s ripe. Look at the color on the top. The watermelon is ripe when there is little contrast between the stripes. Look at the color on the bottom. A green watermelon will have a white bottom; a ripe melon will have a cream- or yellow-colored bottom. Check the tendril. If it’s green, wait. If it’s half-dead, the watermelon is nearly ripe or ripe. If the tendril is fully dead, it’s ripe or overripe. Stems should be cut with a sharp knife close to the fruit."],
                "description": null,
                "bullets": null,
                "skillLevel": "Intermediate",
                "parentLevel": false,
                "parentCat": "Melons",
                "imageURL": "https://www.organicfacts.net/wp-content/uploads/2013/05/watermelon2.jpg"
            }, 
            {
                "title": "Cantaloupe",
                "Climate": "Likes warmth. Needs long growing season of at least 70 to 85 days. If you live in warmer climates, you can sow seeds directly outdoors, but wait until the soil temperature warms to at least 70°F.",
                "Sunlight": "8 - 10",
                "Support": "yes",
                "Spacing": "18 - 36 Inches",
                "Water": "Water regularly, 1-2 Inches per week",
                "Special": ["Amend soil with aged manure or compost before planting. Growing the vines in raised rows, known as hills, ensures good drainage and will hold the sun’s heat longer. If you are in a cooler zone, start seeds indoors about a month before transplanting. Plant seeds one inch deep, 18 inches apart, in hills about 3 feet apart.",
                    "Cantaloupe likes loamy, well-drained soil. Handle them gently when you transplant. Add lots of compost to the area before planting and after planting. Mulching with black plastic will warm the soil, hinder weed growth, and keep developing fruits clean. Fertilize when vines start growing. Water in the morning, and try to avoid wetting the leaves. Reduce watering once fruit are growing. Dry weather produces the sweetest melon. If you’ve had an exceptional amount of rainfall during the ripening stage, this could cause bland fruit. Once fruit begins to grow, prune end buds off vines to increaes quality of remaining fruit. Blossoms require pollination to set fruit, so be kind to the bees!",
                    "When rinds begin to change from green to tan or yellow, the melon is probably ripe, but be careful not to pick too early. Look for a crack in the stem where it attaches to the fruit. This is a sign of ripeness as well. The fruit should be easy to separate from the vine, but if they fall off by themselves they are usually overripe. Harvest melon when vines are dry, and be careful not to damage them. They will soften after harvesting, but will not continue to sweeten off the vine."],
                "description": null,
                "bullets": null,
                "skillLevel": "Intermediate",
                "parentLevel": false,
                "parentCat": "Melons",
                "imageURL": "https://groceries.morrisons.com/productImages/251/251646011_0_640x640.jpg?identifier=d85d41c1540345090c691ef4e3af7b53"
            }, 
            {
                "title": "Honeydew",
                "Climate": "Likes warmth. Needs long growing season of at least 70 to 85 days. If you live in warmer climates, you can sow seeds directly outdoors, but wait until the soil temperature warms to at least 70°F.",
                "Sunlight": "8 - 10",
                "Support": "yes",
                "Spacing": "18 - 36 Inches",
                "Water": "Water regularly, 1-2 Inches per week",
                "Special": ["Amend soil with aged manure or compost before planting. Growing the vines in raised rows, known as hills, ensures good drainage and will hold the sun’s heat longer. If you are in a cooler zone, start seeds indoors about a month before transplanting. Plant seeds one inch deep, 18 inches apart, in hills about 3 feet apart.",
                    "Honeydew likes loamy, well-drained soil. Handle them gently when you transplant. Add lots of compost to the area before planting and after planting. Mulching with black plastic will warm the soil, hinder weed growth, and keep developing fruits clean. Fertilize when vines start growing. Water in the morning, and try to avoid wetting the leaves. Reduce watering once fruit are growing. Dry weather produces the sweetest melon. If you’ve had an exceptional amount of rainfall during the ripening stage, this could cause bland fruit. Once fruit begins to grow, prune end buds off vines to increaes quality of remaining fruit. Blossoms require pollination to set fruit, so be kind to the bees!",
                    "When rinds begin to change from green to tan or yellow, the melon is probably ripe, but be careful not to pick too early. Look for a crack in the stem where it attaches to the fruit. This is a sign of ripeness as well. The fruit should be easy to separate from the vine, but if they fall off by themselves they are usually overripe. Harvest melon when vines are dry, and be careful not to damage them. They will soften after harvesting, but will not continue to sweeten off the vine."],
                "description": null,
                "bullets": null,
                "skillLevel": "Intermediate",
                "parentLevel": false,
                "parentCat": "Melons",
                "imageURL": "http://vanhornerestaurant.com/wp-content/uploads/2016/09/how-to-tell-honeydew-melon-is-ripe.jpg"
            }
        ],
        "isCat": true
    },
    {
        "title": 'Berries',
        "description": "Toward the end of the growing season, pinch off any small melons so the larger melons will ripen and sweeten up.",
        "childPlants": [
            {
                "title": "Strawberries",
                "Climate": "Plan to plant as soon as the ground can be worked in the Spring.",
                "Sunlight": "8 - 10",
                "Support": "No",
                "Spacing": "20",
                "Water": "Water regularly, 1 Inch per week",
                "Special": ["Strawberry plants come in three types: Day-Neutral, Everbearer, Junebearer. For home gardens, the recommended type is Junebearers. These produce buds during autumn, flowers and fruits the following spring, and bears fruit during summer.",
                    "Although you will have to wait until the year after planting for fruit harvesting, it will be worth the wait. Tolerant of different soil types, but prefers loam. Prepare aged manure or compost several months before planting. Planting site must be well-drained so raised beds are a good option for strawberry plants. In the first year, pick off blossoms to discourage strawberry plants from bearing fruit. Instead they will develope healthier roots."],
                "description": null,
                "bullets": null,
                "skillLevel": "Expert",
                "parentLevel": false,
                "parentCat": "Berries",
                "imageURL": ""
            }, 
            {
                "title": "Blueberries",
                "Climate": "Bushes should be planted as early in the spring as possible.",
                "Sunlight": "8 - 10",
                "Support": "No",
                "Spacing": "5+ Feet",
                "Water": "Water regularly, 1-2 Inches per week",
                "Special": ["There are three types of blueberries: Highbush, Lowbush, and Hybrid Half-high. The most commonly planted blueberry is the Highbush. Blueberries thrive in soil that is acidic. The soil pH should ideally be between 4 and 5. The more organic matter added, the more tolerance to acidity blueberries will have.",
                    "When planting, dig holes about 20 inches deep and 18 inches wide. Prepare a planting mixture of 2 parts loam and one part oak leaf mold, peat moss, aged sawdust, or compost, and place a layer of this mixture in the bottom of the hole. Apply fertilizer one month after planting, not at time of planting.",
                    "If you plant two-year-old blueberry plants, they should start to bear within a year or two. Pick off any flowers that form the first year or two after planting, to allow the bush to growfirst. Full production is reached after 6 years."],
                "description": null,
                "bullets": null,
                "skillLevel": "Expert",
                "parentLevel": false,
                "parentCat": "Berries",
                "imageURL": ""
            }, 
            {
                "title": "Blackberries",
                "Climate": "Planting may be done in late fall, however, it should be delayed until early spring in very cold areas.",
                "Sunlight": "8 - 10",
                "Support": "Yes",
                "Spacing": "5+ Feet",
                "Water": "Water regularly, 1-2 Inches per week",
                "Special": ["There are three basic types of blackberries: Erect Thorny, Erect Thornless, Trailing Thornless. All blackberries are perennials, meaning the roots come back year after year. However, the plant portion above the soil is biennial, meaning the plant grows vegetatively for a year, bears fruit the next year, die, then repeat.",
                    "Erect blackberries produce stiff, shorter canes that come from the crown and from root suckering. Erect blackberries benefit from summer pruning. Remove the top one to two inches of new primocanes when they are four feet tall.",
                    "If you have primocane-fruiting erect blackberries, cut all canes off just above the ground in the late winter for the best fruit. In the summer, when the primocanes are 3½ feet tall, removed the top 6 inches.",
                    "If you have semi-erect blackberries, they are easier to manage on a Double T Trellis. Install four-foot cross arms at the top of a six-foot post. Install a three-foot cross arm about two feet below the top line. Semi-erect berries need to be pruned in the summer. When the primocanes are five feet tall, remove the top two inches to encourage branching. Several pruning sessions will be required as canes reach the appropriate height."],
                "description": null,
                "bullets": null,
                "skillLevel": "Expert",
                "parentLevel": false,
                "parentCat": "Berries",
                "imageURL": ""
            },
            {
                "title": "Raspberries",
                "Climate": "Plant bare-root transplants in the early spring after threat of frost has passed and as soon as the soil can be worked.",
                "Sunlight": "8-10",
                "Support": "Yes",
                "Spacing": "2 - 4 Feet",
                "Water": "Water regularly, 1 Inch per week",
                "Special": ["Prepare soil with a couple inches of compost or aged manure a couple weeks before planting. Till the soil well before planting. Before planting, soak the roots for an hour or two. Mulching is important throughout the season to conserve moisture and suffocate weeds. Keep a thick layer of mulch surrounding plants at all times. The roots send up an abundant amount of shoots, called canes. Keep order by pruning away the majority of them, so that the survivors can produce lots of berries.",
                    "Red raspberries: Prune any time after the last harvest and before growth begins in the spring. Cut all canes that produced fruit to the ground. Thin to 6 sturdy canes per hill (per foot of row).",
                    "Black and purple raspberries: When primocanes are between 24 to 30 inches in height, pinch out the tip of each shoot to induce branching. This will make the fruit easier to pick and increase production. After harvest, cut down all canes that bore fruit to ground level.",
                    "Ever-bearing or fall-bearing raspberries: Cut all canes to the ground any time after harvest and before growth begins in the spring. Mow them to the ground or use pruning shears for a small patch.",
                    "All varieties will begin to produce fruit in their second season. In some cases, ever-bearers may bear small berries in their first autumn. In early summer, berries will ripen over a time of about 2 weeks. You will need to pick berries every couple of days. Try to harvest berries on a sunny day, when they are dry. Don’t tug too hard on your raspberries when picking. A ripe raspberry will leave the vine willingly."],
                "description": null,
                "bullets": null,
                "skillLevel": "Expert",
                "parentLevel": false,
                "parentCat": "Berries",
                "imageURL": ""
            }
        ],
        "imageURL": "https://groceries.morrisons.com/productImages/210/210305011_0_640x640.jpg?identifier=6ff605c91cd0384439fa1acbd7de32a1",
        "parentLevel": true,
        "isCat": true
    }
    ])
    
    
    
    // For seeding plant categories 
    // childPlants parameter stores an array of objects. Each object reprsents a child plant. 
    // Info for child plants are now nested inside the parent object.
    // This allows new pages to be loaded without an additional database call. 
    // (Though requires more data to be loaded initially)
    // Even if we run out of time to flesh all the sub-objects out, we may want to leave them in and just not click on them in the demo
    // Also, my research for melons and leafy greens may need to be reviewed/fleshed out. 
    // Ideally I think it's best to be as specific as possible, IE-- an actual number rather than "water moderatly", as I have sometimes done..
    // For now just wanted to get some dummy info in there so we could test the system. 
    db.plants.insertMany([
        {
            title: 'Peas',
            description: 'To get peas in the ground and germinating as early as possible in the spring, plant them in raised beds. The raised beds warm up faster than the surrounding ground.',
            childPlants: [
                {
                    title: 'Snap Peas', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Peas'
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/61xWA1eNWrL._SX355_.jpg"
                }, 
                {
                    title: 'Snow Peas', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Peas' 
                    imageURL: "http://www.holypine.com/wp-content/uploads/2015/10/snow-peas2.jpg"
                }, 
                {
                    title: 'Field Peas', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Peas'
                    imageURL: "https://humblefeast.files.wordpress.com/2012/09/field-peas-shelled.jpg"
                }
            ],
            imageURL: "http://www.goodwholefood.com/wp-content/uploads/2016/08/Peas-5.jpg",
            parentLevel: true,
            isCat: true
        },
        {
            title: 'Herbs',
            description: "Recommended planting and growing these indoors. Seeds should be sowed indoors, but after 5-10 weeks seedlings will be ready to move outside. Water enough to keep the soil moist, but not soggy and avoid frequent light waterings which can draw roots to the soil surface. Certain species need extra moist soil, while others need less moist soil, so water accordingly.",
            childPlants: [
                {
                    title: 'Cilantro', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Herbs'
                    imageURL: "https://images-na.ssl-images-amazon.com/images/I/91EEvXaIP5L._SX355_.jpg"
                }, 
                {
                    title: 'Basil', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Herbs'
                    imageURL: "http://media.mercola.com/assets/images/foodfacts/basil-nutrition-facts.jpg"
                }, 
                {
                    title: 'Thyme', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Herbs'
                    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thyme-Bundle.jpg/250px-Thyme-Bundle.jpg"
                }, 
                {
                    title: 'Rosemary', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Herbs'
                    imageURL: "https://www.organicfacts.net/wp-content/uploads/rosemary-1020x765.jpg"
                }, 
                {
                    title: 'Mint', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Herbs'
                    imageURL: "http://sportsvape.net/wp-content/uploads/2014/09/Mint.jpg"
                }, 
                {
                    title: 'Chives', 
                    Climate: "",
                    Sunlight: "",
                    Support: "",
                    Spacing: "",
                    Water: "",
                    Special: "",
                    skillLevel: "",
                    parentLevel: false,
                    parentCat: 'Herbs'
                    imageURL: "https://cdn1.medicalnewstoday.com/content/images/articles/275/275009/bunch-of-chives.jpg"
                }
            ],
            imageURL: "https://www.organicfacts.net/wp-content/uploads/2013/05/Herbs2.jpg",
            parentLevel: true,
            isCat: true
        },
        {
            title: 'Leafy Greens',
            description: "Edible greens. Some are great for salads, some cooking, some both.",
            childPlants: [
                {
                    title: 'Lettuce', 
                    Climate: "60 to 65°F",
                    Sunlight: "4 - 5",
                    Support: "no",
                    Spacing: '12 - 15',
                    Water: "1 - 2 times/week",
                    Special: "Sow additional seeds every two weeks for continous harvest throughout growing season",
                    skillLevel: "Intermediate",
                    parentLevel: false,
                    parentCat: 'Leafy Greens'
                    imageURL: "http://ghk.h-cdn.co/assets/cm/15/11/54ff047186bb0-ghk-iceberg-lettuce-xl.jpg"
                }, 
                {
                    title: 'Spinach', 
                    Climate: "About 70°F",
                    Sunlight: "4 - 5",
                    Support: "no",
                    Spacing: "?",
                    Water: "water regularly",
                    Special: "Use well drained soil rich in organic matter",
                    skillLevel: "Intermediate",
                    parentLevel: false,
                    parentCat: 'Leafy Greens' 
                    imageURL: "https://cdn1.medicalnewstoday.com/content/images/articles/270/270609/spinach-leaves.jpg"
                }, 
                {
                    title: 'Kale', 
                    Climate: "Cold-hardy. Plant in spring/fall or even mild winter.",
                    Sunlight: "4 - 5",
                    Support: "no",
                    Spacing: "18 - 24",
                    Water: "Moderate watering",
                    Special: "Eating kale has many health benefits",
                    skillLevel: "Beginner",
                    parentLevel: false,
                    parentCat: 'Leafy Greens'
                    imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/CSA-Red-Russian-Kale.jpg/219px-CSA-Red-Russian-Kale.jpg"
                }
            ],
            imageURL: "http://thescienceofeating.com/wp-content/uploads/2012/04/Book-Green-Leafy-Veggetables.jpg",
            parentLevel: true,
            isCat: true
        }
    ])
    
    
    
    // For seeding guides 
    // Body expect an array of strings, each string representing one paragraph.
    db.guides.insertMany([
        {
            title: "Soil",
            body: ["Healthy soil is the basis of healthy plants and a successful garden. When soil is in good shape there is less need for fertilizers or pesticides. Good soil is rich in humus which comes from decaying organic compost. It is loose and fluffy, holds moisture, drains well, and has plenty of minerals essential for plant growth. Living organisms like earthworms, certain fungi, and bacteria also help maintain the quality of the soil.",
                "Finding the right fertilizer for your soil is another important aspect. Macronutrients such as nitrogen, phosphorous, potassium, magnesium, calcium, sulfur are important to plant health. Micronutrients like boron, iron, zinc, etc are also important, in smaller quantities, to the health of your plants. A good balance together not only assure healthy growth, but they also help your plants fight off pests and diseases.",
                "The final touch for the perfect soil composition is proper pH. Although other aspects such as soil nutrients are largely important, soil pH still plays its part. A good way to test soil pH is to mix some soil with distilled water in a container until muddy, and then add vinegar. If it fizzes then your soil is too acidic. If that is the case, adding some pulverized limestone, which has magnesium and calcium carbonate, will raise the pH of your soil. Usually the natural pH of soil is between 6-7, so you should not have to worry.",
                "Always remember, a great way to keep your garden soil rich is by adding organic compost. Things like grass clippings, leaves, plants trimmings, table scraps, etc are excellent use for compost. These items contain various amounts of micronutrients, and their use in compost guarantees returning those micronutrients to the soil."],
            photoLink: "http://sustainablepulse.com/wp-content/uploads/2017/10/soil2.jpg"
        },
        {
            title: "Pest Control",
            body: ["Pest control is important to the success of any garden. Some larger animals such as raccoons and deer can be blocked by simply fencing in the garden area. The most common form of pests are usually bugs. The best way to prevent insect damage in your garden is to disuade them from approaching at all. In this case, a healthy garden is the best defence.",
                "Minimize insect habitat. Start by pulling out any weak plants as these may already be infected. Even if not, they will soon attract predators. Remove these plants and dispose of them away from the garden area. Clear garden area of debris and weeds which are breeding places for insects and use clean mulch. If you've been working with infested plants, clean your tools before moving on to other garden areas. This will reduce the speed of invading insects.",
                "Build healthy, organic soil. Natural composting methods, mulching and top-dressing your soil with compost or natural fertilizer is the best way to develop strong, resistant plants. Seaweed mulch or spray contains trace micronutrients such as iron, zinc, barium, calcium, sulfur and magnesium, which promote healthy development in plants. These nutrients enhance growth and give plants the resilience to withstand disease.",
                "Keep plant foliage dry. Wet foliage encourages insect and fungal damage to your plants. Optionally, invest in drip-irrigation for methods of delivering water directly to the roots without wetting the foliage. Interplant and rotate crops. Insect pests are often plant specific. When plantings are mixed, pests are less likely to spread throughout a crop. Rotating plants each year is a common method to avoid re-infestation of pests that have settled over winter.",
                "Always keep in mind some bugs are beneficial to your garden. Ladybugs eat the harmful insects, and bees pollinate your plants. So remember, be kind to these bugs!"],
            photoLink: "http://www.backyardnature.net/pix/b-swal-c.jpg"
        }
    ])