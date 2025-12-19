export const portfolioData = {
  brand: "HarshaWorld",
 //defaultName: "Harsha",

  roles: [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack Developer",
  ],

  hero: {
    location: "India",
    headline: "Building modern web experiences with speed & style.",
    subline:
      "I craft clean, scalable MERN applications with beautiful UI, strong architecture, and performance-first thinking.",
    email: "harshawork437.com",
    linkedin: "https://www.linkedin.com/in/harsha468",
    github: "https://github.com/harshithkota2002",
    profileImage:
      "https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg?semt=ais_hybrid&w=740&q=80",
    quickStats: [
      { label: "Experience", value: "1.5+ yrs" },
      { label: "Projects", value: "18+" },
      { label: "UI Focus", value: "MUI / Tailwind" },
    ],
  },

  about: {
    title: "About Me",
    body:
      "Hi! I’m Kota Harshith — a MERN stack developer who loves building fast, clean, and modern products.\n\n" +
      "I enjoy creating dashboards, admin panels, APIs, and pixel-perfect UI with strong state management and scalable structure.",
    highlights: [
      "Clean code + reusable components",
      "Modern UI (MUI) + responsive layouts",
      "REST APIs + JWT auth + MongoDB",
      "Deployment + performance optimization",
    ],
  },

  skills: {
    title: "Skills",
    items: [
      { name: "React", level: 9 },      // 0..10 OK
      { name: "Node.js", level: 85 },   // 0..100 OK
      { name: "MongoDB", level: 80 },
      { name: "Express", level: 82 },
      { name: "TypeScript", level: 78 },
      { name: "MUI", level: 90 },
      { name: "Redux", level: 84 },
      { name: "REST APIs", level: 88 },
      { name: "Python", level: 98 },
    ],
    images: [
  // React
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=70",

  //python
  "https://webandcrafts.com/_next/image?url=https%3A%2F%2Fadmin.wac.co%2Fuploads%2FFeatures_Of_Python_1_f4ccd6d9f7.jpg&w=4500&q=90",

  // MongoDB / Database
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSydcrdOIkSR6ti1hz_neTL83zcG9bXjQ_gvA&s",

  // SQL
  "https://www.cpduk.co.uk/sites/default/files/news-imported/cpd-wise-owl-sql-beneficial-for-businesses.jpg",

  // Git / GitHub
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAwFBMVEUAAAD0TSf////zPAD0SyTzPQCIiIjr6+uYmJj0SSD/+fgNDQ2srKz4+Pj0Rx3zPwghISEmJib0RBfQ0NC4uLj1VDBVVVXj4+OhoaEXFxf82NJlZWWQkJD94d32blX+9PL6tqz4npDZ2dn5rqP6vLP1ZEj82dPKysp/f3/7ysP95+P5qJz5oZP3jXs8PDzAwMBdXV33gGz4loZvb2/2eGL1Xj/1aE33iHb7w7v2clpNTU11dXUyMjL1WDf3kYHzKAB1H+/6AAAODElEQVR4nO2caWOiPBDHK4FWXIVd1NbHetV6LLbWnvbadr//t3oIQjIJhMug6PJ/V4yB/JxMZiahJ5VSJ/t+gAKoZFAywCoZlAywSgYlA6ySQckAq2QgnYGhIWSpcvukUk3kyDQkdyuXgbbsD4cjXZfaKZH1NVkMh0P7WZPbr1QGaKJgDdu5QLAeFE8juRBkMvAQ5ARBbStE31Kng0QGBIEDoSIfgjWiDBZSDUEeA4AgF0tAfdB/W6bflcaAQZAHBDQE3U9B77rpKjsVWQw4BDlAEDHQ321X2U1DEgM4WXOCoM1A5xU6YOtx2+khiYE+reUNwbqhXfeBT/Tx751BxXgJgSB1dVANeocHsDb69rFfBhaOjkMhqDIhGGu/3ysTXEZKARigyUITQZBqCYZx7YTii7cpRGA8FIABXhH6u4GgWpqmIZPpEnX3z2CzKIoh5JM7EBnvyt4ZIM8r99FOLIGXURnunQEiccHMtYTpbDTq7wqCaqB3GjjppuUpbT/bMUAgNJrhaNV5EBOth9kgqIZlagghzbQMFQp/6JZPfGHeKtJfu+A2o2tfaQ1iKwaIiQ5dS8AyDA5CoqKKhSrLa3vWX/Rn9uj7C6rtILD7QIuKqr6wNwFSU0LYhgHiAuSZb4W02pEYgqVdLURjUm6sCmI9TUXVX4TN9d0x4BEoC0Q+4nxjXLCkokfhiFwGaoW9UhAGAQSKTWIXxPnFGAiq2eX74hjogyIyCCKADAJ2HekYTR5ZgIGxLCCDEATKkMwFLeRDMQRkRyPADL4DDKbC5jvyiWEIFGXpO0XedF0IoulgMB60NoT+vqYMF7Puq1Gx9G84X3D94H0wGLzTS/jPjXazNqLr8F+AZDNWGATB6gAnzmSNN2meyXDtvzhcwJmyExCBPjED3ZFJnW/b0D2lHU0mBiIETlaLLcEQQTDCHk9f0xbvyG1hUDN7BZUCRBv6dSQLMNhprCxGoCiOS7BusTUkhgDqQ7Qu8Ne3DepjHNdZHAZRCGrOI2v9Ln7wpNOBros1WhewiA98pt8oDoMoBBsGXcUWQVgEHSN1B11aJVTJyjeiKVBhGEQi8Bk4ENSkEGjN/A3UhywChl4sCoNoBISBB2E9rUxv2BYBCKEMVNW/2KcOoSAMtGgElMEGgq6rutlmE7wFF8bRuTCjwzWeCQM6QYrBgA9ZIxjQyNn4YtuAX9YdGY196M4JDR3tos2FYB4gZrCJFbC0N7bRK7NzblHTcm2ngtPIV3Ltumg+ETxFPIO1P/F565nA2jgTI9ltZFqmZoIZ9160tTEVgy//oQyupPLGMGAT7f5kNIKJATxpUAwGqeYC+QUtrkDyyJ4i0d+D/RAtQdtiMOB/0UgGE/8nRGyFZMgfIjHFi00X+s9iMKiYkTUvloEy3bgzkwVXewmGivzhBV8L5mRFQRhUtKvkDGprZBkW4hGEnKdCj8HNGUdd9qhjURhUtEhLYBg4fv7x9YqdCLVp6JGyv2FlqW/EDiuaQdC8kipDzhQFgWMQ/DzMCpw+3wItu0vEbxhFM3jIfF4vS+4cMR3iGAgQ+FGhNV3eXo9Gt8t12IncEAagjjTx3WdqFplqKGIIMQxiEDxauuHuGIYWnMIYwINa78j5pomsZdrxZKuliSEg7vBUEgT+RJj9xaPXhWVhUK32GTD36l7f3kz6fCwer4w1VQGExUDHOZ9gJzDcHdKyuX198/j6vH5pGxred7Vggqk7vzCwA9WJqbGtmGGrKheH5sRAAGGxmcRGO2ylE6wI7LlDr2ltOLNHV88V8h6Avr6ddEHDYXdy6/IOC9qGu2EQDmHgjdIKS7EFCCL2Shyo11+b8VghoaRbZTPDbO493TKZfa8tCAHsuYYgEByN0J+DbaEmbqho3QQ/cbNq4zX4gTJJdwxjiz3XAISIPVchggq/oxzQAs8HIYPQytbNrhgEIUTsuQomgttWuIx4wnlTGAOv4oyWrPeZXZkpT+NsdQbjln0o8Z5rBIKK+hWaKwA50zuCQcXSlvbC7WPYnyz1QHgZq+3O4nAQHrzbm9x14URwpVsx+8647qQbAVHHZziRkY4PQznRZYbMacszWexga208WNVcs2NYR/8yVlQNBWuBIr+/kX92K4O2PZvHQViaCFmcn4hBQBZH+/rNni2GwZlRS8JgC219RpMz+1qfXxJiEJAYaYFM0z2aZ7Sng4dbmHQUnEEAAq84BKTYSHNfVXdSJ1BeLzyDGAhxCGjWww9UI5NiWHgGkRCiVwT3236wyw1Up7tTdsr4P5WcZEzGOxwoZPFOaAUglLhFIMpXLVCMlvtGJ70HzkWtweNEyrs8IggJEIC00R5oaPOanoYqSxpp1lIHPbHCJ6NR+/nWdu8i532mcAiDJA8Pj2fW+vbbZPJmd5lk8FEmA/fHN19er8k9GnNJ73SFQUiEIDzxg7JleUR3+Mb6cTLzve3Zqnr/8+RE2jueAQjJEAR2oXJB4L4VoD/fvpEZNm6dfpz4knAHVzyEpAic0DoqcbzdFoFuOO6l/XptE9tv1j/vThhteQsqFkJiBPi0wZUoc3xrb+ELXNtH62/G9i9/nASV/R68IIQkKwKVhZZ2EMPsysj6Irfr943nK2r7F63T85DRy2YAIKSwgo0M0/HVNxO72+8vFv2uPXpcm1qmf6zihNka+npgbf+PcPiyGRAI71ksGP92pvc+Ey6sp+/AjXmm3yNq+/Pq5c/o4UtnUDEf+rWhHb6Vkqdc26+8X731qe33PsKmfv4M3P8NZGbeAM4iZ/ia2X64sRfU9n/fxY87PwY71Sbk+x6RkO9s3rmMmfrHw8C1fW3g2H6N2r7Y7x8bA9fvV6Dtj1Pb/uEy2MQ80yVj+09J/P5RMNjEPIOrCfX7q969hNEfBgMv1Ye239rW9g+HwSbmYVP9zlMWv3+QDEiq3+dT/Vy07+Hy8lN9OzzVP3YGfqpPbb+Zj+0XkoGX6rNlrssdjL4YDFy/r4IyV+Mid9svEAM35Ht5TZXqHw+DzbK3zpDqHwUDL9V3bJ+mO6fJU/1DZ6D7qT6wfdkhXybtaPg413VS/RlM9X/te+y+8h79JtXnylzZU/1clOPwXb/flpvq56JcRu/6fQ2n+tTvd57+2/dYRZI+fDfmYWx/VTTb5yV3+Jr2dQC2z0vO8DepPlfm2kfIl0nbjt61fQum+rjMVdipH6pth28A21cc299xuiNF2Yav4/90+PUKbH9HqX4uSv3ju7s7g0dY4q3KK/HuRWmGz5zm8kq8h2j7vBL++AaO99ky115S/VyUyPZDT3Mdj2JsX6sIT3Mdj8KHj0u8Jnuaq8Of5joeBYfv7mx+T0Cqv8cy107E2T6yEp/mOh75tp/+NNfxaBPzcCXe4qb6uQim+g1c5tpviXcvKliJdy86sFQ/F93/g7ZfqlSpUnJ13qvPN1p1Ts//rYjK1e+mwumsnjqt+OFLcH3LbvJVtcET2KRX6SKsT/LFKnOd9peom1PSvpfq9lvp4yyUgKMnv8nT2DGMTkw/9OHr8PIPalqJHqdK2sfdUJ5+iwgoit+k5Y0h2kkcLgP65AH5tlvlL8T1dGAMLsUIlJbXhl55iurqUBnQBwzR56bNfZDKR+90ox6YHofKYB7FwFucqL9X5t7XVuQK2I46UAbn3KjPmqtWqzVvnsFHDrGD1hExYCKjsx44VfZRvSAjoU18f3BEDP5ABOI79vwmZF2gDMAp7MNk0AEIPiPa+fHBD+7CMTAAAWL0/fg48XgY/FJSPh7R8TAAUfLvdN/coU/8c9nr9fLbF6UjUSLbfXY8kUSOxgetzSd4RUnG4LPn6ZS0uGQuQQb3Kz+jbbTywTAmd1tFtqOo8D7tZZ1+j7GjZAxomk5CTOqWcP+UwfyCuQfTqyzRxzlN2O4nBJeQAUUoYkCHis2JMuDVlI8A/L7RJSOGwUXIw/EMlAaUNAYx5ppFYFmIbpieQbi2ZqBIfy8ORIn+pSf+pnfFYpByCY/XHem64V8K1JTOi8VAkX1qkjIgeAvH4Gy+msOCb4sfxJb6yMSgOm42m3Q1w381m+OPPBg0Opu98w7Xxd4ZuIqJEyUxIB4QBHOSXxrL5g+4hwrNF2QzAKu4ZIdAGZB1oagMaK1H8r5LyNooiYGkOJH2TT2CZAYgRvJP6364Hg54YgkM4vOFeAa0a3Ybb3vRx+FS53HRGNDYTTYDusJxy27hGNCdINkM6OZCg/3gH2IAIjI2cSwcg/zmAg2SuNS8cAzoeiX9TAKIxJmstHAM6LXoak8G0bKgosBjrYVjEHo/OYLbjQ3gEnbDgFCPZ0BXMPmVVSYRnhMKsQzq5ArwUckY0OGQoETEgOQGwHFJRxA4gXHRnDfH8HiSgAHIZukLYQIG/4kYeNnqLy4rpAzGHoQfIFWXz+AkcCSPk4ABzCuanWpndZ6YAbhjo97r1RlT5GsojXmnV4VeK4+tp8hzKGIGd3y7emIGdf6rUQwCymWjhT+FkYzBCX+cLzmDeyVCcQySnXBMrUApORED/kE7iRnAoCQ1g7z+59xH1EOJGPAjScEgCnoMg/lJbloJb9rjxksZcB4hBQNYHSSfhDAIPpX03QWoj9Dl4cxf+8MYnNwxLiGCwc/AGODxF6zGqe9fIIOTe87p5LHdyDxor8laNzy2Xm16YssMp3RZa+DDWudjr9mYPdfjf7tJ0NzB33iOv9sZY7mjvByTxpfg6OBF1GEhabr7rNZbq/mqlfj1hV+XvU69Xs3y9ux5r+7cqh77b5Y+TjutlnOLwvwjtlKlSpUqVapUqVKlSpUqVapUqVLHpP8BGwysv2SsrfUAAAAASUVORK5CYII=",

  // mern stack
  "data:image/jpeg;base64,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",

  // API / FastAPI style (server / request)
  "data:image/png;base64,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",

  // Coding workspace
  "data:image/png;base64,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",
],

  },

  // ✅ NEW SECTION
  otherSkills: {
    title: "Other Skills",
    subtitle: "A few extras that define my personality outside coding.",
    items: [
      {
        title: "Juggling",
        desc: "Focus + coordination — helps me stay sharp.",
        image:
          "https://thumbs.dreamstime.com/b/young-man-standing-juggling-red-balls-handsome-35194007.jpg",
      },
      {
        title: "Chess",
        desc: "Strategy mindset and patience in decision making.",
        image:
          "https://i0.wp.com/scoutlife.org/wp-content/uploads/2017/03/chess-1.jpg?resize=620%2C465&ssl=1",
      },
      {
        title: "Guitar",
        desc: "Creativity + rhythm — a great stress buster.",
        image:
          "https://assets.yousician.com/app/uploads/2022/05/05130122/yousician-educational-photography-21-1024x683.jpg",
      },
      {
        title: "Content Creation",
        desc: "Storytelling, editing and building an online presence.",
        image:
          "https://www.entrepreneur.com/wp-content/uploads/sites/2/2021/08/1629828633-GettyImages-1212772310.jpg",
      },
      {
        title: "Cubes Solving",
        desc: "To enhance problem-solving skills and patience.",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/A_speedcube_midway_through_being_solved.jpg/1200px-A_speedcube_midway_through_being_solved.jpg",
      },
    ],
  },

  education: {
    title: "Education",
    items: [
      {
        course: "B.Tech — Computer Science",
        school: "Annamacharya Institute of Technology and Sciences",
        year: "2021 — 2024",
        note: "Focused on core CS, web development and projects.",
      },
      {
        course: "Polytechnic Diploma — chemical engineering",
        school: "shree venkateshwara government polytechnic college",
        year: "2018 — 2021",
       
      },
       {
        course: "10th Standard",
        school: "vishwabharath vidyanikethan high school",
        year: "2017 - 2018",
       
      },
    ],
  },

  projects: {
    title: "Projects",
    items: [
      {
        title: "Admin Dashboard (MUI + Redux)",
        desc: "Professional admin panel with filters, pagination, dark/light mode and charts.",
        tags: ["React", "MUI", "Redux"],
        link: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",
      },
      {
        title: "MERN Auth + Profile System",
        desc: "JWT auth, profile update, role-based routes, and scalable backend structure.",
        tags: ["Node", "Express", "MongoDB"],
        link: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=70",
      },
      {
        title: "Portfolio Builder",
        desc: "Dynamic portfolio using URL params, editable JSON data, and smooth animations.",
        tags: ["React", "MUI", "UX"],
        link: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=70",
      },
      {
        title: "Shopping Website",
        desc: "E-commerce site with product listings, cart functionality, and payment integration.",
        tags: ["React", "MUI", "UX","Node", "Express", "MongoDB"],
        link: "https://example.com",
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTTcYARR70q1yM2sWAaKNm8jip7uTu1czv6SyWtVRX9Ou92M2IIyePMRH3Pz6sl9WgcmjhALtcYru35LMv0wjnH52KzSyLgdszKfPMIfDD-xZ_ogtecjtSp",
      },
    ],
  },

  experience: {
    title: "Experience",
    items: [
      
      {
        role: "MERN Full stack developer",
        company: "Ryvoc Ideas private limited",
        period: " 2025 - 2026 Present",
        points: [
          "Developed and maintained Admin Panel features for a friend online application, including user/host management, call history, coin transactions, reports, and platform settings using React and Redux.",

"Implemented secure admin authentication and role-based access control using JWT, protected routes, and authorization middleware.",

"Built scalable REST APIs in Node.js and Express with MongoDB for moderation, analytics, billing, and transaction tracking.",

"Designed high-performance tables and dashboards with pagination, search, date filters, and real-time status indicators.",

"Integrated end-to-end API workflows with centralized Axios handling, error management, and consistent response structures.",

"Optimized backend performance using indexed MongoDB queries, lean payloads, and lite APIs for admin dropdowns and search.",

"Implemented secure file uploads, validation, and audit logging for admin actions.",

"Collaborated closely with frontend, backend, and mobile teams to align API contracts and deliver production-ready features.",
        ],
      },
      {
        role: "SAP ABAP Developer Intern",
        company: "ACS Company",
        period: "2024 — 2025 ",
        points: [
          "Developed and enhanced SAP ABAP programs using modular clean code (Reports, ALV, Function Modules, Smart Forms).",
          "Integrated SAP standard and custom interfaces (BAPIs, RFCs, IDocs) with optimized retrieval and authorization checks.",
          "Improved performance by optimizing Open SQL queries, internal tables, and runtime efficiency in productive systems.",
        ],
      },
    ],
  },

  resume: {
    title: "Resume",
    downloadText: "Download Resume",
    resumeLink: "https://example.com/resume.pdf",
  },

  contact: {
    title: "Contact Me",
    note: "Let’s build something awesome Websites together.",
    email: "harshawork437@gmail.com",
    location: "Andhra Pradesh  ,Tirupati, India",
    gender: "Male",
    Experince: "1.2 Years + Loading ...............!",

  },
};
