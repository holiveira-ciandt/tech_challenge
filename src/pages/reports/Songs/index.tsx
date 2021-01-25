import React from 'react';
import useApiFetch from 'hooks/useApi';
import Table from 'components/table';
import { NormalizeData } from 'types/tables';
import Settings from 'settings';
import { Songs } from 'types/songs';

const SongReport: React.FC = () => {
  const [results] = useApiFetch(Settings.endpointURL);

  const headers: NormalizeData[] = [
    { name: 'Song', key: 'song', isSortable: true },
    { name: 'Artist', key: 'artist', isSortable: true },
    {
      name: 'Release Date',
      key: 'songReleaseDate',
    },
    { name: 'MetricA', key: 'metricA' },
    { name: 'MetricB', key: 'metricB' },
    { name: 'MetricC', key: 'metricC' },
    { name: 'MetricD', key: 'metricD' },
    { name: 'MetricE', key: 'metricE' },
    { name: 'MetricF', key: 'metricF' },
    { name: 'MetricG', key: 'metricG' },
    { name: 'MetricH', key: 'metricH' },
    { name: 'MetricI', key: 'metricI' },
    { name: 'MetricJ', key: 'metricJ' },
    { name: 'MetricL', key: 'metricL' },
    { name: 'MetricM', key: 'metricM' },
    { name: 'MetricN', key: 'metricN' },
    { name: 'MetricO', key: 'metricO' },
    { name: 'MetricP', key: 'metricP' },
    { name: 'Play Count', key: 'playCount' },
  ];

  const filterResults = (data: Songs[]) =>
    data.map((item: Songs) => {
      const {
        song,
        artist,
        songReleaseDate,
        metricA,
        metricB,
        metricC,
        metricD,
        metricE,
        metricF,
        metricG,
        metricH,
        metricI,
        metricJ,
        metricK,
        metricL,
        metricM,
        metricN,
        metricO,
        metricP,
      } = item;
      return {
        song,
        artist,
        songReleaseDate,
        metricA,
        metricB,
        metricC,
        metricD,
        metricE,
        metricF,
        metricG,
        metricH,
        metricI,
        metricJ,
        metricK,
        metricL,
        metricM,
        metricN,
        metricO,
        metricP,
      } as Songs;
    });
  return (
    <>
      <div>
        {results?.length && (
          <Table headers={headers} values={filterResults(results)} />
        )}
      </div>
    </>
  );
};

export default SongReport;
