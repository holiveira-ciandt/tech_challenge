/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import TbHeader from 'components/table/header';
import TbBody from 'components/table/body';
import MockData from 'api/mockData';
import { Songs } from 'types/songs';
import UseApiFetch from 'hooks/useApi';
import useWindows from 'hooks/useWindowSize';
import { TableContainer } from './styles';

interface PropsSongs {
  song: string;
  artist: string;
  songReleaseDate: string;
  metricA: number;
  metricB: number;
  metricC: number;
  metricD: number;
  metricE: number;
  metricF: number;
  metricG: number;
  metricH: number;
  metricI: number;
  metricJ: number;
  metricL: number;
  metricM: number;
  metricN: number;
  metricO: number;
  metricP: number;
}

const url =
  'https://l58tuf2ar5.execute-api.sa-east-1.amazonaws.com/default/get-object-json';

export const Table: React.FC = () => {
  const { width, height } = useWindows();
  console.log(width);
  const normalizeData = () =>
    MockData.map(item => ({
      Song: item.song,
      Artist: item.artist,
      Release: item.songReleaseDate,
      MetricA: item.metricA,
      MetricB: item.metricB,
      MetricC: item.metricC,
      MetricD: item.metricD,
      MetricE: item.metricE,
      MetricF: item.metricF,
      MetricG: item.metricG,
      MetricH: item.metricH,
      MetricI: item.metricI,
      MetricJ: item.metricJ,
      MetricL: item.metricL,
      MetricM: item.metricM,
      MetricN: item.metricN,
      MetricO: item.metricO,
      MetricP: item.metricP,
    }));

  const normalizeDa = (results: any[]) => {
    results.map((item: Songs) => ({
      Song: item.song,
      Artist: item.artist,
      Release: item.songReleaseDate,
      MetricA: item.metricA,
      MetricB: item.metricB,
      MetricC: item.metricC,
      MetricD: item.metricD,
      MetricE: item.metricE,
      MetricF: item.metricF,
      MetricG: item.metricG,
      MetricH: item.metricH,
      MetricI: item.metricI,
      MetricJ: item.metricJ,
      MetricL: item.metricL,
      MetricM: item.metricM,
      MetricN: item.metricN,
      MetricO: item.metricO,
      MetricP: item.metricP,
    }));
  };
  const [dataSet, setDataSet] = useState<any>([]);
  const [results, error] = UseApiFetch(url);

  const getHeader = () => Object.keys(normalizeData()[0]);

  useEffect(() => {
    if (results?.length) {
      setDataSet(normalizeDa(results));
    }
  }, [results, dataSet]);
  const getBody = () => {
    const data = results;
    const formatData = data
      ? data.map((item: PropsSongs) => [
          item.song,
          item.artist,
          item.songReleaseDate,
          item.metricA,
          item.metricB,
          item.metricC,
          item.metricD,
          item.metricE,
          item.metricF,
          item.metricG,
          item.metricH,
          item.metricI,
          item.metricJ,
          item.metricL,
          item.metricM,
          item.metricN,
          item.metricO,
          item.metricP,
        ])
      : [];
    return formatData;
  };
  return (
    <TableContainer width={width}>
      <thead>
        <TbHeader data={getHeader()} />
      </thead>
      <tbody>
        {results?.length &&
          getBody().map((item: any) => <TbBody data={item} />)}
      </tbody>
    </TableContainer>
  );
};

export default Table;
