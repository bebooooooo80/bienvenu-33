import { Lesson, OfficialExam, UnitSection, VocabularyWord } from '../types';

export const unite3Vocabulary: VocabularyWord[] = [
  { id: 'u3_v1', french: 'un hôpital', arabic: 'مستشفى', category: 'masculin', exampleFr: 'Samir est à l\'hôpital.', exampleAr: 'سمير في المستشفى.' },
  { id: 'u3_v2', french: 'un médecin / un docteur', arabic: 'طبيب / دكتور', category: 'masculin', exampleFr: 'Le médecin examine le malade.', exampleAr: 'الطبيب يفحص المريض.' },
  { id: 'u3_v3', french: 'un malade', arabic: 'مريض', category: 'masculin', exampleFr: 'Le malade se repose dans son lit.', exampleAr: 'المريض يستريح في سريره.' },
  { id: 'u3_v4', french: 'un accident', arabic: 'حادث', category: 'masculin', exampleFr: 'Samir a eu un accident de moto.', exampleAr: 'تعرض سمير لحادث دراجة نارية.' },
  { id: 'u3_v5', french: 'une ambulance', arabic: 'سيارة إسعاف', category: 'feminin', exampleFr: 'L\'ambulance transporte le blessé.', exampleAr: 'سيارة الإسعاف تنقل المصاب.' },
  { id: 'u3_v6', french: 'un médicament', arabic: 'دواء', category: 'masculin', exampleFr: 'Prends tes médicaments à l\'heure.', exampleAr: 'تناول أدويتك في الموعد.' },
  { id: 'u3_v7', french: 'une ordonnance', arabic: 'روشتة طبية', category: 'feminin', exampleFr: 'Le médecin écrit l\'ordonnance.', exampleAr: 'الطبيب يكتب الروشتة.' },
  { id: 'u3_v8', french: 'la tête', arabic: 'الرأس', category: 'feminin', exampleFr: 'J\'ai mal à la tête.', exampleAr: 'عندي صداع / ألم بالرأس.' },
  { id: 'u3_v9', french: 'le ventre', arabic: 'البطن', category: 'masculin', exampleFr: 'Il a mal au ventre.', exampleAr: 'عنده مغص / ألم في البطن.' },
  { id: 'u3_v10', french: 'les yeux', arabic: 'العينان', category: 'masculin', exampleFr: 'Elle a mal aux yeux.', exampleAr: 'لديها ألم في عينيها.' },
  { id: 'u3_v11', french: 'la jambe', arabic: 'الساق / الرِجل', category: 'feminin', exampleFr: 'Samir a la jambe plâtrée.', exampleAr: 'ساق سمير في الجبس.' },
  { id: 'u3_v12', french: 'examiner / ausculter', arabic: 'يفحص / يكشف على', category: 'verbe', exampleFr: 'Le médecin ausculte le cœur.', exampleAr: 'الطبيب يفحص القلب بالسماعة.' },
  { id: 'u3_v13', french: 'soigner', arabic: 'يعالج', category: 'verbe', exampleFr: 'L\'infirmière soigne le patient.', exampleAr: 'الممرضة تعالج المريض.' },
  { id: 'u3_v14', french: 'avoir mal à', arabic: 'يشعر بألم في', category: 'expression', exampleFr: 'Où avez-vous mal ?', exampleAr: 'أين تشعر بالألم؟' },
  { id: 'u3_v15', french: 'guérir', arabic: 'يشفى / يتعافى', category: 'verbe', exampleFr: 'Prompt rétablissement ! Guéris vite !', exampleAr: 'شفاء عاجل! تماثل للشفاء سريعاً!' }
];

export const examMiTermeU3: OfficialExam = {
  id: 'exam_unite3_bienvenu2',
  title: 'Examen de l\'Unité 3 - Santé & Hôpital',
  titleAr: 'امتحان الوحدة الثالثة - الصحة والمستشفى (20 درجة)',
  academicYear: 'Bienvenu 2 - 2ème Préparatoire',
  totalMarks: 20,
  timeLimitMinutes: 30,
  bookletPages: 'صفحات 66 - 67 من كتاب Bienvenu 2',
  questions: [
    {
      id: 'u3_ex_q1',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص (6 درجات)',
      passage: `Lundi matin, Samir traversait la rue pour aller à l'école. Soudain, une voiture l'a heurté. Des passants ont appelé l'ambulance. L'ambulance est arrivée rapidement et a transporté Samir à l'hôpital central. Le médecin a examiné Samir et a fait une radiographie. Heureusement, ce n'est pas grave, mais sa jambe droite est fracturée. Le médecin a mis du plâtre et lui a prescrit du repos et des médicaments. L'après-midi, ses amis Gamal et Ali sont venus lui rendre visite à l'hôpital en lui apportant des fleurs et des livres.`,
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '1. Samir a eu un accident en allant ....................',
      options: ['à l\'école', 'au club', 'au cinéma'],
      correctAnswer: 'à l\'école',
      points: 2
    },
    {
      id: 'u3_ex_q2',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص',
      instructionFr: 'A) Choisis la bonne réponse :',
      instructionAr: 'اختر الإجابة الصحيحة:',
      type: 'mcq',
      prompt: '2. Qui a transporté Samir à l\'hôpital ?',
      options: ['L\'ambulance', 'Le train', 'Le taxi'],
      correctAnswer: 'L\'ambulance',
      points: 2
    },
    {
      id: 'u3_ex_q3',
      section: 'comprehension',
      sectionTitleFr: '1) Compréhension',
      sectionTitleAr: 'أولاً: فهم النص',
      instructionFr: 'B) Mets Vrai (✓) ou Faux (✗) :',
      instructionAr: 'ضع صح أو خطأ:',
      type: 'true_false',
      prompt: '3. Les amis de Samir lui ont apporté des fleurs et des livres à l\'hôpital.',
      options: ['Vrai (صح)', 'Faux (خطأ)'],
      correctAnswer: 'Vrai (صح)',
      points: 2
    },
    {
      id: 'u3_ex_q4',
      section: 'situations',
      sectionTitleFr: '2) Situations',
      sectionTitleAr: 'ثانياً: مواقف التواصل (4 درجات)',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر الرد المناسب للموقف:',
      type: 'mcq',
      prompt: '4. Tu demandes à un ami malade où il a mal, tu dis :',
      options: ['Où as-tu mal ?', 'Comment vas-tu à l\'école ?', 'Quel est ton âge ?'],
      correctAnswer: 'Où as-tu mal ?',
      points: 2
    },
    {
      id: 'u3_ex_q5',
      section: 'situations',
      sectionTitleFr: '2) Situations',
      sectionTitleAr: 'ثانياً: مواقف التواصل',
      instructionFr: 'Choisis la bonne réponse :',
      instructionAr: 'اختر التمني المناسب للمريض:',
      type: 'mcq',
      prompt: '5. Tu visites un ami malade à l\'hôpital, tu lui dis :',
      options: ['Bon rétablissement !', 'Joyeux anniversaire !', 'Bon appétit !'],
      correctAnswer: 'Bon rétablissement !',
      points: 2
    },
    {
      id: 'u3_ex_q6',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد وأعضاء الجسم (6 درجات)',
      instructionFr: 'Choisis l\'expression de la douleur :',
      instructionAr: 'اختر حرف الجر مع عضو الجسم:',
      type: 'mcq',
      prompt: '6. Samir a mal .......... jambe droite.',
      options: ['à la', 'au', 'aux', 'à l\''],
      correctAnswer: 'à la',
      points: 2
    },
    {
      id: 'u3_ex_q7',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد وأعضاء الجسم',
      instructionFr: 'Choisis la bonne préposition :',
      instructionAr: 'اختر الأداة المناسبة:',
      type: 'mcq',
      prompt: '7. Après avoir lu beaucoup, j\'ai mal .......... yeux.',
      options: ['aux', 'au', 'à la', 'à l\''],
      correctAnswer: 'aux',
      points: 2
    },
    {
      id: 'u3_ex_q8',
      section: 'grammaire',
      sectionTitleFr: '3) Grammaire',
      sectionTitleAr: 'ثالثاً: القواعد وأعضاء الجسم',
      instructionFr: 'Choisis le bon verbe :',
      instructionAr: 'اختر تصريف الفعل المناسب:',
      type: 'mcq',
      prompt: '8. Le médecin .......... les malades à l\'hôpital.',
      options: ['soigne', 'soignent', 'soignons', 'soignes'],
      correctAnswer: 'soigne',
      points: 2
    },
    {
      id: 'u3_ex_q9',
      section: 'production',
      sectionTitleFr: '4) Production',
      sectionTitleAr: 'رابعاً: التعبير وتكوين الجمل (4 درجات)',
      instructionFr: 'Qui fait cette action ?',
      instructionAr: 'من يقوم بهذا العمل؟',
      type: 'fill',
      prompt: '9. Qui examine les malades et écrit l\'ordonnance ? - C\'est le ..........',
      options: ['médecin', 'professeur', 'garçon'],
      correctAnswer: 'médecin',
      points: 2
    },
    {
      id: 'u3_ex_q10',
      section: 'production',
      sectionTitleFr: '4) Production',
      sectionTitleAr: 'رابعاً: التعبير وتكوين الجمل',
      instructionFr: 'Donne un conseil au malade :',
      instructionAr: 'اختر النصيحة الطبية الصحيحة للمريض:',
      type: 'mcq',
      prompt: '10. Le médecin conseille au malade :',
      options: [
        'Prends tes médicaments et reste au lit.',
        'Va jouer au football.',
        'Mange beaucoup de bonbons.'
      ],
      correctAnswer: 'Prends tes médicaments et reste au lit.',
      points: 2
    }
  ]
};

export const unite3Section: UnitSection = {
  id: 'unite3',
  order: 4,
  titleFr: 'Module 3 : Unité (3) - Santé & Hôpital',
  titleAr: 'الوحدة الثالثة : الصحة والمستشفى (Santé & Hôpital)',
  descriptionAr: 'منهج Bienvenu 2 (الصفحات 59 - 67): نص حادث سمير ونقله للمستشفى، زيارة الأصدقاء، التعبير عن الألم وأعضاء الجسم (Avoir mal au / à la / à l\' / aux)، نصائح الطبيب والروشتة.',
  badgeIcon: '🏥',
  vocabulary: unite3Vocabulary,
  exam: examMiTermeU3,
  lessons: [
    {
      id: 'u3-texte',
      unitId: 'unite3',
      unitTitle: 'Unité (3) - Santé & Hôpital',
      unitTitleAr: 'الوحدة الثالثة (الصحة والمستشفى)',
      order: 1,
      title: 'Texte : L\'accident de Samir',
      titleAr: 'نص القراءة : حادث سمير وزيارة المستشفى',
      subtitleFr: 'Compréhension du texte & La visite à l\'hôpital (p. 59 - 61)',
      estimatedMinutes: 16,
      bookletPages: 'صفحة 59 - 61',
      readingPassage: {
        imageSrc: '',
        imagePageNumber: 59,
        imageCaptionFr: 'Samir à l\'hôpital entouré de ses camarades Gamal et Ali.',
        imageCaptionAr: 'سمير في المستشفى يزوره زميلاه جمال وعلي.',
        fullFrenchText: `Lundi matin, Samir marchait sur le trottoir pour aller à l'école. En traversant la rue, une voiture rapide a heurté Samir. Les témoins de l'accident ont aussitôt téléphoné à l'ambulance. Quelques minutes plus tard, l'ambulance est arrivée et a transporté le blessé à l'hôpital. À l'hôpital, le docteur a fait une radiographie de la jambe droite. Heureusement, ce n'est pas très dangereux, mais sa jambe est fracturée. Le docteur a mis du plâtre sur sa jambe et lui a demandé de rester au lit pendant deux semaines. Dans l'après-midi, ses fidèles amis Gamal et Ali sont allés le voir dans sa chambre d'hôpital avec de jolies fleurs et des revues. Samir les a remerciés chaleureusement.`,
        fullArabicTranslation: `صباح الاثنين، كان سمير يسير على الرصيف متوجهاً إلى المدرسة. وأثناء عبوره الشارع، صدمته سيارة مسرعة. اتصل شهود الحادث على الفور بسيارة الإسعاف. وبعد دقائق قليلة، وصلت الإسعاف ونقلت المصاب إلى المستشفى. وفي المستشفى، أجرى الطبيب أشعة سينية على الساق اليمنى. ولحسن الحظ، الإصابة ليست خطيرة جداً، لكن ساقه تعرضت لكسر. وضع الطبيب جبيرة من الجبس على ساقه وطلب منه ملازمة الفراش لمدة أسبوعين. وفي فترة ما بعد الظهر، ذهب صديقاه المخلصان جمال وعلي لزيارته في غرفته بالمستشفى حاملين باقات زهور ومجلات. فشكرهما سمير بحرارة.`,
        sentences: [
          { id: 'u3_s1', french: 'Samir marchait pour aller à l\'école quand l\'accident est arrivé.', arabic: 'كان سمير يسير للذهاب للمدرسة حين وقع الحادث.' },
          { id: 'u3_s2', french: 'L\'ambulance a transporté Samir à l\'hôpital.', arabic: 'نقلت سيارة الإسعاف سمير إلى المستشفى.' },
          { id: 'u3_s3', french: 'Le médecin a fait une radiographie et a mis du plâtre.', arabic: 'أجرى الطبيب أشعة ووضع الجبس على ساقه.' },
          { id: 'u3_s4', french: 'Gamal et Ali rendent visite à Samir à l\'hôpital.', arabic: 'جمال وعلي يزوران سمير في المستشفى.' }
        ],
        keyVocabulary: [
          { french: 'un blessé', arabic: 'مصاب / جريح', partOfSpeech: 'n.m.' },
          { french: 'une radiographie (radio)', arabic: 'أشعة طبية', partOfSpeech: 'n.f.' },
          { french: 'du plâtre', arabic: 'جبس طبي', partOfSpeech: 'n.m.' },
          { french: 'rendre visite à', arabic: 'يقوم بزيارة شخص', partOfSpeech: 'exp.' }
        ]
      },
      stages: {
        comprendre: {
          titleAr: 'تحليل نص حادث سمير والمستشفى',
          summaryAr: 'فهم أحداث القصة، من وقوع الحادث ونقل الإسعاف، وصولاً إلى فحص الطبيب وزيارة الأصدقاء.',
          grammarPoints: [
            {
              title: 'عناصر القصة الطبية في Bienvenu 2',
              ruleAr: 'الأحداث والشخصيات الرئيسية:',
              details: [
                'Le blessé (المصاب): Samir.',
                'Le moyen de transport (وسيلة النقل): L\'ambulance.',
                'Le lieu (المكان): L\'hôpital.',
                'L\'examen médical (الفحص الطبي): Une radiographie (أشعة) et du plâtre (جبس).',
                'Les visiteurs (الزائرون): Ses amis Gamal et Ali.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة وجمل من النص',
          descriptionAr: 'ركز في معاني الأفعال الطبية:',
          examples: [
            { french: 'Le médecin soigne le malade.', arabic: 'الطبيب يعالج المريض.', note: 'فعل Soigner = يعالج' },
            { french: 'Prompt rétablissement, Samir !', arabic: 'شفاء عاجل يا سمير!', note: 'عبارة تمني الشفاء للمريض' }
          ]
        },
        pratiquer: {
          titleAr: 'تمارين الفهم والاستيعاب للنص (5 أسئلة)',
          descriptionAr: 'اختر الإجابة الصحيحة بحسب النص:',
          questions: [
            {
              id: 'u3_t_q1',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '1. Que faisait Samir avant l\'accident ?',
              options: ['Il allait à l\'école', 'Il jouait au club', 'Il dormait'],
              correctAnswer: 'Il allait à l\'école',
              explanation: 'كان سمير متوجهاً للمدرسة في الصباح.'
            },
            {
              id: 'u3_t_q2',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '2. Quelle partie du corps de Samir est fracturée ?',
              options: ['Sa jambe droite', 'Son bras gauche', 'Sa tête'],
              correctAnswer: 'Sa jambe droite',
              explanation: 'أصيبت ساقه اليمنى (sa jambe droite).'
            },
            {
              id: 'u3_t_q3',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '3. Que font Gamal et Ali l\'après-midi ?',
              options: ['Ils visitent Samir à l\'hôpital', 'Ils vont au cinéma', 'Ils jouent un match'],
              correctAnswer: 'Ils visitent Samir à l\'hôpital',
              explanation: 'زار الصديقان سمير في المستشفى بعد الظهر.'
            },
            {
              id: 'u3_t_q4',
              type: 'true-false',
              instruction: 'Mets Vrai ou Faux :',
              prompt: '4. Samir doit rester au lit pendant deux semaines.',
              options: ['Vrai', 'Faux'],
              correctAnswer: 'Vrai',
              explanation: 'صحيح؛ طلب منه الطبيب الراحة لمدة أسبوعين.'
            },
            {
              id: 'u3_t_q5',
              type: 'multiple-choice',
              instruction: 'D\'après le texte :',
              prompt: '5. Qu\'ont apporté les amis à Samir ?',
              options: ['Des fleurs et des revues', 'Un ballon', 'Des gâteaux'],
              correctAnswer: 'Des fleurs et des revues',
              explanation: 'أحضر الأصدقاء باقات زهور ومجلات مسلية.'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيه: الفرق بين Visiter و Rendre visite à',
          descriptionAr: 'Visiter للأماكن، بينما Rendre visite à للأشخاص العاقلين:',
          commonMistakes: [
            {
              mistake: 'Je visite Samir.',
              correction: 'Je rends visite à Samir / Je visite l\'hôpital.',
              why: 'لزيارة إنسان نستخدم: Rendre visite à quelq\'un.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u3_t_rem',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: 'Les amis rendent visite .......... Samir.',
              options: ['à', 'au', 'en', 'pour'],
              correctAnswer: 'à',
              explanation: 'التعبير هو Rendre visite à.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي القراءة السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u3_t_def',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: 'Qui examine le blessé à l\'hôpital ?',
              options: ['Le médecin', 'Le chauffeur', 'Le garçon'],
              correctAnswer: 'Le médecin',
              explanation: 'الطبيب هو من يفحص المصاب.'
            }
          ]
        }
      }
    },
    {
      id: 'u3-corps-douleur',
      unitId: 'unite3',
      unitTitle: 'Unité (3) - Santé & Hôpital',
      unitTitleAr: 'الوحدة الثالثة (الصحة والمستشفى)',
      order: 2,
      title: 'Les Parties du corps & Avoir mal à',
      titleAr: 'أعضاء جسم الإنسان والتعبير عن الشعور بالألم (Avoir mal au / à la / aux)',
      subtitleFr: 'Avoir mal à + Article contracté & Conseils du médecin (p. 62 - 65)',
      estimatedMinutes: 18,
      bookletPages: 'صفحة 62 - 65',
      stages: {
        comprendre: {
          titleAr: 'قاعدة التعبير عن الألم وأعضاء الجسم',
          summaryAr: 'للتعبير عن مكان الألم نستخدم تصريف فعل Avoir + mal + حرف الجر à مدمجاً مع أداة العضو (au, à la, à l\', aux).',
          grammarPoints: [
            {
              title: '1. قاعدة التعبير عن الألم (Avoir mal à + عضو الجسم)',
              ruleAr: 'يدغم حرف الجر à مع عضو الجسم كما يلي:',
              table: {
                headers: ['الأداة', 'نوع عضو الجسم', 'أعضاء الجسم المقررة وأمثلة'],
                rows: [
                  ['au (à + le)', 'مفرد مذكر يبدأ بساكن', 'au ventre (البطن), au dos (الظهر), au bras (الذراع), au pied (القدم), au genou (الركبة)'],
                  ['à la (à + la)', 'مفرد مؤنث يبدأ بساكن', 'à la tête (الرأس), à la jambe (الساق), à la main (اليد), à la gorge (الحلق/الحنجرة)'],
                  ['à l\' (à + l\')', 'مفرد بنوعيه يبدأ بمتحرك', 'à l\'œil (العين الواحدة), à l\'oreille (الأذن), à l\'estomac (المعدة)'],
                  ['aux (à + les)', 'اسم جمع بنوعيه', 'aux yeux (العينين), aux dents (الأسنان), aux pieds (القدمين), aux oreilles (الأذنين)']
                ]
              }
            },
            {
              title: '2. نصائح الطبيب للمريض (Les Conseils du Médecin)',
              ruleAr: 'يستخدم الطبيب صيغة الأمر أو التعبير Il faut (يجب):',
              details: [
                'Prenez ces médicaments trois fois par jour. (تناول هذه الأدوية ثلاث مرات يومياً)',
                'Restez au lit et reposez-vous. (الزم الفراش واسترح)',
                'Ne mangez pas de matières grasses. (لا تتناول دهوناً)',
                'Buvez beaucoup d\'eau tiède. (اشرب الكثير من الماء الفاتر)'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة عملية لشكوى المريض',
          descriptionAr: 'لاحظ كيف يعبر المريض عن ألمه:',
          examples: [
            { french: 'J\'ai trop mangé, j\'ai mal au ventre.', arabic: 'أكلت كثيراً، لدي ألم في بطني.', note: 'ventre مذكر -> au' },
            { french: 'Elle a mal aux dents, elle va chez le dentiste.', arabic: 'لديها ألم في أسنانها، فتذهب لطبيب الأسنان.', note: 'dents جمع -> aux' },
            { french: 'Il a mal à la tête, il prend une aspirine.', arabic: 'لديه صداع، فيتناول مسكناً.', note: 'tête مؤنث -> à la' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات التعبير عن الألم وأعضاء الجسم (8 أسئلة)',
          descriptionAr: 'اختر حرف الجر أو التعبير المناسب:',
          questions: [
            {
              id: 'u3_crp_1',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '1. J\'ai mangé trop de gâteaux, j\'ai mal .......... ventre.',
              options: ['au', 'à la', 'aux', 'à l\''],
              correctAnswer: 'au',
              explanation: 'ventre اسم مفرد مذكر يأخذ au.'
            },
            {
              id: 'u3_crp_2',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '2. Suzanne a mal .......... tête depuis ce matin.',
              options: ['à la', 'au', 'aux', 'à l\''],
              correctAnswer: 'à la',
              explanation: 'tête اسم مفرد مؤنث يأخذ à la.'
            },
            {
              id: 'u3_crp_3',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '3. Le grand-père ne peut pas marcher, il a mal .......... pieds.',
              options: ['aux', 'au', 'à la', 'à l\''],
              correctAnswer: 'aux',
              explanation: 'pieds اسم جمع ينتهي بـ s فيأخذ aux.'
            },
            {
              id: 'u3_crp_4',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '4. Ali écoute la musique très fort, il a mal .......... oreilles.',
              options: ['aux', 'à l\'', 'à la', 'au'],
              correctAnswer: 'aux',
              explanation: 'oreilles اسم جمع فيأخذ aux.'
            },
            {
              id: 'u3_crp_5',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe convenable :',
              prompt: '5. Nous .......... mal au dos après le sport.',
              options: ['avons', 'sommes', 'ont', 'avez'],
              correctAnswer: 'avons',
              explanation: 'مع التعبير عن الألم نستخدم تصريف فعل Avoir (Nous avons).'
            },
            {
              id: 'u3_crp_6',
              type: 'multiple-choice',
              instruction: 'Où va-t-on ?',
              prompt: '6. Si tu as mal aux dents, tu vas chez ..........',
              options: ['le dentiste', 'le boucher', 'le professeur'],
              correctAnswer: 'le dentiste',
              explanation: 'ألم الأسنان يستدعي الذهاب لطبيب الأسنان (le dentiste).'
            },
            {
              id: 'u3_crp_7',
              type: 'multiple-choice',
              instruction: 'Conseil du médecin :',
              prompt: '7. Le médecin dit au malade : ".......... tes médicaments à l\'heure."',
              options: ['Prends', 'Prenez', 'Prendre', 'Prend'],
              correctAnswer: 'Prends',
              explanation: 'صيغة أمر مع المفرد (Tu): Prends.'
            },
            {
              id: 'u3_crp_8',
              type: 'multiple-choice',
              instruction: 'Vocabulaire médical :',
              prompt: '8. Pour acheter les médicaments prescrits, on va ..........',
              options: ['à la pharmacie', 'au restaurant', 'à la gare'],
              correctAnswer: 'à la pharmacie',
              explanation: 'نشتري الأدوية من الصيدلية (à la pharmacie).'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيه الامتحان في التعبير عن الألم',
          descriptionAr: 'لا تستخدم فعل être مع mal:',
          commonMistakes: [
            {
              mistake: 'Je suis mal à la tête.',
              correction: 'J\'ai mal à la tête.',
              why: 'التعبير عن الألم يستلزم فعل Avoir (J\'ai mal) وليس être.'
            }
          ],
          remedialQuestions: [
            {
              id: 'u3_crp_rem',
              type: 'multiple-choice',
              instruction: 'Corrige :',
              prompt: 'Gamal .......... mal à la jambe.',
              options: ['a', 'est', 'fait', 'va'],
              correctAnswer: 'a',
              explanation: 'Gamal = Il ويأخذ تصريف فعل avoir وهو a.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي أعضاء الجسم السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'u3_crp_def',
              type: 'multiple-choice',
              instruction: 'Choisis vite :',
              prompt: 'Il a mal .......... gorge.',
              options: ['à la', 'au', 'aux', 'à l\''],
              correctAnswer: 'à la',
              explanation: 'gorge (الحلق) مفرد مؤنث يأخذ à la.'
            }
          ]
        }
      }
    }
  ]
};
