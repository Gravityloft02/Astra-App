import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import colors from '../../assets/theme/colors';
import {PAYFEES} from '../../constants/routeNames';
import Card from '../common/card';
import CustomButton from '../common/CustomButton';
import Icon from '../common/Icons';
import Message from '../common/Message';
import styles from './styles';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import feeVerify, {clearPayVerifyState} from '../../context/actions/feeVerify';
import {GlobalContext} from '../../context/Provider';
import logoutUser from '../../context/actions/logoutUser';
import {SafeAreaView} from 'react-native-safe-area-context';
import moment from 'moment';
import {clearPayIniState} from '../../context/actions/feeInitiate';
import {useFocusEffect} from '@react-navigation/native';
import paymentHistory from '../../context/actions/paymentHistory';
import CustomProgressBar from '../common/CustomProgressBar';

const PayFeeComponent = ({
  error,
  paymentForm,
  data,
  loading,
  onChange,
  onSubmit,
  pHistoryLoading,
  pHistoryData,
  pHistoryError,
}) => {
  const {setOptions, toggleDrawer, navigate} = useNavigation();
  const [totalFee, settotalFee] = useState('0');
  const [totalFee2, settotalFee2] = useState('0');
  const [feePaid, setfeePaid] = useState('0');
  const [feeRemain, setfeeRemain] = useState('0');
  const [studentId, setstudentId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [payAmount, setPayAmount] = useState('');
  const [parentName, setParentName] = useState('');
  const {authDispatch} = useContext(GlobalContext);

  useEffect(() => {
    displayData();
    return () => {
      settotalFee({});
      settotalFee2({});
      setfeePaid({});
      setfeeRemain({});
      setstudentId({});
      setDueDate({});
      setPayAmount({});
    };
  }, [pHistoryData, pHistoryError]);

  const displayData = async () => {
    try {
      let user = await AsyncStorage.getItem('student');
      let detail = JSON.parse(user);

      if (user) {
        if (detail) {
          onChange({name: 'StudentID', value: detail.StudentID});
          setstudentId(detail.StudentID);
          setParentName(detail.ParentName);
          setDueDate(detail.DueDate);
        }
      }

      if (pHistoryData) {
        const {AmountPaid, FeeAmount} = pHistoryData.Data;

        settotalFee('Rs ' + FeeAmount);
        settotalFee2(FeeAmount);
        setfeePaid('Rs ' + AmountPaid);
        setfeeRemain('Rs ' + Number(FeeAmount - AmountPaid));
      } else {
        if (detail) {
          onChange({name: 'StudentID', value: detail.StudentID});
          setstudentId(detail.StudentID);
          setParentName(detail.ParentName);
          setDueDate(detail.DueDate);

          settotalFee('Rs ' + detail.FeeAmount);
          settotalFee2(detail.FeeAmount);
          setfeePaid('Rs ' + detail.AmountPaid);
          setfeeRemain('Rs ' + Number(detail.FeeAmount - detail.AmountPaid));
        }
      }
    } catch (error) {
      console.log('Payfee Comp: ' + error);
    }
  };

  const ListEmptyComponent = () => {
    return (
      <Card style={styles.cardgray}>
        <Message info message="No Records to show." />
      </Card>
    );
  };

  const {
    paymentDispatch,
    astraState: {
      feeVerify: {verifyLoading, verifyData, verifyError},
    },
  } = useContext(GlobalContext);

  useFocusEffect(
    useCallback(() => {
      verifyAmountDisplay();
    }, [verifyData, verifyError, feeRemain]),
  );

  const verifyAmountDisplay = () => {
    if (verifyData) {
      const {PayemntStatus, TransactionID, AmountPaid, TotalFeePaid} =
        verifyData.Data;

      if (PayemntStatus === 'Success') {
        setfeePaid('Rs ' + Number(TotalFeePaid + AmountPaid));
        const totalPaidAmount = Number(TotalFeePaid + AmountPaid);
        setfeeRemain('Rs ' + Number(totalFee2 - totalPaidAmount));
        alert(`Payment Status ${PayemntStatus}!`);
      }
      paymentHistory(paymentDispatch);
      clearPayVerifyState(paymentDispatch);
    } else {
      if (verifyError) {
        const {PayemntStatus, TransactionID, AmountPaid, TotalFeePaid} =
          verifyError.Data;
        alert(`Status is ${PayemntStatus}!`);
        paymentHistory(paymentDispatch);
        clearPayVerifyState(paymentDispatch);
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      payFee();
    }, [data, error]),
  );

  const payFee = () => {
    if (data) {
      const {PaymentID, RazorPayKeyID, AppLogo, RazorPayOrderID} = data.Data;

      console.log('amount: ' + payAmount);
      console.log('RazorpayKeyId: ' + RazorPayKeyID);
      console.log('RazorPayOrderID: ' + RazorPayOrderID);

      console.log(AppLogo);
      var options = {
        description: 'Online Payment',
        image: AppLogo,
        currency: 'INR',
        key: RazorPayKeyID,
        amount: payAmount * 100,
        name: 'ASTRA',
        // order_id: RazorPayOrderID, //Replace this with an order_id created using Orders API.
        prefill: {
          email: 'noreply@example.in',
          contact: '',
          name: parentName,
        },
        theme: {color: '#121212'},
      };
      RazorpayCheckout.open(options)
        .then(data => {
          // handle success
          console.log(
            `Success Razorpay PaymentId: ${data.razorpay_payment_id}`,
          );
          // console.log(data);
          feeVerify(PaymentID, data.razorpay_payment_id)(paymentDispatch);
          clearPayIniState(paymentDispatch);
        })
        .catch(error => {
          // handle failure
          // alert(`Error: ${error.code} | ${error.description}`);\
          clearPayIniState(paymentDispatch);
          console.log(error);
          console.log(`Error: ${error.code} | ${error.description}`);
        });
    } else {
      clearPayIniState(paymentDispatch);
      if (error) {
        const {ResponseCode} = error;

        if (ResponseCode === 403) {
          alert('Your session has expired');
          logoutUser()(authDispatch);
        }
      }
    }
  };

  const keyExtractor = (item, index) => item.PaymentID.toString();

  const renderItem = ({item, index}) => {
    if (item != null) {
      const {Amount, PaymentDate, Status} = item;

      return (
        <View>
          <TouchableOpacity
            style={{
              marginTop: 10,
              marginBottom: 0,
              marginRight: 20,
              flexDirection: 'row',
            }}>
            <Card style={styles.cardgray2}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    {fontSize: 13, fontWeight: 'bold'},
                    {color: colors.white},
                  ]}>
                  {moment(PaymentDate).format('MMMM DD')}
                </Text>

                <Text style={[{fontSize: 15}, {color: colors.white}]}>
                  {`INR ${Amount}`}
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  justifyContent: 'flex-start',
                  flex: 1,
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Text style={styles.btnDownload}>Download</Text>
              </TouchableOpacity>
            </Card>
          </TouchableOpacity>

          <View
            style={{
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              alignSelf: 'flex-end',
              position: 'absolute',
            }}>
            <View
              style={{
                backgroundColor: colors.organce,
                borderRadius: 10,
                height: 50,
                width: 50,
                borderRadius: 50 / 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.paidText}>{Status}</Text>
            </View>
          </View>
        </View>
      );
    }
  };

  useEffect(() => {
    setOptions({
      title: PAYFEES,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon
            style={{padding: 10}}
            size={25}
            name="menu"
            type="materialIcon"
            color={colors.white}></Icon>
        </TouchableOpacity>
      ),

      headerRight: () => (
        <View style={styles.notifAlign}>
          <TouchableOpacity>
            <Icon
              type="MaterialCommunityIcons"
              name="bell-ring-outline"
              color={colors.white}
              size={25}
              style={{padding: 10}}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  console.log(totalFee);

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        {loading || pHistoryLoading ? (
          <CustomProgressBar />
        ) : (
          <FlatList
            style={styles.wrapper}
            ListHeaderComponent={
              <>
                <View
                  style={{
                    flexDirection: 'column',
                    alignSelf: 'center',
                  }}>
                  <Image
                    height={5}
                    width={5}
                    source={require('../../assets/images/profileimg.jpg')}
                    style={styles.userImage}
                  />

                  <Text style={styles.userText}>{parentName}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  {/* Start Total Fee */}
                  <View
                    style={{
                      flexDirection: 'column',
                      width: '33.33%',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.totalFee}>Total fee</Text>
                    <Text style={styles.totalFee}>{`${totalFee}`}</Text>
                  </View>
                  {/* End Total Fee */}

                  {/* Start Fee */}
                  <View
                    style={{
                      flexDirection: 'column',
                      width: '33.33%',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.paidFee}>Fee paid</Text>
                    <Text style={styles.paidFee}>{`${feePaid}`}</Text>
                  </View>
                  {/* End Fee */}

                  {/* Start Remaining Fee */}
                  <View
                    style={{
                      flexDirection: 'column',
                      width: '33.33%',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.remainingFee}>Remaining fee</Text>
                    <Text style={styles.remainingFee}>{`${feeRemain}`}</Text>
                  </View>
                  {/* End Remaining Fee */}
                </View>

                <Card style={styles.cardred}>
                  <View
                    style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      paddingLeft: 5,
                    }}>
                    <Text
                      style={[styles.announcementMonth, {color: colors.white}]}>
                      {dueDate === '' ? '' : moment(dueDate).format('MMM')}
                    </Text>
                    <Text
                      style={[styles.announcementDate, {color: colors.white}]}>
                      {dueDate === '' ? '' : moment(dueDate).format('DD')}
                    </Text>
                  </View>
                  <Text
                    style={[styles.announcementMessage, {color: colors.white}]}>
                    Next Due Amount {`${feeRemain}`}
                  </Text>
                </Card>

                <Text style={styles.titleText}>Pay Fee</Text>

                <Card style={styles.cardgray}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      alignContent: 'flex-start',
                      justifyContent: 'flex-start',
                      width: '100%',
                    }}>
                    <Text
                      style={[
                        styles.totalFee,
                        {color: colors.white},
                        {width: '10%'},
                      ]}>
                      Rs
                    </Text>

                    <TextInput
                      style={styles.cardligtgray}
                      keyboardType="default"
                      keyboardType="numeric"
                      value={paymentForm.amount || null}
                      onChangeText={value => {
                        onChange({name: 'amount', value});
                        setPayAmount(value);
                      }}
                      width={'70%'}
                    />

                    <CustomButton
                      style={[styles.btnPay, {width: '40%'}]}
                      primary
                      title="PAY"
                      color={colors.white}
                      onPress={onSubmit}
                    />
                  </View>

                  <View style={styles.backgroundLine}></View>
                  <Text style={[styles.totalFee, {color: colors.white}]}>
                    Invoice will be processed within 24 hours
                  </Text>
                </Card>

                <Text style={styles.titleText}>Previous Payments</Text>
              </>
            }
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            data={
              pHistoryData
                ? pHistoryData.Data.PaymentData.StudentPayment
                : ListEmptyComponent
            }
            ListEmptyComponent={ListEmptyComponent}
          />
        )}
      </SafeAreaView>
    </>
  );
};
export default PayFeeComponent;
