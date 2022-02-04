import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '0ejtvmd0',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skiZXG9LDQxLNjQOS9cA13JG6bSIM6N4KbM9MFO1BZfS77z7XJtBVkkvA55JEeeeyHOWx61lcssvBnrrgospYZ8A8Sy2C9Ej928yvuqXBhndTx0zUIgaRxaxYZNKr7fDyUaxNjbcSvL9dG3ms3zodpQHYUG2EnPcCu5HDsTJALe3Ce5dvYjO',
  useCdn: false,
})