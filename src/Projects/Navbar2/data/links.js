const links = [
  {
    id: 1,
    url: "/link-1",
    text: "Link 1",
  },
  {
    id: 2,
    url: "/link-2",
    text: "Link 2",
    dropdown: [
      { id: 1, url: "/dropdown1", text: "Dropdown 1" },
      { id: 2, url: "/dropdown2", text: "Dropdown 2" },
      { id: 3, url: "/dropdown3", text: "Dropdown 3" },
    ],
  },
  {
    id: 3,
    url: "/link-3",
    text: "Link 3",
    dropdown: [
      { id: 1, url: "/dropdown11", text: "Dropdown 11" },
      { id: 2, url: "/dropdown22", text: "Dropdown 22" },
      { id: 3, url: "/dropdown33", text: "Dropdown 33" },
    ],
  },
  {
    id: 4,
    url: "/link-4",
    text: "Link 4",
  },
];

export default links;
