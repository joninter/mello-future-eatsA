import React from "react";
import styled from "styled-components";

const Retangle = styled.div`
  width: 328px;
  height: 216px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
`;

const Title = styled.div`
  width: 360px;
  height: 42px;
`;

const TextTitle = styled.text`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
`;

const Selector = styled.select`
  width: 296px;
  height: 56px;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
`;

const Adicionar = styled.button`
  width: 183px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: right;
  color: #5cb646;
`;

const ConfiguracaoCard = () => {
  return (
    <Retangle>
      <Title>
        <TextTitle>Selecione a quantidade desejada</TextTitle>
        <Selector>
          <option>0</option>
        </Selector>
        <Adicionar>Adicionar ao Carrinho</Adicionar>
      </Title>
    </Retangle>
  );
};

export default ConfiguracaoCard;
