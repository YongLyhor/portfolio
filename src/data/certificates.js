// Certificates & credentials.
//
// Fill in the real values once available. `verifyUrl` points to the official
// verification record on verify.gov.kh — the document-verification platform
// of the Royal Government of Cambodia.
export const certificates = [
  {
    title: 'Government Certificate',
    issuer: null, // e.g. 'Ministry of ...'
    issuedDate: null, // e.g. '2025'
    verifyUrl:
      'https://verify.gov.kh/verify/ecff33552f85399a3e7f75c7d2810630ae50a0a9e691fb2190af42e4b12711ff?key=8fc7cf4d8fc271342923947347ef322b6bc9dd93cb2f23e1722aca965c3d819b',
    description:
      'A certificate issued by a Cambodian government agency, authenticated through verify.gov.kh — the official document verification platform of the Royal Government of Cambodia.',
  },
  {
    title: 'Physics Certificate',
    issuer: null, // e.g. 'Ministry of Education ...'
    issuedDate: null, // e.g. '2026'
    verifyUrl: null, // add the verify.gov.kh link when available
    image: '/archivement/certificate.png', // scan of the certificate
    description:
      'A physics certificate. Verification link to be added when available.',
  },
]