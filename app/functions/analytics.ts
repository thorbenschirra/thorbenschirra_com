"use server"

import { analyticsClient } from "../lib/clients/google";

export async function totalUsers(nDaysAgo: number | undefined) {

    const google = await analyticsClient();
    const propertyId = process.env.GOOGLE_PROPERTY_ID;

    if (!propertyId || propertyId === undefined) {
        return {
            body: "Google Property Id is missing",
            status: 404,
        }
    }

    if (nDaysAgo === undefined) {
        
    }

    try {
        const response = await google.runReport({
            property: `properties/${propertyId}`,
            dateRanges: [
                {
                  startDate: `${nDaysAgo}daysAgo`,
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