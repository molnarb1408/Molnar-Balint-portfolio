import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1200
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "Molnár Bálint",
  title: "Üdv, Bálint vagyok!",
  subTitle: (
    "Molnár Bálint vagyok, lelkes és elkötelezett fejlesztő, aki frontend és backend technológiák széles skálájában rendelkezik tudással. Frontend területen erősségeim közé tartozik a JavaScript, HTML, CSS, Bootstrap, Angular és Node.js, illetve a NoSQL adatbázisok használata. Backend oldalon mélyebben ismerem a SQL, Java, Java Swing és JavaFX technológiákat."
  ),
  resumeLink:
    "https://mega.nz/folder/oHoRxABT#3VkrF55q0xR112UNTiBaQg",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/molnarb1408",
  linkedin: "https://www.linkedin.com/in/bálint-molnár-a3b66a24b/",
  gmail: "molnar.balint1408@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Képességeim:",
  subTitle: "Lelkes fejlesztő, Frontend és Backend tudással!",
  skills: [
    emoji("⚡Angular Fejlesztő"),
    emoji("⚡ JAVA Back End fejlesztő"),
    emoji("⚡ Modern Front End felületek tervezése webes oldalak és applikációk számára"),
    emoji("⚡Adatbázis kezelés, SQL - NoSQL megoldások segítségével"),

  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "noSql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true
};

// Proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Tervezés",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "65%"
    },
    {
      Stack: "Programming",
      progressPercentage: "67%"
    }
  ],
  displayCodersrank: false
};


// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Pécsi Tudományegyetem",
      logo: require("./assets/images/PTE.webp"),
      subHeader: "Pénzügy és számvitel",
      duration: "Szeptember 2019 - Június 2022",
      desc: "MNB Kiválósági ösztöndíj nyertese",
      descBullets: [
        "Kiemelkedő 5* érdemjeggyel elvégzet alapképzés",
      ]
    },
    {
      schoolName: "Pécsi Tudományegyetem",
      logo: require("./assets/images/PTE.webp"),
      subHeader: "Vállalkozási mérlegképes könyvelő",
      duration: "Szeptember 2019 - Június 2022",
      desc: "Egyetem elvégzése közben, sikeresen megszerzett Vállalkozási mérlegképes könyvelő végzetség",
      descBullets: ["Hivatalos, Vállalkozási mérlegképes könyvelő bizonyítvány megszerzése"]
    }
  ]
};

// Work experience section 

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Vállalati weblap készítés",
      company: "Greensense Consulting",
      companylogo: require("./assets/images/greensenseLogo.webp"),
      date: "2024 Augusztus – 2024 Október",
      desc: "A GreenSense Consulting megbízásából elkészítettem a hívatalos 'GreenSense.hu' weblapot.",
      descBullets: [
        "Technlogiák: HTML5, CSS3, Bootstrap, JavaScript, PhP, npm",
        "Informatív, modern sztandardoknak megfelelő design",
        "SEO optimalizáció",
        "Felület készítés, tesztelés, stb.",
      ]
    },
    {
      role: "Eszkalációs Menedzser (logisztika - autóipar)",
      company: "Provertha Zrt.",
      companylogo: require("./assets/images/proverthaLogo.webp"),
      date: "2023-04 – 2023-12",
      desc: "Automitive - Logisztika, területén töltöttem be menedzseri munkakört.",
      descBullets: [
        "Növeltem a teljesítményt a napi tevékenységek nyomon követésével és a csapattagok mentorálásával.",
        "Számos feladatot sikeresen elvégeztem a meghatározott határidőkön belül.",
        "Javítottam az ügyfél-elégedettséget a viták gyors rendezésével, a folyamatos kommunikációval és a magas színvonalú szolgáltatás biztosításával.",
      ]
    },
    {
      role: "Junior Adótanácsadó",
      company: "Ernst & Young,",
      companylogo: require("./assets/images/eyLogo.webp"),
      date: "2022-12 – 2023-03",
      desc: "Junior Adótanácsadó munkakört töltöttem be a pénzügyi-szolgáltatói szektor 'BIG4' egyik meghatározó multinacionális vállalkozásánál.",
      descBullets: [
        "Figyelemmel kísértem a projekteket, hogy megfeleljenek a jogi és szabályozási előírásoknak,",
        "Részletes jelentéseket készítettem a megfelelési mutatókról, tájékoztatva a felsővezetést a főbb trendekről és a javításra szoruló területekről.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Big projects

const bigProjects = {
  title: "Nagyobb Projekjeim",
  subtitle: "NÉHÁNY CÉGEK ÁLTAL MEGRENDELT, ILLETVE SAJÁT KÉSZÍTÉSŰ PROJECT",
  projects: [
    {
      image: require("./assets/images/greenssenseCroppedLogo.webp"),
      projectName: "GreenSense.hu",
      projectDesc: "A GreenSense Consulting tréningeket, workshopokat, előadásokat és egyéb programokat kínál fenntarthatósági és ESG témákban. A cég elkötelezett abban, hogy a fenntarthatóságot a vállalati kultúra szerves részévé tegye. Céljuk, hogy segítsék partnereiket az ESG céljaik és vállalásaik elérésében. Ennek a célnak a nevében készült el egy lehető legjobban a fenntarthatóságra koncentráló weboldal.",
      footerLink: [
        {
          name: "Weboldal Megnyítása",
          url: "https://greensense.hu"
        }
      ]
    },
    {
      image: require("./assets/images/placeholder.webp"),
      projectName: "placeholder",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Weboldal Megnyítása",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Eredmények és Bizonyítványok 🏆 "),
  subtitle:
    "Achievementek, Bizonyítványok, Díjak amiket elértem, és büszke vagyok rájuk!",

  achievementsCards: [
    {
      title: "Magyar Nemzeti Bank - Kiválósági ösztöndíj",
      subtitle: "Sikeresen megszerzett MNB kíválósági ösztöndíj, kiemelkedő tanulmányi teljesítményért!",
      image: require("./assets/images/mnbLogo.webp"),
      imageAlt: "MNB Logo",
      footerLink: [
        { name: "Ösztöndíj", url: "https://mega.nz/file/8H5wlAIZ#RuKZYqNavUr6ikjAOqbQJkaYb2Sq0mymMB6KlecFaE0" },
        {
          name: "Felhívás",
          url: "https://www.mnb.hu/oktatas/mnb-kivalosagi-osztondij"
        }
      ]
    },
    {
      title: "Ruander - Frontend fejlesztő",
      subtitle:
        "Sikeresen elvégzett Frontend fejlesztői képzés, kiemelkedő 5* eredménnyel!",
      image: require("./assets/images/ruanderLogo.webp"),
      imageAlt: "Ruander Logo",
      footerLink: [
        {
          name: "Felhívás",
          url: "https://www.ruander.hu/junior-frontend-fejleszto-tanfolyam.html"
        }
      ]
    },
    {
      title: "Ruander - Backend fejlesztő",
      subtitle:
        "Folyamatban lévő Backend fejlesztői képzés!",
      image: require("./assets/images/ruanderLogo.webp"),
      imageAlt: "Ruander Logo",
      footerLink: [
        {
          name: "Felhívás",
          url: "https://www.ruander.hu/java-programozo.html"
        }
      ]
    },
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Önéletrajz",
  subtitle: "Töltsd az önéletrajzom!",

  display: false
};

const contactInfo = {
  title: emoji("Elérhetőségem ☎️"),
  subtitle:
    "Nyitott vagyok projektekre és munka lehetőségekre!",
  number: "+36-307130207",
  email_address: "molnar.balint1408@gmail.com"
};


const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
