const Sidecover_ui = (props:any) => {
  const {noSidecover, deviceType} = props;
  // ----------
  //  data
  const cover_data =
    deviceType === 'phone'
      ? {
          title: 'Side cover',
          button1: 'side covered',
          button2: 'without sides',
        }
      : {
          title: 'Top & keyboard',
          button1: 'top & keyboard',
          button2: 'top only',
        };
  //  ---------------

  const [cover, setCover] = useState<boolean>(false);
  const addSide_cover = () => {
    if (!props.getSidecover_state) return;
    setCover(true);
    props.getSidecover_state(true);
  };
  //   --------
  const remove_sideCover = () => {
    if (!props.getSidecover_state) return;
    setCover(false);
    props.getSidecover_state(false);
  };

  // ---------------
  // mouse click events
  const [zoom1, setZoom1] = useState<boolean>(false);
  const mouseDown1 = () => setZoom1(true);
  const mouseUp1 = () => setZoom1(false);
  // -----
  const [zoom2, setZoom2] = useState<boolean>(false);
  const mouseDown2 = () => setZoom2(true);
  const mouseUp2 = () => setZoom2(false);
  // -------------
  // mobile touch events
  const touchStart1 = () => setZoom1(true);
  const touchEnd1 = () => setZoom1(false);
  // -----
  const touchStart2 = () => setZoom2(true);
  const touchEnd2 = () => setZoom2(false);
  //   -------------------------------
  return (
    <>
      {cover_data && (
        <section className='py-3'>
          <div className='text-black space-y-2'>
            <span className='text-gray-500 font-semibold'>{cover_data.title} :</span>
            {/* button */}
            <div className='space-x-1 text-sm '>
              {/* 1.with cover */}
              {noSidecover && (
                <div className='inline-block flex-col space-y-2 justify-center items-center'>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    //   src={cover_data.image1}
                    src={deviceType === 'phone' ? '/3.skins/sideCover.jpeg' : '/3.skins/topKeyboard.webp'}
                    alt='skins and wraps'
                    onMouseDown={mouseDown1}
                    onMouseUp={mouseUp1}
                    onTouchStart={touchStart1}
                    onTouchEnd={touchEnd1}
                    className={`w-[70px] border rounded-full mx-auto border-black ${zoom1 && 'scale-[2.5]'}`}
                  />
                  <button
                    onClick={addSide_cover}
                    className={`p-2 ${cover ? 'bg-black text-white' : 'bg-white'} border shadow border-black rounded-full`}
                  >
                    {cover_data.button1}
                  </button>
                </div>
              )}
              {/* 2.without cover */}
              <div className='inline-block flex-col space-y-2 justify-center items-center'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  // src={cover_data.image2}
                  src={deviceType === 'phone' ? '/3.skins/withoutSideCover.jpeg' : '/3.skins/top.webp'}
                  alt='skins and wraps'
                  onMouseDown={mouseDown2}
                  onMouseUp={mouseUp2}
                  onTouchStart={touchStart2}
                  onTouchEnd={touchEnd2}
                  className={`w-[70px] border rounded-full mx-auto border-black ${zoom2 && 'scale-[2.5]'}`}
                />
                <button
                  onClick={remove_sideCover}
                  className={`p-2 ${!cover ? 'bg-black text-white' : 'bg-white text-black'} rounded-full  border shadow border-black`}
                >
                  {cover_data.button2}
                </button>
              </div>
            </div>
            <span className='block text-sm py-1'>* click the img to zoom</span>
          </div>
        </section>
      )}
      {/* ------------------------ */}
    </>
  );
};

export default Sidecover_ui;
// ------------------------------
import React, {useState} from 'react';
