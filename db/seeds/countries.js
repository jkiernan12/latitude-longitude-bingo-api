exports.seed = function(knex) {
  return knex('countries').del()
    .then(function () {
      return knex('countries').insert([
  {
    code: "AD",
    latitude: 42.546245,
    longitude: 1.601554,
    name: "Andorra",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/ad.svg",
    id: "7504d727-f3b8-454e-8ec3-dcf1ab073495"
  },
  {
    code: "AE",
    latitude: 23.424076,
    longitude: 53.847818,
    name: "United Arab Emirates",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/ae.svg",
    id: "d5c06397-c5ca-44f1-a7f2-adbdb51d0d17"
  },
  {
    code: "AF",
    latitude: 33.93911,
    longitude: 67.709953,
    name: "Afghanistan",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/af.svg",
    id: "e398d83c-f37f-4440-98f4-ce4b7b8e00ef"
  },
  {
    code: "AG",
    latitude: 17.060816,
    longitude: -61.796428,
    name: "Antigua and Barbuda",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/ag.svg",
    id: "64122b14-7696-4382-b950-5c5295e3b522"
  },
  {
    code: "AI",
    latitude: 18.220554,
    longitude: -63.068615,
    name: "Anguilla",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/ai.svg",
    id: "bfa404b4-e0be-4407-b3fb-3e861cef1934"
  },
  {
    code: "AL",
    latitude: 41.153332,
    longitude: 20.168331,
    name: "Albania",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/al.svg",
    id: "f00cdc21-dda4-4a76-94ac-9c38ebb5b195"
  },
  {
    code: "AM",
    latitude: 40.069099,
    longitude: 45.038189,
    name: "Armenia",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/am.svg",
    id: "4b82bc0f-094d-4a28-a293-616f313dbd01"
  },
  {
    code: "AN",
    latitude: 12.226079,
    longitude: -69.060087,
    name: "Netherlands Antilles",
    regions: {
      data: [
        "null"
      ]
    },
    flag_path: "/assets/flags/an.svg",
    id: "5c3b4f83-6819-4b67-afb6-d87feff26fe7"
  },
  {
    code: "AO",
    latitude: -11.202692,
    longitude: 17.873887,
    name: "Angola",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/ao.svg",
    id: "a0cfbb98-fe01-47b7-a052-8722f21c0aa9"
  },
  {
    code: "AQ",
    latitude: -75.250973,
    longitude: -0.071389,
    name: "Antarctica",
    regions: {
      data: [
        ""
      ]
    },
    flag_path: "/assets/flags/aq.svg",
    id: "4b8fb142-e8c8-4caf-9efd-a0339cb7532c"
  },
  {
    code: "AR",
    latitude: -38.416097,
    longitude: -63.616672,
    name: "Argentina",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/ar.svg",
    id: "552cc6d2-92ab-4127-b07b-274ef50f20d0"
  },
  {
    code: "AS",
    latitude: -14.270972,
    longitude: -170.132217,
    name: "American Samoa",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/as.svg",
    id: "5dc30978-af84-44d6-ae57-ada335d6f66e"
  },
  {
    code: "AT",
    latitude: 47.516231,
    longitude: 14.550072,
    name: "Austria",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/at.svg",
    id: "85d4568b-ecb2-4dbb-8fc4-a3386bda14a7"
  },
  {
    code: "AU",
    latitude: -25.274398,
    longitude: 133.775136,
    name: "Australia",
    regions: {
      data: [
        "Oceania",
        "Australia and New Zealand"
      ]
    },
    flag_path: "/assets/flags/au.svg",
    id: "381e3cee-b0e9-4d7e-a37d-264a9ff37eb4"
  },
  {
    code: "AW",
    latitude: 12.52111,
    longitude: -69.968338,
    name: "Aruba",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/aw.svg",
    id: "baedfa77-a1c0-426c-aaf9-123a9aa947f9"
  },
  {
    code: "AZ",
    latitude: 40.143105,
    longitude: 47.576927,
    name: "Azerbaijan",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/az.svg",
    id: "3c004c0c-4a70-4b06-8991-57c7a8830fd5"
  },
  {
    code: "BA",
    latitude: 43.915886,
    longitude: 17.679076,
    name: "Bosnia and Herzegovina",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/ba.svg",
    id: "d96b9d87-09a2-4cd1-8269-ad7551a246c7"
  },
  {
    code: "BB",
    latitude: 13.193887,
    longitude: -59.543198,
    name: "Barbados",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/bb.svg",
    id: "eaed6214-9259-4435-a751-04351419c200"
  },
  {
    code: "BD",
    latitude: 23.684994,
    longitude: 90.356331,
    name: "Bangladesh",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/bd.svg",
    id: "42216ac8-17e6-47b0-8f27-d253682939fb"
  },
  {
    code: "BE",
    latitude: 50.503887,
    longitude: 4.469936,
    name: "Belgium",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/be.svg",
    id: "c4ba8c50-8da4-4faf-9c7e-ec1e74979042"
  },
  {
    code: "BF",
    latitude: 12.238333,
    longitude: -1.561593,
    name: "Burkina Faso",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/bf.svg",
    id: "84ea32a3-c9a1-49cd-a4d8-38c80d7f065f"
  },
  {
    code: "BG",
    latitude: 42.733883,
    longitude: 25.48583,
    name: "Bulgaria",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/bg.svg",
    id: "b7ae1546-0bda-4ec4-a888-27815f918066"
  },
  {
    code: "BH",
    latitude: 25.930414,
    longitude: 50.637772,
    name: "Bahrain",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/bh.svg",
    id: "f1b59b0f-c843-4d43-ba6c-3dae813b9e38"
  },
  {
    code: "BI",
    latitude: -3.373056,
    longitude: 29.918886,
    name: "Burundi",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/bi.svg",
    id: "7d0c39c6-d7f6-4983-91f4-a20f09c7da32"
  },
  {
    code: "BJ",
    latitude: 9.30769,
    longitude: 2.315834,
    name: "Benin",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/bj.svg",
    id: "7cc9ef66-2308-49db-8fa6-a0819068fbcb"
  },
  {
    code: "BM",
    latitude: 32.321384,
    longitude: -64.75737,
    name: "Bermuda",
    regions: {
      data: [
        "Americas",
        "North America"
      ]
    },
    flag_path: "/assets/flags/bm.svg",
    id: "838c54c2-205e-45b6-b21e-0197de893959"
  },
  {
    code: "BN",
    latitude: 4.535277,
    longitude: 114.727669,
    name: "Brunei",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/bn.svg",
    id: "6fc871aa-4de8-4cbf-8e10-eb7653143ab5"
  },
  {
    code: "BO",
    latitude: -16.290154,
    longitude: -63.588653,
    name: "Bolivia",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/bo.svg",
    id: "3aeb4016-06f5-4e1a-8330-8f770df58afa"
  },
  {
    code: "BR",
    latitude: -14.235004,
    longitude: -51.92528,
    name: "Brazil",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/br.svg",
    id: "46d3ab8b-9c7a-4b54-966d-ea4b05d0dd92"
  },
  {
    code: "BS",
    latitude: 25.03428,
    longitude: -77.39628,
    name: "Bahamas",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/bs.svg",
    id: "ff003714-161a-42ca-b9c2-84cbf64054c0"
  },
  {
    code: "BT",
    latitude: 27.514162,
    longitude: 90.433601,
    name: "Bhutan",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/bt.svg",
    id: "5173bac9-dffc-4dbe-9621-1511153b0390"
  },
  {
    code: "BV",
    latitude: -54.423199,
    longitude: 3.413194,
    name: "Bouvet Island",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/bv.svg",
    id: "ab03dd76-da21-46bd-80aa-b2a34b9dfb28"
  },
  {
    code: "BW",
    latitude: -22.328474,
    longitude: 24.684866,
    name: "Botswana",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Southern Africa"
      ]
    },
    flag_path: "/assets/flags/bw.svg",
    id: "f7dadf9d-0398-4ce4-9a77-fbb2d44a6094"
  },
  {
    code: "BY",
    latitude: 53.709807,
    longitude: 27.953389,
    name: "Belarus",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/by.svg",
    id: "bcf3a56b-cc62-4b18-9fb2-472ae8d78fa3"
  },
  {
    code: "BZ",
    latitude: 17.189877,
    longitude: -88.49765,
    name: "Belize",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/bz.svg",
    id: "47c51086-6bf3-4a38-bcaa-7bc459f6cd40"
  },
  {
    code: "CA",
    latitude: 56.130366,
    longitude: -106.346771,
    name: "Canada",
    regions: {
      data: [
        "Americas",
        "North America"
      ]
    },
    flag_path: "/assets/flags/ca.svg",
    id: "7f01fe64-572b-47cd-a869-8dc1a266e276"
  },
  {
    code: "CC",
    latitude: -12.164165,
    longitude: 96.870956,
    name: "Cocos Islands",
    regions: {
      data: [
        "Oceania",
        "Australia and New Zealand"
      ]
    },
    flag_path: "/assets/flags/cc.svg",
    id: "3bc000e1-6c78-41d2-9be8-37c35e49f283"
  },
  {
    code: "CD",
    latitude: -4.038333,
    longitude: 21.758664,
    name: "Congo",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/cd.svg",
    id: "116d94b1-17f9-44b1-b000-4783fd2f9d9f"
  },
  {
    code: "CF",
    latitude: 6.611111,
    longitude: 20.939444,
    name: "Central African Republic",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/cf.svg",
    id: "e8c56fc3-720e-4d68-821a-78173f67d78f"
  },
  {
    code: "CG",
    latitude: -0.228021,
    longitude: 15.827659,
    name: "Congo",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/cg.svg",
    id: "016a2375-46c5-4d93-b70c-784f1516d1a2"
  },
  {
    code: "CH",
    latitude: 46.818188,
    longitude: 8.227512,
    name: "Switzerland",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/ch.svg",
    id: "3e59cb0f-1ba2-4fa5-b0d1-6abbeea180f6"
  },
  {
    code: "CI",
    latitude: 7.539989,
    longitude: -5.54708,
    name: "Côte d'Ivoire",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/ci.svg",
    id: "1c19f6b1-a190-4cd4-b1ef-04c02b0bb85f"
  },
  {
    code: "CK",
    latitude: -21.236736,
    longitude: -159.777671,
    name: "Cook Islands",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/ck.svg",
    id: "cba851a4-7ea2-4573-a5bd-a50a0fce8dc8"
  },
  {
    code: "CL",
    latitude: -35.675147,
    longitude: -71.542969,
    name: "Chile",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/cl.svg",
    id: "ee748879-d6b1-4614-b182-2a8e37b23bd7"
  },
  {
    code: "CM",
    latitude: 7.369722,
    longitude: 12.354722,
    name: "Cameroon",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/cm.svg",
    id: "94ea2e89-2965-4ca8-8673-894de99754a1"
  },
  {
    code: "CN",
    latitude: 35.86166,
    longitude: 104.195397,
    name: "China",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/cn.svg",
    id: "760dc84b-0423-4f74-9c23-c16615fdacb8"
  },
  {
    code: "CO",
    latitude: 4.570868,
    longitude: -74.297333,
    name: "Colombia",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/co.svg",
    id: "e51088f8-1a20-4042-8729-3632d687c7a4"
  },
  {
    code: "CR",
    latitude: 9.748917,
    longitude: -83.753428,
    name: "Costa Rica",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/cr.svg",
    id: "b4d55089-807a-4b89-ab32-8debf848079d"
  },
  {
    code: "CU",
    latitude: 21.521757,
    longitude: -77.781167,
    name: "Cuba",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/cu.svg",
    id: "b8692ab2-b17e-4c68-8d91-b52ffb2951ea"
  },
  {
    code: "CV",
    latitude: 16.002082,
    longitude: -24.013197,
    name: "Cape Verde",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/cv.svg",
    id: "fb206533-98c1-475a-9573-1e23962443ba"
  },
  {
    code: "CX",
    latitude: -10.447525,
    longitude: 105.690449,
    name: "Christmas Island",
    regions: {
      data: [
        "Oceania",
        "Australia and New Zealand"
      ]
    },
    flag_path: "/assets/flags/cx.svg",
    id: "59d754a9-c5e1-469f-a305-46642510bc40"
  },
  {
    code: "CY",
    latitude: 35.126413,
    longitude: 33.429859,
    name: "Cyprus",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/cy.svg",
    id: "c707ed3d-0582-4880-934e-eebf579692cf"
  },
  {
    code: "CZ",
    latitude: 49.817492,
    longitude: 15.472962,
    name: "Czech Republic",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/cz.svg",
    id: "ee6f68c7-f208-41b2-8240-1ffb681f835e"
  },
  {
    code: "DE",
    latitude: 51.165691,
    longitude: 10.451526,
    name: "Germany",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/de.svg",
    id: "79c3a3c2-3ab7-4cf0-8e71-6feac7c17b61"
  },
  {
    code: "DJ",
    latitude: 11.825138,
    longitude: 42.590275,
    name: "Djibouti",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/dj.svg",
    id: "66f1328c-8177-4757-a79d-a3b5c501085c"
  },
  {
    code: "DK",
    latitude: 56.26392,
    longitude: 9.501785,
    name: "Denmark",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/dk.svg",
    id: "a6ed1341-f83d-450c-bb64-c5c02de22744"
  },
  {
    code: "DM",
    latitude: 15.414999,
    longitude: -61.370976,
    name: "Dominica",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/dm.svg",
    id: "990fd28a-7932-489a-8aae-9a9fb1a1c456"
  },
  {
    code: "DO",
    latitude: 18.735693,
    longitude: -70.162651,
    name: "Dominican Republic",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/do.svg",
    id: "c9b68499-b59a-45bc-819e-e988cb4498d4"
  },
  {
    code: "DZ",
    latitude: 28.033886,
    longitude: 1.659626,
    name: "Algeria",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/dz.svg",
    id: "b359a341-6f38-4cd8-94a0-1a747159611a"
  },
  {
    code: "EC",
    latitude: -1.831239,
    longitude: -78.183406,
    name: "Ecuador",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/ec.svg",
    id: "d22c7dd2-b967-4ed9-b6a7-76f5dcda2a18"
  },
  {
    code: "EE",
    latitude: 58.595272,
    longitude: 25.013607,
    name: "Estonia",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/ee.svg",
    id: "a55a7397-2e61-4f39-afdb-b86bbe375767"
  },
  {
    code: "EG",
    latitude: 26.820553,
    longitude: 30.802498,
    name: "Egypt",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/eg.svg",
    id: "efbcb8f6-7b5f-4f38-9100-a1b8681dbc58"
  },
  {
    code: "EH",
    latitude: 24.215527,
    longitude: -12.885834,
    name: "Western Sahara",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/eh.svg",
    id: "2b196fec-7f68-4c50-80ee-750abeb70627"
  },
  {
    code: "ER",
    latitude: 15.179384,
    longitude: 39.782334,
    name: "Eritrea",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/er.svg",
    id: "b46e05ba-a4b8-4df4-8fdf-d12d091cdc0f"
  },
  {
    code: "ES",
    latitude: 40.463667,
    longitude: -3.74922,
    name: "Spain",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/es.svg",
    id: "f53c081a-35e7-4ced-b7cb-90be3da7bf2d"
  },
  {
    code: "ET",
    latitude: 9.145,
    longitude: 40.489673,
    name: "Ethiopia",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/et.svg",
    id: "ebee180f-9cec-48fc-8895-0f77c738a8b8"
  },
  {
    code: "FI",
    latitude: 61.92411,
    longitude: 25.748151,
    name: "Finland",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/fi.svg",
    id: "3945aa3a-4871-45f7-83e3-23fdcf6ffaa9"
  },
  {
    code: "FJ",
    latitude: -16.578193,
    longitude: 179.414413,
    name: "Fiji",
    regions: {
      data: [
        "Oceania",
        "Melanesia"
      ]
    },
    flag_path: "/assets/flags/fj.svg",
    id: "20b18d9f-2f09-4592-a07c-887be81b081f"
  },
  {
    code: "FK",
    latitude: -51.796253,
    longitude: -59.523613,
    name: "Falkland Islands",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/fk.svg",
    id: "af699d54-2089-4a27-91ab-6c8344420a81"
  },
  {
    code: "FM",
    latitude: 7.425554,
    longitude: 150.550812,
    name: "Micronesia",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/fm.svg",
    id: "dfb0ea0e-a0e6-47eb-bf07-882cba2f9129"
  },
  {
    code: "FO",
    latitude: 61.892635,
    longitude: -6.911806,
    name: "Faroe Islands",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/fo.svg",
    id: "bf5985d4-9047-4afd-8f1d-b2c29b00b7e9"
  },
  {
    code: "FR",
    latitude: 46.227638,
    longitude: 2.213749,
    name: "France",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/fr.svg",
    id: "97befae6-4657-4316-9025-a3c36876284f"
  },
  {
    code: "GA",
    latitude: -0.803689,
    longitude: 11.609444,
    name: "Gabon",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/ga.svg",
    id: "a6535579-be85-4232-8925-78c7072a62c4"
  },
  {
    code: "GB",
    latitude: 55.378051,
    longitude: -3.435973,
    name: "United Kingdom",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/gb.svg",
    id: "032f6b53-e5e5-4ce1-8b73-093a8fa73b30"
  },
  {
    code: "GD",
    latitude: 12.262776,
    longitude: -61.604171,
    name: "Grenada",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/gd.svg",
    id: "47dc83cf-36f6-4286-8f8e-22b2a72c13d9"
  },
  {
    code: "GE",
    latitude: 42.315407,
    longitude: 43.356892,
    name: "Georgia",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/ge.svg",
    id: "d7cfa759-8c9d-4d0b-a4ae-2ff1ecd84edd"
  },
  {
    code: "GF",
    latitude: 3.933889,
    longitude: -53.125782,
    name: "French Guiana",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/gf.svg",
    id: "a0f731c9-b9d9-4328-b757-e327097a02fb"
  },
  {
    code: "GG",
    latitude: 49.465691,
    longitude: -2.585278,
    name: "Guernsey",
    regions: {
      data: [
        "Europe",
        "Northern Europe",
        "Channel Islands"
      ]
    },
    flag_path: "/assets/flags/gg.svg",
    id: "4b37ee2a-9073-4712-9e16-65b2199ed88c"
  },
  {
    code: "GH",
    latitude: 7.946527,
    longitude: -1.023194,
    name: "Ghana",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/gh.svg",
    id: "2b59576e-27de-4a4a-8596-62a00ad03183"
  },
  {
    code: "GI",
    latitude: 36.137741,
    longitude: -5.345374,
    name: "Gibraltar",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/gi.svg",
    id: "3612d52e-e10e-406d-b14b-48c1015dbc41"
  },
  {
    code: "GL",
    latitude: 71.706936,
    longitude: -42.604303,
    name: "Greenland",
    regions: {
      data: [
        "Americas",
        "North America"
      ]
    },
    flag_path: "/assets/flags/gl.svg",
    id: "4233b803-4fe7-40a8-825b-e6d5b8293c0a"
  },
  {
    code: "GM",
    latitude: 13.443182,
    longitude: -15.310139,
    name: "Gambia",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/gm.svg",
    id: "f53621d5-33fb-4814-b7d2-096049b91d1d"
  },
  {
    code: "GN",
    latitude: 9.945587,
    longitude: -9.696645,
    name: "Guinea",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/gn.svg",
    id: "e8edbc4c-4bdf-4958-a620-2203b5893a07"
  },
  {
    code: "GP",
    latitude: 16.995971,
    longitude: -62.067641,
    name: "Guadeloupe",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/gp.svg",
    id: "60453e65-6eed-4fd3-871f-94eddc62cd24"
  },
  {
    code: "GQ",
    latitude: 1.650801,
    longitude: 10.267895,
    name: "Equatorial Guinea",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/gq.svg",
    id: "bc9ba029-499a-4f95-9990-53cee4a80efd"
  },
  {
    code: "GR",
    latitude: 39.074208,
    longitude: 21.824312,
    name: "Greece",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/gr.svg",
    id: "1459da78-35ce-43ce-8a8f-a8b1e1680c41"
  },
  {
    code: "GS",
    latitude: -54.429579,
    longitude: -36.587909,
    name: "South Georgia and the South Sandwich Islands",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/gs.svg",
    id: "7bb2a037-4763-4684-adf9-5373052e885a"
  },
  {
    code: "GT",
    latitude: 15.783471,
    longitude: -90.230759,
    name: "Guatemala",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/gt.svg",
    id: "7f41b1b8-12fb-4239-9a55-d86f7fa41906"
  },
  {
    code: "GU",
    latitude: 13.444304,
    longitude: 144.793731,
    name: "Guam",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/gu.svg",
    id: "fedaacd3-c376-4410-9b61-450386e876f6"
  },
  {
    code: "GW",
    latitude: 11.803749,
    longitude: -15.180413,
    name: "Guinea-Bissau",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/gw.svg",
    id: "d245dae8-df4e-40ec-a06d-9a87da6fd082"
  },
  {
    code: "GY",
    latitude: 4.860416,
    longitude: -58.93018,
    name: "Guyana",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/gy.svg",
    id: "8860fb53-d357-46e8-aa63-d5e8213e7bcf"
  },
  {
    code: "GZ",
    latitude: 31.354676,
    longitude: 34.308825,
    name: "Gaza Strip",
    regions: {
      data: [
        "null"
      ]
    },
    flag_path: "/assets/flags/gz.svg",
    id: "c85dbf77-d5d7-4fbb-9f1b-2b1e05861441"
  },
  {
    code: "HK",
    latitude: 22.396428,
    longitude: 114.109497,
    name: "Hong Kong",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/hk.svg",
    id: "7f708d97-e984-4f9a-9f90-684696c4789b"
  },
  {
    code: "HM",
    latitude: -53.08181,
    longitude: 73.504158,
    name: "Heard Island and McDonald Islands",
    regions: {
      data: [
        "Oceania",
        "Australia and New Zealand"
      ]
    },
    flag_path: "/assets/flags/hm.svg",
    id: "1fc8153b-efcf-41f2-998a-9bda33c4334b"
  },
  {
    code: "HN",
    latitude: 15.199999,
    longitude: -86.241905,
    name: "Honduras",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/hn.svg",
    id: "4f4ce7d6-0276-49ee-869c-e4b8b10a28f1"
  },
  {
    code: "HR",
    latitude: 45.1,
    longitude: 15.2,
    name: "Croatia",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/hr.svg",
    id: "514bb59d-2c5c-429b-8b0f-9a0dea594399"
  },
  {
    code: "HT",
    latitude: 18.971187,
    longitude: -72.285215,
    name: "Haiti",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/ht.svg",
    id: "3347209d-5c55-4953-ac50-36333493d1f3"
  },
  {
    code: "HU",
    latitude: 47.162494,
    longitude: 19.503304,
    name: "Hungary",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/hu.svg",
    id: "b5b9de61-8064-4893-b2c3-61c855f84495"
  },
  {
    code: "ID",
    latitude: -0.789275,
    longitude: 113.921327,
    name: "Indonesia",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/id.svg",
    id: "d6179b19-cfd5-4cfd-b589-ed7be3cb4566"
  },
  {
    code: "IE",
    latitude: 53.41291,
    longitude: -8.24389,
    name: "Ireland",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/ie.svg",
    id: "78122db5-7a11-4e53-aa03-b489b9ec597e"
  },
  {
    code: "IL",
    latitude: 31.046051,
    longitude: 34.851612,
    name: "Israel",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/il.svg",
    id: "a3fcfce5-8a62-48ae-8109-375fb6592085"
  },
  {
    code: "IM",
    latitude: 54.236107,
    longitude: -4.548056,
    name: "Isle of Man",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/im.svg",
    id: "b1ea7619-606e-42f0-98c7-b6003f27a0fc"
  },
  {
    code: "IN",
    latitude: 20.593684,
    longitude: 78.96288,
    name: "India",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/in.svg",
    id: "071ba486-be42-4a5c-8dc1-398843870cdc"
  },
  {
    code: "IO",
    latitude: -6.343194,
    longitude: 71.876519,
    name: "British Indian Ocean Territory",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/io.svg",
    id: "7fd6b5d3-2bb2-4445-bcb7-923b1405233f"
  },
  {
    code: "IQ",
    latitude: 33.223191,
    longitude: 43.679291,
    name: "Iraq",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/iq.svg",
    id: "bc4cd8cb-8703-4f22-bb1f-4fbf02d654ff"
  },
  {
    code: "IR",
    latitude: 32.427908,
    longitude: 53.688046,
    name: "Iran",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/ir.svg",
    id: "ef5103d4-808b-47a5-9728-e6ccc0e68722"
  },
  {
    code: "IS",
    latitude: 64.963051,
    longitude: -19.020835,
    name: "Iceland",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/is.svg",
    id: "561ecc1e-c3f1-4bc7-853a-983afe97b750"
  },
  {
    code: "IT",
    latitude: 41.87194,
    longitude: 12.56738,
    name: "Italy",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/it.svg",
    id: "532fd954-c690-4179-bfe6-5a973e31804b"
  },
  {
    code: "JE",
    latitude: 49.214439,
    longitude: -2.13125,
    name: "Jersey",
    regions: {
      data: [
        "Europe",
        "Northern Europe",
        "Channel Islands"
      ]
    },
    flag_path: "/assets/flags/je.svg",
    id: "8363819d-0f00-46e5-927d-fd187a26428e"
  },
  {
    code: "JM",
    latitude: 18.109581,
    longitude: -77.297508,
    name: "Jamaica",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/jm.svg",
    id: "381d14cc-b461-4803-aad0-aa253b8dae8a"
  },
  {
    code: "JO",
    latitude: 30.585164,
    longitude: 36.238414,
    name: "Jordan",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/jo.svg",
    id: "e4f12b44-63c3-4aaf-bf46-6b2df2cb8fd0"
  },
  {
    code: "JP",
    latitude: 36.204824,
    longitude: 138.252924,
    name: "Japan",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/jp.svg",
    id: "3153457f-b966-4244-9568-d2a18a87fdee"
  },
  {
    code: "KE",
    latitude: -0.023559,
    longitude: 37.906193,
    name: "Kenya",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/ke.svg",
    id: "77915987-3b56-4ce0-af0b-06f149a97867"
  },
  {
    code: "KG",
    latitude: 41.20438,
    longitude: 74.766098,
    name: "Kyrgyzstan",
    regions: {
      data: [
        "Asia",
        "Central Asia"
      ]
    },
    flag_path: "/assets/flags/kg.svg",
    id: "5469c3d3-5474-490c-9f12-a25ab2b0ba5a"
  },
  {
    code: "KH",
    latitude: 12.565679,
    longitude: 104.990963,
    name: "Cambodia",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/kh.svg",
    id: "ac6a8bcf-ab2f-4f02-93c2-2bbb853fb4c4"
  },
  {
    code: "KI",
    latitude: -3.370417,
    longitude: -168.734039,
    name: "Kiribati",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/ki.svg",
    id: "72ddbd57-5dac-4bfd-8191-6e99f7dfe7d7"
  },
  {
    code: "KM",
    latitude: -11.875001,
    longitude: 43.872219,
    name: "Comoros",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/km.svg",
    id: "32476164-847d-4b84-b367-265a8e2f66ce"
  },
  {
    code: "KN",
    latitude: 17.357822,
    longitude: -62.782998,
    name: "Saint Kitts and Nevis",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/kn.svg",
    id: "b01ab9d0-70e9-488f-8c59-43bd95a131db"
  },
  {
    code: "KP",
    latitude: 40.339852,
    longitude: 127.510093,
    name: "North Korea",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/kp.svg",
    id: "b31dabaf-8c68-44a4-85a8-626578976e6d"
  },
  {
    code: "KR",
    latitude: 35.907757,
    longitude: 127.766922,
    name: "South Korea",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/kr.svg",
    id: "f2185e7f-449c-48eb-97ef-9cdfe7219297"
  },
  {
    code: "KW",
    latitude: 29.31166,
    longitude: 47.481766,
    name: "Kuwait",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/kw.svg",
    id: "018b9df7-a734-4828-834b-33838464c87c"
  },
  {
    code: "KY",
    latitude: 19.513469,
    longitude: -80.566956,
    name: "Cayman Islands",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/ky.svg",
    id: "82d57d85-525b-4460-ad46-349c05fee6f4"
  },
  {
    code: "KZ",
    latitude: 48.019573,
    longitude: 66.923684,
    name: "Kazakhstan",
    regions: {
      data: [
        "Asia",
        "Central Asia"
      ]
    },
    flag_path: "/assets/flags/kz.svg",
    id: "54b7c84b-80b7-440a-854f-0fd270b05847"
  },
  {
    code: "LA",
    latitude: 19.85627,
    longitude: 102.495496,
    name: "Laos",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/la.svg",
    id: "0b511a00-e83d-4f9c-88a1-8d2e26ce1f90"
  },
  {
    code: "LB",
    latitude: 33.854721,
    longitude: 35.862285,
    name: "Lebanon",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/lb.svg",
    id: "8754733c-f350-4213-977b-fd3f6e2d03e6"
  },
  {
    code: "LC",
    latitude: 13.909444,
    longitude: -60.978893,
    name: "Saint Lucia",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/lc.svg",
    id: "895074eb-0745-4ac7-9649-0c858bbb967b"
  },
  {
    code: "LI",
    latitude: 47.166,
    longitude: 9.555373,
    name: "Liechtenstein",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/li.svg",
    id: "1069215c-2075-452f-b583-ca827c86a4a7"
  },
  {
    code: "LK",
    latitude: 7.873054,
    longitude: 80.771797,
    name: "Sri Lanka",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/lk.svg",
    id: "a66f5f3c-9d5e-45e2-be58-66bca8759eef"
  },
  {
    code: "LR",
    latitude: 6.428055,
    longitude: -9.429499,
    name: "Liberia",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/lr.svg",
    id: "2a0f7ff7-7b02-41e4-9bcd-1fd58e26f995"
  },
  {
    code: "LS",
    latitude: -29.609988,
    longitude: 28.233608,
    name: "Lesotho",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Southern Africa"
      ]
    },
    flag_path: "/assets/flags/ls.svg",
    id: "cfc48828-1f07-4d7d-a1cd-4a7b0f7717ae"
  },
  {
    code: "LT",
    latitude: 55.169438,
    longitude: 23.881275,
    name: "Lithuania",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/lt.svg",
    id: "ccf6d63f-cc12-47ca-bf9f-dea94dbaad32"
  },
  {
    code: "LU",
    latitude: 49.815273,
    longitude: 6.129583,
    name: "Luxembourg",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/lu.svg",
    id: "c88e0056-8e35-4d69-936b-d23de2713548"
  },
  {
    code: "LV",
    latitude: 56.879635,
    longitude: 24.603189,
    name: "Latvia",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/lv.svg",
    id: "2bf41436-c022-4340-95ed-5ad37fc0e078"
  },
  {
    code: "LY",
    latitude: 26.3351,
    longitude: 17.228331,
    name: "Libya",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/ly.svg",
    id: "021ea332-17e7-4c79-a540-836a7c89fb85"
  },
  {
    code: "MA",
    latitude: 31.791702,
    longitude: -7.09262,
    name: "Morocco",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/ma.svg",
    id: "f48edf55-725c-40ad-832a-b6110a1c5e4e"
  },
  {
    code: "MC",
    latitude: 43.750298,
    longitude: 7.412841,
    name: "Monaco",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/mc.svg",
    id: "a248b39a-f68d-4d05-bcf9-49d5f75d8c82"
  },
  {
    code: "MD",
    latitude: 47.411631,
    longitude: 28.369885,
    name: "Moldova",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/md.svg",
    id: "6a5b2b3b-138f-4ace-a5fd-80360edbb396"
  },
  {
    code: "ME",
    latitude: 42.708678,
    longitude: 19.37439,
    name: "Montenegro",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/me.svg",
    id: "775dc248-e7fd-4887-8463-4cfbcba68ade"
  },
  {
    code: "MG",
    latitude: -18.766947,
    longitude: 46.869107,
    name: "Madagascar",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/mg.svg",
    id: "c7eecb74-807e-4bc9-af44-f369455e0d6b"
  },
  {
    code: "MH",
    latitude: 7.131474,
    longitude: 171.184478,
    name: "Marshall Islands",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/mh.svg",
    id: "68257bda-264d-4256-987a-49829f9b1bdc"
  },
  {
    code: "MK",
    latitude: 41.608635,
    longitude: 21.745275,
    name: "Macedonia",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/mk.svg",
    id: "8afab082-cc9e-47e0-b5fd-4854afbfef79"
  },
  {
    code: "ML",
    latitude: 17.570692,
    longitude: -3.996166,
    name: "Mali",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/ml.svg",
    id: "732986e6-fe2f-402f-a368-39f97183b61f"
  },
  {
    code: "MM",
    latitude: 21.913965,
    longitude: 95.956223,
    name: "Myanmar",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/mm.svg",
    id: "eba603eb-61d5-4224-8909-3ab69b3e24a1"
  },
  {
    code: "MN",
    latitude: 46.862496,
    longitude: 103.846656,
    name: "Mongolia",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/mn.svg",
    id: "6aaf47aa-b569-4baf-8093-9003b320242d"
  },
  {
    code: "MO",
    latitude: 22.198745,
    longitude: 113.543873,
    name: "Macau",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/mo.svg",
    id: "2a83692b-68c6-43a6-b21f-bb1b748c9261"
  },
  {
    code: "MP",
    latitude: 17.33083,
    longitude: 145.38469,
    name: "Northern Mariana Islands",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/mp.svg",
    id: "ddeea798-08f5-4792-bea6-61099e08202b"
  },
  {
    code: "MQ",
    latitude: 14.641528,
    longitude: -61.024174,
    name: "Martinique",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/mq.svg",
    id: "b7416590-b6bd-4ba3-9280-e59bda73da4d"
  },
  {
    code: "MR",
    latitude: 21.00789,
    longitude: -10.940835,
    name: "Mauritania",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/mr.svg",
    id: "82ded831-0473-4b9c-aba6-8530e862e52d"
  },
  {
    code: "MS",
    latitude: 16.742498,
    longitude: -62.187366,
    name: "Montserrat",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/ms.svg",
    id: "b90e462e-c548-4d77-a572-4b6d15d44cb0"
  },
  {
    code: "MT",
    latitude: 35.937496,
    longitude: 14.375416,
    name: "Malta",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/mt.svg",
    id: "7259573b-4b03-4c81-950e-c93b0b66b759"
  },
  {
    code: "MU",
    latitude: -20.348404,
    longitude: 57.552152,
    name: "Mauritius",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/mu.svg",
    id: "be32bcb2-bfff-4355-8f40-4eb7d74da7d6"
  },
  {
    code: "MV",
    latitude: 3.202778,
    longitude: 73.22068,
    name: "Maldives",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/mv.svg",
    id: "110c7fdb-ef72-4c67-bcf5-c37f159ee2a3"
  },
  {
    code: "MW",
    latitude: -13.254308,
    longitude: 34.301525,
    name: "Malawi",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/mw.svg",
    id: "450dba58-4b91-4a07-b7e2-5c47798af1a1"
  },
  {
    code: "MX",
    latitude: 23.634501,
    longitude: -102.552784,
    name: "Mexico",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/mx.svg",
    id: "c7ef91e2-e20c-49ef-94e5-294ae4ef9810"
  },
  {
    code: "MY",
    latitude: 4.210484,
    longitude: 101.975766,
    name: "Malaysia",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/my.svg",
    id: "25137bad-ea5b-4fc2-b2bc-f96124e34142"
  },
  {
    code: "MZ",
    latitude: -18.665695,
    longitude: 35.529562,
    name: "Mozambique",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/mz.svg",
    id: "d458f56e-28f9-466f-a7cc-fb41c70e7e3b"
  },
  {
    code: "NA",
    latitude: -22.95764,
    longitude: 18.49041,
    name: "Namibia",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Southern Africa"
      ]
    },
    flag_path: "/assets/flags/na.svg",
    id: "7caeaca8-9fe7-40d0-9093-d5efc235b500"
  },
  {
    code: "NC",
    latitude: -20.904305,
    longitude: 165.618042,
    name: "New Caledonia",
    regions: {
      data: [
        "Oceania",
        "Melanesia"
      ]
    },
    flag_path: "/assets/flags/nc.svg",
    id: "62baba6e-1897-42a4-9ff4-810d820ddfb5"
  },
  {
    code: "NE",
    latitude: 17.607789,
    longitude: 8.081666,
    name: "Niger",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/ne.svg",
    id: "811706fd-af8e-4953-b118-23350c2a7b13"
  },
  {
    code: "NF",
    latitude: -29.040835,
    longitude: 167.954712,
    name: "Norfolk Island",
    regions: {
      data: [
        "Oceania",
        "Australia and New Zealand"
      ]
    },
    flag_path: "/assets/flags/nf.svg",
    id: "483cb521-72a9-45fa-94f0-77a6b0603ae8"
  },
  {
    code: "NG",
    latitude: 9.081999,
    longitude: 8.675277,
    name: "Nigeria",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/ng.svg",
    id: "89f35cf0-ec2b-4aea-9440-2ad2fdec61f9"
  },
  {
    code: "NI",
    latitude: 12.865416,
    longitude: -85.207229,
    name: "Nicaragua",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/ni.svg",
    id: "fe10b119-f1ad-4c35-8710-0fabc43bae6e"
  },
  {
    code: "NL",
    latitude: 52.132633,
    longitude: 5.291266,
    name: "Netherlands",
    regions: {
      data: [
        "Europe",
        "Western Europe"
      ]
    },
    flag_path: "/assets/flags/nl.svg",
    id: "9df04703-69f7-493e-8f7f-3db702c5dc53"
  },
  {
    code: "NO",
    latitude: 60.472024,
    longitude: 8.468946,
    name: "Norway",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/no.svg",
    id: "a2be9708-5872-429e-8713-469f141c42c2"
  },
  {
    code: "NP",
    latitude: 28.394857,
    longitude: 84.124008,
    name: "Nepal",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/np.svg",
    id: "18341733-fe8f-44fc-b8c9-fcdcb572ce95"
  },
  {
    code: "NR",
    latitude: -0.522778,
    longitude: 166.931503,
    name: "Nauru",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/nr.svg",
    id: "e3977543-8bcb-48b3-a864-42b2e897676b"
  },
  {
    code: "NU",
    latitude: -19.054445,
    longitude: -169.867233,
    name: "Niue",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/nu.svg",
    id: "ab4f927b-0d35-4cdb-99d5-2920431fdb02"
  },
  {
    code: "NZ",
    latitude: -40.900557,
    longitude: 174.885971,
    name: "New Zealand",
    regions: {
      data: [
        "Oceania",
        "Australia and New Zealand"
      ]
    },
    flag_path: "/assets/flags/nz.svg",
    id: "a934ec68-d83e-4ed0-a8ef-aee0d72fb688"
  },
  {
    code: "OM",
    latitude: 21.512583,
    longitude: 55.923255,
    name: "Oman",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/om.svg",
    id: "f4f40c05-ed6d-40f3-a353-6abdbb78a644"
  },
  {
    code: "PA",
    latitude: 8.537981,
    longitude: -80.782127,
    name: "Panama",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/pa.svg",
    id: "05f6c046-dc9d-41f3-9680-3a44ba3fe380"
  },
  {
    code: "PE",
    latitude: -9.189967,
    longitude: -75.015152,
    name: "Peru",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/pe.svg",
    id: "2d3ed34f-6627-4bcd-a8fb-248aeb0eaa64"
  },
  {
    code: "PF",
    latitude: -17.679742,
    longitude: -149.406843,
    name: "French Polynesia",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/pf.svg",
    id: "c77ec31b-f1a9-4c21-9989-136c626baf42"
  },
  {
    code: "PG",
    latitude: -6.314993,
    longitude: 143.95555,
    name: "Papua New Guinea",
    regions: {
      data: [
        "Oceania",
        "Melanesia"
      ]
    },
    flag_path: "/assets/flags/pg.svg",
    id: "944a1224-5bd3-41a6-a85d-13006d3431a9"
  },
  {
    code: "PH",
    latitude: 12.879721,
    longitude: 121.774017,
    name: "Philippines",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/ph.svg",
    id: "a1e38174-9622-4812-9791-5a2655a93125"
  },
  {
    code: "PK",
    latitude: 30.375321,
    longitude: 69.345116,
    name: "Pakistan",
    regions: {
      data: [
        "Asia",
        "Southern Asia"
      ]
    },
    flag_path: "/assets/flags/pk.svg",
    id: "60803948-e10f-420b-a387-9228e1d9bf25"
  },
  {
    code: "PL",
    latitude: 51.919438,
    longitude: 19.145136,
    name: "Poland",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/pl.svg",
    id: "f1fb68ca-c9fa-4981-86ba-7a3a71e5766c"
  },
  {
    code: "PM",
    latitude: 46.941936,
    longitude: -56.27111,
    name: "Saint Pierre and Miquelon",
    regions: {
      data: [
        "Americas",
        "North America"
      ]
    },
    flag_path: "/assets/flags/pm.svg",
    id: "5aaccd7a-e9e6-4924-9900-5a844f974d89"
  },
  {
    code: "PN",
    latitude: -24.703615,
    longitude: -127.439308,
    name: "Pitcairn Islands",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/pn.svg",
    id: "8842e2c2-3143-4fc5-9354-9eefddee4d7f"
  },
  {
    code: "PR",
    latitude: 18.220833,
    longitude: -66.590149,
    name: "Puerto Rico",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/pr.svg",
    id: "6bbec23c-c7cc-4f76-bf3d-1496f4bc0a68"
  },
  {
    code: "PS",
    latitude: 31.952162,
    longitude: 35.233154,
    name: "Palestinian Territories",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/ps.svg",
    id: "0e3302c1-dcdc-435c-99a2-6f6f7d229ff4"
  },
  {
    code: "PT",
    latitude: 39.399872,
    longitude: -8.224454,
    name: "Portugal",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/pt.svg",
    id: "1656c833-9d7e-4dd7-b4d5-a4b3595d609b"
  },
  {
    code: "PW",
    latitude: 7.51498,
    longitude: 134.58252,
    name: "Palau",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/pw.svg",
    id: "9ec09ac4-856b-4c24-b2ba-ca7d92eb12fa"
  },
  {
    code: "PY",
    latitude: -23.442503,
    longitude: -58.443832,
    name: "Paraguay",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/py.svg",
    id: "ca6cafb0-e124-4ebd-bee5-53e40d5f1d12"
  },
  {
    code: "QA",
    latitude: 25.354826,
    longitude: 51.183884,
    name: "Qatar",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/qa.svg",
    id: "4f4cbac8-8b06-4ffd-b7dd-66aad28a658e"
  },
  {
    code: "RE",
    latitude: -21.115141,
    longitude: 55.536384,
    name: "Réunion",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/re.svg",
    id: "a9274403-9664-472e-86fc-9e08ac76d5e0"
  },
  {
    code: "RO",
    latitude: 45.943161,
    longitude: 24.96676,
    name: "Romania",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/ro.svg",
    id: "b7cade06-e7ce-423a-822b-80731b940a2f"
  },
  {
    code: "RS",
    latitude: 44.016521,
    longitude: 21.005859,
    name: "Serbia",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/rs.svg",
    id: "4d9bb816-8062-427b-b1b0-1a3f608b61d4"
  },
  {
    code: "RU",
    latitude: 61.52401,
    longitude: 105.318756,
    name: "Russia",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/ru.svg",
    id: "480c8df0-56ad-4d77-9d15-a7947c5d1302"
  },
  {
    code: "RW",
    latitude: -1.940278,
    longitude: 29.873888,
    name: "Rwanda",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/rw.svg",
    id: "7b80cc35-c7c3-4e80-bb95-95a9e11ff2e8"
  },
  {
    code: "SA",
    latitude: 23.885942,
    longitude: 45.079162,
    name: "Saudi Arabia",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/sa.svg",
    id: "665a19ad-a263-4084-a794-62d43e3633ff"
  },
  {
    code: "SB",
    latitude: -9.64571,
    longitude: 160.156194,
    name: "Solomon Islands",
    regions: {
      data: [
        "Oceania",
        "Melanesia"
      ]
    },
    flag_path: "/assets/flags/sb.svg",
    id: "b16ba45a-44fe-441c-a462-e3cf7bbf4a14"
  },
  {
    code: "SC",
    latitude: -4.679574,
    longitude: 55.491977,
    name: "Seychelles",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/sc.svg",
    id: "71ef5af1-1144-4432-984b-77010a376822"
  },
  {
    code: "SD",
    latitude: 12.862807,
    longitude: 30.217636,
    name: "Sudan",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/sd.svg",
    id: "5c302e19-2174-4c61-a690-ba343134bf92"
  },
  {
    code: "SS",
    latitude: 4.85,
    longitude: 31.6,
    name: "South Sudan",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/ss.svg",
    id: "43d1c0a4-3488-4e3d-a104-dd85dcaa95a6"
  },
  {
    code: "SE",
    latitude: 60.128161,
    longitude: 18.643501,
    name: "Sweden",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/se.svg",
    id: "fc2f9044-4b23-4797-906b-5ef129477070"
  },
  {
    code: "SG",
    latitude: 1.352083,
    longitude: 103.819836,
    name: "Singapore",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/sg.svg",
    id: "a697ff35-27b6-4536-8ed9-b3b05a483f7a"
  },
  {
    code: "SH",
    latitude: -24.143474,
    longitude: -10.030696,
    name: "Saint Helena",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/sh.svg",
    id: "0bc5727d-7e76-44ee-b31c-d8998447851c"
  },
  {
    code: "SI",
    latitude: 46.151241,
    longitude: 14.995463,
    name: "Slovenia",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/si.svg",
    id: "88f9c793-d637-421c-8ea8-4220949d2dfa"
  },
  {
    code: "SJ",
    latitude: 77.553604,
    longitude: 23.670272,
    name: "Svalbard and Jan Mayen",
    regions: {
      data: [
        "Europe",
        "Northern Europe"
      ]
    },
    flag_path: "/assets/flags/sj.svg",
    id: "5b9ac306-a846-4a74-b84a-d30da8ea5b0d"
  },
  {
    code: "SK",
    latitude: 48.669026,
    longitude: 19.699024,
    name: "Slovakia",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/sk.svg",
    id: "7d5dc47f-9309-4e99-9a15-c71733fa822a"
  },
  {
    code: "SL",
    latitude: 8.460555,
    longitude: -11.779889,
    name: "Sierra Leone",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/sl.svg",
    id: "a7ec4ea6-de3e-4e43-a34e-074a19dac3fb"
  },
  {
    code: "SM",
    latitude: 43.94236,
    longitude: 12.457777,
    name: "San Marino",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/sm.svg",
    id: "4e7b61d4-a737-4e55-8a8b-306af7cfed76"
  },
  {
    code: "SN",
    latitude: 14.497401,
    longitude: -14.452362,
    name: "Senegal",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/sn.svg",
    id: "19894847-e83b-4546-b638-0183e14978e5"
  },
  {
    code: "SO",
    latitude: 5.152149,
    longitude: 46.199616,
    name: "Somalia",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/so.svg",
    id: "ea8037fd-15b8-490e-8222-570c1748f47c"
  },
  {
    code: "SR",
    latitude: 3.919305,
    longitude: -56.027783,
    name: "Suriname",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/sr.svg",
    id: "c8441f95-0f89-4a25-860c-6a8814c6a0bd"
  },
  {
    code: "ST",
    latitude: 0.18636,
    longitude: 6.613081,
    name: "São Tomé and Príncipe",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/st.svg",
    id: "959d1f47-3da7-4e39-9b2d-ba1bf3dcd346"
  },
  {
    code: "SV",
    latitude: 13.794185,
    longitude: -88.89653,
    name: "El Salvador",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Central America",
        "North America"
      ]
    },
    flag_path: "/assets/flags/sv.svg",
    id: "545c6510-f517-4a2d-bb10-ecf01b33f181"
  },
  {
    code: "SY",
    latitude: 34.802075,
    longitude: 38.996815,
    name: "Syria",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/sy.svg",
    id: "ede8f5a0-6762-46a0-b839-fb2e76f190f0"
  },
  {
    code: "SZ",
    latitude: -26.522503,
    longitude: 31.465866,
    name: "Swaziland",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Southern Africa"
      ]
    },
    flag_path: "/assets/flags/sz.svg",
    id: "369cfba9-140b-485a-9675-7e2539af86aa"
  },
  {
    code: "TC",
    latitude: 21.694025,
    longitude: -71.797928,
    name: "Turks and Caicos Islands",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/tc.svg",
    id: "1c531824-c126-4807-9aa7-d11eb3b0a5a0"
  },
  {
    code: "TD",
    latitude: 15.454166,
    longitude: 18.732207,
    name: "Chad",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Middle Africa"
      ]
    },
    flag_path: "/assets/flags/td.svg",
    id: "eee4415d-70ec-4d2f-b964-fdaadd5e4ba5"
  },
  {
    code: "TF",
    latitude: -49.280366,
    longitude: 69.348557,
    name: "French Southern Territories",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/tf.svg",
    id: "433e5349-9780-44af-927d-df5ac9bd0cc5"
  },
  {
    code: "TG",
    latitude: 8.619543,
    longitude: 0.824782,
    name: "Togo",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Western Africa"
      ]
    },
    flag_path: "/assets/flags/tg.svg",
    id: "f033443e-53d6-4e1d-b515-e8352801eef3"
  },
  {
    code: "TH",
    latitude: 15.870032,
    longitude: 100.992541,
    name: "Thailand",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/th.svg",
    id: "76901217-33e1-46a6-a170-565dc5b21058"
  },
  {
    code: "TJ",
    latitude: 38.861034,
    longitude: 71.276093,
    name: "Tajikistan",
    regions: {
      data: [
        "Asia",
        "Central Asia"
      ]
    },
    flag_path: "/assets/flags/tj.svg",
    id: "5502f6ce-bde1-4293-8663-6364a61c538b"
  },
  {
    code: "TK",
    latitude: -8.967363,
    longitude: -171.855881,
    name: "Tokelau",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/tk.svg",
    id: "a80bb307-72f6-4e98-bbb7-960ca6327d6a"
  },
  {
    code: "TL",
    latitude: -8.874217,
    longitude: 125.727539,
    name: "Timor-Leste",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/tl.svg",
    id: "fdb6b5b6-358e-40d1-9e36-194809a74544"
  },
  {
    code: "TM",
    latitude: 38.969719,
    longitude: 59.556278,
    name: "Turkmenistan",
    regions: {
      data: [
        "Asia",
        "Central Asia"
      ]
    },
    flag_path: "/assets/flags/tm.svg",
    id: "db9737ff-b037-4c30-ba32-2830992841e7"
  },
  {
    code: "TN",
    latitude: 33.886917,
    longitude: 9.537499,
    name: "Tunisia",
    regions: {
      data: [
        "Africa",
        "Northern Africa"
      ]
    },
    flag_path: "/assets/flags/tn.svg",
    id: "cd20f0a3-eece-4401-85d7-087cf356b3d5"
  },
  {
    code: "TO",
    latitude: -21.178986,
    longitude: -175.198242,
    name: "Tonga",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/to.svg",
    id: "958c4dd0-c70c-4903-8493-586c49d8debf"
  },
  {
    code: "TR",
    latitude: 38.963745,
    longitude: 35.243322,
    name: "Turkey",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/tr.svg",
    id: "48dad8e1-6e09-4d54-b787-4abc5752927c"
  },
  {
    code: "TT",
    latitude: 10.691803,
    longitude: -61.222503,
    name: "Trinidad and Tobago",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/tt.svg",
    id: "8d3ff3d2-138f-4a8e-b8fa-48f144088008"
  },
  {
    code: "TV",
    latitude: -7.109535,
    longitude: 177.64933,
    name: "Tuvalu",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/tv.svg",
    id: "2afbb76b-df50-4049-80c9-8e86083aac84"
  },
  {
    code: "TW",
    latitude: 23.69781,
    longitude: 120.960515,
    name: "Taiwan",
    regions: {
      data: [
        "Asia",
        "Eastern Asia"
      ]
    },
    flag_path: "/assets/flags/tw.svg",
    id: "e1dc2bf5-ef9a-463e-9c33-4b49ab930ade"
  },
  {
    code: "TZ",
    latitude: -6.369028,
    longitude: 34.888822,
    name: "Tanzania",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/tz.svg",
    id: "081e45e6-87c9-4d8b-b8af-42a4eb69a9d7"
  },
  {
    code: "UA",
    latitude: 48.379433,
    longitude: 31.16558,
    name: "Ukraine",
    regions: {
      data: [
        "Europe",
        "Eastern Europe"
      ]
    },
    flag_path: "/assets/flags/ua.svg",
    id: "3b256f1f-a3ce-4543-b32d-6cc60d1e90de"
  },
  {
    code: "UG",
    latitude: 1.373333,
    longitude: 32.290275,
    name: "Uganda",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/ug.svg",
    id: "b2bdcaf4-aa97-4aec-994a-0e8cd29b9161"
  },
  {
    code: "UM",
    latitude: 0,
    longitude: 0,
    name: "U.S. Minor Outlying Islands",
    regions: {
      data: [
        "Oceania",
        "Micronesia"
      ]
    },
    flag_path: "/assets/flags/um.svg",
    id: "b3fe8754-d883-4717-9d83-fee873af0c0e"
  },
  {
    code: "US",
    latitude: 37.09024,
    longitude: -95.712891,
    name: "United States",
    regions: {
      data: [
        "Americas",
        "North America"
      ]
    },
    flag_path: "/assets/flags/us.svg",
    id: "2271a031-eb57-4c41-96f9-553338e11827"
  },
  {
    code: "UY",
    latitude: -32.522779,
    longitude: -55.765835,
    name: "Uruguay",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/uy.svg",
    id: "919ffaea-0af3-474e-b7b2-aeace6301038"
  },
  {
    code: "UZ",
    latitude: 41.377491,
    longitude: 64.585262,
    name: "Uzbekistan",
    regions: {
      data: [
        "Asia",
        "Central Asia"
      ]
    },
    flag_path: "/assets/flags/uz.svg",
    id: "5580fe9a-8f13-4d91-9b14-848ec22537ff"
  },
  {
    code: "VA",
    latitude: 41.902916,
    longitude: 12.453389,
    name: "Vatican City",
    regions: {
      data: [
        "Europe",
        "Southern Europe"
      ]
    },
    flag_path: "/assets/flags/va.svg",
    id: "bb858fae-2609-4348-8ca6-6ba3afa73807"
  },
  {
    code: "VC",
    latitude: 12.984305,
    longitude: -61.287228,
    name: "Saint Vincent and the Grenadines",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/vc.svg",
    id: "e438d4a8-234e-4f74-b4c8-aeb7e7ef8370"
  },
  {
    code: "VE",
    latitude: 6.42375,
    longitude: -66.58973,
    name: "Venezuela",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "South America"
      ]
    },
    flag_path: "/assets/flags/ve.svg",
    id: "318d0480-9bb6-45d7-9f47-1312e3d95c61"
  },
  {
    code: "VG",
    latitude: 18.420695,
    longitude: -64.639968,
    name: "British Virgin Islands",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/vg.svg",
    id: "e5589a79-5b05-4953-a3e0-ac652063188f"
  },
  {
    code: "VI",
    latitude: 18.335765,
    longitude: -64.896335,
    name: "U.S. Virgin Islands",
    regions: {
      data: [
        "Americas",
        "Latin America and the Caribbean",
        "Caribbean",
        "North America"
      ]
    },
    flag_path: "/assets/flags/vi.svg",
    id: "0b70f016-fb1e-4956-95e8-5fc747d61ea1"
  },
  {
    code: "VN",
    latitude: 14.058324,
    longitude: 108.277199,
    name: "Vietnam",
    regions: {
      data: [
        "Asia",
        "South-eastern Asia"
      ]
    },
    flag_path: "/assets/flags/vn.svg",
    id: "f6a1b994-337d-4294-a655-1f603e9d6f71"
  },
  {
    code: "VU",
    latitude: -15.376706,
    longitude: 166.959158,
    name: "Vanuatu",
    regions: {
      data: [
        "Oceania",
        "Melanesia"
      ]
    },
    flag_path: "/assets/flags/vu.svg",
    id: "9746fa2a-d2fc-4cec-ab00-f55b09949ca7"
  },
  {
    code: "WF",
    latitude: -13.768752,
    longitude: -177.156097,
    name: "Wallis and Futuna",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/wf.svg",
    id: "68c3929a-c68b-4122-ba39-771e6a498f6d"
  },
  {
    code: "WS",
    latitude: -13.759029,
    longitude: -172.104629,
    name: "Samoa",
    regions: {
      data: [
        "Oceania",
        "Polynesia"
      ]
    },
    flag_path: "/assets/flags/ws.svg",
    id: "9f2ee0df-b548-42fd-bb8d-1100def26453"
  },
  {
    code: "XK",
    latitude: 42.602636,
    longitude: 20.902977,
    name: "Kosovo",
    regions: {
      data: [
        "null"
      ]
    },
    flag_path: "/assets/flags/xk.svg",
    id: "dfbe3e86-a8a9-4979-8174-80db9356bb54"
  },
  {
    code: "YE",
    latitude: 15.552727,
    longitude: 48.516388,
    name: "Yemen",
    regions: {
      data: [
        "Asia",
        "Western Asia"
      ]
    },
    flag_path: "/assets/flags/ye.svg",
    id: "7fade44f-a8e6-46f3-940a-c47b44395f9e"
  },
  {
    code: "YT",
    latitude: -12.8275,
    longitude: 45.166244,
    name: "Mayotte",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/yt.svg",
    id: "0b8d7fd3-7a47-4ea3-8d38-33c728882333"
  },
  {
    code: "ZA",
    latitude: -30.559482,
    longitude: 22.937506,
    name: "South Africa",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Southern Africa"
      ]
    },
    flag_path: "/assets/flags/za.svg",
    id: "595c33ff-b79e-45c0-a44b-a7dbcc321a5e"
  },
  {
    code: "ZM",
    latitude: -13.133897,
    longitude: 27.849332,
    name: "Zambia",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/zm.svg",
    id: "14482155-e2ee-4b7b-8312-d552b68ef6af"
  },
  {
    code: "ZW",
    latitude: -19.015438,
    longitude: 29.154857,
    name: "Zimbabwe",
    regions: {
      data: [
        "Africa",
        "Sub-Saharan Africa",
        "Eastern Africa"
      ]
    },
    flag_path: "/assets/flags/zw.svg",
    id: "60b7c236-4321-4aef-adc6-cda3c1f1fe9d"
  }
]);
});
};
