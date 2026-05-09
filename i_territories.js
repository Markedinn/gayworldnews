const worldTerritories = {
  Australia: [{ name: "Tasmania", lat: [-43.7, -40.5], lng: [144.5, 148.5] }],

  China: [
    { name: "Hainan Island", lat: [18.1, 20.2], lng: [108.5, 111.1] },
    { name: "Hong Kong", lat: [22.1, 22.6], lng: [113.8, 114.5] },
    { name: "Macau", lat: [22.1, 22.2], lng: [113.5, 113.6] },
    { name: "Taiwan", lat: [21.8, 25.4], lng: [120.0, 122.1] },
  ],

  Denmark: [{ name: "Faroe Islands", lat: [61.3, 62.4], lng: [-7.7, -6.2] }],

  Ecuador: [{ name: "Galápagos Islands", lat: [-1.6, 1.7], lng: [-92.1, -89.2] }],

  "Equatorial Guinea": [{ name: "Bioko Island", lat: [3.2, 3.8], lng: [8.4, 8.9] }],

  France: [
    { name: "Corsica", lat: [41, 43], lng: [8, 10] },
    { name: "Réunion", lat: [-21.5, -20.8], lng: [55.2, 55.9] },
    { name: "Guadeloupe", lat: [15.8, 16.6], lng: [-61.9, -60.9] },
    { name: "Martinique", lat: [14.3, 14.9], lng: [-61.3, -60.7] },
    { name: "French Guiana", lat: [2, 6], lng: [-55, -51] },
  ],

  Greece: [
    { name: "Mykonos", lat: [37.3, 37.6], lng: [25.2, 25.5] },
    { name: "Santorini", lat: [36.3, 36.5], lng: [25.3, 25.5] },
    { name: "Crete", lat: [34.8, 35.7], lng: [23.5, 26.5] },
    { name: "Rhodes", lat: [35.8, 36.5], lng: [27.7, 28.3] },
  ],

  Indonesia: [
    { name: "West Timor", lat: [-10.5, -9.0], lng: [123.4, 125.2] },
    { name: "Bali", lat: [-8.9, -8.0], lng: [114.4, 115.8] },
    { name: "Lombok", lat: [-9.1, -8.2], lng: [115.8, 116.8] },
    { name: "Java", lat: [-8.8, -5.8], lng: [105.0, 114.6] },
    { name: "Borneo / Kalimantan", lat: [-4.2, 4.3], lng: [108.8, 119.0] },
    { name: "Sulawesi", lat: [-5.8, 2.0], lng: [118.8, 125.5] },
    // Inject the red dot directly into the name string:
    { name: "🔴 Sumatra \n High Risk Territory!", lat: [-6.0, 6.0], lng: [95.0, 106.0] },
    { name: "🔴 West Papua \n High Risk Territory!", lat: [-9.1, 0.5], lng: [130.0, 141.1] },
  ],

  Italy: [
    { name: "Sicily", lat: [36.6, 38.3], lng: [12.4, 15.7] },
    { name: "Sardinia", lat: [38.8, 41.3], lng: [8.1, 9.9] },
    { name: "Elba Island", lat: [42.7, 42.9], lng: [10.1, 10.5] },
  ],

  Netherlands: [
    { name: "Aruba", lat: [12.4, 12.6], lng: [-70.1, -69.8] },
    { name: "Curaçao", lat: [12.0, 12.4], lng: [-69.2, -68.7] },
    { name: "Bonaire", lat: [12.0, 12.3], lng: [-68.4, -68.1] },
  ],

  Norway: [
    { name: "Svalbard", lat: [74.0, 81.0], lng: [10.0, 35.0] },
    { name: "Lofoten Islands", lat: [67.0, 69.0], lng: [11.5, 16.0] },
    { name: "Jan Mayen", lat: [70.8, 71.2], lng: [-9.0, -7.0] },
  ],

  Portugal: [
    { name: "Azores", lat: [36, 40], lng: [-32, -24] },
    { name: "Madeira", lat: [32, 33], lng: [-17.5, -16] },
  ],

  Spain: [
    { name: "Canary Islands", lat: [27.5, 29.5], lng: [-18.2, -13.3] },
    { name: "Balearic Islands", lat: [38.5, 40.1], lng: [1.2, 4.5] },
    { name: "Ceuta", lat: [35.8, 35.9], lng: [-5.4, -5.3] },
    { name: "Melilla", lat: [35.2, 35.3], lng: [-3.0, -2.9] },
  ],

  Sweden: [
    { name: "Gotland", lat: [56.8, 58.5], lng: [17.8, 19.5] },
    { name: "Öland", lat: [56.1, 57.5], lng: [16.2, 17.1] },
  ],

  Tanzania: [{ name: "Zanzibar", lat: [-6.5, -5.7], lng: [39.1, 39.6] }],

  "Timor Leste": [
    { name: "Timor Leste", lat: [-9.0, -8.3], lng: [125.0, 127.3] },
    { name: "Oecusse (Exclave)", lat: [-9.5, -9.1], lng: [124.0, 124.5] },
    { name: "Atauro Island", lat: [-8.3, -8.1], lng: [125.5, 125.6] },
  ],

  "United Kingdom": [
    // Home Nations
    { name: "Scotland", lat: [54.6, 60.9], lng: [-8.7, -0.7] },
    { name: "Northern Ireland", lat: [54.0, 55.3], lng: [-8.2, -5.3] },
    { name: "Wales", lat: [51.3, 53.5], lng: [-5.5, -2.5] },
    { name: "England", lat: [49.8, 55.9], lng: [-6.5, 1.8] },

    // Overseas Territories
    { name: "Bermuda", lat: [32.2, 32.4], lng: [-64.9, -64.6] },
    { name: "Cayman Islands", lat: [19.2, 19.8], lng: [-81.4, -79.7] },
    { name: "Falkland Islands", lat: [-53, -51], lng: [-62, -57] },
    { name: "Gibraltar", lat: [36.1, 36.2], lng: [-5.4, -5.3] },
    { name: "British Virgin Islands", lat: [18.3, 18.5], lng: [-64.9, -64.2] },
    { name: "Montserrat", lat: [16.6, 16.8], lng: [-62.3, -62.1] },
    { name: "Turks and Caicos", lat: [21.0, 22.0], lng: [-72.5, -71.0] },
  ],
  "United States of America": [
    { name: "Hawaii", lat: [18.9, 22.3], lng: [-160.3, -154.7] },
    { name: "Puerto Rico", lat: [17.9, 18.6], lng: [-67.3, -65.2] },
    { name: "Guam", lat: [13.2, 13.7], lng: [144.6, 145.0] },
    { name: "US Virgin Islands", lat: [17.6, 18.4], lng: [-65.1, -64.5] },
    { name: "American Samoa", lat: [-14.5, -14.1], lng: [-170.9, -168.1] },
    { name: "Northern Mariana Islands", lat: [14.1, 20.6], lng: [144.8, 146.1] },
    { name: "Puerto Rico", lat: [17.8, 18.5], lng: [-67.3, -65.2] },
    { name: "Guam", lat: [13.2, 13.7], lng: [144.6, 145.0] },
    { name: "US Virgin Islands", lat: [17.6, 18.4], lng: [-65.1, -64.5] },
  ],
};
