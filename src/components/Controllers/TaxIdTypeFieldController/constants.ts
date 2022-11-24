/* eslint-disable import/prefer-default-export */

// TODO: work on this type -> use enum for type property instaed of string
export const TAX_IDS = [
  {
    country: 'Australia',
    id: 'au__abn',
    countryCode: 'au',
    taxName: 'abn',
    type: 'au_abn',
    name: 'Australian Business Number (AU ABN)',
  },

  {
    country: 'Australia',
    id: 'au__arn',
    countryCode: 'au',
    taxName: 'arn',
    type: 'au_arn',
    name: 'Australian Taxation Office Reference Number',
  },

  {
    country: 'Austria',
    id: 'at__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Belgium',
    id: 'be__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Brazil',
    id: 'br__br_cnpj',
    countryCode: 'br',
    taxName: 'cnpj',
    type: 'br_cnpj',
    name: 'Brazilian CNPJ number',
  },

  {
    country: 'Brazil',
    id: 'br__br_cpf',
    countryCode: 'br',
    taxName: 'cpf',
    type: 'br_cpf',
    name: 'Brazilian CPF number',
  },

  {
    country: 'Bulgaria',
    id: 'bg__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Canada',
    id: 'ca__ca_bn',
    countryCode: 'ca',
    taxName: 'bn',
    type: 'ca_bn',
    name: 'Canadian BN',
  },

  {
    country: 'Canada',
    id: 'ca__ca_gst_hst',
    countryCode: 'ca',
    taxName: 'gst_hst',
    type: 'ca_gst_hst',
    name: 'Canadian GST/HST number',
  },

  {
    country: 'Canada',
    id: 'ca__ca_pst_bc',
    countryCode: 'ca',
    taxName: 'pst_bc',
    type: 'ca_pst_bc',
    name: 'Canadian PST number (British Columbia)',
  },

  {
    country: 'Canada',
    id: 'ca__ca_pst_mb',
    countryCode: 'ca',
    taxName: 'pst_mb',
    type: 'ca_pst_mb',
    name: 'Canadian PST number (Manitoba)',
  },

  {
    country: 'Canada',
    id: 'ca__ca_pst_sk',
    countryCode: 'ca',
    taxName: 'pst_sk',
    type: 'ca_pst_sk',
    name: 'Canadian PST number (Saskatchewan)',
  },

  {
    country: 'Canada',
    id: 'ca__ca_qst',
    countryCode: 'ca',
    taxName: 'qst',
    type: 'ca_qst',
    name: 'Canadian QST number (Québec)',
  },

  {
    country: 'Chile',
    id: 'cl__cl_tin',
    countryCode: 'cl',
    taxName: 'tin',
    type: 'cl_tin',
    name: 'Chilean TIN',
  },

  {
    country: 'Croatia',
    id: 'hr__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Cyprus',
    id: 'cy__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Czech Republic',
    id: 'cz__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Denmark',
    id: 'dk__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Estonia',
    id: 'es__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Finland',
    id: 'fi__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'France',
    id: 'fr__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Georgia',
    id: 'ge__ge_vat',
    countryCode: 'ge',
    taxName: 'vat',
    type: 'ge_vat',
    name: 'Georgian VAT',
  },

  {
    country: 'Germany',
    id: 'de__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Greece',
    id: 'gr__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Hong Kong',
    id: 'hk__hk_br',
    countryCode: 'hk',
    taxName: 'br',
    type: 'hk_br',
    name: 'Hong Kong BR number',
  },

  {
    country: 'Hungary',
    id: 'hu__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Iceland',
    id: 'is__is_vat',
    countryCode: 'is',
    taxName: 'vat',
    type: 'is_vat',
    name: 'Icelandic VAT',
  },

  {
    country: 'India',
    id: 'in__in_gst',
    countryCode: 'in',
    taxName: 'gst',
    type: 'in_gst',
    name: 'Indian GST number',
  },

  {
    country: 'Indonesia',
    id: 'id__id_npwp',
    countryCode: 'id',
    taxName: 'npwp',
    type: 'id_npwp',
    name: 'Indonesian NPWP number',
  },

  {
    country: 'Ireland',
    id: 'ie__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Israel',
    id: 'il__il_vat',
    countryCode: 'il',
    taxName: 'vat',
    type: 'il_vat',
    name: 'Israel VAT',
  },

  {
    country: 'Italy',
    id: 'it__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Japan',
    id: 'jp__jp_cn',
    countryCode: 'jp',
    taxName: 'cn',
    type: 'jp_cn',
    name: 'Japanese Corporate Number (*Hōjin Bangō*)',
  },

  {
    country: 'Japan',
    id: 'jp__jp_rn',
    countryCode: 'jp',
    taxName: 'rn',
    type: 'jp_rn',
    name: "Japanese Registered Foreign Businesses' Registration Number (*Tōroku Kokugai Jigyōsha no Tōroku Bangō*)",
  },

  {
    country: 'Latvia',
    id: 'lv__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Liechtenstein',
    id: 'li__li_uid',
    countryCode: 'li',
    taxName: 'uid',
    type: 'li_uid',
    name: 'Liechtensteinian UID number',
  },

  {
    country: 'Lithuania',
    id: 'lt__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Luxembourg',
    id: 'lu__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Malaysia',
    id: '__my_frp',
    countryCode: 'my',
    taxName: 'frp',
    type: 'my_frp',
    name: 'Malaysian FRP number',
  },

  {
    country: 'Malaysia',
    id: 'my__my_itn',
    countryCode: 'my',
    taxName: 'itn',
    type: 'my_itn',
    name: 'Malaysian ITN',
  },

  {
    country: 'Malaysia',
    id: 'my__my_sst',
    countryCode: 'my',
    taxName: 'sst',
    type: 'my_sst',
    name: 'Malaysian SST number',
  },

  {
    country: 'Malta',
    id: 'mt__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Mexico',
    id: 'mx__mx_rfc',
    countryCode: 'mx',
    taxName: 'rfc',
    type: 'mx_rfc',
    name: 'Mexican RFC number',
  },

  {
    country: 'Netherlands',
    id: 'nl__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'New Zealand',
    id: 'nz__nz_gst',
    countryCode: 'nz',
    taxName: 'gst',
    type: 'nz_gst',
    name: 'New Zealand GST number',
  },

  {
    country: 'Norway',
    id: 'no__no_vat',
    countryCode: 'no',
    taxName: 'vat',
    type: 'no_vat',
    name: 'Norwegian VAT number',
  },

  {
    country: 'Poland',
    id: 'pl__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Portugal',
    id: 'pt__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Romania',
    id: 'ro__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Russia',
    id: 'ru__ru_inn',
    countryCode: 'ru',
    taxName: 'inn',
    type: 'ru_inn',
    name: 'Russian INN',
  },

  {
    country: 'Russia',
    id: 'ru__ru_kpp',
    countryCode: 'ru',
    taxName: 'kpp',
    type: 'ru_kpp',
    name: 'Russian KPP',
  },

  {
    country: 'Saudi Arabia',
    id: 'sa__sa_vat',
    countryCode: 'sa',
    taxName: 'vat',
    type: 'sa_vat',
    name: 'Saudi Arabia VAT',
  },

  {
    country: 'Singapore',
    id: '__sg_gst',
    countryCode: 'sg',
    taxName: 'gst',
    type: 'sg_gst',
    name: 'Singaporean GST',
  },

  {
    country: 'Singapore',
    id: 'sg__sg_uen',
    countryCode: 'sg',
    taxName: 'uen',
    type: 'sg_uen',
    name: 'Singaporean UEN',
  },

  {
    country: 'Slovakia',
    id: 'sk__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Slovenia',
    id: 'si__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'South Africa',
    id: 'za__za_vat',
    countryCode: 'za',
    taxName: 'vat',
    type: 'za_vat',
    name: 'South African VAT number',
  },

  {
    country: 'South Korea',
    id: 'kr__kr_brn',
    countryCode: 'kr',
    taxName: 'brn',
    type: 'kr_brn',
    name: 'Korean BRN',
  },

  {
    country: 'Spain',
    id: 'es__es_cif',
    countryCode: 'es',
    taxName: 'cif',
    type: 'es_cif',
    name: 'Spanish CIF number',
  },

  {
    country: 'Spain',
    id: 'es__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Sweden',
    id: 'se__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'European VAT number',
  },

  {
    country: 'Switzerland',
    id: 'ch__ch_vat',
    countryCode: 'ch',
    taxName: 'vat',
    type: 'ch_vat',
    name: 'Switzerland VAT number',
  },

  {
    country: 'Taiwan',
    id: 'tw__tw_vat',
    countryCode: 'tw',
    taxName: 'vat',
    type: 'tw_vat',
    name: 'Taiwanese VAT',
  },

  {
    country: 'Thailand',
    id: 'th__th_vat',
    countryCode: 'th',
    taxName: 'vat',
    type: 'th_vat',
    name: 'Thai VAT',
  },

  {
    country: 'Ukraine',
    id: 'ua__ua_vat',
    countryCode: 'ua',
    taxName: 'vat',
    type: 'ua_vat',
    name: 'Ukrainian VAT',
  },

  {
    country: 'United Arab Emirates',
    id: 'ae__ae_trn',
    countryCode: 'ae',
    taxName: 'trn',
    type: 'ae_trn',
    name: 'United Arab Emirates TRN',
  },

  {
    country: 'United Kingdom',
    id: 'gb__gb_vat',
    countryCode: 'gb',
    taxName: 'vat',
    type: 'gb_vat',
    name: 'United Kingdom VAT number',
  },

  {
    country: 'United Kingdom',
    id: 'gb__eu_vat',
    countryCode: 'eu',
    taxName: 'vat',
    type: 'eu_vat',
    name: 'Northern Ireland VAT number',
  },

  {
    country: 'United States',
    id: 'us__us_ein',
    countryCode: 'us',
    taxName: 'ein',
    type: 'us_ein',
    name: 'United States EIN',
  },
];
