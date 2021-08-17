const mockAuthId = 'USkphWGRwV1ZkNGJrbHFiMmxhUjJ4NVNXNHdMaTVVVW1KNE9EWjBOVWRzWTBSaFRISXdTRTlhYUhObkxuVnlXRWhFTmtoS2VrZEdTV015UjJkWWJrRktNRnBqWDNsNU9FaHlXRmhTT0hsTFRVOVlSbmt6U25oU1JqWmZTVVJQU1VSa1ExZzJObTl3UkV4ekxXaEhWbGRtVEdwMmEyRlFObm96WmtkRFZuWmFabmhFY21ab1VFaHRZM3BsUlV4UmNrWnpVblJGWmtJM09FbDJiMk5FVkhkalNIazBaMUZMTlRGMlFrcFRaMUJOZFc0M1RFSnlaMkpKYVdGV1dISlRhazVDZEZGUGRHWnVNVk00ZG5JeFVuWlhZbkJPYTI5UFpWQlRVVVZoTXpkbFUxSklaWGxYVUhOcVMwMXdha293YTA5V1dHMXFPVEU0YkRVMFYwNDBORU5oVlV0Sk1scDFaM1ZGYTJSdU5WSmpXbTl0U3pWMVRrUkxXV1Z4YTBGNmVrcHNkMXB3ZVV4cFZrMDNVamN0TTAxR1FtNVVaelp1TTBnNWJUTm9Wblp1VjNCek0zSjVTbFJDYzIxVWVISkNVamt3WDJKeVJtNTVlV05uVmpVM2EwUlVZVU5STkRoWWVYUlRVMHgxV1U1dWFWbFFhMkZHU2toeVRraGtka1kzYmt4WmQydGlTbGRUY2paNFNFTTBWM1ptWTB3NExXTkxNekYxWDJWWlZrdD053ZEZSR1RsIzQnBlbkpuYmpkMkxWZ3pjVWxMU1hwRVlraGtOalpmUjFkcVUxTnhhekJrTjFobWNWRkRVWGRwZW1RMk0ybFVabU5ZTFc1M2FUTmplV3hUYzFGM05VODRjbFZXUVhKaVozQlVlazl2V0RaWVpra3hNVko0YjFFNWNVeDViSGxFV2xOekxuQlNVVU4wZERKM1JGZFVhVWh1TW5KWWJFRkxWMEUud0pOdTR3ZXhTSzk5V3BzRUNpMWN3OVlFQnNzR0RXVUFBYlE4VWJ0V2h3RSIsImV4cCI6MTYyMTkzOTUxOSwiaWF0IjoxNjIxOTM5MjE5fQ.zY_gB7cQJ7o2J9FSARch7NZgmZwjpy5XdZkaZzA5oHM'

const mockUserPath = 'https://idam.amido.aws.chdev.org/am/oauth2/realms/root/realms/alpha/userinfo'
const mockUserProfile = {
  phone_number: '07777777777',
  given_name: 'Oliver Evans',
  family_name: 'oliver.evans@ch.com',
  name: 'Oliver Evans oliver.evans@ch.com',
  email: 'oliver.evans@ch.com',
  sub: '4f167155-1a32-40d2-98ea-18a2b335cecc',
  subname: 'id=4f167155-1a32-40d2-98ea-18a2b335cecc,ou=user,o=alpha,ou=services,ou=am-config'
}

const mockCompanyPath = 'https://openam-companieshouse-uk-dev.id.forgerock.io/openidm/endpoint/company?currentPage=1&pageSize=9999&maxPages=10&searchTerm=06600043'
const mockCompanyResponse = {
  _id: '12e26a55-1c1b-4571-b7f1-374be012bc68',
  pagination: {
    totalItems: 3,
    startPage: 1,
    startIndex: 0,
    pages: [1],
    endIndex: 2,
    totalPages: 1,
    pageSize: '9999',
    endPage: 1,
    currentPage: '1'
  },
  results: [{
    postalCode: 'S1 2DW',
    jurisdiction: 'EW',
    locality: 'Sheffield',
    membershipStatus: 'confirmed',
    type: 'ltd',
    number: '06600043',
    members: [{
      phone: '******1354',
      displayName: 's******@amido.com',
      name: null,
      _id: '12e26a55-1c1b-4571-b7f1-374be012bc68',
      membershipStatus: 'confirmed',
      email: 's******@amido.com'
    },
    {
      phone: null,
      displayName: 's******@companieshouse.gov',
      name: null,
      _id: '74f90707-0e36-4a8e-b574-799b33e26e55',
      membershipStatus: 'pending',
      email: 's******@companieshouse.gov'
    }
    ],
    name: '31-29 SPENCER ROAD LIMITED',
    addressLine1: 'Northchurch Business Centre',
    addressLine2: '84 Queen Street',
    inviter: null,
    _id: '362b5237-f6ed-431d-960e-585590732a8d',
    region: null,
    status: 'active'
  }]
}

const mockCompaniesPath = 'https://openam-companieshouse-uk-dev.id.forgerock.io/openidm/endpoint/company?currentPage=1&pageSize=9999&maxPages=10'
const mockCompaniesResponse = { _id: '12e26a55-1c1b-4571-b7f1-374be012bc68', pagination: { totalItems: 3, startPage: 1, startIndex: 0, pages: [1], endIndex: 2, totalPages: 1, pageSize: '9999', endPage: 1, currentPage: '1' }, results: [{ postalCode: 'S1 2DW', jurisdiction: 'EW', locality: 'Sheffield', membershipStatus: 'confirmed', type: 'ltd', number: '06600043', members: [{ phone: '******1354', displayName: 's******@amido.com', name: null, _id: '12e26a55-1c1b-4571-b7f1-374be012bc68', membershipStatus: 'confirmed', email: 's******@amido.com' }], name: '31-29 SPENCER ROAD LIMITED', addressLine1: 'Northchurch Business Centre', addressLine2: '84 Queen Street', inviter: null, _id: '362b5237-f6ed-431d-960e-585590732a8d', region: null, status: 'active' }, { postalCode: 'TW31RT', jurisdiction: 'EW', locality: 'London', membershipStatus: 'confirmed', type: 'LTD', number: '12341234', members: [{ phone: '******1354', displayName: 's******@amido.com', name: null, _id: '12e26a55-1c1b-4571-b7f1-374be012bc68', membershipStatus: 'confirmed', email: 's******@amido.com' }], name: 'test company', addressLine1: null, addressLine2: null, inviter: null, _id: '81b53863-6be8-4cb3-942d-0ac76b1c79c7', region: null, status: 'active' }, { postalCode: 'SK6 6HN', jurisdiction: 'EW', locality: 'Stockport', membershipStatus: 'confirmed', type: 'ltd', number: '08025038', members: [{ phone: '******1354', displayName: 's******@amido.com', name: null, _id: '12e26a55-1c1b-4571-b7f1-374be012bc68', membershipStatus: 'confirmed', email: 's******@amido.com' }, { phone: null, displayName: 's******@companieshouse.gov', name: null, _id: '74f90707-0e36-4a8e-b574-799b33e26e55', membershipStatus: 'pending', email: 's******@companieshouse.gov' }], name: '3 (S+E) LIMITED', addressLine1: '5 Westminster Close', addressLine2: 'Marple', inviter: null, _id: '6f5a618f-1700-48f8-ab43-2a65940dba9a', region: null, status: 'active' }] }

const mockConfirmedCompaniesPath = 'https://openam-companieshouse-uk-dev.id.forgerock.io/openidm/endpoint/company?currentPage=1&pageSize=9999&maxPages=10&status=confirmed'
const mockConfirmedCompaniesResponse = {
  _id: '12e26a55-1c1b-4571-b7f1-374be012bc68',
  pagination: {
    totalItems: 3,
    startPage: 1,
    startIndex: 0,
    pages: [1],
    endIndex: 2,
    totalPages: 1,
    pageSize: '9999',
    endPage: 1,
    currentPage: '1'
  },
  results: [{
    postalCode: 'S1 2DW',
    jurisdiction: 'EW',
    locality: 'Sheffield',
    membershipStatus: 'confirmed',
    type: 'ltd',
    number: '06600043',
    members: [{
      phone: '******1354',
      displayName: 's******@amido.com',
      name: null,
      _id: '12e26a55-1c1b-4571-b7f1-374be012bc68',
      membershipStatus: 'confirmed',
      email: 's******@amido.com'
    }],
    name: '31-29 SPENCER ROAD LIMITED',
    addressLine1: 'Northchurch Business Centre',
    addressLine2: '84 Queen Street',
    inviter: null,
    _id: '362b5237-f6ed-431d-960e-585590732a8d',
    region: null,
    status: 'active'
  }, {
    postalCode: 'TW31RT',
    jurisdiction: 'EW',
    locality: 'London',
    membershipStatus: 'confirmed',
    type: 'LTD',
    number: '12341234',
    members: [{
      phone: '******1354',
      displayName: 's******@amido.com',
      name: null,
      _id: '12e26a55-1c1b-4571-b7f1-374be012bc68',
      membershipStatus: 'confirmed',
      email: 's******@amido.com'
    }],
    name: 'test company',
    addressLine1: null,
    addressLine2: null,
    inviter: null,
    _id: '81b53863-6be8-4cb3-942d-0ac76b1c79c7',
    region: null,
    status: 'active'
  }, {
    postalCode: 'SK6 6HN',
    jurisdiction: 'EW',
    locality: 'Stockport',
    membershipStatus: 'confirmed',
    type: 'ltd',
    number: '08025038',
    members: [{
      phone: '******1354',
      displayName: 's******@amido.com',
      name: null,
      _id: '12e26a55-1c1b-4571-b7f1-374be012bc68',
      membershipStatus: 'confirmed',
      email: 's******@amido.com'
    }, {
      phone: null,
      displayName: 's******@companieshouse.gov',
      name: null,
      _id: '74f90707-0e36-4a8e-b574-799b33e26e55',
      membershipStatus: 'pending',
      email: 's******@companieshouse.gov'
    }],
    name: '3 (S+E) LIMITED',
    addressLine1: '5 Westminster Close',
    addressLine2: 'Marple',
    inviter: null,
    _id: '6f5a618f-1700-48f8-ab43-2a65940dba9a',
    region: null,
    status: 'active'
  }]
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

const tokens = { accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMmUyNmE1NS0xYzFiLTQ1NzEtYjdmMS0zNzRiZTAxMmJjNjgiLCJjdHMiOiJPQVVUSDJfR1JBTlRfU0VUIiwiYXV0aF9sZXZlbCI6MCwiYXVkaXRUcmFja2luZ0lkIjoiMDJlNmE3NmEtYTM1NC00OTY0LWI1ZmItYzU5ODU0MDM2ZGI0LTE1NzMzOCIsInN1Ym5hbWUiOiIxMmUyNmE1NS0xYzFiLTQ1NzEtYjdmMS0zNzRiZTAxMmJjNjgiLCJpc3MiOiJodHRwczovL2lkYW0uYW1pZG8uYXdzLmNoZGV2Lm9yZzo0NDMvYW0vb2F1dGgyIiwidG9rZW5OYW1lIjoiYWNjZXNzX3Rva2VuIiwidG9rZW5fdHlwZSI6IkJlYXJlciIsImF1dGhHcmFudElkIjoiZjVfWkpCeGJrZ3ZxSWg2YWhSOWZTVE5nSUVnLmhRQ3J2RFlscmR2d05tWU1HVks5eF96TFRCbyIsImF1ZCI6IkZvcmdlUm9ja1NES0NsaWVudCIsIm5iZiI6MTYyOTI3MzIzNSwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsInNjb3BlIjpbInBob25lIiwib3BlbmlkIiwicHJvZmlsZSIsImZyOmlkbToqIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNjI5MjczMjMzLCJyZWFsbSI6Ii9hbHBoYSIsImV4cCI6MTYyOTI3NjgzNSwiaWF0IjoxNjI5MjczMjM1LCJleHBpcmVzX2luIjozNjAwLCJqdGkiOiJmNV9aSkJ4YmtndnFJaDZhaFI5ZlNUTmdJRWcuTnNhblZHcjJwbldTcmlsdUZzUWFlWko1LVdrIn0.b3By5O0EwwEpuSZ3hjvAv1pSX6s6x5vD22rzMtHGON8', idToken: 'eyJ0eXAiOiJKV1QiLCJraWQiOiJNTkdqT0JKRm1rZW4weWJsdURUdnlMbEpUbGM9IiwiYWxnIjoiUlMyNTYifQ.eyJhdF9oYXNoIjoieWF0U1c3Z0VBLVdoYUp3eHBaUk9JdyIsInN1YiI6IjEyZTI2YTU1LTFjMWItNDU3MS1iN2YxLTM3NGJlMDEyYmM2OCIsImF1ZGl0VHJhY2tpbmdJZCI6IjAyZTZhNzZhLWEzNTQtNDk2NC1iNWZiLWM1OTg1NDAzNmRiNC0xNTczNDAiLCJzdWJuYW1lIjoiMTJlMjZhNTUtMWMxYi00NTcxLWI3ZjEtMzc0YmUwMTJiYzY4IiwiaXNzIjoiaHR0cHM6Ly9pZGFtLmFtaWRvLmF3cy5jaGRldi5vcmc6NDQzL2FtL29hdXRoMiIsInRva2VuTmFtZSI6ImlkX3Rva2VuIiwic2lkIjoiSU51SnlINkdaTlRNcE9nVEVLb2NnZDYvYTd0cnRKdHR6RzVObHpQQ1JBYz0iLCJhdWQiOiJGb3JnZVJvY2tTREtDbGllbnQiLCJjX2hhc2giOiJyQTFEdmR6M3lkemR3OXMydS11Mkt3IiwiYWNyIjoiY2hzIiwib3JnLmZvcmdlcm9jay5vcGVuaWRjb25uZWN0Lm9wcyI6ImNlMUYxai1veHZHR2trLXMxYkdIUHNLNk1KcyIsInNfaGFzaCI6IkRUY0pNUG1sTjMxTFNLWVIyaWNwMGciLCJhenAiOiJGb3JnZVJvY2tTREtDbGllbnQiLCJhdXRoX3RpbWUiOjE2MjkyNzMyMzMsIm5hbWUiOiJudWxsIHN0dWFydC5wYXJyQGFtaWRvLmNvbSIsInJlYWxtIjoiL2FscGhhIiwicGhvbmVfbnVtYmVyIjoiMDc3MzY4MzEzNTQiLCJleHAiOjE2MjkyNzY4MzUsInRva2VuVHlwZSI6IkpXVFRva2VuIiwiaWF0IjoxNjI5MjczMjM1LCJmYW1pbHlfbmFtZSI6InN0dWFydC5wYXJyQGFtaWRvLmNvbSIsImVtYWlsIjoic3R1YXJ0LnBhcnJAYW1pZG8uY29tIn0.Eyo4p9G0WSI-mhNGFCrTLjP-CdYC8N0_MflIl_mUmZWRrTpTa5rKt5MfMfRZ9ED-INVMh0I_KKRBmKh_O8NldavoOn8FOO7RPb0QVOXTGM5dOh6mSCo23mDk2XLw67hkji3_2MMU47Mk5Ec035LzqpQW8mfAONhOeacNKpMNRfc1pO90VqzH_Gofx1vbSrKJtqMiJcoqbUkbvtMxHLrpsi0d60sPKsfp7pDy6_C4qGiERsh7BYTqecV1bPkvceqUtAAD81rEB0oE_eofI7SKKbl9jn4KniCbmywWXRTjJfVB9703SvcnWAe2QUVTvv3wFcbGYrrSYfxoaYjcyT2A3Q', refreshToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMmUyNmE1NS0xYzFiLTQ1NzEtYjdmMS0zNzRiZTAxMmJjNjgiLCJjdHMiOiJPQVVUSDJfR1JBTlRfU0VUIiwiYXV0aF9sZXZlbCI6MCwiYXVkaXRUcmFja2luZ0lkIjoiMDJlNmE3NmEtYTM1NC00OTY0LWI1ZmItYzU5ODU0MDM2ZGI0LTE1NzMzOSIsInN1Ym5hbWUiOiIxMmUyNmE1NS0xYzFiLTQ1NzEtYjdmMS0zNzRiZTAxMmJjNjgiLCJpc3MiOiJodHRwczovL2lkYW0uYW1pZG8uYXdzLmNoZGV2Lm9yZzo0NDMvYW0vb2F1dGgyIiwidG9rZW5OYW1lIjoicmVmcmVzaF90b2tlbiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJhdXRoR3JhbnRJZCI6ImY1X1pKQnhia2d2cUloNmFoUjlmU1ROZ0lFZy5oUUNydkRZbHJkdndObVlNR1ZLOXhfekxUQm8iLCJzaWQiOiJJTnVKeUg2R1pOVE1wT2dURUtvY2dkNi9hN3RydEp0dHpHNU5selBDUkFjPSIsImF1ZCI6IkZvcmdlUm9ja1NES0NsaWVudCIsImFjciI6ImNocyIsIm5iZiI6MTYyOTI3MzIzNSwib3BzIjoiY2UxRjFqLW94dkdHa2stczFiR0hQc0s2TUpzIiwiZ3JhbnRfdHlwZSI6ImF1dGhvcml6YXRpb25fY29kZSIsInNjb3BlIjpbInBob25lIiwib3BlbmlkIiwicHJvZmlsZSIsImZyOmlkbToqIiwiZW1haWwiXSwiYXV0aF90aW1lIjoxNjI5MjczMjMzLCJyZWFsbSI6Ii9hbHBoYSIsImV4cCI6MTYyOTg3ODAzNSwiaWF0IjoxNjI5MjczMjM1LCJleHBpcmVzX2luIjo2MDQ4MDAsImp0aSI6ImY1X1pKQnhia2d2cUloNmFoUjlmU1ROZ0lFZy5QdGN3N0h4R0dQcks2dTdLLS11Zmh1RXVhekUifQ.Xrtx2ANp87tAQPxjqovFiyn7mVLWW7j6rPeom8t7Nt0' }

export {
  mockAuthId,
  mockCompaniesResponse,
  mockCompaniesPath,
  mockCompanyPath,
  mockCompanyResponse,
  mockConfirmedCompaniesPath,
  mockConfirmedCompaniesResponse,
  mockOrgUsersPath,
  mockOrgUsersResponse,
  mockUserOrgsPath,
  mockUserOrgsResponse,
  mockUserPath,
  mockUserProfile,
  tokens
}
