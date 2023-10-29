import { FC } from 'react';
import { PageHeader } from '../../complex/PageHeader/PageHeader';
import { PageWrapper } from '../../complex/PageWrapper/PageWrapper';

const LessonList: FC = () => {
  return (
    <PageWrapper>
      <PageHeader title="Занятия" />
    </PageWrapper>
  );
};

export { LessonList };
