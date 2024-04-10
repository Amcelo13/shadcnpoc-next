'use client'
import { ResponsiveCalendar } from '@nivo/calendar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
const data = [
    {
      "value": 186,
      "day": "2016-03-15"
    },
    {
      "value": 368,
      "day": "2015-06-16"
    },
    {
      "value": 326,
      "day": "2017-04-18"
    },
    {
      "value": 397,
      "day": "2016-08-25"
    },
    {
      "value": 394,
      "day": "2016-06-29"
    },
    {
      "value": 167,
      "day": "2015-10-17"
    },
    {
      "value": 279,
      "day": "2016-07-20"
    },
    {
      "value": 345,
      "day": "2015-04-15"
    },
    {
      "value": 108,
      "day": "2018-05-21"
    },
    {
      "value": 288,
      "day": "2015-11-07"
    },
    {
      "value": 58,
      "day": "2016-10-26"
    },
    {
      "value": 378,
      "day": "2017-09-05"
    },
    {
      "value": 100,
      "day": "2017-05-07"
    },
    {
      "value": 365,
      "day": "2018-04-12"
    },
    {
      "value": 79,
      "day": "2018-01-26"
    },
    {
      "value": 20,
      "day": "2018-06-26"
    },
    {
      "value": 116,
      "day": "2016-12-22"
    },
    {
      "value": 289,
      "day": "2017-02-28"
    }
]
const MyResponsiveCalendar = ({ data }: any) => {
    return <ResponsiveCalendar
        data={data}
        from="2015-03-01"
        to="2016-07-12"
        emptyColor="#eeeeee"
        colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        yearSpacing={40}
        monthBorderColor="#ffffff"
        dayBorderWidth={2}
        dayBorderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'row',
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: 'right-to-left'
            }
        ]}
    />
}

export const Calender = () => {
        return (
            <Card >
              <CardHeader>
              <CardTitle>Calender</CardTitle>
                <CardDescription>These are the numbers of this year</CardDescription>
              </CardHeader>
                <CardContent className='h-[300px]'>
                <MyResponsiveCalendar data={data} />
                </CardContent>
            </Card>
        )
}