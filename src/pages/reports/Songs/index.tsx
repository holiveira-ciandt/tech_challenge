import React from 'react';
import useApiFetch from 'hooks/useApi';
import Table from 'components/table';
import { NormalizeData } from 'types/tables';
import Settings from 'settings';

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
  ];
  return <>{results?.length && <Table headers={headers} values={results} />}</>;
};

export default SongReport;
