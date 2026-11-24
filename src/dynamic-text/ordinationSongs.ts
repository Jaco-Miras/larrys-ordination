export type LyricBlock = {
  label?: string;
  isRefrain?: boolean;
  lines: readonly string[];
};

export type MassSong = {
  id: string;
  title: string;
  subtitle?: string;
  page: number;
  blocks: readonly LyricBlock[];
};

export type SongTabId =
  | "entrance"
  | "introductory"
  | "our-father"
  | "more";

export type SongTab = {
  id: SongTabId;
  label: string;
  shortDesc: string;
  pageLabel: string;
  songs: readonly MassSong[];
};

export const ordinationSongTabs: readonly SongTab[] = [
  {
    id: "entrance",
    label: "Entrance Hymn",
    shortDesc: "Purihin at Ipagdangal",
    pageLabel: "p. 5",
    songs: [
      {
        id: "purihin-at-ipagdangal",
        title: "Purihin at Ipagdangal",
        subtitle: "Music: Ferdinand M. Bautista",
        page: 5,
        blocks: [
          {
            label: "Koro",
            isRefrain: true,
            lines: [
              "Purihin at ipagdangal si Hesus na Poong mahal.",
              "Nasa atin ay huminrang upang tana’y paglingkuran",
              "Sa hanay ng kaparian!",
            ],
          },
          {
            label: "Verse 1",
            lines: [
              "Iniibig Niya tayo at pinalaya sa ‘ting mga sala.",
              "Ginawa Niya tayong ‘sang liping naglilingkod sa Diyos Aman,",
              "Bilang mga sacerdote! (Koro)",
            ],
          },
          {
            label: "Verse 2",
            lines: [
              "Anak ng Tao’y dumating paglilingkod ang Siyang layunin,",
              "Hindi para mang-alipin kundi upang maihain ang Kanyang buhay sa atin. (Koro)",
            ],
          },
          {
            label: "Verse 3",
            lines: [
              "Sinabi ni Hesukristo “’Di ninyo pinili Ako.",
              "Kundi hinirang Ko kayo, upang kayo ay humayo’t magsipamungang totoo.” (Koro)",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "introductory",
    label: "Introductory Rite",
    shortDesc: "Kyrie & Gloria",
    pageLabel: "p. 7",
    songs: [
      {
        id: "kyrie",
        title: "Kyrie",
        subtitle: "Panginoon, Kaawaan Mo Kami",
        page: 7,
        blocks: [
          {
            lines: [
              "Panginoon, kaawaan Mo kami.",
              "Panginoon, kaawaan Mo kami.",
            ],
          },
          {
            lines: [
              "Kristo, kaawaan Mo kami.",
              "Kristo, kaawaan Mo kami.",
            ],
          },
          {
            lines: [
              "Panginoon, kaawaan Mo kami.",
              "Panginoon, kaawaan Mo kami.",
            ],
          },
        ],
      },
      {
        id: "gloria",
        title: "Gloria",
        subtitle: "Glory to God in the Highest",
        page: 7,
        blocks: [
          {
            label: "Refrain",
            isRefrain: true,
            lines: [
              "Glory to God in the highest,",
              "And on earth peace to people of good will.",
              "Glory to God in the highest,",
              "And on earth peace to people of good will.",
            ],
          },
          {
            label: "Verse 1",
            lines: [
              "We praise You, we bless You,",
              "We adore You, we glorify You,",
              "We give You thanks for Your great glory,",
              "Lord God, heavenly King,",
              "O God, almighty Father. (Ref)",
            ],
          },
          {
            label: "Verse 2",
            lines: [
              "Lord Jesus Christ, Only Begotten Son,",
              "Lord God, Lamb of God, Son of the Father,",
              "You take away the sins of the world,",
              "Have mercy on us",
              "You take away the sins of the world,",
              "Receive our prayer;",
              "You are seated at the right hand of the Father,",
              "Have mercy on us. (Ref)",
            ],
          },
          {
            label: "Verse 3",
            lines: [
              "For You alone are the Holy One,",
              "You alone are the Lord,",
              "You alone are the Most High,",
              "Jesus Christ",
              "With the Holy Spirit,",
              "In the glory of God the Father. (Ref)",
            ],
          },
          {
            label: "Coda",
            isRefrain: true,
            lines: ["And on earth peace to people of good will. Amen."],
          },
        ],
      },
    ],
  },
  {
    id: "our-father",
    label: "Our Father",
    shortDesc: "Ama Namin & Doxology",
    pageLabel: "pp. 34–35",
    songs: [
      {
        id: "ama-namin",
        title: "Our Father (Ama Namin)",
        subtitle: "Communion Rite",
        page: 34,
        blocks: [
          {
            lines: [
              "Ama namin sumasalangit Ka",
              "Sambahin ang ngalan Mo",
              "Mapasaamin ang kaharian Mo",
              "Sundin ang loob Mo",
              "Dito sa lupa para nang sa langit",
            ],
          },
          {
            lines: [
              "Bigyan Mo kami ngayon",
              "Ng aming kakanin sa araw-araw",
              "At patawarin Mo kami",
              "Sa aming mga sala",
              "Para ng pagpapatawad namin",
              "Sa nagkakasala sa amin",
              "At huwag Mo kaming ipahintulot",
              "Sa tukso at iadya Mo kami",
              "Sa lahat ng masama",
            ],
          },
        ],
      },
      {
        id: "doxology",
        title: "Doxology",
        subtitle: "Acclamation after the Embolism",
        page: 35,
        blocks: [
          {
            isRefrain: true,
            lines: [
              "Sapagkat Sa’yo ang kaharian,",
              "Kapangyarihan at kapurihan",
              "/: Ngayon at magpakailanman :/",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "more",
    label: "More Mass Songs",
    shortDesc: "Psalm, Sanctus, Communion & Recessional",
    pageLabel: "pp. 10–40",
    songs: [
      {
        id: "responsorial-psalm",
        title: "Responsorial Psalm & Gospel Acclamation",
        subtitle: "Liturgy of the Word",
        page: 10,
        blocks: [
          {
            label: "Response",
            isRefrain: true,
            lines: [
              "R:/ Ikaw pari sa kahangturan",
              "sa laray ni Melquisedec",
            ],
          },
          {
            label: "Verse 1",
            lines: [
              "Ang Ginoo nag-ingon sa akong Ginoo",
              "“Lingkog sa akong tuo hangtod",
              "Akong himoon ang imong mga kaaway",
              "nga tumbanan sa akong mga tiil.” (R/)",
            ],
          },
          {
            label: "Verse 2",
            lines: [
              "Ang setro sa imong gahum",
              "ibakyaw sa Ginoo gikan sa Sion:",
              "“Paghari diha sa taliwala sa imong mga kaaway.” (R/)",
            ],
          },
          {
            label: "Verse 3",
            lines: [
              "“Imo ang harianong gahom",
              "sa adlaw sa imong pagkatawo",
              "diha sa balaan nga kasanag; sa wala pa ang kabugason",
              "Sama sa yamog, gianak ko ikaw.” (R/)",
            ],
          },
          {
            label: "Verse 4",
            lines: [
              "Ang Ginoo nanumpa ug dili siya magbasol;",
              "“Ikaw pari sa kahangturan,",
              "Sumala sa laray ni Melquisedec.” (R/)",
            ],
          },
          {
            label: "Gospel Acclamation (p. 11)",
            isRefrain: true,
            lines: ["//: Alleluia, Alleluia, Alleluia, Alleluia ://"],
          },
        ],
      },
      {
        id: "sanctus",
        title: "Sanctus",
        subtitle: "Liturgy of the Eucharist",
        page: 30,
        blocks: [
          {
            lines: [
              "Santos, Santos, Santos",
              "Ginoong Dios nga Makagagahom",
            ],
          },
          {
            lines: [
              "Ug napuno ang langit ug yuta sa Imong himaya",
              "Osana sa kaitaasan",
            ],
          },
          {
            lines: [
              "Pagadaygon ang naga-anhi sa ngalan sa Ginoo",
              "Osana sa kaitaasan",
            ],
          },
        ],
      },
      {
        id: "agnus-dei",
        title: "Agnus Dei",
        subtitle: "Kordero ng Diyos",
        page: 35,
        blocks: [
          {
            lines: [
              "/: Kordero ng Diyos na nag-aalis",
              "ng mga kasalanan ng mundo",
              "Maawa Ka sa amin, Kordero ng Diyos, maawa Ka :/",
            ],
          },
          {
            lines: [
              "Kordero ng Diyos na nag-aalis",
              "ng mga kasalanan ng mundo",
              "Ipagkaloob Mo sa amin ang kapayapaan",
            ],
          },
        ],
      },
      {
        id: "tinapay-ng-buhay",
        title: "Tinapay ng Buhay",
        subtitle: "Communion Hymn",
        page: 36,
        blocks: [
          {
            label: "Koro",
            isRefrain: true,
            lines: [
              "Iesu, Panis Vitae, donum Patris.",
              "Iesu, fons vitae, fons vitae aquae.",
              "Cibus et potus noster, cibus et potus noster",
              "In itinere, in itinere ad domum Dei.",
            ],
          },
          {
            label: "Verse 1",
            lines: [
              "Mula sa lupa, sumibol Kang masigla,",
              "Matapos Kang yurakan ng mga masasama.",
              "Sumilang ang liwanag ng mga nawawala,",
              "Tinapay ng buhay, pagkain ng dukha. (K)",
            ],
          },
          {
            label: "Verse 2",
            lines: [
              "Jesus, Food divine, be our strength each day,",
              "So we don’t tire as we witness to Your love and care",
              "To those in greater need, both near and far away.",
              "May we lead them back to You, all those who’ve gone astray. (K)",
            ],
          },
          {
            label: "Verse 3",
            lines: [
              "En la vida, Jesús, sea nuestro consuelo.",
              "Sea nuestro amigo y compañero.",
              "Siempre podamos responder a su llamada.",
              "Siempre dispuesto hacer tu voluntad. (K)",
            ],
          },
        ],
      },
      {
        id: "be-not-afraid",
        title: "Be Not Afraid",
        subtitle: "Communion Hymn",
        page: 37,
        blocks: [
          {
            label: "Refrain",
            isRefrain: true,
            lines: [
              "Be not afraid, I have made you,",
              "I have saved you, I have called you.",
              "You are Mine, you are precious to Me, and I love you.",
              "Be not afraid. Be not afraid.",
            ],
          },
          {
            label: "Verse 1",
            lines: [
              "When you pass through waters that rage, I am with you.",
              "In the rivers you shall not drown.",
              "Walk through the fire and its flames will not consume you",
              "For I am God. (Ref)",
            ],
          },
          {
            label: "Verse 2",
            lines: [
              "Even if you wander away from My loving,",
              "Far away from home you might stray.",
              "Still I will seek you and gently take you with Me",
              "And bring you back. (Ref)",
            ],
          },
          {
            label: "Verse 3",
            lines: [
              "I will go before you and level the mountains,",
              "Give you treasures from out of the dark.",
              "Long hidden riches will stream at last from you",
              "For I am God! (Ref)",
            ],
          },
        ],
      },
      {
        id: "alma-misionera",
        title: "Alma Misionera",
        subtitle: "Recessional Song",
        page: 40,
        blocks: [
          {
            label: "Verse 1",
            lines: [
              "Señor, toma mi vida nueva",
              "Antes de que la espera",
              "Desgaste años en mí",
              "Estoy dispuesta a lo que quieras",
              "No importa lo que sea",
              "Tú llámame a servir (K)",
            ],
          },
          {
            label: "Koro",
            isRefrain: true,
            lines: [
              "Llévame donde los hombres",
              "Necesiten tus palabras",
              "Necesiten mis ganas de vivir",
              "Donde falte la esperanza",
              "Donde falte la alegría",
              "Simplemente por no saber de Ti",
            ],
          },
          {
            label: "Verse 2",
            lines: [
              "Te doy mi corazón sincero",
              "Para gritar sin miedo",
              "Tu grandeza, Señor",
              "Tendré mis manos sin cansancio",
              "Tu historia entre mis labios",
              "Y fuerza en la oración (K)",
            ],
          },
          {
            label: "Verse 3",
            lines: [
              "Y así en marcha iré cantando",
              "Por calles predicando",
              "Lo bello que es tu amor",
              "Señor, tengo alma misionera",
              "Condúceme a la tierra",
              "Que tenga sed de Dios (K)",
            ],
          },
          {
            label: "Coda",
            lines: [
              "Simplemente, por no saber de Ti",
              "Simplemente, por no saber de Ti",
            ],
          },
        ],
      },
    ],
  },
] as const;
