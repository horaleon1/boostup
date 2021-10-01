import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  getData,
  componentState,
  IHistogramState,
  getLabels,
  getPositiveCases,
  getDeaths,
} from './histogramSlice';
import { Loader, LoaderWrapper, Title, Wrapper } from './styled';

const Histogram = () => {
  const dispatch = useAppDispatch();
  const fullState: IHistogramState = useAppSelector(componentState);

  const {
    data,
    deaths,
    error,
    isLoading,
    labels,
    positiveCases,
    selectedState,
  } = fullState;

  useEffect(() => {
    dispatch(getData('reports?date=2021-09-29&iso=USA&region_name=US'));
  }, []);

  useEffect(() => {
    const orderedData = [...data].sort((a, b) => b.confirmed - a.confirmed);

    dispatch(getLabels(orderedData));
    dispatch(getPositiveCases(orderedData));
    dispatch(getDeaths(orderedData));
  }, [data, selectedState]);

  if (error) {
    return (
      <Wrapper>
        <Title>We can not access the information at this time, try later</Title>
      </Wrapper>
    );
  }

  if (isLoading) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    );
  }

  return (
    <Wrapper>
      <Bar
        height={300}
        width={500}
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Positive Cases',
              data: positiveCases,
              backgroundColor: ['rgba(27, 152, 224, 0.2)'],
              borderColor: ['rgba(27, 152, 224, 0.2)'],
              borderWidth: 1,
            },
            {
              type: 'line',
              label: 'Death',
              data: deaths,
              backgroundColor: 'rgb(0, 100, 148)',
              borderColor: 'rgb(0, 100, 148)',
              borderWidth: 2,
              fill: false,
            },
          ],
        }}
      />
    </Wrapper>
  );
};

export default Histogram;
