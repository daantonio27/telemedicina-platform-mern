export const userMenu = [
  {
    name: "Início",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "A clínica",
    path: "/about",
    icon: "fa-solid fa-heartbeat",
  },
  {
    name: "Agendamentos",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Candidatar médico",
    path: "/apply-doctor",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profil",
    path: "/doctor/profile/:id",
    icon: "fa-solid fa-user",
  },
];

// admin menu
export const adminMenu = [
  {
    name: "Início",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "A clínica",
    path: "/about",
    icon: "fa-solid fa-heartbeat",
  },
  {
    name: "Médicos",
    path: "/admin/doctors",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Usuários",
    path: "/admin/users",
    icon: "fa-solid fa-user",
  },
  {
    name: "Profil",
    //path: "/admin/profile/:id",
    path: "#",
    icon: "fa-solid fa-user",
  },
];