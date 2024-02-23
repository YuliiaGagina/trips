import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #4798b0;
  color: white;
  cursor: pointer;
`;
