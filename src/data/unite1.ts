import { Lesson, OfficialExam, UnitSection, VocabularyWord } from '../types';

export const unite1Vocabulary: VocabularyWord[] = [
  { id: 'u1_v1', french: 'une invitation', arabic: 'دعوة', category: 'feminin', exampleFr: 'Gamal envoie une invitation à ses amis.', exampleAr: 'جمال يرسل دعوة إلى أصدقائه.' },
  { id: 'u1_v2', french: 'un anniversaire', arabic: 'عيد ميلاد', category: 'masculin', exampleFr: 'C\'est l\'anniversaire de Suzanne.', exampleAr: 'إنه عيد ميلاد سوزان.' },
  { id: 'u1_v3', french: 'une fête', arabic: 'حفلة', category: 'feminin', exampleFr: 'La fête commence à huit heures.', exampleAr: 'الحفلة تبدأ في الثامنة.' },
  { id: 'u1_v4', french: 'un cadeau', arabic: 'هدية', category: 'masculin', exampleFr: 'Jean offre un beau cadeau à Gamal.', exampleAr: 'جان يقدم هدية جميلة لجمال.' },
  { id: 'u1_v5', french: 'un gâteau', arabic: 'تورتة / كعكة', category: 'masculin', exampleFr: 'La maman prépare un grand gâteau.', exampleAr: 'الأم تعد تورتة كبيرة.' },
  { id: 'u1_v6', french: 'une bougie', arabic: 'شمعة', category: 'feminin', exampleFr: 'Il y a 14 bougies sur le gâteau.', exampleAr: 'توجد 14 شمعة على التورتة.' },
  { id: 'u1_v7', french: 'les vacances', arabic: 'الإجازة', category: 'feminin', exampleFr: 'Les vacances sont vite passées.', exampleAr: 'الإجازة مرت سريعاً.' },
  { id: 'u1_v8', french: 'un ami / une amie', arabic: 'صديق / صديقة', category: 'masculin', exampleFr: 'Mon amie française s\'appelle Suzanne.', exampleAr: 'صديقتي الفرنسية اسمها سوزان.' },
  { id: 'u1_v9', french: 'un salon', arabic: 'صالون / غرفة معيشة', category: 'masculin', exampleFr: 'Les amis sont réunis dans le salon.', exampleAr: 'الأصدقاء مجتمعون في الصالون.' },
  { id: 'u1_v10', french: 'une famille', arabic: 'عائلة / أسرة', category: 'feminin', exampleFr: 'Je présente ma famille.', exampleAr: 'أنا أقدم أسرتي.' },
  { id: 'u1_v11', french: 'inviter', arabic: 'يدعو', category: 'verbe', exampleFr: 'J\'invite mes camarades à la maison.', exampleAr: 'أدعو زملائي إلى المنزل.' },
  { id: 'u1_v12', french: 'accepter', arabic: 'يقبل (دعوة)', category: 'verbe', exampleFr: 'Avec plaisir, j\'accepte l\'invitation.', exampleAr: 'بكل سرور، أقبل الدعوة.' },
  { id: 'u1_v13', french: 'refuser', arabic: 'يرفض / يعتذر عن', category: 'verbe', exampleFr: 'Pardon, je refuse car je suis occupé.', exampleAr: 'عذراً، أعتذر لأنني مشغول.' },
  { id: 'u1_v14', french: 'souffler', arabic: 'يطفئ (الشموع)', category: 'verbe', exampleFr: 'Gamal souffle les bougies.', exampleAr: 'جمال يطفئ الشموع.' },
  { id: 'u1_v15', french: 'souhaiter', arabic: 'يتمنى / يهنئ', category: 'verbe', exampleFr: 'Je te souhaite un bon anniversaire !', exampleAr: 'أتمنى لك عيد ميلاد سعيد!' },
  { id: 'u1_v16', french: 'chanter', arabic: 'يغني', category: 'verbe', exampleFr: 'Les enfants chantent ensemble.', exampleAr: 'الأطفال يغنون معاً.' },
  { id: 'u1_v17', french: 'danser', arabic: 'يرقص', category: 'verbe', exampleFr: 'On danse avec la musique.', exampleAr: 'نرقص على أنغام الموسيقى.' },
  { id: 'u1_v18', french: 'apporter', arabic: 'يحضر معه', category: 'verbe', exampleFr: 'Suzanne apporte des fleurs.', exampleAr: 'سوزان تحضر معها زهوراً.' }
];

export const examMiTermeU1: OfficialExam = {
  id: 'exam_unite1_bienvenu2',
  title: 'Examen de l\'Unité 1 (Bienvenu 2)',
  titleAr: 'امتحان الوحدة الأولى - دعوة واحتفال (20 درجة)',
  academicYear: 'Bienvenu 2 - 2ème Préparatoire',
  totalMarks: 20,
  timeLimitMinutes: 30,
  bookletPages: 'صفحات 32 - 33 من كتاب Bienvenu 2',
  questions: [
    {
      id: 'u1_ex_q1',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص (6 درجات)',
      passage: `Vendredi 15 octobre, Gamal fête son anniversaire à la maison. Il a 14 ans. Il invite ses amis de classe : Jean Morelle, Suzanne et Moustafa. Les invités arrivent à 18 heures. Suzanne apporte un beau bouquet de fleurs et Jean offre un livre de français. La maman de Gamal prépare un délicieux gâteau avec 14 bougies. Tous les amis chantent "Joyeux anniversaire" et Gamal souffle les bougies.`,
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '1. Ce texte parle ....................',
      options: ['d\'un anniversaire', 'd\'un accident', 'd\'un voyage à Paris'],
      correctAnswer: 'd\'un anniversaire',
      points: 2
    },
    {
      id: 'u1_ex_q2',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص',
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '2. Gamal a .................... ans.',
      options: ['quatorze', 'treize', 'quinze'],
      correctAnswer: 'quatorze',
      points: 2
    },
    {
      id: 'u1_ex_q3',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص',
      instructionFr: 'B) Mets Vrai (✓) ou Faux (✗) :',
      instructionAr: 'ضع صح أو خطأ:',
      type: 'true_false',
      prompt: '3. La fête a lieu au restaurant.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Faux (خطأ)',
      points: 2
    },
    {
      id: 'u1_ex_q4',
      section: 'situations',
      sectionTitleFr: '2) Situations de communication',
      sectionTitleAr: 'ثانياً: مواقف التواصل اليومية (4 درجات)',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة المناسبة للموقف:',
      type: 'mcq',
      prompt: '4. Ton ami t\'invite à sa fête et tu acceptes, tu dis :',
      options: ['Avec grand plaisir !', 'Désolé, je suis malade.', 'Au revoir.'],
      correctAnswer: 'Avec grand plaisir !',
      points: 2
    },
    {
      id: 'u1_ex_q5',
      section: 'situations',
      sectionTitleFr: '2) Situations de communication',
      sectionTitleAr: 'ثانياً: مواقف التواصل',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الرد المناسب:',
      type: 'mcq',
      prompt: '5. Pour féliciter ton ami pour son anniversaire, tu dis :',
      options: ['Joyeux anniversaire !', 'Bonne nuit !', 'Bon appétit !'],
      correctAnswer: 'Joyeux anniversaire !',
      points: 2
    },
    {
      id: 'u1_ex_q6',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد والضمائر (6 درجات)',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة القواعدية الصحيحة:',
      type: 'mcq',
      prompt: '6. C\'est .......... amie française.',
      options: ['mon', 'ma', 'mes'],
      correctAnswer: 'mon',
      points: 2
    },
    {
      id: 'u1_ex_q7',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد والضمائر',
      instructionFr: 'Choisis le pronom convenable :',
      instructionAr: 'اختر الضمير المناسب:',
      type: 'mcq',
      prompt: '7. Les invitations ? Gamal .......... envoie à ses amis.',
      options: ['les', 'la', 'lui'],
      correctAnswer: 'les',
      points: 2
    },
    {
      id: 'u1_ex_q8',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد والضمائر',
      instructionFr: 'Choisis le pronom C.O.I :',
      instructionAr: 'اختر ضمير المفعول غير المباشر:',
      type: 'mcq',
      prompt: '8. Je téléphone à Suzanne -> Je .......... téléphone.',
      options: ['lui', 'la', 'leur'],
      correctAnswer: 'lui',
      points: 2
    },
    {
      id: 'u1_ex_q9',
      section: 'production',
      sectionTitleFr: '4) Production',
      sectionTitleAr: 'رابعاً: التعبير والإنتاج اللغوي (4 درجات)',
      instructionFr: 'Complète la phrase :',
      instructionAr: 'أكمل الجملة بالكلمة المناسبة:',
      type: 'fill',
      prompt: '9. Pour l\'anniversaire, la maman prépare un grand ..........',
      options: ['gâteau', 'stylo', 'train'],
      correctAnswer: 'gâteau',
      points: 2
    },
    {
      id: 'u1_ex_q10',
      section: 'production',
      sectionTitleFr: '4) Production',
      sectionTitleAr: 'رابعاً: التعبير والإنتاج اللغوي',
      instructionFr: 'Fais une phrase avec (inviter) :',
      instructionAr: 'اختر الجملة الصحيحة لغوياً:',
      type: 'mcq',
      prompt: '10. (inviter - amis) :',
      options: [
        'J\'invite mes amis à mon anniversaire.',
        'Les amis inviter moi.',
        'Inviter à la maison.'
      ],
      correctAnswer: 'J\'invite mes amis à mon anniversaire.',
      points: 2
    }
  ]
};

export const unite1Section: UnitSection = {
  id: 'unite1',
  order: 2,
  titleFr: 'Module 1 : Unité (1) - Invitation',
  titleAr: 'الوحدة الأولى : دعوة واحتفال (Invitation)',
  descriptionAr: 'منهج Bienvenu 2 (الصفحات 11 - 34): نص الأصدقاء عند جمال، مواقف قبول ورفض الدعوة، صفات الملكية وشرط المتحرك، الضمير On، ضمائر المفعول المباشر وغير المباشر (COD & COI)، وموضوع قدّم عائلتك.',
  badgeIcon: '✉️',
  vocabulary: unite1Vocabulary,
  exam: examMiTermeU1,
  lessons: [
    {
      id: 'u1-texte',
      unitId: 'unite1',
      unitTitle: 'Unité (1) - Invitation',
      unitTitleAr: 'الوحدة الأولى (دعوة)',
      order: 1,
      title: 'Texte : Les amis chez Gamal',
      titleAr: 'نص القراءة : الأصدقاء في منزل جمال (انقضاء الإجازة)',
      subtitleFr: 'Compréhension du texte & Personnages (p. 11 - 13)',
      estimatedMinutes: 15,
      bookletPages: 'صفحة 11 - 13',
      readingPassage: {
        imageSrc: '',
        imagePageNumber: 11,
        imageCaptionFr: 'Les amis réunis chez Gamal pour fêter son anniversaire.',
        imageCaptionAr: 'الأصدقاء مجتمعون في منزل جمال للاحتفال بعيد ميلاده.',
        fullFrenchText: `Les vacances sont vite passées. C'est la rentrée scolaire. Aujourd'hui, les amis sont réunis chez Gamal pour fêter son anniversaire. Gamal a invité ses camarades : Jean Morelle, Suzanne et Moustafa. Dans le salon, il y a de la musique et des lumières. Suzanne apporte un beau bouquet de fleurs et Jean offre un livre à Gamal. Moustafa apporte des ballons colorés. La mère de Gamal a préparé un délicieux gâteau avec quatorze bougies. Tout le monde chante et passe une soirée formidable.`,
        fullArabicTranslation: `مرت الإجازة سريعاً. إنها العودة المدرسية. اليوم يجتمع الأصدقاء في منزل جمال للاحتفال بعيد ميلاده. دعا جمال زملاءه: جان موريل، سوزان، ومصطفى. في الصالون، توجد موسيقى وأضواء احتفالية. سوزان تحضر باقة زهور جميلة، وجان يقدم كتاباً لجمال. مصطفى يحضر بالونات ملونة. أعدت والدة جمال كعكة شهية عليها 14 شمعة. الجميع يغني ويقضي سهرة رائعة.`,
        sentences: [
          { id: 's1', french: 'Les vacances sont vite passées.', arabic: 'مرت الإجازة سريعاً.' },
          { id: 's2', french: 'Aujourd\'hui, les amis sont réunis chez Gamal pour fêter son anniversaire.', arabic: 'اليوم، يجتمع الأصدقاء في منزل جمال للاحتفال بعيد ميلاده.' },
          { id: 's3', french: 'Gamal a invité ses camarades : Jean Morelle, Suzanne et Moustafa.', arabic: 'دعا جمال زملاءه: جان موريل، سوزان، ومصطفى.' },
          { id: 's4', french: 'Suzanne apporte un beau bouquet de fleurs.', arabic: 'سوزان تحضر باقة زهور جميلة.' },
          { id: 's5', french: 'Jean offre un livre à Gamal.', arabic: 'جان يقدم كتاباً لجمال.' },
          { id: 's6', french: 'La mère a préparé un gâteau avec quatorze bougies.', arabic: 'أعدت الأم كعكة عليها 14 شمعة.' }
        ],
        keyVocabulary: [
          { french: 'les vacances', arabic: 'الإجازة', partOfSpeech: 'n.f.pl' },
          { french: 'fêter', arabic: 'يحتفل بـ', partOfSpeech: 'v.' },
          { french: 'un bouquet de fleurs', arabic: 'باقة زهور', partOfSpeech: 'n.m.' },
          { french: 'souffler les bougies', arabic: 'يطفئ الشموع', partOfSpeech: 'exp.' }
        ]
      },
      stages: {
        comprendre: {
          titleAr: 'تحليل نص القراءة والشخصيات (Bienvenu 2)',
          summaryAr: 'يدور النص حول احتفال عيد ميلاد جمال في منزله بحضور أصدقائه الفرنسيين والمصريين وما قدموه من هدايا.',
          grammarPoints: [
            {
              title: 'شخصيات النص (Les Personnages)',
              ruleAr: 'Gamal (صاحب عيد الميلاد - 14 سنة)، Jean Morelle (الصديق الفرنسي)، Suzanne (الصديقة الفرنسية)، Moustafa (الصديق المصري).',
              details: [
                'Lieu (المكان): Chez Gamal (في منزل جمال)',
                'Occasion (المناسبة): L\'anniversaire de Gamal (عيد ميلاد جمال)',
                'Cadeaux (الهدايا): Suzanne offre des fleurs, Jean offre un livre.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'جمل مفتاحية من النص',
          descriptionAr: 'استمع وركز في معاني الكلمات:',
          examples: [
            { french: 'Chez qui sont les amis ? - Chez Gamal.', arabic: 'عند من يجتمع الأصدقاء؟ - عند جمال.', note: 'Chez + Nom = في بيت أو مكان الشخص' },
            { french: 'Quel âge a Gamal ? - Il a 14 ans.', arabic: 'كم عمر جمال؟ - 14 سنة.', note: 'مع العمر نستخدم فعل Avoir' }
          ]
        },
        pratiquer: {
          titleAr: 'تمارين الفهم والاستيعاب (5 أسئلة تفاعلية)',
          descriptionAr: 'أجب بحسب ما قرأت في النص:',
          questions: [
            {
              id: 'u1_t_q1',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '1. Pourquoi les amis sont-ils réunis chez Gamal ?',
              options: ['Pour étudier', 'Pour fêter son anniversaire', 'Pour regarder un match'],
              correctAnswer: 'Pour fêter son anniversaire',
              explanation: 'اجتمع الأصدقاء في منزل جمال للاحتفال بعيد ميلاده.'
            },
            {
              id: 'u1_t_q2',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '2. Qu\'est-ce que Suzanne apporte ?',
              options: ['Un gâteau', 'Un bouquet de fleurs', 'Une montre'],
              correctAnswer: 'Un bouquet de fleurs',
              explanation: 'أحضرت سوزان باقة زهور جميلة لجمال.'
            },
            {
              id: 'u1_t_q3',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '3. Quel âge a Gamal ?',
              options: ['12 ans', '14 ans', '16 ans'],
              correctAnswer: '14 ans',
              explanation: 'عمر جمال 14 سنة كما ورد في النص (quatorze bougies).'
            },
            {
              id: 'u1_t_q4',
              type: 'true-false',
              instruction: 'Mets Vrai ou Faux :',
              prompt: '4. La fête a lieu au club.',
              options: ['Vrai', 'Faux'],
              correctAnswer: 'Faux',
              explanation: 'خطأ؛ الحفلة أقيمت في منزل جمال (chez Gamal / à la maison).'
            },
            {
              id: 'u1_t_q5',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '5. Qui a préparé le gâteau d\'anniversaire ?',
              options: ['Suzanne', 'La mère de Gamal', 'Jean'],
              correctAnswer: 'La mère de Gamal',
              explanation: 'والدة جمال هي من أعدت الكعكة الشهية.'
            }
          ]
        },
        corriger: {
          titleAr: 'تصحيح الأخطاء الشائعة في الفهم',
          descriptionAr: 'انتبه للتفاصيل التالية:',
          commonMistakes: [
            {
              mistake: 'Gamal est invité.',
              correction: 'Gamal invite ses amis.',
              why: 'جمال هو الداعي وصاحب عيد الميلاد وليس المدعو.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u1_t_rem',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: 'Chez qui les amis passent-ils la soirée ?',
              options: ['Chez Gamal', 'Chez Jean', 'Au restaurant'],
              correctAnswer: 'Chez Gamal',
              explanation: 'السهرة كانت في منزل جمال.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الفهم السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u1_t_def',
              type: 'multiple-choice',
              instruction: 'Cadeau de Jean :',
              prompt: 'Jean offre .......... à Gamal.',
              options: ['un livre', 'des fleurs', 'un ballon'],
              correctAnswer: 'un livre',
              explanation: 'قدم جان كتاب لغة فرنسية هدية لجمال.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-situations-prod',
      unitId: 'unite1',
      unitTitle: 'Unité (1) - Invitation',
      unitTitleAr: 'الوحدة الأولى (دعوة)',
      order: 2,
      title: 'Situations & Présente ta famille',
      titleAr: 'مواقف قبول ورفض الدعوة والتعبير الكتابي: قدّم أسرتك',
      subtitleFr: 'Accepter / Refuser une invitation & Production écrite (p. 15 - 16)',
      estimatedMinutes: 16,
      bookletPages: 'صفحة 15 - 16',
      stages: {
        comprendre: {
          titleAr: 'تعبيرات قبول ورفض الدعوة وموضوع الأسرة',
          summaryAr: 'تعلم كيف تدعو شخصاً، وكيف تقبل الدعوة أو ترفضها بلباقة، مع كتابة موضوع متكامل لتقديم أفراد الأسرة ومهنهم.',
          grammarPoints: [
            {
              title: '1. توجيه وقبول ورفض الدعوة (L\'invitation)',
              ruleAr: 'تعبيرات أساسية مقررة في امتحانات الصف الثاني:',
              table: {
                headers: ['الموقف', 'التعبير الفرنسي', 'المعنى بالعربية'],
                rows: [
                  ['Pour inviter (للدعوة)', 'Je t\'invite à mon anniversaire.', 'أدعوك لحضور عيد ميلادي.'],
                  ['Pour accepter (لقبول الدعوة)', 'Avec grand plaisir ! / D\'accord, je viens.', 'بكل سرور! / موافق، سآتي.'],
                  ['Pour refuser (لرفض والاعتذار)', 'Pardon, je ne peux pas, je suis occupé/malade.', 'عذراً، لا أستطيع، أنا مشغول/مريض.'],
                  ['Pour féliciter (للتهنئة)', 'Joyeux anniversaire ! / Bon anniversaire !', 'عيد ميلاد سعيد!']
                ]
              }
            },
            {
              title: '2. موضوع التعبير: قدّم أسرتك (Présente ta famille)',
              ruleAr: 'عناصر الموضوع: الاسم، الأب ومهنته، الأم ومهنتها، الإخوة والأخوات.',
              details: [
                'Je m\'appelle Gamal, j\'ai 14 ans.',
                'Mon père s\'appelle Ali, il est médecin à l\'hôpital.',
                'Ma mère s\'appelle Mona, elle est professeur de français.',
                'J\'ai un frère (Sami) et une sœur (Sara).',
                'Nous habitons au Caire dans un bel appartement.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'نماذج مواقف واقعية',
          descriptionAr: 'لاحظ كيف تختار الرد الأنسب بحسب المطلوب:',
          examples: [
            { french: 'Ton ami t\'invite et tu refuses, tu dis : Désolé, je suis malade.', arabic: 'صديقك يدعوك وأنت ترفض: عذراً، أنا مريض.', note: 'Refuser = عذر أو اعتذار' },
            { french: 'Tu félicites ton ami : Bon anniversaire !', arabic: 'تهنئ صديقك: عيد ميلاد سعيد!', note: 'Féliciter = تهنئة' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات المواقف والتعبير (7 أسئلة تفاعلية)',
          descriptionAr: 'اختر الإجابة الصحيحة لكل موقف:',
          questions: [
            {
              id: 'u1_sit_1',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne réponse :',
              prompt: '1. Tu invites ton ami français à visiter l\'Égypte, tu dis :',
              options: [
                'Je t\'invite à visiter mon pays l\'Égypte.',
                'Pourquoi tu visites Paris ?',
                'L\'Égypte est loin.'
              ],
              correctAnswer: 'Je t\'invite à visiter mon pays l\'Égypte.',
              explanation: 'لتوجيه الدعوة نستخدم صيغة Je t\'invite à...'
            },
            {
              id: 'u1_sit_2',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne réponse :',
              prompt: '2. Ton ami accepte ton invitation, il te dit :',
              options: ['Avec plaisir, je viens.', 'Non, j\'ai un examen.', 'C\'est trop tard.'],
              correctAnswer: 'Avec plaisir, je viens.',
              explanation: 'تعبير القبول الشهير: Avec plaisir (بكل سرور).'
            },
            {
              id: 'u1_sit_3',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne réponse :',
              prompt: '3. Tu t\'excuses de ne pas aller à la fête, tu dis :',
              options: [
                'Pardon, je suis malade.',
                'D\'accord, à quelle heure ?',
                'Bonne fête !'
              ],
              correctAnswer: 'Pardon, je suis malade.',
              explanation: 'للاعتذار والرفض تقدم سبباً: Pardon, je suis malade.'
            },
            {
              id: 'u1_sit_4',
              type: 'multiple-choice',
              instruction: 'Présentation de la famille :',
              prompt: '4. Pour présenter la profession de ton père, tu dis :',
              options: ['Mon père est médecin.', 'Mon père a 45 ans.', 'Mon père s\'appelle Samir.'],
              correctAnswer: 'Mon père est médecin.',
              explanation: 'السؤال عن المهنة (la profession) فنقول: il est médecin.'
            },
            {
              id: 'u1_sit_5',
              type: 'multiple-choice',
              instruction: 'Complète la phrase de production :',
              prompt: '5. Ma mère travaille au lycée, elle est ..........',
              options: ['professeur', 'médecin', 'pharmacien'],
              correctAnswer: 'professeur',
              explanation: 'العمل في المدرسة الثانوية (au lycée) يدل على مهنة معلم (professeur).'
            },
            {
              id: 'u1_sit_6',
              type: 'multiple-choice',
              instruction: 'Choisis le bon souhait :',
              prompt: '6. C\'est le 1er janvier, tu dis à tes amis :',
              options: ['Bonne année !', 'Bon appétit !', 'Bon voyage !'],
              correctAnswer: 'Bonne année !',
              explanation: 'في بداية العام الجديد في الأول من يناير نقول: Bonne année !'
            },
            {
              id: 'u1_sit_7',
              type: 'multiple-choice',
              instruction: 'Fais une phrase avec (offrir - cadeau) :',
              prompt: '7. Choisis la phrase correcte :',
              options: [
                'J\'offre un beau cadeau à mon ami.',
                'Un cadeau offrir.',
                'Moi offrir cadeau fête.'
              ],
              correctAnswer: 'J\'offre un beau cadeau à mon ami.',
              explanation: 'الجملة الصحيحة نحوياً وتركيبياً: أقدم هدية جميلة لصديقي.'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيهات أسئلة المواقف في الامتحان',
          descriptionAr: 'حدد دائماً من المتحدث: هل أنت من تسأل (Tu demandes) أم أنت من تقول الإجابة (Tu dis)؟',
          commonMistakes: [
            {
              mistake: 'Tu invites un ami, tu dis : Avec plaisir.',
              correction: 'Tu invites un ami, tu dis : Je t\'invite chez moi.',
              why: 'Avec plaisir يقولها الصديق المدعو عند القبول وليس الداعي.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u1_sit_rem',
              type: 'multiple-choice',
              instruction: 'Précise l\'action :',
              prompt: 'Tu demandes à ton ami son âge, tu dis :',
              options: ['Quel âge as-tu ?', 'J\'ai 14 ans.', 'Il a 15 ans.'],
              correctAnswer: 'Quel âge as-tu ?',
              explanation: 'أنت تسأله عن عمره فتسأله: Quel âge as-tu ?'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الموقف السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u1_sit_def',
              type: 'multiple-choice',
              instruction: 'Réaction rapide :',
              prompt: 'Ton ami t\'offre un cadeau, tu lui dis :',
              options: ['Merci beaucoup !', 'Pardon.', 'Au revoir.'],
              correctAnswer: 'Merci beaucoup !',
              explanation: 'عند تلقي هدية تشكره وتقول: Merci beaucoup !'
            }
          ]
        }
      }
    },
    {
      id: 'u1-grammaire-adjectifs-on',
      unitId: 'unite1',
      unitTitle: 'Unité (1) - Invitation',
      unitTitleAr: 'الوحدة الأولى (دعوة)',
      order: 3,
      title: 'Grammaire : Adjectifs Possessifs & Le Pronom "On"',
      titleAr: 'صفات الملكية (وشرط المتحرك) + الضمير On',
      subtitleFr: 'mon/ton/son, ma/ta/sa, mes/tes/ses + Règle de voyelle (p. 17 - 19)',
      estimatedMinutes: 18,
      bookletPages: 'صفحة 17 - 19',
      stages: {
        comprendre: {
          titleAr: 'جدول صفات الملكية والقاعدة الذهبية للمتحرك',
          summaryAr: 'تتبع صفة الملكية في الفرنسية الاسم المملوك من حيث التذكير والتأنيث والعدد، مع قاعدة هامة للمفرد المؤنث المبدوء بمتحرك.',
          grammarPoints: [
            {
              title: '1. جدول صفات الملكية (Les Adjectifs Possessifs)',
              ruleAr: 'حسب المالك والمملوك:',
              table: {
                headers: ['المالك (Sujet)', 'مفرد مذكر (Masculin)', 'مفرد مؤنث (Féminin)', 'جمع بنوعيه (Pluriel)'],
                rows: [
                  ['Je (أنا)', 'mon (mon père, mon livre)', 'ma (ma mère, ma maison)', 'mes (mes parents, mes amis)'],
                  ['Tu (أنتَ/أنتِ)', 'ton (ton frère, ton stylo)', 'ta (ta sœur, ta classe)', 'tes (tes cahiers)'],
                  ['Il / Elle (هو/هي)', 'son (son oncle, son sac)', 'sa (sa tante, sa fête)', 'ses (ses invitations)'],
                  ['Nous (نحن)', 'notre', 'notre', 'nos (nos amis)'],
                  ['Vous (أنتم/حضرتك)', 'votre', 'votre', 'vos (vos devoirs)'],
                  ['Ils / Elles (هم/هن)', 'leur', 'leur', 'leurs (leurs cadeaux)']
                ]
              }
            },
            {
              title: '2. القاعدة الذهبية لحرف المتحرك (Règle Fondamentale)',
              ruleAr: 'إذا كان الاسم مفرد مؤنث يبدأ بحرف متحرك (a, e, i, o, u, y) أو h صامتة، نستخدم (mon / ton / son) بدلاً من (ma / ta / sa) لتفادي التقاء ساكنين:',
              details: [
                'amie (صديقة - مؤنث): نقول mon amie وليس ma amie.',
                'école (مدرسة - مؤنث): نقول ton école وليس ta école.',
                'adresse (عنوان - مؤنث): نقول son adresse وليس sa adresse.'
              ]
            },
            {
              title: '3. قاعدة الضمير "On"',
              ruleAr: 'الضمير On يعني (نحن) أو (الناس) من حيث المعنى، ولكنه يُصرف دائماً مثل الضمير المفرد (Il / Elle):',
              details: [
                'On va au cinéma. (معناه نحن ذاهبون للسينما، وفعل va مصرف مع المفرد)',
                'On mange le gâteau ensemble. (نأكل الكعكة معاً)'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة عملية لصفات الملكية والضمير On',
          descriptionAr: 'دقق في مطابقة صفة الملكية:',
          examples: [
            { french: 'C\'est mon amie Suzanne.', arabic: 'هذه صديقتي سوزان.', note: 'استخدمنا mon لأن amie تبدأ بحرف متحرك a' },
            { french: 'Gamal fête son anniversaire.', arabic: 'جمال يحتفل بعيد ميلاده.', note: 'anniversaire مذكر ومملوك لجمال (Il)' },
            { french: 'À la fête, on chante tous.', arabic: 'في الحفلة، نغني جميعاً.', note: 'On أخذ تصريف المفرد chante (-e)' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات صفات الملكية والضمير On (8 أسئلة)',
          descriptionAr: 'اختر صفة الملكية أو التصريف الصحيح:',
          questions: [
            {
              id: 'u1_pos_1',
              type: 'multiple-choice',
              instruction: 'Choisis l\'adjectif possessif :',
              prompt: '1. Gamal invite .......... amie française.',
              options: ['son', 'sa', 'ses', 'leur'],
              correctAnswer: 'son',
              explanation: 'amie مفرد مؤنث تبدأ بمتحرك فيتحول sa إلى son.'
            },
            {
              id: 'u1_pos_2',
              type: 'multiple-choice',
              instruction: 'Choisis l\'adjectif possessif :',
              prompt: '2. J\'écris .......... devoirs de français.',
              options: ['mes', 'mon', 'ma', 'son'],
              correctAnswer: 'mes',
              explanation: 'devoirs اسم جمع، ومع المالك Je نستخدم mes.'
            },
            {
              id: 'u1_pos_3',
              type: 'multiple-choice',
              instruction: 'Choisis l\'adjectif possessif :',
              prompt: '3. Tu téléphones à .......... père ce soir ?',
              options: ['ton', 'ta', 'tes', 'son'],
              correctAnswer: 'ton',
              explanation: 'père مفرد مذكر، ومع المالك Tu نستخدم ton.'
            },
            {
              id: 'u1_pos_4',
              type: 'multiple-choice',
              instruction: 'Choisis l\'adjectif possessif :',
              prompt: '4. Suzanne va à .......... école en bus.',
              options: ['son', 'sa', 'ses', 'leur'],
              correctAnswer: 'son',
              explanation: 'école مفرد مؤنث يبدأ بمتحرك é فيأخذ son بدلاً من sa.'
            },
            {
              id: 'u1_pos_5',
              type: 'multiple-choice',
              instruction: 'Conjugue avec le pronom On :',
              prompt: '5. En Égypte, on .......... l\'arabe.',
              options: ['parle', 'parlent', 'parlons', 'parlez'],
              correctAnswer: 'parle',
              explanation: 'الضمير On يأخذ تصريف المفرد الغائب (Il/Elle) وينتهي بـ -e.'
            },
            {
              id: 'u1_pos_6',
              type: 'multiple-choice',
              instruction: 'Conjugue avec le pronom On :',
              prompt: '6. Aujourd\'hui, on .......... au restaurant.',
              options: ['va', 'vont', 'allons', 'vais'],
              correctAnswer: 'va',
              explanation: 'فعل Aller مع On يصرف: On va.'
            },
            {
              id: 'u1_pos_7',
              type: 'multiple-choice',
              instruction: 'Choisis l\'adjectif possessif :',
              prompt: '7. Les élèves écoutent .......... professeur.',
              options: ['leur', 'leurs', 'ses', 'sa'],
              correctAnswer: 'leur',
              explanation: 'المالك جمع (Les élèves) والمملوك مفرد (professeur) فنأخذ leur بدون s.'
            },
            {
              id: 'u1_pos_8',
              type: 'multiple-choice',
              instruction: 'Choisis l\'adjectif possessif :',
              prompt: '8. Nous aimons .......... maison.',
              options: ['notre', 'nos', 'mon', 'votre'],
              correctAnswer: 'notre',
              explanation: 'مع Nous والمملوك مفرد مؤنث نستخدم notre.'
            }
          ]
        },
        corriger: {
          titleAr: 'أبرز فخاخ صفات الملكية',
          descriptionAr: 'احذر من كتابة ma amie أو sa école:',
          commonMistakes: [
            {
              mistake: 'C\'est ma amie.',
              correction: 'C\'est mon amie.',
              why: 'يلتقي حرفان متحركان (a + a)، لذلك نستبدل ma بـ mon دائماً.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u1_pos_rem',
              type: 'multiple-choice',
              instruction: 'Corrige :',
              prompt: 'Elle prend .......... adresse pour envoyer la lettre.',
              options: ['son', 'sa', 'ses'],
              correctAnswer: 'son',
              explanation: 'adresse تبدأ بمتحرك فتأخذ son.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الملكية والمتحرك',
          descriptionAr: 'حل في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u1_pos_def',
              type: 'multiple-choice',
              instruction: 'Choisis vite :',
              prompt: 'Tu aimes .......... nouvelle école ?',
              options: ['ta', 'ton', 'tes'],
              correctAnswer: 'ta',
              explanation: 'انتبه: nouvelle تبدأ بحرف ساكن n وليس متحركاً، فتعود لأصلها المؤنث ta.'
            }
          ]
        }
      }
    },
    {
      id: 'u1-grammaire-pronoms-cod-coi',
      unitId: 'unite1',
      unitTitle: 'Unité (1) - Invitation',
      unitTitleAr: 'الوحدة الأولى (دعوة)',
      order: 4,
      title: 'Grammaire : Pronoms Personnels C.O.D & C.O.I',
      titleAr: 'ضمائر المفعول المباشر وغير المباشر (le, la, l\', les / lui, leur)',
      subtitleFr: 'Complément d\'objet direct et indirect (p. 20 - 23)',
      estimatedMinutes: 20,
      bookletPages: 'صفحة 20 - 23',
      stages: {
        comprendre: {
          titleAr: 'شرح شامل لضمائر المفعول المباشر وغير المباشر',
          summaryAr: 'تستخدم الضمائر الشخصية لتفادي تكرار الاسم في الجملة. ويوضع الضمير دائماً قبل الفعل المصرف.',
          grammarPoints: [
            {
              title: '1. ضمائر المفعول به المباشر (C.O.D) - بدون حرف جر',
              ruleAr: 'تحل محل مفعول به مباشر غير مسبوق بحرف جر:',
              table: {
                headers: ['الضمير', 'الاستخدام', 'مثال من الكتاب'],
                rows: [
                  ['le (l\')', 'مفرد مذكر', 'Tu regardes le match ? - Oui, je le regarde.'],
                  ['la (l\')', 'مفرد مؤنث', 'Tu manges la pomme ? - Oui, je la mange.'],
                  ['l\'', 'مفرد بنوعيه قبل فعل يبدأ بمتحرك', 'Tu invites Suzanne ? - Oui, je l\'invite.'],
                  ['les', 'جمع بنوعيه', 'Tu écris les invitations ? - Oui, je les écris.']
                ]
              }
            },
            {
              title: '2. ضمائر المفعول به غير المباشر (C.O.I) - العاقل المسبوق بـ (à)',
              ruleAr: 'تحل محل اسم شخص أو عاقل مسبوق بحرف الجر (à / au / à la / aux):',
              table: {
                headers: ['الضمير', 'الاستخدام', 'أمثلة هامة من Bienvenu 2'],
                rows: [
                  ['lui', 'مفرد عاقل (مذكر أو مؤنث)', 'Je parle à Gamal -> Je lui parle.\nJe téléphone à Suzanne -> Je lui téléphone.'],
                  ['leur', 'جمع عاقل (مذكر أو مؤنث) بدون s', 'J\'envoie des cadeaux aux amis -> Je leur envoie des cadeaux.']
                ]
              }
            },
            {
              title: '3. مكان وضع الضمير',
              ruleAr: 'يوضع الضمير دائماً قبل الفعل المصرف (Je lui parle / Je ne lui parle pas). وإذا كان هناك فعلان (مصرف + مصدر)، يوضع الضمير قبل المصدر (Je vais lui parler).'
            }
          ]
        },
        exemple: {
          titleAr: 'مقارنة مباشرة بين COD و COI',
          descriptionAr: 'لاحظ وجود أو غياب حرف الجر à:',
          examples: [
            { french: 'Je vois Gamal. -> Je le vois.', arabic: 'مفعول مباشر (لا يوجد حرف جر) -> le' },
            { french: 'Je parle à Gamal. -> Je lui parle.', arabic: 'مفعول غير مباشر عاقل بحرف الجر à -> lui' },
            { french: 'J\'écris aux amis. -> Je leur écris.', arabic: 'جمع عاقل مع حرف الجر aux -> leur' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات ضمائر المفعول (8 أسئلة)',
          descriptionAr: 'اختر الضمير الشخصي المناسب لكل جملة:',
          questions: [
            {
              id: 'u1_prn_1',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '1. Tu écoutes le professeur ? - Oui, je .......... écoute.',
              options: ['le', 'l\'', 'lui', 'les'],
              correctAnswer: 'l\'',
              explanation: 'المفعول le professeur مذكر، وفعل écoute يبدأ بمتحرك فيتحول le إلى l\'.'
            },
            {
              id: 'u1_prn_2',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '2. Gamal écrit à ses camarades ? - Oui, il .......... écrit.',
              options: ['les', 'leur', 'lui', 'des'],
              correctAnswer: 'leur',
              explanation: 'à ses camarades هو مفعول غير مباشر عاقل جمع مسبوق بـ à فيعوض عنه بـ leur.'
            },
            {
              id: 'u1_prn_3',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '3. Tu offres ce cadeau à ta mère ? - Oui, je .......... offre ce cadeau.',
              options: ['la', 'lui', 'leur', 'l\''],
              correctAnswer: 'lui',
              explanation: 'à ta mère مفرد عاقل مسبوق بـ à، والضمير العائد عليه هو lui.'
            },
            {
              id: 'u1_prn_4',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '4. Suzanne mange la tarte ? - Oui, elle .......... mange.',
              options: ['la', 'le', 'lui', 'les'],
              correctAnswer: 'la',
              explanation: 'la tarte مفعول مباشر مفرد مؤنث، يعوض عنه بالضمير la.'
            },
            {
              id: 'u1_prn_5',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '5. Tu envoies les invitations ? - Oui, je .......... envoie.',
              options: ['les', 'leur', 'des', 'l\''],
              correctAnswer: 'les',
              explanation: 'les invitations مفعول به مباشر جمع (بدون حرف جر)، يعوض عنه بـ les.'
            },
            {
              id: 'u1_prn_6',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '6. Ali téléphone à son ami Samir ? - Oui, il .......... téléphone.',
              options: ['le', 'lui', 'l\'', 'la'],
              correctAnswer: 'lui',
              explanation: 'فعل téléphoner à يأخذ مفعول غير مباشر عاقل مفرد فيعوض عنه بـ lui.'
            },
            {
              id: 'u1_prn_7',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '7. Les gâteaux ? La mère .......... prépare dans la cuisine.',
              options: ['les', 'leur', 'la', 'des'],
              correctAnswer: 'les',
              explanation: 'Les gâteaux جمع مباشر يعوض عنه بـ les.'
            },
            {
              id: 'u1_prn_8',
              type: 'multiple-choice',
              instruction: 'Remplace par le bon pronom :',
              prompt: '8. Tu souhaites bonne fête à Suzanne ? - Oui, je .......... souhaite bonne fête.',
              options: ['la', 'lui', 'leur', 'l\''],
              correctAnswer: 'lui',
              explanation: 'à Suzanne مفرد عاقل مؤنث مسبوق بحرف الجر à، الضمير هو lui.'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيه: leur لا تأخذ s أبداً كضمير مفعول',
          descriptionAr: 'انتبه للفرق بين صفة الملكية وضمير المفعول:',
          commonMistakes: [
            {
              mistake: 'Je leurs parle.',
              correction: 'Je leur parle.',
              why: 'ضمير المفعول غير المباشر leur لا يضاف له حرف s أبداً عندما يأتي قبل الفعل.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u1_prn_rem',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: 'Je parle aux élèves -> Je .......... parle.',
              options: ['leur', 'leurs', 'les'],
              correctAnswer: 'leur',
              explanation: 'ضمير المفعول هو leur بدون s.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الضمائر السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u1_prn_def',
              type: 'multiple-choice',
              instruction: 'Choisis vite :',
              prompt: 'Ce film est formidable, je .......... regarde ce soir.',
              options: ['le', 'la', 'lui', 'l\''],
              correctAnswer: 'le',
              explanation: 'film مفرد مذكر، وفعل regarde يبدأ بساكن r فيأخذ le.'
            }
          ]
        }
      }
    }
  ]
};
