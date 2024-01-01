import CombineHeader from './CombineHeader';
import PcHeader from './1.pc/2.PcHeader';
// ---------------------------------------
const RootHeader = () => {
  return (
    <CombineHeader>
      <PcHeader />
    </CombineHeader>
  );
};

export default RootHeader;
