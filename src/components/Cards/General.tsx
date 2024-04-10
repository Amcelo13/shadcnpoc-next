'use client'
import { ResponsiveBump } from '@nivo/bump'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const chartData = [
    {
        id: "Serie 1",
        data: [
            {
                x: 2000,
                y: 11
            },
            {
                x: 2001,
                y: 6
            },
            {
                x: 2002,
                y: 9
            },
            {
                x: 2003,
                y: 7
            },
            {
                x: 2004,
                y: 3
            }
        ]
    },
    {
        id: "Serie 2",
        data: [
            {
                x: 2000,
                y: 9
            },
            {
                x: 2001,
                y: 5
            },
            {
                x: 2002,
                y: 8
            },
            {
                x: 2003,
                y: 2
            },
            {
                x: 2004,
                y: 6
            }
        ]
    },
    {
        id: "Serie 3",
        data: [
            {
                x: 2000,
                y: 7
            },
            {
                x: 2001,
                y: 10
            },
            {
                x: 2002,
                y: 1
            },
            {
                x: 2003,
                y: 6
            },
            {
                x: 2004,
                y: 11
            }
        ]
    },
    {
        id: "Serie 4",
        data: [
            {
                x: 2000,
                y: 8
            },
            {
                x: 2001,
                y: 8
            },
            {
                x: 2002,
                y: 6
            },
            {
                x: 2003,
                y: 4
            },
            {
                x: 2004,
                y: 12
            }
        ]
    },
    {
        id: "Serie 5",
        data: [
            {
                x: 2000,
                y: 6
            },
            {
                x: 2001,
                y: 2
            },
            {
                x: 2002,
                y: 7
            },
            {
                x: 2003,
                y: 8
            },
            {
                x: 2004,
                y: 1
            }
        ]
    }
]

// yarn add @nivo/bump

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const MyResponsiveBump = ({ data }: any) => {
    if (!Array.isArray(data)) {
        console.error('Data must be an array');
        return null;
    }
    return <ResponsiveBump
        data={data}
        colors={{ scheme: 'spectral' }}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        activePointSize={16}
        inactivePointSize={0}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        activePointBorderWidth={3}
        pointBorderColor={{ from: 'serie.color' }}
        axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: -36,
            truncateTickAt: 0
        }}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'ranking',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0
        }}
        margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
        axisRight={null}
    />
}

export const General = () => {
    return (
        <Card className='w-full'>
            <CardHeader>
                <CardTitle>This week</CardTitle>
                <CardDescription>These are the results of this week</CardDescription>
            </CardHeader>
            <CardContent className='grid gap-4 h-[400px] w-full'>
                <MyResponsiveBump data={chartData} />
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}
