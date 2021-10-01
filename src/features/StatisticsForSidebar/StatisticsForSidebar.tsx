import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  CountryForSidebarState,
  getTotalData,
  state,
} from './statisticsForSidebarSlice';
import { Skeleton, Title, TitleItem, Wrapper } from './Styled';
import { formatNumberWithCommas, addPercentage } from '../../helpers/formats';

const StatisticsForSidebar = () => {
  const dispatch = useAppDispatch();

  const fullState = useAppSelector(state);

  const { data, isLoading, error }: CountryForSidebarState = fullState;

  const { confirmed, deaths, active_diff, fatality_rate } = data;

  useEffect(() => {
    dispatch(getTotalData('reports/total?date=2021-09-28&iso=USA'));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (error) {
    return (
      <Wrapper>
        <Title>We can not access the information at this time, try later</Title>
      </Wrapper>
    );
  }

  if (isLoading) {
    return (
      <Wrapper>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>
        Confirmed:
        <TitleItem>{formatNumberWithCommas(confirmed)}</TitleItem>
      </Title>
      <Title>
        Deaths:
        <TitleItem>{formatNumberWithCommas(deaths)}</TitleItem>
      </Title>
      <Title>
        Active Cases:
        <TitleItem>{formatNumberWithCommas(active_diff)}</TitleItem>
      </Title>
      <Title>
        Fatality Rate:
        <TitleItem>{addPercentage(fatality_rate)}</TitleItem>
      </Title>
    </Wrapper>
  );
};

export default StatisticsForSidebar;
