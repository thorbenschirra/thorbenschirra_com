"use server"

import { analyticsClient } from "../lib/clients/google";

export async function runReport() {

    const google = await analyticsClient();
    const propertyId = process.env.GOOGLE_PROPERTY_ID;

    if (!propertyId || propertyId === undefined) {
        return {
            body: "Google Property Id is missing",
            status: 404,
        }
    }

    console.log("Property ID: ", propertyId);

    try {
        const response = await google.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                  startDate: '2026-01-01',
                  endDate: 'today',
                },
              ],
              metrics: [
                {
                  name: 'totalUsers',
                },
              ],
        });

        const report = response;
        return {
            body: report,
            status: 200
        }
    } catch (error) {
        return {
            body: `runReport error: ${error}`,
            status: 500
        }
    }
}