import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const Login = (props) => {
  const {data = '', test = ''} = props;

  const [concac, setConcac] = useState(null);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://reqres.in/api/users?page=2',
    })
      .then((response) => {
        setConcac('test');
        console.log(response);
      })
      .catch((error) => {
        setConcac(error);
      });
  });

  return (
    <>
      <View>
        <Text>
          {data} - {test}
        </Text>
      </View>
    </>
  );
};

export default Login;
