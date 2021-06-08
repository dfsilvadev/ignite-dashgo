import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
    shared: true,
    followCursor: true,
    custom: undefined,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      highlightDataSeries: true,
    },
    x: {
      show: false,
    },
    y: {
      formatter: undefined,
      title: {
        formatter: (seriesName) => "Inscritos",
      },
    },
  },
  markers: {
    size: 0,
    colors: [theme.colors.pink[500]],
    strokeColors: theme.colors.pink[900],
    strokeWidth: 2,
    fillOpacity: 1,
    radius: 2,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 4,
    },
  },
  xaxis: {
    type: "datetime" as any,
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-03-18T00:00:00.000Z",
      "2021-03-19T00:00:00.000Z",
      "2021-03-20T00:00:00.000Z",
      "2021-03-21T00:00:00.000Z",
      "2021-03-22T00:00:00.000Z",
      "2021-03-23T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      shadeIntensity: 1,
      opacityFrom: 0.9,
      opacityTo: 0.3,
      stops: [0, 90, 100],
    },
    colors: [theme.colors.pink[500]],
  },
  stroke: {
    show: true,
    colors: [theme.colors.pink[500]],
    width: 2,
    dashArray: 0,
  },
};

const series = [{ name: "series1", data: [31, 120, 10, 28, 61, 109] }];

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | dashgo.</title>
      </Head>
      <Flex direction="column" height="100vh">
        <Header />
        <Flex
          width="100%"
          marginY="6"
          maxWidth={1480}
          marginX="auto"
          paddingX="6"
        >
          <Sidebar />
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <Box p={["4", "8"]} background="gray.800" borderRadius={8} pb="4">
              <Text fontSize="lg" marginBottom="4">
                Inscritos da semana
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
            <Box p={["4", "8"]} background="gray.800" borderRadius={8}>
              <Text fontSize="lg" marginBottom="4">
                Taxa de abertura
              </Text>
              <Chart
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
