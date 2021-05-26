const mockAuthId = 'USkphWGRwV1ZkNGJrbHFiMmxhUjJ4NVNXNHdMaTVVVW1KNE9EWjBOVWRzWTBSaFRISXdTRTlhYUhObkxuVnlXRWhFTmtoS2VrZEdTV015UjJkWWJrRktNRnBqWDNsNU9FaHlXRmhTT0hsTFRVOVlSbmt6U25oU1JqWmZTVVJQU1VSa1ExZzJObTl3UkV4ekxXaEhWbGRtVEdwMmEyRlFObm96WmtkRFZuWmFabmhFY21ab1VFaHRZM3BsUlV4UmNrWnpVblJGWmtJM09FbDJiMk5FVkhkalNIazBaMUZMTlRGMlFrcFRaMUJOZFc0M1RFSnlaMkpKYVdGV1dISlRhazVDZEZGUGRHWnVNVk00ZG5JeFVuWlhZbkJPYTI5UFpWQlRVVVZoTXpkbFUxSklaWGxYVUhOcVMwMXdha293YTA5V1dHMXFPVEU0YkRVMFYwNDBORU5oVlV0Sk1scDFaM1ZGYTJSdU5WSmpXbTl0U3pWMVRrUkxXV1Z4YTBGNmVrcHNkMXB3ZVV4cFZrMDNVamN0TTAxR1FtNVVaelp1TTBnNWJUTm9Wblp1VjNCek0zSjVTbFJDYzIxVWVISkNVamt3WDJKeVJtNTVlV05uVmpVM2EwUlVZVU5STkRoWWVYUlRVMHgxV1U1dWFWbFFhMkZHU2toeVRraGtka1kzYmt4WmQydGlTbGRUY2paNFNFTTBWM1ptWTB3NExXTkxNekYxWDJWWlZrdD053ZEZSR1RsIzQnBlbkpuYmpkMkxWZ3pjVWxMU1hwRVlraGtOalpmUjFkcVUxTnhhekJrTjFobWNWRkRVWGRwZW1RMk0ybFVabU5ZTFc1M2FUTmplV3hUYzFGM05VODRjbFZXUVhKaVozQlVlazl2V0RaWVpra3hNVko0YjFFNWNVeDViSGxFV2xOekxuQlNVVU4wZERKM1JGZFVhVWh1TW5KWWJFRkxWMEUud0pOdTR3ZXhTSzk5V3BzRUNpMWN3OVlFQnNzR0RXVUFBYlE4VWJ0V2h3RSIsImV4cCI6MTYyMTkzOTUxOSwiaWF0IjoxNjIxOTM5MjE5fQ.zY_gB7cQJ7o2J9FSARch7NZgmZwjpy5XdZkaZzA5oHM'

const mockUserProfile = {
  phone_number: '07777777777',
  given_name: 'Oliver Evans',
  family_name: 'oliver.evans@ch.com',
  name: 'Oliver Evans oliver.evans@ch.com',
  email: 'oliver.evans@ch.com',
  sub: '4f167155-1a32-40d2-98ea-18a2b335cecc',
  subname: 'id=4f167155-1a32-40d2-98ea-18a2b335cecc,ou=user,o=alpha,ou=services,ou=am-config'
}

const mockUserOrgsPath = 'https://idam.amido.aws.chdev.org/openidm/managed/alpha_user/4f167155-1a32-40d2-98ea-18a2b335cecc/memberOfOrg?_queryFilter=number+eq+%2208023036%22&_fields=users,name,number,addressLine1,addressLine2,locality,region,postalCode'
const mockUserOrgsResponse = {
  result: [{
    _id: '618abaaf-1813-484e-9ce1-30117a4bf667',
    _rev: '00000000c7bbd223',
    number: '08023036',
    locality: 'London',
    postalCode: 'N11 1GN',
    addressLine1: 'Building 3 North London Business Park',
    addressLine2: 'Oakleigh Road South',
    region: null,
    name: '1X100 LIMITED',
    _refResourceCollection: 'managed/alpha_organization',
    _refResourceId: '2adbc7e9-7ae3-4a61-8b43-003945e80e96',
    _refResourceRev: '00000000c22701a0',
    _ref: 'managed/alpha_organization/2adbc7e9-7ae3-4a61-8b43-003945e80e96',
    _refProperties: { _id: '618abaaf-1813-484e-9ce1-30117a4bf667', _rev: '00000000c7bbd223' }
  }],
  resultCount: 1,
  pagedResultsCookie: null,
  totalPagedResultsPolicy: 'NONE',
  totalPagedResults: -1,
  remainingPagedResults: -1
}
const mockOrgUsersPath = 'https://idam.amido.aws.chdev.org/openidm/managed/alpha_organization/2adbc7e9-7ae3-4a61-8b43-003945e80e96/members?_queryFilter=true&_fields=userName,givenName,mail'
const mockOrgUsersResponse = {
  result: [{
    _id: '2fc67b37-9284-4231-a1c9-d96d44fd9e45',
    _rev: '000000009635b55e',
    _refResourceCollection: 'managed/alpha_user',
    _refResourceId: '08a989a1-7aba-4050-97dd-64b8c7dd3cbc',
    _refResourceRev: '000000004227c0e0',
    userName: 'charlie.robberts@example.com',
    givenName: 'Charlie Roberts',
    mail: 'charlie.robberts@example.com',
    _ref: 'managed/alpha_user/08a989a1-7aba-4050-97dd-64b8c7dd3cbc',
    _refProperties: {
      membershipStatus: 'confirmed',
      _id: '2fc67b37-9284-4231-a1c9-d96d44fd9e45',
      _rev: '000000009635b55e'
    }
  }, {
    _id: '97c8a3e6-e226-4549-a66d-1c0d561c982d',
    _rev: '00000000052ae5dd',
    _refResourceCollection: 'managed/alpha_user',
    _refResourceId: '43185295-bb40-48f0-90ab-be114b8f4aca',
    _refResourceRev: '00000000f1720518',
    userName: 'lily.lewis@example.com',
    givenName: 'Lily Lewis',
    mail: 'lily.lewis@example.com',
    _ref: 'managed/alpha_user/43185295-bb40-48f0-90ab-be114b8f4aca',
    _refProperties: {
      inviterId: '08a989a1-7aba-4050-97dd-64b8c7dd3cbc',
      membershipStatus: 'confirmed',
      inviteTimestamp: 'Tue May 25 2021 11:24:06 GMT-0000 (UTC)',
      _id: '97c8a3e6-e226-4549-a66d-1c0d561c982d',
      _rev: '00000000052ae5dd'
    }
  }, {
    _id: '618abaaf-1813-484e-9ce1-30117a4bf667',
    _rev: '00000000c7bbd223',
    _refResourceCollection: 'managed/alpha_user',
    _refResourceId: '4f167155-1a32-40d2-98ea-18a2b335cecc',
    _refResourceRev: '000000006dd9e10c',
    userName: 'oliver.evans@example.com',
    givenName: 'Oliver Evans',
    mail: 'oliver.evans@example.com',
    _ref: 'managed/alpha_user/4f167155-1a32-40d2-98ea-18a2b335cecc',
    _refProperties: {
      inviterId: '08a989a1-7aba-4050-97dd-64b8c7dd3cbc',
      membershipStatus: 'pending',
      inviteTimestamp: 'Wed May 26 2021 08:19:06 GMT-0000 (UTC)',
      _id: '618abaaf-1813-484e-9ce1-30117a4bf667',
      _rev: '00000000c7bbd223'
    }
  }],
  resultCount: 3,
  pagedResultsCookie: null,
  totalPagedResultsPolicy: 'NONE',
  totalPagedResults: -1,
  remainingPagedResults: -1
}

export { mockAuthId, mockUserProfile, mockUserOrgsPath, mockUserOrgsResponse, mockOrgUsersPath, mockOrgUsersResponse }
