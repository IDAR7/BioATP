const questions = {
    1: [
            { question: "Quel organite est responsable de la synthèse des protéines ?", choices: ["Mitochondrie", "Réticulum endoplasmique", "Lysosome", "Ribosome"], correct: 3 },
            { question: "Quel est le rôle du noyau cellulaire ?", choices: ["Contrôler la division cellulaire", "Produire de l'énergie", "Stocker l'ADN", "Synthétiser les protéines"], correct: 2 },
            { question: "Quelle structure permet le passage des substances entre le noyau et le cytoplasme ?", choices: ["Membrane plasmique", "Paroi cellulaire", "Membrane nucléaire", "Cytosquelette"], correct: 2 },
            { question: "Quelle est la principale fonction des mitochondries ?", choices: ["Synthèse des protéines", "Production d'ATP", "Réparation de l'ADN", "Transport des nutriments"], correct: 1 },
            { question: "Quel est le rôle du réticulum endoplasmique rugueux ?", choices: ["Synthétiser des lipides", "Synthétiser des protéines", "Dégrader des déchets", "Transporter des électrons"], correct: 1 },
            { question: "Les lysosomes sont responsables de :", choices: ["La production d'ATP", "La digestion intracellulaire", "La synthèse des protéines", "Le stockage du calcium"], correct: 1 },
            { question: "Quelle structure assure le maintien de la forme de la cellule et sa division ?", choices: ["Membrane plasmique", "Cytosquelette", "Ribosome", "Noyau"], correct: 1 },
            { question: "Laquelle des structures suivantes est présente dans les cellules végétales, mais pas dans les cellules animales ?", choices: ["Réticulum endoplasmique", "Chloroplaste", "Mitochondrie", "Ribosome"], correct: 1 },
            { question: "Qu'est-ce que la mitose permet ?", choices: ["La production d'énergie", "La reproduction sexuée", "La division cellulaire", "La formation de gamètes"], correct: 2 },
            { question: "Quels sont les filaments du cytosquelette impliqués dans le mouvement de la cellule ?", choices: ["Microtubules", "Microfilaments", "Filaments intermédiaires", "Protéines kinésines"], correct: 0 }      
    ],
    2: [
            { question: "Quel tissu est principalement responsable de la protection du corps contre les agressions extérieures ?", choices: ["Tissu épithélial", "Tissu musculaire", "Tissu nerveux", "Tissu conjonctif"], correct: 0 },
            { question: "Quel type de tissu musculaire est responsable du mouvement volontaire ?", choices: ["Muscle lisse", "Muscle cardiaque", "Muscle squelettique", "Tissu conjonctif"], correct: 2 },
            { question: "Quel est le rôle principal des cellules de la peau appelées kératinocytes ?", choices: ["Produire du collagène", "Produire de la mélanine", "Produire de la kératine", "Maintenir l'équilibre osmotique"], correct: 2 },
            { question: "Les cellules du tissu nerveux qui transmettent les impulsions électriques sont appelées :", choices: ["Neurotransmetteurs", "Neurones", "Glies", "Synapses"], correct: 1 },
            { question: "Quel est le rôle des fibroblastes dans le tissu conjonctif ?", choices: ["Transmettre des signaux nerveux", "Produire de la myosine", "Produire des fibres de collagène", "Stocker des graisses"], correct: 2 },
            { question: "Quelle est la principale caractéristique du tissu épithélial ?", choices: ["Il est riche en vaisseaux sanguins", "Il forme des couches continues de cellules", "Il est composé de cellules mortes", "Il est constitué de fibres élastiques"], correct: 1 },
            { question: "Quelle est la fonction des chondrocytes dans le cartilage ?", choices: ["Produire des hormones", "Produire des cellules sanguines", "Produire de la matrice extracellulaire du cartilage", "Contribuer à la contraction musculaire"], correct: 2 },
            { question: "Quel est le rôle principal du tissu adipeux ?", choices: ["Support mécanique", "Transport de l'oxygène", "Réserve d'énergie", "Contraction musculaire"], correct: 2 },
            { question: "Les vaisseaux sanguins sont principalement composés de quel type de tissu ?", choices: ["Épithélial", "Musculaire", "Conjonctif", "Nerveux"], correct: 2 },
            { question: "Quel type de tissu est présent dans les tendons et ligaments ?", choices: ["Tissu musculaire", "Tissu nerveux", "Tissu conjonctif dense", "Tissu épithélial"], correct: 2 }

    ],
    3: [
            { question: "Quel est le rôle principal du système circulatoire chez les animaux ?", choices: ["Transport de l’oxygène", "Digestion des aliments", "Excrétion des déchets", "Transmission des signaux nerveux"], correct: 0 },
            { question: "Quel type de reproduction est caractéristique des animaux hermaphrodites ?", choices: ["Reproduction asexuée", "Fission binaire", "Reproduction sexuée", "Reproduction par parthénogenèse"], correct: 2 },
            { question: "Les poissons respirent grâce à :", choices: ["Les poumons", "Les branchies", "La peau", "Les spiracles"], correct: 1 },
            { question: "Quel est l'animal le plus élevé sur l’échelle trophique ?", choices: ["Herbivores", "Carnivores primaires", "Carnivores secondaires", "Omnivores"], correct: 2 },
            { question: "Quel est le rôle des reins chez les animaux ?", choices: ["Production d’hormones", "Filtration du sang", "Production de la bile", "Excrétion de l’ammoniac"], correct: 1 },
            { question: "Quel est le principal avantage des systèmes de reproduction sexuée chez les animaux ?", choices: ["L'augmentation du métabolisme", "L’augmentation de la diversité génétique", "L’augmentation de la croissance", "La conservation des ressources"], correct: 1 },
            { question: "Chez les mammifères, la gestation se déroule dans :", choices: ["L'utérus", "Les ovaires", "Les testicules", "Les bronches"], correct: 0 },
            { question: "Quel type de système nerveux possèdent les insectes ?", choices: ["Système nerveux centralisé", "Système nerveux décentralisé", "Système nerveux ganglionnaire", "Système nerveux complet"], correct: 2 },
            { question: "Les oiseaux sont caractérisés par la présence de :", choices: ["Des plumes", "Des écailles", "Des poils", "Des griffes"], correct: 0 },
            { question: "Quelle est la principale caractéristique du métabolisme des animaux endothermes ?", choices: ["Ils produisent leur propre chaleur interne", "Ils dépendent de la chaleur de leur environnement", "Ils n'ont pas de système circulatoire", "Ils ont une température corporelle fixe"], correct: 0 }

    ],
   4:  [ 
        { question: "Quel est le rôle principal des racines chez les plantes ?", choices: ["Absorber la lumière", "Produire des graines", "Fixer la plante au sol et absorber l'eau", "Produire de la chlorophylle"], correct: 2 },
        { question: "Les plantes produisent de la nourriture grâce à :", choices: ["La photosynthèse", "La respiration", "La transpiration", "La germination"], correct: 0 },
        { question: "Dans quelle partie de la plante se trouve la chlorophylle ?", choices: ["Dans les racines", "Dans les tiges", "Dans les feuilles", "Dans les fleurs"], correct: 2 },
        { question: "Qu'est-ce que la pollinisation ?", choices: ["Le transport des graines", "Le transport du pollen d'une fleur à une autre", "La production de nectar", "La croissance des racines"], correct: 1 },
        { question: "Quel est le rôle des stomates ?", choices: ["Absorber l'eau", "Réguler l'entrée et la sortie des gaz", "Produire du pollen", "Fixer la plante au sol"], correct: 1 },
        { question: "Quelle est la principale fonction des fruits ?", choices: ["Produire de la lumière", "Protéger les racines", "Faciliter la dispersion des graines", "Effectuer la photosynthèse"], correct: 2 },
        { question: "Les plantes à fleurs sont appelées :", choices: ["Angiospermes", "Gymnospermes", "Bryophytes", "Mousses"], correct: 0 },
        { question: "Quel type de reproduction se produit chez les plantes non vasculaires comme les mousses ?", choices: ["Sexuée", "Asexuée", "Parthénogenèse", "Mitotique"], correct: 0 },
        { question: "Qu'est-ce que la germination ?", choices: ["La production de graines", "Le développement d'une nouvelle plante à partir de la graine", "Le transport du pollen", "La croissance des racines"], correct: 1 },
        { question: "Le xylème est responsable de :", choices: ["Le transport de l'eau et des minéraux", "La production de chlorophylle", "La production de fruits", "La fixation de l'azote"], correct: 0 }
          
    ],
  5: [
        { question: "Quel est le rôle principal des oiseaux migrateurs ?", choices: ["Se nourrir en déplacement", "Reproduire leurs espèces", "Transmettre des maladies", "Transporter des graines"], correct: 1 },
        { question: "Quelle est la principale caractéristique des mammifères ?", choices: ["Ils pondent des œufs", "Ils ont des écailles", "Ils ont des poils et produisent du lait", "Ils vivent uniquement dans l'eau"], correct: 2 },
        { question: "Lequel de ces animaux est un carnivore ?", choices: ["Loup", "Cerf", "Éléphant", "Vache"], correct: 0 },
        { question: "Quel est le rôle des chauves-souris dans l'écosystème ?", choices: ["Polliniser des plantes", "Chasser des insectes", "Émettre des ondes sonores pour naviguer", "Produire des fruits"], correct: 1 },
        { question: "Les amphibiens se distinguent des reptiles par :", choices: ["Leurs écailles", "Leurs os durs", "La présence d'une peau humide et perméable", "La production de lait"], correct: 2 },
        { question: "Quel est le principal habitat des coraux ?", choices: ["Les forêts tropicales", "Les rivières", "Les océans", "Les montagnes"], correct: 2 },
        { question: "Les poissons osseux diffèrent des poissons cartilagineux par :", choices: ["Leur structure osseuse", "Leur respiration", "Leur capacité à voler", "La présence de nageoires",], correct: 0 },
        { question: "Quel groupe d'animaux comprend les grenouilles et les salamandres ?", choices: ["Les reptiles", "Les poissons", "Les amphibiens", "Les oiseaux"], correct: 2 },
        { question: "Les éléphants sont menacés principalement par :", choices: ["Les prédateurs naturels", "La déforestation et le braconnage", "Les maladies virales", "Les changements climatiques"], correct: 1 },
        { question: "Quel est l'élément principal que les insectes pollinisateurs transportent d'une fleur à une autre ?", choices: ["Les racines", "Les graines", "Le pollen", "L'oxygène"], correct: 2 }
      ],
      
    6:  [
            { question: "Quel est le rôle principal des racines des plantes ?", choices: ["Absorber l'eau et les nutriments", "Faire la photosynthèse", "Protéger la plante des animaux", "Produire des fleurs"], correct: 0 },
            { question: "Les angiospermes sont des plantes qui produisent :", choices: ["Des graines", "Des spores", "Des racines", "Des racines aériennes"], correct: 0 },
            { question: "Quel type de fleur produit des graines sans fleurs ?", choices: ["Les gymnospermes", "Les fougères", "Les mousses", "Les lichens"], correct: 0 },
            { question: "Quelle est la fonction des feuilles chez la plupart des plantes ?", choices: ["Réaliser la photosynthèse", "Protéger les racines", "Transmettre les nutriments", "Réduire la transpiration"], correct: 0 },
            { question: "Quel est le principal facteur qui affecte la croissance des plantes ?", choices: ["L'humidité", "Le type de sol", "La lumière", "Les racines"], correct: 2 },
            { question: "Les plantes ligneuses se distinguent des herbacées par :", choices: ["Leur capacité à produire des fruits", "La structure de leur tige", "La forme de leurs racines", "Leurs fleurs"], correct: 1 },
            { question: "Quel groupe de plantes n’a pas de vaisseaux conducteurs ?", choices: ["Les bryophytes", "Les conifères", "Les fougères", "Les dicotylédones"], correct: 0 },
            { question: "Quelle est la principale source d'énergie utilisée dans la photosynthèse ?", choices: ["Le dioxyde de carbone", "L'oxygène", "L'eau", "La lumière"], correct: 3 },
            { question: "Les plantes à fleurs font partie du groupe des :", choices: ["Angiospermes", "Gymnospermes", "Pteridophytes", "Bryophytes"], correct: 0 },
            { question: "Les feuilles des plantes sont principalement utilisées pour :", choices: ["La production de pollen", "La reproduction", "La production de sucres et d'oxygène", "Le stockage de l'eau"], correct: 2 } 
          ],
        7: [
                { question: "Qui est considéré comme le père de la génétique ?", choices: ["Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck", "Francis Crick"], correct: 1 },
                { question: "Les allèles dominants sont caractérisés par :", choices: ["Ils s'expriment uniquement en présence de deux copies", "Ils ne s'expriment que lorsqu'ils sont récessifs", "Ils s'expriment même en présence d'un allèle récessif", "Ils sont toujours récessifs"], correct: 2 },
                { question: "Quel est le processus qui permet la duplication de l'ADN ?", choices: ["Transcription", "Réplicatio", "Mutation", "Crossover"], correct: 1 },
                { question: "Quel type d'acide nucléique est responsable de la synthèse des protéines ?", choices: ["ADN", "ARN", "Protéine", "Lipide"], correct: 1 },
                { question: "Qu'est-ce qu'une mutation génétique ?", choices: ["Un changement dans la séquence d'ADN", "Une copie exacte de l'ADN", "Un processus de reproduction cellulaire", "La création de nouvelles cellules"], correct: 0 },
                { question: "Que signifie l'expression 'génotype' ?", choices: ["L'apparence physique d'un individu", "La séquence d'ADN d'un individu", "L'ensemble des traits hérités d'un individu", "Les gènes responsables de maladies"], correct: 1 },
                { question: "Qu'est-ce qu'un chromosome ?", choices: ["Une molécule d'ADN enroulée autour de protéines", "Un type de cellule", "Un fragment d'ARN", "Une protéine essentielle à la cellule"], correct: 0 },
                { question: "Lors de la méiose, le nombre de chromosomes est divisé par :", choices: ["2", "4", "1", "6"], correct: 0 },
                { question: "Les gènes responsables de maladies génétiques sont appelés :", choices: ["Gènes dominants", "Gènes récessifs", "Gènes mutés", "Gènes porteurs"], correct: 2 },
                { question: "Quel phénomène génétique explique la diversité génétique au sein d'une population ?", choices: ["La méiose", "La mitose", "La recombinaison génétique", "La réplication"], correct: 2 }
   
          ],
        8: [
                { question: "Quel type de cellule est responsable de la production d'anticorps ?", choices: ["Lymphocyte T", "Lymphocyte B", "Macrophage", "Neutrophile"], correct: 1 },
                { question: "Quel est le rôle des cellules dendritiques ?", choices: ["Produire des anticorps", "Présenter les antigènes aux lymphocytes T", "Phagocyter les pathogènes", "Produire de la cytokine"], correct: 1 },
                { question: "La réponse immunitaire humorale est principalement médiée par :", choices: ["Les lymphocytes T", "Les anticorps", "Les macrophages", "Les cellules dendritiques"], correct: 1 },
                { question: "Quel est le rôle de l'immunité innée ?", choices: ["Réponse rapide contre les infections", "Réponse spécifique aux antigènes", "Activation des lymphocytes B", "Production de cytokines"], correct: 0 },
                { question: "Quel type de réponse est activé par la rencontre entre un antigène et un lymphocyte T ?", choices: ["Réponse humorale", "Réponse cellulaire", "Réponse inflammatoire", "Réponse allergique"], correct: 1 },
                { question: "Les anticorps appartiennent à quel type de molécule ?", choices: ["Protéines", "Lipides", "Glucides", "ARN"], correct: 0 },
                { question: "Quel est le rôle du complément dans le système immunitaire ?", choices: ["Lutter contre les infections virales", "Déclencher une réponse inflammatoire et lyser les cellules infectées", "Stimuler la production d'anticorps", "Activer les lymphocytes T"], correct: 1 },
                { question: "Les réponses immunitaires adaptatives sont spécifiques aux :", choices: ["Anticorps", "Pathogènes", "Cytokines", "Cellules T"], correct: 1 },
                { question: "Qu'est-ce qu'une réponse immunitaire secondaire ?", choices: ["La première réponse à une infection", "Une réponse plus rapide et plus forte après une première exposition", "La réponse des cellules T", "La réponse inflammatoire"], correct: 1 },
                { question: "Quel est le rôle des lymphocytes T cytotoxiques ?", choices: ["Produire des anticorps", "Détruire les cellules infectées", "Stimuler la production de cytokines", "Activer les macrophages"], correct: 1 }
              
          ],
        9: [
            { question: "Quel est le rôle des bactéries dans l'intestin humain ?", choices: ["Produire des hormones", "Décomposer les nutriments", "Causer des infections", "Produire de l'oxygène"], correct: 1 },
            { question: "Les virus sont composés principalement de :", choices: ["Protéines et ARN", "Protéines et ADN", "ADN et ARN", "Glucides et lipides"], correct: 0 },
            { question: "Quel type de microbe est responsable de la tuberculose ?", choices: ["Bactérie", "Virus", "Champignon", "Protozoaire"], correct: 0 },
            { question: "La photosynthèse dans les cyanobactéries se produit dans :", choices: ["Les chloroplastes", "Les mitochondries", "Le cytoplasme", "La membrane plasmique"], correct: 3 },
            { question: "Les champignons peuvent se reproduire par :", choices: ["Mise en spores", "Division binaire", "Bourgeonnement", "Fission simple"], correct: 0 },
            { question: "Les antibiotiques agissent contre :", choices: ["Les bactéries", "Les virus", "Les champignons", "Les protozoaires"], correct: 0 },
            { question: "Les bactéries se reproduisent principalement par :", choices: ["Fission binaire", "Conjugaison", "Bourgeonnement", "Fragmentation"], correct: 0 },
            { question: "Quel est le rôle des plasmides chez les bactéries ?", choices: ["Stocker l'ADN principal", "Fournir des gènes de résistance", "Produire de l'énergie", "Réparer l'ADN"], correct: 1 },
            { question: "Les rétrovirus possèdent un matériel génétique sous forme de :", choices: ["ADN", "ARN", "Protéines", "Lipides"], correct: 1 },
            { question: "Quel est l'agent pathogène responsable du paludisme ?", choices: ["Plasmodium", "Salmonella", "Escherichia coli", "Mycobacterium tuberculosis"], correct: 0 }
          ],
        10: [
            { question: "Quel est le rôle principal de l'ADN ?", choices: ["Stocker l'énergie", "Transmettre les informations génétiques", "Produire des protéines", "Synthétiser des lipides"], correct: 1 },
            { question: "Quelle enzyme est responsable de la réplication de l'ADN ?", choices: ["ADN polymérase", "ARN polymérase", "Ligase", "Topoisomérase"], correct: 0 },
            { question: "Le code génétique est constitué de :", choices: ["Acides aminés", "Nucléotides", "Protéines", "Acides gras"], correct: 1 },
            { question: "La transcription de l'ADN en ARN se déroule dans :", choices: ["Le noyau", "Le cytoplasme", "Les mitochondries", "Les ribosomes"], correct: 0 },
            { question: "Quelle molécule est responsable de la traduction des ARN en protéines ?", choices: ["ADN", "ARN messager", "ARN de transfert", "Ribosome"], correct: 3 },
            { question: "Quel est le rôle des ribosomes ?", choices: ["Synthétiser des lipides", "Traduire l'ARN en protéines", "Transcrire l'ADN", "Stocker l'ADN"], correct: 1 },
            { question: "Qu'est-ce qu'un codon ?", choices: ["Une séquence d'acides aminés", "Une séquence de trois bases sur l'ARNm", "Une enzyme de réplication", "Une protéine structurelle"], correct: 1 },
            { question: "Quelle est la fonction principale de l'ARNm ?", choices: ["Transporter des acides aminés", "Assurer la réplication de l'ADN", "Transmettre l'information génétique du noyau aux ribosomes", "Dégrader les protéines"], correct: 2 },
            { question: "Qu'est-ce qu'une mutation ponctuelle ?", choices: ["Un changement dans une seule base de l'ADN", "L'échange de segments entre chromosomes", "La duplication d'un gène", "La suppression d'un gène"], correct: 0 },
            { question: "La réplication de l'ADN est un processus :", choices: ["Conservatif", "Semi-conservatif", "Discontinu", "Contigu"], correct: 1 }
          ],
        11:  [
            { question: "Quel est le rôle principal des enzymes ?", choices: ["Augmenter la vitesse des réactions chimiques", "Devenir des produits finaux", "Fournir de l'énergie", "Détruire des molécules toxiques"], correct: 0 },
            { question: "Quel type de liaison est responsable de la stabilité de l'ADN ?", choices: ["Liaison ionique", "Liaison hydrogène", "Liaison covalente", "Liaison peptidique"], correct: 1 },
            { question: "Quel est le produit final de la glycolyse ?", choices: ["Acide lactique", "Pyruvate", "Glucose", "Acide acétique"], correct: 1 },
            { question: "Les acides gras sont principalement utilisés dans l'organisme pour :", choices: ["Fournir des sucres", "Stocker l'azote", "Fournir de l'énergie", "Synthétiser des protéines"], correct: 2 },
            { question: "Les protéines sont constituées de chaînes de :", choices: ["Glucides", "Acides gras", "Acides aminés", "Nucleotides"], correct: 2 },
            { question: "La réaction de Krebs a lieu dans :", choices: ["Le noyau", "Les mitochondries", "Le cytoplasme", "Les ribosomes"], correct: 1 },
            { question: "Quel est le rôle principal de l'ATP dans les cellules ?", choices: ["Stocker de l'azote", "Stocker de l'énergie", "Transporter des électrons", "Synthétiser des protéines"], correct: 1 },
            { question: "Laquelle des molécules suivantes est un glucide ?", choices: ["Fructose", "Acide aminé", "Acide gras", "ADN"], correct: 0 },
            { question: "Quel est le nom de la molécule qui est le réservoir d'énergie à court terme dans les cellules ?", choices: ["Glucose", "Glycogène", "ADN", "Triglycéride"], correct: 1 },
            { question: "Quel type de liaison relie les acides aminés dans une protéine ?", choices: ["Liaison peptidique", "Liaison hydrogène", "Liaison ionique", "Liaison covalente"], correct: 0 }
          ],
        12: [
            { question: "Quel est le rôle principal du système circulatoire chez les animaux ?", choices: ["Transport des nutriments et des gaz respiratoires", "Filtration des déchets", "Protection contre les infections", "Régulation de la température corporelle"], correct: 0 },
            { question: "Quel organe est responsable de la filtration du sang chez les vertébrés ?", choices: ["Rein", "Cœur", "Foie", "Poumon"], correct: 0 },
            { question: "Dans quel organe se produit la majorité de l'absorption des nutriments ?", choices: ["Estomac", "Foie", "Intestin grêle", "Côlon"], correct: 2 },
            { question: "Quel type de muscle est responsable des mouvements volontaires chez les animaux ?", choices: ["Muscle lisse", "Muscle cardiaque", "Muscle squelettique", "Muscle viscéral"], correct: 2 },
            { question: "Quelles cellules sont responsables de la conduction de l'influx nerveux ?", choices: ["Hématies", "Neurones", "Lymphocytes", "Plasmosites"], correct: 1 },
            { question: "Quelles hormones sont produites par les glandes parathyroïdes ?", choices: ["Insuline", "Thyroxine", "Parathormone", "Adrénaline"], correct: 2 },
            { question: "Quel est le rôle de la moelle osseuse chez les mammifères ?", choices: ["Production de sang", "Filtration des déchets", "Régulation du métabolisme", "Soutien mécanique des organes"], correct: 0 },
            { question: "Quel est le principal mécanisme de régulation de la température corporelle chez les animaux homéothermes ?", choices: ["Thermorégulation", "Excrétion", "Réponse immunitaire", "Digestion"], correct: 0 },
            { question: "Quelle est la fonction principale des poumons chez les animaux ?", choices: ["Absorption des nutriments", "Élimination des déchets", "Transport de l'oxygène et élimination du dioxyde de carbone", "Synthèse des protéines"], correct: 2 },
            { question: "Quel est le rôle du système lymphatique chez les animaux ?", choices: ["Filtration des déchets", "Transport des nutriments", "Réponse immunitaire et drainage des liquides corporels", "Production d'hormones"], correct: 2 }
          ],
         13:   [
            { question: "Quel est le principal rôle de la photosynthèse chez les plantes ?", choices: ["Produire de l'oxygène", "Produire de l'énergie sous forme de glucose", "Stocker les nutriments", "Absorber l'eau"], correct: 1 },
            { question: "Quel est l'organe principal de la photosynthèse chez les plantes ?", choices: ["Racine", "Feuille", "Fleur", "Tige"], correct: 1 },
            { question: "Dans quelle partie de la cellule végétale se trouve la chlorophylle ?", choices: ["Noyau", "Mitochondrie", "Chloroplaste", "Appareil de Golgi"], correct: 2 },
            { question: "Quel est le rôle des stomates dans les feuilles ?", choices: ["Absorber l'eau", "Permettre les échanges gazeux", "Produire de l'oxygène", "Synthétiser les nutriments"], correct: 1 },
            { question: "La transpiration chez les plantes est le processus par lequel : ", choices: ["Les racines absorbent l'eau", "L'eau s'évapore des feuilles", "Les fleurs produisent des graines", "Les racines libèrent du dioxyde de carbone"], correct: 1 },
            { question: "Quel est le rôle du xylème dans les plantes ?", choices: ["Transporter l'eau et les minéraux", "Transporter les sucres", "Protéger la plante contre les maladies", "Stocker les nutriments"], correct: 0 },
            { question: "Quel type de tissu est responsable de la production de nouvelles cellules chez les plantes ?", choices: ["Tissu méristématique", "Tissu de soutien", "Tissu conducteur", "Tissu de stockage"], correct: 0 },
            { question: "La respiration cellulaire chez les plantes produit principalement : ", choices: ["Oxygène", "Glucose", "Dioxyde de carbone et énergie", "Nutriments"], correct: 2 },
            { question: "Quel facteur est essentiel à la photosynthèse ?", choices: ["Oxygène", "Lumière", "Dioxyde de carbone uniquement", "Eau uniquement"], correct: 1 },
            { question: "Qu'est-ce que la nécrose chez les plantes ?", choices: ["La croissance excessive des racines", "La mort des cellules végétales", "Le processus de maturation des fruits", "La production de nouvelles graines"], correct: 1 }
          ],
          14: [
            { question: "Quel est le principal but de la chromatographie ?", choices: ["Séparer les composants d'un mélange", "Augmenter la température d'une solution", "Neutraliser une solution acide", "Analyser la structure d'un composé"], correct: 0 },
            { question: "Quelle est la méthode utilisée pour déterminer la concentration d'une solution acide à partir d'une solution basique ?", choices: ["Titrage", "Filtration", "Distillation", "Sublimation"], correct: 0 },
            { question: "Quelle est la fonction d'un catalyseur dans une réaction chimique ?", choices: ["Augmenter la température", "Accélérer la réaction sans être consommé", "Changer la concentration des réactifs", "Neutraliser les produits"], correct: 1 },
            { question: "Quelle est la méthode utilisée pour séparer un mélange liquide en ses composants selon leur point d'ébullition ?", choices: ["Distillation", "Chromatographie", "Filtration", "Centrifugation"], correct: 0 },
            { question: "Quelle est la formule chimique de l'eau ?", choices: ["CO2", "H2O", "O2", "CH4"], correct: 1 },
            { question: "Quelle technique est utilisée pour analyser les atomes et les molécules à l'échelle atomique ?", choices: ["Spectroscopie", "Chromatographie", "Titrage", "Electrophorèse"], correct: 0 },
            { question: "Quel est le rôle de l'acide dans une réaction de neutralisation ?", choices: ["Augmenter le pH", "Réagir avec une base pour former de l'eau et du sel", "Décomposer les protéines", "Dissoudre les métaux"], correct: 1 },
            { question: "Quel appareil est utilisé pour mesurer la masse d'un échantillon avec une grande précision ?", choices: ["Balance", "Thermomètre", "Burette", "Flacon volumétrique"], correct: 0 },
            { question: "Quel est le principal type d'interaction chimique dans une liaison ionique ?", choices: ["Partage d'électrons", "Transfert d'électrons", "Forces de Van der Waals", "Attraction entre noyaux"], correct: 1 },
            { question: "Lors d'une réaction chimique, quel facteur influence la vitesse de la réaction ?", choices: ["La couleur des réactifs", "La concentration des réactifs", "La température uniquement", "La masse des réactifs uniquement"], correct: 1 }
          ],
          15:  [
            { question: "Quel est le principal facteur qui influence la répartition des biomes ?", choices: ["La température", "Le pH du sol", "Les prédateurs", "La latitude"], correct: 0 },
            { question: "Qu'est-ce qu'un organisme autotrophe ?", choices: ["Un organisme qui se nourrit de matière organique", "Un organisme capable de produire sa propre nourriture", "Un organisme qui décompose la matière organique", "Un organisme qui consomme d'autres organismes"], correct: 1 },
            { question: "Quel est le rôle des producteurs dans un écosystème ?", choices: ["Fournir de l'énergie aux consommateurs", "Recycler les nutriments", "Maintenir l'équilibre de l'eau", "Équilibrer le pH"], correct: 0 },
            { question: "Quel type de symbiose est observé lorsqu'un organisme bénéficie de l'autre sans lui nuire ?", choices: ["Mutualisme", "Parasitisme", "Commensalisme", "Compétition"], correct: 2 },
            { question: "Quel est l'impact du changement climatique sur les écosystèmes ?", choices: ["Il augmente la biodiversité", "Il modifie les cycles de reproduction", "Il réduit la compétition entre espèces", "Il a un impact négligeable sur les écosystèmes"], correct: 1 },
            { question: "Qu'est-ce que la succession écologique ?", choices: ["Un changement dans la composition des espèces au fil du temps", "L'extinction d'une espèce dans un écosystème", "L'introduction d'une espèce non native", "L'établissement d'un réseau trophique"], correct: 0 },
            { question: "Quel est l'effet de l'introduction d'une espèce invasive dans un écosystème ?", choices: ["Elle améliore la biodiversité", "Elle peut nuire aux espèces locales", "Elle n'a aucun impact", "Elle diminue la compétition"], correct: 1 },
            { question: "Qu'est-ce que la biodiversité ?", choices: ["La diversité des écosystèmes", "La diversité des espèces", "La diversité des populations dans un écosystème", "Toutes les réponses ci-dessus"], correct: 3 },
            { question: "Quel type d'écosystème est caractérisé par une forte salinité et des végétaux adaptés ?", choices: ["Les forêts tropicales", "Les zones humides", "Les marais salants", "Les déserts"], correct: 2 },
            { question: "Qu'est-ce qu'un cycle biogéochimique ?", choices: ["Le recyclage des éléments chimiques dans la biosphère", "Le déplacement des espèces entre les écosystèmes", "La succession des espèces dans un écosystème", "Le processus de photosynthèse"], correct: 0 }
          ],
        16:  [
            { question: "Quel est le rôle principal des enzymes ?", choices: ["Accélérer les réactions chimiques", "Stocker de l'énergie", "Transporter des molécules", "Réparer l'ADN"], correct: 0 },
            { question: "Comment les enzymes agissent-elles sur les substrats ?", choices: ["En augmentant la température de réaction", "En abaissant l'énergie d'activation", "En augmentant la concentration du substrat", "En modifiant la structure du substrat"], correct: 1 },
            { question: "Qu'est-ce qu'un site actif sur une enzyme ?", choices: ["Le site où l'enzyme se lie au substrat", "Le site où l'enzyme se lie à un inhibiteur", "Le site de production d'ATP", "Le site où l'enzyme se dégrade"], correct: 0 },
            { question: "Qu'est-ce qu'un inhibiteur compétitif ?", choices: ["Une molécule qui se lie au site actif de l'enzyme", "Une molécule qui modifie la structure de l'enzyme", "Une molécule qui se lie à un site allostérique", "Une molécule qui accélère la réaction"], correct: 0 },
            { question: "Qu'est-ce qu'une coenzyme ?", choices: ["Une petite molécule organique qui aide l'enzyme à catalyser la réaction", "Une grande protéine qui inhibe l'enzyme", "Un composé qui se lie à l'enzyme pour former un complexe", "Une molécule qui fournit l'énergie pour la réaction"], correct: 0 },
            { question: "Quel est le modèle de la relation enzyme-substrat ?", choices: ["Le modèle clé-serrure", "Le modèle de diffusion", "Le modèle de la température", "Le modèle de l'inhibition"], correct: 0 },
            { question: "Quel facteur peut influencer l'activité enzymatique ?", choices: ["La température", "Le pH", "La concentration de substrat", "Tous les précédents"], correct: 3 },
            { question: "Que se passe-t-il si la température d'une réaction enzymatique augmente au-delà de la température optimale ?", choices: ["L'activité enzymatique augmente", "L'enzyme devient plus efficace", "L'enzyme peut se dénaturer", "L'enzyme produit plus de produits"], correct: 2 },
            { question: "Quel est le rôle des inhibiteurs allostériques ?", choices: ["Ils se lient au site actif et bloquent l'enzyme", "Ils changent la forme de l'enzyme et modifient son activité", "Ils augmentent la vitesse de réaction", "Ils fixent les produits de la réaction"], correct: 1 },
            { question: "Qu'est-ce qu'une réaction enzymatique irréversible ?", choices: ["Une réaction qui produit un produit stable", "Une réaction qui ne peut pas être inversée par l'enzyme", "Une réaction qui a lieu à température ambiante", "Une réaction où le substrat est entièrement converti en produit"], correct: 1 }
          ],
         17: [
            { question: "Quel est le rôle principal de l'ATP dans le métabolisme ?", choices: ["Stocker l'information génétique", "Fournir de l'énergie pour les réactions cellulaires", "Produire des protéines", "Transporter des molécules"], correct: 1 },
            { question: "Quelle voie métabolique est responsable de la production d'ATP ?", choices: ["Glycolyse", "Bêta-oxydation", "Cycle de Krebs", "Toutes les précédentes"], correct: 3 },
            { question: "La glycolyse se produit dans quel compartiment de la cellule ?", choices: ["Noyau", "Mitochondrie", "Cytoplasme", "Réticulum endoplasmique"], correct: 2 },
            { question: "Quel est le produit final de la glycolyse ?", choices: ["Pyruvate", "Acétyl-CoA", "ATP", "Acide lactique"], correct: 0 },
            { question: "Le cycle de Krebs a lieu dans :", choices: ["Cytoplasme", "Mitochondrie", "Noyau", "Réticulum endoplasmique"], correct: 1 },
            { question: "Quelle est la principale fonction du cycle de Krebs ?", choices: ["Produire de l'ATP", "Produire des acides gras", "Produire des électrons pour la chaîne respiratoire", "Produire des protéines"], correct: 2 },
            { question: "Qu'est-ce que la phosphorylation oxydative ?", choices: ["La production d'ATP dans le cytoplasme", "La production d'ATP à partir de la chaîne de transport des électrons dans les mitochondries", "La production de glucose dans le foie", "La production d'ADN dans le noyau"], correct: 1 },
            { question: "Quel est le rôle de la chaîne de transport des électrons ?", choices: ["Stocker l'énergie", "Produire des électrons", "Transporter les électrons pour générer un gradient de protons", "Produire des acides gras"], correct: 2 },
            { question: "Quelle est la fonction principale de la β-oxydation ?", choices: ["La production de glucose à partir d’acides gras", "La dégradation des acides gras pour produire de l’ATP", "La synthèse des protéines", "La synthèse des acides aminés"], correct: 1 },
            { question: "Que se passe-t-il en cas d'absence de glucose pour la production d'ATP ?", choices: ["La cellule produit de l'ATP uniquement par la glycolyse", "Les acides gras sont utilisés pour produire de l'ATP", "La cellule cesse toute production d'énergie", "Le glucose est stocké sous forme de glycogène"], correct: 1 }
          ],
        
  };
  
  let currentLevel = 1;
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  
  function startLevel(level) {
    currentLevel = level;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    document.getElementById("level-summary").style.display = "none";
    loadQuestion();
  }
  
  function loadQuestion() {
    const questionData = questions[currentLevel][currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const choicesContainer = document.getElementById("choices-container");
    const nextButton = document.getElementById("next-button");
  
    questionText.textContent = questionData.question;
    choicesContainer.innerHTML = "";
    questionData.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.onclick = () => checkAnswer(index);
      choicesContainer.appendChild(button);
    });
  
    nextButton.style.display = "none";
  }
  
  function checkAnswer(selectedIndex) {
    const questionData = questions[currentLevel][currentQuestionIndex];
    const nextButton = document.getElementById("next-button");
  
    if (selectedIndex === questionData.correct) {
      correctAnswers++;
    }
  
    nextButton.style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentLevel].length) {
      loadQuestion();
    } else {
      showSummary();
    }
  }
  
  function showSummary() {
    const summary = document.getElementById("level-summary");
    const nextButton = document.getElementById("next-button");
    const percentage = (correctAnswers / questions[currentLevel].length) * 100;
  
    summary.innerHTML = `Vous avez répondu correctement à ${correctAnswers} questions sur ${questions[currentLevel].length}.<br>Votre score est de ${percentage.toFixed(2)}%`;
    summary.style.display = "block";
    nextButton.style.display = "none";
  }
 