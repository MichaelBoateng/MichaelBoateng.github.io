// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "Comprehensive curriculum vitae showcasing my academic background, research experience, and professional achievements in power systems optimization and machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Newsletters from academia and industry highlighting my work and accomplishments from undergraduate through graduate studies. These letters cover a wide range of problems in electrical engineering.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/News/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "My research spans the intersection of power systems, machine learning, and optimization, with a focus on AC feasibility restoration, Volt/VAR optimization, and Security-Constrained Optimal Power Flow (SCOPF).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
