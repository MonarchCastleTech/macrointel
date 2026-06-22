/**
 * Country Macro Intelligence — dataset
 * Generated: 2026-06-22T07:13:28.077Z
 * Sources: World Bank (GDP & trade totals) + UN Comtrade (bilateral & sector trade)
 */

window.countryMacroData = {
  "meta": {
    "generatedAt": "2026-06-22T07:13:28.077Z",
    "sources": {
      "gdp": "World Bank API (NY.GDP.MKTP.CD, current USD)",
      "tradeTotals": "World Bank API (NE.EXP.GNFS.CD, NE.IMP.GNFS.CD)",
      "bilateralLinks": "UN Comtrade (HS TOTAL goods exports, annual)",
      "sectors": "UN Comtrade (HS chapters, goods exports)"
    },
    "snapshotDate": "2026-06-22",
    "linkYears": [
      2024,
      2023
    ],
    "sectorYears": [
      2024,
      2023
    ],
    "coverage": {
      "countries": 102,
      "bilateralLinks": 3814,
      "note": "Bilateral links cover economies that report goods trade to UN Comtrade. A few late/non-reporters (e.g. Russia, Taiwan) appear without outbound links."
    }
  },
  "nodes": [
    {
      "iso2": "US",
      "iso3": "USA",
      "country": "United States",
      "gdpUsd": 28750956130731,
      "exportsUsd": 3193500000000,
      "importsUsd": 4103100000000,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 60
    },
    {
      "iso2": "CN",
      "iso3": "CHN",
      "country": "China",
      "gdpUsd": 18743803170827,
      "exportsUsd": 3753056083349,
      "importsUsd": 3219342570126,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 50
    },
    {
      "iso2": "DE",
      "iso3": "DEU",
      "country": "Germany",
      "gdpUsd": 4685592577805,
      "exportsUsd": 1941431210622,
      "importsUsd": 1764438191611,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 29
    },
    {
      "iso2": "JP",
      "iso3": "JPN",
      "country": "Japan",
      "gdpUsd": 4027597523551,
      "exportsUsd": 917043674687,
      "importsUsd": 952041559318,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 27
    },
    {
      "iso2": "IN",
      "iso3": "IND",
      "country": "India",
      "gdpUsd": 3909891533858,
      "exportsUsd": 827405227199,
      "importsUsd": 918333719558,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 27
    },
    {
      "iso2": "GB",
      "iso3": "GBR",
      "country": "United Kingdom",
      "gdpUsd": 3686033044482,
      "exportsUsd": 1142086333403,
      "importsUsd": 1174222748817,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 27
    },
    {
      "iso2": "FR",
      "iso3": "FRA",
      "country": "France",
      "gdpUsd": 3160442622465,
      "exportsUsd": 1071066237472,
      "importsUsd": 1081453951069,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 25
    },
    {
      "iso2": "IT",
      "iso3": "ITA",
      "country": "Italy",
      "gdpUsd": 2380825077244,
      "exportsUsd": 773888180686,
      "importsUsd": 721835854516,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 23
    },
    {
      "iso2": "CA",
      "iso3": "CAN",
      "country": "Canada",
      "gdpUsd": 2243636826634,
      "exportsUsd": 727920466717,
      "importsUsd": 733807159316,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 23
    },
    {
      "iso2": "BR",
      "iso3": "BRA",
      "country": "Brazil",
      "gdpUsd": 2185821648944,
      "exportsUsd": 392105352908,
      "importsUsd": 385708875014,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 22
    },
    {
      "iso2": "RU",
      "iso3": "RUS",
      "country": "Russia",
      "gdpUsd": 2173835806672,
      "exportsUsd": 476430904567,
      "importsUsd": 382411727676,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 22
    },
    {
      "iso2": "KR",
      "iso3": "KOR",
      "country": "South Korea",
      "gdpUsd": 1875388209407,
      "exportsUsd": 831889172091,
      "importsUsd": 755486201522,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 21
    },
    {
      "iso2": "MX",
      "iso3": "MEX",
      "country": "Mexico",
      "gdpUsd": 1856365616166,
      "exportsUsd": 681348718684,
      "importsUsd": 703294122577,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 21
    },
    {
      "iso2": "AU",
      "iso3": "AUS",
      "country": "Australia",
      "gdpUsd": 1757022451653,
      "exportsUsd": 432605705549,
      "importsUsd": 395749225409,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 21
    },
    {
      "iso2": "ES",
      "iso3": "ESP",
      "country": "Spain",
      "gdpUsd": 1725671652742,
      "exportsUsd": 639462804274,
      "importsUsd": 567649024934,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 21
    },
    {
      "iso2": "ID",
      "iso3": "IDN",
      "country": "Indonesia",
      "gdpUsd": 1396300098191,
      "exportsUsd": 309745619367,
      "importsUsd": 284696296711,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 19
    },
    {
      "iso2": "TR",
      "iso3": "TUR",
      "country": "Turkey",
      "gdpUsd": 1359123768774,
      "exportsUsd": 374686274270,
      "importsUsd": 367379077169,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 19
    },
    {
      "iso2": "SA",
      "iso3": "SAU",
      "country": "Saudi Arabia",
      "gdpUsd": 1239804533333,
      "exportsUsd": 360897333333,
      "importsUsd": 317011733333,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 19
    },
    {
      "iso2": "NL",
      "iso3": "NLD",
      "country": "Netherlands",
      "gdpUsd": 1214927698573,
      "exportsUsd": 1001469281570,
      "importsUsd": 867461920495,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 19
    },
    {
      "iso2": "CH",
      "iso3": "CHE",
      "country": "Switzerland",
      "gdpUsd": 936564198049,
      "exportsUsd": 675814842375,
      "importsUsd": 580072309989,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 17
    },
    {
      "iso2": "PL",
      "iso3": "POL",
      "country": "Poland",
      "gdpUsd": 917767106147,
      "exportsUsd": 478889163360,
      "importsUsd": 442176791004,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 17
    },
    {
      "iso2": "TW",
      "iso3": "TWN",
      "country": "Taiwan",
      "gdpUsd": 790000000000,
      "exportsUsd": 0,
      "importsUsd": 0,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 17
    },
    {
      "iso2": "BE",
      "iso3": "BEL",
      "country": "Belgium",
      "gdpUsd": 671370081636,
      "exportsUsd": 532215784956,
      "importsUsd": 534804947276,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 16
    },
    {
      "iso2": "AR",
      "iso3": "ARG",
      "country": "Argentina",
      "gdpUsd": 638365455340,
      "exportsUsd": 97349127043,
      "importsUsd": 80944817978,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 16
    },
    {
      "iso2": "IE",
      "iso3": "IRL",
      "country": "Ireland",
      "gdpUsd": 609157459747,
      "exportsUsd": 877092941905,
      "importsUsd": 622469214439,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 16
    },
    {
      "iso2": "SE",
      "iso3": "SWE",
      "country": "Sweden",
      "gdpUsd": 603715224266,
      "exportsUsd": 327875208566,
      "importsUsd": 311357134625,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 16
    },
    {
      "iso2": "AE",
      "iso3": "ARE",
      "country": "United Arab Emirates",
      "gdpUsd": 552324846835,
      "exportsUsd": 0,
      "importsUsd": 227492633039,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "SG",
      "iso3": "SGP",
      "country": "Singapore",
      "gdpUsd": 547386645892,
      "exportsUsd": 978597520043,
      "importsUsd": 786020626642,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "IL",
      "iso3": "ISR",
      "country": "Israel",
      "gdpUsd": 540379921262,
      "exportsUsd": 153655742279,
      "importsUsd": 140591934051,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "AT",
      "iso3": "AUT",
      "country": "Austria",
      "gdpUsd": 534790720467,
      "exportsUsd": 297762301951,
      "importsUsd": 284227859384,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "TH",
      "iso3": "THA",
      "country": "Thailand",
      "gdpUsd": 526517658842,
      "exportsUsd": 368824202323,
      "importsUsd": 351173464106,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "NO",
      "iso3": "NOR",
      "country": "Norway",
      "gdpUsd": 483592648313,
      "exportsUsd": 229666413339,
      "importsUsd": 163801535479,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "VN",
      "iso3": "VNM",
      "country": "Vietnam",
      "gdpUsd": 476388230307,
      "exportsUsd": 429484098196,
      "importsUsd": 398774124844,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "IR",
      "iso3": "IRN",
      "country": "Iran",
      "gdpUsd": 475252089215,
      "exportsUsd": 111928863188,
      "importsUsd": 135497500556,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "PH",
      "iso3": "PHL",
      "country": "Philippines",
      "gdpUsd": 461617509782,
      "exportsUsd": 118974717245,
      "importsUsd": 185164160350,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "BD",
      "iso3": "BGD",
      "country": "Bangladesh",
      "gdpUsd": 450119432069,
      "exportsUsd": 47087839244,
      "importsUsd": 73445483484,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 15
    },
    {
      "iso2": "DK",
      "iso3": "DNK",
      "country": "Denmark",
      "gdpUsd": 424524722037,
      "exportsUsd": 301421099196,
      "importsUsd": 257954032293,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "MY",
      "iso3": "MYS",
      "country": "Malaysia",
      "gdpUsd": 422227005429,
      "exportsUsd": 301221326764,
      "importsUsd": 278760544031,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "CO",
      "iso3": "COL",
      "country": "Colombia",
      "gdpUsd": 418818154879,
      "exportsUsd": 67426785841,
      "importsUsd": 87642599037,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "HK",
      "iso3": "HKG",
      "country": "Hong Kong",
      "gdpUsd": 406863396487,
      "exportsUsd": 739642429560,
      "importsUsd": 723058784062,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "ZA",
      "iso3": "ZAF",
      "country": "South Africa",
      "gdpUsd": 401144998374,
      "exportsUsd": 127531645077,
      "importsUsd": 119761291334,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "EG",
      "iso3": "EGY",
      "country": "Egypt",
      "gdpUsd": 389059911004,
      "exportsUsd": 63713393368,
      "importsUsd": 90357257459,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "RO",
      "iso3": "ROU",
      "country": "Romania",
      "gdpUsd": 382564217989,
      "exportsUsd": 136204440675,
      "importsUsd": 159192458246,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "PK",
      "iso3": "PAK",
      "country": "Pakistan",
      "gdpUsd": 371570000121,
      "exportsUsd": 38607805446,
      "importsUsd": 63865509443,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "CZ",
      "iso3": "CZE",
      "country": "Czech Republic",
      "gdpUsd": 347034062928,
      "exportsUsd": 238995944035,
      "importsUsd": 217301727913,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "CL",
      "iso3": "CHL",
      "country": "Chile",
      "gdpUsd": 330267137372,
      "exportsUsd": 111377047470,
      "importsUsd": 99531074993,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 14
    },
    {
      "iso2": "PT",
      "iso3": "PRT",
      "country": "Portugal",
      "gdpUsd": 313271185085,
      "exportsUsd": 143389625477,
      "importsUsd": 137603377519,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "FI",
      "iso3": "FIN",
      "country": "Finland",
      "gdpUsd": 298696961298,
      "exportsUsd": 125177301211,
      "importsUsd": 124115485971,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "KZ",
      "iso3": "KAZ",
      "country": "Kazakhstan",
      "gdpUsd": 291480274649,
      "exportsUsd": 92070351467,
      "importsUsd": 74543688674,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "PE",
      "iso3": "PER",
      "country": "Peru",
      "gdpUsd": 289221969063,
      "exportsUsd": 82536982274,
      "importsUsd": 66342594208,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "IQ",
      "iso3": "IRQ",
      "country": "Iraq",
      "gdpUsd": 279641257615,
      "exportsUsd": 104886427210,
      "importsUsd": 92844392288,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "DZ",
      "iso3": "DZA",
      "country": "Algeria",
      "gdpUsd": 269322281665,
      "exportsUsd": 53466882957,
      "importsUsd": 54624467792,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "NZ",
      "iso3": "NZL",
      "country": "New Zealand",
      "gdpUsd": 260172385098,
      "exportsUsd": 64536380922,
      "importsUsd": 68735355084,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "GR",
      "iso3": "GRC",
      "country": "Greece",
      "gdpUsd": 256238371778,
      "exportsUsd": 107906278861,
      "importsUsd": 122135634583,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "NG",
      "iso3": "NGA",
      "country": "Nigeria",
      "gdpUsd": 252261880141,
      "exportsUsd": 33378462964,
      "importsUsd": 31147775890,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "HU",
      "iso3": "HUN",
      "country": "Hungary",
      "gdpUsd": 222722738926,
      "exportsUsd": 167912655727,
      "importsUsd": 158386316310,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "QA",
      "iso3": "QAT",
      "country": "Qatar",
      "gdpUsd": 219162637363,
      "exportsUsd": 72728223331,
      "importsUsd": 22738647326,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 13
    },
    {
      "iso2": "UA",
      "iso3": "UKR",
      "country": "Ukraine",
      "gdpUsd": 190741262415,
      "exportsUsd": 56097413427,
      "importsUsd": 92209661950,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 12
    },
    {
      "iso2": "MA",
      "iso3": "MAR",
      "country": "Morocco",
      "gdpUsd": 160610994055,
      "exportsUsd": 67454245753,
      "importsUsd": 80608604200,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 12
    },
    {
      "iso2": "KW",
      "iso3": "KWT",
      "country": "Kuwait",
      "gdpUsd": 160227273053,
      "exportsUsd": 4386615711,
      "importsUsd": 19547043455,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 12
    },
    {
      "iso2": "ET",
      "iso3": "ETH",
      "country": "Ethiopia",
      "gdpUsd": 149740297953,
      "exportsUsd": 8294520633,
      "importsUsd": 17760943867,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 12
    },
    {
      "iso2": "SK",
      "iso3": "SVK",
      "country": "Slovakia",
      "gdpUsd": 140934076532,
      "exportsUsd": 120475379841,
      "importsUsd": 120821798958,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 12
    },
    {
      "iso2": "EC",
      "iso3": "ECU",
      "country": "Ecuador",
      "gdpUsd": 124676074700,
      "exportsUsd": 37750170800,
      "importsUsd": 33568458200,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "DO",
      "iso3": "DOM",
      "country": "Dominican Republic",
      "gdpUsd": 124282245639,
      "exportsUsd": 28296491456,
      "importsUsd": 36061223105,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "KE",
      "iso3": "KEN",
      "country": "Kenya",
      "gdpUsd": 120339557906,
      "exportsUsd": 20536686007,
      "importsUsd": 27822985577,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "VE",
      "iso3": "VEN",
      "country": "Venezuela",
      "gdpUsd": 119802963258,
      "exportsUsd": 20198598348,
      "importsUsd": 11047411084,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "BG",
      "iso3": "BGR",
      "country": "Bulgaria",
      "gdpUsd": 113343355780,
      "exportsUsd": 63891606678,
      "importsUsd": 61042597196,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "GT",
      "iso3": "GTM",
      "country": "Guatemala",
      "gdpUsd": 113199581158,
      "exportsUsd": 17990664478,
      "importsUsd": 35602767957,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "OM",
      "iso3": "OMN",
      "country": "Oman",
      "gdpUsd": 107137198769,
      "exportsUsd": 70788296489,
      "importsUsd": 52261638492,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "AO",
      "iso3": "AGO",
      "country": "Angola",
      "gdpUsd": 100998916781,
      "exportsUsd": 31798017664,
      "importsUsd": 19552084465,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "LK",
      "iso3": "LKA",
      "country": "Sri Lanka",
      "gdpUsd": 98963185510,
      "exportsUsd": 19680136462,
      "importsUsd": 22277780976,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "CR",
      "iso3": "CRI",
      "country": "Costa Rica",
      "gdpUsd": 95350423177,
      "exportsUsd": 36740228685,
      "importsUsd": 31274194800,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "LU",
      "iso3": "LUX",
      "country": "Luxembourg",
      "gdpUsd": 93279851863,
      "exportsUsd": 178661670861,
      "importsUsd": 149000525635,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "HR",
      "iso3": "HRV",
      "country": "Croatia",
      "gdpUsd": 92983810329,
      "exportsUsd": 46623095274,
      "importsUsd": 50928383014,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "RS",
      "iso3": "SRB",
      "country": "Serbia",
      "gdpUsd": 90097765959,
      "exportsUsd": 48277776722,
      "importsUsd": 52383977874,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "CI",
      "iso3": "CIV",
      "country": "Ivory Coast",
      "gdpUsd": 87113179149,
      "exportsUsd": 22673498101,
      "importsUsd": 21984235110,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "PA",
      "iso3": "PAN",
      "country": "Panama",
      "gdpUsd": 86523959132,
      "exportsUsd": 38380161274,
      "importsUsd": 34017704881,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "LT",
      "iso3": "LTU",
      "country": "Lithuania",
      "gdpUsd": 84869215513,
      "exportsUsd": 62899954052,
      "importsUsd": 58504093078,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "GH",
      "iso3": "GHA",
      "country": "Ghana",
      "gdpUsd": 82308110386,
      "exportsUsd": 29197465999,
      "importsUsd": 28244066026,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "UY",
      "iso3": "URY",
      "country": "Uruguay",
      "gdpUsd": 80961511074,
      "exportsUsd": 23285155540,
      "importsUsd": 19191233873,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "TZ",
      "iso3": "TZA",
      "country": "Tanzania",
      "gdpUsd": 78844405385,
      "exportsUsd": 15635226304,
      "importsUsd": 17095546885,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "MM",
      "iso3": "MMR",
      "country": "Myanmar",
      "gdpUsd": 74068349524,
      "exportsUsd": 0,
      "importsUsd": 0,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "SI",
      "iso3": "SVN",
      "country": "Slovenia",
      "gdpUsd": 72972015197,
      "exportsUsd": 59047049757,
      "importsUsd": 54539677618,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 11
    },
    {
      "iso2": "BO",
      "iso3": "BOL",
      "country": "Bolivia",
      "gdpUsd": 54881327453,
      "exportsUsd": 11763846802,
      "importsUsd": 14018232750,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "UG",
      "iso3": "UGA",
      "country": "Uganda",
      "gdpUsd": 53911907086,
      "exportsUsd": 9034338030,
      "importsUsd": 13960593896,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "JO",
      "iso3": "JOR",
      "country": "Jordan",
      "gdpUsd": 53352289577,
      "exportsUsd": 22734507042,
      "importsUsd": 30446760563,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "CM",
      "iso3": "CMR",
      "country": "Cameroon",
      "gdpUsd": 53296694320,
      "exportsUsd": 8353326094,
      "importsUsd": 9982430836,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "TN",
      "iso3": "TUN",
      "country": "Tunisia",
      "gdpUsd": 51332285657,
      "exportsUsd": 25667010359,
      "importsUsd": 28898464568,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "LY",
      "iso3": "LBY",
      "country": "Libya",
      "gdpUsd": 48487151215,
      "exportsUsd": 34896676633,
      "importsUsd": 27562617338,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "BH",
      "iso3": "BHR",
      "country": "Bahrain",
      "gdpUsd": 47109734309,
      "exportsUsd": 41303457447,
      "importsUsd": 33044414894,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "KH",
      "iso3": "KHM",
      "country": "Cambodia",
      "gdpUsd": 46352647037,
      "exportsUsd": 33078910281,
      "importsUsd": 33412575812,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "PY",
      "iso3": "PRY",
      "country": "Paraguay",
      "gdpUsd": 44458118397,
      "exportsUsd": 16539167593,
      "importsUsd": 17618518949,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "LV",
      "iso3": "LVA",
      "country": "Latvia",
      "gdpUsd": 43684254432,
      "exportsUsd": 28540727743,
      "importsUsd": 29237162725,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "EE",
      "iso3": "EST",
      "country": "Estonia",
      "gdpUsd": 43130419829,
      "exportsUsd": 32636565839,
      "importsUsd": 32506629311,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "NP",
      "iso3": "NPL",
      "country": "Nepal",
      "gdpUsd": 42914268287,
      "exportsUsd": 3270882001,
      "importsUsd": 14122194838,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "CY",
      "iso3": "CYP",
      "country": "Cyprus",
      "gdpUsd": 37634533332,
      "exportsUsd": 36513113033,
      "importsUsd": 35144118889,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "HN",
      "iso3": "HND",
      "country": "Honduras",
      "gdpUsd": 37093565854,
      "exportsUsd": 12444557871,
      "importsUsd": 21351448804,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "SV",
      "iso3": "SLV",
      "country": "El Salvador",
      "gdpUsd": 35364960000,
      "exportsUsd": 11585810000,
      "importsUsd": 18354040000,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "IS",
      "iso3": "ISL",
      "country": "Iceland",
      "gdpUsd": 33255181469,
      "exportsUsd": 14117485077,
      "importsUsd": 14471061048,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "MT",
      "iso3": "MLT",
      "country": "Malta",
      "gdpUsd": 24971574502,
      "exportsUsd": 29587849038,
      "importsUsd": 24892773004,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 10
    },
    {
      "iso2": "NI",
      "iso3": "NIC",
      "country": "Nicaragua",
      "gdpUsd": 19693982968,
      "exportsUsd": 7968788635,
      "importsUsd": 11434873062,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 9
    },
    {
      "iso2": "LA",
      "iso3": "LAO",
      "country": "Laos",
      "gdpUsd": 16502933121,
      "exportsUsd": 0,
      "importsUsd": 0,
      "exportsEstimated": false,
      "importsEstimated": false,
      "bubbleRadius": 9
    }
  ],
  "links": [
    {
      "s": "CN",
      "t": "US",
      "tradeUsd": 525648764497,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "US",
      "tradeUsd": 503418271236,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "US",
      "tradeUsd": 501220722660,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "US",
      "tradeUsd": 475203155269,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CN",
      "tradeUsd": 377803724680,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CA",
      "tradeUsd": 352760090331,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CA",
      "tradeUsd": 348413969749,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "MX",
      "tradeUsd": 334041339409,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CN",
      "tradeUsd": 329897390109,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "MX",
      "tradeUsd": 323227903905,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HK",
      "tradeUsd": 290872407878,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HK",
      "tradeUsd": 274519285068,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "US",
      "tradeUsd": 218448370652,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "US",
      "tradeUsd": 167780705639,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "DE",
      "tradeUsd": 163737654795,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "VN",
      "tradeUsd": 161851260645,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "JP",
      "tradeUsd": 157499979155,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "DE",
      "tradeUsd": 155209911460,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "JP",
      "tradeUsd": 152008289415,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KR",
      "tradeUsd": 148982810996,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CN",
      "tradeUsd": 147805519996,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KR",
      "tradeUsd": 146229383764,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "US",
      "tradeUsd": 145131057969,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CN",
      "tradeUsd": 143545716168,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "US",
      "tradeUsd": 141522567941,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "VN",
      "tradeUsd": 137607205249,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CN",
      "tradeUsd": 132902972287,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "US",
      "tradeUsd": 128368519881,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CN",
      "tradeUsd": 126439830027,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CN",
      "tradeUsd": 124655567747,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CN",
      "tradeUsd": 124626302946,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IN",
      "tradeUsd": 120463271143,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "CN",
      "tradeUsd": 120219456120,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IN",
      "tradeUsd": 117678762947,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "US",
      "tradeUsd": 116290387484,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "RU",
      "tradeUsd": 115275861485,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "RU",
      "tradeUsd": 110935409106,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "FR",
      "tradeUsd": 110736875330,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DE",
      "tradeUsd": 107059114975,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CN",
      "tradeUsd": 106869689000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "DE",
      "tradeUsd": 106696778805,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "US",
      "tradeUsd": 105551276720,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CN",
      "tradeUsd": 104324811805,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "DE",
      "tradeUsd": 102929212719,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "CN",
      "tradeUsd": 102629123797,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "FR",
      "tradeUsd": 102618930175,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MY",
      "tradeUsd": 101458945549,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DE",
      "tradeUsd": 100565204356,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NL",
      "tradeUsd": 100195459698,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "NL",
      "tradeUsd": 98717990470,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "PL",
      "tradeUsd": 97732445652,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "US",
      "tradeUsd": 97071533043,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CN",
      "tradeUsd": 94411140802,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NL",
      "tradeUsd": 91201844814,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MX",
      "tradeUsd": 90229344099,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NL",
      "tradeUsd": 89643260827,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MY",
      "tradeUsd": 87369777322,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "GB",
      "tradeUsd": 86161909957,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TH",
      "tradeUsd": 86026851411,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "BE",
      "tradeUsd": 84700927171,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "BE",
      "tradeUsd": 84182554831,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "GB",
      "tradeUsd": 83575288827,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "DE",
      "tradeUsd": 83519431269,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NL",
      "tradeUsd": 82186249692,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MX",
      "tradeUsd": 81463411165,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DE",
      "tradeUsd": 80799805325,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IT",
      "tradeUsd": 80441946034,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GB",
      "tradeUsd": 79887476638,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "JP",
      "tradeUsd": 79715080653,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "US",
      "tradeUsd": 79441705218,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SG",
      "tradeUsd": 79099846812,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GB",
      "tradeUsd": 78900607063,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "US",
      "tradeUsd": 78611986810,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GB",
      "tradeUsd": 77911448112,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SG",
      "tradeUsd": 76945384255,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ID",
      "tradeUsd": 76669369626,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DE",
      "tradeUsd": 76472551326,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DE",
      "tradeUsd": 76342630105,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "JP",
      "tradeUsd": 76154045176,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "DE",
      "tradeUsd": 76083352258,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "US",
      "tradeUsd": 75805285416,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TH",
      "tradeUsd": 75732738143,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DE",
      "tradeUsd": 75381806630,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GB",
      "tradeUsd": 74054013691,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AU",
      "tradeUsd": 73814238179,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "US",
      "tradeUsd": 73626227036,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "US",
      "tradeUsd": 73142702975,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "US",
      "tradeUsd": 72634196246,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BR",
      "tradeUsd": 72073827084,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AU",
      "tradeUsd": 70747972672,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "CN",
      "tradeUsd": 70678294064,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "US",
      "tradeUsd": 70374186328,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "FR",
      "tradeUsd": 68733503665,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "FR",
      "tradeUsd": 66767784164,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AE",
      "tradeUsd": 65592681317,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "CN",
      "tradeUsd": 65585113403,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "KR",
      "tradeUsd": 65541464288,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ID",
      "tradeUsd": 65195769414,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "CN",
      "tradeUsd": 65036643203,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "KR",
      "tradeUsd": 64835853630,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "DE",
      "tradeUsd": 63491795196,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "BE",
      "tradeUsd": 63272791790,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "FR",
      "tradeUsd": 63198028875,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "DE",
      "tradeUsd": 62791693766,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "CN",
      "tradeUsd": 62739517134,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "DE",
      "tradeUsd": 61210277248,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "US",
      "tradeUsd": 61040830052,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "CN",
      "tradeUsd": 60574277766,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BR",
      "tradeUsd": 59105409511,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "US",
      "tradeUsd": 58828192395,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "VN",
      "tradeUsd": 58318358187,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "FR",
      "tradeUsd": 57721841843,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "DE",
      "tradeUsd": 55714115600,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AE",
      "tradeUsd": 55683130074,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "HK",
      "tradeUsd": 55288703329,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "FR",
      "tradeUsd": 54813169633,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "VN",
      "tradeUsd": 53473586565,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CZ",
      "tradeUsd": 53128761619,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "NL",
      "tradeUsd": 52603993880,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PH",
      "tradeUsd": 52400745910,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MY",
      "tradeUsd": 52337877224,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PH",
      "tradeUsd": 52265356944,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "FR",
      "tradeUsd": 51313375845,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "SG",
      "tradeUsd": 50446147532,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "HK",
      "tradeUsd": 50413351715,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SA",
      "tradeUsd": 50045321813,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BR",
      "tradeUsd": 49666969471,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "SG",
      "tradeUsd": 48092322740,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "ES",
      "tradeUsd": 48012581072,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "NL",
      "tradeUsd": 46856202378,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "FR",
      "tradeUsd": 46822512898,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KR",
      "tradeUsd": 46802111277,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CA",
      "tradeUsd": 46445356456,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KR",
      "tradeUsd": 46377120026,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IT",
      "tradeUsd": 46198604773,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SG",
      "tradeUsd": 46017200514,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "DE",
      "tradeUsd": 45626898870,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "GB",
      "tradeUsd": 45414510861,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "FR",
      "tradeUsd": 45255934885,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "CN",
      "tradeUsd": 45163448766,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CA",
      "tradeUsd": 45074269772,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "FR",
      "tradeUsd": 45007570090,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "US",
      "tradeUsd": 44922912847,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BR",
      "tradeUsd": 44807817218,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IT",
      "tradeUsd": 44522402808,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MY",
      "tradeUsd": 44454014876,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "FR",
      "tradeUsd": 44391819243,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "US",
      "tradeUsd": 44029884561,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "GB",
      "tradeUsd": 43893527703,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "US",
      "tradeUsd": 43434916631,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SA",
      "tradeUsd": 42855038497,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SG",
      "tradeUsd": 42433068231,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "DE",
      "tradeUsd": 42229849587,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CN",
      "tradeUsd": 42145127267,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "FR",
      "tradeUsd": 42112745547,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IN",
      "tradeUsd": 41752370779,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "DE",
      "tradeUsd": 41598113626,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CN",
      "tradeUsd": 41008240379,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "US",
      "tradeUsd": 40916672535,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ES",
      "tradeUsd": 40876870049,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "DE",
      "tradeUsd": 40455745579,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "US",
      "tradeUsd": 40128389773,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IN",
      "tradeUsd": 40116453423,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PL",
      "tradeUsd": 40052379695,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "ID",
      "tradeUsd": 39825870266,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ES",
      "tradeUsd": 39705452813,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TR",
      "tradeUsd": 38872861571,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BE",
      "tradeUsd": 38827845472,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TR",
      "tradeUsd": 38108360633,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "DE",
      "tradeUsd": 38018790013,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "US",
      "tradeUsd": 38003705294,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "US",
      "tradeUsd": 37451904934,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "ES",
      "tradeUsd": 37338969377,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CN",
      "tradeUsd": 37327494007,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PL",
      "tradeUsd": 37167370901,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AE",
      "tradeUsd": 37103479102,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "JP",
      "tradeUsd": 36190353028,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "HK",
      "tradeUsd": 35941717227,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "ES",
      "tradeUsd": 35803963681,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CN",
      "tradeUsd": 35589329061,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "US",
      "tradeUsd": 35455220163,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "HU",
      "tradeUsd": 35390812113,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "ID",
      "tradeUsd": 35368235700,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "US",
      "tradeUsd": 35225350903,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "HK",
      "tradeUsd": 35021386967,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "US",
      "tradeUsd": 34843437280,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AU",
      "tradeUsd": 34582880814,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BE",
      "tradeUsd": 34177403180,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AU",
      "tradeUsd": 33672030175,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "DE",
      "tradeUsd": 33274826468,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "GB",
      "tradeUsd": 33253367322,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AE",
      "tradeUsd": 33021240273,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CH",
      "tradeUsd": 32988836568,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BE",
      "tradeUsd": 32973808430,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CH",
      "tradeUsd": 32677115413,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "HK",
      "tradeUsd": 32589481625,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BE",
      "tradeUsd": 32551817533,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IT",
      "tradeUsd": 32400555611,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "SE",
      "tradeUsd": 32362977506,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "GB",
      "tradeUsd": 31658732067,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "JP",
      "tradeUsd": 30623985628,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "US",
      "tradeUsd": 30538315644,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "PT",
      "tradeUsd": 29862778807,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "PT",
      "tradeUsd": 29681740865,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "GB",
      "tradeUsd": 29635932090,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "JP",
      "tradeUsd": 29603169430,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "SI",
      "tradeUsd": 29567428854,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "SA",
      "tradeUsd": 29464758708,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IT",
      "tradeUsd": 29416373231,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "TH",
      "tradeUsd": 29288203351,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "FR",
      "tradeUsd": 29168552289,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "JP",
      "tradeUsd": 28997021148,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IT",
      "tradeUsd": 28916814190,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "CH",
      "tradeUsd": 28829049728,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "US",
      "tradeUsd": 28706577212,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "FR",
      "tradeUsd": 28582449989,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IT",
      "tradeUsd": 28535473557,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "GB",
      "tradeUsd": 28170667121,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KZ",
      "tradeUsd": 27954331004,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CH",
      "tradeUsd": 27872814191,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HK",
      "tradeUsd": 27869863276,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HK",
      "tradeUsd": 27744741789,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "MY",
      "tradeUsd": 27700176334,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "HU",
      "tradeUsd": 27093314956,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AE",
      "tradeUsd": 26969000572,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "US",
      "tradeUsd": 26593055006,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "TH",
      "tradeUsd": 26571832587,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "DE",
      "tradeUsd": 25889444000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "HK",
      "tradeUsd": 25193087883,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "IN",
      "tradeUsd": 25019313073,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ES",
      "tradeUsd": 25000478724,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CH",
      "tradeUsd": 24964718949,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "NL",
      "tradeUsd": 24887000728,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AE",
      "tradeUsd": 24857035171,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CN",
      "tradeUsd": 24839120163,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "DE",
      "tradeUsd": 24730967028,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KZ",
      "tradeUsd": 24696909997,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "GB",
      "tradeUsd": 24306654811,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NL",
      "tradeUsd": 24219665340,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "DK",
      "tradeUsd": 24191600931,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CZ",
      "tradeUsd": 24085214857,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ES",
      "tradeUsd": 23910016058,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "GB",
      "tradeUsd": 23749959039,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ZA",
      "tradeUsd": 23650491937,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "KR",
      "tradeUsd": 23447750678,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "FR",
      "tradeUsd": 23426166448,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "ES",
      "tradeUsd": 23405543945,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "JP",
      "tradeUsd": 23313711801,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "US",
      "tradeUsd": 23309897736,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "RO",
      "tradeUsd": 23280406127,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CZ",
      "tradeUsd": 23189556981,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CN",
      "tradeUsd": 23155748030,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "FR",
      "tradeUsd": 23130626768,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NL",
      "tradeUsd": 23108491097,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "GB",
      "tradeUsd": 23104438175,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BD",
      "tradeUsd": 22953015504,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BD",
      "tradeUsd": 22882074500,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "ES",
      "tradeUsd": 22762446460,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "IQ",
      "tradeUsd": 22700763638,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "GB",
      "tradeUsd": 22583569421,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "DE",
      "tradeUsd": 22092335976,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CN",
      "tradeUsd": 22060605816,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "TH",
      "tradeUsd": 21925739721,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "CN",
      "tradeUsd": 21891763330,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ZA",
      "tradeUsd": 21812478117,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "DE",
      "tradeUsd": 21789562213,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "IN",
      "tradeUsd": 21694005672,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PL",
      "tradeUsd": 21374698668,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PL",
      "tradeUsd": 21274461943,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "KR",
      "tradeUsd": 21270810760,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "PL",
      "tradeUsd": 21100453084,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "DE",
      "tradeUsd": 21083354319,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "GB",
      "tradeUsd": 20978773388,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "KR",
      "tradeUsd": 20904849458,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "BE",
      "tradeUsd": 20869402205,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NL",
      "tradeUsd": 20816256951,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "JP",
      "tradeUsd": 20787683641,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "BE",
      "tradeUsd": 20776716765,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CN",
      "tradeUsd": 20728303835,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "JP",
      "tradeUsd": 20715076707,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CL",
      "tradeUsd": 20652108339,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "KR",
      "tradeUsd": 20648914723,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "FR",
      "tradeUsd": 20488201166,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "IN",
      "tradeUsd": 20380929676,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "KR",
      "tradeUsd": 20359765923,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "IN",
      "tradeUsd": 20297081443,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PK",
      "tradeUsd": 20227896062,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "PL",
      "tradeUsd": 20183816459,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NG",
      "tradeUsd": 20176894686,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "FR",
      "tradeUsd": 20106535671,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "GB",
      "tradeUsd": 20077867963,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NL",
      "tradeUsd": 20001191306,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "BE",
      "tradeUsd": 19965102929,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "KR",
      "tradeUsd": 19869485739,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "SG",
      "tradeUsd": 19820776314,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "VN",
      "tradeUsd": 19706797367,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "HK",
      "tradeUsd": 19698224011,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "DE",
      "tradeUsd": 19580171865,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CL",
      "tradeUsd": 19508027539,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "MY",
      "tradeUsd": 19439249564,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "HK",
      "tradeUsd": 19411764754,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "JP",
      "tradeUsd": 19345617901,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "DE",
      "tradeUsd": 19338206285,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "TR",
      "tradeUsd": 19292153832,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "CN",
      "tradeUsd": 19279221977,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CN",
      "tradeUsd": 19173147316,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "IN",
      "tradeUsd": 19136959182,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "TH",
      "tradeUsd": 19097136793,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CO",
      "tradeUsd": 19037609854,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "GB",
      "tradeUsd": 18964549829,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "CN",
      "tradeUsd": 18924790757,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NG",
      "tradeUsd": 18898529578,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "JP",
      "tradeUsd": 18791083935,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SG",
      "tradeUsd": 18751073370,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "AE",
      "tradeUsd": 18750227177,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "SG",
      "tradeUsd": 18728780474,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CL",
      "tradeUsd": 18723684801,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "TR",
      "tradeUsd": 18723105855,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "IT",
      "tradeUsd": 18662972957,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IN",
      "tradeUsd": 18661493798,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CA",
      "tradeUsd": 18614316486,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "PL",
      "tradeUsd": 18526539533,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "BE",
      "tradeUsd": 18434405347,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "CN",
      "tradeUsd": 18427549207,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SG",
      "tradeUsd": 18223602001,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "ES",
      "tradeUsd": 18209308135,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IN",
      "tradeUsd": 18169667812,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CL",
      "tradeUsd": 18167563889,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "JP",
      "tradeUsd": 18052530591,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "NL",
      "tradeUsd": 18049776786,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "DE",
      "tradeUsd": 18022041927,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "SK",
      "tradeUsd": 17978174459,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IT",
      "tradeUsd": 17930462028,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IN",
      "tradeUsd": 17905049257,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "AU",
      "tradeUsd": 17789485260,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "JP",
      "tradeUsd": 17741475161,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CA",
      "tradeUsd": 17731075690,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "TH",
      "tradeUsd": 17719046382,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "DE",
      "tradeUsd": 17608217282,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "NL",
      "tradeUsd": 17598733943,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RO",
      "t": "DE",
      "tradeUsd": 17595690402,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CO",
      "tradeUsd": 17552368192,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "NL",
      "tradeUsd": 17552308340,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CZ",
      "tradeUsd": 17540311507,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IT",
      "tradeUsd": 17536511251,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "ES",
      "tradeUsd": 17501825723,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "US",
      "tradeUsd": 17501510938,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "SI",
      "tradeUsd": 17449916166,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IN",
      "tradeUsd": 17438981814,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "DE",
      "tradeUsd": 17369405214,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "TH",
      "tradeUsd": 17357572122,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "US",
      "tradeUsd": 17332451000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PK",
      "tradeUsd": 17298320975,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IT",
      "tradeUsd": 17292957923,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "PL",
      "tradeUsd": 17282049604,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "NL",
      "tradeUsd": 17280455912,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "VN",
      "tradeUsd": 17280424396,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IN",
      "tradeUsd": 17208192383,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "VN",
      "tradeUsd": 17204795282,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "US",
      "tradeUsd": 17126854000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "VN",
      "tradeUsd": 17079741189,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IE",
      "tradeUsd": 16942392091,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "SK",
      "tradeUsd": 16923205015,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "EG",
      "tradeUsd": 16800522646,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AU",
      "tradeUsd": 16768989035,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "AR",
      "tradeUsd": 16712209284,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "VN",
      "tradeUsd": 16654082899,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CN",
      "tradeUsd": 16598216573,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IE",
      "tradeUsd": 16533301213,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "IN",
      "tradeUsd": 16478727809,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IT",
      "tradeUsd": 16477257237,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CZ",
      "tradeUsd": 16288326650,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CN",
      "tradeUsd": 16245421867,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "CN",
      "tradeUsd": 16235639041,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "IN",
      "tradeUsd": 16177355222,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "NO",
      "tradeUsd": 16010809074,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AU",
      "tradeUsd": 15986264304,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IQ",
      "tradeUsd": 15985748286,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IN",
      "tradeUsd": 15909855203,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "FR",
      "tradeUsd": 15837620636,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "US",
      "tradeUsd": 15677802398,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "TH",
      "tradeUsd": 15653217465,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SG",
      "tradeUsd": 15616718209,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "AU",
      "tradeUsd": 15597021457,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "NO",
      "tradeUsd": 15573923547,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "US",
      "tradeUsd": 15570434615,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "AE",
      "tradeUsd": 15556029772,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SE",
      "tradeUsd": 15495561640,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "TR",
      "tradeUsd": 15378840995,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AT",
      "tradeUsd": 15349894980,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "GB",
      "tradeUsd": 15344793856,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KH",
      "tradeUsd": 15325877130,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "TR",
      "tradeUsd": 15292979687,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IN",
      "tradeUsd": 15131155552,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "AU",
      "tradeUsd": 15127850036,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IL",
      "tradeUsd": 14985244934,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "MX",
      "tradeUsd": 14941282217,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "EG",
      "tradeUsd": 14934546799,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CN",
      "tradeUsd": 14899427450,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "CN",
      "tradeUsd": 14897477203,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "AU",
      "tradeUsd": 14885680738,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "IT",
      "tradeUsd": 14835274255,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IL",
      "tradeUsd": 14790380668,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CO",
      "tradeUsd": 14784393208,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "CN",
      "tradeUsd": 14758685492,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "US",
      "tradeUsd": 14732951468,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "TR",
      "tradeUsd": 14693841812,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "AE",
      "tradeUsd": 14520817594,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "NL",
      "tradeUsd": 14462195603,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "US",
      "tradeUsd": 14448210874,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IN",
      "tradeUsd": 14436042973,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "VN",
      "tradeUsd": 14425164411,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "ID",
      "tradeUsd": 14414203600,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "HK",
      "tradeUsd": 14374962865,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IL",
      "tradeUsd": 14307278354,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IQ",
      "tradeUsd": 14286321780,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "UA",
      "tradeUsd": 14233118648,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SE",
      "tradeUsd": 14140034737,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "CZ",
      "tradeUsd": 14124227844,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IL",
      "tradeUsd": 14032404266,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "CZ",
      "tradeUsd": 14014011294,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GB",
      "tradeUsd": 13962058873,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PE",
      "tradeUsd": 13945426958,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "MY",
      "tradeUsd": 13936190105,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "MY",
      "tradeUsd": 13930363970,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SA",
      "tradeUsd": 13872813911,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "AR",
      "tradeUsd": 13778181666,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "AE",
      "tradeUsd": 13758953649,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "BR",
      "tradeUsd": 13620061004,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "MX",
      "tradeUsd": 13596301337,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AT",
      "tradeUsd": 13573471283,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "US",
      "tradeUsd": 13544960705,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "NL",
      "tradeUsd": 13432196240,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "SE",
      "tradeUsd": 13202591878,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SA",
      "tradeUsd": 13176652913,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IT",
      "tradeUsd": 13165973519,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "PT",
      "tradeUsd": 13161093940,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "BE",
      "tradeUsd": 13134037563,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "VN",
      "tradeUsd": 13098155121,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "MX",
      "tradeUsd": 13094848774,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DO",
      "tradeUsd": 13081646176,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DO",
      "tradeUsd": 13062566548,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "FI",
      "tradeUsd": 13054191185,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "ID",
      "tradeUsd": 12983557968,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IT",
      "tradeUsd": 12945151495,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "KR",
      "tradeUsd": 12823918704,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "FI",
      "tradeUsd": 12813492662,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "MY",
      "tradeUsd": 12804353913,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PA",
      "tradeUsd": 12767213515,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GR",
      "tradeUsd": 12762427912,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KH",
      "tradeUsd": 12753001460,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AE",
      "tradeUsd": 12725639363,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IT",
      "tradeUsd": 12615150910,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "SG",
      "tradeUsd": 12607603597,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "US",
      "tradeUsd": 12593054655,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "US",
      "tradeUsd": 12587332418,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "BE",
      "tradeUsd": 12575269731,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "MY",
      "tradeUsd": 12548138588,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GB",
      "tradeUsd": 12479605338,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "IT",
      "tradeUsd": 12435692363,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CO",
      "tradeUsd": 12371570749,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "KR",
      "tradeUsd": 12318305492,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "MX",
      "tradeUsd": 12276266653,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "UA",
      "tradeUsd": 12266077411,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "KR",
      "tradeUsd": 12251988522,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "MX",
      "tradeUsd": 12216845185,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "SG",
      "tradeUsd": 12204376812,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "US",
      "tradeUsd": 12198440327,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "PT",
      "tradeUsd": 12170855207,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "NL",
      "tradeUsd": 12148381795,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "FR",
      "tradeUsd": 12113952661,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PE",
      "tradeUsd": 12110982799,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SA",
      "tradeUsd": 12096541938,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PE",
      "tradeUsd": 12039068958,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SG",
      "tradeUsd": 12035719279,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "HK",
      "tradeUsd": 12026194310,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "GB",
      "tradeUsd": 12023761872,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PL",
      "tradeUsd": 11943002539,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "BR",
      "tradeUsd": 11856694695,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "US",
      "tradeUsd": 11839090711,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GR",
      "tradeUsd": 11805766691,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "KR",
      "tradeUsd": 11789383055,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "VN",
      "tradeUsd": 11769352746,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "NL",
      "tradeUsd": 11764043341,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "IN",
      "tradeUsd": 11757664263,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "JP",
      "tradeUsd": 11736988182,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DZ",
      "tradeUsd": 11682167683,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "SE",
      "tradeUsd": 11607395004,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "US",
      "tradeUsd": 11564939802,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "NL",
      "tradeUsd": 11508634552,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AR",
      "tradeUsd": 11441926314,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HU",
      "tradeUsd": 11410045841,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "VN",
      "tradeUsd": 11404596587,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MM",
      "tradeUsd": 11401007018,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "IN",
      "tradeUsd": 11391187905,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PA",
      "tradeUsd": 11319905306,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BD",
      "tradeUsd": 11317821378,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "CN",
      "tradeUsd": 11310831743,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "DE",
      "tradeUsd": 11275057292,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "ES",
      "tradeUsd": 11253732767,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BD",
      "tradeUsd": 11252649454,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "GB",
      "tradeUsd": 11242379713,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PE",
      "tradeUsd": 11223793499,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "BE",
      "tradeUsd": 11213565253,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PA",
      "tradeUsd": 11203749267,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CH",
      "tradeUsd": 11163111463,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CA",
      "tradeUsd": 11161002105,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "IN",
      "tradeUsd": 11151271577,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "CN",
      "tradeUsd": 11129810863,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "RO",
      "tradeUsd": 11122335852,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "AE",
      "tradeUsd": 11115559752,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "CH",
      "tradeUsd": 11087245137,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "AE",
      "tradeUsd": 11045279342,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "PH",
      "tradeUsd": 11040135400,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "ES",
      "tradeUsd": 11025414114,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "ES",
      "tradeUsd": 11022472498,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PL",
      "tradeUsd": 10989843619,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "RO",
      "tradeUsd": 10982621302,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "ZA",
      "tradeUsd": 10962398850,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "JP",
      "tradeUsd": 10947444500,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "AU",
      "tradeUsd": 10941691069,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CA",
      "tradeUsd": 10937236174,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "CN",
      "tradeUsd": 10925417700,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "OM",
      "tradeUsd": 10914799952,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "RU",
      "tradeUsd": 10906585102,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "GB",
      "tradeUsd": 10851258296,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SA",
      "tradeUsd": 10832202792,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "US",
      "tradeUsd": 10814039869,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "AU",
      "tradeUsd": 10793443731,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "JP",
      "tradeUsd": 10784125955,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "KR",
      "tradeUsd": 10773835588,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "PH",
      "tradeUsd": 10748429359,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "CN",
      "tradeUsd": 10739453628,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AR",
      "tradeUsd": 10739158729,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PA",
      "tradeUsd": 10699682297,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "SE",
      "tradeUsd": 10670302321,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "NL",
      "tradeUsd": 10612270915,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CH",
      "tradeUsd": 10606726538,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IE",
      "tradeUsd": 10567969700,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "PL",
      "tradeUsd": 10545794725,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "ES",
      "tradeUsd": 10519942682,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "SE",
      "tradeUsd": 10506980008,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "JP",
      "tradeUsd": 10455788964,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SK",
      "tradeUsd": 10454920958,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "MY",
      "tradeUsd": 10438878579,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AE",
      "tradeUsd": 10435873406,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "AT",
      "tradeUsd": 10431948066,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "FR",
      "tradeUsd": 10399529309,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "PL",
      "tradeUsd": 10373922063,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "JP",
      "tradeUsd": 10351369556,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CA",
      "tradeUsd": 10351229492,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "TH",
      "tradeUsd": 10337402456,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "JP",
      "tradeUsd": 10330392751,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "DE",
      "tradeUsd": 10312048824,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "KR",
      "tradeUsd": 10304777159,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "US",
      "tradeUsd": 10270969352,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CN",
      "tradeUsd": 10255698331,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PH",
      "tradeUsd": 10246502988,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "NL",
      "tradeUsd": 10238667782,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "DE",
      "tradeUsd": 10232667976,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "SG",
      "tradeUsd": 10214177501,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ID",
      "tradeUsd": 10202095720,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "FR",
      "tradeUsd": 10167900432,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KR",
      "tradeUsd": 10161782789,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PH",
      "tradeUsd": 10150189699,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "NL",
      "tradeUsd": 10149133923,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SK",
      "tradeUsd": 10146168030,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PH",
      "tradeUsd": 10132294493,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "PL",
      "tradeUsd": 10112945173,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IT",
      "tradeUsd": 10108951901,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SE",
      "tradeUsd": 10069169150,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PH",
      "tradeUsd": 10051806387,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IR",
      "tradeUsd": 10034585057,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KR",
      "tradeUsd": 9994728611,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "IN",
      "tradeUsd": 9984902056,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PH",
      "tradeUsd": 9977114631,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ID",
      "tradeUsd": 9943228472,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "ES",
      "tradeUsd": 9936770335,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "KW",
      "tradeUsd": 9897563065,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "NL",
      "tradeUsd": 9895173661,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GH",
      "tradeUsd": 9843738727,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "GB",
      "tradeUsd": 9829553353,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "VN",
      "tradeUsd": 9811558938,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HU",
      "tradeUsd": 9795312791,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "RU",
      "tradeUsd": 9788230744,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "MY",
      "tradeUsd": 9754887002,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GT",
      "tradeUsd": 9739080916,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GT",
      "tradeUsd": 9714681499,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CR",
      "tradeUsd": 9676788152,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "DE",
      "tradeUsd": 9667108811,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CN",
      "tradeUsd": 9656810228,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "HK",
      "tradeUsd": 9605262937,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "HK",
      "tradeUsd": 9600023507,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "US",
      "tradeUsd": 9581557154,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "ES",
      "tradeUsd": 9570844884,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IQ",
      "tradeUsd": 9568563461,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "RU",
      "tradeUsd": 9546501217,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "PL",
      "tradeUsd": 9540903481,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "KR",
      "tradeUsd": 9537471011,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "US",
      "tradeUsd": 9527331703,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "HU",
      "tradeUsd": 9520509753,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "VN",
      "tradeUsd": 9508007602,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "BE",
      "tradeUsd": 9484782689,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SE",
      "tradeUsd": 9469671503,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "DK",
      "tradeUsd": 9465564460,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CH",
      "tradeUsd": 9465030653,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CA",
      "tradeUsd": 9458135542,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DZ",
      "tradeUsd": 9457689464,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "CN",
      "tradeUsd": 9444743061,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SE",
      "tradeUsd": 9437936333,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "KR",
      "tradeUsd": 9421164285,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DK",
      "tradeUsd": 9404790010,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "TR",
      "tradeUsd": 9381784222,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "RO",
      "tradeUsd": 9333193522,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "AE",
      "tradeUsd": 9327473395,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AR",
      "tradeUsd": 9314531082,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PH",
      "tradeUsd": 9297313129,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "CN",
      "tradeUsd": 9293878220,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PH",
      "tradeUsd": 9287844821,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "DK",
      "tradeUsd": 9273753843,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "RU",
      "tradeUsd": 9240775152,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GH",
      "tradeUsd": 9226909089,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MM",
      "tradeUsd": 9211852759,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "US",
      "tradeUsd": 9180565446,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AR",
      "tradeUsd": 9170997286,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CN",
      "tradeUsd": 9151479722,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CR",
      "tradeUsd": 9144096353,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "ID",
      "tradeUsd": 9138629174,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "HU",
      "tradeUsd": 9127062985,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "HU",
      "tradeUsd": 9121216064,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SE",
      "tradeUsd": 9096344000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "BE",
      "tradeUsd": 9093062590,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CZ",
      "tradeUsd": 9081441302,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CN",
      "tradeUsd": 9075970016,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "BE",
      "tradeUsd": 9070631363,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "DE",
      "tradeUsd": 9033077244,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PL",
      "tradeUsd": 9020966077,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PH",
      "tradeUsd": 9008417184,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "US",
      "tradeUsd": 8995880632,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "TR",
      "tradeUsd": 8979243212,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "NL",
      "tradeUsd": 8967584350,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "TR",
      "tradeUsd": 8966786644,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IR",
      "tradeUsd": 8953689705,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PL",
      "tradeUsd": 8909256154,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "JP",
      "tradeUsd": 8905927096,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CZ",
      "tradeUsd": 8896543361,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "IT",
      "tradeUsd": 8878418428,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "IT",
      "tradeUsd": 8870977806,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "HK",
      "tradeUsd": 8843731591,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CZ",
      "tradeUsd": 8841130116,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "SG",
      "tradeUsd": 8768858659,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CH",
      "tradeUsd": 8758856633,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "HK",
      "tradeUsd": 8730767799,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AT",
      "tradeUsd": 8705918540,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "FR",
      "tradeUsd": 8698159680,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "DK",
      "tradeUsd": 8690727771,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "JP",
      "tradeUsd": 8687651327,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CZ",
      "tradeUsd": 8635067232,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IE",
      "tradeUsd": 8619314981,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SE",
      "tradeUsd": 8615037541,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "ES",
      "tradeUsd": 8590486698,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "SG",
      "tradeUsd": 8587084511,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AT",
      "tradeUsd": 8583818598,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KE",
      "tradeUsd": 8582431786,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "NL",
      "tradeUsd": 8573114420,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AE",
      "tradeUsd": 8572875768,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "MX",
      "tradeUsd": 8571678431,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "RO",
      "tradeUsd": 8563637445,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "RO",
      "tradeUsd": 8558611836,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "NL",
      "tradeUsd": 8555175262,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "GB",
      "tradeUsd": 8531307389,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "IN",
      "tradeUsd": 8497250442,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "PL",
      "tradeUsd": 8465825066,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "DE",
      "tradeUsd": 8452570541,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "BE",
      "tradeUsd": 8452120064,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CA",
      "tradeUsd": 8434174094,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "DE",
      "tradeUsd": 8415315786,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IT",
      "tradeUsd": 8398556021,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "SE",
      "tradeUsd": 8395785794,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "HU",
      "tradeUsd": 8388355901,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "JP",
      "tradeUsd": 8359996103,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "NL",
      "tradeUsd": 8351886417,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "TR",
      "tradeUsd": 8349636146,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IE",
      "tradeUsd": 8348819846,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "US",
      "tradeUsd": 8344832017,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IT",
      "tradeUsd": 8329367816,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "US",
      "tradeUsd": 8319539966,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "AE",
      "tradeUsd": 8296567512,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "BE",
      "tradeUsd": 8282520628,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "RO",
      "tradeUsd": 8265167561,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "NZ",
      "tradeUsd": 8264594026,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "NZ",
      "tradeUsd": 8238807134,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "PL",
      "tradeUsd": 8187136393,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SE",
      "tradeUsd": 8186983781,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "NL",
      "tradeUsd": 8179142521,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TZ",
      "tradeUsd": 8174403793,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DK",
      "tradeUsd": 8158409927,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "ZA",
      "tradeUsd": 8136478254,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FR",
      "t": "PT",
      "tradeUsd": 8134840457,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "ID",
      "tradeUsd": 8132656162,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "BE",
      "tradeUsd": 8120891118,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TZ",
      "tradeUsd": 8091859941,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "TR",
      "tradeUsd": 8059044033,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MY",
      "tradeUsd": 8042748001,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "DK",
      "tradeUsd": 8039902155,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "RO",
      "tradeUsd": 8024274872,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "DE",
      "tradeUsd": 8023692488,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "DE",
      "tradeUsd": 8021141918,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "ZA",
      "tradeUsd": 8019745302,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "JP",
      "tradeUsd": 7995254440,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BE",
      "tradeUsd": 7971887646,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "AT",
      "tradeUsd": 7958215322,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "EC",
      "tradeUsd": 7947678748,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "ID",
      "tradeUsd": 7946873322,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "FR",
      "tradeUsd": 7945631290,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "GB",
      "tradeUsd": 7945205815,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CL",
      "tradeUsd": 7944784712,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "PL",
      "tradeUsd": 7935502880,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "TR",
      "tradeUsd": 7921691170,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "SG",
      "tradeUsd": 7902426238,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "QA",
      "tradeUsd": 7887152548,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KE",
      "tradeUsd": 7879355154,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "IT",
      "tradeUsd": 7874785713,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NZ",
      "tradeUsd": 7868530022,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "NL",
      "tradeUsd": 7861578214,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "PL",
      "tradeUsd": 7858848521,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "ES",
      "tradeUsd": 7858769806,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "GR",
      "tradeUsd": 7854660957,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "FR",
      "tradeUsd": 7831438475,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "VN",
      "tradeUsd": 7824073995,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "JP",
      "tradeUsd": 7813037043,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "MX",
      "tradeUsd": 7801789195,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "NL",
      "tradeUsd": 7795487538,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "NL",
      "tradeUsd": 7793544631,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "NL",
      "tradeUsd": 7782693464,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "HK",
      "tradeUsd": 7776787235,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CZ",
      "tradeUsd": 7765136707,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "AT",
      "tradeUsd": 7749229523,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AU",
      "tradeUsd": 7742428297,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MA",
      "tradeUsd": 7738735256,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NZ",
      "tradeUsd": 7737829698,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "RO",
      "tradeUsd": 7733122538,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AU",
      "tradeUsd": 7721948101,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "HU",
      "tradeUsd": 7719136793,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "FR",
      "tradeUsd": 7705184757,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "TH",
      "tradeUsd": 7672783997,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "IT",
      "tradeUsd": 7655115002,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "GR",
      "tradeUsd": 7619765198,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "CN",
      "tradeUsd": 7610500551,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "TR",
      "tradeUsd": 7574272308,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "FR",
      "tradeUsd": 7565152815,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "VN",
      "tradeUsd": 7544855982,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "TH",
      "tradeUsd": 7539783519,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "PL",
      "tradeUsd": 7528697230,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "EC",
      "tradeUsd": 7526660153,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "FR",
      "tradeUsd": 7520239866,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "PL",
      "tradeUsd": 7518438912,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CH",
      "tradeUsd": 7515734815,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "TH",
      "tradeUsd": 7507640780,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "PL",
      "tradeUsd": 7505213873,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "DE",
      "tradeUsd": 7486777498,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "CN",
      "tradeUsd": 7479017132,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "GR",
      "tradeUsd": 7478092819,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "ID",
      "tradeUsd": 7477464251,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "NL",
      "tradeUsd": 7462468127,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "SG",
      "tradeUsd": 7459246165,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "SK",
      "tradeUsd": 7455532785,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "DE",
      "tradeUsd": 7451270052,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "LU",
      "tradeUsd": 7423732071,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "NL",
      "tradeUsd": 7407480690,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "US",
      "tradeUsd": 7402729242,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "ID",
      "tradeUsd": 7397899301,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "HU",
      "tradeUsd": 7397392364,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "DE",
      "tradeUsd": 7395705136,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "RU",
      "tradeUsd": 7380502314,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "FR",
      "tradeUsd": 7350464609,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "SG",
      "tradeUsd": 7335702388,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CZ",
      "tradeUsd": 7289028395,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "PL",
      "tradeUsd": 7285860564,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "SK",
      "tradeUsd": 7255722266,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NP",
      "tradeUsd": 7247741657,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "US",
      "tradeUsd": 7239825708,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "KR",
      "tradeUsd": 7225553710,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "TH",
      "tradeUsd": 7222872396,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AE",
      "tradeUsd": 7208949486,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "FR",
      "tradeUsd": 7188438181,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "TR",
      "tradeUsd": 7178918232,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "US",
      "tradeUsd": 7175760140,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MX",
      "tradeUsd": 7175052955,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DO",
      "t": "US",
      "tradeUsd": 7161801443,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "CZ",
      "tradeUsd": 7157672531,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ZA",
      "tradeUsd": 7155082196,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "NL",
      "tradeUsd": 7154008544,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "DE",
      "tradeUsd": 7105685470,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "SG",
      "tradeUsd": 7082478600,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "DE",
      "tradeUsd": 7070298343,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "DE",
      "tradeUsd": 7062192007,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "AT",
      "tradeUsd": 7059681944,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HN",
      "tradeUsd": 7057473677,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SE",
      "tradeUsd": 7048783374,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "FR",
      "tradeUsd": 7021386766,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "NO",
      "tradeUsd": 6994337349,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "FR",
      "tradeUsd": 6976370171,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NP",
      "tradeUsd": 6951283336,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "TH",
      "tradeUsd": 6930981926,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "NO",
      "tradeUsd": 6883765289,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CN",
      "tradeUsd": 6882910462,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "VN",
      "tradeUsd": 6878129451,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "NO",
      "tradeUsd": 6848924520,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "LU",
      "tradeUsd": 6848751405,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "NL",
      "tradeUsd": 6845754223,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "JP",
      "tradeUsd": 6837152259,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CA",
      "tradeUsd": 6828513380,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "ES",
      "tradeUsd": 6826473481,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "MY",
      "tradeUsd": 6811128527,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HN",
      "tradeUsd": 6793660832,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "HU",
      "tradeUsd": 6787435496,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "NL",
      "tradeUsd": 6783824266,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "US",
      "tradeUsd": 6775203192,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "CH",
      "tradeUsd": 6758628560,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "FR",
      "tradeUsd": 6749782953,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SA",
      "tradeUsd": 6736369699,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "NO",
      "tradeUsd": 6728487474,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "JP",
      "tradeUsd": 6719356751,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "KR",
      "tradeUsd": 6715834478,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "ES",
      "tradeUsd": 6704726643,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "DE",
      "tradeUsd": 6701374981,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MX",
      "tradeUsd": 6679194405,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MY",
      "tradeUsd": 6677685666,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "IT",
      "tradeUsd": 6677303143,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "SG",
      "tradeUsd": 6666961611,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BR",
      "tradeUsd": 6664514172,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CL",
      "tradeUsd": 6658098288,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "FR",
      "tradeUsd": 6657240495,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "GB",
      "tradeUsd": 6640188367,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CA",
      "tradeUsd": 6638743304,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "UA",
      "tradeUsd": 6638504021,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "SG",
      "tradeUsd": 6627937845,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "ES",
      "tradeUsd": 6626850291,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SE",
      "tradeUsd": 6620514141,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "JP",
      "tradeUsd": 6620217025,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "CZ",
      "tradeUsd": 6581881105,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "MX",
      "tradeUsd": 6571267868,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BE",
      "tradeUsd": 6568640136,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "DE",
      "tradeUsd": 6548606857,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "HK",
      "tradeUsd": 6497858762,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SI",
      "tradeUsd": 6496193284,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "DE",
      "tradeUsd": 6482460883,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "US",
      "tradeUsd": 6476353028,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "FR",
      "tradeUsd": 6460355075,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "HK",
      "tradeUsd": 6458977551,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "US",
      "tradeUsd": 6458701039,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MA",
      "tradeUsd": 6454069521,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CN",
      "tradeUsd": 6451698068,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SE",
      "tradeUsd": 6443210687,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BR",
      "tradeUsd": 6442893030,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "LT",
      "tradeUsd": 6432406772,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "ES",
      "tradeUsd": 6399012909,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BE",
      "tradeUsd": 6391340244,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "IN",
      "tradeUsd": 6391336746,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SE",
      "tradeUsd": 6379594041,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "SA",
      "tradeUsd": 6352384713,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CL",
      "tradeUsd": 6343951510,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "GB",
      "tradeUsd": 6341117740,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "MX",
      "tradeUsd": 6327195023,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "IT",
      "tradeUsd": 6324875764,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CA",
      "tradeUsd": 6316853569,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "DK",
      "tradeUsd": 6307820855,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "HU",
      "tradeUsd": 6287940738,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "KR",
      "tradeUsd": 6285118877,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "GB",
      "tradeUsd": 6272992674,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "GB",
      "tradeUsd": 6272537012,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "BR",
      "tradeUsd": 6267451588,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "HU",
      "tradeUsd": 6252850996,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "LT",
      "tradeUsd": 6244045783,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "IN",
      "tradeUsd": 6216188884,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SI",
      "tradeUsd": 6198145264,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "DE",
      "tradeUsd": 6198080088,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "DK",
      "tradeUsd": 6154191562,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PT",
      "tradeUsd": 6133061683,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "ES",
      "tradeUsd": 6132983736,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "TR",
      "tradeUsd": 6128654222,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SI",
      "tradeUsd": 6125633463,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "RU",
      "tradeUsd": 6122425926,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PT",
      "tradeUsd": 6112620649,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SI",
      "tradeUsd": 6099706086,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "EG",
      "tradeUsd": 6092022475,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "PH",
      "tradeUsd": 6078958498,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "MY",
      "tradeUsd": 6073659989,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "SA",
      "tradeUsd": 6063377909,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IT",
      "tradeUsd": 6062723540,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IL",
      "tradeUsd": 6048680407,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "GB",
      "tradeUsd": 6047599379,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "HR",
      "tradeUsd": 6043735986,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "DE",
      "tradeUsd": 6022702287,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PT",
      "tradeUsd": 6017457982,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "AE",
      "tradeUsd": 6008618290,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "HR",
      "tradeUsd": 5997460233,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CN",
      "tradeUsd": 5979408050,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "GB",
      "tradeUsd": 5974227081,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "EC",
      "tradeUsd": 5968590359,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CH",
      "tradeUsd": 5954068491,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "US",
      "tradeUsd": 5933069730,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "GB",
      "tradeUsd": 5889314489,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "FI",
      "tradeUsd": 5889312644,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "LT",
      "tradeUsd": 5882971212,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "KR",
      "tradeUsd": 5882853207,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AU",
      "tradeUsd": 5881211725,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "GB",
      "tradeUsd": 5869462546,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "EC",
      "tradeUsd": 5861207557,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DE",
      "tradeUsd": 5852295628,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BE",
      "tradeUsd": 5833587743,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ZA",
      "tradeUsd": 5818797117,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DK",
      "tradeUsd": 5805427273,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "PA",
      "tradeUsd": 5804311014,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "BR",
      "tradeUsd": 5799898396,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "PH",
      "tradeUsd": 5798651241,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "OM",
      "tradeUsd": 5795822220,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "IR",
      "tradeUsd": 5793991977,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PT",
      "tradeUsd": 5792299358,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "FI",
      "tradeUsd": 5776886378,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "FI",
      "tradeUsd": 5776878291,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CH",
      "tradeUsd": 5776436893,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CA",
      "tradeUsd": 5772279323,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "EG",
      "tradeUsd": 5767805139,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "JP",
      "tradeUsd": 5748079125,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CN",
      "tradeUsd": 5747534735,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "GB",
      "tradeUsd": 5747495869,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "MY",
      "tradeUsd": 5735815469,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "JP",
      "tradeUsd": 5731428985,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "KR",
      "tradeUsd": 5697212692,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "CN",
      "tradeUsd": 5672881876,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "IT",
      "tradeUsd": 5662220920,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AU",
      "tradeUsd": 5660945987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "VN",
      "tradeUsd": 5651505598,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "US",
      "tradeUsd": 5648061872,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DE",
      "tradeUsd": 5646806466,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "KR",
      "tradeUsd": 5640635083,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IN",
      "tradeUsd": 5640511954,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "DE",
      "tradeUsd": 5634084857,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MX",
      "tradeUsd": 5632215226,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "ES",
      "tradeUsd": 5621058756,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "FR",
      "tradeUsd": 5619969249,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "CA",
      "tradeUsd": 5614652284,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "CN",
      "tradeUsd": 5612179925,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "US",
      "tradeUsd": 5610806113,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "FR",
      "tradeUsd": 5604400064,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IN",
      "tradeUsd": 5589957893,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "JP",
      "tradeUsd": 5577998685,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "TR",
      "tradeUsd": 5536703947,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "LT",
      "tradeUsd": 5508277476,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "KR",
      "tradeUsd": 5508091295,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AT",
      "tradeUsd": 5500813097,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "FI",
      "tradeUsd": 5495433688,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CN",
      "tradeUsd": 5484592704,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "VN",
      "tradeUsd": 5475609855,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "IN",
      "tradeUsd": 5446923883,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IL",
      "tradeUsd": 5434606318,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "ID",
      "tradeUsd": 5434312819,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "US",
      "tradeUsd": 5433820881,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "HK",
      "tradeUsd": 5433603409,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PA",
      "tradeUsd": 5433558389,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "FR",
      "tradeUsd": 5417081453,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "AU",
      "tradeUsd": 5415713643,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "NL",
      "tradeUsd": 5406664682,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PA",
      "tradeUsd": 5404300316,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "AE",
      "tradeUsd": 5396581470,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "HK",
      "tradeUsd": 5393072969,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "US",
      "tradeUsd": 5385282593,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "GB",
      "tradeUsd": 5381656893,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "AU",
      "tradeUsd": 5347057347,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "DE",
      "tradeUsd": 5339547643,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "GB",
      "tradeUsd": 5338607667,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IT",
      "tradeUsd": 5338602878,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CH",
      "tradeUsd": 5333089869,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "US",
      "tradeUsd": 5331014651,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SA",
      "tradeUsd": 5316030539,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "TR",
      "tradeUsd": 5314953588,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "US",
      "tradeUsd": 5313519324,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "GB",
      "tradeUsd": 5307072882,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "PL",
      "tradeUsd": 5297611103,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "NL",
      "tradeUsd": 5295627080,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "PL",
      "tradeUsd": 5292698678,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MX",
      "tradeUsd": 5283663735,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "TR",
      "tradeUsd": 5271991227,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "MA",
      "tradeUsd": 5268646115,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "AU",
      "tradeUsd": 5267685435,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SA",
      "tradeUsd": 5265632325,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IE",
      "tradeUsd": 5265473647,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IN",
      "tradeUsd": 5260909480,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DK",
      "tradeUsd": 5254749208,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "IT",
      "tradeUsd": 5253853009,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "BR",
      "tradeUsd": 5242968015,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SA",
      "tradeUsd": 5226487688,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KW",
      "tradeUsd": 5224580255,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CH",
      "tradeUsd": 5206169785,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "MY",
      "tradeUsd": 5185699459,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "HU",
      "tradeUsd": 5179973244,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CN",
      "tradeUsd": 5173514945,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "KR",
      "tradeUsd": 5157611434,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "PH",
      "tradeUsd": 5148559399,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "RS",
      "tradeUsd": 5143797826,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "KR",
      "tradeUsd": 5143278609,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "NO",
      "tradeUsd": 5140349884,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "AE",
      "tradeUsd": 5123295784,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "HR",
      "tradeUsd": 5109961692,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CH",
      "tradeUsd": 5085365043,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "JP",
      "tradeUsd": 5084239600,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "JO",
      "tradeUsd": 5080581592,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "ID",
      "tradeUsd": 5076377075,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "US",
      "tradeUsd": 5072805154,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "MX",
      "tradeUsd": 5068737621,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "TH",
      "tradeUsd": 5056577127,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "TR",
      "tradeUsd": 5056341508,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IT",
      "tradeUsd": 5052319087,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "JP",
      "tradeUsd": 5050483051,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "NG",
      "tradeUsd": 5042759202,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "DE",
      "tradeUsd": 5025778769,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NO",
      "tradeUsd": 5025604073,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "BE",
      "tradeUsd": 5021450948,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "NL",
      "tradeUsd": 5020422382,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "BR",
      "tradeUsd": 5012994091,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "IT",
      "tradeUsd": 5011332056,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "US",
      "tradeUsd": 5010808642,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "RU",
      "tradeUsd": 5009628035,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "KR",
      "tradeUsd": 5002695962,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IT",
      "tradeUsd": 5001115304,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NO",
      "tradeUsd": 4991224704,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "TR",
      "tradeUsd": 4980413073,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LK",
      "tradeUsd": 4968694576,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "AU",
      "tradeUsd": 4966793612,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TH",
      "t": "HK",
      "tradeUsd": 4953028865,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IT",
      "tradeUsd": 4949981838,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "DE",
      "tradeUsd": 4947496173,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "ES",
      "tradeUsd": 4943162942,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "RU",
      "tradeUsd": 4942106294,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CL",
      "tradeUsd": 4940161146,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CH",
      "tradeUsd": 4939489772,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GT",
      "tradeUsd": 4939388997,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "AE",
      "tradeUsd": 4934679618,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "JO",
      "tradeUsd": 4928928896,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CH",
      "tradeUsd": 4928475598,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "TZ",
      "tradeUsd": 4903099551,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IN",
      "tradeUsd": 4890690227,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "JP",
      "tradeUsd": 4881840890,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "US",
      "tradeUsd": 4881810013,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "BE",
      "tradeUsd": 4875617018,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "MY",
      "tradeUsd": 4862760371,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "US",
      "tradeUsd": 4860249603,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "RU",
      "tradeUsd": 4841029765,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "MY",
      "tradeUsd": 4839389329,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "KW",
      "tradeUsd": 4829449602,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "GR",
      "tradeUsd": 4817377109,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "TH",
      "tradeUsd": 4803381443,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "VE",
      "tradeUsd": 4801347537,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "ES",
      "tradeUsd": 4793499839,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "JP",
      "tradeUsd": 4759560483,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "PL",
      "tradeUsd": 4758618796,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "NL",
      "tradeUsd": 4749664455,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "KH",
      "tradeUsd": 4748323252,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "RU",
      "tradeUsd": 4745736109,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "IN",
      "tradeUsd": 4743514414,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "LV",
      "tradeUsd": 4738593620,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "BR",
      "tradeUsd": 4737609949,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "LK",
      "tradeUsd": 4715241964,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "PL",
      "tradeUsd": 4708911951,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "HU",
      "tradeUsd": 4707219647,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "FR",
      "tradeUsd": 4703371428,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AT",
      "tradeUsd": 4699045053,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "IN",
      "tradeUsd": 4693696603,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "PT",
      "tradeUsd": 4688624725,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "BE",
      "tradeUsd": 4687909369,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "US",
      "tradeUsd": 4687233034,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IN",
      "tradeUsd": 4686024342,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "BH",
      "tradeUsd": 4675651449,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "HU",
      "tradeUsd": 4664146627,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "US",
      "tradeUsd": 4663577861,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "DE",
      "tradeUsd": 4662611259,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "PA",
      "tradeUsd": 4659338272,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "QA",
      "tradeUsd": 4658192456,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "GB",
      "tradeUsd": 4651084811,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CH",
      "tradeUsd": 4643181051,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "CN",
      "tradeUsd": 4643172339,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BR",
      "tradeUsd": 4640894505,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "ES",
      "tradeUsd": 4637184755,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PA",
      "tradeUsd": 4637017863,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DO",
      "tradeUsd": 4628341574,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "ES",
      "tradeUsd": 4623263626,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "RO",
      "tradeUsd": 4616649491,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "US",
      "tradeUsd": 4610996491,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "GT",
      "tradeUsd": 4598170987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "LV",
      "tradeUsd": 4586087737,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "MX",
      "tradeUsd": 4580460766,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "FR",
      "tradeUsd": 4571290269,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AE",
      "tradeUsd": 4556206151,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NO",
      "tradeUsd": 4554791508,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "KR",
      "tradeUsd": 4553020073,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CH",
      "tradeUsd": 4550107876,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SV",
      "tradeUsd": 4544989563,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "AE",
      "tradeUsd": 4543655263,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CZ",
      "tradeUsd": 4535708330,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SI",
      "tradeUsd": 4532768394,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "RU",
      "tradeUsd": 4523886991,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "EG",
      "tradeUsd": 4522433743,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "FR",
      "tradeUsd": 4521717774,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "CH",
      "tradeUsd": 4516182539,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SA",
      "tradeUsd": 4509370642,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "NL",
      "tradeUsd": 4500718659,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CH",
      "tradeUsd": 4493579971,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NZ",
      "tradeUsd": 4493534160,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "RU",
      "tradeUsd": 4492377531,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "ID",
      "tradeUsd": 4487454436,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "TR",
      "tradeUsd": 4487320185,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "EG",
      "tradeUsd": 4486971384,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "OM",
      "tradeUsd": 4479588073,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "PA",
      "tradeUsd": 4472870278,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "IT",
      "tradeUsd": 4472791932,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IT",
      "tradeUsd": 4466598272,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "TH",
      "tradeUsd": 4446453822,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AT",
      "tradeUsd": 4434816941,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "MX",
      "tradeUsd": 4433009518,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CA",
      "tradeUsd": 4430770970,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "US",
      "tradeUsd": 4426990185,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MX",
      "tradeUsd": 4426293674,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CA",
      "tradeUsd": 4422739115,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "AE",
      "tradeUsd": 4407280710,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SI",
      "tradeUsd": 4404339035,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "DE",
      "tradeUsd": 4401896994,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CH",
      "tradeUsd": 4396872411,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "IE",
      "tradeUsd": 4382655891,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SK",
      "tradeUsd": 4378260137,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "BE",
      "tradeUsd": 4365608163,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "IN",
      "tradeUsd": 4358099905,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "JP",
      "tradeUsd": 4357001032,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "PT",
      "tradeUsd": 4355537340,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NZ",
      "tradeUsd": 4351765963,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "FR",
      "tradeUsd": 4343948416,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "BR",
      "tradeUsd": 4337681216,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "BR",
      "tradeUsd": 4337453563,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "FR",
      "tradeUsd": 4335923328,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "DO",
      "tradeUsd": 4335503580,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "GB",
      "tradeUsd": 4332227803,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "BR",
      "tradeUsd": 4318753782,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "MY",
      "tradeUsd": 4318735523,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "PH",
      "tradeUsd": 4314353014,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "ES",
      "tradeUsd": 4311589216,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "BE",
      "tradeUsd": 4305793456,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "ES",
      "tradeUsd": 4302996114,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SK",
      "tradeUsd": 4300503831,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "SG",
      "tradeUsd": 4288268287,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CZ",
      "tradeUsd": 4279321941,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "NL",
      "tradeUsd": 4271670585,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IE",
      "tradeUsd": 4265023614,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "PK",
      "tradeUsd": 4263595179,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "ID",
      "tradeUsd": 4262213389,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SV",
      "tradeUsd": 4260238254,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "FR",
      "tradeUsd": 4257507043,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "JP",
      "tradeUsd": 4257169375,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "AE",
      "tradeUsd": 4241850109,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "BR",
      "tradeUsd": 4241721467,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BR",
      "tradeUsd": 4237865061,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "VE",
      "tradeUsd": 4232021935,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "IT",
      "tradeUsd": 4229035198,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PL",
      "tradeUsd": 4208143214,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CI",
      "tradeUsd": 4208097072,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "RO",
      "tradeUsd": 4206708627,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "AE",
      "tradeUsd": 4200749156,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "RO",
      "tradeUsd": 4176358698,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NG",
      "tradeUsd": 4174298267,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "QA",
      "tradeUsd": 4172842577,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "GR",
      "tradeUsd": 4171476752,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DK",
      "tradeUsd": 4167172616,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "TH",
      "tradeUsd": 4163966807,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "BE",
      "tradeUsd": 4163628274,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CI",
      "tradeUsd": 4155532133,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "FR",
      "tradeUsd": 4148241823,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "NG",
      "tradeUsd": 4146201696,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "RO",
      "tradeUsd": 4144836527,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AO",
      "tradeUsd": 4141201134,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "TZ",
      "tradeUsd": 4134349396,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SK",
      "tradeUsd": 4129579689,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "ID",
      "tradeUsd": 4126775075,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "JP",
      "tradeUsd": 4121176866,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "MX",
      "tradeUsd": 4121175318,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "MX",
      "tradeUsd": 4103917218,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AT",
      "tradeUsd": 4101054783,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PL",
      "tradeUsd": 4092189730,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "CZ",
      "tradeUsd": 4086057060,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IT",
      "tradeUsd": 4085106804,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CA",
      "tradeUsd": 4073031544,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "TR",
      "tradeUsd": 4070289377,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "MY",
      "tradeUsd": 4066503324,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MT",
      "tradeUsd": 4060759585,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "RU",
      "tradeUsd": 4057640415,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "NL",
      "tradeUsd": 4057549069,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DK",
      "tradeUsd": 4055595250,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "SE",
      "tradeUsd": 4054169394,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SK",
      "tradeUsd": 4052206265,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PY",
      "t": "AR",
      "tradeUsd": 4051009548,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "VN",
      "tradeUsd": 4047061310,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "RO",
      "tradeUsd": 4024367731,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "AE",
      "tradeUsd": 4008707387,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "EG",
      "tradeUsd": 3996647676,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "BR",
      "tradeUsd": 3991350477,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "AT",
      "tradeUsd": 3989092585,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "TR",
      "tradeUsd": 3987325700,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "SA",
      "tradeUsd": 3985352293,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CA",
      "tradeUsd": 3984439846,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CA",
      "tradeUsd": 3970152720,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "TR",
      "tradeUsd": 3969147175,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SK",
      "tradeUsd": 3967198766,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NG",
      "tradeUsd": 3958507035,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CH",
      "tradeUsd": 3957368514,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "EG",
      "tradeUsd": 3956061431,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "OM",
      "tradeUsd": 3955945770,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AE",
      "tradeUsd": 3955267472,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "SE",
      "tradeUsd": 3951469567,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "RU",
      "tradeUsd": 3950051176,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SK",
      "tradeUsd": 3949681213,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PA",
      "tradeUsd": 3946992418,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "PL",
      "tradeUsd": 3943872797,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "GB",
      "tradeUsd": 3938519991,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "PL",
      "tradeUsd": 3937411457,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "IN",
      "tradeUsd": 3933795963,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "FR",
      "tradeUsd": 3932784097,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IE",
      "tradeUsd": 3926238791,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AE",
      "tradeUsd": 3920193616,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BE",
      "tradeUsd": 3915489700,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "BE",
      "tradeUsd": 3911793056,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LY",
      "tradeUsd": 3901492658,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LU",
      "t": "DE",
      "tradeUsd": 3898943791,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "CH",
      "tradeUsd": 3880707598,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "IN",
      "tradeUsd": 3879593932,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SA",
      "tradeUsd": 3877814695,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "ID",
      "tradeUsd": 3874600088,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "NL",
      "tradeUsd": 3869457870,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "CA",
      "tradeUsd": 3869285799,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "VN",
      "tradeUsd": 3863672979,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "NL",
      "tradeUsd": 3860389997,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "TR",
      "tradeUsd": 3859785248,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "TR",
      "tradeUsd": 3844132644,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CA",
      "tradeUsd": 3840292447,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IL",
      "tradeUsd": 3838145978,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IN",
      "tradeUsd": 3835166016,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CO",
      "tradeUsd": 3822571869,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CZ",
      "tradeUsd": 3815577284,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "FR",
      "tradeUsd": 3813206962,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "KR",
      "tradeUsd": 3812799302,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "NL",
      "tradeUsd": 3809533019,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "QA",
      "tradeUsd": 3804239904,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "OM",
      "tradeUsd": 3798023173,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "NL",
      "tradeUsd": 3786862811,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "GB",
      "tradeUsd": 3786548035,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "GB",
      "tradeUsd": 3780439889,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "RO",
      "tradeUsd": 3778043763,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "MX",
      "tradeUsd": 3768678397,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "TH",
      "tradeUsd": 3768289070,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "RO",
      "tradeUsd": 3764678994,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "AE",
      "tradeUsd": 3760125984,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CA",
      "tradeUsd": 3758769290,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LK",
      "tradeUsd": 3755454037,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CZ",
      "tradeUsd": 3755386974,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "IT",
      "tradeUsd": 3753591984,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PY",
      "tradeUsd": 3753100818,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "MA",
      "tradeUsd": 3752347491,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "BR",
      "tradeUsd": 3749666619,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "FR",
      "tradeUsd": 3746252964,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "BG",
      "tradeUsd": 3742981415,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "GR",
      "tradeUsd": 3742281766,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "PK",
      "tradeUsd": 3731642082,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "RO",
      "tradeUsd": 3728420293,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "BE",
      "tradeUsd": 3727844302,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "VN",
      "tradeUsd": 3722437150,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "FR",
      "tradeUsd": 3720415152,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "BE",
      "tradeUsd": 3719317246,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PT",
      "tradeUsd": 3716013615,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CM",
      "tradeUsd": 3715031809,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "US",
      "tradeUsd": 3711763685,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "FI",
      "tradeUsd": 3707624372,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NI",
      "t": "US",
      "tradeUsd": 3706839776,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "UA",
      "tradeUsd": 3703502972,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "LT",
      "tradeUsd": 3697611801,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "FR",
      "tradeUsd": 3688742025,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "KR",
      "tradeUsd": 3688485823,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "KZ",
      "tradeUsd": 3681948209,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LA",
      "tradeUsd": 3675902149,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "IT",
      "tradeUsd": 3673222153,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CL",
      "tradeUsd": 3670560983,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PY",
      "tradeUsd": 3668617673,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "GR",
      "tradeUsd": 3668072060,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AT",
      "tradeUsd": 3652124800,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IL",
      "tradeUsd": 3649015433,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "TR",
      "tradeUsd": 3643855576,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CM",
      "tradeUsd": 3643309434,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NI",
      "t": "US",
      "tradeUsd": 3640687704,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "BG",
      "tradeUsd": 3640394755,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "QA",
      "tradeUsd": 3636153018,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "PL",
      "tradeUsd": 3632799539,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "DE",
      "tradeUsd": 3631100490,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "EG",
      "tradeUsd": 3630952951,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "PH",
      "tradeUsd": 3628372152,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "JP",
      "tradeUsd": 3623141936,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "TN",
      "tradeUsd": 3617021903,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "VN",
      "tradeUsd": 3615550127,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "CH",
      "tradeUsd": 3615110770,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "BG",
      "tradeUsd": 3608325274,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "ES",
      "tradeUsd": 3603486513,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "AE",
      "tradeUsd": 3600689416,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "IE",
      "tradeUsd": 3591529494,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "BD",
      "tradeUsd": 3586197610,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LY",
      "tradeUsd": 3585674959,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CN",
      "tradeUsd": 3584888550,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "TH",
      "tradeUsd": 3580394204,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "LK",
      "tradeUsd": 3578261692,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "TN",
      "tradeUsd": 3572322295,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "KR",
      "tradeUsd": 3570292996,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "LT",
      "tradeUsd": 3555443176,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AU",
      "tradeUsd": 3540411485,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PY",
      "t": "BR",
      "tradeUsd": 3536322767,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "KR",
      "tradeUsd": 3533831874,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "GB",
      "tradeUsd": 3533492112,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SG",
      "tradeUsd": 3533167896,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NO",
      "tradeUsd": 3528781672,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "SG",
      "tradeUsd": 3528073982,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "PK",
      "tradeUsd": 3522263691,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "BG",
      "tradeUsd": 3518066952,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "NO",
      "tradeUsd": 3513148830,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SG",
      "tradeUsd": 3507432736,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "AU",
      "tradeUsd": 3506642525,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AU",
      "tradeUsd": 3505694225,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "CN",
      "tradeUsd": 3503839802,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "DE",
      "tradeUsd": 3499483029,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "NL",
      "tradeUsd": 3492203588,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SG",
      "tradeUsd": 3474885163,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IQ",
      "tradeUsd": 3470878249,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "AT",
      "tradeUsd": 3470427406,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "CH",
      "tradeUsd": 3468004654,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "NL",
      "tradeUsd": 3460306567,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "CN",
      "tradeUsd": 3456722381,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "TR",
      "tradeUsd": 3455273090,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "TH",
      "tradeUsd": 3452740323,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "TR",
      "tradeUsd": 3451863641,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "VE",
      "tradeUsd": 3450891154,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "RS",
      "tradeUsd": 3445691013,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "IT",
      "tradeUsd": 3434836184,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BE",
      "tradeUsd": 3432725603,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "JO",
      "tradeUsd": 3431139883,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "CN",
      "tradeUsd": 3428022335,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "IE",
      "tradeUsd": 3422071000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "ES",
      "tradeUsd": 3417114472,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PT",
      "tradeUsd": 3413996890,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "KR",
      "tradeUsd": 3412314044,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TH",
      "t": "JP",
      "tradeUsd": 3404439276,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "GB",
      "tradeUsd": 3403336070,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IL",
      "tradeUsd": 3400811576,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CN",
      "tradeUsd": 3399990000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "NZ",
      "tradeUsd": 3389541285,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "CH",
      "tradeUsd": 3389503675,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "ES",
      "tradeUsd": 3385278770,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "TR",
      "tradeUsd": 3381552524,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "AT",
      "tradeUsd": 3381003867,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "IT",
      "tradeUsd": 3380241065,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CN",
      "tradeUsd": 3379892402,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CR",
      "tradeUsd": 3379477600,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "SA",
      "tradeUsd": 3363183481,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PY",
      "t": "AR",
      "tradeUsd": 3363125249,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "AU",
      "tradeUsd": 3358425504,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CN",
      "tradeUsd": 3354700695,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "CY",
      "tradeUsd": 3354502795,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "EG",
      "tradeUsd": 3352651094,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LA",
      "tradeUsd": 3350822924,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "TH",
      "tradeUsd": 3349745364,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "PK",
      "tradeUsd": 3345223472,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "GB",
      "tradeUsd": 3343092336,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "SG",
      "tradeUsd": 3341455091,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "ES",
      "tradeUsd": 3332223565,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "RO",
      "tradeUsd": 3330734050,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CZ",
      "tradeUsd": 3329579309,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "TR",
      "tradeUsd": 3322335076,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "SG",
      "tradeUsd": 3321852018,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "KZ",
      "tradeUsd": 3315526768,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "NO",
      "tradeUsd": 3315489501,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "TR",
      "tradeUsd": 3315428341,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "DE",
      "tradeUsd": 3309957455,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CN",
      "tradeUsd": 3309540978,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "ES",
      "tradeUsd": 3308136036,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AT",
      "tradeUsd": 3303172784,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "TH",
      "tradeUsd": 3302430870,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CN",
      "tradeUsd": 3299341300,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "PL",
      "tradeUsd": 3293024864,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "KE",
      "tradeUsd": 3291835289,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "IE",
      "tradeUsd": 3291368411,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "NL",
      "tradeUsd": 3289639203,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "ES",
      "tradeUsd": 3284319719,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "BE",
      "tradeUsd": 3283594121,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "VN",
      "tradeUsd": 3282213893,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "US",
      "tradeUsd": 3280166647,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "MA",
      "tradeUsd": 3275163378,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "FI",
      "tradeUsd": 3268533963,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "UY",
      "tradeUsd": 3268080693,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "AE",
      "tradeUsd": 3267830749,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IQ",
      "tradeUsd": 3263678644,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "BE",
      "tradeUsd": 3261531325,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HN",
      "t": "US",
      "tradeUsd": 3261182581,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HU",
      "tradeUsd": 3260920987,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "IT",
      "tradeUsd": 3254918557,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "IN",
      "tradeUsd": 3253212607,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "NZ",
      "tradeUsd": 3250345447,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "AO",
      "tradeUsd": 3243273029,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "IE",
      "tradeUsd": 3242422000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "IT",
      "tradeUsd": 3237029301,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CO",
      "tradeUsd": 3233822350,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HN",
      "t": "US",
      "tradeUsd": 3228891055,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "BD",
      "tradeUsd": 3228400842,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "BE",
      "tradeUsd": 3227772980,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CN",
      "tradeUsd": 3226542029,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IR",
      "tradeUsd": 3225774461,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "AE",
      "tradeUsd": 3222278903,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "AU",
      "tradeUsd": 3208422643,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "SA",
      "tradeUsd": 3203556626,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "KH",
      "tradeUsd": 3196952393,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PE",
      "tradeUsd": 3196094519,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "RS",
      "tradeUsd": 3195716505,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "BE",
      "tradeUsd": 3194962691,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BH",
      "tradeUsd": 3189546958,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "HK",
      "tradeUsd": 3188152085,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "EG",
      "tradeUsd": 3182402723,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "NO",
      "tradeUsd": 3182140725,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "AE",
      "tradeUsd": 3181595937,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "UY",
      "tradeUsd": 3180924402,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "NZ",
      "tradeUsd": 3177429223,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "AU",
      "tradeUsd": 3176774968,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "ES",
      "tradeUsd": 3174180231,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "GB",
      "tradeUsd": 3168999416,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "AE",
      "tradeUsd": 3165705594,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PY",
      "tradeUsd": 3158414426,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "ES",
      "tradeUsd": 3157000487,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "FI",
      "tradeUsd": 3151814491,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IE",
      "tradeUsd": 3150649389,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ET",
      "tradeUsd": 3143304595,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "GB",
      "tradeUsd": 3134472560,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "CN",
      "tradeUsd": 3132433135,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "AE",
      "tradeUsd": 3120539497,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HU",
      "tradeUsd": 3119806963,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CZ",
      "tradeUsd": 3116800829,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "SA",
      "tradeUsd": 3114593451,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RO",
      "t": "PL",
      "tradeUsd": 3106361054,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "ID",
      "tradeUsd": 3106008327,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "DE",
      "tradeUsd": 3103744285,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "FI",
      "tradeUsd": 3102305272,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "KR",
      "tradeUsd": 3099503104,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AE",
      "tradeUsd": 3099281298,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "RO",
      "tradeUsd": 3088634353,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "NL",
      "tradeUsd": 3088586285,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "SG",
      "tradeUsd": 3086365302,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "AE",
      "tradeUsd": 3085372826,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "FR",
      "tradeUsd": 3084731984,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IE",
      "tradeUsd": 3083270520,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "CH",
      "tradeUsd": 3079227627,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "TR",
      "tradeUsd": 3072575478,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "SG",
      "tradeUsd": 3071137090,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "KE",
      "tradeUsd": 3068914001,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "NO",
      "tradeUsd": 3068100999,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "AE",
      "tradeUsd": 3065473512,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "BE",
      "tradeUsd": 3063532761,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "KZ",
      "tradeUsd": 3060429658,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CA",
      "tradeUsd": 3058751104,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "BD",
      "tradeUsd": 3052705870,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "TH",
      "tradeUsd": 3051961032,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "EG",
      "tradeUsd": 3049671009,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PT",
      "tradeUsd": 3048409026,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DZ",
      "tradeUsd": 3047112078,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DZ",
      "tradeUsd": 3041549224,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "BD",
      "tradeUsd": 3040462873,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "BE",
      "tradeUsd": 3027785576,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "EE",
      "tradeUsd": 3016543980,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "IT",
      "tradeUsd": 3013865693,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "DE",
      "tradeUsd": 3012854813,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "BR",
      "tradeUsd": 3009273805,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "DK",
      "tradeUsd": 3006484000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "TR",
      "tradeUsd": 3005282965,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IR",
      "tradeUsd": 3004128078,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "FR",
      "tradeUsd": 2999341894,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MA",
      "tradeUsd": 2998182381,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MA",
      "tradeUsd": 2997964737,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PY",
      "t": "BR",
      "tradeUsd": 2993356119,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CA",
      "tradeUsd": 2987637612,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SK",
      "tradeUsd": 2975719627,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "FR",
      "tradeUsd": 2975519909,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IN",
      "tradeUsd": 2970366224,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "UY",
      "tradeUsd": 2969285962,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "ES",
      "tradeUsd": 2968703761,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "IT",
      "tradeUsd": 2967609225,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "IT",
      "tradeUsd": 2965418444,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "KZ",
      "tradeUsd": 2960336812,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "RU",
      "tradeUsd": 2958843377,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "TH",
      "tradeUsd": 2956105868,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "FI",
      "tradeUsd": 2952523102,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "FR",
      "tradeUsd": 2949673223,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MM",
      "tradeUsd": 2945850284,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "SG",
      "tradeUsd": 2942607700,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NI",
      "tradeUsd": 2940985161,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "SA",
      "tradeUsd": 2940513426,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "TH",
      "tradeUsd": 2931640278,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "RS",
      "tradeUsd": 2927171407,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "RS",
      "tradeUsd": 2923285822,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "KW",
      "tradeUsd": 2918910848,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "GT",
      "tradeUsd": 2915309267,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "NZ",
      "tradeUsd": 2914383701,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "SA",
      "tradeUsd": 2913822673,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "FI",
      "tradeUsd": 2905742087,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "TH",
      "tradeUsd": 2903829927,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IN",
      "tradeUsd": 2898541934,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "JP",
      "tradeUsd": 2893228422,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PE",
      "tradeUsd": 2890486847,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "IT",
      "tradeUsd": 2889251132,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "IT",
      "tradeUsd": 2882600740,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "US",
      "tradeUsd": 2882245427,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "DK",
      "tradeUsd": 2881294660,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "US",
      "tradeUsd": 2881096561,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "GT",
      "tradeUsd": 2880631863,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "DZ",
      "tradeUsd": 2880268166,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "GB",
      "tradeUsd": 2879249124,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "LT",
      "tradeUsd": 2874680706,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "NL",
      "tradeUsd": 2867919609,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "ES",
      "tradeUsd": 2863456979,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "SA",
      "tradeUsd": 2861712813,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "CA",
      "tradeUsd": 2858146292,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "NZ",
      "tradeUsd": 2856219204,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "QA",
      "tradeUsd": 2850161337,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "MY",
      "tradeUsd": 2847716780,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "MX",
      "tradeUsd": 2846063959,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NG",
      "tradeUsd": 2843787155,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "SI",
      "tradeUsd": 2843762179,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "NL",
      "tradeUsd": 2843091212,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "DE",
      "tradeUsd": 2840754727,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "US",
      "tradeUsd": 2840475945,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BG",
      "tradeUsd": 2834857025,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CN",
      "tradeUsd": 2831249000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MX",
      "tradeUsd": 2828833511,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "LV",
      "tradeUsd": 2819063695,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "US",
      "tradeUsd": 2815935171,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "RU",
      "tradeUsd": 2815493307,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SK",
      "tradeUsd": 2813376326,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CO",
      "tradeUsd": 2813043491,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "JP",
      "tradeUsd": 2812856042,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IT",
      "tradeUsd": 2811596422,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "GB",
      "tradeUsd": 2794909321,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "US",
      "tradeUsd": 2790861568,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "RO",
      "tradeUsd": 2788441919,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CR",
      "tradeUsd": 2784230656,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "UA",
      "tradeUsd": 2781454691,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MX",
      "tradeUsd": 2778730184,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "ZA",
      "tradeUsd": 2776943226,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "CN",
      "tradeUsd": 2768213205,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "RO",
      "tradeUsd": 2767115842,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "BR",
      "tradeUsd": 2765853042,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PY",
      "tradeUsd": 2765465933,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "SI",
      "tradeUsd": 2763298757,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "US",
      "tradeUsd": 2758936587,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "GR",
      "tradeUsd": 2757526970,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "CH",
      "tradeUsd": 2751688782,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "RO",
      "tradeUsd": 2746293950,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "IT",
      "tradeUsd": 2746166259,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CO",
      "tradeUsd": 2743758462,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "CN",
      "tradeUsd": 2743195847,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IR",
      "tradeUsd": 2735987035,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "AR",
      "tradeUsd": 2719493406,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "FR",
      "tradeUsd": 2714233810,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "UY",
      "tradeUsd": 2707636243,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "RS",
      "tradeUsd": 2705251277,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "NL",
      "tradeUsd": 2702054000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "RS",
      "tradeUsd": 2699232134,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "NL",
      "tradeUsd": 2697319849,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HR",
      "tradeUsd": 2693710841,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "IN",
      "tradeUsd": 2692825233,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "TR",
      "tradeUsd": 2687316806,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "TR",
      "tradeUsd": 2686601152,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "AE",
      "tradeUsd": 2683566745,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CA",
      "tradeUsd": 2677339278,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "SA",
      "tradeUsd": 2671806901,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "DE",
      "tradeUsd": 2666849310,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IT",
      "tradeUsd": 2666557858,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "ID",
      "tradeUsd": 2651685447,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "HK",
      "tradeUsd": 2651473706,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "GR",
      "tradeUsd": 2650123091,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "RU",
      "tradeUsd": 2649171532,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "AE",
      "tradeUsd": 2648715165,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BG",
      "tradeUsd": 2645857184,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "GB",
      "tradeUsd": 2638515551,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "DE",
      "tradeUsd": 2636702746,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "DZ",
      "tradeUsd": 2630553352,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "LV",
      "tradeUsd": 2628186811,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "EG",
      "tradeUsd": 2627354814,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "RO",
      "tradeUsd": 2625380516,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "BR",
      "tradeUsd": 2624626229,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "HK",
      "tradeUsd": 2622638034,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "ZA",
      "tradeUsd": 2621447989,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "CI",
      "tradeUsd": 2616161050,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "AT",
      "tradeUsd": 2612324950,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GR",
      "tradeUsd": 2610099086,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UG",
      "t": "AE",
      "tradeUsd": 2609435055,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MT",
      "tradeUsd": 2608378372,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "EG",
      "tradeUsd": 2606845126,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NG",
      "tradeUsd": 2599318014,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "US",
      "tradeUsd": 2594098930,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "HR",
      "tradeUsd": 2590636236,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "ET",
      "tradeUsd": 2588704848,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "BD",
      "tradeUsd": 2587607869,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "LV",
      "tradeUsd": 2580800889,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "SA",
      "tradeUsd": 2575053212,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "IN",
      "tradeUsd": 2573504402,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DZ",
      "tradeUsd": 2567007389,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "FI",
      "tradeUsd": 2564034042,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "QA",
      "tradeUsd": 2558294311,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "RO",
      "tradeUsd": 2555268442,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "PE",
      "tradeUsd": 2554614989,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "GB",
      "tradeUsd": 2551921692,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "PL",
      "tradeUsd": 2549824544,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "ES",
      "tradeUsd": 2546407522,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "IT",
      "tradeUsd": 2546284975,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PL",
      "tradeUsd": 2543746718,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PY",
      "tradeUsd": 2536023577,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "AT",
      "tradeUsd": 2535976318,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "AE",
      "tradeUsd": 2533394473,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "NL",
      "tradeUsd": 2527947040,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "IN",
      "tradeUsd": 2525742612,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "IT",
      "tradeUsd": 2524921390,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "DE",
      "tradeUsd": 2523283401,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "BE",
      "tradeUsd": 2521735317,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "NL",
      "tradeUsd": 2512773257,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "ZA",
      "tradeUsd": 2509334312,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LY",
      "tradeUsd": 2506926721,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "NG",
      "tradeUsd": 2503532701,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "VE",
      "tradeUsd": 2501338460,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "PL",
      "tradeUsd": 2497257514,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "BE",
      "tradeUsd": 2497028795,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "SG",
      "tradeUsd": 2490476622,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "RO",
      "tradeUsd": 2488925977,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "DE",
      "tradeUsd": 2486640766,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "TH",
      "tradeUsd": 2482313705,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "PE",
      "tradeUsd": 2480480202,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "ES",
      "tradeUsd": 2476395042,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "GB",
      "tradeUsd": 2475392190,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "MX",
      "tradeUsd": 2475274987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BD",
      "tradeUsd": 2468166639,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "IT",
      "tradeUsd": 2467512856,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BE",
      "tradeUsd": 2463647284,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MX",
      "tradeUsd": 2460726009,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "DE",
      "tradeUsd": 2458244716,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "BD",
      "tradeUsd": 2456836827,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "PL",
      "tradeUsd": 2450927490,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "IN",
      "tradeUsd": 2450585879,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "ZA",
      "tradeUsd": 2443023411,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "GR",
      "tradeUsd": 2440950415,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IS",
      "t": "NL",
      "tradeUsd": 2439633318,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "BR",
      "tradeUsd": 2437590966,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "NL",
      "tradeUsd": 2428233686,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "US",
      "tradeUsd": 2424937178,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "US",
      "tradeUsd": 2420911494,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "HU",
      "tradeUsd": 2417149455,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "KW",
      "tradeUsd": 2411823129,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "NL",
      "tradeUsd": 2409825292,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "RU",
      "tradeUsd": 2407535339,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "FR",
      "tradeUsd": 2407416589,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "IT",
      "tradeUsd": 2406618213,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "CN",
      "tradeUsd": 2406413385,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LU",
      "t": "FR",
      "tradeUsd": 2400405190,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "NL",
      "tradeUsd": 2400103065,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "NL",
      "tradeUsd": 2399324000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "FI",
      "tradeUsd": 2398429616,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "IN",
      "tradeUsd": 2397798394,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HR",
      "tradeUsd": 2396054007,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NO",
      "tradeUsd": 2394454879,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "DE",
      "tradeUsd": 2394059054,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "CN",
      "tradeUsd": 2393836596,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "ZA",
      "tradeUsd": 2392323221,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "BG",
      "tradeUsd": 2391388947,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "ZA",
      "tradeUsd": 2388974065,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "KW",
      "tradeUsd": 2387993508,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "UA",
      "tradeUsd": 2383120341,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IL",
      "tradeUsd": 2378100663,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TN",
      "tradeUsd": 2376458069,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "CN",
      "tradeUsd": 2375627611,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "HU",
      "tradeUsd": 2375110123,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DZ",
      "tradeUsd": 2373913302,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "RU",
      "tradeUsd": 2373494646,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "EE",
      "tradeUsd": 2371634150,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "NI",
      "tradeUsd": 2370792167,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "TR",
      "tradeUsd": 2368623427,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "LU",
      "tradeUsd": 2365373019,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "SI",
      "tradeUsd": 2363085904,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "NL",
      "tradeUsd": 2360897011,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "EE",
      "tradeUsd": 2352182806,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "ZA",
      "tradeUsd": 2351193346,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "BE",
      "tradeUsd": 2347837008,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "BR",
      "tradeUsd": 2347030069,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "KZ",
      "tradeUsd": 2345104720,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "KR",
      "tradeUsd": 2344479138,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "IN",
      "tradeUsd": 2342586973,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "DZ",
      "tradeUsd": 2341667522,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "US",
      "tradeUsd": 2339341087,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IL",
      "tradeUsd": 2337635653,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "SI",
      "tradeUsd": 2332996905,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "ES",
      "tradeUsd": 2330243335,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "JP",
      "tradeUsd": 2329050051,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "FI",
      "tradeUsd": 2328067275,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "SA",
      "tradeUsd": 2327115016,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "LV",
      "tradeUsd": 2325944158,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NO",
      "tradeUsd": 2325543191,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "FI",
      "tradeUsd": 2323892646,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "EE",
      "tradeUsd": 2323740700,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PL",
      "tradeUsd": 2322029082,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "RU",
      "tradeUsd": 2321474234,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "ES",
      "tradeUsd": 2317759398,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "RU",
      "tradeUsd": 2316467042,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "JP",
      "tradeUsd": 2316038393,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "UA",
      "tradeUsd": 2315934345,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "EG",
      "tradeUsd": 2314700830,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "NZ",
      "tradeUsd": 2312993854,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MM",
      "tradeUsd": 2312940863,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "MT",
      "tradeUsd": 2312205443,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LA",
      "t": "CN",
      "tradeUsd": 2310166085,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "EE",
      "tradeUsd": 2307220319,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BH",
      "tradeUsd": 2307202773,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CZ",
      "tradeUsd": 2305134218,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "BR",
      "tradeUsd": 2299475885,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IR",
      "tradeUsd": 2298109484,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "GB",
      "tradeUsd": 2295261733,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "RS",
      "tradeUsd": 2294707818,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TZ",
      "t": "ZA",
      "tradeUsd": 2292706654,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "AU",
      "tradeUsd": 2289194265,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "US",
      "tradeUsd": 2289041403,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PT",
      "tradeUsd": 2281543455,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IS",
      "t": "NL",
      "tradeUsd": 2277781898,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "DE",
      "tradeUsd": 2277631000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "KE",
      "tradeUsd": 2272116518,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "ES",
      "tradeUsd": 2269407894,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "CH",
      "tradeUsd": 2266559699,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MT",
      "tradeUsd": 2266168300,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "PH",
      "tradeUsd": 2262490726,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "US",
      "tradeUsd": 2259579847,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "MX",
      "tradeUsd": 2259018308,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CA",
      "tradeUsd": 2258522504,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IQ",
      "tradeUsd": 2258506365,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "KW",
      "tradeUsd": 2252690568,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "KW",
      "tradeUsd": 2252260168,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BD",
      "tradeUsd": 2251990367,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "IT",
      "tradeUsd": 2251657928,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "NO",
      "tradeUsd": 2251222719,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "ES",
      "tradeUsd": 2247201499,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "PT",
      "tradeUsd": 2243832757,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "NL",
      "tradeUsd": 2241404029,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SK",
      "tradeUsd": 2240820158,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "IN",
      "tradeUsd": 2239612000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "MX",
      "tradeUsd": 2234646311,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "CH",
      "tradeUsd": 2229868949,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "ES",
      "tradeUsd": 2227544756,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "MY",
      "tradeUsd": 2226530982,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "AE",
      "tradeUsd": 2223717332,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SA",
      "tradeUsd": 2222341450,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CZ",
      "tradeUsd": 2221058862,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "GR",
      "tradeUsd": 2218335630,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "GR",
      "tradeUsd": 2217594535,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "JP",
      "tradeUsd": 2215389299,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "IN",
      "tradeUsd": 2214884262,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BD",
      "tradeUsd": 2213964142,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "IN",
      "tradeUsd": 2211745000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "PT",
      "tradeUsd": 2210468063,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "PY",
      "tradeUsd": 2209125626,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "TR",
      "tradeUsd": 2207967010,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "PH",
      "tradeUsd": 2205670472,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "IT",
      "tradeUsd": 2201714489,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PH",
      "tradeUsd": 2198964585,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "BG",
      "tradeUsd": 2194696761,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "ES",
      "tradeUsd": 2194417763,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "IL",
      "tradeUsd": 2190206687,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "MX",
      "tradeUsd": 2188499289,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "TR",
      "tradeUsd": 2187430080,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "HU",
      "tradeUsd": 2185840230,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "FI",
      "tradeUsd": 2184313991,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "MY",
      "tradeUsd": 2183647959,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "BE",
      "tradeUsd": 2180715642,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "TR",
      "tradeUsd": 2180382122,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "US",
      "tradeUsd": 2164992774,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "RU",
      "tradeUsd": 2164803293,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "US",
      "tradeUsd": 2161902850,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "MX",
      "tradeUsd": 2161004953,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NP",
      "tradeUsd": 2159980736,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SK",
      "tradeUsd": 2157442197,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "UA",
      "tradeUsd": 2154955363,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "BD",
      "tradeUsd": 2149946415,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "DK",
      "tradeUsd": 2148141777,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "MX",
      "tradeUsd": 2145087311,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "GB",
      "tradeUsd": 2144393580,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "HR",
      "tradeUsd": 2135578461,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PK",
      "tradeUsd": 2135147106,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IL",
      "tradeUsd": 2130422923,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "LU",
      "tradeUsd": 2128978921,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "JP",
      "tradeUsd": 2127493738,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "JO",
      "tradeUsd": 2125875094,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "KR",
      "tradeUsd": 2122674376,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "KW",
      "tradeUsd": 2121103522,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "UA",
      "tradeUsd": 2119431080,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "ZA",
      "tradeUsd": 2119253191,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "DE",
      "tradeUsd": 2118594000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PH",
      "tradeUsd": 2117610604,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BE",
      "tradeUsd": 2117298250,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "TH",
      "tradeUsd": 2117026425,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CZ",
      "tradeUsd": 2113173742,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "NL",
      "tradeUsd": 2112201700,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "HK",
      "tradeUsd": 2111487674,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "GB",
      "tradeUsd": 2111180000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "ES",
      "tradeUsd": 2110458559,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CL",
      "tradeUsd": 2108338967,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "CA",
      "tradeUsd": 2108265641,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "ES",
      "tradeUsd": 2107160590,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BD",
      "tradeUsd": 2105984306,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "RU",
      "tradeUsd": 2104132500,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "ZA",
      "tradeUsd": 2102521144,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "BE",
      "tradeUsd": 2100084554,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "IT",
      "tradeUsd": 2098323762,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "IN",
      "tradeUsd": 2093907040,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "VN",
      "tradeUsd": 2093184114,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "HR",
      "tradeUsd": 2090865121,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "GB",
      "tradeUsd": 2087415984,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "IN",
      "tradeUsd": 2082631073,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "SA",
      "tradeUsd": 2078708838,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "SE",
      "tradeUsd": 2077056652,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "PK",
      "tradeUsd": 2075496757,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "BD",
      "tradeUsd": 2074672713,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "TH",
      "tradeUsd": 2070918177,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "PT",
      "tradeUsd": 2062252626,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UY",
      "t": "BR",
      "tradeUsd": 2060209579,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "PT",
      "tradeUsd": 2056049117,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "IE",
      "tradeUsd": 2055638870,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "TH",
      "tradeUsd": 2053766213,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LU",
      "t": "BE",
      "tradeUsd": 2051690908,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "KR",
      "tradeUsd": 2050649932,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "ID",
      "tradeUsd": 2048590366,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "BE",
      "tradeUsd": 2048333568,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "LV",
      "tradeUsd": 2047562213,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "RU",
      "tradeUsd": 2045823581,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "US",
      "tradeUsd": 2041223928,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "TH",
      "tradeUsd": 2038845998,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "BE",
      "tradeUsd": 2037631562,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SE",
      "tradeUsd": 2037234908,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CL",
      "tradeUsd": 2036098622,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "JO",
      "tradeUsd": 2035442958,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AU",
      "tradeUsd": 2031353409,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "TR",
      "tradeUsd": 2030814650,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "JO",
      "tradeUsd": 2030784950,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "TN",
      "tradeUsd": 2025842840,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "CN",
      "tradeUsd": 2025623542,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "TN",
      "tradeUsd": 2024502307,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CO",
      "tradeUsd": 2019795487,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "DE",
      "tradeUsd": 2019698398,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "EC",
      "tradeUsd": 2014886227,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "ES",
      "tradeUsd": 2008232029,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "BR",
      "tradeUsd": 2005154667,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "US",
      "tradeUsd": 2004737637,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "SE",
      "tradeUsd": 2002887995,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "KH",
      "tradeUsd": 2001699952,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "BE",
      "tradeUsd": 2000596334,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "TR",
      "tradeUsd": 1999110677,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "KW",
      "tradeUsd": 1998551092,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "US",
      "tradeUsd": 1998015500,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "IT",
      "tradeUsd": 1994256969,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "HK",
      "tradeUsd": 1992483594,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "NL",
      "tradeUsd": 1990367909,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LT",
      "tradeUsd": 1987780975,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "CN",
      "tradeUsd": 1987064773,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "EG",
      "tradeUsd": 1986828785,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "HK",
      "tradeUsd": 1984860000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "GR",
      "tradeUsd": 1977994871,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "GB",
      "tradeUsd": 1977944436,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "US",
      "tradeUsd": 1977154694,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "LU",
      "tradeUsd": 1975981901,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "GB",
      "tradeUsd": 1975320290,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "ZA",
      "tradeUsd": 1973761604,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "US",
      "tradeUsd": 1971356248,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "FR",
      "tradeUsd": 1969328713,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "KZ",
      "tradeUsd": 1968392695,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "TR",
      "tradeUsd": 1965526657,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "IN",
      "tradeUsd": 1964287103,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IL",
      "tradeUsd": 1962051997,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LT",
      "tradeUsd": 1959336413,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AU",
      "tradeUsd": 1959293731,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "OM",
      "tradeUsd": 1954232484,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "BG",
      "tradeUsd": 1952175041,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "LY",
      "tradeUsd": 1950875109,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "SV",
      "tradeUsd": 1950620317,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CL",
      "tradeUsd": 1947489594,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "CH",
      "tradeUsd": 1946508565,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KW",
      "tradeUsd": 1945403172,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "CN",
      "tradeUsd": 1945299397,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "KR",
      "tradeUsd": 1941465477,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "RO",
      "tradeUsd": 1939887248,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CZ",
      "tradeUsd": 1939498585,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "TR",
      "tradeUsd": 1939074770,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "NG",
      "tradeUsd": 1938865516,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PH",
      "tradeUsd": 1936035548,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "IT",
      "tradeUsd": 1935701501,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HN",
      "tradeUsd": 1935385887,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IL",
      "tradeUsd": 1935242347,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "PL",
      "tradeUsd": 1934039691,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "CN",
      "tradeUsd": 1933892411,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "LT",
      "tradeUsd": 1929010719,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "BR",
      "tradeUsd": 1927266825,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SA",
      "tradeUsd": 1927166158,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "GB",
      "tradeUsd": 1925328176,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "DE",
      "tradeUsd": 1923262714,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "AU",
      "tradeUsd": 1921542896,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "FR",
      "tradeUsd": 1920476443,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "MX",
      "tradeUsd": 1914288863,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IL",
      "tradeUsd": 1913665832,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "IT",
      "tradeUsd": 1913578528,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "KW",
      "tradeUsd": 1913461458,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "MY",
      "tradeUsd": 1909179975,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "AU",
      "tradeUsd": 1907379330,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IQ",
      "tradeUsd": 1906310360,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "BR",
      "tradeUsd": 1905909663,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "IL",
      "tradeUsd": 1901980683,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "LT",
      "tradeUsd": 1894709873,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SE",
      "tradeUsd": 1893520884,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "GB",
      "tradeUsd": 1892365421,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "TN",
      "tradeUsd": 1892259483,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "UA",
      "tradeUsd": 1890894817,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "BG",
      "tradeUsd": 1888137747,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "BR",
      "tradeUsd": 1885420724,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "FI",
      "tradeUsd": 1884201517,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "PL",
      "tradeUsd": 1884170814,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UY",
      "t": "BR",
      "tradeUsd": 1881373299,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "PT",
      "tradeUsd": 1881356100,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "GB",
      "tradeUsd": 1881245026,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "CA",
      "tradeUsd": 1880900714,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "AU",
      "tradeUsd": 1880758925,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "ES",
      "tradeUsd": 1879948422,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "UY",
      "tradeUsd": 1878741511,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "FR",
      "tradeUsd": 1876891816,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "IT",
      "tradeUsd": 1876260499,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "SV",
      "tradeUsd": 1874544953,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "ES",
      "tradeUsd": 1870261505,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "NL",
      "tradeUsd": 1868727760,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "OM",
      "tradeUsd": 1862409322,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "PL",
      "tradeUsd": 1860045641,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "CH",
      "tradeUsd": 1853881539,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "ES",
      "tradeUsd": 1851291466,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "JP",
      "tradeUsd": 1846698682,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MT",
      "tradeUsd": 1845210684,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "FI",
      "tradeUsd": 1844383677,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "LY",
      "tradeUsd": 1839878400,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "BR",
      "tradeUsd": 1839531142,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "SE",
      "tradeUsd": 1839342356,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LY",
      "tradeUsd": 1836807850,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "LY",
      "tradeUsd": 1836078959,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "UA",
      "tradeUsd": 1834285611,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MY",
      "tradeUsd": 1830958888,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "HN",
      "tradeUsd": 1828411646,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "HK",
      "tradeUsd": 1828333000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "MT",
      "tradeUsd": 1827577581,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "DE",
      "tradeUsd": 1826079685,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CL",
      "tradeUsd": 1823841191,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KW",
      "tradeUsd": 1822932281,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "NO",
      "tradeUsd": 1821917094,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IL",
      "tradeUsd": 1821086145,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "GR",
      "tradeUsd": 1817934217,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "HR",
      "tradeUsd": 1816779563,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "SE",
      "tradeUsd": 1816755844,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "DE",
      "tradeUsd": 1815612511,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "CN",
      "tradeUsd": 1809354894,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "HU",
      "tradeUsd": 1808036399,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "IN",
      "tradeUsd": 1807704523,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "TN",
      "tradeUsd": 1807039961,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "UA",
      "tradeUsd": 1806387689,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "RO",
      "tradeUsd": 1805640931,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "GB",
      "tradeUsd": 1805020428,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "DK",
      "tradeUsd": 1800942498,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BO",
      "tradeUsd": 1798535294,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "NL",
      "tradeUsd": 1795841742,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CA",
      "tradeUsd": 1795518552,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "FR",
      "tradeUsd": 1793761380,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SV",
      "tradeUsd": 1789132868,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "CL",
      "tradeUsd": 1787699175,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "MX",
      "tradeUsd": 1785228573,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GR",
      "tradeUsd": 1783433382,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "IL",
      "tradeUsd": 1778441451,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "UA",
      "tradeUsd": 1777542610,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "CH",
      "tradeUsd": 1777335572,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "KW",
      "tradeUsd": 1777227059,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "LT",
      "tradeUsd": 1776299344,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "BE",
      "tradeUsd": 1775789620,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "AU",
      "tradeUsd": 1774858576,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "DK",
      "tradeUsd": 1774705802,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "UY",
      "tradeUsd": 1773038774,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "AE",
      "tradeUsd": 1771266925,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "IL",
      "tradeUsd": 1770226130,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "BG",
      "tradeUsd": 1769185712,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "TR",
      "tradeUsd": 1767941249,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NP",
      "tradeUsd": 1765023876,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "SK",
      "tradeUsd": 1764978938,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "AE",
      "tradeUsd": 1763198904,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "RO",
      "tradeUsd": 1760757331,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "DE",
      "tradeUsd": 1760282456,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IN",
      "tradeUsd": 1757778117,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "QA",
      "tradeUsd": 1753965532,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IE",
      "tradeUsd": 1752632190,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PL",
      "tradeUsd": 1750837816,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "EE",
      "tradeUsd": 1749743833,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "RU",
      "tradeUsd": 1744271782,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "BE",
      "tradeUsd": 1743878879,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "RU",
      "tradeUsd": 1740863719,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "LT",
      "tradeUsd": 1740208421,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "AU",
      "tradeUsd": 1738367748,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BD",
      "tradeUsd": 1737017647,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "EE",
      "tradeUsd": 1734150303,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IE",
      "tradeUsd": 1733224533,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CA",
      "tradeUsd": 1731418895,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "IN",
      "tradeUsd": 1730648421,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "ID",
      "tradeUsd": 1728518658,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "BR",
      "tradeUsd": 1727058565,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "MX",
      "tradeUsd": 1726804384,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "EG",
      "tradeUsd": 1726369654,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "IQ",
      "tradeUsd": 1726059942,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "BR",
      "tradeUsd": 1725621832,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "GR",
      "tradeUsd": 1725040949,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "SI",
      "tradeUsd": 1724159324,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "DE",
      "tradeUsd": 1720898418,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "HR",
      "tradeUsd": 1719629660,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "PT",
      "tradeUsd": 1716880620,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "CA",
      "tradeUsd": 1716310309,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "NL",
      "tradeUsd": 1714447314,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "AE",
      "tradeUsd": 1713456901,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "AE",
      "tradeUsd": 1707203598,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CA",
      "tradeUsd": 1705758191,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "KR",
      "tradeUsd": 1705276822,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "SE",
      "tradeUsd": 1704277090,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "SG",
      "tradeUsd": 1700318525,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "CZ",
      "tradeUsd": 1699816259,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "GB",
      "tradeUsd": 1699136502,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "NL",
      "tradeUsd": 1697199340,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "SE",
      "tradeUsd": 1696931748,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "HU",
      "tradeUsd": 1696853343,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CH",
      "tradeUsd": 1696472417,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "VN",
      "tradeUsd": 1694890634,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "MX",
      "tradeUsd": 1694597895,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "HU",
      "tradeUsd": 1692606251,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "CA",
      "tradeUsd": 1690220487,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "SE",
      "tradeUsd": 1687919450,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "GR",
      "tradeUsd": 1686939422,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "UA",
      "tradeUsd": 1683510839,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "GB",
      "tradeUsd": 1683061987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BH",
      "tradeUsd": 1676246189,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "MX",
      "tradeUsd": 1673588998,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "HN",
      "tradeUsd": 1673245245,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "HK",
      "tradeUsd": 1673058214,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "VN",
      "tradeUsd": 1669669937,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "RS",
      "tradeUsd": 1665271456,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "EG",
      "tradeUsd": 1664522579,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "MY",
      "tradeUsd": 1663443982,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "NL",
      "tradeUsd": 1661216076,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IQ",
      "tradeUsd": 1660554212,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "UY",
      "tradeUsd": 1658956907,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "VN",
      "tradeUsd": 1657646957,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CH",
      "tradeUsd": 1656315484,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "BR",
      "tradeUsd": 1656095187,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "QA",
      "tradeUsd": 1652083607,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "RO",
      "tradeUsd": 1652059001,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "IL",
      "tradeUsd": 1651159721,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CL",
      "tradeUsd": 1649873524,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "FR",
      "tradeUsd": 1649275956,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "UY",
      "tradeUsd": 1649000113,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BH",
      "tradeUsd": 1646230202,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "ZA",
      "tradeUsd": 1642492859,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "SG",
      "tradeUsd": 1641873591,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "BR",
      "tradeUsd": 1640908178,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "QA",
      "tradeUsd": 1639543795,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "SE",
      "tradeUsd": 1638881982,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TZ",
      "t": "IN",
      "tradeUsd": 1637027879,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "US",
      "tradeUsd": 1636863557,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "EG",
      "tradeUsd": 1636384448,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "SA",
      "tradeUsd": 1634512590,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "BE",
      "tradeUsd": 1634445757,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "SV",
      "tradeUsd": 1633520047,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "CA",
      "tradeUsd": 1632270426,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "MY",
      "tradeUsd": 1632065871,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "JP",
      "tradeUsd": 1630986067,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "RS",
      "tradeUsd": 1629486234,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "HU",
      "tradeUsd": 1629409926,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "LT",
      "tradeUsd": 1629385761,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "SA",
      "tradeUsd": 1629194086,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "HN",
      "tradeUsd": 1629132577,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "BD",
      "tradeUsd": 1624853041,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "HU",
      "tradeUsd": 1623780064,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "GB",
      "tradeUsd": 1620305422,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "PT",
      "tradeUsd": 1620159434,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "LT",
      "tradeUsd": 1619401541,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "NZ",
      "tradeUsd": 1619167563,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "MX",
      "tradeUsd": 1617064651,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "ES",
      "tradeUsd": 1616886786,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IE",
      "tradeUsd": 1615968574,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "CN",
      "tradeUsd": 1614309618,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "JO",
      "tradeUsd": 1612604778,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "HU",
      "tradeUsd": 1609583301,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "GB",
      "tradeUsd": 1605803240,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "IL",
      "tradeUsd": 1605059488,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "LT",
      "tradeUsd": 1605006916,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "BR",
      "tradeUsd": 1602059026,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "SE",
      "tradeUsd": 1601713178,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "NL",
      "tradeUsd": 1600162974,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "CH",
      "tradeUsd": 1600118564,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PK",
      "tradeUsd": 1600106430,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "ES",
      "tradeUsd": 1596247167,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SI",
      "tradeUsd": 1595865232,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CH",
      "tradeUsd": 1587624490,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "KR",
      "tradeUsd": 1586574848,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "BE",
      "tradeUsd": 1581233241,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LT",
      "tradeUsd": 1580048213,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "BR",
      "tradeUsd": 1576261066,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "MT",
      "tradeUsd": 1575651647,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CA",
      "tradeUsd": 1574454969,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "GB",
      "tradeUsd": 1572913335,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "IT",
      "tradeUsd": 1571643185,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "ID",
      "tradeUsd": 1569389616,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AT",
      "tradeUsd": 1568434631,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "FR",
      "tradeUsd": 1568384688,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "BE",
      "tradeUsd": 1566065000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "KR",
      "tradeUsd": 1564998177,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LT",
      "tradeUsd": 1562791556,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "CN",
      "tradeUsd": 1561618123,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "PL",
      "tradeUsd": 1561212110,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "PE",
      "tradeUsd": 1560534235,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "NL",
      "tradeUsd": 1559138216,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "RS",
      "tradeUsd": 1558569692,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "FR",
      "tradeUsd": 1555293206,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TZ",
      "t": "IN",
      "tradeUsd": 1553951718,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "RO",
      "tradeUsd": 1552081608,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PH",
      "tradeUsd": 1550999933,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "HK",
      "tradeUsd": 1549374881,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UY",
      "t": "CN",
      "tradeUsd": 1548330588,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BH",
      "tradeUsd": 1546803683,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "FR",
      "tradeUsd": 1545182286,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "RS",
      "tradeUsd": 1545123709,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "NL",
      "tradeUsd": 1544007234,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "ES",
      "tradeUsd": 1543723342,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CY",
      "tradeUsd": 1539728237,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "TR",
      "tradeUsd": 1538388094,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "IT",
      "tradeUsd": 1536877525,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "TR",
      "tradeUsd": 1535811183,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "TR",
      "tradeUsd": 1535503504,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "BG",
      "tradeUsd": 1532666373,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "JO",
      "tradeUsd": 1532178906,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "TR",
      "tradeUsd": 1530458676,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "BR",
      "tradeUsd": 1528032469,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "GB",
      "tradeUsd": 1527951000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "EG",
      "tradeUsd": 1527869010,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "GB",
      "tradeUsd": 1526743130,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IE",
      "tradeUsd": 1520830224,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "DE",
      "tradeUsd": 1517630411,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IN",
      "tradeUsd": 1516990851,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "CN",
      "tradeUsd": 1514642808,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "NL",
      "tradeUsd": 1514509150,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "ES",
      "tradeUsd": 1511243799,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BH",
      "tradeUsd": 1511109077,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "US",
      "tradeUsd": 1509870177,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IE",
      "tradeUsd": 1508057806,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BD",
      "tradeUsd": 1507634804,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CH",
      "tradeUsd": 1507240573,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "BE",
      "tradeUsd": 1506371665,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SI",
      "tradeUsd": 1504510888,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "CH",
      "tradeUsd": 1504436806,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "SA",
      "tradeUsd": 1503690660,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "ID",
      "tradeUsd": 1502801801,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "FR",
      "tradeUsd": 1502745962,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "CH",
      "tradeUsd": 1502183046,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "US",
      "tradeUsd": 1501947378,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "HK",
      "tradeUsd": 1498896917,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "RU",
      "tradeUsd": 1498029031,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "IN",
      "tradeUsd": 1495820153,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "SA",
      "tradeUsd": 1493076670,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "SE",
      "tradeUsd": 1492987859,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "LK",
      "tradeUsd": 1492911383,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "PE",
      "tradeUsd": 1492677931,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "QA",
      "tradeUsd": 1490930127,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "NL",
      "tradeUsd": 1490814606,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MA",
      "tradeUsd": 1485638988,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "ES",
      "tradeUsd": 1485486404,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "ES",
      "tradeUsd": 1485239936,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "BE",
      "tradeUsd": 1484135000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "MY",
      "tradeUsd": 1483033646,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "ES",
      "tradeUsd": 1482987717,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "HK",
      "tradeUsd": 1482202466,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CL",
      "tradeUsd": 1480356394,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "US",
      "tradeUsd": 1480342258,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "LT",
      "tradeUsd": 1479521609,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "RS",
      "tradeUsd": 1477109041,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "TR",
      "tradeUsd": 1474790000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SI",
      "tradeUsd": 1474154444,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "FR",
      "tradeUsd": 1472016624,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "ES",
      "tradeUsd": 1470528965,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "IT",
      "tradeUsd": 1467124945,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "FR",
      "tradeUsd": 1464442478,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "AE",
      "tradeUsd": 1463881878,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "ES",
      "tradeUsd": 1463628169,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "ZA",
      "tradeUsd": 1461346924,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "KR",
      "tradeUsd": 1460926404,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AR",
      "tradeUsd": 1460285833,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "JP",
      "tradeUsd": 1460150761,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "BE",
      "tradeUsd": 1458906153,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PA",
      "tradeUsd": 1457326767,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SG",
      "tradeUsd": 1456978868,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "UA",
      "tradeUsd": 1455645400,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "TH",
      "tradeUsd": 1454389075,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "ES",
      "tradeUsd": 1453381619,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "PL",
      "tradeUsd": 1450827279,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "RU",
      "tradeUsd": 1450252285,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "HR",
      "tradeUsd": 1447408076,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IN",
      "tradeUsd": 1447106170,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "SA",
      "tradeUsd": 1445740687,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "CH",
      "tradeUsd": 1444020630,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "NL",
      "tradeUsd": 1443450723,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "CA",
      "tradeUsd": 1442772086,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "ZA",
      "tradeUsd": 1442068102,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "PY",
      "tradeUsd": 1441604957,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "ES",
      "tradeUsd": 1441107222,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "EG",
      "tradeUsd": 1440145866,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "HK",
      "tradeUsd": 1438416299,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SG",
      "tradeUsd": 1436168410,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "ZA",
      "tradeUsd": 1434749032,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "NO",
      "tradeUsd": 1430231462,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "FR",
      "tradeUsd": 1423884000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "BO",
      "tradeUsd": 1423707173,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IL",
      "tradeUsd": 1422096640,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "TR",
      "tradeUsd": 1422076601,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CA",
      "tradeUsd": 1421924211,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "AT",
      "tradeUsd": 1419812386,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CL",
      "tradeUsd": 1419502683,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "NG",
      "tradeUsd": 1415955185,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "ES",
      "tradeUsd": 1415113424,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MA",
      "tradeUsd": 1414795806,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IN",
      "tradeUsd": 1414721663,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PK",
      "tradeUsd": 1409550842,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "QA",
      "tradeUsd": 1403911227,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "SI",
      "tradeUsd": 1403886547,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "AE",
      "tradeUsd": 1403424798,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "RU",
      "tradeUsd": 1401824525,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "AU",
      "tradeUsd": 1399785003,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "TH",
      "tradeUsd": 1397299708,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "IN",
      "tradeUsd": 1397279896,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SI",
      "tradeUsd": 1396338704,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "VN",
      "tradeUsd": 1396164960,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UY",
      "t": "CN",
      "tradeUsd": 1393788912,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "FR",
      "tradeUsd": 1392127000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "DE",
      "tradeUsd": 1391368298,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "ID",
      "tradeUsd": 1390428725,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "MA",
      "tradeUsd": 1389650139,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SE",
      "tradeUsd": 1386710063,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "QA",
      "tradeUsd": 1386496385,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "GR",
      "tradeUsd": 1386134135,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PL",
      "tradeUsd": 1385616092,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "CH",
      "tradeUsd": 1385203594,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CH",
      "tradeUsd": 1384405347,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "UG",
      "tradeUsd": 1383881623,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "GB",
      "tradeUsd": 1383632465,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "ES",
      "tradeUsd": 1383027116,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "AT",
      "tradeUsd": 1382446780,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "GR",
      "tradeUsd": 1382090663,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CH",
      "tradeUsd": 1381205357,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "FR",
      "tradeUsd": 1379702190,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CL",
      "tradeUsd": 1379513355,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "ZA",
      "tradeUsd": 1379366831,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "MY",
      "tradeUsd": 1378526159,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IN",
      "tradeUsd": 1377733216,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "HU",
      "tradeUsd": 1377361195,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "CN",
      "tradeUsd": 1376604967,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "IT",
      "tradeUsd": 1376447328,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "FR",
      "tradeUsd": 1374128666,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "NO",
      "tradeUsd": 1372189981,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "NZ",
      "tradeUsd": 1370278127,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "FR",
      "tradeUsd": 1368642222,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "EG",
      "tradeUsd": 1366405172,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SE",
      "tradeUsd": 1366134437,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UG",
      "t": "AE",
      "tradeUsd": 1366070575,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CO",
      "tradeUsd": 1365248889,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "DE",
      "tradeUsd": 1364940430,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CO",
      "tradeUsd": 1363330259,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "SA",
      "tradeUsd": 1363042501,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "NL",
      "tradeUsd": 1361650858,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "CH",
      "tradeUsd": 1361212777,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PK",
      "tradeUsd": 1360931589,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "HU",
      "tradeUsd": 1360654587,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "BR",
      "tradeUsd": 1359765000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AT",
      "tradeUsd": 1359703665,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "IQ",
      "tradeUsd": 1358765250,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "AE",
      "tradeUsd": 1357977058,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "SG",
      "tradeUsd": 1355479843,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "ES",
      "tradeUsd": 1354582182,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "GH",
      "tradeUsd": 1353014363,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "ID",
      "tradeUsd": 1352946478,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "CH",
      "tradeUsd": 1351409538,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "CN",
      "tradeUsd": 1350791389,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "EG",
      "tradeUsd": 1350339566,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "UA",
      "tradeUsd": 1348566688,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BH",
      "tradeUsd": 1348460784,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "SE",
      "tradeUsd": 1348241718,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "EG",
      "tradeUsd": 1348156202,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "ZA",
      "tradeUsd": 1347024698,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "OM",
      "tradeUsd": 1346066365,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "UA",
      "tradeUsd": 1345957232,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "US",
      "tradeUsd": 1343924552,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "HU",
      "tradeUsd": 1343873770,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "RU",
      "tradeUsd": 1343313932,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "IE",
      "tradeUsd": 1341389817,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "CZ",
      "tradeUsd": 1339660146,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "MA",
      "tradeUsd": 1338548690,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "ID",
      "tradeUsd": 1336893793,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "SA",
      "tradeUsd": 1335031698,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BO",
      "tradeUsd": 1334856950,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CH",
      "tradeUsd": 1334778557,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "PT",
      "tradeUsd": 1333329385,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "CZ",
      "tradeUsd": 1331957657,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "TH",
      "tradeUsd": 1331866783,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "HU",
      "tradeUsd": 1330173162,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "UA",
      "tradeUsd": 1329849150,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "EG",
      "tradeUsd": 1329073756,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "KR",
      "tradeUsd": 1328408698,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "KW",
      "tradeUsd": 1327529534,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "NL",
      "tradeUsd": 1326232953,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "VN",
      "tradeUsd": 1324871573,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "HU",
      "tradeUsd": 1324355904,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MY",
      "tradeUsd": 1322015870,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "HR",
      "tradeUsd": 1321615343,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "TR",
      "tradeUsd": 1321257446,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "OM",
      "tradeUsd": 1321135673,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CA",
      "tradeUsd": 1320074486,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "AT",
      "tradeUsd": 1319958772,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "BR",
      "tradeUsd": 1319036625,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "IN",
      "tradeUsd": 1318680918,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BD",
      "tradeUsd": 1317818543,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "SA",
      "tradeUsd": 1316602591,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PA",
      "t": "CN",
      "tradeUsd": 1316419741,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "RS",
      "tradeUsd": 1313897125,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "EG",
      "tradeUsd": 1312345795,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "TR",
      "tradeUsd": 1310425798,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AR",
      "tradeUsd": 1308207611,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "RO",
      "tradeUsd": 1304268392,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CZ",
      "tradeUsd": 1302587851,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "KR",
      "tradeUsd": 1302529376,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PT",
      "tradeUsd": 1301748926,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BE",
      "tradeUsd": 1300783980,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "BD",
      "tradeUsd": 1300586822,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "CA",
      "tradeUsd": 1300168638,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "AE",
      "tradeUsd": 1300168029,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "HU",
      "tradeUsd": 1299302181,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "PT",
      "tradeUsd": 1298940023,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "BG",
      "tradeUsd": 1298845663,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IL",
      "tradeUsd": 1298322224,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "IQ",
      "tradeUsd": 1294685887,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AT",
      "tradeUsd": 1294558410,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MY",
      "tradeUsd": 1293405393,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "KZ",
      "tradeUsd": 1290444135,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "KR",
      "tradeUsd": 1290313339,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "MX",
      "tradeUsd": 1289858226,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IQ",
      "tradeUsd": 1288662425,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GH",
      "tradeUsd": 1285774217,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CO",
      "tradeUsd": 1283559013,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "BG",
      "tradeUsd": 1283318532,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "DE",
      "tradeUsd": 1281581967,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BR",
      "tradeUsd": 1279311526,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AR",
      "tradeUsd": 1278905613,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CH",
      "tradeUsd": 1278788155,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "BD",
      "tradeUsd": 1278723673,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "BR",
      "tradeUsd": 1277882550,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "DE",
      "tradeUsd": 1277359646,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "GB",
      "tradeUsd": 1276595718,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "IN",
      "tradeUsd": 1275728434,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "KR",
      "tradeUsd": 1275377446,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "KZ",
      "tradeUsd": 1272780470,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SK",
      "tradeUsd": 1270674701,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CZ",
      "tradeUsd": 1270582605,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "RS",
      "tradeUsd": 1266418139,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "SK",
      "tradeUsd": 1264424365,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BD",
      "tradeUsd": 1263623855,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "TR",
      "tradeUsd": 1263240171,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "HU",
      "tradeUsd": 1260368183,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "PL",
      "tradeUsd": 1259803313,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "RO",
      "tradeUsd": 1259203990,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CL",
      "tradeUsd": 1258755472,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "MY",
      "tradeUsd": 1256694456,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "KW",
      "tradeUsd": 1255177381,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "GH",
      "tradeUsd": 1253584590,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "US",
      "tradeUsd": 1253441804,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "ES",
      "tradeUsd": 1253332408,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IR",
      "tradeUsd": 1252909857,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "KR",
      "tradeUsd": 1252455195,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IQ",
      "tradeUsd": 1248799130,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CL",
      "tradeUsd": 1246361509,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "BE",
      "tradeUsd": 1244978631,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "ES",
      "tradeUsd": 1244564076,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CA",
      "tradeUsd": 1243921087,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IE",
      "tradeUsd": 1241914063,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "MX",
      "tradeUsd": 1241747327,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "AE",
      "tradeUsd": 1241316108,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "ES",
      "tradeUsd": 1239418828,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "MA",
      "tradeUsd": 1238351221,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "CN",
      "tradeUsd": 1238306464,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "IN",
      "tradeUsd": 1237229985,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "PK",
      "tradeUsd": 1236163352,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "JP",
      "tradeUsd": 1236022920,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "MX",
      "tradeUsd": 1235989984,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "UG",
      "tradeUsd": 1235781413,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "ES",
      "tradeUsd": 1235243479,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "KR",
      "tradeUsd": 1233672427,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "GT",
      "tradeUsd": 1232561364,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BE",
      "tradeUsd": 1230388808,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PY",
      "t": "CL",
      "tradeUsd": 1229550263,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "PK",
      "tradeUsd": 1229210754,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "TZ",
      "tradeUsd": 1229056864,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "CH",
      "tradeUsd": 1228283580,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "IN",
      "tradeUsd": 1227196465,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "TR",
      "tradeUsd": 1226345050,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "ZA",
      "tradeUsd": 1225645345,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "SE",
      "tradeUsd": 1224004360,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "CH",
      "tradeUsd": 1222316880,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "OM",
      "tradeUsd": 1219814243,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CY",
      "tradeUsd": 1219438856,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "OM",
      "tradeUsd": 1219213736,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "IN",
      "tradeUsd": 1217486197,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IT",
      "tradeUsd": 1216941423,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "MT",
      "tradeUsd": 1216086743,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DZ",
      "tradeUsd": 1214448016,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "ID",
      "tradeUsd": 1213619590,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "ES",
      "tradeUsd": 1212443629,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "GB",
      "tradeUsd": 1212309986,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ET",
      "tradeUsd": 1210864884,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "PE",
      "tradeUsd": 1210029885,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CR",
      "tradeUsd": 1209788255,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "KR",
      "tradeUsd": 1207007223,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "US",
      "tradeUsd": 1205801798,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "PY",
      "tradeUsd": 1205406358,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "KE",
      "tradeUsd": 1205366250,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "OM",
      "tradeUsd": 1204542089,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "KR",
      "tradeUsd": 1204321701,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LA",
      "t": "VN",
      "tradeUsd": 1204067467,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "BR",
      "tradeUsd": 1203883027,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "NG",
      "tradeUsd": 1200256663,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "JP",
      "tradeUsd": 1200128027,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "VE",
      "tradeUsd": 1199828855,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "BE",
      "tradeUsd": 1198730900,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "GT",
      "tradeUsd": 1198586883,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CO",
      "tradeUsd": 1198486670,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SE",
      "tradeUsd": 1198205350,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "PE",
      "tradeUsd": 1196326884,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IQ",
      "tradeUsd": 1195974426,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "UA",
      "tradeUsd": 1195435057,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "CL",
      "tradeUsd": 1195058832,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "VN",
      "tradeUsd": 1194551158,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "FR",
      "tradeUsd": 1193845064,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CH",
      "tradeUsd": 1193210200,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CH",
      "tradeUsd": 1192801781,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "ZA",
      "tradeUsd": 1192588099,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "OM",
      "tradeUsd": 1191451418,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "BE",
      "tradeUsd": 1191035319,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "RU",
      "tradeUsd": 1189827356,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "RU",
      "tradeUsd": 1189321472,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "MA",
      "tradeUsd": 1188929481,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "IE",
      "tradeUsd": 1187835062,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "LY",
      "tradeUsd": 1187170253,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IR",
      "tradeUsd": 1186576443,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "RS",
      "tradeUsd": 1185862915,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CZ",
      "tradeUsd": 1184862074,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "SG",
      "tradeUsd": 1184833397,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "HU",
      "tradeUsd": 1184825982,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "KR",
      "tradeUsd": 1184802878,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "KE",
      "tradeUsd": 1184250394,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "IT",
      "tradeUsd": 1183573000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PK",
      "tradeUsd": 1183104667,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "RU",
      "tradeUsd": 1183088812,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "KR",
      "tradeUsd": 1182815420,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PT",
      "tradeUsd": 1181055516,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "KR",
      "tradeUsd": 1180226241,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "UA",
      "tradeUsd": 1179665216,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "ES",
      "tradeUsd": 1179267348,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "JP",
      "tradeUsd": 1177726347,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "RS",
      "tradeUsd": 1174379788,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "EE",
      "tradeUsd": 1174048403,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "CN",
      "tradeUsd": 1173101875,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "RU",
      "tradeUsd": 1172845242,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "AE",
      "tradeUsd": 1172384027,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "CZ",
      "tradeUsd": 1171861786,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BH",
      "tradeUsd": 1171058995,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CH",
      "tradeUsd": 1170658406,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GR",
      "tradeUsd": 1170472866,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CL",
      "tradeUsd": 1169609706,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "DE",
      "tradeUsd": 1168468249,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "TR",
      "tradeUsd": 1167969367,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "CO",
      "tradeUsd": 1163381806,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SK",
      "tradeUsd": 1162565133,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "DE",
      "tradeUsd": 1161958554,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NI",
      "tradeUsd": 1160813790,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "KZ",
      "tradeUsd": 1160434961,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "IN",
      "tradeUsd": 1159366605,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "EC",
      "tradeUsd": 1158948062,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "SA",
      "tradeUsd": 1158399488,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CH",
      "tradeUsd": 1158104771,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CM",
      "t": "NL",
      "tradeUsd": 1152959358,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "VE",
      "tradeUsd": 1152749458,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "HU",
      "tradeUsd": 1152101351,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CZ",
      "tradeUsd": 1151049198,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "LT",
      "tradeUsd": 1149961619,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "IT",
      "tradeUsd": 1149124839,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "CA",
      "tradeUsd": 1149083123,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "DK",
      "tradeUsd": 1148965377,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "IL",
      "tradeUsd": 1148816208,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BR",
      "tradeUsd": 1147676944,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "BR",
      "tradeUsd": 1147555000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "HU",
      "tradeUsd": 1146228114,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "BR",
      "tradeUsd": 1146027543,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "RU",
      "tradeUsd": 1144654245,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "BE",
      "tradeUsd": 1144235973,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "KZ",
      "tradeUsd": 1144043181,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "FR",
      "tradeUsd": 1142858122,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "MT",
      "tradeUsd": 1138697200,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "AU",
      "tradeUsd": 1138198696,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "PE",
      "tradeUsd": 1136849305,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CH",
      "tradeUsd": 1136719146,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "LU",
      "tradeUsd": 1136073186,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BO",
      "tradeUsd": 1134352744,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "IT",
      "tradeUsd": 1134231086,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "CZ",
      "tradeUsd": 1133745434,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "BG",
      "tradeUsd": 1133587224,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "PT",
      "tradeUsd": 1132787216,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "SA",
      "tradeUsd": 1130240261,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "IL",
      "tradeUsd": 1129118370,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "TR",
      "tradeUsd": 1128285506,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "PE",
      "tradeUsd": 1128024009,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "HK",
      "tradeUsd": 1126876326,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CL",
      "tradeUsd": 1126382342,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "SI",
      "tradeUsd": 1125580846,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NG",
      "tradeUsd": 1124777490,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CY",
      "tradeUsd": 1124321890,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "AU",
      "tradeUsd": 1124146408,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TZ",
      "t": "ZA",
      "tradeUsd": 1123455080,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CH",
      "tradeUsd": 1123199719,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "PL",
      "tradeUsd": 1122268245,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "CA",
      "tradeUsd": 1120054988,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "BR",
      "tradeUsd": 1119212568,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IS",
      "tradeUsd": 1118889452,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CL",
      "tradeUsd": 1118725544,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CA",
      "tradeUsd": 1115585422,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MA",
      "tradeUsd": 1112100112,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AT",
      "tradeUsd": 1111760619,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "EC",
      "tradeUsd": 1110177865,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "CA",
      "tradeUsd": 1109869329,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CY",
      "tradeUsd": 1107595945,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "US",
      "tradeUsd": 1107151516,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "IN",
      "tradeUsd": 1103888271,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "IT",
      "tradeUsd": 1102659674,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "TR",
      "tradeUsd": 1102528334,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "FR",
      "tradeUsd": 1102359767,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "IT",
      "tradeUsd": 1101376000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "ZA",
      "tradeUsd": 1100569132,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "RS",
      "tradeUsd": 1100519606,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "BR",
      "tradeUsd": 1099533046,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "AU",
      "tradeUsd": 1099012591,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PT",
      "tradeUsd": 1098966598,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "KR",
      "tradeUsd": 1098259829,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "IN",
      "tradeUsd": 1097038987,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "GR",
      "tradeUsd": 1096897328,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "RS",
      "tradeUsd": 1096622528,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "BR",
      "tradeUsd": 1095884095,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "AE",
      "tradeUsd": 1093136701,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "US",
      "tradeUsd": 1091348809,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PA",
      "tradeUsd": 1087489253,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "MX",
      "tradeUsd": 1086894022,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "CN",
      "tradeUsd": 1086579853,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "AE",
      "tradeUsd": 1086124491,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "SE",
      "tradeUsd": 1085384783,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "AE",
      "tradeUsd": 1085058115,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "EG",
      "tradeUsd": 1085021374,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "PK",
      "tradeUsd": 1084970340,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "DZ",
      "tradeUsd": 1084742436,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "IT",
      "tradeUsd": 1084364494,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IT",
      "tradeUsd": 1083643570,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "BH",
      "tradeUsd": 1081476329,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "FR",
      "tradeUsd": 1080700373,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IL",
      "tradeUsd": 1080185847,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "GR",
      "tradeUsd": 1079630393,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "TR",
      "tradeUsd": 1078747498,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "KR",
      "tradeUsd": 1077474000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "KZ",
      "tradeUsd": 1077097171,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "PL",
      "tradeUsd": 1076867611,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "ES",
      "tradeUsd": 1076479163,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "NO",
      "tradeUsd": 1075125982,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CH",
      "tradeUsd": 1075102391,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "JP",
      "tradeUsd": 1073788072,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "RU",
      "tradeUsd": 1073715494,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "SK",
      "tradeUsd": 1073667468,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "BD",
      "tradeUsd": 1073202745,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "SA",
      "tradeUsd": 1071612126,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "VN",
      "tradeUsd": 1071349401,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IQ",
      "tradeUsd": 1070450232,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "QA",
      "tradeUsd": 1070316219,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "MY",
      "tradeUsd": 1069637532,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "VN",
      "tradeUsd": 1068991119,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DO",
      "tradeUsd": 1067075215,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "SI",
      "tradeUsd": 1066800740,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "DK",
      "tradeUsd": 1066305412,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "NG",
      "tradeUsd": 1065419193,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "MA",
      "tradeUsd": 1065222635,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "SA",
      "tradeUsd": 1064991810,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "EE",
      "tradeUsd": 1063744533,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "NO",
      "tradeUsd": 1063434161,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "IN",
      "tradeUsd": 1063184200,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "ID",
      "tradeUsd": 1062267772,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "NI",
      "tradeUsd": 1061762438,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DO",
      "tradeUsd": 1060640960,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "HN",
      "tradeUsd": 1059182596,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "NL",
      "tradeUsd": 1059014094,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "SG",
      "tradeUsd": 1058646464,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "ES",
      "tradeUsd": 1058448336,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "NL",
      "tradeUsd": 1058419411,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "PL",
      "tradeUsd": 1058413394,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "AU",
      "tradeUsd": 1058366300,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IQ",
      "tradeUsd": 1058214447,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IE",
      "tradeUsd": 1055526051,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "ES",
      "tradeUsd": 1055407765,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "FR",
      "tradeUsd": 1053509476,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "DE",
      "tradeUsd": 1053498369,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "AE",
      "tradeUsd": 1052913354,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "FI",
      "tradeUsd": 1052605153,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "EC",
      "tradeUsd": 1052330064,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "ID",
      "tradeUsd": 1052165226,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "HR",
      "tradeUsd": 1052116586,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "AU",
      "tradeUsd": 1050661382,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "SI",
      "tradeUsd": 1050610796,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "DK",
      "tradeUsd": 1050293376,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "UA",
      "tradeUsd": 1048496703,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "RU",
      "tradeUsd": 1047640927,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "PE",
      "tradeUsd": 1047072553,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PK",
      "tradeUsd": 1045828941,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "GB",
      "tradeUsd": 1044245648,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "AU",
      "tradeUsd": 1043620318,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "GB",
      "tradeUsd": 1043580788,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "SG",
      "tradeUsd": 1042796677,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "LK",
      "tradeUsd": 1042235608,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "ES",
      "tradeUsd": 1041663549,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "BO",
      "tradeUsd": 1040824013,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "KR",
      "tradeUsd": 1040079997,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "US",
      "tradeUsd": 1039410499,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "RS",
      "tradeUsd": 1039280318,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "GR",
      "tradeUsd": 1038789696,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "SG",
      "tradeUsd": 1038776172,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "SK",
      "tradeUsd": 1037476110,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "TN",
      "tradeUsd": 1037118083,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "PL",
      "tradeUsd": 1035315004,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "AE",
      "tradeUsd": 1034895049,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "AU",
      "tradeUsd": 1033504253,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "MA",
      "tradeUsd": 1033299478,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "CL",
      "tradeUsd": 1032243037,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HR",
      "tradeUsd": 1032209363,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CO",
      "tradeUsd": 1030985238,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "SA",
      "tradeUsd": 1029640597,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "KR",
      "tradeUsd": 1028901434,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "GT",
      "tradeUsd": 1027311339,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "AT",
      "tradeUsd": 1027243105,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "GR",
      "tradeUsd": 1026145685,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "IS",
      "tradeUsd": 1025437669,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "GR",
      "tradeUsd": 1024942196,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "TR",
      "tradeUsd": 1024928848,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "KZ",
      "tradeUsd": 1023240959,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "PE",
      "tradeUsd": 1022152159,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "IN",
      "tradeUsd": 1019406473,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "IE",
      "tradeUsd": 1019013486,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "HN",
      "tradeUsd": 1018836976,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "ET",
      "tradeUsd": 1017706562,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "ES",
      "tradeUsd": 1017259953,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "NO",
      "tradeUsd": 1016691932,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "EG",
      "tradeUsd": 1016625728,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AR",
      "tradeUsd": 1016155360,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "MY",
      "tradeUsd": 1016078013,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "BE",
      "tradeUsd": 1015791010,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "AU",
      "tradeUsd": 1015436070,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "BE",
      "tradeUsd": 1015283867,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "DZ",
      "tradeUsd": 1014504109,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "RS",
      "tradeUsd": 1014324653,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "FR",
      "tradeUsd": 1012774663,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "BO",
      "tradeUsd": 1012707916,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "SG",
      "tradeUsd": 1012600138,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "DZ",
      "tradeUsd": 1012057244,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "TR",
      "tradeUsd": 1011884303,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "IT",
      "tradeUsd": 1011561924,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KE",
      "tradeUsd": 1011442837,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "NL",
      "tradeUsd": 1009935267,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NI",
      "t": "MX",
      "tradeUsd": 1009725405,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "GB",
      "tradeUsd": 1009226889,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "SG",
      "tradeUsd": 1008767350,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "RO",
      "tradeUsd": 1008200051,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "DO",
      "tradeUsd": 1003979116,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IE",
      "tradeUsd": 1003651759,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "PL",
      "tradeUsd": 1003140724,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "BH",
      "tradeUsd": 1002887515,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "SA",
      "tradeUsd": 1001267153,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IS",
      "tradeUsd": 1000735883,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GH",
      "tradeUsd": 999357527,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "LV",
      "tradeUsd": 997333484,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "TR",
      "tradeUsd": 996955301,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "AR",
      "tradeUsd": 996720600,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AR",
      "tradeUsd": 996312743,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "CZ",
      "tradeUsd": 996012558,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "DZ",
      "tradeUsd": 995752864,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "HR",
      "tradeUsd": 993902407,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "MM",
      "tradeUsd": 992084286,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "IN",
      "tradeUsd": 991167300,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "DE",
      "tradeUsd": 988803356,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LV",
      "tradeUsd": 987916085,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "AE",
      "tradeUsd": 987672594,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "BE",
      "tradeUsd": 986903380,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IE",
      "tradeUsd": 986210680,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "PH",
      "tradeUsd": 985936630,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "IS",
      "tradeUsd": 985844921,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "NI",
      "tradeUsd": 985644546,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LU",
      "t": "NL",
      "tradeUsd": 984530026,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "DK",
      "tradeUsd": 983810544,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NI",
      "t": "MX",
      "tradeUsd": 983424875,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PK",
      "tradeUsd": 982566733,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "NL",
      "tradeUsd": 981944360,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "UA",
      "tradeUsd": 981492101,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "PL",
      "tradeUsd": 979934030,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "CL",
      "tradeUsd": 978394908,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "NG",
      "tradeUsd": 977496973,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "BG",
      "tradeUsd": 977399174,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "IT",
      "tradeUsd": 976434291,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "NG",
      "tradeUsd": 976301409,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "AR",
      "tradeUsd": 975763445,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "AR",
      "tradeUsd": 975719238,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "ZA",
      "tradeUsd": 975607224,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "DK",
      "tradeUsd": 975534724,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "ZA",
      "tradeUsd": 975366936,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "PE",
      "tradeUsd": 974808197,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "ID",
      "tradeUsd": 974596393,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "ID",
      "tradeUsd": 974400786,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "ID",
      "tradeUsd": 974369842,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "GB",
      "tradeUsd": 971649306,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "EC",
      "tradeUsd": 971429141,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "KR",
      "tradeUsd": 971143745,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "KR",
      "tradeUsd": 970967549,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "EG",
      "tradeUsd": 970344208,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IQ",
      "tradeUsd": 970087148,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CO",
      "tradeUsd": 969820382,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PT",
      "tradeUsd": 969761326,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "RU",
      "tradeUsd": 969331474,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "GB",
      "tradeUsd": 968888202,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "HR",
      "tradeUsd": 968785101,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GH",
      "tradeUsd": 967304543,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PT",
      "tradeUsd": 967083525,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "FR",
      "tradeUsd": 965540362,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "DZ",
      "tradeUsd": 962692142,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "NL",
      "tradeUsd": 962606160,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "DZ",
      "tradeUsd": 962343276,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "FR",
      "tradeUsd": 962312668,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "RU",
      "tradeUsd": 961744619,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "PK",
      "tradeUsd": 961437753,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CO",
      "tradeUsd": 959487121,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "ES",
      "tradeUsd": 958819000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PH",
      "tradeUsd": 958816211,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "GB",
      "tradeUsd": 958737701,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "CO",
      "tradeUsd": 957941603,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "CY",
      "tradeUsd": 957589178,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RO",
      "t": "HU",
      "tradeUsd": 957380182,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "BG",
      "tradeUsd": 956481525,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UY",
      "t": "US",
      "tradeUsd": 955473166,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "IS",
      "tradeUsd": 955335169,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "JO",
      "tradeUsd": 954347792,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SE",
      "tradeUsd": 953787202,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "CZ",
      "tradeUsd": 953082949,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "GR",
      "tradeUsd": 952865972,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "DE",
      "tradeUsd": 952732628,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PA",
      "tradeUsd": 949864982,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "IL",
      "tradeUsd": 949578664,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "BR",
      "tradeUsd": 949260633,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "DE",
      "tradeUsd": 949255220,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "IT",
      "tradeUsd": 949079641,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LV",
      "tradeUsd": 948925558,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MA",
      "tradeUsd": 948776916,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "JP",
      "tradeUsd": 947692758,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "CA",
      "tradeUsd": 946889747,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KE",
      "tradeUsd": 946846691,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "PL",
      "tradeUsd": 946708761,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "IQ",
      "tradeUsd": 945668222,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "JP",
      "tradeUsd": 944679000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "BG",
      "tradeUsd": 943713931,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "DZ",
      "tradeUsd": 943706512,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "SE",
      "tradeUsd": 943683129,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "NO",
      "tradeUsd": 943180493,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "IE",
      "tradeUsd": 943037168,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "KR",
      "tradeUsd": 942962993,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "SK",
      "tradeUsd": 942632122,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "PT",
      "tradeUsd": 941396675,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "ES",
      "tradeUsd": 941257000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "NG",
      "tradeUsd": 940659422,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "SA",
      "tradeUsd": 940592093,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "MA",
      "tradeUsd": 940257631,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "HR",
      "tradeUsd": 940191390,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "LV",
      "tradeUsd": 940073981,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AR",
      "tradeUsd": 939548232,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "IR",
      "tradeUsd": 939464342,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "TH",
      "tradeUsd": 939065612,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "IT",
      "tradeUsd": 937621115,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CO",
      "tradeUsd": 937473547,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "UG",
      "tradeUsd": 936429262,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "LV",
      "tradeUsd": 936101215,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "HR",
      "tradeUsd": 935959296,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "SV",
      "tradeUsd": 935549371,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "IT",
      "tradeUsd": 934296369,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "ES",
      "tradeUsd": 933688653,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "CA",
      "tradeUsd": 933384479,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CO",
      "tradeUsd": 933187649,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PE",
      "tradeUsd": 933114003,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "DZ",
      "tradeUsd": 932827093,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PY",
      "t": "CL",
      "tradeUsd": 932071287,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "CN",
      "tradeUsd": 930520538,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "IT",
      "tradeUsd": 930200364,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "BE",
      "tradeUsd": 930025646,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "SV",
      "tradeUsd": 927659817,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "BD",
      "tradeUsd": 926310734,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "NL",
      "tradeUsd": 926270329,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "MA",
      "tradeUsd": 925938781,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "DK",
      "tradeUsd": 924803599,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "IT",
      "tradeUsd": 924236110,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "GB",
      "tradeUsd": 923734773,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "RU",
      "tradeUsd": 923610727,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "US",
      "tradeUsd": 922489018,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KZ",
      "tradeUsd": 921647478,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "BG",
      "tradeUsd": 921278113,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "NL",
      "tradeUsd": 920935138,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "DK",
      "tradeUsd": 920500817,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "KZ",
      "tradeUsd": 920152652,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "SA",
      "tradeUsd": 919973978,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "CZ",
      "tradeUsd": 919789245,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "NI",
      "tradeUsd": 919627380,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PA",
      "tradeUsd": 919298837,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "JP",
      "tradeUsd": 918546783,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "PK",
      "tradeUsd": 918027963,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TH",
      "t": "JP",
      "tradeUsd": 917040781,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "CO",
      "tradeUsd": 917024854,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SA",
      "tradeUsd": 916551961,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PE",
      "tradeUsd": 916313095,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CA",
      "tradeUsd": 915283760,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "QA",
      "tradeUsd": 914843539,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PK",
      "tradeUsd": 914496912,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "LT",
      "tradeUsd": 914134855,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "CH",
      "tradeUsd": 913441182,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "JP",
      "tradeUsd": 912958740,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "MY",
      "tradeUsd": 912415909,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "VN",
      "tradeUsd": 912234598,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "TR",
      "tradeUsd": 912135803,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "CL",
      "tradeUsd": 911746308,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "DE",
      "tradeUsd": 911208306,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "MY",
      "tradeUsd": 910006923,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CH",
      "tradeUsd": 909908947,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "KR",
      "tradeUsd": 908824961,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KZ",
      "tradeUsd": 908280788,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "PA",
      "tradeUsd": 906846799,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "MX",
      "tradeUsd": 906709604,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "AU",
      "tradeUsd": 905521688,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CY",
      "tradeUsd": 905225975,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "RU",
      "tradeUsd": 905218221,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "RO",
      "tradeUsd": 904768594,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "BG",
      "tradeUsd": 904607794,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "CZ",
      "tradeUsd": 904605546,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "BR",
      "tradeUsd": 904309589,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "AR",
      "tradeUsd": 902694026,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IQ",
      "tradeUsd": 901561027,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "AR",
      "tradeUsd": 901221424,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CY",
      "tradeUsd": 900226987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "HN",
      "tradeUsd": 899601592,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "MT",
      "tradeUsd": 899375561,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "MY",
      "tradeUsd": 898030918,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "LT",
      "tradeUsd": 897927303,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "MM",
      "tradeUsd": 896937619,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "AR",
      "tradeUsd": 896835702,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "UG",
      "tradeUsd": 896602947,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "DZ",
      "tradeUsd": 895275957,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "JP",
      "tradeUsd": 893762426,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "AE",
      "tradeUsd": 893577116,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "PT",
      "tradeUsd": 893435347,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "GR",
      "tradeUsd": 893021629,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CI",
      "tradeUsd": 892493735,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BH",
      "tradeUsd": 891949177,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "DO",
      "tradeUsd": 891661581,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "RU",
      "tradeUsd": 891404443,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "PT",
      "tradeUsd": 890319716,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "TH",
      "tradeUsd": 889057987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "SA",
      "tradeUsd": 888714508,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "GT",
      "tradeUsd": 887998387,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "IN",
      "tradeUsd": 886483061,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "QA",
      "tradeUsd": 886188370,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LV",
      "tradeUsd": 886069638,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "NO",
      "tradeUsd": 885019191,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "JO",
      "tradeUsd": 884813264,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "KR",
      "tradeUsd": 883699000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "AU",
      "tradeUsd": 883098265,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "AR",
      "tradeUsd": 882682104,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "MT",
      "tradeUsd": 882677264,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LU",
      "tradeUsd": 882481747,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "ZA",
      "tradeUsd": 882122874,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "GB",
      "tradeUsd": 881981555,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "QA",
      "tradeUsd": 881919007,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "AE",
      "tradeUsd": 881731000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "MX",
      "tradeUsd": 881546636,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "BR",
      "tradeUsd": 880432118,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "IT",
      "tradeUsd": 879338765,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "US",
      "tradeUsd": 878862907,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "FR",
      "tradeUsd": 878746084,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "TR",
      "tradeUsd": 878618630,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "MM",
      "tradeUsd": 877942927,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "AT",
      "tradeUsd": 877740802,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "SI",
      "tradeUsd": 875471499,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "NL",
      "tradeUsd": 874498454,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "US",
      "tradeUsd": 873448718,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "IT",
      "tradeUsd": 873200334,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "LU",
      "tradeUsd": 873129200,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "BD",
      "tradeUsd": 872126750,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "DE",
      "tradeUsd": 871216711,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "CH",
      "tradeUsd": 870952925,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "SK",
      "tradeUsd": 870432194,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "DK",
      "tradeUsd": 870154009,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CY",
      "tradeUsd": 869984819,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "CA",
      "tradeUsd": 869552662,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PH",
      "tradeUsd": 868774038,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "MX",
      "tradeUsd": 868628013,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BR",
      "tradeUsd": 868610384,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "KR",
      "tradeUsd": 868458440,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "HU",
      "tradeUsd": 868281837,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "VN",
      "tradeUsd": 867897120,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "AT",
      "tradeUsd": 866760815,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "KR",
      "tradeUsd": 866318655,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "LV",
      "tradeUsd": 865678619,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "ID",
      "tradeUsd": 865623474,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "DO",
      "tradeUsd": 865244877,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SA",
      "tradeUsd": 864224724,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "NI",
      "tradeUsd": 863634135,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "JP",
      "tradeUsd": 863616000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "FR",
      "tradeUsd": 862295661,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "FI",
      "tradeUsd": 861480444,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "GB",
      "tradeUsd": 861107526,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CZ",
      "tradeUsd": 860825893,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "IN",
      "tradeUsd": 860791227,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "DK",
      "tradeUsd": 859963884,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "JO",
      "tradeUsd": 859944266,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "AU",
      "tradeUsd": 859066780,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "GR",
      "tradeUsd": 859032338,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "DZ",
      "tradeUsd": 858805399,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "SA",
      "tradeUsd": 858424133,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "AT",
      "tradeUsd": 858355092,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "TR",
      "tradeUsd": 857639547,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "MX",
      "tradeUsd": 857497324,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "CH",
      "tradeUsd": 856149345,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "KH",
      "tradeUsd": 856078480,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "MY",
      "tradeUsd": 855546191,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "CA",
      "tradeUsd": 855487729,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "LY",
      "tradeUsd": 855397326,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IS",
      "tradeUsd": 854990455,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "SG",
      "tradeUsd": 854608239,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "HU",
      "tradeUsd": 854530638,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "BE",
      "tradeUsd": 854415421,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "BR",
      "tradeUsd": 854383131,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "IE",
      "tradeUsd": 854181175,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "ES",
      "tradeUsd": 853976721,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CZ",
      "tradeUsd": 853343546,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "NL",
      "tradeUsd": 852856134,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BR",
      "tradeUsd": 852759545,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "IT",
      "tradeUsd": 851129276,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "GH",
      "tradeUsd": 850833145,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "TR",
      "tradeUsd": 850555860,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "SI",
      "tradeUsd": 849587741,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "BH",
      "tradeUsd": 849201496,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "GR",
      "tradeUsd": 848677027,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "AR",
      "tradeUsd": 848542354,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "QA",
      "tradeUsd": 848045267,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "IQ",
      "tradeUsd": 847189154,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "FR",
      "tradeUsd": 846532641,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MT",
      "t": "DE",
      "tradeUsd": 846315450,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "BG",
      "tradeUsd": 845687137,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "SK",
      "tradeUsd": 845078839,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "HK",
      "tradeUsd": 845037059,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "TH",
      "tradeUsd": 844900806,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CZ",
      "tradeUsd": 843920137,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GR",
      "tradeUsd": 843309501,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "ZA",
      "tradeUsd": 843091616,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "MX",
      "tradeUsd": 841802008,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "ZA",
      "tradeUsd": 841371463,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KZ",
      "tradeUsd": 840992299,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "DK",
      "tradeUsd": 840391828,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CO",
      "tradeUsd": 840247181,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "IN",
      "tradeUsd": 839430998,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "BE",
      "tradeUsd": 839061128,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "ZA",
      "tradeUsd": 838880176,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CO",
      "tradeUsd": 837035789,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "BR",
      "tradeUsd": 836969264,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "BR",
      "tradeUsd": 835792908,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CY",
      "tradeUsd": 835596262,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "PT",
      "tradeUsd": 835139097,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "FR",
      "tradeUsd": 834866467,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "SG",
      "tradeUsd": 834650160,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "PL",
      "tradeUsd": 834593411,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "KH",
      "tradeUsd": 833293189,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "GR",
      "tradeUsd": 832518354,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "TH",
      "tradeUsd": 832469702,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "BD",
      "tradeUsd": 831914280,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "SE",
      "tradeUsd": 831663110,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "IQ",
      "tradeUsd": 830693476,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "VN",
      "tradeUsd": 830663722,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "IT",
      "tradeUsd": 830577004,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "NL",
      "tradeUsd": 829614736,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "MA",
      "tradeUsd": 828906916,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "OM",
      "tradeUsd": 828379295,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "DZ",
      "tradeUsd": 826615342,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "TH",
      "tradeUsd": 825052073,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "BE",
      "tradeUsd": 824917212,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "EE",
      "tradeUsd": 824856739,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "NI",
      "tradeUsd": 824516081,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AR",
      "tradeUsd": 824421078,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "CO",
      "tradeUsd": 824036718,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "IT",
      "tradeUsd": 823259816,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "DK",
      "tradeUsd": 822836568,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "NL",
      "tradeUsd": 822123703,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "CO",
      "tradeUsd": 821816488,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "PT",
      "tradeUsd": 821814845,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "ID",
      "tradeUsd": 821321519,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "DE",
      "tradeUsd": 820630111,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "PA",
      "tradeUsd": 820080353,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IE",
      "tradeUsd": 818904273,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "PL",
      "tradeUsd": 818799920,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "EG",
      "tradeUsd": 818367871,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "RO",
      "tradeUsd": 817940652,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "FI",
      "tradeUsd": 817781114,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "DE",
      "tradeUsd": 817019398,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "CO",
      "tradeUsd": 816875361,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "PH",
      "tradeUsd": 816730716,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "CN",
      "tradeUsd": 816678337,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "IQ",
      "tradeUsd": 815882281,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CN",
      "t": "EE",
      "tradeUsd": 815288902,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "EG",
      "tradeUsd": 814948319,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "IT",
      "tradeUsd": 814775153,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "SK",
      "tradeUsd": 814717784,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "RU",
      "tradeUsd": 814196246,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "CA",
      "tradeUsd": 813640392,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CO",
      "tradeUsd": 813028519,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "JP",
      "tradeUsd": 812979844,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "SE",
      "tradeUsd": 812919908,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IE",
      "tradeUsd": 812637219,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "EE",
      "tradeUsd": 812210121,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "FI",
      "tradeUsd": 809893948,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "SG",
      "tradeUsd": 808335296,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DO",
      "t": "CH",
      "tradeUsd": 807827868,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "TR",
      "tradeUsd": 807769188,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "AU",
      "tradeUsd": 806581062,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "SA",
      "tradeUsd": 805995631,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IS",
      "tradeUsd": 805288590,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "IE",
      "tradeUsd": 804549481,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "SA",
      "tradeUsd": 803885796,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "IT",
      "tradeUsd": 803092096,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "BR",
      "tradeUsd": 803003940,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "FR",
      "tradeUsd": 802289123,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "LT",
      "tradeUsd": 801261786,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "NL",
      "tradeUsd": 801258519,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IS",
      "t": "US",
      "tradeUsd": 800495119,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "MY",
      "tradeUsd": 800345914,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "CA",
      "tradeUsd": 799922907,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "QA",
      "tradeUsd": 799894161,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "PL",
      "tradeUsd": 799181162,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "ES",
      "tradeUsd": 797981462,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "MY",
      "tradeUsd": 797591183,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "KW",
      "tradeUsd": 796566101,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "GB",
      "tradeUsd": 796480561,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "MX",
      "tradeUsd": 796355890,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CH",
      "tradeUsd": 796352928,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KZ",
      "tradeUsd": 795883525,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "HU",
      "tradeUsd": 795561471,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "TR",
      "tradeUsd": 795490418,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TH",
      "t": "VN",
      "tradeUsd": 795293139,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PE",
      "tradeUsd": 794535782,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LA",
      "t": "TH",
      "tradeUsd": 791923888,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "HN",
      "tradeUsd": 791682675,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "ZA",
      "tradeUsd": 790386725,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "SE",
      "tradeUsd": 789858897,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "SA",
      "tradeUsd": 789645987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "BE",
      "tradeUsd": 788823233,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "LY",
      "tradeUsd": 788804675,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "US",
      "tradeUsd": 787790987,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CI",
      "tradeUsd": 787509107,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "MY",
      "tradeUsd": 785764934,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "BG",
      "tradeUsd": 785604074,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "KE",
      "tradeUsd": 782524079,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PE",
      "tradeUsd": 782347489,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "NZ",
      "tradeUsd": 781983634,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "RU",
      "tradeUsd": 779425545,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "BD",
      "tradeUsd": 778114978,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "NO",
      "tradeUsd": 776899776,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "CN",
      "tradeUsd": 776713193,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "CO",
      "tradeUsd": 775949971,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "EG",
      "tradeUsd": 775652175,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CY",
      "tradeUsd": 775397000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CL",
      "tradeUsd": 774978660,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "IT",
      "tradeUsd": 774910667,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "SK",
      "tradeUsd": 773838147,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "CO",
      "tradeUsd": 773826843,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "GR",
      "tradeUsd": 772677966,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "PL",
      "tradeUsd": 772086092,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "AT",
      "tradeUsd": 771811643,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "NO",
      "tradeUsd": 771700584,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "SG",
      "tradeUsd": 771643000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "SK",
      "tradeUsd": 770941941,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "QA",
      "tradeUsd": 770468833,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "MA",
      "tradeUsd": 769299427,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "EC",
      "tradeUsd": 768651658,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "US",
      "tradeUsd": 767938166,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CL",
      "tradeUsd": 767200907,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "PE",
      "tradeUsd": 767129236,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "UA",
      "tradeUsd": 766840740,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "TH",
      "tradeUsd": 766382239,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "QA",
      "tradeUsd": 764248037,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "DE",
      "tradeUsd": 763964929,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "DZ",
      "tradeUsd": 763871604,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "ZA",
      "tradeUsd": 763613696,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "TH",
      "tradeUsd": 762600386,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CO",
      "tradeUsd": 761713344,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "AU",
      "tradeUsd": 761420005,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MM",
      "tradeUsd": 760321014,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "SI",
      "tradeUsd": 760187863,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "QA",
      "tradeUsd": 759959985,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "PL",
      "tradeUsd": 759753750,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "SA",
      "tradeUsd": 758824564,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "JO",
      "tradeUsd": 758796316,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "ES",
      "tradeUsd": 757585150,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "BD",
      "tradeUsd": 757412441,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "AE",
      "tradeUsd": 754977084,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IE",
      "tradeUsd": 754897100,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "AE",
      "tradeUsd": 753877053,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "ES",
      "tradeUsd": 753743083,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "CH",
      "tradeUsd": 753581922,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "ZA",
      "tradeUsd": 753136432,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "JO",
      "tradeUsd": 751960100,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "MA",
      "tradeUsd": 751790558,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "FI",
      "tradeUsd": 751221603,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "DZ",
      "tradeUsd": 750718231,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "ZA",
      "tradeUsd": 750626973,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "SA",
      "tradeUsd": 750010621,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "ID",
      "tradeUsd": 748941349,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CI",
      "tradeUsd": 748930231,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CR",
      "tradeUsd": 748928770,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "PL",
      "tradeUsd": 748165351,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "IT",
      "tradeUsd": 747651048,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UY",
      "t": "US",
      "tradeUsd": 746916881,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SI",
      "t": "RO",
      "tradeUsd": 746427362,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "ES",
      "tradeUsd": 745977890,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "MA",
      "tradeUsd": 745918235,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "KZ",
      "tradeUsd": 745142782,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CY",
      "tradeUsd": 744824000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "EE",
      "tradeUsd": 743960529,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "DE",
      "tradeUsd": 743126507,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "MY",
      "tradeUsd": 743092270,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "VN",
      "tradeUsd": 742137759,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "LK",
      "tradeUsd": 741890380,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "QA",
      "tradeUsd": 740361161,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "MY",
      "tradeUsd": 740215028,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "FR",
      "tradeUsd": 739653230,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "HK",
      "tradeUsd": 739276261,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "DE",
      "tradeUsd": 737794174,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "NI",
      "tradeUsd": 737246162,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "US",
      "tradeUsd": 737108738,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IR",
      "tradeUsd": 737029646,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UG",
      "t": "KE",
      "tradeUsd": 736834343,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "IT",
      "tradeUsd": 736636411,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "NL",
      "tradeUsd": 736295648,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "PK",
      "tradeUsd": 735704500,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "SG",
      "tradeUsd": 735603000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "AT",
      "tradeUsd": 734425341,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "SA",
      "tradeUsd": 734357586,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "HK",
      "tradeUsd": 733122576,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IS",
      "tradeUsd": 732500971,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "MY",
      "tradeUsd": 729882494,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "DO",
      "tradeUsd": 729641915,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "CA",
      "tradeUsd": 729539074,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "LV",
      "tradeUsd": 729387909,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "CN",
      "tradeUsd": 728950972,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NZ",
      "tradeUsd": 728878778,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UG",
      "t": "IN",
      "tradeUsd": 728427842,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "AE",
      "tradeUsd": 728359240,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "MX",
      "tradeUsd": 728034214,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "EG",
      "tradeUsd": 727437786,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "LK",
      "tradeUsd": 726982823,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "PL",
      "tradeUsd": 726805747,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "ES",
      "tradeUsd": 725870168,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "ID",
      "tradeUsd": 725392115,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IL",
      "tradeUsd": 725116156,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "AT",
      "tradeUsd": 724889055,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "TR",
      "tradeUsd": 723095212,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "NG",
      "tradeUsd": 721460299,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "UA",
      "tradeUsd": 720418781,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CI",
      "tradeUsd": 719830952,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "BR",
      "tradeUsd": 719651954,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IN",
      "tradeUsd": 718373749,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "DZ",
      "tradeUsd": 718166939,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "KR",
      "tradeUsd": 717464203,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "JP",
      "tradeUsd": 716984028,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "HU",
      "tradeUsd": 716952051,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "ES",
      "tradeUsd": 716811099,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "BR",
      "tradeUsd": 716479549,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SI",
      "tradeUsd": 716383562,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "MY",
      "tradeUsd": 715408840,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "MY",
      "tradeUsd": 715291982,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "ZA",
      "tradeUsd": 715049190,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "LV",
      "tradeUsd": 714940373,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LU",
      "t": "IT",
      "tradeUsd": 714922201,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "ES",
      "tradeUsd": 713479228,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "CA",
      "tradeUsd": 713099816,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "AU",
      "tradeUsd": 712786968,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "RU",
      "tradeUsd": 712692548,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "NZ",
      "tradeUsd": 712615029,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "EG",
      "tradeUsd": 712522834,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "RU",
      "tradeUsd": 711790075,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "JO",
      "tradeUsd": 711451462,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PT",
      "tradeUsd": 711432359,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "QA",
      "tradeUsd": 710696947,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "IL",
      "tradeUsd": 710430910,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "AR",
      "tradeUsd": 710326551,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "ID",
      "tradeUsd": 710314402,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "AO",
      "tradeUsd": 709556923,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "AE",
      "tradeUsd": 709550986,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "SI",
      "tradeUsd": 708399000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "NL",
      "tradeUsd": 708225111,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "QA",
      "tradeUsd": 707379028,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "AR",
      "tradeUsd": 706778566,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "KH",
      "tradeUsd": 706450080,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "ZA",
      "tradeUsd": 706425227,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "RO",
      "tradeUsd": 706289000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "RS",
      "tradeUsd": 706139125,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "SA",
      "tradeUsd": 705432212,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "ET",
      "tradeUsd": 704738628,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "LK",
      "tradeUsd": 703876588,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "PL",
      "tradeUsd": 703292564,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "GB",
      "tradeUsd": 702878505,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "MY",
      "tradeUsd": 700687858,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "SG",
      "tradeUsd": 700517528,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "SA",
      "tradeUsd": 699831224,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "FI",
      "tradeUsd": 699583597,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "NL",
      "tradeUsd": 699068387,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "AE",
      "tradeUsd": 698727867,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "LU",
      "tradeUsd": 698560561,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CO",
      "tradeUsd": 698405161,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "GB",
      "tradeUsd": 698180034,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "MM",
      "tradeUsd": 697715926,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NZ",
      "tradeUsd": 697049373,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "BE",
      "tradeUsd": 696233635,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CA",
      "tradeUsd": 694411000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "DZ",
      "tradeUsd": 693851641,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "RS",
      "tradeUsd": 693252288,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IS",
      "tradeUsd": 693123900,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "GR",
      "tradeUsd": 692818410,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "NI",
      "tradeUsd": 692530662,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "MM",
      "tradeUsd": 691988872,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KW",
      "tradeUsd": 691488923,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "DK",
      "tradeUsd": 690986327,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "HU",
      "tradeUsd": 690669461,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "BD",
      "tradeUsd": 690471652,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "IQ",
      "tradeUsd": 690313936,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "VN",
      "tradeUsd": 689659276,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "DZ",
      "tradeUsd": 689426823,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "SE",
      "tradeUsd": 689158524,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PE",
      "tradeUsd": 688866561,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IE",
      "tradeUsd": 688861665,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "EC",
      "tradeUsd": 688794406,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "CN",
      "tradeUsd": 688495560,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "RU",
      "tradeUsd": 688152423,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "BD",
      "tradeUsd": 687688991,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "NL",
      "tradeUsd": 686771545,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TZ",
      "t": "AE",
      "tradeUsd": 686436289,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "PK",
      "tradeUsd": 686157693,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "NG",
      "tradeUsd": 685893681,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "PH",
      "tradeUsd": 685829491,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "SG",
      "tradeUsd": 685509106,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "LV",
      "tradeUsd": 684366947,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "PH",
      "tradeUsd": 684332037,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "IT",
      "tradeUsd": 684271371,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "PT",
      "tradeUsd": 683397501,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "NZ",
      "tradeUsd": 682957992,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AO",
      "tradeUsd": 682352869,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "TH",
      "tradeUsd": 680986599,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "FR",
      "tradeUsd": 680373833,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "JO",
      "tradeUsd": 680044491,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "TR",
      "tradeUsd": 679979341,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "MM",
      "tradeUsd": 679599816,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "EG",
      "tradeUsd": 679475416,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "CH",
      "tradeUsd": 678543532,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PT",
      "tradeUsd": 678226071,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "BE",
      "tradeUsd": 677250153,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "IT",
      "tradeUsd": 676901433,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "JP",
      "tradeUsd": 676855200,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "FR",
      "tradeUsd": 676681629,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "RO",
      "tradeUsd": 675263757,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "CR",
      "tradeUsd": 674395319,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "MX",
      "tradeUsd": 674148260,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CL",
      "tradeUsd": 674004897,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "TH",
      "tradeUsd": 673183045,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "FR",
      "tradeUsd": 672987237,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "NG",
      "tradeUsd": 672963922,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BD",
      "tradeUsd": 672911585,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "HK",
      "tradeUsd": 672756919,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "PK",
      "tradeUsd": 672418618,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "JP",
      "tradeUsd": 671264283,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "KH",
      "tradeUsd": 671094590,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "SA",
      "tradeUsd": 670570185,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "JP",
      "tradeUsd": 670444929,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IQ",
      "tradeUsd": 670291785,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "AE",
      "tradeUsd": 669833758,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KW",
      "tradeUsd": 669291452,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "HU",
      "tradeUsd": 669231851,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "KH",
      "tradeUsd": 667517568,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IS",
      "t": "GB",
      "tradeUsd": 667346655,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "HR",
      "tradeUsd": 667033315,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "AR",
      "tradeUsd": 666514887,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "HK",
      "tradeUsd": 666194158,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "PL",
      "tradeUsd": 665917059,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "GB",
      "tradeUsd": 665466553,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DO",
      "tradeUsd": 665164303,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "NO",
      "tradeUsd": 665124054,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "UA",
      "tradeUsd": 665036903,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "NL",
      "tradeUsd": 664142739,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "SI",
      "tradeUsd": 663245396,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "FI",
      "tradeUsd": 663239462,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "US",
      "tradeUsd": 662506729,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CH",
      "tradeUsd": 662217900,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "IL",
      "tradeUsd": 661867476,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "FR",
      "tradeUsd": 661594230,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IS",
      "t": "US",
      "tradeUsd": 660896747,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "QA",
      "tradeUsd": 660850014,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "JO",
      "tradeUsd": 660411191,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "KR",
      "tradeUsd": 660268321,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "MX",
      "tradeUsd": 660123020,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "PK",
      "tradeUsd": 660091095,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "GH",
      "tradeUsd": 659620022,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "NO",
      "tradeUsd": 659508083,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "JP",
      "tradeUsd": 658805136,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "DK",
      "tradeUsd": 658574369,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "SG",
      "tradeUsd": 658136380,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "HK",
      "tradeUsd": 657691667,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CL",
      "tradeUsd": 657689058,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "LY",
      "tradeUsd": 657645883,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "DO",
      "tradeUsd": 657333778,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "SI",
      "tradeUsd": 657183433,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "KH",
      "tradeUsd": 656890489,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "LY",
      "tradeUsd": 654870151,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "PL",
      "tradeUsd": 654857301,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "RO",
      "tradeUsd": 654700292,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "BE",
      "tradeUsd": 654655588,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "KR",
      "tradeUsd": 654607871,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "CA",
      "tradeUsd": 653861437,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PE",
      "tradeUsd": 653491545,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "ZA",
      "tradeUsd": 653346254,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "FI",
      "tradeUsd": 652622886,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "TR",
      "tradeUsd": 651914554,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "BG",
      "tradeUsd": 651795189,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MT",
      "tradeUsd": 651380046,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "IE",
      "tradeUsd": 650508684,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "DE",
      "tradeUsd": 650013102,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "US",
      "tradeUsd": 649872912,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "ID",
      "tradeUsd": 649526725,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "AU",
      "tradeUsd": 649304978,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "TR",
      "tradeUsd": 649059339,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "NG",
      "tradeUsd": 648862710,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "PK",
      "tradeUsd": 648721379,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "NZ",
      "tradeUsd": 648686654,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "PK",
      "tradeUsd": 648345271,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "SK",
      "tradeUsd": 648023810,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "SA",
      "tradeUsd": 647877072,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "PA",
      "tradeUsd": 647847056,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "RU",
      "tradeUsd": 647692022,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CY",
      "t": "LY",
      "tradeUsd": 647484488,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "IE",
      "tradeUsd": 647400014,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "ZA",
      "tradeUsd": 647229406,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IR",
      "tradeUsd": 646180905,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "AT",
      "tradeUsd": 645867150,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "QA",
      "tradeUsd": 645590552,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PE",
      "tradeUsd": 645310404,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "KR",
      "tradeUsd": 644801526,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "VN",
      "tradeUsd": 644445433,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "TH",
      "tradeUsd": 644295388,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "DO",
      "tradeUsd": 643727560,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IL",
      "tradeUsd": 642641675,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CH",
      "tradeUsd": 641526000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "CR",
      "tradeUsd": 641522206,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "IE",
      "tradeUsd": 640313723,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "MY",
      "tradeUsd": 640175946,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "GR",
      "tradeUsd": 639937173,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "CL",
      "tradeUsd": 639022542,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CR",
      "tradeUsd": 638977985,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "BE",
      "tradeUsd": 638921805,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "IQ",
      "tradeUsd": 638095885,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "FR",
      "tradeUsd": 637583338,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "HU",
      "tradeUsd": 637082682,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "BD",
      "tradeUsd": 636966661,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "ID",
      "tradeUsd": 636701397,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BH",
      "tradeUsd": 636544378,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "CZ",
      "tradeUsd": 636499814,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "IE",
      "tradeUsd": 635449074,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GB",
      "t": "MX",
      "tradeUsd": 634640248,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "BR",
      "tradeUsd": 634608927,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AO",
      "tradeUsd": 634338453,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "US",
      "tradeUsd": 632564413,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "SA",
      "tradeUsd": 632309509,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "SA",
      "tradeUsd": 632055815,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "DE",
      "tradeUsd": 631960924,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IL",
      "tradeUsd": 631560175,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "LY",
      "tradeUsd": 630763051,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "IL",
      "tradeUsd": 630333943,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "CO",
      "tradeUsd": 630198992,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "IT",
      "tradeUsd": 629334288,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "OM",
      "tradeUsd": 628715610,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "PT",
      "tradeUsd": 628582259,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "FR",
      "tradeUsd": 628561887,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "LT",
      "tradeUsd": 628160449,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "PY",
      "tradeUsd": 627892460,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "US",
      "tradeUsd": 627160036,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "RO",
      "tradeUsd": 627046248,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "AT",
      "tradeUsd": 626919295,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "LU",
      "tradeUsd": 626595015,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "AE",
      "tradeUsd": 626573000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "NL",
      "tradeUsd": 626250777,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "DE",
      "tradeUsd": 626162261,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "RS",
      "tradeUsd": 626113660,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "PA",
      "tradeUsd": 625847210,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "GB",
      "tradeUsd": 625563038,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "DK",
      "tradeUsd": 625434186,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "OM",
      "tradeUsd": 625423707,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TZ",
      "t": "AE",
      "tradeUsd": 625152456,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "NL",
      "tradeUsd": 624678287,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GT",
      "t": "NL",
      "tradeUsd": 624011666,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "CZ",
      "tradeUsd": 622477202,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "JP",
      "tradeUsd": 622140483,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "IN",
      "tradeUsd": 621522969,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GH",
      "t": "IT",
      "tradeUsd": 621431440,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "ES",
      "tradeUsd": 620904753,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "EC",
      "tradeUsd": 620135571,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "MM",
      "tradeUsd": 620091959,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "RU",
      "tradeUsd": 619686072,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "UA",
      "tradeUsd": 619430787,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "PE",
      "tradeUsd": 619360888,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "SK",
      "tradeUsd": 619246532,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "ZA",
      "tradeUsd": 617871912,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "PA",
      "tradeUsd": 617863093,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "AE",
      "tradeUsd": 617833577,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NZ",
      "tradeUsd": 617338724,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "CZ",
      "tradeUsd": 617200330,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "BO",
      "tradeUsd": 617064847,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "NO",
      "tradeUsd": 616461174,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "FR",
      "tradeUsd": 616090615,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "DE",
      "tradeUsd": 616079445,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "BE",
      "tradeUsd": 615415491,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CM",
      "t": "FR",
      "tradeUsd": 615012972,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "CH",
      "tradeUsd": 613678253,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "PA",
      "tradeUsd": 613515486,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CA",
      "tradeUsd": 613361417,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "HK",
      "tradeUsd": 613013382,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "RO",
      "tradeUsd": 612828460,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "AU",
      "tradeUsd": 612634094,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CH",
      "tradeUsd": 612460000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "LU",
      "tradeUsd": 611811956,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "GB",
      "tradeUsd": 611118676,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "KE",
      "tradeUsd": 611092523,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "HU",
      "tradeUsd": 610693444,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "VN",
      "tradeUsd": 610514763,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "IN",
      "tradeUsd": 610463498,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "PA",
      "tradeUsd": 610058033,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "DE",
      "tradeUsd": 609616411,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "SA",
      "tradeUsd": 609203915,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "MM",
      "tradeUsd": 609182299,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "ZA",
      "tradeUsd": 607622054,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CI",
      "t": "BE",
      "tradeUsd": 607570299,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GT",
      "tradeUsd": 607289527,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "NG",
      "tradeUsd": 606970151,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "RU",
      "tradeUsd": 606786433,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "PL",
      "tradeUsd": 606705145,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "AT",
      "tradeUsd": 606640550,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "LT",
      "tradeUsd": 606230278,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "ID",
      "tradeUsd": 606159880,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DZ",
      "t": "ID",
      "tradeUsd": 605924274,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "PE",
      "tradeUsd": 605661787,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "AE",
      "tradeUsd": 605374422,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "AE",
      "tradeUsd": 605114926,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "GR",
      "tradeUsd": 604352092,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "DE",
      "tradeUsd": 603886449,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "FR",
      "tradeUsd": 603587020,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "GB",
      "tradeUsd": 603320102,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "NG",
      "tradeUsd": 602982500,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "PT",
      "tradeUsd": 602645101,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "BH",
      "tradeUsd": 602520351,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "DK",
      "tradeUsd": 601750351,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "IE",
      "tradeUsd": 600950959,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "BD",
      "tradeUsd": 600839373,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "AE",
      "tradeUsd": 600837744,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "NG",
      "tradeUsd": 600823058,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "GT",
      "tradeUsd": 600680784,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "CA",
      "tradeUsd": 600422122,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "JP",
      "tradeUsd": 600046446,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SA",
      "t": "VN",
      "tradeUsd": 599653686,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "DZ",
      "tradeUsd": 599329529,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "TR",
      "tradeUsd": 598584000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "ES",
      "tradeUsd": 598299676,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "HN",
      "tradeUsd": 598223434,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "ID",
      "tradeUsd": 597357454,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CR",
      "t": "HN",
      "tradeUsd": 597351714,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "RU",
      "tradeUsd": 597274158,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "CN",
      "tradeUsd": 597241700,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "KR",
      "tradeUsd": 597098719,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CI",
      "tradeUsd": 596568616,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SI",
      "tradeUsd": 595889421,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "AO",
      "tradeUsd": 595278456,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "LT",
      "tradeUsd": 594709830,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "AR",
      "tradeUsd": 593991573,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "TR",
      "tradeUsd": 593504904,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "IT",
      "tradeUsd": 592933487,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "NZ",
      "tradeUsd": 592873947,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "RO",
      "tradeUsd": 592523953,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IS",
      "t": "GB",
      "tradeUsd": 592418596,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "DZ",
      "tradeUsd": 592157543,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "DK",
      "tradeUsd": 592013561,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "HK",
      "tradeUsd": 591366115,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ZA",
      "t": "TZ",
      "tradeUsd": 591353141,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LK",
      "t": "IT",
      "tradeUsd": 591047835,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KW",
      "t": "CN",
      "tradeUsd": 590899280,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "PE",
      "tradeUsd": 590334544,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UG",
      "t": "KE",
      "tradeUsd": 589627906,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "RU",
      "tradeUsd": 589537000,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "AE",
      "tradeUsd": 588286593,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "DZ",
      "tradeUsd": 587894173,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "JP",
      "tradeUsd": 587654207,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "US",
      "tradeUsd": 587580058,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "SE",
      "tradeUsd": 586746356,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "UA",
      "tradeUsd": 586161092,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "TH",
      "tradeUsd": 585142043,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CR",
      "tradeUsd": 585112613,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "GH",
      "tradeUsd": 584705158,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "SE",
      "tradeUsd": 584607294,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "LT",
      "tradeUsd": 583978938,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CR",
      "tradeUsd": 583805685,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "IL",
      "tradeUsd": 583352263,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "FI",
      "tradeUsd": 583290325,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "QA",
      "tradeUsd": 583247374,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "KW",
      "tradeUsd": 583124295,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "CA",
      "tradeUsd": 582996684,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "DK",
      "tradeUsd": 582515516,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "FI",
      "tradeUsd": 582477835,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PL",
      "t": "VN",
      "tradeUsd": 581468917,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "QA",
      "tradeUsd": 581005120,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SA",
      "tradeUsd": 579946040,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "CI",
      "tradeUsd": 579863731,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "AE",
      "tradeUsd": 579404487,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "HR",
      "tradeUsd": 578994041,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "TR",
      "tradeUsd": 578736092,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KH",
      "tradeUsd": 578325396,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CZ",
      "tradeUsd": 577891018,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "FI",
      "tradeUsd": 577765116,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PT",
      "t": "SK",
      "tradeUsd": 577586448,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "KR",
      "tradeUsd": 577508762,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "GT",
      "tradeUsd": 577223652,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "CA",
      "tradeUsd": 577198300,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "VN",
      "tradeUsd": 576645765,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "IE",
      "tradeUsd": 576292204,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "EC",
      "tradeUsd": 575553233,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "HU",
      "tradeUsd": 575462304,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "LU",
      "tradeUsd": 575390777,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "KH",
      "tradeUsd": 575087708,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "JO",
      "tradeUsd": 574815496,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "AO",
      "tradeUsd": 574267179,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "TZ",
      "tradeUsd": 573380041,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "IL",
      "tradeUsd": 573004567,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "BR",
      "tradeUsd": 572830589,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "SI",
      "tradeUsd": 572758202,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "UA",
      "tradeUsd": 572580089,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "SG",
      "tradeUsd": 572389749,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "MY",
      "tradeUsd": 572240140,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "LY",
      "tradeUsd": 572190016,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "IR",
      "tradeUsd": 572035079,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "AT",
      "tradeUsd": 571660752,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "AT",
      "tradeUsd": 571301311,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "EC",
      "tradeUsd": 571258474,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "AE",
      "tradeUsd": 571099517,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "HR",
      "tradeUsd": 570966865,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "US",
      "tradeUsd": 570867443,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "VN",
      "tradeUsd": 570446568,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "PK",
      "tradeUsd": 570422014,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "ES",
      "tradeUsd": 569532088,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "GH",
      "tradeUsd": 569497022,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "EG",
      "tradeUsd": 569464683,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "CR",
      "tradeUsd": 569402730,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KE",
      "tradeUsd": 568844633,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "IT",
      "tradeUsd": 568723229,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "UA",
      "tradeUsd": 567443414,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "AO",
      "tradeUsd": 567265582,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HR",
      "t": "PL",
      "tradeUsd": 567232226,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "LY",
      "tradeUsd": 567220437,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "RS",
      "tradeUsd": 566604920,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "NL",
      "tradeUsd": 566338335,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "VN",
      "tradeUsd": 565685866,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EE",
      "t": "DK",
      "tradeUsd": 565583989,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CH",
      "t": "KW",
      "tradeUsd": 565515053,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "DZ",
      "tradeUsd": 565481245,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "NI",
      "tradeUsd": 564197057,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "NO",
      "tradeUsd": 564155057,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "MA",
      "tradeUsd": 564151727,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "SK",
      "tradeUsd": 563593670,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "PK",
      "tradeUsd": 563223524,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "CN",
      "tradeUsd": 563111976,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "CN",
      "tradeUsd": 562960449,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "IL",
      "tradeUsd": 562692883,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "AU",
      "tradeUsd": 561941531,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "CH",
      "tradeUsd": 561595853,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "SK",
      "tradeUsd": 560984536,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "PY",
      "tradeUsd": 560471624,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "MY",
      "tradeUsd": 560168924,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "CA",
      "tradeUsd": 560103110,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "VN",
      "tradeUsd": 559950977,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "KR",
      "tradeUsd": 559547109,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "TN",
      "tradeUsd": 559366643,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "MY",
      "tradeUsd": 559302821,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "KW",
      "tradeUsd": 558443131,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "CR",
      "tradeUsd": 558322091,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "JP",
      "tradeUsd": 558095502,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "ZA",
      "tradeUsd": 558076240,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "DZ",
      "tradeUsd": 557921686,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "EC",
      "tradeUsd": 557234126,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "BE",
      "tradeUsd": 557038876,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CY",
      "tradeUsd": 556882203,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "BE",
      "tradeUsd": 556814777,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "TZ",
      "tradeUsd": 556645812,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CO",
      "tradeUsd": 556346990,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "CZ",
      "tradeUsd": 555590785,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "CH",
      "tradeUsd": 555581811,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "CZ",
      "tradeUsd": 554442063,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "CA",
      "tradeUsd": 554384000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "KR",
      "tradeUsd": 553788703,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "IR",
      "tradeUsd": 553698922,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "JP",
      "tradeUsd": 553165350,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "IL",
      "tradeUsd": 552793281,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "SK",
      "tradeUsd": 552738983,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "HR",
      "tradeUsd": 552570406,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "SE",
      "tradeUsd": 551774535,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "CA",
      "tradeUsd": 550645372,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "IN",
      "tradeUsd": 550494571,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "SE",
      "tradeUsd": 550459909,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "GB",
      "tradeUsd": 550337313,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IQ",
      "tradeUsd": 550033839,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "AT",
      "tradeUsd": 549961241,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "PL",
      "tradeUsd": 549202119,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "US",
      "tradeUsd": 549022869,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "GB",
      "tradeUsd": 548853436,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "SK",
      "tradeUsd": 548695604,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "CY",
      "tradeUsd": 548326818,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "MY",
      "tradeUsd": 548155361,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "PT",
      "tradeUsd": 547706585,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "NG",
      "tradeUsd": 547550253,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "AU",
      "tradeUsd": 547349142,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "NL",
      "tradeUsd": 547296208,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UY",
      "t": "AR",
      "tradeUsd": 547242506,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "CZ",
      "tradeUsd": 547221946,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "IE",
      "tradeUsd": 546977286,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "JO",
      "tradeUsd": 546846285,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "EG",
      "tradeUsd": 546696448,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ID",
      "t": "JO",
      "tradeUsd": 546657973,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "LV",
      "tradeUsd": 545858791,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "ZA",
      "tradeUsd": 545806477,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "CI",
      "tradeUsd": 545430391,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "RU",
      "tradeUsd": 545413080,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TN",
      "t": "DZ",
      "tradeUsd": 545104206,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KH",
      "t": "TH",
      "tradeUsd": 544374809,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "NL",
      "tradeUsd": 544199391,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "ES",
      "tradeUsd": 544122763,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JO",
      "t": "AE",
      "tradeUsd": 544102073,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "GR",
      "tradeUsd": 543886517,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EC",
      "t": "BE",
      "tradeUsd": 543604013,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "UA",
      "tradeUsd": 543557742,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "RS",
      "tradeUsd": 543459695,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "IN",
      "tradeUsd": 542829103,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "IN",
      "tradeUsd": 542410166,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "IE",
      "tradeUsd": 542394941,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MA",
      "t": "CN",
      "tradeUsd": 541670631,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "KE",
      "tradeUsd": 541594940,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "BE",
      "tradeUsd": 541195377,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "AU",
      "tradeUsd": 541042048,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DK",
      "tradeUsd": 540824282,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "NL",
      "tradeUsd": 540806168,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CL",
      "t": "GB",
      "tradeUsd": 540355072,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "JO",
      "tradeUsd": 540264601,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BG",
      "t": "RU",
      "tradeUsd": 540233134,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KE",
      "t": "NL",
      "tradeUsd": 540137256,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "NO",
      "tradeUsd": 539916551,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BH",
      "t": "NL",
      "tradeUsd": 539836876,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "BE",
      "tradeUsd": 539740335,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NI",
      "t": "CA",
      "tradeUsd": 539246128,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "KZ",
      "tradeUsd": 538757716,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "ZA",
      "tradeUsd": 538518040,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LV",
      "t": "UA",
      "tradeUsd": 537976749,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "AU",
      "tradeUsd": 536049942,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "HK",
      "tradeUsd": 535587611,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "SG",
      "tradeUsd": 535147725,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "DK",
      "tradeUsd": 534666069,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PE",
      "t": "BO",
      "tradeUsd": 534637328,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "UG",
      "tradeUsd": 534020464,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "IR",
      "tradeUsd": 533763483,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "IT",
      "tradeUsd": 533755367,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "VN",
      "tradeUsd": 533527015,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "AO",
      "tradeUsd": 532716436,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "CM",
      "tradeUsd": 532579587,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CL",
      "tradeUsd": 532378943,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DE",
      "t": "IQ",
      "tradeUsd": 531906967,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "GR",
      "tradeUsd": 531722628,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "SA",
      "tradeUsd": 531626370,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "LA",
      "tradeUsd": 531622835,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "RO",
      "tradeUsd": 531494334,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "IT",
      "tradeUsd": 530992194,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "PL",
      "tradeUsd": 530633250,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "RO",
      "tradeUsd": 530411813,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "PH",
      "tradeUsd": 529908303,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "CY",
      "tradeUsd": 529499355,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "PT",
      "tradeUsd": 529371741,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "RO",
      "tradeUsd": 528004369,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "IL",
      "tradeUsd": 527273930,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "IT",
      "tradeUsd": 527232927,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HU",
      "t": "KR",
      "tradeUsd": 527035274,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AE",
      "t": "PL",
      "tradeUsd": 526906876,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "CA",
      "tradeUsd": 526787697,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TR",
      "t": "NO",
      "tradeUsd": 526758919,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "LY",
      "tradeUsd": 526316382,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "FI",
      "t": "BR",
      "tradeUsd": 526199593,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "RU",
      "tradeUsd": 526066141,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "CA",
      "tradeUsd": 525378702,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "VN",
      "tradeUsd": 525340673,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SG",
      "tradeUsd": 525302579,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "ES",
      "t": "LT",
      "tradeUsd": 524793167,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "HU",
      "tradeUsd": 524063564,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "RU",
      "tradeUsd": 523956802,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NL",
      "t": "MT",
      "tradeUsd": 523544273,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "PK",
      "tradeUsd": 523219522,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CA",
      "t": "CL",
      "tradeUsd": 523216401,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LU",
      "t": "ES",
      "tradeUsd": 522621209,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "GT",
      "tradeUsd": 522572470,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "CO",
      "tradeUsd": 522122340,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "HU",
      "tradeUsd": 522032708,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "RO",
      "tradeUsd": 521941029,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "OM",
      "t": "KW",
      "tradeUsd": 521914127,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "US",
      "tradeUsd": 521249747,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UA",
      "t": "ID",
      "tradeUsd": 520742950,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NZ",
      "t": "DZ",
      "tradeUsd": 520268025,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "EC",
      "tradeUsd": 519876503,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "NG",
      "tradeUsd": 519656971,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "VN",
      "t": "CO",
      "tradeUsd": 519437865,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "UG",
      "t": "HK",
      "tradeUsd": 519401909,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "FR",
      "tradeUsd": 519131687,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "DE",
      "tradeUsd": 519104537,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MX",
      "t": "IN",
      "tradeUsd": 518724999,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "EG",
      "t": "IN",
      "tradeUsd": 517444761,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KR",
      "t": "EC",
      "tradeUsd": 516563044,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "JP",
      "tradeUsd": 515738857,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CL",
      "tradeUsd": 515321591,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SE",
      "t": "IS",
      "tradeUsd": 515183929,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "MY",
      "tradeUsd": 515142349,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "KH",
      "tradeUsd": 514868620,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MM",
      "t": "ID",
      "tradeUsd": 513598215,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "MX",
      "tradeUsd": 513503565,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AU",
      "t": "OM",
      "tradeUsd": 513342191,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "IQ",
      "tradeUsd": 512622433,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "RS",
      "t": "GB",
      "tradeUsd": 512582124,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BO",
      "t": "AR",
      "tradeUsd": 512479598,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PH",
      "t": "GB",
      "tradeUsd": 512243065,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "GR",
      "t": "HU",
      "tradeUsd": 511921875,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "CY",
      "tradeUsd": 511476735,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NG",
      "t": "JP",
      "tradeUsd": 511225115,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "HU",
      "tradeUsd": 511170496,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BG",
      "tradeUsd": 510833846,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "TH",
      "t": "MX",
      "tradeUsd": 509889595,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SV",
      "t": "NI",
      "tradeUsd": 509787860,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IE",
      "t": "RU",
      "tradeUsd": 509656864,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "NZ",
      "tradeUsd": 509529019,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SG",
      "t": "PL",
      "tradeUsd": 509334066,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BR",
      "t": "SI",
      "tradeUsd": 509076660,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "GT",
      "tradeUsd": 508764497,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CZ",
      "t": "LV",
      "tradeUsd": 508587389,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "LT",
      "t": "TR",
      "tradeUsd": 508466516,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "JP",
      "tradeUsd": 508314467,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "CO",
      "t": "GB",
      "tradeUsd": 507343898,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "MY",
      "t": "EG",
      "tradeUsd": 506671052,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "KZ",
      "t": "JP",
      "tradeUsd": 506564622,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "SK",
      "t": "DK",
      "tradeUsd": 506485769,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AO",
      "t": "BR",
      "tradeUsd": 506202542,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "RO",
      "tradeUsd": 505901445,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "NO",
      "t": "SG",
      "tradeUsd": 505817852,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "TZ",
      "tradeUsd": 505409209,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "LY",
      "tradeUsd": 505184185,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "BO",
      "tradeUsd": 504549153,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "DK",
      "t": "GR",
      "tradeUsd": 504547090,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "QA",
      "t": "HK",
      "tradeUsd": 504469364,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "PK",
      "t": "ID",
      "tradeUsd": 504391292,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IN",
      "t": "FI",
      "tradeUsd": 503824119,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AR",
      "t": "IE",
      "tradeUsd": 503757940,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "US",
      "t": "TN",
      "tradeUsd": 503588215,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IT",
      "t": "PK",
      "tradeUsd": 501988222,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "HK",
      "t": "ZA",
      "tradeUsd": 501860672,
      "year": 2024,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "AT",
      "t": "SG",
      "tradeUsd": 501723164,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "JP",
      "t": "KH",
      "tradeUsd": 501718634,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "BE",
      "t": "CO",
      "tradeUsd": 501336831,
      "year": 2023,
      "direction": "export",
      "weight": 1
    },
    {
      "s": "IL",
      "t": "AE",
      "tradeUsd": 500679000,
      "year": 2024,
      "direction": "export",
      "weight": 1
    }
  ],
  "sectors": [
    {
      "id": "medicine",
      "name": "Medicine",
      "hsCodes": [
        "30"
      ]
    },
    {
      "id": "electronics",
      "name": "Electronics",
      "hsCodes": [
        "85"
      ]
    },
    {
      "id": "automotive",
      "name": "Automotive",
      "hsCodes": [
        "87"
      ]
    },
    {
      "id": "energy",
      "name": "Energy",
      "hsCodes": [
        "27"
      ]
    },
    {
      "id": "agriculture",
      "name": "Agriculture",
      "hsCodes": [
        "10"
      ]
    },
    {
      "id": "textiles",
      "name": "Textiles",
      "hsCodes": [
        "61"
      ]
    },
    {
      "id": "metals",
      "name": "Metals",
      "hsCodes": [
        "72"
      ]
    },
    {
      "id": "chemicals",
      "name": "Chemicals",
      "hsCodes": [
        "29"
      ]
    }
  ],
  "topProducersBySectorYear": {
    "2023": {
      "medicine": [
        {
          "iso2": "DE",
          "value": 122322706633,
          "provenance": "observed"
        },
        {
          "iso2": "CH",
          "value": 99011024931,
          "provenance": "observed"
        },
        {
          "iso2": "IE",
          "value": 71564046143,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 50320671547,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 32638202326,
          "provenance": "observed"
        },
        {
          "iso2": "GB",
          "value": 27503954664,
          "provenance": "observed"
        },
        {
          "iso2": "ES",
          "value": 21860694238,
          "provenance": "observed"
        },
        {
          "iso2": "DK",
          "value": 20905401352,
          "provenance": "observed"
        },
        {
          "iso2": "SI",
          "value": 20151111545,
          "provenance": "observed"
        },
        {
          "iso2": "AT",
          "value": 17588010130,
          "provenance": "observed"
        }
      ],
      "electronics": [
        {
          "iso2": "CN",
          "value": 896418621480,
          "provenance": "observed"
        },
        {
          "iso2": "HK",
          "value": 335498782153,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 194264949012,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 171301417555,
          "provenance": "observed"
        },
        {
          "iso2": "SG",
          "value": 161697612582,
          "provenance": "observed"
        },
        {
          "iso2": "VN",
          "value": 132718319347,
          "provenance": "observed"
        },
        {
          "iso2": "MY",
          "value": 119041955238,
          "provenance": "observed"
        },
        {
          "iso2": "MX",
          "value": 103408031670,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 101888300035,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 65706128485,
          "provenance": "observed"
        }
      ],
      "automotive": [
        {
          "iso2": "DE",
          "value": 300058296184,
          "provenance": "observed"
        },
        {
          "iso2": "CN",
          "value": 192497286190,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 157301991121,
          "provenance": "observed"
        },
        {
          "iso2": "MX",
          "value": 156467496446,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 91830144315,
          "provenance": "observed"
        },
        {
          "iso2": "ES",
          "value": 65333940466,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 63408926075,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 53836285957,
          "provenance": "observed"
        },
        {
          "iso2": "CZ",
          "value": 52225986916,
          "provenance": "observed"
        },
        {
          "iso2": "GB",
          "value": 50323592758,
          "provenance": "observed"
        }
      ],
      "energy": [
        {
          "iso2": "AE",
          "value": 282076795222,
          "provenance": "observed"
        },
        {
          "iso2": "SA",
          "value": 246467131333,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 142971179064,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 130174993568,
          "provenance": "observed"
        },
        {
          "iso2": "AU",
          "value": 129171296046,
          "provenance": "observed"
        },
        {
          "iso2": "QA",
          "value": 84595541757,
          "provenance": "observed"
        },
        {
          "iso2": "KW",
          "value": 78139815713,
          "provenance": "observed"
        },
        {
          "iso2": "CN",
          "value": 61092825863,
          "provenance": "observed"
        },
        {
          "iso2": "NG",
          "value": 59664171813,
          "provenance": "observed"
        },
        {
          "iso2": "ID",
          "value": 59493963507,
          "provenance": "observed"
        }
      ],
      "agriculture": [
        {
          "iso2": "BR",
          "value": 14975111759,
          "provenance": "observed"
        },
        {
          "iso2": "AU",
          "value": 12863411422,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 11232212939,
          "provenance": "observed"
        },
        {
          "iso2": "AR",
          "value": 8618150421,
          "provenance": "observed"
        },
        {
          "iso2": "UA",
          "value": 8306532857,
          "provenance": "observed"
        },
        {
          "iso2": "TH",
          "value": 5259866091,
          "provenance": "observed"
        },
        {
          "iso2": "VN",
          "value": 4510904312,
          "provenance": "observed"
        },
        {
          "iso2": "RO",
          "value": 4460829176,
          "provenance": "observed"
        },
        {
          "iso2": "PL",
          "value": 3860234806,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 3491353380,
          "provenance": "observed"
        }
      ],
      "textiles": [
        {
          "iso2": "CN",
          "value": 82310721188,
          "provenance": "observed"
        },
        {
          "iso2": "VN",
          "value": 14763153536,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 14395976732,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 11742915715,
          "provenance": "observed"
        },
        {
          "iso2": "TR",
          "value": 10277565649,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 6679072816,
          "provenance": "observed"
        },
        {
          "iso2": "ES",
          "value": 6313229815,
          "provenance": "observed"
        },
        {
          "iso2": "PL",
          "value": 5524443249,
          "provenance": "observed"
        },
        {
          "iso2": "KH",
          "value": 5478609397,
          "provenance": "observed"
        },
        {
          "iso2": "PK",
          "value": 4178480292,
          "provenance": "observed"
        }
      ],
      "metals": [
        {
          "iso2": "CN",
          "value": 68990038763,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 33076795796,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 30465519223,
          "provenance": "observed"
        },
        {
          "iso2": "ID",
          "value": 26704577025,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 25725964625,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 17121187716,
          "provenance": "observed"
        },
        {
          "iso2": "BR",
          "value": 14619802697,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 12154511846,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 9670414084,
          "provenance": "observed"
        },
        {
          "iso2": "AT",
          "value": 9334218099,
          "provenance": "observed"
        }
      ],
      "chemicals": [
        {
          "iso2": "CN",
          "value": 77911252431,
          "provenance": "observed"
        },
        {
          "iso2": "IE",
          "value": 44593714334,
          "provenance": "observed"
        },
        {
          "iso2": "CH",
          "value": 40302158392,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 28039812226,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 20808670097,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 19988675764,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 14774153390,
          "provenance": "observed"
        },
        {
          "iso2": "SG",
          "value": 14568908626,
          "provenance": "observed"
        },
        {
          "iso2": "GB",
          "value": 14124038487,
          "provenance": "observed"
        },
        {
          "iso2": "SA",
          "value": 11902034677,
          "provenance": "observed"
        }
      ]
    },
    "2024": {
      "medicine": [
        {
          "iso2": "DE",
          "value": 120886456255,
          "provenance": "observed"
        },
        {
          "iso2": "CH",
          "value": 110366559188,
          "provenance": "observed"
        },
        {
          "iso2": "IE",
          "value": 89811624511,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 53854920553,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 28399946469,
          "provenance": "observed"
        },
        {
          "iso2": "GB",
          "value": 27506706555,
          "provenance": "observed"
        },
        {
          "iso2": "SI",
          "value": 27195645180,
          "provenance": "observed"
        },
        {
          "iso2": "DK",
          "value": 21731351669,
          "provenance": "observed"
        },
        {
          "iso2": "AT",
          "value": 21034604274,
          "provenance": "observed"
        },
        {
          "iso2": "ES",
          "value": 18183233087,
          "provenance": "observed"
        }
      ],
      "electronics": [
        {
          "iso2": "CN",
          "value": 927094995925,
          "provenance": "observed"
        },
        {
          "iso2": "HK",
          "value": 368296072420,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 212908543878,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 175829490903,
          "provenance": "observed"
        },
        {
          "iso2": "SG",
          "value": 175708786833,
          "provenance": "observed"
        },
        {
          "iso2": "MY",
          "value": 121185101721,
          "provenance": "observed"
        },
        {
          "iso2": "MX",
          "value": 107742079358,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 101050737864,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 61318354438,
          "provenance": "observed"
        },
        {
          "iso2": "CZ",
          "value": 53543728485,
          "provenance": "observed"
        }
      ],
      "automotive": [
        {
          "iso2": "DE",
          "value": 276497618457,
          "provenance": "observed"
        },
        {
          "iso2": "CN",
          "value": 215979240143,
          "provenance": "observed"
        },
        {
          "iso2": "MX",
          "value": 160602816339,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 150889774290,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 91869338623,
          "provenance": "observed"
        },
        {
          "iso2": "ES",
          "value": 59962548564,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 55950556650,
          "provenance": "observed"
        },
        {
          "iso2": "CZ",
          "value": 54050740479,
          "provenance": "observed"
        },
        {
          "iso2": "GB",
          "value": 48215660096,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 46094844722,
          "provenance": "observed"
        }
      ],
      "energy": [
        {
          "iso2": "SA",
          "value": 223387106063,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 140678826175,
          "provenance": "observed"
        },
        {
          "iso2": "AU",
          "value": 113130494069,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 104942339278,
          "provenance": "observed"
        },
        {
          "iso2": "QA",
          "value": 79608644025,
          "provenance": "observed"
        },
        {
          "iso2": "KW",
          "value": 68948610140,
          "provenance": "observed"
        },
        {
          "iso2": "BR",
          "value": 57155330959,
          "provenance": "observed"
        },
        {
          "iso2": "SG",
          "value": 56213225254,
          "provenance": "observed"
        },
        {
          "iso2": "ID",
          "value": 55528750648,
          "provenance": "observed"
        },
        {
          "iso2": "CN",
          "value": 53572785795,
          "provenance": "observed"
        }
      ],
      "agriculture": [
        {
          "iso2": "AR",
          "value": 10114396297,
          "provenance": "observed"
        },
        {
          "iso2": "UA",
          "value": 9418272530,
          "provenance": "observed"
        },
        {
          "iso2": "BR",
          "value": 9397882039,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 9063047602,
          "provenance": "observed"
        },
        {
          "iso2": "AU",
          "value": 8250390292,
          "provenance": "observed"
        },
        {
          "iso2": "TH",
          "value": 6496050830,
          "provenance": "observed"
        },
        {
          "iso2": "PK",
          "value": 4485449465,
          "provenance": "observed"
        },
        {
          "iso2": "RO",
          "value": 3200095575,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 2781217542,
          "provenance": "observed"
        },
        {
          "iso2": "PL",
          "value": 2487494108,
          "provenance": "observed"
        }
      ],
      "textiles": [
        {
          "iso2": "CN",
          "value": 85263543484,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 13911293791,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 11369038699,
          "provenance": "observed"
        },
        {
          "iso2": "TR",
          "value": 10105657119,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 6714897197,
          "provenance": "observed"
        },
        {
          "iso2": "KH",
          "value": 6638840599,
          "provenance": "observed"
        },
        {
          "iso2": "ES",
          "value": 6555167801,
          "provenance": "observed"
        },
        {
          "iso2": "PL",
          "value": 6090245401,
          "provenance": "observed"
        },
        {
          "iso2": "PK",
          "value": 4769184621,
          "provenance": "observed"
        },
        {
          "iso2": "ID",
          "value": 4139575589,
          "provenance": "observed"
        }
      ],
      "metals": [
        {
          "iso2": "CN",
          "value": 70749286150,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 29764465659,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 27368570769,
          "provenance": "observed"
        },
        {
          "iso2": "ID",
          "value": 25801534087,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 24800969022,
          "provenance": "observed"
        },
        {
          "iso2": "IT",
          "value": 14462592206,
          "provenance": "observed"
        },
        {
          "iso2": "BR",
          "value": 11915251894,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 11519844219,
          "provenance": "observed"
        },
        {
          "iso2": "TR",
          "value": 10182170120,
          "provenance": "observed"
        },
        {
          "iso2": "CA",
          "value": 8757937428,
          "provenance": "observed"
        }
      ],
      "chemicals": [
        {
          "iso2": "CN",
          "value": 82604532325,
          "provenance": "observed"
        },
        {
          "iso2": "CH",
          "value": 47210978992,
          "provenance": "observed"
        },
        {
          "iso2": "IE",
          "value": 46417480187,
          "provenance": "observed"
        },
        {
          "iso2": "DE",
          "value": 26980623636,
          "provenance": "observed"
        },
        {
          "iso2": "KR",
          "value": 21861374722,
          "provenance": "observed"
        },
        {
          "iso2": "NL",
          "value": 19570059299,
          "provenance": "observed"
        },
        {
          "iso2": "JP",
          "value": 14302007540,
          "provenance": "observed"
        },
        {
          "iso2": "SG",
          "value": 11702633449,
          "provenance": "observed"
        },
        {
          "iso2": "SA",
          "value": 11246517901,
          "provenance": "observed"
        },
        {
          "iso2": "GB",
          "value": 8819769728,
          "provenance": "observed"
        }
      ]
    }
  },
  "sectorValuesBySectorYear": {
    "2023": {
      "medicine": [
        {
          "iso2": "DE",
          "value": 122322706633
        },
        {
          "iso2": "CH",
          "value": 99011024931
        },
        {
          "iso2": "IE",
          "value": 71564046143
        },
        {
          "iso2": "IT",
          "value": 50320671547
        },
        {
          "iso2": "NL",
          "value": 32638202326
        },
        {
          "iso2": "GB",
          "value": 27503954664
        },
        {
          "iso2": "ES",
          "value": 21860694238
        },
        {
          "iso2": "DK",
          "value": 20905401352
        },
        {
          "iso2": "SI",
          "value": 20151111545
        },
        {
          "iso2": "AT",
          "value": 17588010130
        },
        {
          "iso2": "SE",
          "value": 13591971294
        },
        {
          "iso2": "CN",
          "value": 11283730462
        },
        {
          "iso2": "SG",
          "value": 11039142743
        },
        {
          "iso2": "CA",
          "value": 9610676325
        },
        {
          "iso2": "HU",
          "value": 8457726557
        },
        {
          "iso2": "JP",
          "value": 7627495438
        },
        {
          "iso2": "PL",
          "value": 6327258145
        },
        {
          "iso2": "KR",
          "value": 6203424508
        },
        {
          "iso2": "CZ",
          "value": 4150378705
        },
        {
          "iso2": "GR",
          "value": 3024663094
        },
        {
          "iso2": "PT",
          "value": 2874192436
        },
        {
          "iso2": "AU",
          "value": 2662567732
        },
        {
          "iso2": "MX",
          "value": 2340401865
        },
        {
          "iso2": "TR",
          "value": 2199316257
        },
        {
          "iso2": "FI",
          "value": 1983663279
        },
        {
          "iso2": "HK",
          "value": 1980913805
        },
        {
          "iso2": "IL",
          "value": 1890822000
        },
        {
          "iso2": "AE",
          "value": 1872569906
        },
        {
          "iso2": "BG",
          "value": 1348072925
        },
        {
          "iso2": "RO",
          "value": 1277001659
        },
        {
          "iso2": "BR",
          "value": 1237328619
        },
        {
          "iso2": "LT",
          "value": 1172696847
        },
        {
          "iso2": "HR",
          "value": 1167113710
        },
        {
          "iso2": "AR",
          "value": 916344211
        },
        {
          "iso2": "JO",
          "value": 773800416
        },
        {
          "iso2": "SK",
          "value": 748329490
        },
        {
          "iso2": "ID",
          "value": 663528243
        },
        {
          "iso2": "TH",
          "value": 616183378
        },
        {
          "iso2": "DO",
          "value": 605393509
        },
        {
          "iso2": "SA",
          "value": 556598637
        },
        {
          "iso2": "MY",
          "value": 468727887
        },
        {
          "iso2": "RS",
          "value": 456810206
        },
        {
          "iso2": "ZA",
          "value": 451356451
        },
        {
          "iso2": "CO",
          "value": 434541757
        },
        {
          "iso2": "CR",
          "value": 412509844
        },
        {
          "iso2": "GT",
          "value": 398184451
        },
        {
          "iso2": "NZ",
          "value": 394823644
        },
        {
          "iso2": "EG",
          "value": 354348972
        },
        {
          "iso2": "PK",
          "value": 306898916
        },
        {
          "iso2": "UA",
          "value": 278651960
        },
        {
          "iso2": "VN",
          "value": 258648398
        },
        {
          "iso2": "CL",
          "value": 203669417
        },
        {
          "iso2": "LU",
          "value": 185274310
        },
        {
          "iso2": "UY",
          "value": 174198359
        },
        {
          "iso2": "KE",
          "value": 165184980
        },
        {
          "iso2": "MA",
          "value": 153996677
        },
        {
          "iso2": "TN",
          "value": 113941432
        },
        {
          "iso2": "PE",
          "value": 109459486
        },
        {
          "iso2": "OM",
          "value": 109156369
        },
        {
          "iso2": "PH",
          "value": 57061217
        },
        {
          "iso2": "KZ",
          "value": 49213093
        },
        {
          "iso2": "KW",
          "value": 43477125
        },
        {
          "iso2": "UG",
          "value": 35264183
        },
        {
          "iso2": "EC",
          "value": 34013145
        },
        {
          "iso2": "KH",
          "value": 19127175
        },
        {
          "iso2": "GH",
          "value": 14174055
        },
        {
          "iso2": "LK",
          "value": 12170563
        },
        {
          "iso2": "QA",
          "value": 7576183
        },
        {
          "iso2": "CI",
          "value": 3874006
        },
        {
          "iso2": "BH",
          "value": 3443314
        },
        {
          "iso2": "TZ",
          "value": 3348843
        },
        {
          "iso2": "BO",
          "value": 3095028
        },
        {
          "iso2": "NG",
          "value": 1231110
        },
        {
          "iso2": "CM",
          "value": 1094473
        },
        {
          "iso2": "MM",
          "value": 61054
        },
        {
          "iso2": "AO",
          "value": 15023
        }
      ],
      "electronics": [
        {
          "iso2": "CN",
          "value": 896418621480
        },
        {
          "iso2": "HK",
          "value": 335498782153
        },
        {
          "iso2": "DE",
          "value": 194264949012
        },
        {
          "iso2": "KR",
          "value": 171301417555
        },
        {
          "iso2": "SG",
          "value": 161697612582
        },
        {
          "iso2": "VN",
          "value": 132718319347
        },
        {
          "iso2": "MY",
          "value": 119041955238
        },
        {
          "iso2": "MX",
          "value": 103408031670
        },
        {
          "iso2": "JP",
          "value": 101888300035
        },
        {
          "iso2": "NL",
          "value": 65706128485
        },
        {
          "iso2": "CZ",
          "value": 52059751048
        },
        {
          "iso2": "TH",
          "value": 49994329206
        },
        {
          "iso2": "PL",
          "value": 49155850128
        },
        {
          "iso2": "IT",
          "value": 44272110278
        },
        {
          "iso2": "AE",
          "value": 42277665209
        },
        {
          "iso2": "HU",
          "value": 40739741760
        },
        {
          "iso2": "PH",
          "value": 40581484557
        },
        {
          "iso2": "GB",
          "value": 28470808388
        },
        {
          "iso2": "ES",
          "value": 22072898693
        },
        {
          "iso2": "AT",
          "value": 20230512343
        },
        {
          "iso2": "SK",
          "value": 18534945468
        },
        {
          "iso2": "RO",
          "value": 18211177074
        },
        {
          "iso2": "SE",
          "value": 17263732093
        },
        {
          "iso2": "CA",
          "value": 16008032474
        },
        {
          "iso2": "TR",
          "value": 15453920756
        },
        {
          "iso2": "CH",
          "value": 14736846491
        },
        {
          "iso2": "ID",
          "value": 14343477703
        },
        {
          "iso2": "IL",
          "value": 12017708000
        },
        {
          "iso2": "IE",
          "value": 10531791246
        },
        {
          "iso2": "DK",
          "value": 8957658969
        },
        {
          "iso2": "FI",
          "value": 7761797149
        },
        {
          "iso2": "MA",
          "value": 7716520848
        },
        {
          "iso2": "PT",
          "value": 7132288589
        },
        {
          "iso2": "SI",
          "value": 5489100160
        },
        {
          "iso2": "TN",
          "value": 5390000227
        },
        {
          "iso2": "BG",
          "value": 5384906994
        },
        {
          "iso2": "RS",
          "value": 5105534544
        },
        {
          "iso2": "BR",
          "value": 4514789954
        },
        {
          "iso2": "SA",
          "value": 4044169192
        },
        {
          "iso2": "AU",
          "value": 3890069100
        },
        {
          "iso2": "KH",
          "value": 3139357212
        },
        {
          "iso2": "LT",
          "value": 3095383259
        },
        {
          "iso2": "EG",
          "value": 2628295183
        },
        {
          "iso2": "GR",
          "value": 2378130609
        },
        {
          "iso2": "HR",
          "value": 2361085284
        },
        {
          "iso2": "ZA",
          "value": 1999494902
        },
        {
          "iso2": "UA",
          "value": 1664385970
        },
        {
          "iso2": "DO",
          "value": 1237098761
        },
        {
          "iso2": "KZ",
          "value": 1177281403
        },
        {
          "iso2": "NZ",
          "value": 930417924
        },
        {
          "iso2": "LU",
          "value": 851645717
        },
        {
          "iso2": "OM",
          "value": 828150982
        },
        {
          "iso2": "CR",
          "value": 804762715
        },
        {
          "iso2": "CO",
          "value": 787686303
        },
        {
          "iso2": "LK",
          "value": 382566017
        },
        {
          "iso2": "CL",
          "value": 336049118
        },
        {
          "iso2": "JO",
          "value": 331648817
        },
        {
          "iso2": "KW",
          "value": 270676770
        },
        {
          "iso2": "QA",
          "value": 262676962
        },
        {
          "iso2": "MM",
          "value": 233897687
        },
        {
          "iso2": "BH",
          "value": 202893368
        },
        {
          "iso2": "AR",
          "value": 154719010
        },
        {
          "iso2": "EC",
          "value": 144986597
        },
        {
          "iso2": "PE",
          "value": 130817545
        },
        {
          "iso2": "GT",
          "value": 100262301
        },
        {
          "iso2": "KE",
          "value": 93152636
        },
        {
          "iso2": "UY",
          "value": 92461360
        },
        {
          "iso2": "PK",
          "value": 77582474
        },
        {
          "iso2": "CI",
          "value": 42830614
        },
        {
          "iso2": "TZ",
          "value": 33440950
        },
        {
          "iso2": "NG",
          "value": 27240284
        },
        {
          "iso2": "UG",
          "value": 22383156
        },
        {
          "iso2": "BO",
          "value": 17987353
        },
        {
          "iso2": "AO",
          "value": 15822114
        },
        {
          "iso2": "GH",
          "value": 13322717
        },
        {
          "iso2": "CM",
          "value": 3322129
        }
      ],
      "automotive": [
        {
          "iso2": "DE",
          "value": 300058296184
        },
        {
          "iso2": "CN",
          "value": 192497286190
        },
        {
          "iso2": "JP",
          "value": 157301991121
        },
        {
          "iso2": "MX",
          "value": 156467496446
        },
        {
          "iso2": "KR",
          "value": 91830144315
        },
        {
          "iso2": "ES",
          "value": 65333940466
        },
        {
          "iso2": "CA",
          "value": 63408926075
        },
        {
          "iso2": "IT",
          "value": 53836285957
        },
        {
          "iso2": "CZ",
          "value": 52225986916
        },
        {
          "iso2": "GB",
          "value": 50323592758
        },
        {
          "iso2": "PL",
          "value": 41321486353
        },
        {
          "iso2": "SK",
          "value": 41155037767
        },
        {
          "iso2": "TH",
          "value": 36002456707
        },
        {
          "iso2": "TR",
          "value": 30829182199
        },
        {
          "iso2": "NL",
          "value": 29658642655
        },
        {
          "iso2": "SE",
          "value": 27654499693
        },
        {
          "iso2": "HU",
          "value": 27620979915
        },
        {
          "iso2": "AT",
          "value": 21919197576
        },
        {
          "iso2": "AE",
          "value": 16802966926
        },
        {
          "iso2": "RO",
          "value": 15625229701
        },
        {
          "iso2": "ZA",
          "value": 12723940213
        },
        {
          "iso2": "BR",
          "value": 12624374054
        },
        {
          "iso2": "ID",
          "value": 11152691791
        },
        {
          "iso2": "PT",
          "value": 10572979394
        },
        {
          "iso2": "AR",
          "value": 8247645827
        },
        {
          "iso2": "MA",
          "value": 7969005173
        },
        {
          "iso2": "SI",
          "value": 5012537816
        },
        {
          "iso2": "VN",
          "value": 4867985275
        },
        {
          "iso2": "FI",
          "value": 4332750282
        },
        {
          "iso2": "DK",
          "value": 4150481725
        },
        {
          "iso2": "SG",
          "value": 3236193401
        },
        {
          "iso2": "LT",
          "value": 3208771841
        },
        {
          "iso2": "CH",
          "value": 2905799772
        },
        {
          "iso2": "MY",
          "value": 2222655650
        },
        {
          "iso2": "BG",
          "value": 1651986672
        },
        {
          "iso2": "LU",
          "value": 1609103689
        },
        {
          "iso2": "AU",
          "value": 1596041458
        },
        {
          "iso2": "SA",
          "value": 1338015716
        },
        {
          "iso2": "RS",
          "value": 1195546090
        },
        {
          "iso2": "HK",
          "value": 942505711
        },
        {
          "iso2": "PH",
          "value": 942177985
        },
        {
          "iso2": "KW",
          "value": 895127360
        },
        {
          "iso2": "HR",
          "value": 838811604
        },
        {
          "iso2": "OM",
          "value": 656624150
        },
        {
          "iso2": "TN",
          "value": 631715135
        },
        {
          "iso2": "IE",
          "value": 603731303
        },
        {
          "iso2": "KZ",
          "value": 586519131
        },
        {
          "iso2": "KH",
          "value": 569128209
        },
        {
          "iso2": "QA",
          "value": 541913662
        },
        {
          "iso2": "CO",
          "value": 526955145
        },
        {
          "iso2": "CL",
          "value": 424574276
        },
        {
          "iso2": "UY",
          "value": 403530263
        },
        {
          "iso2": "BH",
          "value": 397788321
        },
        {
          "iso2": "NZ",
          "value": 305009247
        },
        {
          "iso2": "GR",
          "value": 296907424
        },
        {
          "iso2": "IL",
          "value": 164215000
        },
        {
          "iso2": "EG",
          "value": 134769963
        },
        {
          "iso2": "JO",
          "value": 132680924
        },
        {
          "iso2": "KE",
          "value": 115508401
        },
        {
          "iso2": "UA",
          "value": 97630111
        },
        {
          "iso2": "UG",
          "value": 83192785
        },
        {
          "iso2": "PK",
          "value": 77850179
        },
        {
          "iso2": "GT",
          "value": 71198857
        },
        {
          "iso2": "PE",
          "value": 68722776
        },
        {
          "iso2": "TZ",
          "value": 62359755
        },
        {
          "iso2": "LK",
          "value": 59851401
        },
        {
          "iso2": "GH",
          "value": 54382996
        },
        {
          "iso2": "CI",
          "value": 39036878
        },
        {
          "iso2": "MM",
          "value": 23031522
        },
        {
          "iso2": "DO",
          "value": 20068997
        },
        {
          "iso2": "AO",
          "value": 13666181
        },
        {
          "iso2": "NG",
          "value": 13548629
        },
        {
          "iso2": "CR",
          "value": 12996189
        },
        {
          "iso2": "CM",
          "value": 8870341
        },
        {
          "iso2": "EC",
          "value": 4133720
        },
        {
          "iso2": "BO",
          "value": 2982062
        }
      ],
      "energy": [
        {
          "iso2": "AE",
          "value": 282076795222
        },
        {
          "iso2": "SA",
          "value": 246467131333
        },
        {
          "iso2": "CA",
          "value": 142971179064
        },
        {
          "iso2": "NL",
          "value": 130174993568
        },
        {
          "iso2": "AU",
          "value": 129171296046
        },
        {
          "iso2": "QA",
          "value": 84595541757
        },
        {
          "iso2": "KW",
          "value": 78139815713
        },
        {
          "iso2": "CN",
          "value": 61092825863
        },
        {
          "iso2": "NG",
          "value": 59664171813
        },
        {
          "iso2": "ID",
          "value": 59493963507
        },
        {
          "iso2": "SG",
          "value": 58862420795
        },
        {
          "iso2": "BR",
          "value": 55165415512
        },
        {
          "iso2": "KR",
          "value": 54042174737
        },
        {
          "iso2": "MY",
          "value": 51637072367
        },
        {
          "iso2": "KZ",
          "value": 46399281048
        },
        {
          "iso2": "GB",
          "value": 42674466288
        },
        {
          "iso2": "OM",
          "value": 41111427140
        },
        {
          "iso2": "DE",
          "value": 36340242116
        },
        {
          "iso2": "AO",
          "value": 35115546788
        },
        {
          "iso2": "MX",
          "value": 32565167027
        },
        {
          "iso2": "ES",
          "value": 27988725642
        },
        {
          "iso2": "CO",
          "value": 25247956829
        },
        {
          "iso2": "IT",
          "value": 23817226682
        },
        {
          "iso2": "GR",
          "value": 17815291004
        },
        {
          "iso2": "TR",
          "value": 16389206844
        },
        {
          "iso2": "SE",
          "value": 14769617619
        },
        {
          "iso2": "JP",
          "value": 12726473279
        },
        {
          "iso2": "ZA",
          "value": 11855076705
        },
        {
          "iso2": "PL",
          "value": 11653423079
        },
        {
          "iso2": "TH",
          "value": 11050816629
        },
        {
          "iso2": "EC",
          "value": 8983584967
        },
        {
          "iso2": "FI",
          "value": 7845810426
        },
        {
          "iso2": "AT",
          "value": 7762990393
        },
        {
          "iso2": "EG",
          "value": 7724761118
        },
        {
          "iso2": "AR",
          "value": 6380764487
        },
        {
          "iso2": "CH",
          "value": 6140348352
        },
        {
          "iso2": "LT",
          "value": 6104069060
        },
        {
          "iso2": "DK",
          "value": 6016811851
        },
        {
          "iso2": "PT",
          "value": 5414107516
        },
        {
          "iso2": "RO",
          "value": 5342327594
        },
        {
          "iso2": "CZ",
          "value": 4861593423
        },
        {
          "iso2": "HU",
          "value": 4788446996
        },
        {
          "iso2": "PE",
          "value": 4395910536
        },
        {
          "iso2": "SK",
          "value": 4098065943
        },
        {
          "iso2": "GH",
          "value": 4049083868
        },
        {
          "iso2": "BG",
          "value": 3786898732
        },
        {
          "iso2": "MM",
          "value": 3573790944
        },
        {
          "iso2": "VN",
          "value": 3367457162
        },
        {
          "iso2": "SI",
          "value": 3310014962
        },
        {
          "iso2": "HR",
          "value": 2960102753
        },
        {
          "iso2": "CI",
          "value": 2893941097
        },
        {
          "iso2": "CM",
          "value": 2686007509
        },
        {
          "iso2": "BO",
          "value": 2133130101
        },
        {
          "iso2": "RS",
          "value": 1880394478
        },
        {
          "iso2": "CL",
          "value": 1713995245
        },
        {
          "iso2": "TN",
          "value": 1244149390
        },
        {
          "iso2": "IE",
          "value": 1031701812
        },
        {
          "iso2": "PH",
          "value": 830689073
        },
        {
          "iso2": "HK",
          "value": 770580874
        },
        {
          "iso2": "NZ",
          "value": 557649031
        },
        {
          "iso2": "MA",
          "value": 515621047
        },
        {
          "iso2": "UA",
          "value": 392253862
        },
        {
          "iso2": "LK",
          "value": 380375707
        },
        {
          "iso2": "KE",
          "value": 367418549
        },
        {
          "iso2": "TZ",
          "value": 285003125
        },
        {
          "iso2": "GT",
          "value": 273418917
        },
        {
          "iso2": "UG",
          "value": 186759141
        },
        {
          "iso2": "PK",
          "value": 169369206
        },
        {
          "iso2": "JO",
          "value": 91151323
        },
        {
          "iso2": "DO",
          "value": 36449368
        },
        {
          "iso2": "BH",
          "value": 34995669
        },
        {
          "iso2": "LU",
          "value": 25917998
        },
        {
          "iso2": "UY",
          "value": 22877002
        },
        {
          "iso2": "CR",
          "value": 9976170
        },
        {
          "iso2": "KH",
          "value": 799
        }
      ],
      "agriculture": [
        {
          "iso2": "BR",
          "value": 14975111759
        },
        {
          "iso2": "AU",
          "value": 12863411422
        },
        {
          "iso2": "CA",
          "value": 11232212939
        },
        {
          "iso2": "AR",
          "value": 8618150421
        },
        {
          "iso2": "UA",
          "value": 8306532857
        },
        {
          "iso2": "TH",
          "value": 5259866091
        },
        {
          "iso2": "VN",
          "value": 4510904312
        },
        {
          "iso2": "RO",
          "value": 4460829176
        },
        {
          "iso2": "PL",
          "value": 3860234806
        },
        {
          "iso2": "DE",
          "value": 3491353380
        },
        {
          "iso2": "PK",
          "value": 3207042692
        },
        {
          "iso2": "BG",
          "value": 2300940796
        },
        {
          "iso2": "KZ",
          "value": 2184224709
        },
        {
          "iso2": "HU",
          "value": 1845307896
        },
        {
          "iso2": "TR",
          "value": 1733189035
        },
        {
          "iso2": "ZA",
          "value": 1507893795
        },
        {
          "iso2": "LT",
          "value": 1217195497
        },
        {
          "iso2": "MM",
          "value": 1197465041
        },
        {
          "iso2": "IT",
          "value": 1171789215
        },
        {
          "iso2": "CN",
          "value": 1027506075
        },
        {
          "iso2": "CZ",
          "value": 1007776946
        },
        {
          "iso2": "UY",
          "value": 910947990
        },
        {
          "iso2": "KH",
          "value": 815843440
        },
        {
          "iso2": "GB",
          "value": 808977878
        },
        {
          "iso2": "SK",
          "value": 686466334
        },
        {
          "iso2": "AT",
          "value": 675944967
        },
        {
          "iso2": "NL",
          "value": 672887817
        },
        {
          "iso2": "DK",
          "value": 501738982
        },
        {
          "iso2": "RS",
          "value": 474257934
        },
        {
          "iso2": "MX",
          "value": 455528810
        },
        {
          "iso2": "ES",
          "value": 453745091
        },
        {
          "iso2": "HR",
          "value": 407716671
        },
        {
          "iso2": "GR",
          "value": 302442150
        },
        {
          "iso2": "SE",
          "value": 287598349
        },
        {
          "iso2": "PT",
          "value": 216457559
        },
        {
          "iso2": "UG",
          "value": 188955725
        },
        {
          "iso2": "TZ",
          "value": 173523150
        },
        {
          "iso2": "AE",
          "value": 140212809
        },
        {
          "iso2": "FI",
          "value": 136243999
        },
        {
          "iso2": "PE",
          "value": 134503923
        },
        {
          "iso2": "CL",
          "value": 90365483
        },
        {
          "iso2": "SI",
          "value": 82693705
        },
        {
          "iso2": "SG",
          "value": 82415608
        },
        {
          "iso2": "JP",
          "value": 69621415
        },
        {
          "iso2": "IE",
          "value": 68068690
        },
        {
          "iso2": "BO",
          "value": 61683073
        },
        {
          "iso2": "MY",
          "value": 51519368
        },
        {
          "iso2": "KR",
          "value": 37549665
        },
        {
          "iso2": "OM",
          "value": 34024432
        },
        {
          "iso2": "ID",
          "value": 31089339
        },
        {
          "iso2": "KE",
          "value": 27384079
        },
        {
          "iso2": "LU",
          "value": 23993763
        },
        {
          "iso2": "CI",
          "value": 21190081
        },
        {
          "iso2": "CM",
          "value": 20663097
        },
        {
          "iso2": "LK",
          "value": 14064869
        },
        {
          "iso2": "HK",
          "value": 12828598
        },
        {
          "iso2": "EG",
          "value": 12481107
        },
        {
          "iso2": "GT",
          "value": 12423820
        },
        {
          "iso2": "CR",
          "value": 9189130
        },
        {
          "iso2": "EC",
          "value": 6566330
        },
        {
          "iso2": "SA",
          "value": 6505013
        },
        {
          "iso2": "CH",
          "value": 6235697
        },
        {
          "iso2": "PH",
          "value": 5951160
        },
        {
          "iso2": "NZ",
          "value": 5887300
        },
        {
          "iso2": "DO",
          "value": 4385069
        },
        {
          "iso2": "CO",
          "value": 3491156
        },
        {
          "iso2": "GH",
          "value": 3415242
        },
        {
          "iso2": "NG",
          "value": 2617440
        },
        {
          "iso2": "JO",
          "value": 1598034
        },
        {
          "iso2": "IL",
          "value": 859000
        },
        {
          "iso2": "BH",
          "value": 601602
        },
        {
          "iso2": "AO",
          "value": 313758
        },
        {
          "iso2": "MA",
          "value": 256261
        },
        {
          "iso2": "KW",
          "value": 186551
        },
        {
          "iso2": "QA",
          "value": 173403
        },
        {
          "iso2": "TN",
          "value": 3038
        }
      ],
      "textiles": [
        {
          "iso2": "CN",
          "value": 82310721188
        },
        {
          "iso2": "VN",
          "value": 14763153536
        },
        {
          "iso2": "DE",
          "value": 14395976732
        },
        {
          "iso2": "IT",
          "value": 11742915715
        },
        {
          "iso2": "TR",
          "value": 10277565649
        },
        {
          "iso2": "NL",
          "value": 6679072816
        },
        {
          "iso2": "ES",
          "value": 6313229815
        },
        {
          "iso2": "PL",
          "value": 5524443249
        },
        {
          "iso2": "KH",
          "value": 5478609397
        },
        {
          "iso2": "PK",
          "value": 4178480292
        },
        {
          "iso2": "ID",
          "value": 3780364643
        },
        {
          "iso2": "HK",
          "value": 3154092739
        },
        {
          "iso2": "MX",
          "value": 2906749035
        },
        {
          "iso2": "LK",
          "value": 2728346363
        },
        {
          "iso2": "DK",
          "value": 2559248450
        },
        {
          "iso2": "PT",
          "value": 2494900992
        },
        {
          "iso2": "AE",
          "value": 2401247396
        },
        {
          "iso2": "GB",
          "value": 1979461007
        },
        {
          "iso2": "JO",
          "value": 1877410524
        },
        {
          "iso2": "CZ",
          "value": 1635337246
        },
        {
          "iso2": "MM",
          "value": 1476774998
        },
        {
          "iso2": "GT",
          "value": 1383896058
        },
        {
          "iso2": "TH",
          "value": 1344889362
        },
        {
          "iso2": "AT",
          "value": 1310150909
        },
        {
          "iso2": "CH",
          "value": 1301003274
        },
        {
          "iso2": "SE",
          "value": 1242668425
        },
        {
          "iso2": "PE",
          "value": 1082969470
        },
        {
          "iso2": "MY",
          "value": 997752745
        },
        {
          "iso2": "HU",
          "value": 909131828
        },
        {
          "iso2": "KR",
          "value": 901822576
        },
        {
          "iso2": "MA",
          "value": 882103368
        },
        {
          "iso2": "SK",
          "value": 858068733
        },
        {
          "iso2": "EG",
          "value": 815679873
        },
        {
          "iso2": "HR",
          "value": 788935555
        },
        {
          "iso2": "TN",
          "value": 785054048
        },
        {
          "iso2": "RO",
          "value": 725847554
        },
        {
          "iso2": "BG",
          "value": 711610112
        },
        {
          "iso2": "DO",
          "value": 658038400
        },
        {
          "iso2": "SG",
          "value": 613885392
        },
        {
          "iso2": "RS",
          "value": 582617608
        },
        {
          "iso2": "CA",
          "value": 564494665
        },
        {
          "iso2": "GR",
          "value": 456794527
        },
        {
          "iso2": "PH",
          "value": 369766018
        },
        {
          "iso2": "LT",
          "value": 346709829
        },
        {
          "iso2": "JP",
          "value": 313731039
        },
        {
          "iso2": "SI",
          "value": 258078519
        },
        {
          "iso2": "IE",
          "value": 210327076
        },
        {
          "iso2": "CO",
          "value": 202313086
        },
        {
          "iso2": "ZA",
          "value": 195372606
        },
        {
          "iso2": "AU",
          "value": 187061525
        },
        {
          "iso2": "KE",
          "value": 137618581
        },
        {
          "iso2": "BR",
          "value": 125270470
        },
        {
          "iso2": "FI",
          "value": 107804415
        },
        {
          "iso2": "CL",
          "value": 89003491
        },
        {
          "iso2": "NZ",
          "value": 58682099
        },
        {
          "iso2": "UA",
          "value": 53420515
        },
        {
          "iso2": "SA",
          "value": 49348373
        },
        {
          "iso2": "IL",
          "value": 44036000
        },
        {
          "iso2": "KW",
          "value": 37888247
        },
        {
          "iso2": "GH",
          "value": 36136844
        },
        {
          "iso2": "LU",
          "value": 33948779
        },
        {
          "iso2": "CR",
          "value": 31565649
        },
        {
          "iso2": "KZ",
          "value": 27148457
        },
        {
          "iso2": "TZ",
          "value": 25414265
        },
        {
          "iso2": "BH",
          "value": 20260459
        },
        {
          "iso2": "QA",
          "value": 18647881
        },
        {
          "iso2": "EC",
          "value": 16272900
        },
        {
          "iso2": "AR",
          "value": 15630454
        },
        {
          "iso2": "OM",
          "value": 14023589
        },
        {
          "iso2": "UY",
          "value": 3534811
        },
        {
          "iso2": "UG",
          "value": 2776916
        },
        {
          "iso2": "BO",
          "value": 1924333
        },
        {
          "iso2": "CI",
          "value": 1399796
        },
        {
          "iso2": "CM",
          "value": 95165
        },
        {
          "iso2": "AO",
          "value": 64603
        }
      ],
      "metals": [
        {
          "iso2": "CN",
          "value": 68990038763
        },
        {
          "iso2": "DE",
          "value": 33076795796
        },
        {
          "iso2": "JP",
          "value": 30465519223
        },
        {
          "iso2": "ID",
          "value": 26704577025
        },
        {
          "iso2": "KR",
          "value": 25725964625
        },
        {
          "iso2": "IT",
          "value": 17121187716
        },
        {
          "iso2": "BR",
          "value": 14619802697
        },
        {
          "iso2": "NL",
          "value": 12154511846
        },
        {
          "iso2": "CA",
          "value": 9670414084
        },
        {
          "iso2": "AT",
          "value": 9334218099
        },
        {
          "iso2": "TR",
          "value": 8860174429
        },
        {
          "iso2": "ES",
          "value": 8821367040
        },
        {
          "iso2": "VN",
          "value": 8511999071
        },
        {
          "iso2": "SE",
          "value": 7977782050
        },
        {
          "iso2": "GB",
          "value": 7837131530
        },
        {
          "iso2": "PL",
          "value": 6551369717
        },
        {
          "iso2": "ZA",
          "value": 6486118903
        },
        {
          "iso2": "MY",
          "value": 5909449377
        },
        {
          "iso2": "FI",
          "value": 5768023878
        },
        {
          "iso2": "CZ",
          "value": 4894135988
        },
        {
          "iso2": "SK",
          "value": 4699932026
        },
        {
          "iso2": "KZ",
          "value": 4346880993
        },
        {
          "iso2": "MX",
          "value": 4301677575
        },
        {
          "iso2": "AE",
          "value": 3500223959
        },
        {
          "iso2": "UA",
          "value": 2647708198
        },
        {
          "iso2": "RO",
          "value": 2434926036
        },
        {
          "iso2": "EG",
          "value": 2339423364
        },
        {
          "iso2": "DK",
          "value": 2108966564
        },
        {
          "iso2": "SG",
          "value": 1947630395
        },
        {
          "iso2": "PT",
          "value": 1942782590
        },
        {
          "iso2": "OM",
          "value": 1829077391
        },
        {
          "iso2": "TH",
          "value": 1508746517
        },
        {
          "iso2": "AU",
          "value": 1505967054
        },
        {
          "iso2": "LU",
          "value": 1498948571
        },
        {
          "iso2": "SI",
          "value": 1446539432
        },
        {
          "iso2": "HU",
          "value": 1376578460
        },
        {
          "iso2": "CH",
          "value": 1329846658
        },
        {
          "iso2": "SA",
          "value": 1300231691
        },
        {
          "iso2": "BG",
          "value": 967577559
        },
        {
          "iso2": "RS",
          "value": 816578773
        },
        {
          "iso2": "HK",
          "value": 798420416
        },
        {
          "iso2": "CL",
          "value": 772620903
        },
        {
          "iso2": "CO",
          "value": 712043554
        },
        {
          "iso2": "BH",
          "value": 644907116
        },
        {
          "iso2": "GR",
          "value": 609771759
        },
        {
          "iso2": "LT",
          "value": 586486438
        },
        {
          "iso2": "QA",
          "value": 503345429
        },
        {
          "iso2": "DO",
          "value": 491193884
        },
        {
          "iso2": "HR",
          "value": 465154765
        },
        {
          "iso2": "NZ",
          "value": 406295993
        },
        {
          "iso2": "IE",
          "value": 354867722
        },
        {
          "iso2": "AR",
          "value": 329134469
        },
        {
          "iso2": "TN",
          "value": 297351109
        },
        {
          "iso2": "GT",
          "value": 294192426
        },
        {
          "iso2": "GH",
          "value": 289142233
        },
        {
          "iso2": "CR",
          "value": 253617248
        },
        {
          "iso2": "PE",
          "value": 239599084
        },
        {
          "iso2": "KE",
          "value": 184119891
        },
        {
          "iso2": "IL",
          "value": 183373000
        },
        {
          "iso2": "PH",
          "value": 178001537
        },
        {
          "iso2": "UG",
          "value": 153923412
        },
        {
          "iso2": "JO",
          "value": 129872341
        },
        {
          "iso2": "MM",
          "value": 87482434
        },
        {
          "iso2": "PK",
          "value": 87432204
        },
        {
          "iso2": "MA",
          "value": 78616757
        },
        {
          "iso2": "KW",
          "value": 76704967
        },
        {
          "iso2": "AO",
          "value": 52468683
        },
        {
          "iso2": "TZ",
          "value": 49255975
        },
        {
          "iso2": "CM",
          "value": 27943342
        },
        {
          "iso2": "BO",
          "value": 23508011
        },
        {
          "iso2": "EC",
          "value": 17617514
        },
        {
          "iso2": "NG",
          "value": 17236916
        },
        {
          "iso2": "CI",
          "value": 10490627
        },
        {
          "iso2": "LK",
          "value": 6091347
        },
        {
          "iso2": "UY",
          "value": 3730234
        },
        {
          "iso2": "KH",
          "value": 1084427
        }
      ],
      "chemicals": [
        {
          "iso2": "CN",
          "value": 77911252431
        },
        {
          "iso2": "IE",
          "value": 44593714334
        },
        {
          "iso2": "CH",
          "value": 40302158392
        },
        {
          "iso2": "DE",
          "value": 28039812226
        },
        {
          "iso2": "KR",
          "value": 20808670097
        },
        {
          "iso2": "NL",
          "value": 19988675764
        },
        {
          "iso2": "JP",
          "value": 14774153390
        },
        {
          "iso2": "SG",
          "value": 14568908626
        },
        {
          "iso2": "GB",
          "value": 14124038487
        },
        {
          "iso2": "SA",
          "value": 11902034677
        },
        {
          "iso2": "ES",
          "value": 8457435142
        },
        {
          "iso2": "IT",
          "value": 8384530448
        },
        {
          "iso2": "AT",
          "value": 7402814629
        },
        {
          "iso2": "MY",
          "value": 4893436469
        },
        {
          "iso2": "CA",
          "value": 4345586527
        },
        {
          "iso2": "TH",
          "value": 4007821995
        },
        {
          "iso2": "ID",
          "value": 2981828616
        },
        {
          "iso2": "DK",
          "value": 2701395347
        },
        {
          "iso2": "SE",
          "value": 2112693521
        },
        {
          "iso2": "BR",
          "value": 2079927523
        },
        {
          "iso2": "MX",
          "value": 1861923681
        },
        {
          "iso2": "HU",
          "value": 1783630060
        },
        {
          "iso2": "AE",
          "value": 1737940862
        },
        {
          "iso2": "KW",
          "value": 1651790690
        },
        {
          "iso2": "PL",
          "value": 1579684686
        },
        {
          "iso2": "HK",
          "value": 1359574493
        },
        {
          "iso2": "IL",
          "value": 1206576000
        },
        {
          "iso2": "CZ",
          "value": 1168619562
        },
        {
          "iso2": "TR",
          "value": 1138650542
        },
        {
          "iso2": "ZA",
          "value": 1127258393
        },
        {
          "iso2": "OM",
          "value": 1020038636
        },
        {
          "iso2": "FI",
          "value": 903445682
        },
        {
          "iso2": "QA",
          "value": 853855507
        },
        {
          "iso2": "SI",
          "value": 796327596
        },
        {
          "iso2": "PT",
          "value": 779973064
        },
        {
          "iso2": "VN",
          "value": 746038475
        },
        {
          "iso2": "AU",
          "value": 547254093
        },
        {
          "iso2": "AR",
          "value": 436849167
        },
        {
          "iso2": "CL",
          "value": 409938579
        },
        {
          "iso2": "PH",
          "value": 328277321
        },
        {
          "iso2": "SK",
          "value": 276410273
        },
        {
          "iso2": "LT",
          "value": 275102644
        },
        {
          "iso2": "RO",
          "value": 241591379
        },
        {
          "iso2": "EG",
          "value": 229587423
        },
        {
          "iso2": "CO",
          "value": 191671812
        },
        {
          "iso2": "BH",
          "value": 158693561
        },
        {
          "iso2": "RS",
          "value": 147337197
        },
        {
          "iso2": "HR",
          "value": 139967459
        },
        {
          "iso2": "UA",
          "value": 120092133
        },
        {
          "iso2": "BG",
          "value": 106460003
        },
        {
          "iso2": "LU",
          "value": 93121512
        },
        {
          "iso2": "KZ",
          "value": 78208157
        },
        {
          "iso2": "GR",
          "value": 72708401
        },
        {
          "iso2": "NZ",
          "value": 64005653
        },
        {
          "iso2": "GT",
          "value": 58967443
        },
        {
          "iso2": "KH",
          "value": 42856526
        },
        {
          "iso2": "PE",
          "value": 28956549
        },
        {
          "iso2": "DO",
          "value": 27815437
        },
        {
          "iso2": "JO",
          "value": 27107842
        },
        {
          "iso2": "MA",
          "value": 20617192
        },
        {
          "iso2": "UY",
          "value": 16195416
        },
        {
          "iso2": "NG",
          "value": 11983394
        },
        {
          "iso2": "PK",
          "value": 11845552
        },
        {
          "iso2": "CR",
          "value": 8345106
        },
        {
          "iso2": "KE",
          "value": 7381633
        },
        {
          "iso2": "TN",
          "value": 6659147
        },
        {
          "iso2": "BO",
          "value": 6163576
        },
        {
          "iso2": "GH",
          "value": 3647085
        },
        {
          "iso2": "EC",
          "value": 3497658
        },
        {
          "iso2": "CI",
          "value": 3204929
        },
        {
          "iso2": "LK",
          "value": 2556028
        },
        {
          "iso2": "UG",
          "value": 1323565
        },
        {
          "iso2": "TZ",
          "value": 646966
        },
        {
          "iso2": "AO",
          "value": 639047
        },
        {
          "iso2": "MM",
          "value": 530141
        },
        {
          "iso2": "CM",
          "value": 294974
        }
      ]
    },
    "2024": {
      "medicine": [
        {
          "iso2": "DE",
          "value": 120886456255
        },
        {
          "iso2": "CH",
          "value": 110366559188
        },
        {
          "iso2": "IE",
          "value": 89811624511
        },
        {
          "iso2": "IT",
          "value": 53854920553
        },
        {
          "iso2": "NL",
          "value": 28399946469
        },
        {
          "iso2": "GB",
          "value": 27506706555
        },
        {
          "iso2": "SI",
          "value": 27195645180
        },
        {
          "iso2": "DK",
          "value": 21731351669
        },
        {
          "iso2": "AT",
          "value": 21034604274
        },
        {
          "iso2": "ES",
          "value": 18183233087
        },
        {
          "iso2": "SE",
          "value": 13466714894
        },
        {
          "iso2": "CN",
          "value": 12201630085
        },
        {
          "iso2": "CA",
          "value": 10889501333
        },
        {
          "iso2": "HU",
          "value": 10751571895
        },
        {
          "iso2": "SG",
          "value": 8411425921
        },
        {
          "iso2": "KR",
          "value": 7950099548
        },
        {
          "iso2": "JP",
          "value": 7728570556
        },
        {
          "iso2": "PL",
          "value": 6972076052
        },
        {
          "iso2": "CZ",
          "value": 4414355900
        },
        {
          "iso2": "PT",
          "value": 3584693254
        },
        {
          "iso2": "AU",
          "value": 3183671813
        },
        {
          "iso2": "GR",
          "value": 3042855379
        },
        {
          "iso2": "MX",
          "value": 2740010888
        },
        {
          "iso2": "FI",
          "value": 2369161355
        },
        {
          "iso2": "TR",
          "value": 2265803300
        },
        {
          "iso2": "RO",
          "value": 2056230540
        },
        {
          "iso2": "HK",
          "value": 1959622854
        },
        {
          "iso2": "IL",
          "value": 1818049000
        },
        {
          "iso2": "LT",
          "value": 1350614864
        },
        {
          "iso2": "HR",
          "value": 1339273319
        },
        {
          "iso2": "BG",
          "value": 1310025475
        },
        {
          "iso2": "BR",
          "value": 1214395983
        },
        {
          "iso2": "JO",
          "value": 896910885
        },
        {
          "iso2": "SK",
          "value": 895699485
        },
        {
          "iso2": "AR",
          "value": 865433285
        },
        {
          "iso2": "ID",
          "value": 748603819
        },
        {
          "iso2": "TH",
          "value": 638421774
        },
        {
          "iso2": "SA",
          "value": 579698391
        },
        {
          "iso2": "ZA",
          "value": 537863212
        },
        {
          "iso2": "DO",
          "value": 535222287
        },
        {
          "iso2": "MY",
          "value": 471431408
        },
        {
          "iso2": "RS",
          "value": 462011876
        },
        {
          "iso2": "CR",
          "value": 452495351
        },
        {
          "iso2": "EG",
          "value": 447149855
        },
        {
          "iso2": "GT",
          "value": 423706633
        },
        {
          "iso2": "PK",
          "value": 421434857
        },
        {
          "iso2": "NZ",
          "value": 403878351
        },
        {
          "iso2": "CO",
          "value": 395968248
        },
        {
          "iso2": "UA",
          "value": 321705566
        },
        {
          "iso2": "LU",
          "value": 253863033
        },
        {
          "iso2": "UY",
          "value": 197955883
        },
        {
          "iso2": "MA",
          "value": 195235495
        },
        {
          "iso2": "CL",
          "value": 179558942
        },
        {
          "iso2": "KE",
          "value": 174509896
        },
        {
          "iso2": "TN",
          "value": 127560868
        },
        {
          "iso2": "PE",
          "value": 98383645
        },
        {
          "iso2": "KZ",
          "value": 67680025
        },
        {
          "iso2": "KW",
          "value": 50192591
        },
        {
          "iso2": "PH",
          "value": 36825642
        },
        {
          "iso2": "UG",
          "value": 33636317
        },
        {
          "iso2": "EC",
          "value": 29406932
        },
        {
          "iso2": "KH",
          "value": 15759019
        },
        {
          "iso2": "LK",
          "value": 13834357
        },
        {
          "iso2": "CI",
          "value": 10277990
        },
        {
          "iso2": "QA",
          "value": 5516926
        },
        {
          "iso2": "BH",
          "value": 5077040
        },
        {
          "iso2": "TZ",
          "value": 3906297
        },
        {
          "iso2": "BO",
          "value": 2054066
        },
        {
          "iso2": "NG",
          "value": 715354
        },
        {
          "iso2": "MM",
          "value": 677634
        },
        {
          "iso2": "AO",
          "value": 248967
        }
      ],
      "electronics": [
        {
          "iso2": "CN",
          "value": 927094995925
        },
        {
          "iso2": "HK",
          "value": 368296072420
        },
        {
          "iso2": "KR",
          "value": 212908543878
        },
        {
          "iso2": "DE",
          "value": 175829490903
        },
        {
          "iso2": "SG",
          "value": 175708786833
        },
        {
          "iso2": "MY",
          "value": 121185101721
        },
        {
          "iso2": "MX",
          "value": 107742079358
        },
        {
          "iso2": "JP",
          "value": 101050737864
        },
        {
          "iso2": "NL",
          "value": 61318354438
        },
        {
          "iso2": "CZ",
          "value": 53543728485
        },
        {
          "iso2": "TH",
          "value": 51327042068
        },
        {
          "iso2": "IT",
          "value": 44225992458
        },
        {
          "iso2": "PL",
          "value": 43978139725
        },
        {
          "iso2": "HU",
          "value": 37305315372
        },
        {
          "iso2": "PH",
          "value": 36708307662
        },
        {
          "iso2": "GB",
          "value": 29989386452
        },
        {
          "iso2": "ES",
          "value": 21629861168
        },
        {
          "iso2": "AT",
          "value": 18883209805
        },
        {
          "iso2": "SK",
          "value": 18659186197
        },
        {
          "iso2": "SE",
          "value": 17958602140
        },
        {
          "iso2": "RO",
          "value": 17919289029
        },
        {
          "iso2": "CA",
          "value": 16860672909
        },
        {
          "iso2": "TR",
          "value": 16447574250
        },
        {
          "iso2": "MA",
          "value": 16079186439
        },
        {
          "iso2": "ID",
          "value": 15165901563
        },
        {
          "iso2": "CH",
          "value": 15089764401
        },
        {
          "iso2": "IE",
          "value": 14614084627
        },
        {
          "iso2": "IL",
          "value": 12875750000
        },
        {
          "iso2": "DK",
          "value": 10031752220
        },
        {
          "iso2": "SA",
          "value": 7942669663
        },
        {
          "iso2": "FI",
          "value": 7366998063
        },
        {
          "iso2": "PT",
          "value": 7221285496
        },
        {
          "iso2": "SI",
          "value": 5727588597
        },
        {
          "iso2": "RS",
          "value": 5300953252
        },
        {
          "iso2": "TN",
          "value": 5221761125
        },
        {
          "iso2": "BG",
          "value": 5164889259
        },
        {
          "iso2": "BR",
          "value": 4805113593
        },
        {
          "iso2": "AU",
          "value": 4161355525
        },
        {
          "iso2": "LT",
          "value": 3271254903
        },
        {
          "iso2": "EG",
          "value": 3003756456
        },
        {
          "iso2": "HR",
          "value": 2571065376
        },
        {
          "iso2": "GR",
          "value": 2442863396
        },
        {
          "iso2": "ZA",
          "value": 2300380223
        },
        {
          "iso2": "UA",
          "value": 2278089154
        },
        {
          "iso2": "KH",
          "value": 1880291195
        },
        {
          "iso2": "KZ",
          "value": 1281451650
        },
        {
          "iso2": "DO",
          "value": 1202216615
        },
        {
          "iso2": "CO",
          "value": 1005365568
        },
        {
          "iso2": "NZ",
          "value": 959826701
        },
        {
          "iso2": "CR",
          "value": 839124047
        },
        {
          "iso2": "LU",
          "value": 666582285
        },
        {
          "iso2": "CL",
          "value": 441201578
        },
        {
          "iso2": "JO",
          "value": 331236564
        },
        {
          "iso2": "QA",
          "value": 328591224
        },
        {
          "iso2": "KW",
          "value": 313131457
        },
        {
          "iso2": "MM",
          "value": 310618713
        },
        {
          "iso2": "LK",
          "value": 303290203
        },
        {
          "iso2": "BH",
          "value": 226856450
        },
        {
          "iso2": "AR",
          "value": 191684404
        },
        {
          "iso2": "EC",
          "value": 160169180
        },
        {
          "iso2": "PE",
          "value": 142709175
        },
        {
          "iso2": "GT",
          "value": 116654456
        },
        {
          "iso2": "KE",
          "value": 104880903
        },
        {
          "iso2": "UY",
          "value": 95461894
        },
        {
          "iso2": "PK",
          "value": 92752675
        },
        {
          "iso2": "CI",
          "value": 88528091
        },
        {
          "iso2": "TZ",
          "value": 34380095
        },
        {
          "iso2": "AO",
          "value": 30344422
        },
        {
          "iso2": "NG",
          "value": 18100577
        },
        {
          "iso2": "BO",
          "value": 17186146
        },
        {
          "iso2": "UG",
          "value": 17171975
        }
      ],
      "automotive": [
        {
          "iso2": "DE",
          "value": 276497618457
        },
        {
          "iso2": "CN",
          "value": 215979240143
        },
        {
          "iso2": "MX",
          "value": 160602816339
        },
        {
          "iso2": "JP",
          "value": 150889774290
        },
        {
          "iso2": "KR",
          "value": 91869338623
        },
        {
          "iso2": "ES",
          "value": 59962548564
        },
        {
          "iso2": "CA",
          "value": 55950556650
        },
        {
          "iso2": "CZ",
          "value": 54050740479
        },
        {
          "iso2": "GB",
          "value": 48215660096
        },
        {
          "iso2": "IT",
          "value": 46094844722
        },
        {
          "iso2": "PL",
          "value": 41164358321
        },
        {
          "iso2": "SK",
          "value": 39784782093
        },
        {
          "iso2": "TH",
          "value": 33807333684
        },
        {
          "iso2": "TR",
          "value": 32437400281
        },
        {
          "iso2": "SE",
          "value": 26452887660
        },
        {
          "iso2": "HU",
          "value": 25539156208
        },
        {
          "iso2": "NL",
          "value": 24364389306
        },
        {
          "iso2": "AT",
          "value": 19999265983
        },
        {
          "iso2": "RO",
          "value": 17319727214
        },
        {
          "iso2": "MA",
          "value": 16394883767
        },
        {
          "iso2": "ZA",
          "value": 12560694615
        },
        {
          "iso2": "BR",
          "value": 11894041052
        },
        {
          "iso2": "ID",
          "value": 11011232727
        },
        {
          "iso2": "PT",
          "value": 10043969739
        },
        {
          "iso2": "AR",
          "value": 7832097374
        },
        {
          "iso2": "SI",
          "value": 5317905945
        },
        {
          "iso2": "DK",
          "value": 4703868145
        },
        {
          "iso2": "FI",
          "value": 3682076729
        },
        {
          "iso2": "SG",
          "value": 3049587760
        },
        {
          "iso2": "CH",
          "value": 2954396572
        },
        {
          "iso2": "LT",
          "value": 2422967308
        },
        {
          "iso2": "MY",
          "value": 2265086969
        },
        {
          "iso2": "SA",
          "value": 1693278046
        },
        {
          "iso2": "KW",
          "value": 1597909859
        },
        {
          "iso2": "BG",
          "value": 1595794151
        },
        {
          "iso2": "LU",
          "value": 1584733486
        },
        {
          "iso2": "AU",
          "value": 1551722502
        },
        {
          "iso2": "RS",
          "value": 1399323205
        },
        {
          "iso2": "HK",
          "value": 1212898968
        },
        {
          "iso2": "HR",
          "value": 1096745838
        },
        {
          "iso2": "PH",
          "value": 941878079
        },
        {
          "iso2": "QA",
          "value": 720596451
        },
        {
          "iso2": "TN",
          "value": 687908417
        },
        {
          "iso2": "IE",
          "value": 650685619
        },
        {
          "iso2": "KH",
          "value": 519137130
        },
        {
          "iso2": "UY",
          "value": 505390822
        },
        {
          "iso2": "CO",
          "value": 485428686
        },
        {
          "iso2": "BH",
          "value": 477761486
        },
        {
          "iso2": "CL",
          "value": 468979204
        },
        {
          "iso2": "KZ",
          "value": 365287523
        },
        {
          "iso2": "GR",
          "value": 319196376
        },
        {
          "iso2": "NZ",
          "value": 307872932
        },
        {
          "iso2": "EG",
          "value": 242715373
        },
        {
          "iso2": "JO",
          "value": 152973435
        },
        {
          "iso2": "IL",
          "value": 133760000
        },
        {
          "iso2": "UG",
          "value": 113500539
        },
        {
          "iso2": "PK",
          "value": 90418218
        },
        {
          "iso2": "KE",
          "value": 90009151
        },
        {
          "iso2": "TZ",
          "value": 89072544
        },
        {
          "iso2": "UA",
          "value": 87875285
        },
        {
          "iso2": "PE",
          "value": 85364767
        },
        {
          "iso2": "GT",
          "value": 70935702
        },
        {
          "iso2": "LK",
          "value": 52543187
        },
        {
          "iso2": "CI",
          "value": 48925805
        },
        {
          "iso2": "MM",
          "value": 18997367
        },
        {
          "iso2": "CR",
          "value": 18240241
        },
        {
          "iso2": "DO",
          "value": 18008325
        },
        {
          "iso2": "EC",
          "value": 6855050
        },
        {
          "iso2": "AO",
          "value": 5773254
        },
        {
          "iso2": "BO",
          "value": 3616527
        },
        {
          "iso2": "NG",
          "value": 822913
        }
      ],
      "energy": [
        {
          "iso2": "SA",
          "value": 223387106063
        },
        {
          "iso2": "CA",
          "value": 140678826175
        },
        {
          "iso2": "AU",
          "value": 113130494069
        },
        {
          "iso2": "NL",
          "value": 104942339278
        },
        {
          "iso2": "QA",
          "value": 79608644025
        },
        {
          "iso2": "KW",
          "value": 68948610140
        },
        {
          "iso2": "BR",
          "value": 57155330959
        },
        {
          "iso2": "SG",
          "value": 56213225254
        },
        {
          "iso2": "ID",
          "value": 55528750648
        },
        {
          "iso2": "CN",
          "value": 53572785795
        },
        {
          "iso2": "KR",
          "value": 52616721372
        },
        {
          "iso2": "MY",
          "value": 47467823572
        },
        {
          "iso2": "NG",
          "value": 46400486098
        },
        {
          "iso2": "KZ",
          "value": 46290762497
        },
        {
          "iso2": "GB",
          "value": 34743826416
        },
        {
          "iso2": "DE",
          "value": 34270962185
        },
        {
          "iso2": "AO",
          "value": 34198326780
        },
        {
          "iso2": "MX",
          "value": 28054900079
        },
        {
          "iso2": "ES",
          "value": 22792695930
        },
        {
          "iso2": "CO",
          "value": 22451576483
        },
        {
          "iso2": "IT",
          "value": 18898656511
        },
        {
          "iso2": "TR",
          "value": 16551434986
        },
        {
          "iso2": "GR",
          "value": 16139474666
        },
        {
          "iso2": "SE",
          "value": 13941540228
        },
        {
          "iso2": "ZA",
          "value": 10563549125
        },
        {
          "iso2": "TH",
          "value": 10283671252
        },
        {
          "iso2": "JP",
          "value": 9955903167
        },
        {
          "iso2": "PL",
          "value": 9823123112
        },
        {
          "iso2": "EC",
          "value": 8672813032
        },
        {
          "iso2": "AR",
          "value": 7550381659
        },
        {
          "iso2": "DK",
          "value": 5905809341
        },
        {
          "iso2": "PT",
          "value": 5787585289
        },
        {
          "iso2": "AT",
          "value": 5757631588
        },
        {
          "iso2": "FI",
          "value": 5692445876
        },
        {
          "iso2": "LT",
          "value": 5613276355
        },
        {
          "iso2": "EG",
          "value": 5585248488
        },
        {
          "iso2": "CH",
          "value": 5396906679
        },
        {
          "iso2": "HU",
          "value": 5220357313
        },
        {
          "iso2": "RO",
          "value": 4894867279
        },
        {
          "iso2": "SK",
          "value": 4587504931
        },
        {
          "iso2": "IL",
          "value": 4385946000
        },
        {
          "iso2": "CZ",
          "value": 4279426847
        },
        {
          "iso2": "PE",
          "value": 4235199865
        },
        {
          "iso2": "BG",
          "value": 3627500387
        },
        {
          "iso2": "HR",
          "value": 3413338336
        },
        {
          "iso2": "MM",
          "value": 3276823030
        },
        {
          "iso2": "CI",
          "value": 3107433041
        },
        {
          "iso2": "SI",
          "value": 3104219626
        },
        {
          "iso2": "BO",
          "value": 1690478574
        },
        {
          "iso2": "CL",
          "value": 1308157189
        },
        {
          "iso2": "RS",
          "value": 1256796104
        },
        {
          "iso2": "TN",
          "value": 1245044438
        },
        {
          "iso2": "KE",
          "value": 1064675881
        },
        {
          "iso2": "PH",
          "value": 918256401
        },
        {
          "iso2": "IE",
          "value": 855060826
        },
        {
          "iso2": "HK",
          "value": 715105254
        },
        {
          "iso2": "MA",
          "value": 611545606
        },
        {
          "iso2": "PK",
          "value": 558811983
        },
        {
          "iso2": "NZ",
          "value": 469389400
        },
        {
          "iso2": "GT",
          "value": 424633380
        },
        {
          "iso2": "LK",
          "value": 409243974
        },
        {
          "iso2": "TZ",
          "value": 274462756
        },
        {
          "iso2": "UA",
          "value": 201479939
        },
        {
          "iso2": "UG",
          "value": 186960908
        },
        {
          "iso2": "UY",
          "value": 133877697
        },
        {
          "iso2": "DO",
          "value": 56392437
        },
        {
          "iso2": "JO",
          "value": 37164509
        },
        {
          "iso2": "LU",
          "value": 19219739
        },
        {
          "iso2": "BH",
          "value": 6954234
        },
        {
          "iso2": "CR",
          "value": 3719441
        },
        {
          "iso2": "KH",
          "value": 331408
        }
      ],
      "agriculture": [
        {
          "iso2": "AR",
          "value": 10114396297
        },
        {
          "iso2": "UA",
          "value": 9418272530
        },
        {
          "iso2": "BR",
          "value": 9397882039
        },
        {
          "iso2": "CA",
          "value": 9063047602
        },
        {
          "iso2": "AU",
          "value": 8250390292
        },
        {
          "iso2": "TH",
          "value": 6496050830
        },
        {
          "iso2": "PK",
          "value": 4485449465
        },
        {
          "iso2": "RO",
          "value": 3200095575
        },
        {
          "iso2": "DE",
          "value": 2781217542
        },
        {
          "iso2": "PL",
          "value": 2487494108
        },
        {
          "iso2": "MM",
          "value": 2035663357
        },
        {
          "iso2": "KH",
          "value": 1940890781
        },
        {
          "iso2": "HU",
          "value": 1832752982
        },
        {
          "iso2": "BG",
          "value": 1608131636
        },
        {
          "iso2": "KZ",
          "value": 1472662895
        },
        {
          "iso2": "ZA",
          "value": 1166341382
        },
        {
          "iso2": "TR",
          "value": 1144787532
        },
        {
          "iso2": "IT",
          "value": 1120481148
        },
        {
          "iso2": "LT",
          "value": 1034783533
        },
        {
          "iso2": "UY",
          "value": 1030701055
        },
        {
          "iso2": "CZ",
          "value": 931183401
        },
        {
          "iso2": "CN",
          "value": 813906373
        },
        {
          "iso2": "RS",
          "value": 760159544
        },
        {
          "iso2": "AT",
          "value": 671782776
        },
        {
          "iso2": "NL",
          "value": 667961132
        },
        {
          "iso2": "SK",
          "value": 550341519
        },
        {
          "iso2": "ES",
          "value": 488681828
        },
        {
          "iso2": "HR",
          "value": 401850436
        },
        {
          "iso2": "GB",
          "value": 343850788
        },
        {
          "iso2": "GR",
          "value": 338957951
        },
        {
          "iso2": "TZ",
          "value": 301147075
        },
        {
          "iso2": "MX",
          "value": 269950368
        },
        {
          "iso2": "DK",
          "value": 231988858
        },
        {
          "iso2": "PE",
          "value": 184636442
        },
        {
          "iso2": "FI",
          "value": 167314007
        },
        {
          "iso2": "SE",
          "value": 151910491
        },
        {
          "iso2": "PT",
          "value": 143229114
        },
        {
          "iso2": "SG",
          "value": 109678875
        },
        {
          "iso2": "BO",
          "value": 99208313
        },
        {
          "iso2": "EG",
          "value": 95812105
        },
        {
          "iso2": "UG",
          "value": 88889371
        },
        {
          "iso2": "SI",
          "value": 84675920
        },
        {
          "iso2": "JP",
          "value": 79703113
        },
        {
          "iso2": "IE",
          "value": 78592640
        },
        {
          "iso2": "CL",
          "value": 78277581
        },
        {
          "iso2": "KR",
          "value": 66394719
        },
        {
          "iso2": "MY",
          "value": 63916936
        },
        {
          "iso2": "EC",
          "value": 41564971
        },
        {
          "iso2": "CO",
          "value": 28671256
        },
        {
          "iso2": "KE",
          "value": 26533923
        },
        {
          "iso2": "LU",
          "value": 21828441
        },
        {
          "iso2": "ID",
          "value": 17392559
        },
        {
          "iso2": "LK",
          "value": 13573396
        },
        {
          "iso2": "HK",
          "value": 12282016
        },
        {
          "iso2": "CI",
          "value": 12168794
        },
        {
          "iso2": "CR",
          "value": 10157282
        },
        {
          "iso2": "JO",
          "value": 8059155
        },
        {
          "iso2": "SA",
          "value": 7526602
        },
        {
          "iso2": "GT",
          "value": 7092507
        },
        {
          "iso2": "CH",
          "value": 6834184
        },
        {
          "iso2": "NZ",
          "value": 5869771
        },
        {
          "iso2": "PH",
          "value": 5526176
        },
        {
          "iso2": "DO",
          "value": 4440162
        },
        {
          "iso2": "KW",
          "value": 2779280
        },
        {
          "iso2": "MA",
          "value": 1972210
        },
        {
          "iso2": "IL",
          "value": 1246000
        },
        {
          "iso2": "AO",
          "value": 549290
        },
        {
          "iso2": "BH",
          "value": 525525
        },
        {
          "iso2": "QA",
          "value": 411435
        },
        {
          "iso2": "TN",
          "value": 364655
        },
        {
          "iso2": "NG",
          "value": 112954
        }
      ],
      "textiles": [
        {
          "iso2": "CN",
          "value": 85263543484
        },
        {
          "iso2": "DE",
          "value": 13911293791
        },
        {
          "iso2": "IT",
          "value": 11369038699
        },
        {
          "iso2": "TR",
          "value": 10105657119
        },
        {
          "iso2": "NL",
          "value": 6714897197
        },
        {
          "iso2": "KH",
          "value": 6638840599
        },
        {
          "iso2": "ES",
          "value": 6555167801
        },
        {
          "iso2": "PL",
          "value": 6090245401
        },
        {
          "iso2": "PK",
          "value": 4769184621
        },
        {
          "iso2": "ID",
          "value": 4139575589
        },
        {
          "iso2": "HK",
          "value": 3180705351
        },
        {
          "iso2": "MX",
          "value": 3040158848
        },
        {
          "iso2": "LK",
          "value": 2840507827
        },
        {
          "iso2": "DK",
          "value": 2721425107
        },
        {
          "iso2": "JO",
          "value": 2361505617
        },
        {
          "iso2": "PT",
          "value": 2306884429
        },
        {
          "iso2": "CZ",
          "value": 2004706750
        },
        {
          "iso2": "MA",
          "value": 1818455030
        },
        {
          "iso2": "GB",
          "value": 1756757433
        },
        {
          "iso2": "GT",
          "value": 1485025678
        },
        {
          "iso2": "TH",
          "value": 1467982264
        },
        {
          "iso2": "MM",
          "value": 1282847555
        },
        {
          "iso2": "CH",
          "value": 1278629611
        },
        {
          "iso2": "SE",
          "value": 1257362493
        },
        {
          "iso2": "AT",
          "value": 1233858586
        },
        {
          "iso2": "PE",
          "value": 1118606580
        },
        {
          "iso2": "MY",
          "value": 995346778
        },
        {
          "iso2": "EG",
          "value": 918089013
        },
        {
          "iso2": "HR",
          "value": 863872544
        },
        {
          "iso2": "SK",
          "value": 860017613
        },
        {
          "iso2": "RO",
          "value": 833380076
        },
        {
          "iso2": "KR",
          "value": 815118310
        },
        {
          "iso2": "TN",
          "value": 705683731
        },
        {
          "iso2": "HU",
          "value": 692208710
        },
        {
          "iso2": "BG",
          "value": 625924930
        },
        {
          "iso2": "DO",
          "value": 621222346
        },
        {
          "iso2": "SG",
          "value": 584272723
        },
        {
          "iso2": "RS",
          "value": 556717776
        },
        {
          "iso2": "CA",
          "value": 553701300
        },
        {
          "iso2": "GR",
          "value": 375851757
        },
        {
          "iso2": "PH",
          "value": 325140118
        },
        {
          "iso2": "JP",
          "value": 305731920
        },
        {
          "iso2": "LT",
          "value": 263347073
        },
        {
          "iso2": "SI",
          "value": 242804759
        },
        {
          "iso2": "AU",
          "value": 240238656
        },
        {
          "iso2": "KE",
          "value": 239617732
        },
        {
          "iso2": "ZA",
          "value": 222917026
        },
        {
          "iso2": "IE",
          "value": 197131085
        },
        {
          "iso2": "CO",
          "value": 188706005
        },
        {
          "iso2": "BR",
          "value": 121366875
        },
        {
          "iso2": "UA",
          "value": 104425119
        },
        {
          "iso2": "FI",
          "value": 89354814
        },
        {
          "iso2": "CL",
          "value": 85154271
        },
        {
          "iso2": "SA",
          "value": 74631050
        },
        {
          "iso2": "KZ",
          "value": 70034738
        },
        {
          "iso2": "NZ",
          "value": 45626508
        },
        {
          "iso2": "KW",
          "value": 44874622
        },
        {
          "iso2": "IL",
          "value": 43252000
        },
        {
          "iso2": "LU",
          "value": 37494726
        },
        {
          "iso2": "TZ",
          "value": 30157369
        },
        {
          "iso2": "CR",
          "value": 26999956
        },
        {
          "iso2": "QA",
          "value": 19494406
        },
        {
          "iso2": "BH",
          "value": 19492253
        },
        {
          "iso2": "EC",
          "value": 18674640
        },
        {
          "iso2": "AR",
          "value": 15771993
        },
        {
          "iso2": "UY",
          "value": 3125612
        },
        {
          "iso2": "UG",
          "value": 2836707
        },
        {
          "iso2": "BO",
          "value": 1727721
        },
        {
          "iso2": "CI",
          "value": 1126420
        },
        {
          "iso2": "AO",
          "value": 447092
        },
        {
          "iso2": "NG",
          "value": 2741
        }
      ],
      "metals": [
        {
          "iso2": "CN",
          "value": 70749286150
        },
        {
          "iso2": "DE",
          "value": 29764465659
        },
        {
          "iso2": "JP",
          "value": 27368570769
        },
        {
          "iso2": "ID",
          "value": 25801534087
        },
        {
          "iso2": "KR",
          "value": 24800969022
        },
        {
          "iso2": "IT",
          "value": 14462592206
        },
        {
          "iso2": "BR",
          "value": 11915251894
        },
        {
          "iso2": "NL",
          "value": 11519844219
        },
        {
          "iso2": "TR",
          "value": 10182170120
        },
        {
          "iso2": "CA",
          "value": 8757937428
        },
        {
          "iso2": "AT",
          "value": 8716999468
        },
        {
          "iso2": "ES",
          "value": 7551093122
        },
        {
          "iso2": "GB",
          "value": 7242419720
        },
        {
          "iso2": "SE",
          "value": 7090509224
        },
        {
          "iso2": "MY",
          "value": 6521390126
        },
        {
          "iso2": "ZA",
          "value": 5767469841
        },
        {
          "iso2": "PL",
          "value": 5759393255
        },
        {
          "iso2": "FI",
          "value": 4896674236
        },
        {
          "iso2": "KZ",
          "value": 4409259144
        },
        {
          "iso2": "CZ",
          "value": 4192908685
        },
        {
          "iso2": "SK",
          "value": 4102545548
        },
        {
          "iso2": "MX",
          "value": 3543140398
        },
        {
          "iso2": "UA",
          "value": 3096362004
        },
        {
          "iso2": "EG",
          "value": 2208673741
        },
        {
          "iso2": "RO",
          "value": 2079727593
        },
        {
          "iso2": "DK",
          "value": 1858020243
        },
        {
          "iso2": "PT",
          "value": 1797946204
        },
        {
          "iso2": "AU",
          "value": 1759620069
        },
        {
          "iso2": "SG",
          "value": 1669116806
        },
        {
          "iso2": "TH",
          "value": 1659720859
        },
        {
          "iso2": "SI",
          "value": 1466986035
        },
        {
          "iso2": "LU",
          "value": 1309656855
        },
        {
          "iso2": "CH",
          "value": 1242499098
        },
        {
          "iso2": "HU",
          "value": 1187794120
        },
        {
          "iso2": "BG",
          "value": 847029668
        },
        {
          "iso2": "HK",
          "value": 775510599
        },
        {
          "iso2": "RS",
          "value": 731560407
        },
        {
          "iso2": "SA",
          "value": 709810814
        },
        {
          "iso2": "QA",
          "value": 690327389
        },
        {
          "iso2": "GR",
          "value": 659603211
        },
        {
          "iso2": "CO",
          "value": 630361724
        },
        {
          "iso2": "LT",
          "value": 624463547
        },
        {
          "iso2": "CL",
          "value": 583738778
        },
        {
          "iso2": "BH",
          "value": 501114425
        },
        {
          "iso2": "HR",
          "value": 393283527
        },
        {
          "iso2": "IE",
          "value": 377745462
        },
        {
          "iso2": "NZ",
          "value": 340868302
        },
        {
          "iso2": "GT",
          "value": 264597244
        },
        {
          "iso2": "AR",
          "value": 237620987
        },
        {
          "iso2": "CR",
          "value": 228566181
        },
        {
          "iso2": "PH",
          "value": 217813424
        },
        {
          "iso2": "DO",
          "value": 200721093
        },
        {
          "iso2": "PE",
          "value": 187857232
        },
        {
          "iso2": "UG",
          "value": 177938481
        },
        {
          "iso2": "KE",
          "value": 169284142
        },
        {
          "iso2": "TN",
          "value": 162128268
        },
        {
          "iso2": "MA",
          "value": 137286579
        },
        {
          "iso2": "IL",
          "value": 115109000
        },
        {
          "iso2": "JO",
          "value": 111438547
        },
        {
          "iso2": "PK",
          "value": 73065762
        },
        {
          "iso2": "AO",
          "value": 72913557
        },
        {
          "iso2": "TZ",
          "value": 62901571
        },
        {
          "iso2": "KW",
          "value": 61974206
        },
        {
          "iso2": "BO",
          "value": 30125221
        },
        {
          "iso2": "EC",
          "value": 26886162
        },
        {
          "iso2": "CI",
          "value": 16067827
        },
        {
          "iso2": "KH",
          "value": 6227593
        },
        {
          "iso2": "LK",
          "value": 5423261
        },
        {
          "iso2": "MM",
          "value": 4957468
        },
        {
          "iso2": "NG",
          "value": 3906236
        },
        {
          "iso2": "UY",
          "value": 2502855
        }
      ],
      "chemicals": [
        {
          "iso2": "CN",
          "value": 82604532325
        },
        {
          "iso2": "CH",
          "value": 47210978992
        },
        {
          "iso2": "IE",
          "value": 46417480187
        },
        {
          "iso2": "DE",
          "value": 26980623636
        },
        {
          "iso2": "KR",
          "value": 21861374722
        },
        {
          "iso2": "NL",
          "value": 19570059299
        },
        {
          "iso2": "JP",
          "value": 14302007540
        },
        {
          "iso2": "SG",
          "value": 11702633449
        },
        {
          "iso2": "SA",
          "value": 11246517901
        },
        {
          "iso2": "GB",
          "value": 8819769728
        },
        {
          "iso2": "ES",
          "value": 8533801313
        },
        {
          "iso2": "IT",
          "value": 8297665351
        },
        {
          "iso2": "MY",
          "value": 5355650685
        },
        {
          "iso2": "TH",
          "value": 4450480056
        },
        {
          "iso2": "CA",
          "value": 3859214667
        },
        {
          "iso2": "ID",
          "value": 3496481790
        },
        {
          "iso2": "DK",
          "value": 3012436811
        },
        {
          "iso2": "AT",
          "value": 2500668563
        },
        {
          "iso2": "SE",
          "value": 2017853948
        },
        {
          "iso2": "BR",
          "value": 1878315151
        },
        {
          "iso2": "MX",
          "value": 1775149561
        },
        {
          "iso2": "KW",
          "value": 1772037052
        },
        {
          "iso2": "PL",
          "value": 1693159137
        },
        {
          "iso2": "HU",
          "value": 1654441042
        },
        {
          "iso2": "HK",
          "value": 1412153628
        },
        {
          "iso2": "CZ",
          "value": 1260455685
        },
        {
          "iso2": "IL",
          "value": 1127700000
        },
        {
          "iso2": "ZA",
          "value": 1121152727
        },
        {
          "iso2": "QA",
          "value": 1077285689
        },
        {
          "iso2": "FI",
          "value": 961908701
        },
        {
          "iso2": "TR",
          "value": 910814945
        },
        {
          "iso2": "PT",
          "value": 792716152
        },
        {
          "iso2": "AR",
          "value": 541517392
        },
        {
          "iso2": "SI",
          "value": 510649914
        },
        {
          "iso2": "CL",
          "value": 449379204
        },
        {
          "iso2": "PH",
          "value": 425615636
        },
        {
          "iso2": "AU",
          "value": 422409812
        },
        {
          "iso2": "LT",
          "value": 316518187
        },
        {
          "iso2": "RO",
          "value": 296258768
        },
        {
          "iso2": "SK",
          "value": 283913865
        },
        {
          "iso2": "EG",
          "value": 214868587
        },
        {
          "iso2": "CO",
          "value": 211233794
        },
        {
          "iso2": "RS",
          "value": 158241284
        },
        {
          "iso2": "HR",
          "value": 147458471
        },
        {
          "iso2": "KZ",
          "value": 143502103
        },
        {
          "iso2": "UA",
          "value": 129462439
        },
        {
          "iso2": "BG",
          "value": 124178920
        },
        {
          "iso2": "BH",
          "value": 120184973
        },
        {
          "iso2": "NZ",
          "value": 102930308
        },
        {
          "iso2": "GR",
          "value": 89840162
        },
        {
          "iso2": "LU",
          "value": 85199517
        },
        {
          "iso2": "GT",
          "value": 61741650
        },
        {
          "iso2": "MA",
          "value": 41948627
        },
        {
          "iso2": "PE",
          "value": 30268113
        },
        {
          "iso2": "DO",
          "value": 23362560
        },
        {
          "iso2": "JO",
          "value": 23171733
        },
        {
          "iso2": "PK",
          "value": 14636512
        },
        {
          "iso2": "UY",
          "value": 11171300
        },
        {
          "iso2": "KH",
          "value": 11090870
        },
        {
          "iso2": "CR",
          "value": 8196532
        },
        {
          "iso2": "TN",
          "value": 7274922
        },
        {
          "iso2": "KE",
          "value": 6493333
        },
        {
          "iso2": "BO",
          "value": 5002409
        },
        {
          "iso2": "EC",
          "value": 4777847
        },
        {
          "iso2": "LK",
          "value": 4353753
        },
        {
          "iso2": "CI",
          "value": 1809341
        },
        {
          "iso2": "UG",
          "value": 985115
        },
        {
          "iso2": "TZ",
          "value": 834560
        },
        {
          "iso2": "NG",
          "value": 479049
        },
        {
          "iso2": "AO",
          "value": 352112
        },
        {
          "iso2": "MM",
          "value": 242270
        }
      ]
    }
  }
};
