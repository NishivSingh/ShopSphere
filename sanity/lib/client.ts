import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sk4gmsF6JMu7OBLr03ccd2s9h1l2OaFSbx1xzRloOPEfwywUYraJljrHZtdbLOyHSCqnfaDhe5d13IePjIEmeHhtR66QzuHZ5keJVr1LT6fBJQgSdADh0J7ak06sGFdTc7vBqb79V5Yp1dzTc8YlsEPcivmpgeiAehIjySqGpyl1tcAsoYfe",
})
