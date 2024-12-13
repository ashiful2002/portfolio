import React from 'react';
import { Flex, Progress } from 'antd';
const Progressbar = () => (
  <Flex gap="small" vertical>
    
    <Progress
      percent={10}
      percentPosition={{
        align: 'center',
        type: 'inner',
      }}
      size={[300, 20]}
    />
    <Progress
      percent={50}
      percentPosition={{
        align: 'start',
        type: 'inner',
      }}
      size={[300, 20]}
      strokeColor="#B7EB8F"
    />
    <Progress
      percent={60}
      percentPosition={{
        align: 'end',
        type: 'inner',
      }}
      size={[300, 20]}
      strokeColor="#001342"
    />
    <Progress
      percent={100}
      percentPosition={{
        align: 'center',
        type: 'inner',
      }}
      size={[400, 20]}
    />
    <Progress
      percent={60}
      percentPosition={{
        align: 'start',
        type: 'outer',
      }}
    />
    <Progress
      percent={100}
      percentPosition={{
        align: 'start',
        type: 'outer',
      }}
    />
    <Progress
      percent={60}
      percentPosition={{
        align: 'center',
        type: 'outer',
      }}
      size="small"
    />
    <Progress
      percent={100}
      percentPosition={{
        align: 'center',
        type: 'outer',
      }}
    />
  </Flex>
);
export default Progressbar;


// import React from 'react';
// import { Flex, Progress, Slider, Typography } from 'antd';
// const Progressbar = () => {
//   const [stepsCount, setStepsCount] = React.useState(5);
//   const [stepsGap, setStepsGap] = React.useState(7);
//   return (
//     <>
//       <Typography.Title level={5}>Custom count:</Typography.Title>
//       <Slider min={2} max={10} value={stepsCount} onChange={setStepsCount} />
//       <Typography.Title level={5}>Custom gap:</Typography.Title>
//       <Slider step={4} min={0} max={40} value={stepsGap} onChange={setStepsGap} />
//       <Flex
//         wrap
//         gap="middle"
//         style={{
//           marginTop: 16,
//         }}
//       >
//         <Progress
//           type="dashboard"
//           steps={8}
//           percent={50}
//           trailColor="rgba(0, 0, 0, 0.06)"
//           strokeWidth={20}
//         />
//         <Progress
//           type="circle"
//           percent={100}
//           steps={{
//             count: stepsCount,
//             gap: stepsGap,
//           }}
//           trailColor="rgba(0, 0, 0, 0.06)"
//           strokeWidth={20}
//         />
//       </Flex>
//     </>
//   );
// };
// export default Progressbar;