import Mock from "../mock";

const database = {
  information: {
    name: "Jared Best",
    aboutContent: "I'm a freelance creative technologist working at the intersection of engineering, design, and IT. Although my interests are broad, I'm passionate in leveraging technology in the fields of mobility analytics and urban informatics.",
    age: "",
    phone: "",
    nationality: "American",
    language: "English, German",
    email: "me@jaredbest.com",
    address: "Karlsruhe, Germany",
    freelanceStatus: "Unavailable",
    socialLinks: {
      github: "https://github.com/jaredbest",
      dribbble: "https://dribbble.com/JaredBest",
      linkedin: "https://www.linkedin.com/in/jaredbest/",
      twitter: "https://twitter.com/JaredLBest",
      instagram: "https://www.instagram.com/jaredlbest/",
      facebook: "",
      pinterest: "",
      behance: "",
    },
    brandImage: "/images/brand-image.jpg",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/g-about-image.jpg",
    cvfile: "",
  },
  services:
    [
      {
        title: "Web Design",
        icon: "color-pallet",
        details: "With each project I take on, I'm committed to crafting a powerhouse digital experience. If you want to step up your website's design without burning a hole in your pocket, you can turn to me.",
      },
      {
        title: "Web Development",
        icon: "code",
        details: "I provide easy-to-navigate, logically structured websites. If you're interested in having your users (and search engines) find you more easily on the crowed Net, let's chat.",
      },
    ],
  reviews:
    [{
      id: 1,
      content: "Coming soon.",
      author: {
        name: "",
        designation: "",
      },
    },],
  skills: [{
    title: "Front-end Technologies (HTML, CSS, JavaScript, jQuery)",
    value: 70,
  },
  {
    title: "Back-end Technologies (Python, C#, Java, Node.js, PHP)",
    value: 60,
  },
  {
    title: "Code Editors/IDEs (VS Code, Visual Studio, IntelliJ IDEA)",
    value: 70,
  },
  {
    title: "Game Engines (Unity, Unreal Engine)",
    value: 50,
  },
  {
    title: "Libraries/Frameworks (React, AngularJS)",
    value: 40,
  },
  {
    title: "Databases (MySQL, MongoDB, PostgreSQL)",
    value: 50,
  },
  {
    title: "Version Control Systems (Git, GitHub)",
    value: 80,
  },
  {
    title: "Project Management Tools (Jira, Microsoft Project)",
    value: 90,
  },
  {
    title: "Graphics Software (Adobe Illustrator, Blender)",
    value: 70,
  },
  {
    title: "Geospatial Software (Esri ArcGIS, QGIS, JOSM)",
    value: 80,
  },
  {
    title: "Traffic Simulation/Planning Software (PTV Vissim, PTV Visum)",
    value: 90,
  },
    /*     {
      title: "HTTP & Rest API",
      value: 50,
    }, */
  ],
  projects: [
    {
      id: 8,
      title: "GreyStillPlays Theme for VS Code",
      subtitle: "I created a minimal, grey theme with subtle hints of lime and tickle me pink error messages. Crafted with C# development for Unity in mind, it is available on the Visual Studio Marketplace.",
      imageUrl: "/images/projects/greystillplays-theme/greystillplays-theme.png",
      url: "https://marketplace.visualstudio.com/items?itemName=jaredbest.greystillplays-vscode",
    },
    {
      id: 7,
      title: "Mount Rainier",
      subtitle: "I created this 3D model of Mount Rainier, Washington, in Blender using the BlenderGIS add-on, which is capable of importing basemap and SRTM data. I applied quite a few material tweaks on this mesh and rendered it using Syferfontein 1d Clear from HDRIHaven.",
      imageUrl: "/images/projects/blender-mount-rainier/blender-mount-rainier.png",
      url: "https://dribbble.com/shots/15312472-Mount-Rainier-Blender-Render",
    },
    // {
    //   id: 7,
    //   title: "AllThingsTransport",
    //   subtitle: "I manage an Etsy shop that is obsessed with everything that has to do with trains, trams, and buses. We create unique designs that pay tribute to our favorite vehicles that bring us from point A to point B every day.",
    //   imageUrl: "/images/projects/allthingstransport/allthingstransport.png",
    //   url: "https://www.etsy.com/shop/AllThingsTransport",
    // },
    {
      id: 6,
      title: "Donut & Coffee",
      subtitle: "I rendered this as part of a Blender course, which covered topics such as Modeling, Sculpting, Materials, Lighting, Particles, UV Unwrapping, Texture Paining, Procedural Texturing, Displacement, Photo Texturing, and Volumetrics.",
      imageUrl: "/images/projects/blender-donut-and-coffee/blender-donut-and-coffee.png",
      url: "https://dribbble.com/shots/14615605-Donut-Coffee-Blender-Render",
    },
    {
      id: 5,
      title: "Legend of Zelda: Link's Awakening Look-Alike",
      subtitle: "Following the tutorial of the incredible Mister Taft Creates and adding my own stuff along the way, I am developing this 2D game in Unity.",
      imageUrl: "/images/projects/legend-of-zelda/legend-of-zelda.gif",
      url: "https://github.com/jaredbest/unity-legend-of-zelda-links-awakening-look-alike",
    },
    {
      id: 4,
      title: "Mapping Ticonderoga",
      subtitle: "Ticonderoga is a town in Essex County, New York, USA. On OpenStreetMap (OSM), there was quite a bit of emptiness within the town boundary, so I used JOSM to fill in the gaps.",
      imageUrl: "/images/projects/mapping-ticonderoga/mapping-ticonderoga-dynamic.gif",
      url: "https://www.openstreetmap.org/#map=15/43.8474/-73.4276",
    },
    {
      id: 3,
      title: "Output PTV Vissim Parking Lot Occupancy to CSV",
      subtitle: "I created a PTV Vissim integrated Python script which outputs a CSV file containing the parking lot occupancy per unit of time as defined by the user.",
      imageUrl: "/images/projects/github.jpg",
      url: "https://github.com/jaredbest/output-ptv-vissim-parking-lot-occupancy-to-csv",
    },
    {
      id: 2,
      title: "Extract PTV Vissim Link Attributes to CSV",
      subtitle: "I expanded on a Python script that parses a PTV Vissim INPX file and exports a CSV file containing relevant link attributes.",
      imageUrl: "/images/projects/github.jpg",
      url: "https://github.com/jaredbest/extract-ptv-vissim-link-attributes-to-csv",
    },
    {
      id: 1,
      title: "Truck Parking Demand Modeling",
      subtitle: "In collaboration with a research colleague, I developed a methodology for modeling truck parking demand along freeway corridors using traffic microsimulation. Results were published in the ITE Journal.",
      imageUrl: "/images/projects/truck-parking-demand-modeling/truck-parking-demand-modeling.png",
      url: "https://www.nxtbook.com/ygsreprints/ITE/G110110_ITE_October2019/index.php#/p/22",
    },
  ],
  experience: {
    workingExperience: [{
      id: 6,
      year: "2020 - 2020",
      position: "Associate Solution Architect | Professional Services",
      company: "E2open (Karlsruhe, Germany)",
      details: "",
    },
    {
      id: 5,
      year: "2018 - 2019",
      position: "Support Consultant | Project Management & Services",
      company: "PTV Group (Karlsruhe, Germany)",
      details: "",
    },
    {
      id: 4,
      year: "2017 - 2017",
      position: "Working Student | Corporate Strategy",
      company: "Siemens (Munich, Germany)",
      details: "",
    },
    {
      id: 3,
      year: "2014 - 2014",
      position: "Intern | Vehicle Operations Manufacturing Engineering",
      company: "Ford Motor Company (Dearborn, MI, USA)",
      details: "",
    },
    {
      id: 2,
      year: "2013 - 2013",
      position: "Environmental Engineer",
      company: "Ecology and Environment (Lancaster, NY, USA)",
      details: "",
    },
    {
      id: 1,
      year: "2012 - 2012",
      position: "Environmental Summer Intern",
      company: "Bergmann Associates (Rochester, NY, USA)",
      details: "",
    },
    ],
    educationExperience: [{
      id: 5,
      year: "2020 - Present",
      graduation: "Doctor of Philosophy (PhD), Transport Planning & Modeling",
      university: "Technical University of Munich (Munich, Germany)",
      details: "",
    },
    {
      id: 4,
      year: "2015 - 2018",
      graduation: "Master of Science (M.Sc.), Urban Environments & Transportation",
      university: "Technical University of Munich (Munich, Germany)",
      details: "",
    },
    {
      id: 3,
      year: "2013 - 2014",
      graduation: "No degree conferred, Civil Engineering",
      university: "University of Waterloo (Waterloo, ON, Canada)",
      details: "",
    },
    {
      id: 2,
      year: "2009 - 2013",
      graduation: "Bachelor of Science (B.S.), Environmental Engineering",
      university: "Clarkson University (Potsdam, NY, USA)",
      details: "",
    },
    {
      id: 1,
      year: "2005 - 2009",
      graduation: "Advanced Regents Diploma with Honors",
      university: "Ticonderoga High School (Ticonderoga, NY, USA)",
      details: "",
    },
    ],
  },
  blog: [
    {
      id: 2,
      title: "ML-Agents Setup with Anaconda",
      featuredImage: "/images/blog/ml-agents-setup-with-anaconda/ml-agents-setup-with-anaconda.png",
      filesource: "../../blog/ml-agents-setup-with-anaconda/ml-agents-setup-with-anaconda.md",
      createDay: "17",
      createMonth: "March",
      createYear: "2021",
    },
    {
      id: 1,
      title: "London Street Orientations",
      featuredImage: "/images/blog/london-street-orientations/london-street-orientations.png",
      filesource: "../../blog/london-street-orientations/london-street-orientations.md",
      createDay: "14",
      createMonth: "May",
      createYear: "2020",
    },
  ],
  contactInfo: {
    // phoneNumbers: [""],
    emailAddress: ["me@jaredbest.com"],
    address: "Karlsruhe, Germany",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/projects").reply((config) => {
  const response = database.projects;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blog;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});