
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('countries').del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {
          code: "AD",
          latitude: 42.546245,
          longitude: 1.601554,
          name: "Andorra",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/ad.svg",
          id: "b915129d-96e4-4de1-bc2f-a8d9b46876a8"
        },
        {
          code: "AE",
          latitude: 23.424076,
          longitude: 53.847818,
          name: "United Arab Emirates",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/ae.svg",
          id: "4819e088-f3ba-4159-9e10-0ba4d389f4b0"
        },
        {
          code: "AF",
          latitude: 33.93911,
          longitude: 67.709953,
          name: "Afghanistan",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/af.svg",
          id: "c378e2cf-0e26-4db5-a44b-e4c78baaa228"
        },
        {
          code: "AG",
          latitude: 17.060816,
          longitude: -61.796428,
          name: "Antigua and Barbuda",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/ag.svg",
          id: "281c5907-984f-438a-ae8a-82e2e045914a"
        },
        {
          code: "AI",
          latitude: 18.220554,
          longitude: -63.068615,
          name: "Anguilla",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/ai.svg",
          id: "785894c1-a199-4461-bb5c-dad9d8642603"
        },
        {
          code: "AL",
          latitude: 41.153332,
          longitude: 20.168331,
          name: "Albania",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/al.svg",
          id: "8772195d-11c0-49fa-8f06-5799ab16ecb9"
        },
        {
          code: "AM",
          latitude: 40.069099,
          longitude: 45.038189,
          name: "Armenia",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/am.svg",
          id: "59abd1b9-28bc-4764-a6dd-3d7e8e3f90a0"
        },
        {
          code: "AN",
          latitude: 12.226079,
          longitude: -69.060087,
          name: "Netherlands Antilles",
          regions: {
            "data": []
          },
          flag_path: "./assets/flags/an.svg",
          id: "b0ba2dc4-6d3c-4a1b-985e-245e773517f2"
        },
        {
          code: "AO",
          latitude: -11.202692,
          longitude: 17.873887,
          name: "Angola",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/ao.svg",
          id: "f830aa92-ec9c-4b14-a84c-c06a06174dbb"
        },
        {
          code: "AQ",
          latitude: -75.250973,
          longitude: -0.071389,
          name: "Antarctica",
          regions: {
            "data": [
              ""
            ]
          },
          flag_path: "./assets/flags/aq.svg",
          id: "ed110ab0-a046-4a94-a5d5-7f9e691fc883"
        },
        {
          code: "AR",
          latitude: -38.416097,
          longitude: -63.616672,
          name: "Argentina",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/ar.svg",
          id: "fec260bb-6211-4a49-ac99-ce6c3a1a6eea"
        },
        {
          code: "AS",
          latitude: -14.270972,
          longitude: -170.132217,
          name: "American Samoa",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/as.svg",
          id: "900ec83c-f9f0-4ea4-a72c-c810305fb677"
        },
        {
          code: "AT",
          latitude: 47.516231,
          longitude: 14.550072,
          name: "Austria",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/at.svg",
          id: "219ced68-47b8-4b2f-9fc3-62b3982b0772"
        },
        {
          code: "AU",
          latitude: -25.274398,
          longitude: 133.775136,
          name: "Australia",
          regions: {
            "data": [
              "Oceania",
              "Australia and New Zealand"
            ]
          },
          flag_path: "./assets/flags/au.svg",
          id: "cd7d7af8-9663-4869-b30c-ed6d99a2ab0e"
        },
        {
          code: "AW",
          latitude: 12.52111,
          longitude: -69.968338,
          name: "Aruba",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/aw.svg",
          id: "a7f00e33-4085-4640-9683-8b5aa9d87ad5"
        },
        {
          code: "AZ",
          latitude: 40.143105,
          longitude: 47.576927,
          name: "Azerbaijan",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/az.svg",
          id: "8bd683bc-a57e-4c09-aaf4-0667e8391170"
        },
        {
          code: "BA",
          latitude: 43.915886,
          longitude: 17.679076,
          name: "Bosnia and Herzegovina",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/ba.svg",
          id: "d82a9bcf-1038-43eb-884a-010b5dec7365"
        },
        {
          code: "BB",
          latitude: 13.193887,
          longitude: -59.543198,
          name: "Barbados",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/bb.svg",
          id: "a13b93be-0518-47d4-b5ea-44b3f1969fe6"
        },
        {
          code: "BD",
          latitude: 23.684994,
          longitude: 90.356331,
          name: "Bangladesh",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/bd.svg",
          id: "5a2bdc51-071d-4e2a-a452-e005d18f6548"
        },
        {
          code: "BE",
          latitude: 50.503887,
          longitude: 4.469936,
          name: "Belgium",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/be.svg",
          id: "626db81d-f8c5-4968-b588-09a7166a6859"
        },
        {
          code: "BF",
          latitude: 12.238333,
          longitude: -1.561593,
          name: "Burkina Faso",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/bf.svg",
          id: "daaf3c16-a1f3-457d-922a-97f9e8fa0f17"
        },
        {
          code: "BG",
          latitude: 42.733883,
          longitude: 25.48583,
          name: "Bulgaria",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/bg.svg",
          id: "9b8992dd-eb81-445b-aad8-6fdc29cfb7e7"
        },
        {
          code: "BH",
          latitude: 25.930414,
          longitude: 50.637772,
          name: "Bahrain",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/bh.svg",
          id: "f9c28aa7-2d88-4a56-b083-aa4cae33b341"
        },
        {
          code: "BI",
          latitude: -3.373056,
          longitude: 29.918886,
          name: "Burundi",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/bi.svg",
          id: "5f01f330-e547-401c-a230-d326c7de0db5"
        },
        {
          code: "BJ",
          latitude: 9.30769,
          longitude: 2.315834,
          name: "Benin",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/bj.svg",
          id: "086ad08d-3bd8-4c46-a0a5-ec9b686c4a7f"
        },
        {
          code: "BM",
          latitude: 32.321384,
          longitude: -64.75737,
          name: "Bermuda",
          regions: {
            "data": [
              "Americas",
              "Northern America"
            ]
          },
          flag_path: "./assets/flags/bm.svg",
          id: "afe4b324-179e-4ed8-83a9-89375a4b07b2"
        },
        {
          code: "BN",
          latitude: 4.535277,
          longitude: 114.727669,
          name: "Brunei",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/bn.svg",
          id: "462034ce-dc3b-4f8b-b79c-2e9d09302823"
        },
        {
          code: "BO",
          latitude: -16.290154,
          longitude: -63.588653,
          name: "Bolivia",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/bo.svg",
          id: "0918dea3-c9ca-4876-a113-a7fe50ec3c8e"
        },
        {
          code: "BR",
          latitude: -14.235004,
          longitude: -51.92528,
          name: "Brazil",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/br.svg",
          id: "afe51ccb-0db2-42ef-b4de-3f04699e9ef8"
        },
        {
          code: "BS",
          latitude: 25.03428,
          longitude: -77.39628,
          name: "Bahamas",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/bs.svg",
          id: "b4912a65-250d-488f-964c-e1ee4ef4691b"
        },
        {
          code: "BT",
          latitude: 27.514162,
          longitude: 90.433601,
          name: "Bhutan",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/bt.svg",
          id: "96fea897-53f5-46a1-a8c5-c019771b0b14"
        },
        {
          code: "BV",
          latitude: -54.423199,
          longitude: 3.413194,
          name: "Bouvet Island",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/bv.svg",
          id: "fe4cf017-9b24-4502-a17f-3cc6daaf1b60"
        },
        {
          code: "BW",
          latitude: -22.328474,
          longitude: 24.684866,
          name: "Botswana",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Southern Africa"
            ]
          },
          flag_path: "./assets/flags/bw.svg",
          id: "1ffd28d9-646f-4fc4-9ba2-08d27962b4bb"
        },
        {
          code: "BY",
          latitude: 53.709807,
          longitude: 27.953389,
          name: "Belarus",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/by.svg",
          id: "962621df-24e8-4c9d-9479-917d2d4f2e19"
        },
        {
          code: "BZ",
          latitude: 17.189877,
          longitude: -88.49765,
          name: "Belize",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/bz.svg",
          id: "044c48e0-daeb-41e1-950b-d2eb96c59834"
        },
        {
          code: "CA",
          latitude: 56.130366,
          longitude: -106.346771,
          name: "Canada",
          regions: {
            "data": [
              "Americas",
              "Northern America"
            ]
          },
          flag_path: "./assets/flags/ca.svg",
          id: "5293c570-86de-4f5d-ac46-4f0d004bd628"
        },
        {
          code: "CC",
          latitude: -12.164165,
          longitude: 96.870956,
          name: "Cocos [Keeling] Islands",
          regions: {
            "data": [
              "Oceania",
              "Australia and New Zealand"
            ]
          },
          flag_path: "./assets/flags/cc.svg",
          id: "fcd72502-7b94-4b30-a114-376138f7915d"
        },
        {
          code: "CD",
          latitude: -4.038333,
          longitude: 21.758664,
          name: "Congo [DRC]",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/cd.svg",
          id: "bfa072ca-5698-47c1-b04e-863854c18c86"
        },
        {
          code: "CF",
          latitude: 6.611111,
          longitude: 20.939444,
          name: "Central African Republic",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/cf.svg",
          id: "f51483ff-2870-4ce3-8868-e8d5b18b59a2"
        },
        {
          code: "CG",
          latitude: -0.228021,
          longitude: 15.827659,
          name: "Congo [Republic]",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/cg.svg",
          id: "34f5fe16-3966-4ab6-95ec-719d0d4a01ea"
        },
        {
          code: "CH",
          latitude: 46.818188,
          longitude: 8.227512,
          name: "Switzerland",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/ch.svg",
          id: "4a108df2-1aa1-4c24-a299-3d940c00205a"
        },
        {
          code: "CI",
          latitude: 7.539989,
          longitude: -5.54708,
          name: "Côte d'Ivoire",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/ci.svg",
          id: "bf5c2fc6-d39a-4463-9178-3cc79daa163c"
        },
        {
          code: "CK",
          latitude: -21.236736,
          longitude: -159.777671,
          name: "Cook Islands",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/ck.svg",
          id: "922aebd0-6e82-4c22-90ca-4a2922725c66"
        },
        {
          code: "CL",
          latitude: -35.675147,
          longitude: -71.542969,
          name: "Chile",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/cl.svg",
          id: "e2b2a47a-ac01-406d-899c-1f490b2196f3"
        },
        {
          code: "CM",
          latitude: 7.369722,
          longitude: 12.354722,
          name: "Cameroon",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/cm.svg",
          id: "f46ca99a-a6f2-4368-8396-e879e42db76e"
        },
        {
          code: "CN",
          latitude: 35.86166,
          longitude: 104.195397,
          name: "China",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/cn.svg",
          id: "2f2da348-4131-49cd-9513-323f01838b7f"
        },
        {
          code: "CO",
          latitude: 4.570868,
          longitude: -74.297333,
          name: "Colombia",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/co.svg",
          id: "a1e61855-cfcf-4a51-be1b-560b6741048a"
        },
        {
          code: "CR",
          latitude: 9.748917,
          longitude: -83.753428,
          name: "Costa Rica",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/cr.svg",
          id: "90978c5d-39b5-4d00-9d5d-4448b2284582"
        },
        {
          code: "CU",
          latitude: 21.521757,
          longitude: -77.781167,
          name: "Cuba",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/cu.svg",
          id: "fc849058-9dec-4612-b571-a1f13c1d85e6"
        },
        {
          code: "CV",
          latitude: 16.002082,
          longitude: -24.013197,
          name: "Cape Verde",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/cv.svg",
          id: "b0919c26-dc05-4d2d-901e-c11a5fefda19"
        },
        {
          code: "CX",
          latitude: -10.447525,
          longitude: 105.690449,
          name: "Christmas Island",
          regions: {
            "data": [
              "Oceania",
              "Australia and New Zealand"
            ]
          },
          flag_path: "./assets/flags/cx.svg",
          id: "a5d95c76-7034-403a-a428-989045d72718"
        },
        {
          code: "CY",
          latitude: 35.126413,
          longitude: 33.429859,
          name: "Cyprus",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/cy.svg",
          id: "b77d87c3-7a7f-469a-8a29-3988d5a557ed"
        },
        {
          code: "CZ",
          latitude: 49.817492,
          longitude: 15.472962,
          name: "Czech Republic",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/cz.svg",
          id: "620391e9-386f-40dc-944e-ac64227ea402"
        },
        {
          code: "DE",
          latitude: 51.165691,
          longitude: 10.451526,
          name: "Germany",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/de.svg",
          id: "ef007b0d-2232-414f-aaaa-54237e5aa3b3"
        },
        {
          code: "DJ",
          latitude: 11.825138,
          longitude: 42.590275,
          name: "Djibouti",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/dj.svg",
          id: "16c0facd-d306-4185-8f7d-5848c47149c9"
        },
        {
          code: "DK",
          latitude: 56.26392,
          longitude: 9.501785,
          name: "Denmark",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/dk.svg",
          id: "b94b1ba7-cd3a-4f94-a1e2-ffb99676caf3"
        },
        {
          code: "DM",
          latitude: 15.414999,
          longitude: -61.370976,
          name: "Dominica",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/dm.svg",
          id: "c7cf5ff3-e2c1-41a3-b399-816bed62fb9c"
        },
        {
          code: "DO",
          latitude: 18.735693,
          longitude: -70.162651,
          name: "Dominican Republic",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/do.svg",
          id: "e03adb9f-c311-4b9c-815f-092d048b49d9"
        },
        {
          code: "DZ",
          latitude: 28.033886,
          longitude: 1.659626,
          name: "Algeria",
          regions: {
            "data": [
              "Africa",
              "Northern Africa"
            ]
          },
          flag_path: "./assets/flags/dz.svg",
          id: "1c980abf-76e2-4009-87a3-5b9953665d6d"
        },
        {
          code: "EC",
          latitude: -1.831239,
          longitude: -78.183406,
          name: "Ecuador",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/ec.svg",
          id: "93e914aa-7087-4472-9f22-03d35e41e1db"
        },
        {
          code: "EE",
          latitude: 58.595272,
          longitude: 25.013607,
          name: "Estonia",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/ee.svg",
          id: "c4a923bf-4d8d-4cb1-9c68-4f94b3cd4022"
        },
        {
          code: "EG",
          latitude: 26.820553,
          longitude: 30.802498,
          name: "Egypt",
          regions: {
            "data": [
              "Africa",
              "Northern Africa"
            ]
          },
          flag_path: "./assets/flags/eg.svg",
          id: "089cb1c0-a3b2-4980-9228-219ca3fc5bd2"
        },
        {
          code: "EH",
          latitude: 24.215527,
          longitude: -12.885834,
          name: "Western Sahara",
          regions: {
            "data": [
              "Africa",
              "Northern Africa"
            ]
          },
          flag_path: "./assets/flags/eh.svg",
          id: "af56d3b6-1bb1-497a-9852-9a7b1915134e"
        },
        {
          code: "ER",
          latitude: 15.179384,
          longitude: 39.782334,
          name: "Eritrea",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/er.svg",
          id: "9879ac59-121f-4de9-9789-c823e4196309"
        },
        {
          code: "ES",
          latitude: 40.463667,
          longitude: -3.74922,
          name: "Spain",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/es.svg",
          id: "7d1f58d5-3017-41b9-9a10-2dd230226fbd"
        },
        {
          code: "ET",
          latitude: 9.145,
          longitude: 40.489673,
          name: "Ethiopia",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/et.svg",
          id: "ab498e40-d62c-4132-9941-b4070f466bef"
        },
        {
          code: "FI",
          latitude: 61.92411,
          longitude: 25.748151,
          name: "Finland",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/fi.svg",
          id: "d606ad17-8076-4141-a8d7-ae04811caa85"
        },
        {
          code: "FJ",
          latitude: -16.578193,
          longitude: 179.414413,
          name: "Fiji",
          regions: {
            "data": [
              "Oceania",
              "Melanesia"
            ]
          },
          flag_path: "./assets/flags/fj.svg",
          id: "6dcfd188-5c9e-49f6-93ca-4efc91476319"
        },
        {
          code: "FK",
          latitude: -51.796253,
          longitude: -59.523613,
          name: "Falkland Islands [Islas Malvinas]",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/fk.svg",
          id: "7e7b1137-b8f1-4202-9d62-9acf24fef09e"
        },
        {
          code: "FM",
          latitude: 7.425554,
          longitude: 150.550812,
          name: "Micronesia",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/fm.svg",
          id: "7e2bdc90-395a-40c7-af05-c9ba046f1598"
        },
        {
          code: "FO",
          latitude: 61.892635,
          longitude: -6.911806,
          name: "Faroe Islands",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/fo.svg",
          id: "03a63383-9f9e-43ee-8de4-2de12ab9dc67"
        },
        {
          code: "FR",
          latitude: 46.227638,
          longitude: 2.213749,
          name: "France",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/fr.svg",
          id: "d90e6d26-03d4-4680-8135-2aaf29ae1157"
        },
        {
          code: "GA",
          latitude: -0.803689,
          longitude: 11.609444,
          name: "Gabon",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/ga.svg",
          id: "e5770a53-35e5-47bf-ae43-694b4ba65c69"
        },
        {
          code: "GB",
          latitude: 55.378051,
          longitude: -3.435973,
          name: "United Kingdom",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/gb.svg",
          id: "adbc2a1c-f535-4378-8342-6439c6362556"
        },
        {
          code: "GD",
          latitude: 12.262776,
          longitude: -61.604171,
          name: "Grenada",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/gd.svg",
          id: "c974181e-cd20-4da1-932f-99e71ed0e46f"
        },
        {
          code: "GE",
          latitude: 42.315407,
          longitude: 43.356892,
          name: "Georgia",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/ge.svg",
          id: "3d69f47b-40ca-4b90-99c7-96ebeaeb8046"
        },
        {
          code: "GF",
          latitude: 3.933889,
          longitude: -53.125782,
          name: "French Guiana",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/gf.svg",
          id: "cebb6bfe-e5c8-4620-91f0-481270cc7caf"
        },
        {
          code: "GG",
          latitude: 49.465691,
          longitude: -2.585278,
          name: "Guernsey",
          regions: {
            "data": [
              "Europe",
              "Northern Europe",
              "Channel Islands"
            ]
          },
          flag_path: "./assets/flags/gg.svg",
          id: "7be4b6f0-c3cd-4971-a22b-86a51c2553cb"
        },
        {
          code: "GH",
          latitude: 7.946527,
          longitude: -1.023194,
          name: "Ghana",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/gh.svg",
          id: "f3891af0-777b-40f5-ace2-dec4a9a71db1"
        },
        {
          code: "GI",
          latitude: 36.137741,
          longitude: -5.345374,
          name: "Gibraltar",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/gi.svg",
          id: "85bca44e-bc4e-4832-be61-5f2f4b54bb1f"
        },
        {
          code: "GL",
          latitude: 71.706936,
          longitude: -42.604303,
          name: "Greenland",
          regions: {
            "data": [
              "Americas",
              "Northern America"
            ]
          },
          flag_path: "./assets/flags/gl.svg",
          id: "4d28fdb3-90f1-4709-91cb-ad6315d8d18b"
        },
        {
          code: "GM",
          latitude: 13.443182,
          longitude: -15.310139,
          name: "Gambia",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/gm.svg",
          id: "e63b54f0-ecc5-4238-90b0-538c2de7a999"
        },
        {
          code: "GN",
          latitude: 9.945587,
          longitude: -9.696645,
          name: "Guinea",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/gn.svg",
          id: "4467067e-de58-440a-914b-fb4a5dabaf82"
        },
        {
          code: "GP",
          latitude: 16.995971,
          longitude: -62.067641,
          name: "Guadeloupe",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/gp.svg",
          id: "1693b988-1304-4985-b90e-24bf7fa958b0"
        },
        {
          code: "GQ",
          latitude: 1.650801,
          longitude: 10.267895,
          name: "Equatorial Guinea",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/gq.svg",
          id: "5f31d1b8-26b1-4c0a-a750-959d163fc29d"
        },
        {
          code: "GR",
          latitude: 39.074208,
          longitude: 21.824312,
          name: "Greece",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/gr.svg",
          id: "b72543f3-d21c-4016-a22f-7cf5de67cdfd"
        },
        {
          code: "GS",
          latitude: -54.429579,
          longitude: -36.587909,
          name: "South Georgia and the South Sandwich Islands",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/gs.svg",
          id: "e7fbf264-dc29-401a-a837-92f68539bcaa"
        },
        {
          code: "GT",
          latitude: 15.783471,
          longitude: -90.230759,
          name: "Guatemala",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/gt.svg",
          id: "22e8de05-9348-472b-bf2e-b06ae97de810"
        },
        {
          code: "GU",
          latitude: 13.444304,
          longitude: 144.793731,
          name: "Guam",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/gu.svg",
          id: "65d31f61-0656-47f7-84d0-11b08018053f"
        },
        {
          code: "GW",
          latitude: 11.803749,
          longitude: -15.180413,
          name: "Guinea-Bissau",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/gw.svg",
          id: "c93a0cf1-203f-405c-a932-a44a8d0842f1"
        },
        {
          code: "GY",
          latitude: 4.860416,
          longitude: -58.93018,
          name: "Guyana",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/gy.svg",
          id: "cba20c54-25eb-4318-aa10-4e6b643b8c26"
        },
        {
          code: "GZ",
          latitude: 31.354676,
          longitude: 34.308825,
          name: "Gaza Strip",
          regions: {
            "data": []
          },
          flag_path: "./assets/flags/gz.svg",
          id: "5ac67f0a-361d-4a4a-a47c-73907385a79f"
        },
        {
          code: "HK",
          latitude: 22.396428,
          longitude: 114.109497,
          name: "Hong Kong",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/hk.svg",
          id: "e0d875c4-86f9-4bd6-9703-1555c89d55d2"
        },
        {
          code: "HM",
          latitude: -53.08181,
          longitude: 73.504158,
          name: "Heard Island and McDonald Islands",
          regions: {
            "data": [
              "Oceania",
              "Australia and New Zealand"
            ]
          },
          flag_path: "./assets/flags/hm.svg",
          id: "c7b5e4ff-edf1-49d8-943d-c194e2149c8a"
        },
        {
          code: "HN",
          latitude: 15.199999,
          longitude: -86.241905,
          name: "Honduras",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/hn.svg",
          id: "c3a202f4-ab93-4bcf-a8f8-839a0e1cdb7a"
        },
        {
          code: "HR",
          latitude: 45.1,
          longitude: 15.2,
          name: "Croatia",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/hr.svg",
          id: "ae1c2649-6254-4b5e-bdb6-540f9e2c1e6e"
        },
        {
          code: "HT",
          latitude: 18.971187,
          longitude: -72.285215,
          name: "Haiti",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/ht.svg",
          id: "87530494-307f-433d-b3d3-bd5e0f2059cb"
        },
        {
          code: "HU",
          latitude: 47.162494,
          longitude: 19.503304,
          name: "Hungary",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/hu.svg",
          id: "d0b82460-246d-4cc9-a871-500759d3ccfa"
        },
        {
          code: "ID",
          latitude: -0.789275,
          longitude: 113.921327,
          name: "Indonesia",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/id.svg",
          id: "21c7c0e1-fd62-4eb5-ba65-880a54879a5c"
        },
        {
          code: "IE",
          latitude: 53.41291,
          longitude: -8.24389,
          name: "Ireland",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/ie.svg",
          id: "7ef995bb-8c0e-4722-8629-6bb2371e6ec6"
        },
        {
          code: "IL",
          latitude: 31.046051,
          longitude: 34.851612,
          name: "Israel",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/il.svg",
          id: "1b2bfcd4-c34d-4f55-b9bf-a395c6ac469e"
        },
        {
          code: "IM",
          latitude: 54.236107,
          longitude: -4.548056,
          name: "Isle of Man",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/im.svg",
          id: "33a7cf8d-327b-4c25-8022-232018b16de9"
        },
        {
          code: "IN",
          latitude: 20.593684,
          longitude: 78.96288,
          name: "India",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/in.svg",
          id: "24e7c8bb-3d09-4341-a311-c67949af6573"
        },
        {
          code: "IO",
          latitude: -6.343194,
          longitude: 71.876519,
          name: "British Indian Ocean Territory",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/io.svg",
          id: "3b1d7fe3-5e78-4c77-b611-a23b7eafa45c"
        },
        {
          code: "IQ",
          latitude: 33.223191,
          longitude: 43.679291,
          name: "Iraq",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/iq.svg",
          id: "53cc4381-ad24-4dc4-b2f2-5e887e88affa"
        },
        {
          code: "IR",
          latitude: 32.427908,
          longitude: 53.688046,
          name: "Iran",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/ir.svg",
          id: "b2276633-0a74-4702-b56b-2f14645944a0"
        },
        {
          code: "IS",
          latitude: 64.963051,
          longitude: -19.020835,
          name: "Iceland",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/is.svg",
          id: "46c36101-6d35-452e-80dd-e0786149c069"
        },
        {
          code: "IT",
          latitude: 41.87194,
          longitude: 12.56738,
          name: "Italy",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/it.svg",
          id: "ac496171-06d3-4bbd-87d3-56696314ef08"
        },
        {
          code: "JE",
          latitude: 49.214439,
          longitude: -2.13125,
          name: "Jersey",
          regions: {
            "data": [
              "Europe",
              "Northern Europe",
              "Channel Islands"
            ]
          },
          flag_path: "./assets/flags/je.svg",
          id: "62451b68-a3a7-4de5-990b-3ad0990685db"
        },
        {
          code: "JM",
          latitude: 18.109581,
          longitude: -77.297508,
          name: "Jamaica",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/jm.svg",
          id: "ebf559ed-15fa-4eae-a29d-0116f59e373e"
        },
        {
          code: "JO",
          latitude: 30.585164,
          longitude: 36.238414,
          name: "Jordan",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/jo.svg",
          id: "6a707e3d-512d-41cd-823d-0871d972f0b9"
        },
        {
          code: "JP",
          latitude: 36.204824,
          longitude: 138.252924,
          name: "Japan",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/jp.svg",
          id: "48f8f97e-9fa5-4c03-9b5c-29192bffdf07"
        },
        {
          code: "KE",
          latitude: -0.023559,
          longitude: 37.906193,
          name: "Kenya",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/ke.svg",
          id: "b1ade56f-3686-4240-a7e5-051a7600bf0d"
        },
        {
          code: "KG",
          latitude: 41.20438,
          longitude: 74.766098,
          name: "Kyrgyzstan",
          regions: {
            "data": [
              "Asia",
              "Central Asia"
            ]
          },
          flag_path: "./assets/flags/kg.svg",
          id: "100cf36c-a95c-465b-be4b-77ff9a474730"
        },
        {
          code: "KH",
          latitude: 12.565679,
          longitude: 104.990963,
          name: "Cambodia",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/kh.svg",
          id: "804e6800-f61a-4c49-8248-2e826af5acf3"
        },
        {
          code: "KI",
          latitude: -3.370417,
          longitude: -168.734039,
          name: "Kiribati",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/ki.svg",
          id: "2549ab6e-ec6d-4c6c-8121-c514bc33c9bd"
        },
        {
          code: "KM",
          latitude: -11.875001,
          longitude: 43.872219,
          name: "Comoros",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/km.svg",
          id: "9fc8a817-3c46-4eea-9bf4-04b9b2232736"
        },
        {
          code: "KN",
          latitude: 17.357822,
          longitude: -62.782998,
          name: "Saint Kitts and Nevis",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/kn.svg",
          id: "99a37c9d-263f-45dd-a1a9-28353072d490"
        },
        {
          code: "KP",
          latitude: 40.339852,
          longitude: 127.510093,
          name: "North Korea",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/kp.svg",
          id: "1b008fe0-eac2-4c90-9b50-d2ba4e600a72"
        },
        {
          code: "KR",
          latitude: 35.907757,
          longitude: 127.766922,
          name: "South Korea",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/kr.svg",
          id: "a29097a5-9bd7-49ab-8c9f-c480b14533bb"
        },
        {
          code: "KW",
          latitude: 29.31166,
          longitude: 47.481766,
          name: "Kuwait",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/kw.svg",
          id: "7513ae0f-c888-4e0d-ad9c-8f791af5adcb"
        },
        {
          code: "KY",
          latitude: 19.513469,
          longitude: -80.566956,
          name: "Cayman Islands",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/ky.svg",
          id: "6965f903-df5d-4113-a318-516a06134068"
        },
        {
          code: "KZ",
          latitude: 48.019573,
          longitude: 66.923684,
          name: "Kazakhstan",
          regions: {
            "data": [
              "Asia",
              "Central Asia"
            ]
          },
          flag_path: "./assets/flags/kz.svg",
          id: "ec645b37-0b9d-4195-a5d2-2ea665e56dc7"
        },
        {
          code: "LA",
          latitude: 19.85627,
          longitude: 102.495496,
          name: "Laos",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/la.svg",
          id: "3934fb56-ad20-40cb-ae96-46f2530552d5"
        },
        {
          code: "LB",
          latitude: 33.854721,
          longitude: 35.862285,
          name: "Lebanon",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/lb.svg",
          id: "65f89f07-191b-44a2-88a8-b7882f7578f4"
        },
        {
          code: "LC",
          latitude: 13.909444,
          longitude: -60.978893,
          name: "Saint Lucia",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/lc.svg",
          id: "703b9c11-36fb-4c15-9b05-f2abf90cf1da"
        },
        {
          code: "LI",
          latitude: 47.166,
          longitude: 9.555373,
          name: "Liechtenstein",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/li.svg",
          id: "40aad316-650d-43fd-9e32-c05d74a5ebf2"
        },
        {
          code: "LK",
          latitude: 7.873054,
          longitude: 80.771797,
          name: "Sri Lanka",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/lk.svg",
          id: "71698501-289e-44c8-b6f9-2659b0753023"
        },
        {
          code: "LR",
          latitude: 6.428055,
          longitude: -9.429499,
          name: "Liberia",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/lr.svg",
          id: "50f3ea86-b443-48a6-801a-d50a7809877a"
        },
        {
          code: "LS",
          latitude: -29.609988,
          longitude: 28.233608,
          name: "Lesotho",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Southern Africa"
            ]
          },
          flag_path: "./assets/flags/ls.svg",
          id: "823fd477-c52a-477e-87d2-874ec2b72bfd"
        },
        {
          code: "LT",
          latitude: 55.169438,
          longitude: 23.881275,
          name: "Lithuania",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/lt.svg",
          id: "31f5f6f6-1a31-4d6f-b81b-ecfbd9fd478b"
        },
        {
          code: "LU",
          latitude: 49.815273,
          longitude: 6.129583,
          name: "Luxembourg",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/lu.svg",
          id: "b3ccd3a1-8ebf-4556-9250-4f6485e788a1"
        },
        {
          code: "LV",
          latitude: 56.879635,
          longitude: 24.603189,
          name: "Latvia",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/lv.svg",
          id: "e54cbdb3-1626-4096-8202-491314ad8371"
        },
        {
          code: "LY",
          latitude: 26.3351,
          longitude: 17.228331,
          name: "Libya",
          regions: {
            "data": [
              "Africa",
              "Northern Africa"
            ]
          },
          flag_path: "./assets/flags/ly.svg",
          id: "aa41f260-87d5-4f1d-8f7b-eb53f80257a1"
        },
        {
          code: "MA",
          latitude: 31.791702,
          longitude: -7.09262,
          name: "Morocco",
          regions: {
            "data": [
              "Africa",
              "Northern Africa"
            ]
          },
          flag_path: "./assets/flags/ma.svg",
          id: "69c39fa6-b537-4e5d-a812-1724955ce189"
        },
        {
          code: "MC",
          latitude: 43.750298,
          longitude: 7.412841,
          name: "Monaco",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/mc.svg",
          id: "43b949ba-2e3c-4c44-b943-ba9eb8742bfd"
        },
        {
          code: "MD",
          latitude: 47.411631,
          longitude: 28.369885,
          name: "Moldova",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/md.svg",
          id: "6e635960-4a7a-4c4f-826a-ed6ce924d46f"
        },
        {
          code: "ME",
          latitude: 42.708678,
          longitude: 19.37439,
          name: "Montenegro",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/me.svg",
          id: "d95502f2-678c-489b-b854-fb531c6e3fdd"
        },
        {
          code: "MG",
          latitude: -18.766947,
          longitude: 46.869107,
          name: "Madagascar",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/mg.svg",
          id: "3592c68b-b4d4-498d-9ac7-57cc2f864ffb"
        },
        {
          code: "MH",
          latitude: 7.131474,
          longitude: 171.184478,
          name: "Marshall Islands",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/mh.svg",
          id: "53eb8784-fde4-4fc4-9a56-1bd859788103"
        },
        {
          code: "MK",
          latitude: 41.608635,
          longitude: 21.745275,
          name: "Macedonia [FYROM]",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/mk.svg",
          id: "967d772c-44d3-4559-b96d-af9464c1701e"
        },
        {
          code: "ML",
          latitude: 17.570692,
          longitude: -3.996166,
          name: "Mali",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/ml.svg",
          id: "6555bdc0-4b20-4cee-bcee-d8695e88a502"
        },
        {
          code: "MM",
          latitude: 21.913965,
          longitude: 95.956223,
          name: "Myanmar [Burma]",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/mm.svg",
          id: "a854d34a-62f9-43b1-9103-2ba6fab73c61"
        },
        {
          code: "MN",
          latitude: 46.862496,
          longitude: 103.846656,
          name: "Mongolia",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/mn.svg",
          id: "465dfcb2-3052-4761-a861-cd9d06846071"
        },
        {
          code: "MO",
          latitude: 22.198745,
          longitude: 113.543873,
          name: "Macau",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/mo.svg",
          id: "c39e498a-5905-4ce4-988c-09cf5556fa26"
        },
        {
          code: "MP",
          latitude: 17.33083,
          longitude: 145.38469,
          name: "Northern Mariana Islands",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/mp.svg",
          id: "b06b4708-768c-4a39-8013-296c07b4318f"
        },
        {
          code: "MQ",
          latitude: 14.641528,
          longitude: -61.024174,
          name: "Martinique",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/mq.svg",
          id: "fc2239c6-f544-4747-b5fb-77b9e2e9b615"
        },
        {
          code: "MR",
          latitude: 21.00789,
          longitude: -10.940835,
          name: "Mauritania",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/mr.svg",
          id: "bdad8705-23dd-40ce-9ab3-e522aa7cebb0"
        },
        {
          code: "MS",
          latitude: 16.742498,
          longitude: -62.187366,
          name: "Montserrat",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/ms.svg",
          id: "d26edce2-358d-42b6-a2a8-3df36503e06c"
        },
        {
          code: "MT",
          latitude: 35.937496,
          longitude: 14.375416,
          name: "Malta",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/mt.svg",
          id: "d50ea107-ecf6-40d4-8519-02407c9a5740"
        },
        {
          code: "MU",
          latitude: -20.348404,
          longitude: 57.552152,
          name: "Mauritius",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/mu.svg",
          id: "0cbd77ab-7892-4b37-94f3-80f19f98ae7e"
        },
        {
          code: "MV",
          latitude: 3.202778,
          longitude: 73.22068,
          name: "Maldives",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/mv.svg",
          id: "115daf45-b5e8-4111-a807-b6cbd3bc4bde"
        },
        {
          code: "MW",
          latitude: -13.254308,
          longitude: 34.301525,
          name: "Malawi",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/mw.svg",
          id: "13f3bb0f-880a-472b-93e4-55670b6b9ec7"
        },
        {
          code: "MX",
          latitude: 23.634501,
          longitude: -102.552784,
          name: "Mexico",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/mx.svg",
          id: "57aee729-670e-47f4-8422-cb260932ab06"
        },
        {
          code: "MY",
          latitude: 4.210484,
          longitude: 101.975766,
          name: "Malaysia",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/my.svg",
          id: "fd551ca5-48c8-4543-8c63-7c94e56226f4"
        },
        {
          code: "MZ",
          latitude: -18.665695,
          longitude: 35.529562,
          name: "Mozambique",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/mz.svg",
          id: "3ea5ee6e-813d-424b-8aa8-57dd47898b97"
        },
        {
          code: "NA",
          latitude: -22.95764,
          longitude: 18.49041,
          name: "Namibia",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Southern Africa"
            ]
          },
          flag_path: "./assets/flags/na.svg",
          id: "976fe2c9-2c6a-428e-9b43-5f4ef4329695"
        },
        {
          code: "NC",
          latitude: -20.904305,
          longitude: 165.618042,
          name: "New Caledonia",
          regions: {
            "data": [
              "Oceania",
              "Melanesia"
            ]
          },
          flag_path: "./assets/flags/nc.svg",
          id: "a557a803-ee74-48bc-941c-04d5891b0f71"
        },
        {
          code: "NE",
          latitude: 17.607789,
          longitude: 8.081666,
          name: "Niger",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/ne.svg",
          id: "0b014c64-e88a-4636-9e61-1f005af843ba"
        },
        {
          code: "NF",
          latitude: -29.040835,
          longitude: 167.954712,
          name: "Norfolk Island",
          regions: {
            "data": [
              "Oceania",
              "Australia and New Zealand"
            ]
          },
          flag_path: "./assets/flags/nf.svg",
          id: "b161bf7c-25f0-43f8-9f08-ede1e030198b"
        },
        {
          code: "NG",
          latitude: 9.081999,
          longitude: 8.675277,
          name: "Nigeria",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/ng.svg",
          id: "61d97cb4-1f36-48b8-946b-4e1bb6225089"
        },
        {
          code: "NI",
          latitude: 12.865416,
          longitude: -85.207229,
          name: "Nicaragua",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/ni.svg",
          id: "949cad6a-4627-4546-92ae-048d0b4d0cbb"
        },
        {
          code: "NL",
          latitude: 52.132633,
          longitude: 5.291266,
          name: "Netherlands",
          regions: {
            "data": [
              "Europe",
              "Western Europe"
            ]
          },
          flag_path: "./assets/flags/nl.svg",
          id: "52ab180e-aee7-4f96-8017-ac843252ad5d"
        },
        {
          code: "NO",
          latitude: 60.472024,
          longitude: 8.468946,
          name: "Norway",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/no.svg",
          id: "a451e237-1b51-4290-aa7e-163ce991fc31"
        },
        {
          code: "NP",
          latitude: 28.394857,
          longitude: 84.124008,
          name: "Nepal",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/np.svg",
          id: "c0f71b22-7760-4c8b-979f-9f6b894b1771"
        },
        {
          code: "NR",
          latitude: -0.522778,
          longitude: 166.931503,
          name: "Nauru",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/nr.svg",
          id: "f8bd8b2d-a315-45c7-a922-d7d4b6d837a3"
        },
        {
          code: "NU",
          latitude: -19.054445,
          longitude: -169.867233,
          name: "Niue",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/nu.svg",
          id: "11480959-c6a2-41e7-b923-ec9fcae1f90c"
        },
        {
          code: "NZ",
          latitude: -40.900557,
          longitude: 174.885971,
          name: "New Zealand",
          regions: {
            "data": [
              "Oceania",
              "Australia and New Zealand"
            ]
          },
          flag_path: "./assets/flags/nz.svg",
          id: "98263e43-10ed-43b9-9109-7f87af16d28e"
        },
        {
          code: "OM",
          latitude: 21.512583,
          longitude: 55.923255,
          name: "Oman",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/om.svg",
          id: "c9f81b9c-8112-4147-96d8-114c1895e121"
        },
        {
          code: "PA",
          latitude: 8.537981,
          longitude: -80.782127,
          name: "Panama",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/pa.svg",
          id: "a8596751-2d4d-408c-84bc-691636082d3c"
        },
        {
          code: "PE",
          latitude: -9.189967,
          longitude: -75.015152,
          name: "Peru",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/pe.svg",
          id: "c2448713-8fc2-4029-b897-a702c0b32bea"
        },
        {
          code: "PF",
          latitude: -17.679742,
          longitude: -149.406843,
          name: "French Polynesia",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/pf.svg",
          id: "9cc3e4b0-f50a-497f-8e13-fd62871a2356"
        },
        {
          code: "PG",
          latitude: -6.314993,
          longitude: 143.95555,
          name: "Papua New Guinea",
          regions: {
            "data": [
              "Oceania",
              "Melanesia"
            ]
          },
          flag_path: "./assets/flags/pg.svg",
          id: "571292c8-5097-4898-b6c1-f26dd24facdc"
        },
        {
          code: "PH",
          latitude: 12.879721,
          longitude: 121.774017,
          name: "Philippines",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/ph.svg",
          id: "98880fa8-dfd1-468d-b855-ca5f08c78dff"
        },
        {
          code: "PK",
          latitude: 30.375321,
          longitude: 69.345116,
          name: "Pakistan",
          regions: {
            "data": [
              "Asia",
              "Southern Asia"
            ]
          },
          flag_path: "./assets/flags/pk.svg",
          id: "b6b8feb9-107f-4409-af6d-873637588783"
        },
        {
          code: "PL",
          latitude: 51.919438,
          longitude: 19.145136,
          name: "Poland",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/pl.svg",
          id: "f8c1d465-fada-4d24-a312-fa66b99668fe"
        },
        {
          code: "PM",
          latitude: 46.941936,
          longitude: -56.27111,
          name: "Saint Pierre and Miquelon",
          regions: {
            "data": [
              "Americas",
              "Northern America"
            ]
          },
          flag_path: "./assets/flags/pm.svg",
          id: "e8ba84ff-5ae2-491e-be9a-2da09b4332ba"
        },
        {
          code: "PN",
          latitude: -24.703615,
          longitude: -127.439308,
          name: "Pitcairn Islands",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/pn.svg",
          id: "cdc202db-faaf-466b-9baa-e34d008e84b7"
        },
        {
          code: "PR",
          latitude: 18.220833,
          longitude: -66.590149,
          name: "Puerto Rico",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/pr.svg",
          id: "89892ee7-2957-4f89-9c8c-b1d4f3dee1c0"
        },
        {
          code: "PS",
          latitude: 31.952162,
          longitude: 35.233154,
          name: "Palestinian Territories",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/ps.svg",
          id: "86ea6364-80e5-4c4c-bcac-ce7f94791993"
        },
        {
          code: "PT",
          latitude: 39.399872,
          longitude: -8.224454,
          name: "Portugal",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/pt.svg",
          id: "1b5ecc4d-88fe-4857-80b0-6b45ede2a312"
        },
        {
          code: "PW",
          latitude: 7.51498,
          longitude: 134.58252,
          name: "Palau",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/pw.svg",
          id: "a61c2ee1-7a1b-47ce-8b7d-8f1fb53466ac"
        },
        {
          code: "PY",
          latitude: -23.442503,
          longitude: -58.443832,
          name: "Paraguay",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/py.svg",
          id: "4f4b8739-d7b3-4709-b0b2-8deb46aa7cf0"
        },
        {
          code: "QA",
          latitude: 25.354826,
          longitude: 51.183884,
          name: "Qatar",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/qa.svg",
          id: "07e965b2-598f-4669-b264-e202153b522c"
        },
        {
          code: "RE",
          latitude: -21.115141,
          longitude: 55.536384,
          name: "Réunion",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/re.svg",
          id: "48ebf2bc-aa81-43cb-aec5-9f4d52cabea9"
        },
        {
          code: "RO",
          latitude: 45.943161,
          longitude: 24.96676,
          name: "Romania",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/ro.svg",
          id: "95182b52-28b0-42d2-9dee-13b68be67235"
        },
        {
          code: "RS",
          latitude: 44.016521,
          longitude: 21.005859,
          name: "Serbia",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/rs.svg",
          id: "332eca83-2de2-47da-a9ec-c38d20736f67"
        },
        {
          code: "RU",
          latitude: 61.52401,
          longitude: 105.318756,
          name: "Russia",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/ru.svg",
          id: "39845b22-6dae-4d20-97aa-64a395ad40a7"
        },
        {
          code: "RW",
          latitude: -1.940278,
          longitude: 29.873888,
          name: "Rwanda",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/rw.svg",
          id: "8d351cf6-481f-4499-a288-86b9e7da227f"
        },
        {
          code: "SA",
          latitude: 23.885942,
          longitude: 45.079162,
          name: "Saudi Arabia",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/sa.svg",
          id: "9c27f8d9-d1a3-4df9-8cca-5affeccbe584"
        },
        {
          code: "SB",
          latitude: -9.64571,
          longitude: 160.156194,
          name: "Solomon Islands",
          regions: {
            "data": [
              "Oceania",
              "Melanesia"
            ]
          },
          flag_path: "./assets/flags/sb.svg",
          id: "fa1cade1-a3c4-4e71-96e9-bb893324f91a"
        },
        {
          code: "SC",
          latitude: -4.679574,
          longitude: 55.491977,
          name: "Seychelles",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/sc.svg",
          id: "c4bee583-ae55-4673-95cd-8d299a5e8ece"
        },
        {
          code: "SD",
          latitude: 12.862807,
          longitude: 30.217636,
          name: "Sudan",
          regions: {
            "data": [
              "Africa",
              "Northern Africa"
            ]
          },
          flag_path: "./assets/flags/sd.svg",
          id: "9f7df5f4-99e9-4c67-a77a-0f01006b8cf5"
        },
        {
          code: "SE",
          latitude: 60.128161,
          longitude: 18.643501,
          name: "Sweden",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/se.svg",
          id: "49f57bed-1a9b-47da-b618-edc423796c35"
        },
        {
          code: "SG",
          latitude: 1.352083,
          longitude: 103.819836,
          name: "Singapore",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/sg.svg",
          id: "6e6170c6-fdd9-4ad3-aa61-2a54df68a9ab"
        },
        {
          code: "SH",
          latitude: -24.143474,
          longitude: -10.030696,
          name: "Saint Helena",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/sh.svg",
          id: "f7ca816f-9c50-43ce-b036-1f5464ed8d0e"
        },
        {
          code: "SI",
          latitude: 46.151241,
          longitude: 14.995463,
          name: "Slovenia",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/si.svg",
          id: "947aa99d-ec52-41f1-8f71-890794453abd"
        },
        {
          code: "SJ",
          latitude: 77.553604,
          longitude: 23.670272,
          name: "Svalbard and Jan Mayen",
          regions: {
            "data": [
              "Europe",
              "Northern Europe"
            ]
          },
          flag_path: "./assets/flags/sj.svg",
          id: "7aa5b53a-bffa-4bc3-bcdc-22c6f38e7381"
        },
        {
          code: "SK",
          latitude: 48.669026,
          longitude: 19.699024,
          name: "Slovakia",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/sk.svg",
          id: "e72aefda-3698-4b48-92b8-65d3db2fb8da"
        },
        {
          code: "SL",
          latitude: 8.460555,
          longitude: -11.779889,
          name: "Sierra Leone",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/sl.svg",
          id: "c1f6b656-fd54-4429-80c9-f597976a0a79"
        },
        {
          code: "SM",
          latitude: 43.94236,
          longitude: 12.457777,
          name: "San Marino",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/sm.svg",
          id: "8b65d1b5-ab39-49a2-a8a6-7e9105e1cc84"
        },
        {
          code: "SN",
          latitude: 14.497401,
          longitude: -14.452362,
          name: "Senegal",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/sn.svg",
          id: "74274f2b-04a6-4e09-b7e3-b0bcdc2e712a"
        },
        {
          code: "SO",
          latitude: 5.152149,
          longitude: 46.199616,
          name: "Somalia",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/so.svg",
          id: "8c636455-08c5-4be1-a00e-dd4334e1089a"
        },
        {
          code: "SR",
          latitude: 3.919305,
          longitude: -56.027783,
          name: "Suriname",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/sr.svg",
          id: "93b0b905-f0bc-4a54-8641-19c4b55e4e81"
        },
        {
          code: "ST",
          latitude: 0.18636,
          longitude: 6.613081,
          name: "São Tomé and Príncipe",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/st.svg",
          id: "95c41714-c8e4-48e7-b240-29805a4874f8"
        },
        {
          code: "SV",
          latitude: 13.794185,
          longitude: -88.89653,
          name: "El Salvador",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Central America"
            ]
          },
          flag_path: "./assets/flags/sv.svg",
          id: "2f25e932-5638-402a-9075-8d5657025344"
        },
        {
          code: "SY",
          latitude: 34.802075,
          longitude: 38.996815,
          name: "Syria",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/sy.svg",
          id: "7aadcdbc-ed6e-4ab9-818a-d6fb5172a12a"
        },
        {
          code: "SZ",
          latitude: -26.522503,
          longitude: 31.465866,
          name: "Swaziland",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Southern Africa"
            ]
          },
          flag_path: "./assets/flags/sz.svg",
          id: "3b1648dc-4b4f-4ad4-879b-96c409bb051c"
        },
        {
          code: "TC",
          latitude: 21.694025,
          longitude: -71.797928,
          name: "Turks and Caicos Islands",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/tc.svg",
          id: "f975a51f-558d-4ac5-b9f4-b6804067cbad"
        },
        {
          code: "TD",
          latitude: 15.454166,
          longitude: 18.732207,
          name: "Chad",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Middle Africa"
            ]
          },
          flag_path: "./assets/flags/td.svg",
          id: "6ce5d2a3-4dd2-4bab-a89a-75e092918027"
        },
        {
          code: "TF",
          latitude: -49.280366,
          longitude: 69.348557,
          name: "French Southern Territories",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/tf.svg",
          id: "bb3cad3b-d6ae-4f73-9fc9-80b09a7b56f0"
        },
        {
          code: "TG",
          latitude: 8.619543,
          longitude: 0.824782,
          name: "Togo",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Western Africa"
            ]
          },
          flag_path: "./assets/flags/tg.svg",
          id: "75f226c4-86c8-42b8-8db4-3afdf4f8d795"
        },
        {
          code: "TH",
          latitude: 15.870032,
          longitude: 100.992541,
          name: "Thailand",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/th.svg",
          id: "fdf1f822-394b-4b08-b308-48fb7ad8604e"
        },
        {
          code: "TJ",
          latitude: 38.861034,
          longitude: 71.276093,
          name: "Tajikistan",
          regions: {
            "data": [
              "Asia",
              "Central Asia"
            ]
          },
          flag_path: "./assets/flags/tj.svg",
          id: "0d060147-0cd9-4add-9a5d-1f22cdc40ef3"
        },
        {
          code: "TK",
          latitude: -8.967363,
          longitude: -171.855881,
          name: "Tokelau",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/tk.svg",
          id: "a76b7d52-fbea-4fdd-bae6-16fa0e3867de"
        },
        {
          code: "TL",
          latitude: -8.874217,
          longitude: 125.727539,
          name: "Timor-Leste",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/tl.svg",
          id: "bfc46986-270f-4056-a482-f3af2b0d337f"
        },
        {
          code: "TM",
          latitude: 38.969719,
          longitude: 59.556278,
          name: "Turkmenistan",
          regions: {
            "data": [
              "Asia",
              "Central Asia"
            ]
          },
          flag_path: "./assets/flags/tm.svg",
          id: "66db18f9-e391-4515-874e-a347602475b6"
        },
        {
          code: "TN",
          latitude: 33.886917,
          longitude: 9.537499,
          name: "Tunisia",
          regions: {
            "data": [
              "Africa",
              "Northern Africa"
            ]
          },
          flag_path: "./assets/flags/tn.svg",
          id: "3cf7b3e9-84dd-464c-93b0-8ac6f71c3a53"
        },
        {
          code: "TO",
          latitude: -21.178986,
          longitude: -175.198242,
          name: "Tonga",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/to.svg",
          id: "97fbc7bc-a923-4143-b6e4-3fee07911cce"
        },
        {
          code: "TR",
          latitude: 38.963745,
          longitude: 35.243322,
          name: "Turkey",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/tr.svg",
          id: "9737f2c1-60b9-48a3-acc9-454d40e6869a"
        },
        {
          code: "TT",
          latitude: 10.691803,
          longitude: -61.222503,
          name: "Trinidad and Tobago",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/tt.svg",
          id: "5d0eb215-a281-47d3-8dab-0cc77c766363"
        },
        {
          code: "TV",
          latitude: -7.109535,
          longitude: 177.64933,
          name: "Tuvalu",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/tv.svg",
          id: "07ac9cd5-c5fb-447f-a8d8-e19772b4d4cf"
        },
        {
          code: "TW",
          latitude: 23.69781,
          longitude: 120.960515,
          name: "Taiwan",
          regions: {
            "data": [
              "Asia",
              "Eastern Asia"
            ]
          },
          flag_path: "./assets/flags/tw.svg",
          id: "166433b9-f4ae-40aa-9832-0765a02feb3e"
        },
        {
          code: "TZ",
          latitude: -6.369028,
          longitude: 34.888822,
          name: "Tanzania",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/tz.svg",
          id: "05e86e1e-54f3-455b-8637-34f547f04a80"
        },
        {
          code: "UA",
          latitude: 48.379433,
          longitude: 31.16558,
          name: "Ukraine",
          regions: {
            "data": [
              "Europe",
              "Eastern Europe"
            ]
          },
          flag_path: "./assets/flags/ua.svg",
          id: "efe4c9d8-ac64-4597-b60e-750f2d017cdb"
        },
        {
          code: "UG",
          latitude: 1.373333,
          longitude: 32.290275,
          name: "Uganda",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/ug.svg",
          id: "63d273f6-9fb6-4f80-8ba3-0f97d0d9ae90"
        },
        {
          code: "UM",
          latitude: 0,
          longitude: 0,
          name: "U.S. Minor Outlying Islands",
          regions: {
            "data": [
              "Oceania",
              "Micronesia"
            ]
          },
          flag_path: "./assets/flags/um.svg",
          id: "24b69d06-c1de-4cc9-a335-f6d6abbcc184"
        },
        {
          code: "US",
          latitude: 37.09024,
          longitude: -95.712891,
          name: "United States",
          regions: {
            "data": [
              "Americas",
              "Northern America"
            ]
          },
          flag_path: "./assets/flags/us.svg",
          id: "da677820-1100-4859-b5cb-75550a4fee09"
        },
        {
          code: "UY",
          latitude: -32.522779,
          longitude: -55.765835,
          name: "Uruguay",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/uy.svg",
          id: "31ad8015-4443-4cc0-a17f-ed580873d6b1"
        },
        {
          code: "UZ",
          latitude: 41.377491,
          longitude: 64.585262,
          name: "Uzbekistan",
          regions: {
            "data": [
              "Asia",
              "Central Asia"
            ]
          },
          flag_path: "./assets/flags/uz.svg",
          id: "8ba320a1-be06-4472-ac82-7d1b4ec6384b"
        },
        {
          code: "VA",
          latitude: 41.902916,
          longitude: 12.453389,
          name: "Vatican City",
          regions: {
            "data": [
              "Europe",
              "Southern Europe"
            ]
          },
          flag_path: "./assets/flags/va.svg",
          id: "9e8fba74-69d1-40cd-bce8-b3b3b279f010"
        },
        {
          code: "VC",
          latitude: 12.984305,
          longitude: -61.287228,
          name: "Saint Vincent and the Grenadines",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/vc.svg",
          id: "6474b9ce-d3bf-4d96-b682-4ebb3c9b82e4"
        },
        {
          code: "VE",
          latitude: 6.42375,
          longitude: -66.58973,
          name: "Venezuela",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "South America"
            ]
          },
          flag_path: "./assets/flags/ve.svg",
          id: "7a80e899-8218-4b62-9f36-263e497bdf02"
        },
        {
          code: "VG",
          latitude: 18.420695,
          longitude: -64.639968,
          name: "British Virgin Islands",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/vg.svg",
          id: "26c1c6b7-1005-4281-8d58-63fa680f5be0"
        },
        {
          code: "VI",
          latitude: 18.335765,
          longitude: -64.896335,
          name: "U.S. Virgin Islands",
          regions: {
            "data": [
              "Americas",
              "Latin America and the Caribbean",
              "Caribbean"
            ]
          },
          flag_path: "./assets/flags/vi.svg",
          id: "add0cf52-2da5-40a5-8da2-27001d15dee8"
        },
        {
          code: "VN",
          latitude: 14.058324,
          longitude: 108.277199,
          name: "Vietnam",
          regions: {
            "data": [
              "Asia",
              "South-eastern Asia"
            ]
          },
          flag_path: "./assets/flags/vn.svg",
          id: "8c23fef3-7f04-45d6-a8f8-de4eeda1f9c6"
        },
        {
          code: "VU",
          latitude: -15.376706,
          longitude: 166.959158,
          name: "Vanuatu",
          regions: {
            "data": [
              "Oceania",
              "Melanesia"
            ]
          },
          flag_path: "./assets/flags/vu.svg",
          id: "34c665ea-29aa-4673-8f44-5d4047027535"
        },
        {
          code: "WF",
          latitude: -13.768752,
          longitude: -177.156097,
          name: "Wallis and Futuna",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/wf.svg",
          id: "fb7afe8b-b661-45ee-b736-f000ca863443"
        },
        {
          code: "WS",
          latitude: -13.759029,
          longitude: -172.104629,
          name: "Samoa",
          regions: {
            "data": [
              "Oceania",
              "Polynesia"
            ]
          },
          flag_path: "./assets/flags/ws.svg",
          id: "4b4b38d3-1864-487f-8cd0-6cbe54a3f46e"
        },
        {
          code: "XK",
          latitude: 42.602636,
          longitude: 20.902977,
          name: "Kosovo",
          regions: {
            "data": []
          },
          flag_path: "./assets/flags/xk.svg",
          id: "73d35413-6237-4696-bc96-4d22dd889bd2"
        },
        {
          code: "YE",
          latitude: 15.552727,
          longitude: 48.516388,
          name: "Yemen",
          regions: {
            "data": [
              "Asia",
              "Western Asia"
            ]
          },
          flag_path: "./assets/flags/ye.svg",
          id: "04ebfa6a-6a39-40d4-93bd-633241ed2244"
        },
        {
          code: "YT",
          latitude: -12.8275,
          longitude: 45.166244,
          name: "Mayotte",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/yt.svg",
          id: "2b998668-cbe3-4d01-97f2-93fb39a22e80"
        },
        {
          code: "ZA",
          latitude: -30.559482,
          longitude: 22.937506,
          name: "South Africa",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Southern Africa"
            ]
          },
          flag_path: "./assets/flags/za.svg",
          id: "14d1a4b9-9e68-43a3-960f-ea40659605ea"
        },
        {
          code: "ZM",
          latitude: -13.133897,
          longitude: 27.849332,
          name: "Zambia",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/zm.svg",
          id: "40ef7668-fe92-4af7-8946-4d1d96361597"
        },
        {
          code: "ZW",
          latitude: -19.015438,
          longitude: 29.154857,
          name: "Zimbabwe",
          regions: {
            "data": [
              "Africa",
              "Sub-Saharan Africa",
              "Eastern Africa"
            ]
          },
          flag_path: "./assets/flags/zw.svg",
          id: "34e6d8a2-eb38-4d45-9ea6-48f688429eca"
        }
      ]);
    });
};
