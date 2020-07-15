import React from "react";
import styled from "styled-components";
import modeloAlimento from "../../assets/modelos/alimentos.PNG";

const View = styled.div`
  display: flex;
  width: 26%;
  height: 145px;
  border: 1px solid grey;
  border-radius: 8px;
  margin: 10px;
  // new
  width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: 30%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const ContainerTop = styled.div`
  width: 100%;
  height: 36%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* background-color: blue; */
`;
const ContainerDown = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: green; */
  width: 100%;
  height: 30%;

  align-items: flex-end;
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  width: 70%;
  height: 140px;
  padding-left: 20px;
  padding-top: 20px;
`;

const Titulo = styled.div`
  width: 167px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;
const Descricao = styled.div``;
const Preco = styled.div`
  margin-bottom: 20px;
  width: 118px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;
const Adicionar = styled.button`
  width: 110px;
  height: 38px;
  border-radius: 8px;
  border: solid 1px #5cb646;
  background-color: white;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`;

const Alimento = () => {
  return (
    <span>
      <View>
        <Image src="https://picsum.photos/500/700"></Image>
        <Conteudo>
          <ContainerTop>
            <Titulo>Bullger</Titulo>
            <Descricao>Pão, carne, queijo</Descricao>
          </ContainerTop>
          <ContainerDown>
            <Preco>R$20,00</Preco>
            <Adicionar>adicionar</Adicionar>
          </ContainerDown>
        </Conteudo>
      </View>
      <img src={modeloAlimento} />
    </span>
  );
};

export default Alimento;
