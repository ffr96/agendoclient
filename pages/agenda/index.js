import React from 'react';
import dynamic from 'next/dynamic';
import { useUser } from '../../lib/useUser';

const DynamycAgenda = dynamic(
  () => import('./calendar'), {ssr: false},
);
function Agenda() {
  const {} = useUser({
    redirectTo: 'login'
  });
  return (
    <div style={{marginTop:'3rem'}}>
      <DynamycAgenda/>
    </div>
  );
}

export default Agenda;