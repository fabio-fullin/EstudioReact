import React, { type ReactNode } from 'react'


interface MiComponenteProps {
    param1: string;
    children: React.ReactNode;
}


//aca pasando los parametros descontruidos
// const MiComponente: React.FC<MiComponenteProps> = ({ 
//   param1,
//   children
// }) => {
//   return (
//     <div>
//       <h1>{param1}</h1>
//       <h2>{children}</h2>
//     </div>
//   );
// };

// export default MiComponente

//aca pasando todo en un objeto
const MiComponente: React.FC<MiComponenteProps> = (props) => {
  return (
    <div>
      <h1>{props.param1}</h1>
      <h2>{props.children}</h2>
    </div>
  );
};

export default MiComponente