import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set true for production
})
