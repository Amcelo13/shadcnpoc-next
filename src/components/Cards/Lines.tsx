'use client'


import { ResponsiveLine } from '@nivo/line'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const data = [
    {
        "id": "japan",
        "color": "hsl(184, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 274
            },
            {
                "x": "helicopter",
                "y": 211
            },
            {
                "x": "boat",
                "y": 277
            },
            {
                "x": "train",
                "y": 7
            },
            {
                "x": "subway",
                "y": 4
            },
            {
                "x": "bus",
                "y": 233
            },
            {
                "x": "car",
                "y": 30
            },
            {
                "x": "moto",
                "y": 98
            },
            {
                "x": "bicycle",
                "y": 2
            },
            {
                "x": "horse",
                "y": 120
            },
            {
                "x": "skateboard",
                "y": 132
            },
            {
                "x": "others",
                "y": 73
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(139, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 197
            },
            {
                "x": "helicopter",
                "y": 5
            },
            {
                "x": "boat",
                "y": 17
            },
            {
                "x": "train",
                "y": 83
            },
            {
                "x": "subway",
                "y": 291
            },
            {
                "x": "bus",
                "y": 64
            },
            {
                "x": "car",
                "y": 18
            },
            {
                "x": "moto",
                "y": 290
            },
            {
                "x": "bicycle",
                "y": 122
            },
            {
                "x": "horse",
                "y": 77
            },
            {
                "x": "skateboard",
                "y": 189
            },
            {
                "x": "others",
                "y": 290
            }
        ]
    },
    {
        "id": "us",
        "color": "hsl(71, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 166
            },
            {
                "x": "helicopter",
                "y": 219
            },
            {
                "x": "boat",
                "y": 182
            },
            {
                "x": "train",
                "y": 225
            },
            {
                "x": "subway",
                "y": 146
            },
            {
                "x": "bus",
                "y": 43
            },
            {
                "x": "car",
                "y": 154
            },
            {
                "x": "moto",
                "y": 259
            },
            {
                "x": "bicycle",
                "y": 188
            },
            {
                "x": "horse",
                "y": 36
            },
            {
                "x": "skateboard",
                "y": 198
            },
            {
                "x": "others",
                "y": 244
            }
        ]
    },
    {
        "id": "germany",
        "color": "hsl(146, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 249
            },
            {
                "x": "helicopter",
                "y": 82
            },
            {
                "x": "boat",
                "y": 190
            },
            {
                "x": "train",
                "y": 241
            },
            {
                "x": "subway",
                "y": 196
            },
            {
                "x": "bus",
                "y": 239
            },
            {
                "x": "car",
                "y": 45
            },
            {
                "x": "moto",
                "y": 81
            },
            {
                "x": "bicycle",
                "y": 220
            },
            {
                "x": "horse",
                "y": 206
            },
            {
                "x": "skateboard",
                "y": 112
            },
            {
                "x": "others",
                "y": 57
            }
        ]
    },
    {
        "id": "norway",
        "color": "hsl(80, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 14
            },
            {
                "x": "helicopter",
                "y": 174
            },
            {
                "x": "boat",
                "y": 113
            },
            {
                "x": "train",
                "y": 113
            },
            {
                "x": "subway",
                "y": 151
            },
            {
                "x": "bus",
                "y": 207
            },
            {
                "x": "car",
                "y": 240
            },
            {
                "x": "moto",
                "y": 224
            },
            {
                "x": "bicycle",
                "y": 65
            },
            {
                "x": "horse",
                "y": 172
            },
            {
                "x": "skateboard",
                "y": 192
            },
            {
                "x": "others",
                "y": 245
            }
        ]
    }
]

const MyResponsiveLine = ({ data }: any) => {
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export const Lines = () => {
    return (
        <Card >
            <CardHeader>
                <CardTitle>Lines</CardTitle>
                <CardDescription>These are the numbers of this year</CardDescription>
            </CardHeader>
            <CardContent className='h-[264px] flex items-center w-full'>
                <MyResponsiveLine data={data} />
            </CardContent>
        </Card>
    )
}
