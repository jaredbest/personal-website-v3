import Mock from "../mock";

const database = {
  information: {
    name: "Jared Best",
    aboutContent: "This place showcases some of the projects I've worked on in my spare time.",
    age: "",
    phone: "",
    nationality: "American",
    language: "English, German (C1)",
    email: "me@jaredbest.com",
    address: "Karlsruhe, Germany",
    freelanceStatus: "",
    socialLinks: {
      github: "https://github.com/jaredbest",
      dribbble: "https://dribbble.com/JaredBest",
      linkedin: "https://www.linkedin.com/in/jaredbest/",
      twitter: "",
      instagram: "https://www.instagram.com/jaredlbest/",
      facebook: "",
      pinterest: "",
      behance: "",
    },
    brandImage: "/images/brand-image.png",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/g-about-image.jpg",
    cvfile: "",
  },
  services:
    [
      {
        title: "INSERT",
        icon: "",
        details: "INSERT",
      },
      {
        title: "INSERT",
        icon: "",
        details: "INSERT",
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
    title: "Frontend Technologies: HTML/CSS, JavaScript",
    value: 60,
  },
  {
    title: "Backend Technologies: Python (Pandas, OSMnx), Ruby, C++, C#, Node.js",
    value: 50,
  },
  {
    title: "Frameworks/Libraries: Ruby on Rails, React",
    value: 40,
  },
  {
    title: "Code Editors/IDEs: Visual Studio Code, Visual Studio",
    value: 70,
  },
  {
    title: "Version Control Systems (VCS): Git, GitHub, GitLab",
    value: 80,
  },
  {
    title: "Databases: SQL, PostgreSQL, Oracle",
    value: 40,
  },
  {
    title: "CI/CD: GitHub Actions, Jenkins",
    value: 50,
  },
  {
    title: "OS-level Virtualization: Docker",
    value: 50,
  },
  {
    title: "Business/Project Management: Atlassian Confluence/Jira, Microsoft Azure DevOps/Dynamics",
    value: 90,
  },
  {
    title: "Game Engines: Unity",
    value: 50,
  },
  {
    title: "Graphics Software: Adobe Illustrator",
    value: 70,
  },
  {
    title: "Geospatial Software: Esri ArcGIS, QGIS, JOSM",
    value: 80,
  },
    /*     {
      title: "HTTP & Rest API",
      value: 50,
    }, */
  ],
  projects: [
    {
      id: 9,
      title: "United States Congress Stock Transactions Retrieval",
      subtitle: "I made a Jupyter Notebook that retrieves stock trade information of Members of Congress from publicly available financial disclosure reports.",
      imageUrl: "/images/projects/github.jpg",
      url: "https://github.com/jaredbest/us-congress-stock-transactions-retrieval",
    },
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
    {
      id: 5,
      title: "Donut & Coffee",
      subtitle: "I rendered this as part of a Blender course, which covered topics such as Modeling, Sculpting, Materials, Lighting, Particles, UV Unwrapping, Texture Paining, Procedural Texturing, Displacement, Photo Texturing, and Volumetrics.",
      imageUrl: "/images/projects/blender-donut-and-coffee/blender-donut-and-coffee.png",
      url: "https://dribbble.com/shots/14615605-Donut-Coffee-Blender-Render",
    },
    {
      id: 4,
      title: "Legend of Zelda: Link's Awakening Look-Alike",
      subtitle: "Following the tutorial of the incredible Mister Taft Creates and adding my own stuff along the way, I am developing this 2D game in Unity.",
      imageUrl: "/images/projects/legend-of-zelda/legend-of-zelda.gif",
      url: "https://github.com/jaredbest/unity-legend-of-zelda-links-awakening-look-alike",
    },
    {
      id: 3,
      title: "Mapping Ticonderoga",
      subtitle: "Ticonderoga is a town in Essex County, New York, USA. On OpenStreetMap (OSM), there was quite a bit of emptiness within the town boundary, so I used JOSM to fill in the gaps.",
      imageUrl: "/images/projects/mapping-ticonderoga/mapping-ticonderoga-dynamic.gif",
      url: "https://www.openstreetmap.org/#map=15/43.8474/-73.4276",
    },
    {
      id: 2,
      title: "Output PTV Vissim Parking Lot Occupancy to CSV",
      subtitle: "I created a PTV Vissim integrated Python script which outputs a CSV file containing the parking lot occupancy per unit of time as defined by the user.",
      imageUrl: "/images/projects/github.jpg",
      url: "https://github.com/jaredbest/output-ptv-vissim-parking-lot-occupancy-to-csv",
    },
    {
      id: 1,
      title: "Extract PTV Vissim Link Attributes to CSV",
      subtitle: "I expanded on a Python script that parses a PTV Vissim INPX file and exports a CSV file containing relevant link attributes.",
      imageUrl: "/images/projects/github.jpg",
      url: "https://github.com/jaredbest/extract-ptv-vissim-link-attributes-to-csv",
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 8,
        year: "Jul 2023 - Present",
        position: "Product Engineer",
        company: "ioki",
        details: "Frankfurt am Main, Germany (Hybrid)",
      },
      {
        id: 7,
        year: "Aug 2022 - Jun 2023",
        position: "Solutions Developer",
        company: "GIRO",
        details: "Karlsruhe, Germany (Remote)",
      },
      {
        id: 6,
        year: "Jan 2020 - Aug 2020",
        position: "Associate Solution Architect | Professional Services",
        company: "E2open",
        details: "Karlsruhe, Germany (On-site)",
      },
      {
        id: 5,
        year: "Feb 2018 - Dec 2019",
        position: "Support Consultant | Project Management & Services",
        company: "PTV Group",
        details: "Karlsruhe, Germany (On-site)",
      },
      {
        id: 4,
        year: "Feb 2017 - Nov 2017",
        position: "Working Student | Corporate Strategy - Sustainability",
        company: "Siemens",
        details: "Munich, Germany (On-site)",
      },
      {
        id: 3,
        year: "May 2014 - Aug 2014",
        position: "Intern | Vehicle Operations Manufacturing Engineering",
        company: "Ford Motor Company",
        details: "Dearborn, MI, USA (On-site)",
      },
      {
        id: 2,
        year: "May 2013 - Aug 2013",
        position: "Environmental Engineer",
        company: "Ecology and Environment",
        details: "Lancaster, NY, USA (On-site)",
      },
      {
        id: 1,
        year: "Jun 2012 - Aug 2012",
        position: "Environmental Summer Intern",
        company: "Bergmann Associates",
        details: "Rochester, NY, USA (On-site)",
      },
    ],
    educationExperience: [
      {
        id: 3,
        year: "Apr 2015 - Jan 2018",
        graduation: "Master of Science (M.Sc.) | Urban Environments & Transportation",
        university: "Technical University of Munich (TUM)",
        details: "Munich, Germany (On-site)",
      },
      {
        id: 2,
        year: "Sep 2013 - Dec 2014",
        graduation: "No degree conferred | Civil Engineering",
        university: "University of Waterloo",
        details: "Waterloo, ON, Canada (On-site)",
      },
      {
        id: 1,
        year: "Aug 2009 - May 2013",
        graduation: "Bachelor of Science (B.S.) with Distinction | Environmental Engineering",
        university: "Clarkson University",
        details: "Potsdam, NY, USA (On-site)",
      }
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