'use client';
const Shipping_Detail = () => {
  // auth----------
  const [userAuth, setUserAuth] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => user && setUserAuth(user));
  }, [userAuth]);

  // ----------------------------------------
  const [name, setName] = useState('');
  const {onfocus: name_focus, onblur: name_blur, emptyErr: name_EmptyErr} = useInputValidation({input: name});
  const nameFocus = () => name_focus(false);
  const nameBlur = () => name_blur(true);
  //   ------------------
  const [whatsappNum, setWhatsappNum] = useState('');
  const {
    onfocus: whatsapp_focus,
    onblur: whatsapp_blur,
    emptyErr: whatsapp_EmptyErr,
    countErr: whatsapp_counterErr,
  } = useInputValidation({input: whatsappNum, numCount: 10, type: 'number'});
  const whatsappFocus = () => whatsapp_focus(false);
  const whatsappBlur = () => whatsapp_blur(true);
  //   ------------------
  const [street, setStreet] = useState('');
  const {onfocus: street_focus, onblur: street_blur, emptyErr: street_EmptyErr} = useInputValidation({input: street});
  const streetFocus = () => street_focus(false);
  const streetBlur = () => street_blur(true);
  //   ------------------
  const [doorNo, setDoorNo] = useState('');
  const {onfocus: doorNo_focus, onblur: doorNo_blur, emptyErr: doorNo_EmptyErr} = useInputValidation({input: doorNo});
  const doorNoFocus = () => doorNo_focus(false);
  const doorNoBlur = () => doorNo_blur(true);
  //   ------------------
  const [landmark, setLandmark] = useState('');
  const {onfocus: landmark_focus, onblur: landmark_blur, emptyErr: landmark_EmptyErr} = useInputValidation({input: landmark});
  const landmarkFocus = () => landmark_focus(false);
  const landmarkBlur = () => landmark_blur(true);
  //   ------------------
  const [pincode, setPincode] = useState('');
  const {
    onfocus: pincode_focus,
    onblur: pincode_blur,
    emptyErr: pincode_EmptyErr,
    countErr: pincode_counterErr,
  } = useInputValidation({input: pincode, numCount: 6, type: 'number'});
  const pincodeFocus = () => pincode_focus(false);
  const pincodekBlur = () => pincode_blur(true);
  //   ------------------
  const [city, setCity] = useState('');
  const {onfocus: city_focus, onblur: city_blur, emptyErr: city_EmptyErr} = useInputValidation({input: city});
  const cityFocus = () => city_focus(false);
  const cityBlur = () => city_blur(true);
  const emptyField = !name || !whatsappNum || !street || !doorNo || !landmark || !pincode || !city;
  useEffect(() => {
    if (emptyField) setFillall(true);
    if (name && whatsappNum && street && doorNo && landmark && pincode) setFillall(false);
  }, [name, whatsappNum, street, doorNo, landmark, pincode, city]); // eslint-disable-line react-hooks/exhaustive-deps
  // submit --------------------------------------------
  const [fillAll, setFillall] = useState(false);
  //   -------------------------------
  const {uploadInput, uploadComplete} = useHttpWrite();
  const proceedCheckout = () => {
    if (emptyField) return;
    if (!userAuth) return navigate('/login');
    if (!userAuth.uid) return;
    const data = {
      name,
      whatsappNum,
      email: userAuth?.email,
      street,
      doorNo,
      landmark,
      pincode,
      city,
      // state: orderPrice?.state,
    };
    const baseUrl = `noava/users/${userAuth.uid}/shippingInfo`;
    uploadInput({
      dbUrlPath: baseUrl,
      inputData: data,
    });
  };

  // redirect after successfull submit
  const router = useRouter();
     useEffect(() => {
       if (!uploadComplete) return;
       router.push('/account/checkout');
     }, [uploadComplete]); // eslint-disable-line react-hooks/exhaustive-deps
  // ----------------------------------------

  return (
    <>
      {/* {isLoading && <Loading_spinner_ui />} */}
      {!userAuth && <Login_ui noRedirect={true} />}
      {userAuth && (
        <div className='py-2'>
          <div className='  bg-white text-black flex items-center justify-center py-3 rounded-lg mb-3'>
            <h1 className='text-lg font-medium'>Billing & Shipping</h1>
          </div>
          <main className='flex flex-col items-center justify-center bg-gray-50 mx-4'>
            {/* <div className="mt-10 bg-gray-50 rounded-xl px-4 pt-2 lg:mt-0 space-y-6 w-full lg:w-1/2"> */}
            <div className='bg-gray-50 rounded-xl px-4  lg:mt-0 space-y-6 lg:space-y-1 w-[90%] lg:w-full lg:grid lg:items-baseline lg:gap-2 lg:grid-cols-2'>
              <InputField_ui
                onChange={(e) => setName(e.target.value)}
                value={name}
                onFocus={nameFocus}
                onBlur={nameBlur}
                placeholder='Enter Name'
                label='Full Name'
                type='text'
                emptyErr={name_EmptyErr}
              />
              <InputField_ui
                onChange={(e) => setWhatsappNum(e.target.value)}
                value={whatsappNum}
                onFocus={whatsappFocus}
                onBlur={whatsappBlur}
                placeholder='Enter whatsapp number'
                label='Whatsapp Number'
                type='number'
                emptyErr={whatsapp_EmptyErr}
                countErr={whatsapp_counterErr}
                countErrMsg='* Enter 10 numbers'
              />
              {userAuth && (
                <InputField_ui
                  value={userAuth?.email}
                  placeholder='Enter email'
                  label='Email'
                  type='email'
                />
              )}
              <InputField_ui
                onChange={(e) => setStreet(e.target.value)}
                value={street}
                onFocus={streetFocus}
                onBlur={streetBlur}
                placeholder='Enter street - area - sector - village'
                label='Street / area /sectoe / village'
                type='text'
                emptyErr={street_EmptyErr}
              />
              <InputField_ui
                onChange={(e) => setDoorNo(e.target.value)}
                value={doorNo}
                onFocus={doorNoFocus}
                onBlur={doorNoBlur}
                placeholder='Enter door number - flat - company -apartment'
                label='Door Number / housing no / flat /company / apartment'
                type='text'
                emptyErr={doorNo_EmptyErr}
              />
              <InputField_ui
                onChange={(e) => setLandmark(e.target.value)}
                value={landmark}
                onFocus={landmarkFocus}
                onBlur={landmarkBlur}
                placeholder='Enter landmark'
                label='Land mark'
                type='text'
                emptyErr={landmark_EmptyErr}
              />
              <InputField_ui
                onChange={(e) => setPincode(e.target.value)}
                value={pincode}
                onFocus={pincodeFocus}
                onBlur={pincodekBlur}
                placeholder='Enter pincode'
                label='Pincode'
                type='number'
                emptyErr={pincode_EmptyErr}
                countErr={pincode_counterErr}
                countErrMsg='* Enter 6 numbers'
              />
              <InputField_ui
                onChange={(e) => setCity(e.target.value)}
                value={city}
                onFocus={cityFocus}
                onBlur={cityBlur}
                placeholder='Enter city - town'
                label='City / Town'
                type='text'
                emptyErr={city_EmptyErr}
              />
            </div>
            {fillAll && <label className='text-sm py-2 block text-red-500'>* please fill all the fields</label>}
            <div className='pb-4 text-start'>
              <button
                onClick={proceedCheckout}
                disabled={emptyField}
                className='disabled:opacity-50 mt-4 mb-4 rounded-full w-full bg-gray-900 px-6 py-3 font-medium text-white border border-black hover:bg-white hover:text-black'
              >
                Proceed checkout
              </button>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Shipping_Detail;
// -----------
// ui
import InputField_ui from '../../../common-components/5.orders/InputField_ui';
import Login_ui from '@/common-components/5.orders/Login_ui';
import Loading_spinner_ui from '../../../common-components/Loading_spinner_ui';

// react
import {useEffect, useState} from 'react';
// custom hook
import useInputValidation from '../../../custom-hook/useInputValidation';
import useHttpWrite from '@/custom-hook/use_http_write';
// firebase
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '@/config/firebase';
// router
import {useRouter} from 'next/navigation';
