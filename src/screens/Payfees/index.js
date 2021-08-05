import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useEffect, useState} from 'react';
import PayFeeComponent from '../../components/PayFee';
import feeInitiate from '../../context/actions/feeInitiate';
import paymentHistory from '../../context/actions/paymentHistory';
import {GlobalContext} from '../../context/Provider';
const PayFee = () => {
  const [paymentForm, setPaymentForm] = useState({});

  const {
    paymentDispatch,
    astraState: {
      feeInitiate: {loading, data, error},
      paymentHistory: {pHistoryLoading, pHistoryData, pHistoryError},
    },
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setPaymentForm({...paymentForm, [name]: value});
  };

  const onSubmit = () => {
    if (paymentForm.StudentID && paymentForm.amount) {
      feeInitiate(paymentForm)(paymentDispatch);
    } else {
      console.log('Not not not');
    }
    //  console.log(paymentForm);
  };

  useEffect(() => {
    getPaymentHistory();
  }, []);

  const getPaymentHistory = () => {
    paymentHistory(paymentDispatch);
  };

  return (
    <PayFeeComponent
      onSubmit={onSubmit}
      onChange={onChange}
      error={error}
      loading={loading}
      data={data}
      paymentForm={paymentForm}
      pHistoryLoading={pHistoryLoading}
      pHistoryData={pHistoryData}
      pHistoryError={pHistoryError}
    />
  );
};
export default PayFee;
