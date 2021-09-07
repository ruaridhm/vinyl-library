import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 10em;
  align-self: center;
  justify-self: center;
  padding: 1rem;
  margin: 1em;

  h3 {
    color: red;
  }
`;

const TestAccount = () => {
  return (
    <Container>
      <h3>Test Account</h3>
      <p>User: test@test.com</p>
      <p>Pass: password</p>
    </Container>
  );
};

export default TestAccount;
