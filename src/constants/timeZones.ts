/* eslint-disable no-param-reassign */
import { getTimeZones, TimeZone } from '@vvo/tzdb';

// eslint-disable-next-line import/prefer-default-export
export const timeZonesMap = getTimeZones().reduce(
  (acc, timeZone) => ({
    ...acc,
    [timeZone.name]: timeZone,
  }),
  {} as Record<string, TimeZone>
);

export const timeZonesMapFull = getTimeZones().reduce((acc, timeZone) => {
  acc = {
    ...acc,
    [timeZone.name]: timeZone,
  };

  timeZone.group.forEach((timeZoneName) => {
    acc[timeZoneName] = timeZone;
  });

  return acc;
}, {} as Record<string, TimeZone>);

// TODO: add logic to generate some of the missing timestones automatically. Create map of timezones and check if it's on our list or not. If it's not -> add timezone automatically
export const timeZoneOptions = {
  'Pacific/Midway': 'Midway Island, Samoa',
  'Pacific/Honolulu': 'Hawaii',
  'Pacific/Marquesas': 'Marquesas',
  'America/Adak': 'Adak, Gambier',
  'America/Anchorage': 'Gambier, Anchorage',
  'America/Juneau': 'Alaska',
  'America/Boise': 'Mountain Time',
  'America/Dawson': 'Dawson, Yukon',
  'America/Chihuahua': 'Chihuahua, La Paz, Mazatlan',
  'America/Phoenix': 'Arizona',
  'America/Chicago': 'Central Time',
  'America/Regina': 'Saskatchewan',
  'America/Mexico_City': 'Guadalajara, Mexico City, Monterrey',
  'America/Belize': 'Central America',
  'America/Detroit': 'Eastern Time',
  'America/Bogota': 'Bogota, Lima, Quito',
  'America/Caracas': 'Caracas, La Paz',
  'America/Santiago': 'Santiago',
  'America/St_Johns': 'Newfoundland and Labrador',
  'America/Sao_Paulo': 'Brasilia',
  'America/Noronha': 'Noronha, Grytviken',
  'America/Tijuana': 'Tijuana',
  'America/Montevideo': 'Montevideo',
  'America/Argentina/Buenos_Aires': 'Buenos Aires, Georgetown',
  'America/Godthab': 'Greenland',
  'America/Los_Angeles': 'Pacific Time',
  'Atlantic/Azores': 'Azores',
  'Atlantic/Cape_Verde': 'Cape Verde Islands',
  GMT: 'UTC',
  'Europe/London': 'Edinburgh, London',
  'Europe/Dublin': 'Dublin',
  'Europe/Lisbon': 'Lisbon',
  'Atlantic/Canary': 'Canary Islands',
  'Africa/Casablanca': 'Casablanca',
  'Europe/Belgrade': 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
  'Europe/Sarajevo': 'Sarajevo, Skopje, Warsaw, Zagreb',
  'Europe/Brussels': 'Brussels, Copenhagen, Madrid, Paris',
  'Europe/Amsterdam': 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
  'Africa/Algiers': 'West Central Africa',
  'Europe/Bucharest': 'Bucharest',
  'Africa/Cairo': 'Cairo',
  'Europe/Helsinki': 'Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius',
  'Europe/Athens': 'Athens, Minsk',
  'Asia/Jerusalem': 'Jerusalem',
  'Africa/Harare': 'Harare, Pretoria',
  'Europe/Moscow': 'Istanbul, Moscow, St. Petersburg, Volgograd',
  'Asia/Kuwait': 'Kuwait, Riyadh',
  'Africa/Nairobi': 'Nairobi',
  'Asia/Baghdad': 'Baghdad',
  'Asia/Tehran': 'Tehran',
  'Asia/Dubai': 'Abu Dhabi, Muscat',
  'Asia/Baku': 'Baku, Tbilisi, Yerevan',
  'Asia/Kabul': 'Kabul',
  'Asia/Yekaterinburg': 'Ekaterinburg',
  'Asia/Karachi': 'Islamabad, Karachi, Tashkent',
  'Asia/Kolkata': 'Chennai, Kolkata, Mumbai, New Delhi',
  'Asia/Kathmandu': 'Kathmandu',
  'Asia/Colombo': 'Sri Jayawardenepura',
  'Asia/Dhaka': 'Astana, Dhaka',
  'Asia/Almaty': 'Almaty, Novosibirsk',
  'Asia/Yangon': 'Yangon, Rangoon',
  'Asia/Bangkok': 'Bangkok, Hanoi, Jakarta',
  'Asia/Krasnoyarsk': 'Krasnoyarsk',
  'Asia/Shanghai': 'Beijing, Chongqing, Hong Kong SAR, Urumqi',
  'Asia/Kuala_Lumpur': 'Kuala Lumpur, Singapore',
  'Asia/Taipei': 'Taipei',
  'Australia/Perth': 'Perth',
  'Asia/Irkutsk': 'Irkutsk, Ulaanbaatar',
  'Australia/Eucla': 'Eucla',
  'Asia/Seoul': 'Seoul',
  'Asia/Tokyo': 'Osaka, Sapporo, Tokyo',
  'Asia/Yakutsk': 'Yakutsk',
  'Australia/Darwin': 'Darwin',
  'Australia/Adelaide': 'Adelaide',
  'Australia/Brisbane': 'Brisbane',
  'Australia/Hobart': 'Hobart',
  'Asia/Vladivostok': 'Vladivostok',
  'Pacific/Guam': 'Guam, Port Moresby',
  'Australia/Sydney': 'Canberra, Melbourne, Sydney',
  'Asia/Magadan': 'Magadan, Solomon Islands, New Caledonia',
  'Asia/Kamchatka': 'Kamchatka, Marshall Islands',
  'Pacific/Fiji': 'Fiji Islands',
  'Pacific/Auckland': 'Auckland, Wellington',
  'Pacific/Tongatapu': "Nuku'alofa",
  // 'Pacific/Chatham': 'Chatham',
  // 'Pacific/Kiritimati': 'Kiritimati',
};
