import { Lesson, UnitSection } from '../types';

export const revisionSection: UnitSection = {
  id: 'revision',
  order: 1,
  titleFr: 'Module 0 : Révision Générale & Atelier Grammaire',
  titleAr: 'الوحدة 0 : المراجعة العامة وورشة القواعد التأسيسية',
  descriptionAr: 'مراجعة منهج Bienvenu 2 (الصف الثاني الإعدادي - الصفحات 84-88 و 4-6): تكوين الجملة، تصريف المضارع في المجموعات الثلاث، أدوات المكان المدغمة، وقواعد النفي والاستثناءات.',
  badgeIcon: '📚',
  vocabulary: [
    { id: 'rev_v1', french: 'le sujet', arabic: 'الفاعل', category: 'masculin', exampleFr: 'Le sujet commence la phrase.', exampleAr: 'الفاعل يبدأ الجملة.' },
    { id: 'rev_v2', french: 'le verbe', arabic: 'الفعل', category: 'masculin', exampleFr: 'Le verbe exprime l\'action.', exampleAr: 'الفعل يعبر عن الحدث.' },
    { id: 'rev_v3', french: 'le complément', arabic: 'المفعول / التكملة', category: 'masculin', exampleFr: 'Le complément termine la phrase.', exampleAr: 'المفعول يكمل الجملة.' },
    { id: 'rev_v4', french: 'aujourd\'hui', arabic: 'اليوم', category: 'expression', exampleFr: 'Aujourd\'hui, nous révisons.', exampleAr: 'اليوم نراجع.' },
    { id: 'rev_v5', french: 'maintenant', arabic: 'الآن', category: 'expression', exampleFr: 'Maintenant, je comprends.', exampleAr: 'الآن أنا أفهم.' },
    { id: 'rev_v6', french: 'chaque jour', arabic: 'كل يوم', category: 'expression', exampleFr: 'Chaque jour, il va au club.', exampleAr: 'كل يوم يذهب للنادي.' },
  ],
  lessons: [
    {
      id: 'rev-phrase',
      unitId: 'revision',
      unitTitle: 'Révision Générale',
      unitTitleAr: 'المراجعة العامة (Bienvenu 2)',
      order: 1,
      title: 'La Phrase & Le Sujet',
      titleAr: 'تكوين الجملة الفرنسية وأنواع الفاعل',
      subtitleFr: 'Sujet + Verbe + Complément (p. 4 - 6 & 84)',
      estimatedMinutes: 12,
      bookletPages: 'صفحة 4 - 6 و 84',
      stages: {
        comprendre: {
          titleAr: 'أركان الجملة الفرنسية الثلاثة',
          summaryAr: 'تتكون الجملة الفرنسية البسيطة من: فاعل (Sujet) + فعل مصرف (Verbe) + مفعول أو جار ومجرور (Complément).',
          grammarPoints: [
            {
              title: '1. الفاعل (Le Sujet)',
              ruleAr: 'الفاعل قد يكون اسماً خاصاً/علماً (Gamal, Suzanne, Moustafa)، أو اسماً عاماً مسبوقاً بأداة (le garçon, la classe, les amis)، أو ضمير فاعل شخصي.',
              details: [
                'ضمائر المتكلم: Je (أنا) - Nous (نحن)',
                'ضمائر المخاطب: Tu (أنتَ/أنتِ) - Vous (أنتم/حضرتك للاحترام)',
                'ضمائر الغائب المفرد: Il (هو / يحل محل مفرد مذكر) - Elle (هي / يحل محل مفرد مؤنث)',
                'ضمائر الغائب الجمع: Ils (هم / جمع مذكر أو مختلط) - Elles (هن / جمع مؤنث فقط)',
                'الضمير On: يعامل في التصريف دائماً مثل (Il / Elle) ويعني في المعنى (نحن أو الناس)'
              ]
            },
            {
              title: '2. الفعل (Le Verbe) والتكملة (Le Complément)',
              ruleAr: 'الفعل هو المحرك الأساسي للجملة ويصرف حسب ضمير الفاعل. والتكملة قد تكون مفعولاً به مباشراً (COD) أو غير مباشر بحرف جر (COI).',
              table: {
                headers: ['الفاعل (Sujet)', 'الفعل المصرف (Verbe)', 'المفعول والتكملة (Complément)'],
                rows: [
                  ['Gamal', 'invite', 'ses amis chez lui.'],
                  ['Nous', 'allons', 'au restaurant ce soir.'],
                  ['Suzanne', 'mange', 'une glace à la vanille.'],
                  ['Moustafa et Ali (Ils)', 'prennent', 'le taxi pour l\'hôpital.']
                ]
              }
            }
          ]
        },
        exemple: {
          titleAr: 'نماذج توضيحية لتركيب الجملة',
          descriptionAr: 'لاحظ كيف يتطابق الفاعل مع تصريف الفعل:',
          examples: [
            { french: 'Gamal habite à Alexandrie.', arabic: 'جمال يسكن في الإسكندرية.', note: 'Sujet (Nom propre) + Verbe habiter + Lieu' },
            { french: 'Les élèves écoutent le professeur.', arabic: 'التلاميذ يستمعون إلى المعلم.', note: 'Les élèves = Ils -> verbe au pluriel (-ent)' },
            { french: 'On visite le musée aujourd\'hui.', arabic: 'نحن نزور المتحف اليوم.', note: 'On يعامل مثل Il/Elle في التصريف' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات تكوين الجملة واختيار الضمائر (6 أسئلة)',
          descriptionAr: 'اختر الضمير أو الكلمة المناسبة لإكمال الجملة:',
          questions: [
            {
              id: 'rev_q1',
              type: 'multiple-choice',
              instruction: 'Choisis le bon pronom sujet :',
              prompt: '1. .......... parlons français en classe.',
              options: ['Je', 'Nous', 'Vous', 'Ils'],
              correctAnswer: 'Nous',
              explanation: 'نهاية الفعل المصرف هي (-ons) الدالة على ضمير المتكلم الجمع Nous.'
            },
            {
              id: 'rev_q2',
              type: 'multiple-choice',
              instruction: 'Choisis le bon pronom sujet :',
              prompt: '2. Gamal et son frère, .......... vont au club.',
              options: ['Il', 'Ils', 'Elles', 'Nous'],
              correctAnswer: 'Ils',
              explanation: 'جمال وأخوه يمثلان جمع مذكر غائب، فيعوض عنهما بالضمير Ils.'
            },
            {
              id: 'rev_q3',
              type: 'multiple-choice',
              instruction: 'Choisis le bon pronom sujet :',
              prompt: '3. Mona et Salma, .......... aiment le français.',
              options: ['Ils', 'Elles', 'Elle', 'Vous'],
              correctAnswer: 'Elles',
              explanation: 'منى وسلمى اسمان لمؤنث في صيغة الجمع، الضمير المناسب هو Elles.'
            },
            {
              id: 'rev_q4',
              type: 'multiple-choice',
              instruction: 'Choisis le bon sujet :',
              prompt: '4. .......... va au cinéma ce soir avec Suzanne.',
              options: ['On', 'Nous', 'Ils', 'Tu'],
              correctAnswer: 'On',
              explanation: 'فعل va هو تصريف aller مع ضمائر المفرد الغائب (Il / Elle / On).'
            },
            {
              id: 'rev_q5',
              type: 'multiple-choice',
              instruction: 'Choisis le bon pronom sujet :',
              prompt: '5. Mona et moi, .......... préparons une fête.',
              options: ['Ils', 'Vous', 'Nous', 'Elles'],
              correctAnswer: 'Nous',
              explanation: 'أي اسم + moi يساوي ضمير المتكلم الجمع (Nous).'
            },
            {
              id: 'rev_q6',
              type: 'multiple-choice',
              instruction: 'Choisis le bon pronom sujet :',
              prompt: '6. Ali et toi, .......... regardez le match.',
              options: ['Ils', 'Vous', 'Nous', 'Tu'],
              correctAnswer: 'Vous',
              explanation: 'أي اسم + toi يساوي ضمير المخاطب الجمع (Vous).'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيهات وأخطاء شائعة في تحديد الفاعل',
          descriptionAr: 'انتبه للفروق الدقيقة التالية أثناء الحل:',
          commonMistakes: [
            {
              mistake: 'On allons au restaurant.',
              correction: 'On va au restaurant.',
              why: 'الضمير On معناه نحن، ولكن فعله يُصرّف دائماً مع المفرد مثل Il / Elle.'
            },
            {
              mistake: 'Ahmed et Mona sont (Elles).',
              correction: 'Ahmed et Mona sont (Ils).',
              why: 'في اللغة الفرنسية، الجمع المشترك بين المذكر والمؤنث يعامل معاملة جمع المذكر (Ils).'
            }
          ],
          remedialQuestions: [
            {
              id: 'rev_rem1',
              type: 'multiple-choice',
              instruction: 'Corrige la faute :',
              prompt: 'Tout le monde .......... la fête.',
              options: ['aiment', 'aime', 'aimons', 'aimes'],
              correctAnswer: 'aime',
              explanation: 'كلمة Tout le monde (كل الناس/الجميع) تعامل كاسم مفرد مذكر (Il) ويأخذ الفعل تصريف المفرد.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي السرعة: تركيب أجزاء الجملة',
          descriptionAr: 'اختبر سرعتك في تصنيف الفاعل والمفعول في 30 ثانية:',
          timeLimitSeconds: 30,
          challengeQuestions: [
            {
              id: 'rev_def1',
              type: 'multiple-choice',
              instruction: 'Quelle est la fonction du mot souligné ?',
              prompt: 'Suzanne écrit [une invitation] à ses amis.',
              options: ['Sujet', 'Verbe', 'Complément d\'objet direct (C.O.D)', 'Complément de lieu'],
              correctAnswer: 'Complément d\'objet direct (C.O.D)',
              explanation: 'une invitation هو مفعول به مباشر تم بعد الفعل مباشرة بدون حرف جر.'
            }
          ]
        }
      }
    },
    {
      id: 'rev-present',
      unitId: 'revision',
      unitTitle: 'Révision Générale',
      unitTitleAr: 'المراجعة العامة (Bienvenu 2)',
      order: 2,
      title: 'Le Présent de l\'indicatif',
      titleAr: 'زمن المضارع: المجموعات الأولى والثانية والثالثة الشاذة',
      subtitleFr: '1er, 2ème et 3ème groupes + Verbes irréguliers (p. 84 - 86)',
      estimatedMinutes: 18,
      bookletPages: 'صفحة 84 - 86',
      stages: {
        comprendre: {
          titleAr: 'قواعد تصريف الأفعال في المضارع',
          summaryAr: 'ينقسم الفعل في الفرنسية إلى ثلاث مجموعات. تتطلب كل مجموعة نهايات محددة، مع حفظ تصاريف الأفعال الشاذة الرئيسية المقررة في Bienvenu 2.',
          grammarPoints: [
            {
              title: '1. أفعال المجموعة الأولى (1er groupe: -er)',
              ruleAr: 'نحذف النهاية (-er) ونضيف نهايات المضارع: (e, es, e, ons, ez, ent).',
              table: {
                headers: ['الضمير', 'النهاية', 'مثال: Parler (يتحدث)', 'مثال: Inviter (يدعو)'],
                rows: [
                  ['Je / J\'', '-e', 'Je parle', 'J\'invite'],
                  ['Tu', '-es', 'Tu parles', 'Tu invites'],
                  ['Il / Elle / On', '-e', 'Il parle', 'Elle invite'],
                  ['Nous', '-ons', 'Nous parlons', 'Nous invitons'],
                  ['Vous', '-ez', 'Vous parlez', 'Vous invitez'],
                  ['Ils / Elles', '-ent', 'Ils parlent', 'Elles invitent']
                ]
              }
            },
            {
              title: '2. أفعال المجموعة الثانية (2ème groupe: -ir)',
              ruleAr: 'نحذف (-ir) ونضيف: (is, is, it, issons, issez, issent) مثل: Finir (ينهي), Choisir (يختار), Réussir (ينجح).',
              table: {
                headers: ['الضمير', 'Finir (ينهي)', 'Choisir (يختار)'],
                rows: [
                  ['Je / Tu', 'Je finis / Tu finis', 'Je choisis / Tu choisis'],
                  ['Il / Elle / On', 'Il finit', 'Elle choisit'],
                  ['Nous', 'Nous finissons', 'Nous choisissons'],
                  ['Vous', 'Vous finissez', 'Vous choisissez'],
                  ['Ils / Elles', 'Ils finissent', 'Elles choisissent']
                ]
              }
            },
            {
              title: '3. أفعال المجموعة الثالثة الشاذة المقررة أساسياً في Bienvenu 2',
              ruleAr: 'أفعال لا غنى عنها في منهج الصف الثاني الإعدادي:',
              table: {
                headers: ['الفعل', 'معناه', 'التصريف مع الضمائر (Je / Tu / Il / Nous / Vous / Ils)'],
                rows: [
                  ['Être', 'يكون', 'suis, es, est, sommes, êtes, sont'],
                  ['Avoir', 'يملك / لديه', 'ai, as, a, avons, avez, ont'],
                  ['Aller', 'يذهب', 'vais, vas, va, allons, allez, vont'],
                  ['Faire', 'يعمل / يمارس', 'fais, fais, fait, faisons, faites, font'],
                  ['Prendre', 'يتناول / يركب', 'prends, prends, prend, prenons, prenez, prennent'],
                  ['Vouloir', 'يريد', 'veux, veux, veut, voulons, voulez, veulent'],
                  ['Pouvoir', 'يستطيع', 'peux, peux, peut, pouvons, pouvez, peuvent']
                ]
              }
            },
            {
              title: '4. الكلمات الدالة على المضارع (Mots clés)',
              ruleAr: 'Aujourd\'hui (اليوم) - Maintenant (الآن) - Chaque jour / Chaque matin (كل يوم/صباح) - Toujours (دائماً) - Tous les vendredis (كل جمعة).'
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة عملية على المضارع من مواقف الكتاب',
          descriptionAr: 'لاحظ تصريف الفعل حسب الفاعل والسياق:',
          examples: [
            { french: 'Nous faisons les devoirs maintenant.', arabic: 'نحن نقوم بعمل الواجبات الآن.', note: 'Faire مع Nous = faisons' },
            { french: 'Vous faites du sport ?', arabic: 'هل تمارسون الرياضة؟', note: 'انتبه: Vous faites (نهاية شاذة -tes)' },
            { french: 'Samir et Gamal prennent le train.', arabic: 'سمير وجمال يركبان القطار.', note: 'Prendre مع جمع الغائب = prennent مع مضاعفة n' }
          ]
        },
        pratiquer: {
          titleAr: 'بنك أسئلة تصريف المضارع (12 سؤال تفاعلي)',
          descriptionAr: 'اختر التصريف الصحيح للفعل في زمن المضارع:',
          questions: [
            {
              id: 'rev_prs1',
              type: 'multiple-choice',
              instruction: 'Mets au présent :',
              prompt: '1. Moustafa et Suzanne .......... une invitation à Gamal.',
              options: ['envoie', 'envoyez', 'envoient', 'envoyons'],
              correctAnswer: 'envoient',
              explanation: 'الفاعل Moustafa et Suzanne = Ils/Elles، لذلك يأخذ الفعل نهاية -ent.'
            },
            {
              id: 'rev_prs2',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe convenable :',
              prompt: '2. Vous .......... une table au restaurant ?',
              options: ['réserve', 'réservez', 'réservent', 'réservons'],
              correctAnswer: 'réservez',
              explanation: 'مع الضمير Vous تأخذ أفعال المجموعة الأولى النهاية -ez.'
            },
            {
              id: 'rev_prs3',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe convenable :',
              prompt: '3. Nous .......... de la salade verte.',
              options: ['choisissons', 'choisit', 'choisissent', 'choisis'],
              correctAnswer: 'choisissons',
              explanation: 'فعل Choisir (مجموعة ثانية) يأخذ النهاية -issons مع الضمير Nous.'
            },
            {
              id: 'rev_prs4',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe Être au présent :',
              prompt: '4. Les amis .......... très contents de la fête.',
              options: ['sommes', 'êtes', 'sont', 'est'],
              correctAnswer: 'sont',
              explanation: 'Les amis = Ils، وتصريف être مع Ils هو sont.'
            },
            {
              id: 'rev_prs5',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe Avoir au présent :',
              prompt: '5. J\'.......... 14 ans cette année.',
              options: ['ai', 'as', 'a', 'avons'],
              correctAnswer: 'ai',
              explanation: 'تصريف avoir مع Je هو ai (J\'ai 14 ans).'
            },
            {
              id: 'rev_prs6',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe Aller au présent :',
              prompt: '6. Où .......... -tu le vendredi ?',
              options: ['va', 'vas', 'vais', 'allez'],
              correctAnswer: 'vas',
              explanation: 'تصريف aller مع Tu هو vas.'
            },
            {
              id: 'rev_prs7',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe Faire au présent :',
              prompt: '7. Vous .......... quoi pour le dîner ?',
              options: ['faisez', 'faites', 'font', 'faisons'],
              correctAnswer: 'faites',
              explanation: 'تصريف فعل faire مع Vous شاذ وينتهي بـ -tes (Vous faites).'
            },
            {
              id: 'rev_prs8',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe Prendre au présent :',
              prompt: '8. Gamal et son père .......... l\'autobus.',
              options: ['prend', 'prenons', 'prennent', 'prenez'],
              correctAnswer: 'prennent',
              explanation: 'تصريف Prendre مع جمع الغائب (Ils) هو prennent بمضاعفة حرف n.'
            },
            {
              id: 'rev_prs9',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe Vouloir au présent :',
              prompt: '9. Je .......... commander du poulet rôti.',
              options: ['veux', 'veut', 'voulons', 'veulent'],
              correctAnswer: 'veux',
              explanation: 'تصريف vouloir مع Je هو veux.'
            },
            {
              id: 'rev_prs10',
              type: 'multiple-choice',
              instruction: 'Choisis le verbe Pouvoir au présent :',
              prompt: '10. Est-ce que tu .......... venir à mon anniversaire ?',
              options: ['peux', 'peut', 'pouvons', 'peuvent'],
              correctAnswer: 'peux',
              explanation: 'تصريف pouvoir مع Tu هو peux بالـ x.'
            },
            {
              id: 'rev_prs11',
              type: 'multiple-choice',
              instruction: 'Mets au présent :',
              prompt: '11. Les médecins .......... les malades à l\'hôpital.',
              options: ['soigne', 'soignent', 'soignons', 'soignez'],
              correctAnswer: 'soignent',
              explanation: 'Les médecins = جمع غائب (Ils)، فيأخذ الفعل -ent.'
            },
            {
              id: 'rev_prs12',
              type: 'multiple-choice',
              instruction: 'Mets au présent :',
              prompt: '12. On .......... le déjeuner à 15 heures.',
              options: ['prennent', 'prend', 'prenons', 'prends'],
              correctAnswer: 'prend',
              explanation: 'On يعامل مثل Il/Elle في التصريف ويأخذ prend بالـ d.'
            }
          ]
        },
        corriger: {
          titleAr: 'تصحيح الأخطاء الشائعة في المضارع',
          descriptionAr: 'انتبه للنهايات الاستثنائية:',
          commonMistakes: [
            {
              mistake: 'Vous faisez les gâteaux.',
              correction: 'Vous faites les gâteaux.',
              why: 'فعل Faire مع Vous شاذ: faites وليس faisez.'
            },
            {
              mistake: 'Ils ont aller.',
              correction: 'Ils vont.',
              why: 'تصريف Aller مع Ils هو vont، ولا نخلط بينه وبين فعل avoir (ont).'
            }
          ],
          remedialQuestions: [
            {
              id: 'rev_rem2',
              type: 'multiple-choice',
              instruction: 'Corrige le verbe :',
              prompt: 'Suzanne et sa mère .......... au marché.',
              options: ['vont', 'ont', 'font', 'viennent'],
              correctAnswer: 'vont',
              explanation: 'Suzanne et sa mère = Elles، وتصريف فعل يذهب (Aller) معهن هو vont.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي تصريف الشواذ السريع',
          descriptionAr: 'حدد تصريف الفعل في 25 ثانية:',
          timeLimitSeconds: 25,
          challengeQuestions: [
            {
              id: 'rev_def2',
              type: 'multiple-choice',
              instruction: 'Complète au présent :',
              prompt: 'Que .......... -vous faire pour le mariage ?',
              options: ['voulez', 'veulent', 'veux', 'voulons'],
              correctAnswer: 'voulez',
              explanation: 'مع الضمير Vous، تصريف vouloir هو voulez.'
            }
          ]
        }
      }
    },
    {
      id: 'rev-lieux',
      unitId: 'revision',
      unitTitle: 'Révision Générale',
      unitTitleAr: 'المراجعة العامة (Bienvenu 2)',
      order: 3,
      title: 'Les Articles Contractés de Lieu',
      titleAr: 'أدوات المكان المدغمة وحروف الجر (au, à la, à l\', aux)',
      subtitleFr: 'Prépositions de lieu + Exceptions (Le Caire, Le Fayoum, Le Sinaï)',
      estimatedMinutes: 14,
      bookletPages: 'صفحة 86 - 87',
      stages: {
        comprendre: {
          titleAr: 'قاعدة حروف جر الأماكن والمدن',
          summaryAr: 'عند الذهاب أو التواجد في مكان، يُستخدم حرف الجر (à) مدمجاً مع أداة التعريف حسب نوع المكان واسم المدينة أو الدولة.',
          grammarPoints: [
            {
              title: '1. أدوات الإدغام مع الأماكن (Articles Contractés)',
              ruleAr: 'يتم دمج حرف الجر à مع أداة التعريف على النحو التالي:',
              table: {
                headers: ['الأداة المدغمة', 'الاستخدام', 'أمثلة من منهج Bienvenu 2'],
                rows: [
                  ['au (à + le)', 'أمام اسم مفرد مذكر يبدأ بساكن', 'au restaurant, au club, au cinéma, au zoo, au marché, au musée'],
                  ['à la (à + la)', 'أمام اسم مفرد مؤنث يبدأ بساكن', 'à la gare, à la maison, à la piscine, à la fête, à la pharmacie'],
                  ['à l\' (à + l\')', 'أمام اسم مفرد بنوعيه يبدأ بمتحرك أو h صامتة', 'à l\'hôpital, à l\'école, à l\'hôtel, à l\'aéroport'],
                  ['aux (à + les)', 'أمام اسم جمع بنوعيه', 'aux pyramides, aux magasins, aux toilettes']
                ]
              }
            },
            {
              title: '2. الاستثناءات الذهبية للمدن المصرية (Important)',
              ruleAr: 'كل المدن تأخذ حرف الجر (à) البسيط (مثل: à Paris, à Alexandrie, à Louxor, à Tanta, à Assouan)، ما عدا ثلاث مدن مصرية مذكر تأخذ (au):',
              details: [
                'au Caire (في القاهرة)',
                'au Fayoum (في الفيوم)',
                'au Sinaï (في سيناء)'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة نموذجية من نصوص الصف الثاني',
          descriptionAr: 'لاحظ اختيار أداة المكان بدقة:',
          examples: [
            { french: 'Gamal habite au Caire.', arabic: 'جمال يسكن في القاهرة.', note: 'القاهرة تأخذ دائماً au' },
            { french: 'Ali va à l\'hôpital pour visiter Samir.', arabic: 'علي يذهب إلى المستشفى لزيارة سمير.', note: 'hôpital مفرد يبدأ بمتحرك h muet فيأخذ à l\'' },
            { french: 'Le soir, nous allons au restaurant.', arabic: 'في المساء، نحن نذهب إلى المطعم.', note: 'restaurant مفرد مذكر فيأخذ au' }
          ]
        },
        pratiquer: {
          titleAr: 'تدريبات أدوات المكان والمدن (10 أسئلة تفاعلية)',
          descriptionAr: 'اختر حرف الجر أو الأداة المدغمة المناسبة:',
          questions: [
            {
              id: 'rev_loc1',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '1. Mon oncle habite .......... Caire.',
              options: ['à', 'au', 'en', 'aux'],
              correctAnswer: 'au',
              explanation: 'القاهرة (Le Caire) من المدن المذكرة الاستثنائية التي تأخذ au.'
            },
            {
              id: 'rev_loc2',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '2. Suzanne va .......... Alexandrie pendant les vacances.',
              options: ['au', 'à', 'en', 'aux'],
              correctAnswer: 'à',
              explanation: 'جميع المدن العادية تأخذ حرف الجر à بدون أداة (à Alexandrie).'
            },
            {
              id: 'rev_loc3',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '3. Les touristes admirent les statues .......... musée.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'au',
              explanation: 'كلمة musée مفرد مذكر مبدوء بساكن فتأخذ au.'
            },
            {
              id: 'rev_loc4',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '4. Samir a mal, il est transporté .......... hôpital.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'à l\'',
              explanation: 'كلمة hôpital تبدأ بحرف h صامت فيعامل كمتحرك ويأخذ à l\'.'
            },
            {
              id: 'rev_loc5',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '5. La maman achète des légumes .......... marché.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'au',
              explanation: 'كلمة marché مفرد مذكر فتأخذ au.'
            },
            {
              id: 'rev_loc6',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '6. Les amis mangent un bon repas .......... restaurant.',
              options: ['à la', 'au', 'à l\'', 'aux'],
              correctAnswer: 'au',
              explanation: 'كلمة restaurant مفرد مذكر فتأخذ au.'
            },
            {
              id: 'rev_loc7',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '7. Nous passons la soirée .......... maison.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'à la',
              explanation: 'كلمة maison مفرد مؤنث فتأخذ à la.'
            },
            {
              id: 'rev_loc8',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '8. En été, les jeunes vont .......... Sinaï.',
              options: ['au', 'à', 'en', 'aux'],
              correctAnswer: 'au',
              explanation: 'سيناء من الأسماء المذكرة الاستثنائية التي تأخذ au Sinaï.'
            },
            {
              id: 'rev_loc9',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '9. Le train arrive .......... gare de Louxor.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'à la',
              explanation: 'كلمة gare (محطة القطار) مفرد مؤنث فتأخذ à la.'
            },
            {
              id: 'rev_loc10',
              type: 'multiple-choice',
              instruction: 'Choisis la bonne préposition :',
              prompt: '10. Les élèves vont .......... pyramides de Guizèh.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'aux',
              explanation: 'كلمة pyramides اسم جمع فيأخذ aux.'
            }
          ]
        },
        corriger: {
          titleAr: 'تنبيه الامتحان في حروف الجر',
          descriptionAr: 'لا تخلط بين المدن والأماكن العامة:',
          commonMistakes: [
            {
              mistake: 'J\'habite à Caire.',
              correction: 'J\'habite au Caire.',
              why: 'القاهرة والفيوم وسيناء تأخذ دائماً au وليس à.'
            },
            {
              mistake: 'Il va à le club.',
              correction: 'Il va au club.',
              why: 'في اللغة الفرنسية، à + le تدغم إجبارياً إلى au.'
            }
          ],
          remedialQuestions: [
            {
              id: 'rev_rem3',
              type: 'multiple-choice',
              instruction: 'Complète correctement :',
              prompt: 'Les enfants jouent .......... jardin.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'au',
              explanation: 'jardin اسم مفرد مذكر يأخذ au.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي الأماكن السريع',
          descriptionAr: 'أجب في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'rev_def3',
              type: 'multiple-choice',
              instruction: 'Choisis vite :',
              prompt: 'Suzanne achète des médicaments .......... pharmacie.',
              options: ['au', 'à la', 'à l\'', 'aux'],
              correctAnswer: 'à la',
              explanation: 'pharmacie اسم مفرد مؤنث يأخذ à la.'
            }
          ]
        }
      }
    },
    {
      id: 'rev-negation',
      unitId: 'revision',
      unitTitle: 'Révision Générale',
      unitTitleAr: 'المراجعة العامة (Bienvenu 2)',
      order: 4,
      title: 'La Négation & Transformation',
      titleAr: 'صيغة النفي وقاعدة تحويل أدوات النكرة والتجزئة',
      subtitleFr: 'ne ... pas / n\' ... pas + de/d\' et l\'exception de ÊTRE (p. 87 - 88)',
      estimatedMinutes: 15,
      bookletPages: 'صفحة 87 - 88',
      stages: {
        comprendre: {
          titleAr: 'قواعد النفي الأساسية والاستثناء الهام',
          summaryAr: 'لنفي الجملة نضع الفعل المصرف بين شقي النفي (ne ... pas) أو (n\' ... pas) قبل حرف متحرك، مع الانتباه لتحويل الأدوات.',
          grammarPoints: [
            {
              title: '1. التكوين الأساسي للنفي',
              ruleAr: 'Sujet + ne / n\' + Verbe + pas + Complément.',
              details: [
                'Je regarde la télé. -> Je ne regarde pas la télé.',
                'Il aime le chocolat. -> Il n\'aime pas le chocolat. (لأن فعل aimer يبدأ بحرف متحرك)'
              ]
            },
            {
              title: '2. القاعدة الذهبية لتحويل الأدوات عند النفي',
              ruleAr: 'تتحول أدوات النكرة (un, une, des) وأدوات التجزئة (du, de la, de l\', des) إلى (de) أو (d\') في النفي:',
              details: [
                'J\'ai un stylo. -> Je n\'ai pas de stylo.',
                'Il mange de la viande. -> Il ne mange pas de viande.',
                'Nous buvons de l\'eau. -> Nous ne buvons pas d\'eau.'
              ]
            },
            {
              title: '3. الاستثناء الخطير: وجود فعل Être (يكون)',
              ruleAr: 'إذا كان فعل الجملة هو فعل (Être)، تظل أدوات النكرة كما هي بدون أي تحويل إلى de:',
              details: [
                'C\'est un restaurant. -> Ce n\'est pas un restaurant. (لا تحويل مع être)',
                'Ce sont des gâteaux. -> Ce ne sont pas des gâteaux. (لا تحويل مع être)'
              ]
            },
            {
              title: '4. أدوات المعرفة لا تتغير في النفي',
              ruleAr: 'أدوات المعرفة (le, la, l\', les) تبقى كما هي دون تغيير عند النفي مع أفعال الميول (aimer, adorer, préférer, détester):',
              details: [
                'J\'aime le café. -> Je n\'aime pas le café.'
              ]
            }
          ]
        },
        exemple: {
          titleAr: 'أمثلة توضيحية لجميع حالات النفي',
          descriptionAr: 'قارن بين الجمل الإيجابية والمنفية:',
          examples: [
            { french: 'Il a des amis. -> Il n\'a pas d\'amis.', arabic: 'تحولت des إلى d\' لأن amis تبدأ بمتحرك.', note: 'Transformation en d\'' },
            { french: 'C\'est une invitation. -> Ce n\'est pas une invitation.', arabic: 'لم تتغير une لوجود فعل être.', note: 'Exception avec le verbe Être' },
            { french: 'Moustafa boit du thé. -> Moustafa ne boit pas de thé.', arabic: 'تحولت أداة التجزئة du إلى de في النفي.', note: 'Partitif -> de' }
          ]
        },
        pratiquer: {
          titleAr: 'تمارين النفي وتغيير الأدوات (9 أسئلة تفاعلية)',
          descriptionAr: 'اختر الإجابة الصحيحة لإكمال الجملة المنفية:',
          questions: [
            {
              id: 'rev_neg1',
              type: 'multiple-choice',
              instruction: 'Complète à la forme négative :',
              prompt: '1. Gamal ne prend pas .......... sucre dans son café.',
              options: ['du', 'de', 'de la', 'le'],
              correctAnswer: 'de',
              explanation: 'في النفي تتحول أداة التجزئة du إلى de.'
            },
            {
              id: 'rev_neg2',
              type: 'multiple-choice',
              instruction: 'Complète à la forme négative :',
              prompt: '2. Suzanne n\'achète pas .......... robes ce soir.',
              options: ['des', 'de', 'les', 'une'],
              correctAnswer: 'de',
              explanation: 'أداة النكرة الجمع des تتحول في النفي إلى de أمام الاسم المسبوق بنفي.'
            },
            {
              id: 'rev_neg3',
              type: 'multiple-choice',
              instruction: 'Attention au verbe Être :',
              prompt: '3. Ce n\'est pas .......... hôpital privé.',
              options: ['de', 'un', 'd\'', 'du'],
              correctAnswer: 'un',
              explanation: 'مع وجود فعل être لا تحول أداة النكرة، وكلمة hôpital مذكر فتأخذ un.'
            },
            {
              id: 'rev_neg4',
              type: 'multiple-choice',
              instruction: 'Complète à la forme négative :',
              prompt: '4. Nous n\'avons pas .......... argent.',
              options: ['d\'', 'de', 'de l\'', 'l\''],
              correctAnswer: 'd\'',
              explanation: 'تتحول الأداة إلى d\' لأن كلمة argent (نقود) تبدأ بحرف متحرك.'
            },
            {
              id: 'rev_neg5',
              type: 'multiple-choice',
              instruction: 'Complète avec un verbe de goût :',
              prompt: '5. Ali n\'aime pas .......... poisson.',
              options: ['de', 'du', 'le', 'd\''],
              correctAnswer: 'le',
              explanation: 'أفعال الميول والحب مثل aimer تأخذ أداة معرفة le ولا تتغير عند النفي.'
            },
            {
              id: 'rev_neg6',
              type: 'multiple-choice',
              instruction: 'Complète la négation :',
              prompt: '6. Samir .......... va pas à l\'école aujourd\'hui.',
              options: ['ne', 'n\'', 'pas', 'de'],
              correctAnswer: 'ne',
              explanation: 'فعل va يبدأ بساكن فنضع قبله ne.'
            },
            {
              id: 'rev_neg7',
              type: 'multiple-choice',
              instruction: 'Complète la négation :',
              prompt: '7. Mon père .......... écoute pas la radio le matin.',
              options: ['ne', 'n\'', 'sans', 'pas'],
              correctAnswer: 'n\'',
              explanation: 'فعل écoute يبدأ بحرف متحرك é فنضع n\'.'
            },
            {
              id: 'rev_neg8',
              type: 'multiple-choice',
              instruction: 'Attention au pluriel avec Être :',
              prompt: '8. Ce ne sont pas .......... amis de classe.',
              options: ['de', 'des', 'd\'', 'les'],
              correctAnswer: 'des',
              explanation: 'مع فعل être في الجمع تظل des كما هي ولا تتحول.'
            },
            {
              id: 'rev_neg9',
              type: 'multiple-choice',
              instruction: 'Mets à la forme négative :',
              prompt: '9. Tu bois du jus d\'orange ? - Non, je ne bois pas .......... jus.',
              options: ['du', 'de', 'un', 'le'],
              correctAnswer: 'de',
              explanation: 'في الإجابة المنفية تتحول أداة التجزئة du إلى de.'
            }
          ]
        },
        corriger: {
          titleAr: 'فخاخ امتحانات النفي',
          descriptionAr: 'لا تقع في خطأ تحويل الأداة مع فعل être:',
          commonMistakes: [
            {
              mistake: 'Ce n\'est pas d\'école.',
              correction: 'Ce n\'est pas une école.',
              why: 'مع فعل Être لا نغير أداة النكرة إلى de.'
            },
            {
              mistake: 'Je ne bois pas du lait.',
              correction: 'Je ne bois pas de lait.',
              why: 'مع أفعال الأكل والشرب المنفية، du تتحول إجبارياً إلى de.'
            }
          ],
          remedialQuestions: [
            {
              id: 'rev_rem4',
              type: 'multiple-choice',
              instruction: 'Choisis :',
              prompt: 'Il n\'y a pas .......... voiture dans la rue.',
              options: ['de', 'une', 'la', 'des'],
              correctAnswer: 'de',
              explanation: 'التعبير Il n\'y a pas يأخذ دائماً de أو d\'.'
            }
          ]
        },
        defi: {
          titleAr: 'تحدي النفي السريع',
          descriptionAr: 'حل في 20 ثانية:',
          timeLimitSeconds: 20,
          challengeQuestions: [
            {
              id: 'rev_def4',
              type: 'multiple-choice',
              instruction: 'Complète vite :',
              prompt: 'Gamal ne mange pas .......... viande le soir.',
              options: ['de', 'de la', 'la', 'une'],
              correctAnswer: 'de',
              explanation: 'تتحول de la إلى de في النفي مع فعل manger.'
            }
          ]
        }
      }
    }
  ]
};
