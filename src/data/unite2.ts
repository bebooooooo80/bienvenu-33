import { Lesson, OfficialExam, UnitSection, VocabularyWord } from '../types';

export const unite2Vocabulary: VocabularyWord[] = [
  { id: 'u2_v1', french: 'un restaurant', arabic: 'مطعم', category: 'masculin', exampleFr: 'Nous dînons au restaurant ce soir.', exampleAr: 'نتناول العشاء في المطعم هذا المساء.' },
  { id: 'u2_v2', french: 'un repas', arabic: 'وجبة', category: 'masculin', exampleFr: 'Il y a trois repas par jour.', exampleAr: 'توجد ثلاث وجبات يومياً.' },
  { id: 'u2_v3', french: 'le petit déjeuner', arabic: 'وجبة الإفطار', category: 'masculin', exampleFr: 'Au petit déjeuner, je bois du lait.', exampleAr: 'في الإفطار، أشرب حليباً.' },
  { id: 'u2_v4', french: 'le déjeuner', arabic: 'وجبة الغداء', category: 'masculin', exampleFr: 'À 14 heures, nous prenons le déjeuner.', exampleAr: 'في الثانية ظهراً نتناول الغداء.' },
  { id: 'u2_v5', french: 'le dîner', arabic: 'وجبة العشاء', category: 'masculin', exampleFr: 'Le dîner est un repas léger.', exampleAr: 'العشاء وجبة خفيفة.' },
  { id: 'u2_v6', french: 'le menu', arabic: 'قائمة الطعام', category: 'masculin', exampleFr: 'Le garçon apporte le menu.', exampleAr: 'الجرسون يحضر قائمة الطعام.' },
  { id: 'u2_v7', french: 'une boisson', arabic: 'مشروب', category: 'feminin', exampleFr: 'Quelle boisson désirez-vous ?', exampleAr: 'أي مشروب ترغبون به؟' },
  { id: 'u2_v8', french: 'le poulet rôti', arabic: 'دجاج محمر / مشوي', category: 'aliment', exampleFr: 'Je commande du poulet rôti.', exampleAr: 'أطلب دجاجاً محمر.' },
  { id: 'u2_v9', french: 'la viande', arabic: 'لحم', category: 'aliment', exampleFr: 'Il mange de la viande avec du riz.', exampleAr: 'يأكل لحماً مع الأرز.' },
  { id: 'u2_v10', french: 'le poisson', arabic: 'سمك', category: 'aliment', exampleFr: 'Le poisson est frais aujourd\'hui.', exampleAr: 'السمك طازج اليوم.' },
  { id: 'u2_v11', french: 'le riz', arabic: 'أرز', category: 'aliment', exampleFr: 'Un plat de riz blanc.', exampleAr: 'طبق أرز أبيض.' },
  { id: 'u2_v12', french: 'la salade verte', arabic: 'سلطة خضراء', category: 'aliment', exampleFr: 'Une salade verte bien fraîche.', exampleAr: 'سلطة خضراء طازجة.' },
  { id: 'u2_v13', french: 'le fromage', arabic: 'جبن', category: 'aliment', exampleFr: 'Du pain avec du fromage.', exampleAr: 'خبز مع جبن.' },
  { id: 'u2_v14', french: 'un dessert', arabic: 'حلوى بعد الأكل', category: 'masculin', exampleFr: 'Comme dessert, une glace.', exampleAr: 'كتحلية، آيس كريم.' },
  { id: 'u2_v15', french: 'une glace', arabic: 'آيس كريم / مثلجات', category: 'aliment', exampleFr: 'Une glace à la vanille.', exampleAr: 'آيس كريم بالفانيليا.' },
  { id: 'u2_v16', french: 'commander', arabic: 'يطلب (أوردر)', category: 'verbe', exampleFr: 'Je commande un jus d\'orange.', exampleAr: 'أطلب عصير برتقال.' },
  { id: 'u2_v17', french: 'réserver', arabic: 'يحجز (طاولة)', category: 'verbe', exampleFr: 'Jean réserve une table de vingt personnes.', exampleAr: 'جان يحجز طاولة لعشرين شخصاً.' },
  { id: 'u2_v18', french: 'goûter', arabic: 'يتذوق', category: 'verbe', exampleFr: 'Le chef fait goûter le plat.', exampleAr: 'الشيف يجعلنا نتذوق الطبق.' }
];

export const examMiTermeU2: OfficialExam = {
  id: 'exam_unite2_bienvenu2',
  title: 'Examen de l\'Unité 2 - Repas & Restaurant',
  titleAr: 'امتحان الوحدة الثانية - الوجبات والمطعم (20 درجة)',
  academicYear: 'Bienvenu 2 - 2ème Préparatoire',
  totalMarks: 20,
  timeLimitMinutes: 30,
  bookletPages: 'صفحات 56 - 58 من كتاب Bienvenu 2',
  questions: [
    {
      id: 'u2_ex_q1',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص (6 درجات)',
      passage: `Samedi soir, à l'occasion du mariage de Jean avec sa femme Monique, la famille et les amis se réunissent au restaurant "Le Bon Goût". Jean a réservé une grande table de 20 personnes. Le garçon apporte la carte du menu. Comme plat principal, les invités choisissent du poulet rôti avec du riz et de la salade verte. Pour le dessert, le garçon sert des fruits et de la glace au chocolat. Tout le monde est joyeux et félicite les mariés.`,
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '1. Ce repas a lieu à l\'occasion ....................',
      options: ['d\'un mariage', 'd\'un voyage', 'd\'un match de football'],
      correctAnswer: 'd\'un mariage',
      points: 2
    },
    {
      id: 'u2_ex_q2',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص',
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '2. Jean a réservé une table de .................... personnes.',
      options: ['vingt', 'dix', 'quinze'],
      correctAnswer: 'vingt',
      points: 2
    },
    {
      id: 'u2_ex_q3',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص',
      instructionFr: 'B) Mets Vrai (✓) ou Faux (✗) :',
      instructionAr: 'ضع صح أو خطأ:',
      type: 'true_false',
      prompt: '3. Comme dessert, les invités prennent de la glace et des fruits.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Vrai (صح)',
      points: 2
    },
    {
      id: 'u2_ex_q4',
      section: 'situations',
      sectionTitleFr: '2) Situations',
      sectionTitleAr: 'ثانياً: مواقف التواصل (4 درجات)',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة المناسبة:',
      type: 'mcq',
      prompt: '4. Au restaurant, tu demandes l\'addition au garçon, tu dis :',
      options: ['L\'addition, s\'il vous plaît !', 'Le menu, s\'il vous plaît !', 'Bonjour monsieur.'],
      correctAnswer: 'L\'addition, s\'il vous plaît !',
      points: 2
    },
    {
      id: 'u2_ex_q5',
      section: 'situations',
      sectionTitleFr: '2) Situations',
      sectionTitleAr: 'ثانياً: مواقف التواصل',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الموقف المناسب:',
      type: 'mcq',
      prompt: '5. Tu demandes à ton ami sa boisson préférée, tu dis :',
      options: ['Qu\'est-ce que tu aimes boire ?', 'Quel est ton plat préféré ?', 'Où vas-tu ?'],
      correctAnswer: 'Qu\'est-ce que tu aimes boire ?',
      points: 2
    },
    {
      id: 'u2_ex_q6',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد وأدوات التجزئة (6 درجات)',
      instructionFr: 'Choisis le bon article partitif :',
      instructionAr: 'اختر أداة التجزئة المناسبة:',
      type: 'mcq',
      prompt: '6. Au déjeuner, je mange .......... poulet.',
      options: ['du', 'de la', 'de l\'', 'des'],
      correctAnswer: 'du',
      points: 2
    },
    {
      id: 'u2_ex_q7',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد وأدوات التجزئة',
      instructionFr: 'Attention à la négation :',
      instructionAr: 'انتبه للنفي:',
      type: 'mcq',
      prompt: '7. Je ne prends pas .......... salade.',
      options: ['de', 'de la', 'du', 'la'],
      correctAnswer: 'de',
      points: 2
    },
    {
      id: 'u2_ex_q8',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: أدوات الاستفهام',
      instructionFr: 'Choisis le mot interrogatif convenable :',
      instructionAr: 'اختر أداة الاستفهام المناسبة:',
      type: 'mcq',
      prompt: '8. .......... vas-tu pour déjeuner ? - Au restaurant.',
      options: ['Où', 'Quand', 'Comment', 'Pourquoi'],
      correctAnswer: 'Où',
      points: 2
    },
    {
      id: 'u2_ex_q9',
      section: 'production',
      sectionTitleFr: '4) Production',
      sectionTitleAr: 'رابعاً: التعبير وتكوين الجمل (4 درجات)',
      instructionFr: 'Où vas-tu pour... ?',
      instructionAr: 'أين تذهب لـ...؟',
      type: 'fill',
      prompt: '9. Pour prendre un bon repas, je vais au ..........',
      options: ['restaurant', 'stade', 'cinéma'],
      correctAnswer: 'restaurant',
      points: 2
    },
    {
      id: 'u2_ex_q10',
      section: 'production',
      sectionTitleFr: '4) Production',
      sectionTitleAr: 'رابعاً: التعبير وتكوين الجمل',
      instructionFr: 'Complète la phrase :',
      instructionAr: 'أكمل الجملة:',
      type: 'mcq',
      prompt: '10. Au petit déjeuner, les Égyptiens mangent ..........',
      options: ['du foul et des falafels', 'du poisson grillé', 'de la viande rôtie'],
      correctAnswer: 'du foul et des falafels',
      points: 2
    }
  ]
};

export const unite2Section: UnitSection = {
  id: 'unite2',
  order: 3,
  titleFr: 'Module 2 : Unité (2) - Repas & Restaurant',
  titleAr: 'الوحدة الثانية : الوجبات والمطعم (Repas & Restaurant)',
  descriptionAr: 'منهج Bienvenu 2 (الصفحات 35 - 58): حفل زواج جان والمطعم، وجبات اليوم (الإفطار والغداء والعشاء)، الأطعمة والمشروبات، أدوات التجزئة (du, de la, de l\', des)، وأدوات الاستفهام.',
  badgeIcon: '🍽️',
  vocabulary: unite2Vocabulary,
  exam: examMiTermeU2,
  lessons: [
    {
      id: 'u2-texte',
      unitId: 'unite2',
      unitTitle: 'Unité (2) - Repas & Restaurant',
      unitTitleAr: 'الوحدة الثانية (الوجبات والمطعم)',
      order: 1,
      title: 'Texte : Au restaurant "Le Bon Goût"',
      titleAr: 'نص القراءة : في مطعم "المذاق الطيب" (حفل زواج جان)',
      subtitleFr: 'Fête de mariage de Jean & Réservation d\'une table de 20 personnes (p. 35 - 37)',
      estimatedMinutes: 16,
      bookletPages: 'صفحة 35 - 37',
      readingPassage: {
        imageSrc: '',
        imagePageNumber: 35,
        imageCaptionFr: 'Le banquet de mariage de Jean et Monique au restaurant.',
        imageCaptionAr: 'مأدبة زفاف جان ومونيك في المطعم.',
        fullFrenchText: `Samedi soir, c'est la fête de mariage de Jean Morelle et de sa femme Monique. Pour cette belle occasion, Jean a réservé une grande table de vingt personnes au restaurant "Le Bon Goût". Vers 20 heures, les invités arrivent vêtus de leurs beaux habits. Le garçon présente la carte du menu. On commence par un potage chaud et des hors-d'œuvre variés. Ensuite, comme plat principal, la plupart choisissent du poulet rôti avec du riz et de la salade verte. D'autres préfèrent du poisson frais avec des frites. Pour le dessert, le serveur apporte des glaces à la vanille et des corbeilles de fruits. Tout le monde lève son verre et félicite les mariés en chantant.`,
        fullArabicTranslation: `مساء السبت، إنه حفل زواج جان موريل وزوجته مونيك. ولهذه المناسبة الجميلة، حجز جان طاولة كبيرة تتسع لعشرين شخصاً في مطعم "المذاق الطيب". حوالي الساعة الثامنة مساءً، وصل المدعوون مرتدين أجمل ثيابهم. قدّم الجرسون قائمة الطعام. بدأ الجميع بحساء ساخن ومقبلات متنوعة. بعد ذلك، كطبق رئيسي، اختار معظمهم الدجاج المحمر مع الأرز والسلطة الخضراء، وفضّل آخرون السمك الطازج مع البطاطس المقلية. وفي التحلية، أحضر الجرسون آيس كريم بالفانيليا وسلالاً من الفواكه. رفع الجميع كؤوسهم مهنئين العروسين بالغناء والبهجة.`,
        sentences: [
          { id: 'u2_s1', french: 'C\'est la fête de mariage de Jean et Monique.', arabic: 'إنه حفل زواج جان ومونيك.' },
          { id: 'u2_s2', french: 'Jean a réservé une table de vingt personnes au restaurant.', arabic: 'حجز جان طاولة لعشرين شخصاً في المطعم.' },
          { id: 'u2_s3', french: 'Le garçon présente la carte du menu.', arabic: 'يقدم الجرسون قائمة الطعام.' },
          { id: 'u2_s4', french: 'Comme plat principal, on choisit du poulet rôti avec du riz.', arabic: 'كطبق رئيسي نختار دجاجاً محمراً مع الأرز.' },
          { id: 'u2_s5', french: 'Pour le dessert, le serveur apporte des glaces et des fruits.', arabic: 'للتحلية، يحضر الجرسون آيس كريم وفواكه.' }
        ],
        keyVocabulary: [
          { french: 'la fête de mariage', arabic: 'حفل الزفاف', partOfSpeech: 'n.f.' },
          { french: 'le plat principal', arabic: 'الطبق الرئيسي', partOfSpeech: 'n.m.' },
          { french: 'le serveur / le garçon', arabic: 'الجرسون / النادل', partOfSpeech: 'n.m.' },
          { french: 'l\'addition', arabic: 'فاتورة الحساب', partOfSpeech: 'n.f.' }
        ]
      },
      stages: {
        comprendre: {
          titleAr: 'تحليل نص المطعم وحفل الزفاف',
          summaryAr: 'يتناول النص الذهاب للمطعم، حجز الطاولة، قراءة قائمة الطعام، واختيار الأطباق والمشروبات والحلويات.',
          grammarPoints: [
            {
              title: 'مفردات ومراحل الوجبة في المطعم (Le Menu)',
              ruleAr: 'تتكون وجبة المطعم الفرنسية الكاملة من ثلاثة أقسام:',
              details: [
                '1. Entrée / Hors-d\'œuvre (المقبلات): salade verte, potage (شوربة).',
                '2. Plat principal (الطبق الرئيسي): poulet rôti, viande, poisson, riz, frites.',
                '3. Dessert (التحلية): glace à la vanille/chocolat, fruits, gâteau.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'حوار واقعي بين الزبون والجرسون',
          descriptionAr: 'استمع إلى العبارات المستخدمة في المطعم:',
          examples: [
            { french: 'Le garçon : Vous désirez, monsieur ?', arabic: 'الجرسون: ماذا ترغب يا سيدي؟', note: 'صيغة طلب بأدب' },
            { french: 'Le client : Je voudrais du poulet rôti, s\'il vous plaît.', arabic: 'الزبون: أود دجاجاً محمراً من فضلك.', note: 'Je voudrais = أود (للطب المهذب)' },
            { french: 'Le client : L\'addition, s\'il vous plaît.', arabic: 'الزبون: الحساب من فضلك.', note: 'طلب الفاتورة' }
          ]
        },
        pratiquer: {
          titleAr: 'تمارين الفهم والاستيعاب للنص (5 أسئلة)',
          descriptionAr: 'اختر الإجابة الصحيحة بناءً على النص:',
          questions: [
            {
              id: 'u2_t_q1',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '1. Où a lieu la fête de mariage ?',
              options: ['Au restaurant', 'Au club', 'À l\'école'],
              correctAnswer: 'Au restaurant',
              explanation: 'أقيم الحفل في مطعم "Le Bon Goût".'
            },
            {
              id: 'u2_t_q2',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '2. Combien de personnes Jean a-t-il réservé pour elles ?',
              options: ['20 personnes', '14 personnes', '10 personnes'],
              correctAnswer: '20 personnes',
              explanation: 'حجز جان طاولة لـ 20 شخصاً (vingt personnes).'
            },
            {
              id: 'u2_t_q3',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '3. Que mangent les invités comme dessert ?',
              options: ['De la glace et des fruits', 'Du fromage', 'De la salade'],
              correctAnswer: 'De la glace et des fruits',
              explanation: 'تناول المدعوون المثلجات (glace) والفواكه في التحلية.'
            },
            {
              id: 'u2_t_q4',
              type: 'true-false',
              instruction: 'Mets Vrai ou Faux :',
              prompt: '4. Jean s\'est marié avec Suzanne.',
              options: ['Vrai', 'Faux'],
              correctAnswer: 'Faux',
              explanation: 'خطأ؛ تزوج جان من مونيك (Monique).'
            },
            {
              id: 'u2_t_q5',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '5. Qui apporte la carte du menu ?',
              options: ['Le garçon', 'Jean', 'Monique'],
              correctAnswer: 'Le garçon',
              explanation: 'الجرسون هو من يحضر قائمة الطعام.'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيهات في مفردات المطعم',
          descriptionAr: 'فرّق بين الوجبة (repas) وقائمة الطعام (menu) والحساب (addition):',
          commonMistakes: [
            {
              mistake: 'Je mange le menu.',
              correction: 'Je regarde le menu / Je mange le repas.',
              why: 'قائمة الطعام تقرأ (le menu)، والوجبة هي التي تؤكل (le repas).'
            }
          ],
          remedialQuestions: [
            {
              id: 'u2_t_rem',
              type: 'multiple-choice',
              instruction: 'Complète :',
              prompt: 'Après avoir mangé, le client demande .......... au serveur.',
              options: ['l\'addition', 'le menu', 'la table'],
              correctAnswer: 'l\'addition',
              explanation: 'بعد الانتهاء يطلب الزبون الفاتورة (l\'addition).'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي المطعم السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u2_t_def',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: 'Le poulet avec le riz est un ..........',
              options: ['plat principal', 'dessert', 'boisson'],
              correctAnswer: 'plat principal',
              explanation: 'الدجاج مع الأرز طبق رئيسي.'
            }
          ]
        }
      }
    },
    {
      id: 'u2-repas-partitifs',
      unitId: 'unite2',
      unitTitle: 'Unité (2) - Repas & Restaurant',
      unitTitleAr: 'الوحدة الثانية (الوجبات والمطعم)',
      order: 2,
      title: 'Les Repas & Les Articles Partitifs',
      titleAr: 'وجبات اليوم الثلاث وأدوات التجزئة (du, de la, de l\', des)',
      subtitleFr: 'Petit déjeuner, Déjeuner, Dîner + Je mange / Je bois (p. 41 - 44)',
      estimatedMinutes: 18,
      bookletPages: 'صفحة 41 - 44',
      stages: {
        comprendre: {
          titleAr: 'الوجبات اليومية وقاعدة أدوات التجزئة',
          summaryAr: 'تستخدم أدوات التجزئة للتعبير عن تناول كمية أو جزء غير محدد من الأطعمة والمشروبات مع أفعال (manger, boire, prendre, vouloir).',
          grammarPoints: [
            {
              title: '1. وجبات اليوم في مصر وفرنسا (Les 3 repas)',
              ruleAr: 'ثلاث وجبات رئيسية:',
              table: {
                headers: ['الوجبة', 'الوقت التقريبي', 'ما نأكله ونشربه عادة'],
                rows: [
                  ['Le petit déjeuner (الإفطار)', 'Le matin (8h)', 'Du pain, du fromage, de la confiture, du beurre, du lait, du thé'],
                  ['Le déjeuner (الغداء)', 'L\'après-midi (14h)', 'Du poulet, de la viande, du poisson, du riz, de la salade, de l\'eau'],
                  ['Le dîner (العشاء)', 'Le soir (21h)', 'Du yaourt, des fruits, du fromage, une tisane']
                ]
              }
            },
            {
              title: '2. أدوات التجزئة (Les Articles Partitifs)',
              ruleAr: 'تأتي قبل اسم الشيء القابل للتجزئة أو الشرب أو الأكل:',
              table: {
                headers: ['الأداة', 'النوع', 'أمثلة من الكتاب'],
                rows: [
                  ['du', 'مفرد مذكر يبدأ بساكن', 'du poulet, du riz, du fromage, du poisson, du thé, du café, du sucre'],
                  ['de la', 'مفرد مؤنث يبدأ بساكن', 'de la viande, de la salade, de la confiture, de la soupe, de la glace'],
                  ['de l\'', 'مفرد بنوعيه يبدأ بمتحرك', 'de l\'eau (ماء), de l\'huile (زيت), de l\'omelette'],
                  ['des', 'جمع بنوعيه', 'des fruits, des légumes, des frites, des œufs']
                ]
              }
            },
            {
              title: '3. قاعدة النفي مع أدوات التجزئة',
              ruleAr: 'في النفي، تتحول أدوات التجزئة الأربعة (du, de la, de l\', des) إلى (de) أو (d\') بدون استثناء:',
              details: [
                'Je bois du café. -> Je ne bois pas de café.',
                'Elle mange de la viande. -> Elle ne mange pas de viande.',
                'Nous buvons de l\'eau. -> Nous ne buvons pas d\'eau.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة المقارنة بين الإثبات والنفي',
          descriptionAr: 'لاحظ تغير أداة التجزئة:',
          examples: [
            { french: 'Le matin, je prends du lait.', arabic: 'في الصباح، أتناول حليباً.', note: 'lait مذكر -> du' },
            { french: 'Il ne mange pas de poisson.', arabic: 'هو لا يأكل سمكاً.', note: 'في النفي du تحولت إلى de' },
            { french: 'Suzanne boit de l\'eau minérale.', arabic: 'سوزان تشرب ماءً معدنياً.', note: 'eau يبدأ بمتحرك -> de l\'' }
          ]
        },
        pratiquer: {
          titleAr: 'تمارين الوجبات وأدوات التجزئة (10 أسئلة تفاعلية)',
          descriptionAr: 'اختر أداة التجزئة أو الكلمة الصحيحة:',
          questions: [
            {
              id: 'u2_par_1',
              type: 'multiple-choice',
              instruction: 'Choisis l\'article partitif :',
              prompt: '1. Mon père boit .......... thé chaque matin.',
              options: ['du', 'de la', 'de l\'', 'le'],
              correctAnswer: 'du',
              explanation: 'thé اسم مفرد مذكر يأخذ du.'
            },
            {
              id: 'u2_par_2',
              type: 'multiple-choice',
              instruction: 'Choisis l\'article partitif :',
              prompt: '2. Suzanne mange .......... confiture avec du pain.',
              options: ['de la', 'du', 'de l\'', 'des'],
              correctAnswer: 'de la',
              explanation: 'confiture (مربى) اسم مفرد مؤنث يأخذ de la.'
            },
            {
              id: 'u2_par_3',
              type: 'multiple-choice',
              instruction: 'Choisis l\'article partitif :',
              prompt: '3. En été, nous buvons beaucoup .......... eau fraîche.',
              options: ['d\'', 'de l\'', 'de la', 'du'],
              correctAnswer: 'd\'',
              explanation: 'بعد ظرف الكمية beaucoup يأتي دائماً de أو d\'.'
            },
            {
              id: 'u2_par_4',
              type: 'multiple-choice',
              instruction: 'Choisis l\'article partitif :',
              prompt: '4. Gamal commande .......... riz et du poulet.',
              options: ['du', 'de la', 'des', 'de'],
              correctAnswer: 'du',
              explanation: 'riz مفرد مذكر يأخذ du.'
            },
            {
              id: 'u2_par_5',
              type: 'multiple-choice',
              instruction: 'Attention à la négation :',
              prompt: '5. Ali ne mange pas .......... viande.',
              options: ['de', 'de la', 'du', 'des'],
              correctAnswer: 'de',
              explanation: 'في الجملة المنفية تتحول أداة التجزئة إلى de.'
            },
            {
              id: 'u2_par_6',
              type: 'multiple-choice',
              instruction: 'Choisis l\'article partitif :',
              prompt: '6. Comme dessert, je prends .......... glace.',
              options: ['de la', 'du', 'de', 'le'],
              correctAnswer: 'de la',
              explanation: 'glace اسم مفرد مؤنث يأخذ de la.'
            },
            {
              id: 'u2_par_7',
              type: 'multiple-choice',
              instruction: 'Choisis l\'article partitif :',
              prompt: '7. Au marché, la mère achète .......... fruits frais.',
              options: ['des', 'du', 'de la', 'les'],
              correctAnswer: 'des',
              explanation: 'fruits اسم جمع يأخذ des.'
            },
            {
              id: 'u2_par_8',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe convenable :',
              prompt: '8. Qu\'est-ce que tu .......... au petit déjeuner ?',
              options: ['manges', 'mange', 'mangez', 'mangent'],
              correctAnswer: 'manges',
              explanation: 'مع Tu ينتهي فعل manger بـ -es.'
            },
            {
              id: 'u2_par_9',
              type: 'multiple-choice',
              instruction: 'Vocabulaire des repas :',
              prompt: '9. Le repas que l\'on prend le matin s\'appelle ..........',
              options: ['le petit déjeuner', 'le dîner', 'le déjeuner'],
              correctAnswer: 'le petit déjeuner',
              explanation: 'وجبة الصباح هي الإفطار (le petit déjeuner).'
            },
            {
              id: 'u2_par_10',
              type: 'multiple-choice',
              instruction: 'Choisis l\'article partitif :',
              prompt: '10. Pour le petit déjeuner, il y a .......... fromage.',
              options: ['du', 'de la', 'de l\'', 'des'],
              correctAnswer: 'du',
              explanation: 'fromage اسم مفرد مذكر يأخذ du.'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيه: أفعال الميول لا تأخذ تجزئة',
          descriptionAr: 'مع أفعال الحب والتفضيل (aimer, adorer, préférer, détester) نستخدم أداة معرفة (le, la, l\', les) وليس تجزئة:',
          commonMistakes: [
            {
              mistake: 'J\'aime du poisson.',
              correction: 'J\'aime le poisson.',
              why: 'أفعال الميول تصف الشيء بشكل عام وتأخذ أداة معرفة دائماً.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u2_par_rem',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: 'Suzanne adore .......... chocolat.',
              options: ['le', 'du', 'de', 'un'],
              correctAnswer: 'le',
              explanation: 'مع فعل adorer نستخدم أداة المعرفة le.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي التجزئة السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u2_par_def',
              type: 'multiple-choice',
              instruction: 'Attention au piège :',
              prompt: 'Tu bois du café ? - Non, je ne bois pas .......... café.',
              options: ['de', 'du', 'le', 'un'],
              correctAnswer: 'de',
              explanation: 'في النفي تتحول du إلى de مباشرة.'
            }
          ]
        }
      }
    },
    {
      id: 'u2-interrogation-prod',
      unitId: 'unite2',
      unitTitle: 'Unité (2) - Repas & Restaurant',
      unitTitleAr: 'الوحدة الثانية (الوجبات والمطعم)',
      order: 3,
      title: 'Mots Interrogatifs & Production au restaurant',
      titleAr: 'أدوات الاستفهام (Où, Quand, Comment, Pourquoi...) وموضوع المطعم',
      subtitleFr: 'L\'interrogation & Composition "Un déjeuner en famille au restaurant" (p. 45 - 50)',
      estimatedMinutes: 16,
      bookletPages: 'صفحة 45 - 50',
      stages: {
        comprendre: {
          titleAr: 'أدوات الاستفهام وموضوع الغداء في المطعم',
          summaryAr: 'إتقان أدوات الاستفهام للإجابة على أسئلة الامتحان، مع تدريب كتابي متكامل عن الغداء العائلي في المطعم.',
          grammarPoints: [
            {
              title: '1. أدوات الاستفهام المقررة (Les Mots Interrogatifs)',
              ruleAr: 'جدول أدوات الاستفهام ودلالاتها:',
              table: {
                headers: ['الأداة', 'المعنى', 'تسأل عن', 'مثال من الكتاب'],
                rows: [
                  ['Où', 'أين', 'المكان (Lieu)', 'Où vas-tu pour déjeuner ? - Au restaurant.'],
                  ['Quand', 'متى', 'الزمان والوقت (Temps)', 'Quand prends-tu le dîner ? - À 21h.'],
                  ['Comment', 'كيف / ما', 'الحال أو وسيلة المواصلات أو الاسم', 'Comment vas-tu au restaurant ? - En taxi.'],
                  ['Pourquoi', 'لماذا', 'السبب (Cause)', 'Pourquoi vas-tu au restaurant ? - Pour manger.'],
                  ['Que / Qu\'est-ce que', 'ماذا', 'مفعول به غير عاقل', 'Que manges-tu ? - Du poulet.'],
                  ['Qui', 'مَن', 'الفاعل أو المفعول العاقل', 'Qui a réservé la table ? - Jean.'],
                  ['Combien de', 'كم عدد', 'العدد والكمية', 'Combien de personnes ? - 20 personnes.']
                ]
              }
            },
            {
              title: '2. موضوع التعبير: غداء في المطعم (Un déjeuner au restaurant)',
              ruleAr: 'موضوع امتحان متكرر: تحدث عن وجبة غداء مع أسرتك في المطعم:',
              details: [
                'Vendredi dernier, je suis allé au restaurant avec ma famille.',
                'Mon père a réservé une table près de la fenêtre.',
                'Le garçon nous a apporté le menu.',
                'Comme plat principal, nous avons mangé du poulet avec du riz.',
                'Comme dessert, nous avons pris des glaces au chocolat.',
                'Nous avons passé un moment très agréable.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'نماذج أسئلة وإجابات الاستفهام',
          descriptionAr: 'لاحظ الربط بين السؤال والإجابة:',
          examples: [
            { french: 'Pourquoi vas-tu au restaurant ? - Pour fêter le mariage.', arabic: 'لماذا تذهب للمطعم؟ - للاحتفال بالزفاف.', note: 'Pour + Verbe à l\'infinitif (لتوضيح الهدف)' },
            { french: 'Comment vas-tu au club ? - En bus.', arabic: 'كيف تذهب للنادي؟ - بالأوتوبيس.', note: 'وسيلة المواصلات' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات أدوات الاستفهام وموضوع التعبير (8 أسئلة)',
          descriptionAr: 'اختر أداة الاستفهام أو الجملة الصحيحة:',
          questions: [
            {
              id: 'u2_int_1',
              type: 'multiple-choice',
              instruction: 'Choisis le mot interrogatif :',
              prompt: '1. .......... est la fête ? - Vendredi soir.',
              options: ['Quand', 'Où', 'Pourquoi', 'Comment'],
              correctAnswer: 'Quand',
              explanation: 'الإجابة زمن (Vendredi soir) فنسأل بـ Quand (متى).'
            },
            {
              id: 'u2_int_2',
              type: 'multiple-choice',
              instruction: 'Choisis le mot interrogatif :',
              prompt: '2. .......... coûte ce repas ? - 150 L.E.',
              options: ['Combien', 'Comment', 'Où', 'Qui'],
              correctAnswer: 'Combien',
              explanation: 'السؤال عن السعر أو التكلفة: Combien coûte... ?'
            },
            {
              id: 'u2_int_3',
              type: 'multiple-choice',
              instruction: 'Choisis le mot interrogatif :',
              prompt: '3. .......... vas-tu au marché ? - Pour acheter des fruits.',
              options: ['Pourquoi', 'Où', 'Quand', 'Comment'],
              correctAnswer: 'Pourquoi',
              explanation: 'الإجابة تبدأ بـ Pour + مصدر (لشراء الفواكه) فالسؤال بـ Pourquoi (لماذا).'
            },
            {
              id: 'u2_int_4',
              type: 'multiple-choice',
              instruction: 'Choisis le mot interrogatif :',
              prompt: '4. .......... prépare le repas ? - C\'est la mère.',
              options: ['Qui', 'Que', 'Où', 'Comment'],
              correctAnswer: 'Qui',
              explanation: 'الإجابة شخص عاقل (La mère) فنسأل بـ Qui (مَن).'
            },
            {
              id: 'u2_int_5',
              type: 'multiple-choice',
              instruction: 'Choisis le mot interrogatif :',
              prompt: '5. .......... vas-tu au restaurant ? - En voiture.',
              options: ['Comment', 'Quand', 'Pourquoi', 'Qui'],
              correctAnswer: 'Comment',
              explanation: 'الإجابة وسيلة مواصلات (En voiture) فنسأل بـ Comment (كيف).'
            },
            {
              id: 'u2_int_6',
              type: 'multiple-choice',
              instruction: 'Qui parle ?',
              prompt: '6. "Donnez-moi du poulet avec de la salade, s\'il vous plaît." Qui dit cette phrase ?',
              options: ['Le client', 'Le garçon', 'Le médecin'],
              correctAnswer: 'Le client',
              explanation: 'الزبون (le client) هو الذي يطلب طعامه في المطعم.'
            },
            {
              id: 'u2_int_7',
              type: 'multiple-choice',
              instruction: 'Où vas-tu pour... ?',
              prompt: '7. Où vas-tu pour acheter de la viande ?',
              options: ['À la boucherie', 'À la pharmacie', 'À la boulangerie'],
              correctAnswer: 'À la boucherie',
              explanation: 'نشتري اللحم من محل الجزارة (à la boucherie).'
            },
            {
              id: 'u2_int_8',
              type: 'multiple-choice',
              instruction: 'Production écrite :',
              prompt: '8. Pour commencer le repas en famille, on dit :',
              options: ['Bon appétit !', 'Bon voyage !', 'Bonne nuit !'],
              correctAnswer: 'Bon appétit !',
              explanation: 'عند بداية تناول الطعام نقول: Bon appétit ! (شهية طيبة).'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيه: التفرقة بين Qui و Que',
          descriptionAr: 'Qui للعاقل (مَن)، بينما Que لغير العاقل (ماذا):',
          commonMistakes: [
            {
              mistake: 'Que parle ?',
              correction: 'Qui parle ?',
              why: 'للسؤال عن الشخص المتحدث (عاقل) نستخدم Qui.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u2_int_rem',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: '.......... désirez-vous manger ? - Du poisson.',
              options: ['Que', 'Qui', 'Où'],
              correctAnswer: 'Que',
              explanation: 'السؤال عن الشيء الذي ترغب بأكله (غير عاقل) يكون بـ Que.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الاستفهام السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u2_int_def',
              type: 'multiple-choice',
              instruction: 'Choisis vite :',
              prompt: '.......... de personnes y a-t-il à la fête ? - 20 personnes.',
              options: ['Combien', 'Comment', 'Quand'],
              correctAnswer: 'Combien',
              explanation: 'Combien de تسأل عن العدد.'
            }
          ]
        }
      }
    }
  ]
};
