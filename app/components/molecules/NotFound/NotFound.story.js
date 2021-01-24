import React from 'react';
import { storiesOf } from '@storybook/react';
import NotFound from './index';

storiesOf('NotFound', module).add('NotFound', () => {
  return (
    <>
      <NotFound
        title="Performance & Accessibility cadence right from the start"
        isLeft="true"
        subtitle="Threshold driven development is just TDD (test-driven development) applied to performance testing"
      >
        <p>
          To enable that, you need to wrap your component that will be suspended, with the Suspense
          component.
        </p>
      </NotFound>
      <NotFound
        title="Lazy loading"
        isLeft="true"
        className="grey"
        subtitle="React Suspense allows you to suspend components rendering until a condition is met."
      >
        <p>
          To enable that, you need to wrap your component that will be suspended, with the Suspense
          component.
        </p>
      </NotFound>
    </>
  );
});
