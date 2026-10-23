export const dcText = {
  back: "Back",
  routeTitle: "Route from Davao City to Santo Rosario Parish, Salawagan",
  routeCdoDirections:
    "Upon reaching Manuto Bridge, follow the yellow, orange, and green flaglets along the route.",
  routeDavaoDirections:
    "Upon reaching Santa Rita Bridge, follow the yellow, orange, and green flaglets along the route.",
  commuterHeading: "For commuters:",
  commuterDavaoDirections:
    "From Davao International Airport, take a taxi to Ecoland Bus Terminal. From there, board a Rural Transit bus bound for Cagayan de Oro City. Ask the driver to drop you off at the Salawagan, Quezon, Bukidnon bus stop.",
  commuterCdoDirections:
    "From Cagayan de Oro City, take a van to Agora Bus Terminal. From there, board a Rural Transit bus bound for Davao City. Ask the driver to drop you off at the Salawagan, Quezon, Bukidnon bus stop.",
  categoryLegend: "Select your category",
  mapZoomHint: "Click the map to enlarge",
  closeMap: "Close enlarged map",
} as const;

export const guestTypes = [
  {
    name: "Clergy",
    image: "/clergy-map.png",
    mapTitle: "Clergy parking and food distribution map",
    mapAlt: "Clergy parking and distribution map",
  },
  {
    name: "Non Parishioner Guests",
    image: "/non-parishioner-map.png",
    mapTitle: "Non Parishioner Guests parking and food distribution map",
    mapAlt: "Non Parishioner Guests parking and distribution map",
  },
  {
    name: "Sto. Rosario Parishioners",
    image: "/parishioner-map.png",
    mapTitle: "Sto. Rosario Parishioner Map for food distribution",
    mapAlt: "Sto. Rosario Parishioner map for food distribution",
  },
] as const;
