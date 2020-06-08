import React from 'react';

import Header from './../../components/Header';
import ListOperacao from './../../components/ListOperacao';
import Simulacao from './../../components/Simulacao';

import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";

import './styles.css'


function Atendimento() {

  const operacoes = [
    {
      id: 1,
      data: '12/11/2010',
      valor: '10.000,00',
      status: 'Vigente',
    },
    {
      id: 2,
      data: '12/10/2011',
      valor: '20.000,00',
      status: 'Realizada'
    }
  ];

  
  return (
    <>
        <Header />
        <Container className="atendimento" fluid>
          <Row>
           
            <Col className="info" xl="8">
              <Card className="bg-white shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="12">
                      <h3 className="mb-0">Informaçoes</h3>
                    </Col>
                    
                  </Row>
                </CardHeader>
                <CardBody>
               
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                        <h6 className="heading-small text-muted mb-4">
                          Saldo de empréstimos e aplicações 
                        </h6>
                        <p>R$ 500.000</p>
                        </Col>
                        <Col lg="6">
                        <h6 className="heading-small text-muted mb-4">
                          Limites de crédito disponíveis
                        </h6>
                        <p>R$ 1.000.000,00</p>
                        </Col>
                      </Row>
                      <Row>
                      <Col lg="12">
                          <h6 className="heading-small text-muted mb-4">
                            Dados Pessoais
                          </h6>
                        </Col>
                        <Col lg="6">
                        
                        <p><b>CPF</b>: 03039392911</p>
                        <p><b>Nome</b>: Jose Lorem Ipisum</p>
                        <p><b>Nascimento</b>: Brasilía</p>
                        
                        </Col>
                        <Col lg="6">

                        <p><b>Renda Mensal:</b>: R$10.000,00</p>
                        <p><b>Data Nascimento</b>: 11/12/1990</p>

                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
             
                    <Simulacao />
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">Informaçoes de Impedimentos</h6>

                      <div className="pl-lg-4">       
                          <p>Taxa média prevista pelo Banco Central do Brasil. A contratação do empréstimo está sujeita à análise de crédito.</p>
                      </div>

                    <hr className="my-4" />
                    <Row>
                      <Col lg="12">
                        <h6 className="heading-small text-muted mb-4">
                          Simulação de empréstimo/aplicações
                        </h6>
                        <ListOperacao operacoes={operacoes} />
                      </Col>
                    </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default Atendimento;