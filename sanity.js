import {
    createCurrentUserHook,
    createClient,
} from "next-sanity"

import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    /**
     * Find your project ID and dataset in 'sanity.json' in your studio project.
     * These are considered public but you can use environment variables.
     * if you want differ between local dev or production.
     * 
     * 
     */
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",
    /**
     * setUseCdn to false if your application require the freshest possible data always.
     * Authenticated request will always bypass the CDN.
     */
    UseCdn: process.env.NODE_ENV === "production",
}

//Setup the client for fetching data in the getProps page function
export const sanityClient = createClient(config)

/**
 * set up a helper function for generating Images URL's with only the asset reference data in your documents.
 */
export const urlFor = (source) => createImageUrlBuilder(config).image(source)

//Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)