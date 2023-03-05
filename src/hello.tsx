import React, { FC } from 'react';
// @ts-ignore
import data from 'raw-loader!./data.txt'
type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div>
    <h1>Hello React</h1>
    <div>{data}</div>
  </div>;
}
