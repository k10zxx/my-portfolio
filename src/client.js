import sanityClient from '@sanity/client'

export default sanityClient({
    projectId: "lojjmclw",
    dataset: "production",
    useCdn: true
})