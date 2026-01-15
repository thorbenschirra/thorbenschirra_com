import { BetaAnalyticsDataClient } from "@google-analytics/data"

const googlePropertyId = process.env.GOOGLE_PROPERTY_ID!;
const googleClientEmail = process.env.GOOGLE_CLIENT_EMAIL!;
const googlePrivateKey = process.env.GOOGLE_PRIVATE_KEY!;

if (!googleClientEmail || !googlePrivateKey) {
    throw new Error("GOOGLE CREDENTIALS could not be found");
}

const analyticsClient = new BetaAnalyticsDataClient({
    options: {
        credentials: {
            client_email: googleClientEmail,
            private_key: googlePrivateKey
        }
    }
});

export async function runReport() {
    try {
        const report = await analyticsClient.runReport({
            property: `properties/${googlePropertyId}`,
            dateRanges: [
                {
                    startDate: '2026-01-01',
                    endDate: '2026-01-15'
                }
            ],
            dimensions: [
                {
                  name: 'city',
                },
            ],
            metrics: [
                {
                    name: 'activeUsers'
                },
            ],
        })

        return {
            body: report,
            status: 200
        }
    } catch (error) {
        return {
            body: `an error occurred while fetching the analytics data: ${error}`,
            status: 500,
        }
    }
}