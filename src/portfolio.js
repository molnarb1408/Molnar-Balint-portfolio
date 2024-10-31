/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1200 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Molnár Bálint",
  title: "Üdv, Bálint vagyok!",
  subTitle: (
    "Molnár Bálint vagyok, lelkes és elkötelezett fejlesztő, aki frontend és backend technológiák széles skálájában rendelkezik tudással. Frontend területen erősségeim közé tartozik a JavaScript, HTML, CSS, Bootstrap, Angular és Node.js, illetve a NoSQL adatbázisok használata. Backend oldalon mélyebben ismerem a SQL, Java, Java Swing és JavaFX technológiákat."
  ),
  resumeLink:
    "https://mega.nz/file/8exnVLAQ#PWQbcfx4ska1UN_sO7lGWQXa7u6OCqJmo0oa7cU8It0", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/molnarb1408",
  linkedin: "https://www.linkedin.com/in/bálint-molnár-a3b66a24b/",
  gmail: "molnar.balint1408@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tudástáram:",
  subTitle: "Lelkes fejlesztő, Frontend és Backend tudással!",
  skills: [
    emoji(
      "⚡ Modern Front End felületek tervezése webes oldalak ls applikációk számára"
    ),
    emoji("⚡Adatbázis kezelés, SQL - NoSQL megoldások segítségével"),
    emoji(
      "⚡ JAVA Back End fejlesztő"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Tervezés", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
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
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
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
  display: true, //Set it to true to show workExperiences Section 
  experience: [
    {
      role: "Vállalati weblap készítés",
      company: "Greensense Consulting",
      companylogo: require("./assets/images/greensenseLogo.png"),
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
      companylogo: require("./assets/images/proverthaLogo.png"),
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
      companylogo: require("./assets/images/eyLogo.png"),
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
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Nagyobb Projekjeim",
  subtitle: "NÉHÁNY CÉGEK ÁLTAL MEGRENDELT, ILLETVE SAJÁT KÉSZÍTÉSŰ PROJECT",
  projects: [
    {
      image: require("./assets/images/greenssenseCroppedLogo.png"),
      projectName: "GreenSense.hu",
      projectDesc: "A GreenSense Consulting tréningeket, workshopokat, előadásokat és egyéb programokat kínál fenntarthatósági és ESG témákban. A cég elkötelezett abban, hogy a fenntarthatóságot a vállalati kultúra szerves részévé tegye. Céljuk, hogy segítsék partnereiket az ESG céljaik és vállalásaik elérésében. Ennek a célnak a nevében készült el egy lehető legjobban a fenntarthatóságra koncentráló weboldal.",
      footerLink: [
        {
          name: "Weboldal Megnyítása",
          url: "https://greensense.hu"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Weboldal Megnyítása",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Elérhetőségem ☎️"),
  subtitle:
    "Nyitott vagyok projektekre és munka lehetőségekre!",
  number: "+36-307130207",
  email_address: "molnar.balint1408@gmail.com"
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
