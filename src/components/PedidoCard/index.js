import React from "react";
import styled from "styled-components";
import { Container } from "./styles";

const Retangle = styled.div`
  width: 360px;
  height: 118px;
  background-color: #5cb646;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Titulo = styled.div`
  width: 256px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #ffffff;
`;

const Endereco = styled.div`
  width: 256px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

const Total = styled.div`
  width: 256px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

const PedidoCard = () => {
  return (
    <Container>
      <img
        src="img/clock.png"
        srcset="img/clock@2x.png 2x,
             img/clock@3x.png 3x"
        class="clock"
      />
      <img src="img/clock.svg" class="clock" />
      <Retangle>
        <Titulo>Pedido em andamento</Titulo>
        <Endereco>Bullguer Vila Madalena</Endereco>
        <Total>SUBTOTAL R$67,00</Total>
      </Retangle>
    </Container>
  );
};

export default PedidoCard;
