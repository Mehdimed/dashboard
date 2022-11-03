import { ResponsiveChoropleth } from '@nivo/geo'
import { GeographyData as data } from '../../db'
import { geoFeatures } from '../../dbgeo.js'
import { useOutletContext } from "react-router-dom";

export default function Map({ isDashboard }) {
  const darkMode = useOutletContext();
  return (
    <div className="h-[calc(100%-3rem)] p-12">
      <div className='h-full border-solid border-2 border-dark-firefox rounded-xl dark:border-gray-400 ease-in-out duration-500'>
      <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: `${darkMode ? '#ffffff' : '#1C1B22'}`,
            },
          },
          legend: {
            text: {
              fill: `${darkMode ? '#ffffff' : '#1C1B22'}`,
            },
          },
          ticks: {
            line: {
              stroke: `${darkMode ? '#ffffff' : '#1C1B22'}`,
              strokeWidth: 1,
            },
            text: {
              fill: `${darkMode ? '#ffffff' : '#1C1B22'}`,
            },
          },
        },
        tooltip: {
          container: {
            background: `${darkMode ? '#1C1B22' : '#ffffff'}`,
            color: `${darkMode ? '#ffffff' : '#1C1B22'}`,
          },
        },
        legends: {
          text: {
            fill: `${darkMode ? '#ffffff' : '#1C1B22'}`,
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor={`${darkMode ? '#ffffff' : '#1C1B22'}`}
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: `${darkMode ? '#ffffff' : '#1C1B22'}`,
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
    </div>
    </div>
  )
}
